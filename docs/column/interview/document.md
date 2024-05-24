# HTML

## 减少页面重载，（缓存）

```javascript
// 创建一个文档片段
let frag = document.createDocumentFragment();

// 创建子元素
for (let i = 0; i < 100; i++) {
    let li = document.createElement("li");
    li.innerHtml = "oooo";
    frag.appentChild(li);
}

// 都创建好了document后再插入
listNode.appendChild(frag);
```

## css 清除浮动

```css
.clearFix::after {
    content: "";
    display: table;
    clear: both;
}
```

# 深拷贝

```javascript
// 拷贝的对象
const a = {
    name: "mixtet",
    age: 23,
    like: ["1", "2", 3],
    frient: {
        name: "sss",
        age: 26,
    },
};

/**
 *深拷贝
 * @param {Object} obj
 */
function deepClone(obj) {
    // 不是对象或数组或是null，直接返回
    if (typeof obj !== "object" || typeof obj === null) {
        return obj;
    }

    // 初始化返回结果
    let result;
    // 如果是数组或对象，则赋值为空对象或空数组
    if (obj instanceof Array) {
        result = [];
    } else {
        result = {};
    }

    // 遍历对象/数组
    for (let key in obj) {
        // 保证key不是原型的属性
        if (obj.hasOwnProperty(key)) {
            // 递归，继续判断或深层次地复制子元素
            result[key] = deepClone(obj[key]);
        }
    }

    return result;
}

const b = deepClone(a);

console.log(1, a, b);

b.age = 30;

console.log("b", b);
console.log("a", a);
```

# 闭包

## 闭包的应用，如缓存

```javascript
// 数据缓存

// 闭包隐藏数据，只提供API
function createCache() {
    // 数据被隐藏，不被外界访问，只读
    let data = {};
    return {
        // 设置值
        set: function (key, value) {
            data[key] = value;
        },
        // 获取值
        get: function (key) {
            return data[key];
        },
    };
}

// 调用
let c = createCache();
c.set("b", { s: 12 });
console.log(c.get("b"));
```

# class 类

```javascript
// 创建一个人  的类
class Person {
    // 构造函数
    constructor(name) {
        this.name = name;
    }

    // 方法
    saiHi() {
        console.log(`My name is ${this.name}`);
    }
}

// 继承了父类，父类的方法也可以直接调用
class Student extends Person {
    // 构造函数，用来接收参数
    constructor(name, age) {
        // 直接使用继承父类
        super(name);
        this.age = age;
    }

    //  方法一：调用类的属
    showStuMsg() {
        console.log(`姓名：${this.name},年龄：${this.age}`);
    }
}

// new 实例化Student
const stu1 = new Student("小明", 20);

console.log("stu1", stu1.name);

console.log("stu1", stu1.saiHi());

console.log("stu1", stu1.showStuMsg());
```

# jquery 简易版实现

```javascript
// jquery类
class jQuery {
    constructor(selecter) {
        // 获取页面的所有元素
        const element = document.querySelectorAll(selecter);
        // 计算所有元素的长度
        this.length = element.length;
        // 遍历所有的元素，并创建对象到类中
        for (let i = 0; i < this.length; i++) {
            this[i] = element[i];
        }
    }

    // 获取元素
    get(index) {
        return this[index];
    }

    // 遍历
    each(fn) {
        for (let i = 0; i < this.length; i++) {
            let element = this[i];
            fn(element);
        }
    }

    // 点击
    on(type, fn) {
        return this.each((elem) => {
            elem.addEventListener(type, fn, false);
        });
    }
}

// 插件
jQuery.prototype.showAler = (msg) => {
    alert(msg);
};

// 扩展性
class myJquery extends jQuery {
    constructor(selecter) {
        super(selecter);
    }

    //
    myon() {
        console.log("自己的点击事件");
    }
}

const $ = new jQuery("a");

$.on("click", (e) => {
    console.log(e.target.innerHTML);
});
```

# js 创建标签

```javascript
let a;
for (let i = 0; i < 10; i++) {
    a = document.createElement("p");

    a.innerHTML = "a标签" + i;

    a.addEventListener("click", (e) => {
        alert(i);
    });

    document.body.appendChild(a);
}
```

# 手写 bind

```javascript
// 手写bind，在原型中添加方法
Function.prototype.bind1 = function () {
    // 解析入参
    let args = Array.prototype.slice.call(arguments);

    // 取第一个值，第一个值就是this
    let t = args.shift() || window;

    // 绑定自己
    let self = this;

    return function () {
        return self.apply(t, args);
    };
};

function fn1(a, b, c) {
    console.log("this  ", this);
    console.log("abc", a, b, c);
    return "this is fn1";
}

let fn = fn1.bind1({ x: 900 }, 10, 20, 30);

console.log(fn());
```

# promise

