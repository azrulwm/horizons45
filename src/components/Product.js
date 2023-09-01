import { Link } from "react-router-dom";
import { BsPlus } from "react-icons/bs";

const Product = ({ item }) => {
  console.log(item);

  const { id, image, category, title, price } = item;

  return (
    <Link to={`/products/${id}`}>
      <div className="w-full h-[300px] mb-4 border border-gray-200 relative overflow-hidden group transition">
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-[200px] mx-auto flex justify-center items-center">
            <img
              className="max-h-[160px] group-hover:scale-110 transition duration-300"
              src={image}
              alt=""
            />
          </div>
          <div className="absolute top-6 -right-11 group-hover:right-5 bg-red-500 p-2 opacity-0 group-hover:opacity-100 transition-all">
            <button>
              <div className="flex justify-center items-center text-white w-12 h-12">
                <BsPlus className="text-3xl" />
              </div>
            </button>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-sm capitalize text-gray-500 mb-1">{category}</h2>
        <h2 className="font-semibold mb-1">{title}</h2>
        <h2>$ {price}</h2>
      </div>
    </Link>
  );
};

export default Product;