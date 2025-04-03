// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const doubleArray = () => numbers.map(num => num * 2);
// console.log(doubleArray())



// const keepStrings = (arr) => arr.filter(item => typeof item === 'number')


// console.log(keepStrings([1, "hello", true, "world", 42])); // ➞ ["hello", "world"]
// console.log(keepStrings(["JS", 100, false, "is", "fun"])); // ➞ ["JS", "is", "fun"]


// const cart = [
//     { name: "Laptop", price: 1000 },
//     { name: "Phone", price: 500 },
//     { name: "Mouse", price: 50 }
// ];

// const totalPrice = () => cart.reduce((total, el) => total + el.price, 0);

// console.log(totalPrice(cart)); // ➞ 1550


// const customers = [
//     { name: "Alice", VIP: false },
//     { name: "Bob", VIP: true },
//     { name: "Charlie", VIP: true }
// ];

// const findVIP = () => customers.find(c => c.VIP === true)

// console.log(findVIP(customers)); // ➞ { name: "Bob", VIP: true }

// const allEven = (arr) => arr.every(e => e % 2 === 0)

// console.log(allEven([2, 4, 6])); // ➞ true
// console.log(allEven([1, 2, 4])); // ➞ false


const hasNegative = (arr) => arr.some(e => e < 0)

console.log(hasNegative([1, 2, 3, -4, 5])); // ➞ true
console.log(hasNegative([10, 20, 30])); // ➞ false
