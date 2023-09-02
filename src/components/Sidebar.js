import { Link } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import { showSidebar, removeAllItem } from "../features/cartSlice";
import CartItem from "./CartItem";
import { useEffect, useState } from "react";

const Sidebar = () => {
  const isOpen = useSelector((state) => state.cart.isOpen);
  const cart = useSelector((state) => state.cart.cart);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const dispatch = useDispatch();

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (cart.length) {
      const totalPrice = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.amount * currentItem.price;
      }, 0);
      console.log(totalPrice);
      setTotalPrice(totalPrice);
    } else {
      setTotalPrice(0);
    }
  }, [cart]);
  console.log(cart);

  return (
    <div
      className={` ${
        isOpen ? "right-0" : "-right-full"
      } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}
    >
      <div className="flex items-center justify-between py-6 border-b">
        <div className="uppercase text-sm font-semibold">
          Shopping bag ({totalAmount})
        </div>
        <div
          onClick={() => {
            dispatch(showSidebar());
          }}
          className="cursor-pointer w-8 h-8 flex justify-center items-center"
        >
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>
      <div className="flex flex-col gap-y-2 h-[520px] lg:h-[640px] overflow-y-auto overflow-x-hidden border-b">
        {cart.map((item) => {
          return <CartItem item={item} key={item.id} />;
        })}
      </div>
      <div className="flex flex-col gap-y-3 py-4 mt-4">
        <div className=" flex w-full justify-between items-center">
          <div className="uppercase font-semibold">
            <span className="mr-2">Total:</span> ${" "}
            {parseFloat(totalPrice).toFixed(2)}
          </div>
          <div
            className="cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl"
            onClick={() => dispatch(removeAllItem())}
          >
            <FiTrash2 />
          </div>
        </div>
        <div className="bg-red-500 flex p-4 justify-center items-center text-white w-full font-medium cursor-pointer">
          Checkout
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
