require('dotenv').config(); // Chargement des variables d'environnement

const express = require('express');
const cors = require('cors');
const product = require('./models/product.js');
const paymentRoutes = require('./routes/paymentRoutes');
const sampleProducts = require('./data/data.json');
const connectDB = require('./dbconnection/mongodbconnexion.js'); // Connexion MongoDB refactorisée

const app = express();

// ✅ Vérifie que la clé Stripe est bien présente
if (!process.env.STRIPE_SECRET_KEY) {
    console.error("❌ Erreur: la clé Stripe est absente de votre fichier .env.");
    process.exit(1);
}

const stripe = require('stripe')(process.env.VITE_STRIPE_PUBLIC_KEY);  // Remplacer import.meta.env
;
console.log("✅ Stripe Secret Key détectée");

// ✅ Middleware
app.use(cors());

// ✅ Routes
app.use('/api/payment', paymentRoutes);

// ✅ Route pour récupérer les produits
app.get('/api/products', async (req, res) => {
    try {
        const products = await product.find({});
        res.json(products);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ✅ Fonction de seed des produits
const seedProducts = async () => {
    try {
        for (let p of sampleProducts) {
            await product.updateOne(
                { name: p.name }, // critère : même nom
                { $set: p },      // mise à jour
                { upsert: true }  // ajoute si inexistant
            );
            console.log(`✅ Produit synchronisé : ${p.name}`);
        }
        console.log('📦 Produits synchronisés avec data.json');
    } catch (error) {
        console.error('❌ Erreur lors de la synchronisation des produits :', error.message);
    }
};

// ✅ Connexion à MongoDB puis lancement du serveur
connectDB().then(() => {
    seedProducts(); // On seed une fois la connexion établie
    const PORT = 5000; 
    app.listen(PORT, () => {
        console.log(`🚀 Server running on port ${PORT}`);
    });
});
