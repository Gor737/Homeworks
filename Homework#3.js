//TASK 1
// Given an array of numbers which is almost sorted in ascending order.  Find the index
// where sorting order is violated.


//Variant 1

function findIndex(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
            return (i + 1)
        }
    }
    return -1
}


console.log(findIndex([1, 2, 3, 3, 4, 5, -7]))


//Variant 2

function findFakeIndex(arr){
    
     let res = arr.findIndex((el,i) => el < arr[i-1])

  return res
}
  console.log(findFakeIndex([1,2,3,4,5,3,6]))



//TASK 2
// Given an array consisting from the arrays of numbers (like a two-dimensional array).
// Find sum of each row and print them as an array


function compactArr(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        let sum = 0
        for (let j = 0; j < arr[i].length; j++) {
            sum += arr[i][j]
        }
        newArr.push(sum)
    }
    return newArr
}


console.log(compactArr([[3, 4, 5], [3, 7, 7]]))




//TASK 3
//Given an array of integers. Write a function that return new array from first array,
//where removed even numbers, and odd numbers was multiplied with new array length


//Variant 1

function oddInArr(arr) {
    let odd = []
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 1) {
            odd.push(arr[i])
        }
    }

    for (let i = 0; i < odd.length; i++) {
        result.push(odd[i] * odd.length)
    }

    return result
}

console.log(oddInArr([4, 5, 'j', 7, 1, 2]))





//Variant 2 

function onlyOdd(arr) {
    let odd = arr.filter(el => el % 2 === 1)
    let result = []
    odd.forEach((el) => {
        el *= odd.length
        result.push(el)
    })
    return result
}

console.log(onlyOdd([3, 7, 7, 2]))




//TASK 4
// Given three numbers a, b (a ≤ b) and step. Create an array of evenly spaced
// elements starting from a to b spaced by step.


function stepOnElements(start, finish, step) {
    if (start <= finish) {
        let result = [start]
        let next = start + step
        for (let i = 1; i <= (finish - start) / step; i++) {
            result.push(next)
            next += step
        }
        return result
    } else {
        return `Enter a valid values`
    }
}

console.log(stepOnElements(10, 100, 20))





//TASK 5
//Given an array of numbers. Print frequency of each unique number. (Frequency is the
//count of particular element divided by the count of all elements)


//Variant 1

function printFrequency(arr) {
    let obj = {}

    for (let i = 0; i < arr.length; i++) {
        let start = 1
        if (!(arr[i] in obj)) {
            obj[arr[i]] = start
        } else {
            obj[arr[i]] = +obj[arr[i]] + 1
        }
    }

    for (let key in obj) {
        obj[key] = `${obj[key] / arr.length * 100}%`
    }

    return obj
}

console.log(printFrequency([1, 2, 1, 3, 4]))




//Variant 2

function Frequency(arr) {
    let obj = {}
    let result = []

    for (let i = 0; i < arr.length; i++) {
        let start = 1
        if (!(arr[i] in obj)) {
            obj[arr[i]] = start
        } else {
            obj[arr[i]] = +obj[arr[i]] + 1
        }
    }

    for (let key in obj) {
        result.push(`${key}: ${obj[key] / arr.length * 100}%`)
    }

    return result
}

console.log(Frequency([3, 3, 3, 7]))