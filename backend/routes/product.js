var express = require('express');
var router = express.Router();
var pool=require('./pool.js')
var upload=require('./multer');

/* GET home page. */
router.post('/addnewmobile',upload.any(), function(req, res, next) {
    
    sql="insert into mobile(categoryid,subcategoryid,mobilename,description,price,color,icon,stock,offer) values(?,?,?,?,?,?,?,?,?)";
    pool.query(sql,
    [req.body.categoryid,
    req.body.subcategoryid,
    req.body.mobilename,
    req.body.description,
    req.body.price,
    req.body.color,
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

router.get('/displayall',function(req,res){

    pool.query("select * from mobile", function(error,result){
        if(error)
        {
            res.status(500).json([])
        }
        else{
            res.status(200).json(result)
        }
    })
})

router.post('/editpicture',upload.single('icon'), function(req, res, next) {

    pool.query("update mobile set icon=? where mobileid=?",
    [   req.file.originalname,
        req.body.mobileid]
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

router.post('/editmobile', function(req, res, next) {
    pool.query("update mobile set categoryid=?,subcategoryid=?,mobilename=?,description=?,price=?,color=?,stock=?,offer=? where mobileid=?",
    [req.body.categoryid,
    req.body.subcategoryid,
    req.body.mobilename,
    req.body.description,
    req.body.price,
    req.body.color,
    req.body.stock,
    req.body.offer,
     req.body.mobileid]
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
router.post('/deletemobile', function(req, res, next) {

    pool.query("delete from mobile where mobileid=?",
    [req.body.mobileid]
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


router.get('/mobileoffers',function(req,res){

    pool.query("select * from mobile where offer>0", function(error,result){
        if(error)
        {
            res.status(500).json([])
        }
        else{
            res.status(200).json(result)
        }
    })
})


router.post('/displayallproductbysubcategoryid',function(req,res){

    pool.query("select * from mobile where subcategoryid=?",[req.body.subcategoryid], function(error,result){
        if(error)
        {
            res.status(500).json([])
        }
        else{
            res.status(200).json(result)
          //  alert(JSON.stringify(res))
        }
    })
});

module.exports = router;