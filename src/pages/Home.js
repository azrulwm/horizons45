import { useGetProductsQuery } from "../app/api/apiSlice";
import Product from "../components/Product";
import Banner from "../components/Banner";

const Home = () => {
  const {
    data: products,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetProductsQuery();

  let productsContent;
  if (isLoading) {
    productsContent = (
      <div>
        <span className="h-screen flex justify-center">Loading...</span>
      </div>
    );
  } else if (isSuccess) {
    productsContent = (
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {products.map((item) => {
              return <Product item={item} key={item.id} />;
            })}
          </div>
        </div>
      </section>
    );
  } else if (isError) {
    productsContent = <div>{error}</div>;
  }

  return (
    <div>
      <Banner />
      {productsContent}
    </div>
  );
};

export default Home;
