import React from "react";
import { BlogItem } from "./BlogItem";

export const BlogList = ({ blogs }) => (
  <div className="row">
    {blogs.map(blog => (
      <div className="col-md-3">
        <BlogItem blog={blog} key={blog.id} />
      </div>
    ))}
  </div>
);
