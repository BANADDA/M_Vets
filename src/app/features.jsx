"use client";

import { Typography } from "@material-tailwind/react";
import FeatureCard from "../components/feature-card";

import {
  BeakerIcon,
  DevicePhoneMobileIcon,
  ShieldCheckIcon
} from "@heroicons/react/24/solid";

const FEATURES = [
  {
    icon: DevicePhoneMobileIcon,
    title: "Livestock Farmers",
    description:
      "Digital animal health and production tracking using mobile app.",
  },
  {
    icon: BeakerIcon,
    title: "Frontline Veterinarians and Animal Production Extensionists",
    description:
      "Point-of-Care Diagnostics: Our datasets contribute to building robust AI-powered mobile ELISA readers, facilitating massive animal screenings.",
  },
  {
    icon: ShieldCheckIcon,
    title: "National Livestock Agencies",
    description:
      "Syndromic Surveillance: Our labeled geotagged syndromic image data supports the transition from passive to active disease monitoring. This data is integrated into national livestock agencies' surveillance systems, enabling real-time monitoring of emerging incidents and facilitating spatiotemporal modeling of livestock diseases.",
  },
];

export function Features() {
  return (
    <section id="about-us" className="py-16 px-8">
      <div className="container mx-auto">
        <Typography variant="h3" color="blue-gray" className="mb-8 text-center">
          Project Overview
        </Typography>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="col-span-2 flex">
            <iframe
              src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7181404151136886786?compact=1"
              height="1000"
              width="1000"
              frameBorder="0"
              allowFullScreen=""
              title="Embedded post"
              className="h-full max-h-[1000px] w-full object-cover rounded-xl"
            ></iframe>
          </div>
          <div className="col-span-1 flex flex-col justify-between">
            <Typography
              className="mb-5 px-4 text-left text-lg font-semibold !text-gray-700"
            >
              MVet is a project that is curating datasests on livestock health and test. 
              The datasets include geotagged images labelled with signs and symptoms tags. 
              This work is supported by Lacuna Fund and partners will unlock opportunities 
              in developing data-driven solutions to improve livestock 
              health in Uganda and beyond. We use AI and real-time data to help veterinarians, 
              researchers, and farmers monitor, diagnose, and respond to diseases in 
              livestock. Our goal is to improve livestock health outcomes and transform 
              agriculture in Uganda.
              <br/><br/>
            </Typography>
          </div>
        </div>
        <Typography variant="h4" className="font-semibold mt-12 text-center">Our beneficiaries</Typography>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-8">
          {FEATURES.map(({ icon, title, description }) => (
            <FeatureCard key={title} icon={icon} title={title}>
              {description}
            </FeatureCard>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
