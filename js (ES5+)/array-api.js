// Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    const result = fruits.join('|');
    // 구분자로 전달하지 않아도 string으로 전달됨
    console.log(result);
    //join(separator?: string): string; separator?라는 문자열을
    // 받기도 하고 안받기도 한다.

  }
  
  // Q2. make an array out of a string
  {
    const fruits = '🍎, 🥝, 🍌, 🍒';
    const result = fruits.split(',',2);
    console.log(result);
    // 리턴받을 배열의 사이즈를 조절할 수 있다.
    // string을 받을 수 있다.
    //split(separator: string | RegExp, limit?: number): string[];
  }
  
  // Q3. make this array look like this: [5, 4, 3, 2, 1]
  {
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse();
    //reverse()는 거꾸로 출력한다.
    console.log(result);
    console.log(array);
  }
  
  // Q4. make new array without the first two elements
  //1~2번째를 제외한 나머지 배열
  {
    const array = [1, 2, 3, 4, 5];
    const result = array.slice(2, 5);
    // 2까지 삭제하고 5전까지 출력
    // slice();-특정한 부분을 삭제할 수 있다.
    console.log(result); // [1,2]
    console.log(array); // [3,4,5]
  }
  
  class Student {
    constructor(name, age, enrolled, score) {
      this.name = name;
      this.age = age;
      this.enrolled = enrolled;
      this.score = score;
    }
  }
  const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
  ];
  
  // Q5. find a student with the score 90
  {
    const result =  students.find((student) => student.score === 90);
        //function- 콜백 함수는 boolean 함수를 리턴해야 한다.
        //(student) => student.score === 90 콜백함수를 arrow function 호출
        // return을 하다가 score가 90점일 경우 출력한다.
        console.log(result);
        // result에서 원하는 값이 출력
        // Student {name: "C", age: 30, enrolled: true, score: 90}
  } 
  // Q6. make an array of enrolled students -t
  {
    const result = students.filter((student) => student.enrolled);
    console.log(result);
    //filter<S extends T>(predicate: (value: T, index: number, array: T[]) => value is S, thisArg?: any): S[];
    // 콜백 함수만 t일 경우 배열을 출력
  }
  
  // Q7. make an array containing only the students' scores
  // result should be: [45, 80, 90, 66, 88]
  {
      const result = students.map((student) => student.score);
      console.log(result);
      // map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[];
      // 배열안에 들어있는 요소 한가지 한가지를 다른 요소로 변환
  }

  // Q8. check if there is a student with the score lower than 50
  {
      console.clear();
      const result = students.some((student) => student.score < 50);
      console.log(result);
       //some(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): boolean;
      // 콜백 함수중에 리턴이 되는 함수가 있는지 없는지 확인해주는 것
      const result2 = !students.every((student) => student.score >= 50);
      console.log(result2);
      console.log(!true); // false
      // every는 모든 요소들이 이 조건을 충족해야지만 True가 출력됨
     
  }
  console.clear();
  // Q9. compute students' average score - 평균점수
    {
    const result = students.reduce((prev,curr) => prev + curr.score, 0);
    // reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T): T;
    // 누적된 값을 전달하는 것
    // 콜백과 이니셜 value를 전달한다.
        /*console.log('------------------');
        console.log(prev);
        console.log(curr);
        // 리턴 값이 없기 때문에 출력이 되지 않는다.*/
         // 반복해서 출력 -> prev로 전달
        // curr에서 score가 더해진다.
     
        console.log(result /students.length);// 최종 값 출력 (평균)
    }
  
  // Q10. make a string containing all the scores
  // result should be: '45, 80, 90, 66, 88'
  {
    const result = students
        .map((student) => student.score)
            // students를 점수로 변환
        .filter(score => score >= 50)
        // 점수들 중에 50점 이상인 경우
        .join();
        // 묶는다. 
    console.log(result);
  }
  
  // Bonus! do Q10 sorted in ascending order
  // result should be: '45, 66, 80, 88, 90'
  {
    const result = students.map(student => student.score)
    .sort((a, b) =>b - a)
    .join();
    console.log(result);
  }