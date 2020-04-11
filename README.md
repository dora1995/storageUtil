# storageUtil
关于对localStorage和sessionStorage的操作封装

用法一：
```javascript
import {localS, sessionS} from 'storageUtil'
// 获取
localS.getItem(key)
// 设置
localS.setItem(key, value)
// 移除某一项
localS.removeItem(key)
// 移除所有
localS.clear()
// 获取
sessionS.getItem(key)
// 设置
sessionS.setItem(key, value)
// 移除某一项
sessionS.removeItem(key)
// 移除所有
sessionS.clear()
```

用法二：
```javascript
// 不知道要不要这样
util(key)
util(key, value)

// 如果不传type，则默认操作localStorage
util.getItem(key)
util.setItem(key, value)
util.removeItem(key)
util.clear()

// type = 'l'，操作localStorage
util.getItem('l', key)
util.setItem('l', key, value)
util.removeItem('l', key)
util.clear('l')

// type = 's'，操作sessionStorage
util.getItem('l', key)
util.setItem('l', key, value)
util.removeItem('l', key)
util.clear('l')
```