(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-39a33d37"],{"0d22":function(e,a,t){"use strict";t("0e09")},"0e09":function(e,a,t){},"57da":function(e,a,t){"use strict";t.r(a);var n=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"landing"},[n("div",{staticClass:"centered-div"},[n("h1",[e._v("¡Iniciemos!")]),n("p",[e._v("Recuerda estar conectado a la red de prueba de KOVAN.")]),e._m(0),n("a",{staticClass:"custom-btn",on:{click:function(a){return e.modal()}}},[e._v("Aplica")]),n("a",{staticClass:"custom-btn",on:{click:function(a){return e.next()}}},[e._v("Continuar")]),n("modal",{attrs:{name:"application-form",width:"50%",height:"auto"}},[n("div",{staticClass:"modal-header"},[n("h3",[e._v("FORMULARIO DE APLICACIÓN")])]),n("div",{staticClass:"modal-content"},[n("form",[n("label",{attrs:{for:"name"}},[n("b",[e._v("Nombre")])]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",id:"name",name:"name",placeholder:"Tu nombre..."},domProps:{value:e.name},on:{input:function(a){a.target.composing||(e.name=a.target.value)}}}),n("label",{attrs:{for:"bio"}},[n("b",[e._v("Bio")])]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.bio,expression:"bio"}],attrs:{type:"text",id:"bio",name:"bio",placeholder:"Una breve descripción de ti..."},domProps:{value:e.bio},on:{input:function(a){a.target.composing||(e.bio=a.target.value)}}}),n("label",{attrs:{for:"skillsAchievementsInfo"}},[n("b",[e._v("Habilidades y logros")])]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.skillsAchievementsInfo,expression:"skillsAchievementsInfo"}],attrs:{type:"text",id:"skillsAchievementsInfo",name:"skillsAchievementsInfo",placeholder:"Lista tus habilidades y logros..."},domProps:{value:e.skillsAchievementsInfo},on:{input:function(a){a.target.composing||(e.skillsAchievementsInfo=a.target.value)}}}),n("label",{attrs:{for:"salary"}},[n("b",[e._v("Salario tentativo")])]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.salary,expression:"salary"}],attrs:{type:"number",id:"salary",name:"salary",placeholder:"Ingresa un valor tentativo de salario..."},domProps:{value:e.salary},on:{input:function(a){a.target.composing||(e.salary=a.target.value)}}}),n("a",{staticClass:"custom-btn",on:{click:function(a){return e.apply()}}},[e._v("Enviar")])])])]),n("modal",{attrs:{name:"error",width:"50%",height:"auto"}},[n("div",{staticClass:"error-modal-header"},[n("h3",[e._v("ERROR")])]),n("div",{staticClass:"modal-content"},[n("p",[e._v("Se presento un error. Considera lo siguiente:")]),n("p",[e._v("* Un usuario solo puede aplicar una vez")]),n("p",[e._v(" * Estar con el rol o cuenta correspondiente para la acción (Solo usuarios registrados pueden aplicar) ")]),n("p",[e._v("* La vacante no esta abierta")])])]),n("div",{staticClass:"card-container"},e._l(e.applicants,(function(a,s){return n("div",{key:s,staticClass:"card"},[n("img",{staticStyle:{width:"100%"},attrs:{src:t("c9d2")}}),n("div",{staticClass:"container"},[n("h4",[n("b",[e._v(e._s(a.name))])]),n("p",[e._v(e._s(a.bio))]),n("p",[e._v(e._s(a.skillsAchievementsInfo))])])])})),0)],1)])},s=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("p",[e._v(" Actualmente estamos con un rol de "),t("b",[e._v("usuario")]),e._v(", la aplicación simula un proceso de selección de aspirantes a una vacante. "),t("b",[e._v("Nota:")]),e._v(" Aplica con dos usuarios antes de continuar. ")])}],i=t("1da1"),o=(t("96cf"),t("b0c0"),t("39f2")),r=window.web3,c={name:"Home",props:{msg:String},data:function(){return{vacancy:void 0,name:void 0,bio:void 0,skillsAchievementsInfo:void 0,salary:void 0,applicants:[]}},mounted:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var t,n,s,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,new r.eth.Contract(o.abi,"0x257Fd0e672Dc1E0F36FF96c76553C6bbAF2971f7");case 2:return e.vacancy=a.sent,a.next=5,e.vacancy.methods.applicantCount().call();case 5:return t=a.sent,a.next=8,e.vacancy.methods.vacancyVersion().call();case 8:n=a.sent,console.log(t),console.log(n),s=1;case 12:if(!(s<=t)){a.next=20;break}return a.next=15,e.vacancy.methods.applicants(s+parseInt(n)).call();case 15:i=a.sent,e.applicants.push({name:i.name,bio:i.bio,skillsAchievementsInfo:i.skillsAchievementsInfo,salary:i.salary});case 17:s++,a.next=12;break;case 20:case"end":return a.stop()}}),a)})))()},methods:{modal:function(){this.$modal.show("application-form")},next:function(){this.applicants.length<2?window.alert("Aplica con dos usuarios antes de continuar"):this.$router.push({path:"evaluacion"})},apply:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var a,t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=this.vacancy.methods.addApplicant(this.name,this.bio,this.skillsAchievementsInfo,parseInt(this.salary)),e.next=3,this.$store.dispatch("sendTransaction",{web3:r,tx:a,isPayable:!1});case 3:if(t=e.sent,console.log(t),!t){e.next=9;break}return this.$modal.hide("application-form"),this.$modal.show("error"),e.abrupt("return");case 9:this.$modal.hide("application-form"),this.applicants.push({name:this.name,bio:this.bio,skillsAchievementsInfo:this.skillsAchievementsInfo}),console.log(this.applicants);case 12:case"end":return e.stop()}}),e,this)})));function a(){return e.apply(this,arguments)}return a}()}},l=c,u=(t("0d22"),t("2877")),d=Object(u["a"])(l,n,s,!1,null,null,null);a["default"]=d.exports},b0c0:function(e,a,t){var n=t("83ab"),s=t("9bf2").f,i=Function.prototype,o=i.toString,r=/^\s*function ([^ (]*)/,c="name";n&&!(c in i)&&s(i,c,{configurable:!0,get:function(){try{return o.call(this).match(r)[1]}catch(e){return""}}})},c9d2:function(e,a,t){e.exports=t.p+"img/user_icon.eceb992c.jpg"}}]);
//# sourceMappingURL=chunk-39a33d37.9f7cec7a.js.map