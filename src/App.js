import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import PageTemplate from "./PageTemplate.js";
import Home from "./Home.js";
import About from "./About.js";
import Services from "./Services.js";
import Blog from "./Blog.js";
import Contact from "./Contact.js";
import Guides from "./Guides.js";
import Lawyers from "./Lawyers.js";
import Firms from "./Firms.js";

import 'bootstrap/dist/css/bootstrap.css';
import "./styles.css";

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<PageTemplate pageContent={<Home />} />} />
                <Route path="/about" element={<PageTemplate pageContent={<About />} />} />
                <Route path="/services" element={<PageTemplate pageContent={<Services />} />} />
                <Route path="/blog" element={<PageTemplate pageContent={<Blog />} />} />
                <Route path="/contact" element={<PageTemplate pageContent={<Contact />} />} />
                <Route path="/guides" element={<PageTemplate pageContent={<Guides />} />} />
                <Route path="/firms" element={<Firms />} />
                <Route path="/firms/:guideName" element={<Firms />} />
                <Route path="/lawyers" element={<Lawyers />} />
                <Route path="/lawyers/:guideName" element={<Lawyers />} />
            </Routes>
        </Router>
    );
}