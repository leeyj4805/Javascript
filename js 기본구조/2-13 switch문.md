<body><article id="ad2ede25-da85-4c93-a74d-3e37ac6cd624" class="page sans"><header><h1 class="page-title">2-13 switch문</h1><table class="properties"><tbody><tr class="property-row property-row-file"><th><span class="icon property-icon"><svg viewBox="0 0 14 14" style="width:14px;height:14px;display:block;fill:rgba(55, 53, 47, 0.4);flex-shrink:0;-webkit-backface-visibility:hidden" class="typesFile"><path d="M5.94578,14 C4.62416,14 3.38248,13.4963 2.44892,12.585 C1.514641,11.6736 1,10.4639 1,9.17405 C1.00086108,7.88562 1.514641,6.67434 2.44892,5.76378 L7.45612,0.985988 C8.80142,-0.327216 11.1777,-0.332396 12.5354,0.992848 C13.9369,2.36163 13.9369,4.58722 12.5354,5.95418 L8.03046,10.2414 C7.16278,11.0877 5.73682,11.0894 4.86024,10.2345 C3.98394,9.37789 3.98394,7.98769 4.86024,7.1327 L6.60422,5.4317 L7.87576,6.67196 L6.13177,8.37297 C6.01668,8.48539 6.00003,8.61545 6.00003,8.68335 C6.00003,8.75083 6.01668,8.88103 6.13177,8.99429 C6.36197,9.21689 6.53749,9.21689 6.76768,8.99429 L11.2707,4.70622 C11.9645,4.03016 11.9645,2.91757 11.2638,2.23311 C10.5843,1.57007 9.40045,1.57007 8.72077,2.23311 L3.71342,7.0109 C3.12602,7.58406 2.79837,8.35435 2.79837,9.17405 C2.79837,9.99459 3.12602,10.7654 3.72045,11.3446 C4.90947,12.5062 6.98195,12.5062 8.17096,11.3446 L10.41911,9.15165 L11.6906,10.3919 L9.4425,12.585 C8.50808,13.4963 7.2664,14 5.94578,14 Z"></path></svg></span>Files</th><td></td></tr></tbody></table></header><div class="page-body"><h2 id="bb14d3cf-ac3e-4531-8926-c2896d1927c6" class="">문법</h2><p id="fe9f1af5-16e8-4f25-88fc-0cdab1ffc386" class=""><mark class="highlight-brown_background"><strong>switch</strong></mark>문은 하나 이상의 <mark class="highlight-brown_background"><strong>case</strong></mark>문으로 구성됩니다. 대개<mark class="highlight-brown_background"> </mark><mark class="highlight-brown_background"><strong>default</strong></mark>문도 있지만, 이는 필수는 아닙니다.</p><pre id="2fab0324-4003-4dd4-866c-c50f7ae5373a" class="code code-wrap"><code>witch(x) {
  case &#x27;value1&#x27;:  // if (x === &#x27;value1&#x27;)
    ...
    [break]

  case &#x27;value2&#x27;:  // if (x === &#x27;value2&#x27;)
    ...
    [break]

  default:
    ...
    [break]
}

ex)

let a = 2 + 2;

