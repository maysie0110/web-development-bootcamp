var express = require("express");
var app = express();
const request = require("request");
app.set("view engine","ejs");

app.get("/", function(req, res){
    res.render("search");
});

//result page
app.get("/results",function(req,res){
    //get data from query string in from GET in ejs
    var query = req.query.search;
    var url = "http://www.omdbapi.com/?s="+query+"&apikey=thewdb";
    
    request(url, function(error, response,body){
        if(!error & response.statusCode== 200){
            var parseData = JSON.parse(body);
            res.render("results",{data: parseData});
        }
    });
});

app.listen(3000, function(){
    console.log("server started!");
});