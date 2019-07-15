var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/references_demo",{useNewUrlParser:true});

var Post = require("./models/post");
var User = require("./models/user");


// User.create({
//     email:"bob@gmail.com",
//     name:"Bob Belcher"
// });
Post.create({
    title:"Use module_exports in post",
    content:"module_exports is used to clean up code, and separate Schema/Model config"
}, function(error, post){
    User.findOne({email:"bob@gmail.com"}, function(error, foundUser){
        if(error){
            console.log(error);
        }
        else{
            foundUser.posts.push(post);
            foundUser.save(function(error,data){
                if(error){
                    console.log(error);
                }
                else{
                    console.log(data);
                }
            });
        }
    });  
});

// Post.create({
//    title:"How to cook the best KBBQ again part 4",
//    content:"fjnoeirghrbgirutghsldjcfpiejvnior" 
//     },function(error, post){
//        User.findOne({email:"bob@gmail.com"}, function(error, foundUser){
//            if(error){
//                console.log(error);
//            }
//            else{
//                foundUser.posts.push(post);
//                foundUser.save(function(error,data){
//                    if(error){
//                        console.log(error);
//                    }
//                    else{
//                        console.log(data);
//                    }
//                });
//            }
//        });
//    });

//find USER
//find all posts for that user
// User.findOne({email:"bob@gmail.com"}).populate("posts").exec(function(error,foundUser){
//     if(error){
//         console.log(error);
//     }
//     else{
//         console.log(foundUser);
//     }
// });
