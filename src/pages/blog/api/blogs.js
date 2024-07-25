// pages/api/blogs.js
export default function handler(req, res) {
    const blogs = [
      {
        id: 1,
        title: 'First Blog Post',
        excerpt: 'This is a short summary of the first blog post...',
        content: 'This is the full content of the first blog post...',
        image: '/path/to/image1.jpg',
      },
      {
        id: 2,
        title: 'Second Blog Post',
        excerpt: 'This is a short summary of the second blog post...',
        content: 'This is the full content of the second blog post...',
        image: '/path/to/image2.jpg',
      },
      // Add more blog posts here
    ];
    res.status(200).json(blogs);
  }
  
  // pages/api/blogs/[id].js
  export default function handler(req, res) {
    const { id } = req.query;
    const blogs = [
      {
        id: 1,
        title: 'First Blog Post',
        excerpt: 'This is a short summary of the first blog post...',
        content: 'This is the full content of the first blog post...',
        image: '/path/to/image1.jpg',
      },
      {
        id: 2,
        title: 'Second Blog Post',
        excerpt: 'This is a short summary of the second blog post...',
        content: 'This is the full content of the second blog post...',
        image: '/path/to/image2.jpg',
      },
      // Add more blog posts here
    ];
    const blog = blogs.find((blog) => blog.id.toString() === id);
    res.status(200).json(blog);
  }
  