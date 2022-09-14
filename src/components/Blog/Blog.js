import React, { useState } from "react";
import { blogList } from "../../config/data";
import { Navbar } from "../Navbar";
import { Preloader } from "../Preloader";
import { BlogList } from "./BlogList";
import { NotFound } from "./NotFound";
import { SearchBar } from "./SearhBar";
import { Footer } from "../Footer";

export const Blog = () => {
  const [blogs, setBlogs] = useState(blogList);
  const [searchKey, setSearchKey] = useState("");

  const handleSearchBar = e => {
    e.preventDefault();
    handleSearchResult();
  };

  const handleSearchResult = () => {
    const allBlogs = blogList;
    const filteredBlogs = allBlogs.filter(blog =>
      blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
    );
    setBlogs(filteredBlogs);
  };

  const handleClearSearch = () => {
    setBlogs(blogList);
    setSearchKey("");
  };

  return (
    <>
      <Preloader />
      <Navbar />
      <div className="container" id="blog">
        <div className="row">
          <div className="col-md-12">
            <SearchBar
              value={searchKey}
              handleSeachKey={e => setSearchKey(e.target.value)}
              clearSearch={handleClearSearch}
              formSubmit={handleSearchBar}
            />
          </div>
        </div>

        {!blogs.length ? <NotFound /> : <BlogList blogs={blogs} />}
      </div>

      <Footer />
    </>
  );
};
