(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{11:function(e,t,i){e.exports={h1:"OrderList_h1__1529-",outer:"OrderList_outer__2AKRN",inner:"OrderList_inner__2bu_V",header:"OrderList_header__3ZLqn",user:"OrderList_user__H6i4l",totalPrice:"OrderList_totalPrice__29aM5",middle:"OrderList_middle__3Qdpp",item:"OrderList_item__2Jp34",left:"OrderList_left__UluI3",title:"OrderList_title__3cziJ",orderDetail:"OrderList_orderDetail__3VZDW",right:"OrderList_right__3bdiW",orderPeople:"OrderList_orderPeople__1hn18",footer:"OrderList_footer__H07wl",keepBuying:"OrderList_keepBuying__4OjV2",checkout:"OrderList_checkout__2Q3uZ"}},15:function(e,t,i){e.exports={outer:"Login_outer__2e18U",inner:"Login_inner__2Dd_2",min:"Login_min__156gj",greeting:"Login_greeting__3pEN7",signinBtn:"Login_signinBtn__2Zbcu",signoutBtn:"Login_signoutBtn__wr0OL",max:"Login_max__3HJHt",titel:"Login_titel__16_Ni",input:"Login_input__32aJ3",name:"Login_name__1YNq7",account:"Login_account__2Ru_t",password:"Login_password__STD9v"}},17:function(e,t,i){e.exports={out:"History_out__2NUl9",in:"History_in__UgebJ",historyTitle:"History_historyTitle__3p3NC",unit:"History_unit__1FU4e",time:"History_time__3wuUp",lists:"History_lists__1m2OQ",dish:"History_dish__O5G7l",name:"History_name__S-2Nq",price:"History_price__DN6yR",qty:"History_qty__1U7JL"}},18:function(e,t,i){e.exports={main:"Main_main__23tKO",topSide:"Main_topSide__3T_Qe",errorMessage:"Main_errorMessage__1rLgx",title:"Main_title__3uoCo",detail:"Main_detail__3D8sJ",time:"Main_time__1etss",phone:"Main_phone__3UrVx",address:"Main_address__1mGaH",downSide:"Main_downSide__8MN22",store:"Main_store__2v70R"}},23:function(e,t,i){e.exports={navbar:"App_navbar__BoB5D",logo:"App_logo__2qPv-",right:"App_right__1V0tl",mainPage:"App_mainPage__26_f7",historyPage:"App_historyPage__Tt3Q1",loginPage:"App_loginPage__1BlmR",logoutPage:"App_logoutPage__qV82d"}},26:function(e,t,i){e.exports={main:"Home_main__Ugy63",theme:"Home_theme__StcS2",target1:"Home_target1___DDmn",target2:"Home_target2__3rKQP"}},45:function(e,t,i){},5:function(e,t,i){e.exports={main:"Menu_main__2JNa6",detail:"Menu_detail__BEIoC",title:"Menu_title__37OM8",miniDetail:"Menu_miniDetail__MoQLB",time:"Menu_time__1d7Ts",phone:"Menu_phone__1hpDw",address:"Menu_address__hsFqA",image:"Menu_image__384RC",selectSpace:"Menu_selectSpace__lEGA6",together:"Menu_together__2_6m2",cartBtn:"Menu_cartBtn__BK2x_",cart:"Menu_cart__1rFM7",totalPrice:"Menu_totalPrice__UDYFZ",teamBuyingPopup:"Menu_teamBuyingPopup__28jkE",teamBuyingPopupInner:"Menu_teamBuyingPopupInner__tZ0_g",link:"Menu_link__1YIkj",copyLink:"Menu_copyLink__2Iza7",meal:"Menu_meal__16Gol",outer:"Menu_outer__3sDMK",inner:"Menu_inner__t6fNr",name:"Menu_name__2ZDyf",qty:"Menu_qty__2AV13",number:"Menu_number__1x4kR",minus:"Menu_minus__3bUgY",add:"Menu_add__oxn_F",subTotal:"Menu_subTotal__2Nx5m",addCartBtn:"Menu_addCartBtn__3KTGV"}},54:function(e,t,i){"use strict";i.r(t);var a=i(2),n=i(3),s=i(38),c=i.n(s),o=(i(45),i(8)),r=i(23),d=i.n(r),l=i(19),u=i(9),j=i(21);i(46),i(47);j.a.initializeApp({apiKey:"AIzaSyBnIZz9XKePiURWd1lArnKnZqgcHDk0xkQ",authDomain:"order-7cbbf.firebaseapp.com",databaseURL:"https://order-7cbbf.firebaseio.com",projectId:"order-7cbbf",storageBucket:"order-7cbbf.appspot.com",messagingSenderId:"700424911597",appId:"1:700424911597:web:eca4d134324ce1b59b6ae4"});var m=j.a.firestore(),h=new j.a.auth.FacebookAuthProvider;function b(){j.a.auth().signInWithPopup(h).then((function(e){e.credential.accessToken;var t=e.additionalUserInfo.profile.name,i=e.additionalUserInfo.profile.email,a=e.user.uid;console.log("\u60a8\u88ab\u9078\u4e2d\u5165\u5bae\u7576\u79c0\u5973\u56c9",e),m.collection("users").doc(a).set({userName:t,userEmail:i,uid:a}).then((function(){console.log("Add successful")}))})).catch((function(e){console.log("\u767b\u5165\u5931\u6557",e)}))}function _(){j.a.auth().signOut().then((function(){localStorage.removeItem("accessToken"),console.log("\u60a8\u88ab\u9010\u51fa\u7d2b\u7981\u57ce\u4e86")}))}var p=i(26),g=i.n(p);var O=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),i=t[0],s=t[1],c=Object(u.f)();return Object(a.jsx)("div",{className:g.a.main,children:Object(a.jsxs)("div",{className:g.a.theme,children:[Object(a.jsxs)("div",{className:g.a.target1,children:[Object(a.jsx)("h2",{children:"\u4eca\u5929\u4f86\u9ede...\uff1f"}),Object(a.jsx)("form",{onSubmit:function(){s(""),c.push("/main?search=".concat(encodeURI(i)))},children:Object(a.jsx)("input",{type:"text",value:i,placeholder:"\u60f3\u5403...",onChange:function(e){s(e.target.value)}})})]}),Object(a.jsxs)("div",{className:g.a.target2,children:[Object(a.jsx)("h2",{className:g.a.h2,children:"\u662f\u4e0d\u662f\u7336\u8c6b\u4e0d\u6c7a?"}),Object(a.jsx)("button",{children:"\u5927\u5bb6\u66ff\u6211\u505a\u6c7a\u5b9a"})]})]})})},v=i(18),f=i.n(v),x=i(29),N=i.p+"static/media/time.3ad02d15.svg",y=i.p+"static/media/phone.c3d2611c.svg",L=i.p+"static/media/location.ce465ffc.svg";function S(e){var t,i,n,s,c=e.showRestaurant,o=e.showRestaurantDetail,r=Object(a.jsxs)("div",{children:[" ",null===o||void 0===o||null===(t=o.businessHour)||void 0===t?void 0:t[0]]}),d=Object(a.jsxs)("div",{children:[null===o||void 0===o||null===(i=o.businessHour)||void 0===i?void 0:i[0],"\xa0&\xa0",null===o||void 0===o||null===(n=o.businessHour)||void 0===n?void 0:n[1]]});return Object(a.jsx)("div",{className:f.a.topSide,children:0===c.length?Object(a.jsxs)("h1",{className:f.a.errorMessage,children:["Sorry !",Object(a.jsx)("br",{}),"Not Found"]}):Object(a.jsxs)(a.Fragment,{children:[c.length>0?Object(a.jsx)("div",{className:f.a.title,children:null===o||void 0===o?void 0:o.title}):null,Object(a.jsxs)("div",{className:f.a.detail,children:[Object(a.jsxs)("div",{className:f.a.time,children:[c.length>0?Object(a.jsx)("img",{src:N,alt:"time"}):null,(null===o||void 0===o||null===(s=o.businessHour)||void 0===s?void 0:s[1])?d:r]}),Object(a.jsxs)("div",{className:f.a.phone,children:[c.length>0?Object(a.jsx)("img",{src:y,alt:"phone"}):null,null===o||void 0===o?void 0:o.phoneNumber]}),Object(a.jsxs)("div",{className:f.a.address,children:[c.length>0?Object(a.jsx)("img",{src:L,alt:"location"}):null,null===o||void 0===o?void 0:o.address]})]})]})})}function D(e){var t=e.showRestaurant,i=e.setShowRestaurantDetail;return Object(a.jsx)("div",{className:f.a.downSide,children:t.map((function(e){return Object(a.jsx)(k,{title:e.title,category:e.category,businessHour:e.businessHour,phoneNumber:e.phoneNumber,address:e.address,id:e.id,setShowRestaurantDetail:i},e.id)}))})}function k(e){var t=Object(u.f)();return Object(a.jsx)("div",{className:f.a.store,onClick:function(i){t.push("./menu?restaurantID=".concat(e.id))},onMouseEnter:function(t){e.setShowRestaurantDetail({title:e.title,category:e.category,businessHour:e.businessHour,phoneNumber:e.phoneNumber,address:e.address,id:e.id,key:e.id})},children:Object(a.jsx)("p",{children:e.title})})}var M=function(e){x.a.auth().onAuthStateChanged((function(e){}));var t=window.location.search.slice(8),i=decodeURI(t),s=m.collection("restaurant"),c=Object(n.useState)([]),r=Object(o.a)(c,2),d=r[0],l=r[1],u=Object(n.useState)({}),j=Object(o.a)(u,2),h=j[0],b=j[1];return Object(n.useEffect)((function(){s.orderBy("title").startAt(i).endAt(i+"\uf8ff").get().then((function(e){var t,i,a,n,s,c,o,r=[];e.forEach((function(e){r.push({address:e.data().address,businessHour:[e.data().businessHour[0],e.data().businessHour[1]],category:e.data().category,phoneNumber:e.data().phoneNumber,title:e.data().title,id:e.id})})),l(r),b({title:null===r||void 0===r||null===(t=r[0])||void 0===t?void 0:t.title,category:null===r||void 0===r||null===(i=r[0])||void 0===i?void 0:i.category,businessHour:null===r||void 0===r||null===(a=r[0])||void 0===a?void 0:a.businessHour,phoneNumber:null===r||void 0===r||null===(n=r[0])||void 0===n?void 0:n.phoneNumber,address:null===r||void 0===r||null===(s=r[0])||void 0===s?void 0:s.address,id:null===r||void 0===r||null===(c=r[0])||void 0===c?void 0:c.id,key:null===r||void 0===r||null===(o=r[0])||void 0===o?void 0:o.id})}))}),[]),Object(a.jsx)("div",{children:Object(a.jsxs)("div",{className:f.a.main,children:[Object(a.jsx)(S,{showRestaurant:d,showRestaurantDetail:h}),Object(a.jsx)(D,{showRestaurant:d,setShowRestaurantDetail:b})]})})},w=i(5),P=i.n(w),B=i(24),I=i.p+"static/media/menu_eastern.3ac0f21f.jpeg",H=i.p+"static/media/menu_wastern.4082f34e.jpeg",C=i.p+"static/media/menu_healthy.4e154176.png",q=i.p+"static/media/menu_beverage.d063d6d1.jpg",T=i.p+"static/media/cart.0415469d.svg",E=i(20),A=i.n(E);var R=function(){var e=new URLSearchParams(window.location.search);return{restaurantID:e.get("restaurantID"),docID:e.get("docID"),ref:m.collection("orderList")}};function U(e){var t=e.setMealPopupSwitch,i=e.setMealPopupDetail,n=e.name,s=e.price,c=e.id;return Object(a.jsxs)("div",{className:P.a.meal,onClick:function(){t(!0),i({name:n,price:s,qty:1,id:c})},children:[Object(a.jsx)("div",{className:P.a.name,children:n}),Object(a.jsxs)("div",{className:P.a.price,children:[" ",s]})]})}var F=1;function z(e){var t=e.setMealPopupSwitch,i=e.setMealPopupDetail,n=e.mealPopupDetail,s=(e.cartList,e.facebookbStatus);function c(e){var t=Number(e.currentTarget.getAttribute("data"));1===F&&-1==t?F=1:F+=t,i({name:n.name,price:n.price,qty:F})}return R(),Object(a.jsx)("div",{className:P.a.outer,id:"outer",onClick:function(e){"outer"===e.target.id&&(t(!1),F=1)},children:Object(a.jsxs)("div",{className:P.a.inner,children:[Object(a.jsx)("div",{className:P.a.name,children:n.name}),Object(a.jsxs)("div",{className:P.a.qty,children:[Object(a.jsx)("div",{className:P.a.minus,data:-1,onClick:c,children:"-"}),Object(a.jsx)("div",{className:P.a.number,children:n.qty}),Object(a.jsx)("div",{className:P.a.add,data:1,onClick:c,children:"+"})]}),Object(a.jsxs)("div",{className:P.a.subTotal,children:["\u7e3d\u91d1\u984d\uff1a",n.price*n.qty]}),Object(a.jsx)("button",{className:P.a.addCartBtn,onClick:function(){if(!0===s.status){var e=m.collection("orderList");e.get().then((function(t){if(0===t.size)console.log("res.size=",t.size),e.add({status:"ongoing",uid:s.uid}).then((function(t){e.doc(t.id).set({id:t.id},{merge:!0}),e.doc(t.id).collection("records").add({name:n.name,price:n.price,qty:n.qty,uid:s.uid,displayName:s.displayName,email:s.email}).then((function(i){console.log(i.id),e.doc(t.id).collection("records").doc(i.id).set({id:i.id},{merge:!0})}))}));else{console.log("res.size=",t.size);var i=!0;t.forEach((function(t){t.data().uid!==s.uid&&null===R().docID||"ongoing"!==t.data().status||(i=!1,console.log("AAA"),e.doc(t.id).collection("records").add({name:n.name,price:n.price,qty:n.qty,uid:s.uid,displayName:s.displayName,email:s.email}).then((function(i){console.log(i.id),e.doc(t.id).collection("records").doc(i.id).set({id:i.id},{merge:!0})})))})),i&&(console.log("BBB"),e.add({status:"ongoing",uid:s.uid}).then((function(t){console.log(t.id),e.doc(t.id).set({id:t.id},{merge:!0}),e.doc(t.id).collection("records").add({name:n.name,price:n.price,qty:n.qty,uid:s.uid,displayName:s.displayName,email:s.email}).then((function(i){e.doc(t.id).collection("records").doc(i.id).set({id:i.id},{merge:!0})}))})))}})),t(!1)}else A.a.fire({icon:"error",title:"\u5c1a\u672a\u767b\u9304\u6703\u54e1"});F=1},children:"\u52a0\u5165\u8cfc\u7269\u8eca"})]})})}var J=function(e){var t,i,s,c,r,d,l,j,h=e.data,b=e.facebookbStatus,_=e.cartListLength,p=e.cartListTotalPrice,g=Object(n.useState)([]),O=Object(o.a)(g,2),v=O[0],f=O[1],x=Object(n.useState)(!1),S=Object(o.a)(x,2),D=S[0],k=S[1],M=Object(n.useState)({}),w=Object(o.a)(M,2),E=w[0],F=w[1],J=Object(n.useState)(!1),G=Object(o.a)(J,2),K=G[0],V=G[1],Z=Object(n.useState)(),Q=Object(o.a)(Z,2),W=Q[0],Y=Q[1],X={};h.forEach((function(e){e.id===R().restaurantID&&(X={address:e.address,businessHour:[e.businessHour[0],e.businessHour[1]],category:e.category,phoneNumber:e.phoneNumber,title:e.title,id:e.id})})),Object(n.useEffect)((function(){m.collection("restaurant").doc(R().restaurantID).collection("menu").get().then((function(e){var t=[];e.forEach((function(e){var i=e.data();i.id=e.id,t.push(i)})),f(t)}))}),[]);var $=Object(a.jsxs)("div",{children:[" ",null===(t=X)||void 0===t||null===(i=t.businessHour)||void 0===i?void 0:i[0]]}),ee=Object(a.jsxs)("div",{children:[null===(s=X)||void 0===s||null===(c=s.businessHour)||void 0===c?void 0:c[0],"\xa0&\xa0",null===(r=X)||void 0===r||null===(d=r.businessHour)||void 0===d?void 0:d[1]]}),te=Object(u.f)();return Object(a.jsx)(a.Fragment,{children:!0===D?Object(a.jsx)(z,{setMealPopupSwitch:k,setMealPopupDetail:F,mealPopupDetail:E,facebookbStatus:b}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("div",{className:P.a.main,children:[Object(a.jsxs)("header",{children:[Object(a.jsxs)("div",{className:P.a.detail,children:[Object(a.jsxs)("div",{className:P.a.title,children:[" ",X.title]}),Object(a.jsx)("div",{className:P.a.miniDetail,children:Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{className:P.a.time,children:[Object(a.jsx)("img",{src:N,alt:"time"}),(null===(l=X)||void 0===l||null===(j=l.businessHour)||void 0===j?void 0:j[1])?ee:$]}),Object(a.jsxs)("div",{className:P.a.phone,children:[Object(a.jsx)("img",{src:y,alt:"phone"}),X.phoneNumber]}),Object(a.jsxs)("div",{className:P.a.address,children:[Object(a.jsx)("img",{src:L,alt:"location"}),X.address]}),Object(a.jsx)("div",{children:X.category})]})})]}),Object(a.jsx)("div",{className:P.a.image,children:Object(a.jsx)("img",{src:function(e){switch(e){case"eastern":return I;case"western":return H;case"healthy":return C;case"beverage":return q}}(X.category),alt:"photo"})})]}),Object(a.jsxs)("div",{className:P.a.selectSpace,children:[v.map((function(e){return Object(a.jsx)(U,{name:e.title,price:e.price,id:e.id,setMealPopupSwitch:k,setMealPopupDetail:F},Object(B.a)())})),Object(a.jsx)("div",{className:P.a.together,onClick:function(){if(!0===b.status){V(!0);var e=m.collection("orderList");e.get().then((function(t){0!==t.size?t.forEach((function(e){console.log(e.id),e.data().uid===b.uid&&"ongoing"===e.data().status?Y("".concat(window.location.href,"&docID=").concat(e.id)):Y("".concat(window.location.href,"&docID=").concat(R().docID))})):e.add({status:"ongoing",uid:b.uid}).then((function(t){console.log(t.id),e.doc(t.id).set({id:t.id},{merge:!0}),Y("".concat(window.location.href,"&docID=").concat(t.id))}))}))}else A.a.fire({icon:"error",title:"\u5c1a\u672a\u767b\u9304\u6703\u54e1"})},children:"\u63ea\u5718"}),Object(a.jsxs)("div",{className:P.a.cartBtn,onClick:function(){if(console.log("start"),!0===b.status){var e=m.collection("orderList"),t=!0;e.get().then((function(i){i.forEach((function(i){i.data().uid===b.uid&&"ongoing"===i.data().status&&e.doc(i.data().id).collection("records").onSnapshot((function(e){0===e.size?(console.log("111"),t=!0):e.size>0&&(console.log("222"),te.push("./orderList?restaurantID=".concat(R().restaurantID,"&docID=").concat(i.id)),t=!1)}))})),t&&(console.log("333"),A.a.fire("\u5c1a\u672a\u52a0\u5165\u9910\u9ede\uff01"))}))}else A.a.fire({icon:"error",title:"\u5c1a\u672a\u767b\u9304\u6703\u54e1"})},children:[Object(a.jsx)("span",{children:_}),Object(a.jsxs)("div",{className:P.a.cart,children:[Object(a.jsx)("img",{src:T,alt:"cart"}),"\u8cfc\u7269\u8eca"]}),Object(a.jsx)("div",{className:P.a.totalPrice,children:p})]})]})]}),!0===K?Object(a.jsx)("div",{className:P.a.teamBuyingPopup,id:"teamBuyingPopup",onClick:function(e){console.log(e.target,e.currentTarget),"teamBuyingPopup"===e.target.id&&V(!1)},children:Object(a.jsxs)("div",{className:P.a.teamBuyingPopupInner,children:[Object(a.jsx)("input",{type:"text",className:P.a.link,id:"link",defaultValue:W}),Object(a.jsx)("div",{className:P.a.copyLink,onClick:function(){document.getElementById("link").select(),document.execCommand("copy"),A.a.fire({position:"center",icon:"success",title:"\u8907\u88fd\u6210\u529f",showConfirmButton:!1,timer:1500})},children:"\u8907\u88fd\u9023\u7d50"})]})}):null]})})},G=i(11),K=i.n(G),V=i.p+"static/media/head.12287176.jpg",Z=i.p+"static/media/dollarSign.d0273390.png",Q=i.p+"static/media/trash.ba384e2f.svg";function W(e){var t=e.name,i=e.price,n=e.qty,s=e.id,c=e.displayName,o=e.facebookbStatus,r=(e.setCartLists,m.collection("orderList"));return Object(a.jsxs)("div",{className:K.a.item,onClick:function(e){!0===o.status&&"trash"===e.target.id&&r.doc(R().docID).collection("records").get().then((function(e){e.forEach((function(e){e.data().id===s&&r.doc(R().docID).collection("records").doc(e.data().id).delete().then((function(){console.log("\u522a\u9664\u6b64\u7b46\u83dc\u55ae")}))}))}))},children:[Object(a.jsxs)("div",{className:K.a.left,children:[Object(a.jsx)("div",{className:K.a.title,children:t}),Object(a.jsxs)("div",{className:K.a.orderDetail,children:["$",i," / ",n," \u4efd / ?? / ?? /"]})]}),Object(a.jsxs)("div",{className:K.a.right,children:[Object(a.jsxs)("div",{className:K.a.orderPeople,children:["By\xa0",c]}),Object(a.jsx)("img",{src:Q,id:"trash",alt:"trash can"})]})]})}var Y=function(e){var t=e.facebookbStatus,i=e.cartListTotalPrice,s=m.collection("orderList"),c=Object(u.f)(),r=Object(n.useState)([]),d=Object(o.a)(r,2),l=d[0],j=d[1];return Object(n.useEffect)((function(){!0===t.status&&s.where("status","==","ongoing").where("uid","==",t.uid).get().then((function(e){e.forEach((function(e){s.doc(e.id).collection("records").onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(e.data())})),j(t)}))}))}))}),[t]),console.log("cartLists=",l),Object(a.jsx)("div",{className:K.a.outer,children:Object(a.jsxs)("div",{className:K.a.inner,children:[Object(a.jsxs)("div",{className:K.a.header,children:[Object(a.jsxs)("div",{className:K.a.user,children:[Object(a.jsx)("img",{src:V,alt:"head photo"}),Object(a.jsx)("p",{children:t.displayName})]}),Object(a.jsxs)("div",{className:K.a.totalPrice,children:[Object(a.jsx)("img",{src:Z,alt:"money icon"}),Object(a.jsx)("p",{children:i})]})]}),Object(a.jsx)("div",{className:K.a.middle,children:l.map((function(e){return Object(a.jsx)(W,{name:e.name,price:e.price,qty:e.qty,id:e.id,uid:e.uid,displayName:e.displayName,email:e.email,facebookbStatus:t,setCartLists:j},Object(B.a)())}))}),Object(a.jsxs)("div",{className:K.a.footer,children:[Object(a.jsx)("button",{className:K.a.keepBuying,onClick:function(){c.push("./menu?restaurantID=".concat(R().restaurantID,"&docID=").concat(R().docID))},children:"\u7e7c\u7e8c\u8cfc\u8cb7"}),Object(a.jsx)("button",{className:K.a.checkout,onClick:function(){!0===t.status&&A.a.fire({title:"\u78ba\u5b9a\u7522\u751f\u8a02\u55ae\u55ce?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"\u78ba\u5b9a",cancelButtonText:"\u53d6\u6d88"}).then((function(e){e.isConfirmed&&(A.a.fire("\u6210\u529f!","\u8a02\u55ae\u5df2\u7522\u751f","success"),s.doc(R().docID).set({status:"history",endTime:new Date},{merge:!0}),c.push("./history"))}))},children:"\u7522\u751f\u8a02\u55ae"})]})]})})},X=i(17),$=i.n(X);function ee(e){var t,i=e.endTime,n=e.orderLists;return Object(a.jsxs)("div",{className:$.a.unit,children:[Object(a.jsx)("div",{className:$.a.time,children:(t=i,t.toDate().toString().replace("GMT+0800 (\u53f0\u5317\u6a19\u6e96\u6642\u9593)",""))}),Object(a.jsx)("div",{className:$.a.lists,children:n.map((function(e){return Object(a.jsx)(te,{name:e.name,price:e.price,qty:e.qty,displayName:e.displayName},Object(B.a)())}))})]})}function te(e){var t=e.name,i=e.price,n=e.qty,s=e.displayName;return Object(a.jsxs)("div",{className:$.a.dish,children:[Object(a.jsxs)("div",{className:$.a.name,children:[" ",t]}),Object(a.jsxs)("div",{className:$.a.price,children:[i,"\u5143"]}),Object(a.jsxs)("div",{className:$.a.qty,children:[n,"\u4efd"]}),Object(a.jsxs)("div",{className:$.a.displayName,children:["by ",s]})]})}var ie=function(e){var t=e.facebookbStatus,i=Object(n.useState)([]),s=Object(o.a)(i,2),c=s[0],r=s[1];return Object(n.useEffect)((function(){if(t.status){var e=m.collection("orderList");e.onSnapshot((function(i){i.forEach((function(i){e.where("status","==","history").get().then((function(i){var a=[];i.forEach((function(i){a.push({endTime:i.data().endTime,orderLists:[]}),e.doc(i.id).collection("records").where("uid","==",t.uid).get().then((function(e){var t=[];e.forEach((function(i){t.push({name:i.data().name,price:i.data().price,qty:i.data().qty,displayName:i.data().displayName});var n=e.size;a[n-1].orderLists=t,r(a)}))}))}))}))}))}))}}),[t]),console.log("Bundle=",c),Object(a.jsx)("div",{className:$.a.out,children:Object(a.jsxs)("div",{className:$.a.in,children:[Object(a.jsx)("div",{className:$.a.historyTitle,children:"\u6b77\u53f2\u8a02\u55ae"}),c.map((function(e){return Object(a.jsx)(ee,{endTime:e.endTime,orderLists:e.orderLists},Object(B.a)())}))]})})},ae=i(15),ne=i.n(ae);var se=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),i=t[0],s=t[1];return Object(a.jsx)("div",{className:ne.a.outer,children:Object(a.jsxs)("div",{className:ne.a.inner,children:[Object(a.jsxs)("div",{className:ne.a.min,id:"min",children:[Object(a.jsx)("div",{className:ne.a.greeting,children:"Welcome Back !"}),Object(a.jsx)("div",{className:ne.a.signinBtn,onClick:function(){document.getElementById("min").style.transform="translateX(185.714286%)",s(!i)},children:"SIGN IN"}),Object(a.jsx)("div",{className:ne.a.signoutBtn,onClick:_,children:"SIGN OUT"}),Object(a.jsx)("button",{onClick:b,children:"FB Log in"})]}),Object(a.jsxs)("div",{className:ne.a.max,id:"max",children:[Object(a.jsx)("div",{className:ne.a.titel,children:"Create Account"}),Object(a.jsxs)("div",{className:ne.a.input,children:[Object(a.jsx)("div",{className:ne.a.name,children:Object(a.jsx)("input",{type:"text",placeholder:"Name"})}),Object(a.jsx)("div",{className:ne.a.account,children:Object(a.jsx)("input",{type:"text",placeholder:"Account"})}),Object(a.jsx)("div",{className:ne.a.password,children:Object(a.jsx)("input",{type:"text",placeholder:"Password"})}),Object(a.jsx)("button",{children:"SIGN UP"})]})]})]})})},ce=i.p+"static/media/Logo.c81f7424.svg";var oe=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),i=t[0],s=t[1],c=Object(n.useState)({status:!1}),r=Object(o.a)(c,2),h=r[0],b=r[1],p=Object(n.useState)(0),g=Object(o.a)(p,2),v=g[0],f=g[1],x=Object(n.useState)(0),N=Object(o.a)(x,2),y=N[0],L=N[1];return Object(n.useEffect)((function(){if(!0===h.status){var e=m.collection("orderList");e.onSnapshot((function(t){e.where("uid","==",h.uid).where("status","==","ongoing").get().then((function(t){t.forEach((function(t){e.doc(t.id).collection("records").onSnapshot((function(e){var t=0;f(e.size),e.forEach((function(e){t+=e.data().price*e.data().qty})),L(t)}))}))}))}))}}),[h]),Object(n.useEffect)((function(){!function(e){var t=[];m.collection("restaurant").get().then((function(e){return e.forEach((function(e){t.push({address:e.data().address,businessHour:[e.data().businessHour[0],e.data().businessHour[1]],category:e.data().category,phoneNumber:e.data().phoneNumber,title:e.data().title,id:e.id})})),t})).then((function(t){e(t)}))}(s),j.a.auth().onAuthStateChanged((function(e){b(e?{status:!0,uid:e.uid,displayName:e.displayName,email:e.email}:{status:!1})}))}),[]),Object(a.jsxs)(l.a,{children:[Object(a.jsxs)("nav",{className:d.a.navbar,children:[Object(a.jsx)("div",{className:d.a.logo,children:Object(a.jsx)(l.b,{to:"/",children:Object(a.jsx)("img",{src:ce,alt:"logo"})})}),Object(a.jsxs)("div",{className:d.a.right,children:[Object(a.jsx)("div",{className:d.a.mainPage,children:Object(a.jsx)(l.b,{to:"/main",children:"\u6240\u6709\u9910\u5ef3"})}),Object(a.jsx)("div",{className:d.a.historyPage,children:Object(a.jsx)(l.b,{to:"/history",children:"\u6b77\u53f2\u8a02\u55ae"})}),Object(a.jsx)("div",{className:d.a.loginPage,children:Object(a.jsx)(l.b,{to:"/login",children:"\u767b\u5165"})}),Object(a.jsx)("div",{className:d.a.logoutPage,onClick:_,children:"\u767b\u51fa"})]})]}),Object(a.jsxs)(u.c,{children:[Object(a.jsx)(u.a,{exact:!0,path:"/",children:Object(a.jsx)(O,{})}),Object(a.jsx)(u.a,{path:"/main",children:Object(a.jsx)(M,{data:i})}),Object(a.jsx)(u.a,{path:"/menu",children:Object(a.jsx)(J,{data:i,setFacebookbStatus:b,facebookbStatus:h,cartListLength:v,cartListTotalPrice:y})}),Object(a.jsx)(u.a,{path:"/orderList",children:Object(a.jsx)(Y,{facebookbStatus:h,cartListTotalPrice:y})}),Object(a.jsx)(u.a,{path:"/history",children:Object(a.jsx)(ie,{facebookbStatus:h})}),Object(a.jsx)(u.a,{path:"/login",children:Object(a.jsx)(se,{})})]})]})},re=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,55)).then((function(t){var i=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,c=t.getTTFB;i(e),a(e),n(e),s(e),c(e)}))};c.a.render(Object(a.jsx)(oe,{}),document.getElementById("root")),re()}},[[54,1,2]]]);
//# sourceMappingURL=main.4eba925d.chunk.js.map