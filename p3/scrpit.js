class Employee {
    constructor(name, role) {
        this.name = name;
        this.role = role;
        console.log(`Welcome, ${this.name}! You are an ${this.role}.`);
    }
}

const newEmployee = new Employee('Alice', 'Software Engineer');
