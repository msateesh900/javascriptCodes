// Short Javascript codes with output

// ---------------------1---------------------
const BoolStrNumConversion = () => {
  // boolean + number ===> in addition b/w number and boolean , boolean converts into number true->1, false->0
  console.log(true + 1) //2

  // boolean + string ===> in addition b/w string and boolean, boolean converts into string false->"false", true->"true"
  console.log(false + "1") // false1
}
// BoolStrNumConversion()

// ---------------------2---------------------

const subStringSnippet = () => {
  let x = "Learn"
  // JS Engine will reverse the indexes when start index > end index
  console.log(x.substring(5, 1)) // earn
  console.log(x.substring(1, 5)) // earn
}
// subStringSnippet()

// ---------------------3---------------------

const setTimeoutSnippet = () => {
  for (var i = 0; i < 10; i++) {
    setTimeout(() => {
      console.log(i) // 10 prints in 10 times
    })
  }
  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      console.log(i) // 0,9 numbers printed on console
    })
  }
}
// setTimeoutSnippet()

// ---------------------4---------------------

const toStringCodeSnippet = () => {
  let x = {
    flag: 1,
    toString: function () {
      return this.flag++
    },
  }
  if (x == 1 && x == 2 && x == 3) {
    console.log("Hello")
  }
}
// toStringCodeSnippet()

// ---------------------5---------------------
const additionCodeSnippet = () => {
  let a = 5,
    b = a++
  console.log(a + b) // 11
}
// additionCodeSnippet()

// ---------------------6---------------------
const deleteKeywordSnippet = () => {
  // delete operator will not work on let, const, var variables and works only on object
  const name = "SaiKrishna"
  age = 21 // this will be added to global object
  console.log(delete name) // false
  console.log(delete age) // true
}
// deleteKeywordSnippet()

// ---------------------7---------------------
arrayPushSnippet = () => {
  let a = [1, 2],
    b = a
  b.push(3)
  console.log(a) // [1,2,3]
}
// arrayPushSnippet()

// ---------------------8---------------------
const varibaleAssignmentSnippet = () => {
  // variable b get global allocation and it will be available over globally,
  //  so console.log(a) will make error outside mentioning "a" is not defined
  function data() {
    let a = (b = 5)
  }
  data()
  console.log(b) // 5
  //   console.log(a)// ReferenceError a is not defined
}
// varibaleAssignmentSnippet()

// ---------------------9---------------------
const arrayForEachSnippet = () => {
  const x = []
  x[4] = 1
  // forEach value will be looped once the value is defined
  // so this case we have value defined at 4th index so only one time Hi will be printed in console
  x.forEach((i) => {
    console.log("Hi") // prints Hi one time
  })
}
// arrayForEachSnippet()

// ---------------------10---------------------
const arrayAdditionSnippet = () => {
  let a = [1],
    b = [2]
  // if we use array addition b/w them it is coverted internally to toString method
  console.log(a + b) //12
}
// arrayAdditionSnippet()

// ---------------------11---------------------
const arraySliceSnippet = () => {
  var arrA = [1, 2]
  // slice method will create a shallow copy of the original array assign it to a new array
  // shallow copy primitive data types will be copied by value where as non primitive by reference
  var arrB = arrA.splice()
  arrB[0] = 42
  console.log(arrA) // [1,2]
  console.log(arrB) // 42
  console.log(arrA + arrB) //1,242

  var objA = {
    a: 1,
    b: 2,
  }
  var objB = objA
  objB.a = 42
  console.log(objA) // {a:42,b:1}
}
// arraySliceSnippet()

// ---------------------12---------------------
const ifVarGlobalScopeSnippet = () => {
  if (false) var a = "Sai"
  console.log(a) // undefined
}
// ifVarGlobalScopeSnippet()

// ---------------------13---------------------
const IIFEfalseSnippet = () => {
  ;(function (num) {
    console.log(num * num)
  })(false) // 0
}
// IIFEfalseSnippet()

// ---------------------14---------------------
// associativity rule is from left to right
const associativitySnippet = () => {
  let x = 10 > 9 > 8
  console.log(x === true) // false
}
// associativitySnippet()

// ---------------------15---------------------
const postFixincrementSnippet = () => {
  let x = 1
  x = x++
  // y = x++
  console.log(x) // 1
}
// postFixincrementSnippet()

// ---------------------16---------------------
const equalitySnippet = () => {
  // JS will make a and b as numeric and makes empty array as 0 and false as 0
  let a = [],
    b = false
  console.log(a == b) // true
  console.log(a === b) // false
}
// equalitySnippet()

// ---------------------17---------------------
const unaryOpearatorSnippet = () => {
  console.log(+true) //1
  console.log(+false) //0
  console.log(+"123") //123
  console.log(+null) // 0
}
// unaryOpearatorSnippet()

// ---------------------18---------------------
const hoistingVarSnippet = () => {
  x++
  console.log(x) // NaN because we can't increment undefined x that hoisted
  var x = 21
}
// hoistingVarSnippet() // NaN

// ---------------------19---------------------
const hoistingTwoVaribalesVarSnippet = () => {
  y = 10 // creates object y in global scope
  var x = 1 + y
  console.log(x) //11
}
// hoistingTwoVaribalesVarSnippet()

// ---------------------20---------------------
const immutableStringSnippet = () => {
  let str = "jscafe"
  str[0] = "c"
  console.log(str) // jscafe
  str = "cscafe"
  console.log(str) // cscafe
}
// immutableStringSnippet()

// ---------------------21---------------------
const objAssginmentSnippet = () => {
  const obj = { a: 1 }
  obj.a = 2
  console.log(obj)
}
// objAssginmentSnippet() // {a:2}

// ---------------------22---------------------
const objValueAssignmentSnippet = () => {
  const x = { name: "sai" }
  const arr = ["name"]
  x[arr] = "krishna"
  console.log(x.name)
}
// objValueAssignmentSnippet() // krishna

// ---------------------23---------------------
const valPreAndPostIncrementSnippet = () => {
  let x = 1,
    y = 2
  console.log(x++ + ++y) // 4
}
// valPreAndPostIncrementSnippet()

// ---------------------24---------------------
const NaNSnippet = () => {
  let x = NaN,
    y = NaN
  console.log(x === y) // false
  console.log(isNaN(x) === isNaN(y)) // true
}
// NaNSnippet()

// ---------------------24---------------------
const objLiteralFunctionSnippet = () => {
  const person = {
    name: "Sam",
    hello: function () {
      console.log(this.name)
    },
  }
  person.hello()
}
objLiteralFunctionSnippet()
