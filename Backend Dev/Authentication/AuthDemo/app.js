var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    passport = require("passport"),
    localStrategy = require("passport-local"),
    passportLocalMongoose = require("passport-local-mongoose"),
    User = require("./models/user");

//APP CONFIG
mongoose.connect("mongodb://localhost/auth_demo_app",{useNewUrlParser:true});
app.use(require("express-session")({
    secret: "This is secret message that need authentication to be able to view",
    resave:false,
    saveUninitialized:false
}));
app.set("view engine","ejs");
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.urlencoded({extended:true}));

//reading the session, taking data from the session, encode and decode it
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


//=========================================
//   ROUTES
//=========================================


//INDEX route
app.get("/", function(req,res){
    res.render("home");
})

//SECRET route
app.get("/secret", isLoggedIn, function(req, res){
    res.render("secret");
})


//Auth Routes
//show signup form
app.get("/register", function(req,res){
    res.render("register");
});

//post route to extract information from sign up form
app.post("/register", function(req,res){
    //make a new user (not in DB yet) with just username for now
    User.register(new User({username:req.body.username}), req.body.password, function(error,user){

        if(error){
            console.log(error);
            return res.render("register");
        }
        passport.authenticate("local")(req,res,function(){//local strategy
            res.redirect("/secret");
        });
    });
});

//LOGIN routes
//render login form - GET
app.get("/login", function(req,res){
    res.render("login");
});

//take data from login form - POST
app.post("/login", passport.authenticate("local",{ //this is MIDDLEWARE
        successRedirect:"/secret",
        failureRedirect:"/login"
    }),function(req,res){
});

//LOGOUT routes
app.get("/logout", function(req,res){
    req.logout();
    res.redirect("/");
});

//middleware
function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}

app.listen(3000, function(){
    console.log("Authentication Server started");
})