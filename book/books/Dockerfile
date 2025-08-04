FROM rust:1.75

RUN cargo install mdbook

WORKDIR /app
COPY . /app/books

# Build all books automatically
RUN find /app/books -name "book.toml" -execdir mdbook build \;

# The built books are now in /app/books/*/book/
