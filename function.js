//f(x,y) = x + y
function add(x, y) {
  return x + y;
}
add(2, 5);
//--------------함수정의---------------
function add(x, y) {
  return x + y;
}
//--------------함수호출--------------
var result = add(2, 5);
console.log(result); //7
//--------------------------------------

// 변수에 함수 리터럴을 할당
var f = function add(x, y) {
  return x + y;
};

//--------------함수 선언문--------------
function add(x, y) {
  return x + y;
}
//함수 참조    console.dir 은  console.log 와 달리 함수 객체의 프로퍼티까지 출력
console.dir(add); // ƒ add(x,y)
console.log(add(2, 5)); //7

//함수 선언문은 함수 이름을 생략할 수 없다.
//function(x,y) {   // SyntaxError
//  return x + y;
//}
function add(x, y) {
  return x + y;
}

//함수 선언문은 표현식이 아닌 문으로 변수에 할당할 수 없다.
var add = function add(x, y) {
  return x + y;
};
//함수 호출
console.log(add(2, 5)); //7

//가명 함수 리터럴을 단독으로 사용하면 함수 선언문으로 해석된다.
//함수 선언문에서는 함수 이름을 생략할 수 없다.
function foo() {
  console.log("foo");
}
foo(); //foo

//함수 리터럴을 피연산자로 사용하면 함수 선언문이 아니라 함수 리터럴 표현식으로 해석된다.
// 함수 리터럴에서는 함수 이름을 생략할 수 있다.
(function bar() {
  console.log("bar");
});
bar(); // referenceError: bar is met defined

//---------------------식별자, 함수이름  비교하기 ------------------------------
//함수는 함수이름으로 호출하는 것이 아니라 함수 객체를 가리키는 식별자로 호출된다.
//함수 선언문으로 선언한 함수를 호출한 것은 이름 add 가 아니라 자바스크립트 엔진이 암묵적으로
//생성한 식별자 add 인 것이다. 함수 이름과 변수 이름이 일차하므로 함수 이름으로 호출되는 듯하지만
// 사실은 식별자로 호출된 것이다.

var add = function add(x, y) {
  return x + y;
};
console.log(add(2, 5)); //함수 객체를 가리키는 식별자로 호출

function add(x, y) {
  return x + y;
}
console.log(add(2, 5)); //함수이름으로 호출

//함수선언문에서 함수를 호출할 때는 함수 이름이 아니라 함수 객체를 가리키는 식별자를 사용해야 한다. 함수 이름은 함수 몸체 내부에서만
//유효한 식별자이므로 함수 이름으로 함수를 호출할 수 없다.

var add = function foo(x, y) {
  return x + y;
};
console.log(add(x, y));
//console.log(foo(x,y);  foo is not defined

//------------------------------함수 표현식 ----------------------------
// 객체 : 일급객체 - 함수를 값처럼 자유롭게 사용
// 함수 리터럴로 생성한 함수 객체를 변수에 할당할 수 있다.

var add = function (x, y) {
  //함수 리터럴의 함수이름은 생략할 수 있다. = 익명함수
  return x + y;
};
console.log(add(2, 5));

// 함수 선언문 =  "표현식이 아닌 문"
// 함수 표현식 = "표현식인 문"
// 자바스크립트 엔진은 함수 선언문의 함수 이름으로 식별자를 암묵적 생성하고 생성된 함수 객체를 할당하므로
// 함수 표현식과 유사하게 동작하는 것처럼 보이+*지만 실제로 동일하지 않는다.

//-----------------함수 생성시점과 함수 호이스팅 -----------------
// 함수 호이스팅 : 함수 선언문이 코드의 선두로 끌어 올려진 것처럼 동작하는 자바스크립트의 고유 특징

//함수 참조
console.dir(add);
console.dir(sub);
//함수 호출
console.log(add(2, 5)); //7
console.log(sub(2, 5)); //TypeError
//함수 선언문
function add(x, y) {
  return x + y;
}
//함수 표현식  ( 변수 선언문)
var sub = function (x, y) {
  return x - y;
};
//함수 선언문으로 정의한 함수는 함수선언문 이전에 호출 가능
//함수 표현식으로 정의한 함수는 삼수표현식 이전에 호출 불가능
//  * 함수 선언문으로 정의한 함수와 함수 표현식으로 정의한 함수의 생성 시점이 다르기 때문이다.

// ----------------- Function-----------------
var add1 = (function () {
  var a = 10;
  return function (x, y) {
    return x + y + a;
  };
})();
console.log(add1(1, 2)); //13

//화살표 함수 - 생성자로 사용 x , 기존함수와 this 바인딩 방식이 다름, 프로퍼티가 없음, arguments 객체 생성 x
let add1 = (x, y) => x + y;
console.log(add1(2, 5)); //7

var add = function (x, y) {
  return x + y;
};
console.log(add(2, 5));

//함수 호출
function add(x, y) {
  return x + y;
}
//인수 1과 2가 매개변수 x와 y에 순서대로 할당되고 함수 몸체의 문들이 실행된다.
var result = add(1, 2); //x 와 y 에 순서대로 할당되고 함수 몸체의 문들이 실행된다.

function add(x, y) {
  console.log(x, y); //2,5
  return x + y;
}
add(2, 5); //7
console.log(add(2)); //NaN

function add(x, y) {
  return x + y;
}
console.log(add(2, 5, 10)); //7  //초과된 인수는 버려짐

