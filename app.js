/******************************************************************************
High order methods assignment

Read the assignment text CAREFULLY. 

Add comments to your code that briefly describe what your code does.

You are provided an object array that represent products for an online store.

Your tasks are:

1. Use .filter() to extract all products that cost less than 200

2. Use .map() to make a list that only contain the product names

3. Use a chained combination of .filter() and .map() to list only
the names of all products in a specific category (e.g. 'electronics')

4. Use .some() to check if there are any products that cost more than 1000

5. Use .reduce() to find the total cost of all the products.

******************************************************************************/

const products = [
  { name: "Smartphone", price: 800, category: "electronics" },
  { name: "Headphones", price: 150, category: "electronics" },
  { name: "Coffee Maker", price: 100, category: "home appliances" },
  { name: "Blender", price: 250, category: "home appliances" },
  { name: "Laptop", price: 1200, category: "electronics" },
  { name: "T-shirt", price: 50, category: "clothing" },
  { name: "Sneakers", price: 300, category: "clothing" },
];

//Nr1. Produkt koster mindre enn 200; ved brukt av .filter
const cheapProducts = products.filter((item) => item.price < 200);
console.log("Disse produkt koster mindre enn 200 👍", cheapProducts);

//Nr2. Liste kun med produkt Navn; ved brukt av .map
const allProductNames = products.map((list) => list.name);
console.log("Dette er kun produkt Navn", allProductNames);

//Nr3. Kun Electronics item ; ved brukt av .filter og .map
const electronicsNames = products
  .filter((item) => item.category === "electronics")
  .map((product) => product.name);
console.log("Dette er kun electronic vare 💻", electronicsNames);

//Nr4. Produkt koster mer enn 1000 ved brukt av .some
const bestProducts = products.some((expensive) => expensive.price > 1000);
console.log("Dette produkter koster mer enn tusen 😉", bestProducts);

//Nr5. Totalt pris for alle produkter ved brukt av .reduce
const totalPrices = products.reduce((all, item) => all + item.price, 0);
console.log("Her er totalt pris for alle produkter 😎", totalPrices);
