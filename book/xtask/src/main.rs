use clap::{Parser, Subcommand};
use std::path::PathBuf;
use std::process::Command;

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
            build_books()?;
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

fn clean_build_dir() -> Result<()> {
    let build_dir = PathBuf::from("build");

    if build_dir.exists() {
        std::fs::remove_dir_all(&build_dir)?;
        println!("Cleaned build directory");
    }

    Ok(())
}
