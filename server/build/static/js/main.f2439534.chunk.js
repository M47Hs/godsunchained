(this.webpackJsonpdeploy=this.webpackJsonpdeploy||[]).push([[0],{224:function(e,t,n){},322:function(e,t,n){},437:function(e,t,n){},524:function(e,t){},530:function(e,t){},531:function(e,t){},533:function(e,t){},534:function(e,t){},555:function(e,t){},559:function(e,t){},561:function(e,t){},570:function(e,t){},572:function(e,t){},598:function(e,t){},600:function(e,t){},605:function(e,t){},607:function(e,t){},614:function(e,t){},626:function(e,t){},629:function(e,t){},633:function(e,t){},863:function(e,t,n){},867:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(95),s=n.n(c),i=n(103),o=n(60),u=n(19),l=n(887),d=n(884),p=n(5);var j,b,f,x,h,O=n(2),m=n.n(O),v=n(27),g=n(64),y=n(65),w=y.a.div(j||(j=Object(g.a)(["\ntransition: all .2s ease-in-out;\nborder-radius: 10px;\n&:hover{\n    transform:scale(1.1);\n}\n"]))),k=y.a.button(b||(b=Object(g.a)(["\n  background-color: green;\n  width: 90px;\n  height: 30px;\n  border: none;\n  border-radius: 10px;\n  color: white;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 12px;\n"]))),S=(y.a.button(f||(f=Object(g.a)(["\n  background-color: red;\n  width: 90px;\n  height: 30px;\n  border: none;\n  border-radius: 10px;\n  color: white;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 12px;\n  margin-left:10px;\n"]))),y.a.button(x||(x=Object(g.a)(["\nbackground-color: grey;\n  width: 90px;\n  height: 30px;\n  border: none;\n  border-radius: 10px;\n  color: white;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 12px;\n  margin-left:10px;\n"])))),_=y.a.div(h||(h=Object(g.a)(["\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n  margin-top:10%;\n  display:flex;\n  justify-content : center;\n"])));var N=function(e){var t=e.proto;return Object(p.jsx)("div",{children:Object(p.jsx)("li",{children:Object(p.jsx)(w,{children:Object(p.jsx)(i.b,{to:"/godsunchained/protos/".concat(t.token_proto),children:Object(p.jsx)("img",{className:"nft-item-cover",src:"https://card.godsunchained.com/?id=".concat(t.token_proto.split("-")[0],"&q=").concat(t.token_proto.split("-")[1]),alt:"".concat(t.token_proto," cover"),onClick:function(){}})})})},t.token_proto)})},E=(n(224),n(879)),D=n(61),C=n(325),P=n(111),F=(n(115),n(72)),I=n.n(F),q="https://api.x.immutable.com/v1",L="0xacb3c6a43d15b907e8433077b6d38ae40936fe2c",A=function(e){return(e*Math.pow(10,-18)).toFixed(6)},M=function(){var e=Object(v.a)(m.a.mark((function e(){var t,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://min-api.cryptocompare.com/data/price",e.prev=1,e.next=4,I.a.get("https://min-api.cryptocompare.com/data/price",{params:{fsym:"ETH",tsyms:"USD"}});case 4:return t=e.sent,n=t.data,e.abrupt("return",n.USD);case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}();function T(){return U.apply(this,arguments)}function U(){return(U=Object(v.a)(m.a.mark((function e(){var t,n,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.ImmutableXClient.build({publicApiUrl:q});case 2:return e.sent,t={headers:{"x-api-key":"Np8BV2d5QR9TSFEr9EvF66FWcJf0wIxy2qBpOH6s"},params:{tokenAddress:"0xacb3c6a43d15b907e8433077b6d38ae40936fe2c"}},"https://gy2601wgv6.execute-api.us-east-1.amazonaws.com/dev/all-orders",e.next=7,I()("https://gy2601wgv6.execute-api.us-east-1.amazonaws.com/dev/all-orders",t);case 7:return n=e.sent,a=n.data,e.abrupt("return",a);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function J(e){return z.apply(this,arguments)}function z(){return(z=Object(v.a)(m.a.mark((function e(t){var n,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.ImmutableXClient.build({publicApiUrl:q});case 2:return n=e.sent,e.next=5,n.getOrders({page_size:5,status:"active",sell_token_address:"0xacb3c6a43d15b907e8433077b6d38ae40936fe2c",sell_metadata:t,order_by:"buy_quantity",direction:"asc"});case 5:return a=e.sent,e.abrupt("return",{orders:a.result});case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function R(e){return K.apply(this,arguments)}function K(){return(K=Object(v.a)(m.a.mark((function e(t){var n,a,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J(t);case 2:return n=e.sent,a=n.orders,e.next=6,M();case 6:return r=e.sent,a.forEach((function(e){e.buy.data.quantity=(e.buy.data.quantity*Math.pow(10,-18)*r).toFixed(2)})),e.abrupt("return",{orders:a});case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function W(e,t){return B.apply(this,arguments)}function B(){return(B=Object(v.a)(m.a.mark((function e(t,n){var a,r,c,s;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=[],e.next=3,P.ImmutableXClient.build({publicApiUrl:q});case 3:c=e.sent,localStorage.getItem("WALLET_ADDRESS"),e.prev=5;case 6:return e.next=8,c.getOrders({page_size:200,cursor:a,status:"filled",sell_token_address:L,sell_metadata:t,order_by:"timestamp",direction:"asc",min_timestamp:n});case 8:s=e.sent,r=r.concat(s.result),a=s.cursor;case 11:if(a){e.next=6;break}case 12:r.sort((function(e,t){return e.updated_timestamp.localeCompare(t.updated_timestamp)})),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(5),console.log(e.t0);case 18:return e.prev=18,e.abrupt("return",r);case 21:case"end":return e.stop()}}),e,null,[[5,15,18,21]])})))).apply(this,arguments)}function H(e){return Q.apply(this,arguments)}function Q(){return(Q=Object(v.a)(m.a.mark((function e(t){var n,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.ImmutableXClient.build({publicApiUrl:q});case 2:return n=e.sent,e.next=5,n.getOrders({page_size:30,status:"filled",sell_token_address:"0xacb3c6a43d15b907e8433077b6d38ae40936fe2c",sell_metadata:t,order_by:"timestamp",direction:"desc"});case 5:return(a=e.sent).result.sort((function(e,t){return t.updated_timestamp.localeCompare(e.updated_timestamp)})),e.abrupt("return",a.result.slice(0,5));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function G(e){return X.apply(this,arguments)}function X(){return(X=Object(v.a)(m.a.mark((function e(t){var n,a,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.x.immutable.com/v1/assets/".concat(L,"/").concat(t),e.next=3,I()(n);case 3:return a=e.sent,r=a.data,e.abrupt("return",r.user);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function V(e){return Y.apply(this,arguments)}function Y(){return(Y=Object(v.a)(m.a.mark((function e(t){var n,a,r,c,s,i,o,u,l;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M();case 2:return n=e.sent,a=[],e.prev=4,e.next=7,H(t);case 7:r=e.sent,c=Object(D.a)(r),e.prev=9,c.s();case 11:if((s=c.n()).done){e.next=21;break}return i=s.value,o=i.sell.data.id,e.next=16,G(o);case 16:u=e.sent,l=(i.buy.data.quantity*Math.pow(10,-18)*n).toFixed(2),a=a.concat({tokenID:o,owner:u,price:l,uptime:(Date.parse(i.updated_timestamp)-Date.parse(i.timestamp))/1e3});case 19:e.next=11;break;case 21:e.next=26;break;case 23:e.prev=23,e.t0=e.catch(9),c.e(e.t0);case 26:return e.prev=26,c.f(),e.finish(26);case 29:return e.abrupt("return",a);case 32:e.prev=32,e.t1=e.catch(4),console.log(e.t1);case 35:case"end":return e.stop()}}),e,null,[[4,32],[9,23,26,29]])})))).apply(this,arguments)}function Z(e,t){return $.apply(this,arguments)}function $(){return($=Object(v.a)(m.a.mark((function e(t,n){var a,r,c,s,i;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=[],["January","February","March","April","May","June","July","August","September","October","November","December"],r=new Map,e.prev=3,e.next=6,W(t,n);case 6:return i=e.sent,console.log(i),i.forEach((function(e){var t=Date.parse(e.updated_timestamp),n=new Date(t).toLocaleDateString("en-US",{day:"numeric",month:"long"});if(r.has(n)){var a=r.get(n);s=+a.price+ +A(e.buy.data.quantity),s/=2,c=a.volume}else c=0,s=+A(e.buy.data.quantity);s.toFixed(6),r.set(n,{price:s,volume:c+1})})),console.log(r),r.forEach((function(e,t){var n={time:t,data:e};a=a.concat(n)})),e.abrupt("return",a);case 14:e.prev=14,e.t0=e.catch(3),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[3,14]])})))).apply(this,arguments)}function ee(e,t){return te.apply(this,arguments)}function te(){return(te=Object(v.a)(m.a.mark((function e(t,n){var a,r,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=[],new Map,e.prev=2,e.next=5,W(t,n);case 5:return c=e.sent,console.log(c),c.forEach((function(e){var t=Date.parse(e.updated_timestamp),n=new Date(t).toLocaleDateString("en-US",{day:"numeric",month:"long"});(r=+A(e.buy.data.quantity)).toFixed(6);var c={time:n,data:{price:r,volume:0}};a=a.concat(c)})),e.abrupt("return",a);case 11:e.prev=11,e.t0=e.catch(2),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[2,11]])})))).apply(this,arguments)}var ne=function(){var e=Object(v.a)(m.a.mark((function e(){var t,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://gumarkets.freeboxos.fr:5000/discounts",e.next=3,I()("https://gumarkets.freeboxos.fr:5000/discounts");case 3:return t=e.sent,n=t.data,e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();R();var ae=function(e){e.showPopup,e.setPopup;var t=Object(a.useState)([]),n=Object(u.a)(t,2),r=n[0],c=n[1],s=Object(a.useState)(!1),i=Object(u.a)(s,2),o=i[0],l=i[1],d=Object(a.useState)(""),j=Object(u.a)(d,2),b=j[0],f=j[1];function x(){return(x=Object(v.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(!0),e.next=3,T();case 3:t=e.sent,c(t),l(!1);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){!function(){x.apply(this,arguments)}()}),[]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{className:"container d-flex justify-content-center",children:Object(p.jsx)("input",{type:"text",placeholder:"Search a proto",onChange:function(e){f(e.target.value.toLowerCase())}})}),o?Object(p.jsxs)("div",{className:"container d-flex justify-content-center",children:[Object(p.jsx)(E.a,{animation:"grow"})," "]}):Object(p.jsx)("ul",{className:"list-unstyled",children:Object(p.jsx)("div",{className:"row",children:r.map((function(e){return JSON.parse(e.metadata).name.toLowerCase().includes(b)&&Object(p.jsx)(N,{proto:e},"".concat(e.token_proto))}))})})]})},re=(n(437),new C.Link("https://link.x.immutable.com")),ce="WALLET_ADDRESS",se="STARK_PUBLIC_KEY";function ie(){return oe.apply(this,arguments)}function oe(){return(oe=Object(v.a)(m.a.mark((function e(){var t,n,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,re.setup({});case 2:t=e.sent,n=t.address,a=t.starkPublicKey,localStorage.setItem(ce,n),localStorage.setItem(se,a);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ue(e){return le.apply(this,arguments)}function le(){return(le=Object(v.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,re.buy({orderId:t});case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var de=function(e){return(e*Math.pow(10,-18)).toFixed(6)},pe=function(){var e=Object(v.a)(m.a.mark((function e(){var t,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://min-api.cryptocompare.com/data/price",e.prev=1,e.next=4,I.a.get("https://min-api.cryptocompare.com/data/price",{params:{fsym:"ETH",tsyms:"USD"}});case 4:return t=e.sent,n=t.data,e.abrupt("return",n.USD);case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}(),je=function(){var e=Object(v.a)(m.a.mark((function e(t,n){var a,r,c,s,i;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=null,r={minPrice:Number.MAX_SAFE_INTEGER,orderID:null},"https://api.x.immutable.com/v1/orders",c=JSON.stringify({proto:["".concat(t.id)],quality:["".concat(n)]}),e.prev=4,e.next=7,I.a.get("https://api.x.immutable.com/v1/orders",{params:{sell_metadata:c,status:"active",order_by:"buy_quantity",direction:"asc"}});case 7:s=e.sent,(a=s.data.result).map((function(e){var t=e.buy.data.quantity,n=e.buy.data.decimals,a=(t*Math.pow(10,-n)).toFixed(6),c=e.order_id;r.minPrice>a&&(r.minPrice=a,r.orderID=c)})),i=a[0].sell.data.properties.image_url,e.next=16;break;case 13:e.prev=13,e.t0=e.catch(4),console.log(e.t0);case 16:return e.prev=16,e.abrupt("return",{result:a,bestOrder:r,image_url:i});case 19:case"end":return e.stop()}}),e,null,[[4,13,16,19]])})));return function(t,n){return e.apply(this,arguments)}}(),be=n(886),fe=n(883),xe=n(494),he=n(495),Oe=n(108),me=n(222),ve=n(220),ge=n(491),ye=n(493);var we,ke=function(e){var t=e.proto,n=e.quality,r=e.type,c=Object(a.useState)([]),s=Object(u.a)(c,2),i=s[0],o=s[1],l=Object(a.useState)(!1),d=Object(u.a)(l,2),j=d[0],b=d[1],f=function(){var e=Object(v.a)(m.a.mark((function e(t,n,a,r){var c,s,i,u,l;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(!0),console.log(a),c=JSON.stringify({proto:["".concat(t)],quality:["".concat(n)]}),e.next=5,pe();case 5:if(s=e.sent,"month-avg"!==r){e.next=15;break}return e.next=9,Z(c,a);case 9:(i=e.sent).forEach((function(e){return e.data.price=+(e.data.price*s).toFixed(2)})),console.log(i),o(i),e.next=31;break;case 15:if("month-detailed"!==r){e.next=24;break}return e.next=18,ee(c,a);case 18:(u=e.sent).forEach((function(e){return e.data.price=+(e.data.price*s).toFixed(2)})),console.log(u),o(u),e.next=31;break;case 24:if("week-detailed"!==r){e.next=31;break}return e.next=27,ee(c,a);case 27:(l=e.sent).forEach((function(e){return e.data.price=+(e.data.price*s).toFixed(2)})),console.log(l),o(l);case 31:b(!1);case 32:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){var e;switch(r){case"month-avg":(e=new Date).setMonth(e.getMonth()-1),e=e.toISOString();break;case"week-detailed":(e=new Date).setTime(e.getTime()-6048e5),e=e.toISOString();break;default:e=void 0}console.log(r),console.log(e),f(t,n,e,r)}),[]),Object(p.jsx)(p.Fragment,{children:j?Object(p.jsxs)(_,{children:[Object(p.jsx)(E.a,{animation:"grow"})," "]}):Object(p.jsx)("div",{className:"d-flex align-items-center",children:Object(p.jsxs)(be.a,{width:500,height:400,data:i,margin:{top:20,right:20,bottom:20,left:20},children:[Object(p.jsx)(fe.a,{stroke:"#f5f5f5"}),Object(p.jsx)(xe.a,{dataKey:"time"}),Object(p.jsx)(he.a,{yAxisId:"left",dataKey:"data.price",children:Object(p.jsx)(Oe.a,{angle:270,position:"left",style:{textAnchor:"middle"},children:"USD price"})}),Object(p.jsx)(he.a,{yAxisId:"right",dataKey:"data.volume",orientation:"right",domain:[0,function(e){return 5*e}],children:Object(p.jsx)(Oe.a,{angle:90,position:"right",style:{textAnchor:"middle"},children:"Volume"})}),Object(p.jsx)(me.a,{}),Object(p.jsx)(ve.a,{}),Object(p.jsx)(ge.a,{yAxisId:"left",type:"monotone",dataKey:"data.price",stroke:"#8884d8"}),Object(p.jsx)(ye.a,{yAxisId:"right",dataKey:"data.volume",barSize:5,fill:"#413ea0"})]})})})};var Se=function(e){var t=e.showPopup,n=e.setPopup,r=e.popupCard,c=Object(a.useState)(null),s=Object(u.a)(c,2),i=s[0],o=s[1],j=Object(a.useState)(null),b=Object(u.a)(j,2),f=(b[0],b[1]),x=Object(a.useState)(null),h=Object(u.a)(x,2),O=h[0],w=h[1],S=Object(a.useState)("Meteorite"),_=Object(u.a)(S,2),N=_[0],D=_[1],C=Object(a.useState)(!1),P=Object(u.a)(C,2),F=P[0],I=P[1],q=Object(a.useState)(!1),L=Object(u.a)(q,2),A=L[0],M=L[1],T=Object(a.useState)(null),U=Object(u.a)(T,2),J=U[0],z=U[1],R=Object(a.useState)([]),K=Object(u.a)(R,2),W=K[0],B=K[1],H=y.a.div(we||(we=Object(g.a)(["\n  display:flex;\n  flex-direction:row;\n  justify-content : center;\n  align-items:center;\n  @media (max-width: 900px) {\n    flex-direction: column;\n  }\n"])));function Q(){return G.apply(this,arguments)}function G(){return(G=Object(v.a)(m.a.mark((function e(){var t,n,a,c,s;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return M(!0),e.prev=1,I(!1),e.next=5,je(r,N);case 5:return t=e.sent,n=t.result,a=t.bestOrder,c=t.image_url,console.log(n,a,c),B(n.slice(0,5)),o(a.minPrice),f(a.orderID),e.next=15,pe();case 15:s=e.sent,z(s),w(c),null===a.orderID&&I(!0),e.next=25;break;case 21:e.prev=21,e.t0=e.catch(1),I(!0),console.log(e.t0);case 25:return e.prev=25,M(!1),e.finish(25);case 28:case"end":return e.stop()}}),e,null,[[1,21,25,28]])})))).apply(this,arguments)}function X(e){return V.apply(this,arguments)}function V(){return(V=Object(v.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ue(t.target.value);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})))).apply(this,arguments)}return Object(a.useEffect)((function(){Q(r,N)}),[]),Object(a.useEffect)((function(){Q(r,N)}),[N]),Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)(d.a,{show:t,onHide:function(){n(!t)},dialogClassName:"modal-80w",children:[Object(p.jsx)(d.a.Header,{closeButton:!0,children:Object(p.jsx)(d.a.Title,{children:r.name})}),Object(p.jsx)(d.a.Body,{children:A?Object(p.jsxs)("div",{className:"container d-flex justify-content-center",children:[Object(p.jsx)(E.a,{animation:"grow"})," "]}):F?Object(p.jsx)("h5",{children:"this card is not available for trade"}):Object(p.jsxs)("div",{children:[Object(p.jsxs)("p",{children:["Quality : ",N]}),Object(p.jsxs)("p",{children:["Price : ",i," ETH - ",(i*J).toFixed(2)," USD"]}),Object(p.jsxs)(H,{children:[Object(p.jsx)("img",{src:O,alt:r.id}),Object(p.jsx)(ke,{proto:r.id,quality:N})]}),Object(p.jsx)("div",{className:"d-flex justify-content-center",children:Object(p.jsxs)("p",{children:["For sale:",W.map((function(e){var t=de(e.buy.data.quantity),n=(t*J).toFixed(2);return Object(p.jsxs)("p",{children:[Object(p.jsxs)(k,{value:e.order_id,onClick:X,children:[n," USD "]})," : ",t," ETH"]})}))]})})]})}),Object(p.jsxs)(d.a.Footer,{children:[Object(p.jsx)(l.a,{variant:"secondary",onClick:function(){D("Meteorite")},children:"Meteorite"}),Object(p.jsx)(l.a,{variant:"primary",onClick:function(){D("Shadow")},children:"Shadow"}),Object(p.jsx)(l.a,{variant:"warning",onClick:function(){D("Gold")},children:"Gold"}),Object(p.jsx)(l.a,{variant:"link",onClick:function(){D("Diamond")},children:"Diamond"})]})]})})};var _e=Object(a.createContext)(),Ne=function(e){var t=e.children,n=Object(a.useState)(null!==localStorage.getItem("WALLET_ADDRESS")),r=Object(u.a)(n,2),c=r[0],s=r[1];return Object(p.jsx)(_e.Provider,{value:{logged:c,setLogged:s},children:t})};var Ee,De,Ce=function(){var e=Object(a.useContext)(_e),t=e.logged,n=e.setLogged,r=Object(a.useState)(""),c=Object(u.a)(r,2),s=(c[0],c[1]),i=Object(a.useState)(!1),l=Object(u.a)(i,2),d=(l[0],l[1],Object(a.useState)(null)),j=Object(u.a)(d,2),b=(j[0],j[1],Object(a.useState)(!0)),f=Object(u.a)(b,2),x=f[0],h=f[1];function O(){return(O=Object(v.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(h(!0),t){e.next=12;break}return e.prev=2,e.next=5,ie();case 5:n(!0),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(2),console.log(e.t0),n(!1);case 12:s(localStorage.getItem("WALLET_ADDRESS")),h(!1);case 14:case"end":return e.stop()}}),e,null,[[2,8]])})))).apply(this,arguments)}return Object(a.useEffect)((function(){!function(){O.apply(this,arguments)}()}),[]),Object(p.jsx)(p.Fragment,{children:x?Object(p.jsxs)("div",{className:"container d-flex justify-content-center",children:[Object(p.jsx)(E.a,{animation:"grow"})," "]}):Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(o.a,{to:"/godsunchained/user/"+localStorage.getItem("WALLET_ADDRESS")})})})},Pe=(n(863),n.p+"static/media/logo.aac3612d.png");var Fe=function(){var e=y.a.nav(Ee||(Ee=Object(g.a)(["\n  padding: 30px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]))),t=Object(y.a)(i.b)(De||(De=Object(g.a)(["\n  padding: 10px 15px;\n  color: #c4fffc;\n  text-decoration: none;\n  font-size: 18px;\n  text-align: center;\n"]))),n=Object(a.useContext)(_e),r=n.logged,c=n.setLogged,s=Object(a.useState)(""),l=Object(u.a)(s,2),d=l[0],j=l[1],b=Object(o.f)();function f(){return(f=Object(v.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r?alert("user already connected"):function(){var e=Object(v.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ie();case 3:c(!0),e.next=10;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0),c(!1);case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}()();case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(p.jsxs)("div",{className:"d-flex headerWrapper",children:[Object(p.jsx)("div",{className:"d-flex",children:Object(p.jsx)("img",{src:Pe,className:"mainLogo",alt:"mainLogo"})}),Object(p.jsx)("div",{className:"d-flex",children:Object(p.jsxs)("div",{className:"container d-flex justify-content-center",children:[Object(p.jsx)("input",{type:"text",placeholder:"Enter eth address",onChange:function(e){j(e.target.value)}}),Object(p.jsx)(t,{className:"link",to:"/godsunchained/user/".concat(d),children:"Search user"})]})}),Object(p.jsxs)(e,{children:[r?Object(p.jsx)(S,{onClick:function(){if(r){localStorage.removeItem("WALLET_ADDRESS"),c(!1);b.push("/browse"),alert("user disconnecterd")}else alert("user not logged in")},children:"Disconnect"}):Object(p.jsx)(S,{onClick:function(){return f.apply(this,arguments)},children:"Connect"}),Object(p.jsx)(t,{className:"link",to:"/godsunchained/browse",children:"Browse Cards"}),Object(p.jsx)(t,{className:"link",to:"/godsunchained/account",children:"Your Cards"}),Object(p.jsx)(t,{className:"link",to:"/godsunchained/discounts",children:"Discounts"})]})]})};var Ie=function(e){var t=e.proto;return Object(p.jsx)("div",{children:Object(p.jsx)("li",{children:Object(p.jsx)(w,{children:Object(p.jsxs)(i.b,{to:"/godsunchained/protos/".concat(t.token_proto),children:[Object(p.jsx)("img",{className:"nft-item-cover",src:"https://card.godsunchained.com/?id=".concat(t.token_proto.split("-")[0],"&q=").concat(t.token_proto.split("-")[1]),alt:"".concat(t.token_proto," cover"),onClick:function(){}}),Object(p.jsxs)("span",{children:["-",t.diff,"%"]})]})})},t.token_proto)})};var qe=function(e){e.showPopup,e.setPopup;var t=Object(a.useState)([]),n=Object(u.a)(t,2),r=n[0],c=n[1],s=Object(a.useState)([]),i=Object(u.a)(s,2),o=i[0],l=i[1],d=Object(a.useState)(!1),j=Object(u.a)(d,2),b=j[0],f=j[1];function x(){return(x=Object(v.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f(!0),e.next=3,ne();case 3:t=e.sent,c(t),l(t),f(!1);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){!function(){x.apply(this,arguments)}()}),[]),Object(a.useEffect)((function(){console.log(o)}),[o]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{className:"container d-flex justify-content-center",children:Object(p.jsx)("input",{type:"text",placeholder:"Search a proto",onChange:function(e){var t=r.filter((function(t){return JSON.parse(t.metadata).name.toLowerCase().includes(e.target.value.toLowerCase())}));l(t)}})}),b?Object(p.jsxs)("div",{className:"container d-flex justify-content-center",children:[Object(p.jsx)(E.a,{animation:"grow"})," "]}):Object(p.jsx)("ul",{className:"list-unstyled",children:Object(p.jsx)("div",{className:"row",children:Object.keys(o).map((function(e){return Object(p.jsx)(Ie,{proto:o[e]},"".concat(o[e].token_proto))}))})})]})};var Le=function(){var e=Object(a.useState)(!1),t=Object(u.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(null),s=Object(u.a)(c,2),i=s[0],o=s[1];return console.log(i),Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)(qe,{showPopup:n,setPopup:r,popupCard:i,setPopupCard:o}),n?Object(p.jsx)(Se,{showPopup:n,setPopup:r,popupCard:i}):null]})};var Ae=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],r=t[1],c=function(){var e=Object(v.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T();case 3:t=e.sent,r(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){c(),console.log(n)}),[]),Object(p.jsx)("div",{className:"container",children:Object(p.jsx)(ae,{})})};n(322);var Me,Te=function(e){var t=e.proto,n=e.quality,r=Object(a.useState)([]),c=Object(u.a)(r,2),s=c[0],i=c[1];function o(){return(o=Object(v.a)(m.a.mark((function e(){var a,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=JSON.stringify({proto:["".concat(t)],quality:["".concat(n)]}),e.next=4,V(a);case 4:r=e.sent,i(r.slice(0,5)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}return Object(a.useEffect)((function(){!function(){o.apply(this,arguments)}(),console.log(s)}),[]),Object(p.jsx)("div",{children:Object(p.jsx)("ul",{children:s.map((function(e){return Object(p.jsxs)("li",{children:["owner : ",e.owner,", price:",e.price,", NFT_id : ",e.tokenID,", temps en seconde : ",e.uptime]})}))})})};var Ue,Je=function(e){var t=e.proto,n=e.quality,a=e.id,r=e.orders,c=e.price,s=e.getQuality,i=y.a.div(Me||(Me=Object(g.a)(["\n    display:flex;\n    flex-direction:row;\n    justify-content : center;\n    align-items:center;\n    @media (max-width: 900px) {\n      flex-direction: column;\n    }\n  "])));function o(e){return u.apply(this,arguments)}function u(){return(u=Object(v.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ue(t.target.value);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})))).apply(this,arguments)}return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)(i,{children:[Object(p.jsx)("img",{className:"nft-item-cover",src:"https://card.godsunchained.com/?id=".concat(t,"&q=").concat(n),alt:"".concat(a," cover")}),Object(p.jsx)(ke,{proto:t,quality:s(n),type:"month-avg"})]}),Object(p.jsx)("div",{className:"d-flex justify-content-center",children:Object(p.jsxs)("p",{children:["For sale:",r.map((function(e){return Object(p.jsx)("p",{children:Object(p.jsxs)(k,{value:e.order_id,onClick:o,children:[c," USD "]})})}))]})})]})};var ze,Re=function(e){var t=e.proto,n=e.quality,a=e.id,r=(e.orders,e.price,e.getQuality),c=y.a.div(Ue||(Ue=Object(g.a)(["\n    display:flex;\n    flex-direction:row;\n    justify-content : center;\n    align-items:center;\n    @media (max-width: 900px) {\n      flex-direction: column;\n    }\n  "])));return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("div",{className:"last trades",children:[Object(p.jsx)("img",{className:"nft-item-cover",src:"https://card.godsunchained.com/?id=".concat(t,"&q=").concat(n),alt:"".concat(a," cover")}),"Last trades :",Object(p.jsx)(Te,{proto:t,quality:r(n)})]}),Object(p.jsx)(c,{children:Object(p.jsx)(ke,{proto:t,quality:r(n),type:"month-detailed"})}),Object(p.jsx)(c,{children:Object(p.jsx)(ke,{proto:t,quality:r(n),type:"week-detailed"})})]})};var Ke=function(){y.a.div(ze||(ze=Object(g.a)(["\n    display:flex;\n    flex-direction:row;\n    justify-content : center;\n    align-items:center;\n    @media (max-width: 900px) {\n      flex-direction: column;\n    }\n  "])));var e={4:"Meteorite",3:"Shadow",2:"Gold",1:"Diamond"},t=function(t){return e[t]},n=Object(o.g)().id,r=n.split("-"),c=Object(u.a)(r,2),s=c[0],i=c[1],l=Object(a.useState)(null),d=Object(u.a)(l,2),j=d[0],b=d[1],f=Object(a.useState)(!1),x=Object(u.a)(f,2),h=x[0],O=x[1],w=Object(a.useState)(!1),k=Object(u.a)(w,2),S=k[0],_=k[1],N=Object(a.useState)([]),D=Object(u.a)(N,2),C=D[0],P=D[1],F=Object(a.useState)(1),I=Object(u.a)(F,2),q=I[0],L=I[1],A=function(e){L(e)};function M(){return(M=Object(v.a)(m.a.mark((function e(){var n,a,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return _(!0),e.prev=1,O(!1),n=JSON.stringify({proto:["".concat(s)],quality:["".concat(t(i))]}),e.next=6,R(n);case 6:a=e.sent,r=a.orders,P(r),b(r[0].buy.data.quantity),null===r[0].orderID&&O(!0),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(1),O(!0),console.log(e.t0);case 17:return e.prev=17,_(!1),e.finish(17);case 20:case"end":return e.stop()}}),e,null,[[1,13,17,20]])})))).apply(this,arguments)}return Object(a.useEffect)((function(){!function(){M.apply(this,arguments)}()}),[]),Object(p.jsx)("div",{children:S?Object(p.jsxs)("div",{className:"container d-flex justify-content-center",children:[Object(p.jsx)(E.a,{animation:"grow"})," "]}):h?Object(p.jsx)("h5",{children:"this card is not available for trade"}):Object(p.jsxs)("div",{children:[Object(p.jsxs)("div",{className:"bloc-tabs",children:[Object(p.jsx)("button",{className:1===q?"tabs active-tabs":"tabs",onClick:function(){return A(1)},children:"General info"}),Object(p.jsx)("button",{className:2===q?"tabs active-tabs":"tabs",onClick:function(){return A(2)},children:"Detailed Info"})]}),Object(p.jsxs)("div",{className:"content-tabs",children:[Object(p.jsx)("div",{className:1===q?"content  active-content":"content",children:Object(p.jsx)(Je,{proto:s,quality:i,id:n,orders:C,price:j,getQuality:t})}),Object(p.jsx)("div",{className:2===q?"content  active-content":"content",children:Object(p.jsx)(Re,{proto:s,quality:i,id:n,orders:C,price:j,getQuality:t})})]})]})})},We=function(e){var t=Object(a.useState)([]),n=Object(u.a)(t,2),r=n[0],c=n[1],s=Object(a.useState)(!0),i=Object(u.a)(s,2),o=i[0],l=i[1],d=function(){var e=Object(v.a)(m.a.mark((function e(){var t,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=localStorage.getItem("ethPrice"),e.next=3,T();case 3:return(n=e.sent).forEach((function(e){return e.price=(e.takerAssetAmount*Math.pow(10,-18)*t).toFixed(2)})),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var t=Object(v.a)(m.a.mark((function t(){var n,a,r,c,s,i,o;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=[],t.next=3,M();case 3:r=t.sent,localStorage.setItem("ethPrice",r);case 5:return c={params:{cursor:n,user:e,order_by:"updated_at",direction:"desc"}},"https://api.x.immutable.com/v1/assets",t.next=9,I.a.get("https://api.x.immutable.com/v1/assets",c);case 9:s=t.sent,i=s.data,o=i.result,n=i.cursor,a=a.concat(o);case 14:if(n){t.next=5;break}case 15:return t.abrupt("return",a);case 16:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),j=function(){var e=Object(v.a)(m.a.mark((function e(t,n){var a,r,c,s,i,o;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=localStorage.getItem("ethPrice"),r={params:{page_size:20,buy_token_address:"0xacb3c6a43d15b907e8433077b6d38ae40936fe2c",buy_token_id:t.id,order_by:"timestamp",direction:"desc"}},"https://api.x.immutable.com/v1/orders",e.next=6,I.a.get("https://api.x.immutable.com/v1/orders",r);case 6:c=e.sent,s=c.data.result[0].amount_sold,i=c.data.result[0].buy.data.properties.image_url.split("id=")[1].split("&q=").join("-"),o=(s*Math.pow(10,-18)*a).toFixed(2),t.token_proto=i,t.buyPrice=o,t.actualPrice=b(t.token_proto,n),t.diffPrice=(+t.actualPrice-+t.buyPrice).toFixed(2),e.next=23;break;case 16:e.prev=16,e.t0=e.catch(0),console.log(e.t0),t.token_proto=void 0,t.buyPrice=void 0,t.actualPrice=void 0,t.diffPrice=void 0;case 23:return e.abrupt("return",null);case 24:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(t,n){return e.apply(this,arguments)}}(),b=function(e,t){try{return t.filter((function(t){return t.token_proto===e}))[0].price}catch(n){return void console.log(n)}},f=function(){var e=Object(v.a)(m.a.mark((function e(t,n){var a,r,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=Object(D.a)(t),e.prev=1,a.s();case 3:if((r=a.n()).done){e.next=9;break}return c=r.value,e.next=7,j(c,n);case 7:e.next=3;break;case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),a.e(e.t0);case 14:return e.prev=14,a.f(),e.finish(14);case 17:return e.abrupt("return");case 19:case"end":return e.stop()}}),e,null,[[1,11,14,17]])})));return function(t,n){return e.apply(this,arguments)}}();function x(){return(x=Object(v.a)(m.a.mark((function e(){var t,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,l(!0),e.next=4,d();case 4:return t=e.sent,e.next=7,p();case 7:return n=e.sent,console.log(t),console.log(n),e.next=12,f(n,t);case 12:c(n),l(!1),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),console.log(e.t0);case 19:case"end":return e.stop()}}),e,null,[[0,16]])})))).apply(this,arguments)}return Object(a.useEffect)((function(){!function(){x.apply(this,arguments)}()}),[]),{data:r,isLoading:o}};var Be=function(e){var t=e.data;return Object(p.jsx)("div",{children:t.token_proto&&void 0!==t.buyPrice&&Object(p.jsxs)("div",{className:"jumbotron container justify-content-center",children:[Object(p.jsx)(N,{proto:t},"".concat(t.token_proto)),Object(p.jsxs)("p",{children:["buying price : ",t.buyPrice," "]}),Object(p.jsxs)("span",{children:[" actual price : ",t.actualPrice]}),Object(p.jsxs)("span",{children:[" diff : ",t.diffPrice]})]})})},He=function(e){var t=Object(a.useState)(0),n=Object(u.a)(t,2),r=n[0],c=n[1],s=Object(a.useState)(0),i=Object(u.a)(s,2),o=i[0],l=i[1],d=Object(a.useState)(0),p=Object(u.a)(d,2),j=p[0],b=p[1],f=Object(a.useState)(!1),x=Object(u.a)(f,2),h=(x[0],x[1]);return Object(a.useEffect)((function(){!function(e){h(!0);var t=0,n=0,a=0;e.forEach((function(e){e.buyPrice&&e.actualPrice&&void 0!==e.diffPrice&&(t+=+e.buyPrice,n+=+e.actualPrice,a+=+e.diffPrice)})),c(t),l(n),b(a),h(!1)}(e)}),[]),{investment:r,values:o,roi:j}};var Qe=function(e){var t=e.assets,n=He(t),a=n.investment,r=n.values,c=n.roi,s=n.isLoading;return Object(p.jsx)("div",{children:s?Object(p.jsxs)("div",{className:"container d-flex justify-content-center",children:[Object(p.jsx)(E.a,{animation:"grow"})," "]}):Object(p.jsxs)(p.Fragment,{children:["investment : ",a,", value : ",r,", roi : ",c]})})};var Ge=function(e){var t=e.address,n=We(t),r=n.data,c=n.isLoading,s=Object(a.useState)(""),i=Object(u.a)(s,2),o=i[0],l=i[1];return Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{className:"container d-flex justify-content-center",children:Object(p.jsx)("input",{type:"text",placeholder:"Search a proto",onChange:function(e){l(e.target.value.toLowerCase())}})}),c?Object(p.jsxs)("div",{className:"container d-flex justify-content-center",children:[Object(p.jsx)(E.a,{animation:"grow"})," "]}):Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(Qe,{assets:r}),Object(p.jsx)("ul",{className:"list-unstyled",children:Object(p.jsx)("div",{className:"row",children:r.map((function(e){return e.metadata.name.toLowerCase().includes(o)&&Object(p.jsx)(Be,{data:e})}))})})]})]})};var Xe=function(){var e=Object(o.g)().id;return Object(p.jsx)("div",{className:"container",children:Object(p.jsx)(Ge,{address:e})})};n(864);s.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(i.a,{children:Object(p.jsxs)(Ne,{children:[Object(p.jsx)(Fe,{}),Object(p.jsx)(o.b,{exact:!0,path:"/godsunchained",children:Object(p.jsx)(o.a,{to:"/godsunchained/browse"})}),Object(p.jsx)(o.b,{path:"/godsunchained/browse",children:Object(p.jsx)(Ae,{})}),Object(p.jsx)(o.b,{path:"/godsunchained/account",children:Object(p.jsx)(Ce,{})}),Object(p.jsx)(o.b,{path:"/godsunchained/discounts",children:Object(p.jsx)(Le,{})}),Object(p.jsx)(o.b,{path:"/godsunchained/protos/:id",children:Object(p.jsx)(Ke,{})}),Object(p.jsx)(o.b,{path:"/godsunchained/user/:id",children:Object(p.jsx)(Xe,{})})]})})}),document.getElementById("root"))}},[[867,1,2]]]);
//# sourceMappingURL=main.f2439534.chunk.js.map