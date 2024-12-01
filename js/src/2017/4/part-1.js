const HighEntropyPassphrases = passphrases => {
  return passphrases.split('\n').reduce((total, passphrase) => {
    let validPassphrase = ''
    const isValid = passphrase.split(' ').reduce((isValid, word) => {
      if (isValid && !validPassphrase.includes(`${word} `)) {
        validPassphrase = `${validPassphrase}${word} `
        return true
      } else return false
    }, true)
    return total + (isValid ? 1 : 0)
  }, 0)
}

export default HighEntropyPassphrases
