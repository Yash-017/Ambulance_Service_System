var mysql= require('mysql2');
var pool=mysql.createPool({
    host:"localhost",
    user:"root",
    password:"Mysql01",
    database:"nodelogin",
    connectionLimit:10
});

var express = require('express');
//const pool = require('mysql2/typings/mysql/lib/Connection');
var app = express();

var bodyParser=require('body-parser');
var router=express.Router();



  

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:true})) ;
  

// pool.query('select * from accounts',(err,result,fields)=>{
//     if(err){
//         return console.log(err)
//     }
//     return console.log(result)
// });


// app.get("/",function(req,res){
//     res.sendFile(__dirname + "/indexx.ejs");
// });

// app.post("/" ,function(req,res){
//     var user_name= req.body.user_name;
//     var pass_word=req.body.pass_word;

//     pool.query('select * from accounts where username = ? and password = ?',[user_name,pass_word],function(error,result,fields){
//         if(result.length>0){
//             res.redirect("/users")
//         }
//         else{
//             res.redirect("/")
//         }
//         res.end();
//     });

// }); 

// app.get("/signup",function(req,res){
//     res.sendFile(__dirname + "/signup.html")
// });



// app.get("/users",function(req,res){
//     res.sendFile(__dirname + '/views/user-list.ejs'); //???????????
// });

// app.post("/users" ,function(req,res){
//     var d_name= req.body.d_name;
//     var e_type=req.body.e_type;
//     var d_address=req.body.d_address;
//     var d_phone=req.body.d_phone;
//     var d_injury=req.body.d_injury;

//     pool.getConnection(function(error){
//         if(error) throw error;

//         var sqlll="INSERT INTO add_emergency(name,Emergency_type,address,phone,num_injury)VALUES('"+d_name+"','"+e_type+"','"+d_address+"','"+d_phone+ "','"+d_injury+"')";

//         pool.query(sqlll,function(error,result){
//             if(error) throw error;
//             res.send('Record Inserted'+result.insertId);
//         })

// });
// });


// var db=require('database');
// // another routes also appear here
// // this script to fetch data from MySQL databse table
// router.get('/user-list', function(req, res, next) {
//     var sql='SELECT * FROM add_emergency';
//     db.query(sql, function (err, data, fields) {
//     if (err) throw err;
//     res.render('user-list', { title: 'User List', userData: data});
//   });
// });



   

 module.exports = router;
 module.exports = app;
 module.exports={pool};
 exports.pool=pool;
