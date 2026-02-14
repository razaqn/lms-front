import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Clock, BookOpen, Eye, ShoppingCart, Heart } from "lucide-react";
import HeadphonseImg from "@/assets/headphones.jpg";

export default function CourseCard({
  image = HeadphonseImg,
  title = "After Effect",
  category = "Graphic Design",
  description = "We focus on ergonomics and meeting you where you work. It's only a keystroke away",
  rating = 4.0,
  sales = 15,
  originalPrice = 250000,
  discountPrice = 150000,
  duration = "22hr 30min",
  lessons = 64,
  className = "",
}) {
  const formatPrice = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const formatSales = (sales) => {
    return `${sales} Sales`;
  };

  return (
    <Card className={`w-full max-w-[280px] sm:max-w-sm lg:max-w-md mx-auto overflow-hidden border-none hover:shadow-lg transition-shadow duration-300 py-0 ${className}`}>
      <CardContent className="p-0">
        {/* Course Image */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover" />
          {/* Action Buttons */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex justify-center gap-1 sm:gap-2">
            <div className="bg-white/90 backdrop-blur-sm rounded-full p-1.5 sm:p-2 flex items-center justify-center">
              <Heart className="w-3 h-3 md:w-12 md:h-12  fill-neutral-50 text-neutral-900" />
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-full p-1.5 sm:p-2 flex items-center justify-center">
              <ShoppingCart className="w-3 h-3 md:w-12 md:h-12 fill-neutral-50 text-neutral-900" />
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-full p-1.5 sm:p-2 flex items-center justify-center">
              <Eye className="w-3 h-3 md:w-12 md:h-12 fill-neutral-50 text-neutral-900" />
            </div>
          </div>
        </div>

        {/* Course Info */}
        <div className="p-3 sm:p-4 lg:p-5 space-y-2 sm:space-y-3">
          {/* Title and Category */}
          <div className="space-y-1">
            <h3 className="font-bold text-sm sm:text-base lg:text-lg leading-tight text-orange-500 line-clamp-2">{title}</h3>
            <p className="text-xs sm:text-sm font-semibold text-neutral-900">{category}</p>
            <p className="text-xs sm:text-sm text-neutral-500 line-clamp-2 leading-relaxed">{description}</p>
          </div>

          {/* Sales and Rating */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs sm:text-sm text-gray-500 font-semibold">{formatSales(sales)}</span>
            <div className="flex items-center gap-1">
              <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-xs sm:text-sm text-gray-600">{rating}</span>
            </div>
          </div>

          {/* Price */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-sm sm:text-base lg:text-lg font-bold text-orange-500">{formatPrice(discountPrice)}</span>
            <span className="text-xs sm:text-sm text-gray-400 line-through">{formatPrice(originalPrice)}</span>
          </div>

          {/* Duration and Lessons */}
          <div className="flex items-center justify-between text-xs text-gray-500 pt-1">
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3 text-orange-500 flex-shrink-0" />
              <span className="truncate">{duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <BookOpen className="w-3 h-3 text-blue-500 flex-shrink-0" />
              <span className="truncate">{lessons} Lessons</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
