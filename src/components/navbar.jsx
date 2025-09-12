import { Search, ShoppingCart } from "lucide-react";
import suviImg from "../assets/suvi.png";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <>
      <nav className="flex justify-evenly bg-neutral-50 h-60 shadow-lg px-6 py-3">
        <img src={suviImg} alt="suvi.png" className="w-80 h-full" />
        <div className="flex items-center w-xl rounded-lg border border-neutral-900 overflow-hidden">
          <input type="text" placeholder="Search..." className="flex-8 px-4 py-2 text-sm outline-none" />
          <div className="bg-orange-500 h-full w-40 flex justify-center items-center border-l">
            <Search className="text-neutral-50 text-sm" />
          </div>
        </div>
        <div className="flex justify-center gap-4 items-center">
          <ShoppingCart className="w-24 h-24 cursor-pointer mx-4" />
          <Button className="border border-orange-500 text-orange-500 font-bold cursor-pointer">Login</Button>
          <Button className="border border-orange-500 bg-orange-500 text-neutral-50 font-bold cursor-pointer">Sign Up</Button>
        </div>
      </nav>
    </>
  );
}
