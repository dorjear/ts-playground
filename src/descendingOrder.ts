export function descendingOrder(n: number): number {
  // let reordedString: string = n.toString().split("").sort((a,b)=>b.charCodeAt(0)-a.charCodeAt(0)).join("")
  // return parseInt(reordedString);

  return parseInt(n.toString().split('').sort().reverse().join(''));
}

