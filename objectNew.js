//Object 생성자 함수

//빈객체 생성
const person = new Object();

//프로퍼티 추가
person.name = "Lee";
person.sayHello = function () {
  console.log("Hi: My name is" + " " + this.name);
};
console.log(person); //{name: 'Lee', sayHello: ƒ}
person.sayHello(); //Hi: My name is Lee

//문자열
const strObj = new String("Lee");
console.log(typeof strObj);
console.log(strObj);

//숫자
const numObj = new Number(123);
console.log(typeof numObj);
console.log(numObj);

//불리언
const booleanObj = new Boolean(true);
console.log(typeof booleanObj);
console.log(booleanObj);

//배열
const arr = new Array(1, 2, 3);
console.log(typeof arr);
console.log(arr);

//함수
const func = new Function("x", "return x * x");
console.log(typeof func);
console.log(func);

//--------생성자 함수 ----------------단점: 객체 생성방식에서 하나의 객체만 생성할 수있다.
const circle1 = {
  raidus: 5,
  getDiameter() {
    return 2 * this.raidus;
  },
};
console.log(circle1.getDiameter());
const circle2 = {
  raidus: 10,
  getDiameter() {
    return 2 * this.raidus;
  },
};
console.log(circle2.getDiameter());

//---클래스처럼 생성자 함수를 사용하여 여러개 객체를 생성하기 ***--------
//this 는 객체 자신의 프로퍼티나 메서드를 참조하기 위한 자기 참조 변수다. this 가 가리키는 값, 즉 this 바인딩은
//함수 호출 방식에 따라 동적으로 결정된다. 
function Circle(radius) {
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
}
const circle1 = new Circle(5);
const circle2 = new Circle(10);

console.log(circle1.getDiameter()); //10
console.log(circle2.getDiameter()); //20

//인스턴스 생성과 this 바인딩
// 암묵적으로 빈객체 생성, 즉 인스턴스는 this에 바인딩된다. 
//바인딩: 식별자와 값을 연결하는 과정을 의미한다. 예를들어, 변수 선언은 변수이름과 메모리 공간의 주소를 바인딩하는 것이다. 

function Circle(radius){
    console.log(this); //Circle{}
    this.radius = radius;
    this.getDiameter = function(){
        return 2 * this.radius;
    };
}
