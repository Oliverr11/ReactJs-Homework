import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router";
import getData from "../../../api/api";
import CardProduct from "../../cards/card-products";
import { FaReplyAll } from "react-icons/fa";

export default function ProductFilter() {
  const { state } = useLocation();
  console.log("Location : ", state);

  const [products, setProduct] = useState([]);

  let getProducts = async () => {
    let result = await getData(`/products/category/${state}`);
    setProduct(result.products);
    console.log(result);
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <>
      <div className="container  m-auto flex flex-row  justify-between items-center  my-5">
        <NavLink
          to={"/products"}
          className={
            "bg-teal-400 p-3 rounded-2xl text-teal-800 hover:bg-teal-300 flex-row flex justify-center items-center gap-2"
          }
        >
          <FaReplyAll />
          All Products
        </NavLink>
        <h1 className="text-teal-500 font-bold text-4xl text-center uppercase ">
          {state}
        </h1>
      </div>

      <div className="grid  grid-cols-1 sm:grid-cols-2  md:grid-cols-3 container m-auto gap-5">
        {products.map((item, index) => (
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
