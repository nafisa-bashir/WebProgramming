const express = require('express');
const router = express.Router();
const Flower = require('../models/flower');

// Define routes
router.get('/view', (req, res) => {
    res.render('index'); // Render the 'index.ejs' view
});

// Get all flowers or filter by color
router.get('/', async (req, res) => {
    const color = req.query.color;
    try {
        const flowers = color ? await Flower.find({ color }) : await Flower.find();
        const formattedFlowers = flowers.map(flower => ({
            ...flower.toObject(),
            price: `${flower.price} AED` // Format price for display
        }));
        res.json(formattedFlowers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


// Create a new flower
router.post('/', async (req, res) => {
    console.log('Received POST request:', req.body); 
    const flower = new Flower({
        name: req.body.name,
        color: req.body.color,
        price: req.body.price,
        imageURL: req.body.imageURL 
    });

    try {
        const newFlower = await flower.save();
        res.status(201).json(newFlower);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
