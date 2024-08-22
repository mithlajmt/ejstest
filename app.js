const express = require("express");
const path = require("path");
const axios = require('axios');
const app = express();
const PORT = 8002;

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'));

// app.get("/", async (req, res) => {
//     res.render('index', { welcomeMessage: 'Welcome to the site!' });
// });



app.listen(PORT, () => {
    console.log(`server running on PORT-${PORT}`);
});
