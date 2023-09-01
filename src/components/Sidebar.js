import { Link } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isOpen = useSelector((state) => state.cart.isOpen);
  console.log(isOpen);

  return (
    <div
      className={` ${
        isOpen ? "right-0" : "-right-full"
      } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}
    >
      Sidebar
    </div>
  );
};

export default Sidebar;
