import { Routes, Route } from "react-router-dom";
import Admin from "./pages/Admin";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Files from "./pages/Files";
import Messages from "./pages/Messages";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <div className="min-h-[600px]">
        <Routes>
          <Route path="/" element={<Admin />}>
            <Route path="/home" element={<Home />} />
            <Route path="product" element={<Product />} />
            <Route index element={<Product />} />
            <Route path="files" element={<Files />} />
            <Route path="messages" element={<Messages />} />
          </Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
