const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    category: { 
        type: String, 
        enum: ['electronics', 'clothing' ],  // Liste des catégories autorisées
        required: true 
    }
    // ,
    // createdAt: { 
    //     type: Date, 
    //     default: Date.now 
    // },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
