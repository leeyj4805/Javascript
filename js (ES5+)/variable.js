// 자바스크립트를 선언하기 전에 사용
// 자바스크립트는 유연한 언어이다.
// ECMAScript 5 엄격모드 선언
// 에러를 잡아준다.
'use strict';

// variable- 변수
// 변경될 수 있는 값
// let (added in ES6)

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

// Constants



