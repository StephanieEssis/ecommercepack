import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

// Charger Stripe avec ta clé publique
const stripePromise = loadStripe('pk_test_51RCL2pQnhDbPISZNSEBQ8uo7nCYJ9hylmGaoORLZysHr7Tw5WA5ujzsAFTfhcb5aocX7T0myRa7uetZ4YFvYJ3Iu00uYkTfWrB');

const Checkout = () => {
    const [clientSecret, setClientSecret] = useState('');
    const stripe = useStripe();
    const elements = useElements();

    useEffect(() => {
        const createPaymentIntent = async () => {
            try {
                const response = await axios.post('/api/payment/checkout');
                setClientSecret(response.data.clientSecret);  // Assure-toi que tu récupères bien le clientSecret du backend
            } catch (error) {
                console.error('Erreur lors de la création du paiement', error);
            }
        };

        createPaymentIntent(); // Créer le PaymentIntent quand le composant est monté
    }, []);

    const handlePayment = async (event) => {
        event.preventDefault();

        // Si Stripe ou les éléments ne sont pas prêts, on ne fait rien
        if (!stripe || !elements) {
            return;
        }

        const cardElement = elements.getElement(CardElement);

        // Confirmer le paiement avec Stripe en utilisant le clientSecret
        const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: cardElement,  // Utilisation de CardElement
            },
        });

        if (error) {
            console.error('Erreur de paiement:', error);
        } else {
            if (paymentIntent.status === 'succeeded') {
                console.log('Paiement réussi');
                // Afficher un message de succès ou rediriger l'utilisateur
            }
        }
    };

    return (
        <div>
            <h2>Paiement</h2>
            <form onSubmit={handlePayment}>
                <div>
                    <label htmlFor="card-element">Carte bancaire</label>
                    <CardElement id="card-element" />
                </div>
                <button type="submit" disabled={!stripe || !clientSecret}>
                    Payer
                </button>
            </form>
        </div>
    );
};

// Envelopper le composant Checkout avec Elements
const StripeCheckout = () => (
    <Elements stripe={stripePromise}>
        <Checkout />
    </Elements>
);

export default StripeCheckout;
