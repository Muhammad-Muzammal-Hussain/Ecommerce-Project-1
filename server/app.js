let jwt = require("jsonwebtoken")
let Express=require('express')

let app=Express()
app.use(Express.json())
// const mongoose=require('mongoose')
require('./models/db')
const User=require('./models/user')

app.post('/signup',async(req,res)=>{
    const user=new User(req.body)
    await user.save()
    res.send(true)
    console.log(req.body)
})

app.get("/userdata", async function(req, res) {
    const userdata = await User.find()
    res.json(userdata)
    console.log(userdata);
});
// 
app.post("/login",async(req,res)=>{
    console.log(req.body)
    let token;
    let name=req.body.name
    let Email = req.body.email
    let Password = req.body.password

    const UserMila = await User.findOne({email:Email, password:Password,name:name})
    user=UserMila
    console.log(UserMila);

    if(UserMila){
        // .....jwtoken\

        jwt.sign({id:UserMila.id},
            "thisismylovecountry" ,{expiresIn:"1d"} , function(err , meratoken){
          res.json({message:"User Found",UserMila , meratoken});
        });

       
        

    }else{
        res.json({message:"User not Found"});
    }
});
app.use(Express.static("./server/uploadsfiles"));
app.listen(3002, (req,res)=>{   
    console.log("Server is running on port 3002");
});