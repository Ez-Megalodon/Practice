const products = [
    { id: 1, name: "iPhone 13 Pro", brand: "Apple", price: 999, inStock: true, color: "Graphite", storage: "128GB" },
    { id: 2, name: "Galaxy S21 Ultra", brand: "Samsung", price: 1199, inStock: false, color: "Phantom Black", storage: "256GB" },
    { id: 3, name: "Pixel 6 Pro", brand: "Google", price: 899, inStock: true, color: "Stormy Black", storage: "128GB" },
    { id: 4, name: "OnePlus 9 Pro", brand: "OnePlus", price: 969, inStock: false, color: "Morning Mist", storage: "256GB" },
    { id: 5, name: "Xperia 1 III", brand: "Sony", price: 1299, inStock: true, color: "Frosted Black", storage: "512GB" },
    { id: 6, name: "Mi 11 Ultra", brand: "Xiaomi", price: 1199, inStock: true, color: "Ceramic White", storage: "256GB" },
    { id: 7, name: "AirPods Pro", brand: "Apple", price: 249, inStock: true, color: "White", storage: "256GB" },
    { id: 8, name: "Galaxy Watch 4", brand: "Samsung", price: 249, inStock: true, color: "Black", storage: "256GB" },
    { id: 9, name: "Pixel Buds A-Series", brand: "Google", price: 99, inStock: false, color: "Clearly White", storage: "256GB" },
    { id: 10, name: "OnePlus Buds Pro", brand: "OnePlus", price: 149, inStock: true, color: "Matte Black", storage: "256GB" },
];

// Find the total price of all products that are currently in stock.
const totalPriceOfInStock = products.reduce((acc, cur) => {
    if (cur.inStock) {
        return acc += cur.price;
    } else {
        return acc;
    }
},0)
// console.log(totalPriceOfInStock);

// Group the products by brand and return an object where each property is a brand name, and the value is an array of products belonging to that brand.


// Find the average price of all the products.
// Check if all products are currently in stock
// Find the total storage of all products that are currently in stock.
// Create a new array of products where the price is discounted by 10%.
// Find the total number of products that have a price higher than $1000.
// Group the products by color and return an object where each property is a color name, and the value is an array of products belonging to that color.
// Find the product with the lowest price that is currently in stock.

// Find the total cost of all the products in the array.
const totalCost = products.reduce((total, product) => {
    return total += product.price;
},0);
// console.log(totalCost);

// Find the number of products that are in stock.
const totalStock = products.reduce((total, product) => {
     if (product.inStock === true) {
         total++;
     }
     return total;
},0);
// console.log(totalStock);

// Create an object that groups the products by their brand.
// const groupedBrands = products.reduce((acc, curr) => {
//     if (!acc[curr.brand]){
//         acc[curr.brand] = [curr];
//     } else {
//         acc[curr.brand].push(curr);
//     }
//     return acc;
// },{});
// console.log(groupedBrands);

// Find the product with the highest price.
const highestPrice = products.reduce((acc, cur) => {
    if (cur.price > acc){
        acc = cur.price;
    } else {

    }
    return acc;
}, 0);
// console.log(highestPrice);

// Create an array of strings that lists the name and storage capacity of each product in the format "Product Name - Storage Capacity".
const productNameAndStorageCapacity = products.reduce((acc, cur) => {
    return acc += `${cur.name} - ${cur.storage}, `;
},"");
// console.log(productNameAndStorageCapacity);

const aHundredNums = [9225, 6397, 97, 5062, 2149, 4656, 6551, 2145, 1073, 7963, 6279, 2873, 1820, 1468, 9611, 6431, 797, 3433, 5518, 4932, 7880, 6996, 5761, 6828, 6909, 9431, 4313, 2265, 7709, 5131, 2054, 8212, 9285, 7945, 612, 6055, 7189, 8539, 8201, 2209, 98, 9329, 4281, 441, 7230, 3582, 2502, 8432, 9749, 1267, 4111, 4289, 6793, 8238, 6892, 7665, 9252, 2065, 9817, 8868, 2133, 4519, 1916, 3035, 7547, 9217, 9438, 4473, 7162, 6652, 2540, 5290, 1502, 7302, 3917, 6100, 6211, 286, 8413, 8380, 5514, 5858, 7280, 3490, 3907, 1, 1428, 8825, 8339, 8809, 7713, 7770, 3873, 3474, 6775, 9126, 3081, 7613, 4017, 445];

