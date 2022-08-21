const vowels = 'aeiou'
const consonants = 'bcdfghjklmnñpqrstvwxyz'

const firstLineKeyboard = 'qwertyuiop'
const secondLineKeyboard = 'asdfghjklñ'
const thirdLineKeyboard = 'zxcvbnm'

const getRandomCharsFromString = (str: string, length: number) => {
  return shuffle(str).slice(0, length)
}

const shuffle = (str: string) => {
  const a = str.split('')
  const n = a.length

  for (let i = n - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    // Swap them with ES6 destructuring magic
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function getRandomString() {
  const randomVowels = getRandomCharsFromString(vowels, 3)
  const randomConsonants = getRandomCharsFromString(consonants, 5)

  const randomWord = [...randomVowels, ...randomConsonants].join('')

  return shuffle(randomWord).join('')
}

export {
  vowels,
  consonants,
  shuffle,
  getRandomString,
  getRandomCharsFromString,
  firstLineKeyboard,
  secondLineKeyboard,
  thirdLineKeyboard,
}
