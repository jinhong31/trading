(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[74],{2020:function(e,t,a){"use strict";a.r(t);var c=a(0),s=a(466),r=a(1),n=a(15),o=a(58),i=a.n(o),l=a(600),d=a(698),j=a(1009),b=a(1037),p=a(745),u=a(1121),O=a(472),h=a(1102),m=a(6),g=function(e){var t=e.title,a=e.actions,s=e.children,o=e.collapseIcon,g=e.reloadIcon,x=e.removeIcon,f=e.endReload,v=Object(c.useState)(!1),y=Object(n.a)(v,2),N=y[0],C=y[1],T=Object(c.useState)(!0),w=Object(n.a)(T,2),k=w[0],P=w[1],M=Object(c.useState)(!0),z=Object(n.a)(M,2),E=z[0],R=z[1],I={collapse:o||d.a,remove:x||j.a,reload:g||b.a},A=function(e){switch(e){case"collapse":return P(!k);case"remove":return R(!1);case"reload":return C(!0)}},S=function(){C(!1)};Object(c.useEffect)((function(){N&&f(S)}));var D="collapse"===a||a.includes("collapse")?p.a:c.Fragment,F="reload"===a||a.includes("reload")?l.a:c.Fragment;return Object(m.jsx)(F,Object(r.a)(Object(r.a)({},"reload"===a||a.includes("reload")?{blocking:N}:{}),{},{children:Object(m.jsxs)(u.a,{className:i()("card-action",{"d-none":!E}),children:[Object(m.jsxs)(O.a,{children:[Object(m.jsx)(h.a,{tag:"h4",children:t}),Object(m.jsx)("div",{className:"action-icons",children:function(){if(Array.isArray(a))return a.map((function(e,t){var c=I[e];return Object(m.jsx)(c,{className:i()("cursor-pointer",{"mr-50":t<a.length-1}),size:15,onClick:function(){return A(e)}},t)}));var e=I[a];return Object(m.jsx)(e,{className:"cursor-pointer",size:15,onClick:function(){return A(a)}})}()})]}),Object(m.jsx)(D,Object(r.a)(Object(r.a)({},"collapse"===a||a.includes("collapse")?{isOpen:k}:{}),{},{children:s}))]})}))},x=a(1087),f=a(1088),v=a(1122),y=a(1123),N=a(1124);t.default=function(){return Object(m.jsxs)(c.Fragment,{children:[Object(m.jsx)(s.a,{breadCrumbTitle:"Card Actions",breadCrumbParent:"Card",breadCrumbActive:"Card Actions"}),Object(m.jsx)(x.a,{children:Object(m.jsx)(f.a,{sm:"12",children:Object(m.jsx)(g,{title:"Card Actions",actions:["collapse","reload","remove"],endReload:function(e){setTimeout((function(){return e()}),2e3)},children:Object(m.jsx)(v.a,{className:"pt-0",children:Object(m.jsxs)(y.a,{responsive:!0,bordered:!0,children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{children:"Action"}),Object(m.jsx)("th",{children:"Icon"}),Object(m.jsx)("th",{children:"Details"})]})}),Object(m.jsxs)("tbody",{children:[Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:"Collapse"}),Object(m.jsx)("td",{className:"text-center",children:Object(m.jsx)(d.a,{className:"collapse-icon",size:15})}),Object(m.jsx)("td",{children:" Collapse card content using collapse action."})]}),Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:"Refresh Content"}),Object(m.jsx)("td",{className:"text-center",children:Object(m.jsx)(b.a,{size:15})}),Object(m.jsx)("td",{children:"Refresh your card content using refresh action."})]}),Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:"Remove Card"}),Object(m.jsx)("td",{className:"text-center",children:Object(m.jsx)(j.a,{size:15})}),Object(m.jsx)("td",{children:" Remove card from page using remove card action"})]})]})]})})})})}),Object(m.jsxs)(x.a,{children:[Object(m.jsx)(f.a,{md:"6",sm:"12",children:Object(m.jsx)(g,{title:"Collapse",actions:"collapse",children:Object(m.jsxs)(v.a,{className:"pt-0",children:[Object(m.jsxs)(N.a,{children:["You can create a collapsible content by using our",Object(m.jsx)("code",{children:"CardAction"})," component and by passing prop",Object(m.jsx)("code",{children:"actions='collapse'"}),"."]}),Object(m.jsxs)(N.a,{className:"mb-0",children:["Click on ",Object(m.jsx)(d.a,{size:15})," to see card collapse in action"]})]})})}),Object(m.jsx)(f.a,{md:"6",sm:"12",children:Object(m.jsx)(g,{title:"Reload",actions:"reload",endReload:function(e){setTimeout((function(){return e()}),2e3)},children:Object(m.jsxs)(v.a,{className:"pt-0",children:[Object(m.jsxs)(N.a,{children:["To create a re-loadable card pass prop",Object(m.jsx)("code",{children:"actions='reload'"})," and pass prop ",Object(m.jsx)("code",{children:"endReload"}),"to end the loading."]}),Object(m.jsxs)(N.a,{className:"mb-0",children:["Click on ",Object(m.jsx)(b.a,{size:15})," to see card refresh in action"]})]})})}),Object(m.jsx)(f.a,{md:"6",sm:"12",children:Object(m.jsx)(g,{title:"Remove",actions:"remove",children:Object(m.jsxs)(v.a,{className:"pt-0",children:[Object(m.jsxs)(N.a,{children:["You can add refresh content action to card by adding class",Object(m.jsx)("code",{children:".card-reload"})," with your card tag, and add conditional spinner into card body to show when card is refreshing."]}),Object(m.jsxs)(N.a,{className:"mb-0",children:["Click on ",Object(m.jsx)(b.a,{size:15})," to see card refresh in action"]})]})})})]})]})}},466:function(e,t,a){"use strict";var c=a(467),s=a(1039),r=a(1027),n=a(1026),o=a(1024),i=a(1028),l=a(475),d=a(476),j=a(474),b=a(1265),p=a(1076),u=a(477),O=a(6);t.a=function(e){var t=e.breadCrumbTitle,a=e.breadCrumbParent,h=e.breadCrumbParent2,m=e.breadCrumbParent3,g=e.breadCrumbActive;return Object(O.jsxs)("div",{className:"content-header row",children:[Object(O.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2",children:Object(O.jsx)("div",{className:"row breadcrumbs-top",children:Object(O.jsxs)("div",{className:"col-12",children:[t?Object(O.jsx)("h2",{className:"content-header-title float-left mb-0",children:t}):"",Object(O.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(O.jsxs)(l.a,{children:[Object(O.jsx)(d.a,{tag:"li",children:Object(O.jsx)(c.b,{to:"/",children:"Home"})}),Object(O.jsx)(d.a,{tag:"li",className:"text-primary",children:a}),h?Object(O.jsx)(d.a,{tag:"li",className:"text-primary",children:h}):"",m?Object(O.jsx)(d.a,{tag:"li",className:"text-primary",children:m}):"",Object(O.jsx)(d.a,{tag:"li",active:!0,children:g})]})})]})})}),Object(O.jsx)("div",{className:"content-header-right text-md-right col-md-3 col-12 d-md-block d-none",children:Object(O.jsx)("div",{className:"form-group breadcrum-right dropdown",children:Object(O.jsxs)(j.a,{children:[Object(O.jsx)(b.a,{color:"primary",size:"sm",className:"btn-icon btn-round dropdown-toggle",children:Object(O.jsx)(s.a,{size:14})}),Object(O.jsxs)(p.a,{tag:"ul",right:!0,children:[Object(O.jsxs)(u.a,{tag:c.b,to:"/apps/chat",children:[Object(O.jsx)(r.a,{className:"mr-1",size:14}),Object(O.jsx)("span",{className:"align-middle",children:"Todo"})]}),Object(O.jsxs)(u.a,{tag:c.b,to:"/apps/chat",children:[Object(O.jsx)(n.a,{className:"mr-1",size:14}),Object(O.jsx)("span",{className:"align-middle",children:"Chat"})]}),Object(O.jsxs)(u.a,{tag:c.b,to:"/apps/email",children:[Object(O.jsx)(o.a,{className:"mr-1",size:14}),Object(O.jsx)("span",{className:"align-middle",children:"Email"})]}),Object(O.jsxs)(u.a,{tag:c.b,to:"/apps/calendar",children:[Object(O.jsx)(i.a,{className:"mr-1",size:14}),Object(O.jsx)("span",{className:"align-middle",children:"Calendar"})]})]})]})})})]})}},468:function(e,t,a){"use strict";var c=a(14),s=a(0),r=a.n(s),n=a(5),o=a.n(n),i=a(470),l={children:o.a.node},d=function(e){return r.a.createElement(i.a,Object(c.a)({group:!0},e))};d.propTypes=l,t.a=d},472:function(e,t,a){"use strict";var c=a(14),s=a(20),r=a(0),n=a.n(r),o=a(5),i=a.n(o),l=a(58),d=a.n(l),j=a(80),b={tag:j.tagPropType,className:i.a.string,cssModule:i.a.object},p=function(e){var t=e.className,a=e.cssModule,r=e.tag,o=Object(s.a)(e,["className","cssModule","tag"]),i=Object(j.mapToCssModules)(d()(t,"card-header"),a);return n.a.createElement(r,Object(c.a)({},o,{className:i}))};p.propTypes=b,p.defaultProps={tag:"div"},t.a=p},474:function(e,t,a){"use strict";a.d(t,"a",(function(){return O}));var c=a(465),s=a(14),r=a(120),n=a(119),o=a(0),i=a.n(o),l=a(5),d=a.n(l),j=a(468),b=a(80);function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,c)}return a}var u=["defaultOpen"],O=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={isOpen:t.defaultOpen||!1},a.toggle=a.toggle.bind(Object(r.a)(a)),a}Object(n.a)(t,e);var a=t.prototype;return a.toggle=function(){this.setState({isOpen:!this.state.isOpen})},a.render=function(){return i.a.createElement(j.a,Object(s.a)({isOpen:this.state.isOpen,toggle:this.toggle},Object(b.omit)(this.props,u)))},t}(o.Component);O.propTypes=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){Object(c.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({defaultOpen:d.a.bool},j.a.propTypes)},475:function(e,t,a){"use strict";var c=a(14),s=a(20),r=a(0),n=a.n(r),o=a(5),i=a.n(o),l=a(58),d=a.n(l),j=a(80),b={tag:j.tagPropType,listTag:j.tagPropType,className:i.a.string,listClassName:i.a.string,cssModule:i.a.object,children:i.a.node,"aria-label":i.a.string},p=function(e){var t=e.className,a=e.listClassName,r=e.cssModule,o=e.children,i=e.tag,l=e.listTag,b=e["aria-label"],p=Object(s.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),u=Object(j.mapToCssModules)(d()(t),r),O=Object(j.mapToCssModules)(d()("breadcrumb",a),r);return n.a.createElement(i,Object(c.a)({},p,{className:u,"aria-label":b}),n.a.createElement(l,{className:O},o))};p.propTypes=b,p.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},t.a=p},476:function(e,t,a){"use strict";var c=a(14),s=a(20),r=a(0),n=a.n(r),o=a(5),i=a.n(o),l=a(58),d=a.n(l),j=a(80),b={tag:j.tagPropType,active:i.a.bool,className:i.a.string,cssModule:i.a.object},p=function(e){var t=e.className,a=e.cssModule,r=e.active,o=e.tag,i=Object(s.a)(e,["className","cssModule","active","tag"]),l=Object(j.mapToCssModules)(d()(t,!!r&&"active","breadcrumb-item"),a);return n.a.createElement(o,Object(c.a)({},i,{className:l,"aria-current":r?"page":void 0}))};p.propTypes=b,p.defaultProps={tag:"li"},t.a=p},477:function(e,t,a){"use strict";var c=a(14),s=a(20),r=a(120),n=a(119),o=a(0),i=a.n(o),l=a(5),d=a.n(l),j=a(58),b=a.n(j),p=a(473),u=a(80),O={children:d.a.node,active:d.a.bool,disabled:d.a.bool,divider:d.a.bool,tag:u.tagPropType,header:d.a.bool,onClick:d.a.func,className:d.a.string,cssModule:d.a.object,toggle:d.a.bool},h=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Object(r.a)(a)),a.getTabIndex=a.getTabIndex.bind(Object(r.a)(a)),a}Object(n.a)(t,e);var a=t.prototype;return a.onClick=function(e){this.props.disabled||this.props.header||this.props.divider?e.preventDefault():(this.props.onClick&&this.props.onClick(e),this.props.toggle&&this.context.toggle(e))},a.getTabIndex=function(){return this.props.disabled||this.props.header||this.props.divider?"-1":"0"},a.render=function(){var e=this.getTabIndex(),t=e>-1?"menuitem":void 0,a=Object(u.omit)(this.props,["toggle"]),r=a.className,n=a.cssModule,o=a.divider,l=a.tag,d=a.header,j=a.active,p=Object(s.a)(a,["className","cssModule","divider","tag","header","active"]),O=Object(u.mapToCssModules)(b()(r,{disabled:p.disabled,"dropdown-item":!o&&!d,active:j,"dropdown-header":d,"dropdown-divider":o}),n);return"button"===l&&(d?l="h6":o?l="div":p.href&&(l="a")),i.a.createElement(l,Object(c.a)({type:"button"===l&&(p.onClick||this.props.toggle)?"button":void 0},p,{tabIndex:e,role:t,className:O,onClick:this.onClick}))},t}(i.a.Component);h.propTypes=O,h.defaultProps={tag:"button",toggle:!0},h.contextType=p.a,t.a=h},600:function(e,t,a){"use strict";var c=a(1),s=a(21),r=a(0),n=a(58),o=a.n(n),i=a(636),l=(a(729),a(6)),d=function(e){var t,a=e.children,n=e.blocking,i=e.loader,d=e.className,j=e.tag,b=e.overlayColor,p=j;return Object(l.jsxs)(p,{className:o()("ui-loader",(t={},Object(s.a)(t,d,d),Object(s.a)(t,"show",n),t)),children:[a,n?Object(l.jsxs)(r.Fragment,{children:[Object(l.jsx)("div",Object(c.a)({className:"overlay"},n&&b?{style:{backgroundColor:b}}:{})),Object(l.jsx)("div",{className:"loader",children:i})]}):null]})};t.a=d,d.defaultProps={tag:"div",blocking:!1,loader:Object(l.jsx)(i.a,{color:"primary"})}},636:function(e,t,a){"use strict";var c=a(14),s=a(20),r=a(0),n=a.n(r),o=a(5),i=a.n(o),l=a(58),d=a.n(l),j=a(80),b={tag:j.tagPropType,type:i.a.string,size:i.a.string,color:i.a.string,className:i.a.string,cssModule:i.a.object,children:i.a.string},p=function(e){var t=e.className,a=e.cssModule,r=e.type,o=e.size,i=e.color,l=e.children,b=e.tag,p=Object(s.a)(e,["className","cssModule","type","size","color","children","tag"]),u=Object(j.mapToCssModules)(d()(t,!!o&&"spinner-"+r+"-"+o,"spinner-"+r,!!i&&"text-"+i),a);return n.a.createElement(b,Object(c.a)({role:"status"},p,{className:u}),l&&n.a.createElement("span",{className:Object(j.mapToCssModules)("sr-only",a)},l))};p.propTypes=b,p.defaultProps={tag:"div",type:"border",children:"Loading..."},t.a=p},698:function(e,t,a){"use strict";var c=a(0),s=a.n(c),r=a(5),n=a.n(r);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(e[c]=a[c])}return e},o.apply(this,arguments)}function i(e,t){if(null==e)return{};var a,c,s=function(e,t){if(null==e)return{};var a,c,s={},r=Object.keys(e);for(c=0;c<r.length;c++)a=r[c],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(c=0;c<r.length;c++)a=r[c],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=Object(c.forwardRef)((function(e,t){var a=e.color,c=void 0===a?"currentColor":a,r=e.size,n=void 0===r?24:r,l=i(e,["color","size"]);return s.a.createElement("svg",o({ref:t,xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:c,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),s.a.createElement("polyline",{points:"6 9 12 15 18 9"}))}));l.propTypes={color:n.a.string,size:n.a.oneOfType([n.a.string,n.a.number])},l.displayName="ChevronDown",t.a=l},729:function(e,t,a){}}]);
//# sourceMappingURL=74.df98c760.chunk.js.map