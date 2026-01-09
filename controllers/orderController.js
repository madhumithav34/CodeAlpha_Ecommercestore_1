const orderModel = require('../models/orderModel');

// Create Order - /api/v1/order
exports.createOrder = async (req, res) => {
  try {
    const cartItems = req.body;

    const amount = Number(
      cartItems.reduce(
        (acc, item) => acc + item.product.price * item.qty,
        0
      )
    ).toFixed(2);

    const status = 'pending';

    // ✅ FIXED VARIABLE NAME
    const order = await orderModel.create({
      cartItems,
      amount,
      status
    });

    res.status(200).json({
      success: true,
      order
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};
