import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Mail, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  return (
    <>
      <div className="w-full max-w-md mx-auto bg-white p-4 sm:p-6 lg:p-8 rounded-lg shadow-lg mt-10">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Sign Up</h1>
          <p className="text-sm sm:text-base text-gray-600">
            If you already have an account register, you can{" "}
            <Link to="/login" className="text-orange-500 hover:text-orange-700">
              Login Here
            </Link>{" "}
            !
          </p>
        </div>

        {/* Form */}
        <form className="space-y-4 sm:space-y-6">
          {/* Email Field */}
          <div className="mb-10">
            <Label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 sm:h-5 sm:w-5" />
              <Input
                id="email"
                type="email"
                placeholder="Enter your email address"
                className="p-3 sm:p-4 pl-8 sm:pl-10 h-10 sm:h-12 border-0 rounded-none border-b-2 border-b-neutral-900 focus:border-b-orange-500 focus:outline-none focus:ring-0 focus-visible:ring-0 text-sm sm:text-base"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          {/* Username Field */}
          <div>
            <Label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Username
            </Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 sm:h-5 sm:w-5" />
              <Input
                id="username"
                type="text"
                placeholder="Enter your username"
                className="p-3 sm:p-4 pl-8 sm:pl-10 h-10 sm:h-12 border-0 rounded-none border-b-2 border-b-neutral-900 focus:border-b-orange-500 focus:outline-none focus:ring-0 focus-visible:ring-0 text-sm sm:text-base"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>

          {/* Password Field */}
          <div>
            <Label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </Label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 sm:h-5 sm:w-5" />
              <Input
                id="password"
                type="password"
                placeholder="Enter your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="p-3 sm:p-4 pl-8 sm:pl-10 h-10 sm:h-12 border-0 rounded-none border-b-2 border-b-neutral-900 focus:border-b-orange-500 focus:outline-none focus:ring-0 focus-visible:ring-0 text-sm sm:text-base"
                required
              />
            </div>
          </div>

          {/* Sign In Button */}
          <Button type="submit" className="w-full h-12 sm:h-16 lg:h-20 py-3 sm:py-4 lg:py-5 cursor-pointer bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg transition-colors text-sm sm:text-base">
            Sign Up
          </Button>

          {/* Divider */}
          <div className="relative my-4 sm:my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-xs sm:text-sm">
              <span className="px-3 sm:px-4 bg-white text-gray-500">OR</span>
            </div>
          </div>

          {/* Social Login Buttons */}
          <div className="grid grid-cols-2 gap-2 sm:gap-4">
            <Button type="button" variant="outline" className="h-10 sm:h-12 py-2 sm:py-3 cursor-pointer border-gray-300 hover:bg-gray-50 flex items-center justify-center gap-1 sm:gap-2">
              <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              <span className="text-gray-700 text-xs sm:text-sm">Google</span>
            </Button>

            <Button type="button" variant="outline" className="h-10 sm:h-12 py-2 sm:py-3 cursor-pointer border-gray-300 hover:bg-gray-50 flex items-center justify-center gap-1 sm:gap-2">
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="#1877F2" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <span className="text-gray-700 text-xs sm:text-sm">Facebook</span>
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
