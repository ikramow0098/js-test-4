//Task 1 - Customer Discounts.
let purchaseAmount = 120;
let finalAmount;
if (purchaseAmount > 100) {
    finalAmount = purchaseAmount * 0.9
}
console.log(finalAmount)
console.log("----------------------------------")


//Task 2 - Sales Report.
let sales = [120, 85, 200, 150, 90]
let totalSales = 0;
for (let index = 0; index < sales.length; index++) {
    const sale = sales[index];
    totalSales += sale
}
console.log(totalSales)
console.log("----------------------------------")


//Task 3 - Inventory Depletion
let stock = 10
while (stock) {
    stock -= 1
    console.log(stock)
}
console.log("----------------------------------")
//Task 4 - Customer Survey.
let responses = 0;
do {
    console.log(responses)
    responses++;
} while (responses <= 3);

console.log("----------------------------------")

//Task 5 - Employee Information.
let employee = {
    name: "Alice",
    position: "Manager",
    salary: 75000
}
for (const key in employee) {
    console.log(employee[key])
}
console.log("----------------------------------")

//Task 6 - Product Listings
let products = ["Laptop", "Mouse", "Keyboard"]
for (const element of products) {
    console.log(element)
}
console.log("----------------------------------")


//Task 7 - Order Processing.
let orders = [101,102,103]
orders.forEach((order)=>{
    console.log(order)
})
console.log("----------------------------------")
