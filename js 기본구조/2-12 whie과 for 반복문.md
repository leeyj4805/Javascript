<body><article id="89f8c2c4-8ab7-4b6b-ab85-2e886c5a393a" class="page sans"><header><h1 class="page-title">2-13 whie과 / for 반복문</h1><table class="properties"><tbody><tr class="property-row property-row-file"><th><span class="icon property-icon"><svg viewBox="0 0 14 14" style="width:14px;height:14px;display:block;fill:rgba(55, 53, 47, 0.4);flex-shrink:0;-webkit-backface-visibility:hidden" class="typesFile"><path d="M5.94578,14 C4.62416,14 3.38248,13.4963 2.44892,12.585 C1.514641,11.6736 1,10.4639 1,9.17405 C1.00086108,7.88562 1.514641,6.67434 2.44892,5.76378 L7.45612,0.985988 C8.80142,-0.327216 11.1777,-0.332396 12.5354,0.992848 C13.9369,2.36163 13.9369,4.58722 12.5354,5.95418 L8.03046,10.2414 C7.16278,11.0877 5.73682,11.0894 4.86024,10.2345 C3.98394,9.37789 3.98394,7.98769 4.86024,7.1327 L6.60422,5.4317 L7.87576,6.67196 L6.13177,8.37297 C6.01668,8.48539 6.00003,8.61545 6.00003,8.68335 C6.00003,8.75083 6.01668,8.88103 6.13177,8.99429 C6.36197,9.21689 6.53749,9.21689 6.76768,8.99429 L11.2707,4.70622 C11.9645,4.03016 11.9645,2.91757 11.2638,2.23311 C10.5843,1.57007 9.40045,1.57007 8.72077,2.23311 L3.71342,7.0109 C3.12602,7.58406 2.79837,8.35435 2.79837,9.17405 C2.79837,9.99459 3.12602,10.7654 3.72045,11.3446 C4.90947,12.5062 6.98195,12.5062 8.17096,11.3446 L10.41911,9.15165 L11.6906,10.3919 L9.4425,12.585 C8.50808,13.4963 7.2664,14 5.94578,14 Z"></path></svg></span>Files</th><td></td></tr></tbody></table></header><div class="page-body"><h2 id="589e493b-9420-47f1-a70e-fed4c9ab7962" class="">‘while’ 반복문</h2><ul id="674f7791-48c5-4416-9901-ff7c30b7785e" class="bulleted-list"><li><code>while</code> – 각 반복이 시작하기 전에 조건을 확인합니다.</li></ul><pre id="7d3f856c-2894-4c34-a00f-2db1de648b00" class="code code-wrap"><code>while (condition) {
  // 코드
  // &#x27;반복문 본문(body)&#x27;이라 불림
}</code></pre><p id="52c4a885-e56b-41fc-9b26-7d98104daca4" class=""><code>condition</code>(조건)이 truthy 이면 반복문 본문의 <code>코드</code>가 실행됩니다.</p><p id="41070ff0-09d1-451f-b675-994a663b829c" class="">아래 반복문은 조건 <code>i &lt; 3</code>을 만족할 동안 <code>i</code>를 출력해줍니다.</p><pre id="cc639c9c-edac-4229-8fc6-b852a3eb3c34" class="code code-wrap"><code>let i = 0;
while (i &lt; 3) { // 0, 1, 2가 출력됩니다.
  alert( i );
  i++;
}

// while (i != 0)을 짧게 줄여 while (i)로 만듬

let i = 3;
while (i) { // i가 0이 되면 조건이 falsy가 되므로 반복문이 멈춥니다.
  alert( i );
  i--;
}</code></pre><h2 id="aecc4b56-e019-4ac7-9081-686a818faaea" class="">‘do…while’ 반복문</h2><ul id="5d6dd7cd-f380-436a-92fc-50b938f167b1" class="bulleted-list"><li><code>do..while</code> – 각 반복이 끝난 후에 조건을 확인합니다.</li></ul><pre id="a5019f1e-1308-48ee-b171-a766314df02e" class="code code-wrap"><code>do {
  // 반복문 본문
} while (condition);

