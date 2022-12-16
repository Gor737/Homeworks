//TASK 1
// Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.


//Variant 1

function getPairProduct(arr) {
    let largestProduct = arr[0] * arr[1]
    for (let i = 1; i < arr.length; i++) {
        let product = arr[i] * arr[i + 1]
        if (product > largestProduct) {
            largestProduct = product
        }
    }
    return largestProduct
}

console.log(getPairProduct([1, 2, 3, 4, 5, 6, 7, 4]))



//Variant 2

function getLargestProduct(arr) {

    let largeProduct = arr[0] * arr[1]
    let fisrtProduct = null
    let nextProduct = null

    arr.forEach((el, i, arr) => {
        fisrtProduct = el * arr[i + 1]
        nextProduct = arr[i + 1] * arr[i + 2]
        if (nextProduct > fisrtProduct) {
            largeProduct = nextProduct
        }
    })
    return largeProduct
}

console.log(getLargestProduct([1, 2, 3, 4, 5, 6, 7, 4]))



//TASK 2
// Given an array of integers. All numbers are unique. Find the count of missing numbers between minimum and maximum elements to make integers sequence.


//Variant 1

function findTheCount(arr) {
    let max = Math.max(...arr)
    let min = Math.min(...arr)
    let result = max - (min + 1 + arr.length - 2)
    let arr1 = arr.sort((a, b) => a - b)

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i + 1] - arr1[i] === 1) {
            result--
        }
    }

    return result
}

console.log(findTheCount([1, 5, 10]))


//Variant 2 

function findCount(arr) {

    let result = 0
    let arr1 = arr.sort((a, b) => a - b)

    for (let i = 1; i < arr1.length - 1; i++) {
        if (arr1[i] + 1 !== arr1[i + 1]) {
            result += arr1[i + 1] - (arr[i] + 1)
        }
    }

    return result
}

console.log(findCount([0, 1, 2, 3, 7, 4, 5, 9, 12]))




//TASK 3
//Implement built in array sort method using bubble sort algorithm.


function mySort(callback) {
    let current = null
    for (let i = 0; i < arr.length; i++) {
        if (callback(this[i + 1], this[i]) < 0) {
            current = this[i + 1]
            this[i + 1] = this[i]
            this[i] = current
        }
    }
    return this
}



//TASK 4
//Insert a n positive number. Print the n-st prime number.


function prime(n) {

    let prime = [2]

    // մինչև 1000 բոլոր պարզ թվերը
    for (let i = 3; i < 1000; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                break
            } else if (j === i - 1) {
                prime.push(i)
            }
        }
    }
    return prime[n - 1]
}

console.log(prime(2))