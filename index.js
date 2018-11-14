
window.onscroll=function(){
    var scrollTop=document.body.scrollTop
        ||document.documentElement.scrollTop;
    if(scrollTop>=200 && scrollTop<=300)
        changeCard.style.marginTop="25rem";
    else if(scrollTop>=300)
        changeCard.style.marginTop="41rem";
    else
        changeCard.style.marginTop="10rem";

}


window.onload=function(){
    ajax({
        url:"http://localhost:3000/index",
        type:"get",
       // data:
    dataType:"json"
    })
        .then(function(res){
console.log(res);
            //w-60
            var p=res[10];
        var {pname,price,pic,href}=p;
            var html=`<a href="${href}">
                            <img src="${pic}">
                            <div class="position-absolute">
                                <p>${pname}</p>
                                <p>￥${price.toFixed(2)}</p>
                            </div>
                            </a> `;
        var div=document.querySelector(
           ".tab-content #roll2 .content div .w-60"
        );
        div.innerHTML=html;

            //w-40
            var p=res[9];
            var {pname,price,pic,href}=p;
            var html=`<a href="${href}">
                            <img src="${pic}" />
                                <div class="position-absolute">
                                    <p>${pname}</p>
                                    <p>￥${price.toFixed(2)}</p>
                                </div>
                            </a>`;
            var div=document.querySelector(
                ".tab-content #roll2 .content div .w-40"
            );
            div.innerHTML=html;

            //small-img
            var html="";
            for(var p of res.slice(-3)){
            var {pname,price,pic,href}=p;
            html+=`
                        <div>
                        <a href="${href}">
                            <img src="${pic}" />
                                <div class="position-absolute">
                                    <p>${pname}</p>
                                    <p>￥${price.toFixed(2)}</p>
                                </div>
                            </a>
                           </div> `;}
            var div=document.querySelector(
                ".tab-content #roll2 .content .small_img "
            );
            div.innerHTML=html;
//2f
            //w-60
            var p=res[7];
            var {pname,price,pic,href}=p;
            var html=`<a href="${href}">
                            <img src="${pic}">
                            <div class="position-absolute">
                                <p>${pname}</p>
                                <p>￥${price.toFixed(2)}</p>
                            </div>
                            </a> `;
            var div=document.querySelector(
                ".tab-content #roll3 .content div .w-60"
            );
            div.innerHTML=html;

            //w-40
            var p=res[6];
            var {pname,price,pic,href}=p;
            var html=`<a href="${href}">
                            <img src="${pic}">
                            <div class="position-absolute">
                                <p>${pname}</p>
                                <p>￥${price.toFixed(2)}</p>
                            </div>
                            </a> `;
            var div=document.querySelector(
                ".tab-content #roll3 .content div .w-40"
            )
            div.innerHTML=html;

            //small-img
            var html="";
            for( var p of res.slice(3,6)){
                var {pname,price,pic,href}=p;
                html+=`<div>
                            <a href="${href}">
                            <img src="${pic}">
                            <div class="position-absolute">
                                <p>${pname}</p>
                                <p>￥${price.toFixed(2)}</p>
                            </div>
                            </a> 
                              </div>  `}
                var div=document.querySelector(
                    ".tab-content #roll3 .content .small_img"
                )
            div.innerHTML=html;
            //3f
            //w-60
            var p=res[12];
            var {pname,price,pic,href}=p;
            var html=`<a href="${href}">
                            <img src="${pic}">
                            <div class="position-absolute">
                                <p>${pname}</p>
                                <p>￥${price.toFixed(2)}</p>
                            </div>
                            </a> `;
            var div=document.querySelector(
                ".tab-content #roll4 .content div .w-60"
            );
            div.innerHTML=html;

            //w-40
            var p=res[1];
            var {pname,price,pic,href}=p;
            var html=`<a href="${href}">
                            <img src="${pic}">
                            <div class="position-absolute">
                                <p>${pname}</p>
                                <p>￥${price.toFixed(2)}</p>
                            </div>
                            </a> `;
            var div=document.querySelector(
                ".tab-content #roll4 .content div .w-40"
            )
            div.innerHTML=html;

            //small-img
            var html="";
            for( var p of res.slice(5,8)){
                var {pname,price,pic,href}=p;
                html+=`<div>
                            <a href="${href}">
                            <img src="${pic}">
                            <div class="position-absolute">
                                <p>${pname}</p>
                                <p>￥${price.toFixed(2)}</p>
                            </div>
                            </a> 
                              </div>  `}
            var div=document.querySelector(
                ".tab-content #roll4 .content .small_img"
            )
            div.innerHTML=html;

            //4f
            //w-60
            var p=res[13];
            var {pname,price,pic,href}=p;
            var html=`<a href="${href}">
                            <img src="${pic}">
                            <div class="position-absolute">
                                <p>${pname}</p>
                                <p>￥${price.toFixed(2)}</p>
                            </div>
                            </a> `;
            var div=document.querySelector(
                ".tab-content #roll5 .content div .w-60"
            );
            div.innerHTML=html;

            //w-40
            var p=res[4];
            var {pname,price,pic,href}=p;
            var html=`<a href="${href}">
                            <img src="${pic}">
                            <div class="position-absolute">
                                <p>${pname}</p>
                                <p>￥${price.toFixed(2)}</p>
                            </div>
                            </a> `;
            var div=document.querySelector(
                ".tab-content #roll5 .content div .w-40"
            )
            div.innerHTML=html;

            //small-img
            var html="";
            for( var p of res.slice(8,11)){
                var {pname,price,pic,href}=p;
                html+=`<div>
                            <a href="${href}">
                            <img src="${pic}">
                            <div class="position-absolute">
                                <p>${pname}</p>
                                <p>￥${price.toFixed(2)}</p>
                            </div>
                            </a> 
                              </div>  `}
            var div=document.querySelector(
                ".tab-content #roll5 .content .small_img"
            )
            div.innerHTML=html;

            //5f
            //w-60
            var p=res[10];
            var {pname,price,pic,href}=p;
            var html=`<a href="${href}">
                            <img src="${pic}">
                            <div class="position-absolute">
                                <p>${pname}</p>
                                <p>￥${price.toFixed(2)}</p>
                            </div>
                            </a> `;
            var div=document.querySelector(
                ".tab-content #roll6 .content div .w-60"
            );
            div.innerHTML=html;

            //w-40
            var p=res[8];
            var {pname,price,pic,href}=p;
            var html=`<a href="${href}">
                            <img src="${pic}">
                            <div class="position-absolute">
                                <p>${pname}</p>
                                <p>￥${price.toFixed(2)}</p>
                            </div>
                            </a> `;
            var div=document.querySelector(
                ".tab-content #roll6 .content div .w-40"
            )
            div.innerHTML=html;

            //small-img
            var html="";
            for( var p of res.slice(2,5)){
                var {pname,price,pic,href}=p;
                html+=`<div>
                            <a href="${href}">
                            <img src="${pic}">
                            <div class="position-absolute">
                                <p>${pname}</p>
                                <p>￥${price.toFixed(2)}</p>
                            </div>
                            </a> 
                              </div>  `}
            var div=document.querySelector(
                ".tab-content #roll6 .content .small_img"
            )
            div.innerHTML=html;
        })

}










