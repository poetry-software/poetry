package main

import (
	"embed"
	"io/fs"
	"log"
	"net/http"
	"os"
)

//go:embed books/*/book
var content embed.FS

func main() {
	contentFS, err := fs.Sub(content, "books/hbot/book")
	if err != nil {
		log.Fatal(err)
	}

	fileServer := http.FileServer(http.FS(contentFS))

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fileServer.ServeHTTP(w, r)
	})

	port := os.Getenv("PORT")
	if port == "" {
		port = "4026"
	}

	log.Printf("Starting server on port %s", port)
	log.Fatal(http.ListenAndServe(":"+port, nil))
}
