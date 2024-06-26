import { Typography } from "@material-tailwind/react";
import React from "react";

export function BackgroundCard({ title, children }) {
  return (
    <div className="grid place-items-center h-full px-8 py-6 bg-gray-900 rounded-xl">
      <div>
        <Typography variant="h2" className="text-center" color="white">
          {title}
        </Typography>
        <Typography
          color="white"
          className="my-2 text-base w-full text-center font-normal"
        >
          {children}
        </Typography>
      </div>
    </div>
  );
}

export default BackgroundCard;
