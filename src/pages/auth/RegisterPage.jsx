import Navbar from "@/components/layout/navbar";
import RegisterForm from "@/components/forms/RegisterForm";
import Footer from "@/components/layout/footer";
import SideTemplate from "./SideTemplate";

export default function LoginPage() {
  return (
    <>
      <Navbar />
      <SideTemplate>
        <RegisterForm />
      </SideTemplate>
      <Footer />
    </>
  );
}
