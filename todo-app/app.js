const express=require('express');
const app=express();

//controller
var todoController =require('./controllers/todoController');



//setting the template engine 
app.set('view engine', 'ejs');
//static files - now it is route independent
app.use(express.static('./public'));


//fire controller so that app will be available in the controller
todoController(app);





//listen to the port
app.listen(3000, (err)=>{
    if(err)console.log(err);
    else console.log('listening to port : 3000');
})