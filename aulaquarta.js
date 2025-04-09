function bubbleSort(arr) {
    const n = arr.length;
    let swapped;

    // Loop para percorrer o array
    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            // Comparar elementos adjacentes
            if (arr[i] > arr[i + 1]) {
                // Trocar se estiver na ordem errada
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true;
            }
        }
    } while (swapped); // Continua até que não haja mais trocas

    return arr;
}

// Testar a função com a entrada fornecida
const inputArray = [97, 45, 49, 32, 2, 5, 9, 99, 1, 7];
const sortedArray = bubbleSort(inputArray);
console.log(sortedArray);