import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./index.css";

import Home from "./components/Home/Home";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Portafolio from "./components/Portfolio/Portafolio";
import { Blog } from "./components/Blog/Blog";
import { Post } from "./components/Blog/Post";
import Privacy from "./components/Privacy/Privacy";
import Register from "./components/Cuenta/Register";
import Login from "./components/Cuenta/Login";
import { NotFound } from "./components/Blog/NotFound";
import Cuenta from "./components/Cuenta/Cuenta";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" exact index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portafolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/cuenta" element={<Cuenta />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
