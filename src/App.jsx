import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Loader from "./components/loader/Loader";

const Catalog = React.lazy(() => import("./pages/catalog/catalog"));

const ProductDetail = React.lazy(
  () => import("./pages/profuctDetails/ProductDetail"),
);

const Cart = React.lazy(() => import("./pages/cart/Cart"));
const Checkout = React.lazy(() => import("./pages/checkout/Checkout"));
const WishList = React.lazy(() => import("./pages/wishlist/Wishlist"));
const Home = React.lazy(() => import("./pages/Home/Home"));

function App() {
  return (
    <>
      <Navbar />

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Catalog />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/wishlist" element={<WishList />} />
        </Routes>
      </Suspense>

      <Footer />
    </>
  );
}

export default App;
