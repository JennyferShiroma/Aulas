function bubbleSort(arr) {
    const n = arr.length;
    let swapped;

   
    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            
            if (arr[i] > arr[i + 1]) {
                
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true;
            }
        }
    } while (swapped); 

    return arr;
}


const inputArray = [97, 45, 49, 32, 2, 5, 9, 99, 1, 7];
const sortedArray = bubbleSort(inputArray);
console.log(sortedArray);