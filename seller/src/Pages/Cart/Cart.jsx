import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const navigate = useNavigate(); // 🔥 place-le ici à l'intérieur du composant

  const { cartItems, total } = useSelector((state) => state.cart);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-300 rounded-lg shadow-md mt-6">
      <h1 className="text-3xl font-bold text-orange-600 mb-6">Mon Panier</h1>

      {cartItems.length === 0 ? (
        <div className="text-center text-red-600">
          <p>Votre panier est vide.</p>
        </div>
      ) : (
        <>
          <div className="space-y-4">
            {cartItems.map((item, index) => (
              <div key={index} className="flex justify-between items-center p-4 bg-gray-100 rounded-lg shadow-sm">
                <div className="flex items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-lg mr-4"
                  />
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800">{item.name}</h3>
                    <p className="text-sm text-gray-500">x {item.quantity}</p>
                  </div>
                </div>
                <div className="font-semibold text-lg text-gray-800">
                  FCFA {item.price * item.quantity}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-between items-center p-4 bg-gray-100 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold text-gray-800">Total</h2>
            <div className="text-xl font-semibold text-orange-600">FCFA {total}</div>
          </div>

          <div className="mt-6 flex justify-end">
            <button
              className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition duration-300"
              onClick={() => navigate('/checkout')}
            >
              Passer à l'étape de paiement
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
