"use client";

import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import galleryData from "../data/galleryData";

const Gallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 400, // Slightly speed up the slider
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500, // Slightly speed up the autoplay
    beforeChange: (current, next) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const getTagForCurrentSlide = () => {
    const currentIndex = currentSlide % galleryData.length;
    return galleryData[currentIndex].tag;
  };

  return (
    <div className="max-w-5xl mx-auto py-8 text-center">
      <h2 className="text-3xl font-bold mb-6">Project Achievements</h2>
      <p className="mb-6 text-sm underline font-normal text-gray-700">{getTagForCurrentSlide()}</p>
      <Slider {...settings}>
        {galleryData.map((image, index) => (
          <div
            key={index}
            className={`px-4 mb-8 transition-transform duration-500 transform ${
              index === (currentSlide + 1) % galleryData.length ? "scale-110 z-10" : "scale-90 opacity-75"
            }`}
          >
            <div className="relative">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover rounded-lg shadow-lg"
                style={{ height: "250px" }} // Fixed height for all images
              />
              <div className="text-center mt-4">
                <h3 className="text-xl font-semibold">{image.title}</h3>
                <p className="text-sm mt-2">{image.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <style jsx>{`
        .slick-slide {
          transition: transform 0.5s ease, opacity 0.5s ease;
        }

        .slick-active {
          transition: transform 0.5s ease, opacity 0.5s ease;
        }
      `}</style>
    </div>
  );
};

export default Gallery;
