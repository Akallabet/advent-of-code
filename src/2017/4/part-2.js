const isAnagram = (a, b) => b.split('').reduce((isValid, ch) => isValid && a.includes(ch), true) && a.length === b.length

const isValidPassphrase = (phrase, searchWord) => phrase.split(' ').reduce((isValid, word) => {
  return !isAnagram(searchWord, word) && isValid
}, true)

const HighEntropyPassphrases = passphrases => {
  return passphrases.split('\n').reduce((total, passphrase) => {
    let validPassphrase = ''
    const isValid = passphrase.split(' ').reduce((isValid, word) => {
      if (!validPassphrase || (isValid && isValidPassphrase(validPassphrase, `${word}`))) {
        validPassphrase = `${validPassphrase}${word} `
        return true
      } else return false
    }, true)
    return total + (isValid ? 1 : 0)
  }, 0)
}

export default HighEntropyPassphrases
