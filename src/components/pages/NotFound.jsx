import { NavLink } from "react-router";

export default function NotFound() {
  return (
    <div>
      <img
        className="h-140 m-auto"
        src="https://static.vecteezy.com/system/resources/previews/005/883/254/original/page-not-found-404-error-concept-illustration-free-vector.jpg"
        alt=""
      />
      <NavLink
        className="flex items-center m-auto  w-50 justify-center rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700"
        to={"/"}
      >
        Home
      </NavLink>
    </div>
  );
}
