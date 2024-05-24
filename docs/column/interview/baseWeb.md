# vscode 快捷键

```
command + shift + p 快速调出setting等

command + D 快速选择相同内容

command + N 新建文件 （不好用，还得自己去保存路径）

option + shift + ↑/↓  向上/下复制一行

option + ↑/↓ 向上/下移动
```

# HTML 标签

## a

```html
<!-- 跳转到这个页面，id为top的位置 -->
<a href="2.html#top"></a>

<!-- 跳转到对应的电子邮箱 -->
<a href="mailto:1342234@qq.com"></a>

<!-- 去打电话，一般用于手机直接调起打电话页面 -->
<a href="tel:15877051148"></a>
```

## css

```css
// 会选中某元素中（必须是块级元素）第一行的第一个字母
p::first-letter {
}

// 会选中某元素中 （必须是块级元素）第一行 全部文字
p::first-line {
}

// 页面上鼠标选择的字体颜色
::selection {
}

// 段落缩进两个字符
text-indet: 2em;

// 相对于自己进行定位，不脱离文档流，自己的位置还在
position: relative;
top: 100px;
left: 20px;
```
