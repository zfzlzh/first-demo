const express=require("express");
const router=express.Router();
const pool=require ("../../pool");

router.get("/",function(req,res){
    var $pid=req.query.pid;

    var output={
        candy:{},
        img:[]
    };

    var sql="SELECT * FROM candy_index WHERE pid=? ORDER BY hot";
    pool.query(sql,[$pid],function(err,result){
        if (err) throw err;
        output.candy=result[0];

        var sql="SELECT pic FROM candy_pic WHERE candy_pid=?";
        pool.query(sql,[$pid],function(err,result){
            if (err) throw err;
            output.img=result;
            res.send(output);

        })
    });

})

module.exports=router;



