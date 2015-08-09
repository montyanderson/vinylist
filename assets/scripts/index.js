window.$ = window.jQuery = require("jquery");

$(".go").click(function() {
    location = "/" + $(".username").val().replace(/ /g, "");
});
