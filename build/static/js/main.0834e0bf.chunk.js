(this.webpackJsonpburger_project=this.webpackJsonpburger_project||[]).push([[0],{125:function(e,t,c){},126:function(e,t,c){},127:function(e,t,c){},129:function(e,t,c){},130:function(e,t,c){},131:function(e,t,c){},132:function(e,t,c){},133:function(e,t,c){},140:function(e,t,c){},141:function(e,t,c){},142:function(e,t,c){},148:function(e,t){},150:function(e,t){},161:function(e,t){},163:function(e,t){},190:function(e,t){},192:function(e,t){},193:function(e,t){},198:function(e,t){},200:function(e,t){},206:function(e,t){},208:function(e,t){},227:function(e,t){},239:function(e,t){},242:function(e,t){},245:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c(39),s=c.n(r),a=(c(125),c(126),c(14)),i=c(3),o=(c(127),c(0)),l=function(e){return Object(o.jsxs)("div",{className:"container navbigation-bar",children:[Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("div",{className:"col-lg-12",children:Object(o.jsx)("h1",{className:"navbar-heading",children:"The Burglery"})})}),Object(o.jsxs)("div",{className:"row navigation-links",children:[Object(o.jsx)(a.b,{to:"/",className:"navigation-link",children:"Home"}),Object(o.jsx)(a.b,{to:"/orders",className:"navigation-link",children:"Orders"})]})]})},d=(c(129),c(130),c(131),function(e){return Object(o.jsxs)("div",{className:"menu-cards flip-card-front",children:[Object(o.jsx)("img",{className:"burger_image",src:"/img/"+e.burgerName+".jpg",width:"150px",height:"150px",alt:e.burgerName+" image"}),Object(o.jsx)("p",{className:"burger_name",children:e.burgerName}),Object(o.jsx)("p",{className:"burger_price",children:e.burgerPrice})]})}),b=(c(132),function(e){return Object(o.jsx)("div",{className:"flip-card container",children:Object(o.jsxs)("div",{className:"flip-card-inner",children:[Object(o.jsx)("div",{className:"flip-card-front",children:Object(o.jsx)(d,{burgerName:e.burgerName,burgerPrice:e.burgerPrice+" Rs./"})}),Object(o.jsx)("div",{className:"flip-card-back",children:Object(o.jsx)("div",{className:"d-flex align-items-center back-side",children:Object(o.jsxs)("div",{className:"row buttons-row",children:[Object(o.jsx)(a.b,{to:"/order/"+e.burgerName,children:Object(o.jsx)("button",{className:"btn btn-outline-success flip-card-buttons",children:"Place Order"})}),Object(o.jsx)(a.b,{to:"/order/"+e.burgerName+"/custom",children:Object(o.jsx)("button",{className:"btn btn-outline-success flip-card-buttons mt-2",children:"Edit Order"})})]})})})]})})}),u=c(5),j=function(e){var t=Object(n.useState)(null),c=Object(u.a)(t,2),r=c[0],s=c[1],a=Object(n.useState)(null),i=Object(u.a)(a,2),o=i[0],l=i[1],d=Object(n.useState)(!0),b=Object(u.a)(d,2),j=b[0],m=b[1];return Object(n.useEffect)((function(){fetch(e).then((function(e){if(!e.ok)throw new Error("Failed to fetch.");return e.json()})).then((function(e){setTimeout((function(){s(e),m(!1)}),300),l(null)})).catch((function(e){m(!1),l(e.message)}))}),[e]),{data:r,isLoading:j,isError:o}},m=function(e){var t=j("https://api.jsonbin.io/b/61b767380ddbee6f8b1c90f7/1"),c=t.data,n=t.isLoading,r=t.isError;return Object(o.jsx)("div",{className:"container menu-container",children:Object(o.jsxs)("div",{className:"row menu-row g-3",children:[n&&Object(o.jsx)("div",{className:"alert alert-warning",children:"Loading..."}),r&&Object(o.jsx)("div",{className:"alert alert-danger",children:r}),c&&c.map((function(e){return Object(o.jsx)(b,{burgerName:e.burger_name,burgerPrice:e.burger_price},e.key)}))]})})},O=function(e){return Object(o.jsx)("div",{className:"container home-container",children:Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("div",{className:"col-lg-12",children:Object(o.jsx)("h2",{children:"Menu"})}),Object(o.jsx)(m,{})]})})},h=c(17),f=c(28),x=(c(133),function(e,t){var c,r=Object(n.useState)(null),s=Object(u.a)(r,2),a=s[0],i=s[1];return Object(n.useEffect)((function(){fetch(e).then((function(e){return e.json()})).then((function(e){c=e.filter((function(e){return e.burger_name===t}))[0].burger_price,i(c)}))})),a}),p=c(13),g=function(e){var t,c,r=Object(i.g)().burgerName,s=Object(n.useState)(!1),a=Object(u.a)(s,2),l=a[0],d=a[1],b=Object(i.e)(),j=Object(i.f)(),m=Object(p.b)(),O=Object(n.useState)("nothing"),g=Object(u.a)(O,2),N=g[0],v=g[1],w=Object(n.useState)({id:Math.floor(1e6*Math.random()),customer_name:null,customer_phone:null,orderName:r,orderTime:null,addons:[],total_amount:0}),y=Object(u.a)(w,2),E=y[0],_=y[1];b.pathname.includes("/custom"),c=x("https://api.jsonbin.io/b/61b767380ddbee6f8b1c90f7/1",r);return Object(n.useEffect)((function(){l?fetch("https://api.jsonbin.io/b/61b788c701558c731cd39fcb/1",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(E)}).then((function(e){if(b.pathname.includes("/custom"))m({type:"CUSTOM",orderid:E.id}),j("/order/edit/"+r);else{if(201!=e.status)throw Error("Request Failed. Network Error...");v("placed"),console.log("Order Placed"),setTimeout((function(){j("/")}),1e3)}})).catch((function(e){v("failed")})):console.log("Clicked")}),[l]),Object(o.jsxs)("div",{className:"container form-container",children:[Object(o.jsx)("h2",{children:"Place Your Order"}),Object(o.jsx)("u",{children:Object(o.jsx)("p",{children:r})}),Object(o.jsxs)("form",{className:"order-form",onSubmit:function(e){e.preventDefault();var t=new Date,n=t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate()+" "+t.getHours()+":"+t.getMinutes()+":"+t.getSeconds(),r=document.getElementById("customer_name").value,s=document.getElementById("quantity").value,a=document.getElementById("customer_phone").value;_(Object(f.a)(Object(f.a)({},E),{},{orderTime:n,customer_name:r,customer_phone:a,total_amount:c*s})),d(!0),document.getElementById("submit-button").disabled=!0},children:[Object(o.jsxs)("div",{className:"row inputs",children:[Object(o.jsx)("label",{className:"mb-1",children:"Enter Quantity"}),Object(o.jsx)("input",{className:"placeorder-inputs",required:!0,type:"number",min:"1",max:"100",id:"quantity"})]}),Object(o.jsxs)("div",{className:"row inputs",children:[Object(o.jsx)("label",{className:"mb-1",children:"Name"}),Object(o.jsx)("input",{className:"placeorder-inputs",required:!0,type:"text",id:"customer_name",placeholder:"Your Name..."})]}),Object(o.jsxs)("div",{className:"row inputs",children:[Object(o.jsx)("label",{className:"mb-1",children:"Phone"}),Object(o.jsx)("input",{className:"placeorder-inputs",required:!0,type:"text",placeholder:"Your Phone Number...",id:"customer_phone"})]}),Object(o.jsx)("div",{className:"row submit-button-row",children:Object(o.jsx)("button",(t={className:"placeorder-inputs",type:"submit"},Object(h.a)(t,"className","btn btn-danger"),Object(h.a)(t,"id","submit-button"),Object(h.a)(t,"children","Place Order"),t))})]}),"placed"===N?Object(o.jsx)("div",{className:"alert alert-success",role:"alert",children:"Order Placed. Redirecting...."}):"failed"===N?Object(o.jsx)("div",{className:"alert alert-danger",role:"alert",children:"Order Failed. Please Try Again Later..."}):null]})},N=(c(140),function(e){var t,c=Object(n.useState)([]),r=Object(u.a)(c,2),s=r[0],a=r[1],l=Object(n.useState)(!0),d=Object(u.a)(l,2),b=d[0],j=d[1],m=Object(n.useState)(null),O=Object(u.a)(m,2),h=O[0],f=O[1],x=Object(i.f)(),g=Object(p.b)();Object(n.useEffect)((function(){fetch("https://api.jsonbin.io/b/61b788c701558c731cd39fcb/1").then((function(e){if(!e.ok)throw Error("Network Error...");return e.json()})).then((function(e){setTimeout((function(){a(e),j(!1)}),300),f(null)})).catch((function(e){j(!1),f(e.message)}))}),[]);return t=s.map((function(e){return Object(o.jsxs)("div",{className:"row order-item-row",children:[Object(o.jsx)("div",{className:"col-sm-6 order-details",children:Object(o.jsxs)("p",{children:["Order ID : ",Object(o.jsxs)("b",{children:[e.id," "]}),Object(o.jsx)("br",{}),"Customer Name : ",Object(o.jsx)("b",{children:e.customer_name}),Object(o.jsx)("br",{}),"Order : ",Object(o.jsx)("b",{children:e.orderName}),Object(o.jsx)("br",{}),"Amount : ",Object(o.jsxs)("b",{children:["\u20b9 ",e.total_amount+e.addons_amount]}),Object(o.jsx)("br",{}),"Time : ",Object(o.jsx)("b",{children:e.orderTime}),Object(o.jsx)("br",{}),"Addons : ",Object(o.jsx)("b",{children:e.addons.length>0?""+e.addons:"None"})]})}),Object(o.jsxs)("div",{className:"col-sm-6 order-control-buttons",children:[Object(o.jsx)("button",{className:"btn btn-outline-danger order-page-buttons",onClick:function(){return t=e.id,s.pop(s.find((function(e){return e.id===t}))),void fetch("https://api.jsonbin.io/b/61b788c701558c731cd39fcb/1"+t,{method:"DELETE"}).then((function(){window.location.reload(!0)}));var t},children:"Delete Order"}),Object(o.jsx)("button",{className:"btn btn-outline-danger order-page-buttons",onClick:function(){return function(e){g({type:"CUSTOM",orderid:e.id}),x("/order/"+e.id+"/modify")}(e)},children:"Edit Order"})]})]},e.id)})),Object(o.jsxs)("div",{className:"container orders-container",children:[b&&Object(o.jsx)("div",{className:"alert alert-warning",children:"Loading ..."}),h&&Object(o.jsx)("div",{className:"alert alert-danger",children:h}),s&&t]})}),v=function(e){var t=e.menuItems.map((function(t,c){return Object(o.jsx)("div",{className:"row checkboxes-row",children:Object(o.jsx)("div",{className:"col-md-12",children:Object(o.jsx)("div",{className:"col-md-12",children:Object(o.jsxs)("label",{class:"checkbox-container",children:[t," ("+e.prices[c]+" Rs./)",Object(o.jsx)("input",{type:"checkbox",id:t,name:"checkboxes",className:"checkboxes "+t+"-checkbox",onChange:e.addOnSelectHandler}),Object(o.jsx)("span",{class:"checkmark"})]})})})},c)}));return Object(o.jsx)("div",{className:"container",children:t})},w=(c(141),function(e){var t=["Cheese","Grilled","Spicy","Coke","Sprite","Fanta","Water","Packed"],c=[10,10,10,40,40,40,20,0],r=(Object(i.g)(),0),s=Object(i.f)(),a=Object(p.c)((function(e){return e.isCustomOrder})),l=Object(n.useState)({Cheese:!1,Grilled:!1,Spicy:!1,Coke:!1,Sprite:!1,Fanta:!1,Water:!1,Packed:!1}),d=Object(u.a)(l,2),b=d[0],j=d[1],m=Object(n.useState)("nothing"),O=Object(u.a)(m,2),x=O[0],g=O[1],N=[];return Object(n.useEffect)((function(){(N=Object.keys(b).filter((function(e){return b[e]}))).forEach((function(e){r+=c[t.indexOf(e)]}))}),[b]),Object(o.jsxs)("div",{className:"container edit-order-container p-3 mt-3",children:[Object(o.jsxs)("form",{className:"form-group edit-order-form",onSubmit:function(e){e.preventDefault(),fetch("https://api.jsonbin.io/b/61b788c701558c731cd39fcb/1"+a.orderid,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({addons:N,addons_amount:r})}).then((function(e){if(200!=e.status)throw Error("Request Failed. Network Error...");g("placed"),console.log("Order Placed"),setTimeout((function(){s("/")}),1e3)}))},children:[Object(o.jsx)(v,{menuItems:t,prices:c,addOnSelectHandler:function(e){var t=e.target.id;console.log(e.target.id),console.log(!b[t]),j(Object(f.a)(Object(f.a)({},b),{},Object(h.a)({},t,!b[t])))}}),Object(o.jsx)("button",{type:"submit",className:"btn btn-danger btn-block edit-order-button",children:"Submit"}),undefined]}),"placed"===x?Object(o.jsx)("div",{className:"alert alert-success",role:"alert",children:"Order Placed. Redirecting...."}):"failed"===x?Object(o.jsx)("div",{className:"alert alert-danger",role:"alert",children:"Order Failed. Please Try Again Later..."}):null]})}),y=(c(142),c(143),function(e){var t=Object(p.b)(),c=Object(i.f)();return Object(o.jsxs)("div",{className:"container login-container",children:[Object(o.jsx)("div",{className:"row intro-row",children:Object(o.jsxs)("div",{className:"col-lg-12",children:[Object(o.jsx)("h2",{children:"Welcome to the Burglery"}),Object(o.jsx)("p",{children:"Here, we steal your Hunger ;)"})]})}),Object(o.jsx)("div",{className:"row form-row",children:Object(o.jsxs)("div",{className:"col-lg-12",children:[Object(o.jsx)("h2",{children:"Log In"}),Object(o.jsxs)("form",{className:"form-horizontal login-form",onSubmit:function(e){e.preventDefault();var n=document.getElementById("username").value,r=document.getElementById("password").value;fetch("http://localhost:8000/users").then((function(e){return e.json()})).then((function(e){e.find((function(e){return e.username===n&&e.password===r}))&&(t({type:"LOGIN",username:n,password:r}),c("/"))}))},children:[Object(o.jsx)("div",{className:"row input-rows",children:Object(o.jsx)("div",{className:"col-lg-12",children:Object(o.jsx)("input",{type:"text",id:"username",className:"form-control",placeholder:"Username"})})}),Object(o.jsx)("div",{className:"row input-rows",children:Object(o.jsx)("div",{className:"col-lg-12",children:Object(o.jsx)("input",{type:"text",id:"email",className:"form-control",placeholder:"Email"})})}),Object(o.jsx)("div",{className:"row input-rows",children:Object(o.jsx)("div",{className:"col-lg-12",children:Object(o.jsx)("input",{type:"password",id:"password",className:"form-control",placeholder:"Password"})})}),Object(o.jsx)("div",{className:"row button-row",children:Object(o.jsx)("div",{className:"col-lg-12",children:Object(o.jsx)("button",{type:"submit",className:"btn btn-danger btn-block login-button",children:"Log In"})})})]})]})})]})});var E=function(){return Object(o.jsx)(a.a,{children:Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(l,{}),Object(o.jsx)("div",{className:"content",children:Object(o.jsxs)(i.c,{children:[Object(o.jsx)(i.a,{exact:!0,path:"/",element:Object(o.jsx)(O,{})}),Object(o.jsx)(i.a,{exact:!0,path:"/orders",element:Object(o.jsx)(N,{})}),Object(o.jsx)(i.a,{path:"/order/:burgerName",element:Object(o.jsx)(g,{})}),Object(o.jsx)(i.a,{path:"/order/:burgerName/custom",element:Object(o.jsx)(g,{})}),Object(o.jsx)(i.a,{path:"/order/edit/:burgerName",element:Object(o.jsx)(w,{})}),Object(o.jsx)(i.a,{path:"/login",element:Object(o.jsx)(y,{})}),Object(o.jsx)(i.a,{path:"/order/:orderid/modify",element:Object(o.jsx)(w,{})})]})})]})})},_=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,246)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),n(e),r(e),s(e),a(e)}))},S=c(40),k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{username:"",password:"",isLoggedIn:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN":return console.log("Username : "+t.username),{username:t.username,password:t.password,isLoggedIn:!0};case"LOGOUT":return{username:t.username,password:t.password,isLoggedIn:!1};default:return e}},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{orderid:null,customerOrder:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CUSTOM":return console.log("Order ID : "+t.orderid),{orderid:t.orderid,customerOrder:!0};case"NOT_CUSTOM":return{orderid:t.orderid,customOrder:!1};default:return e}},I=Object(S.a)({loginInfo:k,isCustomOrder:T}),P=Object(S.b)(I,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());s.a.render(Object(o.jsx)(p.a,{store:P,children:Object(o.jsx)(E,{})}),document.getElementById("root")),_()}},[[245,1,2]]]);
//# sourceMappingURL=main.0834e0bf.chunk.js.map