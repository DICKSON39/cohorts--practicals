"use strict";
class Employee1 {
    constructor(name, role) {
        this.name = name;
        this.role = role;
    }
    describe() {
        console.log(`${this.name} is a ${this.role}.`);
    }
}
class Manager extends Employee1 {
    constructor(name, role, department) {
        super(name, role);
        this.department = department;
    }
    manage() {
        console.log(`${this.name} manages the ${this.department} department.`);
    }
}
const mgr = new Manager("John", "Manager", "IT");
mgr.describe();
mgr.manage();
//