let i = 0;
do {
  alert( i );
  i++;
} while (i &lt; 3);</code></pre><h2 id="d824770a-94b4-46dc-8bc8-5178826b4194" class="">‘for’ 반복문</h2><ul id="96fcb615-1f0b-48e1-97f1-b1da59671055" class="bulleted-list"><li><code>for (;;)</code> – 각 반복이 시작하기 전에 조건을 확인합니다. 추가 세팅을 할 수 있습니다.</li></ul><pre id="056c5569-6e8a-4785-8677-741b0c9b8ecb" class="code code-wrap"><code>for (begin; condition; step) {
  // ... 반복문 본문 ...
}

for (let i = 0; i &lt; 3; i++) { // 0, 1, 2가 출력됩니다.
  alert(i);
}</code></pre><p id="fdf2bc28-2c45-48aa-8b5a-fb3946bbab77" class="">
</p><div id="a39faff7-980e-40e7-a7d7-6dcb51bad905" class="collection-content"><h4 class="collection-title"></h4><table class="collection-content"><thead><tr><th><span class="icon property-icon"><svg viewBox="0 0 14 14" style="width:14px;height:14px;display:block;fill:rgba(55, 53, 47, 0.4);flex-shrink:0;-webkit-backface-visibility:hidden" class="typesTitle"><path d="M7.73943662,8.6971831 C7.77640845,8.7834507 7.81338028,8.8943662 7.81338028,9.00528169 C7.81338028,9.49823944 7.40669014,9.89260563 6.91373239,9.89260563 C6.53169014,9.89260563 6.19894366,9.64612676 6.08802817,9.30105634 L5.75528169,8.33978873 L2.05809859,8.33978873 L1.72535211,9.30105634 C1.61443662,9.64612676 1.2693662,9.89260563 0.887323944,9.89260563 C0.394366197,9.89260563 0,9.49823944 0,9.00528169 C0,8.8943662 0.0246478873,8.7834507 0.0616197183,8.6971831 L2.46478873,2.48591549 C2.68661972,1.90669014 3.24119718,1.5 3.90669014,1.5 C4.55985915,1.5 5.12676056,1.90669014 5.34859155,2.48591549 L7.73943662,8.6971831 Z M2.60035211,6.82394366 L5.21302817,6.82394366 L3.90669014,3.10211268 L2.60035211,6.82394366 Z M11.3996479,3.70598592 C12.7552817,3.70598592 14,4.24823944 14,5.96126761 L14,9.07922535 C14,9.52288732 13.6549296,9.89260563 13.2112676,9.89260563 C12.8169014,9.89260563 12.471831,9.59683099 12.4225352,9.19014085 C12.028169,9.6584507 11.3257042,9.95422535 10.5492958,9.95422535 C9.60035211,9.95422535 8.47887324,9.31338028 8.47887324,7.98239437 C8.47887324,6.58978873 9.60035211,6.08450704 10.5492958,6.08450704 C11.3380282,6.08450704 12.040493,6.33098592 12.4348592,6.81161972 L12.4348592,5.98591549 C12.4348592,5.38204225 11.9172535,4.98767606 11.1285211,4.98767606 C10.6602113,4.98767606 10.2411972,5.11091549 9.80985915,5.38204225 C9.72359155,5.43133803 9.61267606,5.46830986 9.50176056,5.46830986 C9.18133803,5.46830986 8.91021127,5.1971831 8.91021127,4.86443662 C8.91021127,4.64260563 9.0334507,4.44542254 9.19366197,4.34683099 C9.87147887,3.90316901 10.6232394,3.70598592 11.3996479,3.70598592 Z M11.1778169,8.8943662 C11.6830986,8.8943662 12.1760563,8.72183099 12.4348592,8.37676056 L12.4348592,7.63732394 C12.1760563,7.29225352 11.6830986,7.11971831 11.1778169,7.11971831 C10.5616197,7.11971831 10.056338,7.45246479 10.056338,8.0193662 C10.056338,8.57394366 10.5616197,8.8943662 11.1778169,8.8943662 Z M0.65625,11.125 L13.34375,11.125 C13.7061869,11.125 14,11.4188131 14,11.78125 C14,12.1436869 13.7061869,12.4375 13.34375,12.4375 L0.65625,12.4375 C0.293813133,12.4375 4.43857149e-17,12.1436869 0,11.78125 C-4.43857149e-17,11.4188131 0.293813133,11.125 0.65625,11.125 Z"></path></svg></span>구성 요소</th><th><span class="icon property-icon"><svg viewBox="0 0 14 14" style="width:14px;height:14px;display:block;fill:rgba(55, 53, 47, 0.4);flex-shrink:0;-webkit-backface-visibility:hidden" class="typesText"><path d="M7,4.56818 C7,4.29204 6.77614,4.06818 6.5,4.06818 L0.5,4.06818 C0.223858,4.06818 0,4.29204 0,4.56818 L0,5.61364 C0,5.88978 0.223858,6.11364 0.5,6.11364 L6.5,6.11364 C6.77614,6.11364 7,5.88978 7,5.61364 L7,4.56818 Z M0.5,1 C0.223858,1 0,1.223858 0,1.5 L0,2.54545 C0,2.8216 0.223858,3.04545 0.5,3.04545 L12.5,3.04545 C12.7761,3.04545 13,2.8216 13,2.54545 L13,1.5 C13,1.223858 12.7761,1 12.5,1 L0.5,1 Z M0,8.68182 C0,8.95796 0.223858,9.18182 0.5,9.18182 L11.5,9.18182 C11.7761,9.18182 12,8.95796 12,8.68182 L12,7.63636 C12,7.36022 11.7761,7.13636 11.5,7.13636 L0.5,7.13636 C0.223858,7.13636 0,7.36022 0,7.63636 L0,8.68182 Z M0,11.75 C0,12.0261 0.223858,12.25 0.5,12.25 L9.5,12.25 C9.77614,12.25 10,12.0261 10,11.75 L10,10.70455 C10,10.4284 9.77614,10.20455 9.5,10.20455 L0.5,10.20455 C0.223858,10.20455 0,10.4284 0,10.70455 L0,11.75 Z"></path></svg></span>속성</th><th><span class="icon property-icon"><svg viewBox="0 0 14 14" style="width:14px;height:14px;display:block;fill:rgba(55, 53, 47, 0.4);flex-shrink:0;-webkit-backface-visibility:hidden" class="typesText"><path d="M7,4.56818 C7,4.29204 6.77614,4.06818 6.5,4.06818 L0.5,4.06818 C0.223858,4.06818 0,4.29204 0,4.56818 L0,5.61364 C0,5.88978 0.223858,6.11364 0.5,6.11364 L6.5,6.11364 C6.77614,6.11364 7,5.88978 7,5.61364 L7,4.56818 Z M0.5,1 C0.223858,1 0,1.223858 0,1.5 L0,2.54545 C0,2.8216 0.223858,3.04545 0.5,3.04545 L12.5,3.04545 C12.7761,3.04545 13,2.8216 13,2.54545 L13,1.5 C13,1.223858 12.7761,1 12.5,1 L0.5,1 Z M0,8.68182 C0,8.95796 0.223858,9.18182 0.5,9.18182 L11.5,9.18182 C11.7761,9.18182 12,8.95796 12,8.68182 L12,7.63636 C12,7.36022 11.7761,7.13636 11.5,7.13636 L0.5,7.13636 C0.223858,7.13636 0,7.36022 0,7.63636 L0,8.68182 Z M0,11.75 C0,12.0261 0.223858,12.25 0.5,12.25 L9.5,12.25 C9.77614,12.25 10,12.0261 10,11.75 L10,10.70455 C10,10.4284 9.77614,10.20455 9.5,10.20455 L0.5,10.20455 C0.223858,10.20455 0,10.4284 0,10.70455 L0,11.75 Z"></path></svg></span>속성 1</th></tr></thead><tbody><tr id="c29375e3-913b-47ee-ba94-d3108fbc4619"><td class="cell-title"><a href="2-13%20whie%E1%84%80%E1%85%AA%20for%20%E1%84%87%E1%85%A1%E1%86%AB%E1%84%87%E1%85%A9%E1%86%A8%E1%84%86%E1%85%AE%E1%86%AB%2089f8c2c48ab74b6bab852e886c5a393a/%E1%84%8C%E1%85%A6%E1%84%86%E1%85%A9%E1%86%A8%20%E1%84%8B%E1%85%A5%E1%86%B9%E1%84%82%E1%85%B3%E1%86%AB%20%E1%84%83%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%90%E1%85%A5%E1%84%87%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%89%E1%85%B3%20a39faff7980e40e7a7d76dcb51bad905/begin%20c29375e3913b47eeba94d3108fbc4619.html">begin</a></td><td class="cell-&gt;!)~">i = 0</td><td class="cell-v\L/">반복문에 진입할 때 단 한 번 실행됩니다.</td></tr><tr id="56683b79-6dfa-4791-934b-65eee53aba37"><td class="cell-title"><a href="2-13%20whie%E1%84%80%E1%85%AA%20for%20%E1%84%87%E1%85%A1%E1%86%AB%E1%84%87%E1%85%A9%E1%86%A8%E1%84%86%E1%85%AE%E1%86%AB%2089f8c2c48ab74b6bab852e886c5a393a/%E1%84%8C%E1%85%A6%E1%84%86%E1%85%A9%E1%86%A8%20%E1%84%8B%E1%85%A5%E1%86%B9%E1%84%82%E1%85%B3%E1%86%AB%20%E1%84%83%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%90%E1%85%A5%E1%84%87%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%89%E1%85%B3%20a39faff7980e40e7a7d76dcb51bad905/condition%2056683b796dfa4791934b65eee53aba37.html">condition</a></td><td class="cell-&gt;!)~">i &lt; 3</td><td class="cell-v\L/">반복마다 해당 조건이 확인됩니다. false이면 반복문을 멈춥니다.</td></tr><tr id="ecf0eab1-e81a-4b3a-8e12-7b9f055962d9"><td class="cell-title"><a href="2-13%20whie%E1%84%80%E1%85%AA%20for%20%E1%84%87%E1%85%A1%E1%86%AB%E1%84%87%E1%85%A9%E1%86%A8%E1%84%86%E1%85%AE%E1%86%AB%2089f8c2c48ab74b6bab852e886c5a393a/%E1%84%8C%E1%85%A6%E1%84%86%E1%85%A9%E1%86%A8%20%E1%84%8B%E1%85%A5%E1%86%B9%E1%84%82%E1%85%B3%E1%86%AB%20%E1%84%83%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%90%E1%85%A5%E1%84%87%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%89%E1%85%B3%20a39faff7980e40e7a7d76dcb51bad905/body%20ecf0eab1e81a4b3a8e127b9f055962d9.html">body</a></td><td class="cell-&gt;!)~">alert(i)</td><td class="cell-v\L/">condition이 truthy일 동안 계속해서 실행됩니다.</td></tr><tr id="1a247e2d-9dca-4029-b729-8127b2e7f52d"><td class="cell-title"><a href="2-13%20whie%E1%84%80%E1%85%AA%20for%20%E1%84%87%E1%85%A1%E1%86%AB%E1%84%87%E1%85%A9%E1%86%A8%E1%84%86%E1%85%AE%E1%86%AB%2089f8c2c48ab74b6bab852e886c5a393a/%E1%84%8C%E1%85%A6%E1%84%86%E1%85%A9%E1%86%A8%20%E1%84%8B%E1%85%A5%E1%86%B9%E1%84%82%E1%85%B3%E1%86%AB%20%E1%84%83%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%90%E1%85%A5%E1%84%87%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%89%E1%85%B3%20a39faff7980e40e7a7d76dcb51bad905/step%201a247e2d9dca4029b7298127b2e7f52d.html">step</a></td><td class="cell-&gt;!)~">i++</td><td class="cell-v\L/">각 반복의 body가 실행된 이후에 실행됩니다.</td></tr></tbody></table></div><h2 id="87e84875-a559-4903-b8a0-4d1fc823df46" class="">반복문 빠져나오기</h2><p id="ff6fab09-d142-49c5-a153-6ba9d606dab9" class="">‘무한’ 반복문은 보통 <code>while(true)</code>를 써서 만듭니다. 무한 반복문은 여타 반복문과 마찬가지로 <code>break</code> 지시자를 사용해 멈출 수 있습니다.</p><pre id="9078d26b-3c92-47f5-a96f-e507b77c9bad" class="code code-wrap"><code>let sum = 0;

