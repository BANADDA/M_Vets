"use client";


const ImageGroup = ({ images, tag }) => {
  return (
    <div className="image-group mb-8">
      <div className="grid grid-cols-2 gap-4">
        {images.map((image, index) => (
          <div key={index} className="relative">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        ))}
      </div>
      <div className="mt-4 text-center">
        <p className="text-sm">{tag}</p>
      </div>
    </div>
  );
};

export default ImageGroup;
