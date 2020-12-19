import Axios from 'axios'

import { BASE_URL, TIMEOUT } from './config'
import { Encrypt } from '../utils/crypto/index'
import {$IOSOrAndriod, ukey} from '../utils/index'
import { getToken } from '../storage/index'

// 定义content-type
const CONTENT_TYPE_JSON = 'application/json;charset=UTF-8'
const CONTENT_TYPE_FORM = 'application/x-www-form-urlencoded;charset=UTF-8'


const request = (options ,isForm = false) => {
	return new Promise ((resolve, reject) => {
		// 1.创建axios的实例
		const instance = Axios.create({
			baseURL: BASE_URL,
			timeout: TIMEOUT
		});

		/*配置请求拦截*/
		instance.interceptors.request.use(config => {
			// //开启网络请求指示器 
			// Indicator.open('Loading...') 
			//配置请求header
			config.headers = {
				'Content-Type': isForm ? CONTENT_TYPE_FORM : CONTENT_TYPE_JSON,
			}
			// 添加token
			let token = getToken()
			if (token) {
				config.headers['Authorization'] = token
			}
			return config
		}, err => {
			return err
		})
		
		/*配置响应拦截*/
		instance.interceptors.response.use(response => {
			// Indicator.close();
			return response.data
		}, err => {
			// Indicator.close();
			return err
		})
		// 2.传入对象进行网络请求 统一处理返回值
		instance(options).then(res => {
			switch (res.code) {
				case 200:
					resolve(res.data)
					break;
				default:
					// Toast(res.msg || '系统繁忙！')
					reject(res.msg || '')
					break;
			}
		}).catch(er => {
			// Toast(er.message || '请求出错啦！')
			reject(er)
		})
	})	
}

export default request;
