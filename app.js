const express = require('express');
const app = express();

app.use(express.static("public"));

app.use(express.json());

const PORT = process.env.PORT || 8080;


app.get("/", (req, res) => {

    res.sendFile(__dirname + "/public/index.html");

});

app.get("/1", (req, res) => {

    res.sendFile(__dirname + "/public/firstpage.html");

});

app.get("/2", (req, res) => {

    res.sendFile(__dirname + "/public/secondpage.html");

});

app.get("/3", (req, res) => {

    res.sendFile(__dirname + "/public/thirdpage.html");

});



app.listen(PORT, (error) => {
    if (error) {
       console.log("error is ", error); 
    }
    console.log("The server is running on port", PORT);
});