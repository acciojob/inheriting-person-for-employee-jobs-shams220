// complete this js code
class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    greet(){
        console.log(`Hello my name is ${this.name}, I am ${this.age} years old.`);
    }
}
class Employee extends Person{
    constructor(name,age,jobtitle){
        this.name = name;
        this.age = age;
        this.jobtitle = jobtitle ; 
    }
    jobGreet(){
        console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobtitle}`);
    }
}

let p = new Person("Alice",25);
p.greet()
let e = new Employee("Alice",25,"web D");
e.jobGreet()

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
