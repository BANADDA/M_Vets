// pages/posts/[slug].js

import { getAllPostSlugs, getPostData } from '../../lib/posts';

export async function getStaticPaths() {
  // Get the list of all slugs from your data source
  const paths = getAllPostSlugs();

  return {
    paths,
    fallback: false, // Set to false if you want all paths to 404 that are not returned by getStaticPaths
  };
}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.slug
  const postData = await getPostData(params.slug);

  return {
    props: {
      postData,
    },
  };
}

export default function Post({ postData }) {
  return (
    <article>
      <h1>{postData.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </article>
  );
}
