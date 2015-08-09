var express = require("express"),
    compression = require("compression");

var app = express();

app.use(compression());

var engine = require("./engine.js"),
    router = require("./router.js");

app.engine("mustache", engine);
app.set("views", __dirname + "/templates");
app.set("view engine", "mustache");

app.use(compression());
app.use(router);

app.listen(process.env.PORT || 8080);
