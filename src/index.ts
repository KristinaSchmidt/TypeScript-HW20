//1
// class Animal {
//     name: string;
//     species: string;


//     constructor(name:string, species:string) {
//         this.name= name;
//         this.species = species;
//     }

//     sound(): void {
//         console.log("The animal makes a sound");
//     }
// }

// class Dog extends Animal {
//     breed:string;


//     constructor(name:string, species:string, breed:string) {
//         super(name, species);
//         this.breed= breed;
//     }

//     sound(): void {
//         console.log("The dog barks")
//     }
// }

// const animal = new Animal("Simba", "Lilly");
// animal.sound();


// const dog = new Dog("Lord", "Dog", "Labrador");
// dog.sound();








//2//
class Library {
    static totalBooks: number=0;
    name: string;

    constructor(name:string) {
        this.name= name;
        this.addBook();

    }  

    addBook(): void {
        Library.totalBooks++;
    }
}
const lib1 = new Library("Test1");
const lib2 = new Library("Test2");

lib1.addBook();
lib2.addBook();

console.log(Library.totalBooks);








//3

// class Vehicle {
//     make: string;
//     model: string;


//     constructor(make:string, model: string) {
//         this.make= make;
//         this.model= model;
//     }
// }

// class Motorcycle extends Vehicle {
//     type: string;


//     constructor(make:string, model: string, type:string) {
//         super(make, model);
//         this.type= type;
//     }
// }

// const moto = new Motorcycle("BMW", "MotoByke", "Sport");

// console.log(moto.make);
// console.log(moto.model);
// console.log(moto.type);
