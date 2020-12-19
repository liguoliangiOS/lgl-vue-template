
// 配置请求地址
const devBaseURL = "";
const proBaseURL = "";
export const BASE_URL = process.env.NODE_ENV === 'development' ? devBaseURL: proBaseURL;

// 配置请求超时时间
export const TIMEOUT = 10000;



