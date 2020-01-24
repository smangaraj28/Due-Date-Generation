import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Due-Date-Generation';

  constructor() {
    // const fruit = prompt('Which fruit to buy?', 'apple');
    // console.log(fruit);
    // const bag = {
    //   [fruit]: 5, // the name of the property is taken from the variable fruit
    // };
    // console.log(bag);
    // alert(bag[fruit]); // 5 if fruit="apple"
    // const obj = {
    //   for: 1,
    //   let: 2,
    //   return: 3
    // };
    // alert(obj.for + obj.let + obj.return);

    // let obj = {};
    // obj.__proto__ = 5;
    // alert(obj.__proto__);
    // const user = this.makeUser('John', 30);
    // alert(user.age); // John

    // let user = {};
    // alert( user.noSuch === undefined );

    // const codes = {
    //   '+49': 'Germany',
    //   '+41': 'Switzerland',
    //   '+44': 'Great Britain',
    //   // ..,
    //   '+1': 'USA'
    // };
    //
    // for (const code in codes) {
    //   console.log(+code);
    // }
    // let message = 'Hello!';
    // let phrase = message;
    // phrase = 'ABC';
    // console.log(message);
    // console.log(phrase);
    const user = {name: 'John'};
// user.age = 'ABC';
// conosle.log(user);
    let users = {
      name: 'ANDFKJA'
    };
    let descriptior = Object.getOwnPropertyDescriptor(users, 'name');
    console.log(descriptior);
    Object.defineProperty(users, 'age', {value: '123'});
    let descriptiors = Object.getOwnPropertyDescriptors(users);
    console.log(descriptiors);

    let user1 = {
      name: 'John',
      toString() {
        return this.name;
      }
    };

    Object.defineProperty(user1, 'toString', {
      enumerable: false
    });
    console.log(Reflect.ownKeys(user1));
// Now our toString disappears:
    for (const key in user1) {
      console.log(key);
    } // name

    // const admin = user;
    // // admin.age = 'dsad';
    // admin.name = 'Pete';
    // console.log(admin);
    // console.log(user);
    let a = {};
    let b = a;
    console.log(a === b);
    let c = {};
    let d = {};
    console.log(c === d);
  }

  // makeUser(name, age) {
  //   //   return {
  //   //     name,
  //   //     age: 8,
  //   //   };
  //   // }
}
