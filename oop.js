"use strict";
// //Object oriented programming
// class point {                 //type ki trah use hota h jise hm multiple time use kr skty hn
//     //this={} empty object
//     x !: number;  //agr type na do to ye khud type infer krdega
//     y !: number; //constructor func use k baad yaha value den ya na de marzi h aapki
//     //this {                   automatically ak object bana deta h back-end mn
//     //     x = 10;
//     //     y: 20;
//     // }
//     //jb ham class func ko call krty hn to instructor func automaticaly ban jata h back ground mn
//     //constructor func mn ham new value pass kra skty hn jo class func mn assign hogi jese point(20,10) func mn
//    constructor (x: number, y: number) {  //instructor function 
//     this.x = x,
//     this.y = y;
//    }
// }
// const pt = new point(20,10);                   //new hamen ak function objct bana ky de raha h 
// const pt1 = new point(30,40);
// console.log(pt)//phely class mn jo thi wo value use ho rahi thi ab constructor func wali use hogi
// console.log(pt1);// {x: 10, y: 20}           //ak hi class func multiple time use kr skty hn
// console.log(`${pt.x}, ${pt1.y}`);//10,20
// class food {
//   a !: string;
//   b !: string;
//         constructor (a: string, b: string) {
//             this.a = a;
//             this.b = b;
//         }
// }
// const a1 = new food("qeema","kabab");
// const a2 = new food("subzi","karahi");
// console.log(a1);
// console.log(a2);
// console.log(`${a1.a}, ${a2.b}`);
class Person {
    constructor() {
        this.name = "shairy Mashriq Dr.Allama Iqbal";
        this.id = 23;
    }
}
const printans = new Person();
console.log(printans);
class student {
    constructor() {
        console.log(this);
    }
}
let printthis = new student();
class day {
    constructor(totalyears, monthdays) {
        this.years = totalyears;
        this.days = monthdays;
    }
}
const dayz = new day(12, 7);
console.log(dayz);
class Greetings {
    constructor(name) {
        this.name = name;
    }
    greet() {
        //this.name = "Script"
        console.log("Hello", this.name);
    }
}
let greeter = new Greetings("Script");
greeter.greet();
//console.log(greeter.greet());
//Overloads
// class Burger {
//     constructor(a: Number, b:string); 
//     constructor(c: string); 
//     constructor(a: any, b: any): any {
//     }
// }
// const fries = new Burger("")
class shagird {
    constructor(name) {
        this.name = name;
    }
}
const shanakht = new shagird("Irfan");
console.log(shanakht);
class Teacher extends shagird {
    constructor(name, grade) {
        super(name);
        this.grade = grade;
    }
}
const sirSalary = new Teacher("SirZia", 1234);
console.log(sirSalary);
class Ustaad {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
}
const paghar = new Ustaad("zia", 1000000);
console.log(paghar);
