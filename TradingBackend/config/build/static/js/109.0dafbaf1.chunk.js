(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[109],{1932:function(e,t,a){"use strict";a.r(t);var r=a(0),s=a(466),n=a(499),c=a(6);t.default=function(){return Object(c.jsxs)(r.Fragment,{children:[Object(c.jsx)(s.a,{breadCrumbTitle:"Layout Empty",breadCrumbParent:"Layouts",breadCrumbActive:"Layout Empty"}),Object(c.jsx)(n.a,{color:"primary",children:Object(c.jsxs)("div",{className:"alert-body",children:[Object(c.jsx)("span",{className:"font-weight-bold",children:"Info: "}),Object(c.jsxs)("span",{children:["This layout can be useful for getting started with empty content section. Please check the"," ",Object(c.jsx)("a",{href:"https://pixinvent.com/demo/vuexy-react-admin-dashboard-template/documentation/development/page-layouts",target:"_blank",children:"Layout empty documentation"})," ","for more details."]})]})})]})}},466:function(e,t,a){"use strict";var r=a(467),s=a(1039),n=a(1027),c=a(1026),o=a(1024),i=a(1028),l=a(475),d=a(476),b=a(474),p=a(1265),u=a(1076),j=a(477),m=a(6);t.a=function(e){var t=e.breadCrumbTitle,a=e.breadCrumbParent,O=e.breadCrumbParent2,g=e.breadCrumbParent3,h=e.breadCrumbActive;return Object(m.jsxs)("div",{className:"content-header row",children:[Object(m.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2",children:Object(m.jsx)("div",{className:"row breadcrumbs-top",children:Object(m.jsxs)("div",{className:"col-12",children:[t?Object(m.jsx)("h2",{className:"content-header-title float-left mb-0",children:t}):"",Object(m.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(m.jsxs)(l.a,{children:[Object(m.jsx)(d.a,{tag:"li",children:Object(m.jsx)(r.b,{to:"/",children:"Home"})}),Object(m.jsx)(d.a,{tag:"li",className:"text-primary",children:a}),O?Object(m.jsx)(d.a,{tag:"li",className:"text-primary",children:O}):"",g?Object(m.jsx)(d.a,{tag:"li",className:"text-primary",children:g}):"",Object(m.jsx)(d.a,{tag:"li",active:!0,children:h})]})})]})})}),Object(m.jsx)("div",{className:"content-header-right text-md-right col-md-3 col-12 d-md-block d-none",children:Object(m.jsx)("div",{className:"form-group breadcrum-right dropdown",children:Object(m.jsxs)(b.a,{children:[Object(m.jsx)(p.a,{color:"primary",size:"sm",className:"btn-icon btn-round dropdown-toggle",children:Object(m.jsx)(s.a,{size:14})}),Object(m.jsxs)(u.a,{tag:"ul",right:!0,children:[Object(m.jsxs)(j.a,{tag:r.b,to:"/apps/chat",children:[Object(m.jsx)(n.a,{className:"mr-1",size:14}),Object(m.jsx)("span",{className:"align-middle",children:"Todo"})]}),Object(m.jsxs)(j.a,{tag:r.b,to:"/apps/chat",children:[Object(m.jsx)(c.a,{className:"mr-1",size:14}),Object(m.jsx)("span",{className:"align-middle",children:"Chat"})]}),Object(m.jsxs)(j.a,{tag:r.b,to:"/apps/email",children:[Object(m.jsx)(o.a,{className:"mr-1",size:14}),Object(m.jsx)("span",{className:"align-middle",children:"Email"})]}),Object(m.jsxs)(j.a,{tag:r.b,to:"/apps/calendar",children:[Object(m.jsx)(i.a,{className:"mr-1",size:14}),Object(m.jsx)("span",{className:"align-middle",children:"Calendar"})]})]})]})})})]})}},468:function(e,t,a){"use strict";var r=a(14),s=a(0),n=a.n(s),c=a(5),o=a.n(c),i=a(470),l={children:o.a.node},d=function(e){return n.a.createElement(i.a,Object(r.a)({group:!0},e))};d.propTypes=l,t.a=d},471:function(e,t,a){"use strict";var r=a(14),s=a(20),n=a(465),c=a(0),o=a.n(c),i=a(5),l=a.n(i),d=a(58),b=a.n(d),p=a(483),u=a(80);function j(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function m(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?j(Object(a),!0).forEach((function(t){Object(n.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):j(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var O=m(m({},p.Transition.propTypes),{},{children:l.a.oneOfType([l.a.arrayOf(l.a.node),l.a.node]),tag:u.tagPropType,baseClass:l.a.string,baseClassActive:l.a.string,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])}),g=m(m({},p.Transition.defaultProps),{},{tag:"div",baseClass:"fade",baseClassActive:"show",timeout:u.TransitionTimeouts.Fade,appear:!0,enter:!0,exit:!0,in:!0});function h(e){var t=e.tag,a=e.baseClass,n=e.baseClassActive,c=e.className,i=e.cssModule,l=e.children,d=e.innerRef,j=Object(s.a)(e,["tag","baseClass","baseClassActive","className","cssModule","children","innerRef"]),m=Object(u.pick)(j,u.TransitionPropTypeKeys),O=Object(u.omit)(j,u.TransitionPropTypeKeys);return o.a.createElement(p.Transition,m,(function(e){var s="entered"===e,p=Object(u.mapToCssModules)(b()(c,a,s&&n),i);return o.a.createElement(t,Object(r.a)({className:p},O,{ref:d}),l)}))}h.propTypes=O,h.defaultProps=g,t.a=h},474:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var r=a(465),s=a(14),n=a(120),c=a(119),o=a(0),i=a.n(o),l=a(5),d=a.n(l),b=a(468),p=a(80);function u(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}var j=["defaultOpen"],m=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={isOpen:t.defaultOpen||!1},a.toggle=a.toggle.bind(Object(n.a)(a)),a}Object(c.a)(t,e);var a=t.prototype;return a.toggle=function(){this.setState({isOpen:!this.state.isOpen})},a.render=function(){return i.a.createElement(b.a,Object(s.a)({isOpen:this.state.isOpen,toggle:this.toggle},Object(p.omit)(this.props,j)))},t}(o.Component);m.propTypes=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?u(Object(a),!0).forEach((function(t){Object(r.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({defaultOpen:d.a.bool},b.a.propTypes)},475:function(e,t,a){"use strict";var r=a(14),s=a(20),n=a(0),c=a.n(n),o=a(5),i=a.n(o),l=a(58),d=a.n(l),b=a(80),p={tag:b.tagPropType,listTag:b.tagPropType,className:i.a.string,listClassName:i.a.string,cssModule:i.a.object,children:i.a.node,"aria-label":i.a.string},u=function(e){var t=e.className,a=e.listClassName,n=e.cssModule,o=e.children,i=e.tag,l=e.listTag,p=e["aria-label"],u=Object(s.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),j=Object(b.mapToCssModules)(d()(t),n),m=Object(b.mapToCssModules)(d()("breadcrumb",a),n);return c.a.createElement(i,Object(r.a)({},u,{className:j,"aria-label":p}),c.a.createElement(l,{className:m},o))};u.propTypes=p,u.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},t.a=u},476:function(e,t,a){"use strict";var r=a(14),s=a(20),n=a(0),c=a.n(n),o=a(5),i=a.n(o),l=a(58),d=a.n(l),b=a(80),p={tag:b.tagPropType,active:i.a.bool,className:i.a.string,cssModule:i.a.object},u=function(e){var t=e.className,a=e.cssModule,n=e.active,o=e.tag,i=Object(s.a)(e,["className","cssModule","active","tag"]),l=Object(b.mapToCssModules)(d()(t,!!n&&"active","breadcrumb-item"),a);return c.a.createElement(o,Object(r.a)({},i,{className:l,"aria-current":n?"page":void 0}))};u.propTypes=p,u.defaultProps={tag:"li"},t.a=u},477:function(e,t,a){"use strict";var r=a(14),s=a(20),n=a(120),c=a(119),o=a(0),i=a.n(o),l=a(5),d=a.n(l),b=a(58),p=a.n(b),u=a(473),j=a(80),m={children:d.a.node,active:d.a.bool,disabled:d.a.bool,divider:d.a.bool,tag:j.tagPropType,header:d.a.bool,onClick:d.a.func,className:d.a.string,cssModule:d.a.object,toggle:d.a.bool},O=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Object(n.a)(a)),a.getTabIndex=a.getTabIndex.bind(Object(n.a)(a)),a}Object(c.a)(t,e);var a=t.prototype;return a.onClick=function(e){this.props.disabled||this.props.header||this.props.divider?e.preventDefault():(this.props.onClick&&this.props.onClick(e),this.props.toggle&&this.context.toggle(e))},a.getTabIndex=function(){return this.props.disabled||this.props.header||this.props.divider?"-1":"0"},a.render=function(){var e=this.getTabIndex(),t=e>-1?"menuitem":void 0,a=Object(j.omit)(this.props,["toggle"]),n=a.className,c=a.cssModule,o=a.divider,l=a.tag,d=a.header,b=a.active,u=Object(s.a)(a,["className","cssModule","divider","tag","header","active"]),m=Object(j.mapToCssModules)(p()(n,{disabled:u.disabled,"dropdown-item":!o&&!d,active:b,"dropdown-header":d,"dropdown-divider":o}),c);return"button"===l&&(d?l="h6":o?l="div":u.href&&(l="a")),i.a.createElement(l,Object(r.a)({type:"button"===l&&(u.onClick||this.props.toggle)?"button":void 0},u,{tabIndex:e,role:t,className:m,onClick:this.onClick}))},t}(i.a.Component);O.propTypes=m,O.defaultProps={tag:"button",toggle:!0},O.contextType=u.a,t.a=O},499:function(e,t,a){"use strict";var r=a(14),s=a(20),n=a(465),c=a(0),o=a.n(c),i=a(5),l=a.n(i),d=a(58),b=a.n(d),p=a(80),u=a(471);function j(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function m(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?j(Object(a),!0).forEach((function(t){Object(n.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):j(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var O={children:l.a.node,className:l.a.string,closeClassName:l.a.string,closeAriaLabel:l.a.string,cssModule:l.a.object,color:l.a.string,fade:l.a.bool,isOpen:l.a.bool,toggle:l.a.func,tag:p.tagPropType,transition:l.a.shape(u.a.propTypes),innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},g={color:"success",isOpen:!0,tag:"div",closeAriaLabel:"Close",fade:!0,transition:m(m({},u.a.defaultProps),{},{unmountOnExit:!0})};function h(e){var t=e.className,a=e.closeClassName,n=e.closeAriaLabel,c=e.cssModule,i=e.tag,l=e.color,d=e.isOpen,j=e.toggle,O=e.children,g=e.transition,h=e.fade,f=e.innerRef,y=Object(s.a)(e,["className","closeClassName","closeAriaLabel","cssModule","tag","color","isOpen","toggle","children","transition","fade","innerRef"]),v=Object(p.mapToCssModules)(b()(t,"alert","alert-"+l,{"alert-dismissible":j}),c),x=Object(p.mapToCssModules)(b()("close",a),c),N=m(m(m({},u.a.defaultProps),g),{},{baseClass:h?g.baseClass:"",timeout:h?g.timeout:0});return o.a.createElement(u.a,Object(r.a)({},y,N,{tag:i,className:v,in:d,role:"alert",innerRef:f}),j?o.a.createElement("button",{type:"button",className:x,"aria-label":n,onClick:j},o.a.createElement("span",{"aria-hidden":"true"},"\xd7")):null,O)}h.propTypes=O,h.defaultProps=g,t.a=h}}]);
//# sourceMappingURL=109.0dafbaf1.chunk.js.map