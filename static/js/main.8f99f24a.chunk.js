(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[0],{23:function(e,t,c){},32:function(e,t,c){"use strict";c.r(t);var n=c(0),i=c(1),r=c.n(i),s=c(15),j=c.n(s),a=(c(23),c(14)),l=c(7),o=c(2),b=[{name:"First artist",bio:"some bio",picture:"pic.png",releases:[{title:"first release",description:"some description",images:["red.png","blue.png"]},{title:"second release",description:"some description",images:["green.png","yellow.png"]}]},{name:"Second artist",bio:"some other bio",picture:"pic22.png",releases:[{title:"another release title",description:"some description",images:["front.png","back.png"]}]}],h=function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:"Artists"}),Object(n.jsx)("nav",{children:Object(n.jsx)("ul",{children:b.map((function(e){return Object(n.jsx)("li",{children:Object(n.jsx)(l.b,{to:(t=e.name,t&&"/artists/".concat(Object(a.a)(t))),children:e.name})});var t}))})})]})},d=function(e){var t=e.name,c=e.bio,i=e.picture,r=e.releases;return Object(n.jsxs)("div",{children:[Object(n.jsx)("h2",{children:t}),Object(n.jsx)("p",{children:c}),Object(n.jsx)("p",{children:i}),r.map((function(e,t){return Object(n.jsxs)("div",{style:{border:"1px solid grey"},children:[Object(n.jsx)("p",{children:e.title}),Object(n.jsx)("p",{children:e.description}),e.images.map((function(e){return Object(n.jsx)("p",{children:e})}))]},t)}))]})},u=function(){var e=[];return b.forEach((function(t,c){t.releases.forEach((function(t){e.push(Object.assign(t,{author:b[c].name}))}))})),e},O=function(){return Object(n.jsx)("div",{children:Object(n.jsx)("nav",{children:Object(n.jsx)("ul",{children:u().map((function(e,t){return Object(n.jsx)("li",{children:Object(n.jsxs)(l.b,{to:(c=e.title,c&&"/releases/".concat(Object(a.a)(c))),children:[e.title,Object(n.jsx)("br",{}),e.author]})},t);var c}))})})})},x=function(e){var t=e.author,c=e.title,i=e.images;return Object(n.jsxs)("div",{children:[Object(n.jsxs)("h2",{children:["title ",c]}),Object(n.jsx)("p",{children:t}),i&&i.map((function(e,t){return Object(n.jsx)("div",{style:{border:"1px solid grey"},children:e},t)}))]})},p=function(){var e=[];return b.forEach((function(t,c){t.releases.forEach((function(t){e.push(Object.assign(t,{author:b[c].name}))}))})),e};function m(){return Object(n.jsx)("h2",{children:"Home"})}function f(){return Object(n.jsx)("h2",{children:"About"})}var g=function(){return Object(n.jsx)(l.a,{children:Object(n.jsxs)("div",{children:[Object(n.jsx)("nav",{children:Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:Object(n.jsx)(l.b,{to:"/",children:"Home"})}),Object(n.jsx)("li",{children:Object(n.jsx)(l.b,{to:"/about",children:"About"})}),Object(n.jsx)("li",{children:Object(n.jsx)(l.b,{to:"/artists",children:"Artists"})}),Object(n.jsx)("li",{children:Object(n.jsx)(l.b,{to:"/releases",children:"Releases"})})]})}),Object(n.jsxs)(o.c,{children:[b.map((function(e){return Object(n.jsx)(o.a,{path:(t=e.name,t&&"/artists/".concat(Object(a.a)(t))),children:Object(n.jsx)(d,{name:e.name,bio:e.bio,picture:e.picture,releases:e.releases})});var t})),p().map((function(e){return Object(n.jsx)(o.a,{path:(t=e.title,t&&"/releases/".concat(Object(a.a)(t))),children:Object(n.jsx)(x,{author:e.author,title:e.title,images:e.images})});var t})),Object(n.jsx)(o.a,{path:"/releases",children:Object(n.jsx)(O,{})}),Object(n.jsx)(o.a,{path:"/about",children:Object(n.jsx)(f,{})}),Object(n.jsx)(o.a,{path:"/artists",children:Object(n.jsx)(h,{})}),Object(n.jsx)(o.a,{path:"/",children:Object(n.jsx)(m,{})})]})]})})},v=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,33)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),n(e),i(e),r(e),s(e)}))};j.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(g,{})}),document.getElementById("root")),v()}},[[32,1,2]]]);
//# sourceMappingURL=main.8f99f24a.chunk.js.map