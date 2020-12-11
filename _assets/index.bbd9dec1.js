import{a as e,x as t,P as n,C as i,E as r,a2 as o,aj as a,ac as s,a1 as l,I as f,k as p,ah as u,ak as c,al as g,G as d,J as h,K as b,F as v,B as m,am as y,an as O,ao as C,ap as P,aq as j}from"./index.087827bd.js";import{c as w,b as x}from"./xlsx.a48e520c.js";import{T as V}from"./Trigger.1f027942.js";import{R as N}from"./RightOutlined.a721f23a.js";var R={adjustX:1,adjustY:1},M=[0,0],k={topLeft:{points:["bl","tl"],overflow:R,offset:[0,-4],targetOffset:M},topCenter:{points:["bc","tc"],overflow:R,offset:[0,-4],targetOffset:M},topRight:{points:["br","tr"],overflow:R,offset:[0,-4],targetOffset:M},bottomLeft:{points:["tl","bl"],overflow:R,offset:[0,4],targetOffset:M},bottomCenter:{points:["tc","bc"],overflow:R,offset:[0,4],targetOffset:M},bottomRight:{points:["tr","br"],overflow:R,offset:[0,4],targetOffset:M}};function A(){return(A=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var _=e({mixins:[t],props:{minOverlayWidthMatchTrigger:n.looseBool,prefixCls:n.string.def("rc-dropdown"),transitionName:n.string,overlayClassName:n.string.def(""),openClassName:n.string,animation:n.any,align:n.object,overlayStyle:n.object.def((function(){return{}})),placement:n.string.def("bottomLeft"),overlay:n.any,trigger:n.array.def(["hover"]),alignPoint:n.looseBool,showAction:n.array.def([]),hideAction:n.array.def([]),getPopupContainer:n.func,visible:n.looseBool,defaultVisible:n.looseBool.def(!1),mouseEnterDelay:n.number.def(.15),mouseLeaveDelay:n.number.def(.1)},data:function(){var e=this.defaultVisible;return i(this,"visible")&&(e=this.visible),{sVisible:e}},watch:{visible:function(e){void 0!==e&&this.setState({sVisible:e})}},methods:{onClick:function(e){var t=this.getOverlayElement().props;i(this,"visible")||this.setState({sVisible:!1}),this.__emit("overlayClick",e),t.onClick&&t.onClick(e)},onVisibleChange:function(e){i(this,"visible")||this.setState({sVisible:e}),this.__emit("update:visible",e),this.__emit("visibleChange",e)},getMinOverlayWidthMatchTrigger:function(){var e=r(this),t=e.minOverlayWidthMatchTrigger,n=e.alignPoint;return"minOverlayWidthMatchTrigger"in e?t:!n},getOverlayElement:function(){var e=o(this,"overlay");return Array.isArray(e)?e[0]:e},getMenuElement:function(){var e=this,t=this.onClick,n=this.prefixCls,i=this.getOverlayElement(),r={prefixCls:"".concat(n,"-menu"),getPopupContainer:function(){return e.getPopupDomNode()},onClick:t};return i&&i.type===a&&delete r.prefixCls,s(i,r)},getMenuElementOrLambda:function(){return"function"==typeof(this.overlay||this.$slots.overlay)?this.getMenuElement:this.getMenuElement()},getPopupDomNode:function(){return this.triggerRef.getPopupDomNode()},getOpenClassName:function(){var e=this.$props,t=e.openClassName,n=e.prefixCls;return void 0!==t?t:"".concat(n,"-open")},afterVisibleChange:function(e){if(e&&this.getMinOverlayWidthMatchTrigger()){var t=this.getPopupDomNode(),n=l(this);n&&t&&n.offsetWidth>t.offsetWidth&&(t.style.minWidth="".concat(n.offsetWidth,"px"),this.triggerRef&&this.triggerRef._component&&this.triggerRef._component.alignInstance&&this.triggerRef._component.alignInstance.forceAlign())}},renderChildren:function(){var e=f(this);return this.sVisible&&e?s(e[0],{class:this.getOpenClassName()},!1):e},saveTrigger:function(e){this.triggerRef=e}},render:function(){var e=this,t=this.$props,n=t.prefixCls,i=t.transitionName,r=t.animation,o=t.align,a=t.placement,s=t.getPopupContainer,l=t.showAction,f=t.hideAction,u=t.overlayClassName,c=t.overlayStyle,g=t.trigger,d=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n}(t,["prefixCls","transitionName","animation","align","placement","getPopupContainer","showAction","hideAction","overlayClassName","overlayStyle","trigger"]),h=f;h||-1===g.indexOf("contextmenu")||(h=["click"]);var b=A(A({},d),{prefixCls:n,popupClassName:u,popupStyle:c,builtinPlacements:k,action:g,showAction:l,hideAction:h||[],popupPlacement:a,popupAlign:o,popupTransitionName:i,popupAnimation:r,popupVisible:this.sVisible,afterPopupVisibleChange:this.afterVisibleChange,getPopupContainer:s,onPopupVisibleChange:this.onVisibleChange,popup:this.getMenuElementOrLambda(),ref:this.saveTrigger});return p(V,b,{default:function(){return[e.renderChildren()]}})}}),D=function(){return{trigger:{type:Array,default:function(){return["hover"]}},overlay:n.any,visible:n.looseBool,disabled:n.looseBool,align:n.object,getPopupContainer:n.func,prefixCls:n.string,transitionName:n.string,placement:n.oneOf(u("topLeft","topCenter","topRight","bottomLeft","bottomCenter","bottomRight")),overlayClassName:n.string,overlayStyle:n.style,forceRender:n.looseBool,mouseEnterDelay:n.number,mouseLeaveDelay:n.number,openClassName:n.string,minOverlayWidthMatchTrigger:n.looseBool}},E=w((function(e,t){Object.defineProperty(t,"__esModule",{value:!0});t.default={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"ellipsis",theme:"outlined"}})),T=w((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=a();if(t&&t.has(e))return t.get(e);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var o=i?Object.getOwnPropertyDescriptor(e,r):null;o&&(o.get||o.set)?Object.defineProperty(n,r,o):n[r]=e[r]}n.default=e,t&&t.set(e,n);return n}(g),i=o(E),r=o(c);function o(e){return e&&e.__esModule?e:{default:e}}function a(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return a=function(){return e},e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l=function(e,t){var o=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?Object(arguments[t]):{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){s(e,t,n[t])}))}return e}({},e,t.attrs);return n.createVNode(r.default,n.mergeProps(o,{icon:i.default}),null)};l.displayName="EllipsisOutlined",l.inheritAttrs=!1;var f=l;t.default=f})),S=x(w((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,i=(n=T)&&n.__esModule?n:{default:n};var r=i.default||i;t.default=r,e.exports=r})));function B(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function W(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?B(Object(n),!0).forEach((function(t){$(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):B(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function $(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function L(){return(L=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var I=y(),z=D(),G=m.Group,U=e({name:"ADropdownButton",inheritAttrs:!1,props:L(L(L({},O),z),{type:n.oneOf(u("primary","ghost","dashed","danger","default")).def("default"),size:n.oneOf(u("small","large","default")).def("default"),htmlType:I.htmlType,href:n.string,disabled:n.looseBool,prefixCls:n.string,placement:z.placement.def("bottomRight"),icon:n.any,title:n.string,onClick:n.func,onVisibleChange:n.func,"onUpdate:visible":n.func}),emits:["click","visibleChange","update:visible"],setup:function(){return{configProvider:d("configProvider",h),popupRef:null}},created:function(){b("savePopupRef",this.savePopupRef)},methods:{savePopupRef:function(e){this.popupRef=e},handleClick:function(e){this.$emit("click",e)},handleVisibleChange:function(e){this.$emit("update:visible",e),this.$emit("visibleChange",e)}},render:function(){var e=this,t=L(L({},this.$props),this.$attrs),n=t.type,r=t.disabled,a=(t.onClick,t.htmlType),s=t.class,l=t.prefixCls,u=(t.overlay,t.trigger),c=t.align,g=t.visible,d=(t.onVisibleChange,t.placement),h=t.getPopupContainer,b=t.href,y=t.title,O=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n}(t,["type","disabled","onClick","htmlType","class","prefixCls","overlay","trigger","align","visible","onVisibleChange","placement","getPopupContainer","href","title"]),C=o(this,"icon")||p(S,null,null),P=this.configProvider.getPopupContainer,j=(0,this.configProvider.getPrefixCls)("dropdown-button",l),w={align:c,disabled:r,trigger:r?[]:u,placement:d,getPopupContainer:h||P,onVisibleChange:this.handleVisibleChange};i(this,"visible")&&(w.visible=g);var x=L(L({},O),{class:v(j,s)});return p(G,x,{default:function(){return[p(m,{type:n,disabled:r,onClick:e.handleClick,htmlType:a,href:b,title:y},{default:function(){return[f(e)]}}),p(J,W(W({},w),{},{overlay:o(e,"overlay")}),{default:function(){return[p(m,{type:n},{default:function(){return[C]}})]}})]}})}});function q(){return(q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var F=D(),J=e({name:"ADropdown",inheritAttrs:!1,props:q(q({},F),{prefixCls:n.string,mouseEnterDelay:n.number.def(.15),mouseLeaveDelay:n.number.def(.1),placement:F.placement.def("bottomLeft"),onVisibleChange:n.func,"onUpdate:visible":n.func}),emits:["visibleChange","update:visible"],setup:function(){return{configProvider:d("configProvider",h),popupRef:null}},created:function(){b("savePopupRef",this.savePopupRef)},methods:{savePopupRef:function(e){this.popupRef=e},getTransitionName:function(){var e=this.$props,t=e.placement,n=void 0===t?"":t,i=e.transitionName;return void 0!==i?i:n.indexOf("top")>=0?"slide-down":"slide-up"},renderOverlay:function(e){var t=o(this,"overlay"),n=Array.isArray(t)?t[0]:t,i=n&&C(n)||{},r=i.selectable,a=void 0!==r&&r,s=i.focusable,l=void 0===s||s,f=p("span",{class:"".concat(e,"-menu-submenu-arrow")},[p(N,{class:"".concat(e,"-menu-submenu-arrow-icon")},null)]);return P(n)?j(n,{mode:"vertical",selectable:a,focusable:l,expandIcon:f}):t},handleVisibleChange:function(e){this.$emit("update:visible",e),this.$emit("visibleChange",e)}},render:function(){var e,t,n=r(this),i=n.prefixCls,o=n.trigger,a=n.disabled,l=n.getPopupContainer,u=this.configProvider.getPopupContainer,c=(0,this.configProvider.getPrefixCls)("dropdown",i),g=f(this)[0],d=s(g,{class:v(null===(e=null==g?void 0:g.props)||void 0===e?void 0:e.class,"".concat(c,"-trigger")),disabled:a}),h=a?[]:o;h&&-1!==h.indexOf("contextmenu")&&(t=!0);var b=q(q(q({alignPoint:t},n),this.$attrs),{prefixCls:c,getPopupContainer:l||u,transitionName:this.getTransitionName(),trigger:h,overlay:this.renderOverlay(c),onVisibleChange:this.handleVisibleChange});return p(_,b,{default:function(){return[d]}})}});J.Button=U,J.Button=U,J.install=function(e){return e.component(J.name,J),e.component(U.name,U),e};export{J as D};