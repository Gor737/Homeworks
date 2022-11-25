//TASK 1
// Given a positive integer. Bring the last digit of the number to the beginning. Print the new
// number. If the last digit of the inserted number is 0, number remains the same.



//Variant 1


let changer =  function (number){

    let arr = number.split('')
   console.log(arr)
    if(arr[arr.length -1 ] !== '0')  {
      let res = []
    for(let i = 0; i < arr.length; i++){
        if(i === 0){
           res.push(arr[arr.length - 1])
         }
      if(i != arr.length - 1){
      res.push(arr[i])
       }
     }
   return  +(res.join(''))
    }
   return +number
 }
 
 
 console.log(changer('250'))
 
 
 
 
 
 
 //Variant 2
 
 
 function fn(num){
 
     if(num % 10 !== 0){ 
     let lastDigit = String(num % 10)
     let result = lastDigit + ((num - lastDigit) / 10)
 
     return +result
   }
   return num
 }
 
 console.log(fn(250))
 
 
 
 
 
 
 
 
 //TASK 2
 //Given three numbers. Sort them by the ascending order.
 
 
 //Variant 1
 
 
 let num1 = +prompt('Enter a number')
 let num2 = +prompt('Enter a number')
 let num3 = +prompt('Enter a number')
 let result = []
 
 if(num1 < num2 && num1 < num3){
   result.push(num1)
    if(num2 < num3){
     result.push(num2)
     result.push(num3)
   } else {
     result.push(num3)
     result.push(num2)
   }
 } else if(num2 < num1 && num2 < num3){
   result.push(num2)
   if(num1 < num3){
     result.push(num1)
     result.push(num3)
   } else {
     result.push(num3)
     result.push(num1)
   }
 } else if(num3 < num1 && num3 < num2){
   result.push(num2)
   if(num1 < num2){
     result.push(num1)
     result.push(num2)
   } else {
     result.push(num2)
     result.push(num1)
   }
 }
 
 console.log(result.join())
 
 
 
 
 
 //Variant 2
 
 
 let arr = [63, -82, 37]
 let current = null
 
 function sortNumbers (arr){
    for(let i = 0; i < arr.length; i++){
         for(let j = i+1; j < arr.length; j++){
               if(arr[i] < arr[j]){
                   current = arr[i]
                    arr[i] = arr[j]
                    arr[j] = current 
               }
           }
      }
    return arr.join()
 }
 
 
 console.log(sortNumbers(arr))
 
 
 
 
 
 
 
 //TASK 3
 //Given the following code rewrite it using only two if operators. (Hint: use logical
 //operators).
 
 
 
 //Variant 1
 
 
 let n = +prompt('Enter a number')
 
 let i  = 0
 let j  = 0
 
 if(n % 2 === 0 && !Math.floor(n / 10)){
   i++
 }
 if(n % 3 === 0 && n % 10 === 1){
   j++
 }
 
 
 // //Variant 2
 
 let k = +prompt('Enter a number')
 
 let z  = 0
 let y  = 0
 
 let res1 = k % 2 === 0 && !Math.floor(k / 10) ? z++ : null
 let res2 = k % 3 === 0 && k % 10 === 1 ? y++ : null
 
 
 
 
 
 
 //TASK 4
 // Write a program which will compute the area of a rectangular or a triangle after
 // prompting the user to type the name of the figure name. Also check that entered
 // numbers are positive.
 // For the triangle entered numbers are height and and base.
 
 
 
 //Variant 1
 
 
 function triangle(){
   let height = +prompt('Enter a height')
   let base = +prompt('Enter a base')
   if(height > 0 && base > 0){
     return `Square of the triangle is ${(height * base) / 2}`
   }
   return  'Please enter only positives'
 }
 
 function rectangle(){
   let side1 = +prompt('Enter a side1')
   let side2 = +prompt('Enter a side2')
   if(side1 > 0 && side2 > 0){
     return `Square of the triangle is ${side1 * side2}`
   }
   return  'Please enter only positives'
 }
 
 
 let question = prompt('triangle or rectangle', '')
 let result = null
 
 if(question === 'triangle'){
   result = triangle()
 } else if(question === 'rectangle'){
   result = rectangle()
 } else {
   result = 'Please enter a valid poligon'
 }
 
 console.log(result)
 
 
 
 
 //Variant 2
 
 
 function area(model, a, b){
 
     if(a < 0 || b < 0){
       return 'Please enter only positives'
     }
   
       if(a > 0 && b > 0 && model === 'triangle'){
         return `Square of the triangle is ${(a * b) / 2}`
       } else if(a > 0 && b > 0 && model === 'rectangle'){
         return `Square of the rectangle is ${(a * b)}`
       }
 }
 
 console.log(area('rectangle', 5, 4))
 
 
 
 
 
 
 //TASK 5
 // Given an object. Invert it (keys become values and values become keys). If there is
 // more than key for that given value create an array.
 
 
 
 let obj = {
   a: 1,
   b: 2,
   c: 3,
   d: 3
 }
   
 function changeKeyAndValue(obj) {
   debugger
     const fakeCopy = {};
     for (const key in obj) {
         const value = obj[key];
         fakeCopy[value] = fakeCopy[value] || [];
         fakeCopy[value].push(key);
     }
     return fakeCopy;
 }
 console.log(changeKeyAndValue(obj))