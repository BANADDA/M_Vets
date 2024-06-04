"use client";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import Image from 'next/image'; // Import the Image component

export function Funders() {
  return (
    <section className="py- px-8 lg:pt-5">
      <div className="container !mx-auto text-center place-content-center grid">
        <Typography
          variant="h1"
          color="blue-gray"
          className="my-4 !text-2xl !leading-snug lg:!text-3xl"
        >
          Supported By
        </Typography>

        <div className="flex flex-col md:flex-row gap-6 max-w-6xl mx-auto">
          <div className="flex flex-col items-center justify-center gap-6">
          <Card shadow={false} className=" lg:px-10 justify-center max-w-[18rem] lg:max-w-lg">
            <CardBody className="text-center">
              <Image
                src="/image/sponsors/Lacuna-Fund.svg"
                alt="Lacuna Fund"
                width={176}
                height={176}
                className="w-44 mx-auto"
              />
              <Typography variant="small" className="p-2 font-normal text-gray-500 mb-4">
               Lacuna Fund - Datasets for Agriculture
              </Typography>
            </CardBody>
          </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Funders;
