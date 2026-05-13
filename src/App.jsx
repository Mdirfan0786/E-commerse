import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";

const Catalog = React.lazy(() => import("./pages/catalog/catalog"));

const ProductDetail = React.lazy(
  () => import("./pages/profuctDetails/ProductDetail"),
);

function App() {
  return (
    <>
      <Navbar />

      <Suspense fallback={<h2>Loading...</h2>}>
        <Routes>
          <Route path="/" element={<Catalog />} />

          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </Suspense>

      <Footer />
    </>
  );
}

export default App;
