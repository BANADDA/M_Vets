// BlogList.jsx
import { Facebook, LinkedIn, Twitter, YouTube } from '@mui/icons-material';
import BlogPost from './BlogPost'; // Adjust the path as necessary

const BlogList = () => {
  const posts = [
    {
      rank: 1,
      title: "Flavio Copes' Blog",
      description: "JavaScript and Web Development Tutorials. Flavio is one of the most recognizable JavaScript bloggers, and has been publishing a new post every day for years. Each one is bite-sized and easy to digest.",
      link: "https://flaviocopes.com",
      tags: ["JavaScript", "ReactJS"],
      points: 0,
      imageSrc: "https://flaviocopes.com/assets/img/blog.png" // Replace with actual image URL
    },
    {
      rank: 2,
      title: "Aman Mittal's Blog",
      description: "Aman often writes posts on React.js, React Native, and Node.js. These days his focus is on React Native and how to use it for cross-platform mobile development.",
      link: "https://amanhimself.dev",
      tags: ["JavaScript", "ReactJS"],
      points: 0,
      imageSrc: "https://amanhimself.dev/assets/img/blog.png" // Replace with actual image URL
    }
  ];

  return (
    <div className="bg-gray-900 text-white p-8 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold">REACT.JS BLOGS</h2>
          <div className="flex space-x-4 text-gray-400">
            <span className="cursor-pointer text-blue-500">Trending now</span>
            <span className="cursor-pointer">New</span>
            <span className="cursor-pointer">Last 30 days</span>
          </div>
        </div>
        <div className="space-y-6">
          {posts.map(post => (
            <BlogPost key={post.rank} {...post} />
          ))}
        </div>
        <div className="fixed left-0 top-1/2 transform -translate-y-1/2 space-y-4 ml-4">
          <a href="https://facebook.com" className="text-blue-600">
            <Facebook />
          </a>
          <a href="https://twitter.com" className="text-blue-600">
            <Twitter />
          </a>
          <a href="https://linkedin.com" className="text-blue-600">
            <LinkedIn />
          </a>
          <a href="https://youtube.com" className="text-blue-600">
            <YouTube />
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogList;
