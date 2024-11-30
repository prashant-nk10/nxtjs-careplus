"use strict";!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="a992a0c2-a716-4142-adc6-b15cc15e2a52",e._sentryDebugIdIdentifier="sentry-dbid-a992a0c2-a716-4142-adc6-b15cc15e2a52")}catch(e){}}(),function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="a992a0c2-a716-4142-adc6-b15cc15e2a52",e._sentryDebugIdIdentifier="sentry-dbid-a992a0c2-a716-4142-adc6-b15cc15e2a52")}catch(e){}}(),exports.id=671,exports.ids=[671],exports.modules={38671:(e,t,n)=>{n.d(t,{x8:()=>eX,VY:()=>eK,dk:()=>ez,aV:()=>e$,h_:()=>eB,fC:()=>eW,Dx:()=>eY,xz:()=>eU,jm:()=>ek,p8:()=>el});var r,o=n(32228),a=n.t(o,2);function u(e,t,{checkForDefaultPrevented:n=!0}={}){return function(r){if(e?.(r),!1===n||!r.defaultPrevented)return t?.(r)}}function i(...e){return o.useCallback(function(...e){return t=>e.forEach(e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)})}(...e),e)}var s=n(32556),l=globalThis?.document?o.useLayoutEffect:()=>{},c=a["useId".toString()]||(()=>void 0),d=0;function f(e){let[t,n]=o.useState(c());return l(()=>{e||n(e=>e??String(d++))},[e]),e||(t?`radix-${t}`:"")}function p(e){let t=o.useRef(e);return o.useEffect(()=>{t.current=e}),o.useMemo(()=>(...e)=>t.current?.(...e),[])}var v=n(45072),m=n(667),h=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let n=o.forwardRef((e,n)=>{let{asChild:r,...o}=e,a=r?m.g7:t;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,s.jsx)(a,{...o,ref:n})});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{}),g="dismissableLayer.update",y=o.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),b=o.forwardRef((e,t)=>{let{disableOutsidePointerEvents:n=!1,onEscapeKeyDown:a,onPointerDownOutside:l,onFocusOutside:c,onInteractOutside:d,onDismiss:f,...v}=e,m=o.useContext(y),[b,C]=o.useState(null),N=b?.ownerDocument??globalThis?.document,[,D]=o.useState({}),R=i(t,e=>C(e)),x=Array.from(m.layers),[I]=[...m.layersWithOutsidePointerEventsDisabled].slice(-1),L=x.indexOf(I),P=b?x.indexOf(b):-1,T=m.layersWithOutsidePointerEventsDisabled.size>0,O=P>=L,S=function(e,t=globalThis?.document){let n=p(e),r=o.useRef(!1),a=o.useRef(()=>{});return o.useEffect(()=>{let e=e=>{if(e.target&&!r.current){let r=function(){w("dismissableLayer.pointerDownOutside",n,o,{discrete:!0})},o={originalEvent:e};"touch"===e.pointerType?(t.removeEventListener("click",a.current),a.current=r,t.addEventListener("click",a.current,{once:!0})):r()}else t.removeEventListener("click",a.current);r.current=!1},o=window.setTimeout(()=>{t.addEventListener("pointerdown",e)},0);return()=>{window.clearTimeout(o),t.removeEventListener("pointerdown",e),t.removeEventListener("click",a.current)}},[t,n]),{onPointerDownCapture:()=>r.current=!0}}(e=>{let t=e.target,n=[...m.branches].some(e=>e.contains(t));!O||n||(l?.(e),d?.(e),e.defaultPrevented||f?.())},N),j=function(e,t=globalThis?.document){let n=p(e),r=o.useRef(!1);return o.useEffect(()=>{let e=e=>{e.target&&!r.current&&w("dismissableLayer.focusOutside",n,{originalEvent:e},{discrete:!1})};return t.addEventListener("focusin",e),()=>t.removeEventListener("focusin",e)},[t,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}(e=>{let t=e.target;[...m.branches].some(e=>e.contains(t))||(c?.(e),d?.(e),e.defaultPrevented||f?.())},N);return function(e,t=globalThis?.document){let n=p(e);o.useEffect(()=>{let e=e=>{"Escape"===e.key&&n(e)};return t.addEventListener("keydown",e,{capture:!0}),()=>t.removeEventListener("keydown",e,{capture:!0})},[n,t])}(e=>{P!==m.layers.size-1||(a?.(e),!e.defaultPrevented&&f&&(e.preventDefault(),f()))},N),o.useEffect(()=>{if(b)return n&&(0===m.layersWithOutsidePointerEventsDisabled.size&&(r=N.body.style.pointerEvents,N.body.style.pointerEvents="none"),m.layersWithOutsidePointerEventsDisabled.add(b)),m.layers.add(b),E(),()=>{n&&1===m.layersWithOutsidePointerEventsDisabled.size&&(N.body.style.pointerEvents=r)}},[b,N,n,m]),o.useEffect(()=>()=>{b&&(m.layers.delete(b),m.layersWithOutsidePointerEventsDisabled.delete(b),E())},[b,m]),o.useEffect(()=>{let e=()=>D({});return document.addEventListener(g,e),()=>document.removeEventListener(g,e)},[]),(0,s.jsx)(h.div,{...v,ref:R,style:{pointerEvents:T?O?"auto":"none":void 0,...e.style},onFocusCapture:u(e.onFocusCapture,j.onFocusCapture),onBlurCapture:u(e.onBlurCapture,j.onBlurCapture),onPointerDownCapture:u(e.onPointerDownCapture,S.onPointerDownCapture)})});function E(){let e=new CustomEvent(g);document.dispatchEvent(e)}function w(e,t,n,{discrete:r}){let o=n.originalEvent.target,a=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});(t&&o.addEventListener(e,t,{once:!0}),r)?o&&v.flushSync(()=>o.dispatchEvent(a)):o.dispatchEvent(a)}b.displayName="DismissableLayer",o.forwardRef((e,t)=>{let n=o.useContext(y),r=o.useRef(null),a=i(t,r);return o.useEffect(()=>{let e=r.current;if(e)return n.branches.add(e),()=>{n.branches.delete(e)}},[n.branches]),(0,s.jsx)(h.div,{...e,ref:a})}).displayName="DismissableLayerBranch";var C="focusScope.autoFocusOnMount",N="focusScope.autoFocusOnUnmount",D={bubbles:!1,cancelable:!0},R=o.forwardRef((e,t)=>{let{loop:n=!1,trapped:r=!1,onMountAutoFocus:a,onUnmountAutoFocus:u,...l}=e,[c,d]=o.useState(null),f=p(a),v=p(u),m=o.useRef(null),g=i(t,e=>d(e)),y=o.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;o.useEffect(()=>{if(r){let e=function(e){if(y.paused||!c)return;let t=e.target;c.contains(t)?m.current=t:L(m.current,{select:!0})},t=function(e){if(y.paused||!c)return;let t=e.relatedTarget;null===t||c.contains(t)||L(m.current,{select:!0})};document.addEventListener("focusin",e),document.addEventListener("focusout",t);let n=new MutationObserver(function(e){if(document.activeElement===document.body)for(let t of e)t.removedNodes.length>0&&L(c)});return c&&n.observe(c,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",e),document.removeEventListener("focusout",t),n.disconnect()}}},[r,c,y.paused]),o.useEffect(()=>{if(c){P.add(y);let e=document.activeElement;if(!c.contains(e)){let t=new CustomEvent(C,D);c.addEventListener(C,f),c.dispatchEvent(t),t.defaultPrevented||(function(e,{select:t=!1}={}){let n=document.activeElement;for(let r of e)if(L(r,{select:t}),document.activeElement!==n)return}(x(c).filter(e=>"A"!==e.tagName),{select:!0}),document.activeElement===e&&L(c))}return()=>{c.removeEventListener(C,f),setTimeout(()=>{let t=new CustomEvent(N,D);c.addEventListener(N,v),c.dispatchEvent(t),t.defaultPrevented||L(e??document.body,{select:!0}),c.removeEventListener(N,v),P.remove(y)},0)}}},[c,f,v,y]);let b=o.useCallback(e=>{if(!n&&!r||y.paused)return;let t="Tab"===e.key&&!e.altKey&&!e.ctrlKey&&!e.metaKey,o=document.activeElement;if(t&&o){let t=e.currentTarget,[r,a]=function(e){let t=x(e);return[I(t,e),I(t.reverse(),e)]}(t);r&&a?e.shiftKey||o!==a?e.shiftKey&&o===r&&(e.preventDefault(),n&&L(a,{select:!0})):(e.preventDefault(),n&&L(r,{select:!0})):o===t&&e.preventDefault()}},[n,r,y.paused]);return(0,s.jsx)(h.div,{tabIndex:-1,...l,ref:g,onKeyDown:b})});function x(e){let t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function I(e,t){for(let n of e)if(!function(e,{upTo:t}){if("hidden"===getComputedStyle(e).visibility)return!0;for(;e&&(void 0===t||e!==t);){if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1}(n,{upTo:t}))return n}function L(e,{select:t=!1}={}){if(e&&e.focus){var n;let r=document.activeElement;e.focus({preventScroll:!0}),e!==r&&(n=e)instanceof HTMLInputElement&&"select"in n&&t&&e.select()}}R.displayName="FocusScope";var P=function(){let e=[];return{add(t){let n=e[0];t!==n&&n?.pause(),(e=T(e,t)).unshift(t)},remove(t){e=T(e,t),e[0]?.resume()}}}();function T(e,t){let n=[...e],r=n.indexOf(t);return -1!==r&&n.splice(r,1),n}var O=o.forwardRef((e,t)=>{let{container:n,...r}=e,[a,u]=o.useState(!1);l(()=>u(!0),[]);let i=n||a&&globalThis?.document?.body;return i?v.createPortal((0,s.jsx)(h.div,{...r,ref:t}),i):null});O.displayName="Portal";var S=e=>{let{present:t,children:n}=e,r=function(e){var t,n;let[r,a]=o.useState(),u=o.useRef({}),i=o.useRef(e),s=o.useRef("none"),[c,d]=(t=e?"mounted":"unmounted",n={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},o.useReducer((e,t)=>n[e][t]??e,t));return o.useEffect(()=>{let e=j(u.current);s.current="mounted"===c?e:"none"},[c]),l(()=>{let t=u.current,n=i.current;if(n!==e){let r=s.current,o=j(t);e?d("MOUNT"):"none"===o||t?.display==="none"?d("UNMOUNT"):n&&r!==o?d("ANIMATION_OUT"):d("UNMOUNT"),i.current=e}},[e,d]),l(()=>{if(r){let e=e=>{let t=j(u.current).includes(e.animationName);e.target===r&&t&&v.flushSync(()=>d("ANIMATION_END"))},t=e=>{e.target===r&&(s.current=j(u.current))};return r.addEventListener("animationstart",t),r.addEventListener("animationcancel",e),r.addEventListener("animationend",e),()=>{r.removeEventListener("animationstart",t),r.removeEventListener("animationcancel",e),r.removeEventListener("animationend",e)}}d("ANIMATION_END")},[r,d]),{isPresent:["mounted","unmountSuspended"].includes(c),ref:o.useCallback(e=>{e&&(u.current=getComputedStyle(e)),a(e)},[])}}(t),a="function"==typeof n?n({present:r.isPresent}):o.Children.only(n),u=i(r.ref,function(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(n=(t=Object.getOwnPropertyDescriptor(e,"ref")?.get)&&"isReactWarning"in t&&t.isReactWarning)?e.props.ref:e.props.ref||e.ref}(a));return"function"==typeof n||r.isPresent?o.cloneElement(a,{ref:u}):null};function j(e){return e?.animationName||"none"}S.displayName="Presence";var _=0;function k(){let e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.cssText="outline: none; opacity: 0; position: fixed; pointer-events: none",e}var M=n(18628),F=n(27724),A=n(48764),W=(0,n(14206)._)(),U=function(){},B=o.forwardRef(function(e,t){var n=o.useRef(null),r=o.useState({onScrollCapture:U,onWheelCapture:U,onTouchMoveCapture:U}),a=r[0],u=r[1],i=e.forwardProps,s=e.children,l=e.className,c=e.removeScrollBar,d=e.enabled,f=e.shards,p=e.sideCar,v=e.noIsolation,m=e.inert,h=e.allowPinchZoom,g=e.as,y=e.gapMode,b=(0,M._T)(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as","gapMode"]),E=(0,A.q)([n,t]),w=(0,M.pi)((0,M.pi)({},b),a);return o.createElement(o.Fragment,null,d&&o.createElement(p,{sideCar:W,removeScrollBar:c,shards:f,noIsolation:v,inert:m,setCallbacks:u,allowPinchZoom:!!h,lockRef:n,gapMode:y}),i?o.cloneElement(o.Children.only(s),(0,M.pi)((0,M.pi)({},w),{ref:E})):o.createElement(void 0===g?"div":g,(0,M.pi)({},w,{className:l,ref:E}),s))});B.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1},B.classNames={fullWidth:F.zi,zeroRight:F.pF};var $=n(50677),K=n(57881),Y=n(96988),z=!1;if("undefined"!=typeof window)try{var X=Object.defineProperty({},"passive",{get:function(){return z=!0,!0}});window.addEventListener("test",X,X),window.removeEventListener("test",X,X)}catch(e){z=!1}var H=!!z&&{passive:!1},Z=function(e,t){var n=window.getComputedStyle(e);return"hidden"!==n[t]&&!(n.overflowY===n.overflowX&&"TEXTAREA"!==e.tagName&&"visible"===n[t])},q=function(e,t){var n=t.ownerDocument,r=t;do{if("undefined"!=typeof ShadowRoot&&r instanceof ShadowRoot&&(r=r.host),V(e,r)){var o=G(e,r);if(o[1]>o[2])return!0}r=r.parentNode}while(r&&r!==n.body);return!1},V=function(e,t){return"v"===e?Z(t,"overflowY"):Z(t,"overflowX")},G=function(e,t){return"v"===e?[t.scrollTop,t.scrollHeight,t.clientHeight]:[t.scrollLeft,t.scrollWidth,t.clientWidth]},J=function(e,t,n,r,o){var a,u=(a=window.getComputedStyle(t).direction,"h"===e&&"rtl"===a?-1:1),i=u*r,s=n.target,l=t.contains(s),c=!1,d=i>0,f=0,p=0;do{var v=G(e,s),m=v[0],h=v[1]-v[2]-u*m;(m||h)&&V(e,s)&&(f+=h,p+=m),s instanceof ShadowRoot?s=s.host:s=s.parentNode}while(!l&&s!==document.body||l&&(t.contains(s)||t===s));return d&&(o&&1>Math.abs(f)||!o&&i>f)?c=!0:!d&&(o&&1>Math.abs(p)||!o&&-i>p)&&(c=!0),c},Q=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},ee=function(e){return[e.deltaX,e.deltaY]},et=function(e){return e&&"current"in e?e.current:e},en=0,er=[];let eo=(0,$.L)(W,function(e){var t=o.useRef([]),n=o.useRef([0,0]),r=o.useRef(),a=o.useState(en++)[0],u=o.useState(Y.Ws)[0],i=o.useRef(e);o.useEffect(function(){i.current=e},[e]),o.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(a));var t=(0,M.ev)([e.lockRef.current],(e.shards||[]).map(et),!0).filter(Boolean);return t.forEach(function(e){return e.classList.add("allow-interactivity-".concat(a))}),function(){document.body.classList.remove("block-interactivity-".concat(a)),t.forEach(function(e){return e.classList.remove("allow-interactivity-".concat(a))})}}},[e.inert,e.lockRef.current,e.shards]);var s=o.useCallback(function(e,t){if("touches"in e&&2===e.touches.length)return!i.current.allowPinchZoom;var o,a=Q(e),u=n.current,s="deltaX"in e?e.deltaX:u[0]-a[0],l="deltaY"in e?e.deltaY:u[1]-a[1],c=e.target,d=Math.abs(s)>Math.abs(l)?"h":"v";if("touches"in e&&"h"===d&&"range"===c.type)return!1;var f=q(d,c);if(!f)return!0;if(f?o=d:(o="v"===d?"h":"v",f=q(d,c)),!f)return!1;if(!r.current&&"changedTouches"in e&&(s||l)&&(r.current=o),!o)return!0;var p=r.current||o;return J(p,t,e,"h"===p?s:l,!0)},[]),l=o.useCallback(function(e){if(er.length&&er[er.length-1]===u){var n="deltaY"in e?ee(e):Q(e),r=t.current.filter(function(t){var r;return t.name===e.type&&(t.target===e.target||e.target===t.shadowParent)&&(r=t.delta)[0]===n[0]&&r[1]===n[1]})[0];if(r&&r.should){e.cancelable&&e.preventDefault();return}if(!r){var o=(i.current.shards||[]).map(et).filter(Boolean).filter(function(t){return t.contains(e.target)});(o.length>0?s(e,o[0]):!i.current.noIsolation)&&e.cancelable&&e.preventDefault()}}},[]),c=o.useCallback(function(e,n,r,o){var a={name:e,delta:n,target:r,should:o,shadowParent:function(e){for(var t=null;null!==e;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}(r)};t.current.push(a),setTimeout(function(){t.current=t.current.filter(function(e){return e!==a})},1)},[]),d=o.useCallback(function(e){n.current=Q(e),r.current=void 0},[]),f=o.useCallback(function(t){c(t.type,ee(t),t.target,s(t,e.lockRef.current))},[]),p=o.useCallback(function(t){c(t.type,Q(t),t.target,s(t,e.lockRef.current))},[]);o.useEffect(function(){return er.push(u),e.setCallbacks({onScrollCapture:f,onWheelCapture:f,onTouchMoveCapture:p}),document.addEventListener("wheel",l,H),document.addEventListener("touchmove",l,H),document.addEventListener("touchstart",d,H),function(){er=er.filter(function(e){return e!==u}),document.removeEventListener("wheel",l,H),document.removeEventListener("touchmove",l,H),document.removeEventListener("touchstart",d,H)}},[]);var v=e.removeScrollBar,m=e.inert;return o.createElement(o.Fragment,null,m?o.createElement(u,{styles:"\n  .block-interactivity-".concat(a," {pointer-events: none;}\n  .allow-interactivity-").concat(a," {pointer-events: all;}\n")}):null,v?o.createElement(K.jp,{gapMode:e.gapMode}):null)});var ea=o.forwardRef(function(e,t){return o.createElement(B,(0,M.pi)({},e,{ref:t,sideCar:eo}))});ea.classNames=B.classNames;var eu=n(52883),ei="Dialog",[es,el]=function(e,t=[]){let n=[],r=()=>{let t=n.map(e=>o.createContext(e));return function(n){let r=n?.[e]||t;return o.useMemo(()=>({[`__scope${e}`]:{...n,[e]:r}}),[n,r])}};return r.scopeName=e,[function(t,r){let a=o.createContext(r),u=n.length;function i(t){let{scope:n,children:r,...i}=t,l=n?.[e][u]||a,c=o.useMemo(()=>i,Object.values(i));return(0,s.jsx)(l.Provider,{value:c,children:r})}return n=[...n,r],i.displayName=t+"Provider",[i,function(n,i){let s=i?.[e][u]||a,l=o.useContext(s);if(l)return l;if(void 0!==r)return r;throw Error(`\`${n}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let n=()=>{let n=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let r=n.reduce((t,{useScope:n,scopeName:r})=>{let o=n(e)[`__scope${r}`];return{...t,...o}},{});return o.useMemo(()=>({[`__scope${t.scopeName}`]:r}),[r])}};return n.scopeName=t.scopeName,n}(r,...t)]}(ei),[ec,ed]=es(ei),ef=e=>{let{__scopeDialog:t,children:n,open:r,defaultOpen:a,onOpenChange:u,modal:i=!0}=e,l=o.useRef(null),c=o.useRef(null),[d=!1,v]=function({prop:e,defaultProp:t,onChange:n=()=>{}}){let[r,a]=function({defaultProp:e,onChange:t}){let n=o.useState(e),[r]=n,a=o.useRef(r),u=p(t);return o.useEffect(()=>{a.current!==r&&(u(r),a.current=r)},[r,a,u]),n}({defaultProp:t,onChange:n}),u=void 0!==e,i=u?e:r,s=p(n);return[i,o.useCallback(t=>{if(u){let n="function"==typeof t?t(e):t;n!==e&&s(n)}else a(t)},[u,e,a,s])]}({prop:r,defaultProp:a,onChange:u});return(0,s.jsx)(ec,{scope:t,triggerRef:l,contentRef:c,contentId:f(),titleId:f(),descriptionId:f(),open:d,onOpenChange:v,onOpenToggle:o.useCallback(()=>v(e=>!e),[v]),modal:i,children:n})};ef.displayName=ei;var ep="DialogTrigger",ev=o.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=ed(ep,n),a=i(t,o.triggerRef);return(0,s.jsx)(h.button,{type:"button","aria-haspopup":"dialog","aria-expanded":o.open,"aria-controls":o.contentId,"data-state":ej(o.open),...r,ref:a,onClick:u(e.onClick,o.onOpenToggle)})});ev.displayName=ep;var em="DialogPortal",[eh,eg]=es(em,{forceMount:void 0}),ey=e=>{let{__scopeDialog:t,forceMount:n,children:r,container:a}=e,u=ed(em,t);return(0,s.jsx)(eh,{scope:t,forceMount:n,children:o.Children.map(r,e=>(0,s.jsx)(S,{present:n||u.open,children:(0,s.jsx)(O,{asChild:!0,container:a,children:e})}))})};ey.displayName=em;var eb="DialogOverlay",eE=o.forwardRef((e,t)=>{let n=eg(eb,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,a=ed(eb,e.__scopeDialog);return a.modal?(0,s.jsx)(S,{present:r||a.open,children:(0,s.jsx)(ew,{...o,ref:t})}):null});eE.displayName=eb;var ew=o.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=ed(eb,n);return(0,s.jsx)(ea,{as:m.g7,allowPinchZoom:!0,shards:[o.contentRef],children:(0,s.jsx)(h.div,{"data-state":ej(o.open),...r,ref:t,style:{pointerEvents:"auto",...r.style}})})}),eC="DialogContent",eN=o.forwardRef((e,t)=>{let n=eg(eC,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,a=ed(eC,e.__scopeDialog);return(0,s.jsx)(S,{present:r||a.open,children:a.modal?(0,s.jsx)(eD,{...o,ref:t}):(0,s.jsx)(eR,{...o,ref:t})})});eN.displayName=eC;var eD=o.forwardRef((e,t)=>{let n=ed(eC,e.__scopeDialog),r=o.useRef(null),a=i(t,n.contentRef,r);return o.useEffect(()=>{let e=r.current;if(e)return(0,eu.Ry)(e)},[]),(0,s.jsx)(ex,{...e,ref:a,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:u(e.onCloseAutoFocus,e=>{e.preventDefault(),n.triggerRef.current?.focus()}),onPointerDownOutside:u(e.onPointerDownOutside,e=>{let t=e.detail.originalEvent,n=0===t.button&&!0===t.ctrlKey;(2===t.button||n)&&e.preventDefault()}),onFocusOutside:u(e.onFocusOutside,e=>e.preventDefault())})}),eR=o.forwardRef((e,t)=>{let n=ed(eC,e.__scopeDialog),r=o.useRef(!1),a=o.useRef(!1);return(0,s.jsx)(ex,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{e.onCloseAutoFocus?.(t),t.defaultPrevented||(r.current||n.triggerRef.current?.focus(),t.preventDefault()),r.current=!1,a.current=!1},onInteractOutside:t=>{e.onInteractOutside?.(t),t.defaultPrevented||(r.current=!0,"pointerdown"!==t.detail.originalEvent.type||(a.current=!0));let o=t.target;n.triggerRef.current?.contains(o)&&t.preventDefault(),"focusin"===t.detail.originalEvent.type&&a.current&&t.preventDefault()}})}),ex=o.forwardRef((e,t)=>{let{__scopeDialog:n,trapFocus:r,onOpenAutoFocus:a,onCloseAutoFocus:u,...l}=e,c=ed(eC,n),d=o.useRef(null),f=i(t,d);return o.useEffect(()=>{let e=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",e[0]??k()),document.body.insertAdjacentElement("beforeend",e[1]??k()),_++,()=>{1===_&&document.querySelectorAll("[data-radix-focus-guard]").forEach(e=>e.remove()),_--}},[]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(R,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:a,onUnmountAutoFocus:u,children:(0,s.jsx)(b,{role:"dialog",id:c.contentId,"aria-describedby":c.descriptionId,"aria-labelledby":c.titleId,"data-state":ej(c.open),...l,ref:f,onDismiss:()=>c.onOpenChange(!1)})}),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(eF,{titleId:c.titleId}),(0,s.jsx)(eA,{contentRef:d,descriptionId:c.descriptionId})]})]})}),eI="DialogTitle",eL=o.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=ed(eI,n);return(0,s.jsx)(h.h2,{id:o.titleId,...r,ref:t})});eL.displayName=eI;var eP="DialogDescription",eT=o.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=ed(eP,n);return(0,s.jsx)(h.p,{id:o.descriptionId,...r,ref:t})});eT.displayName=eP;var eO="DialogClose",eS=o.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=ed(eO,n);return(0,s.jsx)(h.button,{type:"button",...r,ref:t,onClick:u(e.onClick,()=>o.onOpenChange(!1))})});function ej(e){return e?"open":"closed"}eS.displayName=eO;var e_="DialogTitleWarning",[ek,eM]=function(e,t){let n=o.createContext(t);function r(e){let{children:t,...r}=e,a=o.useMemo(()=>r,Object.values(r));return(0,s.jsx)(n.Provider,{value:a,children:t})}return r.displayName=e+"Provider",[r,function(r){let a=o.useContext(n);if(a)return a;if(void 0!==t)return t;throw Error(`\`${r}\` must be used within \`${e}\``)}]}(e_,{contentName:eC,titleName:eI,docsSlug:"dialog"}),eF=({titleId:e})=>{let t=eM(e_),n=`\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;return o.useEffect(()=>{e&&!document.getElementById(e)&&console.error(n)},[n,e]),null},eA=({contentRef:e,descriptionId:t})=>{let n=eM("DialogDescriptionWarning"),r=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${n.contentName}}.`;return o.useEffect(()=>{let n=e.current?.getAttribute("aria-describedby");t&&n&&!document.getElementById(t)&&console.warn(r)},[r,e,t]),null},eW=ef,eU=ev,eB=ey,e$=eE,eK=eN,eY=eL,ez=eT,eX=eS}};
//# sourceMappingURL=671.js.map