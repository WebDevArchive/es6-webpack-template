!function(e){function t(r){if(n[r])return n[r].exports;var a=n[r]={exports:{},id:r,loaded:!1};return e[r].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var a=n(4),i=r(a);n(5);var o=new i["default"]({title:"devDependencies:",rootElement:document.getElementById("devDependencies"),jsonFile:"./package.json",jsonField:"devDependencies"});o.render()},function(e,t,n){var r=n(18);e.exports=(r["default"]||r).template({compiler:[6,">= 2.0.0-beta.1"],main:function(e,t,n,r){var a;return"<h1>Title: "+this.escapeExpression((a=null!=(a=t.title||(null!=e?e.title:e))?a:t.helperMissing,"function"==typeof a?a.call(e,{name:"title",hash:{},data:r}):a))+'</h1>\r\n<div id="content"></div>'},useData:!0})},,,function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(12),s=r(o);n(10);var l=function(){function e(t){a(this,e),this.title=t.title,this.rootElement=t.rootElement,this.jsonField=t.jsonField,this.jsonRender=new s["default"]({jsonFile:t.jsonFile})}return i(e,[{key:"render",value:function(){var e=this.jsonRender.getHtml(this.jsonField),t=n(1),r=t(this);this.rootElement.innerHTML=r,document.getElementById("content").innerHTML=e}}]),e}();t["default"]=l,e.exports=t["default"]},function(e,t,n){},,,,,function(e,t,n){},,function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();n(15);var i=function(){function e(t){r(this,e),this.jsonFile=t.jsonFile}return a(e,[{key:"getHtml",value:function(e){var t=n(14)(this.jsonFile),r=n(17),a=r(t);return a}}]),e}();t["default"]=i,e.exports=t["default"]},,function(e,t,n){function r(e){return n(a(e))}function a(e){return i[e]||function(){throw new Error("Cannot find module '"+e+"'.")}()}var i={"./jsonRender":12,"./jsonRender.css":15,"./jsonRender.hbs":17,"./jsonRender.js":12,"./package":19,"./package.json":19};r.keys=function(){return Object.keys(i)},r.resolve=a,e.exports=r,r.id=14},function(e,t,n){},,function(e,t,n){var r=n(18);e.exports=(r["default"]||r).template({compiler:[6,">= 2.0.0-beta.1"],main:function(e,t,n,r){var a;return"<h1>Hello, dear "+this.escapeExpression((a=null!=(a=t.name||(null!=e?e.name:e))?a:t.helperMissing,"function"==typeof a?a.call(e,{name:"name",hash:{},data:r}):a))+"</h1>"},useData:!0})},function(e,t,n){e.exports=n(20)["default"]},function(e,t,n){e.exports={name:"es6-webpack-template",version:"0.0.1",description:"Start template: es6-modules + webpack",main:"index.js",scripts:{start:"npm run build & npm run server",build:"rm -rf app/dist && node ./scripts/build",server:"node ./scripts/server",watch:"webpack --config ./scripts/webpack.config.js --watch",test:'echo "Error: no test specified" && exit 1'},repository:{type:"git",url:"https://github.com/WebDevArchive/es6-webpack-template.git"},keywords:["javascript","es6","modules","webpack","build","template"],author:"Stas <stas.webwork@gmail.com>, WebDevArchive — http://vk.com/webdevarchive",license:"ISC",bugs:{url:"https://github.com/WebDevArchive/es6-webpack-template/issues"},homepage:"https://github.com/WebDevArchive/es6-webpack-template",devDependencies:{"babel-loader":"^5.0.0","css-loader":"^0.12.1","extract-text-webpack-plugin":"^0.8.0",handlebars:"^3.0.3","handlebars-loader":"^1.0.2","html-webpack-plugin":"^1.3.0","json-loader":"^0.5.1","style-loader":"^0.12.2",webpack:"^1.9.5","webpack-dev-server":"^1.8.2"}}},function(e,t,n){"use strict";function r(){var e=new o.HandlebarsEnvironment;return f.extend(e,o),e.SafeString=l["default"],e.Exception=c["default"],e.Utils=f,e.escapeExpression=f.escapeExpression,e.VM=h,e.template=function(t){return h.template(t,e)},e}var a=function(e){return e&&e.__esModule?e:{"default":e}};t.__esModule=!0;var i=n(21),o=a(i),s=n(22),l=a(s),u=n(23),c=a(u),p=n(26),f=a(p),d=n(24),h=a(d),v=n(25),m=a(v),g=r();g.create=r,m["default"](g),g["default"]=g,t["default"]=g,e.exports=t["default"]},function(e,t,n){"use strict";function r(e,t){this.helpers=e||{},this.partials=t||{},a(this)}function a(e){e.registerHelper("helperMissing",function(){if(1===arguments.length)return void 0;throw new c["default"]('Missing helper: "'+arguments[arguments.length-1].name+'"')}),e.registerHelper("blockHelperMissing",function(t,n){var r=n.inverse,a=n.fn;if(t===!0)return a(this);if(t===!1||null==t)return r(this);if(h(t))return t.length>0?(n.ids&&(n.ids=[n.name]),e.helpers.each(t,n)):r(this);if(n.data&&n.ids){var o=i(n.data);o.contextPath=l.appendContextPath(n.data.contextPath,n.name),n={data:o}}return a(t,n)}),e.registerHelper("each",function(e,t){function n(t,n,a){u&&(u.key=t,u.index=n,u.first=0===n,u.last=!!a,p&&(u.contextPath=p+t)),s+=r(e[t],{data:u,blockParams:l.blockParams([e[t],t],[p+t,null])})}if(!t)throw new c["default"]("Must pass iterator to #each");var r=t.fn,a=t.inverse,o=0,s="",u=void 0,p=void 0;if(t.data&&t.ids&&(p=l.appendContextPath(t.data.contextPath,t.ids[0])+"."),v(e)&&(e=e.call(this)),t.data&&(u=i(t.data)),e&&"object"==typeof e)if(h(e))for(var f=e.length;f>o;o++)n(o,o,o===e.length-1);else{var d=void 0;for(var m in e)e.hasOwnProperty(m)&&(d&&n(d,o-1),d=m,o++);d&&n(d,o-1,!0)}return 0===o&&(s=a(this)),s}),e.registerHelper("if",function(e,t){return v(e)&&(e=e.call(this)),!t.hash.includeZero&&!e||l.isEmpty(e)?t.inverse(this):t.fn(this)}),e.registerHelper("unless",function(t,n){return e.helpers["if"].call(this,t,{fn:n.inverse,inverse:n.fn,hash:n.hash})}),e.registerHelper("with",function(e,t){v(e)&&(e=e.call(this));var n=t.fn;if(l.isEmpty(e))return t.inverse(this);if(t.data&&t.ids){var r=i(t.data);r.contextPath=l.appendContextPath(t.data.contextPath,t.ids[0]),t={data:r}}return n(e,t)}),e.registerHelper("log",function(t,n){var r=n.data&&null!=n.data.level?parseInt(n.data.level,10):1;e.log(r,t)}),e.registerHelper("lookup",function(e,t){return e&&e[t]})}function i(e){var t=l.extend({},e);return t._parent=e,t}var o=function(e){return e&&e.__esModule?e:{"default":e}};t.__esModule=!0,t.HandlebarsEnvironment=r,t.createFrame=i;var s=n(26),l=o(s),u=n(23),c=o(u),p="3.0.1";t.VERSION=p;var f=6;t.COMPILER_REVISION=f;var d={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1"};t.REVISION_CHANGES=d;var h=l.isArray,v=l.isFunction,m=l.toString,g="[object Object]";r.prototype={constructor:r,logger:b,log:w,registerHelper:function(e,t){if(m.call(e)===g){if(t)throw new c["default"]("Arg not supported with multiple helpers");l.extend(this.helpers,e)}else this.helpers[e]=t},unregisterHelper:function(e){delete this.helpers[e]},registerPartial:function(e,t){if(m.call(e)===g)l.extend(this.partials,e);else{if("undefined"==typeof t)throw new c["default"]("Attempting to register a partial as undefined");this.partials[e]=t}},unregisterPartial:function(e){delete this.partials[e]}};var b={methodMap:{0:"debug",1:"info",2:"warn",3:"error"},DEBUG:0,INFO:1,WARN:2,ERROR:3,level:1,log:function(e,t){if("undefined"!=typeof console&&b.level<=e){var n=b.methodMap[e];(console[n]||console.log).call(console,t)}}};t.logger=b;var w=b.log;t.log=w},function(e,t,n){"use strict";function r(e){this.string=e}t.__esModule=!0,r.prototype.toString=r.prototype.toHTML=function(){return""+this.string},t["default"]=r,e.exports=t["default"]},function(e,t,n){"use strict";function r(e,t){var n=t&&t.loc,i=void 0,o=void 0;n&&(i=n.start.line,o=n.start.column,e+=" - "+i+":"+o);for(var s=Error.prototype.constructor.call(this,e),l=0;l<a.length;l++)this[a[l]]=s[a[l]];Error.captureStackTrace&&Error.captureStackTrace(this,r),n&&(this.lineNumber=i,this.column=o)}t.__esModule=!0;var a=["description","fileName","lineNumber","message","name","number","stack"];r.prototype=new Error,t["default"]=r,e.exports=t["default"]},function(e,t,n){"use strict";function r(e){var t=e&&e[0]||1,n=v.COMPILER_REVISION;if(t!==n){if(n>t){var r=v.REVISION_CHANGES[n],a=v.REVISION_CHANGES[t];throw new h["default"]("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+r+") or downgrade your runtime to an older version ("+a+").")}throw new h["default"]("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+e[1]+").")}}function a(e,t){function n(n,r,a){a.hash&&(r=f.extend({},r,a.hash)),n=t.VM.resolvePartial.call(this,n,r,a);var i=t.VM.invokePartial.call(this,n,r,a);if(null==i&&t.compile&&(a.partials[a.name]=t.compile(n,e.compilerOptions,t),i=a.partials[a.name](r,a)),null!=i){if(a.indent){for(var o=i.split("\n"),s=0,l=o.length;l>s&&(o[s]||s+1!==l);s++)o[s]=a.indent+o[s];i=o.join("\n")}return i}throw new h["default"]("The partial "+a.name+" could not be compiled when running in runtime-only mode")}function r(t){var n=void 0===arguments[1]?{}:arguments[1],i=n.data;r._setup(n),!n.partial&&e.useData&&(i=u(t,i));var o=void 0,s=e.useBlockParams?[]:void 0;return e.useDepths&&(o=n.depths?[t].concat(n.depths):[t]),e.main.call(a,t,a.helpers,a.partials,i,s,o)}if(!t)throw new h["default"]("No environment passed to template");if(!e||!e.main)throw new h["default"]("Unknown template object: "+typeof e);t.VM.checkRevision(e.compiler);var a={strict:function(e,t){if(!(t in e))throw new h["default"]('"'+t+'" not defined in '+e);return e[t]},lookup:function(e,t){for(var n=e.length,r=0;n>r;r++)if(e[r]&&null!=e[r][t])return e[r][t]},lambda:function(e,t){return"function"==typeof e?e.call(t):e},escapeExpression:f.escapeExpression,invokePartial:n,fn:function(t){return e[t]},programs:[],program:function(e,t,n,r,a){var o=this.programs[e],s=this.fn(e);return t||a||r||n?o=i(this,e,s,t,n,r,a):o||(o=this.programs[e]=i(this,e,s)),o},data:function(e,t){for(;e&&t--;)e=e._parent;return e},merge:function(e,t){var n=e||t;return e&&t&&e!==t&&(n=f.extend({},t,e)),n},noop:t.VM.noop,compilerInfo:e.compiler};return r.isTop=!0,r._setup=function(n){n.partial?(a.helpers=n.helpers,a.partials=n.partials):(a.helpers=a.merge(n.helpers,t.helpers),e.usePartial&&(a.partials=a.merge(n.partials,t.partials)))},r._child=function(t,n,r,o){if(e.useBlockParams&&!r)throw new h["default"]("must pass block params");if(e.useDepths&&!o)throw new h["default"]("must pass parent depths");return i(a,t,e[t],n,0,r,o)},r}function i(e,t,n,r,a,i,o){function s(t){var a=void 0===arguments[1]?{}:arguments[1];return n.call(e,t,e.helpers,e.partials,a.data||r,i&&[a.blockParams].concat(i),o&&[t].concat(o))}return s.program=t,s.depth=o?o.length:0,s.blockParams=a||0,s}function o(e,t,n){return e?e.call||n.name||(n.name=e,e=n.partials[e]):e=n.partials[n.name],e}function s(e,t,n){if(n.partial=!0,void 0===e)throw new h["default"]("The partial "+n.name+" could not be found");return e instanceof Function?e(t,n):void 0}function l(){return""}function u(e,t){return t&&"root"in t||(t=t?v.createFrame(t):{},t.root=e),t}var c=function(e){return e&&e.__esModule?e:{"default":e}};t.__esModule=!0,t.checkRevision=r,t.template=a,t.wrapProgram=i,t.resolvePartial=o,t.invokePartial=s,t.noop=l;var p=n(26),f=c(p),d=n(23),h=c(d),v=n(21)},function(e,t,n){(function(n){"use strict";t.__esModule=!0,t["default"]=function(e){var t="undefined"!=typeof n?n:window,r=t.Handlebars;e.noConflict=function(){t.Handlebars===e&&(t.Handlebars=r)}},e.exports=t["default"]}).call(t,function(){return this}())},function(e,t,n){"use strict";function r(e){return c[e]}function a(e){for(var t=1;t<arguments.length;t++)for(var n in arguments[t])Object.prototype.hasOwnProperty.call(arguments[t],n)&&(e[n]=arguments[t][n]);return e}function i(e,t){for(var n=0,r=e.length;r>n;n++)if(e[n]===t)return n;return-1}function o(e){if("string"!=typeof e){if(e&&e.toHTML)return e.toHTML();if(null==e)return"";if(!e)return e+"";e=""+e}return f.test(e)?e.replace(p,r):e}function s(e){return e||0===e?v(e)&&0===e.length?!0:!1:!0}function l(e,t){return e.path=t,e}function u(e,t){return(e?e+".":"")+t}t.__esModule=!0,t.extend=a,t.indexOf=i,t.escapeExpression=o,t.isEmpty=s,t.blockParams=l,t.appendContextPath=u;var c={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},p=/[&<>"'`]/g,f=/[&<>"'`]/,d=Object.prototype.toString;t.toString=d;var h=function(e){return"function"==typeof e};h(/x/)&&(t.isFunction=h=function(e){return"function"==typeof e&&"[object Function]"===d.call(e)});var h;t.isFunction=h;var v=Array.isArray||function(e){return e&&"object"==typeof e?"[object Array]"===d.call(e):!1};t.isArray=v}]);