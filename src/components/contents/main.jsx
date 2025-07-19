import CourseCard from "./card";
import FeedBack from "./feedBackMain";

export default function MainContent() {
  return (
    <>
      <h1 className="text-3xl font-bold text-gray-700 my-10">Our Courses : </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 sm:gap-5 my-10">
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div>
      <div>
        <FeedBack />
      </div>
    </>
  );
}
