# 前端面试题目

## 1. var 和 let const 的区别

> my answer

var 是全局变量，let 用来定义局部变量，不会上升到全局，var 不管在哪里定义都会变成全局变量，const 是常量，定义了之后就不能再修改。

> answer

-   var 是 ES5 语法，let const 是 ES6 语法，var 有变量提升
-   var 和 let 是变量，可修改；const 是常量，不可修改
-   let const 有块级作用域，var 没有

## 2. typeof 返回那些类型

> my answer

typeof 返回 string，number, boolean, object(Array, object,null), function

> answer

-   undefined string number boolean symbol
-   object（注意，typeof null === 'object'）(引用类型)
-   function

## 3.例举强制类型转换和隐式类型转换

> my answer

比如 let num = 12, 强：num.toString(),隐：num = num + ""

​ let str = '345' 强：parseInt(str), 隐：str = str + 0

布尔值

> answer

-   强制：parseInt parseFloat toString 等
-   隐式：if、逻辑运算、==、+ 拼接字符串

## 4. 手写深度比较，模拟 lodash isEqual

> my answer

```javascript
//实现如下效果
const obj1 = { a: 10, b: { X: 100, y: 200 } };
const obj2 = { a: 10, b: { X: 100, y: 290 } };
// isEqual(obj1, obj2) === true;

/**
 *
 * @param {*} contrast1 对比值1
 * @param {*} contrast2 对比值2
 */
function isEqual(contrast1, contrast2) {
    // 判断如果不是对象，就直接对比
    if (typeof contrast1 !== "object" || typeof contrast2 !== "object") {
        return contrast1 === contrast2;
    }

    // 如果传入的参数是同一个，或者指向同一个地址则直接返回true
    if (contrast1 === contrast2) {
        return true;
    }

    // 判断对象长度是否一致，不一致返回false
    if (Object.keys(contrast1).length !== Object.keys(contrast2).length) {
        return false;
    }

    // 用contrast1为准和contrast2做对比
    for (let key in contrast1) {
        // 使用递归判断，值是否相等
        let res = isEqual(contrast1[key], contrast2[key]);

        // 不相等返回false
        if (!res) {
            return false;
        }
    }

    return true;
}

console.log(isEqual(obj1, obj2));
```

> answer

```javascript
//实现如下效果
const obj1 = { a: 10, b: { X: 100, y: 200 } };
const obj2 = { a: 10, b: { X: 100, y: 200 } };
// isEqual(obj1, obj2) === true;

// 判断是否是对象  (跟我的区别在这里)
function isObject(obj) {
    return typeof obj === "object" && typeof obj !== null;
}

/**
 *
 * @param {*} contrast1 对比值1
 * @param {*} contrast2 对比值2
 */
function isEqual(contrast1, contrast2) {
    // 判断如果不是对象，就直接对比
    if (!isObject(contrast1) || !isObject(contrast2)) {
        return contrast1 === contrast2;
    }

    // 如果传入的参数是同一个，或者指向同一个地址则直接返回true
    if (contrast1 === contrast2) {
        return true;
    }

    let obj1Keys = Object.keys(contrast1);
    let obj2Keys = Object.keys(contrast2);
    // 判断对象长度是否一致，不一致返回false
    if (obj1Keys.length !== obj2Keys.length) {
        return false;
    }

    for (let key in contrast1) {
        // 使用递归判断，值是否相等
        let res = isEqual(contrast1[key], contrast2[key]);

        // 不相等返回false
        if (!res) {
            return false;
        }
    }

    // 全相等
    return true;
}

let arr = [{ a: 1 }, { a: 7 }, { a: 8 }, { a: 0 }];
let arr1 = [{ a: 1 }, { a: 7 }, { a: 8 }, { a: "222" }];

console.log(isEqual(arr, arr1));
```

## 5.split()和 join()的区别

> my answer

split()用来分割字符串，将这个字符串分割为一个数组

join()用来拼接数组，将数组的所有元素拼接为一个字符串

## 6. 数组的 pop push unshift shift 分别做什么

