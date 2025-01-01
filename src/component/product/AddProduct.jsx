import { useEffect, useState } from "react"


export const Addproduct = () => {
    const [product, setProduct] = useState({ productName: '', pruductDesc: '', stock: NaN, Category: '', quantity: NaN, price: NaN, discountPercentage: NaN, weight: NaN })
    const [imageFile, setImageFile] = useState([]);
    const [preview, setPreview] = useState([]);

    const handleinputchange = (e) => {
        const { value, name } = e.target
        setProduct({ ...product, [name]: value })
    }
    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
    
        if (files.length + imageFile.length > 5) {
          alert("You can upload a maximum of 5 images.");
          return;
        }


        setImageFile((prevFiles) => [...prevFiles, ...files]);
        const newPreviews = files.map((file) => URL.createObjectURL(file));
        setPreview((prevPreviews) => [...prevPreviews, ...newPreviews]);
      };
    useEffect(() => {
        return () => {
            preview.forEach((preview) => URL.revokeObjectURL(preview));
        };
    }, [preview]);
    const handlesubmit = async (e) => {
        e.preventDefault()
        console.log(product,imageFile);
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
    }
    return (
        <>
            <form onSubmit={handlesubmit} className="h-[auto] w-[80vw] mx-auto my-2 px-2 py-3 ">
                <h2 className="text-2xl font-semibold text-center">Add product</h2>
                <div className="h-auto w-[70%] mx-auto flex flex-wrap justify-between items-center ">
                    <div className="p-4 h-auto w-[40%] ">
                        <label htmlFor="productName" className="block text-lg font-medium text-gray-700 my-1">Product Name:-</label>
                        <input type="text" id="productName" value={product.productName} onChange={handleinputchange} name="productName" placeholder="Enter product name" className="w-[90%] text-lg font-semibold focus:outline-none focus:ring focus:ring-blue-400 border-transparent rounded-md px-3 py-2 ml-2" required />
                    </div>
                    <div className="p-4 h-auto w-[40%] my-1 ">
                        <label htmlFor="pruductDesc" className="block text-lg font-medium text-gray-700 my-1">Product Description:-</label>
                        <input type="text" id="pruductDesc" value={product.pruductDesc} onChange={handleinputchange} name="pruductDesc" placeholder="Enter product Description" className="w-[90%] text-lg font-semibold focus:outline-none focus:ring focus:ring-blue-400 border-transparent rounded-md px-3 py-2 ml-2" required />
                    </div>
                    <div className="p-4 h-auto w-[40%] my-1 ">
                        <label htmlFor="stock" className="block text-lg font-medium text-gray-700 my-1">Product stock:-</label>
                        <input type="number" id="stock" value={product.stock} onChange={handleinputchange} name="stock" placeholder="Enter product stock" className="w-[90%] text-lg font-semibold focus:outline-none focus:ring focus:ring-blue-400 border-transparent rounded-md px-3 py-2 ml-2" required />
                    </div>
                    <div className="p-4 h-auto w-[40%] my-1 ">
                        <label htmlFor="Category" className="block text-lg font-medium text-gray-700 my-1">Product Category:-</label>
                        <select name="Category" id="Category" value={product.Category} onChange={handleinputchange} className="w-[90%] text-lg font-semibold text-gray-700 focus:outline-none focus:ring focus:ring-blue-400 border-transparent rounded-md px-3 py-2 ml-2">
                            <option value="" disabled>Select option</option>
                            <option value="mobile">Mobile</option>
                            <option value="Electronic">Electronic</option>
                        </select>
                    </div>
                    <div className="p-4 h-auto w-[40%] my-1 ">
                        <label htmlFor="quantity" className="block text-lg font-medium text-gray-700 my-1">Product quantity:-</label>
                        <input type="number" id="quantity" value={product.quantity} onChange={handleinputchange} name="quantity" placeholder="Enter product quantity" className="w-[90%] text-lg font-semibold focus:outline-none focus:ring focus:ring-blue-400 border-transparent rounded-md px-3 py-2 ml-2" required />
                    </div>
                    <div className="p-4 h-auto w-[40%] my-1 ">
                        <label htmlFor="price" className="block text-lg font-medium text-gray-700 my-1">Product price:-</label>
                        <input type="number" id="price" value={product.price} onChange={handleinputchange} name="price" placeholder="Enter product price" className="w-[90%] text-lg font-semibold focus:outline-none focus:ring focus:ring-blue-400 border-transparent rounded-md px-3 py-2 ml-2" required />
                    </div>
                    <div className="p-4 h-auto w-[40%] my-1 ">
                        <label htmlFor="discountPercentage" className="block text-lg font-medium text-gray-700 my-1">Product discountPercentage:-</label>
                        <input type="number" id="discountPercentage" value={product.discountPercentage} onChange={handleinputchange} name="discountPercentage" placeholder="Enter product discountPercentage" className="w-[90%] text-lg font-semibold focus:outline-none focus:ring focus:ring-blue-400 border-transparent rounded-md px-3 py-2 ml-2" required />
                    </div>
                    <div className="p-4 h-auto w-[40%] my-1 ">
                        <label htmlFor="weight" className="block text-lg font-medium text-gray-700 my-1">Product weight:-</label>
                        <input type="number" id="weight" value={product.weight} onChange={handleinputchange} name="weight" placeholder="Enter product weight" className="w-[90%] text-lg font-semibold focus:outline-none focus:ring focus:ring-blue-400 border-transparent rounded-md px-3 py-2 ml-2" required />
                    </div>
                    <div className="p-4 h-auto w-[40%] my-1 ">
                        <label htmlFor="imageFile" className="block text-lg font-medium text-gray-700">Image(max 5) </label>
                        <input
                            id="imageFile"
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            required
                            multiple
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                        />
                        <div className="mt-4 grid grid-cols-3 gap-4">
                            {preview.map((preview, index) => (
                                <div key={index} className="flex flex-col items-center">
                                    <img
                                        src={preview}
                                        alt={`Image Preview ${index + 1}`}
                                        className="w-32 h-32 object-cover rounded-md shadow-md"
                                    />
                                    <span className="text-sm text-gray-500 mt-2">
                                        Image {index + 1}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                   
                </div>
                <button type="submit" className="h-auto w-[200px] px-4 py-2 bg-slate-500 hover:bg-slate-700 text-white mx-[17%] rounded-full text-lg font-semibold ">Submit</button>
            </form>
        </>
    )
}