const findLongestWord = (sentence) => {
  //kita split terlebih dahulu kalimatnya menjadi array
  const words = sentence.split(" ");

  //variabel untuk result kata terpanjang
  let longestWord = "";

  //disini kita lakukan iterasi perbandingan mana kata yang paling terpanjang
  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
};

const sentence = "Saya sangat senang mengerjakan soal algoritma";
const longestWord = findLongestWord(sentence);
console.log(longestWord);
