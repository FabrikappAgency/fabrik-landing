import { Languages } from "@/enums/PagesUrls";
import { defaultLang } from "./ui";

export function getLangFromUrl(url?: URL): Languages {
  const [, lang] = url?.pathname.split("/") ?? [];

  if (Object.values(Languages).includes(lang as Languages)) {
    return lang as Languages;
  } else {
    return defaultLang;
  }
}

export const objToArr = (obj) => {
  if (obj.length > 0) {
    return obj;
  }
  let arr = [];
  for (let i = 0; i < Object.keys(obj).length; i++) {
    const n = `social${i + 1}`;
    arr.push(obj[n]);
  }
  return arr;
};