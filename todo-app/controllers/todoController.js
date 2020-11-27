var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });//middileware

//mongoose 
var mongoose = require('mongoose');

//for avoiding the warnings
mongoose.set("useNewUrlParser", true);
mongoose.set("useUnifiedTopology", true);
//connect to the database
mongoose.connect('mongodb+srv://jishnu:malu@todo-cluster.stxgl.mongodb.net/test')

//create a schema - like a blue print 
var todoSchema = new mongoose.Schema({ item: String });

//create a model - stored as a collection in mongodb
var Todo = mongoose.model('Todo', todoSchema);
// var itemOne =Todo({item : 'buy some pookals!'}).save((err)=>{//new data
//     if(err) throw err;
//     console.log('item saved');
// });//creating a data object


//dummy data 
//var data = [{ item: 'get milk' }, { item: 'walk dog' }, { item: 'todo app undaknanm' }]


//controller for handling things
//just a module which we export at the end
module.exports = (app) => {


    app.get('/todo', (req, res) => {
        //get data from the mongodb and pass it to the view 
        //specify the model -Todo
        Todo.find({}, (err, data) => {
            if (err) throw err;
            res.render('todo', { todos: data });
        })//get all the item in Todo - collection

    });

    //post
    app.post('/todo', urlencodedParser, (req, res) => {
        //get data from the view and add it to mongodb
        var newTodo = Todo(req.body);
        newTodo.save((err)=>{
            if(err) throw err;
            console.log('item saved!');
            res.json(data);
        });
        // console.log("post call-back! started");

        // //push the data 
        // data.push(req.body);

        // //sending data back to the frontend 
        // res.json(data);

        // console.log("post call-back! terminated");
    })

    //delete
    app.delete('/todo/:item', (req, res) => {
       //delete the requested item from mongodb
       Todo.find({item : req.params.item.replace(/\=/g, " ")}).remove((err,data)=>{
           if(err) throw err;
           res.json(data);
       }); 
        
        
        
        //using a fliter function
        // data = data.filter((todo) => {
        //     return todo.item.replace(/ /g, '-') !== req.params.item;
        // })
        // res.json(data);
    });

};