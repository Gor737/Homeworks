//TASK 1
// Given an array. Write a recursive function that removes the first
// element and returns the given array. (without using
// arr.unshift(),assign second element to first, third element to second...)


let count = null
function removeFirstDigit(arr, i = 0) {
    if (arr.length <= 1) {
        return []
    }
    let length = arr.length

    if (i === 0) {
        delete arr[i]
    }
    count = arr[i]
    arr[i] = arr[i + 1]
    arr[i + 1] = count
    if (arr[i] === undefined) {
        return
    }
    removeFirstDigit(arr, i + 1)
    arr.length = length - 1

    return arr
}


console.log(removeFirstDigit([1, 2]))





//TASK 2
// Given an array of nested arrays. Write a recursive function that
// flattens it. (Hint create function that concats arrays).



function concatArr(arr) {
    debugger
    let res = []
    for (let value of arr) {
        if (typeof value === 'object') {
            for (let el of concatArr(value)) {
                res.push(el)
            }
        } else {
            res.push(value)
        }
    }
    return res
}

console.log(concatArr([14, [1, [[[3]]]], 10]))






//TASK 3
// Given a number. Write a function that calculates its sum of the digits
// and if that sum has more than 1 digit find the sum of digits of that number.
// Repeat that process if needed and return the result.



function getSumOfDigits(n) {
    // debugger
    Math.abs(n)
    n = String(n)
    let sum = 0
    for (let i = 0; i < n.length; i++) {
        sum += +n[i]
    }
    if (sum >= 10) {
        return getSumOfDigits(sum)
    } else {
        return sum
    }
}


console.log(getSumOfDigits(999999999999))




//TASK 4
// Given the list of the following readers:
// Output the books sorted by the percent in descending order which
// readStatus is true and add ‘%’ char in the end for percent value.



let arr = [
    { book: 'Catcher in the Rye', readStatus: true, percent: 40 },
    { book: 'Animal Farm', readStatus: true, percent: 20 },
    { book: 'Solaris', readStatus: false, percent: 90 },
    { book: 'The Fall', readStatus: true, percent: 50 },
    { book: 'White Nights', readStatus: false, percent: 60 },
    { book: 'After Dark', readStatus: true, percent: 70 }
]

function sortByPercent(arr) {
    let result = []
    arr.sort((a, b) => {
        if (a.percent < b.percent) {
            return 1
        } else {
            return -1
        }
    })
    result = arr.map((el) => {
        el.percent = `${el.percent}%`
        return el
    })
    return result
}

console.log(sortByPercent(arr))