function expandedForm(num) {
  const digits = String(num).split('');
  const parts = [];
  for (let i = 0; i < digits.length; i++) {
    if (digits[i] === '0') continue;
    parts.push(digits[i] + '0'.repeat(digits.length - 1 - i));
  }
  return parts.join(' + ');
}
