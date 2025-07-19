export default function Button(props) {
  return (
    <>
      <button className="py-2 px-5 bg-yellow-500 rounded-2xl text-blue-900 hover:scale-105 duration-300">
        {props.label}
      </button>
    </>
  );
}
