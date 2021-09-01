var express = require('express');
var router = express.Router();
var pool=require('./pool.js')
var upload=require('./multer');

/* GET home page. */
router.post('/addnewsubcategory',upload.any(), function(req, res, next) {
    
    sql="insert into subcategory(categoryid,subcategoryname,description,icon,ad) values(?,?,?,?,?)";
    pool.query(sql,
    [req.body.categoryid,
    req.body.subcategoryname,
    req.body.description,
//    req.body.price,
    req.files[0].originalname,
    req.files[1].originalname,
 //   req.body.adstatus,
   // req.body.stock,
   // req.body.offer,
    ],
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

router.post('/displaysubcategorybycategoryid',function(req,res){

    pool.query("select * from subcategory where categoryid=?",[req.body.categoryid], function(error,result){
        if(error)
        {
            console.log(error)
            res.status(500).json([])
        }
        else{
            res.status(200).json(result)
        }
    })
})

router.post('/displayallsubcategorybycategoryid',function(req,res){

    pool.query("select * from subcategory where categoryid=?",[req.body.categoryid], function(error,result){
        if(error)
        {
            console.log(error)
            res.status(500).json([])
        }
        else{
            res.status(200).json(result)
        }
    })
})



router.get('/displayall',function(req,res){

    pool.query("select * from subcategory", function(error,result){
        if(error)
        {
            res.status(500).json([])
        }
        else{
            res.status(200).json(result)
        }
    })
})
router.post('/editicon',upload.single('icon'), function(req, res, next) {

    pool.query("update subcategory set icon=? where subcategoryid=?",
    [   req.file.originalname,
        req.body.subcategoryid]
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

router.post('/editad',upload.single('ad'), function(req, res, next) {

    pool.query("update subcategory set ad=? where subcategoryid=?",
    [   req.file.originalname,
        req.body.subcategoryid]
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

router.post('/editsubcategorydata', function(req, res, next) {
    pool.query("update subcategory set categoryid=?,subcategoryname=?,description=?,adstatus=?,price=?,stock=?,offer=? where subcategoryid=?",
    [req.body.categoryid,
    req.body.subcategoryname,
    req.body.description,
 //   req.body.adstatus,
//    req.body.price,
//    req.body.stock,
 //   req.body.offer,
    req.body.subcategoryid]
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
router.post('/deletesubcategory', function(req, res, next) {

    pool.query("delete from subcategory where subcategoryid=?",
    [req.body.subcategoryid]
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
/*
router.get('/subcategoryoffers',function(req,res){

    pool.query("select * from subcategory where offer>0", function(error,result){
        if(error)
        {
            res.status(500).json([])
        }
        else{
            res.status(200).json(result)
        }
    })
})
*/
router.get('/subcategoryoffers',function(req,res){

    pool.query("select * from subcategory where categoryid=5", function(error,result){
        if(error)
        {
            res.status(500).json({result:false})
        }
        else{
            res.status(200).json(result)
        }
    })
})
router.get('/subcategoryoffers1',function(req,res){

    pool.query("select * from subcategory where categoryid=6", function(error,result){
        if(error)
        {
            res.status(500).json({result:false})
        }
        else{
            res.status(200).json(result)
        }
    })
})
module.exports = router;