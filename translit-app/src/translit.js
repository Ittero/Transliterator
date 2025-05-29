const translitMap = {
  shch: "щ", zh: "ж", ch: "ч", sh: "ш", yu: "ю", ya: "я", yo: "йо",
  a: "а", b: "б", v: "в", h: "г", g: "ґ", d: "д", e: "е", z: "з",
  y: "и", i: "і", j: "й", k: "к", l: "л", m: "м", n: "н", o: "о",
  p: "п", r: "р", s: "с", t: "т", u: "у", f: "ф", x: "кс", "'": "ь", "’": "ь", 
};

export function translitEngToUkr(text) {
  let result = "";
  let i = 0;
  const lowerText = text.toLowerCase();

  while (i < lowerText.length) {
    let chunk = "";

    // Перевіряємо 4, 3, 2, 1 символ
    for (let len = 4; len > 0; len--) {
      const part = lowerText.slice(i, i + len);
      if (translitMap[part]) {
        chunk = translitMap[part];
        i += len;
        break;
      }
    }

    // Якщо нічого не знайшли — залишаємо як є
    if (!chunk) {
      chunk = lowerText[i];
      i++;
    }

    result += chunk;
  }

  return result;
}
