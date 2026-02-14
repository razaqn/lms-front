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
      <div className="fixed flex justify-center items-center inset-0 bg-black/80 z-100 h-full px-4 sm:px-0" onClick={handleBackdropClick}>
        <Card className="h-auto max-h-[90vh] w-full max-w-sm sm:max-w-md md:w-md bg-neutral-50 rounded-none border-none overflow-y-auto" onClick={handleCardClick}>
          {/*Image bisa diganti dengan aspect ratio */}
          <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 mx-auto">
            <FileBadge className="w-full h-full" />
          </div>
          <div className="px-4 pb-4">
            <CardHeader className="mb-2 sm:mb-4">
              <CardTitle className="mx-auto text-lg sm:text-xl">Sertifikasi BNSP</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-neutral-500 font-semibold mb-3 text-sm sm:text-base">Dapatkan uji kompetensi sertifikasi BNSP dengan membayar</p>

              {/* nominal */}
              <p className="text-orange-500 text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4">1.000.000</p>

              {/* beli */}
              <div className="w-full flex justify-center h-[45px] sm:h-[50px] mb-2">
                <Button className="border-none rounded-md m-auto w-full h-full bg-orange-500 text-neutral-50 cursor-pointer hover:bg-orange-600 text-sm sm:text-base">Beli Sertifikasi</Button>
              </div>

              {/* desription */}
              <p className="text-center text-neutral-500 font-semibold mb-4 sm:mb-7 text-sm sm:text-base">Manfaat yang anda dapatkan setelah mendapat sertifikat BNSP</p>

              {/* list of advantage */}
              <div className="flex flex-col gap-3 sm:gap-4">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-[30px] sm:w-[45px] rounded-full p-2 sm:p-3 bg-green-500 flex-shrink-0">
                    <Check className="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] text-neutral-50" />
                  </div>
                  <p className="text-neutral-900 text-sm sm:text-md font-semibold">Dapat membantu perusahaan atau organisasi</p>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-[30px] sm:w-[45px] rounded-full p-2 sm:p-3 bg-green-500 flex-shrink-0">
                    <Check className="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] text-neutral-50" />
                  </div>
                  <p className="text-neutral-900 text-sm sm:text-md font-semibold">Dapat membantu perusahaan atau organisasi</p>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-[30px] sm:w-[45px] rounded-full p-2 sm:p-3 bg-green-500 flex-shrink-0">
                    <Check className="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] text-neutral-50" />
                  </div>
                  <p className="text-neutral-900 text-sm sm:text-md font-semibold">Dapat membantu perusahaan atau organisasi</p>
                </div>
              </div>
            </CardContent>
          </div>
        </Card>
      </div>
    </>
  );
}
