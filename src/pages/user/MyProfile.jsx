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
      <div className="w-full mt-15 py-4 px-7">
        {/* title */}
        <h1 className="text-neutral-900 font-bold text-2xl">Profile Saya</h1>
        <hr className="border-t-2 border-neutral-300 my-4" />
        {/* Biodata */}
        <div className="flex justify-between items-center mb-7">
          <div className="text-neutral-600">
            <h2 className="text-xl mb-1">Biodata</h2>
            <p className="text-neutral-500">Berikan informasi anda agar orang lain dapat mengenal anda.</p>
          </div>
          <Button className="bg-blue-600 text-white hover:bg-blue-700 cursor-pointer">Edit Profile</Button>
        </div>
        {/* Data Profile */}
        <div className="w-[90%] flex flex-col items-centers gap-4">
          <InputWithLabel label="Nama Lengkap" id="name" type="text" placeholder="Enter your name" value="asep" />
          {/* foto */}
          <div className="flex gap-9">
            <Label className="text-md font-semibold">Foto Profile</Label>
            <img src={togaImg} alt="profile-pic" className="w-[100px] h-[100px] border-2 border-neutral-400 p-1   " />
            <div className="flex flex-col gap-1">
              <Button className="w-[50%] bg-blue-600 text-white hover:bg-blue-700 cursor-pointer">Edit Profile</Button>
              <p className="text-neutral-500">Ukuran maksimal file 2 mb</p>
            </div>
          </div>
        </div>

        {/* My Class */}
        <div className="w-full mt-15 px-4 sm:px-8 lg:px-20 pb-10">
          <h1 className="ms-0 font-bold mb-4 text-xl sm:text-2xl">Kelas Populer</h1>
          <hr className="border-t-2 border-neutral-300 my-4" />
          <div className="grid grid-cols-4 gap-4">
            <ProgressCourseCard />
            <ProgressCourseCard />
          </div>
        </div>

        {/* My Sertificate */}
        <div className="w-full px-4 sm:px-8 lg:px-20 pb-10">
          <h1 className="ms-0 font-bold mb-4 text-xl sm:text-2xl">Sertifikat saya</h1>
          <hr className="border-t-2 border-neutral-300 my-4" />
          <div className="grid grid-cols-4 gap-4">
            <MySertificateCard />
            <MySertificateCard />
          </div>
        </div>
      </div>
    </>
  );
}