## 使用 promise 实现图片加载

```javascript
// 加载图片的promise
function loadImg(src) {
    return new Promise((resolve, reject) => {
        // 创建img
        const img = document.createElement("img");

        // img加载
        img.onload = () => {
            // 加载成功返回的数据
            resolve(img);
        };

        // 加载失败
        img.onerror = () => {
            reject(new Error("图片加载失败"));
        };

        img.src = src;
    });
}

const url = ["https://img1.baidu.com/it/u=2449828220,2519670448&fm=253&fmt=auto&app=120&f=JPEG?w=750&h=500", "https://img2.baidu.com/it/u=1151312573,2361276090&fm=253&fmt=auto&app=120&f=JPEG?w=750&h=500"];

// 单张图片加载
// loadImg(url)
//     .then((img) => {
//         console.log(img, img.width);
//         // return 回去的数据，会在下一个then里面返回
//         // 返回一个什么，下一个then就接收什么
//         return img;
//     })
//     .then((img) => {
//         console.log(img, img.height);
//         return loadImg(url1);
//     })
//     .then((img2) => {
//         console.log(img2, img2.width);
//     });

// 多张图片加载
(async () => {
    let acount = 0;

    // 使用 for...of 实现图片，一张一张地加载
    for (let i of url) {
        // console.log(i);
        acount++;
        let res = await loadImg(i);
        console.log(`结果${acount}`, res);
        console.log("acount", acount);
    }
})();
```

## promise 进阶练习题

```javascript
/**
 * 场景题
 * 第一题
 * my答案：13
 */

// Promise.resolve()
//     .then(() => {
//         console.log(1);
//     })
//     .catch(() => {
//         console.log(2);
//     })
//     .then(() => {
//         console.log(3);
//     });

/**
 * 场景题
 * 第二题
 * my答案：1 error1 2
 * true答案：123
 */

// Promise.resolve()
//     .then(() => {
//         console.log(1);
//         throw new Error("error1");
//     })
//     .catch(() => {
//         console.log(2);
//     })
//     .then(() => {
//         console.log(3);
//     });

/**
 * 场景题
 * 第三题
 * my答案：123
 * true答案：12
 */

// Promise.resolve()
//     .then(() => {
//         console.log(1);
//         throw new Error("error1");
//     })
//     .catch(() => {
//         console.log(2);
//     })
//     .catch(() => {
//         console.log(3);
//     });

/******************* 场景题-async/await *******************/

// 1
// async function fn() {
//     return 100;
// }

// (async function () {
//     const a = fn();
//     const b = await fn();
//     console.log(a, b);
// })();

// my answer：start 100 200
// (async function () {
//     console.log("start");
//     const a = await 100;
//     console.log("a", a);
//     const b = await Promise.resolve(200);
//     console.log("b", b);
//     const c = await Promise.reject(300);
//     console.log("c", c);
//     console.log("end");
// })();

/**
 * my answer:  false
 *  script start
 *  async1 start
 *  script end
 *  async2
 *  async1 end
 *  promise1
 *  promise2
 *  setTimeout
 *
 */

// async function async1() {
//     console.log("async1 start");
//     await async2();
//     console.log("async1 end");
// }

// async function async2() {
//     console.log("async2");
// }

// console.log("script start");

// setTimeout(function () {
//     console.log("setTimeout");
// }, 0);

// async1();

// new Promise(function (resolve) {
//     console.log("promise1");
//     resolve();
// }).then(function () {
//     console.log("promise2");
// });

// console.log("script end");

/******************* 场景题-promise和setTimeout *******************/

// my answer: 100 400 300 200 ?
// console.log(100);
// setTimeout(() => {
//     console.log(200);
// });

// Promise.resolve().then(() => {
//     console.log(300);
// });

// console.log(400);

// let p1 = Promise.resolve()
//     .then(() => {
//         return 100;
//     })
//     .then((res) => {
//         console.log("res", res);
//     });

// console.log("p1", p1);

// (async function () {
//     let p1 = Promise.reject("err404");
//     try {
//         let res = await p1;
//         console.log("res", res);
//     } catch (err) {
//         console.log("报错", err);
//     }

//     console.log(11111);
// })();

async function async1() {
    console.log("async start");
    try {
        await async2();
        console.log("async end");
    } catch (err) {
        console.log("async error");
    }

    await async3();
    console.log("async3 end");

    console.log("last async end");
}

async function async2() {
    console.log("async2");
}

async function async3() {
    console.log("async3");
}

console.log("script start");
async1();
console.log("script end");
```

## 手写 promise

promise a+

需要实现的点

-   初始化&一步调用
-   then catch 链式调用
-   API .resolve .reject .all .race

