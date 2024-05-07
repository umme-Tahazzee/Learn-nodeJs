require("dotenv").config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;


const myMiddleWare = (req, res, next) =>{
    console.log('middle ware function');
    req.cuurentTime = new Date(Date.now())
    next()
    
}

app.use(myMiddleWare)

app.use((req,res,next)=>{
     res.send("404 bad")
})


app.get("/", (req,res)=>{
     console.log('ok2 ' +req.cuurentTime);
     res.send("ok")
})

app.get("/about",  (req,res)=>{
    console.log('about page ' +req.cuurentTime);
    res.send("ok about")
})


app.listen(PORT ,()=>{
     console.log(`server is running at http://localhost:${PORT}`);
})
