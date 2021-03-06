// IMPORTS
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const DATABASE_URL = "mongodb://localhost:27017/currencies";
// DATABASE CONNECTION get url from ENV
mongoose.connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Database connected!'));
// MIDDLWARES
app.use(express.json());
// ROUTES
const currenciesRoute = require('./Routes/currencies_route');
app.use('/currencies', currenciesRoute);

app.listen(process.env.PORT || 3000, () => {
    console.log('server connected');
});

