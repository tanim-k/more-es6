const fish = {id: 56, name: 'king hilisha', price:9000, phone:'0175666669', address:'chandpur', dress: 'silver'};
// const phone = fish.phone;
// const price = fish.price;
// const dress = fish.dress;
// const address = fish.address;
// const id = fish.id;

// shortcut
const {phone, price, dress, address, id} = fish;
console.log(phone);
console.log(phone, price);
console.log(phone, price);
console.log(phone, id);
console.log(phone, dress);
console.log(phone);
console.log(phone, address);

// use destructuring in complex case 
const company = {
    mane: 'gp',
    ceo: {
        id:1, 
        name:'ajmol', 
        food: 'fuchka'
    },
    web: {
        work:'website development',
        employee: 22, 
        framework: 'react', 
        tech:{ 
            first:'html',
            second:'css', 
            third: 'js'
        }
    },
}
// const work = company.web.work;
// const frameWork = company.web.framework;
// console.log(frameWork)
// shortcut 
const {work, framework} = company.web;
const {food} = company.ceo;
const {second, third} = company.web.tech;
console.log(work, framework, food, second, third)
