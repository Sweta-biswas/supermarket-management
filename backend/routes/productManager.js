const { Product } = require('../db');
const express = require("express");
const router = express.Router();
const { z } = require('zod');

const productBody = z.object({
    name: z.string(),
    category: z.string(),
    price: z.number(),
    stock: z.number(),
});

router.post("/add-product", async (req, res) => {
    const parsedBody = productBody.safeParse(req.body);

    if (!parsedBody.success) {
        console.error(parsedBody.error.issues);
        return res.status(411).json({
            message: 'Incorrect input'
        });
    }
    const product = await Product.create({
        name: req.body.name,
        category: req.body.category,
        price: req.body.price,
        stock: req.body.stock
    });

    console.log(req.body);
    res.status(201).json(product);
});

router.get("/get-product", async (req, res) => {
    try {
        const products = await Product.find(); // Use Mongoose's find() method to get all products
        res.status(200).json(products);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ message: 'Error fetching products' });
    }
});

router.put("/update-product/:id", async (req, res) => {
    const parsedBody = productBody.safeParse(req.body);

    if (!parsedBody.success) {
        console.error(parsedBody.error.issues);
        return res.status(411).json({
            message: 'Incorrect input'
        });
    }

    try {
        const product = await Product.findByIdAndUpdate(
            req.params.id,
            {
                name: req.body.name,
                category: req.body.category,
                price: req.body.price,
                stock: req.body.stock
            },
            { new: true } // Return the updated document
        );

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.status(200).json(product);
    } catch (error) {
        console.error('Error updating product:', error);
        res.status(500).json({ message: 'Error updating product' });
    }
});

router.delete("/delete-product/:id", async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
        console.error('Error deleting product:', error);
        res.status(500).json({ message: 'Error deleting product' });
    }
});

module.exports = router;