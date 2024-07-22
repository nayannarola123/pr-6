class Person {

    createFather() {
        return new Person("Father", 60);
    }

    createChild() {
        return new Person("Child", 20);
    }
}

const person = new Person("nayan", 30);
const father = person.createFather();
const child = person.createChild();

console.log(`${father.name} is ${father.age} years old.`);
console.log(`${child.name} is ${child.age} years old.`);
  