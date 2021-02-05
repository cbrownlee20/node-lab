const quotes = require("./quotes");

//const express = require("express");
//const app = express();
//const port = 3000;
//app.listen(port, () => console.log('Listening on port: ${port).'));

"use strict";

const http = require("http");
//const app = require("http");

http.createServer((req, res) => {
    const index = Math.floor(Math.random() * quotes.length);

    const randomQuote = quotes[index];

    console.log(randomQuote);

    res.writeHead(200, {"Content-type": "text/plain"});
    res.write(randomQuote);
    res.end();
    
}) .listen(3000);