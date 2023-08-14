var express = require('express');

//var pool = require('../ddatabase').pool  ;

var router = express.Router();
var pool = require("../ddatabase").pool;




/* GET users listing. */
router.get('/users', function(req, res, next) {

  var sql='SELECT * FROM add_emergency';
    pool.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.render('user-list', { title: 'User List', userData: data});
  });


    
});




module.exports = router;
