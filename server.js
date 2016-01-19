'use strict'

var http = require('http');
var url = require('url');
var actionRepos = {}
actionRepos['/add'] = require('./actions/add');
//handleRepos['/del'] = require('./actions/del');
//handleRepos['/update'] = require('./actions/update');
actionRepos['/'] = require('./actions/index');

http.createServer(function(request,response){
    let pathname=url.parse(request.url).pathname;
    var action = actionRepos[pathname];
    if(action){
        action(request,response);
    }else{
        response.writeHead(404);
        response.end();
    }
    
}).listen(3000);