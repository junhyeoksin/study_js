//내부 슬롯과 내부 메서드
const o = {};
// o.[[Prototype]]  에러 발생
o.__proto__;

// // 프로퍼티 어트리뷰트와 프로퍼티 디스크립터 객체
// const person = {
//   name: "Lee",
// };
// // console.log(Object.getOwnPropertyDescriptor(person, "name"));
// //{value: 'Lee', writable: true, enumerable: true, configurable: true}
// person.age = 20;
// console.log(Object.getOwnPropertyDescriptor(person));

//접근자 프로퍼티
const person = {
  firstName: "jun",
  listName: "sin",

  get fullName() {
    return ` ${this.firstName} ${this.listName}`;
  },
  set fullName(name) {
    [this.firstName, this.listName] = name.split(" ");
  },
};
console.log(person.firstName + " " + person.listName); //jun sin
person.fullName = "pack soo"; //값을 저장하면 setter 함수가 호출된다.
console.log(person); //{firstName: 'pack', listName: 'soo', fullName: <accessor>}
console.log(person.fullName); // pack soo

let descriptor = Object.getOwnPropertyDescriptor(person, "firstName"); //{value: 'pack', writable: true, enumerable: true, configurable: true}

console.log(descriptor);
descriptor = Object.getOwnPropertyDescriptor(person, "lastName");
console.log(descriptor); //undefined
descriptor = Object.getOwnPropertyDescriptor(person, "fullName"); // {get: ƒ, set: ƒ, enumerable: true, configurable: true}
console.log(descriptor);
