(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[0],{21:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n(1),r=n.n(i),s=n(14),j=n.n(s),l=(n(21),n(4)),a=n(2),o=[{name:"First artist",bio:"some bio",picture:"pic.png",releases:[{title:"first release",description:"some description",images:["red.png","blue.png"]},{title:"second release",description:"some description",images:["green.png","yellow.png"]}]},{name:"Second artist",bio:"some other bio",picture:"pic22.png",releases:[{title:"another release title",description:"some description",images:["front.png","back.png"]}]}],b=n(32),h=function(e){return e&&"/artists/".concat(Object(b.a)(e))},d=function(e){return e&&"/releases/".concat(Object(b.a)(e))},u=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Artists"}),Object(c.jsx)("nav",{children:Object(c.jsx)("ul",{children:o.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)(l.b,{to:h(e.name),children:e.name})})}))})})]})},O=function(e){var t=e.name,n=e.bio,i=e.picture,r=e.releases;return Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:t}),Object(c.jsx)("p",{children:n}),Object(c.jsx)("p",{children:i}),r.map((function(e,t){return Object(c.jsxs)("div",{style:{border:"1px solid grey"},children:[Object(c.jsx)(l.b,{to:d(e.title),children:e.title}),Object(c.jsx)("p",{children:e.title}),Object(c.jsx)("p",{children:e.description}),e.images.map((function(e){return Object(c.jsx)("p",{children:e})}))]},t)}))]})},x=function(){var e=[];return o.forEach((function(t,n){t.releases.forEach((function(t){e.push(Object.assign(t,{author:o[n].name}))}))})),e},p=function(){return Object(c.jsx)("div",{children:Object(c.jsx)("nav",{children:Object(c.jsx)("ul",{children:x().map((function(e,t){return Object(c.jsx)("li",{children:Object(c.jsxs)(l.b,{to:d(e.title),children:[e.title,Object(c.jsx)("br",{}),e.author]})},t)}))})})})},f=function(e){var t=e.author,n=e.title,i=e.images;return Object(c.jsxs)("div",{children:[Object(c.jsxs)("h2",{children:["title ",n]}),Object(c.jsx)(l.b,{to:h(t),children:t}),i&&i.map((function(e,t){return Object(c.jsx)("div",{style:{border:"1px solid grey"},children:e},t)}))]})},m=function(){var e=[];return o.forEach((function(t,n){t.releases.forEach((function(t){e.push(Object.assign(t,{author:o[n].name}))}))})),e};function g(){return Object(c.jsx)("h2",{children:"Home"})}function v(){return Object(c.jsx)("h2",{children:"About"})}var y=function(){return Object(c.jsx)(l.a,{children:Object(c.jsxs)("div",{children:[Object(c.jsx)("nav",{children:Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:Object(c.jsx)(l.b,{to:"/",children:"Home"})}),Object(c.jsx)("li",{children:Object(c.jsx)(l.b,{to:"/about",children:"About"})}),Object(c.jsx)("li",{children:Object(c.jsx)(l.b,{to:"/artists",children:"Artists"})}),Object(c.jsx)("li",{children:Object(c.jsx)(l.b,{to:"/releases",children:"Releases"})})]})}),Object(c.jsxs)(a.c,{children:[o.map((function(e){return Object(c.jsx)(a.a,{path:h(e.name),children:Object(c.jsx)(O,{name:e.name,bio:e.bio,picture:e.picture,releases:e.releases})})})),m().map((function(e){return Object(c.jsx)(a.a,{path:d(e.title),children:Object(c.jsx)(f,{author:e.author,title:e.title,images:e.images})})})),Object(c.jsx)(a.a,{path:"/releases",children:Object(c.jsx)(p,{})}),Object(c.jsx)(a.a,{path:"/about",children:Object(c.jsx)(v,{})}),Object(c.jsx)(a.a,{path:"/artists",children:Object(c.jsx)(u,{})}),Object(c.jsx)(a.a,{path:"/",children:Object(c.jsx)(g,{})})]})]})})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,33)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),i(e),r(e),s(e)}))};j.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(y,{})}),document.getElementById("root")),w()}},[[30,1,2]]]);
//# sourceMappingURL=main.91264d96.chunk.js.map