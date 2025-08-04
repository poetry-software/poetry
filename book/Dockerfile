FROM golang:1.24-alpine as go-builder
WORKDIR /app
COPY . .
RUN go mod download
RUN go build -o server .

FROM alpine:latest
RUN apk --no-cache add ca-certificates
WORKDIR /root/
COPY --from=go-builder /app/server .
EXPOSE 4026
CMD ["./server"]