> my answer

pop() 删除数组最后的一个值，并返回这个删除的值

push() 在数组最后追加一个值，返回数组长度

unshift() 向数组的开头添加一个值，返回数组长度

shift() 删除数组的第一个值，并返回这个删除的值

splice() 替换数组值或者插入值

concat() 拼接数组

> answer

回答的方法：

-   功能是什么？

-   返回值是什么？

-   是否会对原数组造成影响？

**【扩展】数组的 API，有哪些是纯函数？**

纯函数：1. 不改变原数组（没有副作用）；2. 返回一个数组

> my answer

every, filter, some, findIndex

> answer

concat, map, filter, slice

非纯函数

push pop shift unshift

forEach

some every

reduce

## 7. 数组 slice 和 splice 区别

> my answer

slice(1, 2). 根据数组下标，选择数组的一部分数组，并返回选取的数组数据

splice(1, 0, 90) 第一个参数是数组下标，第二个参数是删除数组元素个数，第三个参数是在第一个参数的位置插入的数据

​ 可以用来根据数组下标删除数据，也可以根据数组下标位置添加数据

> answer

回答的方法：

-   功能区别（slice - 切片，splice - 剪接）
-   参数和返回值
-   是否纯函数？

slice 是纯函数，返回选取的数组，两个参数，开始结束下标

splice 非纯函数，返回修改的数组，3 个参数

## 8. [10,20,30].map(parseInt)返回结果是什么？

> my answer

[10, NaN, NaN]

> answer

回答方法：

-   map 的参数和返回值
-   parseInt 参数和返回值

```javascript
// 拆解
[10, 20, 30].map((item, index) => {
    return parseInt(item, index);
});
```

## 9. ajax 请求 get 和 post 的区别？

> my answer

get 请求，参数只能是路径上携带过去，post 参数放在 body 上带过去

> answer

-   get 一般用于查询操作，post 一般用于用户提交操作
-   get 参数拼接在 url 上，post 放在请求体内（数据体积可更大）
-   安全性：post 易于防止 CSRF

## 10. 函数 call 和 apply 的区别

> my answer

call 可以改变函数的 this 指向

apply 直接

> answer

函数的传参不同，

call 的后面的参数是一个一个传进去的

apply 的参数是直接通过一个类数组传进去

## 11. 事件代理（委托）是什么？

> my answer

事件代理就是使得 js 代码更加简洁，更易维护

> answer

之前的代码。。。

## 12. 闭包是什么，有什么特性？有什么负面影响？

> my answer

闭包就是外部访问不到，只能内部访问，一般用来当作隐藏数据。

> answer

回顾作用域和自由变量

回顾闭包应用场景：作为参数被传入，作为返回值被返回

回顾：自由变量的查找，要在函数定义的地方（而非执行的地方）

影响：变量会常驻内存，得不到释放。闭包不要乱用

## 13.如何阻止事件冒泡和默认行为？

> my answer

```javascript
// 阻止默认行为
e.preventDefault();

// 阻止事件冒泡
e.stopPropagation();
```

> answer

## 14.查找、添加、删除、移动 DOM 节点的方法？

> my answer

```javascript
// 查找
// id
document.getElementById();

// class
document.getElementByClass();

document.querySelectorAll();

getElementByTagName();

// 添加
creatElement();

// 插入， 一栋
appendChild();

// 获取父元素 parentNode
// 获取子元素 childNodes

// 删除
removeChild();
```

> answer

## 15. 如何减少 DOM 操作

> my answer

如果要添加很多的标签，则使用 document.createDocumentFragment()文档片段，添加完之后，再一起添加进文档里面。

> answer

-   缓存 DOM 查询结果
-   多次 DOM 操作，合并到一次插入

## 16.解释 jsonp 的原理，为何它不是真正的 ajax？

> my answer

> answer

-   浏览器的同源策略（服务端没有同源策略）和跨域。（后端的叫转发，前端的是在浏览器有同源，安全考虑）
-   那些 html 标签能绕过跨域？ img, script, link
-   jsonp 原理

