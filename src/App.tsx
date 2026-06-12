import { Routes, Route } from "react-router-dom";
import Layout, { NotFoundComponent } from "./Layout";
import Home from "./routes/index";
import About from "./routes/about";
import Services from "./routes/services";
import OurStory from "./routes/our-story";
import Contact from "./routes/contact";
import Book from "./routes/book";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="our-story" element={<OurStory />} />
        <Route path="contact" element={<Contact />} />
        <Route path="book" element={<Book />} />
        <Route path="*" element={<NotFoundComponent />} />
      </Route>
    </Routes>
  );
}
