var bodyParser =require('body-parser');
var urlencodedParser =bodyParser.urlencoded({extended : false});//middileware



//dummy data 
var data = [{ item: 'get milk' }, { item: 'walk dog' }, { item: 'todo app undaknanm' }]


//controller for handling things
//just a module which we export at the end
module.exports = (app) => {

   
    app.get('/todo', (req, res) => {
        res.render('todo', { todos: data });
    });

    //post
    app.post('/todo',urlencodedParser,(req,res)=>{
        console.log("post call-back! started");
        
        //push the data 
            data.push(req.body);

        //sending data back to the frontend 
        res.json(data);
            
        console.log("post call-back! terminated");
    })

    //delete
    app.delete('/todo/:item', (req, res) => {
        //using a fliter function
        data = data.filter((todo)=>{
            return todo.item.replace(/ /g, '-')!==req.params.item;
        })
        res.json(data);
    });

};