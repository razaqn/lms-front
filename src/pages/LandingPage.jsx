import Navbar from "@/components/navbar";
import togaimg from "../assets/toga.png";
import { Button } from "@/components/ui/button";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <div className="flex justify-evenly h-[400px] items-center">
        <div className="flex flex-col w-sm">
          <h1 className="text-3xl font-bold my-2">
            Lorem ipsum <br /> dolor sit.
          </h1>
          <p className="text-neutral-500 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, accusamus.</p>
          <Button className="bg-blue-500 text-neutral-50 cursor-pointer w-96">Get Started</Button>
        </div>
        <div>
          <img src={togaimg} className="w-sm h-sm" alt="toga.png" />
        </div>
      </div>
    </>
  );
}
