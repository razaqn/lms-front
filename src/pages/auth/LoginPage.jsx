import LoginForm from "@/components/forms/LoginForm";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import SideTemplate from "./SideTemplate";

export default function LoginPage() {
  return (
    <>
      <Navbar />
      <SideTemplate>
        <LoginForm />
      </SideTemplate>
      <Footer />
    </>
  );
}
