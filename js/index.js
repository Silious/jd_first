/**
 * Created by Silen on 2017/4/15.
 */
window.onload = function () {

    //中间区域图片滑动效果
    var img1 = document.getElementById("img1");
    var img1child = img1.children;
    var left_huan = document.getElementById("left_huan");
    var right_huan = document.getElementById("right_huan");
    for(var i=0;i<img1child.length;i++)
    {
        if(img1child[i].id=="banimg0"){
            img1child[i].style.display = "block";
        }else{
            img1child[i].style.display = "none";
        }
    }
    var dian = document.getElementById("dian");
    var dianli = dian.children;
    for (var i = 0; i < 8; i++)
    {
        dianli[i].index = i;
        dianli[i].onmouseover = function (event) {
            event = event||window.event;
            var src = event.srcElement;
            var suoyin = src.index;
            for(var i=0;i<img1child.length;i++)
            {
                if(img1child[i].id=="banimg"+suoyin){
                    img1child[i].style.display = "block";
                }else{
                    img1child[i].style.display = "none";
                }
            }
        }
    }

    left_huan.onclick = function () {
        for(var i=0;i<8;i++)
        {
            if(img1child[i].style.display=="block")
            {
                if(i>=1){
                    img1child[i].style.display = "none";
                    img1child[i-1].style.display = "block";
                }
            }
        }
    }

    right_huan.onclick = function () {
        for(var i=0;i<8;i++)
        {
            if(img1child[i].style.display=="block")
            {
                if(i<7) {
                    img1child[i].style.display = "none";
                    img1child[i+1].style.display = "block";
                    return;
                }
            }
        }
    }

    //左侧锚点定位效果
    var aside_left = document.getElementById("aside_left");
    var aslfli =aside_left.children.children;
    for(var i=0;i<aslfli.length;i++)
    {
        aslfli[i].index = i;
        aslfli[i].onclick = function () {


        }
    }



}