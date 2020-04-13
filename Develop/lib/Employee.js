// TODO: Write code to define and export the Employee class
class Employee {

    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    /*printInfo() {
        console.log(`name: ${this.name}`);
        console.log(`id: ${this.id}`);
        console.log(`email: ${this.email}`);
    }*/
    
    //create functions for name, id, email
    getName() {
        return this.name    
    }

    getId() {
        return this.id
    }

    getEmail() {
        return this.email
    }

    getRole() {
        return "Employee"
    }

}

module.exports = Employee;


//create functions or methods, need to create functions to get the name ID & Email. Last one is returning the string for employee