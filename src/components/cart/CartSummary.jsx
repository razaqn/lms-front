import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function CartSummary({ 
  items = [],
  subtotal = 450000,
  discount = 0,
  className = ""
}) {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  const total = subtotal - discount;

  return (
    <Card className={`w-full max-w-sm ${className}`}>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Harga</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Price Breakdown */}
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Total Harga</span>
            <span className="font-medium">{formatPrice(subtotal)}</span>
          </div>
          
          {discount > 0 && (
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Diskon</span>
              <span className="font-medium text-green-600">-{formatPrice(discount)}</span>
            </div>
          )}
          
          <hr className="border-gray-200" />
          
          <div className="flex justify-between items-center text-lg font-semibold">
            <span>Total</span>
            <span className="text-orange-500">{formatPrice(total)}</span>
          </div>
        </div>

        {/* Checkout Button */}
        <Button 
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 rounded-lg"
          size="lg"
        >
          Checkout
        </Button>
      </CardContent>
    </Card>
  );
}