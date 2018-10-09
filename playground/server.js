const express = require('express');

var app = express();

app.get('/',(req,res)=>{

	res.send('HEllloooooo');

})

app.listen(3000);