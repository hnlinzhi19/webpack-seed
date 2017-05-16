# webpack-seed
个人用webpack 种子文件


## 教程
* node 必须是 6.x  查询 敲命令 node -v
* 执行命令 npm i  或者 cnpm i 或者 yanr
* 待安装好模块后 开发模式 使用 npm start
* 浏览器 打开 localhost:9100/dist/   (不一定是dist 后面 有介绍)

## 配置问题
webpack.config.js

打包地址 生成目录 默认是dist 只是开发用的 

因为 每次开发后打包到的资源目录是不一定的 所以dist 一定要改为 响应的目录
//最好是 讲src里面所有的 dist 替换
例如 骰宝 这个项目 我们就 dist 改成 sb
    欢乐钓鱼 就 dist 改成 hldy

devServer 里面有个port 是开发 服务器端口 默认 9100 如果开发 多个项目 请不要 一样 会报错的无法同时占用这个端口


### node模块不需要 多次 下载 考虑到 拉去模块问题 只用下注一次就好了 

node 模块是放在 你想要放的位置 之后 修改 package。json
    第一个文件目录 是node模块存放位置
    "startBefore": "ln -s /Users/linz/Documents/linz/lin_learn/node-module/node_modules ./node_modules",

    "startWindow": "mklink /J  E:\\webpack-seed\\node_modules E:\\test\\node_modules",
    E:\\webpack-seed\\node_modules 开发目录
    E:\\test\\node_modules 模块存放目录
修改到对应的目录后 执行以下命令
mac 下 执行命令： npm run startBefore
windows 下 执行命令： npm run startWindow
    

## 问题
 
### node-sass 安装问题
因为 node-sass版本问题 如出现 报错 css 或scss 的问题 执行 以下命令
1 、执行 npm uninstall node-sass  或者 cnpm uninstall node-sass 或者 yarn remove node-sass
执行完成后 
2、 执行 npm i node-sass 或者 cnpm i node-sass 或者 yarn add node-sass


## 发布问题 需要ftp工具（百度自己下一个好的）
### 测试环境 
发布前 执行 npm run build 
生成相应的目录后  讲 dist 里面复制一个 index.html 改名为 index.blade.php 
这个 php 生成后 需要 叫 php开发 在目录里面 开启一个路由
比如 骰宝 就是 在目录下 sftp://120.26.207.102:63322/data/www/gt.cloudxt.cn/public/resources/views/sb
views/sb这个目录 叫后端去创建

资源目录 讲 dist下面的 文件(除了 html php 以为) 全部复制的以下目录
骰宝 为例子 ：sftp://120.26.207.102:63322/data/www/gt.cloudxt.cn/public/public/sb

sb这个目录是不存在 的 我们自己创建 然后把dist（正常这个不是dist）里面的内容 复制过来

### 正式环境 改下 ip就好了


## 目录说明 
```
--- src
----- index.html // 页面目录 这个是单页 每次写一个项目 要开辟 整个目录
----- images // 图片放置目录 
----- js
------ lib // 常用库 
------ mod // 一些 模块放的目录
------ app.js //主要代码 
----- scss
----- index.scss //主要css
----- lib //基本配置文件
----- mod //模块文件
----- misc //音频文件
----- partials // 局部 html 
```

### 代码解释
```
//html 中引用代码
// 引用局部视图
<%= require('html!./partials/header.html')  %>
// 引用 img 因为 webpack 打包是 只会打包 文件中有引用到的 img 
//例如 你的html中需要图片 就必须要以下方式 否则 打包的时候 后漏掉图片
<img src="<%= require('./images/fish.png')  %>" alt="">

// 微信分享问题 打包模式 php中才需要 注意修改 分享
@if (strpos(\Jenssegers\Agent\Facades\Agent::getUserAgent(), 'MicroMessenger') !== false) 
<script src="//res.wx.qq.com/open/js/jweixin-1.0.0.js" type="text/javascript" charset="utf-8"></script>
<script type="text/javascript">
    wx.config(<?php echo app('wechat')->js->config(array('onMenuShareTimeline', 'onMenuShareAppMessage')) ?>);
    wx.ready(function () {
        wx.onMenuShareTimeline({
            link: 'http://ga.cloudxt.cn/sb/page',
            imgUrl: 'http://ga.cloudxt.cn/sb/images/logo.png'
        });
        wx.onMenuShareAppMessage({
            desc: '赏金骰宝，不出门也能到澳门',
            link: 'http://ga.cloudxt.cn/sb/page/',
            imgUrl: 'http://ga.cloudxt.cn/sb/images/logo.png'
        });
    });
</script>
@endif

```

## 参考说明文档 
sass: http://sass.bootcss.com/docs/sass-reference/
webpack http://www.tuicool.com/articles/F3E3Ube