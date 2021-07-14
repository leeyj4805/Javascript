// 형 변환
// 연산자에 전달되는 값은 적절한 자료형으로 자동 변환되는데 이것을 말한다.

// (1) 문자형으로 변환
// 문자형의 값이 필요할때 일어난다.

let value = true;
alert(typeof value); // boolean

value = String(value); // 변수 value에는 문자열 
alert(typeof value); // string

// (2) 숫자형으로 변환

alert("6" / "3"); // 문자열이 숫자형으로 자동변환 된 후 연산이 수행됩니다.

let str = "123";
alert(typeof str); // string

let num = Number(str); // 문자열인 '123'이 숫자 123으로 변환 (형변환)

alert(typeof num);// number

// 숫자형 값 이외에 글자가 들어있는 문자열을 숫자로 변환하고자 한다면 NaN이 됩니다.
let age = Number('문자열 123');
alert(age); // NaN, 형 변환이 실패합니다.

alert(Number("123"));// 123
alert(Number("123z")); // NaN ('z를 숫자로 변환하는데 실패')
alert(Number(true)); // 1
alert(Number(false)) // 0

// (3) 불린형으로 변환

// 숫자 0, 빈 문자열, null,undefined,NaN과 같이 직관적으로 비어있다고 느껴지는 값은 false
// 나머지는 true

alert(Boolean(1)); // true
alert(Boolean(0)); // false

alert(Boolean("hello")); // true
alert(Boolean("")); // false