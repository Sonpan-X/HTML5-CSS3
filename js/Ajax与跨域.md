### 跨域定义

* 浏览器的同源策略会导致跨域，这里同源策略又分为以下两种 ：

* DOM同源策略：禁止对不同源页面DOM进行操作。这里主要场景是iframe跨域的情况，不同域名的iframe是限制互相访问的。

* XmlHttpRequest同源策略：禁止使用XHR对象向不同源的服务器地址发起HTTP请求。只要协议、域名、端口有任何一个不同，都被当作是不同的域，之间的请求就是跨域操作

    *注：协议、域名、端口有任何一个不同，都视为不同的域*

### 常用的解决方式

> 1.CORS(Cross-origin resource sharing) 跨域资源共享

* 注: 这种方式如果想要携带cookie需要xhr设置withCredentials为true, 服务端 Access-Control-Allow-Credentials:true 

  ```js
      
  ```

> 2.jsonp实现跨域(动态创建script,利用src属性进行跨域)
  ```js
     
  ```
> 3.服务器代理(浏览器有跨域限制，服务端没有)
  ```js
  ```
> 4.document.domain
  ```js
  ```
> 5.window.name

> 6.hash传值

> 7.possMessage