class Employee1 {
  constructor(public name: string, public role: string) {}

  describe() {
    console.log(`${this.name} is a ${this.role}.`);
  }
}

class Manager extends Employee1 {
  constructor(name: string, role: string, public department: string) {
    super(name, role);
  }

  manage() {
    console.log(`${this.name} manages the ${this.department} department.`);
  }
}

const mgr = new Manager("John", "Manager", "IT");
mgr.describe();
mgr.manage();


//
class Person {
  name: string;
  age: number;

  constructor(name:string, age:number){
    this.name = name
    this.age = age
  }

  greet():void {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old`)
  }
}


const person1 = new Person ("Alice", 22)
person1.greet()


//Accesss modifiers 
class Animal {
  public name: string;
  private species: string;
  protected age:  number

  constructor(name:string, species:string, age:number) {
    this.name =name
    this.species = species
    this.age = age
  }

  public describe(): void {
    console.log(`This is a ${this.species} named ${this.name}.`)
  }
}

const dog = new Animal("Buddy", "Dog", 3);
dog.describe(); //Allowed
console.log(dog.name)