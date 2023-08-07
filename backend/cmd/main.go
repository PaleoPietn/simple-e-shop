package main

import (
	"backend/internal/products"
	"log"
	"net/http"
)

func main() {
	http.HandleFunc("/products", products.HandleProducts)
	log.Println("Starting server on port 8000...")
	log.Fatal(http.ListenAndServe(":8000", nil))
}
