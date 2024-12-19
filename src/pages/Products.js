import React, { useState, useEffect } from "react";
import { supabase } from "../utils/supabase";

const Products = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data, error } = await supabase.from("products").select("*");

    if (error) {
      console.error("Ошибка при загрузке данных:", error);
    } else {
      setProducts(data);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Товары
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md border rounded-lg p-4"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {product.title}
            </h2>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <p className="text-lg font-bold text-gray-900">
              Цена: {product.price}₽
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
