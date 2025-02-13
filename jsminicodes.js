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

let subStringSnippet = () => {
  let x = "Learn"
  // JS Engine will reverse the indexes when start index > end index
  console.log(x.substring(5, 1))
  console.log(x.substring(1, 5))
}
// subStringSnippet()

// ---------------------3---------------------

const setTimeoutSnippet = () => {
  for (var i = 0; i < 10; i++) {
    setTimeout(() => {
      console.log(i)
    })
  }
  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      console.log(i)
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
additionCodeSnippet = () => {
  let a = 5,
    b = a++
  console.log(a + b)
}
// additionCodeSnippet()

// ---------------------6---------------------
deleteKeywordSnippet = () => {
  // delete operator will not work on let, const, var variables and works only on object
  const name = "SaiKrishna"
  age = 21
  console.log(delete name)
  console.log(delete age)
}
// deleteKeywordSnippet()

// ---------------------7---------------------
arrayPushSnippet = () => {
  let a = [1, 2],
    b = a
  b.push(3)
  console.log(a)
}
// arrayPushSnippet()

// ---------------------8---------------------
varibaleAssignmentSnippet = () => {
  // variable b get global allocation and it will be available over globally,
  //  so console.log(a) will make error outside mentioning "a" is not defined
  function data() {
    let a = (b = 5)
  }
  data()
  console.log(b)
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
    console.log("Hi")
  })
}
// arrayForEachSnippet()

// ---------------------10---------------------
const arrayAdditionSnippet = () => {
  let a = [1],
    b = [2]
  // if we use array addition b/w them it is coverted internally to toString method
  console.log(a + b)
}
// arrayAdditionSnippet()

// ---------------------11---------------------
arraySliceSnippet = () => {
  var arrA = [1, 2]
  // slice method will create a shallow copy of the original array assign it to a new array
  // shallow copy primitive data types will be copied by value where as non primitive by reference
  var arrB = arrA.splice()
  // console.log(arrB)
  arrB[0] = 42
  console.log(arrB)

  var objA = {
    a: 1,
    b: 2,
  }
  var objB = objA
  objB.a = 42
  console.log(objA)
}

arraySliceSnippet()

// ---------------------12---------------------
