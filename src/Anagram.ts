function isAnagram(s: string, t: string): boolean {
  if(s.length!==t.length) return false;
  if(s.length==0) return false
  let arr:number[] = new Array(26).fill(0);
  for (let i = 0; i<s.length; i++){
    let ns = s.charCodeAt(i)-"a".charCodeAt(0);
    let nt = t.charCodeAt(i)-"a".charCodeAt(0);
    arr[ns]++
    arr[nt]--
  }

  for (let i = 0; i<arr.length; i++){
    if (arr[i]!=0) return false
  }

  return true
};

console.log(isAnagram("aabb", "bbaa"))