html

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>手写promise</title>
    </head>
    <body>
        <script src="./writePromise.js"></script>
        <script>
            // 实例化promise
            let p1 = new MyPromise((resolve, reject) => {
                // resolve(100);
                // reject("error");
                setTimeout(() => {
                    resolve(200);
                }, 3000);
            });

            // console.log(p1);

            // p1.then((res) => console.log(res));

            // p1.then((res) => console.log(res)).catch((res) => console.log(res));

            let p2 = MyPromise.resolve(800);
            let p3 = MyPromise.reject("error 404");

            console.log(p2);

            let resultAll = Promise.all([p1, p2]);
            let resultRace = Promise.race([p1, p2, p3]);

            resultAll.then((res) => console.log(res));
            resultRace.then((res) => console.log(res));
        </script>
    </body>
</html>
```

js

```javascript
class MyPromise {
    // promise状态 pending fulfilled rejected
    state = "pending";

    // 初始化成功返回值
    value = undefined;

    // 初始化失败返回值
    reason = undefined;

    // pending状态，存储成功的回调
    resolveCallback = [];

    // pending状态，存储失败的回调
    rejectCallback = [];

    constructor(fn) {
        // 成功的回调函数
        const resolveHander = (value) => {
            if (this.state === "pending") {
                this.state = "fulfilled";
                this.value = value;
                this.resolveCallback.forEach((fn) => fn(this.value));
            }
        };

        // 失败的回调函数
        const rejectedHander = (reason) => {
            if (this.state === "pending") {
                this.state = "rejected";
                this.reason = reason;
                this.rejectCallback.forEach((fn) => fn(this.reason));
            }
        };

        try {
            fn(resolveHander, rejectedHander);
        } catch (err) {
            rejectedHander(err);
        }
    }

    // 成功方法, fn1 成功，fn2  拒绝
    then(fn1, fn2) {
        // 判断是否是函数，不是则初始化函数/方法
        fn1 = typeof fn1 === "function" ? fn1 : (v) => v;
        fn2 = typeof fn2 === "function" ? fn2 : (e) => e;

        // 加载状态下
        if (this.state === "pending") {
            return new MyPromise((resolve, reject) => {
                this.resolveCallback.push(() => {
                    try {
                        const newValue = fn1(this.value);
                        resolve(newValue);
                    } catch (err) {
                        reject(err);
                    }
                });

                this.rejectCallback.push(() => {
                    try {
                        const newReason = fn2(this.reason);
                        resolve(newReason);
                    } catch (err) {
                        reject(err);
                    }
                });
            });
        }

        // 完成
        if (this.state === "fulfilled") {
            return new MyPromise((resolve, reject) => {
                try {
                    const newValue = fn1(this.value);
                    resolve(newValue);
                } catch (err) {
                    reject(err);
                }
            });
        }

        // 拒绝
        if (this.state === "rejected") {
            return new MyPromise((resolve, reject) => {
                try {
                    const newReason = fn2(this.reason);
                    resolve(newReason);
                } catch (err) {
                    reject(err);
                }
            });
        }
    }

    // 错误方法
    catch(fn) {
        return this.then(null, fn);
    }
}

// 成功
MyPromise.resolve = (res) => {
    return new MyPromise((resolve, reject) => resolve(res));
};

// 失败
MyPromise.reject = (res) => {
    return new MyPromise((resolve, reject) => reject(res));
};

MyPromise.all = (allArray) => {
    return new MyPromise((resolve, reject) => {
        // 记录每个promise的结果
        let result = [];

        // 计算数组长度
        let length = allArray.length;

        // 计算是否所有的都已经返回了
        let count = 0;

        allArray.forEach((fn) => {
            fn.then((res) => {
                result.push(res);
                count++;
                if (count === length) {
                    resolve(result);
                }
            }).catch((err) => {
                reject(err);
            });
        });
    });
};

MyPromise.race = (raceArray) => {
    return new MyPromise((resolve, reject) => {
        // 标记只返回最新的结果
        let onlyOneTure = false;

        raceArray.forEach((fn) => {
            fn.then((res) => {
                if (!onlyOneTure) {
                    resolve(result);
                    onlyOneTure = true;
                }
            }).catch((err) => {
                reject(err);
            });
        });
    });
};
```

# 事件

```javascript
event.stopPropagation(); // 阻止事件冒泡

event.preventDefault(); // 阻止默认行为
```

## event 事件代理

```javascript
/**
 *
 * @param {*} elem 选择的页面元素
 * @param {*} type 监听事件类型，如：click 等
 * @param {*} selector 选择的标签元素
 * @param {*} fn 回调元素
 */
function bindEvent(elem, type, selector, fn) {
    // 如果是只有3个参数，则赋值fn回调函数为selector
    if (fn == null) {
        fn = selector;
        selector = null;
    }

    // 给元素添加事件
    elem.addEventListener(type, (event) => {
        // 事件target
        const target = event.target;

        // 代理绑定
        if (selector) {
            // 判断这个标签是否是点击的标签
            if (target.matches(selector)) {
                fn.call(target, event);
            }
        } else {
            // 普通代理
            fn.call(target, event);
        }
    });
}

