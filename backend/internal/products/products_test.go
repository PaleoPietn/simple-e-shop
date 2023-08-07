package products

import (
	"bytes"
	"io"
	"net/http"
	"reflect"
	"testing"
)

type MockHttpClient struct {
	DoFunc func(req *http.Request) (*http.Response, error)
}

func (m *MockHttpClient) Do(req *http.Request) (*http.Response, error) {
	return m.DoFunc(req)
}

func TestFetchProducts(t *testing.T) {
	mockClient := &MockHttpClient{
		DoFunc: func(req *http.Request) (*http.Response, error) {
			response := http.Response{
				StatusCode: 200,
				Body: io.NopCloser(bytes.NewReader([]byte(`{
					"products": [
						{
							"id": 1,
							"title": "Product 1",
							"price": 10,
							"description": "This is product 1",
							"discountPercentage": 0.1,
							"rating": 4,
							"stock": 100,
							"brand": "Brand 1",
							"category": "Category 1",
							"thumbnail": "http://example.com/product1.jpg",
							"images": [
								"http://example.com/product1-1.jpg",
								"http://example.com/product1-2.jpg"
							]
						}
					]
				}`))),
			}
			return &response, nil
		},
	}

	products, err := FetchProducts(mockClient)
	if err != nil {
		t.Errorf("Unexpected error: %v", err)
	}

	if len(products) != 1 {
		t.Errorf("Expected one product, got %d", len(products))
	}

	expectedProduct := IncomingProduct{
		Id:                 1,
		Title:              "Product 1",
		Price:              10.0,
		Description:        "This is product 1",
		DiscountPercentage: 0.1,
		Rating:             4.0,
		Stock:              100,
		Brand:              "Brand 1",
		Category:           "Category 1",
		Thumbnail:          "http://example.com/product1.jpg",
		Images:             []string{"http://example.com/product1-1.jpg", "http://example.com/product1-2.jpg"},
	}

	if !reflect.DeepEqual(products[0], expectedProduct) {
		t.Errorf("Expected product to be %v, got %v", expectedProduct, products[0])
	}
}

func TestFilterProducts(t *testing.T) {
	incomingProducts := []IncomingProduct{
		{Id: 24, Title: "Excluded Product 1"},
		{Id: 29, Title: "Excluded Product 2"},
		{Id: 30, Title: "Included Product 1"},
		{Id: 31, Title: "Included Product 2"},
	}

	expectedProducts := []Product{
		{Id: 30, Title: "Included Product 1"},
		{Id: 31, Title: "Included Product 2"},
	}

	actualProducts := FilterProducts(incomingProducts)

	if !reflect.DeepEqual(actualProducts, expectedProducts) {
		t.Errorf("Expected %v, got %v", expectedProducts, actualProducts)
	}
}
