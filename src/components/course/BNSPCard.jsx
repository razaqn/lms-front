import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
// import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { Check, FileBadge } from "lucide-react";
import { Button } from "../ui/button";

export default function BNSPCard({ setIsBNSP }) {
  const handleBackdropClick = () => {
    setIsBNSP(false);
  };

  const handleCardClick = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      <div className="fixed flex justify-center items-center inset-0 bg-black/80 z-100 h-full" onClick={handleBackdropClick}>
        <Card className="h-[650px]  md:w-md bg-neutral-50 rounded-none border-none" onClick={handleCardClick}>
          {/*Image bisa diganti dengan aspect ratio */}
          <div className="w-96 h-96 mx-auto">
            <FileBadge className="w-full h-full" />
          </div>
          <div className="px-4">
            <CardHeader className="mb-4">
              <CardTitle className="mx-auto text-xl">Sertifikasi BNSP</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-neutral-500 font-semibold mb-3">Dapatkan uji kompetensi sertifikasi BNSP dengan membayar</p>

              {/* nominal */}
              <p className="text-orange-500 text-4xl font-bold text-center mb-4">1.000.000</p>

              {/* beli */}
              <div className="w-full flex justify-center h-[50px] mb-2">
                <Button className="border-none rounded-md m-auto w-full h-full bg-orange-500 text-neutral-50 cursor-pointer hover:bg-orange-600">Beli Sertifikasi</Button>
              </div>

              {/* desription */}
              <p className="text-center text-neutral-500 font-semibold mb-7">Manfaat yang anda dapatkan setelah mendapat sertifikat BNSP</p>

              {/* list of advantage */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-[50px] rounded-full p-3 bg-green-500">
                    <Check className="w-[20px] h-[20px] text-neutral-50" />
                  </div>
                  <p className="text-neutral-900 text-md font-semibold">Dapat membantu perusahaan atau organisasi</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-[50px] rounded-full p-3 bg-green-500">
                    <Check className="w-[20px] h-[20px] text-neutral-50" />
                  </div>
                  <p className="text-neutral-900 text-md font-semibold">Dapat membantu perusahaan atau organisasi</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-[50px] rounded-full p-3 bg-green-500">
                    <Check className="w-[20px] h-[20px] text-neutral-50" />
                  </div>
                  <p className="text-neutral-900 text-md font-semibold">Dapat membantu perusahaan atau organisasi</p>
                </div>
              </div>
            </CardContent>
          </div>
        </Card>
      </div>
    </>
  );
}
