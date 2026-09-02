"use client";

import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex flex-row space-x-8 p-0 text-white w-full h-20 mx-auto items-center justify-between">

      <div className="flex flex-row space-x-8 items-start">
        
          <div className="flex flex-row space-x-2 items-center">
            <Image src="/icons/email.svg" alt="Logo" width={25} height={25} />
            <a
              href="mailto:ptikux@gmail.com"
              className="text-black font-bold no-underline hover:underline"
            >
              ptikux@gmail.com
            </a>
          </div>

          <div className="flex flex-row space-x-2 items-center">
            <Image src="/icons/phone.svg" alt="Logo" width={25} height={25} />
            <p className="text-black font-bold">+91 8857863971</p>
          </div>
      </div>

      <div>
        <button
          className="bg-black text-white font-semibold underline py-2 px-5 rounded-3xl items-center flex flex-row "
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/pratik-bhute-3b03a2191/",
              "_blank",
            )
          }
        >
          <Image
            src="/icons/linkedin-logo.png"
            alt="Contact"
            width={25}
            height={25}
          />
          <p className="text-white font-semibold ml-2">Explore LinkedIn</p>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
