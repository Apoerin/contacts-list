(this.webpackJsonpteacode=this.webpackJsonpteacode||[]).push([[0],{28:function(e,t,n){},30:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),s=n(14),r=n.n(s),o=(n(28),n(23)),i=n(12),l=n.n(i),u=n(15),j=n(8),h=(n(30),n(2)),b=function(){return Object(h.jsx)("h1",{children:"Contacts"})},f=n(20),m=n(16),O=function(e){var t=e.id,n=e.avatar,c=e.first_name,s=e.last_name,r=e.email,o=Object(a.useState)(!1),i=Object(j.a)(o,2),l=i[0],u=i[1],b=c.charAt(0)+""+s.charAt(0);return Object(h.jsxs)(f.a,{className:l?"item-active":"item",onClick:function(){u(!l),console.log(t)},children:[Object(h.jsx)("div",{children:n?Object(h.jsx)(m.a,{src:n,alt:b,className:"avatar"}):Object(h.jsx)("span",{children:b})}),Object(h.jsxs)("div",{children:[Object(h.jsxs)("p",{className:"name",children:[c," ",s]}),Object(h.jsx)("p",{className:"email",children:r})]})]})},d=n(22),x=n(21),p=n(17),v=n(18),g=function(e){return Object(h.jsxs)(x.a,{className:"container",children:[Object(h.jsx)(p.a,{icon:v.a,className:"icon"}),Object(h.jsx)(d.a,{placeholder:"",type:"text",className:"search",onChange:function(t){return e.onSearch(t.target.value)},value:e.value})]})},C=n(19);var L=function(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(""),r=Object(j.a)(s,2),i=r[0],f=r[1],m=function(){var e=Object(u.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://teacode-recruitment-challenge.s3.eu-central-1.amazonaws.com/users.json");case 3:return t=e.sent,e.next=6,t.json();case 6:(n=e.sent).sort((function(e,t){return e.last_name.localeCompare(t.last_name)})),c(n),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){m()}),[]),Object(h.jsx)("main",{children:Object(h.jsxs)(C.a,{children:[Object(h.jsx)(b,{}),Object(h.jsx)(g,{onSearch:f,value:i}),n.filter((function(e){var t=e.first_name,n=e.last_name;return t.toLocaleLowerCase().startsWith(i.toLocaleLowerCase())||n.toLocaleLowerCase().startsWith(i.toLocaleLowerCase())})).map((function(e,t){return Object(h.jsx)(O,Object(o.a)({},e),t)}))]})})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,42)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))};r.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(L,{})}),document.getElementById("root")),w()}},[[41,1,2]]]);
//# sourceMappingURL=main.0bd1c7e7.chunk.js.map