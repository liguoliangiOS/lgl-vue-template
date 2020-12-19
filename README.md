# lgl-vue-template 快速创建vue的模板

# 使用脚手架安装

```
npm install lglv -g
```

# 脚手架创建项目

```
lglv create  your_project_name
```

# 脚手架创建文件

创建component，大写字母开头,默认路径为: `src/components`

```
lglv addcpn component_name     或者指定路径   lglv addcpn component_name  -d destination_path(路径)
```

创建page,大写字母开头,默认路径为: `src/pages`

```
lglv addpage page_name    或者指定路径   lglv addpage page_name  -d destination_path(路径)
```
创建store, 默认路径为： 'src/store/modules'

```
lglv addstore store_name     或者指定路径   lglv addstore store_name -d destination_path(路径)
```


### 文件说明

* `aes.js`,如果要使用AES加解密，请在文件里面填写key和iv(var keyArray = ''; var ivArray = '');
* `.postcssrc.js` 是适配客户端的展示的配置
* `vue.config.js` 其中配置了别名，你可以自行修改和配置更多,`publicPath`需要自行添加生产环境的文件路径

### 已经安装的第三方

* `axios`       axios二次封装
* `vue-router`  router配置和路由的动态加载
* `vuex`        vuex配置和动态加载子模块 

### 项目目录结构
```
.
├── README.md
├── babel.config.js
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   └── index.html
├── src
│   ├── App.vue
│   ├── assets (资源文件)
│   │   ├── css (全局css)
│   │   │   ├── base.css
│   │   │   └── normalize.css
│   │   └── images (图片)
│   │       └── logo.png
│   ├── components (组件)
│   │   └── helloworld
│   │       └── HelloWorld.vue
│   ├── main.js
│   ├── pages (页面)
│   │   ├── home
│   │   │   ├── Home.vue
│   │   │   └── router.js
│   │   └── login
│   │       ├── Login.vue
│   │       └── router.js
│   ├── router (路由)
│   │   └── index.js
│   ├── services (网络相关)
│   │   ├── config.js (网络相关配置)
│   │   └── request.js (网络请求封装)
│   ├── storage (本地存储)
│   │   └── index.js
│   ├── store  (状态管理)
│   │   ├── index.js
│   │   ├── modules (状态子模块)
│   │   │   └── login
│   │   │       └── index.js
│   │   └── types.js (定义字符在名字)
│   └── utils (常用工具)
│       ├── crypto
│       │   ├── aes.js
│       │   ├── index.js
│       │   └── md5.js
│       └── index.js
└── vue.config.js (vue项目配置)

```
