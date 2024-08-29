/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  let head = 0;
  let tail = s.length - 1;
  const sArr = s.split('');
  const VOWEL_MAP = {
    a: true,
    e: true,
    i: true,
    o: true,
    u: true
  }

  while (head < tail) {
    const isHeadVowel = VOWEL_MAP[sArr[head].toLowerCase()]
    const isTailVowel = VOWEL_MAP[sArr[tail].toLowerCase()];

    if (isHeadVowel && isTailVowel) {
      let tmp = sArr[head];
      sArr[head] = sArr[tail];
      sArr[tail] = tmp;
      head++;
      tail--;
      continue;
    }

    if (isHeadVowel) {
      tail--;
      continue;
    }

    if (isTailVowel) {
      head++;
      continue;
    }

    head++;
    tail--;
  }

  return sArr.join('');
};


console.log(reverseVowels('hello'));
