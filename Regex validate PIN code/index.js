function validatePIN(pin) {
  const regexFourCharacters = /^[0-9]{4}$/
  const regexSixCharacters = /^[0-9]{6}$/
  if (regexFourCharacters.test(pin) || regexSixCharacters.test(pin)) {
      return true;
  } else {
      return false;
  }
}