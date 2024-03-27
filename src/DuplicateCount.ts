export function duplicateCount(text: string): number{
  let countMap = new Map<string, number>();
  text.toLowerCase().split("").forEach(char => {
    countMap.set(char, (countMap.get(char) || 0) + 1)
    // if (countMap.has(char)) countMap.set(char, countMap.get(char)!+1);
    // else countMap.set(char, 1)
  })
  return Array.from(countMap.values()).filter(it => it>1).length
}

export function duplicateCount2(text: string): number{
  // let countMap = new Map<string, number>();
  let countMap = text.toLowerCase().split("").reduce((charMap,  char) => {
    charMap.set(char, (charMap.get(char) || 0) +1)
    return charMap
  }, new Map<string, number>());
  return Array.from(countMap.values()).filter(it => it>1).length
}
