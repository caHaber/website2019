(this.webpackJsonp=this.webpackJsonp||[]).push([[6],{31:function(e,t,a){"use strict";a.r(t);var n=a(34),l=a(35),r=a(39),i=a(37),o=a(40),s=a(69),c=a(48),m=a(0),u=a.n(m),d=a(78),p=a(70),f=a(71),h=a.n(f),v=a(12),g=a(0),b=g.useState,y=g.useLayoutEffect;function E(e,t){return getComputedStyle(e)[t]}function _(e){if(!e)return{top:0,left:0};var t=e.getBoundingClientRect(),a=e.ownerDocument;if(!a)throw new Error("Unexpectedly missing <document>.");var n=a.defaultView||a.parentWindow,l=void 0!==n.pageXOffset?n.pageXOffset:(a.documentElement||a.body.parentNode||a.body).scrollLeft,r=void 0!==n.pageYOffset?n.pageYOffset:(a.documentElement||a.body.parentNode||a.body).scrollTop;return{top:t.top+l,left:t.left+r}}function O(e){if(!e)return{top:0,left:0};var t=_(e),a={top:0,left:0},n=parseInt(E(e,"marginTop"))||0,l=parseInt(E(e,"marginLeft"))||0;if("fixed"===E(e,"position"))t=e.getBoundingClientRect();else{for(var r=e.ownerDocument,i=e.offsetParent||r.documentElement;i&&(i===r.body||i===r.documentElement);)i=i.parentNode;i&&i!==e&&1===i.nodeType&&((a=_(i)).top+=parseInt(E(i,"borderTopWidth"))||0,a.left+=parseInt(E(i,"borderLeftWidth"))||0)}return{top:t.top-a.top-n,left:t.left-a.left-l}}var x=function(e){var t=O(e.current),a=t.top,n=t.left,l=b({top:a,left:n}),r=Object(c.a)(l,2),i=r[0],o=r[1];function s(){e&&e.current&&o(O(e.current))}return y(function(){return s(),window.addEventListener("resize",s),function(){window.removeEventListener("resize",s)}},[e]),i},j=a(75),w=a.n(j),N=a(83),C=a(82),z=a(80),S=a(49),T=a(76),k=a.n(T),P=(a(77),a(81)),I=function(e){var t=e.tooltip,a=(e.top,e.left,Object(m.useRef)()),n=Object(m.useState)({}),l=Object(c.a)(n,2),r=l[0],i=l[1];return Object(m.useLayoutEffect)(function(){i(a.current.getBoundingClientRect().toJSON())},[a.current,t.contents]),u.a.createElement(u.a.Fragment,null,!!t.contents&&u.a.createElement("rect",{className:w.a.tooltiprect,y:285,width:r.width,height:150,fill:"white",opacity:.7}),u.a.createElement("text",{ref:a,className:[w.a.Tooltip,w.a.Tooltipposition].join(" "),x:"0",y:"300",dy:"0"},!!t.contents&&u.a.createElement(u.a.Fragment,null,u.a.createElement("tspan",{x:20,dy:0,className:w.a.tooltipname},t.contents.name),u.a.createElement("tspan",{x:20,dy:15,className:w.a.tooltipdesc},"Salary: ",t.contents.val),u.a.createElement("tspan",{x:20,dy:15,className:w.a.tooltipdesc},"Signed Using: ",t.contents.signed),u.a.createElement("tspan",{x:20,dy:15,className:w.a.tooltipdesc},"Age: ",t.contents.age))))},A=u.a.createContext(),M=function(e,t,a){return{contents:e,pos:t}};var R=Object(p.getAllColors)(),V=function(e){return""===e?0:Number(e.replace(/[^0-9\.]+/g,""))},B=Object(S.a)(".4s"),Y=3,L=Object(z.a)().domain([0,3e7]).range([0,50]),W=function(e){var t=e.name,a=e.r,n=".9em",l=15;return a<29&&(n=".7em",l=10),u.a.createElement("text",{x:"0",y:"0",dy:"0",fontSize:n,className:w.a.namelabel},t.split(" ").map(function(e,t){return u.a.createElement("tspan",{key:t,x:0,dy:t*l},e)}))};function D(e){var t=e.x,a=e.y,n=e.r,l=e.name,r=e.age,i=e.signed,o=e.showname,s=e.mainColor,c=e.secColor,p=e.active,f=Object(m.useContext)(A),h=f.setTooltip,v=f.resetTooltip,g=n<0?0:n,b=void 0===t?0:t,y=void 0===a?0:a,E=Object(d.b)({to:{dr:g,transform:"translate(".concat(b,",").concat(y,")")}}),_=E.dr,O=E.transform;return u.a.createElement(d.a.g,{onMouseOver:function(){h({contents:{name:l,age:r,signed:i,val:B(L.invert(n+Y))},pos:[20,300],active:l})},onTouchStart:function(){p===l?v():h({contents:{name:l,age:r,signed:i,val:B(L.invert(n+Y))},pos:[20,300],active:l})},onMouseOut:function(){return v()},className:"circle-group",transform:O},u.a.createElement(d.a.circle,{className:w.a.node,fill:s,opacity:l===p?.8:.6,stroke:c,r:_}),o?u.a.createElement(W,{r:n,name:l}):null)}function H(e){var t=e.width,a=e.height,n=e.salaries,l=e.year,r=e.isVisible,i=e.active,o=Object(m.useState)(n),d=Object(c.a)(o,2),p=d[0],f=d[1];return Object(m.useEffect)(function(){var e={};e.mainColor=n.mainColor,e.secColor=n.secColor,e.totals=n[n.length-1],e.children=n.children.map(function(e){var t=Object(s.a)({},e);return t.r=L(t[l]),t.showname=t.r>20,t}),console.log(e,"ERROR"),Object(C.a)(e.children),f(e)},[l]),r?u.a.createElement("g",{transform:"translate(".concat(t/2,",").concat(a/2,")")},p&&p.children.map(function(e,t){return u.a.createElement(D,{mainColor:p.mainColor,secColor:p.secColor,showname:e.showname,name:e.Player,key:t,x:e.x,y:e.y,r:e.r-Y,age:e.age,signed:e.signed,active:i})})):null}var U=function(e){var t=e.indexOf("\\");return e.substring(0,t)},q=function(e){window.open("https://www.basketball-reference.com/contracts/".concat(e,".html"))};function F(e){var t=e.team_data,a=e.team_names,n=e.width,l=e.height,r=e.year,i=e.isVisible,o=Object(m.useState)(null),s=Object(c.a)(o,2),d=s[0],p=s[1],f=Object(m.useRef)(),h=x(f),v=h.top,g=h.left;Object(m.useEffect)(function(){var e=t.Team,n=a[e],l=R[n].mainColor,i=R[n].secondaryColor;Object(N.a)("/data/teams/".concat(t.Team,".csv"),function(e){return{Player:U(e.Player),age:e.Age,signed:e["Signed Using"],r:L(V(e[r])),showname:L(V(e[r]))>20,"2018-19":V(e["2018-19"]),"2019-20":V(e["2019-20"]),"2020-21":V(e["2020-21"]),"2021-22":V(e["2021-22"]),"2022-23":V(e["2022-23"]),"2023-24":V(e["2023-24"])}}).then(function(e){var t={children:e.slice(0,e.length-1)};t.mainColor=l,t.secColor=i,t.totals=e[e.length-1],p(t)})},[]);var b=function(){var e=Object(m.useState)(M(null,[0,0])),t=Object(c.a)(e,2),a=t[0],n=t[1];return{tooltip:a,setTooltip:n,resetTooltip:function(){return n(M(null,[0,0]))}}}();return u.a.createElement(A.Provider,{value:b},u.a.createElement("svg",{className:w.a.bballteamsvg,width:n,height:l,ref:f},u.a.createElement("text",{className:w.a.titlelabel,onClick:function(){return q(a[t.Team])},dx:"185",dy:"20"},t.Team," - ",d&&"$".concat(B(d.totals[r]))),null!==d&&u.a.createElement(H,Object.assign({active:b.tooltip.active},{year:r,width:n,height:l,isVisible:i},{salaries:d})),u.a.createElement(I,{tooltip:b.tooltip,top:v,left:g})))}var J=["2018-19","2019-20","2020-21","2021-22","2022-23","2023-24"],K=function(e){var t=e.substring(2,4),a=e.substring(e.length-2,e.length);return"'".concat(t,"-'").concat(a)},X=function(e){var t=e.next,a=e.pauseOrPlay,n=Object(m.useState)(Object(P.a)(Math.random())),l=Object(c.a)(n,2),r=l[0],i=l[1];return Object(m.useEffect)(function(){var e=setInterval(function(){i(Object(P.a)(Math.random()))},300);return function(){return clearInterval(e)}},[]),u.a.createElement("h2",{style:{color:r},className:"enter-button",onClick:function(){t(),a()}}," Enter Visualization ")},G=function(e){var t=e.year,a=e.setYear;return u.a.createElement("div",{className:w.a.stepcontainer},J.map(function(e,n){return u.a.createElement("h2",{key:n,className:w.a.steptitle,onClick:function(){return a(n)},style:e===t?{textDecoration:"underline",color:"lightblue"}:null},K(e))}))},Q=function(e){var t=e.next,a=e.pauseOrPlay,n=e.team_data,l=e.team_names,r=Object(m.useState)("2018-19"),i=Object(c.a)(r,2),o=i[0],s=i[1];return u.a.createElement("div",{className:"container-fluid",id:"landing"},u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-md-12"},u.a.createElement("h2",{className:"landing-title"}," Welcome to the NBA salaries visualization "),u.a.createElement("br",null)),u.a.createElement("div",{className:"col-md-12 col-sm-12"},u.a.createElement("ol",{style:{maxWidth:"450px",margin:"auto",textAlign:"left"}},u.a.createElement("li",null,"Each circle is a contracted player sized by the amount of that year."),u.a.createElement("li",null,"Hover to see player info. (Tap on mobile.)"),u.a.createElement("li",null,"Click the team title open a new tab to the data source."),u.a.createElement("li",null,"Select a NBA season at the top of the visualizations to see salaries for that year. (Or press the play/pause button on the main page to cycle through each season.)"),u.a.createElement("b",null,u.a.createElement("li",null,"Hit `Enter Visualization` at the bottom of the page to see all NBA teams!"))),u.a.createElement("br",null),u.a.createElement("hr",{width:"50%"}),u.a.createElement("br",null),u.a.createElement("h3",null," Example: ")),u.a.createElement("div",{style:{padding:"0px",marginTop:"75px"},className:"col-md-12 col-sm-12"},u.a.createElement("div",{style:{width:"370px",display:"inline"}},u.a.createElement("div",{className:w.a.stepcontainerlanding},J.slice(0,2).map(function(e,t){return u.a.createElement("h2",{key:t,className:w.a.steptitlelanding,onClick:function(){return s(J[t])},style:e===o?{textDecoration:"underline",color:"lightblue"}:null},K(e))})),u.a.createElement(F,{team_data:n,team_names:l,width:350,year:o,height:350,isVisible:!0}))),u.a.createElement(X,{next:t,pauseOrPlay:a}),u.a.createElement("p",{className:"note"},u.a.createElement("em",null,"*Salaries scraped on june 15. Data updates coming shortly.")," ")),u.a.createElement("p",{style:{position:"fixed",bottom:"5px",right:"15px"}},u.a.createElement("a",{style:{color:"lightblue"},href:"https://github.com/caHaber/website2019/blob/master/app/src/pages/Basketball.js"},"Code")))},Z=function(e){function t(){var e,a;Object(n.a)(this,t);for(var l=arguments.length,o=new Array(l),s=0;s<l;s++)o[s]=arguments[s];return(a=Object(r.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(o)))).state={year:"2018-19",index:0,t:null,landing:!1},a.setYear=function(e){-1!==e?(clearInterval(a.state.t),a.setState({year:J[e],index:e,t:null})):a.setState(function(e){return e.index===J.length-1?{year:J[0],index:0}:{year:J[e.index+1],index:e.index+1}})},a.pauseOrPlay=function(){if(null!==a.state.t)clearInterval(a.state.t),a.setState({t:null});else{var e=setInterval(function(){a.setYear(-1)},3e3);a.setState({t:e})}},a}return Object(o.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;Object(N.a)("/data/all_salaries.csv").then(function(t){Object(N.a)("/data/team_abrv.csv").then(function(a){var n={};a.forEach(function(e){n[e.long]=e.short}),e.setState({all_salaries:t,team_names:n})})})}},{key:"render",value:function(){var e=this;return u.a.createElement("div",{id:"basketball-viz"},this.state.landing?u.a.createElement(u.a.Fragment,null,u.a.createElement(G,{setYear:this.setYear,year:this.state.year}),u.a.createElement("p",{className:w.a.pause,onClick:this.pauseOrPlay},this.state.t?"Pause":"Play"),u.a.createElement("div",{className:w.a.vizcontainer},this.state.all_salaries&&this.state.team_names&&this.state.all_salaries.map(function(t,a){return u.a.createElement(h.a,{offset:200,style:{width:"370px",display:"inline"},partialVisibility:!0,key:a},u.a.createElement(F,{team_names:e.state.team_names,year:e.state.year,width:350,height:350,team_data:t}))}))):this.state.all_salaries&&this.state.team_names&&u.a.createElement(Q,{team_names:this.state.team_names,team_data:this.state.all_salaries[1],pauseOrPlay:this.pauseOrPlay,next:function(){return e.setState({landing:!0})}}),u.a.createElement(v.b,{to:"/"}," ",u.a.createElement("img",{className:"website-logo",src:k.a})," "))}}]),t}(m.Component);t.default=Z},75:function(e,t,a){e.exports={node:"viz_node__1B4nM",namelabel:"viz_namelabel__2fzWq",steptitle:"viz_steptitle__3sMfK",stepcontainer:"viz_stepcontainer__3M7Gg",stepcontainerlanding:"viz_stepcontainerlanding__1QP07",steptitlelanding:"viz_steptitlelanding__1cIKt",vizcontainer:"viz_vizcontainer__13TCo",pause:"viz_pause__9rAeZ",titlelabel:"viz_titlelabel__2aYSq",Tooltip:"viz_Tooltip__a7TgW",tooltiprect:"viz_tooltiprect__xmc6V",tooltipname:"viz_tooltipname__MHq6R",bballteamsvg:"viz_bballteamsvg__1Nd8U"}},76:function(e,t,a){e.exports=a.p+"static/media/logo-dark.a4b7ce2a.svg"},77:function(e,t,a){}}]);
//# sourceMappingURL=6.a6e5467a.chunk.js.map