// YourComponent.js
import React from 'react';
import blogData from './blogData'; 
import './BlogComp.css'


const BlogComp = () => {
  return (
    <div className='blog-container'><h2>Blog Post</h2><div className='blog-list'>

      {blogData.map((post) => (
        <div key={post.id} className="blog-post">
          <h2>{post.title}</h2>
          <img src={post.image} alt={post.title} />
          <p>{post.content}</p>
        </div>
      ))}
    </div></div>
  );
};

export default BlogComp;
