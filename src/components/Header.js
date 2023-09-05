import { useDispatch, useSelector } from "react-redux";
import { showSidebar } from "../features/cartSlice";
import { BsBag } from "react-icons/bs";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const dispatch = useDispatch();
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const [isActive, setIsActive] = useState(false);

  window.addEventListener("scroll", () => {
    window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
  });

  return (
    <header
      className={`${
        isActive ? "bg-white py-4 shadow-md" : "bg-none py-6"
      } fixed w-full z-10 transition-all`}
    >
      <div className="container mx-auto flex items-center justify-between h-full">
        <Link to={"/"}>
          <div>
            <img className="w-[60px]" src={logo} alt="" />
          </div>
        </Link>
        <div
          className="cursor-pointer flex relative max-2-[50px]"
          onClick={() => dispatch(showSidebar())}
        >
          <BsBag className="text-2xl" />
          <div className="bg-red-700 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
            {totalAmount}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
