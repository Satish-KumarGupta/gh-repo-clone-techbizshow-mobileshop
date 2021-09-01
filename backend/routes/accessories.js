var express = require('express');
var router = express.Router();
var pool=require('./pool.js')
var upload=require('./multer');

/* GET home page. */
router.post('/addnewaccessories',upload.any(), function(req, res, next) {
    
    sql="insert into accessories(categoryid,subcategoryid,accessoryname,description,price,picture,stock,offer) values(?,?,?,?,?,?,?)";
    pool.query(sql,
    [req.body.categoryid,
    req.body.subcategoryid,
    req.body.accessoryname,
    req.body.description,
    req.body.price,
    req.files[0].originalname,
    req.body.stock,
    req.body.offer],
    function(error,result){
        if(error)
        { console.log(error)
            console.log(sql);
            res.status(500).json({result:false})
        }
        else{

            res.status(200).json({result:true})
        }
    })

});


router.get('/displayalloffers',function(req,res){

    pool.query("select * from accessories where offer>0", function(error,result){
        if(error)
        {
            res.status(500).json([])
        }
        else{
            res.status(200).json(result)
        }
    })
})

router.get('/displayall',function(req,res){

    pool.query("select * from accessories", function(error,result){
        if(error)
        {
            res.status(500).json([])
        }
        else{
            res.status(200).json(result)
        }
    })
})

router.post('/editpicture',upload.single('picture'), function(req, res, next) {

    pool.query("update accessories set picture=? where accessoryid=?",
    [   req.file.originalname,
        req.body.accessoryid]
    ,function(error,result){
        if(error)
        { console.log(error)
            res.status(500).json({result:false})
        }
        else{

            res.status(200).json({result:true})
        }
    })
});

router.post('/editaccessories', function(req, res, next) {
    pool.query("update accessories set categoryid=?,subcategoryid=?,accessoryname=?,description=?,price=?,stock=?,offer=? where accessoryid=?",
    [req.body.categoryid,
    req.body.subcategoryid,
    req.body.accessoryname,
    req.body.description,
    req.body.price,
    req.body.stock,
    req.body.offer,
    req.body.accessoryid]
    ,function(error,result){
        if(error)
        {
            console.log(error)
            res.status(500).json({result:false})
        }
        else{
            console.log(req.body)
            res.status(200).json({result:true})
        }
    })


});
router.post('/deleteaccessories', function(req, res, next) {

    pool.query("delete from accessories where accessoryid=?",
    [req.body.accessoryid]
    ,function(error,result){
        if(error)
        { console.log(error)
            res.status(500).json({result:false})
        }
        else{

            res.status(200).json({result:true})
        }
    })

});
module.exports = router;