!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist/js/",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";n.r(t);var o=class{constructor(e,t){this.name=e,this.control=t}chooseWeapon(e){const t=[...document.querySelectorAll("input[type='radio']")],n=document.querySelector(".player1__weapon-value");t.forEach(t=>{t.addEventListener("click",()=>{n.innerHTML=t.value,function(){const e=document.querySelector(".player2__weapon-value"),t=a[Math.round(Math.random()*(a.length-1))];e.innerHTML=t.name}(),e()})})}};var r=class{constructor(e,t){this.name=e,this.beat=t}createWeapon(){const e=document.querySelector(".weapon-select > form"),t=document.createElement("input"),n=document.createElement("label");t.setAttribute("type","radio"),t.setAttribute("name","weapon"),t.setAttribute("id",this.name),t.setAttribute("value",this.name),n.setAttribute("for",this.name),n.textContent=this.name,e.appendChild(t),e.appendChild(n)}};var a=[new r("rock","scissors"),new r("scissors","paper"),new r("paper","rock")];var c=[new o("P1","human"),new o("P2-AI","computer")];new class{constructor(e,t){this.pointLimit=e,this.rounds=t,this.P1score=0,this.P2score=0}startGame(){a.forEach(e=>e.createWeapon()),c[0].chooseWeapon((function(){const e=document.querySelector(".player1__weapon-value").textContent,t=document.querySelector(".player2__weapon-value").textContent,n=a.findIndex(t=>t.name===e),o=a.findIndex(e=>e.name===t);console.log(n),e===a[o].beat?console.log("P2 win"):t===a[n].beat?console.log("P1 win"):e===t&&console.log("Draw")}))}}(3,4).startGame()}]);
//# sourceMappingURL=main.js.map