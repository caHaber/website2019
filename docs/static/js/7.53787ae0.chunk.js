(this.webpackJsonp=this.webpackJsonp||[]).push([[7],{31:function(e,t,a){"use strict";a.r(t);var n=a(33),r=a(34),o=a(39),i=a(36),l=a(38),s=a(66),c=a(46),u=a(0),m=a.n(u),f=a(73),p=a(67),d=a(68),v=a.n(d),b=a(0),g=b.useState,h=b.useLayoutEffect;function y(e,t){return getComputedStyle(e)[t]}function _(e){if(!e)return{top:0,left:0};var t=e.getBoundingClientRect(),a=e.ownerDocument;if(!a)throw new Error("Unexpectedly missing <document>.");var n=a.defaultView||a.parentWindow,r=void 0!==n.pageXOffset?n.pageXOffset:(a.documentElement||a.body.parentNode||a.body).scrollLeft,o=void 0!==n.pageYOffset?n.pageYOffset:(a.documentElement||a.body.parentNode||a.body).scrollTop;return{top:t.top+r,left:t.left+o}}function E(e){if(!e)return{top:0,left:0};var t=_(e),a={top:0,left:0},n=parseInt(y(e,"marginTop"))||0,r=parseInt(y(e,"marginLeft"))||0;if("fixed"===y(e,"position"))t=e.getBoundingClientRect();else{for(var o=e.ownerDocument,i=e.offsetParent||o.documentElement;i&&(i===o.body||i===o.documentElement);)i=i.parentNode;i&&i!==e&&1===i.nodeType&&((a=_(i)).top+=parseInt(y(i,"borderTopWidth"))||0,a.left+=parseInt(y(i,"borderLeftWidth"))||0)}return{top:t.top-a.top-n,left:t.left-a.left-r}}var O=function(e){var t=E(e.current),a=t.top,n=t.left,r=g({top:a,left:n}),o=Object(c.a)(r,2),i=o[0],l=o[1];function s(){e&&e.current&&l(E(e.current))}return h(function(){return s(),window.addEventListener("resize",s),function(){window.removeEventListener("resize",s)}},[e]),i},w=a(72),j=a.n(w),x=a(77),C=a(76),T=a(75),N=a(47),z=function(e){var t=e.tooltip,a=e.top,n=e.left;return m.a.createElement("div",{className:[j.a.Tooltip,j.a.Tooltipposition].join(" "),style:{left:"".concat(n+t.pos[0],"px"),top:"".concat(a+t.pos[1],"px")}},!!t.contents&&m.a.createElement("div",{className:j.a.Tooltipcontents},m.a.createElement("p",{className:j.a.tooltipname},t.contents.name),m.a.createElement("p",{className:j.a.tooltipdesc},"Salary: ",t.contents.val),m.a.createElement("p",{className:j.a.tooltipdesc},"Signed Using: ",t.contents.signed),m.a.createElement("p",{className:j.a.tooltipdesc},"Age: ",t.contents.age)))},S=m.a.createContext(),k=function(e,t,a){return{contents:e,pos:t}};var P=Object(p.getAllColors)(),Y=function(e){return""===e?0:Number(e.replace(/[^0-9\.]+/g,""))},I=Object(N.a)(".4s"),M=3,L=Object(T.a)().domain([0,3e7]).range([0,50]),A=function(e){var t=e.name,a=e.r,n=".9em",r=15;return a<29&&(n=".7em",r=10),m.a.createElement("text",{x:"0",y:"0",dy:"0",fontSize:n,className:j.a.namelabel},t.split(" ").map(function(e,t){return m.a.createElement("tspan",{key:t,x:0,dy:t*r},e)}))};function D(e){var t=e.x,a=e.y,n=e.r,r=e.name,o=e.age,i=e.signed,l=e.showname,s=e.mainColor,c=e.secColor,p=e.active,d=Object(u.useContext)(S),v=d.setTooltip,b=d.resetTooltip,g=n<0?0:n,h=void 0===t?0:t,y=void 0===a?0:a,_=Object(f.b)({to:{dr:g,transform:"translate(".concat(h,",").concat(y,")")}}),E=_.dr,O=_.transform;return m.a.createElement(f.a.g,{onMouseOver:function(){v({contents:{name:r,age:o,signed:i,val:I(L.invert(n+M))},pos:[20,300],active:r})},onTouchStart:function(){p===r?b():v({contents:{name:r,age:o,signed:i,val:I(L.invert(n+M))},pos:[20,300],active:r})},onMouseOut:function(){return b()},className:"circle-group",transform:O},m.a.createElement(f.a.circle,{className:j.a.node,fill:s,opacity:r===p?.8:.6,stroke:c,r:E}),l?m.a.createElement(A,{r:n,name:r}):null)}function V(e){var t=e.width,a=e.height,n=e.salaries,r=e.year,o=e.isVisible,i=e.active,l=Object(u.useState)(n),f=Object(c.a)(l,2),p=f[0],d=f[1];return Object(u.useEffect)(function(){var e={};e.mainColor=n.mainColor,e.secColor=n.secColor,e.totals=n[n.length-1],e.children=n.children.map(function(e){var t=Object(s.a)({},e);return t.r=L(t[r]),t.showname=t.r>20,t}),Object(C.a)(e.children),d(e)},[r]),o?m.a.createElement("g",{transform:"translate(".concat(t/2,",").concat(a/2,")")},p&&p.children.map(function(e,t){return m.a.createElement(D,{mainColor:p.mainColor,secColor:p.secColor,showname:e.showname,name:e.Player,key:t,x:e.x,y:e.y,r:e.r-M,age:e.age,signed:e.signed,active:i})})):null}var W=function(e){var t=e.indexOf("\\");return e.substring(0,t)},R=function(e){window.open("https://www.basketball-reference.com/contracts/".concat(e,".html"))};function U(e){var t=e.team_data,a=e.team_names,n=e.width,r=e.height,o=e.year,i=e.isVisible,l=Object(u.useState)(null),s=Object(c.a)(l,2),f=s[0],p=s[1],d=Object(u.useRef)(),v=O(d),b=v.top,g=v.left;Object(u.useEffect)(function(){var e=t.Team,n=a[e],r=P[n].mainColor,i=P[n].secondaryColor;Object(x.a)("/data/teams/".concat(t.Team,".csv"),function(e){return{Player:W(e.Player),age:e.Age,signed:e["Signed Using"],r:L(Y(e[o])),showname:L(Y(e[o]))>20,"2018-19":Y(e["2018-19"]),"2019-20":Y(e["2019-20"]),"2020-21":Y(e["2020-21"]),"2021-22":Y(e["2021-22"]),"2022-23":Y(e["2022-23"]),"2023-24":Y(e["2023-24"])}}).then(function(e){var t={children:e.slice(0,e.length-1)};t.mainColor=r,t.secColor=i,t.totals=e[e.length-1],p(t)})},[]);var h=function(){var e=Object(u.useState)(k(null,[0,0])),t=Object(c.a)(e,2),a=t[0],n=t[1];return{tooltip:a,setTooltip:n,resetTooltip:function(){return n(k(null,[0,0]))}}}();return m.a.createElement(S.Provider,{value:h},m.a.createElement("svg",{className:j.a.bballteamsvg,width:n,height:r,ref:d},m.a.createElement("text",{className:j.a.titlelabel,onClick:function(){return R(a[t.Team])},dx:"10",dy:"20"},t.Team," - ",f&&"$".concat(I(f.totals[o])," mil")),null!==f&&m.a.createElement(V,Object.assign({active:h.tooltip.active},{year:o,width:n,height:r,isVisible:i},{salaries:f}))),m.a.createElement(z,{tooltip:h.tooltip,top:b,left:g}))}var q=["2018-19","2019-20","2020-21","2021-22","2022-23","2023-24"],B=function(e){var t=e.year,a=e.setYear;return m.a.createElement("div",{className:j.a.stepcontainer},q.map(function(e,n){return m.a.createElement("h2",{key:n,className:j.a.steptitle,onClick:function(){return a(n)},style:e===t?{textDecoration:"underline",color:"lightblue"}:null},function(e){var t=e.substring(2,4),a=e.substring(e.length-2,e.length);return"'".concat(t,"-'").concat(a)}(e))}))},J=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),s=0;s<r;s++)l[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(l)))).state={year:"2018-19",index:0,t:null},a.setYear=function(e){-1!==e?(clearInterval(a.state.t),a.setState({year:q[e],index:e,t:null})):a.setState(function(e){return e.index===q.length-1?{year:q[0],index:0}:{year:q[e.index+1],index:e.index+1}})},a.pauseOrPlay=function(){if(null!==a.state.t)clearInterval(a.state.t),a.setState({t:null});else{var e=setInterval(function(){a.setYear(-1)},3e3);a.setState({t:e})}},a}return Object(l.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;Object(x.a)("/data/all_salaries.csv").then(function(t){Object(x.a)("/data/team_abrv.csv").then(function(a){var n={};a.forEach(function(e){n[e.long]=e.short}),e.setState({all_salaries:t,team_names:n})})});var t=setInterval(function(){e.setYear(-1)},3e3);this.setState({t:t})}},{key:"render",value:function(){var e=this;return m.a.createElement("div",{id:"basketball-viz"},m.a.createElement(B,{setYear:this.setYear,year:this.state.year}),m.a.createElement("p",{className:j.a.pause,onClick:this.pauseOrPlay},this.state.t?"Pause":"Play"),m.a.createElement("div",{className:j.a.vizcontainer},this.state.all_salaries&&this.state.team_names&&this.state.all_salaries.map(function(t,a){return m.a.createElement(v.a,{offset:200,style:{width:"370px",display:"inline"},partialVisibility:!0,key:a},m.a.createElement(U,{team_names:e.state.team_names,year:e.state.year,width:350,height:350,team_data:t}))})))}}]),t}(u.Component);t.default=J},72:function(e,t,a){e.exports={node:"viz_node__1B4nM",namelabel:"viz_namelabel__2fzWq",steptitle:"viz_steptitle__3sMfK",stepcontainer:"viz_stepcontainer__3M7Gg",vizcontainer:"viz_vizcontainer__13TCo",pause:"viz_pause__9rAeZ",titlelabel:"viz_titlelabel__2aYSq",Tooltip:"viz_Tooltip__a7TgW",tooltipname:"viz_tooltipname__MHq6R",Tooltipcontents:"viz_Tooltipcontents__3lDak",bballteamsvg:"viz_bballteamsvg__1Nd8U"}}}]);
//# sourceMappingURL=7.53787ae0.chunk.js.map