const hubby = 'omar sani';
let phone = 'hhrte44';
phone = 'sam34 hqpo';
// template strings 
const myNotes = `i am nojnu of ${hubby}. i dont have a laili. i have a ${phone}`
console.log(myNotes);
// default parameters
function maxNumber(array = []) {
    const max = Math.max(...array);
    return max;
}  
const biggest = maxNumber();
console.log(biggest); 