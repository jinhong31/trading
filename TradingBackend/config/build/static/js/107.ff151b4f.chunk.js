(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[107],{1889:function(e,t,a){"use strict";a.r(t);var s=a(15),r=a(0),n=a(81),c=a.n(n),i=a(1065),o=a(772),l=a(466),d=a(564),b=a(1087),u=a(1088),p=a(1121),j=a(1122),m=a(563),h=a(1102),g=a(6);t.default=function(){var e=Object(r.useState)(null),t=Object(s.a)(e,2),a=t[0],n=t[1];Object(r.useEffect)((function(){c.a.get("/faq/data/question").then((function(e){return n(e.data)}))}),[]);return Object(g.jsxs)(r.Fragment,{children:[Object(g.jsx)(l.a,{breadCrumbTitle:"Knowledge Base",breadCrumbParent:"Pages",breadCrumbParent2:"Knowledge Base",breadCrumbParent3:"Category",breadCrumbActive:"Question"}),null!==a?Object(g.jsx)("div",{id:"knowledge-base-question",children:Object(g.jsxs)(b.a,{children:[Object(g.jsx)(u.a,{lg:"3",md:{size:5,order:1},sm:{size:12},xs:{order:2},children:Object(g.jsx)(p.a,{children:Object(g.jsxs)(j.a,{children:[Object(g.jsxs)("h6",{className:"kb-title",children:[Object(g.jsx)(i.a,{size:20,className:"mr-50"}),Object(g.jsx)("span",{children:"Related Questions"})]}),Object(g.jsx)(m.a,{className:"list-group-circle mt-1",children:a.relatedQuestions.map((function(e){return Object(g.jsx)(d.a,{className:"text-body",tag:"a",href:"/",onClick:function(e){return e.preventDefault()},children:e.question},e.id)}))})]})})}),Object(g.jsx)(u.a,{lg:"9",md:{size:7,order:2},sm:{size:12},xs:{order:1},children:Object(g.jsx)(p.a,{children:Object(g.jsxs)(j.a,{children:[Object(g.jsxs)(h.a,{className:"mb-1",children:[Object(g.jsx)(o.a,{size:21,className:"mr-25"}),Object(g.jsx)("span",{children:a.title})]}),Object(g.jsxs)("p",{className:"mb-2",children:["Last updated on ",a.lastUpdated]}),Object(g.jsx)("div",{dangerouslySetInnerHTML:{__html:a.content}})]})})})]})}):null]})}},466:function(e,t,a){"use strict";var s=a(467),r=a(1039),n=a(1027),c=a(1026),i=a(1024),o=a(1028),l=a(475),d=a(476),b=a(474),u=a(1265),p=a(1076),j=a(477),m=a(6);t.a=function(e){var t=e.breadCrumbTitle,a=e.breadCrumbParent,h=e.breadCrumbParent2,g=e.breadCrumbParent3,O=e.breadCrumbActive;return Object(m.jsxs)("div",{className:"content-header row",children:[Object(m.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2",children:Object(m.jsx)("div",{className:"row breadcrumbs-top",children:Object(m.jsxs)("div",{className:"col-12",children:[t?Object(m.jsx)("h2",{className:"content-header-title float-left mb-0",children:t}):"",Object(m.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(m.jsxs)(l.a,{children:[Object(m.jsx)(d.a,{tag:"li",children:Object(m.jsx)(s.b,{to:"/",children:"Home"})}),Object(m.jsx)(d.a,{tag:"li",className:"text-primary",children:a}),h?Object(m.jsx)(d.a,{tag:"li",className:"text-primary",children:h}):"",g?Object(m.jsx)(d.a,{tag:"li",className:"text-primary",children:g}):"",Object(m.jsx)(d.a,{tag:"li",active:!0,children:O})]})})]})})}),Object(m.jsx)("div",{className:"content-header-right text-md-right col-md-3 col-12 d-md-block d-none",children:Object(m.jsx)("div",{className:"form-group breadcrum-right dropdown",children:Object(m.jsxs)(b.a,{children:[Object(m.jsx)(u.a,{color:"primary",size:"sm",className:"btn-icon btn-round dropdown-toggle",children:Object(m.jsx)(r.a,{size:14})}),Object(m.jsxs)(p.a,{tag:"ul",right:!0,children:[Object(m.jsxs)(j.a,{tag:s.b,to:"/apps/chat",children:[Object(m.jsx)(n.a,{className:"mr-1",size:14}),Object(m.jsx)("span",{className:"align-middle",children:"Todo"})]}),Object(m.jsxs)(j.a,{tag:s.b,to:"/apps/chat",children:[Object(m.jsx)(c.a,{className:"mr-1",size:14}),Object(m.jsx)("span",{className:"align-middle",children:"Chat"})]}),Object(m.jsxs)(j.a,{tag:s.b,to:"/apps/email",children:[Object(m.jsx)(i.a,{className:"mr-1",size:14}),Object(m.jsx)("span",{className:"align-middle",children:"Email"})]}),Object(m.jsxs)(j.a,{tag:s.b,to:"/apps/calendar",children:[Object(m.jsx)(o.a,{className:"mr-1",size:14}),Object(m.jsx)("span",{className:"align-middle",children:"Calendar"})]})]})]})})})]})}},468:function(e,t,a){"use strict";var s=a(14),r=a(0),n=a.n(r),c=a(5),i=a.n(c),o=a(470),l={children:i.a.node},d=function(e){return n.a.createElement(o.a,Object(s.a)({group:!0},e))};d.propTypes=l,t.a=d},474:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var s=a(465),r=a(14),n=a(120),c=a(119),i=a(0),o=a.n(i),l=a(5),d=a.n(l),b=a(468),u=a(80);function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}var j=["defaultOpen"],m=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={isOpen:t.defaultOpen||!1},a.toggle=a.toggle.bind(Object(n.a)(a)),a}Object(c.a)(t,e);var a=t.prototype;return a.toggle=function(){this.setState({isOpen:!this.state.isOpen})},a.render=function(){return o.a.createElement(b.a,Object(r.a)({isOpen:this.state.isOpen,toggle:this.toggle},Object(u.omit)(this.props,j)))},t}(i.Component);m.propTypes=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){Object(s.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({defaultOpen:d.a.bool},b.a.propTypes)},475:function(e,t,a){"use strict";var s=a(14),r=a(20),n=a(0),c=a.n(n),i=a(5),o=a.n(i),l=a(58),d=a.n(l),b=a(80),u={tag:b.tagPropType,listTag:b.tagPropType,className:o.a.string,listClassName:o.a.string,cssModule:o.a.object,children:o.a.node,"aria-label":o.a.string},p=function(e){var t=e.className,a=e.listClassName,n=e.cssModule,i=e.children,o=e.tag,l=e.listTag,u=e["aria-label"],p=Object(r.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),j=Object(b.mapToCssModules)(d()(t),n),m=Object(b.mapToCssModules)(d()("breadcrumb",a),n);return c.a.createElement(o,Object(s.a)({},p,{className:j,"aria-label":u}),c.a.createElement(l,{className:m},i))};p.propTypes=u,p.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},t.a=p},476:function(e,t,a){"use strict";var s=a(14),r=a(20),n=a(0),c=a.n(n),i=a(5),o=a.n(i),l=a(58),d=a.n(l),b=a(80),u={tag:b.tagPropType,active:o.a.bool,className:o.a.string,cssModule:o.a.object},p=function(e){var t=e.className,a=e.cssModule,n=e.active,i=e.tag,o=Object(r.a)(e,["className","cssModule","active","tag"]),l=Object(b.mapToCssModules)(d()(t,!!n&&"active","breadcrumb-item"),a);return c.a.createElement(i,Object(s.a)({},o,{className:l,"aria-current":n?"page":void 0}))};p.propTypes=u,p.defaultProps={tag:"li"},t.a=p},477:function(e,t,a){"use strict";var s=a(14),r=a(20),n=a(120),c=a(119),i=a(0),o=a.n(i),l=a(5),d=a.n(l),b=a(58),u=a.n(b),p=a(473),j=a(80),m={children:d.a.node,active:d.a.bool,disabled:d.a.bool,divider:d.a.bool,tag:j.tagPropType,header:d.a.bool,onClick:d.a.func,className:d.a.string,cssModule:d.a.object,toggle:d.a.bool},h=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Object(n.a)(a)),a.getTabIndex=a.getTabIndex.bind(Object(n.a)(a)),a}Object(c.a)(t,e);var a=t.prototype;return a.onClick=function(e){this.props.disabled||this.props.header||this.props.divider?e.preventDefault():(this.props.onClick&&this.props.onClick(e),this.props.toggle&&this.context.toggle(e))},a.getTabIndex=function(){return this.props.disabled||this.props.header||this.props.divider?"-1":"0"},a.render=function(){var e=this.getTabIndex(),t=e>-1?"menuitem":void 0,a=Object(j.omit)(this.props,["toggle"]),n=a.className,c=a.cssModule,i=a.divider,l=a.tag,d=a.header,b=a.active,p=Object(r.a)(a,["className","cssModule","divider","tag","header","active"]),m=Object(j.mapToCssModules)(u()(n,{disabled:p.disabled,"dropdown-item":!i&&!d,active:b,"dropdown-header":d,"dropdown-divider":i}),c);return"button"===l&&(d?l="h6":i?l="div":p.href&&(l="a")),o.a.createElement(l,Object(s.a)({type:"button"===l&&(p.onClick||this.props.toggle)?"button":void 0},p,{tabIndex:e,role:t,className:m,onClick:this.onClick}))},t}(o.a.Component);h.propTypes=m,h.defaultProps={tag:"button",toggle:!0},h.contextType=p.a,t.a=h},563:function(e,t,a){"use strict";var s=a(14),r=a(20),n=a(0),c=a.n(n),i=a(5),o=a.n(i),l=a(58),d=a.n(l),b=a(80),u={tag:b.tagPropType,flush:o.a.bool,className:o.a.string,cssModule:o.a.object,horizontal:o.a.oneOfType([o.a.bool,o.a.string])},p=function(e){var t=e.className,a=e.cssModule,n=e.tag,i=e.flush,o=e.horizontal,l=Object(r.a)(e,["className","cssModule","tag","flush","horizontal"]),u=Object(b.mapToCssModules)(d()(t,"list-group",i?"list-group-flush":function(e){return!1!==e&&(!0===e||"xs"===e?"list-group-horizontal":"list-group-horizontal-"+e)}(o)),a);return c.a.createElement(n,Object(s.a)({},l,{className:u}))};p.propTypes=u,p.defaultProps={tag:"ul",horizontal:!1},t.a=p},564:function(e,t,a){"use strict";var s=a(14),r=a(20),n=a(0),c=a.n(n),i=a(5),o=a.n(i),l=a(58),d=a.n(l),b=a(80),u={tag:b.tagPropType,active:o.a.bool,disabled:o.a.bool,color:o.a.string,action:o.a.bool,className:o.a.any,cssModule:o.a.object},p=function(e){e.preventDefault()},j=function(e){var t=e.className,a=e.cssModule,n=e.tag,i=e.active,o=e.disabled,l=e.action,u=e.color,j=Object(r.a)(e,["className","cssModule","tag","active","disabled","action","color"]),m=Object(b.mapToCssModules)(d()(t,!!i&&"active",!!o&&"disabled",!!l&&"list-group-item-action",!!u&&"list-group-item-"+u,"list-group-item"),a);return o&&(j.onClick=p),c.a.createElement(n,Object(s.a)({},j,{className:m}))};j.propTypes=u,j.defaultProps={tag:"li"},t.a=j},772:function(e,t,a){"use strict";var s=a(0),r=a.n(s),n=a(5),c=a.n(n);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(e[s]=a[s])}return e},i.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,s,r=function(e,t){if(null==e)return{};var a,s,r={},n=Object.keys(e);for(s=0;s<n.length;s++)a=n[s],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(s=0;s<n.length;s++)a=n[s],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=Object(s.forwardRef)((function(e,t){var a=e.color,s=void 0===a?"currentColor":a,n=e.size,c=void 0===n?24:n,l=o(e,["color","size"]);return r.a.createElement("svg",i({ref:t,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),r.a.createElement("rect",{x:"5",y:"2",width:"14",height:"20",rx:"2",ry:"2"}),r.a.createElement("line",{x1:"12",y1:"18",x2:"12.01",y2:"18"}))}));l.propTypes={color:c.a.string,size:c.a.oneOfType([c.a.string,c.a.number])},l.displayName="Smartphone",t.a=l}}]);
//# sourceMappingURL=107.ff151b4f.chunk.js.map