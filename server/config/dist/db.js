"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var MONGODB_URI = "mongodb://localhost/Bag";
mongoose_1["default"].connect(MONGODB_URI);
mongoose_1["default"].connection
    .on("open", function () {
    console.log("Database Connected😏");
})
    .once("error", function (error) {
    console.log("Error Connecting to DataBase \t " + error);
});
exports["default"] = mongoose_1["default"];
