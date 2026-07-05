//Using push to add new name in the array 
// const friendsinfo=()=>{
//     let nameoffriends=["Bashista", "Subash", "Parbat", "Prashant", "Shirish"]
//     console.log("Name of students: ")
//     console.log(nameoffriends)
//     console.log(nameoffriends.length)
//     nameoffriends.push("Babin") //push add the new name in the last of the array 
//     console.log(nameoffriends)
// }
// friendsinfo();




//Using pop to remove the last name of the array 
// const friendsinfo=()=>{
//     let nameoffriends=["Bashista", "Subash", "Parbat", "Prashant", "Shirish"]
//     console.log("Name of students: ")
//     console.log(nameoffriends)
//     console.log(nameoffriends.length)
//     nameoffriends.pop() //pop removes the last element in the array
//     console.log(nameoffriends)
// }
// friendsinfo();





//Create addcolor() minumum 6 colors
//add new color 

// const addcolor=()=>{
//     let colors = ["red", "blue", "green", "yellow", "orange", "white"]
//     console.log(colors)
//     console.log(colors.length)
//     colors.unshift("black") //unshift add the first elements in the aray 
//     console.log(colors)
// }
// addcolor();





//Create addCountryBeginning 
//add country at beginning 

// const addCountry=()=>{
//     let country = ["Nepal", "India", "Japan", "America"]
//     console.log(country)
//     console.log(country.length)
//     country.unshift("China") //using unshift to add a new name of the country in the array 
//     console.log(country)
// }
// addCountry();






//Create removeFirstCountry remove first country 
const removeFirstCountry=()=>{
    let removecountry = ["China", "Nepal", "India", "America"]
    console.log(removecountry)
    console.log(removecountry.length)
    removecountry.shift() //using shift to remove the first elememt of the array 
    console.log(removecountry)
}
removeFirstCountry();




//Array in function 

function nameofFriends(){
    let name = ["Bashista", "Subash", "Parbat", "Shirish", "Babin", "Piku"]
    console.log(name);

    for(i = 0; i < name.length; i++){
        console.log(name[i]);
    }
}
nameofFriends();




function familyMembers(){
    let nameofmembers = ["Bal krishna", "Sumitra", "Manisha", "Gyanisha", "Kanti", "Sadiksha", "Bashista"]
    console.log(nameofmembers);

    for(i = 0; i < nameofmembers.length; i++){
        console.log(nameofmembers[i])
    }
}
familyMembers();



//Create a function totalmarks()
//Store marks in array and calculate 

function totalMarks(){
    let marks = [1,2,3,4,5]
    console.log(marks);

    for (i = 0; i < marks.length; i++){
        console.log(marks.length)
        
    }
}
totalMarks();