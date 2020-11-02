// 1.String concatenation
console.log('my' + 'cat');
console.log('1' + 2);
console.log(`string literals:
...
1 + 2 = ${1 + 2}`);


console.log("ellie's \n\tbook");
// \n 줄바꿈 \t tap키

// 2. Numeric operators (연산)
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder
console.log(2 ** 3); // exponentiation

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++ counter;
// counter = counter + 1; (3)
// preIncrement = counter; (3)
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`); // 3,3
const postIncrement = counter++; (3)
// postIncrement = counter; (3)
// counter = counter + 1; (4)
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`); // 3,4
const preDecrement = -- counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`); // 3,3
const postDecrement = counter--;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`); // 3,2

// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y;
x *= y;
x /= y;

// 5. Comparison operators
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal

// 6. Logical operators: || (or), && (and), !(not)
const value1 = true;
const value2 = 4 < 2;

// || (or), finds the first thuthy value

console.log(`or: ${value1||value2||check()}`);
// or연산자는 처음으로 true가 나오면 멈춘다.
// 연산을 많이 하는 check() 함수를 앞에 두게 되면 테스트 시간이 길어진다.
// 그러므로 or연산자를 사용하여 true일때 호출될 수 있도록 한다.-마지막으로 호출
// 그러므로 check() 함수를 뒤에 두는것이 좋다.

function check() {
    for (let i = 0; i < 10; i++) {
        //wasting time- 출력이 되지 않는다.
        console.log('😀');
    }
    return true;
}

// &&(and),fides the first falsy value
console.log(`and: ${value1 && value2 && check()}`);
// and연산자는 value1 && value2가 true일때만 출력이 된다.
// value1이 false라면 뒤게 true라도 출력이 되지 않는다.
// and도 무거운 함수일수록 뒤에 두는 것이 좋다.

// and는 null체크를 할 때에도 많이 사용이 된다.
if (nullableObject != null) {
    nullableObject.something;
}

function check() {
    for (let i = 0; i < 10; i++) {
         //wasting time- 출력이 되지 않는다.
         console.log('😀');
        }
        return true;
    }
// ! (not)
console.log(!value1);
//반대로 출력한다.

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == 타입을 변경해서 검사 (타입이 다르더라도 같게 나옴-정확도 떨어짐)
console.log(stringFive == numberFive);
console.log(stringFive !== numberFive);

// === 타입을 신경써서 검사 (정확)
console.log(stringFive === numverFive);
console.log(stringFive !== numverFive);

// 오브젝트를 신경써서 작업하는 것이 좋다.
//ellie1과 ellie2에는 각각 다른 ellie라는 레퍼런스가 들어있다.
// 그리고 그것은 서로 다른 오브젝트를 가리키고 있다.
// ellie3은 ellie1의 레퍼런스가 할당되어 있다. (같다.)

const ellie1 = {name:'ellie'};
const ellie2 = {name:'ellie'};
const ellie3 = ellie1;
console.log(ellie1 == ellie2);
console.log(ellie1 === ellie2);
console.log(ellie1 === ellie3);


//equality- puzzler
console.log(0 == false); // t -> 0은 false로 간주된다.
console.log(0 === false); // f-> 0은 불리언 타입이 아님
console.log('' == false); //t -> ''은 false로 간주된다.
console.log('' === false); //f ->''은 불리언 타입이 아님.
console.log(null == undefined); //t-> 같은것이다.
console.log(null === undefined);//f -> 다른 타입이다.

// 8. if ,else if,else
const name = 'yujin';
if (name === 'ellie') {
    console.log('welcome, Ellie');
} else if (name === 'coder') {
    console.log('You are amazing coder');
} else {
    console.log('unkwnon');
}

// 9.Ternary operator: ?
// condition ? value1 : value2;
// ?가 ture면 yes를 출력 아니면 : no를 출력
console.log(name === 'ellie' ? 'yes' :'no');

// 10. Switch statement

const browser = 'IE';
switch (browser) {
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('love you!');
        break;
    default:
        console.log('same all!');
        break;
}

// 11. loops
// while loop
// 3에서 0이 될때까지 반복문이 돌아간다.
let i = 3;
while (i > 0) {
    console.log(`while:${i}`);
    i--;
}

// 12. do while
// 블럭을 먼저 실행시키고 싶을 때 사용한다.
do {
    console.log(`do while:${i}`);
    i--;
} while (i > 0);

// for loop,for(한번만 실행 ; 검사 ; 스텝 )
for (i = 3; i>0; i--) {
    console.log(`for:${i}`);
}
// 블럭안에 지역변수 let을 사용하기도 한다.
for (let i = 3; i>0; i = i -2) {
    console.log(`inline variable for:${i}`);
}

for (let i = 0; i < 10;i++) {
    for(let j = 0; j < 10; j++) {
        console.log(`i: ${i}, j:${j}`);
    }
}

// Q. 0~10까지 짝수만 출력하기
for (let i = 0; i < 11; i++) {
    if(i % 2 !== 0) {
        continue;
    }
    console.log(`q1.${i}`);
}

// Q. 0~10까지 홀수만 출력하기
for (let i = 0; i < 11; i++) {
    if(i % 2 === 0) {
        continue;
    }
    console.log(`q1.${i}`);
}


// Q. 0~10까지 루프하다가 숫자 8이 나오면 그만두기

for (let i = 0; i <11; i++) {
    if (i > 8) {
        break;
    }
    console.log(`q2.${i}`);
}