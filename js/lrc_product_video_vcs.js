//【功能1】演示区域点击视频下方的小图，第一个视频的背景会变化成相应的视频背景图片，
// 第二个视频也会变化相应的视频而且
// 静态图片也会变化成为和第一个一样的图片。
// 1.给视频下方的小图部分（lrc_small_videoPhoto）添加点击事件
$('.lrc_small_videoPhoto').click(function(){
    var i = $(this).index();
    // 1.1点击之后自身的盒子变亮 → 去掉class为lrc_imgbg的类名
    $(this).find('div').removeClass('lrc_imgbg');
    $(this).addClass('lrc_blueBorder').siblings().removeClass('lrc_blueBorder');
    // 1.2其他相邻的盒子需要加上类名
    $(this).siblings().find('div').addClass('lrc_imgbg');
    // 1.3根据小图点击的顺序切换视频标题
    if(i==0){
        $('.lrc_videoPlayer_left p').text('回到汪星球_百度感恩节微电影');
        $('.lrc_video1').attr({poster:'./img/poster-1.png',
                                src:'./video/video1.mp4'
                                        });
        $('#lrc_video2').attr('src','./video/video1-2.mp4');
        $('.lrc_sp_img').attr('src','./img/poster-1.png');
    }else if(i==1){
        $('.lrc_videoPlayer_left p').text('百度云宣传片');
        $('.lrc_video1').attr({poster:'./img/poster-2.png',
                                src:'./video/video2.mp4'
                                        });
        $('#lrc_video2').attr('src','./video/video2-2.mp4');
        $('.lrc_sp_img').attr('src','./img/poster-2.png');
    }else if(i==2){
        $('.lrc_videoPlayer_left p').text('百度索引真实世界');
        $('.lrc_video1').attr({poster:'./img/poster-3.png',
                                src:'./video/video3.mp4'
                                        });
        $('#lrc_video2').attr('src','./video/video3-2.mp4');
        $('.lrc_sp_img').attr('src','./img/poster-3.png');
    }else if(i==3){
        $('.lrc_videoPlayer_left p').text('无人车实拍');
        $('.lrc_video1').attr({poster:'./img/poster-4.png',
                                src:'./video/video4.mp4'
                                        });
        $('#lrc_video2').attr('src','./video/video4-2.mp4');
        $('.lrc_sp_img').attr('src','./img/poster-4.png');
    }

   
});
// 【功能2】第二个视频按钮切换动态和静态
 //2.1给静态封面结果绑定点击事件，更换成一张静态图片
 $('.lrc_jingtaiBtn').click(function(){
    $('.lrc_sp_img').addClass('active');
    $('#lrc_video2').removeClass('active');
    $(this).addClass('lrc_btnClick_color');
    $('.lrc_dongtaiBtn').removeClass('lrc_btnClick_color');
});
//2.2给动态封面结果注册点击事件，更换成动态的视频
$('.lrc_dongtaiBtn').click(function(){
    $('.lrc_sp_img').removeClass('active');
    $('#lrc_video2').addClass('active');
    $('#lrc_video2')[0].play();
    $(this).addClass('lrc_btnClick_color');
    $('.lrc_jingtaiBtn').removeClass('lrc_btnClick_color');
});

// 【功能3】给右边的导航条添加事件，floor导航和top
// 3.1. 给window注册滚动条滚动事件
$(window).scroll(function () {
    // 设置一个滚动卷曲的变量
    var v = $(window).scrollTop();
    if (v >= 200) {
        $('.lrc_rightNav').show();
    } else {
        $('.lrc_rightNav').hide();
    }
    // v = v+65;
    // 3.2. 获取1F距离文档顶部的距离，和被卷去的比较
    if (v >= $('.lrc_contantUs').offset().top) {
        $('.lrc_rightNav li').eq(5).addClass('lrc_current').siblings().removeClass('lrc_current');
    } else if (v >= $('.lrc_p_service').offset().top) {
        $('.lrc_rightNav li').eq(4).addClass('lrc_current').siblings().removeClass('lrc_current');
    } else if (v >= $('.lrc_tecFeatures').offset().top) {
        $('.lrc_rightNav li').eq(3).addClass('lrc_current').siblings().removeClass('lrc_current');
    } else if (v >= $('.lrc_scenario').offset().top) {
        $('.lrc_rightNav li').eq(2).addClass('lrc_current').siblings().removeClass('lrc_current');
    } else if (v >= $('.lrc_show').offset().top) {
        $('.lrc_rightNav li').eq(1).addClass('lrc_current').siblings().removeClass('lrc_current');
    } else if (v >= $('.lrc_productIntroduce').offset().top) {
        $('.lrc_rightNav li').eq(0).addClass('lrc_current').siblings().removeClass('lrc_current');
    }
});

// 【功能4】获取li注册点击事件
$('.lrc_rightNav li').click(function(){
    // 4.1 获取当前li的索引
    var i  = $(this).index();
    // 4.2 通过索引找对应的div,获取距离文档顶部间距
    var v = $('.lrc_navTag').eq(i).offset().top;
    // 4.3 设置滚动条卷去的间距
    // v = v - 60;
    $('html,body').animate({scrollTop:v},200);
});
//返回顶部
$('.lrc_backTop').click(function(){
    $('html,body').animate({scrollTop:0},500);
});
