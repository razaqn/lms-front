import Navbar from "@/components/navbar";
import togaimg from "../assets/toga.png";
import { Button } from "@/components/ui/button";
import bgShape from "../assets/blop.svg";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/footer";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col-reverse lg:flex-row justify-evenly my-20 items-center gap-8 px-6">
        <div className="flex flex-col w-full lg:w-sm text-center lg:text-left">
          <h1 className="text-2xl lg:text-3xl font-bold my-2">
            Lorem ipsum <br /> dolor sit.
          </h1>
          <p className="text-neutral-500 mb-4 text-sm lg:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, accusamus.</p>
          <Button className="bg-blue-500 text-neutral-50 cursor-pointer w-full lg:w-96 transition-all duration-300 hover:bg-blue-600">Get Started</Button>
        </div>
        <img src={togaimg} className="w-sm h-sm" alt="toga.png" />
      </div>

      <div className="relative w-full py-6 lg:py-10">
        {/* SVG jadi background */}
        <img src={bgShape} alt="Background" className="absolute inset-0 w-full h-full object-cover" />

        {/* Konten */}
        <div className="relative flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-2xl lg:text-4xl font-bold my-2 lg:my-3 text-center">Asah Skill Anda</h1>
          <p className="text-sm lg:text-md text-center max-w-2xl">Kami menyediakan banyak kursus yang telah dibuat oleh mentor mentor yang berpengalaman</p>
        </div>

        {/* Foto-foto */}
        <div className="relative flex flex-wrap lg:flex-nowrap w-full justify-center gap-3 lg:gap-8 mt-6 lg:mt-8 px-4">
          <div className="rounded-xs w-20 h-20 lg:w-45 lg:h-45 bg-neutral-50 transition-transform duration-300 hover:scale-105"></div>
          <div className="rounded-xs w-20 h-20 lg:w-45 lg:h-45 bg-neutral-50 transition-transform duration-300 hover:scale-105"></div>
          <div className="rounded-xs w-20 h-20 lg:w-45 lg:h-45 bg-neutral-50 transition-transform duration-300 hover:scale-105"></div>
          <div className="rounded-xs w-20 h-20 lg:w-45 lg:h-45 bg-neutral-50 transition-transform duration-300 hover:scale-105"></div>
        </div>
      </div>

      {/* instuctor section */}
      <div className="relative w-full px-4">
        <div className="relative flex flex-col items-center justify-center text-neutral-900 pb-6 lg:pb-10">
          <h1 className="text-2xl lg:text-4xl font-bold my-2 lg:my-3 text-neutral-700 text-center">Instruktur Kami</h1>
          <p className="text-sm lg:text-md text-center max-w-2xl">Kami juga memiliki beberapa instruktur yang berpengalaman dan bersertifikasi nasional</p>
        </div>
        <div className="flex justify-center">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full max-w-5xl"
          >
            <CarouselContent>
              {Array.from({ length: 4 }).map((_, index) => (
                <CarouselItem key={index} className="basis-full md:basis-1/2">
                  <div className="p-1">
                    <Card className="bg-neutral-950 transition-transform duration-300 hover:scale-105">
                      <CardContent className="flex items-center justify-center p-4 lg:p-6 h-[150px] lg:h-[202px]"></CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex cursor-pointer transition-all duration-300 hover:bg-neutral-200 w-8 h-8 lg:w-20 lg:h-20 -left-2 lg:-left-4" />
            <CarouselNext className="hidden md:flex cursor-pointer transition-all duration-300 hover:bg-neutral-200 w-8 h-8 lg:w-20 lg:h-20 -right-2 lg:-right-4" />
          </Carousel>
        </div>
      </div>
      {/* close instructor section */}

      {/* our award section */}
      <div className="flex flex-col px-4 lg:px-12 my-6 lg:my-10">
        <div className="flex flex-col lg:flex-row lg:justify-evenly text-lg text-neutral-700 my-2 lg:my-4 gap-4 lg:gap-0">
          <div className="flex w-full justify-center lg:justify-start lg:ms-50">
            <h2 className="text-lg lg:text-xl text-neutral-900 font-bold text-center lg:text-left">Penghargaan Kami</h2>
          </div>
          <div className="flex w-full justify-center lg:ms-35">
            <Link className="flex justify-between items-center text-sm lg:text-lg text-neutral-600 font-bold transition-colors duration-300 hover:text-neutral-800">
              Selengkapnya <ArrowRight className="ml-1 transition-transform duration-300 hover:translate-x-1" />
            </Link>
          </div>
        </div>
        <div className="flex justify-center">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full max-w-5xl"
          >
            <CarouselContent>
              {Array.from({ length: 10 }).map((_, index) => (
                <CarouselItem key={index} className="basis-1/2 md:basis-1/4">
                  <div className="p-1">
                    <Card className="bg-neutral-800 transition-transform duration-300 hover:scale-105">
                      <CardContent className="flex items-center justify-center p-3 lg:p-6 h-[120px] lg:h-[202px]"></CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex cursor-pointer transition-all duration-300 hover:bg-neutral-200 w-8 h-8 lg:w-20 lg:h-20 -left-2 lg:-left-4" />
            <CarouselNext className="hidden md:flex cursor-pointer transition-all duration-300 hover:bg-neutral-200 w-8 h-8 lg:w-20 lg:h-20 -right-2 lg:-right-4" />
          </Carousel>
        </div>
      </div>
      {/* close our award section */}

      {/* our partner */}
      <div className="w-full bg-orange-400 pb-8 pt-4">
        <div className="relative flex flex-col items-center justify-center pb-3 lg:pb-5 ">
          <h1 className="text-2xl lg:text-4xl font-bold my-2 lg:my-3 text-neutral-50 text-center">Partner Kami</h1>
          <p className="text-sm lg:text-md text-center max-w-2xl text-neutral-100">Kami memiliki partner sebagai berikut </p>
        </div>
        <div className="relative grid grid-cols-3 lg:flex lg:flex-nowrap w-full justify-center gap-2 lg:gap-3 mt-3 lg:mt-4 px-4 max-w-4xl mx-auto">
          <div className="rounded-xs w-full h-25 lg:w-45 lg:h-40 bg-neutral-900 transition-transform duration-300 hover:scale-105"></div>
          <div className="rounded-xs w-full h-25 lg:w-45 lg:h-40 bg-neutral-900 transition-transform duration-300 hover:scale-105"></div>
          <div className="rounded-xs w-full h-25 lg:w-45 lg:h-40 bg-neutral-900 transition-transform duration-300 hover:scale-105"></div>
          <div className="rounded-xs w-full h-25 lg:w-45 lg:h-40 bg-neutral-900 transition-transform duration-300 hover:scale-105"></div>
          <div className="rounded-xs w-full h-25 lg:w-45 lg:h-40 bg-neutral-900 transition-transform duration-300 hover:scale-105"></div>
          <div className="rounded-xs w-full h-25 lg:w-45 lg:h-40 bg-neutral-900 transition-transform duration-300 hover:scale-105"></div>
        </div>
      </div>

      {/* footer */}
      <Footer />
    </>
  );
}
