const reverseStringWithNumbers = (input) => {
  //pisahkan terlebih dahulu letters and numbers
  const letters = input.match(/[A-Z]/g);
  const numbers = input.match(/[0-9]+/g);

  //jika sudah di pisahkan kita reverse lettersnya
  const reversedLetters = letters.reverse().join("");

  //setelah itu kita join kembali dengan numbers
  return reversedLetters + (numbers ? numbers.join("") : "");
};

const inputString = "NEGIE1";
const result = reverseStringWithNumbers(inputString);
console.log(result);