// Find the total and average of the array of a hundred numbers.
const averageOfAHundredNums = aHundredNums.reduce((total, currentNum, index,array)=> {
   total = total +currentNum;
    if (index === array.length -1) {
        return total / array.length;
    }else {
        return total;
    }
});
// console.log(averageOfAHundredNums);

const cars = [
    {
        make: "Honda",
        model: "Civic",
        mileage: 10428
    },
    {
        make: "Toyota",
        model: "Corolla",
        mileage: 9425
    },
    {
        make: "Ford",
        model: "Mustang",
        mileage: 2567
    },
    {
        make: "Audi",
        model: "A3",
        mileage: 14500
    },
    {
        make: "Mazda",
        model: "3",
        mileage: 11248
    }
];

const totalMileage = cars.reduce((acc, curr) => acc + curr.mileage,0);
// console.log(totalMileage);
// TODO: Given the following array, complete the todos...

const dogs = [
    {
        dogName: 'Bubbles',
        age: 10,
        isTrained: false
    },
    {
        dogName: 'Lexie',
        age: 3,
        isTrained: true
    },
    {
        dogName: 'Doggy',
        age: 5,
        isTrained: false
    },
    {
        dogName: 'Flopper',
        age: 3,
        isTrained: true
    },
    {
        dogName: 'Lexie',
        age: 1,
        isTrained: true
    },
    {
        dogName: 'Skip',
        age: 7,
        isTrained: true
    },
    {
        dogName: 'Blue',
        age: 4,
        isTrained: false
    }
];

// MAP

// TODO 1: using map, create a new array of dog names from the dogs array
console.log('Exercise 1:');
const dogNames = dogs.map(dog => dog.dogName);
console.log(dogNames);

// TODO 2: using map, create a new array of dog ages from the dogs array
console.log('Exercise 2:');
const dogAges = dogs.map(dog => dog.age);
console.log(dogAges);

// TODO 3: using map, create a new array of dog objects from the dogs array that only have dog names and age properties and values
console.log('Exercise 3:');
const dogNameAndAge = dogs.map(dog =>{
    return {
        dogName : dog.dogName,
        age: dog.age
    }
});
console.log(dogNameAndAge);

// FILTER

// TODO 4: using filter, create a new array containing only dogs younger than 10 years old
console.log('Exercise 4:');
const dogsUnderTen = dogs.filter(dog => {
    return dog.age < 10;
})
console.log(dogsUnderTen);

// TODO 5: using filter, create a new array containing only dogs named 'Lexie'
console.log('Exercise 5:');
const dogsNamedLexie = dogs.filter(dog => dog.dogName === 'Lexie');
console.log(dogsNamedLexie);

// TODO 6: using filter, create a new array containing only dogs that are trained and younger than 10
console.log('Exercise 6:');
const dogsTrainedYoungerThanTen = dogs.filter(dog => dog.isTrained && dog.age < 10);
console.log(dogsTrainedYoungerThanTen);


// REDUCE

// TODO 7: using reduce, return a string containing all dog names together with no spaces ("BubblesLexieDoggy...")
console.log('Exercise 7:');
const noSpaceDogNames = dogs.reduce((acc, curr) => {
    return acc === '' ? curr.dogName : acc + curr.dogName;
},'')
console.log(noSpaceDogNames);

// TODO 8: using reduce, return the total of adding all dog ages together (18)
console.log('Exercise 8:');
const totalDogAge = dogs.reduce((acc, curr) => {
    return acc += curr.age;
},0);
console.log(totalDogAge);


// TODO 9: using reduce, return an array of dog objects with all isTrained properties set to true
console.log('Exercise 9:');
const dogsThatAreTrained = dogs.reduce((acc, curr) => {
    if (curr.isTrained === true){
        acc.push(curr);
    } else {
        return acc;
    }
    return acc;
},[]);
console.log(dogsThatAreTrained);



// EXTRA CHALLENGES

// TODO 10: what is the average age of each dog?
console.log('Exercise 10:');
const averageDogAge = dogs.reduce((acc, curr,i,arr)=> {
   return acc += curr.age / arr.length;
},0);
console.log(averageDogAge.toFixed(2));

// TODO 11: what is the average age of dogs that are trained?
console.log('Exercise 11:');


// TODO 12: what is the average length of names of untrained dogs?
console.log('Exercise 12:');

// TODO 13: what are the combined ages of all dogs in dog years? (7x more than a human year)
console.log('Exercise 13:');

// TODO 14: create a string of the first letters of each dog name for dogs three years old (should be "LF")
console.log('Exercise 14:');