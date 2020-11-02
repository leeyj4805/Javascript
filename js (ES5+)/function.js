// 1. funtion
// 함수는 하나의 단위로 실행되는 문의 집합
// 모든 함수에는 바디가 있습니다.
// 함수 바디는 함수를 구성하는 문의 모음입니다.
// 참고 - 자바스크립트에서는 타입이 없다.
// 오브젝트의 일종이다.
function sayHello() {
    // 함수 바디는 여는 중괄호로 시작한다.

    console.log("Hello world!");

    // 닫는 중괄호로 끝난다.
}
sayHello(); // 콘솔에 Hello world!가 출력됨

// 함수를 선언 - sayHello()

function log(massage) {
    console.log(massage);
    // massage의 타입이 명확하지 않다.
}
log('Hello@');
log(1234);

// 2. parameters
// premitive 타입인 경우 메모리에 value가 그대로 저장이 되어있다.
// object의 경우 메모리에 레퍼런스가 저장이 된다.

function changeName(obj) { //changeName이라는 function은
    obj.name = 'coder';
    // 전달된 obj의 이름을 coder로 변경하는 함수
}
const ellie = {name:'ellie'};
// ellie라는 const를 정의하고
// ellie라는 오브젝트를 할당하여
// 메모리에는 ref가 들어가게 된다. 
changeName(ellie);
console.log(ellie);
// coder로 출력

// 3. Default parameters(ES6)
function showMessage(message,from ='unknown') {
    console.log(`${message} by ${from}`);
    // message에는 값이 전달되었지만
    //from에는 값이 전달되지 않아 undefined
}
showMessage('Hi!');

// 4. Rest parameters(added in ES6)
// 배열 형태로 전달이 된다.
function printAll(...args) {
    // 3개의 값이 담겨있는 배열이 ...arg이다.
    for (let i = 0; i < args.length;i++) {
        console.log(args[i]);
    }
    // type 2
    for (const arg of args) {
        console.log(arg);
    }
}
printAll('dream','coding','ellie');
// printAll이라는 함수를 호출할때 
// 'dream','coding','ellie'이라는 인자를 전달함

// 5. Local scope
// 밖에서는 안이 보이지 않고
// 안에서만 밖을 볼 수 있다.
let globalMessage = 'global'; // global variable
function printMessage() {
    let message = 'hello';
    console.log(message); //local variable
    console.log(globalMessage);
    // 자식은 부모에게 정해진 메세지를 확인할 수 있다.
    // 자식 안에 정의된 값을 부모에게 볼 수는 없다.
    function printAnoter() {
        let childMessage = 'hello';
    }
    //  console.log(childMessage);// error
    return undefined; // 생략이 가능
}
// 블럭 안에서는 보이지 않는다. -지역변수
printMessage();

// 6. Return a value
function sum(a,b) {
    // 함수에서는 값(a,b)을 파라미터로 전달 받으면서 
    return a + b;
    // 계산된 값을 return 할 수 있습니다.
}
const result = sum(1,2); // 3
// sum이라는 함수를 호출하게 되면
// 1 + 2 를 더해 3이 나옴
console.log(`sum: ${sum(1,2)}`);

// 7. Early return,early exit
// bad
function upgradeUser(user) {
    if (user.point > 10) {
        // long upgrade logic...
        // 블럭 안에서 코드를 작성하면
        // 가독성이 많이 떨어진다.
    }
}

function upgradeUser(user){
    if(user.point <= 10) {
        return; // 조건이 맞지 않은 경우 함수를 종료
    }
   // long upgrade logic... // 조건이 맞는 경우 필요한 로직을 실행
}

// Function expression

const print = function () { // anonymous funtion
    //  function()함수를 선언함과 동시에 print라는 함수에 할당
    console.log('print');
}
print(); // print 출력
const printAgain = print;
printAgain(); // print 출력
const sumAgain = sum;
console.log(sumAgain(1,3)); // 4 출력


// Callback function
// printYes,printNo function함수를 파라미터에 전달해서
// 상황이 맞으면 부르는 것을 말한다.
function randomQuiz(answer,printYes,printNo) {
    if (answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}

// anonymous funtion
const printYes = function() {
    console.log('yes!');
};
// named funtion
// 디버깅을 할 때 함수의 이름이 나올 수 있도록 하기 위해 
const printNo = function print() {
    console.log('no!');
    print();// 함수가 안에서 호출되도록 함 (계속 돌아감)
};
randomQuiz('wrong',printYes,printNo);
randomQuiz('love you',printYes,printNo);

// Arrow function
// anonymous funtion
const simplePrint = function() {
    console.log('simplePrint');
};

// Arrow function
const simplePrint =() => console.log('simplePrint');
const add = (a,b) => a + b;
const simpleMultiply = (a,b) => {
    // do something more
    return a * b;
};

// IIFE - 함수를 바로 실행하고 싶을 때 사용한다.
(function hello() {
    console.log('IIFE');
})();