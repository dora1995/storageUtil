export function serialize (value) {
  return JSON.stringify(value)
}

export function deserialize (value) {
  if (typeof value !== 'string') {
    return undefined
  }
  try {
    return JSON.parse(value)
  } catch (e) {
    return value || undefined
  }
}