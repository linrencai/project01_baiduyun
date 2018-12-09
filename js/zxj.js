//<!--头部导航公共区域JS-zxj-->
// 点击搜索按钮弹出输入框
$('.icon-sousuo').click(function(e){
    $(this)
    .parent()
    .css('border','1px solid #ffffff')
    .animate({width: 186},function(){
            $('.zxj_nav_sousuo')
                .children()
                .eq(0)
                .css('display', 'block');          
    })
    e.stopPropagation();
    
});
// 点击导航栏其他地方隐藏输入框
$('.zxj_nav').click(function (e) {
    $('.zxj_nav_sousuo')
    .animate({width:30})
    .css('border','none')
    .children().eq(0)
    .css('display', 'none')
    e.stopPropagation();
})
//阻止点击输入框触发冒泡事件
$('.zxj_nav_sousuo').click(function(e){
    e.stopPropagation();
})
// 鼠标进入nav背景变成黑色
$('.zxj_nav').mouseenter(function () {
    $(this).css('background','black');
})
// 鼠标离开nav背景变成透明色
$('.zxj_nav').mouseleave(function () {
    $(this).css('background','');
})

/*<!--头部导航栏详细开始-zxj-->*/
// 鼠标进入/离开产品显示明细
$('.zxj_chanpinanniu').mouseenter(function(){
    $('.zxj_chanpin-l').css('display','block');
});
$('.zxj_chanpinli').mouseleave(function(){
    $('.zxj_chanpin-l').css('display','none');
});

// 鼠标进入/离开全部产品显示明细
$('.zxj_chanpin-l li').mouseenter(function(){
    $(this).children('div')
    .css('display','block')
    .parent()
    .siblings().children('div')
    .css('display','none')
});
// 鼠标进入/离开全部产品显示li字体为蓝色
$('.zxj_chanpin-l li').mouseenter(function(){
    $(this).children('a')
    .css('color','#0299ff')
    .parent()
    .siblings().children('a')
    .css('color','')
});
$('.zxj_chanpin-l li').mouseleave(function(){
    $('.zxj_chanpin-l li').children('a')
    .css('color','#7f7f80')
});
// 鼠标进入/离开解决方案显示明细
$('.zxj_jiejuefanganli').mouseenter(function(){
    $('.zxj_jiejuefangan-l').css('display','block');
});
$('.zxj_jiejuefanganli').mouseleave(function(){
    $('.zxj_jiejuefangan-l').css('display','none');
});


// 鼠标进入/离开云市场显示明细
$('.zxj_yunshichanganniu').mouseenter(function(){
    $('.zxj_yunshichang-l').css('display','block');
});
$('.zxj_yunshichangli').mouseleave(function(){
    $('.zxj_yunshichang-l').css('display','none');
});
// 鼠标进入/离开云市场显示li字体为蓝色
$('.zxj_yunshichang-l li').mouseenter(function(){
    $(this).children('a')
    .css('color','#0299ff')
    .parent()
    .siblings().children('a')
    .css('color','')
});
$('.zxj_yunshichang-l li').mouseleave(function(){
    $('.zxj_yunshichang-l li').children('a')
    .css('color','#7f7f80')
});
// 鼠标进入/离开云市场镜像环境显示明细
$('.zxj_yunshichang-l li').mouseenter(function(){
    $(this).children('div')
    .css('display','block')
    .parent()
    .siblings().children('div')
    .css('display','none')
});


// 鼠标进入/离开合作与生态显示明细
$('.zxj_hezuoyushengtaili').mouseenter(function(){
    $('.zxj_hezuoyushengtai-l').css('display','block');
});
$('.zxj_hezuoyushengtaili').mouseleave(function(){
    $('.zxj_hezuoyushengtai-l').css('display','none');
});


// 鼠标进入/离开帮助与支持显示明细
$('.zxj_bangzhuyuzhichili').mouseenter(function(){
    $('.zxj_bangzhuyuzhichi-l').css('display','block');
});
$('.zxj_bangzhuyuzhichili').mouseleave(function(){
    $('.zxj_bangzhuyuzhichi-l').css('display','none');
});















//<!--底部公共区域JS-zxj-->
// 鼠标进入微信图标显示二维码
$('.zxj_contact-l').mouseenter(function () {
    $('.zxj_contact-one').css('display','block')
    .parent()
    .prev()
    .prev()
    .css('color','#999999');
})
// 鼠标离开微信图标隐藏二维码
$('.zxj_contact-l').mouseleave(function () {
    $('.zxj_contact-one').css('display','none')
    .parent()
    .prev()
    .prev()
    .css('color','');
})
//鼠标进入A图标显示二维码
$('.zxj_contact-r').mouseenter(function () {
    $('.zxj_contact-two').css('display','block')
    .parent()
    .prev()
    .prev()
    .css('color','#999999');
})
//鼠标离开A图标隐藏二维码
$('.zxj_contact-r').mouseleave(function () {
    $('.zxj_contact-two').css('display','none')
    .parent()
    .prev()
    .prev()
    .css('color','');
})



