(this["webpackJsonpreact-webshop"]=this["webpackJsonpreact-webshop"]||[]).push([[0],{41:function(e,t,a){e.exports=a.p+"static/media/404.9a16ef39.mkv"},42:function(e,t,a){e.exports=a.p+"static/media/404.6d0d39ed.jpg"},43:function(e,t,a){e.exports=a(72)},65:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(35),l=a.n(c),o=a(7),i=a(10),s=a(15),m=a(5),u=a.n(m),d=a(11),p=a(2),f=a(14),v=a(36),E=a.n(v),g=a(37),b=a.n(g).a.create({baseURL:"https://medieinstitutet-wie-products.azurewebsites.net/api",responseType:"json",headers:{"Content-Type":"application/json"}}),h=function(){var e=Object(d.a)(u.a.mark((function e(t){var a,n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.get("/".concat(t));case 3:return a=e.sent,(n=a.data)&&n.length&&localStorage.setItem(t,JSON.stringify(n)),e.abrupt("return",n);case 9:if(e.prev=9,e.t0=e.catch(0),!(r=localStorage.getItem(t))||!r.length){e.next=14;break}return e.abrupt("return",JSON.parse(r));case 14:if(!e.t0||!e.t0.response){e.next=16;break}return e.abrupt("return",e.t0.response.data);case 16:throw e.t0;case 17:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(d.a)(u.a.mark((function e(t,a,n){var r,c,l,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!n){e.next=9;break}return e.next=4,b.put("/".concat(a,"/").concat(n),t);case 4:return r=e.sent,c=r.data,e.abrupt("return",c);case 9:return e.next=11,b.post("/".concat(a),t);case 11:return l=e.sent,o=l.data,e.abrupt("return",o);case 14:e.next=21;break;case 16:if(e.prev=16,e.t0=e.catch(0),!(e.t0&e.t0.response)){e.next=20;break}return e.abrupt("return",e.t0.response.data);case 20:throw e.t0;case 21:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(t,a,n){return e.apply(this,arguments)}}(),N=(a(65),a(17)),w=a(13),x=a(38),O=a(20);N.b.add(w.g,w.c,w.a,w.b,w.e,w.d,w.h,w.f,w.i,x.a,O.c,O.b,O.a);var j=a(4),k=function(e){var t=e.categories,a=e.clearSearch,c=e.setClearSearch,l=Object(f.g)(),i=Object(n.useRef)(null),s=Object(n.useRef)(null);Object(n.useEffect)((function(){a&&i.current&&(i.current.value="",m()),c(!1)}),[a]);var m=function e(t){t?!(i&&i.current&&i.current.value)&&s&&s.current&&(s.current.checked=!1):setTimeout((function(){return e(!0)}),2e3)};return r.a.createElement("div",{className:"bg-secondary sticky-top px-2 py-1"},r.a.createElement("nav",{className:"nav nav-pills nav-fill align-items-center"},t.map((function(e){return r.a.createElement(o.c,{className:"nav-item nav-link h3 my-1",to:"/".concat(e.slug),key:e.id},e.name)})),r.a.createElement("div",{className:"nav-item"},r.a.createElement("input",{ref:s,type:"checkbox",id:"search-toggle"}),r.a.createElement("div",{className:"search mx-4 my-0 align-self-center"},r.a.createElement("div",{className:"d-flex"},r.a.createElement("input",{ref:i,className:"form-control",type:"search",placeholder:"Search","aria-label":"Search",onChange:function(e){var t=encodeURIComponent(e.target.value);t?t.length>1&&l.push("/search/".concat(t)):m()}}))),r.a.createElement("label",{className:"search-open btn btn-secondary m-0",htmlFor:"search-toggle"},r.a.createElement(j.a,{icon:"search"})))))},C=function(e){return new Intl.NumberFormat("se-SV",{style:"currency",currency:"SEK",minimumFractionDigits:0,maximumFractionDigits:0}).format(e)},S=function(e){var t=e.product,a=e.categories,n=[];return a.filter((function(e){var a;return e.id>0&&(null===(a=t.productCategory)||void 0===a?void 0:a.find((function(t){return t.categoryId===e.id})))})).map((function(e){return n.push(r.a.createElement(o.b,{key:e.id,className:"badge badge-pill mr-2 text-secondary product-category-".concat(e.id),to:"/".concat(e.slug)},e.name))})),r.a.createElement(r.a.Fragment,null,n)},I=function(e){var t=e.product,a=e.categories,n=e.addToCart;return r.a.createElement("div",{className:"d-flex"},r.a.createElement("div",{className:"card m-3 bg-dark shadow-sm"},r.a.createElement("div",{className:"overlay"},r.a.createElement("img",{className:"card-img-top img-fluid",alt:t.name,src:t.imageUrl}),r.a.createElement("div",{className:"card-description"},r.a.createElement("h4",null,t.name),r.a.createElement("p",null,t.description))),r.a.createElement("div",{className:"card-footer"},r.a.createElement("div",{className:"d-flex mb-3"},r.a.createElement(S,{product:t,categories:a})),r.a.createElement("div",{className:"d-flex flex-md-wrap align-items-center"},r.a.createElement("div",{className:"h5 font-weight-bold mb-0 mr-auto"},C(t.price)),r.a.createElement("button",{className:"btn btn-primary",onClick:function(){return n(t,1)}},"Add to cart")))))},T=function(e){var t=e.product,a=e.quantity,n=e.updateCart,c=e.openClass;return r.a.createElement("li",{className:"cart-item list-group-item d-flex px-3 pb-2 ".concat(c)},r.a.createElement("div",{className:"mr-3"},r.a.createElement("img",{className:"thumbnail",src:t.imageUrl,alt:t.name})),r.a.createElement("div",{className:"flex-grow-1 d-flex flex-column h5"},r.a.createElement("div",null,t.name),r.a.createElement("div",{className:"d-flex align-items-center justify-content-between mt-2"},r.a.createElement("div",null,r.a.createElement("div",{className:"d-flex align-items-center justify-content-start"},r.a.createElement("div",{className:"update p-2",onClick:function(){return n(t,a-1)}},r.a.createElement(j.a,{icon:"minus-circle"})),r.a.createElement("div",{className:"font-weight-bold"},r.a.createElement("input",{onChange:function(e){return n(t,parseInt(e.target.value))},inputMode:"numeric",pattern:"[0-9]*",type:"text",name:"quantity",value:a})),r.a.createElement("div",{className:"update p-2",onClick:function(){return n(t,a+1)}},r.a.createElement(j.a,{icon:"plus-circle"})))),r.a.createElement("div",{className:"w-25 text-right"},C(t.price*a)),r.a.createElement("div",{className:"update w-25 text-right p-2",onClick:function(){return n(t,0)}},r.a.createElement(j.a,{icon:["far","trash-alt"]})))))},F=function(e){var t,a=e.cart,n=e.updateCart,c=e.openClass,l=[],o=Object(i.a)(a.items.entries());try{for(o.s();!(t=o.n()).done;){var s=Object(p.a)(t.value,2),m=s[0],u=s[1];l.push(r.a.createElement(T,{key:m.id,product:m,quantity:u,updateCart:n,openClass:c}))}}catch(d){o.e(d)}finally{o.f()}return r.a.createElement(r.a.Fragment,null,l)},B=function(e){var t=e.cart,a=e.updateCart,c=e.toggleCart,l=e.atCheckout,s=Object(n.useRef)(null);Object(n.useEffect)((function(){t.open&&s&&s.current&&s.current.scrollIntoView({behavior:"smooth"})}),[t.open]);var m=function(){return t.open||l?"open":""},u=function(){var e,a=[],n=Object(i.a)(t.items.entries());try{for(n.s();!(e=n.n()).done;){var c=Object(p.a)(e.value,2),l=c[0],o=c[1];a.push(r.a.createElement("div",{key:l.id,className:"py-1 py-0-sm d-flex align-items-center"},r.a.createElement("div",null,r.a.createElement("img",{className:"thumbnail",src:l.imageUrl,alt:l.name})),r.a.createElement("div",{className:"label badge badge-pill"},o)))}}catch(s){n.e(s)}finally{n.f()}return r.a.createElement("div",{className:"d-flex flex-wrap"},a)},d=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"d-flex m-3 py-1 align-items-center flex-nowrap h5"},r.a.createElement("div",null,r.a.createElement(j.a,{icon:"shopping-cart"})),r.a.createElement("div",{className:"ml-2 font-weight-bold".concat(!t.open&&(t.items.size?" d-none d-sm-none":"")+(t.items.size>2?" d-md-none":" d-md-block")+(t.items.size>5?" d-lg-none":" d-lg-block")+(t.items.size>7?" d-xl-none":" d-xl-block"))},"Shopping cart")),r.a.createElement("div",{className:"ml-4"},r.a.createElement(u,null)),r.a.createElement("div",{className:"ml-auto mr-4"},r.a.createElement(j.a,{icon:"angle-up",size:"lg"})))},f=function(){return r.a.createElement(r.a.Fragment,null,t.articles?r.a.createElement("li",{className:"cart-item cart-footer list-group-item d-flex justify-content-between align-items-center flex-wrap\n        ".concat(m())},r.a.createElement("div",{className:"font-weight-bold d-flex h5 m-0"},r.a.createElement("div",{className:"mr-3"},"Total:"),r.a.createElement("div",null,C(t.subTotal))),r.a.createElement("div",{className:"text-right"},!l&&r.a.createElement(o.b,{to:"/checkout",className:"btn btn-primary"},"Check Out",r.a.createElement(j.a,{icon:"angle-right",size:"lg",className:"ml-2"})))):void 0)};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"cart-offset",ref:s}),r.a.createElement("div",{className:"cart",id:"cart"},r.a.createElement("ul",{className:"list-group ".concat(t.open?"":"m-3")},!l&&r.a.createElement("li",{onClick:c,className:"toggle p-0 list-group-item d-flex align-items-center\n          ".concat(m()," ").concat(t.blink?"blink":"")},r.a.createElement(d,null)),r.a.createElement(F,{cart:t,updateCart:a,openClass:m()}),r.a.createElement(f,null))))},M=function(e){var t=e.categories,a=e.products,c=e.cart,l=e.addToCart,o=e.updateCart,i=e.toggleCart,s=Object(f.h)().slug,m=s?t.find((function(e){return e.slug===s})):t.find((function(e){return-1===e.id}));Object(n.useEffect)((function(){window.scrollTo(0,0),c.open&&i()}),[s]);var u;return r.a.createElement(r.a.Fragment,null,!m&&r.a.createElement(f.a,{to:"/not-found"}),!s&&m&&r.a.createElement(f.a,{to:"/".concat(m.slug)}),r.a.createElement("div",{className:"row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5"},m&&(u=m,a.filter((function(e){return e.productCategory.find((function(e){return e.categoryId===u.id}))}))).map((function(e){return r.a.createElement(I,{key:e.id,product:e,categories:t,addToCart:l})}))),r.a.createElement("div",{className:"".concat(c.open?"":"fixed-bottom")},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col-sm-8 col-lg-6"},r.a.createElement(B,{cart:c,updateCart:o,toggleCart:i,atCheckout:!1})))))},z=a(41),J=a.n(z),R=a(42),P=a.n(R),D=function(e){var t=e.hasButton,a=e.caption,n=Object(f.g)();return r.a.createElement("div",{className:"video shadow-sm mt-3"},r.a.createElement("div",{className:"overlay"},r.a.createElement("video",{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,poster:P.a},r.a.createElement("source",{src:J.a,type:"video/mp4"})),r.a.createElement("div",{className:"description d-flex justify-content-around"},t&&r.a.createElement("div",{className:"align-self-center text-nowrap"},r.a.createElement("button",{className:"btn",onClick:n.goBack},r.a.createElement(j.a,{icon:"angle-left",size:"sm",className:"mr-2"}),"back")),r.a.createElement("div",null,r.a.createElement("h1",null,a)))))},U=function(e){var t=e.onSubmit,a=e.companies,n=e.errors;return r.a.createElement("form",{className:"h5 mt-4",onSubmit:t},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"companyId"},"company"),r.a.createElement("div",{className:"field"},r.a.createElement("select",{id:"companyId",name:"companyId",className:"form-control form-control-lg"},a.map((function(e,t){return r.a.createElement("option",{value:t||"",key:e},e)})))),n.companyId&&r.a.createElement("div",{className:"alert alert-danger mt-3"},n.companyId)),r.a.createElement("label",{htmlFor:"createdBy"},"e-mail"),r.a.createElement("div",{className:"field"},r.a.createElement("input",{id:"createdBy",name:"createdBy",type:"text",className:"form-control form-control-lg"})),n.createdBy&&r.a.createElement("div",{className:"alert alert-danger mt-3"},n.createdBy),r.a.createElement("div",{className:"my-2"},"payment method"),[{icon:"cc-visa",name:"Visa"},{icon:"cc-mastercard",name:"MasterCard"},{icon:"cc-amex",name:"Amex"}].map((function(e){return r.a.createElement("div",{className:"form-check-inline",key:e.icon},r.a.createElement("label",{className:"form-check-label"},r.a.createElement("span",null,r.a.createElement("input",{type:"radio",className:"form-check-input",name:"paymentMethod",id:e.icon,value:e.name}),r.a.createElement(j.a,{icon:["fab",e.icon],size:"2x",key:e.icon,className:"pt-1"}))))})),n.paymentMethod&&r.a.createElement("div",{className:"alert alert-danger mt-3"},n.paymentMethod),r.a.createElement("div",{className:"mt-4 text-right"},r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Place Order",r.a.createElement(j.a,{icon:"angle-right",size:"lg",className:"ml-2"}))))},q=function(e){var t=e.cart,a=e.order,c=e.companies,l=e.setOrder,o=e.updateCart,m=e.toggleCart,v=Object(n.useState)({companyId:"",createdBy:"",paymentMethod:""}),E=Object(p.a)(v,2),g=E[0],b=E[1];Object(n.useEffect)((function(){t.open&&m(),window.scrollTo(0,0)}),[t.open,m]);var h=Object(f.g)();Object(n.useEffect)((function(){t.subTotal||h.push("/")}),[h,t]);var N=function(e){var t={},a=e.get("createdBy");return w(a)||(t.createdBy="Please provide correct e-mail address!"),e.get("companyId")||(t.companyId="Please select company!"),e.get("paymentMethod")||(t.paymentMethod="Please select payment method!"),b(t),0===Object.keys(t).length},w=function(e){return e.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)},x=function(){var e=Object(d.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("createdOrder:",JSON.stringify(t)),e.next=3,y(t,"orders");case 3:a=e.sent,console.log("savedOrder:",JSON.stringify(a)),l(Object(s.a)({},a)),h.push("/confirmation");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(e){var a,n=[],r=Object(i.a)(t.items.entries());try{for(r.s();!(a=r.n()).done;){var c=Object(p.a)(a.value,2),l=c[0],o=c[1],s={productId:l.id,orderId:null===e||void 0===e?void 0:e.id,amount:o};n.push(s)}}catch(m){r.e(m)}finally{r.f()}return n};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"row row-cols-1 row-cols-md-2"},r.a.createElement("div",{className:"col mt-2 p-0"},r.a.createElement(B,{cart:t,updateCart:o,toggleCart:m,atCheckout:!0})),r.a.createElement("div",{className:"col"},r.a.createElement(U,{onSubmit:function(e){e.preventDefault();var n=new FormData(e.target);if(N(n)){var r,c={created:(new Date).toISOString()},l=Object(i.a)(n.entries());try{for(l.s();!(r=l.n()).done;){var o=Object(p.a)(r.value,2),m=o[0],u=o[1];c[m]=u}}catch(f){l.e(f)}finally{l.f()}delete a.id;var d=Object(s.a)({},a,{},c,{totalPrice:t.subTotal,orderRows:O(a)});x(d)}},errors:g,companies:c}))))},V=function(e){var t,a=e.order,n=e.products;return r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{className:"cart-item list-group-item d-flex justify-content-between font-italic open"},r.a.createElement("div",{className:"w-50"},"product"),r.a.createElement("div",{className:"w-25 text-center"},"quantity"),r.a.createElement("div",{className:"w-25 text-right"},"price")),null===(t=a.orderRows)||void 0===t?void 0:t.map((function(e){var t=n.find((function(t){return t.id===e.productId}));return r.a.createElement("li",{key:null===t||void 0===t?void 0:t.id,className:"cart-item list-group-item d-flex align-items-center justify-content-between open h5 m-0"},r.a.createElement("div",{className:"w-50 d-flex align-items-center"},r.a.createElement("div",{className:"mr-3"},r.a.createElement("img",{className:"thumbnail",src:null===t||void 0===t?void 0:t.imageUrl,alt:null===t||void 0===t?void 0:t.name})),r.a.createElement("div",null,null===t||void 0===t?void 0:t.name)),r.a.createElement("div",{className:"w-25 text-center"},e.amount),r.a.createElement("div",{className:"w-25 text-right"},C(t?t.price*e.amount:0)))})))},A=function(e){var t=e.cart,a=e.order,c=e.products,l=e.companies;console.log("order:",a),Object(n.useEffect)((function(){window.scrollTo(0,0)}),[]);var o=function(){t.items.clear(),t.articles=0,t.subTotal=0,t.open=!1,localStorage.removeItem("cart"),localStorage.removeItem("items")};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"row"},r.a.createElement("h1",{className:"m-4 text-secondary h2 font-weight-light"},"Order confirmation")),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col-12 col-lg-6 mb-4"},r.a.createElement("div",{className:"cart open"},r.a.createElement("ul",{className:"list-group open"},r.a.createElement(V,{order:a,products:c}),r.a.createElement("li",{className:"cart-item cart-footer list-group-item d-flex justify-content-end open"},r.a.createElement("div",{className:"font-weight-bold d-flex h5 m-0"},r.a.createElement("div",{className:"mr-3"},"Total:"),r.a.createElement("div",null,C(a.totalPrice)))))),function(){var e="";if(a.orderRows){var n;(null===(n=a.orderRows)||void 0===n?void 0:n.length)!==t.items.size&&(e="Order contains wrong number of items.");var c,l=0,s=Object(i.a)(t.items.entries());try{for(s.s();!(c=s.n()).done;){var m=Object(p.a)(c.value,2),u=m[0],d=m[1],f=a.orderRows[l];u.id===f.productId&&d===f.amount||(e='Order contains wrong quantity of "'.concat(u.name,'": ').concat(f.amount," should be ").concat(d,"!")),l++}}catch(v){s.e(v)}finally{s.f()}}else e="Order is empty!";return e?r.a.createElement("div",{className:"alert alert-danger mt-4 mb-0"},e):(o(),"")}()),r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"cart open"},r.a.createElement("ul",{className:"list-group open h5 m-0"},r.a.createElement("li",{className:"cart-item list-group-item d-flex align-items-center justify-content-between open"},r.a.createElement("div",null,"order #"),r.a.createElement("div",null,a.id)),r.a.createElement("li",{className:"cart-item list-group-item d-flex align-items-center justify-content-between open"},r.a.createElement("div",null,"customer"),r.a.createElement("div",null,l[a.companyId])),r.a.createElement("li",{className:"cart-item list-group-item d-flex align-items-center justify-content-between open"},r.a.createElement("div",null,"order created"),r.a.createElement("div",{className:"text-nowrap"},new Date(a.created).toLocaleString("en-gb"))),r.a.createElement("li",{className:"cart-item list-group-item d-flex align-items-center justify-content-between open"},r.a.createElement("div",null,"e-mail"),r.a.createElement("div",null,a.createdBy)),r.a.createElement("li",{className:"cart-item list-group-item d-flex align-items-center justify-content-between open"},r.a.createElement("div",null,"payment method"),r.a.createElement("div",null,a.paymentMethod)))))))},L=function(){return r.a.createElement("div",{className:"loading text-primary"},r.a.createElement(j.a,{icon:"spinner",size:"10x",pulse:!0}))},K=[{id:-1,name:"No products",description:"",price:0,imageUrl:"",year:0,added:new Date,productCategory:[]}],$=function(e){var t=e.categories,a=e.products,c=e.cart,l=e.addToCart,o=e.updateCart,i=e.toggleCart,s=e.setClearSearch,m=Object(f.h)().slug,v=Object(n.useState)([]),E=Object(p.a)(v,2),g=E[0],b=E[1];return Object(n.useEffect)((function(){(window.scrollTo(0,0),m)&&function(){var e=Object(d.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h("search/?searchText=".concat(m));case 2:t=e.sent,n=t&&t.length?a.filter((function(e){return t.map((function(e){return e.id})).includes(e.id)})):K,b(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[m,a]),Object(n.useEffect)((function(){return function(){s(!0)}}),[]),r.a.createElement(r.a.Fragment,null,!m&&r.a.createElement(f.a,{to:"/"}),(!g||!g.length||g===K)&&r.a.createElement(D,{hasButton:!1,caption:"Nope"})||r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5"},g.map((function(e){return r.a.createElement(I,{key:e.id,product:e,categories:t,addToCart:l})})))),r.a.createElement("div",{className:"".concat(c.open?"":"fixed-bottom")},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col-sm-8 col-lg-6"},r.a.createElement(B,{cart:c,updateCart:o,toggleCart:i,atCheckout:!1})))))},G=function(){return r.a.createElement("footer",null,r.a.createElement("p",{className:"text-right px-4"},r.a.createElement("small",{className:"text-info"},"\xa9 2020 Christofer Laurin ","production")))},H={items:new Map,articles:0,subTotal:0,blink:!1,open:!1},Q={companyId:0,created:"",createdBy:"",paymentMethod:"",totalPrice:0,status:0},W=["","Telia","Volvo","Skanska","ABB"],X=function(){var e=Object(n.useState)(!0),t=Object(p.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)([]),o=Object(p.a)(l,2),m=o[0],v=o[1],g=Object(n.useState)([]),b=Object(p.a)(g,2),y=b[0],N=b[1],w=Object(n.useState)(H),x=Object(p.a)(w,2),O=x[0],j=x[1],C=Object(n.useState)(Q),S=Object(p.a)(C,2),I=S[0],T=S[1],F=Object(n.useState)(!1),B=Object(p.a)(F,2),z=B[0],J=B[1];Object(n.useEffect)((function(){c(!(m.length&&y.length))}),[a,m,y]),Object(n.useEffect)((function(){(function(){var e=Object(d.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h("categories");case 2:(t=e.sent).unshift({id:-1,name:"Newly added"}),t.map((function(e){return e.slug=E()(e.name,{lower:!0})})),v(t);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(n.useEffect)((function(){(function(){var e=Object(d.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h("products");case 2:t=e.sent,R(t),t.sort((function(e,t){return e.name>t.name?1:-1})),N(t);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(n.useEffect)((function(){if(O.blink&&setTimeout((function(){return j(Object(s.a)({},O,{blink:!1}))}),500),O.items.size){localStorage.setItem("cart",JSON.stringify(O));var e=[];O.items.forEach((function(t,a){return e.push([a.id,t])})),localStorage.setItem("items",JSON.stringify(e))}}),[O]),Object(n.useEffect)((function(){y&&y.length&&j(function(){var e=localStorage.getItem("cart"),t=localStorage.getItem("items");if(e&&e.length&&t&&t.length){var a=JSON.parse(e),n=JSON.parse(t).map((function(e){var t=Object(p.a)(e,2),a=t[0],n=t[1];return[y.find((function(e){return e.id===a})),n]}));return a.items=new Map(n),a}return H}())}),[y]);var R=function(e){e.sort((function(e,t){return e.added<t.added?1:-1})),e.slice(0,4).map((function(e){return e.productCategory.push({categoryId:-1})}))},P=function(e,t){var a=new Map(O.items);if(a.has(e)){var n=a.get(e);n&&a.set(e,n+t)}else a.set(e,t);var r=V(a),c=Object(p.a)(r,2),l=c[0],o=c[1];j(Object(s.a)({},O,{items:a,subTotal:l,articles:o,open:!1,blink:!0}))},U=function(e,t){var a=new Map(O.items);e&&0===t?a.delete(e):t>=1&&t<=99&&a.set(e,t);var n=V(a),r=Object(p.a)(n,2),c=r[0],l=r[1];j(Object(s.a)({},O,{items:a,subTotal:c,articles:l,blink:!O.open}))},V=function(e){var t,a=0,n=0,r=Object(i.a)(e.entries());try{for(r.s();!(t=r.n()).done;){var c=Object(p.a)(t.value,2),l=c[0],o=c[1];a+=l.price*o,n+=o}}catch(s){r.e(s)}finally{r.f()}return[a,n]},K=function(){O.articles&&j(Object(s.a)({},O,{open:!O.open}))};return a?r.a.createElement(L,null):r.a.createElement("div",{id:"content"},r.a.createElement(k,{categories:m,clearSearch:z,setClearSearch:J}),r.a.createElement("main",{className:"container-fluid text-light px-3"},r.a.createElement(f.d,null,r.a.createElement(f.b,{path:"/checkout"},r.a.createElement(q,{cart:O,order:I,companies:W,setOrder:T,updateCart:U,toggleCart:K})),r.a.createElement(f.b,{path:"/confirmation"},r.a.createElement(A,{cart:O,order:I,companies:W,products:y})),r.a.createElement(f.b,{path:"/not-found"},r.a.createElement(D,{hasButton:!0,caption:"404"})),r.a.createElement(f.b,{path:"/search/:slug"},r.a.createElement($,{categories:m,products:y,cart:O,addToCart:P,updateCart:U,toggleCart:K,setClearSearch:J})),r.a.createElement(f.b,{path:"/:slug"},r.a.createElement(M,{categories:m,products:y,cart:O,addToCart:P,updateCart:U,toggleCart:K})),r.a.createElement(f.a,{from:"/",exact:!0,to:"/newly-added"}),r.a.createElement(f.b,null,r.a.createElement(f.a,{to:"/not-found"})))),r.a.createElement(G,null))};l.a.render(r.a.createElement(o.a,{basename:"/react-webshop"},r.a.createElement(X,null)),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.de92c9da.chunk.js.map