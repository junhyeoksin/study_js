var person = {
  name: "Lee", //프로퍼티
  age: 20, //프로퍼티
};

var counter = {
  num: 0, //프로퍼티
  increase: function () {
    //메서드
    this.num++;
  },
};

var person = {
  name: "Lee",
  sayHello: function () {
    console.log("hello! My name is ${this.name}");
  },
};
console.log(typeof person); //object
console.log(person); ///{name: "Lee", sayHello: f}

var empty = {}; //빈객체
console.log(typeof empty); //object

//프로퍼티 - 객체는 프로퍼티의 집합이며 프로퍼티는 키와 값으로 구성
var person = {
  //프로퍼티 키는 name, 프로퍼티 값은 'Lee'
  name: "Lee",
  //프로퍼티 키는 age, 프로퍼티 값은 20
  age: 20,
};

var person = {
  firstName: "Ung-mo", //식별자 네이밍 규칙을 준수하는 프로퍼티 키
  "last-name": "Lee", //식별자 네이밍 규칙을 준수하지 않은 프로퍼티 키
};
console.log(person); //{firstName: "Ung-mo", last-name:"Lee"}

var person = {
  firstName: "Umg-mo",
  //last-name: 'Lee'  에러 발생
};

var obj = {}; //빈객체
var key = "hello";
obj[key] = "world"; //{hello: "world"}
console.log(obj);

var foo = {
  name: "Lee",
  name: "son",
};
console.log("name"); //{name : "son"}

//----------------------메서드----------------------
//프로퍼티 값이 함수일 경우 일반함수와 구분하기 위해 메서드라 부른다. 메서드는 객체에 묶여 있는 함수를 의미
var circle = {
  radius: 5, //프로퍼티
  //원의 지름
  getDiameterL: function () {
    //메서드
    return 2 * this.radius; //this는 circle 를 가리킨다.
  },
};
console.log(circle.getDiameterL()); //10

//----------------------프로퍼티 접근----------------------
//접근 방법: 마침표 프로퍼티 접근연산자(..)를 사용하는 마침표 표기법
//          :대괄호 프로퍼티 접근연산자([...])를 사용하는 대괄호 표기법

var person = {
  name: "Lee",
};
console.log(person.name); //Lee
console.log(["name"]); //Lee

var person = {
    name = 'Lee'
};
//----------------------프로퍼티값 갱신----------------------
var person ={
    'last-name' : 'Lee',
        1:10
};
 //애러 person.'last-name';
person['last-name'];

//----------------------   프로퍼티 동적생성----------------------
var person = {
    name: 'Lee'
};
person.age =20;
console.log(person);  //{name:"Lee",age:20}
//----------------------   프로퍼티 삭제----------------------
var person= {
    name= 'Lee'
};
person.age = 20;
delete person.age;

//----------------------  ES6에서 추가된 객체 리터럴의 확장기능----------------------
//프로퍼티 축약 표현
var x = 1, y= 2;
var obj = {
    x: x,
    y: y
};
console.log(obj);  //{x:1, y:2}

let x = 1, y = 2;
const obj = {x,y};
console.log(obj);  //{x:1, y:2}  -- 프로퍼티 값으로 변수를 사용하는 경우 변수 이름과 프로퍼티 키가 동일한 이름일 때 프로퍼티 키를 생략할 수 있다. 이떄 프로퍼티 키는 변수 이름으로 자동 생성된다.


//---------------------- 계산된 프로퍼티 이름----------------------

//문자열 또는 문자열로 타입 변환할 수 있는 값으로 평가되는 표현식을 사용해 프로퍼티 키를 동적으로 생성할 수 있다. 단, 프로퍼티 키로 사용할 표현식을 대괄호([...])로 묶어야 한다.
var prefix = 'prop';   //프로퍼티
var i = 0;              //프로퍼티

var obj = {};
//계산된 프로퍼티 이름으로 프로퍼티 키 동적 생성
obj[prefix + '-' + ++i] = i; //1
obj[prefix + '-' + ++i] = i; //2
obj[prefix + '-' + ++i] = i; //3
console.log(obj);  //  {prop-1: 1, prop-2: 2, prop-3: 3}


//객체 리터럴 내부에서 계산된 프로퍼티 이름으로 프로퍼티 키를 동적 생성
const prefix = 'prop';
let i = 0;

const obj = {
    [`${prefix}-${++i}`]: i, 
    [`${prefix}-${++i}`]: i,
    [`${prefix}-${++i}`]: i,
}
console.log(obj);   //{prop-1: 1, prop-2: 2, prop-3: 3}

