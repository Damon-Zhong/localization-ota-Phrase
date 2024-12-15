export const delay = (ms: number) => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve()
    }, ms)
  )
}

type JSONValue = string | number | boolean | null | JSONObject | JSONArray
interface JSONObject {
  [key: string]: JSONValue
}
interface JSONArray extends Array<JSONValue> {}

export const parseLocaleJson = (locale: JSONObject) => {
  const localeKeys: string[] = []
  const totalCharaters: number = JSON.stringify(locale).replace(/\s+/g, '').length

  // Helper function to recursively traverse the JSON object
  function traverse(obj: JSONObject, parentKey: string = ''): void {
    if (typeof obj !== 'object' || obj === null) {
      return
    }

    for (const key in obj) {
      const fullKey = parentKey ? `${parentKey}.${key}` : key
     

      if (typeof obj[key] === 'object' && obj[key] !== null) {
        traverse(obj[key] as JSONObject, fullKey)
      }else{
        localeKeys.push(fullKey)
      }
    }
  }

  traverse(locale)

  return {
    localeKeys,
    totalCharaters
  }
}
