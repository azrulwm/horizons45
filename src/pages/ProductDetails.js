import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";
import { useGetProductByIdQuery } from "../app/api/apiSlice";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { data: item, isLoading } = useGetProductByIdQuery(id);

  if (isLoading) {
    return (
      <section className="h-screen flex justify-center">Loading...</section>
    );
  }
  return (
    <section className="pt-32 pb-12 lg:py-32 h-screen flex items-center">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
            <img
              className="max-w-[200px] lg:max-w-sm"
              src={item.image}
              alt=""
            />
          </div>
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0">
              {item.title}
            </h1>
            <div className="text-xl text-red-500 font-medium mb-6">
              $ {item.price}
            </div>
            <p className="mb-8">{item.description}</p>

            <button
              onClick={() => dispatch(addToCart({ ...item }))}
              className="bg-gray-600 py-4 px-8 text-white"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
