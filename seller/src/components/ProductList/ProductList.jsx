import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../../utils/axios';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartSlice'; 

const ProductList = ({ category }) => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // const res = await axios.get('http://localhost:5000/api/products');
        const res = await axios.get('http://localhost:5000/api/products');

        setProducts(res.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des produits', error);
      }
    };

    fetchProducts();
  }, [category]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product)); // 
    alert(`${product.name} ajouté au panier !`);
  };

  const handleSeeMore = (productId) => {
    navigate(`/products/${productId}`);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold text-orange-600 mb-6 text-center">Nos Produits</h1>
      {products.length === 0 ? (
        <p className="text-center text-gray-500">Aucun produit trouvé.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product._id}
              className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition transform hover:scale-105 duration-300"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                <p className="text-sm text-gray-600 my-2 line-clamp-2">{product.description}</p>
                <p className="text-xl text-orange-600 font-bold">{product.price} FCFA</p>
                <div className="flex justify-between items-center mt-4">
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition duration-300"
                  >
                    Ajouter au panier
                  </button>
                  <button
                    onClick={() => handleSeeMore(product._id)}
                    className="text-orange-600 hover:underline"
                  >
                    Voir plus
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
