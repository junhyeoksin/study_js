// scope 스코프 (유효범위)

function add(x, y) {
  //매개변수는 함수 몸체 내부에서만 참조 할 수 있다.
  // 즉, 매개변수의 스코프(유효범위)는 함수 몸체 내부다.
  console.log(x, y);
  return x + y;
}
add(2, 5);

var var1 = 1; //코드의 가장 바깥 영역에서 선언한 변수
if (true) {
  var var2 = 2; //코드 블록 내에서 선언한 변수
  if (true) {
    var var3 = 3; //중첩된 코드 블록 내에서 선언한 변수
  }
}
function foo() {
  var var4 = 4; //함수내에서 선언된 변수

  function bar() {
    var var5 = 5; //중첩된 함수내에서 선언된 변수
  }
}
console.log(var1); //1
console.log(var2); //2
console.log(var3); //3
//console.log(var4); //Uncaught ReferenceError: var4 is not defined
//console.log(var5); //Uncaught ReferenceError: var5 is not defined

var x = "global";
function foo1() {
  var x = "local";
  console.log(x); //1
}
foo1(); //local
console.log(x); //global

// var 키워드로 선언한 변수의 중복 선안
function foo2() {
  var x = 1;
  var x = 2;
  console.log(x);
}
foo2(); //2

// //let const 키워드로 선언된 변수는 같은 스코프내에서 중복 X
// function bar2() {
//   let x = 1;
//   let x = 2;
// }bar2()


// C 나 자바 등은 모든 코드블록이 지역스코프를 만든다. : 블록 레벨 스코프 (let , const)

// 함수 레벨 스코드
// var 키워드로 선언된 변수는 함수의 코드 블록(함수몸체) 만을 지역스코프로 인정한다. 아래의 코드를 보겠다.

var ex = 1;
if (true) {
  var ex = 10;
}
console.log(ex); //10

// 렉시컬 스코프
var x = 1;
function foo() {
  var x = 10;
  bar();
}
function bar() {
  console.log(x);
}
foo();
bar();
