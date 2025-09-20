import Navbar from "@/components/layout/navbar";
import WhatLearn from "@/components/common/whatLearn";
import CourseCard from "@/components/course/CourseCard";
import Footer from "@/components/layout/footer";
import MyClass from "./MyClass";

export default function HomePage() {
  const dummyData = {
    name: "Suvi",
    email: "suvi@example.com",
    role: "admin",
    courses: [
      {
        id: 1,
        name: "Kelas 1",
        category: "Kategori 1",
        price: 100000,
        image: "https://picsum.photos/200/300",
      },
    ],
  };

  return (
    <>
      <Navbar user={dummyData} />
      <MyClass user={dummyData} />
      <WhatLearn />
      <div className="w-full mt-10 px-4 sm:px-8 lg:px-20 pb-10">
        <div className="">
          <h1 className="ms-0 font-bold mb-4 text-xl sm:text-2xl">Kelas Populer</h1>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 sm:gap-6">
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
          </div>
        </div>
      </div>
      <div className="w-full mt-10 px-4 sm:px-8 lg:px-20 pb-10">
        <div className="">
          <h1 className="ms-0 font-bold mb-4 text-xl sm:text-2xl">Direkomendasikan Untuk Anda</h1>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 sm:gap-6">
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
