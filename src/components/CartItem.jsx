
import {FcDeleteDatabase} from "react-icons/fc"
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }

  return (
    <div>

      <div className="flex justify-between gap-10 max-w-2xl h-[200px] ">

        <div className="h-[170px] flex justify-center">
          <img src={item.image} className="h-full w-[200px] mt-[20px]" />
        </div>
        <div className="flex flex-col gap-4 w-3/4">
          <h1 className="text-xl text-gray-700 font-semibold">{item.title}</h1>
          <h1 className="text-gray-400">{item.description.split(" ").slice(0,15).join(" ") + "..."}</h1>
          <div className="flex items-center w-full  justify-between">
            <p className="text-green-600 font-extrabold">${item.price}</p>
            <div
            className="mr-12 bg-red-400 rounded-full text-xl p-1"
            onClick={removeFromCart}>
              <FcDeleteDatabase/>
            </div>
          </div>

        </div>


      </div>

    </div>
  );
};

export default CartItem;
