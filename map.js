const map = new Map(); 
console.log(map);   //Map(0) {size: 0}

const map1 = new Map([['jun', '123-123'], ['woo','122-245']]);
console.log(map1);  //Map(2) {size: 2, jun => 123-123, woo => 122-245}

const map2 = new Map([1,2])  
console.log(map2);  // Iterator value 1 is not an entry object

//요소 개수 확인 
//Map.prototype.size 프로퍼티 사용
const{size} = new Map([['홍길동', '00시00동'],['철수', '00동00시']]);
console.log(size);  //2

//size 프로퍼티는 setter 함수없이 getter 함수만 존재하는 접근자 프로퍼티다. 따라서 size 프로퍼티에 숫자를 할당하여 Map 객체의 요소 개수를 변경할 수 없다.
const map = new Map([['key1', 'values1'], ['key2', 'values2']]);
console.log(Object.getOwnPropertyDescriptor(Map.prototype, 'size')); //{get: ƒ, set: undefined, enumerable: false, configurable: true}
map.size = 10; //무시됨
console.log(map.size);  //2


//map 요소를 추가할 때는 Map.prototype.set 메서드 사용한다. 
const map = new Map();
console.log(map);
map.set('junH', '123-123');      //set 사용하여 요소 추가
console.log(map);   //Map(1) {size: 1, junH => 123-123}

//삭제 

//존재하지 않은 키를 삭제하려고 하면 에러 없이 무시된다. 
const map = new Map();
map.delete('key2');
console.log(map);


//delete 메서드는 삭제 성공 여부를 불리언 값을 반환한다. set 메서드와 달리 연속적으로 호출 할 수 없다. 
const jun  = {name: 'ball'};
const kim = {name: 'pen'};
const map = new Map([[jun, 'developer'], [kim, 'designer']]);
map.delete(jun).delete(kim);  //Uncaught TypeError: map.delete(...).delete is not a function

//요소를 일괄 삭제 방법
map.clear();

//요소 순회
//Map.prototype.forEach 메서드를 사용한다. 
// 콜백 함수와 forEach 메서드의 콜백 함수 내부에서 this 로 사용될 객체를 인수로 전달한다. 3개의 인수를 전달받는다. 

//1. 현재 순회중인 요소 값
//2. 현재 순회중인 요소 키 
//3. 현재 순회 중인 Map 객체 자체 

const lee = {name:'lee'};
const kim = {name: 'kim'};
const map = new Map([[lee, 'developer'], [kim,'designer']]);
map.forEach((v,k,map)=> console.log(v,k,map)); 
