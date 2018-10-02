const express = require('express');

var app = express();


app.use(express.static(__dirname + '/public'));
app.get('/',(request , response)=>{

response.send('<h1>hey babes</h1>');
})

app.get('/json',(request , response)=>{
	response.send({
		name : 'vaari',
		age : 21,
		college : 'bvcoe',
		branch : 'IT',
		hobbies : [
		'dancing',
		'reading',
		'listening music']
	})

})

// app.get('/webpage',()=>{
// 	response.send('./Facebook_clone/public/fb.html');
// })

// app.get('/image',(request,response)=>{
// 	response.send('./space5.jpg')
// })


app.get('/bad',(request,response)=>{
	response.send(
	{
		errorMessage : '404 Error'
	})

})


app.listen(3000, ()=>
	{
		console.log("Running on port 3000");
	});