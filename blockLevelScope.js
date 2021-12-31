//*  블럭레벨 스코프

// var 키워드로 중복 선언 가능
var x = 1;
var y = 1;
var x = 100;
var y;

console.log(x); //100
console.log(y); //1

// var 키워드로 선언한 변수는 오로지 함수의 코드 블록만을 지역스코프로 인정한다.
// 함수 외부에서 var 키워드로 선언한 변수는 코드 블록 내에서 선언해도 모두 전역 변수가 됨

var x1 = 1; //전역변수
if (true) {
  var x1 = 10; // 전역변수 중복선언
}
console.log(x1); //10

var i = 10;
for (var i = 0; i < 5; i++) {
  //  전역변수 i 의 중복선언
  console.log(i); //0 1 2 3 4
}
console.log(i); // 5

// 변수 호이스팅
// var 키워드로 변수를 선언하면 변수 호이스팅에 의해 변수 선언문이 스코프의 선두로 끌어 올려진 것처럼 동작.
console.log(foo);
foo = 123;
console.log(foo);
var foo; //선언문

//let 키워드
// 변수 중복 선언 금지
// var :  함수 레벨 스코프  - 런타임 전에 선언단계와 초기화 단계 실행 즉 선언문 이전에 변수를 참조 ( var 변수 식별자의 존재를 알고 즉시 초기화 단계를 거침)
// let : 블록 레벨 스코프   - 선언단계와 초기화단계가 분리되어 실행된다.

var foo2 = 456; //전역변수
{
  let foo2 = 123; //지역변수
  let bar2 = 122; //지역변수
  console.log(foo2);
}
console.log(foo2); //456
//console.log(bar2); // SyntaxError 발생

console.log("--------------------");

//const 키워드
// 상수를 선언하기 위해 사용, 하지만 반드시 상수만을 위해 사용하지는 않는다.
// 선언과 동시 초기화
//재할당 금지

//const 선언된 변수에 객체를 할당힌 경우에는 변경할 수 있다.
const foo5 = {
  name: "lee",
};
foo5.name = "Kim";
console.log(foo5);
