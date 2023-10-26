function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;
        
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        
        arr[j + 1] = key;
    }
}
// Here is an example usage of the function:

let arr = [12, 11, 13, 5, 6];
insertionSort(arr);
console.log("Sorted array is:");
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}


// Output:

// Sorted array is:
5
6
11
12
13
