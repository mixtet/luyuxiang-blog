# NoSQL

## NoSQL意义

- 易扩展，高性能，高可用
- 较容易映射复杂数据（key - value）
- **无事务特性要求（ACID特性，原则性，一次性，隔离性，持久性）（跟秒杀有关）**

## 数据库相关概念

**关系型数据库**，是指采用了**关系模型**来组织数据的数据库。

**NoSQL**是对不同于传统的关系数据库的数据库管理系统的统称。

## NoSQL设计

- **常见场景及设计方法（内嵌、父/子引用、反范式）**
- 双向关联的场景及设计原则

## 什么是内嵌

**内嵌**是指存在关联关系的文档，放在同一文档中，以数组的形式存放。

``` json
{
    "username": "brian",
    "gender": 0,
    "address": ["address1","address2"],
    "roles": ["admin" "user"],
}
```

### 内嵌设计

- 减少了关联查询
- 适合于单类需要描述的属性
- **不经常变化的属性（扩展、嵌套关联）**

<br />
 
## 什么是父引用？

**父引用**是指存在**一对多**的情况中，放在同一文档中，以数组的形式存放。

``` json

{

    "tid":"postID",,
    "title": "文章标题",
    "catalog": "index",
    "created": 1436864169,
    "comments":[
        "commentID1",
        "commentID2",
    ]

}

```

<br />

## 什么是子引用

**子引用**是指存在**一对非常多**的情况中，由于数据库文档存放限制，这个时候进行反向引用。

``` json

{
    "cid": "commentID",
    "tid":"postID",
    "content": "这是回复的内容，不错不错！！！！！！！！！！",
    "isRead": 0,
    "isBest": 0,
    "status": 1
}

```

<br />

## 父子引用设计

- 引用数据内容是否非常多
- 引用数据量是否非常庞大，而且在增加
- **数据是否需要单独访问**

## 什么是反范式

**范式**是指按既定的用法，范式就是一种公认的模型或模式。**反范式-＞不走寻常路~~~**

``` json

{
    "tid": "postID",
    "title": "文章标题",
    "created": 1436864169,
    "users": [{
        "uid": "用户ID",
        "name": "用户昵称",
        "isVip": "1"
    }]
}

```

### 反范式设计
- 是否有提升性能的区间
- 数据量的变化是否非常庞大，庞大到更新会异常低效
- **先考虑读写比，才考虑反范式**


## 设计原则小结

- 优先考虑内嵌，如果对内嵌的数据单独访问，则不适合
- 数组不应该无限制增长 （如果很大，考虑父引用；如果是极大的非常非常大的，子引用）
- **考虑读写比，考虑反范式，考虑应用场景** （读比写大，考虑反范式）

![alt text](image.png)

# MongoDB

<a href="https://www.mongodb.com/docs/manual/tutorial/install-mongodb-enterprise-on-os-x/" target="_blank">安装</a> 使用社区版本

查看mongoDB版本

```
mongod --version
```

运行

```
mongosh
```

创建用户

```
db.createUser({user: "mixtet",pwd: "123456",roles: [{role: "readWrite", db: "test"},{role: "read", db: "reporting"}]})
```

插入数据

```
db.collection('inventory').insertOne({ item: 'canvas', qty: 100, tags: ['cotton'], size: { h: 28, w: 35.5, uom: 'cm' } });
```

查询数据集合（表）

```
show collections
```

查询集合数据

```
db.inventory.find({})
```


![alt text](image-1.png)

## Mongoose

nodejs中是使用mongoose链接MongoDB

初始化项目

```
npm init -y
```

安装mongoose

```
npm install -S mongoose
```

新建app.js文件

``` javascript
const mongoose = require("mongoose");

// 连接数据库，mongodb://test:123456@localhost:27017/mongoose， test 用户名，123456 密码，mongoose， 数据库
// use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
mongoose.connect("mongodb://mixtet:123456@127.0.0.1:27017/test", {});

const User = mongoose.model("users", {
    name: String,
    age: Number,
    email: String,
});

const imooc = new User({
    name: "imooc",
    age: 18,
    email: "imooc@qq.com",
});

imooc.save().then(() => {
    console.log("保存成功");
});


```
