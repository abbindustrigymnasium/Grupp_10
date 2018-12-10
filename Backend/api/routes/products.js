const express = require('express');
const router = express.Router();

var mysql      = require('mysql');
var con = mysql.createConnection({
  host     : 'iot.abbindustrigymnasium.se',
  user     : 'gruppett',
  password : 'fiskflyg',
  database : 'gruppett'
});

con.connect(function(error) {
    if (error) {
        throw error;
    }
    else
    console.log("funkar");
});

router.get('/', (req,res,next) => {

    con.query('SELECT * FROM gruppett_termometer', function (error, results,) {
        if (error) throw error;
        res.status(200).json({
        message: 'Getter',
        result: results});
        console.log('The solution is: ', results[0].Plats);
      });
    
    
})

router.post('/', (req,res,next) => { 
    const product = {
        Temp: req.body.Temp,
        Luftfuktighet: req.body.Luftfuktighet
    }

    var Createproduct= function(){
        return new Promise(function(resolve,reject){

            var Theproduct= [product.Temp,product.Luftfuktighet];
            console.log(Theproduct);
            con.query('INSERT INTO gruppett_termometer (Temp,Luftfuktighet) VALUES ?',[[Theproduct]], function (error, results,) {
                if (error) 
                return reject (error);
                else 
                return resolve(Theproduct)
              });
        })
    }

Createproduct().then(Theproduct => {
    res.status(201).json({
        message: "Success, new product",
        Product: product
    })
}).catch(error => {
    res.status(500).json({
        error: error
    })
});

});

router.get('/:productTemp', (req, res, next) => {
    const Temp = req.params.productTemp;

    console.log(Temp);
    var getProduct= function(){
        return new Promise(function(resolve,reject){

            con.query('SELECT * FROM gruppett_termometer WHERE Temp =?',[Temp], function (error, results,) {
                if (error) 
                return reject (error);
                else 
                return resolve(results);
              });
        })
    }

    getProduct().then(result => {
        if (result.length==0) {
            res.status(404).json({
                message: "No such values exists"
            });
        }
        else
    res.status(200).json(results);


}).catch(error => {
    res.status(500).json({
        error: error
    })
});
})

router.patch('/', (req, res, next) => {

    const product = {
        Temp: req.body.Temp,
        Luftfuktighet: req.body.Luftfuktighet
    }

    var updateProduct= function(){
        return new Promise(function(resolve,reject){

            con.query('UPDATE `gruppett_termometer` SET Luftfuktighet= ? WHERE Temp =?',[product.Luftfuktighet, product.Temp], function (error, results,) {
                if (error) 
                return reject (error);
                else 
                return resolve(results)
              });
        })
    }

    updateProduct().then(result => {
        if (result.affectedRows>0) {
            res.status(200).json(result);
        }
        else
        res.status(404).json({
            message: "Update impossible, lack of values"
        });


}).catch(error => {
    res.status(500).json({
        error: error
    })
});
})

router.delete('/', (req, res, next) => {
    

    console.log(req.body.Temp);
    var destroyProduct= function(){
        return new Promise(function(resolve,reject){
        const Temp = req.body.Temp;
            con.query('DELETE FROM gruppett_termometer WHERE Temp =?',[Temp], function (error, results) {
                if (error) 
                return reject (error);
                else 
                return resolve(results);
              });
        })
    }

    destroyProduct().then(result => {
        if (result.length==0) {
            res.status(404).json({
                message: "No such values exists"
            });
        }
        else
        res.status(200).json(result);


}).catch(error => {
    res.status(500).json({
        error: error
    })
});
})

module.exports = router;