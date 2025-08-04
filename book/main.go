package main

import (
	"embed"
	"io/fs"
	"log"
	"net/http"
	"os"
)

//go:embed build
var buildFS embed.FS

func main() {
	buildDir, err := fs.Sub(buildFS, "build")
	if err != nil {
		log.Fatalf("Failed to get build directory: %v", err)
	}

	mux := http.NewServeMux()

	mux.HandleFunc("GET /{id}/", func(w http.ResponseWriter, r *http.Request) {
		siteDir, err := fs.Sub(buildDir, r.PathValue("id"))
		if err != nil {
			log.Printf("Site not found: %s", r.PathValue("id"))
			http.NotFound(w, r)
			return
		}

		fileServer := http.FileServer(http.FS(siteDir))

		http.StripPrefix("/"+r.PathValue("id"), fileServer).ServeHTTP(w, r)
	})

	port := os.Getenv("PORT")
	if port == "" {
		port = "4026"
	}

	log.Printf("Starting server on port %s", port)
	log.Printf("Serving embedded static sites from build/ directory")
	log.Fatal(http.ListenAndServe(":"+port, mux))
}
