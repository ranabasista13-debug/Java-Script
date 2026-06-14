//Print the following pattern using loops


// let r = Number(prompt("Enter a number to print the pattern: "))

for(let i=1; i<=5; i++){
    let pattern=""
    for(let j=1; j<=5-i; j++){
        pattern+=" "
    }
    for(let k=1; k<=2*i-1; k++){
        pattern+="*"
    }
    console.log(pattern)
}