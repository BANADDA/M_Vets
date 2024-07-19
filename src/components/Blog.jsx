import { useRouter } from 'next/router';

const blogs = [
  {
    id: 1,
    title: 'How I Gave A Modern Look For HackerNews Feed',
    date: 'Oct 10, 2020',
    readTime: '5 min read',
    content: 'Hello World 🔥 I made a website showing Hacker News and gave it a modern look...',
  },
  {
    id: 2,
    title: 'Revamped GitHub Jobs Website Using Design From Frontend',
    date: 'Oct 12, 2020',
    readTime: '6 min read',
    content: 'Here is how I revamped the GitHub Jobs website using modern design principles...',
  },
  // Add more blogs here
];

const BlogDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const blog = blogs.find(blog => blog.id === parseInt(id));

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
      <p className="text-gray-600 mb-4">{blog.date} • {blog.readTime}</p>
      <div className="text-gray-800">
        {blog.content}
      </div>
    </div>
  );
};

export default BlogDetails;
