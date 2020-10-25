(this["webpackJsonpuniswap-roi"]=this["webpackJsonpuniswap-roi"]||[]).push([[0],{135:function(e,a,t){e.exports=t.p+"static/media/CHANGELOG.65ba8a3b.md"},137:function(e){e.exports=JSON.parse('{"a":"2020.10.24.dev0"}')},142:function(e,a,t){e.exports=t(323)},147:function(e,a,t){},148:function(e,a,t){},323:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(21),c=t.n(r),i=(t(147),t(148),t(149),t(49)),s=t(138),o=t(15),m=t(11),u=t(131),d=t(22),E=function(e){var a=e.innerButton,t=e.children,r=Object(n.useState)(!1),c=Object(m.a)(r,2),i=c[0],s=c[1],o=i?"show":"",d=i?"":"collapsed";return l.a.createElement(l.a.Fragment,null,l.a.createElement(u.a,{variant:"link",className:"nav-link ".concat(d),"data-toggle":"collapse","aria-expanded":i,onClick:function(){return s(!i)}},a),l.a.createElement("div",{className:"collapse ".concat(o)},t))},p=function(){var e=l.a.createElement(l.a.Fragment,null,l.a.createElement(d.a,{className:"fa-fw mr-1",icon:"code"})," ",l.a.createElement("span",null,"Source code")),a=l.a.createElement("div",{className:"bg-white py-2 collapse-inner rounded"},l.a.createElement("h6",{className:"collapse-header"},"Frontend:"),l.a.createElement("a",{className:"collapse-item",href:"https://github.com/AndreMiras/pools"},"AndreMiras/pools"),l.a.createElement("div",{className:"collapse-divider"}),l.a.createElement("h6",{className:"collapse-header"},"Backend:"),l.a.createElement("a",{className:"collapse-item",href:"https://github.com/AndreMiras/pools-api"},"AndreMiras/pools-api"),l.a.createElement("a",{className:"collapse-item",href:"https://github.com/AndreMiras/libpools"},"AndreMiras/libpools"));return l.a.createElement(E,{innerButton:e},a)},b=function(){return l.a.createElement("ul",{className:"navbar-nav bg-gradient-primary sidebar sidebar-dark accordion",id:"accordionSidebar"},l.a.createElement("a",{className:"sidebar-brand d-flex align-items-center justify-content-center",href:"/pools"},l.a.createElement("div",{className:"sidebar-brand-icon rotate-n-15"},l.a.createElement("i",{className:"fas fa-laugh-wink"})),l.a.createElement("div",{className:"sidebar-brand-text mx-3"},"Pools")),l.a.createElement("hr",{className:"sidebar-divider my-0"}),l.a.createElement("li",{className:"nav-item active"},l.a.createElement("a",{className:"nav-link",href:"/pools"},l.a.createElement(d.a,{className:"fa-fw mr-1",icon:"tachometer-alt"}),l.a.createElement("span",null,"Dashboard"))),l.a.createElement("hr",{className:"sidebar-divider"}),l.a.createElement("div",{className:"sidebar-heading"},"Interface"),l.a.createElement("li",{className:"nav-item"},l.a.createElement(u.a,{variant:"link",className:"nav-link collapsed","data-toggle":"collapse","data-target":"#collapseTwo","aria-expanded":"true","aria-controls":"collapseTwo"},l.a.createElement(d.a,{className:"fa-cog mr-1",icon:"tachometer-alt"}),l.a.createElement("span",null,"Components")),l.a.createElement("div",{id:"collapseTwo",className:"collapse","aria-labelledby":"headingTwo","data-parent":"#accordionSidebar"},l.a.createElement("div",{className:"bg-white py-2 collapse-inner rounded"},l.a.createElement("h6",{className:"collapse-header"},"Custom Components:"),l.a.createElement("a",{className:"collapse-item",href:"buttons.html"},"Buttons"),l.a.createElement("a",{className:"collapse-item",href:"cards.html"},"Cards")))),l.a.createElement("li",{className:"nav-item"},l.a.createElement(u.a,{variant:"link",className:"nav-link collapsed","data-toggle":"collapse","data-target":"#collapseUtilities","aria-expanded":"true","aria-controls":"collapseUtilities"},l.a.createElement(d.a,{className:"fa-fw mr-1",icon:"wrench"}),l.a.createElement("span",null,"Utilities")),l.a.createElement("div",{id:"collapseUtilities",className:"collapse","aria-labelledby":"headingUtilities","data-parent":"#accordionSidebar"},l.a.createElement("div",{className:"bg-white py-2 collapse-inner rounded"},l.a.createElement("h6",{className:"collapse-header"},"Custom Utilities:"),l.a.createElement("a",{className:"collapse-item",href:"utilities-color.html"},"Colors"),l.a.createElement("a",{className:"collapse-item",href:"utilities-border.html"},"Borders"),l.a.createElement("a",{className:"collapse-item",href:"utilities-animation.html"},"Animations"),l.a.createElement("a",{className:"collapse-item",href:"utilities-other.html"},"Other")))),l.a.createElement("hr",{className:"sidebar-divider"}),l.a.createElement("div",{className:"sidebar-heading"},"Links"),l.a.createElement("li",{className:"nav-item"},l.a.createElement(p,null)),l.a.createElement("li",{className:"nav-item"},l.a.createElement(o.b,{className:"nav-link",to:"/changelog"},l.a.createElement(d.a,{className:"fa-fw mr-1",icon:"list"}),l.a.createElement("span",null,"Changelog"))),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"tables.html"},l.a.createElement("i",{className:"fas fa-fw fa-table"}),l.a.createElement("span",null,"Tables"))),l.a.createElement("hr",{className:"sidebar-divider d-none d-md-block"}),l.a.createElement("div",{className:"text-center d-none d-md-inline"},l.a.createElement("button",{className:"rounded-circle border-0",id:"sidebarToggle",type:"button","aria-label":"Toggle sidebar"})))},f=t(9),h=t(333),v=t(332),g="https://pools-api.herokuapp.com",N=function(e){return"".concat(g,"/portfolio/").concat(e)},y=function(e,a,t){fetch(e).then((function(e){var n=e.ok?a:t;e.json().then((function(e){return n(e)}))}),(function(e){return t({detail:e.toString()})}))},w=function(e,a,t){return y(function(e){return"".concat(g,"/pairs/").concat(e,"/daily")}(e),a,t)},k=t(334),O=function(e){var a=e.detail,t=e.onClose,r=Object(n.useState)(!0),c=Object(m.a)(r,2),i=c[0],s=c[1];return l.a.createElement(k.a,{show:i,onHide:function(){s(!1),t()},animation:!1},l.a.createElement(k.a.Header,{closeButton:!0,className:"bg-warning"},l.a.createElement(k.a.Title,null,"Error")),l.a.createElement(k.a.Body,null,a))};O.defaultProps={onClose:function(){return null}};var x=O,D=(t(156),t(336)),S=t(338),j=t(330),C=t(331),A=t(72),q=t(329),F=t(1),R=t.n(F),B={symbol:R.a.string.isRequired,balance:R.a.number.isRequired},T={amount0:R.a.number.isRequired,amount1:R.a.number.isRequired,amountUSD:R.a.number.isRequired,liquidity:R.a.number.isRequired,sender:R.a.string.isRequired,to:R.a.string.isRequired,type:R.a.string.isRequired},_=(R.a.string.isRequired,R.a.number.isRequired,R.a.string.isRequired,R.a.number.isRequired,R.a.number.isRequired,R.a.arrayOf(R.a.shape(B).isRequired).isRequired,R.a.arrayOf(R.a.shape(T).isRequired).isRequired,t(337)),P=t(328),H=function(e){var a=e.title,t=e.children,n=e.show,r=e.onHide;return l.a.createElement(k.a,{show:n,onHide:r,animation:!1},l.a.createElement(k.a.Header,{closeButton:!0},l.a.createElement(k.a.Title,null,a)),l.a.createElement(k.a.Body,null,t),l.a.createElement(k.a.Footer,null,l.a.createElement(u.a,{variant:"secondary",onClick:r},"Close")))},U=function(e){var a=e.token;return l.a.createElement(l.a.Fragment,null,a.symbol,l.a.createElement("ul",null,l.a.createElement("li",null,"Balance:",a.balance),l.a.createElement("li",null,"Price:",a.price),l.a.createElement("li",null,"Total USD: $",a.balance_usd)))},L=function(e){var a=e.pairDict;return l.a.createElement(l.a.Fragment,null,a.tokens.map((function(e){return l.a.createElement(U,{token:e,key:e.symbol})})))},M=function(e){var a=e.transactions;return l.a.createElement("pre",null,JSON.stringify(a,null,2))},J=function(e){var a=e.pairDict;return l.a.createElement("pre",null,JSON.stringify(a,null,2))},K=function(e){var a=e.pairDict;return l.a.createElement(_.a,{defaultActiveKey:"overview",transition:!1},l.a.createElement(P.a,{eventKey:"overview",title:"Overview"},l.a.createElement(L,{pairDict:a})),l.a.createElement(P.a,{eventKey:"transactions",title:"Transactions"},l.a.createElement(M,{transactions:a.transactions})),l.a.createElement(P.a,{eventKey:"debug",title:"Debug"},l.a.createElement(J,{pairDict:a})))},I=function(e){var a=e.pairDict,t=e.show,n=e.onHide,r="".concat(a.pair_symbol," pair details");return l.a.createElement(H,{title:r,show:t,onHide:n},l.a.createElement(K,{pairDict:a}))},$=function(e){var a=e.text,t=e.tokenAddress,n=e.ownerAddress,r=n?"?a=".concat(n):"",c="https://etherscan.io/token/".concat(t).concat(r);return l.a.createElement("a",{href:c},a)};$.defaultProps={ownerAddress:null};var G=function(e){var a=e.onClick;return l.a.createElement(u.a,{type:"link",onClick:a},"Details 1")},W=function(e){var a=e.address,t=e.pairDict,r=Object(n.useState)(!1),c=Object(m.a)(r,2),i=c[0],s=c[1],u=t.tokens[0],d=t.tokens[1];return l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement($,{text:t.pair_symbol,tokenAddress:t.contract_address})),l.a.createElement("td",null,l.a.createElement($,{text:t.owner_balance.toFixed(2),tokenAddress:t.contract_address,ownerAddress:a})),l.a.createElement("td",null,l.a.createElement(o.b,{to:"/pairs/".concat(t.contract_address)},"$",t.token_price.toFixed(2))),l.a.createElement("td",null,t.share.toFixed(2),"%"),l.a.createElement("td",null,u.balance.toFixed(2)," ",u.symbol," ","+"," ",d.balance.toFixed(2)," ","+"," ",d.symbol),l.a.createElement("td",null,"$",t.balance_usd.toFixed(2)),l.a.createElement("td",null,l.a.createElement(I,{pairDict:t,show:i,onHide:function(){return s(!1)}}),l.a.createElement(G,{onClick:function(){return s(!0)}})))},z=function(e){var a=e.address,t=e.pairs.map((function(e){return l.a.createElement(W,{address:a,pairDict:e,key:e.contract_address})}));return l.a.createElement(q.a,null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Symbol"),l.a.createElement("th",null,"Pool token balance"),l.a.createElement("th",null,"Price"),l.a.createElement("th",null,"Share"),l.a.createElement("th",null,"Tokens balance"),l.a.createElement("th",null,"Balance USD"),l.a.createElement("th",null,"Details"))),l.a.createElement("tbody",null,t))},Q=function(e){var a=e.title,t=e.extraComponent;return l.a.createElement("div",{className:"d-sm-flex align-items-center justify-content-between mb-4"},l.a.createElement("h1",{className:"h3 mb-0 text-gray-800"},a),t)};Q.defaultProps={extraComponent:null};var V=Q,X=function(e){var a=e.address;return l.a.createElement(u.a,{variant:"primary",size:"sm",href:N(a)},l.a.createElement(d.a,{icon:"download"})," ","Download")},Y=function(e){var a=e.dataDict,t=a.balance_usd,n=a.pairs.map((function(e){return Math.round(100*e.balance_usd/t)})),r={labels:a.pairs.map((function(e){return e.pair_symbol})),datasets:[{label:"Portfolio share",data:n}]};return l.a.createElement(A.Doughnut,{data:r,options:{plugins:{colorschemes:{scheme:"brewer.SetOne9"}}}})},Z=function(e){var a=e.dataDict;return l.a.createElement(D.a,null,l.a.createElement(S.a,null,l.a.createElement(S.a.Header,null,l.a.createElement(D.a.Toggle,{as:u.a,variant:"link",eventKey:"0"},"See full JSON response")),l.a.createElement(D.a.Collapse,{eventKey:"0",animation:"false"},l.a.createElement(S.a.Body,null,l.a.createElement("pre",null,JSON.stringify(a,null,2))))))},ee=function(e){var a=e.dataDict;return l.a.createElement(l.a.Fragment,null,l.a.createElement(V,{title:"Portfolio",extraComponent:l.a.createElement(X,{address:a.address})}),l.a.createElement(j.a,null,l.a.createElement("h3",null,"Liquidity provider balance: $",a.balance_usd.toFixed(2))),l.a.createElement(j.a,null,l.a.createElement(C.a,{xs:7},l.a.createElement(Y,{dataDict:a}))),l.a.createElement(j.a,null,l.a.createElement(z,{address:a.address,pairs:a.pairs})),l.a.createElement(j.a,null,l.a.createElement(Z,{dataDict:a})))},ae=function(){var e=Object(f.h)().address,a=Object(n.useState)(null),t=Object(m.a)(a,2),r=t[0],c=t[1],i=Object(n.useState)(null),s=Object(m.a)(i,2),o=s[0],u=s[1],d=function(e){u(null),c(e)},E=o?l.a.createElement(x,{detail:o.detail}):null,p=r?l.a.createElement(ee,{dataDict:r}):null,b=r||o?null:l.a.createElement(v.a,{animation:"border"});return Object(n.useEffect)((function(){u(null),c(null),function(e,a,t){y(N(e),a,t)}(e,d,u)}),[e]),l.a.createElement(l.a.Fragment,null,E,b,p)},te=function(e){var a=e.pairDailyList,t={labels:a.map((function(e){return e.date})),datasets:[{label:"Price USD",data:a.map((function(e){return e.price_usd}))}]};return l.a.createElement(A.Line,{data:t})},ne=function(e){var a=e.pairDailyList;return l.a.createElement(l.a.Fragment,null,l.a.createElement(V,{title:"Pair"}),l.a.createElement(te,{pairDailyList:a}))},le=function(){var e=Object(f.h)().address,a=Object(n.useState)(null),t=Object(m.a)(a,2),r=t[0],c=t[1],i=Object(n.useState)(null),s=Object(m.a)(i,2),o=s[0],u=s[1],d=function(e){u(null),c(e)},E=o?l.a.createElement(x,{detail:o.detail}):null,p=r?l.a.createElement(ne,{pairDailyList:r}):null,b=r||o?null:l.a.createElement(v.a,{animation:"border"});return Object(n.useEffect)((function(){u(null),c(null),w(e,d,u)}),[e]),l.a.createElement(l.a.Fragment,null,E,b,p)},re=t(134),ce=t.n(re),ie=t(135),se=t.n(ie),oe=function(){var e=Object(n.useState)(),a=Object(m.a)(e,2),t=a[0],r=a[1];return fetch(se.a).then((function(e){return e.text()})).then(r),l.a.createElement(ce.a,{source:t})},me=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(V,{title:"Home"}),l.a.createElement("div",{className:"row"},l.a.createElement("p",null,"Enter your address to track your portfolio, e.g."," ",l.a.createElement(o.b,{to:"/portfolio/0x000000000000000000000000000000000000dEaD"},"burn address portfolio"))))},ue=function(){return l.a.createElement(h.a,{fluid:!0},l.a.createElement(f.d,null,l.a.createElement(f.b,{exact:!0,path:"/"},l.a.createElement(me,null)),l.a.createElement(f.b,{path:"/portfolio/:address"},l.a.createElement(ae,null)),l.a.createElement(f.b,{path:"/pairs/:address"},l.a.createElement(le,null)),l.a.createElement(f.b,{path:"/changelog"},l.a.createElement(oe,null))))},de=t(335),Ee=function(e){var a=e.onAddress,t=e.loading,r=Object(n.useState)(),c=Object(m.a)(r,2),i=c[0],s=c[1],o=t?"spinner":"search",u=function(e){e.preventDefault(),a(i)};return l.a.createElement("form",{className:"d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search",onSubmit:u},l.a.createElement("div",{className:"input-group"},l.a.createElement("input",{type:"text",className:"form-control bg-light border-0 small",placeholder:"Ethereum address","aria-label":"Address","aria-describedby":"basic-addon2",onChange:function(e){s(e.target.value)}}),l.a.createElement("div",{className:"input-group-append"},l.a.createElement("button",{className:"btn btn-primary",type:"submit",onClick:u},l.a.createElement(d.a,{className:"fa-sm",icon:o,pulse:t})))))};Ee.defaultProps={loading:!1};var pe=function(e){var a=e.onAddress,t=e.loading;return l.a.createElement("nav",{className:"navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow"},l.a.createElement("button",{id:"sidebarToggleTop",className:"btn btn-link d-md-none rounded-circle mr-3",type:"button"},l.a.createElement("i",{className:"fa fa-bars"})),l.a.createElement(Ee,{onAddress:a,loading:t}),l.a.createElement("ul",{className:"navbar-nav ml-auto"},l.a.createElement("div",{className:"topbar-divider d-none d-sm-block"}),l.a.createElement(de.a,{title:"0x00000...0000",id:"nav-dropdown",className:"mr-2 d-none d-lg-inline small"},l.a.createElement(de.a.Item,null,"Profile"),l.a.createElement(de.a.Item,null,"Settings"),l.a.createElement(de.a.Divider,null),l.a.createElement(de.a.Item,null,"Logout"))))},be=function(){var e=Object(n.useState)(null),a=Object(m.a)(e,2),t=a[0],r=a[1],c=Object(f.g)(),i=t?l.a.createElement(f.a,{to:"/portfolio/".concat(t)}):null;return l.a.createElement("div",{id:"content"},i,l.a.createElement(pe,{onAddress:function(e){t===e&&(c.push("/temp"),c.goBack()),r(e)}}),l.a.createElement(ue,null))},fe=t(137),he=function(){return l.a.createElement("footer",{className:"sticky-footer bg-white"},l.a.createElement("div",{className:"container my-auto"},l.a.createElement("div",{className:"copyright text-center my-auto"},l.a.createElement("span",null,"Copyright \xa9 Andre Miras 2020 - Pools v",fe.a))))},ve=function(){return l.a.createElement("div",{id:"content-wrapper",className:"d-flex flex-column"},l.a.createElement(be,null),l.a.createElement(he,null))};i.b.add(s.a);var ge=function(){return l.a.createElement(o.a,null,l.a.createElement("div",{className:"App",id:"wrapper"},l.a.createElement(b,null),l.a.createElement(ve,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(ge,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[142,1,2]]]);
//# sourceMappingURL=main.ec20a14a.chunk.js.map