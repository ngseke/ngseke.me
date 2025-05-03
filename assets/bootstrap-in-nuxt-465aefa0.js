import{d as e,v as t,o as c,a as r,h as s,j as o,k as a,A as l}from"./app-913786f8.js";const i={class:"markdown-body"},y=s("blockquote",null,[s("p",null,[a("此筆記指的是純 "),s("a",{href:"https://github.com/twbs/bootstrap"},"bootstrap"),a("，與 "),s("a",{href:"https://github.com/bootstrap-vue/bootstrap-vue"},"bootstrap-vue"),a(" 無關。")])],-1),A=s("blockquote",null,[s("p",null,[a("下文出現的 "),s("strong",null,"BS"),a(" 是 Bootstrap 的簡寫")])],-1),d={id:"%F0%9F%8C%9F-%E9%80%99%E7%AF%87%E7%AD%86%E8%A8%98%E7%9A%84%E9%87%8D%E9%BB%9E%E6%9C%89%E5%93%AA%E4%BA%9B%EF%BC%9F",tabindex:"-1"},B=a("🌟 這篇筆記的重點有哪些？ "),h={class:"header-anchor",href:"#%F0%9F%8C%9F-%E9%80%99%E7%AF%87%E7%AD%86%E8%A8%98%E7%9A%84%E9%87%8D%E9%BB%9E%E6%9C%89%E5%93%AA%E4%BA%9B%EF%BC%9F"},u=s("p",null,"與直接匯入編譯過並打包好的 css 相比，此作法：",-1),D=s("ol",null,[s("li",null,"保留自定義樣式的能力，優雅地從根源自定義主題，免去用層層的自訂 class 複寫"),s("li",null,[a("避免組件充斥著 "),s("code",{class:""},"@media (min-width: 576px) { ... }"),a(" 諸如此類的魔法數字")]),s("li",null,"節省專案建構大小")],-1),E={id:"%F0%9F%94%A7-%E5%AE%89%E8%A3%9D-bootstrap",tabindex:"-1"},_=a("🔧 安裝 Bootstrap "),b={class:"header-anchor",href:"#%F0%9F%94%A7-%E5%AE%89%E8%A3%9D-bootstrap"},C=l(`<pre><code class="language-bash"><div class="shiki-container"><pre class="shiki shiki-dark" style="background-color:#121212;"><code class=""><span class="line"><span style="color:#DBD7CA;">npm i bootstrap</span></span>
<span class="line"></span></code></pre><pre class="shiki shiki-light" style="background-color:#ffffff;"><code class=""><span class="line"><span style="color:#393A34;">npm i bootstrap</span></span>
<span class="line"></span></code></pre></div></code></pre>`,1),m={id:"%F0%9F%94%A7-%E5%AE%89%E8%A3%9D-%40nuxtjs%2Fstyle-resources",tabindex:"-1"},F=a("🔧 安裝 "),g=s("code",{class:""},"@nuxtjs/style-resources",-1),k=a(),f={class:"header-anchor",href:"#%F0%9F%94%A7-%E5%AE%89%E8%A3%9D-%40nuxtjs%2Fstyle-resources"},q=l(`<pre><code class="language-bash"><div class="shiki-container"><pre class="shiki shiki-dark" style="background-color:#121212;"><code class=""><span class="line"><span style="color:#DBD7CA;">npm i @nuxtjs/style-resources</span></span>
<span class="line"></span></code></pre><pre class="shiki shiki-light" style="background-color:#ffffff;"><code class=""><span class="line"><span style="color:#393A34;">npm i @nuxtjs/style-resources</span></span>
<span class="line"></span></code></pre></div></code></pre>`,1),x={id:"%F0%9F%93%83-%E5%BB%BA%E7%AB%8B-_bootstrap.sass",tabindex:"-1"},v=a("📃 建立 "),S=s("code",{class:""},"_bootstrap.sass",-1),w=a(),j={class:"header-anchor",href:"#%F0%9F%93%83-%E5%BB%BA%E7%AB%8B-_bootstrap.sass"},$=l(`<p>建立 <code class="">assets/sass/style-resources/_bootstrap.sass</code>（檔名隨意）</p><p>在裡面匯入 BS 的源 SCSS 檔案，這三行是必須的。</p><pre><code class="language-sass"><div class="shiki-container"><pre class="shiki shiki-dark" style="background-color:#121212;"><code class=""><span class="line"><span style="color:#758575;">// _bootstrap.sass</span></span>
<span class="line"></span>
<span class="line"><span style="color:#4D9375;">@import</span><span style="color:#D4976C;"> &quot;~bootstrap/scss/functions&quot;</span></span>
<span class="line"><span style="color:#4D9375;">@import</span><span style="color:#D4976C;"> &quot;~bootstrap/scss/variables&quot;</span></span>
<span class="line"><span style="color:#4D9375;">@import</span><span style="color:#D4976C;"> &quot;~bootstrap/scss/mixins&quot;</span></span>
<span class="line"></span></code></pre><pre class="shiki shiki-light" style="background-color:#ffffff;"><code class=""><span class="line"><span style="color:#A0ADA0;">// _bootstrap.sass</span></span>
<span class="line"></span>
<span class="line"><span style="color:#1C6B48;">@import</span><span style="color:#A65E2B;"> &quot;~bootstrap/scss/functions&quot;</span></span>
<span class="line"><span style="color:#1C6B48;">@import</span><span style="color:#A65E2B;"> &quot;~bootstrap/scss/variables&quot;</span></span>
<span class="line"><span style="color:#1C6B48;">@import</span><span style="color:#A65E2B;"> &quot;~bootstrap/scss/mixins&quot;</span></span>
<span class="line"></span></code></pre></div></code></pre><blockquote><p><a href="https://getbootstrap.com/docs/4.6/getting-started/theming/#importing">https://getbootstrap.com/docs/4.6/getting-started/theming/#importing</a></p></blockquote>`,4),N={id:"%F0%9F%93%83-%E5%BB%BA%E7%AB%8B-_custom.sass",tabindex:"-1"},V=a("📃 建立 "),R=s("code",{class:""},"_custom.sass",-1),T=a(),z={class:"header-anchor",href:"#%F0%9F%93%83-%E5%BB%BA%E7%AB%8B-_custom.sass"},G=l(`<p>建立 <code class="">assets/sass/style-resources/_custom.sass</code>（檔名隨意）。</p><p>此檔用來複寫 BS 預設變數。</p><pre><code class="language-sass"><div class="shiki-container"><pre class="shiki shiki-dark" style="background-color:#121212;"><code class=""><span class="line"><span style="color:#758575;">// _custom.sass</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;">// 🌰 舉例：</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;">// 將「primary」換成黃色</span></span>
<span class="line"><span style="color:#B8A965;">$theme-colors</span><span style="color:#DBD7CA;">: (</span><span style="color:#D4976C;">primary</span><span style="color:#DBD7CA;">: </span><span style="color:#D4976C;">#ffd019</span><span style="color:#A1B567;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;">// 將連結換成黃色，並移除 hover 的底線</span></span>
<span class="line"><span style="color:#B8A965;">$link-color</span><span style="color:#DBD7CA;">: </span><span style="color:#D4976C;">#ffd019</span></span>
<span class="line"><span style="color:#B8A965;">$link-hover-decoration</span><span style="color:#DBD7CA;">: </span><span style="color:#D4976C;">none</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;">// 重新定義斷點大小</span></span>
<span class="line"><span style="color:#B8A965;">$grid-breakpoints</span><span style="color:#DBD7CA;">: (</span><span style="color:#D4976C;">xs</span><span style="color:#DBD7CA;">: </span><span style="color:#6394BF;">0</span><span style="color:#758575;">,</span><span style="color:#DBD7CA;"> </span><span style="color:#D4976C;">sm</span><span style="color:#DBD7CA;">: </span><span style="color:#6394BF;">576</span><span style="color:#4D9375;">px</span><span style="color:#758575;">,</span><span style="color:#DBD7CA;"> </span><span style="color:#D4976C;">md</span><span style="color:#DBD7CA;">: </span><span style="color:#6394BF;">768</span><span style="color:#4D9375;">px</span><span style="color:#758575;">,</span><span style="color:#DBD7CA;"> </span><span style="color:#D4976C;">lg</span><span style="color:#DBD7CA;">: </span><span style="color:#6394BF;">992</span><span style="color:#4D9375;">px</span><span style="color:#758575;">,</span><span style="color:#DBD7CA;"> </span><span style="color:#D4976C;">xl</span><span style="color:#DBD7CA;">: </span><span style="color:#6394BF;">1200</span><span style="color:#4D9375;">px</span><span style="color:#758575;">,</span><span style="color:#DBD7CA;"> </span><span style="color:#D4976C;">xxl</span><span style="color:#DBD7CA;">: </span><span style="color:#6394BF;">1400</span><span style="color:#4D9375;">px</span><span style="color:#A1B567;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;">/* ... */</span></span>
<span class="line"></span></code></pre><pre class="shiki shiki-light" style="background-color:#ffffff;"><code class=""><span class="line"><span style="color:#A0ADA0;">// _custom.sass</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;">// 🌰 舉例：</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;">// 將「primary」換成黃色</span></span>
<span class="line"><span style="color:#8C862B;">$theme-colors</span><span style="color:#393A34;">: (</span><span style="color:#A65E2B;">primary</span><span style="color:#393A34;">: </span><span style="color:#A65E2B;">#ffd019</span><span style="color:#6C7834;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;">// 將連結換成黃色，並移除 hover 的底線</span></span>
<span class="line"><span style="color:#8C862B;">$link-color</span><span style="color:#393A34;">: </span><span style="color:#A65E2B;">#ffd019</span></span>
<span class="line"><span style="color:#8C862B;">$link-hover-decoration</span><span style="color:#393A34;">: </span><span style="color:#A65E2B;">none</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;">// 重新定義斷點大小</span></span>
<span class="line"><span style="color:#8C862B;">$grid-breakpoints</span><span style="color:#393A34;">: (</span><span style="color:#A65E2B;">xs</span><span style="color:#393A34;">: </span><span style="color:#296AA3;">0</span><span style="color:#A0ADA0;">,</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">sm</span><span style="color:#393A34;">: </span><span style="color:#296AA3;">576</span><span style="color:#1C6B48;">px</span><span style="color:#A0ADA0;">,</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">md</span><span style="color:#393A34;">: </span><span style="color:#296AA3;">768</span><span style="color:#1C6B48;">px</span><span style="color:#A0ADA0;">,</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">lg</span><span style="color:#393A34;">: </span><span style="color:#296AA3;">992</span><span style="color:#1C6B48;">px</span><span style="color:#A0ADA0;">,</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">xl</span><span style="color:#393A34;">: </span><span style="color:#296AA3;">1200</span><span style="color:#1C6B48;">px</span><span style="color:#A0ADA0;">,</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">xxl</span><span style="color:#393A34;">: </span><span style="color:#296AA3;">1400</span><span style="color:#1C6B48;">px</span><span style="color:#6C7834;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;">/* ... */</span></span>
<span class="line"></span></code></pre></div></code></pre><blockquote><p>更多可供複寫的變數都列在此處：<br><a href="https://github.com/twbs/bootstrap/blob/main/scss/_variables.scss">https://github.com/twbs/bootstrap/blob/main/scss/_variables.scss</a></p></blockquote>`,4),H={id:"%F0%9F%93%83-%E5%BB%BA%E7%AB%8B-style.sass",tabindex:"-1"},I=a("📃 建立 "),J=s("code",{class:""},"style.sass",-1),K=a(),L={class:"header-anchor",href:"#%F0%9F%93%83-%E5%BB%BA%E7%AB%8B-style.sass"},M=l(`<p>建立 <code class="">assets/sass/style.sass</code>（檔名隨意）</p><p>根據各自需求匯入 BS 元件，這些元件將會套用前面設定的主題變數。</p><pre><code class="language-sass"><div class="shiki-container"><pre class="shiki shiki-dark" style="background-color:#121212;"><code class=""><span class="line"><span style="color:#758575;">// style.sass</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;">// 👍 推薦的元件</span></span>
<span class="line"><span style="color:#4D9375;">@import</span><span style="color:#D4976C;"> &quot;~bootstrap/scss/reboot&quot;</span></span>
<span class="line"><span style="color:#4D9375;">@import</span><span style="color:#D4976C;"> &quot;~bootstrap/scss/utilities&quot;</span></span>
<span class="line"><span style="color:#4D9375;">@import</span><span style="color:#D4976C;"> &quot;~bootstrap/scss/grid&quot;</span></span>
<span class="line"><span style="color:#4D9375;">@import</span><span style="color:#D4976C;"> &quot;~bootstrap/scss/type&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;">// 其他常用元件</span></span>
<span class="line"><span style="color:#4D9375;">@import</span><span style="color:#D4976C;"> &quot;~bootstrap/scss/images&quot;</span></span>
<span class="line"><span style="color:#4D9375;">@import</span><span style="color:#D4976C;"> &quot;~bootstrap/scss/nav&quot;</span></span>
<span class="line"><span style="color:#4D9375;">@import</span><span style="color:#D4976C;"> &quot;~bootstrap/scss/navbar&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#758575;">/* ... */</span></span>
<span class="line"></span></code></pre><pre class="shiki shiki-light" style="background-color:#ffffff;"><code class=""><span class="line"><span style="color:#A0ADA0;">// style.sass</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;">// 👍 推薦的元件</span></span>
<span class="line"><span style="color:#1C6B48;">@import</span><span style="color:#A65E2B;"> &quot;~bootstrap/scss/reboot&quot;</span></span>
<span class="line"><span style="color:#1C6B48;">@import</span><span style="color:#A65E2B;"> &quot;~bootstrap/scss/utilities&quot;</span></span>
<span class="line"><span style="color:#1C6B48;">@import</span><span style="color:#A65E2B;"> &quot;~bootstrap/scss/grid&quot;</span></span>
<span class="line"><span style="color:#1C6B48;">@import</span><span style="color:#A65E2B;"> &quot;~bootstrap/scss/type&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;">// 其他常用元件</span></span>
<span class="line"><span style="color:#1C6B48;">@import</span><span style="color:#A65E2B;"> &quot;~bootstrap/scss/images&quot;</span></span>
<span class="line"><span style="color:#1C6B48;">@import</span><span style="color:#A65E2B;"> &quot;~bootstrap/scss/nav&quot;</span></span>
<span class="line"><span style="color:#1C6B48;">@import</span><span style="color:#A65E2B;"> &quot;~bootstrap/scss/navbar&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0ADA0;">/* ... */</span></span>
<span class="line"></span></code></pre></div></code></pre><blockquote><p>可用的元件列表及用途請參考此處：<br><a href="https://github.com/twbs/bootstrap/tree/main/scss">https://github.com/twbs/bootstrap/tree/main/scss</a></p></blockquote>`,4),O={id:"%E2%9C%8F%EF%B8%8F-%E9%85%8D%E7%BD%AE-nuxt.config.js",tabindex:"-1"},P=a("✏️ 配置 "),Q=s("code",{class:""},"nuxt.config.js",-1),U=a(),W={class:"header-anchor",href:"#%E2%9C%8F%EF%B8%8F-%E9%85%8D%E7%BD%AE-nuxt.config.js"},X=l(`<pre><code class="language-javascript"><div class="shiki-container"><pre class="shiki shiki-dark" style="background-color:#121212;"><code class=""><span class="line"><span style="color:#4D9375;">export</span><span style="color:#DBD7CA;"> </span><span style="color:#4D9375;">default</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#758575;">/* ... */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#E0A569;">styleResources</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">{</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#E0A569;">sass</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">[</span></span>
<span class="line"><span style="color:#DBD7CA;">      </span><span style="color:#C98A7D;">&#39;./assets/sass/style-resources/_custom.sass&#39;</span><span style="color:#858585;">,</span></span>
<span class="line"><span style="color:#DBD7CA;">      </span><span style="color:#C98A7D;">&#39;./assets/sass/style-resources/_bootstrap.sass&#39;</span><span style="color:#858585;">,</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#858585;">],</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">},</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#E0A569;">css</span><span style="color:#858585;">:</span><span style="color:#DBD7CA;"> </span><span style="color:#858585;">[</span></span>
<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#C98A7D;">&#39;./assets/sass/style.sass&#39;</span><span style="color:#858585;">,</span></span>
<span class="line"><span style="color:#DBD7CA;">  </span><span style="color:#858585;">],</span></span>
<span class="line"><span style="color:#858585;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki shiki-light" style="background-color:#ffffff;"><code class=""><span class="line"><span style="color:#1C6B48;">export</span><span style="color:#393A34;"> </span><span style="color:#1C6B48;">default</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#A0ADA0;">/* ... */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#B58451;">styleResources</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">{</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#B58451;">sass</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">[</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#B56959;">&#39;./assets/sass/style-resources/_custom.sass&#39;</span><span style="color:#8E8F8B;">,</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#B56959;">&#39;./assets/sass/style-resources/_bootstrap.sass&#39;</span><span style="color:#8E8F8B;">,</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#8E8F8B;">],</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">},</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#B58451;">css</span><span style="color:#8E8F8B;">:</span><span style="color:#393A34;"> </span><span style="color:#8E8F8B;">[</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#B56959;">&#39;./assets/sass/style.sass&#39;</span><span style="color:#8E8F8B;">,</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#8E8F8B;">],</span></span>
<span class="line"><span style="color:#8E8F8B;">}</span></span>
<span class="line"></span></code></pre></div></code></pre><blockquote><p>⚠️ 注意<br> 是在 <code class="">css</code> 匯入 <code class="">style.sass</code>，而不是在<code class="">styleResources</code> 匯入。<br> 在 <code class="">styleResources</code> 匯入的話，將使得<strong>每個 Vue 組件</strong>都包含一大包的 Bootstrap 樣式，造成專案容量爆肥，編譯速度也會被嚴重拖慢。</p></blockquote>`,2),Y={id:"%F0%9F%96%96-%E5%9C%A8-vue-%E7%B5%84%E4%BB%B6%E5%85%A7%E4%BD%BF%E7%94%A8",tabindex:"-1"},Z=a("🖖 在 Vue 組件內使用 "),ss={class:"header-anchor",href:"#%F0%9F%96%96-%E5%9C%A8-vue-%E7%B5%84%E4%BB%B6%E5%85%A7%E4%BD%BF%E7%94%A8"},as=l(`<p>🎉 大功告成！</p><p>如此便可自由自在地在 vue 組件內使用 BS 的 class 和所有 SCSS/SASS 變數。</p><pre><code class="language-vue"><div class="shiki-container"><pre class="shiki shiki-dark" style="background-color:#121212;"><code class=""><span class="line"><span style="color:#858585;">&lt;</span><span style="color:#429988;">template</span><span style="color:#858585;">&gt;</span><span style="color:#DBD7CA;">/* ... */</span><span style="color:#858585;">&lt;/</span><span style="color:#429988;">template</span><span style="color:#858585;">&gt;</span></span>
<span class="line"><span style="color:#858585;">&lt;</span><span style="color:#429988;">script</span><span style="color:#858585;">&gt;</span><span style="color:#DBD7CA;">/* ... */</span><span style="color:#858585;">&lt;/</span><span style="color:#429988;">script</span><span style="color:#858585;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#858585;">&lt;</span><span style="color:#429988;">style</span><span style="color:#858585;"> </span><span style="color:#E0A569;">lang</span><span style="color:#858585;">=</span><span style="color:#C98A7D;">&quot;sass&quot;</span><span style="color:#858585;"> </span><span style="color:#E0A569;">scoped</span><span style="color:#858585;">&gt;</span></span>
<span class="line"><span style="color:#DBD7CA;">div</span></span>
<span class="line"><span style="color:#DBD7CA;">  @include media-breakpoint-down(sm)</span></span>
<span class="line"><span style="color:#DBD7CA;">    background: $primary</span></span>
<span class="line"><span style="color:#858585;">&lt;/</span><span style="color:#429988;">style</span><span style="color:#858585;">&gt;</span></span>
<span class="line"></span></code></pre><pre class="shiki shiki-light" style="background-color:#ffffff;"><code class=""><span class="line"><span style="color:#8E8F8B;">&lt;</span><span style="color:#2F8A89;">template</span><span style="color:#8E8F8B;">&gt;</span><span style="color:#393A34;">/* ... */</span><span style="color:#8E8F8B;">&lt;/</span><span style="color:#2F8A89;">template</span><span style="color:#8E8F8B;">&gt;</span></span>
<span class="line"><span style="color:#8E8F8B;">&lt;</span><span style="color:#2F8A89;">script</span><span style="color:#8E8F8B;">&gt;</span><span style="color:#393A34;">/* ... */</span><span style="color:#8E8F8B;">&lt;/</span><span style="color:#2F8A89;">script</span><span style="color:#8E8F8B;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8E8F8B;">&lt;</span><span style="color:#2F8A89;">style</span><span style="color:#8E8F8B;"> </span><span style="color:#B58451;">lang</span><span style="color:#8E8F8B;">=</span><span style="color:#B56959;">&quot;sass&quot;</span><span style="color:#8E8F8B;"> </span><span style="color:#B58451;">scoped</span><span style="color:#8E8F8B;">&gt;</span></span>
<span class="line"><span style="color:#393A34;">div</span></span>
<span class="line"><span style="color:#393A34;">  @include media-breakpoint-down(sm)</span></span>
<span class="line"><span style="color:#393A34;">    background: $primary</span></span>
<span class="line"><span style="color:#8E8F8B;">&lt;/</span><span style="color:#2F8A89;">style</span><span style="color:#8E8F8B;">&gt;</span></span>
<span class="line"></span></code></pre></div></code></pre>`,3),es={title:"在 Nuxt 專案穩穩地匯入 Bootstrap",date:"2021/11/21",tags:["Nuxt","Vue","Bootstrap"],original:"https://hackmd.io/@xq/bootstrap-with-nuxt"},ts="",cs=e({__name:"bootstrap-in-nuxt",setup(ns,{expose:p}){return p({frontmatter:{title:"在 Nuxt 專案穩穩地匯入 Bootstrap",date:"2021/11/21",tags:["Nuxt","Vue","Bootstrap"],original:"https://hackmd.io/@xq/bootstrap-with-nuxt"},excerpt:void 0}),(os,ls)=>{const n=t("icon-link");return c(),r("div",i,[y,A,s("h2",d,[B,s("a",h,[o(n)])]),u,D,s("h2",E,[_,s("a",b,[o(n)])]),C,s("h2",m,[F,g,k,s("a",f,[o(n)])]),q,s("h2",x,[v,S,w,s("a",j,[o(n)])]),$,s("h2",N,[V,R,T,s("a",z,[o(n)])]),G,s("h2",H,[I,J,K,s("a",L,[o(n)])]),M,s("h2",O,[P,Q,U,s("a",W,[o(n)])]),X,s("h2",Y,[Z,s("a",ss,[o(n)])]),as])}}});export{cs as default,ts as excerpt,es as frontmatter};