const event1 = document.getElementById("event1");

bindEvent(event1, "click", "a", function (e) {
    e.preventDefault();
    console.log(this);
    alert(this.innerHTML);
});
```

```javascript
// 页面加载/渲染完成之后执行
window.onload = () => {};
```

# 获取菜鸟教程字符，获取页面标签

```javascript
(function getHtmlFuHao() {
    // 获取页面的table
    let tables = Array.from(document.getElementsByClassName("reference"));

    let result = [];

    // 遍历table，获取里面的tr,td值
    tables.forEach((item, tindex) => {
        let trs = Array.from(item.querySelectorAll("tr"));
        let titles = trs.shift();
        let infos = [];

        Array.from(titles.querySelectorAll("th")).forEach((node, index) => {
            infos[index] = node.innerHTML;
        });

        result[tindex] = [];

        trs.forEach((trItem) => {
            let obj = {};
            Array.from(trItem.querySelectorAll("td")).forEach((node, index) => {
                obj[infos[index]] = node.innerText;
                result[tindex].push(obj);
            });
        });
    });

    console.log(JSON.stringify(result));
})();
```

# ajax

**同源策略：**

-   ajax 请求时，浏览器要求当前网页和 server 必须同源
-   协议、域名、端口，必须一致

**跨域**

-   所有的跨域，都必须经过 server 端允许和配合
-   未经 server 端允许就实现跨域，说明浏览器有漏洞，危险信号

## XMLHttpRequest

**ajax 简易写法**

```javascript
const xhr = new XMLHttpRequest();

// 请求, true是异步请求，false是同步请求
xhr.open("GET", "data/text.json", true);

xhr.onreadystatechange = function () {
    // 0 （未初始化）还没有调用send()方法
    // 1 （载入）已调用send方法，正在发送请求
    // 2 （载入完成）send方法执行完成，已经接收到全部响应内容
    // 3 （交互）正在解析响应内容
    // 4 （完成）响应内容解析完成，可以在客户端调用
    if (xhr.readyState === 2) {
        // 2xx 成功
        // 3xx 需要重定向，浏览器直接跳转，如301 302 304
        // 4xx 客户端请求错误，如404 403:没有权限
        // 5xx 服务器端错误
        if (xhr.status === 200) {
            alert(xhr.responseText);
        }
    }
};

// 发送请求
xhr.send();

// 第二种写法
/**
	type = 'GET'  请求方式，默认为get
  url 请求接口的url
  data = null  接受的参数
*/
function ajax(url, type = "GET", params = null) {
    return new promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.open(type, url, true);

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 2) {
                if (xhr.status === 200) {
                    resolve(xhr.responseText);
                } else if (xhr.status === 404) {
                    reject(new Error("404 not found"));
                }
            }
        };

        // 发送请求
        xhr.send(params);
    });
}

// 使用
ajax("data/json.js")
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
```

## ajax 常用插件

-   jqury 的 ajax
-   fetch
-   axios (封装就是使用 XMLHttpRequest 进行封装的)

## 跨域的实现方式

### JSONP

**jsonp 原理**

**html**

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>jsonp演示</title>
    </head>
    <body>
        <script>
            // window.abc
            window.callback = function (data) {
                console.log(data);
            };
        </script>

        <script src="http://localhost:8002/jsonp.js?username=xxx&callback=abc"></script>
    </body>
</html>
```

**jsonp.js**

```javascript
// abc({ })  callback可以通过路径传进来的，name的值也可以通过路径传参传进来的
callback({
    name: "小明",
});
```

**jQuery 实现 jsonp**

```javascript
$.ajax({
    url: "",
    dataType: "jsonp",
    jsonpCallback: "callback",
    success: function (data) {
        console.log(data);
    },
});
```

### CORS - 服务器设置 http header

```javascript
// 第二个参数填写允许跨域的域名称，不建议直接写
response.setHeader("Access-Cont rol-Allow-Origin", "http://localhost:8011");
response.setHeader("Access-Control-Allow-Headers", "X-Requested-With");
response.setHeader("Access-Control-ALlow-Methods", "PUT, POST, GET, DELETE, OPTIONS");

// 接收跨域的cookie
response.setHeader("Access-Control-Allow-Credentials", "true");
```

# 存储

题目

-   描述 cookie localStorage sessionStorage 区别

## cookie

-   本身用于浏览器和 server 通讯
-   被"借用"到本地存储来
-   可用 document.cookie = ''来修改 如：document.cookie = 'a=100'

**缺点**

-   存储太小，最大 4kb
-   http 请求是需要发送到服务端，增加请求数据量
-   只能用 document.cookie = '' 来修改，太过简陋

