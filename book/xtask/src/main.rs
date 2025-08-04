use clap::{Parser, Subcommand};
use std::path::PathBuf;
use std::process::Command;
use toml;
use walkdir::{DirEntry, WalkDir};

type Result<T> = std::result::Result<T, Box<dyn std::error::Error>>;

#[derive(Parser)]
#[command(name = "xtask")]
#[command(about = "Build and development tasks for the book server")]
struct Cli {
    #[command(subcommand)]
    command: Commands,
}

#[derive(Subcommand)]
enum Commands {
    Build {
        #[arg(short, long)]
        clean: bool,
    },
}

fn main() -> Result<()> {
    let cli = Cli::parse();

    match cli.command {
        Commands::Build { clean } => {
            if clean {
                clean_build_dir()?;
            }
            build_books_new(clean)?;
        }
    }

    Ok(())
}

fn build_books() -> Result<()> {
    let books_dir = PathBuf::from("books");
    let build_dir = PathBuf::from("build");

    std::fs::create_dir_all(&build_dir)?;

    for entry in std::fs::read_dir(&books_dir)? {
        let entry = entry?;
        let book_name = entry.file_name();
        let book_path = entry.path();

        if book_path.is_dir() {
            println!("Building book: {}", book_name.to_string_lossy());

            let output_path = std::env::current_dir()?.join(&build_dir).join(&book_name);
            let status = Command::new("mdbook")
                .arg("build")
                .arg("--dest-dir")
                .arg(output_path)
                .current_dir(&book_path)
                .status()
                .map_err(|e| format!("Failed to run mdbook: {}", e))?;

            if status.success() {
                println!("✓ Built {}", book_name.to_string_lossy());
            } else {
                return Err(format!("Failed to build {}", book_name.to_string_lossy()).into());
            }
        }
    }

    println!("All books built successfully!");
    Ok(())
}

fn build_books_new(clean: bool) -> Result<()> {
    let books_dir = PathBuf::from("books");
    let build_dir = PathBuf::from("build");

    fn is_hidden(entry: &DirEntry) -> bool {
        entry
            .file_name()
            .to_str()
            .map(|s| s.starts_with("."))
            .unwrap_or(false)
    }

    fn is_book(entry: &DirEntry) -> bool {
        entry
            .file_name()
            .to_str()
            .map(|s| s == "book.toml")
            .unwrap_or(false)
    }

    std::fs::create_dir_all(&build_dir)?;

    let walker = WalkDir::new(books_dir).into_iter();
    for entry in walker
        .filter_entry(|e| !is_hidden(e))
        .filter_map(|e| e.ok())
        .filter(|e| is_book(e))
    {
        let book_toml_path = entry.path();
        let book_dir = book_toml_path.parent().unwrap();

        let book_toml_content = std::fs::read_to_string(book_toml_path)?;
        let book_config: toml::Value = toml::from_str(&book_toml_content)?;

        let book_id = book_config
            .get("book")
            .and_then(|book| book.get("id"))
            .and_then(|id| id.as_str())
            .ok_or("Missing book.id in book.toml")?;

        println!("Building book: {}", book_id);

        let output_path = std::env::current_dir()?.join(&build_dir).join(book_id);

        if clean && output_path.exists() {
            std::fs::remove_dir_all(&output_path)?;
        }

        let status = Command::new("mdbook")
            .arg("build")
            .arg("--dest-dir")
            .arg(&output_path)
            .current_dir(book_dir)
            .status()
            .map_err(|e| format!("Failed to run mdbook: {}", e))?;

        if status.success() {
            println!("✓ Built {} at {}", book_id, output_path.display());
        } else {
            return Err(format!("Failed to build {}", book_id).into());
        }
    }

    println!("All books built successfully!");
    Ok(())
}

fn clean_build_dir() -> Result<()> {
    let build_dir = PathBuf::from("build");

    if build_dir.exists() {
        std::fs::remove_dir_all(&build_dir)?;
        println!("Cleaned build directory");
    }

    Ok(())
}
