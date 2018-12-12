//密码
function upwd_focus(){
    $("upwd_info").innerHTML="6-12位数字和字母组成"
}
function upwd_blur(){
    var upwd=$("upwd").value;
    if(upwd==""){
        $("upwd_info").innerHTML="密码不能位空";

    }else if(upwd.length>=6&&upwd.length<=12){
        $("upwd_info").innerHTML="密码正确";
        isTrue++;
    }else{
        $("upwd_info").innerHTML="密码错误";

    }
}
//重复密码检验
function reupwd_focus(){
    $("reupwd_info").innerHTML="重复密码";
}

function reupwd_blur(){
    var reupwd=$("reupwd").value;
    var upwd=$("upwd").value;
    if(reupwd==upwd && reupwd!=""){
        $("reupwd_info").innerHTML="密码正确";
        isTrue++;
    }else if(reupwd==""){
        $("reupwd_info").innerHTML="不能为空";

    }
    else{
        $("reupwd_info").innerHTML="与密码不符";

    }
}
//电话号码
function phone_blur(){
    var phone=$("phone").value;
    if(phone.length!=11){
        $("phone_info").innerHTML="号码应为11位";

    }
    else if(!/^1[3-8]\d{9}$/.test(phone)){
        $("phone_info").innerHTML="号码格式错误";

    }
        else{
        $("phone_info").innerHTML="号码格式正确";
        isTrue++;
    }
}
//email

function email_blur(){
    var email=$("email").value;
    if(email==""){
        $("email_info").innerHTML="邮箱不能为空";

    }else if(!/^[a-zA-Z\d]+([-_.][a-zA-Z\d])*@[a-zA-Z\d]+[-.][a-zA-Z\d]{2,4}$/.test(email)){
        $("email_info").innerHTML="邮箱格式错误";
    }
    else{
        $("email_info").innerHTML="邮箱正确";
        isTrue++;
    }
}