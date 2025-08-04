FROM rust:1.75 as book-builder
RUN cargo install mdbook
WORKDIR /app
COPY . /app/books
RUN find /app/books -name "book.toml" -execdir mdbook build \;

FROM golang:1.21-alpine as go-builder
WORKDIR /app
COPY . .
COPY --from=book-builder /app/books ./books
RUN go mod download
RUN go build -o server .

FROM alpine:latest
RUN apk --no-cache add ca-certificates
WORKDIR /root/
COPY --from=go-builder /app/server .
COPY --from=book-builder /app/books ./books
EXPOSE 4026
CMD ["./server"]
