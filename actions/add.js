'use strict'
var database = require('../database');
var AddPager = require('../views/AddPager');
//var post = require('./post');
var querystring = require('querystring');

module.exports = function(req,res){
    if (req.method === 'GET'){
        res.writeHead('Content-Type','text/html');
        res.end(new AddPager().render());
    }else{
      /*  
        post(req).then(function (data){
            var errors = {};
            if (!(data.title && data.title.length >=5)){
                errors.title = 'title char length >=5';
            }
            if (!(data.body && data.body.length >=10)){
                error.body = 'body char length >=10'
            }
            
            if(Object.keys(errors).length){
                res.writeHead('Content-Type','text/html');
                res.end(new AddPager(errors).render());
            }else{
                database.add(data)
            }
        });
       得不到post的请求*/
       console.log('ok');
       var result ='';
       let jsonObj;
       console.log(result)
       req.on('data',function(chuck){
           result += chuck;
       });
       
       req.on('end',function(){
           jsonObj = querystring.parse(result);
           console.log(jsonObj);
       })
       
            
    }
    
};