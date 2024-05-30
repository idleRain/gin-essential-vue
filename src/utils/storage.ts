export const localGet = <T = any>(key: string) => {
  try {
    return JSON.parse(String(localStorage.getItem(key))) as T | null
  } catch {
    return localStorage.getItem(key) as T | null
  }
}

export const localSet = (name: string, value: any) => {
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }

  window.localStorage.setItem(name, value)
}

export const localRemove = (name: string) => {
  window.localStorage.removeItem(name)
}

export const localClear = () => {
  window.localStorage.clear()
}

export const sessionSet = (key: string, data: any) => {
  sessionStorage.setItem(key, typeof data === 'string' ? data : JSON.stringify(data))
}

export const sessionGet = <T = any>(key: string) => {
  try {
    return JSON.parse(String(sessionStorage.getItem(key))) as T | null
  } catch {
    return sessionStorage.getItem(key) as T | null
  }
}

export const sessionRemove = (key: string) => {
  sessionStorage.removeItem(key)
}

export const sessionClear = () => {
  sessionStorage.clear()
}

export const local = {
  set: localSet,
  get: localGet,
  rm: localRemove,
  clear: localClear
}

export const session = {
  set: sessionSet,
  get: sessionGet,
  rm: sessionRemove,
  clear: sessionClear
}
