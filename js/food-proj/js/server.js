const express = require("express");
const path = require("path");
const request = require("request");

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, '../')));
app.use('/css', express.static(path.join(__dirname, './css')));
app.use('/js', express.static(path.join(__dirname, './js')));
app.use('/icons', express.static(path.join(__dirname, './icons')));
app.use('/img', express.static(path.join(__dirname, './img')));

app.get('/', async(req, res) => {    
    return res.sendFile(path.join(__dirname, "../index.html"));
});

// app.post('/js/server.php', async(req,res) => {
//     return res.send(path.join(__dirname, "./server.php"));
// });

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