## 17. document load 和 ready 的区别

> my answer

load 页面加载完之后执行

ready 页面及其 js 都执行完之后执行

> answer

```javascript
// load
window.addEventListener("load", function (){
	//页面的全部资源加载完才会执行，包括图片、视频等
})

// ready
document.addEventListener("DOMContentLoaded", function (){
    //DOM 渲染完即可执行，此时图片、视频还可能没有加载完
}）
```

## 18. == 和 === 的不同

> my answer

== 的判断不是很严格的，数字也可以和字符串对比，数字和字符串对比时，字符串自动转为数字进行对比

=== 的判断严格，值的类型必须是一致的，对比才有可能为 true，否则都为 false

> answer

## 19. 函数声明和函数表达式的区别

> my answer

函数声明是 function() {}

函数表达式 const a = () => {}

> answer

-   函数声明 function fn() {}
-   函数表达式 const fn = function () {}
-   函数声明会在代码执行前预加载（跟变量提升一样），而函数表达式不会

## 20.new Object()和 Object.create()的区别

> my answer

new Object() 直接新建一个空对象出来，可以调用 object 的所有的方法

Object.create() 创建对象

> answer

-   {}等同于 new Object()，原型 Object.protorype
-   Object.create(null) 没有原型
-   Object.create({...}) 可指定原型, {...} 这里面定义的就这个对象的原型

## 21.关于 this 的场景题

> my answer

在对象里面的方法，调用时的 this 指向是这个对象，

在 class 里面时，使用方法/属性都是用 this 来调用

> answer

函数里面的值，独立执行的时候，是在执行的时候才知道。

如果是对象 点 出来的，则函数里面的 this 指向这个对象

## 22.关于作用域和自由变量的场景题 - 1

<img src="/Users/mixtet/Library/Application Support/typora-user-images/image-20240511162954777.png" alt="image-20240511162954777" style="zoom:50%;height: 600px;" />

> my answer

1 2 3

> answer

4

## 23.判断字符串以字母开头，后面字母数字下划线，长度 6-30

> my answer

```javascript
let res = /^a-z/;
```

> answer

```javascript
const reg = /^[a-zA-Z]\w{5,29}$/

^ 开头
$ 结尾
[] 有可能的字母
{} 长度范围

```

## 24.关于作用域和自由变量的场景题 - 2

<img src="/Users/mixtet/Library/Application Support/typora-user-images/image-20240511165611760.png" alt="image-20240511165611760" style="zoom:50%;height: 600px;" />

> my answer

100

10

10

> answer， 同上

## 25.手写字符串 trim 方法，保证浏览器兼容性

去掉开头结尾的字符串

> my answer

```javascript
function trim(str) {
    return str.replace(/^\s+/, "").replace(/\s+$/, "");
}
```

> answer

```javascript
String.prototype.trim = function () {
    return this.replace(/^\s+/, "").replace(/\s+$/, "");
};
```

## 26.如何获取多个数字中的最大值

> my answer

> answer

```javascript
function max() {
    // 变为数组
    const nums = Array.prototype.slice.call(arguments);
    let max = 0;
    nums.forEach((n) => {
        if (n > max) {
            max = n;
        }
    });

    return max;
}

Math.max(10, 20, 34);
```

## 27. 如何用 JS 实现继承？

> my answer

> answer

class 继承

prototype 继承

## 28.如何捕获 JS 程序中的异常？

> my answer

使用 try{}catch(err){}

> answer

```javascript
手动捕获异常： try{}catch(){}finally{}

// 自动捕获：
window.onerror = function (message, source, lineNum, colNum, error){
  //第一，对跨域的jS，如CDN 的，不会有详细的报错信忌
	// 第二，对于压缩的 js，还要配合 sourceMap 反查到未压缩代码的行、列
}
```

## 29.什么是 JSON?

> my answer

是 js 的对象数据文本描述，易解析，容易看懂

> answer

## 30.获取当前页面 url 参数

> my answer

```javascript
window.location.search;
```

> answer
