// 자료형 ()
// 변수는 자료형에 관련하여 모든 데이터일 수 있다.
// 변수는 어떤 순간에 문자열일 수 있고 다른 순간에는 숫자가 될 수 있다.

// (1) 숫자형

let a = 123;
a = 12.345;

console.log("숫자가 아님" / 2);
// 문자열을 숫자로 나누면 오류가 나온다 : NaN


// (2) 문자형

// 자바스크립트에서는 문자열을 "" 따옴표로 묶습니다.

let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;
// 역 따옴표로 변수나 표현식을 감싼 후 ${...} 안에 넣어두면 변수나 표현식을 중간에 넣을 수 있다.

let name = 'YuJin';
// 변수를 문자열 중간에 삽입
console.log(`My name is ${name}.`);

// 표현식을 문자열 중간에 삽입

console.log(`I'm ${1 + 10} years old.`);

// (3) 불린형 - true,false 두가지 값밖에 없는 자료형입니다.
let nameFieldChecked = true; // 긍정
let ageFieldChecked = false; // 부정

// 비교 결과를 저장할 때 사용된다.

let isGreater = 4 > 1;
console.log(isGreater); // 1보다 4가 크기 때문에 true

// (4) null : null만 포함되는 별도의 자료형이다.
// 자바스크립트에서는 null을 존재하지 않는 값, 비어있는 값, 알 수 없는 값을 나타낸다.
// null은 object가 아니다.


// (5) undefined : null처럼 자신만의 자료형이며 값이 할당되지 않은 상태이다.
// 이는 변수를 선언했지만 값을 할당하지 않았다면 undefined가 자동으로 할당됩니다.

let age = 100; // 100이라는 값을 할당함

age = undefined; // 값을 할당하지 않음 : undefined

console.log(age); // undefined

// * 비어있거나 알 수 없는 상태를 나타내기 위해서는 null을 사용할 것
// undefined는 값이 할당되지 않은 변수의 초기값을 위해 예약어로 남길 것

let message; // undefined
// 아무것도 하지 않은 상태 
message = null; // null
// null은 직접적으로 값이 없는 상태 

// (4) 객체 - 특수한 자료형 (object)
// 객체를 제외한 다른 자료형은 문자열이든 숫자등 한 가지만 사용할 수 있어 원시 (primitive) 자료형이라 한다.
// 객체는 복잡한 개체 - entity를 표현할 수 있다.
// 여러 속성을 하나의 변수에 저장할 수 있도록 하는 데이터 타입

// (5) typeof 연산자 - 인수의 자료형을 반환한다. 
// 자료형에 따라 처리 방식을 다르게 하고 싶다. or 변수의 자료형을 빠르게 알아내고자 할 때 사용
typeof undefined // undefined
typeof 0 // "number"
typeof 10n // bigint
typeof true // boolean
typeof "foo" // string
typeof Symbol("id") // Symbol
typeof Math // "object"
typeof null // "object"
typeof alert // "function"


let name = "Ilya";

alert( `hello ${1}` ); // hello 1

alert( `hello ${"name"}`); // hello name

alert( `hello ${name}` ); // hello Ilya