parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"/SaM":[function(require,module,exports) {
function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function r(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}function o(e,n){return!n||"object"!==t(n)&&"function"!=typeof n?i(e):n}function i(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&u(t,e)}function u(t,e){return(u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var c=function(t){function n(){return e(this,n),o(this,s(n).call(this,{key:"SceneGameOver"}))}return a(n,Phaser.Scene),r(n,[{key:"create",value:function(){this.title=this.add.text(.5*this.game.config.width,128,"GAME OVER",{fontFamily:"monospace",fontSize:48,fontStyle:"bold",color:"#ffffff",align:"center"}),this.title.setOrigin(.5),this.sfx={btnOver:this.sound.add("sndBtnOver"),btnDown:this.sound.add("sndBtnDown")},this.btnRestart=this.add.sprite(.5*this.game.config.width,.5*this.game.config.height,"sprBtnRestart"),this.btnRestart.setInteractive(),this.btnRestart.on("pointerover",function(){this.btnRestart.setTexture("sprBtnRestartHover"),this.sfx.btnOver.play()},this),this.btnRestart.on("pointerout",function(){this.setTexture("sprBtnRestart")}),this.btnRestart.on("pointerdown",function(){this.btnRestart.setTexture("sprBtnRestartDown"),this.sfx.btnDown.play()},this),this.btnRestart.on("pointerup",function(){this.btnRestart.setTexture("sprBtnRestart"),this.scene.start("SceneMain")},this),this.backgrounds=[];for(var t=0;t<5;t++){var e=["sprBg0","sprBg1"],n=e[Phaser.Math.Between(0,e.length-1)],r=new ScrollingBackground(this,n,10*t);this.backgrounds.push(r)}}},{key:"update",value:function(){for(var t=0;t<this.backgrounds.length;t++)this.backgrounds[t].update()}}]),n}();
},{}]},{},["/SaM"], null)
//# sourceMappingURL=/js/SceneGameOver.js.map