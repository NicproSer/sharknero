import React from "react";
import { Chip } from "./Chip";

export const BlogItem = ({
  blog: { id, description, title, date, image, category },
}) => {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <Chip label={category} />
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{description}</p>
      <p>{description}</p>
      <div>
        <a href={`/post/${id}`} className="btn btn-primary">
          Leer mas
        </a>
      </div>
    </div>
  );
};
