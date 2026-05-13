import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const Catalog = React.lazy(() => import("./pages/catalog"));

const ProductDetail = React.lazy(() => import("./pages/ProductDetail"));

function App() {
  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <Routes>
        <Route path="/" element={<Catalog />} />

        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </Suspense>
  );
}

export default App;
