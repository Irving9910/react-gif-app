(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(7),i=n.n(c),r=n(2),s=n(9),o=n(0),u=function(e){var t=e.setCategories,n=Object(a.useState)(""),c=Object(r.a)(n,2),i=c[0],u=c[1];return Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault(),i.trim().length>2&&(t((function(e){return[i].concat(Object(s.a)(e))})),u(""))},children:["Search query: ",Object(o.jsx)("input",{type:"text",value:i,onChange:function(e){return function(e){u(e.target.value)}(e)}})]})},d=n(10),l=n(6),j=n.n(l),m=n(8),f=function(){var e=Object(m.a)(j.a.mark((function e(t){var n,a,c,i,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.giphy.com/v1/gifs/search?api_key=ferA1YPMbupw3SdWPvhKJhuv4jn0znVu&q=".concat(encodeURI(t),"&limit=10"),e.next=3,fetch(n);case 3:return a=e.sent,e.next=6,a.json();case 6:return c=e.sent,i=c.data,r=i.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",r);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(e){e.id;var t=e.title,n=e.url;return Object(o.jsxs)("div",{className:"card animate__animated animate__fadeInLeft animate__delay-1s",children:[Object(o.jsx)("div",{className:"img-container",children:Object(o.jsx)("img",{src:n,alt:t})}),Object(o.jsx)("p",{children:t}),Object(o.jsx)("button",{onClick:function(){var e=document.createElement("textarea");document.body.appendChild(e),e.value=n,e.select(),document.execCommand("copy"),document.body.removeChild(e),window.alert("Gif url copied to clipboard")},children:"Copy URL"})]})},p=function(e){var t=e.category,n=function(e){var t=Object(a.useState)({data:[],loading:!0}),n=Object(r.a)(t,2),c=n[0],i=n[1];return Object(a.useEffect)((function(){f(e).then((function(e){i({data:e,loading:!1})}))}),[e]),c}(t),c=n.loading,i=n.data;return Object(o.jsxs)("div",{className:"gif-grid",children:[Object(o.jsx)("h3",{className:"animate__animated animate__fadeInLeft",children:t}),Object(o.jsx)("hr",{className:"animate__animated animate__fadeInLeft"}),c&&Object(o.jsx)("img",{src:"https://media.tenor.com/images/a742721ea2075bc3956a2ff62c9bfeef/tenor.gif",alt:"loading",className:"loading-gif"}),Object(o.jsx)("div",{className:"card-grid",children:i.map((function(e){return Object(o.jsx)(b,Object(d.a)({},e),e.id)}))})]})},h=function(){var e=Object(a.useState)(["Gif"]),t=Object(r.a)(e,2),n=t[0],c=t[1];return Object(o.jsxs)("div",{className:"main-container",children:[Object(o.jsx)("h2",{children:"Fetch to GIF API"}),Object(o.jsx)(u,{setCategories:c}),Object(o.jsx)("ol",{children:n.map((function(e){return Object(o.jsx)(p,{category:e},e)}))})]})};n(17);i.a.render(Object(o.jsx)(h,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.d186ba27.chunk.js.map