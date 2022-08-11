import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { blogList } from '../../config/data';
import { EmptyList } from './EmptyList';

export const Post = () => {

    const { id } = useParams();
    const [post, setBlog] = useState(null);

    useEffect(() => {
        let post = blogList.find((post) => post.id === parseInt(id));
        if (post) {
            setBlog(post);
        }
    }, [id]);

  return (
    <>
      <Link to="/blog">
        <span> &#8592;</span> <span>Go Back</span>
      </Link>
      {post ? (
        <div className="blog-post">
            <img src={post.image} alt={post.title} />
            <h1>{post.title}</h1>
            <p>{post.description}</p>
        </div>
      ) : (
        <EmptyList />
      ) }
    </>
  );
}
