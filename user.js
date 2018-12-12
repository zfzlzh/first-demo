const express=require('express');
const pool=require('../../pool.js');
//express下的路由器

//创建路由器
var router=express.Router();
//login接口
router.post("/login_info",function(req,res){
    var obj=req.body;
    var $uname=obj.uname;
    var $upwd=obj.upwd;


    if(!$uname){
        res.send ("non");
        return;
    }
    if(!$upwd){
        res.send("nop");
        return;
    }



    pool.query('SELECT * FROM user_info WHERE uname=? AND upwd=?',[$uname,$upwd],function(err,result){
        if(err) throw err;
        if(result.length>0){
            res.send("1");
        }else{
            res.send("0");
        }
    })
});
//register
//排查用户名是否重复
router.get("/findUser",function(req,res){
    var obj=req.query;
    var $uname=obj.uname;
    if (!$uname){
        res.send("empty");
        return;
    }
    pool.query("SELECT * FROM user_info WHERE uname=?",[$uname],function(err,result){
        if(err) throw err;
        if(result.length>0){
            res.send("had")
        }else{
            res.send("no_had")
        }
    })
})

//提交事件
router.post("/reg_info",function(req,res){
    var obj=req.body;
    var $uname=obj.uname;
    var $upwd=obj.upwd;
    var $birth=obj.birth;
    var $email=obj.email;
    var $gender=obj.gender;
    var $phone=obj.phone;
    if (!$uname){
        res.send("non");
        return;
    }

    if(!$email){
        res.send("noe");
        return;
    }
    pool.query("INSERT INTO user_info VALUES(NULL,?,?,?,?,?,?)",[$uname,$upwd,$birth,$email,$gender,$phone],function(err,result){
        if (err) throw err;
        console.log(result);
        if (result.affectedRows>0){
            res.send("1")
        }
    })
})

//修改数据
//查询用户星系
router.get("/getMsg",function(req,res){
    var obj=req.query;
    var $uid=obj.uid;
    if (!$uid)
    {
        res.send("用户编号不能为空");
        return;
    }
    pool.query("SELECT * FROM user_info WHERE uid=?",$uid,function(err,result){
        if(err) throw err;
        if(result.length>0){
            res.send(result[0])
        }else{
            res.send("no")
        }
    })
})
//更改信息
router.post("/update_info",function(req,res){
    var obj=req.body
    var $uid=obj.uid;
    var $uname=obj.uname;
    var $upwd=obj.upwd;
    var $birth=obj.birth;
    var $email=obj.email;
    var $phone=obj.phone;
    if (!$uid)
    {
        res.send('用户编号不存在')
        return;
    }
    if (!$uname)
    {
        res.send('用户不存在')
        return;
    }
    if (!$upwd)
    {
        res.send('用户不存在')
        return;
    }
    if (!$birth)
    {
        res.send('用户编号不存在')
        return;
    }
    if (!$email)
    {
        res.send('用户编号不存在')
        return;
    }
    if (!$phone)
    {
        res.send('用户编号不存在')
        return;
    }
    pool.query("UPDATE user_info SET uname=?,upwd=?,birth=?,email=?,phone=?",[$uname,$upwd,$birth,$email,$phone],function(err,result){
        if(err) throw err;
        res.send("<script>alert('修改成功');window.location.href='http://localhost:3000/';</script>");
    })


})
//导出路由器
module.exports=router;