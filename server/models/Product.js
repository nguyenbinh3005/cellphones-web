// const mongoose = require('mongoose');
import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const Product = mongoose.model('product', productSchema);

// module.exports = Product;
export default Product;