switch (a) {
  case 3:
    alert( &#x27;비교하려는 값보다 작습니다.&#x27; );
    break;
  case 4:
    alert( &#x27;비교하려는 값과 일치합니다.&#x27; );
    break;
  case 5:
    alert( &#x27;비교하려는 값보다 큽니다.&#x27; );
    break;
  default:
    alert( &quot;어떤 값인지 파악이 되지 않습니다.&quot; );
}</code></pre><ul id="73c44a56-933d-4393-86c3-11633b6429af" class="bulleted-list"><li>break문이 없는 경우</li></ul><pre id="afb0a1b4-e397-454f-82d8-7a14cb284ae7" class="code code-wrap"><code>let a = 2 + 2;

switch (a) {
  case 3:
    alert( &#x27;비교하려는 값보다 작습니다.&#x27; );
<mark class="highlight-yellow_background">  case 4:
    alert( &#x27;비교하려는 값과 일치합니다.&#x27; );
  case 5:
    alert( &#x27;비교하려는 값보다 큽니다.&#x27; );
  default:
    alert( &quot;어떤 값인지 파악이 되지 않습니다.&quot; );
}

</mark>//결과값<mark class="highlight-yellow_background">

</mark>alert( &#x27;비교하려는 값과 일치합니다.&#x27; );
alert( &#x27;비교하려는 값보다 큽니다.&#x27; );
alert( &quot;어떤 값인지 파악이 되지 않습니다.&quot; );</code></pre><figure class="block-color-gray_background callout" style="white-space:pre-wrap;display:flex" id="6a36bd24-fc6d-43f1-9527-f437210be58c"><div style="font-size:1.5em"><span class="icon">💡</span></div><div style="width:100%"><strong>switch/case문의 인수엔 어떤 표현식이든 올 수 있습니다.</strong></div></figure><pre id="15a64e4f-21b6-4353-aec9-a89f55d384dc" class="code"><code>let a = &quot;1&quot;;
let b = 0;

switch(+a) {
    case b + 1:
    alert(&#x27;표현식 + a는 1, 표현식 b+1는 1이므로 이 코드가 실행됩니다.&#x27;);
    break;

    default:
        alert(&quot;이 코드는 실행되지 않습니다.&quot;);
}


//표현식 +a를 평가하게 되면 이것은 1이 됩니다.
// 첫번째 case문의 표현식 b+1를 평가한 값(1)과 일치합니다.
// &#x27;표현식 + a는 1, 표현식 b+1는 1이므로 이 코드가 실행됩니다.&#x27;-&gt;실행</code></pre><h2 id="4602b55f-7adf-4915-ba6b-9663a87338d4" class="">여러 개의 &quot;case&quot;문 묶기</h2><pre id="2a5b8211-2472-42e6-9bf5-872c3ad376fa" class="code code-wrap"><code>let a = 3;

switch (a) {
  case 4:
    alert(&#x27;계산이 맞습니다!&#x27;);
    break;

<mark class="highlight-pink_background">  case 3: // (*) 두 case문을 묶음
  case 5:
    alert(&#x27;계산이 틀립니다!&#x27;);
    alert(&quot;수학 수업을 다시 들어보는걸 권유 드립니다.&quot;);
    break;</mark>

  default:
    alert(&#x27;계산 결과가 이상하네요.&#x27;);
}</code></pre><p id="dad146c4-e3d7-43a9-b602-683d3381af5a" class=""><mark class="highlight-yellow_background"><strong>case 3</strong></mark>과 <mark class="highlight-orange_background"><strong>case 5</strong></mark>는 동일한 메시지를 보여줍니다.</p><ul id="c884e8eb-e099-4b34-8378-5e0d8a3d5bfd" class="bulleted-list"><li>break문이 없기 떄문에 case문이 실행되는 부작용이 발생합니다.</li></ul><ul id="29458ac6-68e2-40b6-b9e6-8e693f33d161" class="bulleted-list"><li>그러므로 break문을 만날 때까지 코드는 계속 실행됩니다.</li></ul><h2 id="4f95ce6e-09a6-4288-bf67-88a8856c4d3a" class="">자료형의 중요성</h2><ul id="6831b66a-a460-4e87-9102-32101eae96fe" class="bulleted-list"><li>switch문은 일치 비교로 조건을 확인합니다. 비교하려는 값과 case문의 값의 형과 값이 같아야 해당 case문이 실행됩니다.</li></ul><pre id="c14bf774-f3ff-4782-9f6a-a3be3a446366" class="code code-wrap"><code>let arg = prompt(&quot;값을 입력해주세요.&quot;);
switch (arg) {
  case &#x27;0&#x27;:
  case &#x27;1&#x27;:
    alert( &#x27;0이나 1을 입력하셨습니다.&#x27; );
    break;

  case &#x27;2&#x27;:
    alert( &#x27;2를 입력하셨습니다.&#x27; );
    break;

  case 3:
    alert( &#x27;이 코드는 절대 실행되지 않습니다!&#x27; );
    break;
  default:
    alert( &#x27;알 수 없는 값을 입력하셨습니다.&#x27; );
}</code></pre><ol id="67a3f5ae-152f-412f-a8c4-b36ee8bf0162" class="numbered-list" start="1"><li>0이나 1을 입력한 경우 →0이나 1을 입력하셨습니다.</li></ol><ol id="737bb530-bb85-4bfe-a513-24a1131cf652" class="numbered-list" start="2"><li>2를 입력한 경우 →2를 입력하셨습니다.</li></ol><ol id="6a46a404-4c4b-426c-998b-4057429742c3" class="numbered-list" start="3"><li>3을 입력한 경우 →알 수 없는 값을 입력하셨습니다.</li></ol><p id="8bed670c-7900-41c5-a45f-74a7bc6d9361" class="">※ prompt 함수는 사용자가 입력 필드에 기재한 값을 문자로 변환해서 반환을 하기 때문에 숫자 3을 입력할지라도 문자열 &#x27;3&#x27;을 반환합니다.</p><p id="06c6f708-7369-4500-b89d-937161f8fb74" class="">→3번째 case문에서는 입력한 값과 숫자형 3을 비교하기 때문에 형자체가 다릅니다.(숫자형과 문자형은 다르기 때문) 그러므로 <strong>알 수 없는 값을 입력하셨습니다.</strong>가 나오게 됩니다.</p><figure class="block-color-gray_background callout" style="white-space:pre-wrap;display:flex" id="0a3d0189-9e35-471e-97e0-72f2fa52bdc2"><div style="font-size:1.5em"><span class="icon">💡</span></div><div style="width:100%">&quot;<strong>switch</strong>&quot;<strong>문을 &quot;if&quot;문으로 변환하기</strong></div></figure><pre id="33bebaf3-5dd5-4e3e-9058-7ba81a11d74b" class="code"><code>switch (browser) {
  case &#x27;Edge&#x27;:
    alert( &quot;Edge를 사용하고 계시네요!&quot; );
    break;

  case &#x27;Chrome&#x27;:
  case &#x27;Firefox&#x27;:
  case &#x27;Safari&#x27;:
  case &#x27;Opera&#x27;:
    alert( &#x27;저희 서비스가 지원하는 브라우저를 사용하고 계시네요.&#x27; );
    break;

  default:
    alert( &#x27;현재 페이지가 괜찮아 보이길 바랍니다!&#x27; );
}</code></pre><ul id="ebeed013-8eb6-4351-9bf0-facab654516c" class="toggle"><li><details open=""><summary>)해답</summary><pre id="318c8e95-bcf3-4e0b-9b77-51e01e0a4314" class="code"><code>if(browser ===&#x27;Edge&#x27;) {
	 alert( &quot;Edge를 사용하고 계시네요!&quot; );
} else if (browser ===&#x27;Chrome&#x27; || browser === &#x27;Firefox&#x27; ||  browser === &#x27;Safari&#x27;|| browser ===&#x27;Opera&#x27;) {
	alert (&#x27;저희 서비스가 지원하는 브라우저를 사용하고 계시네요.&#x27;);
} else {
	alert( &#x27;현재 페이지가 괜찮아 보이길 바랍니다!&#x27; );
}
</code></pre></details></li></ul><figure class="block-color-gray_background callout" style="white-space:pre-wrap;display:flex" id="20416203-fe35-46ef-9be5-84dc4b07c5cb"><div style="font-size:1.5em"><span class="icon">💡</span></div><div style="width:100%"><strong>&quot;if&quot;문을 &quot;switch&quot;문으로 변환하기</strong></div></figure><pre id="99f3c590-e154-42cb-bd58-e6506167518c" class="code"><code>let a = +prompt(&#x27;a?&#x27;, &#x27;&#x27;);

if (a == 0) {
  alert( 0 );
}
if (a == 1) {
  alert( 1 );
}

if (a == 2 || a == 3) {
  alert( &#x27;2,3&#x27; );
}</code></pre><ul id="00c03bea-2e97-4f20-83a1-f9017777ab67" class="toggle"><li><details open=""><summary>해답</summary><pre id="d7ffacc0-960f-44c2-a3e2-e8fabf6c9ca3" class="code"><code>let a = +prompt(&#x27;a?&#x27;,&#x27;&#x27;);

switch (a) {
	case 0:
		alert(0);
		brack;
}</code></pre></details></li></ul></div></article></body></html>