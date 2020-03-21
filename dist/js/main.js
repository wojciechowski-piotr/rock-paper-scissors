!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist/js/",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";n.r(t);class o{constructor(e,t){this.name=e,this.beat=t}}o.prototype.createWeapon=function(){const e=document.querySelector(".weapon-select > form"),t=document.createElement("input"),n=document.createElement("label");t.setAttribute("type","radio"),t.setAttribute("name","weapon"),t.setAttribute("id",this.name),t.setAttribute("value",this.name),n.setAttribute("for",this.name),n.textContent=this.name,e.appendChild(t),e.appendChild(n)};var i=o;var r=[new i("rock","scissors"),new i("scissors","paper"),new i("paper","rock")];(new class{constructor(){this.pointLimit=3,this.roundsLimit=3,this.rounds=0,this.p1Points=0,this.p2Points=0,this.p1Rounds=0,this.p2Rounds=0,this.p1Name=null,this.p2Name=null}startGame(){document.querySelector(".start-game__btn").addEventListener("click",this.newGame),r.forEach(e=>e.createWeapon()),this.chooseWeapon(),this.playAgain()}compareWeapons(){const e=document.querySelector(".player1__weapon-value").textContent,t=document.querySelector(".player2__weapon-value").textContent,n=r.findIndex(t=>t.name===e),o=r.findIndex(e=>e.name===t);e===r[o].beat?(this.p2Points++,console.log(`Player 2 win => ${this.p1Points} : ${this.p2Points}`)):t===r[n].beat?(this.p1Points++,console.log(`Player 1 win => ${this.p1Points} : ${this.p2Points}`)):e===t&&console.log(`Draw => ${this.p1Points} : ${this.p2Points}`)}pointCounter(){this.p1Points===this.pointLimit?(this.p1Rounds++,console.log("Player 1 win round!!!")):this.p2Points===this.pointLimit&&(this.p2Rounds++,console.log("Player 2 win round!!!")),this.p1Points!==this.pointLimit&&this.p2Points!==this.pointLimit||(this.p1Points=0,this.p2Points=0,this.rounds++,console.log(`End round ${this.rounds}`))}displayResult(){const e=document.querySelector(".result__p1"),t=document.querySelector(".result__p2"),n=document.querySelector(".rounds__p1"),o=document.querySelector(".rounds__p2"),i=document.querySelector(".winner"),r=[...document.querySelectorAll('input[type="radio"]')];e.innerHTML=this.p1Points,t.innerHTML=this.p2Points,n.innerHTML=this.p1Rounds,o.innerHTML=this.p2Rounds,this.p1Rounds===this.roundsLimit?(i.innerHTML="Player 1 win!!!",r.forEach(e=>{e.setAttribute("disabled","true"),e.checked=!1})):this.p2Rounds===this.roundsLimit&&(i.innerHTML="Player 2 win!!!",r.forEach(e=>{e.setAttribute("disabled","true"),e.checked=!1}))}playAgain(){document.querySelector(".play-again__btn").addEventListener("click",()=>{this.p1Name=null,this.p2Name=null,this.p1NameInput="",this.p2NameInput="",window.location.reload(!0)})}newGame(){let e=document.querySelector("#p1name").value,t=document.querySelector("#p2name").value;const n=document.querySelector(".p1-name"),o=document.querySelector(".p2-name"),i=document.querySelector(".start-game");""==e&&(e="Player 1"),""==t&&(t="Player 2"),this.p1Name=e,this.p2Name=t,n.innerHTML=this.p1Name,console.log(this.p1Name),console.log(this.p2Name),o.innerHTML=this.p2Name,i.style.display="none"}chooseWeapon(){const e=[...document.querySelectorAll('input[type="radio"]')],t=document.querySelector(".player1__weapon-value");e.forEach(e=>{e.addEventListener("click",()=>{t.innerHTML=e.value,function(){const e=document.querySelector(".player2__weapon-value"),t=r[Math.round(Math.random()*(r.length-1))];e.innerHTML=t.name}(),this.compareWeapons(),this.pointCounter(),this.displayResult()})})}}).startGame()}]);
//# sourceMappingURL=main.js.map