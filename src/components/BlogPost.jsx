
const BlogPost = ({ rank, title, description, link, tags, points, imageSrc }) => {
  return (
    <div className="w-full max-w-4xl flex flex-row my-4 bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="w-2/5">
        <img
          src={imageSrc}
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="p-6 w-3/5">
        <h6 className="text-gray-500 mb-4">
          {rank}. {title}
        </h6>
        <p className="text-gray-700 mb-8 font-normal">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-blue-500 text-white px-2 py-1 rounded text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
        <a href={link} className="inline-block">
          <button className="text-blue-500 flex items-center gap-2">
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </a>
        <h6 className="text-gray-500 mt-4">
          {points} points
        </h6>
      </div>
    </div>
  );
};

export default BlogPost;