## localStorage 和 sessionStorage

-   HTML5 专门为存储而设计，最大可存 5M（针对每个域名）
-   API 简单易用 setItem getItem
-   不会随着 http 请求发送出去

```javascript
// 设置值
localStorage.setItem("a", 100);

// 获取值
localStorage.getItem("a");

// 设置值
sessionStorage.setItem("a", 100);

// 获取值
sessionStorage.getItem("a");
```

**两者的区别**

-   localStorage 数据会永久存储，除非代码或手动删除
-   sessionStorage 数据只存在于当前会话，浏览器关闭则清空（与登录有关）
-   一般用 localStorage 会更多一些

# http

-   http 常见的状态码有哪些？
-   http 常见的 header 有哪些
-   什么是 Restful API
-   描述一下 http 的缓存机制（重要）

## 状态码分类

-   1xx 服务器收到请求
-   2xx 请求成功，如 200
-   3xx 重定向，如 302
-   4xx 客户端错误，如 404
-   5xx 服务端错误，如 500

## 常见状态码

-   200 成功
-   301 永久重定向（配合 location，浏览器自动处理）
-   **302 临时重定向（配合 location，浏览器自动处理）** location 放在 header 里面
-   304 资源未被修改
-   404 资源未找到
-   403 没有权限
-   500 服务器错误
-   504 网关超时

## 关于协议和规范

-   就是一个约定
-   要求大家都跟着执行
-   不要违反规范，例如 IE 浏览器

## http methods

-   传统的 methods
-   现在的 methods
-   Restful API（常考）

> [!NOTE]
>
> 传统的 methods

-   get 获取服务器的数据
-   post 向服务器提交数据
-   简单的网页功能，就这两个操作

> [!NOTE]
>
> 现在的 methods

-   get 获取数据
-   post 新建数据
-   patch/put 更新数据
-   delete 删除数据

## Restful API

-   一种新的 API 设计方法（早已推广）
-   传统 API 设计：把每个 url 当作一个功能
-   Restful API 设计：把每个 url 当作一个唯一的资源

如何设计成一个资源

-   尽量不用 url 参数
    -   传统 API 设计： /api/list?pageIndex=2
    -   Restful API 设计：/api/list/2
-   用 method 表示操作类型（传统 API 设计）
    -   post 请求 /api/create-blog
    -   post 请求 /api/update-blog?id=100
    -   get 请求 /api/get-blog?id=100
-   用 method 表示操作类型（Restful API 设计）
    -   post 请求 /api/blog
    -   patch 请求 /api/blog/100
    -   get 请求 /api/blog/100

## http headers

-   常见的 Request Headers （客户端，前端加）
    -   Accept 浏览器可接收的数据格式
    -   Accept-Encoding 浏览器可接收的压缩算法，如 gzip
    -   Accept-Languange 浏览器可接收的语言，如 zh-CN
    -   Connection: keep-alive 一次 TCP 连接重复使用
    -   cookie 本地信息
    -   Host 域名
    -   User-Agent （简称 UA）浏览器信息
    -   Content-type 发送数据的格式，如 application/json
-   常见的 Response Headers （服务端，后端加）
    -   Content-type 返回数据的格式，如 application/json
    -   Content-length 返回数据的大小，多少字节
    -   Content-Encoding 返回数据的压缩算法，如 gzip
    -   Set-Cookie 服务端修改 cookie 使用这个
-   缓存相关的 headers
    -   Cache-Control Expires （可以缓存的就有，服务端才可以控制，控制 **强制缓存**b 的逻辑）（Response Headers）
        -   例如： Cache-Control: max-age=3153600（单位是秒）
        -   Cache-Control 值：
        -   max-age 最大的过期时间
        -   no-cache 不需要强制缓存，使用服务端的缓存
        -   no-store 不需要本地缓存，不需要服务端的缓存措施
        -   private 运行最终用户缓存
        -   public. 允许中间路由，中间代理做缓存
        -   关于 Expires：（较老的一个缓存）
        -   同在 Response Headers 中
        -   同为控制缓存过期
        -   已被 Cache-Control 代替
    -   Last-Modified If-Modified-Since
    -   Etag. If-None-Match

## http 缓存

缓存都是在客户端，如果在服务端，也没有必要缓存了

-   关于缓存的介绍
-   http 缓存策略（强制缓存 + 协商缓存）
-   刷新操作，对缓存的影响

> [!NOTE]
>
> 关于缓存

-   什么是缓存？
-   为什么需要缓存？
    -   减少页面的请求，让页面渲染更快，让一些不需要经常加载的东西缓存起来
-   那些资源可以被缓存？--静态资源（js css img）

> [!NOTE]
>
> 强制缓存：看 Cache-Control Expires

> [!NOTE]
>
> 协商缓存（对比缓存）

