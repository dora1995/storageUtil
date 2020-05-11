import assignMethods from './assignMethods'

export const localHK = {
  target: window.localStorage || null
}
assignMethods(localHK)

export const sessionHK = {
  target: window.sessionStorage || null
}
assignMethods(sessionHK)

console.log('hello')