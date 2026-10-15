function hasTwoCubeSums(n) {
    const lim = Math.cbrt(n);
  const mas=[];
  for(let a = 1; a <= lim; a++){
    const rest = n - a ** 3;
    if(rest <= a ** 3) break;
    const b = Math.round(Math.cbrt(rest));
    if (b ** 3 === rest) mas.push([a, b]);
  }
    return mas.length>=2;
}
