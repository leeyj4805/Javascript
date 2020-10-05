    var grades = {
        'list' : {'egoing': 10, 'k8805': 8, 'sorialgi': 80},// list라는 키가 있고 그 안에 있는 값는 또 다른 객체 
        'show' : function() {                               // 키 안에 담기는 것은 함수일 수도 있다.
            for(var name in this.list) {
                document.write(name+':'+this.list[name]+"<br/>" );
            }
        }
    };

    // 객체는 중괄호에서 중괄호로 끝난다.

    grades.show();


    var grades = {
        'list': {'egoing': 10, 'k8805': 6, 'sorialgi': 80},
        'show' : function(){
        alert('Hello world');
            }
        }
    grades['show']();

// alert 창이 뜬다.

    var grades = {
    'list': {'egoing': 10, 'k8805': 6, 'sorialgi': 80},
    'show' : function(){
       alert(this.list); // 여기서 this는 grades를 가르키는 변수이다.
                    // 함수가 소속되어 있는 객체이다.
        }
    }
    grades['show']();

    var grades = {  // grades라는 객체에 이름을 적는다. (이것이 그룹)
        'list': {'egoing': 10, 'k8805': 6, 'sorialgi': 80},// list라고 하는 데이터
        'show' : function(){ //show라고 하는 함수
           for (var name in this.list) {
               console.log(name,this.list[name]);
            }
        }
    }
    grades.show();// grades라는 객체에 show라는 함수를 호출

    // 이것을 객체 지향 프로그래밍이라 한다.
    // 서로 연관되어 있는 값과 처리를 하나의 그릇 안에 모아서 그룹핑 하는 스타일 기법