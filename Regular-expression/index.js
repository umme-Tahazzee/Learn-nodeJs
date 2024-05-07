const express = require("express");
const app = express();

app.get("/product/:id([0-9]{3})", (req, res)=>{
      res.send(`<h2> ID = ${req.params.id}</h2>`)
})

app.get("/product/:title([a-zA-Z0-9])", (req, res)=>{
    res.send(`<h2> Title = ${req.params.title}</h2>`)
})

app.use('*', (req,res)=>{
      res.status(410).send({
          message : "not a valid route"
      })
})
app.listen(3000,()=>{
      console.log(`server is running at http://localhost:3000 `);
})