import assignMethods from './assignMethods'

const local = {
  target: window.localStorage || null
}
assignMethods(local)

const session = {
  target: window.sessionStorage || null
}
assignMethods(session)

console.log('hello')