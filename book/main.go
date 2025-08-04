package main

import (
	"log"
	"net/http"
	"os"
)

func main() {
	booksDir := "/root/books"

	if _, err := os.Stat(booksDir); err != nil {
		log.Fatalf("Books directory %s not accessible: %v", booksDir, err)
	}

	log.Printf("Serving files from: %s", booksDir)
	fileServer := http.FileServer(http.Dir(booksDir))

	mux := http.NewServeMux()
	mux.Handle("/", http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		log.Printf("Serving: %s", r.URL.Path)
		fileServer.ServeHTTP(w, r)
	}))

	port := os.Getenv("PORT")
	if port == "" {
		port = "4026"
	}

	log.Printf("Starting server on port %s", port)
	log.Fatal(http.ListenAndServe(":"+port, mux))
}
