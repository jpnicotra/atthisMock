(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fcc4851a"],{"088b":function(t,e,c){"use strict";var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("img",{attrs:{src:c("db11")}})},a=[],r=c("2877"),i={},l=Object(r["a"])(i,n,a,!1,null,null,null);e["a"]=l.exports},"3cdb":function(t,e,c){"use strict";c("ed67")},4918:function(t,e,c){"use strict";c.d(e,"b",(function(){return h})),c.d(e,"a",(function(){return p}));var n=c("2b0e"),a=c("b42e"),r=c("c637"),i=c("a723"),l=c("2326"),o=c("6c06"),s=c("7b1e"),u=c("3a58"),b=c("cf75"),d=c("fa73");function g(t,e,c){return e in t?Object.defineProperty(t,e,{value:c,enumerable:!0,configurable:!0,writable:!0}):t[e]=c,t}var f='<svg width="%{w}" height="%{h}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 %{w} %{h}" preserveAspectRatio="none"><rect width="100%" height="100%" style="fill:%{f};"></rect></svg>',m=function(t,e,c){var n=encodeURIComponent(f.replace("%{w}",Object(d["g"])(t)).replace("%{h}",Object(d["g"])(e)).replace("%{f}",c));return"data:image/svg+xml;charset=UTF-8,".concat(n)},h=Object(b["d"])({alt:Object(b["c"])(i["u"]),blank:Object(b["c"])(i["g"],!1),blankColor:Object(b["c"])(i["u"],"transparent"),block:Object(b["c"])(i["g"],!1),center:Object(b["c"])(i["g"],!1),fluid:Object(b["c"])(i["g"],!1),fluidGrow:Object(b["c"])(i["g"],!1),height:Object(b["c"])(i["p"]),left:Object(b["c"])(i["g"],!1),right:Object(b["c"])(i["g"],!1),rounded:Object(b["c"])(i["j"],!1),sizes:Object(b["c"])(i["f"]),src:Object(b["c"])(i["u"]),srcset:Object(b["c"])(i["f"]),thumbnail:Object(b["c"])(i["g"],!1),width:Object(b["c"])(i["p"])},r["kb"]),p=n["default"].extend({name:r["kb"],functional:!0,props:h,render:function(t,e){var c,n=e.props,r=e.data,i=n.alt,b=n.src,f=n.block,h=n.fluidGrow,p=n.rounded,j=Object(u["c"])(n.width)||null,O=Object(u["c"])(n.height)||null,w=null,v=Object(l["b"])(n.srcset).filter(o["a"]).join(","),k=Object(l["b"])(n.sizes).filter(o["a"]).join(",");return n.blank&&(!O&&j?O=j:!j&&O&&(j=O),j||O||(j=1,O=1),b=m(j,O,n.blankColor||"transparent"),v=null,k=null),n.left?w="float-left":n.right?w="float-right":n.center&&(w="mx-auto",f=!0),t("img",Object(a["a"])(r,{attrs:{src:b,alt:i,width:j?Object(d["g"])(j):null,height:O?Object(d["g"])(O):null,srcset:v||null,sizes:k||null},class:(c={"img-thumbnail":n.thumbnail,"img-fluid":n.fluid||h,"w-100":h,rounded:""===p||!0===p},g(c,"rounded-".concat(p),Object(s["n"])(p)&&""!==p),g(c,w,w),g(c,"d-block",f),c)}))}})},"84b5":function(t,e,c){"use strict";c.r(e);var n=function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"misc-wrapper"},[c("b-link",{staticClass:"brand-logo"},[c("vuexy-logo"),c("h2",{staticClass:"brand-text text-primary ml-1"},[t._v(" Vuexy ")])],1),c("div",{staticClass:"misc-inner p-2 p-sm-3"},[c("div",{staticClass:"w-100 text-center"},[c("h2",{staticClass:"mb-1"},[t._v(" You are not authorized! 🔐 ")]),c("p",{staticClass:"mb-2"},[t._v(" You don’t have permission to access this page. Go Home!! ")]),c("b-button",{staticClass:"mb-1 btn-sm-block",attrs:{variant:"primary",to:t.loginRoute()}},[t._v("Back to Home")]),c("b-img",{attrs:{fluid:"",src:t.imgUrl,alt:"Not authorized page"}})],1)])],1)},a=[],r=c("aa59"),i=c("4918"),l=c("1947"),o=c("088b"),s=c("4360"),u=c("8b71"),b={components:{BLink:r["a"],BImg:i["a"],BButton:l["a"],VuexyLogo:o["a"]},data:function(){return{downImg:c("e767")}},computed:{imgUrl:function(){return"dark"===s["a"].state.appConfig.layout.skin?(this.downImg=c("a357"),this.downImg):this.downImg}},methods:{loginRoute:function(){var t=JSON.parse(localStorage.getItem("userData"));return Object(u["a"])(t?t.role:null)}}},d=b,g=(c("3cdb"),c("2877")),f=Object(g["a"])(d,n,a,!1,null,null,null);e["default"]=f.exports},a357:function(t,e,c){t.exports=c.p+"img/not-authorized-dark.970d6347.svg"},e767:function(t,e,c){t.exports=c.p+"img/not-authorized.e9c47c33.svg"},ed67:function(t,e,c){}}]);
//# sourceMappingURL=chunk-fcc4851a.2122e1e8.js.map