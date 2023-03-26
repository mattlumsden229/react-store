const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config({path: './config/.env'})
const stripe = require('stripe')(process.env.STRIPE_KEY);
const app = express();
app.use(cors());
app.use(express.static('public'));
app.use(express.json());

// Load config
dotenv.config({path: './config/.env'})

app.post('/checkout', async (req, res) => {
   console.log(req.body);
   const items = req.body.items;
   let lineItems = [];
   items.forEach((item) => {
    lineItems.push(
        {
            price: item.id,
            quantity: item.quantity
        }
    )
});

const session = await stripe.checkout.sessions.create({
    line_items: lineItems,
    mode: 'payment',
    success_url: 'http://localhost:3000/success',
    cancel_url: 'http://localhost:3000/cancel'
});

res.send(JSON.stringify({
    url: session.url
}));

});

app.listen(4000, () => console.log('Listening on port 4000'))