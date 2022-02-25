// declare variable based on the name of an abject property
const myObject = {x:2, y:3, z:120, a:34, b:67};
const {x, b, a, z} = myObject;
console.log(z)

// destructuring array 
const [p, q] = [23, 34, 45, 445];
console.log(p, q)

// object destructuring finally 
const {sky, soil, color} = {sky:'blue', soil:'matti', color: 'red'}
console.log(sky, soil, color);

// complex
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
console.log(company.web.tech.third);