//-------------인수확인-------------------
function add(x, y) {
  return x + y;
}
console.log(add(2)); //NaN
console.log(add("a", "b")); //'ab'

// 자바스크립트 함수는 매개변수와 인수의 개수가 일치하는지 확인하지 않는다.
// 자바스크립트는 동적 타입 언어다. 따라서 자바스크립트 함수는 매개변수의 타입을 사전에 지정할 수 없다.
function add(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    throw new TypeError("인수는 모두 숫자 값이어야 합니다. ");
  }
  return x + y;
}
console.log(add(2)); //TypeError : 인수는 모두 숫자 값이어야 한다.
console.log(add("a", "b")); //TypeError : 인수는 모두 숫자 값이어야 한다.

// jQuery 의 ajax메서드에 객체를 인수로 전달하는 예
//객체를 인수로 사용하는 경우 프로퍼티 키만 정확히 지정하면 매개변수의 순서를 신경쓰지 않아도 된다. 주의할 것은 함수 외부에서 함수 내부로 전달한 객체를 함수 내부에서
// 변경하면 함수 외부의 객체가 변경되는 부수 효과가 발생한다.
// $.ajax({
//   method: 'Post',
//   url: '/user',
//   data: {id:1, name:'Lee'},
//   cache: false
// });

//-----------------반환문---------------------
function multiply(x, y) {
  return x * y; //반환문
}
//함수 호출은 반환값으로 평가된다.
var result = multiply(1, 5);
console.log(result);

function foo() {
  //반환문을 생략하면 암묵적으로 undefined 가 반환된다.
}
console.log(foo); //undefined

//-*---------참조에 의한 전달과 외부 상태의 변경 -----------------
function changeVal(primitive, obj) {
  primitive += 100;
  obj.name = "Kim";
}
//외부 상태
var num = 100;
var person = { name: "Lee" };

console.log(num); //100
console.log(person); //  { name: 'Lee'}

//원시 값은 값 자체가 복사되어 전달되고 객체는 참조 값이 복사되어 전달된다.
changeVal(num, person);
//원시 값은 원본이 훼손되지 않는다.
console.log(num); //100
// 객체는 원본이 훼손된다.
console.log(person); //{name: "Kim"}

//---------------다양한 함수의 형태---------------
//1. 즉시 실행 함수  : 함수 정의와 동시에 즉시 호출되는 함수 - 익명함수와 사용하는 것이 일반적
(function () {
  var a = 3;
  var b = 5;
  return a * b;
})();
//익명함수
// (function(){

// }());

//즉시 실행 함수도 일반 함수처럼 값을 반환
var res = (function () {
  var a = 3;
  var b = 5;
  return a * b; //15
})();
console.log(res);
//즉시 실행 함수에도 일반 함수처럼 인수를 전달 할 수 있다.
res = (function (a, b) {
  return a * b;
})(3, 5);
console.log(res); //15

//-----------------------재귀 함수 ---------------------------
function countdown(n) {
  for (var i = n; i >= 0; i--) console.log(i);
}
countdown(10);
//위의 반복문을 재귀함수로 사용
function contdown(n) {
  if (n < 0) return;
  console.log(n);
  countdown(n - 1); //재귀 호출
}
countdown(10);

function factorial(n) {
  //탈출 조건: n이 1이하일 때 재귀호출을 멈춘다.
  if (n <= 1) return 1;
  //함수를 가리키는 식별자로 자기자신을 재귀 호출
  return n * factorial(n - 1);
}
console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(2)); // 2
console.log(factorial(3)); // 6
console.log(factorial(4)); // 24
console.log(factorial(5)); //120

function factorial(n) {
  if (n <= 1) return 1;
  var res = n;
  while (--n) res *= n;
  return res;
}
console.log(factorial(0)); //1
console.log(factorial(1)); //1
console.log(factorial(2)); //2
console.log(factorial(3)); //6
console.log(factorial(4)); //24
console.log(factorial(5)); //120

//---------------중첩 함수---------------------
// 중첩함수 : 함수 내부에 정의된 함수를 중첩함수 , 내부함수라 한다.
// 외부함수 : 중첩 함수는 외부함수 내부에서만 호출할 수 있다.
function outer() {
  var x = 1;
  //중첩 함수
  function inner() {
    var y = 2;
    // 외부 함수의 변수를 참조할 수 있다.
    console.log(x + y); //3
  }
  inner();
}
outer();
//-------------콜백 함수 ---------------------
function repeat(n) {
  for (var i = 0; i < n; i++) console.log(i);
}
repeat(5); //0 1 2 3 4
// repeat 함수는 매개변수를 통해 전달받은 숫자만큼 반복하여 console.log(i) 를 호출한다.

//-------------------------------------------
//콜백함수 : 함수의 매개변수를 통해 다른 함수의 내부로 전달되는 함수
//고차함수 : 매개 변수를 통해 함수의 외부에서 콜백 함수를 전달받은 함수

function repeat(n, f) {
  for (var i = 0; i < n; i++) {
    f(i); //i를 전달하면서 f를 호출
  }
}
var logAll = function (i) {
  console.log(i);
};
repeat(5, logAll); //0 1 2 3 4

var logOdds = function (i) {
  if (i % 2) log(i);
};
//반복 호출할 함수를 인수로 전달한다.
repeat(5, logOdds); //1 3
