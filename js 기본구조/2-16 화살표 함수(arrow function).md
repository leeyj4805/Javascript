<body><article id="ab8bf447-493a-4f95-a32a-8d94dd3b14bc" class="page sans"><header><div class="page-header-icon undefined"><span class="icon">🕒</span></div><h1 class="page-title">2-16 화살표 함수(arrow function)</h1><table class="properties"><tbody><tr class="property-row property-row-file"><th><span class="icon property-icon"><svg viewBox="0 0 14 14" style="width:14px;height:14px;display:block;fill:rgba(55, 53, 47, 0.4);flex-shrink:0;-webkit-backface-visibility:hidden" class="typesFile"><path d="M5.94578,14 C4.62416,14 3.38248,13.4963 2.44892,12.585 C1.514641,11.6736 1,10.4639 1,9.17405 C1.00086108,7.88562 1.514641,6.67434 2.44892,5.76378 L7.45612,0.985988 C8.80142,-0.327216 11.1777,-0.332396 12.5354,0.992848 C13.9369,2.36163 13.9369,4.58722 12.5354,5.95418 L8.03046,10.2414 C7.16278,11.0877 5.73682,11.0894 4.86024,10.2345 C3.98394,9.37789 3.98394,7.98769 4.86024,7.1327 L6.60422,5.4317 L7.87576,6.67196 L6.13177,8.37297 C6.01668,8.48539 6.00003,8.61545 6.00003,8.68335 C6.00003,8.75083 6.01668,8.88103 6.13177,8.99429 C6.36197,9.21689 6.53749,9.21689 6.76768,8.99429 L11.2707,4.70622 C11.9645,4.03016 11.9645,2.91757 11.2638,2.23311 C10.5843,1.57007 9.40045,1.57007 8.72077,2.23311 L3.71342,7.0109 C3.12602,7.58406 2.79837,8.35435 2.79837,9.17405 C2.79837,9.99459 3.12602,10.7654 3.72045,11.3446 C4.90947,12.5062 6.98195,12.5062 8.17096,11.3446 L10.41911,9.15165 L11.6906,10.3919 L9.4425,12.585 C8.50808,13.4963 7.2664,14 5.94578,14 Z"></path></svg></span>Files</th><td></td></tr></tbody></table></header><div class="page-body"><p id="bf1a3704-4b5e-4955-b60d-09a5a8ad2027" class="">화살표 함수는 본문이 한 줄인 함수를 작성할 때 유용합니다. 본문이 한 줄이 아니라면 다른 방법으로 화살표 함수를 작성해야 합니다.</p><ul id="814c9518-8312-4996-9b21-5a2c04a70eb7" class="bulleted-list"><li>함수 본문이 한 줄인 간단한 함수는 화살표 함수를 사용해서 만드는 게 편리합니다. <strong>타이핑을 적게 해도 함수를 만들 수 있다는 장점</strong>이 있습니다.</li></ul><pre id="f1571982-1943-438b-8508-1d8ce306a73b" class="code"><code>//화살표 함수 예시
let func = (<mark class="highlight-red_background"><strong>arg1, arg2, ...argN</strong></mark>) =&gt; 표현식(expression)</code></pre><pre id="436989e8-4d79-4c83-9f92-370d50628dfa" class="code code-wrap"><code>//함수의 축약 버전
let func = function(arg1, arg2, ... argN) {
  return expression;
};</code></pre><pre id="ac4e3f52-eedc-4036-924c-d46ef92d577f" class="code"><code>let sum = (a, b) =&gt; a + b; // 인수 a와 b를 받는 함수
// (a, b) =&gt; a + b가 실행이 되면 a + b를 평가하며 결과를 반환
alert(sum(1,2));

/*화살표 함수를 축약하지 않는다면?*/

let sum = function(a,b) {
	return a +b;
};

