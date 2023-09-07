"use client";
import LoginForm from "@/components/LoginForm";
import Image from "next/image";
import { useEffect, useState } from "react";

const Login = () => {
  //   const { loggedIn, setIsLoggedIn } = useLoginStore();
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <div className="w-full h-full flex gap-2">
      {!isMobile && (
        <div className="h-full w-1/2 flex justify-center items-center z-10">
          <Image src="/noodles.png" alt="" height={400} width={400} />
        </div>
      )}
      <div
        className={`h-full ${
          isMobile ? "w-full" : "w-1/2"
        } flex items-center justify-center`}
      >
        <div className="h-2/3  w-2/3 flex flex-col items-center justify-center gap-10 ">
          <h2 className=" text-xl md:text-3xl transition-all">
            Welcome to{" "}
            <span className=" text-[50px] md:text-[100px] bg-gradient-to-r bg-clip-text text-transparent from-blue-500 via-orange-400 to-orange-400 animate-text">
              noodle.io
            </span>
          </h2>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
