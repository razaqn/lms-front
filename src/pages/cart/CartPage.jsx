import React from "react";
import Navbar from "@/components/layout/Navbar";
import CartItemCard from "@/components/cart/CartItemCard";
import CartSummary from "@/components/cart/CartSummary";
import handphoneImg from "@/assets/handphone.png";
import Footer from "@/components/layout/Footer";

export default function CartPage() {
  // Sample cart data - sesuai dengan gambar
  const cartItems = [
    {
      id: 1,
      image: handphoneImg,
      title: "Ultimate Adobe Photoshop Training: From Beginner to Pro",
      category: "Graphic Design",
      rating: 4.9,
      reviewCount: 1200,
      duration: "22h 30min",
      lessons: 64,
      originalPrice: 250000,
      currentPrice: 150000,
    },
    {
      id: 2,
      image: handphoneImg,
      title: "Ultimate Adobe Photoshop Training: From Beginner to Pro",
      category: "Graphic Design",
      rating: 4.9,
      reviewCount: 1200,
      duration: "22h 30min",
      lessons: 64,
      originalPrice: 250000,
      currentPrice: 150000,
    },
    {
      id: 3,
      image: handphoneImg,
      title: "Ultimate Adobe Photoshop Training: From Beginner to Pro",
      category: "Graphic Design",
      rating: 4.9,
      reviewCount: 1200,
      duration: "22h 30min",
      lessons: 64,
      originalPrice: 250000,
      currentPrice: 150000,
    },
  ];

  const handleRemoveItem = (itemId) => {
    console.log("Remove item:", itemId);
    // Implementasi remove item logic
  };

  const subtotal = cartItems.reduce((total, item) => total + item.currentPrice, 0);

  return (
    <>
      <Navbar />
      <div className="mt-15 min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Cart Items Section */}
            <div className="flex-1">
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <CartItemCard
                    key={item.id}
                    image={item.image}
                    title={item.title}
                    category={item.category}
                    rating={item.rating}
                    reviewCount={item.reviewCount}
                    duration={item.duration}
                    lessons={item.lessons}
                    originalPrice={item.originalPrice}
                    currentPrice={item.currentPrice}
                    onRemove={() => handleRemoveItem(item.id)}
                  />
                ))}
              </div>
            </div>

            {/* Cart Summary Sidebar */}
            <div className="lg:w-sm">
              <div className="sticky top-8">
                <CartSummary items={cartItems} subtotal={subtotal} discount={0} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
