/* eslint-disable */

// 截取参数
export function $getQueryString(name) {
  let reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)")
  let r = window.location.search.substr(1).match(reg)
  if(r!=null)return unescape(r[2]); return null
}

// 判断IOS还是Andriod
export const $IOSOrAndriod = () => {
  var u = window.navigator.userAgent
  var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1
  var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) // ios终端
  if (isAndroid) {
    return true
  }
  if (isIOS) {
    return false
  }
}

// 禁止重复点击
export const buttonClicked = (self) => {
  if (self.canButtonClick) {
    self.canButtonClick = false
    setTimeout(() => {
      self.canButtonClick = true
    }, 2000)
    return true
  } else {
    self.$toast({message: '操作频繁', duration: 500})
    return false
  }
}

// 解决遮罩层滚动穿透问题，分别在遮罩层弹出后和关闭前调用
export const MaskProblem = ((bodyCls) => {
  let scrollTop
  return {
    afterOpen: function () {
      scrollTop = document.scrollingElement.scrollTop
      document.body.classList.add(bodyCls)
      document.body.style.top = -scrollTop + 'px'
    },
    beforeClose: function () {
      document.body.classList.remove(bodyCls)
      document.scrollingElement.scrollTop = scrollTop
    }
  }
})('mongolia_open')

export const isWeixn = () => {
  var ua = navigator.userAgent.toLowerCase()
  // eslint-disable-next-line
  if (ua.match(/MicroMessenger/i) == 'micromessenger') {
    return true
  } else {
    return false
  }
}
export const isQQ = () => {
  var ua = navigator.userAgent.toLowerCase()
  // eslint-disable-next-line
  if(ua.match(/QQ/i) == 'qq'){
    return true
  } else {
    return false
  }
}
export const getUrlKey = (name) =>{
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [, ""])[1].replace(/\+/g, '%20')) || null
}
//替换指定传入参数的值,paramName为参数,replaceWith为新值
export const replaceParamVal = (paramName,replaceWith) => {
  var oUrl = window.location.href.toString();
  var re=eval('/('+ paramName+'=)([^&]*)/gi');
  var nUrl = oUrl.replace(re,paramName+'='+replaceWith);
  return nUrl
}
// 获取 cookie 值的函数
export const getCookie = (cname) => {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i=0; i<ca.length; i++) 
  {
    var c = ca[i].trim();
    if (c.indexOf(name)==0) return c.substring(name.length,c.length);
  }
  return "";
}
// 设置 cookie 值的函数
export const setCookie = (cname,cvalue,exdays) => {
  var d = new Date();
  d.setTime(d.getTime()+(exdays*24*60*60*1000));
  var expires = "expires="+d.toGMTString();
  document.cookie = cname + "=" + cvalue + "; " + expires;
}

// 随机数imei
export const ukey = () => {
  let k
  if (!localStorage.getItem('ukey01016')) {
    console.log('laile');
    k = 'hyH5_' + new Date().getTime() + Math.round(Math.random() * 10000) || 'hyH5_123456'
    localStorage.setItem('ukey01016', k)
  } else {
    console.log('laileget');
    k = localStorage.getItem('ukey01016') 
  }
  return k
}

export const getCookieukey = cookieName => {
  var strCookie = document.cookie;
  var arrCookie = strCookie.split("; ");
  for(var i = 0; i < arrCookie.length; i++){
      var arr = arrCookie[i].split("=");
      if(cookieName == arr[0]){
          return arr[1];
      }
  }
  return "";
}
//金钱切割数组后大小区别显示
export const numberFormat = n => {
  let b = parseFloat(n).toString()
  let [a, t] = b.split('.')
  let c = t ? '.' + t : ''
  let arr2 = []
  arr2.push(a)
  arr2.push(c)
  return arr2
}

