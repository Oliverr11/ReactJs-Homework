export default function CourseCard() {
  return (
    <div className=" bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img
        src="https://i.pinimg.com/originals/c6/2f/d5/c62fd5639e15e77e61ced1f3d75553c9.jpg"
        alt="Course Thumbnail"
        className="w-full h-48 object-cover"
      />

      <div className="p-4 space-y-2">
        <h2 className="text-xl font-semibold text-gray-800">
          Introduction to Web Development
        </h2>
        <p className="text-gray-600 text-sm">
          Learn the basics of HTML, CSS, and JavaScript to build responsive
          websites from scratch.
        </p>

        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>
            <i class="fa-solid fa-chalkboard-user"></i> Sin Sreyphea
          </span>
          <span>
            <i class="fa-solid fa-clock"></i> 6h 30m
          </span>
        </div>

        <button className="mt-2 w-full bg-blue-600 text-white py-2 px-4 rounded-xl hover:bg-blue-700 transition-colors">
          Enroll Now
        </button>
      </div>
    </div>
  );
}
