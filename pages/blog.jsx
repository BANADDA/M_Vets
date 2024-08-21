import { collection, doc, getDoc, getDocs, orderBy, query } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../firebase-config'; // Import your Firebase config
import BlogPostLayout from '../src/components/BlogPostLayout';

export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsQuery = query(collection(db, 'blogs'), orderBy('createdAt', 'desc'));
        const querySnapshot = await getDocs(postsQuery);
        const postsData = [];

        for (const docSnapshot of querySnapshot.docs) {
          const postData = docSnapshot.data();

          let authorName = 'Unknown Author';
          if (postData.userId) {
            const authorRef = doc(db, 'users', postData.userId);
            const authorDoc = await getDoc(authorRef);
            if (authorDoc.exists()) {
              const authorData = authorDoc.data();
              authorName = authorData.name || 'Unknown Author';
            }
          }

          postsData.push({
            title: postData.title || 'No Title',
            caption: postData.caption || 'No Caption',
            image: postData.captionImageUrl || '', // Fallback for missing image
            date: postData.createdAt ? postData.createdAt.toDate().toLocaleDateString() : 'No Date',
            authorName: authorName,
            id: docSnapshot.id,
          });
        }

        setPosts(postsData); // Update the posts state with the fetched data
      } catch (error) {
        console.error("Error fetching posts: ", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <>
      <BlogPostLayout posts={posts} />
    </>
  );
}