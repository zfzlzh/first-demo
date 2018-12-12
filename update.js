function find_info(){

    var urlPara=new URLSearchParams(location.search);
    var uid=urlPara.get("uid");
    
    var xhr=createXhr();

    xhr.onreadystatechange=function(){
        if(xhr.readyState==4&&xhr.status==200){
            var res=xhr.responseText;

            var user=JSON.parse(res);

            $("uname").value=user.uname;
            $("upwd").value=user.upwd;
            $("birth").value=user.birth;
            $("email").value=user.email;
            $("phone").value=user.phone;
            if (user.gender=='1')
            {
                $("male").checked=true;
            }else if (user.gender=='0')
            {
                $("female").checked=true;
            }else{
                $("secrect").checked=true;
            }
            $("uid").value=user.uid;

        }
    }

    xhr.open("get","/user/getMsg?uid="+uid,true);
    xhr.send(null);
}