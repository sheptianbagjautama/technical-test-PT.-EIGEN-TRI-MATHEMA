const diagonal = (matrix) => {
  //variabel untuk jumlah matrix
  let n = matrix.length;
  //variabel untuk diagonal pertama
  let firstDiagonalSum = 0;
  //variabel untuk diagonal kedua
  let secondDiagonalSum = 0;

  //lakukan iterasi untuk menjumlah setiap elemen diagonal
  for (let i = 0; i < n; i++) {
    firstDiagonalSum += matrix[i][i]; //penjumlahan diagonal pertama 0,0 | 1,1 | 2,2
    secondDiagonalSum += matrix[i][n - 1 - i]; //penjumlahan diagonal kedua 0,2 | 1,1 | 2,0
  }

  //hasi pengurangan dari jumlah diagonal
  return firstDiagonalSum - secondDiagonalSum;
};

const matrix = [
  [1, 2, 0],
  [4, 5, 6],
  [7, 8, 9],
];

const result = diagonal(matrix);
console.log(result);
