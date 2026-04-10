const   express = require('express');
const testRoutes = require('./routes/testRoutes.js');

const port = 5000;

const app = express();

app.get("/", (req, res) => {
    return res.send("Hello, World!");
});

app.use("/test", testRoutes);

// app.get("/about this", (req, res) => {
//     return res.send("this is a test!");
// });

// get is retrieval of data, post is for sending data to the server, put is for updating data, delete is for deleting data

// app.get("/contact-us", (req, res) => {
//     return res.send("bat b-buy ka ba ng system namin?");
// });

app.listen(port, () => { console.log(`Server is running on port ${port}...`); });