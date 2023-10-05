"use client";
import { getUser } from "@/server/getUser";
import { useCurrentUser } from "@/utils/stores/user";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useQuery } from "react-query";

const Settings = () => {
  const { data: session } = useSession();

  const { data } = useQuery("user", () => getUser(session?.user?.name), {
    enabled: !!session?.user?.name,
  });

  const user = data?.user;

  return (
    <div className="flex h-full w-full flex-col items-center z-10 ">
      <div className="w-full h-[80px] flex justify-start items-center px-10 ">
        <h1 className="text-2xl">Settings</h1>
      </div>
      <div className="w-full text-white flex flex-col items-center gap-8">
        <div className="rounded-full border overflow-hidden">
          <Image
            src="/test-icons/spiderman.png"
            alt="profile_picture"
            height={80}
            width={80}
          />
        </div>
        <div className="w-full flex flex-col items-center px-10 gap-4">
          <div className="w-full flex items-center justify-between">
            <div>
              <h2 className="text-xl">Username</h2>
              <p className="text-md text-gray-400">
                The name shown to your friends
              </p>
            </div>
            <div>
              <h2 className="text-2xl">{user?.username}</h2>
            </div>
          </div>
          <hr className="w-full" />
          <div className="w-full flex items-center justify-between">
            <div>
              <h2 className="text-xl">Password</h2>
              <p className="text-md text-gray-400">
                Super secure string used to access your account
              </p>
            </div>
            <div>
              <button className="px-8 py-2 bg-transparent hover:bg-white hover:text-black transition-all rounded-sm border">
                Change password
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
