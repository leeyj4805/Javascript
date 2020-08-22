<title>2-1 Hello world</title>
<head></head><body><article id="4d5c9cb0-b05e-4fb1-a701-aabf10425425" class="page sans"><header><h1 class="page-title">2-1 Hello world</h1><table class="properties"><tbody><tr class="property-row property-row-file"><th><span class="icon property-icon"><svg viewBox="0 0 14 14" style="width:14px;height:14px;display:block;fill:rgba(55, 53, 47, 0.4);flex-shrink:0;-webkit-backface-visibility:hidden" class="typesFile"><path d="M5.94578,14 C4.62416,14 3.38248,13.4963 2.44892,12.585 C1.514641,11.6736 1,10.4639 1,9.17405 C1.00086108,7.88562 1.514641,6.67434 2.44892,5.76378 L7.45612,0.985988 C8.80142,-0.327216 11.1777,-0.332396 12.5354,0.992848 C13.9369,2.36163 13.9369,4.58722 12.5354,5.95418 L8.03046,10.2414 C7.16278,11.0877 5.73682,11.0894 4.86024,10.2345 C3.98394,9.37789 3.98394,7.98769 4.86024,7.1327 L6.60422,5.4317 L7.87576,6.67196 L6.13177,8.37297 C6.01668,8.48539 6.00003,8.61545 6.00003,8.68335 C6.00003,8.75083 6.01668,8.88103 6.13177,8.99429 C6.36197,9.21689 6.53749,9.21689 6.76768,8.99429 L11.2707,4.70622 C11.9645,4.03016 11.9645,2.91757 11.2638,2.23311 C10.5843,1.57007 9.40045,1.57007 8.72077,2.23311 L3.71342,7.0109 C3.12602,7.58406 2.79837,8.35435 2.79837,9.17405 C2.79837,9.99459 3.12602,10.7654 3.72045,11.3446 C4.90947,12.5062 6.98195,12.5062 8.17096,11.3446 L10.41911,9.15165 L11.6906,10.3919 L9.4425,12.585 C8.50808,13.4963 7.2664,14 5.94578,14 Z"></path></svg></span>Files</th><td></td></tr></tbody></table></header><div class="page-body"><h1 id="6611868d-360e-4165-8c87-15a1095b6fa0" class="">Hello,world</h1><hr id="413f503d-223c-49f4-8eff-6a550084c026"/><h3 id="69af24f1-033e-4dd8-9e79-b55754928890" class="">&quot;script&quot; 태그</h3><p id="27141d31-3c60-4070-a573-71cbcba0db36" class=""> <strong><mark class="highlight-gray_background"> &lt;script&gt; </mark></strong>태그를 이용하게 되면 HTML 문서에서 사용 가능함</p><p id="d45fa8db-f750-4228-8b9c-49f587606630" class="">
</p><pre id="969b6b12-5bde-4f6b-aeca-aff53368834d" class="code code-wrap"><code>&lt;!DOCTYPE HTML&gt;
&lt;html&gt;

&lt;body&gt;

	&lt;p&gt;스크립트 전&lt;/p&gt;

	&lt;script&gt;
		alert( &#x27;Hello,world!&#x27; );
	&lt;/script&gt;

	&lt;p&gt;스크립트 후&lt;/p&gt;

&lt;/body&gt;

&lt;/html&gt;</code></pre><h3 id="9aa2356d-377f-4712-96dc-44ad0472a742" class="">모던 마크업</h3><p id="04b1629a-bea5-4b14-88a6-b935e73d3b4f" class=""><mark class="highlight-gray_background">type=&quot;text/javascript&quot;</mark>이제는 필수가 아니다.</p><pre id="843d9fd2-ec01-4fb9-b38c-43a196fefbdc" class="code code-wrap"><code>&lt;script type=&quot;text/javascript&quot;&gt; &lt;!--//--&gt; &lt;/script&gt;</code></pre><ul id="e6a998e2-94e4-4657-ba15-1b2b318bbdff" class="bulleted-list"><li>스크립트 전후에 위치해 있는 주석은 모든 자바스크립트에서 이런 트릭을 사용하지 않습니다. (오래된 코드)</li></ul><h3 id="7ff60a43-9261-439a-a658-62474c1184bd" class="">외부 스크립트</h3><p id="fe3c9b34-3123-436e-94f9-a824c0ddc170" class="">복수의 스크립트를 HTML에 삽입할 시 스크립트 태그를 여러 개 사용한다.</p><pre id="4748445e-f29b-4f71-bc75-42231e1ca646" class="code code-wrap"><code>&lt;script src=&quot;/js/script1.js&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;/js/script2.js&quot;&gt;&lt;/script&gt;</code></pre><p id="7674bd0c-2753-4ebf-a15d-31b5bf97a7ca" class="">※ html안에 스크립트를 작성하는 방식은 간단할때만 사용한다. 또한 별도의 파일에 작성할 경우 <strong><mark class="highlight-orange_background">브라우저가 스크립트를 다운받아 캐시(cache)에 저장</mark></strong>을 하게 되기 때문에 성능상의 이점이 있다.</p><p id="fe4c56f2-a823-44ff-ae02-badc5afc1206" class="">※ 여러 페이지에 <mark class="highlight-orange"><strong>동일한 스크립트를 사용하는 경우 캐시로부터 스크립트를 가지고 와서 사용</strong></mark>한다. (트래픽이 절약되고 웹페이지 실 속도가 빨라짐)</p><ul id="00b98e38-818d-40eb-bce8-029a440df900" class="toggle"><li><details open=""><summary>src 속성이 있다면 태그 내부의 코드가 무시됩니다. </summary><pre id="2f050e22-5c0a-419b-8c92-5d21598f9a76" class="code"><code>&lt;script src=&quot;file.js&quot;&gt;
	alert(1);// 이 코드가 무시된다.
&lt;/script&gt;</code></pre><p id="f8450ee4-2c83-44f7-b8b2-1f9238c9f462" class=""><strong>정상적으로 실행되는 코드</strong></p><pre id="ea668961-3b07-4149-91cd-930c7db36bfc" class="code"><code>&lt;script src=&quot;file.js&quot;&gt;&lt;/script&gt;
&lt;script&gt;
	aleat(1);
&lt;/script&gt;</code></pre><p id="2520dc79-9a4f-4de0-845d-11690903148e" class="">
</p></details></li></ul></div></article></body></html>
