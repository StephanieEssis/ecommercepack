import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductList from '../../components/ProductList/ProductList'; // Assure-toi que ce chemin est correct

const Products = () => {
  const [products, setProducts] = useState([]); // Déclaration de l'état pour les produits
  const [error, setError] = useState(null); // Nouveau state pour gérer l'erreur

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Requête pour obtenir les produits depuis l'API
        const res = await axios.get('http://localhost:5000/api/products');
        setProducts(res.data); // Mise à jour de l'état avec les produits récupérés
        setError(null); // Réinitialiser l'erreur si les données sont récupérées avec succès
      } catch (error) {
        setError('Erreur lors de la récupération des produits');
        console.error('Erreur de récupération des produits:', error); // Gestion des erreurs
      }
    };

    fetchProducts(); // Appel de la fonction pour récupérer les produits
  }, []); // Le tableau vide assure que ce code est exécuté une seule fois au démarrage

  return (
    <div className="container mx-auto py-6">
      {/* <h1 className="text-3xl font-bold mb-4 text-center">Nos Produits</h1> */}

      {/* Afficher un message d'erreur si la récupération des produits échoue */}
      {error && <div className="text-center text-red-600 py-6">{error}</div>}

      {/* Utilisation du composant ProductList pour afficher les produits */}
      <ProductList products={products} />
    </div>
  );
};

export default Products;
