FROM rust:1.88-alpine as book-builder
WORKDIR /app
RUN apk add --no-cache musl-dev
COPY . .
RUN cargo install mdbook
RUN cargo xtask build --clean

FROM golang:1.24-alpine as go-builder
WORKDIR /app
COPY . .
COPY --from=book-builder /app/build ./build
RUN go mod download
RUN go build -o server .

FROM alpine:latest
RUN apk --no-cache add ca-certificates
WORKDIR /root/
COPY --from=go-builder /app/server .
EXPOSE 4026
CMD ["./server"]
