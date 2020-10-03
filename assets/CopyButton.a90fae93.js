let s=document.createElement("style");s.innerHTML="",document.head.appendChild(s);import{S as a,i as n,s as t,c as o,a as e,m as c,t as p,b as l,d as r,g as i,h as u,j as f,k as m,l as k,n as $,o as d,p as g,N as b,q as h,r as C,G as v,Y as x}from"./index.6b674a45.js";import"./Button.f0f995b5.js";import{a as y}from"./index.77bc22b8.js";import{C as w,P as j}from"./Preview.da06bf80.js";import"./ChevronDown16.5983f6dc.js";import"./Close20.4da30c2a.js";import"./Loading.1494bed2.js";import"./Column.6ef18044.js";import"./NotificationTextDetails.358eb442.js";import{I as E}from"./InlineNotification.5e476287.js";import"./Content.7baad37e.js";import"./store.4e2c42a1.js";function B(s){let a,n;return a=new y({}),a.$on("click",s[0]),{c(){o(a.$$.fragment)},l(s){e(a.$$.fragment,s)},m(s,t){c(a,s,t),n=!0},i(s){n||(p(a.$$.fragment,s),n=!0)},o(s){l(a.$$.fragment,s),n=!1},d(s){r(a,s)}}}function D(s){let a,n;return a=new y({props:{feedback:"Copied to clipboard"}}),a.$on("click",s[1]),{c(){o(a.$$.fragment)},l(s){e(a.$$.fragment,s)},m(s,t){c(a,s,t),n=!0},p:x,i(s){n||(p(a.$$.fragment,s),n=!0)},o(s){l(a.$$.fragment,s),n=!1},d(s){r(a,s)}}}function L(s){let a,n,t,o,e,c,p,l,r,v,x,y,w,j;return{c(){a=i("div"),n=i("ul"),t=i("li"),o=i("a"),e=u("Usage"),c=f(),p=i("ul"),l=i("li"),r=i("a"),v=u("Default"),x=f(),y=i("li"),w=i("a"),j=u("Custom feedback"),this.h()},l(s){a=m(s,"DIV",{slot:!0});var i=k(a);n=m(i,"UL",{class:!0});var u=k(n);t=m(u,"LI",{class:!0});var f=k(t);o=m(f,"A",{class:!0,href:!0});var b=k(o);e=$(b,"Usage"),b.forEach(d),c=g(f),p=m(f,"UL",{class:!0});var h=k(p);l=m(h,"LI",{class:!0});var C=k(l);r=m(C,"A",{class:!0,href:!0});var E=k(r);v=$(E,"Default"),E.forEach(d),C.forEach(d),x=g(h),y=m(h,"LI",{class:!0});var B=k(y);w=m(B,"A",{class:!0,href:!0});var D=k(w);j=$(D,"Custom feedback"),D.forEach(d),B.forEach(d),h.forEach(d),f.forEach(d),u.forEach(d),i.forEach(d),this.h()},h(){b(o,"class","bx--link"),b(o,"href","#usage"),b(r,"class","bx--link"),b(r,"href","#default"),b(l,"class","bx--list__item"),b(w,"class","bx--link"),b(w,"href","#custom-feedback"),b(y,"class","bx--list__item"),b(p,"class","bx--list--unordered bx--list--nested"),b(t,"class","bx--list__item"),b(n,"class","bx--list--unordered"),b(a,"slot","aside")},m(s,i){h(s,a,i),C(a,n),C(n,t),C(t,o),C(o,e),C(t,c),C(t,p),C(p,l),C(l,r),C(r,v),C(p,x),C(p,y),C(y,w),C(w,j)},d(s){s&&d(a)}}}function I(s){let a,n,t,v,x,y,w,L,I,_,N,U,A;return a=new E({props:{"svx-ignore":!0,lowContrast:!0,title:"Note:",subtitle:"By design, the copy button does not copy text to the clipboard. You will need to write your own logic.",kind:"info",hideCloseButton:!0}}),y=new j({props:{codeRaw:'<script>\n  import { CopyButton } from "carbon-components-svelte";\n<\/script>\n\n<CopyButton on:click />\n',code:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> CopyButton <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"carbon-components-svelte"</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CopyButton</span> <span class="token attr-name"><span class="token namespace">on:</span>click</span> <span class="token punctuation">/></span></span>\n',$$slots:{default:[B]},$$scope:{ctx:s}}}),N=new j({props:{codeRaw:'<script>\n  import { CopyButton } from "carbon-components-svelte";\n<\/script>\n\n<CopyButton on:click feedback="Copied to clipboard" />\n',code:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> CopyButton <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"carbon-components-svelte"</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CopyButton</span> <span class="token attr-name"><span class="token namespace">on:</span>click</span> <span class="token attr-name">feedback</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Copied to clipboard<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n',$$slots:{default:[D]},$$scope:{ctx:s}}}),{c(){o(a.$$.fragment),n=f(),t=i("h3"),v=u("Default"),x=f(),o(y.$$.fragment),w=f(),L=i("h3"),I=u("Custom feedback"),_=f(),o(N.$$.fragment),U=f(),this.h()},l(s){e(a.$$.fragment,s),n=g(s),t=m(s,"H3",{id:!0});var o=k(t);v=$(o,"Default"),o.forEach(d),x=g(s),e(y.$$.fragment,s),w=g(s),L=m(s,"H3",{id:!0});var c=k(L);I=$(c,"Custom feedback"),c.forEach(d),_=g(s),e(N.$$.fragment,s),U=g(s),this.h()},h(){b(t,"id","default"),b(L,"id","custom-feedback")},m(s,o){c(a,s,o),h(s,n,o),h(s,t,o),C(t,v),h(s,x,o),c(y,s,o),h(s,w,o),h(s,L,o),C(L,I),h(s,_,o),c(N,s,o),h(s,U,o),A=!0},p(s,a){const n={};4&a&&(n.$$scope={dirty:a,ctx:s}),y.$set(n);const t={};4&a&&(t.$$scope={dirty:a,ctx:s}),N.$set(t)},i(s){A||(p(a.$$.fragment,s),p(y.$$.fragment,s),p(N.$$.fragment,s),A=!0)},o(s){l(a.$$.fragment,s),l(y.$$.fragment,s),l(N.$$.fragment,s),A=!1},d(s){r(a,s),s&&d(n),s&&d(t),s&&d(x),r(y,s),s&&d(w),s&&d(L),s&&d(_),r(N,s),s&&d(U)}}}function _(s){let a,n;return a=new w({props:{$$slots:{default:[I],aside:[L]},$$scope:{ctx:s}}}),{c(){o(a.$$.fragment)},l(s){e(a.$$.fragment,s)},m(s,t){c(a,s,t),n=!0},p(s,[n]){const t={};4&n&&(t.$$scope={dirty:n,ctx:s}),a.$set(t)},i(s){n||(p(a.$$.fragment,s),n=!0)},o(s){l(a.$$.fragment,s),n=!1},d(s){r(a,s)}}}function N(s){return[function(a){v(s,a)},function(a){v(s,a)}]}export default class extends a{constructor(s){super(),n(this,s,N,_,t,{})}}