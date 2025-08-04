use clap::{Parser, Subcommand};
use std::path::PathBuf;
use std::process::Command;

#[derive(Parser)]
#[command(name = "xtask")]
#[command(about = "Build and development tasks for the book server")]
struct Cli {
    #[command(subcommand)]
    command: Commands,
}

#[derive(Subcommand)]
enum Commands {
    /// Build all books
    Build {
        /// Clean build directory before building
        #[arg(short, long)]
        clean: bool,
    },
}

fn main() -> Result<(), Box<dyn std::error::Error>> {
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

fn build_books() -> Result<(), Box<dyn std::error::Error>> {
    let books_dir = PathBuf::from("books");
    let build_dir = PathBuf::from("build");

    std::fs::create_dir_all(&build_dir)?;

    for entry in std::fs::read_dir(&books_dir)? {
        let entry = entry?;
        let book_name = entry.file_name();
        let book_path = entry.path();

        if book_path.is_dir() {
            println!("Building book: {}", book_name.to_string_lossy());

            // Build with mdbook
            let status = Command::new("mdbook")
                .arg("build")
                .arg("--dest-dir")
                .arg(format!("../build/{}", book_name.to_string_lossy()))
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

fn clean_build_dir() -> Result<(), Box<dyn std::error::Error>> {
    let build_dir = PathBuf::from("build");

    if build_dir.exists() {
        std::fs::remove_dir_all(&build_dir)?;
        println!("Cleaned build directory");
    }

    Ok(())
}
