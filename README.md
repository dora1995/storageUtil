# storageutil
关于对localStorage和sessionStorage的操作封装

背景：浏览器端提供的window.localStorage和window.sessionStorage中的**value参数保存后都是字符串格式**。为保证值的正确存储和读取，一般会在保存时先对值的处理比如：`JSON.stringify(obj)`，然后在取值时将它转换回来：`JSON.parse(str)`。为提高代码可读性与减少冗余，将这些操作封装成方法提供使用

引入：
```javascript
// 安装
npm install storageutil

yarn add storageutil
```

API与用法：
```javascript
import { $local, $session } from 'storageutil'

let key = 'test'
let value = {
  one: '1',
  two: 2,
  three: false
}
// 设置
$local.set(key, value)
// 获取
$local.get(key)
// 移除某一项
$local.remove(key)
// 移除所有
$local.clear()
// 判断是否含有
$local.has(key)

// 获取
$session.get(key)
// 设置
$session.set(key, value)
// 移除某一项
$session.remove(key)
// 移除所有
$session.clear()
// 判断是否含有
$session.has(key)
```