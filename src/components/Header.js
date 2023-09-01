import { useDispatch } from "react-redux";
import { showSidebar } from "../features/cartSlice";
import { BsBag } from "react-icons/bs";

const Header = () => {
  const dispatch = useDispatch();

  return (
    <header>
      <h1>Header</h1>
      <div onClick={() => dispatch(showSidebar())}>
        <BsBag className="text-2xl" />
      </div>
    </header>
  );
};

export default Header;
