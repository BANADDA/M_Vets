"use client";

import { Card, CardBody, Typography } from "@material-tailwind/react";

export function Partners() {
  return (
    <section className="py-8 px-8 lg:py-10 lg:pt-5">
      <div className="container !mx-auto text-center place-content-center grid">
        {/* <Typography
          color="blue-gray"
          variant="lead"
          className="!font-semibold lg:!text-lg !text-base"
        >
          More than 50+ brands trust us
        </Typography> */}
       <Typography
  variant="h1"
  color="blue-gray"
  className="my-4 !text-2xl !leading-snug lg:!text-3xl"
>
  Our Trusted Partners
</Typography>
<Typography
  variant="base"
  className="mx-auto max-w-5xl !text-gray-700 lg:px-8 mb-10"
>

M-Vet succeeds thanks to valuable partnerships. We collaborate with 
top institutions in agriculture, tech, and research, including the 
Makerere Artificial Intelligence Lab, the Research Consortium on African 
Swine Fever, the National Livestock Research & Resources Institute, and 
Veterinarians Without Borders. Through these collaborations, we harness expertise, 
resources, and networks to innovate and make an impact in livestock health. Together, 
we're committed to transforming livestock management with data-driven solutions and advanced AI technologies.
</Typography>

        <div className="flex flex-col md:flex-row gap-6 max-w-6xl mx-auto">
          <div className="flex flex-col items-center justify-center gap-6">
            <Card shadow={false} className="bg-[#FAFAFA] px-10">
              <CardBody>
                <img
                  src="/image/Ai_Lab.png"
                  alt="logo"
                  className="w-40"
                />
                <Typography variant="small" className="p-2 font-normal text-gray-500">
                  Makerere AI Research Lab
                </Typography>
              </CardBody>
            </Card>
            <Card shadow={false} className="bg-[#FAFAFA] px-10">
              <CardBody>
                <img
                  src="/image/veta.png"
                  alt="logo"
                  className=" w-40 "
                />
                <Typography variant="small" className="p-2 font-normal text-gray-500">
                  Veterinarians
                </Typography>
              </CardBody>
            </Card>
          </div>
          <Card shadow={false} className="bg-[#FAFAFA] lg:px-10 justify-center max-w-[18rem] lg:max-w-lg">
            <CardBody className="text-center">
              <img
                src="/image/gov.png"
                alt="logo"
                className="w-44 mx-auto"
              />
              <Typography variant="small" className="p-2 font-normal text-gray-500 mb-4">
              Ministry of Agriculture
              </Typography>
            </CardBody>
          </Card>
          <div className="flex flex-col items-center justify-center gap-6">
          <Card shadow={false} className="bg-[#FAFAFA] px-10">
              <CardBody>
                <img
                  src="/image/association.png"
                  alt="logo"
                  className="w-40"
                />
                <Typography variant="small" className="p-2 font-normal text-gray-500">
                  UVAs
                </Typography>
              </CardBody>
            </Card>
            <Card shadow={false} className="bg-[#FAFAFA] px-10">
              <CardBody>
                <img
                  src="/image/Narro.png"
                  alt="logo"
                  className=" w-40 "
                />
                <Typography variant="small" className="p-2 font-normal text-gray-500">
                    NARRO
                </Typography>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Partners;