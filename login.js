function sendMsg(){
    var xhr=createXhr();
    xhr.onreadystatechange=function(){
        if (xhr.readyState==4&&xhr.status==200){
            var res=xhr.responseText;
            console.log(res);
            if(res=="non"){
                alert("用户名不能为空")
            }else if(res=="npn"){
                alert("密码不能为空")
            }else if(res=="1"){
                alert("登陆成功");
                window.location.href="../index.html"
            }else{
                alert("用户名或密码错误")
            }
        }
    }
    xhr.open("post","/user/login_info",true);
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        var uname=$("uname").value;
        var upwd=$("upwd").value;
        var formate="uname="+uname+"&upwd="+upwd;
    xhr.send(formate);
}