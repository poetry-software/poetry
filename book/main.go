package main

import (
	"embed"
	"io/fs"
	"log"
	"net/http"
	"os"
	"strings"
)

//go:embed build
var buildFS embed.FS

func main() {
	buildDir, err := fs.Sub(buildFS, "build")
	if err != nil {
		log.Fatalf("Failed to get build directory: %v", err)
	}

	mux := http.NewServeMux()

	mux.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		if r.URL.Path == "/" {
			log.Printf("Serving home page")
			w.Header().Set("Content-Type", "text/html")
			w.Write([]byte(`
<!DOCTYPE html>
<html>
<head>
    <title>Static Sites Server</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 40px; }
        .site-link { display: block; margin: 10px 0; padding: 10px; background: #f0f0f0; text-decoration: none; color: #333; border-radius: 5px; }
        .site-link:hover { background: #e0e0e0; }
    </style>
</head>
<body>
    <h1>Available Static Sites</h1>
    <a href="/hbot/" class="site-link">HBot Documentation</a>
</body>
</html>`))
			return
		}

		pathParts := strings.Split(strings.Trim(r.URL.Path, "/"), "/")
		if len(pathParts) > 0 && pathParts[0] != "" {
			siteName := pathParts[0]

			siteDir, err := fs.Sub(buildDir, siteName)
			if err != nil {
				log.Printf("Site not found: %s", siteName)
				http.NotFound(w, r)
				return
			}

			fileServer := http.FileServer(http.FS(siteDir))

			http.StripPrefix("/"+siteName, fileServer).ServeHTTP(w, r)
			return
		}

		log.Printf("404 Not Found: %s", r.URL.Path)
		http.NotFound(w, r)
	})

	port := os.Getenv("PORT")
	if port == "" {
		port = "4026"
	}

	log.Printf("Starting server on port %s", port)
	log.Printf("Serving embedded static sites from build/ directory")
	log.Fatal(http.ListenAndServe(":"+port, mux))
}
