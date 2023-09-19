import React from "react";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";

const Header = () => {
  const { data: sessionData } = useSession();
  const username = sessionData?.user.name?.split(/[, ]+/);
  const name = username[0];

  return (
    <div className="h-fit w-full p-5">
      <div className="flex items-stretch justify-between sm:justify-evenly  sm:p-5">
        <div className="">
          <h1 className="pb-2 pt-5 text-6xl font-black sm:justify-self-stretch sm:text-7xl sm:tracking-wide">
            {sessionData?.user?.name ? `${name} Times` : ""}
          </h1>
          <p className="text-xs font-semibold sm:text-lg">Established 2023</p>
        </div>

        <div className="py-1">
          <span className="font-semibold">Chief Editor:</span>
          {sessionData?.user ? (
            <div className="p-2 grayscale">
              <Image
                className="w-15 h-15 border-2 border-neutral-800"
                width={50}
                height={50}
                src={sessionData?.user?.image}
                alt={sessionData?.user?.name}
              ></Image>
              <div className="mt-2 flex items-center justify-evenly rounded-md border bg-neutral-500 font-semibold">
                <button onClick={() => signOut()}>Sign Out</button>
              </div>
            </div>
          ) : (
            <button>Login</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
