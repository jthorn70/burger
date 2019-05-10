var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");



router.get("/", function(req, res) {
    burger.all(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index",hbsObject);
    });
});

router.post("/api/burgers", function(req, res) {
    console.log(req.body.burger_name)
    console.log(req.body.devoured)
    burger.create([req.body.burger_name], function(result) {
      console.log("the result is: " + result.json)
      res.json(result)
    });
});



router.put("/api/burgers/:id", function(req, res) {
// this doesnt work for some reason, maybe because of th way condition is defined

    // var condition = "id = " + req.params.id;
    // console.log("PUTing condition: " + condition )

    // burger.update({
    //     devoured: req.body.devoured,
    // }), condition, function(result) {
    //     if (result.changedRows == 0) {
    //         return res.status(404).end;
    //     }else{
    //         res.status(200).end();
    //     }
    // }

// this does work, but i cannot find any difference in the two
    var condition = "id = " + req.params.id;

  console.log("PUTing condition: ", condition);

  burger.update({
    devoured: req.body.devoured
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});


router.delete("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("DELETing condition:", condition)

    burger.delete(condition, function(){
        res.redirect("/")
    })
})



module.exports = router;