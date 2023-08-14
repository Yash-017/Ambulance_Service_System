var express = require('express');
var router = express.Router();
var bodyParser=require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended:true})) ;
var pool = require("../ddatabase").pool;
/* GET home page. */
 router.get('/', function(req, res, next) {
   res.render('indexx', { title: 'Express' });
 });

router.post("/" ,function(req,res){
  var user_name= req.body.user_name;
  var pass_word=req.body.pass_word;

  pool.query('select * from accounts where username = ? and password = ?',[user_name,pass_word],function(error,result,fields){
      if(result.length>0){
          res.redirect("/users")
      }
      else{
          res.redirect("/")
      }
      res.end();
  });

}); 


router.get('/signup', function(req, res, next) {
  res.render('signup', { title: 'Express' });
});









router.get('/users', function(req, res, next) {

  var sql='SELECT * FROM add_emergency';
    pool.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.render('user-list', { title: 'User List', userData: data});
  });



router.post("/users" ,function(req,res){
    var d_name= req.body.d_name;
    var e_type=req.body.e_type;
    var d_address=req.body.d_address;
    var d_phone=req.body.d_phone;
    var d_injury=req.body.d_injury;

    pool.getConnection(function(error){
        if(error) throw error;

        var sqlll="INSERT INTO add_emergency(name,Emergency_type,address,phone,num_injury)VALUES('"+d_name+"','"+e_type+"','"+d_address+"','"+d_phone+ "','"+d_injury+"')";

        pool.query(sqlll,function(error,result){
            if(error) throw error;
            res.send('Record Inserted'+result.insertId);
        })

});
});


    
});

module.exports = router;
