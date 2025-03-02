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
