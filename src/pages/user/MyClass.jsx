import CourseCard from "@/components/common/CourseCard";
import { Link } from "react-router-dom";
import { Frown } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/Carousel";

export default function MyClass({ user }) {
  if (!user) {
    return;
  }

  if (user.courses.length == 0) {
    return (
      <div className="w-full mt-20 px-4 sm:px-8 lg:px-20 pb-10">
        <div className="flex flex-col">
          <div className="flex justify-between mb-4 items-center">
            <h1 className="font-bold  text-xl sm:text-2xl">Selamat Siang Mas Brooo</h1>
            <Link to="/class" className="text-orange-500 hover:text-orange-600">
              Kelas Saya
            </Link>
          </div>

          <div className="flex flex-col justify-center items-center sm:gap-6 h-[300px] border-2 border-neutral-500 rounded-md">
            <Frown className="w-[50px] h-[50px] text-orange-500" />
            <h1 className="text-xl font-bold mb-4 md:mb-0">Anda belum memiliki kelas</h1>
            <Link className="px-4 py-2 bg-orange-500 text-neutral-50 rounded-md hover:text-orange-500 hover:bg-neutral-50 hover:border-orange-500 hover:border-2" to="/class">
              Telusuri kelas
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="w-full mt-20 px-4 sm:px-8 lg:px-20 pb-10">
        <div className="flex flex-col">
          <div className="flex justify-between mb-4 items-center">
            <h1 className="font-bold  text-xl sm:text-2xl">Selamat Siang Mas Brooo</h1>
            <Link to="/class" className="text-orange-500 hover:text-orange-600">
              Kelas Saya
            </Link>
          </div>

          <div className="flex justify-center">
            <Carousel
              opts={{
                align: "start",
              }}
              className="w-full max-w-5xl"
            >
              <CarouselContent>
                {Array.from({ length: user.courses.length }).map((_, index) => (
                  <CarouselItem key={index} className="basis-1/2 md:basis-1/4">
                    <div className="p-1">
                      <CourseCard />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex cursor-pointer transition-all duration-300 hover:bg-neutral-200 w-8 h-8 lg:w-20 lg:h-20 -left-2 lg:-left-4" />
              <CarouselNext className="hidden md:flex cursor-pointer transition-all duration-300 hover:bg-neutral-200 w-8 h-8 lg:w-20 lg:h-20 -right-2 lg:-right-4" />
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
}
