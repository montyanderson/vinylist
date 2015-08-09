var express = require("express"),
    request = require("request");

var router = express.Router();

router.use(express.static("public"));

router.get("/", function(req, res) {
    res.render("index");
});

router.get("/:username", function(req, res) {
    var username = req.params.username.replace(/\W/g, ""); // strip out all non-alphanumeric chars

    request({
        url: "https://api.discogs.com/users/" + username + "/collection/folders/0/releases",
        headers: {
            "User-Agent": "vinylist/0.1 http://github.com/montyanderson/vinylist"
        }
    }, function(err, reqres, body) {
        if(!err) {
            res.render("profile", {
                username: username,
                collection: JSON.parse(body).releases
            });
        } else {
            console.log(err);
            console.log(url);
        }
    });
});

module.exports = router;
