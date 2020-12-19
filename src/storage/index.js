
export const STORAGE_KEY = {
  //保存token的key
  TOKEN: 'LG_TOKEN_KEY',
  //保存openid的key
  OPEN_ID = 'LG_OPEN_ID_KEY'
}

/*  -----------  保存值 ------------ */

//保存token
export const saveToken = (token) => {
  localStorage.setItem(STORAGE_KEY.TOKEN, token)
}

//保存openId
export const saveOpenId = (openId) => {
  localStorage.setItem(STORAGE_KEY.OPEN_ID, openId)
}


/*  -----------  读取值 ------------ */

//获取token
export const getToken = () => {
  return localStorage.getItem(STORAGE_KEY.TOKEN)
}

//获取token
export const getOpenId = () => {
  return localStorage.getItem(STORAGE_KEY.OPEN_ID)
}