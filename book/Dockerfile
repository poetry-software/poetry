# Build stage for Go server
FROM golang:1.21-alpine as go-builder
WORKDIR /app
COPY . .
COPY --from=books /app/books ./books
RUN go mod download
RUN go build -o server .

# Final stage
FROM alpine:latest
RUN apk --no-cache add ca-certificates
WORKDIR /root/
COPY --from=go-builder /app/server .
EXPOSE 4026
CMD ["./server"]
