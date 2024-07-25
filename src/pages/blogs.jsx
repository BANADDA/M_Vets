// pages/blogs.js
import { Typography } from '@material-tailwind/react';
import axios from 'axios';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Fetch the blogs from an API or a local source
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('/api/blogs'); // Adjust this URL based on your API endpoint
        setBlogs(response.data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="container mx-auto my-10 px-4">
      <Typography variant="h3" color="blue-gray" className="mb-10 text-center">
        Blog & News
      </Typography>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <div key={blog.id} className="border rounded-lg p-4 shadow-md">
            <img src={blog.image} alt={blog.title} className="mb-4 w-full h-48 object-cover rounded-md" />
            <Typography variant="h5" color="blue-gray" className="mb-2">
              {blog.title}
            </Typography>
            <Typography variant="body2" color="blue-gray" className="mb-4">
              {blog.excerpt}
            </Typography>
            <Link href={`/blogs/${blog.id}`}>
              <a className="text-blue-500 hover:underline">Read More</a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
