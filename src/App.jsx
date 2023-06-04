import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import LayoutPublic from "./layouts/LayoutPublic";
import Inicio from "./pages/Inicio";
import Blog from "./pages/Blog";
import Contacto from "./pages/Contacto";
import NotFound from "./pages/NotFound";
import BlogDetails from "./pages/BlogDetails";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<LayoutPublic />}>
          <Route index element={<Inicio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
