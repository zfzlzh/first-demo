//产品信息手风琴

$(".piano:gt(0)").hide();
$(".all_info").on("click",".open",function(){
    var $open=$(this);
    if($open.next().is(":visible"))//如果自己的兄弟是开着的
        $open.next().slideUp()//就关闭自己旁边的兄弟
    else
        $open.next().slideDown()//将自己旁边的兄弟.card打开
            .siblings(".piano")//旁边的.card的兄弟中其余的.card
            .slideUp();//并关掉其余的.card
});

//返回顶部
$(function(){
    $(".toTop").click(function(e){
        e.preventDefault();
        $("html,body").animate({scrollTop:0},300)
    })
})

$(window).scroll(function(){
    document.body.scrollTop
        ||document.documentElement.scrollTop;
    if($(document).scrollTop()<500)
        $(".toTop").css({"display":"none"});
    else
        $(".toTop").css({"display":"block"});

})


//加减
//var vm=new Vue({
//	el:".math",
//		data:{n:1},
//		methods:{
//            change(i){this.n+=i;},
//            isfs(){
//                if(this.n<1){
//                    this.n=1
//                    alert("商品数量不能小于1");
//                }
//            }
//		}
//})

$(".jian").click(function(){
    var n=$(".num_wid").html();
    var num=parseInt(n)-1;
    if(num==0){return;}
    $(".num_wid").html(num);
});
$(".jia").click(function(){
    var n=$(".num_wid").html();
    var num=parseInt(n)+1;
    $(".num_wid").html(num);
})




//数据库获取
$(window).load(function() {
    var pid = location.search.slice(5);
    $.ajax({
        url: "http://localhost:3000/details",
        type: "get",
        data: {pid},
        dataType: "json"
    })
        .then(function (res) {
            //解构
            var {candy, img} = res;
            var {pname, price, jianjie} = candy;
            //文字部分
            var h3 = $( ".lun_img>.wd_60>h3");
            h3.html(pname);
            var h6 = h3.next();
            h6.html(jianjie);
            var money = h6.next();
            money.children().first().children().last().html("￥" + price.toFixed(2));

            //小图片
            var html = "";
            for (var p of img) {
                var {pic} = p;
                html += `
            <li class="float-left p-1"><img src="${pic}" data-md="${pic}"/></li>
            `
            }
            var div = $(
                ".lun_img>.card>div>div>ul"
            );
            div.html(html);
            div.css("width",`${img.length * 49}px`);
            var leftBtn = div.parent().prev();
            var rightBtn = div.parent().next();
            if (img.length <= 4) {
                rightBtn.addClass("disabled");
            }
            var move = 0;
            var div1 = $(
                ".lun_img>.card>div>div>ul>li:first-child"
            );
            leftBtn.click(function () {
                var btn = $(this);
                if (!btn.hasClass("disabled")) {
                    move--;
                    div1.css("margin-left",`-${move * 86}px`);
                    rightBtn.removeClass("disabled");
                    if (move == 0) {
                        btn.addClass("disabled");
                    }
                }
            });
            rightBtn.click(function () {
                var btn = $(this);
                if (!btn.hasClass("disabled")) {
                    move++;
                    div1.css("margin-left",`-${move * 86}px`);
                    leftBtn.removeClass("disabled");
                    if (img.length - 4 == move) {
                        btn.addClass("disabled");
                    }
                }
            });
            var $mImg=$(".lun_img>.card>img");
            div.mouseover(function(e){
                if(e.target.nodeName=="IMG"){
                    var $photo=$(e.target).attr("data-md");
                    $mImg.attr("src",$photo)
                }
            });

         //推荐
            var html = "";
            for (var p of img) {
                var {pic} = p;
                html += `
            <li class="float-left"><img src="${pic}"/></li>
            `
            }
            var good =$(
                ".good>div>ul"
            );
            good.html(html);

            good.css("width",`${img.length * 140}px`);

            var leftBtn1 = good.parent().prev();
            var rightBtn1 = good.parent().next();
            if (img.length <= 4) {
                rightBtn.addClass("disabled");
            }

            var moved = 0;
            var div2 =$(
                ".good>div>ul>li:first-child"
            );
            leftBtn1.click(function () {
                var btn = $(this);
                if (!btn.hasClass("disabled")) {
                    moved--;
                    div2.css("margin-left",`-${moved * 390}px`);
                    rightBtn1.removeClass("disabled");
                    if (moved == 0) {
                        btn.addClass("disabled");
                    }
                }
            })
            rightBtn1.click(function () {
                var btn = $(this);
                if (!btn.hasClass("disabled")) {
                    moved++;
                    div2.css("margin-left",`-${moved * 390}px`);
                    leftBtn1.removeClass("disabled");
                    if (img.length - 6 == moved) {
                        btn.addClass("disabled");
                    }
                }
            })
        })
})



