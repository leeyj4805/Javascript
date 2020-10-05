var grades = {'egoing': 10, 'k8805': 6, 'sorialgi': 80};
for(var name in grades) {
    document.write("<li>key : "+name+" value : "+grades[name]+"</li>");
    // 프로그래밍적으로 만든 코드이다.
}

// 웹페이지가 어떤 페이지로 구성되어 있는가
// 자바스크립트가 어떤 모형으로 이루어져 있는가

//for in 문은 배열에서도 사용이 가능하다.

var arr = ['a','b','c'];
for(var name in arr) {
    console.log(name);
}

// a,b,c가 순서대로 출력됨