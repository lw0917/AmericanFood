var express = require('express');
var router = express.Router();
var query=require('../mysql');

/* GET home page. */
///获取swiper图标列表
router.get('/api/icon', function(req, res, next) {
      query('select * from icon',function(err,result){
        if(err){
           res.json({code:1,msg:err})
        }else{
          res.json({code:0,msg:result})
        }
      })
    
});
///获取nav列表
router.get('/api/nav', function(req, res, next) {
  query('select * from nav',function(err,result){
    if(err){
       res.json({code:1,msg:err})
    }else{
      res.json({code:0,msg:result})
    }
  })
});
///获取list列表
router.get('/api/list', function(req, res, next) {
  query('select * from list',function(err,result){
    if(err){
       res.json({code:1,msg:err})
    }else{
      res.json({code:0,msg:result})
    }
  })
});

module.exports = router;
