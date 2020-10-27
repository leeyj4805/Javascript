// 자바스크립트를 선언하기 전에 사용
// 자바스크립트는 유연한 언어이다.
// ECMAScript 5 엄격모드 선언
// 에러를 잡아준다.
'use strict';

// variable- 변수
// 변경될 수 있는 값
// let (added in ES6)
// Mutable type - let

// block scope
let globalName = 'global name';
{
    let name = 'yujin';
    console.log(name);
    name = 'hello';
    console.log(name);
    // 블록 안에 내용들을 볼 수 없음
}
console.log(name);
console.log(globalName);

// var hoisting - 어디에서 선언했느냐에 상관없이 
// 항상 제일 위로 끌어올리는 것을 말함
// var (x) - 값을 선언하기도 전에 값이 나옴 
// block scope를 무시한다.
{
age = 4;
var age;
}
console.log(age);

// 3. Constant r(read only)
// 값을 할당하면 값이 변화가 되지 않는다.
// - 보안상의 이유
// - 동시에 값을 변경
// Immutable-const

const dayInWeek = 7;
const maxNumber = 5;

// note
// immutable data types : prmitive type,frozen objects 
// Mutable data types : object type
// 4. Variable types
// rw(read/write)
// primitive type- 더이상 작은 단위로 나눠질 수 없는 한가지 아이템 (값 자체가 메모리에 저장)
// number,string,boolean,null, undefiedn,symbol
// object,- 싱글 아이템을 한 박스로 묶는것 (너무 커서 ref를 통해 메모리를 가리킴)
// function 변수에 할당이 가능하다 (다른 변수에)

const count = 17; // integer - 정수 (값은 num)
const size = 17.1; // decimal number - 실수 (값은 num)
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number 

const infinity = 1 / 0; // infinity 무한대의 값
const negativeinfinity = -1 / 0; // -infinity - 무한대의 값
const nAn = 'not a number' / 2; // 스트링을 출력하게 되면 NaN 출력
console.log(infinity);
console.log(negativeinfinity);
console.log(nAn);


// bigIng (ES6)

const bigInt = 123215063101513213501350132103210531321030; // over (-2**53) ~2*53)
console.log(`value: ${bigInt}, type:${typeof bigInt}`);
Number.MAX_SAFE_INTEGER;

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; // template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
// ``백틱을 이용하면 스페이싱이나 문자열을 그대로 나오게 할 수 있다.

//boolean
// false : 0, null, undefined, NaN,''
// true: and other value

const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x = undefined;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol,동일한 스트링으로 만들어도 다른 심볼로 나타난다.
// 고유한 식별자를 사용할때 사용
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);

const gSsymbol1 = Symbol.for('id');
const gSsymbol2 = Symbol.for('id');
console.log(gSsymbol1 === gSsymbol2); // true
console.log(`value: ${symbol1.decription}, type: ${typeof symbol1}`)
// 심볼을 출력하고 싶을때는.decription을 사용한다.

// object - 물건과 물체들을 대표할 수 있는 박스 
const ellie = {name: 'ellie', age:20}; // ellie라는 오브젝트에 담음
ellie.age = 21;

// Dynamic typing : dynamically typed language
// 에러가 발생되는 경우가 많다.
// 그래서 타입스크립트가 나오게 되었다.

let text = 'hello'; // string
console.log(text.charAt(0)); // h출력
console.log(`value: ${text}, type: ${typeof text}`);
text = 1; // number
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5; // 스트링으로 변환되면서 합쳐짐
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2'; // 숫자로 변환되면서 합쳐짐
console.log(`value: ${text}, type: ${typeof text}`);
//console.log(text.charAt(0)); // 에러가 발생됨 스트링으로 인식하기 때문에

