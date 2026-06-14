//Loop

// For Loop

// for(let i=1; i<=10; i++){
//     console.log(i)
// }

// for(let i=1; i<=20; i++){
//     console.log(i)
// }




// Print odd numbers from 1 to 20.
// for(let i=1; i<=20; i++){
//     if(i%2 !== 0){
//         console.log(i)
//     }
// }



// print numbers from 10 to 1.
// for(let i=10; i>=1; i--){
//     console.log(i)
// }




// find the sum of numbers from 1 to 100.
// let sum = 0
// for(let i=1; i<=100; i++){
//     sum += i
// }
// console.log("The sum of numbers from 1 to 100 is: " + sum)



//printthe multiplication table of 8.
// let num = 8
// for(let i=1; i<=10; i++){
//     console.log("Multiplication table of " + num + ": " + num + "*" + i + " = " + num*i)
// }



//ask the user for a number and print the multiplication table of that number.
// let num = parseInt(prompt("Enter a number: "))
// for(let i=1; i<=10; i++){
//     console.log("Multiplication table of " + num + ": " + num + "*" + i + " = " + num*i)
// }



//nested for loop
for (let i=1; i<=5; i++){
    pattern = ""
    for(let j=1; j<=i; j++){
        pattern += "*"
    }   
    console.log(pattern)
}

