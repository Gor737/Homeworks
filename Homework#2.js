//Task 1 
//Given two objects. Write a function that performs shallow compare.



let a = {
    a: '1',
    b: '2'
};
let b = {
    b: '2',
    a: '1',
}


function maxLengthObj(a, b) {

    let obj1Length = 0
    let obj2Length = 0

    for (let key in a) {
        obj1Length++
    }
    for (let key in b) {
        obj2Length++
    }
    if (obj2Length > obj1Length) {
        return b
    } else {
        return a
    }
}


function shallowCompare(a, b) {

    let length = 0
    let truthyLength = 0
    for (let key in maxLengthObj(a, b)) {
        length++
        if (b.hasOwnProperty(key) && b[key] === a[key]) {
            truthyLength++
        }
    }
    if (length === truthyLength) {
        return true
    } else {
        return false
    }

}

console.log(shallowCompare(a, b))





//Task 2
//Determine if a word or phrase is an isogram. An isogram (also known as a &quot;non pattern
//word&quot;) is a word or phrase without a repeating letter.



function isIzogram(str) {

    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length; j++) {
            if (str[i] === str[j]) {
                return false
            }
        }
    }
    return true
}

console.log(isIzogram('sdfho j'))






//Task 3 
//Given a number n ( n&gt;= 0 ). Print nth Fibonacci number.  (Fibonacci series: 0, 1, 1, 2, 3, 5, 8 …, ak = ak-1 + ak-2)



function fibonacci(n) {
    if (n >= 0) {
        let next = null
        let prev = 1
        let prevPrev = 0
        for (let i = 0; i < n; i++) {
            next = prev + prevPrev
            prevPrev = prev
            prev = next
        }
        return prevPrev
    } else {
        return 'invalid n'
    }
}

console.log(fibonacci(10))





// Task 4
//Insert a number. Calculate product and sum of the digits of the number. If product is
//divisible by the sum, print the quotient, otherwise print the remainder.


function CalculateDigit(number) {

    number = Math.abs(number)

    if (number) {
        let str = String(number)
        let sum = 0
        let product = 1

        for (let i = 0; i < str.length; i++) {
            sum += +str[i]
        }

        for (let i = 0; i < str.length; i++) {
            product *= str[i]
        }

        if (product % sum === 0) {
            return `Quotient is ${(product / sum)}`
        } else {
            return `Remainder is ${(product % sum)}`
        }

    } else if (number > 0 && number < 10) {
        return `Quotient is ${number}`
    } else {
        return 'Cannot calculate.'
    }

}

console.log(CalculateDigit(-541))





//Task 5 
//Write a program to print X star pattern series.


function mtx(n) {
    let result = ``
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i === j || n - 1 - i === j) {
                result += `*`
            } else {
                result += ` `
            }
            if (j === n - 1) {
                result += `\n`
            }
        }
    }
    return result
}

console.log(mtx(5))