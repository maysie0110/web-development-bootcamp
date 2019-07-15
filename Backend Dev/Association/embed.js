var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo",{useNewUrlParser:true});


//POST - title, content
var postSchema = new mongoose.Schema({
    title: String,
    content: String
});

var Post = mongoose.model("Post", postSchema);


//USER - email, home
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema] //embedded posts in USER
});

var User = mongoose.model("User", userSchema);


// var newUser = new User({
//     email: "may@brown.edu",
//     name: "May Brown"
// });

// newUser.posts.push({
//     title:"Embedded Post",
//     content:"fsdoifhorvnadiforughaljdfhgroanvoircnvod"
// })

// newUser.save(function(err,user){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(user);
//     }
// });

// var newPost = new Post({
//     title: "My First Post",
//     content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
// });

// newPost.save(function(err,post){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(post);
//     }
// });

User.findOne({name: "May Brown"}, function(error, user){
    if(error){
        console.log(error);
    }
    else{
        user.posts.push({
            title:"Another embedded post",
            content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque vitae tempus quam pellentesque nec. Eget aliquet nibh praesent tristique magna. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis. Pretium quam vulputate dignissim suspendisse in. Feugiat nisl pretium fusce id velit. Massa massa ultricies mi quis. Turpis egestas sed tempus urna et pharetra pharetra massa. Scelerisque mauris pellentesque pulvinar pellentesque. Gravida quis blandit turpis cursus. Dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo."
        });
        user.save(function(error,user){
            if(error){
                console.log(error);
            }
            else{
                console.log(user);
            }
        });
    }
})