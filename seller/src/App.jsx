// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import NavigationBar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Products from "./Pages/Products/Products";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import AuthPage from "./components/AuthPage/AuthPage";
import ProductList from "./components/ProductList/ProductList";
import Cart from "./Pages/Cart/Cart";
import Stripe from "./components/Stripe/Stripe"; // Formulaire de paiement
import Checkout from './Pages/Checkout/Checkout';
import "./index.css";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";

// Charger Stripe avec la clé publique

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY); // Ta clé publique Stripe

const App = () => {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/all" element={<ProductList />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        
        {/* Route pour Checkout avec Stripe */}
        <Route path="/checkout" element={
          <Elements stripe={stripePromise}>
            <Checkout />  {/* Composant de vérification et paiement */}
          </Elements>
        } />
      </Routes>
    </Router>
  );
};

export default App;
