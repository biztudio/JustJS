let greeting = 'hello world'

console.log(greeting)

const PI = 3.1415926

console.log(PI);

(function () {
  var x = 'foo'

  if (x === 'foo') {
    var y = 'bar'

    let z = 'kiki'

    console.log(z)
  }

  console.log(x)

  console.log(y)

  // Compare y and z
  // console.log(z)
})()

// console.log(x)

// Again Compare let & var
for (var a = 0; a < 3; a++) {
  console.log(a)
}
console.log(a)

for (let b = 0; b < 3; b++) {
  console.log(b)
}
// console.log(b)

// ES6 syntax to create object
let first = 'John'

let last = 'Doe'

let obj_es6 = {first, last}

console.log(JSON.stringify(obj_es6))
