import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import MethodPaymentCard from "@/components/payment/MethodPaymentCard";
import PaymentForm from "@/components/payment/PaymentForm";
import OrderSummary from "@/components/payment/OrderSummary";
import { CreditCard, Banknote, Smartphone, Building2 } from "lucide-react";
import { useState } from "react";

export default function PaymentPage() {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("card");

  const paymentMethods = [
    {
      id: "card",
      icon: <div className="w-full h-5 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">CARD</div>,
      label: "",
    },
    {
      id: "eps",
      icon: <div className="w-full h-5 bg-pink-500 rounded text-white text-xs flex items-center justify-center font-bold">EPS</div>,
      label: "",
    },
    {
      id: "giropay",
      icon: <div className="w-full h-5 bg-blue-700 rounded text-white text-xs flex items-center justify-center font-bold">GP</div>,
      label: "Giropay",
    },
    {
      id: "gpay",
      icon: <div className="w-full h-5 bg-green-600 rounded text-white text-xs flex items-center justify-center font-bold">G</div>,
      label: "Gpay",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Side - Payment Methods and Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Payment Methods */}
            <div>
              <h1 className="text-xl font-semibold mb-4">Metode pembayaran</h1>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                {paymentMethods.map((method) => (
                  <MethodPaymentCard key={method.id} icon={method.icon} label={method.label} isSelected={selectedPaymentMethod === method.id} onClick={() => setSelectedPaymentMethod(method.id)} />
                ))}
              </div>
            </div>

            {/* Payment Form */}
            {selectedPaymentMethod === "card" && (
              <div>
                <PaymentForm />
              </div>
            )}

            {/* Other payment methods placeholder */}
            {selectedPaymentMethod !== "card" && (
              <div className="p-8 text-center text-gray-500 border-2 border-dashed border-gray-200 rounded-lg">
                <p>Form untuk {paymentMethods.find((m) => m.id === selectedPaymentMethod)?.label || selectedPaymentMethod} akan ditampilkan di sini</p>
              </div>
            )}
          </div>

          {/* Right Side - Order Summary */}
          <div className="lg:col-span-1">
            <OrderSummary />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
