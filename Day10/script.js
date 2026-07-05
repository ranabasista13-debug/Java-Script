// function studentinfo(){
//     let students = [
//         {
//             name: "Suabsh",
//             age: 20,
//             addresh: "Sukumbasi Pashupati"
//         },
//         {
//             name: "Roshni",
//             age: 19,
//             addresh: "Sukumbasi Manohara"
//         }
//     ]
//     console.log(students)
// }
// studentinfo();


// //Task 1

// const friendsinfo=()=>{
//     let friends = [
//         {
//             name: "Bashista",
//             age: "19",
//             id: "13",
//             faculty: "BIT",
//         },
//          {
//             name: "Subash",
//             age: "10",
//             id: "14",
//             faculty: "BIT",
//         },
//         {
//             name: "Prashant",
//             age: "9",
//             id: "15",
//             faculty: "BIT",
//         },
//         {
//             name: "Shirish",
//             age: "5",
//             id: "16",
//             faculty: "BIT",
//         },
//         {
//             name: "Parbat",
//             age: "18",
//             id: "17",
//             faculty: "BIT",
//         },
//         {
//             name: "Roshni",
//             age: "19",
//             id: "19",
//             faculty: "BIT"
//         }
//     ]
//     console.log(friends)
// }
// friendsinfo();




// const teacherinfo=()=>{
//     let teachers = ["Ram", "Shyam", "Hari"]
//     console.log(teachers);
//     teachers.forEach(function(teacher){
//         console.log(teacher)
//     })
// }
// teacherinfo();




//Create a function name primenumber and store numbers from 1 to 30 and print all 
// the prime number using forEach method and map method.

// function primenumber(){
//     let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
//     console.log("All prime numbers are: ")
//     numbers.forEach((num) => {
//         if (isPrime(num)) {
//             console.log(num);
//         }
//     });
// }

// function isPrime(n) {
//     if (n <= 1) return false;
//     if (n <= 3) return true;
//     if (n % 3 === 0 || n % 2 === 0) return false;
//     for (let i = 5; i * i <= n; i += 6) {
//         if (n % i === 0 || n % (i + 2) === 0) return false;
//     }
//     return true;
// }
// primenumber();