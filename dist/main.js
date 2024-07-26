(()=>{"use strict";var n={208:(n,e,t)=>{t.d(e,{A:()=>p});var o=t(601),r=t.n(o),a=t(314),i=t.n(a),d=t(417),c=t.n(d),s=new URL(t(54),t.b),l=i()(r()),u=c()(s);l.push([n.id,`/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n:root {\n    --universalBlue: #0368D9;\n    --universalLightBlue: #438ee4;\n}\n\nbody {\n    background-color: var(--universalLightBlue);\n    font-family: "Raleway";\n}\n\n#main {\n    display: grid;\n    grid-template-rows: 1fr 6.3fr 0.34fr;\n}\n\n.main-header {\n    background-color: var(--universalBlue);\n}\n\nheader {\n    display: grid;\n\n    justify-self: center;\n    align-items: center;\n    text-align: left;\n\n    padding-top: 1em;\n}\n\n.top-header {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n\n    padding-bottom: 1em;\n}\n\n.top-header img {\n    width: 10em;\n    filter: brightness(0) invert(1);\n    \n    padding-left: 1em;\n}\n\n.top-header h1 {\n    color: white;\n    font-size: 4em;\n\n    margin-left: 1em;\n    padding-bottom: 0.1em;\n}\n\nnav {\n    display: grid;\n    grid-column-start: 1;\n    grid-column-end: 4;\n    grid-template-columns: repeat(3, 1fr);\n\n    font-size: 1.5em;\n}\n\nnav button {\n    border: none;\n    height: 2em;\n\n    font-size: 1em;\n\n    color: white;\n    background-color: var(--universalLightBlue);\n}\n\n.main-content-container {\n    background-color: white;\n    background-image: url(${u});\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: 70%;\n\n    border: 0.2em solid grey;\n    border-radius: 1em;\n    box-shadow: 0em 0em 5em 2em #01070a3d;\n\n    margin: 0.5em;\n}\n\n.inner-main-content-container {\n    color: white;\n    background-color: rgba(75, 75, 75, 0.3);\n\n    font-size: 2em;\n\n    margin: 2em;\n    padding: 1em;\n    border-radius: 0.5em;\n}\n\n.welcome-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n\n    margin-bottom: 0.5em;\n}\n\n.restaurant-container {\n    display: grid;\n    height: 58vh;\n    grid-template-columns: repeat(3, 1fr);\n    grid-template-rows: repeat(4, 1fr);\n    gap: 1em;\n}\n\n.restaurant:hover {\n    cursor: pointer;\n    transition: 1s;\n    transform: scale(1.2);\n}\n\n.restaurant {\n    transition: 1s;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-color:rgba(75, 75, 75, 0.3);\n    background-position-y: 37.5%;\n    border-radius: 0.5em;\n}\n\n.restaurant-front {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    text-align: center;\n\n    background-color:rgba(75, 75, 75, 0.5);\n    margin: 0.2em;\n    padding: 0.5em;\n    border-radius: 0.5em;\n}\n\n#hardrock {\n    grid-column: span 2;\n}\n\n.footer {\n    background-color: var(--universalLightBlue);\n    color: white;\n\n    padding: 0.5em;\n    font-size: 1.25em;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}`,""]);const p=l},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var d=0;d<this.length;d++){var c=this[d][0];null!=c&&(i[c]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);o&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},417:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var a={},i=[],d=0;d<n.length;d++){var c=n[d],s=o.base?c[0]+o.base:c[0],l=a[s]||0,u="".concat(s," ").concat(l);a[s]=l+1;var p=t(u),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(m);else{var h=r(m,o);o.byIndex=d,e.splice(d,0,{identifier:u,updater:h,references:1})}i.push(u)}return i}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var a=o(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var d=t(a[i]);e[d].references--}for(var c=o(n,r),s=0;s<a.length;s++){var l=t(a[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=c}}},659:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},54:(n,e,t)=>{n.exports=t.p+"6c6a8680389769a25f33.jpg"}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={id:o,exports:{}};return n[o](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&(!n||!/^http(s?):/.test(n));)n=o[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0;var o=t(72),r=t.n(o),a=t(825),i=t.n(a),d=t(659),c=t.n(d),s=t(56),l=t.n(s),u=t(540),p=t.n(u),m=t(113),h=t.n(m),f=t(208),g={};g.styleTagTransform=h(),g.setAttributes=l(),g.insert=c().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=p(),r()(f.A,g),f.A&&f.A.locals&&f.A.locals;const b=t.p+"2b3db18850dbe30b12b4.png";t(54);const v=t.p+"4bb18e8f63903a1c7fc9.jpeg",w=t.p+"22608595ff83883a5d07.png",y=t.p+"a39974979a41af69639e.jpg",C=t.p+"9f639da4d1aa5d6f5b9a.jpg",x=t.p+"41339f172351d6cf92b0.jpg",k=t.p+"10c8dbc07f511426fcdd.jpg",E=t.p+"fa2bcbd3b739798471c4.jpg",j=t.p+"b262d7ac8e31b70485d5.jpg",L=t.p+"f101af5a36deba9f3ed3.jpg",A=t.p+"66189b308a0eef148259.jpg",T=t.p+"cc74131ddd328d28cfbb.jpg";function B(n,e,t){const o=document.createElement("div");o.classList.add("restaurant"),"Hard Rock Cafe® Orlando"==n&&(o.id="hardrock"),o.addEventListener("click",(function(){window.open(t,"_blank")}));const r=document.createElement("div");r.classList.add("restaurant-front");const a=document.createElement("h1");return a.textContent=n,r.appendChild(a),o.appendChild(r),o.style.backgroundImage="url("+e+" )",o}!function(){const n=document.getElementById("main");n.textContent="",n.appendChild(function(){const n=document.createElement("div");n.classList.add("main-header");const e=document.createElement("div");e.classList.add("top-header");const t=document.createElement("img");t.src=b;const o=document.createElement("header"),r=document.createElement("nav");e.appendChild(t),n.appendChild(o);const a=document.createElement("h1");a.textContent="Universal Food Insight",a.classList.add("main-title");const i=document.createElement("button");i.textContent="Home";const d=document.createElement("button");d.textContent="Menu";const c=document.createElement("button");return c.textContent="About",r.appendChild(i),r.appendChild(d),r.appendChild(c),e.appendChild(a),o.appendChild(e),o.appendChild(r),n}()),n.appendChild(function(){const n=document.createElement("div");n.classList.add("main-content-container");const e=document.createElement("div");e.classList.add("inner-main-content-container");const t=document.createElement("div");t.classList.add("welcome-container");const o=document.createElement("h1");o.textContent="Welcome to Universal Food Insight";const r=document.createElement("p");r.textContent="Here you can view the menu of any citywalk restaurant",t.appendChild(o),t.appendChild(r),e.appendChild(t);const a=document.createElement("div");return a.classList.add("restaurant-container"),a.appendChild(B("Antojitos Authentic Mexican Food™",v,"https://www.universalorlando.com/web/en/gb/things-to-do/dining/antojitos-authentic-mexican-food/menu.html")),a.appendChild(B("Bigfire American Fare",w,"https://www.universalorlando.com/web/en/gb/things-to-do/dining/bigfire/menu.html")),a.appendChild(B("Bob Marley — A Tribute to Freedom℠",y,"https://www.universalorlando.com/web/en/gb/things-to-do/dining/bob-marley-a-tribute-to-freedom/menu.html")),a.appendChild(B("Cowfish",C,"https://www.universalorlando.com/web/en/gb/things-to-do/dining/the-cowfish/menu.html")),a.appendChild(B("Jimmy Buffet's® Margaritaville®",x,"https://www.universalorlando.com/web/en/gb/things-to-do/dining/jimmy-buffetts-margaritaville/menu.html")),a.appendChild(B("NBC Sports Grill & Brew™",k,"https://www.universalorlando.com/web/en/gb/things-to-do/dining/nbc-sports-grill-brew/menu.html")),a.appendChild(B("Pat O'Brien's®",E,"https://www.universalorlando.com/web/en/gb/things-to-do/dining/pat-o-briens/menu.html")),a.appendChild(B("VIVO Italian Kitchen™",j,"https://www.universalorlando.com/web/en/gb/things-to-do/dining/vivo-italian-kitchen/menu.html")),a.appendChild(B("Voodoo Doughnuts",L,"https://www.universalorlando.com/web/en/gb/things-to-do/dining/voodoo-doughnut/menu.html")),a.appendChild(B("Hard Rock Cafe® Orlando",A,"https://cafe.hardrock.com/menu.aspx")),a.appendChild(B("Toothsome Chocolate Emporium",T,"https://www.universalorlando.com/web/en/gb/things-to-do/dining/toothsome-chocolate-emporium-and-savory-feast-kitchen/menu.html")),e.appendChild(a),n.appendChild(e),n}()),n.appendChild(function(){const n=document.createElement("div");n.classList.add("footer");const e=document.createElement("p");return e.textContent="© Samuel Davies 2024",n.appendChild(e),n}())}()})();