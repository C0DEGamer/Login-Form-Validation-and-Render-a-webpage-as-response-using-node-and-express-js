// Login form validation and send a webpage[html file] as response
//please install node and express in your pc to use this
const express=require("express");
const app=express();
app.use(express.static("path"));
app.use(express.json());
const path=require("path");
app.use(express.urlencoded({extended:true}));

const User_List=[

{"name":"ironman","password":"123456"},
{"name":"spiderman","password":"spider"},
{"name":"blackpanther","password":"panther123"},
{"name":"thor","password":"abc123"}

]

app.post("/index.js",(req,res)=>{

const {name,password}=req.body;

User_List.map((user)=>{

if(name==user.name&&password==user.password){

res.sendFile(path.join(__dirname,"projects","translator.html"));
//name and password entering the user matches the initialised name and password in User_list
//then render this file otherwise nothing will happened
}

})

})

const port=process.env.port||2001;

app.listen(port,function(err){

if(err) throw err;

else{
  console.log("server is running on"+port);
}

})
