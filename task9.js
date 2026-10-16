function solution(str){
  const s = str.length % 2 === 0 ? str : str + '_';
  const result = [];
  for (let i = 0; i < s.length; i += 2) {
    result.push(s.slice(i, i + 2));
  }
  return result;
}
