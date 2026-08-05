const ROMAN: [number, string][] = [
  [10, 'X'],
  [9, 'IX'],
  [5, 'V'],
  [4, 'IV'],
  [1, 'I'],
]

export function toRoman(num: number): string {
  let n = num
  let result = ''
  for (const [value, symbol] of ROMAN) {
    while (n >= value) {
      result += symbol
      n -= value
    }
  }
  return result
}
