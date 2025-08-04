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
	// fileServer := http.FileServer(http.Dir(booksDir))

	mux := http.NewServeMux()

	// Add a simple home route
	mux.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		if r.URL.Path == "/" {
			log.Printf("Serving home page")
			w.Header().Set("Content-Type", "text/plain")
			w.Write([]byte("Hello, books!"))
			return
		}

		// Return 404 for all other paths since file server is commented out
		log.Printf("404 Not Found: %s", r.URL.Path)
		http.NotFound(w, r)
	})

	// Comment out file server for now - uncomment when ready to serve files
	// mux.Handle("/books/", http.StripPrefix("/books/", fileServer))

	port := os.Getenv("PORT")
	if port == "" {
		port = "4026"
	}

	log.Printf("Starting server on port %s", port)
	log.Fatal(http.ListenAndServe(":"+port, mux))
}
