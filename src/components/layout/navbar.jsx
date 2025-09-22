import { Search, ShoppingCart, Menu, X, Heart } from "lucide-react";
import { useState } from "react";
import suviImg from "../../assets/suvi.png";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import ProfileIcon from "../common/profileIcon";

export default function Navbar({ user }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isOpening, setIsOpening] = useState(false);
  const navigate = useNavigate();

  function handleToLoginPage() {
    navigate({
      pathname: "/login",
    });
  }

  function handleCartButton() {
    navigate({
      pathname: "/cart",
    });
  }

  function handleToRegisterPage() {
    navigate({
      pathname: "/register",
    });
  }

  function handleSearchButton() {
    navigate({
      pathname: "/search",
    });
  }

  const toggleMenu = () => {
    if (isMenuOpen) {
      setIsAnimating(true);
      setTimeout(() => {
        setIsMenuOpen(false);
        setIsAnimating(false);
      }, 300);
    } else {
      setIsMenuOpen(true);
      setIsOpening(true);
      setTimeout(() => {
        setIsOpening(false);
      }, 50);
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between lg:justify-evenly bg-neutral-50 h-60 shadow-lg px-6 py-3">
        <img src={suviImg} alt="suvi.png" className="w-80 h-full" />

        {/* Search bar - hidden on mobile */}
        <div className="hidden lg:flex items-center w-xl rounded-lg border border-neutral-900 overflow-hidden">
          <input type="text" placeholder="Search..." className="flex-8 px-4 py-2 text-sm outline-none" />
          <Button className="bg-orange-500 h-full w-40 flex justify-center items-center border-l rounded-none cursor-pointer hover:bg-orange-600" onClick={handleSearchButton}>
            <Search className="text-neutral-50 text-sm" />
          </Button>
        </div>

        {!user ? (
          <>
            {/* Desktop menu unauthenticated */}
            <div className="hidden lg:flex justify-center gap-4 items-center">
              <ShoppingCart className="w-24 h-24 cursor-pointer mx-4" onClick={handleCartButton} />

              <Link to="/login">
                <Button className="border border-orange-500 text-orange-500 font-bold cursor-pointer">Login</Button>
              </Link>

              <Link to="/register">
                <Button className="border border-orange-500 bg-orange-500 text-neutral-50 font-bold cursor-pointer">Sign Up</Button>
              </Link>
            </div>
          </>
        ) : (
          <>
            {/* Desktop menu autheticated */}
            <div className="hidden lg:flex justify-center gap-4 items-center">
              <Button className="cursor-pointer font-medium me-4">Kelas</Button>
              <Heart className="w-24 h-24 cursor-pointer" />
              <ShoppingCart className="w-24 h-24 cursor-pointer me-4" onClick={handleCartButton} />
              <ProfileIcon />
            </div>
          </>
        )}

        {/* Mobile hamburger menu */}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMenu} className="p-2 transition-transform duration-300 hover:scale-110">
            <div className="transition-transform duration-300">{isMenuOpen ? <X className="w-13" /> : <Menu className="w-13" />}</div>
          </button>
        </div>

        {/* Mobile menu dropdown */}
        {(isMenuOpen || isAnimating) && (
          <div
            className={`lg:hidden absolute top-full left-0 w-full bg-neutral-50 shadow-lg border-t transform transition-all duration-300 ease-in-out ${
              isOpening ? "-translate-y-4 opacity-0" : isMenuOpen && !isAnimating ? "translate-y-0 opacity-100" : isAnimating ? "-translate-y-2 opacity-0" : "translate-y-0 opacity-100"
            }`}
          >
            <div
              className={`flex flex-col p-4 space-y-4 transition-all duration-300 ${
                isOpening ? "transform -translate-y-2 opacity-0" : isMenuOpen && !isAnimating ? "transform translate-y-0 opacity-100" : isAnimating ? "transform -translate-y-1 opacity-0" : "transform translate-y-0 opacity-100"
              }`}
            >
              {/* Mobile search */}
              <div className="flex items-stretch rounded-lg border border-neutral-900 overflow-hidden transition-all duration-300 focus-within:border-orange-500 focus-within:shadow-md">
                <input type="text" placeholder="Search..." className="flex-1 px-4 py-2 text-sm outline-none transition-all duration-300" />
                <Button className="bg-orange-500 w-22 flex justify-center items-center border-l transition-all duration-300 hover:bg-orange-600 rounded-none" onClick={handleSearchButton}>
                  <Search className="text-neutral-50 w-5 h-5 transition-transform duration-300 hover:scale-110" />
                </Button>
              </div>

              {/* Mobile menu items */}
              {!user ? (
                <div className="flex flex-col space-y-3">
                  <Button onClick={handleCartButton} className="flex items-center justify-center py-2 transition-colors duration-300 hover:bg-gray-100 rounded-lg">
                    <ShoppingCart className="w-5 h-5 cursor-pointer transition-transform duration-300 hover:scale-110" />
                    <span className="ml-2">Cart</span>
                  </Button>
                  <Button onClick={handleToLoginPage} className="border border-orange-500 text-orange-500 font-bold cursor-pointer w-full transition-all duration-300 hover:bg-orange-50">
                    Login
                  </Button>
                  <Button onClick={handleToRegisterPage} className="border border-orange-500 bg-orange-500 text-neutral-50 font-bold cursor-pointer w-full transition-all duration-300 hover:bg-orange-600">
                    Sign Up
                  </Button>
                </div>
              ) : (
                <div className="flex items-center justify-evenly py-2 transition-colors duration-300 hover:bg-gray-100 rounded-lg">
                  <Button className="cursor-pointer font-medium">Kelas</Button>
                  <div className="flex justify-center gap-4">
                    <Heart className="w-24 h-24 cursor-pointer" />
                    <Button onClick={handleCartButton} className="w-24 h-24 cursor-pointer me-4">
                      <ShoppingCart className="w-24 h-24 cursor-pointer me-4" />
                    </Button>
                  </div>
                  <ProfileIcon />
                </div>
              )}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
