(()=>{"use strict";var e={693:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(645),o=n.n(r)()((function(e){return e[1]}));o.push([e.id,"body{background:lightslategray}.container{display:flex;justify-content:center;align-items:center}.grid{display:flex;flex-wrap:wrap;width:400px;height:400px;background:lightyellow}.grid div{width:40px;height:40px}.bomb{background:orangered}\n",""]);const i=o},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);r&&o[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},379:(e,t,n)=>{var r,o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function a(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function s(e,t){for(var n={},r=[],o=0;o<e.length;o++){var s=e[o],c=t.base?s[0]+t.base:s[0],l=n[c]||0,d="".concat(c," ").concat(l);n[c]=l+1;var u=a(d),f={css:s[1],media:s[2],sourceMap:s[3]};-1!==u?(i[u].references++,i[u].updater(f)):i.push({identifier:d,updater:v(f,t),references:1}),r.push(d)}return r}function c(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=n.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var l,d=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function u(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=d(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function f(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var p=null,b=0;function v(e,t){var n,r,o;if(t.singleton){var i=b++;n=p||(p=c(t)),r=u.bind(null,n,i,!1),o=u.bind(null,n,i,!0)}else n=c(t),r=f.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=a(n[r]);i[o].references--}for(var c=s(e,t),l=0;l<n.length;l++){var d=a(n[l]);0===i[d].references&&(i[d].updater(),i.splice(d,1))}n=c}}}}},t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{const e=e=>{e.classList.contains("bomb")&&console.log("Game Over!")};var t=n(379),r=n.n(t),o=n(693);r()(o.Z,{insert:"head",singleton:!1}),o.Z.locals,document.addEventListener("DOMContentLoaded",(()=>{((t,n,r,o)=>{const i=Array(20).fill("bomb"),a=[...Array(80).fill("valid"),...i].sort((()=>Math.random()-.5));for(let t=0;t<100;t++){const o=document.createElement("div");o.setAttribute("id",t),o.classList.add(a[t]),n.appendChild(o),r.push(o),o.addEventListener("click",(t=>e(o)))}((e,t)=>{for(let n=0;n<t.length;n++){let r=0;const o=n%e==0,i=n%e==0;t[n].classList.contains("valid")&&(n>0&&!o&&t[n-1].classList.contains("bomb")&&r++,n>9&&!i&&t[n+1-e].classList.contains("bomb")&&r++,n>10&&t[n-e].classList.contains("bomb")&&r++,n>11&&!o&&t[n-1-e].classList.contains("bomb")&&r++,n<98&&!i&&t[n+1].classList.contains("bomb")&&r++,n<90&&!o&&t[n-1+e].classList.contains("bomb")&&r++,n<88&&!i&&t[n+1+e].classList.contains("bomb")&&r++,n<89&&t[n+e].classList.contains("bomb")&&r++,t[n].setAttribute("data",r))}})(10,r)})(0,document.querySelector(".grid"),[])}))})()})();