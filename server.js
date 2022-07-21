const express = require('express')
const empRoutes = require('./src/employees/routes');

const app = express();
const port = 3000;

app.use(express.json())
app.get("/" , (req , res) =>{
    res.send("helllo");
})

app.use('/api/v1/employees', empRoutes);

app.listen(port , ()=> 
console.log(`app is listening on port ${port}`));
