(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4010a2df"],{1079:function(e,t,c){"use strict";var n=c("541c");t["a"]=n["a"]},a005:function(e,t,c){"use strict";c.d(t,"a",(function(){return p}));var n=c("2b0e"),r=c("b42e"),a=c("c637"),o=c("a723"),u=c("2326"),b=c("d82f"),i=c("cf75");function s(e,t,c){return t in e?Object.defineProperty(e,t,{value:c,enumerable:!0,configurable:!0,writable:!0}):e[t]=c,e}var l=["iframe","embed","video","object","img","b-img","b-img-lazy"],f=Object(i["d"])({aspect:Object(i["c"])(o["u"],"16by9"),tag:Object(i["c"])(o["u"],"div"),type:Object(i["c"])(o["u"],"iframe",(function(e){return Object(u["a"])(l,e)}))},a["I"]),p=n["default"].extend({name:a["I"],functional:!0,props:f,render:function(e,t){var c=t.props,n=t.data,a=t.children,o=c.aspect;return e(c.tag,{staticClass:"embed-responsive",class:s({},"embed-responsive-".concat(o),o),ref:n.ref},[e(c.type,Object(r["a"])(Object(b["j"])(n,["ref"]),{staticClass:"embed-responsive-item"}),a)])}})},a15b:function(e,t,c){"use strict";c.d(t,"a",(function(){return h}));var n=c("b42e"),r=c("c637"),a=c("a723"),o=c("2326"),u=c("228e"),b=c("6c06"),i=c("b508"),s=c("d82f"),l=c("cf75"),f=c("fa73");function p(e,t){var c=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),c.push.apply(c,n)}return c}function O(e){for(var t=1;t<arguments.length;t++){var c=null!=arguments[t]?arguments[t]:{};t%2?p(Object(c),!0).forEach((function(t){d(e,t,c[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(c)):p(Object(c)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(c,t))}))}return e}function d(e,t,c){return t in e?Object.defineProperty(e,t,{value:c,enumerable:!0,configurable:!0,writable:!0}):e[t]=c,e}var j=["start","end","center"],v=Object(i["a"])((function(e,t){return t=Object(f["h"])(Object(f["g"])(t)),t?Object(f["c"])(["row-cols",e,t].filter(b["a"]).join("-")):null})),m=Object(i["a"])((function(e){return Object(f["c"])(e.replace("cols",""))})),y=[],g=function(){var e=Object(u["b"])().reduce((function(e,t){return e[Object(l["g"])(t,"cols")]=Object(l["c"])(a["p"]),e}),Object(s["c"])(null));return y=Object(s["h"])(e),Object(l["d"])(Object(s["m"])(O(O({},e),{},{alignContent:Object(l["c"])(a["u"],null,(function(e){return Object(o["a"])(Object(o["b"])(j,"between","around","stretch"),e)})),alignH:Object(l["c"])(a["u"],null,(function(e){return Object(o["a"])(Object(o["b"])(j,"between","around"),e)})),alignV:Object(l["c"])(a["u"],null,(function(e){return Object(o["a"])(Object(o["b"])(j,"baseline","stretch"),e)})),noGutters:Object(l["c"])(a["g"],!1),tag:Object(l["c"])(a["u"],"div")})),r["Ob"])},h={name:r["Ob"],functional:!0,get props(){return delete this.props,this.props=g(),this.props},render:function(e,t){var c,r=t.props,a=t.data,o=t.children,u=r.alignV,b=r.alignH,i=r.alignContent,s=[];return y.forEach((function(e){var t=v(m(e),r[e]);t&&s.push(t)})),s.push((c={"no-gutters":r.noGutters},d(c,"align-items-".concat(u),u),d(c,"justify-content-".concat(b),b),d(c,"align-content-".concat(i),i),c)),e(r.tag,Object(n["a"])(a,{staticClass:"row",class:s}),o)}}},adec:function(e,t,c){"use strict";c.r(t);var n=function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("b-row",[c("b-col",{attrs:{cols:"12"}},[c("embed-types")],1)],1)},r=[],a=c("a15b"),o=c("b28b"),u=function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("b-card-code",{attrs:{title:"Embed types"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeTypes)+" ")]},proxy:!0}])},[c("b-card-text",[c("span",[e._v("Supported embed types are iframe (default), video, embed and object, which translate to the standard HTML ")]),c("code",[e._v("<iframe>")]),c("span",[e._v(" , ")]),c("code",[e._v("<video>")]),c("span",[e._v(" , ")]),c("code",[e._v("<embed>")]),c("span",[e._v(" and ")]),c("code",[e._v("<object>")]),c("span",[e._v(" elements.")])]),c("div",[c("b-embed",{attrs:{type:"iframe",aspect:"16by9",src:"https://www.youtube.com/embed/zpOULjyy-n8?rel=0",allowfullscreen:""}})],1)],1)},b=[],i=c("1079"),s=c("a005"),l=c("d6e4"),f='\n<template>\n  <div>\n    <b-embed type="iframe" aspect="16by9" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen/>\n  </div>\n</template>\n\n<script>\nimport { BEmbed } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BEmbed,\n  },\n}\n<\/script>\n',p={components:{BCardCode:i["a"],BEmbed:s["a"],BCardText:l["a"]},data:function(){return{codeTypes:f}}},O=p,d=c("2877"),j=Object(d["a"])(O,u,b,!1,null,null,null),v=j.exports,m={components:{EmbedTypes:v,BRow:a["a"],BCol:o["a"]}},y=m,g=Object(d["a"])(y,n,r,!1,null,null,null);t["default"]=g.exports},b28b:function(e,t,c){"use strict";c.d(t,"a",(function(){return P}));var n=c("b42e"),r=c("c637"),a=c("a723"),o=c("992e"),u=c("2326"),b=c("228e"),i=c("6c06"),s=c("7b1e"),l=c("b508"),f=c("d82f"),p=c("cf75"),O=c("fa73");function d(e,t){var c=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),c.push.apply(c,n)}return c}function j(e){for(var t=1;t<arguments.length;t++){var c=null!=arguments[t]?arguments[t]:{};t%2?d(Object(c),!0).forEach((function(t){v(e,t,c[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(c)):d(Object(c)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(c,t))}))}return e}function v(e,t,c){return t in e?Object.defineProperty(e,t,{value:c,enumerable:!0,configurable:!0,writable:!0}):e[t]=c,e}var m=["auto","start","end","center","baseline","stretch"],y=function(e,t,c){var n=e;if(!Object(s["p"])(c)&&!1!==c)return t&&(n+="-".concat(t)),"col"!==e||""!==c&&!0!==c?(n+="-".concat(c),Object(O["c"])(n)):Object(O["c"])(n)},g=Object(l["a"])(y),h=Object(f["c"])(null),w=function(){var e=Object(b["b"])().filter(i["a"]),t=e.reduce((function(e,t){return e[t]=Object(p["c"])(a["i"]),e}),Object(f["c"])(null)),c=e.reduce((function(e,t){return e[Object(p["g"])(t,"offset")]=Object(p["c"])(a["p"]),e}),Object(f["c"])(null)),n=e.reduce((function(e,t){return e[Object(p["g"])(t,"order")]=Object(p["c"])(a["p"]),e}),Object(f["c"])(null));return h=Object(f["a"])(Object(f["c"])(null),{col:Object(f["h"])(t),offset:Object(f["h"])(c),order:Object(f["h"])(n)}),Object(p["d"])(Object(f["m"])(j(j(j(j({},t),c),n),{},{alignSelf:Object(p["c"])(a["u"],null,(function(e){return Object(u["a"])(m,e)})),col:Object(p["c"])(a["g"],!1),cols:Object(p["c"])(a["p"]),offset:Object(p["c"])(a["p"]),order:Object(p["c"])(a["p"]),tag:Object(p["c"])(a["u"],"div")})),r["y"])},P={name:r["y"],functional:!0,get props(){return delete this.props,this.props=w()},render:function(e,t){var c,r=t.props,a=t.data,u=t.children,b=r.cols,i=r.offset,s=r.order,l=r.alignSelf,f=[];for(var p in h)for(var O=h[p],d=0;d<O.length;d++){var j=g(p,O[d].replace(p,""),r[O[d]]);j&&f.push(j)}var m=f.some((function(e){return o["e"].test(e)}));return f.push((c={col:r.col||!m&&!b},v(c,"col-".concat(b),b),v(c,"offset-".concat(i),i),v(c,"order-".concat(s),s),v(c,"align-self-".concat(l),l),c)),e(r.tag,Object(n["a"])(a,{class:f}),u)}}},d6e4:function(e,t,c){"use strict";c.d(t,"a",(function(){return i}));var n=c("2b0e"),r=c("b42e"),a=c("c637"),o=c("a723"),u=c("cf75"),b=Object(u["d"])({textTag:Object(u["c"])(o["u"],"p")},a["u"]),i=n["default"].extend({name:a["u"],functional:!0,props:b,render:function(e,t){var c=t.props,n=t.data,a=t.children;return e(c.textTag,Object(r["a"])(n,{staticClass:"card-text"}),a)}})}}]);
//# sourceMappingURL=chunk-4010a2df.43097693.js.map