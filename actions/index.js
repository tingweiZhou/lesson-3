var IndexPager = require('../views/IndexPager');

module.exports = function (req,res){
    var articleList = [
        {title:'title one',body:'body one'},
        {title:'title two',body:'body two'},
    ];
    res.writeHead('Content-Type','text/html');
    res.end(new IndexPager(articleList).render());
};