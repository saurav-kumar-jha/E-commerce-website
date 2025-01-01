import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:1324/api/product');
        setProducts(response.data);
        console.log(products)
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);


  return (
    <div className="max-w-4xl mx-auto p-6 m-4 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-gray-800 m-6">Product List</h1>
      <div className="space-y-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800">{product.productName}</h2>
            <p className="text-gray-600">{product.productDesc}</p>
            <p className="text-gray-700 font-medium mt-2">Stock: <span className="font-normal">{product.stock}</span></p>
            <p className="text-gray-700 font-medium">Category: <span className="font-normal">{product.Category}</span></p>
            <p className="text-gray-700 font-medium">Quantity: <span className="font-normal">{product.quantity}</span></p>
            <p className="text-gray-700 font-medium">Price: <span className="font-normal">${product.price}</span></p>
            <p className="text-gray-700 font-medium">Discount: <span className="font-normal">{product.discountPercentage}%</span></p>
            <p className="text-gray-700 font-medium">Rating: <span className="font-normal">{product.rating}</span></p>
            <p className="text-gray-700 font-medium">Weight: <span className="font-normal">{product.weight} kg</span></p>
            {product.images && (
              <img
                src={`data:${product.imageType};base64,${btoa(
                  new Uint8Array(product.images.data).reduce(
                    (data, byte) => data + String.fromCharCode(byte),
                    ''
                  )
                )}`}
                alt={product.imageName}
                className="w-32 h-32 object-cover mt-4 rounded-md border mx-auto"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
