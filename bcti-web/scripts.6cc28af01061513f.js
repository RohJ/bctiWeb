!function(T,S){"object"==typeof exports&&typeof module<"u"?module.exports=S():"function"==typeof define&&define.amd?define(S):(T=typeof globalThis<"u"?globalThis:T||self).Glide=S()}(this,function(){"use strict";function T(n,t){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(n);t&&(e=e.filter(function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable})),r.push.apply(r,e)}return r}function S(n){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?T(Object(r),!0).forEach(function(e){$(n,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):T(Object(r)).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e))})}return n}function E(n){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(n)}function x(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function G(n,t){for(var r=0;r<t.length;r++){var e=t[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}function j(n,t,r){return t&&G(n.prototype,t),r&&G(n,r),n}function $(n,t,r){return t in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,n}function O(n){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(n)}function L(n,t){return(L=Object.setPrototypeOf||function(r,e){return r.__proto__=e,r})(n,t)}function z(){return z=typeof Reflect<"u"&&Reflect.get?Reflect.get:function(n,t,r){var e=function nt(n,t){for(;!Object.prototype.hasOwnProperty.call(n,t)&&null!==(n=O(n)););return n}(n,t);if(e){var i=Object.getOwnPropertyDescriptor(e,t);return i.get?i.get.call(arguments.length<3?n:r):i.value}},z.apply(this,arguments)}var it={type:"slider",startAt:0,perView:1,focusAt:0,gap:10,autoplay:!1,hoverpause:!0,keyboard:!0,bound:!1,swipeThreshold:80,dragThreshold:120,perSwipe:"",touchRatio:.5,touchAngle:45,animationDuration:400,rewind:!0,rewindDuration:800,animationTimingFunc:"cubic-bezier(.165, .840, .440, 1)",waitForTransition:!0,throttle:10,direction:"ltr",peek:0,cloningRatio:1,breakpoints:{},classes:{swipeable:"glide--swipeable",dragging:"glide--dragging",direction:{ltr:"glide--ltr",rtl:"glide--rtl"},type:{slider:"glide--slider",carousel:"glide--carousel"},slide:{clone:"glide__slide--clone",active:"glide__slide--active"},arrow:{disabled:"glide__arrow--disabled"},nav:{active:"glide__bullet--active"}}};function g(n){console.error("[Glide warn]: ".concat(n))}function m(n){return parseInt(n)}function C(n){return"string"==typeof n}function H(n){var t=E(n);return"function"===t||"object"===t&&!!n}function A(n){return"function"==typeof n}function q(n){return void 0===n}function M(n){return n.constructor===Array}function v(n,t,r){Object.defineProperty(n,t,r)}function D(n,t){var r=Object.assign({},n,t);return t.hasOwnProperty("classes")&&(r.classes=Object.assign({},n.classes,t.classes),["direction","type","slide","arrow","nav"].forEach(function(e){t.classes.hasOwnProperty(e)&&(r.classes[e]=S(S({},n.classes[e]),t.classes[e]))})),t.hasOwnProperty("breakpoints")&&(r.breakpoints=Object.assign({},n.breakpoints,t.breakpoints)),r}var ot=function(){function n(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};x(this,n),this.events=t,this.hop=t.hasOwnProperty}return j(n,[{key:"on",value:function(t,r){if(!M(t)){this.hop.call(this.events,t)||(this.events[t]=[]);var e=this.events[t].push(r)-1;return{remove:function(){delete this.events[t][e]}}}for(var i=0;i<t.length;i++)this.on(t[i],r)}},{key:"emit",value:function(t,r){if(M(t))for(var e=0;e<t.length;e++)this.emit(t[e],r);else this.hop.call(this.events,t)&&this.events[t].forEach(function(i){i(r||{})})}}]),n}(),st=function(){function n(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};x(this,n),this._c={},this._t=[],this._e=new ot,this.disabled=!1,this.selector=t,this.settings=D(it,r),this.index=this.settings.startAt}return j(n,[{key:"mount",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._e.emit("mount.before"),H(t)?this._c=function rt(n,t,r){var e={};for(var i in t)A(t[i])?e[i]=t[i](n,e,r):g("Extension must be a function");for(var o in e)A(e[o].mount)&&e[o].mount();return e}(this,t,this._e):g("You need to provide a object on `mount()`"),this._e.emit("mount.after"),this}},{key:"mutate",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return M(t)?this._t=t:g("You need to provide a array on `mutate()`"),this}},{key:"update",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.settings=D(this.settings,t),t.hasOwnProperty("startAt")&&(this.index=t.startAt),this._e.emit("update"),this}},{key:"go",value:function(t){return this._c.Run.make(t),this}},{key:"move",value:function(t){return this._c.Transition.disable(),this._c.Move.make(t),this}},{key:"destroy",value:function(){return this._e.emit("destroy"),this}},{key:"play",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return t&&(this.settings.autoplay=t),this._e.emit("play"),this}},{key:"pause",value:function(){return this._e.emit("pause"),this}},{key:"disable",value:function(){return this.disabled=!0,this}},{key:"enable",value:function(){return this.disabled=!1,this}},{key:"on",value:function(t,r){return this._e.on(t,r),this}},{key:"isType",value:function(t){return this.settings.type===t}},{key:"settings",get:function(){return this._o},set:function(t){H(t)?this._o=t:g("Options must be an `object` instance.")}},{key:"index",get:function(){return this._i},set:function(t){this._i=m(t)}},{key:"type",get:function(){return this.settings.type}},{key:"disabled",get:function(){return this._d},set:function(t){this._d=!!t}}]),n}();function F(){return(new Date).getTime()}function P(n,t){var r,e,i,o,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},u=0,c=function(){u=!1===s.leading?0:F(),r=null,o=n.apply(e,i),r||(e=i=null)},f=function(){var l=F();u||!1!==s.leading||(u=l);var a=t-(l-u);return e=this,i=arguments,a<=0||a>t?(r&&(clearTimeout(r),r=null),u=l,o=n.apply(e,i),r||(e=i=null)):r||!1===s.trailing||(r=setTimeout(c,a)),o};return f.cancel=function(){clearTimeout(r),u=0,r=e=i=null},f}var B={ltr:["marginLeft","marginRight"],rtl:["marginRight","marginLeft"]};function N(n){if(n&&n.parentNode){for(var t=n.parentNode.firstChild,r=[];t;t=t.nextSibling)1===t.nodeType&&t!==n&&r.push(t);return r}return[]}function W(n){return Array.prototype.slice.call(n)}var y=function(){function n(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};x(this,n),this.listeners=t}return j(n,[{key:"on",value:function(t,r,e){var i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];C(t)&&(t=[t]);for(var o=0;o<t.length;o++)this.listeners[t[o]]=e,r.addEventListener(t[o],this.listeners[t[o]],i)}},{key:"off",value:function(t,r){var e=arguments.length>2&&void 0!==arguments[2]&&arguments[2];C(t)&&(t=[t]);for(var i=0;i<t.length;i++)r.removeEventListener(t[i],this.listeners[t[i]],e)}},{key:"destroy",value:function(){delete this.listeners}}]),n}(),ut=["ltr","rtl"],at={">":"<","<":">","=":"="};function ct(n,t){return{modify:function(r){return t.Direction.is("rtl")?-r:r}}}function lt(n,t){return{modify:function(r){var e=Math.floor(r/t.Sizes.slideWidth);return r+t.Gaps.value*e}}}function ft(n,t){return{modify:function(r){return r+t.Clones.grow/2}}}function dt(n,t){return{modify:function(r){if(n.settings.focusAt>=0){var e=t.Peek.value;return H(e)?r-e.before:r-e}return r}}}function ht(n,t){return{modify:function(r){var o=n.settings.focusAt,s=t.Sizes.slideWidth;return"center"===o?r-(t.Sizes.width/2-s/2):r-s*o-t.Gaps.value*o}}}var Y=!1;try{var X=Object.defineProperty({},"passive",{get:function(){Y=!0}});window.addEventListener("testPassive",null,X),window.removeEventListener("testPassive",null,X)}catch{}var I=Y,R=["touchstart","mousedown"],K=["touchmove","mousemove"],J=["touchend","touchcancel","mouseup","mouseleave"],Q=["mousedown","mousemove","mouseup","mouseleave"],V='[data-glide-el^="controls"]',vt="".concat(V,' [data-glide-dir*="<"]'),mt="".concat(V,' [data-glide-dir*=">"]');function U(n){return H(n)?(t=n,Object.keys(t).sort().reduce(function(r,e){return r[e]=t[e],r},{})):(g("Breakpoints option must be an object"),{});var t}var pt={Html:function(n,t,r){var e={mount:function(){this.root=n.selector,this.track=this.root.querySelector('[data-glide-el="track"]'),this.collectSlides()},collectSlides:function(){this.slides=W(this.wrapper.children).filter(function(i){return!i.classList.contains(n.settings.classes.slide.clone)})}};return v(e,"root",{get:function(){return e._r},set:function(i){C(i)&&(i=document.querySelector(i)),null!==i?e._r=i:g("Root element must be a existing Html node")}}),v(e,"track",{get:function(){return e._t},set:function(i){e._t=i}}),v(e,"wrapper",{get:function(){return e.track.children[0]}}),r.on("update",function(){e.collectSlides()}),e},Translate:function(n,t,r){var e={set:function(i){var u,c,l,o=(u=n,c=t,l=[lt,ft,dt,ht].concat(u._t,[ct]),{mutate:function(a){for(var d=0;d<l.length;d++){var h=l[d];A(h)&&A(h().modify)?a=h(u,c,void 0).modify(a):g("Transformer should be a function that returns an object with `modify()` method")}return a}}).mutate(i),s="translate3d(".concat(-1*o,"px, 0px, 0px)");t.Html.wrapper.style.mozTransform=s,t.Html.wrapper.style.webkitTransform=s,t.Html.wrapper.style.transform=s},remove:function(){t.Html.wrapper.style.transform=""},getStartIndex:function(){var i=t.Sizes.length,o=n.index,s=n.settings.perView;return t.Run.isOffset(">")||t.Run.isOffset("|>")?i+(o-s):(o+s)%i},getTravelDistance:function(){var i=t.Sizes.slideWidth*n.settings.perView;return t.Run.isOffset(">")||t.Run.isOffset("|>")?-1*i:i}};return r.on("move",function(i){if(!n.isType("carousel")||!t.Run.isOffset())return e.set(i.movement);t.Transition.after(function(){r.emit("translate.jump"),e.set(t.Sizes.slideWidth*n.index)});var o=t.Sizes.slideWidth*t.Translate.getStartIndex();return e.set(o-t.Translate.getTravelDistance())}),r.on("destroy",function(){e.remove()}),e},Transition:function(n,t,r){var e=!1,i={compose:function(o){var s=n.settings;return e?"".concat(o," 0ms ").concat(s.animationTimingFunc):"".concat(o," ").concat(this.duration,"ms ").concat(s.animationTimingFunc)},set:function(){t.Html.wrapper.style.transition=this.compose(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"transform")},remove:function(){t.Html.wrapper.style.transition=""},after:function(o){setTimeout(function(){o()},this.duration)},enable:function(){e=!1,this.set()},disable:function(){e=!0,this.set()}};return v(i,"duration",{get:function(){var o=n.settings;return n.isType("slider")&&t.Run.offset?o.rewindDuration:o.animationDuration}}),r.on("move",function(){i.set()}),r.on(["build.before","resize","translate.jump"],function(){i.disable()}),r.on("run",function(){i.enable()}),r.on("destroy",function(){i.remove()}),i},Direction:function(n,t,r){var e={mount:function(){this.value=n.settings.direction},resolve:function(i){var o=i.slice(0,1);return this.is("rtl")?i.split(o).join(at[o]):i},is:function(i){return this.value===i},addClass:function(){t.Html.root.classList.add(n.settings.classes.direction[this.value])},removeClass:function(){t.Html.root.classList.remove(n.settings.classes.direction[this.value])}};return v(e,"value",{get:function(){return e._v},set:function(i){ut.indexOf(i)>-1?e._v=i:g("Direction value must be `ltr` or `rtl`")}}),r.on(["destroy","update"],function(){e.removeClass()}),r.on("update",function(){e.mount()}),r.on(["build.before","update"],function(){e.addClass()}),e},Peek:function(n,t,r){var e={mount:function(){this.value=n.settings.peek}};return v(e,"value",{get:function(){return e._v},set:function(i){H(i)?(i.before=m(i.before),i.after=m(i.after)):i=m(i),e._v=i}}),v(e,"reductor",{get:function(){var i=e.value,o=n.settings.perView;return H(i)?i.before/o+i.after/o:2*i/o}}),r.on(["resize","update"],function(){e.mount()}),e},Sizes:function(n,t,r){var e={setupSlides:function(){for(var i="".concat(this.slideWidth,"px"),o=t.Html.slides,s=0;s<o.length;s++)o[s].style.width=i},setupWrapper:function(){t.Html.wrapper.style.width="".concat(this.wrapperSize,"px")},remove:function(){for(var i=t.Html.slides,o=0;o<i.length;o++)i[o].style.width="";t.Html.wrapper.style.width=""}};return v(e,"length",{get:function(){return t.Html.slides.length}}),v(e,"width",{get:function(){return t.Html.track.offsetWidth}}),v(e,"wrapperSize",{get:function(){return e.slideWidth*e.length+t.Gaps.grow+t.Clones.grow}}),v(e,"slideWidth",{get:function(){return e.width/n.settings.perView-t.Peek.reductor-t.Gaps.reductor}}),r.on(["build.before","resize","update"],function(){e.setupSlides(),e.setupWrapper()}),r.on("destroy",function(){e.remove()}),e},Gaps:function(n,t,r){var e={apply:function(i){for(var o=0,s=i.length;o<s;o++){var u=i[o].style,c=t.Direction.value;u[B[c][0]]=0!==o?"".concat(this.value/2,"px"):"",u[B[c][1]]=o!==i.length-1?"".concat(this.value/2,"px"):""}},remove:function(i){for(var o=0,s=i.length;o<s;o++){var u=i[o].style;u.marginLeft="",u.marginRight=""}}};return v(e,"value",{get:function(){return m(n.settings.gap)}}),v(e,"grow",{get:function(){return e.value*t.Sizes.length}}),v(e,"reductor",{get:function(){var i=n.settings.perView;return e.value*(i-1)/i}}),r.on(["build.after","update"],P(function(){e.apply(t.Html.wrapper.children)},30)),r.on("destroy",function(){e.remove(t.Html.wrapper.children)}),e},Move:function(n,t,r){var e={mount:function(){this._o=0},make:function(){var i=this;this.offset=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,r.emit("move",{movement:this.value}),t.Transition.after(function(){r.emit("move.after",{movement:i.value})})}};return v(e,"offset",{get:function(){return e._o},set:function(i){e._o=q(i)?0:m(i)}}),v(e,"translate",{get:function(){return t.Sizes.slideWidth*n.index}}),v(e,"value",{get:function(){var i=this.offset,o=this.translate;return t.Direction.is("rtl")?o+i:o-i}}),r.on(["build.before","run"],function(){e.make()}),e},Clones:function(n,t,r){var e={mount:function(){this.items=[],n.isType("carousel")&&(this.items=this.collect())},collect:function(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],o=t.Html.slides,s=n.settings,u=s.perView,c=s.classes,f=s.cloningRatio;if(o.length>0)for(var a=u+ +!!n.settings.peek+Math.round(u/2),d=o.slice(0,a).reverse(),h=o.slice(-1*a),p=0;p<Math.max(f,Math.floor(u/o.length));p++){for(var b=0;b<d.length;b++){var w=d[b].cloneNode(!0);w.classList.add(c.slide.clone),i.push(w)}for(var _=0;_<h.length;_++){var k=h[_].cloneNode(!0);k.classList.add(c.slide.clone),i.unshift(k)}}return i},append:function(){for(var i=this.items,o=t.Html,s=o.wrapper,u=o.slides,c=Math.floor(i.length/2),f=i.slice(0,c).reverse(),l=i.slice(-1*c).reverse(),a="".concat(t.Sizes.slideWidth,"px"),d=0;d<l.length;d++)s.appendChild(l[d]);for(var h=0;h<f.length;h++)s.insertBefore(f[h],u[0]);for(var p=0;p<i.length;p++)i[p].style.width=a},remove:function(){for(var i=this.items,o=0;o<i.length;o++)t.Html.wrapper.removeChild(i[o])}};return v(e,"grow",{get:function(){return(t.Sizes.slideWidth+t.Gaps.value)*e.items.length}}),r.on("update",function(){e.remove(),e.mount(),e.append()}),r.on("build.before",function(){n.isType("carousel")&&e.append()}),r.on("destroy",function(){e.remove()}),e},Resize:function(n,t,r){var e=new y,i={mount:function(){this.bind()},bind:function(){e.on("resize",window,P(function(){r.emit("resize")},n.settings.throttle))},unbind:function(){e.off("resize",window)}};return r.on("destroy",function(){i.unbind(),e.destroy()}),i},Build:function(n,t,r){var e={mount:function(){r.emit("build.before"),this.typeClass(),this.activeClass(),r.emit("build.after")},typeClass:function(){t.Html.root.classList.add(n.settings.classes.type[n.settings.type])},activeClass:function(){var i=n.settings.classes,o=t.Html.slides[n.index];o&&(o.classList.add(i.slide.active),N(o).forEach(function(s){s.classList.remove(i.slide.active)}))},removeClasses:function(){var i=n.settings.classes,s=i.slide;t.Html.root.classList.remove(i.type[n.settings.type]),t.Html.slides.forEach(function(u){u.classList.remove(s.active)})}};return r.on(["destroy","update"],function(){e.removeClasses()}),r.on(["resize","update"],function(){e.mount()}),r.on("move.after",function(){e.activeClass()}),e},Run:function(n,t,r){var e={mount:function(){this._o=!1},make:function(i){var o=this;n.disabled||(!n.settings.waitForTransition||n.disable(),this.move=i,r.emit("run.before",this.move),this.calculate(),r.emit("run",this.move),t.Transition.after(function(){o.isStart()&&r.emit("run.start",o.move),o.isEnd()&&r.emit("run.end",o.move),o.isOffset()&&(o._o=!1,r.emit("run.offset",o.move)),r.emit("run.after",o.move),n.enable()}))},calculate:function(){var a,d,i=this.move,o=this.length,s=i.steps,u=i.direction,c=1;if("="===u)return n.settings.bound&&m(s)>o?void(n.index=o):void(n.index=s);if(">"!==u||">"!==s)if("<"!==u||"<"!==s){if("|"===u&&(c=n.settings.perView||1),">"===u||"|"===u&&">"===s){var f=(a=c,d=n.index,n.isType("carousel")?d+a:d+(a-d%a));return f>o&&(this._o=!0),void(n.index=function(a,d){var h=e.length;return a<=h?a:n.isType("carousel")?a-(h+1):n.settings.rewind?e.isBound()&&!e.isEnd()?h:0:e.isBound()?h:Math.floor(h/d)*d}(f,c))}if("<"===u||"|"===u&&"<"===s){var l=function(a){var d=n.index;return n.isType("carousel")?d-a:(Math.ceil(d/a)-1)*a}(c);return l<0&&(this._o=!0),void(n.index=function(a,d){var h=e.length;return a>=0?a:n.isType("carousel")?a+(h+1):n.settings.rewind?e.isBound()&&e.isStart()?h:Math.floor(h/d)*d:0}(l,c))}g("Invalid direction pattern [".concat(u).concat(s,"] has been used"))}else n.index=0;else n.index=o},isStart:function(){return n.index<=0},isEnd:function(){return n.index>=this.length},isOffset:function(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;return i?!!this._o&&("|>"===i?"|"===this.move.direction&&">"===this.move.steps:"|<"===i?"|"===this.move.direction&&"<"===this.move.steps:this.move.direction===i):this._o},isBound:function(){return n.isType("slider")&&"center"!==n.settings.focusAt&&n.settings.bound}};return v(e,"move",{get:function(){return this._m},set:function(i){var o=i.substr(1);this._m={direction:i.substr(0,1),steps:o?m(o)?m(o):o:0}}}),v(e,"length",{get:function(){var i=n.settings,o=t.Html.slides.length;return this.isBound()?o-1-(m(i.perView)-1)+m(i.focusAt):o-1}}),v(e,"offset",{get:function(){return this._o}}),e},Swipe:function(n,t,r){var e=new y,i=0,o=0,s=0,u=!1,c=!!I&&{passive:!0},f={mount:function(){this.bindSwipeStart()},start:function(l){if(!u&&!n.disabled){this.disable();var a=this.touches(l);i=null,o=m(a.pageX),s=m(a.pageY),this.bindSwipeMove(),this.bindSwipeEnd(),r.emit("swipe.start")}},move:function(l){if(!n.disabled){var a=n.settings,d=a.touchAngle,h=a.touchRatio,p=a.classes,b=this.touches(l),w=m(b.pageX)-o,_=m(b.pageY)-s,k=Math.abs(w<<2),Z=Math.abs(_<<2),yt=Math.sqrt(k+Z),bt=Math.sqrt(Z);if(!(180*(i=Math.asin(bt/yt))/Math.PI<d))return!1;l.stopPropagation(),t.Move.make(w*parseFloat(h)),t.Html.root.classList.add(p.dragging),r.emit("swipe.move")}},end:function(l){if(!n.disabled){var a=n.settings,d=a.perSwipe,h=a.touchAngle,p=a.classes,b=this.touches(l),w=this.threshold(l),_=b.pageX-o,k=180*i/Math.PI;this.enable(),_>w&&k<h?t.Run.make(t.Direction.resolve("".concat(d,"<"))):_<-w&&k<h?t.Run.make(t.Direction.resolve("".concat(d,">"))):t.Move.make(),t.Html.root.classList.remove(p.dragging),this.unbindSwipeMove(),this.unbindSwipeEnd(),r.emit("swipe.end")}},bindSwipeStart:function(){var l=this,a=n.settings,h=a.dragThreshold;a.swipeThreshold&&e.on(R[0],t.Html.wrapper,function(p){l.start(p)},c),h&&e.on(R[1],t.Html.wrapper,function(p){l.start(p)},c)},unbindSwipeStart:function(){e.off(R[0],t.Html.wrapper,c),e.off(R[1],t.Html.wrapper,c)},bindSwipeMove:function(){var l=this;e.on(K,t.Html.wrapper,P(function(a){l.move(a)},n.settings.throttle),c)},unbindSwipeMove:function(){e.off(K,t.Html.wrapper,c)},bindSwipeEnd:function(){var l=this;e.on(J,t.Html.wrapper,function(a){l.end(a)})},unbindSwipeEnd:function(){e.off(J,t.Html.wrapper)},touches:function(l){return Q.indexOf(l.type)>-1?l:l.touches[0]||l.changedTouches[0]},threshold:function(l){var a=n.settings;return Q.indexOf(l.type)>-1?a.dragThreshold:a.swipeThreshold},enable:function(){return u=!1,t.Transition.enable(),this},disable:function(){return u=!0,t.Transition.disable(),this}};return r.on("build.after",function(){t.Html.root.classList.add(n.settings.classes.swipeable)}),r.on("destroy",function(){f.unbindSwipeStart(),f.unbindSwipeMove(),f.unbindSwipeEnd(),e.destroy()}),f},Images:function(n,t,r){var e=new y,i={mount:function(){this.bind()},bind:function(){e.on("dragstart",t.Html.wrapper,this.dragstart)},unbind:function(){e.off("dragstart",t.Html.wrapper)},dragstart:function(o){o.preventDefault()}};return r.on("destroy",function(){i.unbind(),e.destroy()}),i},Anchors:function(n,t,r){var e=new y,i=!1,o=!1,s={mount:function(){this._a=t.Html.wrapper.querySelectorAll("a"),this.bind()},bind:function(){e.on("click",t.Html.wrapper,this.click)},unbind:function(){e.off("click",t.Html.wrapper)},click:function(u){o&&(u.stopPropagation(),u.preventDefault())},detach:function(){if(o=!0,!i){for(var u=0;u<this.items.length;u++)this.items[u].draggable=!1;i=!0}return this},attach:function(){if(o=!1,i){for(var u=0;u<this.items.length;u++)this.items[u].draggable=!0;i=!1}return this}};return v(s,"items",{get:function(){return s._a}}),r.on("swipe.move",function(){s.detach()}),r.on("swipe.end",function(){t.Transition.after(function(){s.attach()})}),r.on("destroy",function(){s.attach(),s.unbind(),e.destroy()}),s},Controls:function(n,t,r){var e=new y,i=!!I&&{passive:!0},o={mount:function(){this._n=t.Html.root.querySelectorAll('[data-glide-el="controls[nav]"]'),this._c=t.Html.root.querySelectorAll(V),this._arrowControls={previous:t.Html.root.querySelectorAll(vt),next:t.Html.root.querySelectorAll(mt)},this.addBindings()},setActive:function(){for(var s=0;s<this._n.length;s++)this.addClass(this._n[s].children)},removeActive:function(){for(var s=0;s<this._n.length;s++)this.removeClass(this._n[s].children)},addClass:function(s){var u=n.settings,c=s[n.index];c&&(c.classList.add(u.classes.nav.active),N(c).forEach(function(f){f.classList.remove(u.classes.nav.active)}))},removeClass:function(s){var u=s[n.index];u?.classList.remove(n.settings.classes.nav.active)},setArrowState:function(){if(!n.settings.rewind){var s=o._arrowControls.next,u=o._arrowControls.previous;this.resetArrowState(s,u),0===n.index&&this.disableArrow(u),n.index===t.Run.length&&this.disableArrow(s)}},resetArrowState:function(){for(var s=n.settings,u=arguments.length,c=new Array(u),f=0;f<u;f++)c[f]=arguments[f];c.forEach(function(l){W(l).forEach(function(a){a.classList.remove(s.classes.arrow.disabled)})})},disableArrow:function(){for(var s=n.settings,u=arguments.length,c=new Array(u),f=0;f<u;f++)c[f]=arguments[f];c.forEach(function(l){W(l).forEach(function(a){a.classList.add(s.classes.arrow.disabled)})})},addBindings:function(){for(var s=0;s<this._c.length;s++)this.bind(this._c[s].children)},removeBindings:function(){for(var s=0;s<this._c.length;s++)this.unbind(this._c[s].children)},bind:function(s){for(var u=0;u<s.length;u++)e.on("click",s[u],this.click),e.on("touchstart",s[u],this.click,i)},unbind:function(s){for(var u=0;u<s.length;u++)e.off(["click","touchstart"],s[u])},click:function(s){I||"touchstart"!==s.type||s.preventDefault();var u=s.currentTarget.getAttribute("data-glide-dir");t.Run.make(t.Direction.resolve(u))}};return v(o,"items",{get:function(){return o._c}}),r.on(["mount.after","move.after"],function(){o.setActive()}),r.on(["mount.after","run"],function(){o.setArrowState()}),r.on("destroy",function(){o.removeBindings(),o.removeActive(),e.destroy()}),o},Keyboard:function(n,t,r){var e=new y,i={mount:function(){n.settings.keyboard&&this.bind()},bind:function(){e.on("keyup",document,this.press)},unbind:function(){e.off("keyup",document)},press:function(o){var s=n.settings.perSwipe;["ArrowRight","ArrowLeft"].includes(o.code)&&t.Run.make(t.Direction.resolve("".concat(s).concat({ArrowRight:">",ArrowLeft:"<"}[o.code])))}};return r.on(["destroy","update"],function(){i.unbind()}),r.on("update",function(){i.mount()}),r.on("destroy",function(){e.destroy()}),i},Autoplay:function(n,t,r){var e=new y,i={mount:function(){this.enable(),this.start(),n.settings.hoverpause&&this.bind()},enable:function(){this._e=!0},disable:function(){this._e=!1},start:function(){var o=this;this._e&&(this.enable(),n.settings.autoplay&&q(this._i)&&(this._i=setInterval(function(){o.stop(),t.Run.make(">"),o.start(),r.emit("autoplay")},this.time)))},stop:function(){this._i=clearInterval(this._i)},bind:function(){var o=this;e.on("mouseover",t.Html.root,function(){o._e&&o.stop()}),e.on("mouseout",t.Html.root,function(){o._e&&o.start()})},unbind:function(){e.off(["mouseover","mouseout"],t.Html.root)}};return v(i,"time",{get:function(){return m(t.Html.slides[n.index].getAttribute("data-glide-autoplay")||n.settings.autoplay)}}),r.on(["destroy","update"],function(){i.unbind()}),r.on(["run.before","swipe.start","update"],function(){i.stop()}),r.on(["pause","destroy"],function(){i.disable(),i.stop()}),r.on(["run.after","swipe.end"],function(){i.start()}),r.on(["play"],function(){i.enable(),i.start()}),r.on("update",function(){i.mount()}),r.on("destroy",function(){e.destroy()}),i},Breakpoints:function(n,t,r){var e=new y,i=n.settings,o=U(i.breakpoints),s=Object.assign({},i),u={match:function(c){if(void 0!==window.matchMedia)for(var f in c)if(c.hasOwnProperty(f)&&window.matchMedia("(max-width: ".concat(f,"px)")).matches)return c[f];return s}};return Object.assign(i,u.match(o)),e.on("resize",window,P(function(){n.settings=D(i,u.match(o))},n.settings.throttle)),r.on("update",function(){o=U(o),s=Object.assign({},i)}),r.on("destroy",function(){e.off("resize",window)}),u}},gt=function(n){!function(e,i){if("function"!=typeof i&&null!==i)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(i&&i.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),i&&L(e,i)}(r,n);var t=function et(n){var t=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}();return function(){var r,e=O(n);if(t){var i=O(this).constructor;r=Reflect.construct(e,arguments,i)}else r=e.apply(this,arguments);return function tt(n,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(r){if(void 0===r)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}(n)}(this,r)}}(r);function r(){return x(this,r),t.apply(this,arguments)}return j(r,[{key:"mount",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return z(O(r.prototype),"mount",this).call(this,Object.assign({},pt,e))}}]),r}(st);return gt});