import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";




const Cart = () => {

  const {cart} = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
  }, [cart])

  return (
    <div>
  {
    cart.length > 0  ? 
    (<div className="flex items-center justify-between max-w-6xl mx-auto mt-6">


      <div className="flex flex-col gap-11 max-w-3xl">
        {
          cart.map( (item,index) => {
            return <CartItem key={item.id} item={item} itemIndex={index} />
          } )
        }
      </div>

      <div className="flex flex-col w-1/4 gap-2 fixed top-[475px] right-[120px]">

        <div className="flex flex-col gap-3 ">
          <div className="flex flex-col">
          <div className="text-green-600 font-extrabold">Your Cart</div>
          <div className="text-green-600 text-3xl font-extrabold">Summary</div>
          </div>
          <p>
            <span className="text-gray-700 font-bold">Total Items: {cart.length}</span>
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-gray-700 font-bo
           font-bold">Total Amount: ${totalAmount}</p>
          <button className="bg-green-600 w-full p-2 rounded-lg">
            CheckOut Now
          </button>
        </div>

      </div>


    </div>) : 
    (<div className="flex flex-col gap-3 items-center absolute top-[50vh] left-[45vw]">
      <h1 className="text-center text-xl">Your Cart is Empty</h1>
      <Link to={"/"}>
        <button className="bg-green-600 rounded-lg p-1 px-10 text-2xl">
          Shop Now
        </button>
      </Link>
    </div>)
  }
    </div>
  );
};

export default Cart;
