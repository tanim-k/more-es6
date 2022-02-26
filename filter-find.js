const numbers = [23,45,5,66,77,55,33];
const bigNmubers = numbers.filter(number => number > 10);
const smallNmubers = numbers.filter(number => number < 60);
console.log(bigNmubers);
console.log(smallNmubers);

// practice
const products = [
    {name:'watter bottle',price: 50, color:'yellow'},
    {name:'mobile',price:19000, color: 'black'},
    {name:'watch',price:400, color:'pink'},
    {name:'notes',price:40, color:'red'},
    {name:"tetul",price:10, color:'black'},
]
const expensive = products.filter(product => product.price>400 );
console.log(expensive);
const blacks = products.filter(product => product.color == 'black');
console.log(blacks)
const whiteItem = products.find(product => product.color == 'pink');
console.log(whiteItem)
