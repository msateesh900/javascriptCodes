console.log("Welcome to Javascript codes")

// -------------------------------------------------String Series------------------------------

// --------------------------1 String reverse -------------
//Method1
let strRev = "Hello Javascript",
  strRevRes = ""

for (let char of strRev) strRevRes = char + strRevRes
console.log(`string reverse using for of loop: ${strRevRes}`)

for (let i = strRev.length - 1; i >= 0; i--) strRevRes += strRev[i]
console.log(`string reverse using Plain for loop: ${strRevRes}`)
// method2
console.log(
  "string reverse using predefinec methods:",
  strRev.split("").reverse().join("")
)

// --------------------------2 Occurances of characters in string -------------

let occStr = "Hello World checking occurances"

let occStrRes = {}

for (let char of occStr)
  occStrRes[char] = occStrRes[char] ? occStrRes[char] + 1 : 1

console.log("occurances of characters in string using for of loop", occStrRes)

// --------------------------3 Highest word in string -------------

let higStr = "Hello World checking occurances"

let higStrSplit = higStr.split(" "),
  higStrRes = ""

for (let word of higStrSplit)
  if (word.length > higStrRes.length) higStrRes = word

console.log("Highest word in string using for of loop", higStrRes)

// --------------------------4 string to same key values to Object -------------

let keyValStr = "Object"

const keyValStrRes = {}
for (let char of keyValStr) keyValStrRes[char] = char
console.log("String to same key values to object:", keyValStrRes)

// --------------------------5 remove duplicates from string -------------
let dupStr = "Hello World"

const dupStrRes = []
for (let char of dupStr) if (dupStrRes.indexOf(char) == -1) dupStrRes.push(char)
console.log("Removing duplicates from string:", dupStrRes)

// --------------------------6 anorgham string -------------

let anStr1 = "Hello World",
  anStr2 = "World Hello"

if (anStr1.split(" ").sort().join(" ") === anStr2.split(" ").sort().join(" "))
  console.log("String is anargham")
else console.log("String is not anargham")

// --------------------------7 string copy -------------
let strCopy = "String Copy",
  strCopyRes = strCopy

console.log(`string copy of String:${strCopy} is ${strCopyRes} `)

const ingredientsList = ["noodles", { list: ["eggs", "flour", "water"] }]
const ingredientsListCopy = [...ingredientsList]
console.log(ingredientsListCopy)
// -------------------------------------------------Number Series------------------------------
// --------------------------8 Factorial of number -------------

let facNum = 5,
  facNumRes = 1
if (facNum === 0) return 1
for (let i = 1; i <= facNum; i++) facNumRes *= i
console.log(`factorial of Number:${facNum} is ${facNumRes}`)

// -------------------------------------------------Object Series------------------------------

const RajamouliFilms = [
  { name: "Prabhas", film: "Chatrapati" },
  { name: "Jr NTR", film: "Yamadonga" },
  { name: "Prabhas", film: "Bahubali 1" },
  { name: "Prabhas", film: "Bahubali 2" },
  { name: "Jr NTR", film: "Student No 1" },
  { name: "Jr NTR", film: "RRR" },
  { name: "Ravi Teja", film: "Vikramarkudu" },
  { name: "Jr NTR", film: "Simhadri" },
  { name: "Ram Charan", film: "RRR" },
  { name: "Sunil", film: "Maryada Ramanna" },
  { name: "Ram Charan", film: "Magadheera" },
  { name: "Nani & Sudeep", film: "Eega" },
]

const groupedByActor = RajamouliFilms.reduce((acc, currentFilm) => {
  if (acc[currentFilm.name]) {
    acc[currentFilm.name].push(currentFilm.film)
  } else {
    acc[currentFilm.name] = [currentFilm.film]
  }
  return acc
}, {})

console.log("Rajamouli films grouped by actor", groupedByActor)

// Shallow Copy vs Deep Copy

// Shallow Copy
let original = { name: "Ramesh", address: { city: "Vizag" } }
let shallowCopy = { ...original }
shallowCopy.address.city = "Tirupati"

console.log(original)

// Deep Copy
let deepCopy = JSON.parse(JSON.stringify(original))
deepCopy.address.city = "Bangalore"

console.log(original)

// Implement Private Counter

const createCounter = () => {
  let count = 0
  return {
    increment: () => {
      count++
      return count
    },
    decrement: () => {
      count--
      return count
    },
  }
}

const counter = createCounter()
console.log(counter.increment())
console.log(counter.increment())
console.log(counter.increment())
console.log(counter.decrement())
console.log(counter.decrement())
console.log("first")
