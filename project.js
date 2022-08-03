// const prompt = require('prompt-sync')();


// const number = prompt("Please enter the number")
// console.log(number)

// for(let i = 1;i<=number;i++){
//     console.log(i)
// }

// for(let i = 1;i<=number;i++){
//      if(i%5==0 && i%3==0){
//         console.log("FizzBuzz")
//     }
//     else if(i%3==0){
//         console.log("Fizz")
//     }else if(i%5==0){
//         console.log("Buzz")
//     }else{
//         console.log(i)
//     }
// }


// Q-3

function selectionSort(arr,n){
    let i,j,smallest;
    for ( i = 0; i < n-1; i++) {
        smallest = i
    for ( j = i+1; j <n; j++) {
        if(arr[j]<arr[smallest]){
            smallest = j
        }
    let temp = arr[smallest]
    arr[smallest] = arr[i]
    arr[i] = temp        
    }        
    }
}


let arr = [5,4,3,2,1]
console.log(arr,"before")
selectionSort(arr,arr.length)
// mergeSort(arr,0,arr.length-1)
console.log(arr,"after")