import React from "react";
import { Link } from "react-router-dom";
import { Chip } from "./Chip";


const BlogItem = ({
  blog: {
    description,
    title,
    date,
    image,
    category,
    id,
  },
}) => {
  return (
    <div className="blogItem-wrap">
      <img className="blogItem-cover" src={image} alt="cover" />
      <Chip label={category} />
      <h3>{title}</h3>
      <p className="blogItem-desc">{description}</p>
      <footer>
        <div className="blogItem-author">
          <div>
            <small>{date}</small>
          </div>
        </div>
        <Link className="blogItem-link" to={`/post/${id}`}>
          ➝
        </Link>
      </footer>
    </div>
  );
};

export default BlogItem;
