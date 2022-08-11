import React, {useState} from "react"
import { Preloader } from "../Preloader";
import { Navbar } from "../Navbar";
import { blogList } from "../../config/data";
import SearchBar from "./Search";
import { EmptyList } from "./EmptyList";
import { BlogList } from "./BlogList";



const Blog = () => {
  const [blogs, setBlogs] = useState(blogList);
  const [searchKey, setSearchKey] = useState("");

  //Serach Blogs
  const handleSearchBar = e => {
    e.preventDefault();
    handleSearchResults();
  };

  // Search for blog by category
  const handleSearchResults = () => {
    const allBlogs = blogList;
    const filteredBlogs = allBlogs.filter(blog =>
      blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
    );
    setBlogs(filteredBlogs);
  };

  // Clear search and show all blogs
  const handleClearSearch = () => {
    setBlogs(blogList);
    setSearchKey("");
  };

  return (
    <>
      <Preloader />
      <Navbar />

      <SearchBar
        value={searchKey}
        clearSearch={handleClearSearch}
        formSubmit={handleSearchBar}
        handleSearchKey={e => setSearchKey(e.target.value)}
      />

      <div className="container">
        {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs} />}
      </div>
    </>
  );
}



export default Blog;