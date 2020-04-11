import { serialize, deserialize } from './format'
const methods = {
  get (key) {
    if (!key) {
      return undefined
    }
    if (typeof key !== 'string') {
      return new Error('get:key必须为string类型')
    }
    return deserialize(this.target.getItem(key))
  },
  set (key, value) {
    if (!key) {
      return new Error('set:请输入key')
    }
    if (typeof key !== 'string') {
      return new Error('set:key必须为string类型')
    }
    if (value === undefined) {
      return this.remove(key)
    }
    this.target.setItem(key, serialize(value))
    return true
  },
  has (key) {
    if (typeof key !== 'string') {
      return new Error('has:key必须为string类型')
    }
    return this.get(key) !== undefined
  },
  remove (key) {
    if (typeof key !== 'string') {
      return new Error('remove:key必须为string类型')
    }
    return this.target.remove(key)
  },
  clear () {
    return this.target.clear()
  }
}

export default function (target) {
  Object.assign(target, methods)
}