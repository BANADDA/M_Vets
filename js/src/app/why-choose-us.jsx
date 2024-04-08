"use client";
import { ChartPieIcon, CloudIcon, Cog6ToothIcon } from "@heroicons/react/24/solid";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";
import React from "react";
function Option({ icon: Icon, title, children }) {
    return (<div className="flex gap-4">
      <div className="mb-4">
        <Icon className="text-gray-900 h-6 w-6"/>
      </div>
      <div>
        <Typography variant="h5" color="blue-gray" className="text-bold text-gray-800 mb-2">
          {title}
        </Typography>
        <Typography className="mb-2 md:w-10/12 font-normal !text-gray-600">
          {children}
        </Typography>
      </div>
    </div>);
}
export function WhyChooseUs() {
    return (<section id="we-do" className="py-16 pt-5 px-8">
      <Typography variant="h3" className="text-center mb-10" color="blue-gray">
        How M-Vet Empowers
      </Typography>
      <div className="container mx-auto flex justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-4">
        <div className="col-span-2 flex flex-col justify-between">
          {/* Your grid content */}
          <div className="space-y-8">
            <div className="my-4">
              <Option icon={CloudIcon} title="Rapid Point-of-Care Diagnostics">
                Accessible Technology: Our mobile-based ELISA image reader enhances diagnostic capabilities in low-resource settings, enabling timely interventions and reducing the burden on veterinarians.
              </Option>
            </div>
            <div className="mb-4 flex gap-4">
              <Option icon={ChartPieIcon} title="Image-Based Disease Diagnosis">
                Real-Time Monitoring: Our syndromic surveillance system provides national agencies with real-time data on livestock health, facilitating early warning and response systems to mitigate disease outbreaks and protect animal populations.
              </Option>
            </div>
            <Option icon={Cog6ToothIcon} title="National Livestock Syndromic Surveillance">
              Real-Time Monitoring: Our syndromic surveillance system provides national agencies with real-time data on livestock health, facilitating early warning and response systems to mitigate disease outbreaks and protect animal populations.
            </Option>
          </div>
        </div>
        <div className="col-span-2 flex"> 
          <Image width={768} height={500} src="/image/market.jpg" className="h-full max-h-[500px] w-full object-cover rounded-xl" alt="online course"/>
        </div>
      </div></div>
    </section>);
}
export default WhyChooseUs;