-   服务端缓存策略（服务端决定这个资源要不要用缓存）
-   服务器判断客户端资源，是否和服务端资源一样
-   一致则返回 304，否则返回 200 和最新的资源

资源标识

-   在 Response Headers 中，有两种 （一般服务端的请求都是在 Response Headers 中）
-   Lase-Modified 资源的最后修改时间
-   Etag 资源的唯一标识（一个字符串，类似人类的指纹）

Lase-Modified 和 Etag 共存

-   会优先使用 Etag
-   Last-Modified 只能精确到秒级
-   如果资源被重复生成，而内容不变，则 Etag 更精确

![image-20240428154421333](/Users/mixtet/Library/Application Support/typora-user-images/image-20240428154421333.png)

三种刷新操作

-   正常操作：地址栏输入 url, 跳转链接，前进后退等, 强制缓存有效，协商缓存有效
-   手动刷新：f5 ,点击刷新按钮，点击菜单刷新，强制缓存失效，协商缓存有效
-   强制刷新：ctrl + F5 / commang+shift + R，强制缓存失效，协商缓存失效

## https

-   http 和 https 区别
    -   http 是明文传输，敏感信息容易被中间劫持
    -   https=http+加密，劫持了也无法解密
    -   现代浏览器已开始强制 https 协议
-   加密方式：对称加密，非对称加密
    -   对称加密：一个 key 负责加密、解密 （不安全）
    -   非对称加密：一对 key，A 加密之后，只能用 B 来解密
    -   https 同时用到了这两种加密
        -   先用非对称加密，然后再用对称加密（成本高效）
-   https 证书
    -   中间人攻击（如何避免）
    -   使用第三方证书（慎用免费、不合规的证书）（避免方法）
    -   浏览器校验证书

![image-20240428165402926](/Users/mixtet/Library/Application Support/typora-user-images/image-20240428165402926.png)

# 开发环境

## git

常用命令

-   git add . 添加更改的所有的文件
-   git checkout xxx 把文件恢复到以前的状态，放弃修改的内容
-   git commit -m "xxx" 提交的，分支名称
-   git push origin master 推送到 master 分支
-   git pull origin master 从 master 拉取代码
-   git branch 查看分支
-   git branch xxx 创建分支
-   git checkout -b xxx/git checkout xxx 切换分支
-   git merge xx 合并分支
-   git diff 查看修改的内容
-   git status 查看文件状态
-   git log 查看提交记录
-   git show + （分支的唯一值） 查看提交内容
-   git fetch 拉取分支代码
-   git stash 暂存修改
-   git stash pop 释放暂存修改内容

https 需要输入账号密码

ssh 不需要输入账号密码，但是需要提前配置好 SSH KEY

```bash
生成 ssh-keygen -t rsa -C 1573488389@qq.com

查看.pub文件(.文件隐藏文件，使用ls -a显示隐藏文件)

$ cd ~/.ssh 切换目录到这个路径
$ vim id_rsa.pub 将这个文件的内容显示到终端上
```

## 抓包

-   windows 一般用 fiddler
-   Mac OS 一般用 charles

![image-20240507150418691](/Users/mixtet/Library/Application Support/typora-user-images/image-20240507150418691.png)

## webpack

安装

npm install webpack webpack-cli -D

安装插件

npm install html-webpack-plugin -D // 解析 html 的插件

npm install webpack-dev-server -D // 启动服务的插件

npm install @babel/core @babel/preset-env babel-loader -D // es 从高级语法到低级语法转变

> package.json

```json
{
    "name": "webpack-demo",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        // 打包的命令，可以这样写
        "build": "webpack --config webpack.config.js",
        // 也可以这样, 默认打包config
        "build": "webpack",
        "buildPro": "webpack --config webpack.prod.js",
        "dev": "webpack-dev-server"
    },
    "author": "",
    "license": "ISC",
    "devDependencies": {
        "@babel/core": "^7.24.5",
        "@babel/preset-env": "^7.24.5",
        "babel-loader": "^9.1.3",
        "html-webpack-plugin": "^5.6.0",
        "webpack": "^5.91.0",
        "webpack-cli": "^5.1.4",
        "webpack-dev-server": "^5.0.4"
    }
}
```

> webpack.config.js

