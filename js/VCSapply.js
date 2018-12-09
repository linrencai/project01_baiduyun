$('.lrc_tjBtn').click(function(){
  if(flag == true){6
    var v = $('#lrc_companyNameText input').val();
    localStorage['cpName'] = v;
  }else{

    return false;
  }
    
    
   
});
var flag;
function check(s,reg,tip) {
    // 1. 获取用户名文本框
    var dom = document.querySelector(s);
    // 2. 给文本框注册onblur事件
    dom.oninput = function () {
      // 2.1 获取span
      var span = this.nextElementSibling;
      // 3. 获取内容
      var v = this.value;
      // 4. 创建一个正则对象
      // 5. 通过正则对象的test检测内容是否匹配，若匹配，则span内容是空的
       flag = reg.test(v);
      if (flag) {
        span.innerHTML = '';
      } else {
        // 6. 否则，写入提示信息格式不正确
        span.innerHTML = tip;
      }

    }
  }


  // 检测邮箱
  var reg2 =  /\w+((-w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+/;
  check('.lrc_ipt3',reg2,' 邮箱格式不正确');


  // 检测手机号码
  var reg3 = /0?(13|14|15|18)[0-9]{9}/;
  check('.lrc_ipt2',reg3,' 手机号码格式不正确');
  

  //真实姓名

  // var reg4 = /^[A-Za-z0-9\u4e00-\u9fa5]+$/;
  // check('.lrc_cName',reg4,'姓名格式不正确');
  // console.log(flag);