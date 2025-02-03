//Task 1 - Customer Discounts.
let purchaseAmount = 120;
let finalAmount;
if (purchaseAmount > 100) {
    finalAmount = purchaseAmount * 0.9
}
console.log(finalAmount)

//Task 2 - Sales Report.
let sales = [120, 85, 200, 150, 90]
let totalSales = 0;
for (let index = 0; index < sales.length; index++) {
    const sale = sales[index];
    totalSales += sale
}
console.log(totalSales)