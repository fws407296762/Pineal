module.exports = function(router){
    router.get("/",function(req,res){
        res.render("index",{
            title:"你好吧"
        });
    });
    return router;
};