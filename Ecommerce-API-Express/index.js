const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

const authRoute = require('./routes/auth');
const userRoute = require('./routes/user');
const productRoute = require('./routes/product');
const cartRoute = require('./routes/cart');
const orderRoute = require('./routes/order');
const paymentRoute = require('./routes/payment');

dotenv.config();

const PORT = process.env.PORT || 5000;
const CONNECTION_URL = process.env.CONNECTION_URL

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello World!")
});

app.use(cors());
app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/products', productRoute);
app.use('/api/carts', cartRoute);
app.use('/api/orders', orderRoute);
app.use('/api/checkout', paymentRoute);

mongoose.connect(CONNECTION_URL, () => {
    app.listen(PORT, () => {
        console.log(`Server running on PORT ${PORT}`)
    })
})