alert( sum(1, 2) ); // 3</code></pre><ul id="c048e2e0-0107-445a-961a-c723b8a080b7" class="bulleted-list"><li>인수가 하나밖에 없다면<strong> </strong><mark class="highlight-orange_background"><strong>인수를 감싸는 괄호를 생략</strong></mark>할 수 있습니다. 괄호를 생략하면 코드 길이를 더 줄일 수 있습니다.</li></ul><pre id="a8c59edd-0aad-4c90-9bad-6c0efb8bcf11" class="code code-wrap"><code><mark class="highlight-gray_background"><strong>let double = n =&gt; n * 2;
// let double = function(n) { return n * 2 }과 거의 동일합니다.</strong></mark><mark class="highlight-yellow_background">
</mark>
alert( double(3) ); // 6</code></pre><ul id="c0f194ba-1179-4c78-b5f6-4bfd2c193a23" class="bulleted-list"><li>인수가 하나도 없을 땐 <mark class="highlight-pink_background"><strong>괄호를 비워놓으면 됩니다</strong></mark><mark class="highlight-pink_background">.</mark> 다만, 이 때 괄호는 생략할 수 없습니다.</li></ul><pre id="dd1952ff-d8cc-4049-8103-c167c4cb03b1" class="code"><code>let sayHi = () =&gt; alert(<strong>&quot;안녕하세요!&quot;</strong>);
sayHi( );</code></pre><ul id="073258b6-d0ea-432d-b6cf-9271bf10be26" class="bulleted-list"><li>인수가 하나도 없을 땐 <mark class="highlight-pink_background"><strong>괄호를 비워놓으면 됩니다</strong></mark><mark class="highlight-pink_background">.</mark> 다만, 이 때 괄호는 생략할 수 없습니다.</li></ul><pre id="51525fc0-0d7d-4eab-a905-317d82102449" class="code code-wrap"><code>// 함수를 동적으로 만드는 방법
let age = prompt(&quot;나이를 알려주세요.&quot;, 18);

let welcome = (age &lt; 18) ?

  () =&gt; alert(&#x27;안녕&#x27;) :
  () =&gt; alert(&quot;안녕하세요!&quot;);

welcome();</code></pre><h2 id="f9bdb4a2-f9b7-4443-9bf1-3c1b4f3d41b2" class="">본문이 여러 줄인 화살표 함수</h2><p id="96e364fa-568b-4b6f-a3c6-49ec640d6f62" class="">평가해야할 표현식이나 구문이 여러 개인 함수가 있을 수 있습니다. 이 경우 화살표 함수 문법을 사용해서 함수를 만들 수 있습니다. 그럴때는 <mark class="highlight-teal_background"><strong>return 지시자를 사용</strong></mark>해서 명시적으로 결괏값을 반환해줘야 합니다.</p><pre id="4cca4551-9c7e-4c7d-9145-2ec0998e5969" class="code code-wrap"><code>let sum = (a, b) =&gt; {  // 중괄호는 본문 여러 줄로 구성되어 있음을 알려줍니다.
  let result = a + b;
 <strong><mark class="highlight-red_background"> return result; // 중괄호를 사용했다면, return 지시자로 결괏값을 반환해주어야 합니다.</mark></strong>
};

alert( sum(1, 2) ); // 3</code></pre><ol id="59835ae4-1738-4ca1-bad7-a8b96edffc37" class="numbered-list" start="1"><li>중괄호 없이 작성: <code>(...args) =&gt; expression</code> – 화살표 오른쪽에 표현식을 둡니다. 함수는 이 표현식을 평가하고, 평가 결과를 반환합니다.</li></ol><ol id="a8453e08-e8be-4bf8-99a8-5c47e1499b4a" class="numbered-list" start="2"><li>중괄호와 함께 작성: <code>(...args) =&gt; { body }</code> – 본문이 여러 줄로 구성되었다면 중괄호를 사용해야 합니다. 다만, 이 경우는 반드시 <code>return</code> 지시자를 사용해 반환 값을 명기해 주어야 합니다.</li></ol><h3 id="ec908363-172f-4111-a4d5-bbd1ea88c6d8" class=""><strong>Q .함수 표현식을 사용해 만든 함수를 화살표 함수로 바꾸기</strong></h3><pre id="e9a72b41-3044-4b22-9d00-411812838092" class="code"><code>function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  &quot;동의하십니까?&quot;,
  function() { alert(&quot;동의하셨습니다.&quot;); },
  function() { alert(&quot;취소 버튼을 누르셨습니다.&quot;); }
);


----------------------&gt; 바꾸면?

function ask (question, yes, no){
	if (confirm(question)) yes()
	else no();
}

ask (
	&quot;동의하십니까?&quot;,
	() =&gt; alert(&quot;동의하셨습니다.&quot;),
	() =&gt; alert(&quot;취소 버튼을 누르셨습니다.&quot;)
);</code></pre></div></article></body></html>