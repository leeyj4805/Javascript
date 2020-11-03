"use strict";
// class: template
// object:instance of a class
// ES6
// 이전에는 오브젝트를 만들어서 작업했다.
// prototype-based inheritance

// 1.Class declarations
class Person { // Person이라는 클래스를 만듬
    //constructor
    constructor (name,age) { // constructor라는 생성자를 만듬
        // object를 만들때 필요한 데이터를 전달함.
        //fields
        this.name = name;
        this.age = age;
        // 전달된 데이터를 할당시킴
    }
    //methods
    speak() {
        console.log(`${this.name}:hello!`);
        // this.name이란?
        // 생성자 object. name이라고 한다.
    }
}

//object
const ellie = new Person('ellie',20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

// 2. Gatter and setters
class User {
    constructor (firstName,lastName,age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age() {
        return this._age;
    }
    set age(value) {
        // if (value < 0) {
        //     throw Error ('age can not be negative');
        // } type 1 방법
        this._age = value < 0 ? 0 : value;
        // type 2 방법
    }
    // 무한정 반복된다._age로 바꿀것
}

const user1 = new User('Stive','Job',-1);
console.log(user1.age);

// 3. Fields (public,private)
class Experiment {
    publicField = 2;
    // 그냥 정의를 하게 되면 외부에서 접근이 가능하다.
    #privateField = 0;
    // 클래스 내부에서만 값이 보여지고 정보가 나타난다 
    // 클래스 외부에서는 값을 읽을수도 없고 변경할 수 없다.
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

// 4. Static- 최근에 추가된 것
class Article {
    static publisher = 'Dream Coding';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPiblisher() {
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
Article.printPiblisher();

// 5. Inheritance

class Shape{
    // Shape라는 클래스 안에 들어있는 Fields
    constructor(width,height,color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    // draw() 메소드
    draw() {
        console.log(`drawing ${this.color} color!`);
    }
    // getArea() 메소드
    getArea() {
        return this.width * this.height;
    }
} 


class Rectangle extends Shape{}
// extends라는 클래스를 이용해서 Shape를 연장함
// Shape에서 연장한 draw(),getArea()를 포함할 수 있다.
class Triangle extends Shape{
    draw() {
        super.draw();
        // 부모의 메서드를 호출함
        console.log('▲');
    }
    getArea() {
        return (this.width * this.height) / 2;
    }
    // 필요한 함수만 오버라이딩 함

    toString() {
        return `Triangle : color :${this.color}`;
    }
    //toString 오버라이딩
}
const rectangle = new Rectangle(20,20,'blue');
rectangle.draw();
console.log(rectangle.getArea());
// width * height = value
const triangle = new Triangle(20,20,'red');
triangle.draw();
console.log(triangle.getArea());

// 6. Class checking: instanceOf
console.log(rectangle instanceof Rectangle);
// rectangle의 오브젝트는 Rectangle 클래스의 인스턴스 -> true
console.log(triangle instanceof Rectangle);
// triangle의 오브젝트는 Rectangle 클래스의 인스턴스 -> False
console.log(triangle instanceof Triangle);
// triangle의 오브젝트는 Triangle 클래스의 인스턴스 -> true
console.log(triangle instanceof Shape);
// triangle의 오브젝트는 Shape 클래스의 인스턴스 -> true
console.log(triangle instanceof Object);
// triangle의 오브젝트는 Object(전체) 클래스의 인스턴스 -> true
console.log(triangle.toString());