"use client";

import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <main>
      <div className="flex flex-col pt-10 h-screen w-full items-center">
        <Image src="/hero.png" alt="Hero Image" width={200} height={200} />

        <div className="border-[1.5px] border-black p-1 pl-5 pr-4 mt-10 rounded-3xl">
          <h1 className=" text-orange-400 ">Hi, I'm Pratik Bhute</h1>
        </div>

        <h1 className="text-[62px] font-bold mt-5 max-w-4xl text-center leading-[1]">
          A Product Designer & <br /> User Experience Expert
        </h1>
        <p className="text-[20px] mt-5 max-w-5xl text-center text-[#656565] leading-[1.2]">
          Product Designer with 4+ years of experience designing intuitive
          mobile apps and energy management systems (EMS). Focused on creating
          user-first solutions that balance functionality with clean design,
          delivering measurable impact across utility and consumer-focused
          platforms.
        </p>

        <button
          className="bg-black text-white px-6 py-3 rounded-lg mt-5 hover:underline"
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1qsDd-7ewiGaQRz_gvn6RdZrU208MK_XD/preview",
              "_blank",
            )
          }
        >
          View My Resume
        </button>
      </div>
    </main>
  );
};

export default Hero;
