const express = require("express");
const app = express();

const handlebars = require("express-handlebars").create({defaultLayout : "main"});
app.engine("handlebars", handlebars.engine);
app.set("view engine","handlebars");

// to read the req of middleware we require body parser
let bodyParser = require("body-parser");
app.use(bodyParser());
app.use(bodyParser.urlencoded({extended : true}));


app.get("/",(req,res)=>{
    res.send("<h2>Welcome you in our form, you just have to change get & post in the last of the url to access these both</h2>")
});
// we are accessing home.handlebars folder by render
//get method for getting the data & post method for posting the data.
app.get("/get",(req,res)=>{
    res.render("about");
});
// for accessing get method ?

// app.get("/home",function(req,res){
//     res.render("home");
//     console.log("button clicked1");
// });

// app.get("/action1",function(req,res){
//     req.body.addEventListener("click",()=>{
//         console.log("button clicked"+buttn);
//     })
// });

app.get("/post",(req,res)=>{
    res.render("signup");
});

app.post("/postcall",(req,res)=>{
    console.log(req.body);
    res.status(200);
    res.send("<h3>You just have entered....</h3><br>"+"<h4>"+req.body.username+ "</h4><br><h4>"+req.body.password +"</h4><br><h4>"+ req.body.email+"<h4>" );
})

app.listen(8080,()=>{
    console.log("server is running");
})