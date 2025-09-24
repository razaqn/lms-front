import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function OrderSummary() {
  const courses = [
    {
      id: 1,
      title: "Adobe After Effect for beginners",
      category: "Graphic Design",
      originalPrice: 250000,
      discountPrice: 200000,
      image: "/src/assets/headphones.jpg",
    },
    {
      id: 2,
      title: "Adobe After Effect for beginners",
      category: "Graphic Design",
      originalPrice: 250000,
      discountPrice: 150000,
      image: "/src/assets/headphones.jpg",
    },
  ];

  const formatPrice = (price) => {
    return `Rp ${price.toLocaleString("id-ID")}`;
  };

  const totalOriginal = courses.reduce((sum, course) => sum + course.originalPrice, 0);
  const totalDiscount = courses.reduce((sum, course) => sum + course.discountPrice, 0);
  const savings = totalOriginal - totalDiscount;

  return (
    <Card className="w-full border-neutral-400 rounded-md">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Harga</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Price Summary */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Harga asli</span>
            <span className="text-orange-500 font-semibold">{formatPrice(totalOriginal)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Diskon</span>
            <span className="text-green-600 font-semibold">-{formatPrice(savings)}</span>
          </div>
        </div>

        <div className="border-t border-gray-200 my-4"></div>

        <div className="flex justify-between font-semibold">
          <span>Total:</span>
          <span className="text-orange-500">{formatPrice(totalDiscount)}</span>
        </div>

        <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Lanjutkan</Button>

        <div className="border-t border-gray-200 my-4"></div>

        {/* Course Details */}
        <div>
          <h3 className="font-semibold mb-3">Detail pesanan</h3>
          <div className="space-y-3">
            {courses.map((course) => (
              <div key={course.id} className="flex gap-3">
                <div className="w-16 h-16 bg-yellow-400 rounded-lg flex-shrink-0 overflow-hidden">
                  <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-sm text-orange-500 mb-1">{course.title}</h4>
                  <p className="text-xs text-gray-600 mb-2">{course.category}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-orange-500 font-semibold text-sm">{formatPrice(course.discountPrice)}</span>
                    <span className="text-gray-400 line-through text-xs">{formatPrice(course.originalPrice)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
