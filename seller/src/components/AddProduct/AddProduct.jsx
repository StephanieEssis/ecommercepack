import React, { useState } from "react";
import axios from "axios";

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
    category: "",
    stock: ""
  });

  const handleChange = e => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/products", product);
      alert("Produit ajouté !");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 max-w-md mx-auto">
      <input name="name" placeholder="Nom" onChange={handleChange} className="w-full p-2 border" />
      <textarea name="description" placeholder="Description" onChange={handleChange} className="w-full p-2 border" />
      <input name="price" type="number" placeholder="Prix" onChange={handleChange} className="w-full p-2 border" />
      <input name="image" placeholder="URL image" onChange={handleChange} className="w-full p-2 border" />
      <input name="category" placeholder="Catégorie" onChange={handleChange} className="w-full p-2 border" />
      <input name="stock" type="number" placeholder="Stock" onChange={handleChange} className="w-full p-2 border" />
      <button type="submit" className="bg-blue-800 text-white p-2 w-full">Ajouter</button>
    </form>
  );
};

export default AddProduct;