```javascript
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development", // 开发模式，
    entry: path.join(__dirname, "src", "index.js"), // 入口
    // 输出文件配置
    output: {
        // 输出文件名
        filename: "bundle.js",
        // 输出的文件夹名称
        path: path.join(__dirname, "dist"),
    },
    // 引入的插件
    plugins: [
        new HtmlWebpackPlugin({
            // 找到文件
            template: path.join(__dirname, "src", "index.html"),
            // 输出文件名称
            filename: "index.html",
        }),
    ],
    // 对不同的模块，有不同的解析
    module: {
        rules: [
            {
                // 所有的js文件
                test: /\.js$/,
                // babel的一个插件
                use: "babel-loader",
                // loader: ["babel-loader"],
                // 解析src目录下面的
                // include: path.join(__dirname, "src"),
                // 排除node_modules文件里面的js文件
                // exclude: /node_modules/,
                resource: /src/,
            },
        ],
    },
    // 运行环境
    devServer: {
        // 端口号
        port: 4000,
        // contentBase: path.join(__dirname, "dist"),
        // 文件
        static: {
            directory: path.join(__dirname, "dist"),
        },
    },
};
```

> webpack.prod.js

```javascript
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "production", // 开发模式，生产
    entry: path.join(__dirname, "src", "index.js"), // 入口
    // 输出文件,的路径
    output: {
        // contenthash 生成hash值,文件内容改变时hash值也会改变
        // 让js缓存命中更高，提升网页浏览速度
        filename: "bundle.[contenthash].js",
        path: path.join(__dirname, "dist"),
    },
    // 引入的插件
    plugins: [
        new HtmlWebpackPlugin({
            // 找到文件
            template: path.join(__dirname, "src", "index.html"),
            // 输出文件名称
            filename: "index.html",
        }),
    ],
    // 对不同的模块，有不同的解析
    module: {
        rules: [
            {
                // 所有的js文件
                test: /\.js$/,
                // babel的一个插件
                use: "babel-loader",
                // loader: ["babel-loader"],
                // 解析src目录下面的
                // include: path.join(__dirname, "src"),
                // 排除node_modules文件里面的js文件
                // exclude: /node_modules/,
                resource: /src/,
            },
        ],
    },
};
```

> .babelrc

```
{
    "presets": [
        "@babel/preset-env"
    ]
}
```

## linux 命令

本地登到线上地址

-   ssh work@192.168.10.21 (work 用户名，+ ip 地址)
-   **ls** 查看文件夹
-   **ls -a** 查看隐藏文件
-   **ll** 查看列表。--> **ls -alF**
-   **ll** + 文件夹名称 查看文件夹里面的列表
-   **mkdir** abc 创建 abc 文件夹
-   **rm -rf** abc 删除 abc 文件夹
-   cd 进去文件夹
-   **mv** index.html index1.html 修改 index.html 文件为 index1.html 名称
-   **mv** index.html ../index.html 移动 index.html 到上一级目录
-   **mv** index.html dist/index.html 移动 index.html 到 dist 文件夹
-   **cp** a.js a1.js 拷贝 a.js 文件为 a1.js
-   **rm** a.js 直接删除文件
-   **touch** a.js 新建 a.js 文件
-   **vi** a.js 新建 a.js 文件并进入编辑，按 esc 退出，:w 保存编辑内容，:q 退出编辑页，:q! 强制退出
-   **vim** a.js 查看文件 按下 i 键就可以书写了
-   **cat** package.json 查看文件夹内容
-   **head** package.json 查看文件前面的几行
-   **tail** package.json 查看文件后面的几行
-   **grep** "babel" package.json 在 package.json 文件里面搜索 babel 关键字
-   **vimtutor** 查看 vim 文档,系统自带教程

# 运行环境

-   运行环境即浏览器（server 端有 nodejs）
-   下载网页代码，渲染出页面，期间会执行若干 JS
-   要保证代码在浏览器中：稳定且高效
-
-   网页加载过程
-   性能优化
-   安全

## 页面加载过程

题目

-   从输入 url 到渲染出页面的整个过程
-   window.onload 和 DOMContentLoaded 的区别

从输入 url 到渲染出页面的整个过程

-   加载资源的形式
    -   html 代码
    -   媒体文件,如 图片、视频等
    -   javascript css
-   加载资源的过程
    -   DNS 解析：域名 --> IP 地址
    -   浏览器根据 IP 地址向服务器发起 http 请求
    -   服务器处理 http 请求，并返回给浏览器
-   渲染页面的过程
    -   根据 HTML 代码生成 DOM tree
    -   根据 CSS 代码生成 CSSOM
    -   将 DOM Tree 和 CSSOM 整合形成 Render Tree
    -   根据 Render Tree 渲染页面
    -   遇到 script 则暂停渲染，优先加载并执行 JS 代码，完成再继续
    -   直至把 Render Tree 渲染完成

window.onload 和 DOMContentLoaded 的区别

```javascript
window.addEventListener("load", function (){
	//页面的全部资源加载完才会执行，包括图片、视频等
})
document.addEventListener("DOMContentLoaded", function (){
    //DOM 渲染完即可执行，此时图片、视频还可能没有加载完
}）

```

## 前端性能优化

-   是一个综合性问题，没有标准答案，但要求尽量全面
-   某些细节问题可能会单独提问：手写防抖、节流
-   只关注核心点，针对面试

