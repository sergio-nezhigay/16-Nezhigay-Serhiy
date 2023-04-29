class Man {
  constructor(name, age = "unknown") {
    this.name = name;
    this.age = age;
  }
  showInfo() {
    console.log(`a person with name ${this.name} and ${this.age} years old`);
  }
}

class Car {
  constructor(brand, model, year, number) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.number = number;
  }
  owner;
  setOwner(person) {
    if (person.age > 18) this.owner = person;
    else
      console.log(
        `this person (${person.name}) can't own car due to the age (should be at least 18 years)`
      );
  }
  carInfo() {
    console.log(
      `this car info: brand ${this.brand}, model ${this.model}, year ${this.year}, number ${this.number}`
    );
    if (this.owner) {
      console.log("The owner is:");
      this.owner.showInfo();
    }
  }
}

const person1 = new Man("Peter", 21);
const person2 = new Man("Mary", 27);
const person3 = new Man("Batman");

person1.showInfo();
person2.showInfo();
person3.showInfo();

const car1 = new Car("Mers", "S500", 1970, "ER2050");
const car2 = new Car("Ferrary", "A1", 2022, "TR5066");
car1.setOwner(person1);
car2.setOwner(person3);
car2.setOwner(person1);
car2.setOwner(person2);
car1.carInfo();
car2.carInfo();
