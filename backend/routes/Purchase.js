const express = require('express');

const { User, Product, Purchase } = require('../db');
const router = express.Router();
const {authMiddleware}= require('../middleware')

// Define Zod schema for purchase data


// Purchase Route
router.post('/purchase-product',authMiddleware, async (req, res) => {
  try {
    console.log(req.body)
    // Validate request body using Zod schema
   const userId= req.userId
   const {products}= req.body

    // Fetch user by ID
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Calculate total price
    let totalPrice = 0;
    const purchaseProducts = await Promise.all(
      products.map(async (item) => {
        const product = await Product.findById(item.productId);
        if (!product) throw new Error(`Product with ID ${item.productId} not found`);
        totalPrice += product.price * item.quantity;

        return {
          product: product._id,
          quantity: item.quantity,
        };
      })
    );

    // Create purchase document
    const purchase = new Purchase({
      user: user._id,
      products: purchaseProducts,
      totalPrice,
    });

    await purchase.save();

    res.status(201).json({ message: 'Purchase recorded successfully', purchase });
  } catch (error) {
    console.error('Error processing purchase:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
