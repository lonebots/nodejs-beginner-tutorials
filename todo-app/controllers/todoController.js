var bodyParser = require('body-parser');

//middleware
var urlencodedParser = bodyParser.urlencoded({ extended: true });


//controller 
var data = [{ item: 'get milk' }, { item: 'walk dog' }, { item: 'attend kallyanam' }]


//controller for handling things
//just a module which we export at the end
module.exports = (app) => {

   
    app.get('/todo', (req, res) => {
        res.render('todo', { todos: data });
    });

    //post
    app.post('/todo', urlencodedParser, (req, res) => {
        data.push(req.body);
        res.json(data);
    });

    //delete
    app.delete('/todo/:item', (req, res) => {
        //using a fliter function
        data = data.filter((todo)=>{
            return todo.item.replace(/ /g, '-')!==req.params.item;
        })
        res.json(data);
    });

};