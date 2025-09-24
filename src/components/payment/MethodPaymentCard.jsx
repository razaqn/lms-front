import { Card } from "@/components/ui/card";

export default function MethodPaymentCard({ icon, label, isSelected = false, onClick }) {
  return (
    <Card className={`p-3 cursor-pointer border-2 transition-colors ${isSelected ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:border-gray-300"}`} onClick={onClick}>
      <div className="flex flex-col items-center gap-2">
        <div className="w-[50px] h-16 flex items-center justify-center">{icon}</div>
        {label && <span className="text-xs text-gray-600 text-center">{label}</span>}
      </div>
    </Card>
  );
}
