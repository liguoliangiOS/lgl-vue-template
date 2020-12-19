/* eslint-disable */
import CryptoJS from 'crypto-js'  //引用AES源码js
var keyArray = ''; //这里填写key
var ivArray = ''; //这里填写iv 
var key = CryptoJS.enc.Utf8.parse(keyArray);//十六位十六进制数作为秘钥
var iv = CryptoJS.enc.Utf8.parse(ivArray);//十六位十六进制数作为秘钥偏移量


//解密方法
export function Decrypt(word) {
  var decrypt = CryptoJS.AES.decrypt(word, key, { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 });
  var decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
  return decryptedStr.toString();
}
//加密方法
export function Encrypt(word) {

  var srcs = CryptoJS.enc.Utf8.parse(word);
  var encrypted = CryptoJS.AES.encrypt(srcs, key, { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 });
  return encrypted.toString();
}

export function MD5encode(word) {
  return CryptoJS.MD5(word).toString();
}

function byteToString(arr) {
  if (typeof arr === 'string') {
    return arr;
  }
  var str = '',
    _arr = arr;
  for (var i = 0; i < _arr.length; i++) {
    var one = _arr[i].toString(2),
      v = one.match(/^1+?(?=0)/);
    if (v && one.length == 8) {
      var bytesLength = v[0].length;
      var store = _arr[i].toString(2).slice(7 - bytesLength);
      for (var st = 1; st < bytesLength; st++) {
        store += _arr[st + i].toString(2).slice(2);
      }
      str += String.fromCharCode(parseInt(store, 2));
      i += bytesLength - 1;
    } else {
      str += String.fromCharCode(_arr[i]);
    }
  }
  return str;
}
