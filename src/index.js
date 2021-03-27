const express = require("express");
const app = express();
const path = require("path");
const port = 8000;



 const static_path=path.join(__dirname,'../public');
 const templatepath=path.join(__dirname,'../templates');


 app.set("view engine","hbs");
 app.set("views",templatepath);

 app.use(express.static(static_path));

 //template engine route
 app.get("/",(req,res)=>{
     res.render("index", {
         contact: "9315",
     });
 });

app.get("/",(req,res)=>{
    res.send("hello for the express server");
});


app.listen(port,()=>{
    console.log(`listening to the port ${port}`)
})