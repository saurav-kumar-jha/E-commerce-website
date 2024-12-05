import { useEffect, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import axios from "axios";

const CARTS = "https://fakestoreapi.com/carts";

export const Cart2 = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(CARTS);
        setLoading(false);
        setData(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);

  const increaseQuantity = (cartIndex, itemIndex) => {
    setData((prevData) => {
      const updatedData = [...prevData];
      updatedData[cartIndex].products[itemIndex].quantity += 1; 
      return updatedData;
    });
    console.log(data);
    
  };

  const decreaseQuantity = (cartIndex, itemIndex) => {
    setData((prevData) => {
      const updatedData = [...prevData];
      const currentQuantity = updatedData[cartIndex].products[itemIndex].quantity;
      if (currentQuantity > 1) {
        updatedData[cartIndex].products[itemIndex].quantity -= 1; 
      }
      return updatedData;
    });
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="h-[100%] w-[90vw] mx-auto">
      <h1 className="text-[32px] mx-2">Cart:</h1>
      {data.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {data.map((cart, cartIndex) => (
            <div key={cartIndex}>
              {cart.products.map((item2, itemIndex) => (
                <li
                  key={itemIndex}
                  className="h-auto w-[60%] border my-2 border-black flex mx-auto px-4 py-2 bg-white"
                >
                  <img
                    src={item2.image}
                    alt=""
                    className="h-[160px] w-fit mr-3"
                  />
                  <div>
                    <p className="text-[20px] px-3 py-2 h-[30%] font-semibold cursor-pointer hover:text-blue-600 text-ellipsis overflow-hidden line-clamp-2 -webkit-box">
                      {item2.title}
                    </p>
                    <p className="h-[20%] mx-4 text-[18px] font-medium">
                      Price: Rs {item2.price}/-
                    </p>
                    <div className="h-[20%] w-auto px-3 flex">
                      <label className="text-[18px] font-medium">Quantity:</label>
                      <div className="h-[100%] w-[100px] ml-3 bg-[yellow] rounded flex items-center">
                        <button
                          onClick={() => decreaseQuantity(cartIndex, itemIndex)}
                          className="h-[100%] w-[35%] bg-[#0000ffc5] text-[30px] rounded-l flex items-center justify-center font-bold"
                        >
                          -
                        </button>
                        <p className="w-[30%] flex items-center justify-center text-[16px] font-medium">
                          {item2.quantity}
                        </p>
                        <button
                          onClick={() => increaseQuantity(cartIndex, itemIndex)}
                          className="h-[100%] w-[35%] bg-[#0000ffc5] text-[20px] rounded-r"
                        >
                          <IoMdAdd />
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </div>
          ))}
        </ul>
      )}
    </div>
  );
};
