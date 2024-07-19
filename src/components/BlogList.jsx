import Link from 'next/link';

const blogs = [
  {
    id: 1,
    title: 'How I Gave A Modern Look For HackerNews Feed',
    date: 'Oct 10, 2020',
    readTime: '5 min read',
    description: 'Hello World 🔥 I made a website showing Hacker News and gave it a modern look...',
    image: '/path_to_image', // Update with your image path
  },
  {
    id: 2,
    title: 'Revamped GitHub Jobs Website Using Design From Frontend',
    date: 'Oct 12, 2020',
    readTime: '6 min read',
    description: 'Here is how I revamped the GitHub Jobs website using modern design principles...',
    image: '/path_to_image', // Update with your image path
  },
  // Add more blogs here
];

const BlogList = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-8">My Projects Showcase</h1>
        <p className="text-xl mb-8">In this series, I will showcase some of the web development projects and challenges that I do every week.</p>
      </div>
      <div className="grid grid-cols-1 gap-8">
        {blogs.map(blog => (
          <div key={blog.id} className="flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden">
            <img src={blog.image} alt={blog.title} className="w-full md:w-1/3 h-48 object-cover"/>
            <div className="p-4 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-2">
                  <Link href={`/blog/${blog.id}`}>
                    {blog.title}
                  </Link>
                </h2>
                <p className="text-gray-600 mb-2">{blog.date} • {blog.readTime}</p>
                <p className="text-gray-800">{blog.description}</p>
              </div>
              <Link href={`/blog/${blog.id}`} className="text-blue-500 mt-2">Read more</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
