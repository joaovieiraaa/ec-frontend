export function randomString(length = 8) {
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let randomString = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    randomString += chars[randomIndex];
  }

  return randomString;
}

export function localizeObject(obj: any, locale: string) {
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      console.log(prop, typeof obj[prop]);
      if (Array.isArray(obj[prop])) {
        obj[prop].forEach((item: any) => {
          localizeObject(item, locale);
        });
      } else if (typeof obj[prop] === "object") {
        localizeObject(obj[prop], locale);
      }
      if (prop === "name" || prop === "description" || prop === "slug") {
        if (obj[prop][locale]) {
          obj[prop] = obj[prop][locale];
        }
      }
    }
  }

  return obj;
}
