import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function PaymentForm() {
  return (
    <div className="space-y-6">
      {/* Card Number */}
      <div className="space-y-2">
        <Label htmlFor="cardNumber">Card number</Label>
        <div className="relative">
          <Input id="cardNumber" placeholder="1234 1234 1234 1234" className="pr-20 border border-gray-300 focus-visible:border-blue-500 focus-visible:ring-0 focus-visible:outline-none" />
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex gap-1">
            <div className="w-[40px] h-[18px] bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">VISA</div>
            <div className="w-[40px] h-[18px] bg-red-600 rounded text-white text-xs flex items-center justify-center font-bold">MC</div>
            <div className="w-[40px] h-[18px] bg-blue-500 rounded text-white text-xs flex items-center justify-center font-bold">AE</div>
          </div>
        </div>
      </div>

      {/* Expiry and CVC */}
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="expiry">Expiry</Label>
          <Input id="expiry" placeholder="MM / YY" className="pr-20 border border-gray-300 focus-visible:border-blue-500 focus-visible:ring-0 focus-visible:outline-none" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="cvc">CVC</Label>
          <Input id="cvc" placeholder="CVC" className="pr-20 border border-gray-300 focus-visible:border-blue-500 focus-visible:ring-0 focus-visible:outline-none" />
        </div>
      </div>

      {/* Country */}
      <div className="space-y-2">
        <Label htmlFor="country">Country</Label>
        <select
          id="country"
          className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground pr-20 border-gray-300 focus-visible:border-blue-500 focus-visible:ring-0 focus-visible:outline-none"
          defaultValue="us"
        >
          <option value="us">United States</option>
          <option value="id">Indonesia</option>
          <option value="sg">Singapore</option>
          <option value="my">Malaysia</option>
        </select>
      </div>

      {/* Postal Code */}
      <div className="space-y-2">
        <Label htmlFor="postalCode">Postal code</Label>
        <Input id="postalCode" placeholder="90210" className="pr-20 border border-gray-300 focus-visible:border-blue-500 focus-visible:ring-0 focus-visible:outline-none" />
      </div>
    </div>
  );
}
