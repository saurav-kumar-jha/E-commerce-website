import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = () => {
  const [product, setProduct] = useState({productName: '',productDesc: '',stock:0 ,Category: '',quantity:0 ,price:0 ,discountPercentage:0 ,rating:0 ,weight:0 ,});
  const [imageFile, setImageFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('myEntity', new Blob([JSON.stringify(product)], { type: 'application/json' }));
    formData.append('imageFile', imageFile);

    try {
      const response = await axios.post('http://localhost:1324/api/product', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert("product added")
    } catch (error) {
      alert("Product adding failed successfully", error)
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md space-y-4">
      <h2 className="text-2xl font-bold text-center">Add Product</h2>
      <div>
        <label htmlFor="productName" className="block text-sm font-medium text-gray-700">Product Name</label>
        <input
          id="productName"
          type="text"
          name="productName"
          value={product.productName}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>
      <div>
        <label htmlFor="productDesc" className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          id="productDesc"
          name="productDesc"
          value={product.productDesc}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>
      <div>
        <label htmlFor="stock" className="block text-sm font-medium text-gray-700">Stock</label>
        <input
          id="stock"
          type="number"
          name="stock"
          value={product.stock}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>
      <div>
        <label htmlFor="Category" className="block text-sm font-medium text-gray-700">Category</label>
        <input
          id="Category"
          type="text"
          name="Category"
          value={product.Category}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>
      <div>
        <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">Quantity</label>
        <input
          id="quantity"
          type="number"
          name="quantity"
          value={product.quantity}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>
      <div>
        <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
        <input
          id="price"
          type="number"
          name="price"
          value={product.price}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>
      <div>
        <label htmlFor="discountPercentage" className="block text-sm font-medium text-gray-700">Discount Percentage</label>
        <input
          id="discountPercentage"
          type="number"
          step="0.01"
          name="discountPercentage"
          value={product.discountPercentage}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>
      <div>
        <label htmlFor="rating" className="block text-sm font-medium text-gray-700">Rating</label>
        <input
          id="rating"
          type="number"
          step="0.1"
          name="rating"
          value={product.rating}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>
      <div>
        <label htmlFor="weight" className="block text-sm font-medium text-gray-700">Weight</label>
        <input
          id="weight"
          type="number"
          name="weight"
          value={product.weight}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>
      <div>
        <label htmlFor="imageFile" className="block text-sm font-medium text-gray-700">Image</label>
        <input
          id="imageFile"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>
      {preview && <img src={preview} alt="Image Preview" className="w-32 h-32 object-cover mt-4 mx-auto" />}
      <button
        type="submit"
        className="w-full py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
      >
        Add Product
      </button>
    </form>
  );
};

export default ProductForm;
