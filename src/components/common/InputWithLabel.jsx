import { Input } from "../ui/input";
import { Label } from "../ui/label";

export default function InputWithLabel({ label, id, type, placeholder, value }) {
  return (
    <div className="flex w-full max-w-sm items-center gap-3">
      <Label className="text-md font-semibold" htmlFor={id}>
        {label}
      </Label>
      <Input
        className="border-2 flex-1 px-3 border-neutral-600 rounded-sm focus-visible:border-blue-500 focus-visible:ring-0 focus-visible:outline-none"
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => console.log(e.target.value)}
      />
    </div>
  );
}
