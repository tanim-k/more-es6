class TeamMember {
    name;
    address;
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
}
class Support extends TeamMember {
    groupSupportTime;
    designation='support Web Dev';
    constructor(name, address, time){
        super(name, address);
        this.groupSupportTime = time;
    }
    startSession(){
        console.log(this.name, 'start a support session');
    };
};
class StudentCare extends TeamMember{
    designation='care Web Dev';
    buildARoutine(student){
        console.log(this.name, 'build a routine', student)
    }
}
// neptun class 
class NeptuneDev extends TeamMember {
    codeEditor;
    designation='neptune app Dev';
    constructor(name, address, editor){
        super(name, address)
        this.codeEditor = editor;
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
const bash = new NeptuneDev('bash', 'gram', 'android studio');
bash.releseApp('1.5.76');
console.log(bash);
