(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f9e61300"],{"02ff":function(t,e,s){"use strict";s("1b09")},"1b09":function(t,e,s){},"299a":function(t,e,s){"use strict";s.r(e);var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t._m(0),s("ol",[s("post",{on:{remove:t.remove}})],1)])},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{attrs:{href:"/createPost"}},[s("button",{staticClass:"button"},[t._v("Новый Пост")])])}],c=s("5530"),i=s("2f62"),r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ol",t._l(t.listPost,(function(e){return s("div",{key:e.id,staticClass:"post"},[s("a",{attrs:{href:"/viewPost"},on:{click:function(s){return t.idPost(e.id)}}},[s("h1",{staticClass:"titlePost"},[t._v(t._s(e.title))])]),s("h3",[t._v(t._s(e.smallText))]),s("h4",[t._v("Кол-во комментариев: "+t._s(e.coments.length))]),s("button",{on:{click:function(s){return t.$emit("remove",e.id)}}},[t._v("Удалить пост")])])})),0)},l=[],u={computed:Object(i["b"])(["listPost"]),methods:Object(c["a"])(Object(c["a"])({},Object(i["c"])(["showPosts"])),{},{idPost:function(t){localStorage.idPosts=t}})},a=u,f=(s("02ff"),s("2877")),h=Object(f["a"])(a,r,l,!1,null,null,null),b=h.exports,v={components:{post:b},methods:Object(c["a"])(Object(c["a"])({},Object(i["c"])(["showPosts","removePost"])),{},{show:function(){this.showPosts()},remove:function(t){this.removePost(t),this.show()}}),beforeMount:function(){this.show()}},m=v,_=Object(f["a"])(m,o,n,!1,null,null,null);e["default"]=_.exports}}]);
//# sourceMappingURL=chunk-f9e61300.ea0f2c31.js.map