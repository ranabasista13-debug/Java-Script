//Print the following pattern using loops

// let p = Number(prompt("Enter a number to print the pattern: "))
let count=5
for(let i=1; i<=5; i++){
    let pattern=""
    for(let j=1; j<=i; j++){
        pattern+=count+" "
        count++
    }
    console.log(pattern)
}
