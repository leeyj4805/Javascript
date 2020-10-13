// load 이벤트
// 문서 로딩이 완료가 되었을 때 발생
// 자바스크립트 코드를 실행하기 전에 이벤트가 발생하기를 기다려야 한다.
window.onload = function() { // 문서 로딩이 완료되면 이 함수를 실행시켜야 한다.
        // 모든 <img>태그를 찾는다.
        var images = document.getElementsByName("img");

        // 모든 <img> 태그에 '클릭 행위가 일어날 경우'
        // 이미지를 숨기는 이벤트 핸들러를 등록
         for(var i = 0; i < images.length; i++) {
             var image = images[i];
             if (image.addEventListener) // 핸들러를 등록하는 다른 방법
             image.addEventListener("click",hide,false);
             else                       // IE8이나 이전 버전용
                image.attachEvent("onclick",hide);
         }

         //<img>태그에 등록할 이벤트 핸들러 함수이다
         function hide(event) {event.target.style.visibility = "hidden";}
}