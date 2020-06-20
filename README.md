# QQ：452010348

第一步
## package.json安装依赖
```
npm install --legacy-bundling --registry=https://registry.npm.taobao.org
```


### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
vue.config.js 配置说明: https://cli.vuejs.org/config/#pages


第二步: 以上都不看了
# 运行 -> vue 图形化项目管理  （启动后了解 运行 参数 等视图功能）
vue ui

第三步：
# 运行 -> 本地开发调试环境  
npm run dev 或 npm run serve 

# 运行 -> 线上开发调试环境  
npm run local 

# 运行 -> 发布打包 
npm run build

# 运行 -> 发布打包-开发 
npm run build-dev

# 运行 -> 发布打包-预发布 
npm run build-bata

# 运行 -> 发布打包-测试 
npm run build-test


### Lints和修复文件 - 没怎么用过
```
npm run lint
```

在项目根目录 .env.xxx配置文件: 
```
NODE_ENV=dev	 #配置提供给内置代码判断标识
VUE_APP_URL=/    #配置api接口{http://xxx/api}

js 代码 可以打印标识 process.env.NODE_EN
```

# 常用 dev,build 就足以。如果不怕累的话