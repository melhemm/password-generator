// Capital Letters 
const capitalLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

// Small Letters
const smallLetters = 'abcdefghijklmnopqrstuvwxyz'

// Numbers
const numbers = '9876543210'

// Symbols
const symbols = '!@#$%^&*()_+}{|"-:?></'

// Selector Element
const results = document.getElementById('results')
const passwordLength = document.getElementById('password-length')
const upperCaseLetters = document.getElementById('upper-case-letters')
const lowerCaseLetters = document.getElementById('lower-case-letters')
const useNumbers = document.getElementById('use-number')
const useSymbol = document.getElementById('use-symbol')
const submitButton = document.getElementById('submit')
const copyPassword = document.getElementById('copy-password')

/////// Functions ///////

// Get Random Capital Letters 
generateCapitalLetters = () => {
  return capitalLetters[Math.floor(Math.random() *
    capitalLetters.length)]
}

// Get Random Small Letters
generateSmallLetters = () => {
  return smallLetters[Math.floor(Math.random() *
    smallLetters.length)]
}

// Get Random Numbers
generateRandomNumbers = () => {
  return numbers[Math.floor(Math.random() *
    numbers.length)]
}

// Get Random Symbols
generateRandomSymbols = () => {
  return symbols[Math.floor(Math.random() *
    symbols.length)]
}

// Check If Checkbox checked

checker = () => {
  const checkArray = []
  if (upperCaseLetters.checked) {
    checkArray.push(generateCapitalLetters())
  }

  if (lowerCaseLetters.checked) {
    checkArray.push(generateSmallLetters())
  }

  if (useNumbers.checked) {
    checkArray.push(generateRandomNumbers())
  }

  if (useSymbol.checked) {
    checkArray.push(generateRandomSymbols())
  }

  if (checkArray.length === 0) {
    return '';
  }

  return checkArray[Math.floor(Math.random() * checkArray.length)]

}

// Generate Pssword Function
generatePassword = () => {
  const len = passwordLength.value;

  let passwrod = '';

  for (let i = 0; i < len; i++) {
    const x = checker();
    passwrod += x
  }

  results.innerText = passwrod;
}

// Submit Button for Password Generator
submitButton.addEventListener('click', generatePassword)

// Copy Password EventListener
copyPassword.addEventListener("click", () => {
  const textarea = document.createElement("textarea");
  const password = results.innerText;
  if (!password) {
    return;
  }
  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
  alert("Password copied to clipboard");
});