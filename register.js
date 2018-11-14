//用户名检测
var isTrue=0;
function uname_blur(){
    var xhr=createXhr();
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4&&xhr.status==200){
            var res=xhr.responseText;
            if(res=="had"){
              $("uname_info").innerHTML="用户名已存在";

            }else if(res=="empty"){
                $("uname_info").innerHTML="用户名不能为空";

            }
                else{
                    $("uname_info").innerHTML="用户名正确";
                    isTrue++;
                }
            }
        }

    var uname=$("uname").value;
    xhr.open("get","/user/findUser?uname="+uname,true);
    xhr.send(null);
}

//提交事件

function reg_msg(){
    if(isTrue==6){
    var xhr=createXhr();
xhr.onreadystatechange=function(){
    if(xhr.readyState==4&&xhr.status==200){
        var res=xhr.responseText;
        console.log(res);

    }
}
xhr.open("post","/user/reg_info",true);
xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
var uname=$("uname").value;
    var upwd=$("upwd").value;
    var birth=$("birth").value;
    var email=$("email").value;
    var gender="";
        if($("male").value==1){
            gender="1"
        }else if($("female").value==0){
            gender="0"
        }else{
            gender="2"
        }
    var phone=$("phone").value;
    var formdate="uname="+uname+"&upwd="+upwd+"&birth="+birth+"&email="+email+"&gender="+gender+"&phone="+phone;
xhr.send(formdate);
        alert("注册成功");
        window.location.href="../index.html";

}
    else{
        alert("信息有误，注册失败");
    }
}
