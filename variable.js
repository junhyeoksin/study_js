function foo() {
  var x = "local";
  console.log(x);
  return x;
}
foo(); //local
// console.log(x); - ReferenceError: x is not defined

var x = "global"; // 전역변수
function foo1() {
  console.log(x); //지역변수 :  undefined
  var x = "local";
}
foo1();
console.log(x); //global

var x = 1;
var x = 2;
var x = 3;
console.log(x); // 전역변수 값이 중복되면 재할당 이뤄진다.

//즉시 실행함수
// 모든  코드를 즉시 실행함수로 감싸면 모든 변수는 즉시 실행함수의 지역변수가 된다.
(function () {
  var foo3 = 10; //즉시실행 함수의 지역변수
})();
// console.log(foo3); //foo3 is not defined

// 네임스페이스 객체

var MYAPP = {}; //전역 네임스페이스 객체
MYAPP.name = "Lee";
console.log(MYAPP.name); //Lee

var Counter = (function () {
  var num = 0;
  return {
    increase() {
      return ++num;
    },
    decrease() {
      return --num;
    },
  };
})();
//private 변수는 외부로 노출되지 않는다.
//console.log(Counter.num()); //undefined
console.log(Counter.increase());
console.log(Counter.increase());
console.log(Counter.decrease());
console.log(Counter.decrease());

//es6모듈
// ES6 모듈을 사용하면 전역변수를 사용할 수 없다. 파일 자체의 독자적인 모튤 스코프를 제공한다.
