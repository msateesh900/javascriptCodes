// JS 50 coding programs

// ----------------------1 let,const and var------------------------------

const program1 = () => {
  const fruits = () => {
    console.log(fruit)
    console.log(age)
    var fruit = "apple"
    let age
  }
  fruits()
}
// program1()

// ----------------------2 setTimeout var------------------------------
const program2 = () => {
  for (var i = 0; i < 3; i++) setTimeout(() => console.log(i), 1) // 3 3 3
}
// program2()

// ----------------------3 setTimeout let------------------------------
const program3 = () => {
  for (let i = 0; i < 3; i++) setTimeout(() => console.log(i), 1) // 0 1 2
}
// program3()

// ----------------------4 Type conversion using +, - to boolean ---
const program4 = () => {
  console.warn(+true)
  console.warn(typeof +true)
  console.warn(+false)
}
// program4()

// ----------------------5 Type conversion using ! to string ---
const program5 = () => {
  console.log(!"sateesh")
  console.warn(typeof !"sateesh")
}
// program5()

const program6 = () => {
  let big = "size"
  const bird = {
    size: "small",
  }
  console.warn(bird[big])
  console.warn(bird["size"])
  console.warn(bird.size)
  console.warn(bird.data)
}
// program6()

const program7 = () => {
  const c = { name: "peter" }
  // Object.freeze(c) // if don't want to make change object immutable object
  const d = c
  d.name = "anil"
  console.log(d.name)
}
// program7()

const program8 = () => {
  var x
  var x = 10
  console.log(x)
  let z
  // let z = 20
  console.log(z)
}
// program8()

const program9 = () => {
  // let z
  let z = 20
  console.log(z)
}
// program9()

const program10 = () => {
  let a = 3
  let b = new Number(3)

  console.log(a == b)
  console.log(a === b)
  console.log(typeof a, typeof b)
}
// program10()

const program11 = () => {
  let name
  nmae = {}
  console.log(name)
}

// program11()

const program12 = () => {}
