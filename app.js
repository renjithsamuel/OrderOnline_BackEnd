const express = require('express');
const mongoose = require('mongoose');
const {getApproval,updateElement} = require('./controller/controller');
const helmet = require('helmet');
const cors = require('cors');
const app = express();
app.use(express.json())
app.use(helmet());
app.use(cors());

let mongodbString = 'mongodb://0.0.0.0:27017/';
mongoose.set("strictQuery",false);
mongoose.connect(mongodbString).then(()=>console.log('connected!!'));

app.get('/api/v1/approval',getApproval);
app.put('/api/v1/approval/:id',updateElement);

app.get('/api/v1/health',(req,res)=>{
    let message = {message : "Its working perfectly",status: "success"};
    res.status(200).json(message);
});

let port = 8080;
app.listen(port,()=>{
    console.log(`Server started at ${port}`);
})
