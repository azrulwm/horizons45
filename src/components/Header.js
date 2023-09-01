import { useDispatch } from "react-redux";
import { showSidebar } from "../features/cartSlice";

const Header = () => {
  const dispatch = useDispatch();
  console.log(showSidebar);
  return (
    <div>
      <h1>Header</h1>
      <h1 onClick={() => dispatch(showSidebar())}>open/close sidebar</h1>
    </div>
  );
};

export default Header;
