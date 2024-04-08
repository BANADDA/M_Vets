"use client";

import {
  Button, Card,
  CardBody,
  CardFooter, Typography
} from "@material-tailwind/react";
import Image from "next/image";

const OPTIONS = [
  {
    title: "100",
    description: "Learning Courses",
  },
  {
    title: "500+",
    description: "Expert Instructors",
  },
  {
    title: "24/7",
    description: "Support",
  },
  {
    title: "5/5",
    description: "Review Stars",
  },
];

export function MobileConvenience() {
  return (
    <section className="py-20 px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
        <div className="col-span-1 mx-auto max-w-lg px-4 lg:px-0">
    <Card className="mt-6 lg:w-full">
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
        Project Overview
        </Typography>
        <Typography>
        We at MVet, we're pioneering a transformative approach to livestock 
        health through data-driven solutions and cutting-edge AI technologies. 
        We are based at the Makerere Artificial Intelligence Lab, in 
        collaboration with the Research Consortium on African Swine Fever, 
        National Livestock Research & Resources Institute and Veterinarians 
        Without Borders, our project aims to revolutionize how we monitor, 
        diagnose, and respond to livestock diseases. 
        <br/><br/>
        By harnessing real-time crowdsourced animal health data, we're empowering veterinarians, 
        researchers, and livestock farmers to make informed decisions and implement 
        precision interventions. From rapid point-of-care diagnostics to image-based 
        disease diagnosis and crowdsourced real-time national syndromic surveillance. 
        Join us in our mission to transform livestock health outcomes and shape the 
        future of agriculture in Uganda and beyond.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button>Read More</Button>
      </CardFooter>
    </Card>
        </div>
        <Image
          width={256}
          height={256}
          src="/image/iphone.png"
          className="col-span-1 w-1/2 mx-auto lg:w-10/12"
          alt="iphone-photo"
        />
      </div>
    </section>
  );
}
export default MobileConvenience;
