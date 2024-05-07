// function FizzBuzz(number) {
//     let arr = []
    
// for(let i = 1; i <= number; i++) {
//     let fizz = i % 3 === 0
//     let buzz = i % 5 === 0

//     if(fizz & buzz) {
//         arr.push('Fizzbuzz')
//     } else if (fizz) {
//         arr.push('fizz')
//     } else if (buzz) {
//         arr.push('buzz')
//     } else {
//         arr.push(i)
//     }
// }

// return arr
    
// }

// let arr = FizzBuzz(15)            !!!
// console.log(arr);





function getMin(...arr) {
    let min = arr[0]
    for(let name of arr) {
        if (name.length < min.length) {
            min = name
        }
    }
    return min
}

let minName = getMin('amina', 'jasmina', 'faya')
console.log(minName);





/* RETURN */

// function getRectArea(width, height) {
// if (width > 0 && height > 0) {
// return width * height;
// }
// return 0;
// }

// console.log(getRectArea(3, 4));


// console.log(getRectArea(-3, 4));