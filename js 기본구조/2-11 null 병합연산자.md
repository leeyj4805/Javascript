<body><article id="86b7c69e-c8a0-4ef7-a40a-c765e00fea0c" class="page sans"><header><img class="page-cover-image" src="https://www.notion.so/images/page-cover/met_william_morris_1877_willow.jpg" style="object-position:center 90%"/><div class="page-header-icon page-header-icon-with-cover"><span class="icon">🚈</span></div><h1 class="page-title">2-11 null 병합 연산자 &#x27;??&#x27; +++</h1><table class="properties"><tbody><tr class="property-row property-row-file"><th><span class="icon property-icon"><svg viewBox="0 0 14 14" style="width:14px;height:14px;display:block;fill:rgba(55, 53, 47, 0.4);flex-shrink:0;-webkit-backface-visibility:hidden" class="typesFile"><path d="M5.94578,14 C4.62416,14 3.38248,13.4963 2.44892,12.585 C1.514641,11.6736 1,10.4639 1,9.17405 C1.00086108,7.88562 1.514641,6.67434 2.44892,5.76378 L7.45612,0.985988 C8.80142,-0.327216 11.1777,-0.332396 12.5354,0.992848 C13.9369,2.36163 13.9369,4.58722 12.5354,5.95418 L8.03046,10.2414 C7.16278,11.0877 5.73682,11.0894 4.86024,10.2345 C3.98394,9.37789 3.98394,7.98769 4.86024,7.1327 L6.60422,5.4317 L7.87576,6.67196 L6.13177,8.37297 C6.01668,8.48539 6.00003,8.61545 6.00003,8.68335 C6.00003,8.75083 6.01668,8.88103 6.13177,8.99429 C6.36197,9.21689 6.53749,9.21689 6.76768,8.99429 L11.2707,4.70622 C11.9645,4.03016 11.9645,2.91757 11.2638,2.23311 C10.5843,1.57007 9.40045,1.57007 8.72077,2.23311 L3.71342,7.0109 C3.12602,7.58406 2.79837,8.35435 2.79837,9.17405 C2.79837,9.99459 3.12602,10.7654 3.72045,11.3446 C4.90947,12.5062 6.98195,12.5062 8.17096,11.3446 L10.41911,9.15165 L11.6906,10.3919 L9.4425,12.585 C8.50808,13.4963 7.2664,14 5.94578,14 Z"></path></svg></span>Files</th><td></td></tr></tbody></table></header><div class="page-body"><ul id="b5c1c6f2-6009-4a81-9a58-cb9619600781" class="bulleted-list"><li>null 병합 연산자 <code>??</code>를 사용하면 피연산자 중 ‘값이 할당된’ 변수를 빠르게 찾을 수 있습니다.<pre id="b620d0d5-7b41-4062-93a6-a25c81c4176a" class="code code-wrap"><code>x = (a !== null &amp;&amp; a !== undefined) ? a : b;
// null 병합 연산자 ??를 사용하지 않고 만든 x = a ?? b와 동일하게 동작하는 코드
// 편하지 않고 비효율적이다.


let firstName = null;
let lastName = null;
let nickName = &quot;바이올렛&quot;;

// null이나 undefined가 아닌 첫 번째 피연산자
alert(firstName ?? lastName ?? nickName ?? &quot;익명&quot;); // 바이올렛</code></pre><h2 id="ee9e3ddb-f23b-4e8c-b5c4-45a931d9b693" class="">&#x27;??&#x27;와 &#x27;||&#x27;의 차이</h2><p id="69d4ed68-510b-4d02-a86f-c6b7dbd7d807" class=""><code>??</code>는 변수에 기본값을 할당하는 용도로 사용할 수 있습니다.</p><p id="d9e5d100-ddc8-4cd9-9e03-ae8c75352e72" class=""><code>// height가 null이나 undefined인 경우, 100을 할당</code><code>
height </code><code>=</code><code> height </code><code>?</code><code>?</code><code> </code><code>100</code><code>;</code></p><pre id="7adcaeef-5900-42a3-8036-5e39d5690a35" class="code code-wrap"><code>height = height ?? 100;

let height = 0;

alert(height || 100); // 100
alert(height ?? 100); // 0</code></pre></li></ul><h2 id="c8a8f0fa-63bf-4b2f-8a49-5b31c4ab49a4" class="">연산자 우선순위</h2><ul id="667cd45f-e473-41f2-99e8-74f588abf5d2" class="bulleted-list"><li><code>??</code>의 연산자 우선순위는 대다수의 연산자보다 낮고 <code>?</code>와 <code>=</code> 보다는 높습니다.</li></ul><pre id="b3e64b88-a5f0-40df-b4e7-e6c770da2282" class="code code-wrap"><code>let height = null;
let width = null;

// 괄호를 추가!
let area = (height ?? 100) * (width ?? 50);

alert(area); // 5000

// 원치 않는 결과
let area = height ?? (100 * width) ?? 50;

let x = 1 &amp;&amp; 2 ?? 3; // SyntaxError: Unexpected token &#x27;??&#x27;

//올바른 코드

let x = (1 &amp;&amp; 2) ?? 3; // 제대로 동작합니다.
alert(x); // 2</code></pre><ul id="1c5dd423-6ffd-4030-b1a8-45d7c78ad539" class="bulleted-list"><li>괄호 없이 <code>??</code>를 <code>||</code>나 <code>&amp;&amp;</code>와 함께 사용하는 것은 금지되어있습니다.</li></ul><ul id="5c1410f4-4fd3-4e45-aabc-44860ec2ed11" class="bulleted-list"><li>소괄호를 가운데에서 쓰고 사용한다.</li></ul><p id="c1518660-24da-4804-bdf9-76d6a0c675a6" class="">
</p></div></article></body></html>