const express =require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended:false}));
const product = [];
app.use("/",(req,res)=>{
      res.sendFile(path.join(__dirname,"views","signup.html"));
});
app.listen("3000");