(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{172:function(t,o,n){var e=n(187);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);(0,n(43).default)("d4be674c",e,!0,{})},184:function(t,o,n){t.exports=n.p+"img/4396d3b.png"},185:function(t,o,n){t.exports=n.p+"img/d124197.png"},186:function(t,o,n){"use strict";var e=n(172);n.n(e).a},187:function(t,o,n){var e=n(95);(t.exports=n(42)(!1)).push([t.i,"body,html{min-height:100vh}.login-container{font-family:Raleway,sans-serif;letter-spacing:.5px;height:100vh;display:flex;justify-content:center;align-items:center;flex-direction:column;text-align:center;margin:0 auto;background:#fff;background-size:auto 100%;background-position:50%}.login-container p{padding:2em;color:red}.login-container img{margin-bottom:1em}.login-container input{border:0;border-bottom:1px solid #d9d9d9;padding:10px;text-align:center;transition:all .3s ease-out;margin-bottom:2em;text-transform:uppercase;width:100%;box-sizing:border-box;font-size:16px}.login-container input:focus{outline:none;-webkit-transform:scale(1.1);transform:scale(1.1);padding:2em;transition:all .3s ease-out}.login-container button{background:#232751;color:#fff;border:0;padding:1em 3em;width:100%}.login-container button:hover{backgorund:#383d72}.login-container .login{position:relative;z-index:4;width:80%;height:50vh;min-height:300px;max-height:450px;max-width:480px;background:#fff;display:flex;justify-content:center;align-items:center}.login-container .input-container{max-width:250px;padding:40px}.login-bg{position:absolute;opacity:.5}::-webkit-input-placeholder{color:#d9d9d9}::-moz-placeholder{color:#d9d9d9}:-ms-input-placeholder{color:#d9d9d9}:-moz-placeholder{color:#d9d9d9}#particles-bg{position:absolute;top:0;bottom:0;left:0;right:0;z-index:0}@media only screen and (max-width:720px){.input-container img{width:80px}.login-bg{display:none}.login-container{background:url("+e(n(188))+");background-size:auto 100%;background-repeat:no-repeat;background-position:50%;overflow:hidden;position:fixed;width:100%;bottom:0;top:0;height:100%;z-index:2}.login-container .login{height:350px;min-height:35vh;width:70%;min-height:auto;background:transparent}.login-bg{position:absolute;width:110%}}",""])},188:function(t,o,n){t.exports=n.p+"img/da166dc.png"},189:function(t,o,n){"use strict";n.r(o);var e={data:function(){return{code:"",error:!1}},mounted:function(){this.$particles(),this.mountBackground()},methods:{mountBackground:function(){particlesJS.load("particles-bg","/config.json",function(){console.log("loaded")}),document.ontouchmove=function(t){t.preventDefault()}},validateCode:function(){"DINAGYANG"===this.code.toUpperCase()?this.$router.push("/home"):this.error=!0}}},i=(n(186),n(23)),a=Object(i.a)(e,function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"login-container"},[e("div",{attrs:{id:"particles-bg"}}),t._v(" "),e("link",{attrs:{href:"https://fonts.googleapis.com/css?family=Raleway",rel:"stylesheet"}}),t._v(" "),e("img",{staticClass:"login-bg",attrs:{src:n(184)}}),t._v(" "),e("div",{staticClass:"login"},[e("div",{staticClass:"input-container"},[e("img",{attrs:{src:n(185)}}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.code,expression:"code"}],attrs:{type:"text",placeholder:"ENTER CODE"},domProps:{value:t.code},on:{input:function(o){o.target.composing||(t.code=o.target.value)}}}),t._v(" "),e("button",{on:{click:function(o){o.stopPropagation(),o.preventDefault(),t.validateCode()}}},[t._v(" ENTER SITE ")]),t._v(" "),t.error?e("p",[t._v("There seems to be something wrong with your code.")]):t._e()])])])},[],!1,null,null,null);a.options.__file="index.vue";o.default=a.exports}}]);