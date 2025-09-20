import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Clock, BookOpen, Trash2 } from "lucide-react";
import handphoneImg from "@/assets/handphone.png";

export default function CartItemCard({
  image = handphoneImg,
  title = "Ultimate Adobe Photoshop Training: From Beginner to Pro",
  category = "Graphic Design",
  rating = 4.9,
  reviewCount = 1200,
  duration = "22h 30min",
  lessons = 64,
  originalPrice = 250000,
  currentPrice = 150000,
  onRemove,
  className = "",
}) {
  const formatPrice = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <Card className={`w-full border border-gray-200 hover:shadow-md transition-shadow duration-200 ${className}`}>
      <CardContent className="p-4">
        <div className="block md:hidden flex-shrink-0 w-full mb-4 h-[160px] -mt-5">
          <img src={image} alt={title} className="w-full h-full object-cover rounded-lg" />
        </div>

        <div className="flex gap-4">
          {/* Course Image */}
          <div className="hidden md:block flex-shrink-0 w-32 h-20 md:w-sm md:h-35">
            <img src={image} alt={title} className="w-full h-full object-cover rounded-lg" />
          </div>

          {/* Course Details */}
          <div className="flex-1 min-w-0">
            <div className="space-y-2">
              {/* Title */}
              <h3 className="font-semibold text-sm sm:text-base md:text-lg leading-tight line-clamp-2">{title}</h3>

              {/* Category */}
              <p className="text-xs sm:text-sm text-gray-600 font-medium">{category}</p>

              {/* Rating */}
              <div className="flex items-center gap-2">
                <div className="flex  items-center gap-1">
                  <Star className="w-[16px] h-[16px] fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">{rating}</span>
                </div>
                <span className="text-xs text-gray-500">({reviewCount} reviews)</span>
              </div>

              {/* Duration and Lessons */}
              <div className="flex items-center gap-4 text-xs sm:text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Clock className="w-[16px] h-[16px] text-orange-500" />
                  <span>{duration}</span>
                </div>
                <div className="flex items-center gap-1">
                  <BookOpen className="w-[16px] h-[16px] text-blue-500" />
                  <span>{lessons} Lessons</span>
                </div>
              </div>
            </div>
          </div>

          {/* Price and Actions */}
          <div className="flex flex-col items-end justify-between min-w-0">
            {/* Price */}
            <div className="text-right">
              <div className="text-lg sm:text-xl font-bold text-orange-500">{formatPrice(currentPrice)}</div>
              <div className="text-xs sm:text-sm text-gray-500 line-through">{formatPrice(originalPrice)}</div>
            </div>

            {/* Delete Button */}
            <Button variant="ghost" size="sm" onClick={onRemove} className="text-red-500 hover:text-red-700 hover:bg-red-50 p-2 h-auto">
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
