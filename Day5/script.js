//Function.

// function greet(){
//     console.log("Namaste.")
// }
// greet()


//Create a function named introduce that print the name.
// function introduce(){
//     console.log("Bashista Rana.")
// }
// introduce()



//Student Info
// function studentInfo(){
//     console.log("Name: Bashista Rana")
//     console.log("Age: 20")
//     console.log("Course: BIT")
// }
// studentInfo()



//Create a function named calculatorArea that takes the radius of a circle and returns its area.
// function calculatorArea(){
//     let r= parseFloat(prompt("Enter the radius of the circle: "))
//     let area = 3.14 * r * r
//     console.log("The area of the circle is: " + area)
// }
// calculatorArea()




//Parameterized Function
// function greet(name){
//     console.log("Namaste! " + name )
// }
// greet("Bashista")
// greet("Shirish")
// greet("Prashant")


//Crate a function named listTeachers thatss take name, address, salary, and subject as parameters and display the teacher's information.

// function listTeachers(name, address, salary, subject){
//     console.log("Name: " + name)
//     console.log("Address: " + address)
//     console.log("Salary: " + salary)
//     console.log("Subject: " + subject)
// }
// listTeachers("Bashista Rana", "Bhatapur", 50000, "Math")



//Create a function named calculator ehich takes two input of numbers from the user ask user the operator
// and perform addition subtraction, multiplication, and division also display the result in a formatted way.

// function calculator(){
//     var a = parseFloat(prompt("Enter first number: "));
//     var b = parseFloat(prompt("Enter second number: "));
//     var operator = prompt("Enter an operator (+, -, *, /): ");  

//     if(operator=="+"){
//         console.log("The sum is: " + (a+b))
//     }
//     else if(operator=="-"){
//         console.log("The difference is: " + (a-b))
//     }
//     else if(operator=="*"){
//         console.log("The multiplication is: " + (a*b))
//     }
//     else if(operator=="/"){
//         if(b!=0){
//             console.log("The quotient is: " + (a/b))
//         }
//         else{
//             console.log("Cannot divide by zero")
//         }
//     }
//     else{
//         console.log("Invalid operator")
//     }
// }
// calculator()



//Create a function named pattern and display the given pattern 
function pattern(){
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
}
pattern()



//Create a function named pattern and display the given pattern 
function pattern2(){
    
    for (let i=1; i<=5; i++){
        pattern = ""
        for(let j=1; j<=i; j++){
            pattern += "*"
        }   
        console.log(pattern)
    }
}
pattern2()



//Create a function named pattern and display the given pattern 
function pattern3(){
    let count=5
    for(let i=1; i<=5; i++){
        let pattern=""
        for(let j=1; j<=i; j++){
            pattern+=count+" "
            count++
        }
        console.log(pattern)
    }

}
pattern3()



//Create a function named pattern and display the given pattern 
function pattern4(){
    for (let i=1; i<=5; i++){
        pattern = ""
        for(let j=1; j<=i; j++){
            pattern += "*"
        }   
        console.log(pattern)
    }
}
pattern4()