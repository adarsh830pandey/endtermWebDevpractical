document.getElementById('checkBtn').addEventListener('click', checkLetter);
document.getElementById('charInput').addEventListener('keyup', function(e){
  if (e.key === 'Enter') checkLetter();
});
function checkLetter(){
  const input = document.getElementById('charInput').value.trim();
  const result = document.getElementById('result');
  if (!input) {
    result.textContent = 'Please enter a letter.';
    return;
  }
  if (input.length !== 1 || !/^[a-zA-Z]$/.test(input)) {
    result.textContent = 'Invalid input. Enter a single alphabetic character.';
    return;
  }
 const ch = input.toLowerCase();
  if (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u') {
    result.textContent = `"${input}" is a vowel.`;
}
   else {
    result.textContent = `"${input}" is a consonant.`;
  }
}
