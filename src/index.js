import assignMethods from './assignMethods'

export const $local = {
  target: window.localStorage || null
}
assignMethods($local)

export const $session = {
  target: window.sessionStorage || null
}
assignMethods($session)