webpackJsonp([1,4],[,,function(t,n){var e=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=e)},function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(t,n,e){var r=e(23)("wks"),o=e(25),i=e(3).Symbol,u="function"==typeof i,c=t.exports=function(t){return r[t]||(r[t]=u&&i[t]||(u?i:o)("Symbol."+t))};c.store=r},function(t,n,e){var r=e(17),o=e(22);t.exports=e(6)?function(t,n,e){return r.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){t.exports=!e(10)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n,e){var r=e(37),o=e(12);t.exports=function(t){return r(o(t))}},function(t,n,e){var r=e(11);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n,e){var r=e(3),o=e(2),i=e(35),u=e(5),c="prototype",a=function(t,n,e){var f,s,p,l=t&a.F,v=t&a.G,d=t&a.S,h=t&a.P,y=t&a.B,x=t&a.W,g=v?o:o[n]||(o[n]={}),b=g[c],m=v?r:d?r[n]:(r[n]||{})[c];v&&(e=n);for(f in e)s=!l&&m&&void 0!==m[f],s&&f in g||(p=s?m[f]:e[f],g[f]=v&&"function"!=typeof m[f]?e[f]:y&&s?i(p,r):x&&m[f]==p?function(t){var n=function(n,e,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,e)}return new t(n,e,r)}return t.apply(this,arguments)};return n[c]=t[c],n}(p):h&&"function"==typeof p?i(Function.call,p):p,h&&((g.virtual||(g.virtual={}))[f]=p,t&a.R&&b&&!b[f]&&u(b,f,p)))};a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},function(t,n){t.exports={}},function(t,n,e){var r=e(38),o=e(21);t.exports=Object.keys||function(t){return r(t,o)}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n,e){var r=e(8),o=e(36),i=e(44),u=Object.defineProperty;n.f=e(6)?Object.defineProperty:function(t,n,e){if(r(t),n=i(n,!0),r(e),o)try{return u(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},function(t,n,e){var r=e(23)("keys"),o=e(25);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n,e){var r=e(11),o=e(3).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,e){var r=e(3),o="__core-js_shared__",i=r[o]||(r[o]={});t.exports=function(t){return i[t]||(i[t]={})}},function(t,n,e){var r=e(12);t.exports=function(t){return Object(r(t))}},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},function(t,n,e){"use strict";var r=e(55),o=e(13),i=e(59),u=e(5),c=e(9),a=e(14),f=e(53),s=e(27),p=e(58),l=e(4)("iterator"),v=!([].keys&&"next"in[].keys()),d="@@iterator",h="keys",y="values",x=function(){return this};t.exports=function(t,n,e,g,b,m,_){f(e,n,g);var O,w,j,S=function(t){if(!v&&t in E)return E[t];switch(t){case h:return function(){return new e(this,t)};case y:return function(){return new e(this,t)}}return function(){return new e(this,t)}},A=n+" Iterator",M=b==y,k=!1,E=t.prototype,P=E[l]||E[d]||b&&E[b],C=P||S(b),T=b?M?S("entries"):C:void 0,R="Array"==n?E.entries||P:P;if(R&&(j=p(R.call(new t)),j!==Object.prototype&&(s(j,A,!0),r||c(j,l)||u(j,l,x))),M&&P&&P.name!==y&&(k=!0,C=function(){return P.call(this)}),r&&!_||!v&&!k&&E[l]||u(E,l,C),a[n]=C,a[A]=x,b)if(O={values:M?C:S(y),keys:m?C:S(h),entries:T},_)for(w in O)w in E||i(E,w,O[w]);else o(o.P+o.F*(v||k),n,O);return O}},function(t,n,e){var r=e(17).f,o=e(9),i=e(4)("toStringTag");t.exports=function(t,n,e){t&&!o(t=e?t:t.prototype,i)&&r(t,i,{configurable:!0,value:n})}},function(t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e={data:function(){return{loading:!1,response:null,error:null}},created:function(){this.fetchData()},watch:{$route:"fetchData"},methods:{fetchData:function(){var t=this;this.error=this.response=null,this.loading=!0,this.$http.get(""+this.$root.host+this.$route.path).then(function(n){t.loading=!1,t.response=n},function(n){t.loading=!1,t.error=n.toString()})}}};n.default=e},function(t,n,e){t.exports={default:e(31),__esModule:!0}},function(t,n,e){t.exports={default:e(32),__esModule:!0}},function(t,n,e){e(45),t.exports=e(2).Object.keys},function(t,n,e){e(46),t.exports=e(2).Object.values},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n,e){var r=e(7),o=e(43),i=e(42);t.exports=function(t){return function(n,e,u){var c,a=r(n),f=o(a.length),s=i(u,f);if(t&&e!=e){for(;f>s;)if(c=a[s++],c!=c)return!0}else for(;f>s;s++)if((t||s in a)&&a[s]===e)return t||s||0;return!t&&-1}}},function(t,n,e){var r=e(33);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},function(t,n,e){t.exports=!e(6)&&!e(10)(function(){return 7!=Object.defineProperty(e(20)("div"),"a",{get:function(){return 7}}).a})},function(t,n,e){var r=e(19);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,n,e){var r=e(9),o=e(7),i=e(34)(!1),u=e(18)("IE_PROTO");t.exports=function(t,n){var e,c=o(t),a=0,f=[];for(e in c)e!=u&&r(c,e)&&f.push(e);for(;n.length>a;)r(c,e=n[a++])&&(~i(f,e)||f.push(e));return f}},function(t,n){n.f={}.propertyIsEnumerable},function(t,n,e){var r=e(13),o=e(2),i=e(10);t.exports=function(t,n){var e=(o.Object||{})[t]||Object[t],u={};u[t]=n(e),r(r.S+r.F*i(function(){e(1)}),"Object",u)}},function(t,n,e){var r=e(15),o=e(7),i=e(39).f;t.exports=function(t){return function(n){for(var e,u=o(n),c=r(u),a=c.length,f=0,s=[];a>f;)i.call(u,e=c[f++])&&s.push(t?[e,u[e]]:u[e]);return s}}},function(t,n,e){var r=e(16),o=Math.max,i=Math.min;t.exports=function(t,n){return t=r(t),t<0?o(t+n,0):i(t,n)}},function(t,n,e){var r=e(16),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n,e){var r=e(11);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n,e){var r=e(24),o=e(15);e(40)("keys",function(){return function(t){return o(r(t))}})},function(t,n,e){var r=e(13),o=e(41)(!1);r(r.S,"Object",{values:function(t){return o(t)}})},,function(t,n,e){t.exports={default:e(49),__esModule:!0}},function(t,n,e){e(65),e(64),t.exports=e(62)},function(t,n){t.exports=function(){}},function(t,n,e){var r=e(19),o=e(4)("toStringTag"),i="Arguments"==r(function(){return arguments}()),u=function(t,n){try{return t[n]}catch(t){}};t.exports=function(t){var n,e,c;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=u(n=Object(t),o))?e:i?r(n):"Object"==(c=r(n))&&"function"==typeof n.callee?"Arguments":c}},function(t,n,e){t.exports=e(3).document&&document.documentElement},function(t,n,e){"use strict";var r=e(56),o=e(22),i=e(27),u={};e(5)(u,e(4)("iterator"),function(){return this}),t.exports=function(t,n,e){t.prototype=r(u,{next:o(1,e)}),i(t,n+" Iterator")}},function(t,n){t.exports=function(t,n){return{value:n,done:!!t}}},function(t,n){t.exports=!0},function(t,n,e){var r=e(8),o=e(57),i=e(21),u=e(18)("IE_PROTO"),c=function(){},a="prototype",f=function(){var t,n=e(20)("iframe"),r=i.length,o="<",u=">";for(n.style.display="none",e(52).appendChild(n),n.src="javascript:",t=n.contentWindow.document,t.open(),t.write(o+"script"+u+"document.F=Object"+o+"/script"+u),t.close(),f=t.F;r--;)delete f[a][i[r]];return f()};t.exports=Object.create||function(t,n){var e;return null!==t?(c[a]=r(t),e=new c,c[a]=null,e[u]=t):e=f(),void 0===n?e:o(e,n)}},function(t,n,e){var r=e(17),o=e(8),i=e(15);t.exports=e(6)?Object.defineProperties:function(t,n){o(t);for(var e,u=i(n),c=u.length,a=0;c>a;)r.f(t,e=u[a++],n[e]);return t}},function(t,n,e){var r=e(9),o=e(24),i=e(18)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,n,e){t.exports=e(5)},function(t,n,e){var r=e(16),o=e(12);t.exports=function(t){return function(n,e){var i,u,c=String(o(n)),a=r(e),f=c.length;return a<0||a>=f?t?"":void 0:(i=c.charCodeAt(a),i<55296||i>56319||a+1===f||(u=c.charCodeAt(a+1))<56320||u>57343?t?c.charAt(a):i:t?c.slice(a,a+2):(i-55296<<10)+(u-56320)+65536)}}},function(t,n,e){var r=e(51),o=e(4)("iterator"),i=e(14);t.exports=e(2).getIteratorMethod=function(t){if(void 0!=t)return t[o]||t["@@iterator"]||i[r(t)]}},function(t,n,e){var r=e(8),o=e(61);t.exports=e(2).getIterator=function(t){var n=o(t);if("function"!=typeof n)throw TypeError(t+" is not iterable!");return r(n.call(t))}},function(t,n,e){"use strict";var r=e(50),o=e(54),i=e(14),u=e(7);t.exports=e(26)(Array,"Array",function(t,n){this._t=u(t),this._i=0,this._k=n},function(){var t=this._t,n=this._k,e=this._i++;return!t||e>=t.length?(this._t=void 0,o(1)):"keys"==n?o(0,e):"values"==n?o(0,t[e]):o(0,[e,t[e]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},function(t,n,e){"use strict";var r=e(60)(!0);e(26)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,n=this._t,e=this._i;return e>=n.length?{value:void 0,done:!0}:(t=r(n,e),this._i+=t.length,{value:t,done:!1})})},function(t,n,e){e(63);for(var r=e(3),o=e(5),i=e(14),u=e(4)("toStringTag"),c=["NodeList","DOMTokenList","MediaList","StyleSheetList","CSSRuleList"],a=0;a<5;a++){var f=c[a],s=r[f],p=s&&s.prototype;p&&!p[u]&&o(p,u,f),i[f]=i.Array}},,,function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var o=e(48),i=r(o),u=e(30),c=r(u),a=e(29),f=r(a),s=e(47),p=r(s);p.default.component("bar-chart",{props:{label:{type:String,default:""},responseData:{type:Object,default:function(){return{}}}},template:'<canvas ref="chart" width="400" height="400"></canvas>',methods:{generateRandomHexColor:function(){return"#"+("00000"+(~~(Math.random()*(1<<24))).toString(16)).slice(-6)}},mounted:function(){var t=this.$refs.chart,n=(0,f.default)(this.responseData),e=(0,c.default)(this.responseData),r=this.label,o=[],u=!0,a=!1,s=void 0;try{for(var p,l=(0,i.default)(e);!(u=(p=l.next()).done);u=!0){p.value;o.push(this.generateRandomHexColor())}}catch(t){a=!0,s=t}finally{try{!u&&l.return&&l.return()}finally{if(a)throw s}}new Chart(t,{type:"bar",data:{labels:n,datasets:[{label:r,data:e,backgroundColor:o}]},options:{scales:{yAxes:[{ticks:{beginAtZero:!0}}]}}})}})},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,n,e){var r,o;e(242),r=e(190);var i=e(253);o=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(o=r=r.default),"function"==typeof o&&(o=o.options),o.render=i.render,o.staticRenderFns=i.staticRenderFns,t.exports=r},,,,,,,,,function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(n,"__esModule",{value:!0}),e(68);var o=e(28),i=r(o);n.default={name:"materias-alunos",mixins:[i.default]}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,n,e){n=t.exports=e(66)(),n.push([t.id,".chart-paper{margin:20px}","",{version:3,sources:["/./src/components/MateriasAlunos.vue"],names:[],mappings:"AACA,aACE,WAAa,CACd",file:"MateriasAlunos.vue",sourcesContent:["\n.chart-paper {\n  margin: 20px;\n}\n"],sourceRoot:"webpack://"}])},,,,,,function(t,n,e){var r=e(236);"string"==typeof r&&(r=[[t.id,r,""]]);e(67)(r,{});r.locals&&(t.exports=r.locals)},,,,,,,,,,,function(t,n){t.exports={render:function(){var t=this,n=t.$createElement;return n("div",[t.loading?n("div",["\n    Desenhando o gráfico :)\n  "]):t._e()," ",t.error?n("div",["\n    "+t._s(t.error)+"\n  "]):t._e()," ",t.response?n("div",[n("mu-paper",{staticClass:"chart-paper",attrs:{zDepth:3}},[n("bar-chart",{attrs:{"response-data":t.response.body,label:"Matérias por Aluno"}})])]):t._e()])},staticRenderFns:[]}}]);
//# sourceMappingURL=1.0c461b986566133b6675.js.map