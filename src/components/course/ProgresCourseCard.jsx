import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import HeadphonseImg from "@/assets/headphones.jpg";
import { Button } from "../ui/button";
import { Progress } from "../ui/progress";

export default function ProgressCourseCard({ 
  image = HeadphonseImg, 
  title = "Ultimate Adobe Photoshop Training: From Beginner to Pro", 
  category = "Graphic Design", 
  progress = 50,
  className = "" 
}) {
  return (
    <Card className={`w-full max-w-[320px] sm:max-w-[350px] md:max-w-[380px] lg:max-w-[400px] mx-auto overflow-hidden border-none hover:shadow-lg transition-shadow duration-300 py-0 ${className}`}>
      <CardContent className="p-0">
        {/* Course Image */}
        <div className="relative aspect-[16/10] sm:aspect-[4/3] overflow-hidden mb-3 sm:mb-4">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>

        {/* Course Info */}
        <div className="space-y-2 sm:space-y-3 px-3 sm:px-4 pb-3 sm:pb-4">
          {/* Title */}
          <div className="space-y-2">
            <h3 className="font-bold text-sm sm:text-base lg:text-lg leading-tight line-clamp-2 mb-2">{title}</h3>
            
            {/* Category */}
            <p className="text-xs sm:text-sm font-medium text-neutral-600">{category}</p>
            
            {/* Progress Section */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs sm:text-sm font-medium text-orange-500">
                  {progress}% Selesai
                </span>
              </div>
              <Progress 
                value={progress} 
                className="h-2 bg-gray-200 [&>div]:bg-orange-500" 
              />
            </div>
            
            {/* Continue Button */}
            <div className="flex justify-end pt-2">
              <Button 
                variant="ghost" 
                size="sm"
                className="text-orange-500 hover:text-orange-700 hover:bg-orange-50 transition-colors cursor-pointer p-2 h-auto"
              >
                Lanjutkan <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
