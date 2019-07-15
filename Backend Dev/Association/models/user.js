var mongoose =require("mongoose");

//USER - email, home
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId, //mongoose objectID belonging to a post
            ref: "Post"
        }
    ] //referencing posts in USER
});

// var User = mongoose.model("User", userSchema);

//sending out the model
module.exports = mongoose.model("User", userSchema);