class TeamMember {
    name;
    designation='support Web Dev';
    address;
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
}
class Support extends TeamMember {
    groupSupportTime;
    constructor(name, address, time){
        super(name, address);
        this.groupSupportTime = time;
    }
    startSession(){
        console.log(this.name, 'start a support session');
    };
};
class StudentCare extends TeamMember{
    buildARoutine(student){
        console.log(this.name, 'build a routine', student)
    }
}
// neptun class 
class NeptuneDev {
    name;
    designation = 'student care web dev';
    address= 'bd';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    releseApp(version){
        console.log(this.name, 'app version', version)
    }
}
const amir = new Support('amir khan','bd', '11pm');
const salman = new Support('salman khan','dubai', '6pm');
const sharuk = new Support('sharuk khan','mumbai', '1pm');

// using class 
const alia = new StudentCare('alia', 'mumbai');
console.log(amir);
