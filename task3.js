function whatCentury(year) {
  const century = Math.ceil(Number(year) / 100);
  const lastDigit = century % 10;
  const lastTwo = century % 100;
  let suffix = 'th';

  if (lastTwo < 11 || lastTwo > 13) {
    if (lastDigit === 1) suffix = 'st';
    else if (lastDigit === 2) suffix = 'nd';
    else if (lastDigit === 3) suffix = 'rd';
  }

  return century + suffix;
}
