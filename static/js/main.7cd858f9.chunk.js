(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[3],{23:function(t,e,n){"use strict";n.d(e,"d",(function(){return j})),n.d(e,"c",(function(){return d})),n.d(e,"b",(function(){return O})),n.d(e,"a",(function(){return l}));var c=n(16),r=n.n(c),u=n(22),a=n(18),o=n.n(a),i=n(5);o.a.defaults.baseURL="https://connections-api.herokuapp.com";var s=function(t){o.a.defaults.headers.common.Authorization="Bearer ".concat(t)},b=function(){o.a.defaults.headers.common.Authorization=""},j=function(t){return function(){var e=Object(u.a)(r.a.mark((function e(n){var c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(Object(i.k)()),e.prev=1,e.next=4,o.a.post("/users/signup",t);case 4:c=e.sent,s(c.data.token),n(Object(i.l)(c.data)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),n(Object(i.j)(e.t0));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},d=function(t){return function(){var e=Object(u.a)(r.a.mark((function e(n){var c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(Object(i.e)()),e.prev=1,e.next=4,o.a.post("/users/login",t);case 4:c=e.sent,s(c.data.token),n(Object(i.f)(c.data)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),n(Object(i.d)(e.t0));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},O=function(){return function(){var t=Object(u.a)(r.a.mark((function t(e){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(Object(i.h)()),t.prev=1,t.next=4,o.a.post("/users/logout");case 4:b(),e(Object(i.i)()),window.location.reload(),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),e(Object(i.g)(t.t0));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},l=function(){return function(){var t=Object(u.a)(r.a.mark((function t(e,n){var c,u,a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c=n(),u=c.auth.token){t.next=3;break}return t.abrupt("return");case 3:return s(u),e(Object(i.b)()),t.prev=5,t.next=8,o.a.get("users/current");case 8:a=t.sent,e(Object(i.c)(a.data)),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(5),e(Object(i.a)(t.t0));case 15:case"end":return t.stop()}}),t,null,[[5,12]])})));return function(e,n){return t.apply(this,arguments)}}()}},5:function(t,e,n){"use strict";n.d(e,"k",(function(){return r})),n.d(e,"l",(function(){return u})),n.d(e,"j",(function(){return a})),n.d(e,"e",(function(){return o})),n.d(e,"f",(function(){return i})),n.d(e,"d",(function(){return s})),n.d(e,"h",(function(){return b})),n.d(e,"i",(function(){return j})),n.d(e,"g",(function(){return d})),n.d(e,"b",(function(){return O})),n.d(e,"c",(function(){return l})),n.d(e,"a",(function(){return f}));var c=n(2),r=Object(c.b)("auth/registerRequest"),u=Object(c.b)("auth/registerSuccess"),a=Object(c.b)("auth/registerError"),o=Object(c.b)("auth/loginRequest"),i=Object(c.b)("auth/loginSuccess"),s=Object(c.b)("auth/loginError"),b=Object(c.b)("auth/logoutRequest"),j=Object(c.b)("auth/logoutSuccess"),d=Object(c.b)("auth/logoutError"),O=Object(c.b)("auth/getCurrentUserRequest"),l=Object(c.b)("auth/getCurrentUserSuccess"),f=Object(c.b)("auth/getCurrentUserError")},82:function(t,e,n){},83:function(t,e,n){"use strict";n.r(e);var c,r,u,a,o,i=n(0),s=n.n(i),b=n(24),j=n.n(b),d=n(15),O=n(13),l=n(45),f=n(26),h=n(2),p=n(4),x=n(7),g=n(5),v={name:null,email:null},m=Object(h.c)(v,(c={},Object(p.a)(c,g.l,(function(t,e){return e.payload.user})),Object(p.a)(c,g.f,(function(t,e){return e.payload.user})),Object(p.a)(c,g.i,(function(){return v})),Object(p.a)(c,g.c,(function(t,e){return e.payload})),c)),k=Object(h.c)(null,(r={},Object(p.a)(r,g.l,(function(t,e){return e.payload.token})),Object(p.a)(r,g.f,(function(t,e){return e.payload.token})),Object(p.a)(r,g.i,(function(){return null})),r)),y=Object(h.c)(null,(u={},Object(p.a)(u,g.j,(function(t,e){return e.payload})),Object(p.a)(u,g.d,(function(t,e){return e.payload})),Object(p.a)(u,g.g,(function(t,e){return e.payload})),Object(p.a)(u,g.a,(function(t,e){return e.payload})),u)),w=Object(x.b)({user:m,token:k,error:y}),C=n(9),A=Object(h.c)(!1,(a={},Object(p.a)(a,C.f,(function(){return!0})),Object(p.a)(a,C.g,(function(){return!1})),Object(p.a)(a,C.e,(function(){return!1})),Object(p.a)(a,C.b,(function(){return!0})),Object(p.a)(a,C.c,(function(){return!1})),Object(p.a)(a,C.a,(function(){return!1})),Object(p.a)(a,C.i,(function(){return!0})),Object(p.a)(a,C.j,(function(){return!1})),Object(p.a)(a,C.h,(function(){return!1})),a)),S=Object(h.c)([],(o={},Object(p.a)(o,C.g,(function(t,e){return e.payload})),Object(p.a)(o,C.c,(function(t,e){return[e.payload].concat(Object(f.a)(t))})),Object(p.a)(o,C.j,(function(t,e){return t.filter((function(t){return t.id!==e.payload}))})),o)),E=Object(h.c)("",Object(p.a)({},C.d,(function(t,e){return e.payload}))),R=Object(x.b)({items:S,filter:E,loading:A}),T=n(17),q=n(46),z={key:"auth",storage:n.n(q).a,whitelist:["token"]},U=Object(f.a)(Object(h.d)({serializableCheck:{ignoredActions:[T.a,T.f,T.b,T.c,T.d,T.e]}})),L=Object(h.a)({reducer:{auth:Object(T.g)(z,w),contacts:R},middleware:U,devTools:!1}),N={store:L,persistor:Object(T.h)(L)},B=n(32),G=n(33),J=n(35),M=n(34),D=n(6),I=n(1),P=function(){return Object(I.jsxs)("div",{children:[Object(I.jsx)(d.b,{to:"/",exact:!0,children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430"}),Object(I.jsx)(d.b,{to:"/contacts",exact:!0,children:"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u043e\u0432"})]})},W=function(t){return t.auth.token},F=function(t){return t.auth.user.name},H=n(23),K=n.p+"static/media/fish.8582a620.png",Q={onLogout:H.b},V=Object(O.b)((function(t){return{name:F(t),avatar:K}}),Q)((function(t){var e=t.avatar,n=t.name,c=t.onLogout;return Object(I.jsxs)("div",{children:[Object(I.jsx)("img",{src:e,alt:"",width:"32"}),Object(I.jsxs)("span",{children:["Welcome, ",n]}),Object(I.jsx)("button",{type:"button",onClick:c,children:"Logout"})]})})),X=function(){return Object(I.jsxs)("div",{children:[Object(I.jsx)(d.b,{to:"/register",exact:!0,children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(I.jsx)(d.b,{to:"/login",exact:!0,children:"\u041b\u043e\u0433\u0438\u043d"})]})},Y=Object(O.b)((function(t){return{isAuthenticated:W(t)}}))((function(t){var e=t.isAuthenticated;return Object(I.jsxs)("header",{children:[Object(I.jsx)(P,{}),e?Object(I.jsx)(V,{}):Object(I.jsx)(X,{})]})})),Z=n(19),$=n(27),_=["component","isAuthenticated","redirectTo"],tt=Object(O.b)((function(t){return{isAuthenticated:W(t)}}))((function(t){var e=t.component,n=t.isAuthenticated,c=t.redirectTo,r=Object($.a)(t,_);return Object(I.jsx)(D.b,Object(Z.a)(Object(Z.a)({},r),{},{render:function(t){return console.log(n),n?Object(I.jsx)(e,Object(Z.a)({},t)):Object(I.jsx)(D.a,{to:c})}}))})),et=["component","isAuthenticated","redirectTo","restricted"],nt=Object(O.b)((function(t){return{isAuthenticated:W(t)}}))((function(t){var e=t.component,n=t.isAuthenticated,c=t.redirectTo,r=t.restricted,u=void 0!==r&&r,a=Object($.a)(t,et);return Object(I.jsx)(D.b,Object(Z.a)(Object(Z.a)({},a),{},{render:function(t){return console.log(n),n&&u?Object(I.jsx)(D.a,{to:c}):Object(I.jsx)(e,Object(Z.a)({},t))}}))})),ct=Object(i.lazy)((function(){return n.e(1).then(n.bind(null,107))})),rt=Object(i.lazy)((function(){return n.e(4).then(n.bind(null,108))})),ut=Object(i.lazy)((function(){return n.e(2).then(n.bind(null,109))})),at=Object(i.lazy)((function(){return Promise.all([n.e(7),n.e(0)]).then(n.bind(null,110))})),ot=function(t){Object(J.a)(n,t);var e=Object(M.a)(n);function n(){return Object(B.a)(this,n),e.apply(this,arguments)}return Object(G.a)(n,[{key:"componentDidMount",value:function(){this.props.onGetCurrentUser()}},{key:"render",value:function(){return Object(I.jsxs)("div",{className:"block",children:[Object(I.jsx)(Y,{}),Object(I.jsx)(i.Suspense,{fallback:Object(I.jsx)("p",{children:"Loading in progress..."}),children:Object(I.jsxs)(D.d,{children:[Object(I.jsx)(nt,{exact:!0,path:"/",component:ct}),Object(I.jsx)(nt,{exact:!0,restricted:!0,path:"/register",redirectTo:"/contacts",component:rt}),Object(I.jsx)(nt,{exact:!0,restricted:!0,path:"/login",redirectTo:"/contacts",component:ut}),Object(I.jsx)(tt,{exact:!0,path:"/contacts",component:at,redirectTo:"/login"})]})})]})}}]),n}(i.Component),it={onGetCurrentUser:H.a},st=Object(O.b)(null,it)(ot);n(82);j.a.render(Object(I.jsx)(s.a.StrictMode,{children:Object(I.jsx)(O.a,{store:N.store,children:Object(I.jsx)(l.a,{loading:null,persistor:N.persistor,children:Object(I.jsx)(d.a,{children:Object(I.jsx)(st,{})})})})}),document.getElementById("root"))},9:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return a})),n.d(e,"f",(function(){return o})),n.d(e,"g",(function(){return i})),n.d(e,"e",(function(){return s})),n.d(e,"d",(function(){return b})),n.d(e,"i",(function(){return j})),n.d(e,"j",(function(){return d})),n.d(e,"h",(function(){return O}));var c=n(2),r=Object(c.b)("contacts/addNewContactsRequest"),u=Object(c.b)("contacts/addNewContactsSuccess"),a=Object(c.b)("contacts/addNewContactsError"),o=Object(c.b)("contacts/getAllContactsRequest"),i=Object(c.b)("contacts/getAllContactsSuccess"),s=Object(c.b)("contacts/getAllContactsError"),b=Object(c.b)("contacts/filterChange"),j=Object(c.b)("contacts/removeContactsRequest"),d=Object(c.b)("contacts/removeContactsSuccess"),O=Object(c.b)("contacts/removeContactsError")}},[[83,5,6]]]);
//# sourceMappingURL=main.7cd858f9.chunk.js.map