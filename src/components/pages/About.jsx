export default function About() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="font-bold text-4xl p-5  text-teal-600">About US</h1>
      <div className="flex items-center justify-center gap-4 container m-auto h-[50vh]">
        <img
          alt=""
          src="https://i.pinimg.com/736x/9c/e2/58/9ce2583733de2a3fd47543cdc058b2e0.jpg"
          className="w-50 rounded object-cover"
        />

        <div>
          <h3 className="font-medium text-gray-900 sm:text-2xl">CEO</h3>

          <p className="mt-0.5 text-gray-700 font-bold underline">
            TAING Sengkim
          </p>
          <p className="mt-0.5 text-gray-700 w-50 line-clamp-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            itaque, inventore possimus odit perferendis, soluta quisquam
            suscipit officia assumenda cumque quas earum quibusdam corrupti
            blanditiis. Rem sapiente ducimus consectetur vitae?
          </p>
        </div>
      </div>
    </div>
  );
}
