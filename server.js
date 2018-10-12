const express = require('express');
const hbs = require('hbs');
var app = express();

app.set('view engine','hbs');
//app.use(express.static(__dirname + '/public'));
// app.get('/',(request , response)=>{

// response.send('<h1>hey babes</h1>');
// })


hbs.registerPartials(__dirname + '/views/partials');
hbs.registerHelper('getCurrentYear',()=>{
	return new Date().getFullYear()

})

hbs.registerHelper('upperCase',(text)=>{
   return text.toUpperCase();
})
app.get('/',(req,res)=>{
	res.render('home.hbs',{
		Heading : 'Home Page',
		PageDescription : 'Welcome to my page'

	});

})
app.get('/about',(req,res)=>{

	res.render('about.hbs',{
		Heading : 'About page',
		PageDescription: 'Details about the page'
	});

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