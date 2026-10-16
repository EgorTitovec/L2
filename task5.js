function primeFactors(n){
    let result = '';
    for (let p = 2; p * p <= n; p++) {
    let count = 0;
    while (n % p === 0) {
      n /= p;
      count++;
    }
    if (count > 0) {
      result += count === 1 ? `(${p})` : `(${p}**${count})`;
    }
  }
  if (n > 1) result += `(${n})`;
  return result;
}
