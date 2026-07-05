//Create a function name favCars and store 6 cars with their name, model, year, price and owner in an array of objects and print all the cars in the console.

// const favCars=()=>{
//     let cars = [{id: 1, 
//         name: "BMW", 
//         model: "M4", 
//         year: 2020, 
//         price: 10000000, 
//         stock: "true", 
//         owner: "Bashista Rana"},

//         {
//         id: 2, 
//         name:"Bugati", 
//         model: "Chiron", 
//         year: 2021, 
//         price: 1000000, 
//         stock: "false", 
//         owner: "Subash Giri"},

//         {
//         id: 3, name:"Lamborghini", 
//         model: "Aventador", 
//         year: 2022, 
//         price: 15000000, 
//         stock: "true", 
//         owner: "Parbat Timalsina"},
//         {
//         id: 4,
//          name:"Ferrari", 
//          model: "F8 Tributo", 
//          year: 2023, 
//          price: 2000000, 
//          stock: "false", 
//          owner: "Shirish Khadka"},

//         {
//         id: 5, 
//         name:"Porsche", 
//         model: "911 Turbo S", 
//         year: 2024, 
//         price: 25000000, 
//         stock: "true", 
//         owner: "Prashant Mandal"},

//         {
//         id: 6, 
//         name:"Bolero", 
//         model: "Standard", 
//         year: 1990, 
//         price: 1000000, 
//         stock: "true", 
//         owner: "Roshni Purbachhane"
//     }
//     ];
//     // console.log(cars);
//     // cars.map(function(i){
//     //     console.log(i);
//     // })
    
//     cars.map((i)=> {
//         console.log("Product Name: ", i.name);
//         console.log("Product Model: ", i.model);
//         console.log("Product Year: ", i.year);
//         console.log("Product Price: ", i.price);
//         console.log("Product Stock: ", i.stock);
//         console.log("Product Owner: ", i.owner);
//     })
// }
// favCars();




// const productDetails=()=>{
//     let products = [
//         {product_catagory: "Women",
//          product_type: "Kurtha",
//          product_size: ["S", "M", "L", "XL"],
//          product_color: ["Red", "Yellow", "Green", "Black"],
//          product_price: 15000,
//          product_stock: "true",
//          product_discount: "33%",
//          product_review: "4.5/5",
//         },

//         {product_catagory: "Unisex",
//          product_type: "Pants",
//          product_size: ["S", "M", "L", "XL"],
//          product_color: ["Red", "Yellow", "Green", "Black"],
//          product_price: 1700,
//          product_stock: "true",
//          product_discount: "22%",
//          product_review: "4.2/5",
//         },

//         {product_catagory: "Men",
//          product_type: "Shirt",
//          product_size: ["S", "M", "L", "XL"],
//          product_color: ["Red", "Yellow", "Green", "Black"],
//          product_price: 800,
//          product_stock: "true",
//          product_discount: "18%",
//             product_review: "4.0/5",
//         },

//         {product_catagory: "Unisex",
//          product_type: "t-shirt",
//          product_size: ["S", "M", "L", "XL"],
//          product_color: ["Red", "Yellow", "Green", "Black"],
//          product_price: 1200,
//          product_stock: "true",
//          product_discount: "20%",
//             product_review: "4.3/5",
//         },

//         {
//         product_catagory: "Child",
//          product_type: "Jacket",
//          product_size: ["S", "M", "L"],
//          product_color: ["Red", "Yellow", "Green", "Black"],
//          product_price: 3000,
//          product_stock: "true",
//          product_discount: "13%",
//             product_review: "4.6/5",
//         }
//     ];

//     products.map((i)=>{
//         console.log("Product Catagory: ", i.product_catagory);
//         console.log("Product Type: ", i.product_type);
//         console.log("Product Size: ", i.product_size);
//         console.log("Product Color: ", i.product_color);
//         console.log("Product Price: ", i.product_price);
//         console.log("Product Stock: ", i.product_stock);
//         console.log("Product Discount: ", i.product_discount);
//         console.log("Product Review: ", i.product_review);
//     });
// }
// productDetails();








const productDemo=()=>{
    let productDetails = [{
        product_catagory: "Furniture",
        product_type: ["Sofa", "Daraz", "Chair"],
        product_name: "Wardrobe premium",
        product_brand: ["FurniCo", "HomeStyle", "DecoCraft"],
        product_color: ["Red", "Grey", "Green", "Black"],
        product_material: ["Wood", "Metal", "Aluminium"],
        product_size: ["Small", "Medium", "Large"],
        product_review: "4.8/5",
        product_price: 15000,
        product_discount: "20%",
        product_warranty: "2 years",
        product_stock: "true",
        product_delivery: "Available",
    }];

    

    productDetails.map((i)=>{
        console.log("Product Catagory: ", i.product_catagory);
        console.log("Product Type: ", i.product_type);
        console.log("Product Name: ", i.product_name);
        console.log("Product Brand: ", i.product_brand);
        console.log("Product Color: ", i.product_color);
        console.log("Product Material: ", i.product_material);
        console.log("Product Size: ", i.product_size);
        console.log("Product Review: ", i.product_review);
        console.log("Product Price: ", i.product_price);
        console.log("Product Discount: ", i.product_discount);
        console.log("After Discount Price: ", i.after_discountprice);
        console.log("Product Warranty: ", i.product_warranty);
        console.log("Product Stock: ", i.product_stock);
        console.log("Product Delivery: ", i.product_delivery);
    })
}
productDemo();