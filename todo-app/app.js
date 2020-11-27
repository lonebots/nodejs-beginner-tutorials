const express=require('express');
const app=express();

//setting the view 
app.set('view engine', 'ejs');

app.get('/',(req,res)=>{
//request send  
    console.log('request sent from: '+ req.url);

//handling he request and responding to it    
    res.writeHead(200, { 'Content-Type': 'text' });
    res.end("you are all set to go");
})


//set the port
app.listen(3000, (err)=>{
    if(err)console.log(err);
    else console.log('listening to port : 3000');
})