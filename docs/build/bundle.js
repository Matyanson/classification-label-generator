var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function r(t){t.forEach(e)}function o(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function u(e,...n){if(null==e)return t;const r=e.subscribe(...n);return r.unsubscribe?()=>r.unsubscribe():r}function c(t,e,n){t.$$.on_destroy.push(u(e,n))}function i(t,e,n){return t.set(n),e}function l(t,e){t.appendChild(e)}function a(t,e,n){t.insertBefore(e,n||null)}function f(t){t.parentNode.removeChild(t)}function d(t){return document.createElement(t)}function h(t){return document.createTextNode(t)}function g(){return h(" ")}function p(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function m(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function $(t){return""===t?null:+t}function b(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function y(t,e){t.value=null==e?"":e}let w;function v(t){w=t}function x(t){(function(){if(!w)throw new Error("Function called outside component initialization");return w})().$$.on_mount.push(t)}const _=[],k=[],A=[],S=[],j=Promise.resolve();let C=!1;function E(t){A.push(t)}const O=new Set;let L=0;function P(){const t=w;do{for(;L<_.length;){const t=_[L];L++,v(t),R(t.$$)}for(v(null),_.length=0,L=0;k.length;)k.pop()();for(let t=0;t<A.length;t+=1){const e=A[t];O.has(e)||(O.add(e),e())}A.length=0}while(_.length);for(;S.length;)S.pop()();C=!1,O.clear(),v(t)}function R(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(E)}}const N=new Set;let z;function D(t,e){t&&t.i&&(N.delete(t),t.i(e))}function B(t,e,n,r){if(t&&t.o){if(N.has(t))return;N.add(t),z.c.push((()=>{N.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}function I(t){t&&t.c()}function K(t,n,s,u){const{fragment:c,on_mount:i,on_destroy:l,after_update:a}=t.$$;c&&c.m(n,s),u||E((()=>{const n=i.map(e).filter(o);l?l.push(...n):r(n),t.$$.on_mount=[]})),a.forEach(E)}function M(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function U(t,e){-1===t.$$.dirty[0]&&(_.push(t),C||(C=!0,j.then(P)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function F(e,o,s,u,c,i,l,a=[-1]){const d=w;v(e);const h=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:c,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(o.context||(d?d.$$.context:[])),callbacks:n(),dirty:a,skip_bound:!1,root:o.target||d.$$.root};l&&l(h.root);let g=!1;if(h.ctx=s?s(e,o.props||{},((t,n,...r)=>{const o=r.length?r[0]:n;return h.ctx&&c(h.ctx[t],h.ctx[t]=o)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](o),g&&U(e,t)),n})):[],h.update(),g=!0,r(h.before_update),h.fragment=!!u&&u(h.ctx),o.target){if(o.hydrate){const t=function(t){return Array.from(t.childNodes)}(o.target);h.fragment&&h.fragment.l(t),t.forEach(f)}else h.fragment&&h.fragment.c();o.intro&&D(e.$$.fragment),K(e,o.target,o.anchor,o.customElement),P()}v(d)}class J{$destroy(){M(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const T=[];function q(e,n=t){let r;const o=new Set;function u(t){if(s(e,t)&&(e=t,r)){const t=!T.length;for(const t of o)t[1](),T.push(t,e);if(t){for(let t=0;t<T.length;t+=2)T[t][0](T[t+1]);T.length=0}}}return{set:u,update:function(t){u(t(e))},subscribe:function(s,c=t){const i=[s,c];return o.add(i),1===o.size&&(r=n(u)||t),s(e),()=>{o.delete(i),0===o.size&&(r(),r=null)}}}}function G(t){return new Promise(((e,n)=>{t.oncomplete=t.onsuccess=()=>e(t.result),t.onabort=t.onerror=()=>n(t.error)}))}function H(t,e){const n=(!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent)&&indexedDB.databases?new Promise((function(t){var e=function(){return indexedDB.databases().finally(t)};r=setInterval(e,100),e()})).finally((function(){return clearInterval(r)})):Promise.resolve()).then((()=>{const n=indexedDB.open(t);return n.onupgradeneeded=()=>n.result.createObjectStore(e),G(n)}));var r;return(t,r)=>n.then((n=>r(n.transaction(e,t).objectStore(e))))}let Q;function V(){return Q||(Q=H("keyval-store","keyval")),Q}function W(t,e){return t.openCursor().onsuccess=function(){this.result&&(e(this.result),this.result.continue())},G(t.transaction)}var X=Object.freeze({__proto__:null,clear:function(t=V()){return t("readwrite",(t=>(t.clear(),G(t.transaction))))},createStore:H,del:function(t,e=V()){return e("readwrite",(e=>(e.delete(t),G(e.transaction))))},delMany:function(t,e=V()){return e("readwrite",(e=>(t.forEach((t=>e.delete(t))),G(e.transaction))))},entries:function(t=V()){return t("readonly",(e=>{if(e.getAll&&e.getAllKeys)return Promise.all([G(e.getAllKeys()),G(e.getAll())]).then((([t,e])=>t.map(((t,n)=>[t,e[n]]))));const n=[];return t("readonly",(t=>W(t,(t=>n.push([t.key,t.value]))).then((()=>n))))}))},get:function(t,e=V()){return e("readonly",(e=>G(e.get(t))))},getMany:function(t,e=V()){return e("readonly",(e=>Promise.all(t.map((t=>G(e.get(t)))))))},keys:function(t=V()){return t("readonly",(t=>{if(t.getAllKeys)return G(t.getAllKeys());const e=[];return W(t,(t=>e.push(t.key))).then((()=>e))}))},promisifyRequest:G,set:function(t,e,n=V()){return n("readwrite",(n=>(n.put(e,t),G(n.transaction))))},setMany:function(t,e=V()){return e("readwrite",(e=>(t.forEach((t=>e.put(t[1],t[0]))),G(e.transaction))))},update:function(t,e,n=V()){return n("readwrite",(n=>new Promise(((r,o)=>{n.get(t).onsuccess=function(){try{n.put(e(this.result),t),r(G(n.transaction))}catch(t){o(t)}}}))))},values:function(t=V()){return t("readonly",(t=>{if(t.getAll)return G(t.getAll());const e=[];return W(t,(t=>e.push(t.value))).then((()=>e))}))}});const{get:Y,set:Z}=X,tt=(t,e)=>{const n=q(e);if("undefined"==typeof Storage)return n;const r=localStorage.getItem(t);return null!=r&&n.set(JSON.parse(r)),n.subscribe((e=>{localStorage.setItem(t,JSON.stringify(e))})),n},et=function(){const t=tt("labels_string","");return Object.assign(Object.assign({},t),{getLabels:function(){let e=function(t){let e;return u(t,(t=>e=t))(),e}(t);if(!e)return[];const n=RegExp("[ ,;]");return e.split(n).filter((t=>t.trim().length>0))}})}(),nt=tt("label_set",[]),rt=tt("data_index",0),ot=((t,e)=>{const n=q(e);return"undefined"==typeof indexedDB||((async()=>{const e=await Y(t);n.set(e)})(),n.subscribe((e=>{Z(t,e)}))),n})("image_dataset",null);function st(e){let n,r,o,s,u,c,i,w,v,x,_,k=e[0].length+"",A=e[0][e[1]]?.name+"";return{c(){n=d("h1"),r=d("input"),o=h("/"),s=h(k),u=g(),c=d("h2"),i=h(A),w=g(),v=d("canvas"),m(r,"type","number"),m(r,"class","svelte-1ffie95"),m(n,"class","svelte-1ffie95"),m(v,"class","svelte-1ffie95")},m(t,f){a(t,n,f),l(n,r),y(r,e[1]),l(n,o),l(n,s),a(t,u,f),a(t,c,f),l(c,i),a(t,w,f),a(t,v,f),e[5](v),x||(_=p(r,"input",e[4]),x=!0)},p(t,[e]){2&e&&$(r.value)!==t[1]&&y(r,t[1]),1&e&&k!==(k=t[0].length+"")&&b(s,k),3&e&&A!==(A=t[0][t[1]]?.name+"")&&b(i,A)},i:t,o:t,d(t){t&&f(n),t&&f(u),t&&f(c),t&&f(w),t&&f(v),e[5](null),x=!1,_()}}}function ut(t,e,n){let r,o,s,u;c(t,ot,(t=>n(0,r=t))),c(t,rt,(t=>n(1,o=t))),x((()=>{n(3,u=s.getContext("2d")),setTimeout((()=>i(o)),500)}));const i=async t=>{var e;if(!u||!s)return;const o=r?null===(e=r[t])||void 0===e?void 0:e.url:null;if(!o)return void u.clearRect(0,0,s.width,s.height);const c=await function(t){return new Promise((e=>{const n=new Image;n.src=t,n.onload=()=>e(n)}))}(o);n(2,s.width=c.width,s),n(2,s.height=c.height,s),u.drawImage(c,0,0)};return t.$$.update=()=>{11&t.$$.dirty&&u&&r&&i(o)},[r,o,s,u,function(){o=$(this.value),rt.set(o)},function(t){k[t?"unshift":"push"]((()=>{s=t,n(2,s)}))}]}class ct extends J{constructor(t){super(),F(this,t,ut,st,s,{})}}function it(e){let n,r,o,s;return{c(){n=h("upload your dataset:\r\n    "),r=d("input"),m(r,"type","file"),r.multiple=!0,m(r,"accept","image/*")},m(t,u){a(t,n,u),a(t,r,u),o||(s=p(r,"change",e[1]),o=!0)},p:t,i:t,o:t,d(t){t&&f(n),t&&f(r),o=!1,s()}}}function lt(e){let n,o,s,u,c,i,h,$,b,y,w;return s=new ct({}),{c(){n=d("button"),n.textContent="clear dataset",o=g(),I(s.$$.fragment),u=g(),c=d("div"),i=d("button"),i.textContent="previous",h=g(),$=d("button"),$.textContent="next",m(c,"class","controls")},m(t,r){a(t,n,r),a(t,o,r),K(s,t,r),a(t,u,r),a(t,c,r),l(c,i),l(c,h),l(c,$),b=!0,y||(w=[p(n,"click",e[2]),p(i,"click",e[4]),p($,"click",e[3])],y=!0)},p:t,i(t){b||(D(s.$$.fragment,t),b=!0)},o(t){B(s.$$.fragment,t),b=!1},d(t){t&&f(n),t&&f(o),M(s,t),t&&f(u),t&&f(c),y=!1,r(w)}}}function at(t){let e,n,o,s,u,c;const i=[lt,it],l=[];function d(t,e){return t[0]&&t[0].length>0?0:1}return e=d(t),n=l[e]=i[e](t),{c(){n.c(),o=h("")},m(n,r){l[e].m(n,r),a(n,o,r),s=!0,u||(c=p(window,"keydown",t[5]),u=!0)},p(t,[s]){let u=e;e=d(t),e===u?l[e].p(t,s):(z={r:0,c:[],p:z},B(l[u],1,1,(()=>{l[u]=null})),z.r||r(z.c),z=z.p,n=l[e],n?n.p(t,s):(n=l[e]=i[e](t),n.c()),D(n,1),n.m(o.parentNode,o))},i(t){s||(D(n),s=!0)},o(t){B(n),s=!1},d(t){l[e].d(t),t&&f(o),u=!1,c()}}}function ft(t){return new Promise(((e,n)=>{const r=new FileReader;r.readAsDataURL(t),r.onload=()=>{if("string"==typeof r.result){const n={name:t.name,url:r.result};e(n)}else n()}}))}function dt(t,e,n){let r,o;c(t,rt,(t=>n(6,r=t))),c(t,ot,(t=>n(0,o=t)));const s=()=>i(rt,r+=1,r),u=()=>i(rt,r-=1,r);return[o,async t=>{const e=t.target,{files:n}=e,r=[];for(const t of n)r.push(ft(t));const s=await Promise.all(r);i(ot,o=s,o)},()=>{i(ot,o=null,o)},s,u,t=>{switch(["ArrowLeft","ArrowRight"].includes(t.key)&&t.preventDefault(),t.key){case"ArrowLeft":u();break;case"ArrowRight":s()}}]}class ht extends J{constructor(t){super(),F(this,t,dt,at,s,{})}}function gt(t,e,n){const r=t.slice();return r[18]=e[n],r}function pt(t){let e,n,r,o,s=t[18]+"";function u(){return t[10](t[18])}return{c(){e=d("button"),n=h(s),m(e,"class","svelte-1msiz28")},m(t,s){a(t,e,s),l(e,n),r||(o=p(e,"click",u),r=!0)},p(e,r){t=e,2&r&&s!==(s=t[18]+"")&&b(n,s)},d(t){t&&f(e),r=!1,o()}}}function mt(e){let n,o,s,u,c,i,$,w,v,x,_,k,A,S,j,C,E,O,L,P,R=(e[0][e[3]]??"")+"",N=e[2]+" done!",z=e[1],D=[];for(let t=0;t<z.length;t+=1)D[t]=pt(gt(e,z,t));return{c(){n=h("write your labels:\r\n"),o=d("input"),s=g(),u=d("div");for(let t=0;t<D.length;t+=1)D[t].c();c=g(),i=h(R),$=d("br"),w=g(),v=h(N),x=g(),_=d("br"),k=g(),A=d("div"),S=d("button"),S.textContent="save raw",j=g(),C=d("button"),C.textContent="save nums",E=g(),O=d("button"),O.textContent="save one hot",m(o,"type","text"),m(u,"class","labels svelte-1msiz28"),m(A,"class","save")},m(t,r){a(t,n,r),a(t,o,r),y(o,e[4]),a(t,s,r),a(t,u,r);for(let t=0;t<D.length;t+=1)D[t].m(u,null);a(t,c,r),a(t,i,r),a(t,$,r),a(t,w,r),a(t,v,r),a(t,x,r),a(t,_,r),a(t,k,r),a(t,A,r),l(A,S),l(A,j),l(A,C),l(A,E),l(A,O),L||(P=[p(o,"input",e[9]),p(S,"click",e[6]),p(C,"click",e[7]),p(O,"click",e[8])],L=!0)},p(t,[e]){if(16&e&&o.value!==t[4]&&y(o,t[4]),34&e){let n;for(z=t[1],n=0;n<z.length;n+=1){const r=gt(t,z,n);D[n]?D[n].p(r,e):(D[n]=pt(r),D[n].c(),D[n].m(u,null))}for(;n<D.length;n+=1)D[n].d(1);D.length=z.length}9&e&&R!==(R=(t[0][t[3]]??"")+"")&&b(i,R),4&e&&N!==(N=t[2]+" done!")&&b(v,N)},i:t,o:t,d(t){t&&f(n),t&&f(o),t&&f(s),t&&f(u),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(D,t),t&&f(c),t&&f(i),t&&f($),t&&f(w),t&&f(v),t&&f(x),t&&f(_),t&&f(k),t&&f(A),L=!1,r(P)}}}function $t(t,e,n){let r,o,s,u;c(t,nt,(t=>n(0,o=t))),c(t,rt,(t=>n(3,s=t))),c(t,et,(t=>n(4,u=t)));const l=new URLSearchParams(window.location.search).get("labels");(null==l?void 0:l.length)>0&&i(et,u=l,u);let a=[];et.subscribe((()=>{n(1,a=et.getLabels()),window.history.replaceState({},"","?labels="+a.join(","))}));const f=t=>t.normalize("NFKC").toLowerCase(),d=t=>{const e=f(t);i(nt,o[s]=e,o),i(rt,s+=1,s)},h=()=>{const t={};for(const e of o)e&&(t[e]=!0);for(let e of a)delete t[f(e)];const e=Object.keys(t),n=a.map((t=>f(t))).concat(e),r={};for(let t in n)r[n[t]]=Number(t);return r},g=t=>{((t,e,n)=>{let r=new Blob(e,{type:n}),o=document.createElement("a");o.href=window.URL.createObjectURL(r),o.download=t,o.click()})("grid_data.json",[JSON.stringify(t)],"text/json")};return t.$$.update=()=>{1&t.$$.dirty&&n(2,r=o.filter((t=>t)).length)},[o,a,r,s,u,d,()=>{g(o)},()=>{const t=h(),e=o.map((e=>t[e]));g(e)},()=>{const t=h(),e=Object.keys(t).length,n=o.map((n=>null==t[n]?null:((t,e)=>[...Array(t).fill(0),1,...Array(e-t-1).fill(0)])(t[n],e)));g(n)},function(){u=this.value,et.set(u)},t=>d(t)]}class bt extends J{constructor(t){super(),F(this,t,$t,mt,s,{})}}function yt(e){let n,r,o,s,u,c,i;return s=new ht({}),c=new bt({}),{c(){n=d("main"),r=d("h1"),r.textContent="Label generator",o=g(),I(s.$$.fragment),u=g(),I(c.$$.fragment),m(r,"class","svelte-cilhoa"),m(n,"class","svelte-cilhoa")},m(t,e){a(t,n,e),l(n,r),l(n,o),K(s,n,null),l(n,u),K(c,n,null),i=!0},p:t,i(t){i||(D(s.$$.fragment,t),D(c.$$.fragment,t),i=!0)},o(t){B(s.$$.fragment,t),B(c.$$.fragment,t),i=!1},d(t){t&&f(n),M(s),M(c)}}}return new class extends J{constructor(t){super(),F(this,t,null,yt,s,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map