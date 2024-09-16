import matter from 'gray-matter';
import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const [post, setPost] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      const content = await import(`../content/blog/${slug}.md`);
      const { data, content: markdownContent } = matter(content.default);
      setPost({
        ...data,
        content: markdownContent,
      });
    };

    fetchPost();
  }, [slug]);

  if (!post) return <div>Loading...</div>;

  return (
    <div>
      <h1 style={{ fontSize: '36px', marginBottom: '10px' }}>{post.title}</h1>
      {post.subtitle && <h2 style={{ fontSize: '24px', color: '#666', marginBottom: '10px' }}>{post.subtitle}</h2>}
      <p style={{ fontSize: '16px', color: '#666', marginBottom: '10px' }}>
        {post.date} | By {post.author}
      </p>
      {post.tags && (
        <p style={{ fontSize: '14px', color: '#888', marginBottom: '20px' }}>
          Tags: {post.tags.join(', ')}
        </p>
      )}
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </div>
  );
};

export default BlogPost;