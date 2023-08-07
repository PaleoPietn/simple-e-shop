"use client";
import React, { useEffect, useState } from 'react';
import ProductList from './components/ProductList';

async function getData(): Promise<Product[]> {
  const res = await fetch('http://localhost:8000/products');
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const data = await res.json();
  return data.products;
}

export default function Home () {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getData();
        if (data.length === 0) {
          setError("No products found");
        } else {
          setProducts(data);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
        setError("Error fetching products");
      }
    };
    fetchProducts();
  }, []);

  return (
    <main className='bg-white'>
      <div className='text-slate-800'>
        {error ? (
          <h1 className="text-center text-3xl">{error}</h1>
        ) : (
          <ProductList products={products} />
        )}
      </div>
    </main>
  );
};