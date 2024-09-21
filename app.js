console.log("Welcome to Javascript codes")

// --------------------------1 String reverse -------------
//Method1
let str = "Hello Javascript",
  strRev = ""

for (let char of str) strRev = char + strRev
console.log(`string reverse using for of loop: ${strRev}`)

// method2
console.log(
  "string reverse using predefinec methods:",
  str.split("").reverse().join("")
)
