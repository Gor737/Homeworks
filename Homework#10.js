//Task 1

class Author {
  constructor(name, email, gender){
    this.name = name
    this.email = email 
    this.gender = gender
  }
  get name(){
    return this._name
  }
  set name(n){
    this._name = n
  }
  get email(){
    return this._email
  }
  set email(url){
    this._email = url
  }
  get gender(){
    return this._gender
  }
  set gender(gen){
    this._gender = gen
  }

  toString(){
    return `Hi, I am ${this.name}`
  }
 
}

let author = new Author('Gor', 'gorafyan723@gmail.com', 'male')




class Book {
  constructor(title, author, price, quantity){
    this.title = title
    this.author = author
    this.price = price 
    this.quantity = quantity
  }
  get title(){
    return this._title
  }
  set title(title){
    this._title = title
  }
  get price(){
    return this._price
  }
  set price(price){
    this._price = price
  }
  get quantity(){
    return this._quantity
  }
  set quantity(x){
    this._quantity = x
  }

  getProfit(){
    return `your profit is ${this.price * this.quantity}`
  }
 
}

let myBook = new Book("black", author, 370, 37)




//Task 2

class Account {
  constructor(name, balance){
    this.name = name
    this.balance = balance
  }
  id = Date.now()

  get id(){
      return this._id
    }
  
  get name(){
    return this._name
  }
  set name(n){
    this._name = n
  }
  get balance(){
    return this._balance
  }
  set balance(balance){
    this._balance = balance
  }

  addCredit(amount){
    this.balance += amount
    return this._balance
  }
  debit(amount){
    if(this.balance >= amount){
      this.balance -= amount
    } else{
      return `Amount exceeded balance.`
    } 
  }
  transferTo(anotherAccount, amount){
    if(this.balance >= amount){
      this.balance -= amount
      anotherAccount.balance += amount
      return this.balance
    } else{
      return `Amount exceeded balance.`
    }
  }
  toString(){
    `name: ${this.name}   balance: ${this.balance}`
  }

   static identifyAccounts(accountFirst, accountSecond){
     if(accountFirst.id === accountSecond.id){
       return true
     } else return false 
   }
}




//Task 3

class Person {
  constructor(firstName, lastName, gender, age) {
    this.firstName = firstName
    this.lastName = lastName
    this.gender = gender
    this.age = age
  }

  get firstName() {
    return this._firstName
  }
  set firstName(name) {
    this._firstName = name
  }
  get lastName() {
    return this._lastName
  }
  set lastName(surname) {
    this._lastName = surname
  }
  get gender() {
    return this._gender
  }
  set gender(gen) {
    this._gender = gen
  }
  get age() {
    return this._age
  }
  set age(age) {
    this._age = age
  }

  toString() {
    return `Hi I am ${this.firstName} ${this.lastName}, I ${this.age} years old`
  }

}

let p = new Person('Gor', 'Afyan', 'male', 20)



class Student extends Person {


  constructor(firstName, lastName, gender, age, program, year, fee) {
    super(firstName, lastName, gender, age)
    this.program = program
    this.year = year
    this.fee = fee
  }
  examObj = {}
  gradePoint = 0

  get program() {
    return this._program
  }
  set program(program) {
    this._program = program
  }
  get year() {
    return this._year
  }
  set year(year) {
    this._year = year
  }
  get fee() {
    return this._fee
  }
  set fee(fee) {
    this._fee = fee
  }

  passExam(program, grade) {
    if (!(this.examObj.hasOwnProperty(`${program}`))) {
      this.examObj[program] = grade
      this.gradePoint += grade
    } else {
      return
    }
    if (this.gradePoint >= 50) {
      this.year += 1
    }
  }
  toString() {
    return `Hi I am ${this.firstName} ${this.lastName}, I ${this.age} years old.
      I am student, and my fee is ${this.fee}$/month`
  }
}

let s = new Student('Gor', 'Afyan', 'male', 20, ['Math', 'Physics'], 2, 100)


class Teacher extends Person {
  constructor(firstName, lastName, gender, age, program, pay) {
    super(firstName, lastName, gender, age)
    this.program = program
    this.pay = pay
  }
  get program() {
    return this._program
  }
  set program(program) {
    this._program = program
  }
  get pay() {
    return this._pay
  }
  set pay(pay) {
    this._pay = pay
  }

  toString() {
    return `Hi I am ${this.firstName} ${this.lastName}, I am teacher of ${program} and my pay is ${this.pay}$`
  }
}

let t = new Teacher('Gor', 'Afyan', 'male', 20, 'Physics', 1000)
