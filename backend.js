const express = require("express");
const app = express();
const port = 3000;

app.use(express.static(__dirname));

app.get('/',((req, res) => {
    res.sendFile(__dirname+'/index.html')
}))

app.get('/about',((req, res) => {
    res.sendFile(__dirname+'/about.html')
}))

app.get('/popular',((req, res) => {
    res.sendFile(__dirname+'/popular.html')
}))

app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`)
);