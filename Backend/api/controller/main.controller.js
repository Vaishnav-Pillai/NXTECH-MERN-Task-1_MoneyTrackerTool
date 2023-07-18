var Expense = require('../db/db.js');
const { ObjectId } = require('mongodb');

function isEmptyList(obj){
    return(!obj || obj.length == 0 || Object.keys(obj).length == 0);
}

function handleError(res,error){
    res.status(200);
    res.send(error);
}

//CRUD

//uri1: /api/expenses
//uri2: /api/expenses/id

module.exports.create = function(req,res){

    const expenseObj = {
        amount: req.body.amount,
        category: req.body.category,
        date: req.body.date,
        description: req.body.description
    };
    
    try{

        console.log(expenseObj);
        Expense.create(expenseObj)
            .then( result => {
                res.status(201);
                res.send(result);
            })
            .catch(error => handleError(res,error))
    }
    catch(e){
        handleError(res,e)
    }
}

module.exports.readAll = function(req,res){

    try{
        Expense.find()
            .then( result => {
                if(isEmptyList(result)){
                    res.status(400);
                    res.send("List is Empty.");
                }
                res.status(200);
                res.send(result);
            })
            .catch(error => handleError(res,error));
    }
    catch(e){
        handleError(res,e)
    }
}

module.exports.deleteOne = function(req,res){
    
    try{

        Expense.findOneAndDelete( {'_id':(req.params.id)})
            .then( result => {
                if(isEmptyList(result)){
                    res.status(400);
                    res.send("List is Empty.");
                }

                res.status(200);
                res.send("Deleted Provider "+result);
            })
            .catch(error => handleError(res,error))

    }
    catch(e){
        handleError(res,e)
    }
}