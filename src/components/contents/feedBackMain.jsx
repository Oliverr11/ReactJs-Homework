import FeedBackCompo from "./feedBackCompo";

export default function FeedBack() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-20">
          Raw Denim Heirloom Man Braid Selfies Wayfarers
        </h1>
        <div className="flex flex-wrap md:flex-nowrap  sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          <FeedBackCompo />
          <FeedBackCompo />
          <FeedBackCompo />
        </div>
      </div>
    </section>
  );
}
