import React, { useState, useEffect } from "react";
import { Preloader } from "../Preloader";
import { useParams } from "react-router-dom";
import { blogList } from "../../config/data";
import { NotFound } from "./NotFound";
import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import { Chip } from "./Chip";

export const Post = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    let blog = blogList.find(blog => blog.id === parseInt(id));
    if (blog) {
      setBlog(blog);
    }
  }, [id]);

  return (
    <>
      <Preloader />
      <Navbar />

      <div className="container" id="post">
        <a href="/blog" className="back">
          <span> &#8592;</span> <span>Go Back</span>
        </a>

        {blog ? (
          <div className="row">
            <div className="col-md-12">
              <img src={blog.image} alt={blog.title} />
              <h1>{blog.title}</h1>
              {blog.subCategory.map((category, i) => (
                <Chip key={i} label={category} />
              ))}
              <br />
              <small>{blog.date}</small>
              <p>{blog.description}</p>
            </div>
          </div>
        ) : (
          <NotFound />
        )}
      </div>

      <Footer />
    </>
  );
};
