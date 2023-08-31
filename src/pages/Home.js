import { useGetProductsQuery } from "../app/api/apiSlice";

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
        <span>Loading...</span>
      </div>
    );
  } else if (isSuccess) {
    productsContent = products.map((item) => {
      return (
        <div>
          <h2>{item.id}</h2>
          <h2>{item.title}</h2>
        </div>
      );
    });
  } else if (isError) {
    productsContent = <div>{error}</div>;
  }

  return productsContent;
};

export default Home;
