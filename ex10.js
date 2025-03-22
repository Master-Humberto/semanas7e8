function createZeroMatrix(matrix) {
    return matrix.map(row => row.map(() => 0));
  }
  
  function MultipicarMatrizes(A, B) {
    if (A[0].length !== B[0].length || A.length !== B.length) {
      return "As matrizes não podem ser multiplicadas, elas tem dimensões diferentes!";
    }
    
    let linhas = A.length;
    let colunas = A[0].length;
  
    let matrizResultado = createZeroMatrix(A);    
    
    for (let i = 0; i < linhas; i++) {
      for (let j = 0; j < colunas; j++) {
        matrizResultado[i][j] = Math.round(A[i][j] * B[i][j]);
      }
    }
  
    return matrizResultado;
  }
  
  let A = [
    [100, 100, 100],
    [200, 200, 200],
    [250, 250, 250]
  ];
  
  let B = [
    [1.1, 1.2, 1.5],
    [0.9, 1.0, 1.1],
    [1.0, 1.1, 1.3]
  ];
  
  console.log(MultipicarMatrizes(A, B));
  