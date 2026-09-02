import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <main>
      <div className="flex flex-col pt-10 h-screen w-full items-center">
        <Image src="/hero.png" alt="Hero Image" width={200} height={200} />

        <div className="border-[2px] border-black/80 p-1 pl-3 pr-3 mt-10 rounded-3xl">
          <h1 className=" text-orange-400 ">Hi, I'm Pratik Bhute</h1>
        </div>

        <h1
          className="text-[62px] font-bold mt-5 max-w-4xl text-center"
          style={{ lineHeight: "1.2" }}
        >
          A Product Designer & <br /> User Experience Expert
        </h1>
      </div>
    </main>
  );
};

export default Hero;
