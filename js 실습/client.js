// test01
// window 객체 실습
function moveon() {
    // 모달 대화상자를 출력해서 사용자에게 질문을 한다.
    var answer = confirm("Ready to move on?");
    // 확인 버튼을 누를 경우 해당 링크로 이동
    if (answer) window.location = "http://www.naver.com";
}

// 위에서 만든 스크립트를 1분(60,000밀리초) 후에 실행한다.
setTimeout(moveon,60000);

// test02

// 문서의 디버깅 영역에 메시지를 출력
// 디버깅 영역이 존재하지 않으면 생성
function debug(msg) {
    // id 속성을 사용하여 문서에서 디버깅을 위한 영역을 찾는다.
    var log = document.getElementById("debuglog");
    // id 속성이 "debuglog"인 엘리먼트가 있다면 임의로 생성한다.
    if (!log) {
        log = document.createElement("div");    // 새 <div> 엘리먼트를 만든다.
        log.id = "debuglog";                    // 엘리먼트의 id 값을
                                                // "debuglog"로 설정한다.
        log.innerHTML = "<h1>Debug Log</h1>";   // 처음 보여줄 엘리먼트의
                                                // 내용을 정의한다.
        document.body.appendChild(log);         // 문서의 끝에 엘리먼트를 추가한다.
    }

    // 메시지를 <pre> 엘리먼트의 텍스트 노드로 설정
    // 디버깅 영역에 출력한다.
    var pre = document.createElement("pre");        // <pre> 엘리먼트를 만든다.
    var text = document.createTestNode(msg);        // 텍스트 노드를 하나 만든다.
                                                    // 그리고 초기 값을 msg로 만든다.
    pre.appendChild(text);                          // 텍스트 노드를 <pre>에 추가
    pre.appendChild(pre);                           // <pre>엘리먼트를 디버깅 영역에 추가한다.
}

// test 03

function hide(e,reflow) {                           // 엘리먼트 e의 스타일의 경우 스크립트를 사용해서 숨긴다.
    if (reflow) {                                   // 두 번째 인자가 true이면
        e.style.display = "none"                    // 엘리먼트가 차지한 공간을 숨긴다.
    } else {                                        // 두 인자가 true가 아니라면
        e.style.visibility = "hidden";              // 엘리먼트에 차지한 공간을 그대로 두고 내용을 숨깁니다.
    }                                               
}
function highligth(e) {                             // 엘리먼트 e에 css 클래스를 설정해서 하이라이트 효과 설정
    if(!e.className) e.className = "hilte";         // 속성을 정의하거나 정의되어 있는 class에 새로운 값을 추가
    else e.className += "hilite";                   // 기존에 hilite라는 클래스가 css 스타일시트에 정의되어 있다고 가정
}