性能优化原则

-   多使用内存、缓存或其他方法
-   减少 CPU 计算量，减少网络加载耗时
-   （适用于所有编程的性能优化----空间换时间）

从何入手

-   让加载更快
    -   减少资源体积：压缩代码
    -   减少访问次数：合并代码（如合并 js 等，图片雪碧图很多图片合并成一张图片），SSR 服务器渲染，缓存
    -   使用更快的网络：CDN
-   让渲染更快
    -   CSS 放在 head，JS 放在 body 最下面
    -   尽早开始执行 JS，用 DOMContentLoded 触发
    -   懒加载（图片懒加载，上滑加载更多）
    -   对 DOM 查询进行缓存
    -   频繁 DOM 操作，合并到一起插入 DOM 结构
    -   节流 throttle 防抖 debounce

SSR

-   服务器渲染：将网页和数据一起加载，一起渲染
-   非 SSR（前后端分离）：先加载网页，再加载数据，再渲染数据
-   早先的 JSP ASP PHP，现在的 vue React SSR

缓存 DOM 查询

多个 DOM 操作一起插入到 DOM 结构

尽早开始执行 JS

## 防抖 debounce

html

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>前端性能优化</title>
    </head>
    <body>
        <input type="text" id="search-key" />

        <input type="text" id="search-key2" />

        <script src="./debounce.js"></script>
    </body>
</html>
```

debounce.js

```javascript
const searchInput = document.getElementById("search-key");

// 防抖定时器
let timer = null;

searchInput.addEventListener("keyup", function () {
    // 有定时器清楚定时器
    if (timer) {
        clearTimeout(timer);
    }

    // 添加定时器
    timer = setTimeout(() => {
        console.log(searchInput.value);
        timer = null;
    }, 500);
});

// 封装防抖
function debounce(fn, delay = 500) {
    // 闭包中的值
    let timer = null;

    return function () {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            fn.apply(this, arguments);
            timer = null;
        }, delay);
    };
}

const searchInput1 = document.getElementById("search-key2");

searchInput1.addEventListener(
    "keyup",
    debounce(() => {
        console.log(searchInput1.value);
    })
);
```

## 节流 throttle

-   拖拽一个元素时，要随时拿到该元素被拖拽的位置
-   直接用 drag 事件，则会频繁触发，很容易卡顿
-   节流：无论拖拽速度多快，都会每隔 100ms 触发一次

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>前端性能优化</title>
        <style>
            #move-div {
                width: 100px;
                height: 100px;
                border: 1px solid gray;
            }
        </style>
    </head>
    <body>
        <div id="move-div" draggable="true">移动</div>

        <script src="./throttle.js"></script>
    </body>
</html>
```

throttle.js

```javascript
let moveElement = document.getElementById("move-div");

// let timter = null;

// moveElement.addEventListener("drag", (e) => {
//     if (timter) {
//         return;
//     }
//     timter = setTimeout(() => {
//         console.log(e.offsetX, e.offsetY);

//         timter = null;
//     }, 500);
// });

// 封装节流
function throttle(fn, delay = 100) {
    let timer = null;

    return function () {
        if (timer) {
            return;
        }

        timer = setTimeout(() => {
            fn.apply(this, arguments);
            timer = null;
        }, delay);
    };
}

moveElement.addEventListener(
    "drag",
    throttle(function (e) {
        console.log(e.offsetX, e.offsetY);
    })
);
```

## 安全

常见的 web 前端攻击方式有那些？

-   XSS 跨站请求攻击

    -   **场景：**
    -   一个博客网站，我发表一篇博客，其中嵌入<script 脚本
    -   脚本内容：获取 cookie，发送到我的服务器（服务器配合跨域）
    -   发布这篇博客，有人查看它，我轻松收割访问者的 cookie
    -   **预防：**
    -   替换特殊符号，如< 变为`&lt;` > 变为 `&gt;`
    -   `<script>` 变为`&lt;script&gt;`,直接显示，而不会作为脚本执行
    -   前端要替换，后端也要替换，都做总不会有错
    -   可以使用 npm 的 xss

-   XSRF 跨站请求伪造
    -   **场景：**
    -   你正在购物，看中了某个商品，商品 id 是 100
    -   付费接口是 xxx.com/pay?id=100，但没有任何验证
    -   我是攻击者，我看中了一个商品，id 是 200
    -   我向你发送一封电子邮件，邮件标题很吸引人
    -   但邮件正文隐藏着 &lt;img src="xxx.com/page?id=200"/&gt;（可以把用户信息带过去，伪造成了自己买的，不管是不是你想买的，但是你给钱了，这个可以用来冲销量）
    -   你一查看邮件，就帮我购买了 id 是 200 的商品
    -   **预防：**
    -   使用 post 接口
    -   增加验证，例如密码、短信验证码、指纹等。
