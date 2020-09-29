// test 01

// 함수는 호출할 수 있는 자바스크립트 코드 블록으로써 매개변수를 가질 수 있다.
function plus1(x) {     // 함수 이름 plus1 ,매개변수 x
    return x+1;         //매개변수로 전달받은 값에 1을 더해서 반환
}                       // 함수는 중괄호 {}로 둘러싸여 있다.

plus1(y)                // 4 y가 3이면 plus1의 함수는 3+1을 반환한다.

var square = function(x) { // 여기서 함수는 값이 되고 변수 square에 할당된다.
    return x*x;            // 반환될 함수 값을 계산한다.
}                          // 할당문 끝을 나타낸다.

square(plus1(y))           // 16 하나의 표현식에서 함수 호출을 두번이나 사용

// test 02

// 함수는 객체의 프로퍼티로 할당할 수 있다.
// 모든 자바스크립트의 객체는 메서드를 가진다.

var a = [];                // 빈 배열을 만든다.
a.push (1,2,3);            // push() 메서드는 배열에 원소를 하나 이상 추가한다.
a.revarse();               // revarse() 메서드는 배열이 가진 원소의 순서를 역순으로 바꾼다.

// this 키워드는 메서드가 정의된 객체 자신을 가리킨다.

points.dist = function() {  // 두 점의 거리를 계산하는 메서드를 정의
    var p1 = this[0];       // 배열의 첫 번째 원소를 가리킨다.
    var p2 = this[1];       // 배열의 두 번째 원소를 가리킨다.
    var a = p2.x-p1.x;      // 두 점의 X 좌표 차이 값을 구한다.
    var b = p2.x-p1.y;      // 두 점의 Y 좌표 차이 값을 구한다.
    return Math.sqrt(a*a + b*b);    // 피타고라스  정리를 이용한다. -> Math.sqrt() 함수를 사용
}

points.dist();              // 1.414 -> 두 점 간의 거리를 구한다.

// test 03

function abs(x) {           // 절대 값을 계산하는 함수를 정의
    if (x >= 0) {           // 괄호 안에 표현식이 참이라면?
        return x;           // if 절 안에 코드를 실행
    }                       // if 절 끝을 나타낸다.
    else {                  // else절은 if절에서 사용한 표현식이 false일때 나타남 필수가 아님
        return -x;          // 각 절에 포함된 문장이 하나라면 중괄호 생략 가능
    }                       // return문은 if /else문에 포함될 수 있다.
}

function factorial(n) {     // factorial을 계산하는 함수를 정의한다.
    var product = 1;        // product값을 1부터 시작한다.
    while(n > 1) {          // {}안에 있는 문장들을 반복 실행한다.
        product *= n;       //  product = product * n; 단축 표현
        n--;                // n = n - 1의 단축 표현 
    }                       // while 루프의 끝
    return product;         // product를 반환한다.
}
factorial(5)                // 1*2*3*4*5 : 120

// test 4

// 객체를 초기화하기 위해 생성자 함수를 정의한다.
function Point(x,y) {       // 일반적으로 생성자 이름의 첫 글자는 대문자로 시작한다.
    this.x = x;             // this 키워드는 새로 생성된 객체를 가리킨다.
    this.y = y;             // 생성자로 전달된 인자는 객체의 프로퍼티로 저장됨
}                           // 값을 반환하지 않아도 된다.

// new 키워드로 객체를 생성할 때 앞에서 정의한 생성자 함수를 사용

var p = new Point(1,1);     // 2차원 좌표 (1,1)
// 생성자 함수 Point의 prototype 객체에 함수를 정의함으로써
// Point 객체에 메서드를 정의한다.
Point.prototype.r = function() {
    return Math.sqrt (      // x^2 + y^2값이 제곱근을 반환한다.
        this.x * this.x +   // this는 이 메서드가 호출된 Point 객체를 가리킨다.
        this.y * this.y
    );
}

// Point의 객체 p(뿐만 아니라 모든 Point 객체)는 메서드 r()을 상속받는다.
p.r()                      // 1.414...