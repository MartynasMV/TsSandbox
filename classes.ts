/*
class User {
  private name: string;
  private email: string;
  private age: number;

  constructor(name: string, email: string, age: number) {
    this.name = name;
    this.email = email;
    this.age = age;
    console.log("User created: " + this.name);
  }
}
let martynas = new User("Martynas Voldemaras", "mv@.mv.com", 1);

console.log(martynas.age); //cannot be accessed because line 4 marked as private. if "public" or none is set instead that it can be accessed
 */

interface UserInterface {
  name: string;
  email: string;
  age: number;
  register();
  payInvoice();
}

class User implements UserInterface {
  name: string;
  email: string;
  age: number;

  constructor(name: string, email: string, age: number) {
    this.name = name;
    this.email = email;
    this.age = age;
    console.log("User created: " + this.name);
  }
  register() {
    console.log(this.name + " is registered");
  }
  payInvoice() {
    console.log(this.name + " payed invoice");
  }
}

class Member extends User {
  id: number;
  constructor(id: number, name: string, email: string, age: number) {
    super(name, email, age); //the constuctor of this class must have super function it will take properties its inhariting: name email, age.
    //TLDR: I do not need to repeat: this.name = name; this.email = email; this.age = age; which was done in Line 25-27
    this.id = id;
  }
  payInvoice() {
    super.payInvoice();
  }
}
let mike: User = new Member(1, "Mike", "mike@mike.com", 11);
mike.payInvoice();
