(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{1563:function(n,a){n.exports={content:["section",["p",["code","LocaleProvider"]," component. Deprecated, please use ",["a",{title:null,href:"/components/config-provider"},"ConfigProvider"]," instead."],["h2","Usage"],["p",["code","LocaleProvider"]," makes use of ",["a",{title:null,href:"https://facebook.github.io/react/docs/context.html"},"context"],", a feature of React, to accomplish global effectiveness by wrapping the app only once."],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> LocaleProvider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> fr_FR <span class="token keyword">from</span> <span class="token string">\'antd/es/locale-provider/fr_FR\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> moment <span class="token keyword">from</span> <span class="token string">\'moment\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token string">\'moment/locale/fr\'</span><span class="token punctuation">;</span>\n\nmoment<span class="token punctuation">.</span><span class="token function">locale</span><span class="token punctuation">(</span><span class="token string">\'fr\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token operator">...</span>\n\n<span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LocaleProvider</span> <span class="token attr-name">locale</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>fr_FR<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>App</span> <span class="token punctuation">/></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>LocaleProvider</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>'},["code","import { LocaleProvider } from 'antd';\nimport fr_FR from 'antd/es/locale-provider/fr_FR';\nimport moment from 'moment';\nimport 'moment/locale/fr';\n\nmoment.locale('fr');\n...\n\nreturn <LocaleProvider locale={fr_FR}><App /></LocaleProvider>;"]],["p","We provide some locales like English, Chinese, Russian, German, French etc. All locale packages can be found in ",["a",{title:null,href:"https://github.com/ant-design/ant-design/blob/master/components/locale-provider/"},"here"],"."],["p","Note: if you need to use antd's UMD dist file, please use ",["code","antd/dist/antd-with-locales.js"]," and corresponding moment locale:"],["pre",{lang:"jsx",highlighted:'<span class="token keyword">const</span> <span class="token punctuation">{</span> LocaleProvider<span class="token punctuation">,</span> locales <span class="token punctuation">}</span> <span class="token operator">=</span> window<span class="token punctuation">.</span>antd<span class="token punctuation">;</span>\n\n<span class="token operator">...</span>\n\n<span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LocaleProvider</span> <span class="token attr-name">locale</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>locales<span class="token punctuation">.</span>fr_FR<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>App</span> <span class="token punctuation">/></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>LocaleProvider</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>'},["code","const { LocaleProvider, locales } = window.antd;\n\n...\n\nreturn <LocaleProvider locale={locales.fr_FR}><App /></LocaleProvider>;"]],["h3","Add a new language"],["p","If you can't find your language, you are welcome to create a locale package based on ",["a",{title:null,href:"https://github.com/ant-design/ant-design/blob/master/components/locale-provider/en_US.tsx"},"en_US"]," and send us a pull request."],["h3","Other localization needs"],["p","This component aims to provide localization of the built-in text. If you want to support other documents, we recommend using ",["a",{title:null,href:"https://github.com/yahoo/react-intl"},"react-intl"],", refer to ",["a",{title:null,href:"http://github.com/ant-design/intl-example"},"Intl demo 1"]," and ",["a",{title:null,href:"http://yiminghe.me/learning-react/examples/react-intl.html?locale=en-US"},"Intl demo 2"],"."]],meta:{category:"Components",type:"Deprecated",cols:1,title:"LocaleProvider (Deprecated)",filename:"components/locale-provider/index.en-US.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#Usage",title:"Usage"},"Usage"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]],["li",["a",{className:"bisheng-toc-h2",href:"#FAQ",title:"FAQ"},"FAQ"]]],api:["section",["h2","API"],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"],["th","Version"]]],["tbody",["tr",["td","locale"],["td","language package setting, you can find the packages in ",["a",{title:null,href:"http://unpkg.com/antd/es/locale-provider/"},"antd/es/locale-provider"]],["td","object"],["td","-"],["td"]]]],["h2","FAQ"],["h4","Locale problem is still existed even LocaleProvider is used?"],["p","Please make sure you set moment locale by ",["code","moment.locale('zh-cn')"],", or you don't have two moment of different version."]]}}}]);