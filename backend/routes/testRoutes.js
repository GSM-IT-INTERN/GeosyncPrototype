var router = require('express').Router();

router.route("/").get((req, res) => {
    return res.send("this is a testyasdvwdsafs!");
});

router.route("/one").get((req, res) => {
    return res.send("one");
});


module.exports = router

//req is the request or hinihingi from end user from Frontend, res is the response is binibigay from Frontend
// app.get("/about", (req, res) => {
//     return res.send("this is a test!");
// });