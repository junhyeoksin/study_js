//new 연산자
function createUser(name, role) {
  return { name, role };
}
let inst = new createUser("Lee", "admin");
console.log(inst); //{name: 'Lee', role: 'admin'}

//반대로 new 연산자 없이 생성자 함수를 호출하면 일반함수로 호출된다.
function Circle(radius) {
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
}
const circle = Circle(5); //new 연산자 없이 호출시 일반함수
console.log(circle); //undefined

console.log(radius); //5
console.log(getDiameter()); //10
// new.target
function Circle(radius) {
  if (!new.target) {
    // new 연산자와 함께 호출되지 않으면 undefined
    return new Circle(radius);
  }
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
}
const circle = Circle(5);
console.log(circle.getDiameter()); //10
