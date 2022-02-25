const friends = ['tom hanks','tom cruise','tom brady', 'tom gua'];
const flengths = friends.map(friend => friend.length);
console.log(flengths)

const products = [
    {name:'watter bottle',price: 50, color:'yellow'},
    {name:'mobile',price:19000, color: 'black'},
    {name:'watch',price:400, color:'green'},
    {name:'notes',price:40, color:'red'},
    {name:"tetul",price:10, color:'cyan'},
]
const productNames = products.map(product => product.name);
console.log(productNames);
const productPrice = products.map(product => product.price);
console.log(productPrice);
// use od for each
products.forEach(product => console.log(product))