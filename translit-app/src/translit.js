import { engToUkrMap } from './keyboardMap.js';

export function fixLayout(input) {
  let result = '';

  for (let char of input) {
    const lowerChar = char.toLowerCase();

    const mappedChar = engToUkrMap[lowerChar];

    // Якщо є відповідність у мапі — додаємо її
    if (mappedChar) {
      // Зберігаємо регістр: велика літера → велика
      result += char === lowerChar ? mappedChar : mappedChar.toUpperCase();
    } else {
      // Якщо символ не в мапі — залишаємо як є (наприклад, цифри, спецсимволи)
      result += char;
    }
  }

  return result;
}
