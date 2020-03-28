const express = require("express")
const burger = require("../models/burger.js")
var router = express.Router();


// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
 console.log(burger.getAll)
  burger.getAll(function(data) {
    console.log(data);
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function(req, res) {
  burger.insertOne(req.body.burger, function(response){
    res.json(response)
  })
});

router.put("/api/burgers/:id", function (req, res) {
  burger.updateOne(req.params.id)
  res.send('Devoured!')
})

module.exports = router;
