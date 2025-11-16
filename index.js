const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const productRoutes = require('./routes/product.route.js');
const app = express();

//middlewares
app.use(express.json()); // middleware to parse JSON request bodies
app.use(express.urlencoded({ extended: true }));



app.use('/api/products',productRoutes);


app.get('/', (req, res) => {
  res.send('Welcome to the Simple CRUD App!');
});

// connect to mongodb
mongoose.connect('mongodb://localhost:27017/test').then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Failed to connect to MongoDB', err);
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

