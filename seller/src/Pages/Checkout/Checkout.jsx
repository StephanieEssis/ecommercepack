// src/Pages/Checkout/Checkout.jsx
import React, { useState } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { useSelector } from 'react-redux';

const Checkout = () => {
  const stripe = useStripe();
  const elements = useElements();
  const { cartItems, total } = useSelector((state) => state.cart); // Assurez-vous que cartItems et total existent
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      // Stripe.js n'est pas encore chargé.
      return;
    }
    setLoading(true);

    // Créez un objet de paiement ici, comme un paiement via CardElement
    const cardElement = elements.getElement(CardElement);

    // Logique pour créer un paiement
    try {
      const { token, error: stripeError } = await stripe.createToken(cardElement);
      if (stripeError) {
        setError(stripeError.message);
        setLoading(false);
        return;
      }

      // Traitement du token avec votre backend ici
      console.log('Token créé : ', token);

      // Rediriger ou afficher un message de succès
      setLoading(false);
    } catch (err) {
      setError('Erreur lors de la création du paiement');
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-yellow-200 rounded-lg shadow-lg mt-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Résumé de la commande</h2>
      <ul className="space-y-2 mb-6">
        {cartItems.map((item, index) => (
          <li key={index} className="flex justify-between items-center border-b py-2">
            <span className="text-lg font-medium text-gray-700">{item.name}</span>
            <span className="text-lg font-medium text-gray-900">
              {item.quantity} x FCFA{item.price * item.quantity}
            </span>
          </li>
        ))}
      </ul>
      
      <div className="flex justify-between items-center py-4 border-t border-b">
        <span className="text-xl font-semibold text-gray-800">Total</span>
        <span className="text-xl font-semibold text-orange-600">FCFA {total}</span>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6 mt-8">
        <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
          <label htmlFor="card-element" className="block text-lg font-semibold text-gray-700 mb-2">
            Informations de paiement
          </label>
          <CardElement
            id="card-element"
            className="p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}
        
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={loading || !stripe || !elements}
            className={`px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300 ${
              loading || !stripe || !elements ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {loading ? 'Traitement...' : 'Payer'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
