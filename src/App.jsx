import { useEffect, useState } from "react";
import CardProduct from "./components/cards/card-products";
import getData from "./api/api";
import { useNavigate } from "react-router";

function App() {
  const [categories, setCategory] = useState([]);
  const [products, setProduct] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [searchResult, setSearchResult] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    getResult();
  }, []);

  const getResult = async () => {
    const categoriesResult = await getData("/products/categories");
    const productsResult = await getData("/products");
    setCategory(categoriesResult);
    setProduct(productsResult.products);
  };

  const handleOnClick = (slug) => {
    navigate("/products-filter", { state: slug });
  };

  const handleSearch = async () => {
    if (!searchInput.trim()) {
      setSearchResult(null);
      return;
    }
    const result = await getData(`/products/search?q=${searchInput}`);
    setSearchResult(result.products);
    console.log(result);
  };

  return (
    <>
      <form
        className="flex justify-center p-4"
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch();
        }}
      >
        <input
          type="text"
          placeholder="Search products..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
        <button
          type="submit"
          className="ml-2 px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700"
        >
          Search
        </button>
      </form>

      <div className="container m-auto overflow-x-auto whitespace-nowrap px-4 py-4">
        <div className="inline-flex gap-2">
          {categories.map((item, index) => (
            <button
              key={index}
              onClick={() => handleOnClick(item.slug)}
              className="bg-teal-600 text-white font-medium px-4 py-1 rounded-2xl transition duration-300 hover:bg-teal-700"
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 container m-auto gap-5 px-4 pb-8">
        {(searchResult || products).map((item, index) => (
          <CardProduct
            key={index}
            title={item.title}
            price={item.price}
            category={item.category}
            description={item.description}
            image={item.thumbnail}
            id={item.id}
          />
        ))}
      </div>
    </>
  );
}

export default App;
