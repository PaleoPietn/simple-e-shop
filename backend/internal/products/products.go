package products

import (
	"encoding/json"
	"io"
	"log"
	"net/http"
)

const (
	ProductAPIURL = "https://dummyjson.com/products"
	ServerPort    = ":8000"
)

type Product struct {
	Id          int     `json:"id"`
	Title       string  `json:"title"`
	Description string  `json:"description"`
	Price       float64 `json:"price"`
	Thumbnail   string  `json:"thumbnail"`
}

type ProductList struct {
	Products []Product `json:"products"`
}

type IncomingProduct struct {
	Id                 int      `json:"id"`
	Title              string   `json:"title"`
	Price              float64  `json:"price"`
	Description        string   `json:"description"`
	DiscountPercentage float64  `json:"discountPercentage"`
	Rating             float64  `json:"rating"`
	Stock              int      `json:"stock"`
	Brand              string   `json:"brand"`
	Category           string   `json:"category"`
	Thumbnail          string   `json:"thumbnail"`
	Images             []string `json:"images"`
}

type HttpClient interface {
	Do(req *http.Request) (*http.Response, error)
}

func FetchProducts(httpClient HttpClient) ([]IncomingProduct, error) {
	req, err := http.NewRequest("GET", ProductAPIURL, nil)
	if err != nil {
		log.Println(err)
		return nil, err
	}

	resp, err := httpClient.Do(req)
	if err != nil {
		log.Println(err)
		return nil, err
	}
	defer resp.Body.Close()

	body, err := io.ReadAll(resp.Body)
	if err != nil {
		log.Println(err)
		return nil, err
	}

	var incomingProductList struct {
		Products []IncomingProduct `json:"products"`
	}

	err = json.Unmarshal(body, &incomingProductList)
	if err != nil {
		log.Println(err)
		return nil, err
	}

	return incomingProductList.Products, nil
}

func FilterProducts(incomingProducts []IncomingProduct) []Product {
	products := []Product{}
	for _, p := range incomingProducts {
		if p.Id == 24 || p.Id == 29 {
			continue
		}
		products = append(products, Product{
			Id:          p.Id,
			Title:       p.Title,
			Description: p.Description,
			Price:       p.Price,
			Thumbnail:   p.Thumbnail,
		})
	}
	return products
}

func WriteResponse(w http.ResponseWriter, products []Product) {
	productList := ProductList{Products: products}

	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
	w.Header().Set("Access-Control-Allow-Headers", "Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization")

	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(productList)
}

func HandleProducts(w http.ResponseWriter, r *http.Request) {
	incomingProducts, err := FetchProducts(http.DefaultClient)
	if err != nil {
		http.Error(w, "Failed to fetch products", http.StatusInternalServerError)
		return
	}

	products := FilterProducts(incomingProducts)

	WriteResponse(w, products)
}
