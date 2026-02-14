import Navbar from "@/components/layout/navbar";
import { Button } from "@/components/ui/button";
import InputWithLabel from "@/components/common/InputWithLabel";
import { Label } from "@/components/ui/label";
import togaImg from "@/assets/toga.png";
import ProgressCourseCard from "@/components/course/ProgresCourseCard";
import MySertificateCard from "@/components/common/MySertificateCard";

export default function Profile() {
  return (
    <>
      <Navbar />
      <div className="w-full mt-15 py-4 px-4 sm:px-7">
        {/* title */}
        <h1 className="text-neutral-900 font-bold text-xl sm:text-2xl">Profile Saya</h1>
        <hr className="border-t-2 border-neutral-300 my-4" />
        {/* Biodata */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 sm:gap-0 mb-7">
          <div className="text-neutral-600">
            <h2 className="text-xl mb-1">Biodata</h2>
            <p className="text-neutral-500">Berikan informasi anda agar orang lain dapat mengenal anda.</p>
          </div>
          <Button className="bg-blue-600 text-white hover:bg-blue-700 cursor-pointer w-full sm:w-auto">Edit Profile</Button>
        </div>
        {/* Data Profile */}
        <div className="w-full sm:w-[90%] flex flex-col gap-4">
          <InputWithLabel label="Nama Lengkap" id="name" type="text" placeholder="Enter your name" value="asep" />
          {/* foto */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-9">
            <Label className="text-md font-semibold">Foto Profile</Label>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <img src={togaImg} alt="profile-pic" className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] border-2 border-neutral-400 p-1" />
              <div className="flex flex-col gap-2">
                <Button className="w-full sm:w-auto bg-blue-600 text-white hover:bg-blue-700 cursor-pointer">Edit Profile</Button>
                <p className="text-neutral-500 text-sm">Ukuran maksimal file 2 mb</p>
              </div>
            </div>
          </div>
        </div>

        {/* My Class */}
        <div className="w-full mt-8 sm:mt-15 px-4 sm:px-8 lg:px-20 pb-10">
          <h1 className="ms-0 font-bold mb-4 text-lg sm:text-xl lg:text-2xl">Kelas Populer</h1>
          <hr className="border-t-2 border-neutral-300 my-4" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <ProgressCourseCard />
            <ProgressCourseCard />
          </div>
        </div>

        {/* My Sertificate */}
        <div className="w-full px-4 sm:px-8 lg:px-20 pb-10">
          <h1 className="ms-0 font-bold mb-4 text-lg sm:text-xl lg:text-2xl">Sertifikat saya</h1>
          <hr className="border-t-2 border-neutral-300 my-4" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <MySertificateCard />
            <MySertificateCard />
          </div>
        </div>
      </div>
    </>
  );
}
