"use client";

import { Typography } from "@material-tailwind/react";
import Image from "next/image";

import FeatureCard from "@/components/feature-card";

import {
  BeakerIcon,
  DevicePhoneMobileIcon,
  ShieldCheckIcon
} from "@heroicons/react/24/solid";

const FEATURES = [
  {
    icon: DevicePhoneMobileIcon, // or ClipboardListIcon for an alternative option
    title: "Livestock Farmers",
    description:
      "Digital animal health and production tracking using mobile app.",
  },
  {
    icon: BeakerIcon, // or MicroscopeIcon for a more focused diagnostic tool representation
    title: "Frontline Veterinarians and Animal Production Extensionists",
    description:
      "Point-of-Care Diagnostics: Our datasets contribute to building robust AI-powered mobile ELISA readers, facilitating massive animal screenings.",
  },
  {
    icon: ShieldCheckIcon, // or GlobeAltIcon for emphasizing the global and geotagging aspect
    title: "National Livestock Agencies",
    description:
      "Syndromic Surveillance: Our labeled geotagged syndromic image data supports the transition from passive to active disease monitoring. This data is integrated into national livestock agencies' surveillance systems, enabling real-time monitoring of emerging incidents and facilitating spatiotemporal modeling of livestock diseases.",
  },
];

export function Features() {
  return (
    <section id="about-us" className="py-16 px-8">
      <div className="container mx-auto flex justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="col-span-1 flex"> 
            <Image
              width={768}
              height={500}
              src="/image/market.jpg"
              className="h-full max-h-[500px] w-full object-cover rounded-xl"
              alt="online course"
              // Comment
            />
          </div>
          <div className="col-span-2 flex flex-col justify-between">
            <div>
              <Typography variant="h3" color="blue-gray" className="mb-4">
                Project Overview
              </Typography>
              <Typography
                variant="paragraph"
                className="mb-5 max-w-1/2 px-4 text-left text-lg !text-gray-700 lg:pr-32"
              >
                MVet is a project that is developing data-driven solutions to improve livestock 
                health in Uganda. We use AI and real-time data to help veterinarians, 
                researchers, and farmers monitor, diagnose, and respond to diseases in 
                livestock. Our goal is to improve livestock health outcomes and transform 
                agriculture in Uganda.
                <br/><br/>
              </Typography>
            </div>
          </div>
          <div className="lg:col-span-3">
            <Typography variant="lead" className="font-semibold">Our beneficiaries</Typography> 
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {FEATURES.map(({ icon, title, description }) => (
                <FeatureCard key={title} icon={icon} title={title}>
                  {description}
                </FeatureCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
