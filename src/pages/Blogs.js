import React from 'react';

const BlogPost = ({ title, date, excerpt }) => (
  <div style={{ marginBottom: '20px', borderBottom: '1px solid #ccc', paddingBottom: '20px' }}>
    <h3>{title}</h3>
    <p><small>{date}</small></p>
    <p>{excerpt}</p>
    <a href="blogposts">Read more</a>
  </div>
);

const Blogs = () => (
  <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
    <h2>My Blog</h2>
    <BlogPost 
      title="Latest Developments in Sustainable Business"
      date="September 15, 2024"
      excerpt="In this post, I explore recent trends in sustainable business practices..."
    />
    <BlogPost 
      title="The Intersection of Finance and Technology"
      date="September 1, 2024"
      excerpt="Fintech is revolutionizing the way we think about money. Here's how..."
    />
    <BlogPost 
      title="My Journey in Web Development"
      date="August 20, 2024"
      excerpt="From my first 'Hello World' to building complex web applications..."
    />
  </div>
);

export default Blogs;