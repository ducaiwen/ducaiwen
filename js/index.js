//头部下拉菜单点击效果图
$(function(){
    var cw=$(window).width();
    var ch=$(window).height();
    //初始化菜单的宽高
    $(".lists").css({
        width:cw,
        height:ch
    })
    $(".menu").click(function(){
        if($(".menu").attr("id")=="active"){
            $(".menu").removeAttr("id");
            $(".shop").css("opacity","1");
            $(".shop").css("transition","all 0.3s");
        }else{
            $(".menu").attr("id","active");
            $(".nav-box").css("background","black");
            $(".shop").css("opacity","0");
            $(".shop").css("transition","all 0.3s");
        }
        $(".lists").slideToggle(200);
    })
})

//banner图轮播并实现进度条
$(function(){
    //定义双下标来控制图片
    var now=0;  //控制当前窗口图片的下标
    var next=0;  //控制即将展示的图片的下标
    //定义进度条的时间
    var currentTime=0;
    //设置开关,控制进度条
    var flag=true;
    function move(){
        next++;
        if(next==$(".banner-box>.row>div>a").length){
            next=0;
            //走完一轮关闭开关
            flag=false;
        }
        $(".banner-box>.row>div>a:eq("+now+")").animate({width:"80%",height:"80%"}).css("zIndex",0);
        $(".banner-box>.row>div>a:eq("+next+")").animate({left:0},function(){
            $(".banner-box>.row>div>a:eq("+now+")").css({left:"100%",width:"100%",height:"100%"})
            now=next;
            currentTime=0;
            flag=true;
        }).css("zIndex",1)
    }
    function  move1(){
        currentTime+=50;
        var scale=currentTime/3000;
        if(scale>1){
            scale=1;
        }
        $(".progress").eq(now).css({width:scale*100+"%"})
        if(flag===false){
            $(".progress").css("width",0);
        }
    }
    var t1=setInterval(move,3000);
    var t2=setInterval(move1,50);
    $(".btnbox").mouseover(function(){
        clearInterval(t1);
        clearInterval(t2);
    }).mouseout(function(){
        t1=setInterval(move,3000);
        t2=setInterval(move1,50);
    })

    $(".left").mouseover(function(){
        clearInterval(t1);
        clearInterval(t2);
    }).mouseout(function(){
        t1=setInterval(move,3000);
        t2=setInterval(move1,50);
    })

    $(".right").mouseover(function(){
        clearInterval(t1);
        clearInterval(t2);
    }).mouseout(function(){
        t1=setInterval(move,3000);
        t2=setInterval(move1,50);
    })
    $(window).focus(function(){
        t1=setInterval(move,3000);
        t2=setInterval(move1,50);
    })
    $(window).blur(function(){
        clearInterval(t1);
        clearInterval(t2);
    })

    $(".circle").click(function(){
        next=$(this).index(".circle");
        stop();
    })

    $(".btn-left").click(function(){
        next--;
        if(next==-1){
            next=$(".banner-box>.row>div>a").length-1;
        }
        stop();
    })

    $(".btn-right").click(function(){
        next++;
        if(next==$(".banner-box>.row>div>a").length){
            next=0;
        }
        stop();
    })

    function stop(){
        //定时器停止
        clearInterval(t1);
        clearInterval(t2);
        //按钮发生变化
        $(".circle").find(".progress").css("width",0);
        $(".circle").eq(next).find(".progress").css("width","100%");
        //轮播图发生变化
        if(next>now){
            $(".banner-box>.row>div>a:eq("+now+")").animate({width:"80%",height:"80%"}).css("zIndex",0);
            $(".banner-box>.row>div>a:eq("+next+")").animate({left:0},function(){
                $(".banner-box>.row>div>a:eq("+now+")").css({left:"100%",width:"100%",height:"100%"})
                now=next;
            }).css("zIndex",1)
        }
        else{
            $(".banner-box>.row>div>a:eq("+now+")").animate({left:"100%"}).css("zIndex",1);

            $(".banner-box>.row>div>a:eq("+next+")").css({width:"80%",height:"80%",left:0}).animate({width:"100%",height:"100%"},function(){
                now=next;
            })
        }
    }
})



//底下链接的动画
$(function(){
    var $cols=$(".link .cols");
    var $uls=$(".link ul");
    var $h3s=$(".link h3");
    $h3s.click(function(){
        var idss=$(this).attr("id");
        var index=$(this).index(".link h3");
        if(idss=="active"){
            $(this).removeAttr("id");
            $uls.eq(index).removeAttr("id");
        }else{
            $(this).attr("id","active");
            $uls.eq(index).attr("id","active");
        }
    })
})