while (true) {

  let value = +prompt(&quot;숫자를 입력하세요.&quot;, &#x27;&#x27;);

  if (!value) break; // (*)

  sum += value;

}
alert( &#x27;합계: &#x27; + sum );</code></pre><h2 id="323491bb-903a-4926-ae2a-f4c3014430f4" class="">다음 반복으로 넘어가기</h2><p id="730390bd-ada0-47ae-9752-ac8d10ef28ff" class="">현재 실행 중인 반복에서 더는 무언가를 하지 않고 다음 반복으로 넘어가고 싶다면 <code>continue</code> 지시자를 사용할 수 있습니다.</p><pre id="c6bda9b0-56ba-49e3-88e5-6b15b7607770" class="code code-wrap"><code>or (let i = 0; i &lt; 10; i++) {

  // 조건이 참이라면 남아있는 본문은 실행되지 않습니다.
  if (i % 2 == 0) continue;

  alert(i); // 1, 3, 5, 7, 9가 차례대로 출력됨
}</code></pre><figure class="block-color-gray_background callout" style="white-space:pre-wrap;display:flex" id="c0e66fe6-3cb8-4dda-9a0e-907e0a25207c"><div style="font-size:1.5em"><span class="icon">💡</span></div><div style="width:100%"> <code>continue</code> <strong>은 중첩을 줄이는데 도움을 줍니다.</strong></div></figure><figure class="block-color-gray_background callout" style="white-space:pre-wrap;display:flex" id="09743e11-d68d-49de-b389-b3fbd6721593"><div style="font-size:1.5em"><span class="icon">💡</span></div><div style="width:100%"><strong>‘?’ 오른쪽엔 break나 continue가 올 수 없습니다.</strong></div></figure><h2 id="3702fbc9-a127-4cbe-adc6-745f6e3808bd" class="">break/continue와 레이블</h2><p id="01359467-58ee-49f4-aa65-818807f73dce" class="">반복문 앞에 레이블을 붙이고, <code>break/continue</code>에 이 레이블을 함께 사용할 수 있습니다. 레이블은 중첩 반복문을 빠져나와 바깥의 반복문으로 갈 수 있게 해주는 유일한 방법입니다.</p><pre id="763295a9-8b10-4b73-bca5-be571cd61dc6" class="code code-wrap"><code>for (let i = 0; i &lt; 3; i++) {

  for (let j = 0; j &lt; 3; j++) {

    let input = prompt(`(${i},${j})의 값`, &#x27;&#x27;);

  }
}

alert(&#x27;완료!&#x27;);</code></pre><ul id="9380f94f-b8e1-47e2-bd3c-94cc5cf3c05b" class="bulleted-list"><li>레이블(label) 은 반복문 앞에 콜론과 함께 쓰이는 식별자입니다.</li></ul><pre id="6c4f40cb-9529-439b-bcda-628ebee16156" class="code code-wrap"><code>labelName: for (...) {
  ...
}</code></pre><ul id="8c73a8f9-3213-4953-8e98-2493e93f19ba" class="bulleted-list"><li>반복문 안에서 <strong>break &lt;labelName&gt;</strong>문을 사용하면 레이블에 해당하는 반복문을 빠져나올 수 있습니다.</li></ul><pre id="e6bb769e-66af-447b-bf39-41914c4d97bd" class="code code-wrap"><code><mark class="highlight-teal_background"><strong>outer:</strong></mark> for (let i = 0; i &lt; 3; i++) {

  for (let j = 0; j &lt; 3; j++) {

    let input = prompt(`(${i},${j})의 값`, &#x27;&#x27;);

    // 사용자가 아무것도 입력하지 않거나 Cancel 버튼을 누르면 두 반복문 모두를 빠져나옵니다.
    if (!input) <strong><mark class="highlight-teal_background">break outer;</mark></strong> // (*)

    // 입력받은 값을 가지고 무언가를 함
  }
}
alert(&#x27;완료!&#x27;);

//또는 별도의 줄에 써주는 것도 가능합니다.
outer:
for (let i = 0; i &lt; 3; i++) { ... }</code></pre><figure class="block-color-gray_background callout" style="white-space:pre-wrap;display:flex" id="2b689e5e-16f3-41df-abf7-49913df35ea6"><div style="font-size:1.5em"><span class="icon">💡</span></div><div style="width:100%"><strong>레이블은 마음대로 &#x27;점프’할 수 있게 해주지 않습니다.</strong></div></figure><p id="58fe3e9d-a473-47ee-ab71-bbfa46d03625" class="">
</p></div></article></body></html>