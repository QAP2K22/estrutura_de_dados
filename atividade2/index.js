/* 
    01 - Crie uma função que recebe um array de 2 números e coloque eles em ordem crescente. Não use o método sort. 
*/

 function ordenarCrescente(array) {
    if (array[0] > array[1]) {
        return [array[1], array[0]];
    }
    return array;
}

console.log(ordenarCrescente([7, 1])) 


/* 
02 -  Crie uma função que recebe um array de 3 números e coloque eles em ordem crescente. Crie sua própria função para isso. 
*/

function ordenarArray(array) {

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
            }
        }
    }

    return array;
}

console.log(ordenarCrescente([7, 1,12,43,534,654,123,45,21,2,3,51])) 


/* 
  04 - Crie uma função que recebe um vetor e um número. Ela deve mostrar todos os índices onde esse número aparece no vetor, e não só apenas o primeiro e/ou último índice em que o número aparece (como nos métodos indexOf e lastIndexOf).
 */

function encontrarIndices(vetor, numero) {
    const indices = [];
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] === numero) {
            indices.push(i);
        }
    }
    return indices;
}

const vetor = [1, 3, 5, 3, 7, 3, 9];


console.log(encontrarIndices(vetor, 3))