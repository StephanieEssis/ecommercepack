const express = require('express');
const Product = require('./models/product'); // Assure-toi que ce chemin est correct
const router = express.Router();

// Créer un produit
router.post('/', async (req, res) => {
    try {
        const { name, description, price, image, category } = req.body;
        const product = new Product({ name, description, price, image, category });
        await product.save();
        res.status(201).json(product);
    } catch (err) {
        res.status(400).json({ message: 'Error creating product' });
    }
});

// Récupérer tous les produits ou filtrer par catégorie
router.get('/', async (req, res) => {
    const category = req.query.category;  // Récupérer la catégorie de la requête (si elle existe)
    
    try {
        let products;
        if (category) {
            products = await Product.find({ category: category });
        } else {
            products = await Product.find();
        }
        res.json(products); // Retourner tous les produits
    } catch (err) {
        res.status(500).json({ message: 'Error fetching products' });
    }
});

// Récupérer un produit par ID (fonction "Voir plus")
router.get('/:id', async (req, res) => {
    const { id } = req.params; // Récupérer l'ID du produit depuis l'URL

    try {
        const product = await Product.findById(id); // Trouver le produit par son ID
        if (!product) {
            return res.status(404).json({ message: 'Produit non trouvé' }); // Si le produit n'existe pas
        }
        res.json(product); // Retourner les détails du produit
    } catch (err) {
        res.status(500).json({ message: 'Erreur lors de la récupération du produit' });
    }
});

module.exports = router;
