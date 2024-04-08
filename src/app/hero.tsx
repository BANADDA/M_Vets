"use client";

import { LightBulbIcon } from "@heroicons/react/24/solid";
import { Button, Typography } from "@material-tailwind/react";
import Image from "next/image";

function Hero() {
  return (
    <div className="relative min-h-screen w-full">
      <header
        className="grid !min-h-[49rem] px-8 bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: "url(&apos;/image/bg.png&apos;)",
          position: "relative",
        }}
      >
        {/* Dark overlay */}
        <div
          className="absolute inset-0 bg-black opacity-45"
          style={{ zIndex: 1 }}
        ></div>
        {/* Content */}
        <div className="container mx-auto grid h-full w-full grid-cols-1 place-items-center lg:grid-cols-2 relative z-10">
          <div className="col-span-1">
            <Typography variant="h1" color="white" className="mb-4 text-8xl">
              M-Vet
            </Typography>
            <Typography
              variant="h4"
              className="mb-7 !text-white md:pr-8 xl:pr-2 font-medium"
            >
              The Mobile Vet system (M-Vet) is designed to revolutionize livestock health through data and AI, empowering 
              stakeholders across Uganda&apos;s agriculture sector. By digitizing animal health and 
              production tracking, facilitating informed decision-making for farmers, frontline 
              veterinarians, and national livestock agencies.
            </Typography>
            <Typography className="mb-4" color="white" variant="h6">
              Get Started today
            </Typography>
            <div className="flex flex-col gap-2 md:mb-2 md:w-10/12 md:flex-row">
              <Button
                size="lg"
                color="white"
                className="flex justify-center bg-green-700 text-white items-center gap-3"
              >
                <Image
                  width={256}
                  height={256}
                  src="/image/application.png"
                  alt="metamask"
                  className="w-6 h-6 text-white"
                />
                Explore M-Vet
              </Button>
            </div>
          </div>
          <Image
            width={470}
            height={576}
            src="/image/iphones.png"
            alt="team work"
            className="col-span-1 my-20 h-full max-h-[30rem] -translate-y-32 md:max-h-[36rem] lg:my-0 lg:ml-auto lg:max-h-[40rem] lg:translate-y-0"
          />
        </div>
      </header>
      {/* Adjusted positioning for content div */}
      <div className="mx-8 lg:mx-72 lg:mt-32 rounded-xl bg-white p-2 md:p-8 md:px-16 shadow-md relative z-10" style={{ marginTop: "-3rem" }}>
        <div>
          <div className="flex items-center mb-3"> {/* Flex container to align items in the same row */}
            <LightBulbIcon className="w-6 h-6 text-yellow-700 mr-2" /> {/* Add LightBulbIcon with lighter yellow color */}
            <Typography variant="h3" className="text-green-700">
              Project Objective
            </Typography>
          </div>
          <Typography
            variant="paragraph"
            className="font-normal !text-gray-700 lg:w-full"
          >
           M-Vet emerged as a transformative solution to the fragmented landscape
           of livestock health management, where challenges in data collection, 
           analysis, and dissemination hindered effective monitoring and response 
           to diseases. By streamlining these processes, M-Vet empowers stakeholders—farmers, 
           veterinarians, and regulatory bodies—with accurate and timely information. 
           Through digital tracking, point-of-care diagnostics, and syndromic surveillance, 
           M-Vet facilitats informed decision-making and precision interventions, ultimately 
           enhancing livestock health outcomes and promoting sustainable agriculture practices.
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default Hero;

