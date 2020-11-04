'use strict';

// Array
// 인덱스에 해당하는 배열을 받아올 수 있다.

// 1.배열의 선언
const arr1 = new Array();
const arr2 = [1, 2];

// 2.Index position
const fruits = ['🍎','🍌'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits['0']);
console.log(fruits['1']);
console.log(fruits['2']);
console.log(fruits[fruits.length - 1]);


// 3. Looping over an array
// print all fruits
console.clear();
// a. for
for (let i = 0; i<fruits.length; i++) {
    console.log(fruits[i]);
    // 사과와 바나나 출력
}

// b.for of
for (let fruit of fruits) {
    console.log(fruit);
    // 사과와 바나나 출력
}

// c.forEach
// callback - 3가지의 인자가 들어감
// value: T, index: number, array: T[] 
// ? 파라미터를 전달해도 되고 하지 않아도 된다

fruits.forEach(function( fruit,index,array) {
    console.log(fruit, index);
    // fruit-사과,바나나 출력
    // index- 숫자 입력
});

// 화살표 함수 사용
fruits.forEach((fruit) => console.log(fruit));
    // fruit-사과,바나나 출력
    // index- 숫자 입력

// 4. Addtion,deletion,copy
// push:add an item to the end
fruits.push('🍓','🍑'); // 추가
console.log(fruits);

fruits.pop(); // 하나씩 빼기
console.log(fruits);

// unshift:add an item to the benigging
fruits.unshift('🍓','🍋'); // 추가 
console.log(fruits);
// shift: remove an item from the benigging
fruits.shift(); // 앞에서부터 데이터가 빠진다.
fruits.shift();
console.log(fruits);

// shift,unshift는 pop,push보다 느리다.
// remove an item by index position
fruits.push('🍓','🍑','🍋');
console.log(fruits);
fruits.splice(1,1); // 바나나 삭제
// 1만 넣으면 지정한 인덱스부터 모든 데이터를 지움
console.log(fruits);
fruits.splice(1,1,'🍐','🍉');
// 지우고 원하는 데이터를 넣기
console.log(fruits);

// combine twp arrays
const fruits2 = ['🍞','🍔'];
const newFruits = fruits.concat(fruits2);
// 새로 전달된 아이템을 받고 다시 리턴한다.
console.log(newFruits);

// Searching 
// indexOf- 해당 위치를 찾다
console.clear();
console.log(fruits);
console.log(fruits.indexOf('🍓'));
console.log(fruits.indexOf('🍉'));
console.log(fruits.indexOf('🍖'));
// -1 - 해당하는 값이 없을 경우 사용

// includes= 해당위치에 값이 있으면 참과 거짓을 찾는다.
console.log(fruits.includes('🍉'));
// includes- 참과 거짓을 찾는다.-t
console.log(fruits.includes('🍖'));
// -f

// lastIndexOf
console.clear();
fruits.push('🍎');
console.log(fruits);
console.log(fruits.indexOf('🍎')); // 0
// 제일 첫번째에 해당하는 값을 만나면 0을 출력
console.log(fruits.lastIndexOf('🍎'));//5
// 제일 마지막에에 해당하는 값을 만나면 
// 마지막 값을 출력