import { CiHeart } from "react-icons/ci";
import { NavLink } from "react-router";

export default function CardProduct({
  image,
  category,
  title,
  description,
  price,
  stock,
  id,
}) {
  return (
    <NavLink
      to={`/products/${id}`}
      className="group relative block overflow-hidden shadow-md"
    >
      <button className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75">
        <span className="sr-only">Wishlist</span>
        <CiHeart />
      </button>

      <img
        src={image}
        alt=""
        className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
      />

      <div className="relative border border-gray-100 bg-white p-6">
        <p className="text-gray-700 font-bold">
          {price}$
          <span className="text-gray-400 ml-5  uppercase font-semibold">
            {category}
          </span>
        </p>

        <h3 className="mt-1.5 text-lg font-medium text-gray-900">{title}</h3>

        <p className="mt-1.5 line-clamp-3 text-gray-700">{description}</p>

        <form className="mt-4 flex gap-4">
          {stock == 0 ? (
            <p className="block w-full rounded-sm px-4 py-3 text-sm font-medium text-red-500 ">
              Out stock
            </p>
          ) : (
            <p className="block w-full rounded-sm px-4 py-3 text-sm font-medium text-green-500 ">
              In stock
            </p>
          )}

          <button
            type="button"
            className="block w-full rounded-sm bg-teal-900 px-4 py-3 text-sm font-medium text-white transition hover:scale-105"
          >
            Buy Now
          </button>
        </form>
      </div>
    </NavLink>
  );
}
