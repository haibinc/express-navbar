// server.js

const express = require("express");
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})


app.get("/climate-crisis", (req, res) => {
    res.redirect('https://magenta-trifle-652eae.netlify.app/');
});


app.get("/typesetting", (req, res) => {
   res.redirect('https://haibinc.github.io/typesetting/')
});

app.get("/four-algorithms", (req, res) => {
    res.redirect('https://haibinc.github.io/four-sorting-algorithms/')
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});