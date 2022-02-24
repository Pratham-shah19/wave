const express = require('express');
const app = express();
const router = require('./routes/router')


app.use(express.json());

app.use('/api/v1',router);

app.listen(5000,()=>console.log("listening on port 5000..."));
