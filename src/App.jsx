import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Loader from "./components/loader/Loader";

const Catalog = React.lazy(() => import("./pages/catalog/catalog"));

const ProductDetail = React.lazy(
  () => import("./pages/profuctDetails/ProductDetail"),
);

const Checkout = React.lazy(() => import("./pages/checkout/Checkout"));

function App() {
  return (
    <>
      <Navbar />

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Catalog />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Checkout />} />
        </Routes>
      </Suspense>

      <Footer />
    </>
  );
}

export default App;
