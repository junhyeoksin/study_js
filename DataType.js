//----------------원시 타입과 객체타입으로 구분----------------
//원시타입 : 변경불가능한 값
//객체(참조)타입의 값: 변경가능한 값

const o = {}; // const 키워드를 사용해 선언된 변수는 재할당 금지된다. 상수는 재할당이 금지된 변수이다.
                // const 키워드를 사용해 선언한 변수에 할당한 원시값(상수)는 변경 X
                // 하지만 const 키워드를 사용해 선언한 변수에 할당한 객체는 변경 O
o.a = 1;
console.log(o); //{a:1}


//----------------문자열과 불변성----------------
var str = 'Hello';
str = 'world';          // 다른 메모리에 생성, str이 가리킨다.
console.log(str );   //world


//----------------유사 배열 객체 ----------------
var str = 'string';

// 문자열은 유사 배열이므로 배열과 유사하게 인덱스 사용해 문자에 접근
console.log(str[0]);
// 원시 값인 문자열이 객체처럼 동작 !
console.log(str.length);        //6
console.log(str.toUpperCase);   //STRING

//----------------값에 의한 전달---------------
var score = 80;
var copy = score;
console.log(score);  // 80
console.log(copy);  // 80

score = 100;    
console.log(score);  // 100
console.log(copy);  // 80           //score 변수와 copy 변수의 값 80은 다른 메모리 공간에 저장된 별개의 값이다. 따라서 score 변수의 값을 변경해도
                                    // copy 변수의 값에는 영향을 받지 않는다.



//----------------얕은 복사---------------     한단계까지만 복사, 객체를 할당한 변수를 다른 변수에 할당하는 것                              
const o = {x: {y:1}};

const c1 = {...o};
console.log(c1 === o); //false
console.log(c1.x === o.x);  //true



const ox = { x: 1};
const c2 = ox;
console.log(c2 === ox);  //true


//----------------깊은 복사---------------     겍체에 중첩되어 있는 객체까지 모두 복사, 원시 값을 할당한 변수를 다른 변수에 할당하는 것

const v = 1;
const c3= v;
console.log(c1 === v); //true

