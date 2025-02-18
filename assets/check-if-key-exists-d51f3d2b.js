import{d as e,v as c,o as t,a as r,h as s,j as l,k as n,A as p}from"./app-b8e5a374.js";const y="/assets/valueOf-956b83dd.png",i={class:"markdown-body"},A={id:".hasownproperty()",tabindex:"-1"},B=s("code",{class:""},".hasOwnProperty()",-1),d=n(),D={class:"header-anchor",href:"#.hasownproperty()"},C=p(`<p>使用物件的 prototype <code class="">hasOwnProperty</code> 檢查。</p><p><strong>不會</strong>遍歷原型鏈。</p><pre><code class="language-javascript"><div class="shiki-container"><pre class="shiki shiki-dark" style="background-color:#121212;"><code class=""><span class="line"><span style="color:#CB7676;">const</span><span style="color:#DBD7CA;"> </span><span style="color:#D4976C;">profile</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">=</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#E0A569;">name</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&#39;Sean&#39;</span><span style="color:#858585;">,</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#E0A569;">age</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#6394BF;">24</span><span style="color:#858585;">,</span></span>
<span class="line"><span style="color:#858585;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B8A965;">profile</span><span style="color:#858585;">.</span><span style="color:#A1B567;">hasOwnProperty</span><span style="color:#858585;">(</span><span style="color:#C98A7D;">&#39;name&#39;</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> </span><span style="color:#758575;">// true</span></span>
<span class="line"><span style="color:#B8A965;">profile</span><span style="color:#858585;">.</span><span style="color:#A1B567;">hasOwnProperty</span><span style="color:#858585;">(</span><span style="color:#C98A7D;">&#39;valueOf&#39;</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> </span><span style="color:#758575;">// false</span></span>
<span class="line"></span></code></pre><pre class="shiki shiki-light" style="background-color:#ffffff;"><code class=""><span class="line"><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">profile</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#B58451;">name</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&#39;Sean&#39;</span><span style="color:#8E8F8B;">,</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#B58451;">age</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#296AA3;">24</span><span style="color:#8E8F8B;">,</span></span>
<span class="line"><span style="color:#8E8F8B;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8C862B;">profile</span><span style="color:#8E8F8B;">.</span><span style="color:#6C7834;">hasOwnProperty</span><span style="color:#8E8F8B;">(</span><span style="color:#B56959;">&#39;name&#39;</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;">// true</span></span>
<span class="line"><span style="color:#8C862B;">profile</span><span style="color:#8E8F8B;">.</span><span style="color:#6C7834;">hasOwnProperty</span><span style="color:#8E8F8B;">(</span><span style="color:#B56959;">&#39;valueOf&#39;</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;">// false</span></span>
<span class="line"></span></code></pre></div></code></pre>`,3),h={id:"in",tabindex:"-1"},f=s("code",{class:""},"in",-1),E=n(),F={class:"header-anchor",href:"#in"},_=p(`<p>最簡潔的寫法，使用關鍵字 <code class="">in</code> 檢查。</p><p>但請留意 <code class="">in</code> <strong>會</strong>去尋找整個原型鏈，可能得到預期外的結果，並造成微乎其微的效能差異。</p><pre><code class="language-javascript"><div class="shiki-container"><pre class="shiki shiki-dark" style="background-color:#121212;"><code class=""><span class="line"><span style="color:#CB7676;">const</span><span style="color:#DBD7CA;"> </span><span style="color:#D4976C;">profile</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">=</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#E0A569;">name</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&#39;Sean&#39;</span><span style="color:#858585;">,</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#E0A569;">age</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#6394BF;">24</span><span style="color:#858585;">,</span></span>
<span class="line"><span style="color:#858585;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C98A7D;">&#39;name&#39;</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">in</span><span style="color:#DBD7CA;"> </span><span style="color:#B8A965;">profile</span><span style="color:#DBD7CA;"> </span><span style="color:#758575;">// true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;">/*</span></span>
<span class="line"><span style="color:#758575;">  ⚠️ 雖然以下 key 並沒有在 \`profile\` 中明確定義，</span></span>
<span class="line"><span style="color:#758575;">  但因為它們存在於物件的 prototype 中，所以依然會得到 true。</span></span>
<span class="line"><span style="color:#758575;">*/</span></span>
<span class="line"><span style="color:#C98A7D;">&#39;valueOf&#39;</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">in</span><span style="color:#DBD7CA;"> </span><span style="color:#B8A965;">profile</span><span style="color:#DBD7CA;"> </span><span style="color:#758575;">// true</span></span>
<span class="line"><span style="color:#C98A7D;">&#39;toString&#39;</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">in</span><span style="color:#DBD7CA;"> </span><span style="color:#B8A965;">profile</span><span style="color:#DBD7CA;"> </span><span style="color:#758575;">// true</span></span>
<span class="line"><span style="color:#C98A7D;">&#39;hasOwnProperty&#39;</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">in</span><span style="color:#DBD7CA;"> </span><span style="color:#B8A965;">profile</span><span style="color:#DBD7CA;"> </span><span style="color:#758575;">// true</span></span>
<span class="line"></span></code></pre><pre class="shiki shiki-light" style="background-color:#ffffff;"><code class=""><span class="line"><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">profile</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#B58451;">name</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&#39;Sean&#39;</span><span style="color:#8E8F8B;">,</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#B58451;">age</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#296AA3;">24</span><span style="color:#8E8F8B;">,</span></span>
<span class="line"><span style="color:#8E8F8B;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B56959;">&#39;name&#39;</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">in</span><span style="color:#393A34;"> </span><span style="color:#8C862B;">profile</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;">// true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;">/*</span></span>
<span class="line"><span style="color:#A0ADA0;">  ⚠️ 雖然以下 key 並沒有在 \`profile\` 中明確定義，</span></span>
<span class="line"><span style="color:#A0ADA0;">  但因為它們存在於物件的 prototype 中，所以依然會得到 true。</span></span>
<span class="line"><span style="color:#A0ADA0;">*/</span></span>
<span class="line"><span style="color:#B56959;">&#39;valueOf&#39;</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">in</span><span style="color:#393A34;"> </span><span style="color:#8C862B;">profile</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;">// true</span></span>
<span class="line"><span style="color:#B56959;">&#39;toString&#39;</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">in</span><span style="color:#393A34;"> </span><span style="color:#8C862B;">profile</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;">// true</span></span>
<span class="line"><span style="color:#B56959;">&#39;hasOwnProperty&#39;</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">in</span><span style="color:#393A34;"> </span><span style="color:#8C862B;">profile</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;">// true</span></span>
<span class="line"></span></code></pre></div></code></pre><p><img src="`+y+'" alt=""></p><blockquote><p>效能實測：<a href="https://www.zhihu.com/question/301305485/answer/1644702242">hasOwnProperty 和 in 哪个性能高？ - frosen的回答 - 知乎</a></p></blockquote>',5),k={id:"object.prototype.hasownproperty.call()",tabindex:"-1"},u=s("code",{class:""},"Object.prototype.hasOwnProperty.call()",-1),g=n(),b={class:"header-anchor",href:"#object.prototype.hasownproperty.call()"},O=p(`<p>由於 JavaScript 未保護 <code class="">hasOwnProperty</code>，所以你完全可以複寫這個屬性，讓它刻意回傳錯誤的結果。</p><pre><code class="language-javascript"><div class="shiki-container"><pre class="shiki shiki-dark" style="background-color:#121212;"><code class=""><span class="line"><span style="color:#CB7676;">const</span><span style="color:#DBD7CA;"> </span><span style="color:#D4976C;">profile</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">=</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#E0A569;">name</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&#39;Sean&#39;</span><span style="color:#858585;">,</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#E0A569;">age</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#6394BF;">24</span><span style="color:#858585;">,</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#A1B567;">hasOwnProperty</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">()</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">=&gt;</span><span style="color:#DBD7CA;"> </span><span style="color:#4D9375;">true</span><span style="color:#858585;">,</span></span>
<span class="line"><span style="color:#858585;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;">/* 😢 現在無論傳入什麼都會得到 true */</span></span>
<span class="line"><span style="color:#B8A965;">profile</span><span style="color:#858585;">.</span><span style="color:#A1B567;">hasOwnProperty</span><span style="color:#858585;">(</span><span style="color:#C98A7D;">&#39;🍺&#39;</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> </span><span style="color:#758575;">// true</span></span>
<span class="line"><span style="color:#B8A965;">profile</span><span style="color:#858585;">.</span><span style="color:#A1B567;">hasOwnProperty</span><span style="color:#858585;">(</span><span style="color:#6394BF;">123</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> </span><span style="color:#758575;">// true</span></span>
<span class="line"></span></code></pre><pre class="shiki shiki-light" style="background-color:#ffffff;"><code class=""><span class="line"><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">profile</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#B58451;">name</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&#39;Sean&#39;</span><span style="color:#8E8F8B;">,</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#B58451;">age</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#296AA3;">24</span><span style="color:#8E8F8B;">,</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#6C7834;">hasOwnProperty</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">()</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=&gt;</span><span style="color:#393A34;"> </span><span style="color:#1C6B48;">true</span><span style="color:#8E8F8B;">,</span></span>
<span class="line"><span style="color:#8E8F8B;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;">/* 😢 現在無論傳入什麼都會得到 true */</span></span>
<span class="line"><span style="color:#8C862B;">profile</span><span style="color:#8E8F8B;">.</span><span style="color:#6C7834;">hasOwnProperty</span><span style="color:#8E8F8B;">(</span><span style="color:#B56959;">&#39;🍺&#39;</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;">// true</span></span>
<span class="line"><span style="color:#8C862B;">profile</span><span style="color:#8E8F8B;">.</span><span style="color:#6C7834;">hasOwnProperty</span><span style="color:#8E8F8B;">(</span><span style="color:#296AA3;">123</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;">// true</span></span>
<span class="line"></span></code></pre></div></code></pre><p>利用 <code class="">Object.prototype.hasOwnProperty.call()</code> 即可避免此情況發生，也<strong>不會</strong>遍歷原型鏈。</p><pre><code class="language-javascript"><div class="shiki-container"><pre class="shiki shiki-dark" style="background-color:#121212;"><code class=""><span class="line"><span style="color:#758575;">/* 😎 雖然冗長但最安全 */</span></span>
<span class="line"><span style="color:#E0A569;">Object</span><span style="color:#858585;">.</span><span style="color:#429988;">prototype</span><span style="color:#858585;">.</span><span style="color:#B8A965;">hasOwnProperty</span><span style="color:#858585;">.</span><span style="color:#A1B567;">call</span><span style="color:#858585;">(</span><span style="color:#B8A965;">profile</span><span style="color:#858585;">,</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&#39;name&#39;</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> </span><span style="color:#758575;">// true</span></span>
<span class="line"><span style="color:#E0A569;">Object</span><span style="color:#858585;">.</span><span style="color:#429988;">prototype</span><span style="color:#858585;">.</span><span style="color:#B8A965;">hasOwnProperty</span><span style="color:#858585;">.</span><span style="color:#A1B567;">call</span><span style="color:#858585;">(</span><span style="color:#B8A965;">profile</span><span style="color:#858585;">,</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&#39;🍺&#39;</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> </span><span style="color:#758575;">// false</span></span>
<span class="line"></span></code></pre><pre class="shiki shiki-light" style="background-color:#ffffff;"><code class=""><span class="line"><span style="color:#A0ADA0;">/* 😎 雖然冗長但最安全 */</span></span>
<span class="line"><span style="color:#B58451;">Object</span><span style="color:#8E8F8B;">.</span><span style="color:#2F8A89;">prototype</span><span style="color:#8E8F8B;">.</span><span style="color:#8C862B;">hasOwnProperty</span><span style="color:#8E8F8B;">.</span><span style="color:#6C7834;">call</span><span style="color:#8E8F8B;">(</span><span style="color:#8C862B;">profile</span><span style="color:#8E8F8B;">,</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&#39;name&#39;</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;">// true</span></span>
<span class="line"><span style="color:#B58451;">Object</span><span style="color:#8E8F8B;">.</span><span style="color:#2F8A89;">prototype</span><span style="color:#8E8F8B;">.</span><span style="color:#8C862B;">hasOwnProperty</span><span style="color:#8E8F8B;">.</span><span style="color:#6C7834;">call</span><span style="color:#8E8F8B;">(</span><span style="color:#8C862B;">profile</span><span style="color:#8E8F8B;">,</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&#39;🍺&#39;</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;">// false</span></span>
<span class="line"></span></code></pre></div></code></pre>`,4),m={id:"object.hasown()",tabindex:"-1"},v=s("code",{class:""},"Object.hasOwn()",-1),w=n(),j={class:"header-anchor",href:"#object.hasown()"},S=p(`<p><a href="https://caniuse.com/mdn-javascript_builtins_object_hasown">ES13</a> 推出的新特性，旨在取代 <code class="">Object.prototype.hasOwnProperty()</code>，寫法相較之下更直觀簡潔。並且和 <code class="">Object.prototype.hasOwnProperty.call()</code> 一樣，即使複寫了 <code class="">hasOwnProperty</code> 依然可以得到正確的結果。</p><p><strong>不會</strong>遍歷原型鏈。</p><pre><code class="language-javascript"><div class="shiki-container"><pre class="shiki shiki-dark" style="background-color:#121212;"><code class=""><span class="line"><span style="color:#CB7676;">const</span><span style="color:#DBD7CA;"> </span><span style="color:#D4976C;">profile</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">=</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#E0A569;">name</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&#39;Sean&#39;</span><span style="color:#858585;">,</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#E0A569;">age</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#6394BF;">24</span><span style="color:#858585;">,</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#A1B567;">hasOwnProperty</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">()</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">=&gt;</span><span style="color:#DBD7CA;"> </span><span style="color:#4D9375;">true</span><span style="color:#858585;">,</span></span>
<span class="line"><span style="color:#858585;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E0A569;">Object</span><span style="color:#858585;">.</span><span style="color:#A1B567;">hasOwn</span><span style="color:#858585;">(</span><span style="color:#B8A965;">profile</span><span style="color:#858585;">,</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&#39;name&#39;</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> </span><span style="color:#758575;">// true</span></span>
<span class="line"><span style="color:#E0A569;">Object</span><span style="color:#858585;">.</span><span style="color:#A1B567;">hasOwn</span><span style="color:#858585;">(</span><span style="color:#B8A965;">profile</span><span style="color:#858585;">,</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&#39;🍺&#39;</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> </span><span style="color:#758575;">// false</span></span>
<span class="line"></span></code></pre><pre class="shiki shiki-light" style="background-color:#ffffff;"><code class=""><span class="line"><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">profile</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#B58451;">name</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&#39;Sean&#39;</span><span style="color:#8E8F8B;">,</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#B58451;">age</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#296AA3;">24</span><span style="color:#8E8F8B;">,</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#6C7834;">hasOwnProperty</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">()</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=&gt;</span><span style="color:#393A34;"> </span><span style="color:#1C6B48;">true</span><span style="color:#8E8F8B;">,</span></span>
<span class="line"><span style="color:#8E8F8B;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B58451;">Object</span><span style="color:#8E8F8B;">.</span><span style="color:#6C7834;">hasOwn</span><span style="color:#8E8F8B;">(</span><span style="color:#8C862B;">profile</span><span style="color:#8E8F8B;">,</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&#39;name&#39;</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;">// true</span></span>
<span class="line"><span style="color:#B58451;">Object</span><span style="color:#8E8F8B;">.</span><span style="color:#6C7834;">hasOwn</span><span style="color:#8E8F8B;">(</span><span style="color:#8C862B;">profile</span><span style="color:#8E8F8B;">,</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&#39;🍺&#39;</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;">// false</span></span>
<span class="line"></span></code></pre></div></code></pre>`,3),P={id:"%E5%85%B6%E4%BB%96%E5%B8%B8%E8%A6%8B%E4%BD%86%E6%9C%89%E9%99%B7%E9%98%B1%E7%9A%84%E6%96%B9%E6%B3%95",tabindex:"-1"},x=n("其他常見但有陷阱的方法 "),z={class:"header-anchor",href:"#%E5%85%B6%E4%BB%96%E5%B8%B8%E8%A6%8B%E4%BD%86%E6%9C%89%E9%99%B7%E9%98%B1%E7%9A%84%E6%96%B9%E6%B3%95"},J={id:"object.keys().includes()-%F0%9F%98%90",tabindex:"-1"},N=s("code",{class:""},"Object.keys().includes()",-1),q=n(" 😐 "),G={class:"header-anchor",href:"#object.keys().includes()-%F0%9F%98%90"},R=p(`<p>先以 <code class="">Object.keys()</code> 取得物件的所有 key 的陣列，接著呼叫陣列的方法 <code class="">includes()</code> 來檢查 key 是否存在。</p><p>但這個方法的時間複雜度是 <code class="">O(n)</code>（<a href="https://stackoverflow.com/a/64912755/12970551">或更高</a>），因為它必須先至少遍歷物件來得到所有的 key，接著尋找時又得再遍歷一次陣列，在 key 數量一多時顯然很沒效率。</p><p><strong>不會</strong>遍歷原型鏈。</p><pre><code class="language-javascript"><div class="shiki-container"><pre class="shiki shiki-dark" style="background-color:#121212;"><code class=""><span class="line"><span style="color:#CB7676;">const</span><span style="color:#DBD7CA;"> </span><span style="color:#D4976C;">profile</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">=</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#E0A569;">name</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&#39;Sean&#39;</span><span style="color:#858585;">,</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#E0A569;">age</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#6394BF;">24</span><span style="color:#858585;">,</span></span>
<span class="line"><span style="color:#858585;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CB7676;">const</span><span style="color:#DBD7CA;"> </span><span style="color:#D4976C;">keys</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">=</span><span style="color:#DBD7CA;"> </span><span style="color:#E0A569;">Object</span><span style="color:#858585;">.</span><span style="color:#A1B567;">keys</span><span style="color:#858585;">(</span><span style="color:#B8A965;">profile</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> </span><span style="color:#758575;">// [&#39;name&#39;, &#39;age&#39;]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B8A965;">keys</span><span style="color:#858585;">.</span><span style="color:#A1B567;">includes</span><span style="color:#858585;">(</span><span style="color:#C98A7D;">&#39;name&#39;</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> </span><span style="color:#758575;">// true</span></span>
<span class="line"><span style="color:#B8A965;">keys</span><span style="color:#858585;">.</span><span style="color:#A1B567;">includes</span><span style="color:#858585;">(</span><span style="color:#C98A7D;">&#39;valueOf&#39;</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> </span><span style="color:#758575;">// false</span></span>
<span class="line"></span></code></pre><pre class="shiki shiki-light" style="background-color:#ffffff;"><code class=""><span class="line"><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">profile</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#B58451;">name</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&#39;Sean&#39;</span><span style="color:#8E8F8B;">,</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#B58451;">age</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#296AA3;">24</span><span style="color:#8E8F8B;">,</span></span>
<span class="line"><span style="color:#8E8F8B;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">keys</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=</span><span style="color:#393A34;"> </span><span style="color:#B58451;">Object</span><span style="color:#8E8F8B;">.</span><span style="color:#6C7834;">keys</span><span style="color:#8E8F8B;">(</span><span style="color:#8C862B;">profile</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;">// [&#39;name&#39;, &#39;age&#39;]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8C862B;">keys</span><span style="color:#8E8F8B;">.</span><span style="color:#6C7834;">includes</span><span style="color:#8E8F8B;">(</span><span style="color:#B56959;">&#39;name&#39;</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;">// true</span></span>
<span class="line"><span style="color:#8C862B;">keys</span><span style="color:#8E8F8B;">.</span><span style="color:#6C7834;">includes</span><span style="color:#8E8F8B;">(</span><span style="color:#B56959;">&#39;valueOf&#39;</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;">// false</span></span>
<span class="line"></span></code></pre></div></code></pre>`,4),U={id:"!%3D%3D-undefined-%F0%9F%98%90",tabindex:"-1"},V=s("code",{class:""},"!== undefined",-1),W=n(" 😐 "),T={class:"header-anchor",href:"#!%3D%3D-undefined-%F0%9F%98%90"},H=p(`<p>當試圖存取不存在於物件的 key 時，會得到 <code class="">undefined</code>。</p><p>但當某 key 存在而且值剛好是 <code class="">undefined</code> 時，那就仍會得到 <code class="">false</code>。</p><p><strong>會</strong>遍歷原型鏈。</p><pre><code class="language-javascript"><div class="shiki-container"><pre class="shiki shiki-dark" style="background-color:#121212;"><code class=""><span class="line"><span style="color:#CB7676;">const</span><span style="color:#DBD7CA;"> </span><span style="color:#D4976C;">profile</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">=</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#E0A569;">name</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&#39;Sean&#39;</span><span style="color:#858585;">,</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#E0A569;">phone</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#D4976C;">undefined</span><span style="color:#858585;">,</span></span>
<span class="line"><span style="color:#858585;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B8A965;">profile</span><span style="color:#858585;">.</span><span style="color:#B8A965;">address</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">!==</span><span style="color:#DBD7CA;"> </span><span style="color:#D4976C;">undefined</span><span style="color:#DBD7CA;"> </span><span style="color:#758575;">// false</span></span>
<span class="line"><span style="color:#B8A965;">profile</span><span style="color:#858585;">.</span><span style="color:#B8A965;">phone</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">!==</span><span style="color:#DBD7CA;"> </span><span style="color:#D4976C;">undefined</span><span style="color:#DBD7CA;"> </span><span style="color:#758575;">// ⚠️ false</span></span>
<span class="line"></span></code></pre><pre class="shiki shiki-light" style="background-color:#ffffff;"><code class=""><span class="line"><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">profile</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#B58451;">name</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&#39;Sean&#39;</span><span style="color:#8E8F8B;">,</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#B58451;">phone</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">undefined</span><span style="color:#8E8F8B;">,</span></span>
<span class="line"><span style="color:#8E8F8B;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8C862B;">profile</span><span style="color:#8E8F8B;">.</span><span style="color:#8C862B;">address</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">!==</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">undefined</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;">// false</span></span>
<span class="line"><span style="color:#8C862B;">profile</span><span style="color:#8E8F8B;">.</span><span style="color:#8C862B;">phone</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">!==</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">undefined</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;">// ⚠️ false</span></span>
<span class="line"></span></code></pre></div></code></pre>`,4),I={id:"!!-%E6%88%96-boolean()-%F0%9F%98%95",tabindex:"-1"},K=s("code",{class:""},"!!",-1),L=n(" 或 "),M=s("code",{class:""},"Boolean()",-1),Q=n(" 😕 "),X={class:"header-anchor",href:"#!!-%E6%88%96-boolean()-%F0%9F%98%95"},Y=p(`<p>簡單暴力的寫法，也就是直接將值轉型成 boolean。但這方法顯然很不可靠，因為只要是 <a href="https://developer.mozilla.org/zh-CN/docs/Glossary/Falsy"><em>falsy</em></a> 值，例如 <code class="">0</code> 、空字串 <code class="">&#39;&#39;</code> 、 <code class="">null</code> 等 ，即使 key 存在但依然會得到 <code class="">false</code>。</p><p>除非你對物件型別有十足的信心，例如在有 TypeScript 的場合，否則不太推薦這寫法。</p><p><strong>會</strong>遍歷原型鏈。</p><pre><code class="language-javascript"><div class="shiki-container"><pre class="shiki shiki-dark" style="background-color:#121212;"><code class=""><span class="line"><span style="color:#CB7676;">const</span><span style="color:#DBD7CA;"> </span><span style="color:#D4976C;">profile</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">=</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#E0A569;">name</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#C98A7D;">&#39;Sean&#39;</span><span style="color:#858585;">,</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#E0A569;">balance</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#6394BF;">0</span><span style="color:#858585;">,</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#E0A569;">isDead</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#4D9375;">false</span><span style="color:#858585;">,</span></span>
<span class="line"><span style="color:#858585;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CB7676;">!!</span><span style="color:#B8A965;">profile</span><span style="color:#858585;">.</span><span style="color:#B8A965;">name</span><span style="color:#DBD7CA;"> </span><span style="color:#758575;">// true</span></span>
<span class="line"><span style="color:#CB7676;">!!</span><span style="color:#B8A965;">profile</span><span style="color:#858585;">.</span><span style="color:#B8A965;">balance</span><span style="color:#DBD7CA;"> </span><span style="color:#758575;">// ⚠️ false</span></span>
<span class="line"><span style="color:#E0A569;">Boolean</span><span style="color:#858585;">(</span><span style="color:#B8A965;">profile</span><span style="color:#858585;">.</span><span style="color:#B8A965;">isDead</span><span style="color:#858585;">)</span><span style="color:#DBD7CA;"> </span><span style="color:#758575;">// ⚠️ false</span></span>
<span class="line"></span></code></pre><pre class="shiki shiki-light" style="background-color:#ffffff;"><code class=""><span class="line"><span style="color:#AB5959;">const</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">profile</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#B58451;">name</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#B56959;">&#39;Sean&#39;</span><span style="color:#8E8F8B;">,</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#B58451;">balance</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#296AA3;">0</span><span style="color:#8E8F8B;">,</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#B58451;">isDead</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#1C6B48;">false</span><span style="color:#8E8F8B;">,</span></span>
<span class="line"><span style="color:#8E8F8B;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#AB5959;">!!</span><span style="color:#8C862B;">profile</span><span style="color:#8E8F8B;">.</span><span style="color:#8C862B;">name</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;">// true</span></span>
<span class="line"><span style="color:#AB5959;">!!</span><span style="color:#8C862B;">profile</span><span style="color:#8E8F8B;">.</span><span style="color:#8C862B;">balance</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;">// ⚠️ false</span></span>
<span class="line"><span style="color:#B58451;">Boolean</span><span style="color:#8E8F8B;">(</span><span style="color:#8C862B;">profile</span><span style="color:#8E8F8B;">.</span><span style="color:#8C862B;">isDead</span><span style="color:#8E8F8B;">)</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;">// ⚠️ false</span></span>
<span class="line"></span></code></pre></div></code></pre>`,4),Z={id:"%E5%8F%83%E8%80%83%E8%B3%87%E6%96%99",tabindex:"-1"},$=n("參考資料 "),ss={class:"header-anchor",href:"#%E5%8F%83%E8%80%83%E8%B3%87%E6%96%99"},ns=s("ul",null,[s("li",null,[s("a",{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty"},"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty")]),s("li",null,[s("a",{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn"},"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn")])],-1),es={title:"檢查物件的 key 是否存在的 N 種方法",date:"2023/07/07",tags:["JavaScript"],original:"https://hackmd.io/@xq/check-if-key-exist"},cs="",ts=e({__name:"check-if-key-exists",setup(as,{expose:o}){return o({frontmatter:{title:"檢查物件的 key 是否存在的 N 種方法",date:"2023/07/07",tags:["JavaScript"],original:"https://hackmd.io/@xq/check-if-key-exist"},excerpt:void 0}),(ls,ps)=>{const a=c("icon-link");return t(),r("div",i,[s("h2",A,[B,d,s("a",D,[l(a)])]),C,s("h2",h,[f,E,s("a",F,[l(a)])]),_,s("h2",k,[u,g,s("a",b,[l(a)])]),O,s("h2",m,[v,w,s("a",j,[l(a)])]),S,s("h2",P,[x,s("a",z,[l(a)])]),s("h3",J,[N,q,s("a",G,[l(a)])]),R,s("h3",U,[V,W,s("a",T,[l(a)])]),H,s("h3",I,[K,L,M,Q,s("a",X,[l(a)])]),Y,s("h2",Z,[$,s("a",ss,[l(a)])]),ns])}}});export{ts as default,cs as excerpt,es as frontmatter};
