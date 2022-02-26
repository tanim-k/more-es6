class Support {
    name;
    designation='support Web Dev';
    address = 'bd';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    startSession(){
        console.log(this.name, 'start a support session');
    };
};
const amir = new Support('amir khan','bd');
const salman = new Support('salman khan','dubai');
const sharuk = new Support('sharuk khan','mumbai');
amir.startSession();
salman.startSession();
sharuk.startSession();
// console.log(amir, salman, sharuk);