const countOccurrences = (input, query) => {
  //variabel dalam bentuk objek untuk menyimpan hasil kata yang telah dihitung
  const countMap = {};

  //hitung terlebih dahulu setiap kata dalam param input
  for (const word of input) {
    if (countMap[word]) {
      countMap[word]++;
    } else {
      countMap[word] = 1;
    }
  }

  //varial dalam bentuk array untuk hasil jumlah kemunculan kata yang ada dalam param query di param input
  const result = [];

  //cek jumlah kemunculan setiap kata yang ada dalam param query
  for (const word of query) {
    result.push(countMap[word] || 0);
  }

  return result;
};

const INPUT = ["xc", "dz", "bbb", "dz"];
const QUERY = ["bbb", "ac", "dz"];
const output = countOccurrences(INPUT, QUERY);
console.log(output);
