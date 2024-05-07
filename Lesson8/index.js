const express = require('express');
const app = express();
const PORT = 3001;



app.get("/userId/101/userAge/22", (req,res)=>{
      const id = req.params.id;
      const age = req.params.age;
       res.send(`student age is ${age} , id is ${id}`)
})

app.listen(PORT, ()=>{
      console.log(`server is running at http://localhost${PORT}`);
})