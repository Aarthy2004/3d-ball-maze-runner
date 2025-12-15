(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();function c0(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Pf={exports:{}},So={};var bg;function Zx(){if(bg)return So;bg=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,u){var d=null;if(u!==void 0&&(d=""+u),l.key!==void 0&&(d=""+l.key),"key"in l){u={};for(var h in l)h!=="key"&&(u[h]=l[h])}else u=l;return l=u.ref,{$$typeof:o,type:s,key:d,ref:l!==void 0?l:null,props:u}}return So.Fragment=e,So.jsx=i,So.jsxs=i,So}var Ag;function Kx(){return Ag||(Ag=1,Pf.exports=Zx()),Pf.exports}var Lt=Kx(),Bf={exports:{}},ie={};var Rg;function Qx(){if(Rg)return ie;Rg=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),y=Symbol.iterator;function M(O){return O===null||typeof O!="object"?null:(O=y&&O[y]||O["@@iterator"],typeof O=="function"?O:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,S={};function v(O,it,St){this.props=O,this.context=it,this.refs=S,this.updater=St||A}v.prototype.isReactComponent={},v.prototype.setState=function(O,it){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,it,"setState")},v.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function z(){}z.prototype=v.prototype;function U(O,it,St){this.props=O,this.context=it,this.refs=S,this.updater=St||A}var L=U.prototype=new z;L.constructor=U,C(L,v.prototype),L.isPureReactComponent=!0;var Y=Array.isArray;function F(){}var N={H:null,A:null,T:null,S:null},W=Object.prototype.hasOwnProperty;function w(O,it,St){var V=St.ref;return{$$typeof:o,type:O,key:it,ref:V!==void 0?V:null,props:St}}function T(O,it){return w(O.type,it,O.props)}function k(O){return typeof O=="object"&&O!==null&&O.$$typeof===o}function J(O){var it={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(St){return it[St]})}var H=/\/+/g;function ot(O,it){return typeof O=="object"&&O!==null&&O.key!=null?J(""+O.key):it.toString(36)}function ct(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(F,F):(O.status="pending",O.then(function(it){O.status==="pending"&&(O.status="fulfilled",O.value=it)},function(it){O.status==="pending"&&(O.status="rejected",O.reason=it)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function I(O,it,St,V,dt){var Et=typeof O;(Et==="undefined"||Et==="boolean")&&(O=null);var gt=!1;if(O===null)gt=!0;else switch(Et){case"bigint":case"string":case"number":gt=!0;break;case"object":switch(O.$$typeof){case o:case e:gt=!0;break;case _:return gt=O._init,I(gt(O._payload),it,St,V,dt)}}if(gt)return dt=dt(O),gt=V===""?"."+ot(O,0):V,Y(dt)?(St="",gt!=null&&(St=gt.replace(H,"$&/")+"/"),I(dt,it,St,"",function($){return $})):dt!=null&&(k(dt)&&(dt=T(dt,St+(dt.key==null||O&&O.key===dt.key?"":(""+dt.key).replace(H,"$&/")+"/")+gt)),it.push(dt)),1;gt=0;var Gt=V===""?".":V+":";if(Y(O))for(var Nt=0;Nt<O.length;Nt++)V=O[Nt],Et=Gt+ot(V,Nt),gt+=I(V,it,St,Et,dt);else if(Nt=M(O),typeof Nt=="function")for(O=Nt.call(O),Nt=0;!(V=O.next()).done;)V=V.value,Et=Gt+ot(V,Nt++),gt+=I(V,it,St,Et,dt);else if(Et==="object"){if(typeof O.then=="function")return I(ct(O),it,St,V,dt);throw it=String(O),Error("Objects are not valid as a React child (found: "+(it==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":it)+"). If you meant to render a collection of children, use an array instead.")}return gt}function q(O,it,St){if(O==null)return O;var V=[],dt=0;return I(O,V,"","",function(Et){return it.call(St,Et,dt++)}),V}function X(O){if(O._status===-1){var it=O._result;it=it(),it.then(function(St){(O._status===0||O._status===-1)&&(O._status=1,O._result=St)},function(St){(O._status===0||O._status===-1)&&(O._status=2,O._result=St)}),O._status===-1&&(O._status=0,O._result=it)}if(O._status===1)return O._result.default;throw O._result}var mt=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var it=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(it))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)},lt={map:q,forEach:function(O,it,St){q(O,function(){it.apply(this,arguments)},St)},count:function(O){var it=0;return q(O,function(){it++}),it},toArray:function(O){return q(O,function(it){return it})||[]},only:function(O){if(!k(O))throw Error("React.Children.only expected to receive a single React element child.");return O}};return ie.Activity=x,ie.Children=lt,ie.Component=v,ie.Fragment=i,ie.Profiler=l,ie.PureComponent=U,ie.StrictMode=s,ie.Suspense=m,ie.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=N,ie.__COMPILER_RUNTIME={__proto__:null,c:function(O){return N.H.useMemoCache(O)}},ie.cache=function(O){return function(){return O.apply(null,arguments)}},ie.cacheSignal=function(){return null},ie.cloneElement=function(O,it,St){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var V=C({},O.props),dt=O.key;if(it!=null)for(Et in it.key!==void 0&&(dt=""+it.key),it)!W.call(it,Et)||Et==="key"||Et==="__self"||Et==="__source"||Et==="ref"&&it.ref===void 0||(V[Et]=it[Et]);var Et=arguments.length-2;if(Et===1)V.children=St;else if(1<Et){for(var gt=Array(Et),Gt=0;Gt<Et;Gt++)gt[Gt]=arguments[Gt+2];V.children=gt}return w(O.type,dt,V)},ie.createContext=function(O){return O={$$typeof:d,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:u,_context:O},O},ie.createElement=function(O,it,St){var V,dt={},Et=null;if(it!=null)for(V in it.key!==void 0&&(Et=""+it.key),it)W.call(it,V)&&V!=="key"&&V!=="__self"&&V!=="__source"&&(dt[V]=it[V]);var gt=arguments.length-2;if(gt===1)dt.children=St;else if(1<gt){for(var Gt=Array(gt),Nt=0;Nt<gt;Nt++)Gt[Nt]=arguments[Nt+2];dt.children=Gt}if(O&&O.defaultProps)for(V in gt=O.defaultProps,gt)dt[V]===void 0&&(dt[V]=gt[V]);return w(O,Et,dt)},ie.createRef=function(){return{current:null}},ie.forwardRef=function(O){return{$$typeof:h,render:O}},ie.isValidElement=k,ie.lazy=function(O){return{$$typeof:_,_payload:{_status:-1,_result:O},_init:X}},ie.memo=function(O,it){return{$$typeof:p,type:O,compare:it===void 0?null:it}},ie.startTransition=function(O){var it=N.T,St={};N.T=St;try{var V=O(),dt=N.S;dt!==null&&dt(St,V),typeof V=="object"&&V!==null&&typeof V.then=="function"&&V.then(F,mt)}catch(Et){mt(Et)}finally{it!==null&&St.types!==null&&(it.types=St.types),N.T=it}},ie.unstable_useCacheRefresh=function(){return N.H.useCacheRefresh()},ie.use=function(O){return N.H.use(O)},ie.useActionState=function(O,it,St){return N.H.useActionState(O,it,St)},ie.useCallback=function(O,it){return N.H.useCallback(O,it)},ie.useContext=function(O){return N.H.useContext(O)},ie.useDebugValue=function(){},ie.useDeferredValue=function(O,it){return N.H.useDeferredValue(O,it)},ie.useEffect=function(O,it){return N.H.useEffect(O,it)},ie.useEffectEvent=function(O){return N.H.useEffectEvent(O)},ie.useId=function(){return N.H.useId()},ie.useImperativeHandle=function(O,it,St){return N.H.useImperativeHandle(O,it,St)},ie.useInsertionEffect=function(O,it){return N.H.useInsertionEffect(O,it)},ie.useLayoutEffect=function(O,it){return N.H.useLayoutEffect(O,it)},ie.useMemo=function(O,it){return N.H.useMemo(O,it)},ie.useOptimistic=function(O,it){return N.H.useOptimistic(O,it)},ie.useReducer=function(O,it,St){return N.H.useReducer(O,it,St)},ie.useRef=function(O){return N.H.useRef(O)},ie.useState=function(O){return N.H.useState(O)},ie.useSyncExternalStore=function(O,it,St){return N.H.useSyncExternalStore(O,it,St)},ie.useTransition=function(){return N.H.useTransition()},ie.version="19.2.3",ie}var Cg;function Lh(){return Cg||(Cg=1,Bf.exports=Qx()),Bf.exports}var Xe=Lh();const Jx=c0(Xe);var If={exports:{}},Mo={},Ff={exports:{}},Hf={};var wg;function $x(){return wg||(wg=1,(function(o){function e(I,q){var X=I.length;I.push(q);t:for(;0<X;){var mt=X-1>>>1,lt=I[mt];if(0<l(lt,q))I[mt]=q,I[X]=lt,X=mt;else break t}}function i(I){return I.length===0?null:I[0]}function s(I){if(I.length===0)return null;var q=I[0],X=I.pop();if(X!==q){I[0]=X;t:for(var mt=0,lt=I.length,O=lt>>>1;mt<O;){var it=2*(mt+1)-1,St=I[it],V=it+1,dt=I[V];if(0>l(St,X))V<lt&&0>l(dt,St)?(I[mt]=dt,I[V]=X,mt=V):(I[mt]=St,I[it]=X,mt=it);else if(V<lt&&0>l(dt,X))I[mt]=dt,I[V]=X,mt=V;else break t}}return q}function l(I,q){var X=I.sortIndex-q.sortIndex;return X!==0?X:I.id-q.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var m=[],p=[],_=1,x=null,y=3,M=!1,A=!1,C=!1,S=!1,v=typeof setTimeout=="function"?setTimeout:null,z=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function L(I){for(var q=i(p);q!==null;){if(q.callback===null)s(p);else if(q.startTime<=I)s(p),q.sortIndex=q.expirationTime,e(m,q);else break;q=i(p)}}function Y(I){if(C=!1,L(I),!A)if(i(m)!==null)A=!0,F||(F=!0,J());else{var q=i(p);q!==null&&ct(Y,q.startTime-I)}}var F=!1,N=-1,W=5,w=-1;function T(){return S?!0:!(o.unstable_now()-w<W)}function k(){if(S=!1,F){var I=o.unstable_now();w=I;var q=!0;try{t:{A=!1,C&&(C=!1,z(N),N=-1),M=!0;var X=y;try{e:{for(L(I),x=i(m);x!==null&&!(x.expirationTime>I&&T());){var mt=x.callback;if(typeof mt=="function"){x.callback=null,y=x.priorityLevel;var lt=mt(x.expirationTime<=I);if(I=o.unstable_now(),typeof lt=="function"){x.callback=lt,L(I),q=!0;break e}x===i(m)&&s(m),L(I)}else s(m);x=i(m)}if(x!==null)q=!0;else{var O=i(p);O!==null&&ct(Y,O.startTime-I),q=!1}}break t}finally{x=null,y=X,M=!1}q=void 0}}finally{q?J():F=!1}}}var J;if(typeof U=="function")J=function(){U(k)};else if(typeof MessageChannel<"u"){var H=new MessageChannel,ot=H.port2;H.port1.onmessage=k,J=function(){ot.postMessage(null)}}else J=function(){v(k,0)};function ct(I,q){N=v(function(){I(o.unstable_now())},q)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(I){I.callback=null},o.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<I?Math.floor(1e3/I):5},o.unstable_getCurrentPriorityLevel=function(){return y},o.unstable_next=function(I){switch(y){case 1:case 2:case 3:var q=3;break;default:q=y}var X=y;y=q;try{return I()}finally{y=X}},o.unstable_requestPaint=function(){S=!0},o.unstable_runWithPriority=function(I,q){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var X=y;y=I;try{return q()}finally{y=X}},o.unstable_scheduleCallback=function(I,q,X){var mt=o.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?mt+X:mt):X=mt,I){case 1:var lt=-1;break;case 2:lt=250;break;case 5:lt=1073741823;break;case 4:lt=1e4;break;default:lt=5e3}return lt=X+lt,I={id:_++,callback:q,priorityLevel:I,startTime:X,expirationTime:lt,sortIndex:-1},X>mt?(I.sortIndex=X,e(p,I),i(m)===null&&I===i(p)&&(C?(z(N),N=-1):C=!0,ct(Y,X-mt))):(I.sortIndex=lt,e(m,I),A||M||(A=!0,F||(F=!0,J()))),I},o.unstable_shouldYield=T,o.unstable_wrapCallback=function(I){var q=y;return function(){var X=y;y=q;try{return I.apply(this,arguments)}finally{y=X}}}})(Hf)),Hf}var Dg;function ty(){return Dg||(Dg=1,Ff.exports=$x()),Ff.exports}var Gf={exports:{}},yn={};var Ug;function ey(){if(Ug)return yn;Ug=1;var o=Lh();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,_){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:m,containerInfo:p,implementation:_}}var d=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return yn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,yn.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return u(m,p,null,_)},yn.flushSync=function(m){var p=d.T,_=s.p;try{if(d.T=null,s.p=2,m)return m()}finally{d.T=p,s.p=_,s.d.f()}},yn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},yn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},yn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,x=h(_,p.crossOrigin),y=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:x,integrity:y,fetchPriority:M}):_==="script"&&s.d.X(m,{crossOrigin:x,integrity:y,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},yn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=h(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},yn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,x=h(_,p.crossOrigin);s.d.L(m,_,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},yn.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=h(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},yn.requestFormReset=function(m){s.d.r(m)},yn.unstable_batchedUpdates=function(m,p){return m(p)},yn.useFormState=function(m,p,_){return d.H.useFormState(m,p,_)},yn.useFormStatus=function(){return d.H.useHostTransitionStatus()},yn.version="19.2.3",yn}var Lg;function ny(){if(Lg)return Gf.exports;Lg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Gf.exports=ey(),Gf.exports}var Ng;function iy(){if(Ng)return Mo;Ng=1;var o=ty(),e=Lh(),i=ny();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(u(t)!==t)throw Error(s(188))}function p(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,r=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(r=c.return,r!==null){a=r;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return m(c),t;if(f===r)return m(c),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=c,r=f;else{for(var g=!1,b=c.child;b;){if(b===a){g=!0,a=c,r=f;break}if(b===r){g=!0,r=c,a=f;break}b=b.sibling}if(!g){for(b=f.child;b;){if(b===a){g=!0,a=f,r=c;break}if(b===r){g=!0,r=f,a=c;break}b=b.sibling}if(!g)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function _(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=_(t),n!==null)return n;t=t.sibling}return null}var x=Object.assign,y=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),z=Symbol.for("react.consumer"),U=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),Y=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),N=Symbol.for("react.memo"),W=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),T=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function J(t){return t===null||typeof t!="object"?null:(t=k&&t[k]||t["@@iterator"],typeof t=="function"?t:null)}var H=Symbol.for("react.client.reference");function ot(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===H?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case C:return"Fragment";case v:return"Profiler";case S:return"StrictMode";case Y:return"Suspense";case F:return"SuspenseList";case w:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case A:return"Portal";case U:return t.displayName||"Context";case z:return(t._context.displayName||"Context")+".Consumer";case L:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case N:return n=t.displayName||null,n!==null?n:ot(t.type)||"Memo";case W:n=t._payload,t=t._init;try{return ot(t(n))}catch{}}return null}var ct=Array.isArray,I=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X={pending:!1,data:null,method:null,action:null},mt=[],lt=-1;function O(t){return{current:t}}function it(t){0>lt||(t.current=mt[lt],mt[lt]=null,lt--)}function St(t,n){lt++,mt[lt]=t.current,t.current=n}var V=O(null),dt=O(null),Et=O(null),gt=O(null);function Gt(t,n){switch(St(Et,n),St(dt,t),St(V,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?jm(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=jm(n),t=Zm(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}it(V),St(V,t)}function Nt(){it(V),it(dt),it(Et)}function $(t){t.memoizedState!==null&&St(gt,t);var n=V.current,a=Zm(n,t.type);n!==a&&(St(dt,t),St(V,a))}function ye(t){dt.current===t&&(it(V),it(dt)),gt.current===t&&(it(gt),_o._currentValue=X)}var qt,be;function It(t){if(qt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);qt=n&&n[1]||"",be=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+qt+t+be}var le=!1;function ee(t,n){if(!t||le)return"";le=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var vt=function(){throw Error()};if(Object.defineProperty(vt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(vt,[])}catch(ut){var at=ut}Reflect.construct(t,[],vt)}else{try{vt.call()}catch(ut){at=ut}t.call(vt.prototype)}}else{try{throw Error()}catch(ut){at=ut}(vt=t())&&typeof vt.catch=="function"&&vt.catch(function(){})}}catch(ut){if(ut&&at&&typeof ut.stack=="string")return[ut.stack,at.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),g=f[0],b=f[1];if(g&&b){var B=g.split(`
`),et=b.split(`
`);for(c=r=0;r<B.length&&!B[r].includes("DetermineComponentFrameRoot");)r++;for(;c<et.length&&!et[c].includes("DetermineComponentFrameRoot");)c++;if(r===B.length||c===et.length)for(r=B.length-1,c=et.length-1;1<=r&&0<=c&&B[r]!==et[c];)c--;for(;1<=r&&0<=c;r--,c--)if(B[r]!==et[c]){if(r!==1||c!==1)do if(r--,c--,0>c||B[r]!==et[c]){var pt=`
`+B[r].replace(" at new "," at ");return t.displayName&&pt.includes("<anonymous>")&&(pt=pt.replace("<anonymous>",t.displayName)),pt}while(1<=r&&0<=c);break}}}finally{le=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?It(a):""}function he(t,n){switch(t.tag){case 26:case 27:case 5:return It(t.type);case 16:return It("Lazy");case 13:return t.child!==n&&n!==null?It("Suspense Fallback"):It("Suspense");case 19:return It("SuspenseList");case 0:case 15:return ee(t.type,!1);case 11:return ee(t.type.render,!1);case 1:return ee(t.type,!0);case 31:return It("Activity");default:return""}}function ze(t){try{var n="",a=null;do n+=he(t,a),a=t,t=t.return;while(t);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var P=Object.prototype.hasOwnProperty,R=o.unstable_scheduleCallback,ft=o.unstable_cancelCallback,xt=o.unstable_shouldYield,Tt=o.unstable_requestPaint,yt=o.unstable_now,Vt=o.unstable_getCurrentPriorityLevel,wt=o.unstable_ImmediatePriority,Ct=o.unstable_UserBlockingPriority,Kt=o.unstable_NormalPriority,At=o.unstable_LowPriority,Ft=o.unstable_IdlePriority,de=o.log,Yt=o.unstable_setDisableYieldValue,Ut=null,Xt=null;function Jt(t){if(typeof de=="function"&&Yt(t),Xt&&typeof Xt.setStrictMode=="function")try{Xt.setStrictMode(Ut,t)}catch{}}var se=Math.clz32?Math.clz32:K,re=Math.log,E=Math.LN2;function K(t){return t>>>=0,t===0?32:31-(re(t)/E|0)|0}var nt=256,Mt=262144,bt=4194304;function Zt(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ae(t,n,a){var r=t.pendingLanes;if(r===0)return 0;var c=0,f=t.suspendedLanes,g=t.pingedLanes;t=t.warmLanes;var b=r&134217727;return b!==0?(r=b&~f,r!==0?c=Zt(r):(g&=b,g!==0?c=Zt(g):a||(a=b&~t,a!==0&&(c=Zt(a))))):(b=r&~f,b!==0?c=Zt(b):g!==0?c=Zt(g):a||(a=r&~t,a!==0&&(c=Zt(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function Ce(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Je(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ve(){var t=bt;return bt<<=1,(bt&62914560)===0&&(bt=4194304),t}function Ge(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Ae(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function vi(t,n,a,r,c,f){var g=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var b=t.entanglements,B=t.expirationTimes,et=t.hiddenUpdates;for(a=g&~a;0<a;){var pt=31-se(a),vt=1<<pt;b[pt]=0,B[pt]=-1;var at=et[pt];if(at!==null)for(et[pt]=null,pt=0;pt<at.length;pt++){var ut=at[pt];ut!==null&&(ut.lane&=-536870913)}a&=~vt}r!==0&&Tn(t,r,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(g&~n))}function Tn(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var r=31-se(n);t.entangledLanes|=n,t.entanglements[r]=t.entanglements[r]|1073741824|a&261930}function ui(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var r=31-se(a),c=1<<r;c&n|t[r]&n&&(t[r]|=n),a&=~c}}function Jn(t,n){var a=n&-n;return a=(a&42)!==0?1:Ui(a),(a&(t.suspendedLanes|n))!==0?0:a}function Ui(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function aa(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Ur(){var t=q.p;return t!==0?t:(t=window.event,t===void 0?32:vg(t.type))}function Lr(t,n){var a=q.p;try{return q.p=t,n()}finally{q.p=a}}var xi=Math.random().toString(36).slice(2),sn="__reactFiber$"+xi,_n="__reactProps$"+xi,D="__reactContainer$"+xi,Q="__reactEvents$"+xi,ht="__reactListeners$"+xi,rt="__reactHandles$"+xi,st="__reactResources$"+xi,Rt="__reactMarker$"+xi;function Pt(t){delete t[sn],delete t[_n],delete t[Q],delete t[ht],delete t[rt]}function zt(t){var n=t[sn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[D]||a[sn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=ng(t);t!==null;){if(a=t[sn])return a;t=ng(t)}return n}t=a,a=t.parentNode}return null}function kt(t){if(t=t[sn]||t[D]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function Qt(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function $t(t){var n=t[st];return n||(n=t[st]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Ht(t){t[Rt]=!0}var We=new Set,rn={};function Ze(t,n){vn(t,n),vn(t+"Capture",n)}function vn(t,n){for(rn[t]=n,t=0;t<n.length;t++)We.add(n[t])}var Me=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ne={},sa={};function Be(t){return P.call(sa,t)?!0:P.call(ne,t)?!1:Me.test(t)?sa[t]=!0:(ne[t]=!0,!1)}function $n(t,n,a){if(Be(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Wa(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function bn(t,n,a,r){if(r===null)t.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+r)}}function xn(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function on(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function yi(t,n,a){var r=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var c=r.get,f=r.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(g){a=""+g,f.call(this,g)}}),Object.defineProperty(t,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(g){a=""+g},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function qa(t){if(!t._valueTracker){var n=on(t)?"checked":"value";t._valueTracker=yi(t,n,""+t[n])}}function An(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return t&&(r=on(t)?t.checked?"true":"false":t.value),t=r,t!==a?(n.setValue(t),!0):!1}function ra(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Cc=/[\n"\\]/g;function Rn(t){return t.replace(Cc,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function wc(t,n,a,r,c,f,g,b){t.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?t.type=g:t.removeAttribute("type"),n!=null?g==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+xn(n)):t.value!==""+xn(n)&&(t.value=""+xn(n)):g!=="submit"&&g!=="reset"||t.removeAttribute("value"),n!=null?Dc(t,g,xn(n)):a!=null?Dc(t,g,xn(a)):r!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?t.name=""+xn(b):t.removeAttribute("name")}function Vh(t,n,a,r,c,f,g,b){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){qa(t);return}a=a!=null?""+xn(a):"",n=n!=null?""+xn(n):a,b||n===t.value||(t.value=n),t.defaultValue=n}r=r??c,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=b?t.checked:!!r,t.defaultChecked=!!r,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(t.name=g),qa(t)}function Dc(t,n,a){n==="number"&&ra(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Es(t,n,a,r){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&r&&(t[a].defaultSelected=!0)}else{for(a=""+xn(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,r&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function Xh(t,n,a){if(n!=null&&(n=""+xn(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+xn(a):""}function kh(t,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(ct(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=xn(n),t.defaultValue=a,r=t.textContent,r===a&&r!==""&&r!==null&&(t.value=r),qa(t)}function Ts(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var k0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Wh(t,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":r?t.setProperty(n,a):typeof a!="number"||a===0||k0.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function qh(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="");for(var c in n)r=n[c],n.hasOwnProperty(c)&&a[c]!==r&&Wh(t,c,r)}else for(var f in n)n.hasOwnProperty(f)&&Wh(t,f,n[f])}function Uc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var W0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),q0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Po(t){return q0.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Li(){}var Lc=null;function Nc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var bs=null,As=null;function Yh(t){var n=kt(t);if(n&&(t=n.stateNode)){var a=t[_n]||null;t:switch(t=n.stateNode,n.type){case"input":if(wc(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Rn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==t&&r.form===t.form){var c=r[_n]||null;if(!c)throw Error(s(90));wc(r,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===t.form&&An(r)}break t;case"textarea":Xh(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Es(t,!!a.multiple,n,!1)}}}var Oc=!1;function jh(t,n,a){if(Oc)return t(n,a);Oc=!0;try{var r=t(n);return r}finally{if(Oc=!1,(bs!==null||As!==null)&&(El(),bs&&(n=bs,t=As,As=bs=null,Yh(n),t)))for(n=0;n<t.length;n++)Yh(t[n])}}function Nr(t,n){var a=t.stateNode;if(a===null)return null;var r=a[_n]||null;if(r===null)return null;a=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Ni=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),zc=!1;if(Ni)try{var Or={};Object.defineProperty(Or,"passive",{get:function(){zc=!0}}),window.addEventListener("test",Or,Or),window.removeEventListener("test",Or,Or)}catch{zc=!1}var oa=null,Pc=null,Bo=null;function Zh(){if(Bo)return Bo;var t,n=Pc,a=n.length,r,c="value"in oa?oa.value:oa.textContent,f=c.length;for(t=0;t<a&&n[t]===c[t];t++);var g=a-t;for(r=1;r<=g&&n[a-r]===c[f-r];r++);return Bo=c.slice(t,1<r?1-r:void 0)}function Io(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Fo(){return!0}function Kh(){return!1}function Un(t){function n(a,r,c,f,g){this._reactName=a,this._targetInst=c,this.type=r,this.nativeEvent=f,this.target=g,this.currentTarget=null;for(var b in t)t.hasOwnProperty(b)&&(a=t[b],this[b]=a?a(f):f[b]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Fo:Kh,this.isPropagationStopped=Kh,this}return x(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Fo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Fo)},persist:function(){},isPersistent:Fo}),n}var Ya={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ho=Un(Ya),zr=x({},Ya,{view:0,detail:0}),Y0=Un(zr),Bc,Ic,Pr,Go=x({},zr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Pr&&(Pr&&t.type==="mousemove"?(Bc=t.screenX-Pr.screenX,Ic=t.screenY-Pr.screenY):Ic=Bc=0,Pr=t),Bc)},movementY:function(t){return"movementY"in t?t.movementY:Ic}}),Qh=Un(Go),j0=x({},Go,{dataTransfer:0}),Z0=Un(j0),K0=x({},zr,{relatedTarget:0}),Fc=Un(K0),Q0=x({},Ya,{animationName:0,elapsedTime:0,pseudoElement:0}),J0=Un(Q0),$0=x({},Ya,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),tv=Un($0),ev=x({},Ya,{data:0}),Jh=Un(ev),nv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},iv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},av={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function sv(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=av[t])?!!n[t]:!1}function Hc(){return sv}var rv=x({},zr,{key:function(t){if(t.key){var n=nv[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Io(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?iv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hc,charCode:function(t){return t.type==="keypress"?Io(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Io(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ov=Un(rv),lv=x({},Go,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$h=Un(lv),cv=x({},zr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hc}),uv=Un(cv),fv=x({},Ya,{propertyName:0,elapsedTime:0,pseudoElement:0}),hv=Un(fv),dv=x({},Go,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),pv=Un(dv),mv=x({},Ya,{newState:0,oldState:0}),gv=Un(mv),_v=[9,13,27,32],Gc=Ni&&"CompositionEvent"in window,Br=null;Ni&&"documentMode"in document&&(Br=document.documentMode);var vv=Ni&&"TextEvent"in window&&!Br,td=Ni&&(!Gc||Br&&8<Br&&11>=Br),ed=" ",nd=!1;function id(t,n){switch(t){case"keyup":return _v.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ad(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Rs=!1;function xv(t,n){switch(t){case"compositionend":return ad(n);case"keypress":return n.which!==32?null:(nd=!0,ed);case"textInput":return t=n.data,t===ed&&nd?null:t;default:return null}}function yv(t,n){if(Rs)return t==="compositionend"||!Gc&&id(t,n)?(t=Zh(),Bo=Pc=oa=null,Rs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return td&&n.locale!=="ko"?null:n.data;default:return null}}var Sv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function sd(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Sv[t.type]:n==="textarea"}function rd(t,n,a,r){bs?As?As.push(r):As=[r]:bs=r,n=Dl(n,"onChange"),0<n.length&&(a=new Ho("onChange","change",null,a,r),t.push({event:a,listeners:n}))}var Ir=null,Fr=null;function Mv(t){Vm(t,0)}function Vo(t){var n=Qt(t);if(An(n))return t}function od(t,n){if(t==="change")return n}var ld=!1;if(Ni){var Vc;if(Ni){var Xc="oninput"in document;if(!Xc){var cd=document.createElement("div");cd.setAttribute("oninput","return;"),Xc=typeof cd.oninput=="function"}Vc=Xc}else Vc=!1;ld=Vc&&(!document.documentMode||9<document.documentMode)}function ud(){Ir&&(Ir.detachEvent("onpropertychange",fd),Fr=Ir=null)}function fd(t){if(t.propertyName==="value"&&Vo(Fr)){var n=[];rd(n,Fr,t,Nc(t)),jh(Mv,n)}}function Ev(t,n,a){t==="focusin"?(ud(),Ir=n,Fr=a,Ir.attachEvent("onpropertychange",fd)):t==="focusout"&&ud()}function Tv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Vo(Fr)}function bv(t,n){if(t==="click")return Vo(n)}function Av(t,n){if(t==="input"||t==="change")return Vo(n)}function Rv(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Hn=typeof Object.is=="function"?Object.is:Rv;function Hr(t,n){if(Hn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var c=a[r];if(!P.call(n,c)||!Hn(t[c],n[c]))return!1}return!0}function hd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function dd(t,n){var a=hd(t);t=0;for(var r;a;){if(a.nodeType===3){if(r=t+a.textContent.length,t<=n&&r>=n)return{node:a,offset:n-t};t=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=hd(a)}}function pd(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?pd(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function md(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=ra(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=ra(t.document)}return n}function kc(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var Cv=Ni&&"documentMode"in document&&11>=document.documentMode,Cs=null,Wc=null,Gr=null,qc=!1;function gd(t,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;qc||Cs==null||Cs!==ra(r)||(r=Cs,"selectionStart"in r&&kc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Gr&&Hr(Gr,r)||(Gr=r,r=Dl(Wc,"onSelect"),0<r.length&&(n=new Ho("onSelect","select",null,n,a),t.push({event:n,listeners:r}),n.target=Cs)))}function ja(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var ws={animationend:ja("Animation","AnimationEnd"),animationiteration:ja("Animation","AnimationIteration"),animationstart:ja("Animation","AnimationStart"),transitionrun:ja("Transition","TransitionRun"),transitionstart:ja("Transition","TransitionStart"),transitioncancel:ja("Transition","TransitionCancel"),transitionend:ja("Transition","TransitionEnd")},Yc={},_d={};Ni&&(_d=document.createElement("div").style,"AnimationEvent"in window||(delete ws.animationend.animation,delete ws.animationiteration.animation,delete ws.animationstart.animation),"TransitionEvent"in window||delete ws.transitionend.transition);function Za(t){if(Yc[t])return Yc[t];if(!ws[t])return t;var n=ws[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in _d)return Yc[t]=n[a];return t}var vd=Za("animationend"),xd=Za("animationiteration"),yd=Za("animationstart"),wv=Za("transitionrun"),Dv=Za("transitionstart"),Uv=Za("transitioncancel"),Sd=Za("transitionend"),Md=new Map,jc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");jc.push("scrollEnd");function fi(t,n){Md.set(t,n),Ze(n,[t])}var Xo=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ti=[],Ds=0,Zc=0;function ko(){for(var t=Ds,n=Zc=Ds=0;n<t;){var a=ti[n];ti[n++]=null;var r=ti[n];ti[n++]=null;var c=ti[n];ti[n++]=null;var f=ti[n];if(ti[n++]=null,r!==null&&c!==null){var g=r.pending;g===null?c.next=c:(c.next=g.next,g.next=c),r.pending=c}f!==0&&Ed(a,c,f)}}function Wo(t,n,a,r){ti[Ds++]=t,ti[Ds++]=n,ti[Ds++]=a,ti[Ds++]=r,Zc|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function Kc(t,n,a,r){return Wo(t,n,a,r),qo(t)}function Ka(t,n){return Wo(t,null,null,n),qo(t)}function Ed(t,n,a){t.lanes|=a;var r=t.alternate;r!==null&&(r.lanes|=a);for(var c=!1,f=t.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,c&&n!==null&&(c=31-se(a),t=f.hiddenUpdates,r=t[c],r===null?t[c]=[n]:r.push(n),n.lane=a|536870912),f):null}function qo(t){if(50<co)throw co=0,rf=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Us={};function Lv(t,n,a,r){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Gn(t,n,a,r){return new Lv(t,n,a,r)}function Qc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Oi(t,n){var a=t.alternate;return a===null?(a=Gn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Td(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Yo(t,n,a,r,c,f){var g=0;if(r=t,typeof t=="function")Qc(t)&&(g=1);else if(typeof t=="string")g=Bx(t,a,V.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case w:return t=Gn(31,a,n,c),t.elementType=w,t.lanes=f,t;case C:return Qa(a.children,c,f,n);case S:g=8,c|=24;break;case v:return t=Gn(12,a,n,c|2),t.elementType=v,t.lanes=f,t;case Y:return t=Gn(13,a,n,c),t.elementType=Y,t.lanes=f,t;case F:return t=Gn(19,a,n,c),t.elementType=F,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case U:g=10;break t;case z:g=9;break t;case L:g=11;break t;case N:g=14;break t;case W:g=16,r=null;break t}g=29,a=Error(s(130,t===null?"null":typeof t,"")),r=null}return n=Gn(g,a,n,c),n.elementType=t,n.type=r,n.lanes=f,n}function Qa(t,n,a,r){return t=Gn(7,t,r,n),t.lanes=a,t}function Jc(t,n,a){return t=Gn(6,t,null,n),t.lanes=a,t}function bd(t){var n=Gn(18,null,null,0);return n.stateNode=t,n}function $c(t,n,a){return n=Gn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Ad=new WeakMap;function ei(t,n){if(typeof t=="object"&&t!==null){var a=Ad.get(t);return a!==void 0?a:(n={value:t,source:n,stack:ze(n)},Ad.set(t,n),n)}return{value:t,source:n,stack:ze(n)}}var Ls=[],Ns=0,jo=null,Vr=0,ni=[],ii=0,la=null,Si=1,Mi="";function zi(t,n){Ls[Ns++]=Vr,Ls[Ns++]=jo,jo=t,Vr=n}function Rd(t,n,a){ni[ii++]=Si,ni[ii++]=Mi,ni[ii++]=la,la=t;var r=Si;t=Mi;var c=32-se(r)-1;r&=~(1<<c),a+=1;var f=32-se(n)+c;if(30<f){var g=c-c%5;f=(r&(1<<g)-1).toString(32),r>>=g,c-=g,Si=1<<32-se(n)+c|a<<c|r,Mi=f+t}else Si=1<<f|a<<c|r,Mi=t}function tu(t){t.return!==null&&(zi(t,1),Rd(t,1,0))}function eu(t){for(;t===jo;)jo=Ls[--Ns],Ls[Ns]=null,Vr=Ls[--Ns],Ls[Ns]=null;for(;t===la;)la=ni[--ii],ni[ii]=null,Mi=ni[--ii],ni[ii]=null,Si=ni[--ii],ni[ii]=null}function Cd(t,n){ni[ii++]=Si,ni[ii++]=Mi,ni[ii++]=la,Si=n.id,Mi=n.overflow,la=t}var dn=null,Ie=null,xe=!1,ca=null,ai=!1,nu=Error(s(519));function ua(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Xr(ei(n,t)),nu}function wd(t){var n=t.stateNode,a=t.type,r=t.memoizedProps;switch(n[sn]=t,n[_n]=r,a){case"dialog":me("cancel",n),me("close",n);break;case"iframe":case"object":case"embed":me("load",n);break;case"video":case"audio":for(a=0;a<fo.length;a++)me(fo[a],n);break;case"source":me("error",n);break;case"img":case"image":case"link":me("error",n),me("load",n);break;case"details":me("toggle",n);break;case"input":me("invalid",n),Vh(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":me("invalid",n);break;case"textarea":me("invalid",n),kh(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||qm(n.textContent,a)?(r.popover!=null&&(me("beforetoggle",n),me("toggle",n)),r.onScroll!=null&&me("scroll",n),r.onScrollEnd!=null&&me("scrollend",n),r.onClick!=null&&(n.onclick=Li),n=!0):n=!1,n||ua(t,!0)}function Dd(t){for(dn=t.return;dn;)switch(dn.tag){case 5:case 31:case 13:ai=!1;return;case 27:case 3:ai=!0;return;default:dn=dn.return}}function Os(t){if(t!==dn)return!1;if(!xe)return Dd(t),xe=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Sf(t.type,t.memoizedProps)),a=!a),a&&Ie&&ua(t),Dd(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Ie=eg(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Ie=eg(t)}else n===27?(n=Ie,Ta(t.type)?(t=Af,Af=null,Ie=t):Ie=n):Ie=dn?ri(t.stateNode.nextSibling):null;return!0}function Ja(){Ie=dn=null,xe=!1}function iu(){var t=ca;return t!==null&&(zn===null?zn=t:zn.push.apply(zn,t),ca=null),t}function Xr(t){ca===null?ca=[t]:ca.push(t)}var au=O(null),$a=null,Pi=null;function fa(t,n,a){St(au,n._currentValue),n._currentValue=a}function Bi(t){t._currentValue=au.current,it(au)}function su(t,n,a){for(;t!==null;){var r=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),t===a)break;t=t.return}}function ru(t,n,a,r){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var g=c.child;f=f.firstContext;t:for(;f!==null;){var b=f;f=c;for(var B=0;B<n.length;B++)if(b.context===n[B]){f.lanes|=a,b=f.alternate,b!==null&&(b.lanes|=a),su(f.return,a,t),r||(g=null);break t}f=b.next}}else if(c.tag===18){if(g=c.return,g===null)throw Error(s(341));g.lanes|=a,f=g.alternate,f!==null&&(f.lanes|=a),su(g,a,t),g=null}else g=c.child;if(g!==null)g.return=c;else for(g=c;g!==null;){if(g===t){g=null;break}if(c=g.sibling,c!==null){c.return=g.return,g=c;break}g=g.return}c=g}}function zs(t,n,a,r){t=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var g=c.alternate;if(g===null)throw Error(s(387));if(g=g.memoizedProps,g!==null){var b=c.type;Hn(c.pendingProps.value,g.value)||(t!==null?t.push(b):t=[b])}}else if(c===gt.current){if(g=c.alternate,g===null)throw Error(s(387));g.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(_o):t=[_o])}c=c.return}t!==null&&ru(n,t,a,r),n.flags|=262144}function Zo(t){for(t=t.firstContext;t!==null;){if(!Hn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ts(t){$a=t,Pi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function pn(t){return Ud($a,t)}function Ko(t,n){return $a===null&&ts(t),Ud(t,n)}function Ud(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Pi===null){if(t===null)throw Error(s(308));Pi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Pi=Pi.next=n;return a}var Nv=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,r){t.push(r)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},Ov=o.unstable_scheduleCallback,zv=o.unstable_NormalPriority,$e={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ou(){return{controller:new Nv,data:new Map,refCount:0}}function kr(t){t.refCount--,t.refCount===0&&Ov(zv,function(){t.controller.abort()})}var Wr=null,lu=0,Ps=0,Bs=null;function Pv(t,n){if(Wr===null){var a=Wr=[];lu=0,Ps=hf(),Bs={status:"pending",value:void 0,then:function(r){a.push(r)}}}return lu++,n.then(Ld,Ld),n}function Ld(){if(--lu===0&&Wr!==null){Bs!==null&&(Bs.status="fulfilled");var t=Wr;Wr=null,Ps=0,Bs=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Bv(t,n){var a=[],r={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){r.status="fulfilled",r.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(r.status="rejected",r.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),r}var Nd=I.S;I.S=function(t,n){gm=yt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Pv(t,n),Nd!==null&&Nd(t,n)};var es=O(null);function cu(){var t=es.current;return t!==null?t:Pe.pooledCache}function Qo(t,n){n===null?St(es,es.current):St(es,n.pool)}function Od(){var t=cu();return t===null?null:{parent:$e._currentValue,pool:t}}var Is=Error(s(460)),uu=Error(s(474)),Jo=Error(s(542)),$o={then:function(){}};function zd(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Pd(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Li,Li),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Id(t),t;default:if(typeof n.status=="string")n.then(Li,Li);else{if(t=Pe,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(r){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=r}},function(r){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Id(t),t}throw is=n,Is}}function ns(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(is=a,Is):a}}var is=null;function Bd(){if(is===null)throw Error(s(459));var t=is;return is=null,t}function Id(t){if(t===Is||t===Jo)throw Error(s(483))}var Fs=null,qr=0;function tl(t){var n=qr;return qr+=1,Fs===null&&(Fs=[]),Pd(Fs,t,n)}function Yr(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function el(t,n){throw n.$$typeof===y?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Fd(t){function n(j,G){if(t){var tt=j.deletions;tt===null?(j.deletions=[G],j.flags|=16):tt.push(G)}}function a(j,G){if(!t)return null;for(;G!==null;)n(j,G),G=G.sibling;return null}function r(j){for(var G=new Map;j!==null;)j.key!==null?G.set(j.key,j):G.set(j.index,j),j=j.sibling;return G}function c(j,G){return j=Oi(j,G),j.index=0,j.sibling=null,j}function f(j,G,tt){return j.index=tt,t?(tt=j.alternate,tt!==null?(tt=tt.index,tt<G?(j.flags|=67108866,G):tt):(j.flags|=67108866,G)):(j.flags|=1048576,G)}function g(j){return t&&j.alternate===null&&(j.flags|=67108866),j}function b(j,G,tt,_t){return G===null||G.tag!==6?(G=Jc(tt,j.mode,_t),G.return=j,G):(G=c(G,tt),G.return=j,G)}function B(j,G,tt,_t){var Wt=tt.type;return Wt===C?pt(j,G,tt.props.children,_t,tt.key):G!==null&&(G.elementType===Wt||typeof Wt=="object"&&Wt!==null&&Wt.$$typeof===W&&ns(Wt)===G.type)?(G=c(G,tt.props),Yr(G,tt),G.return=j,G):(G=Yo(tt.type,tt.key,tt.props,null,j.mode,_t),Yr(G,tt),G.return=j,G)}function et(j,G,tt,_t){return G===null||G.tag!==4||G.stateNode.containerInfo!==tt.containerInfo||G.stateNode.implementation!==tt.implementation?(G=$c(tt,j.mode,_t),G.return=j,G):(G=c(G,tt.children||[]),G.return=j,G)}function pt(j,G,tt,_t,Wt){return G===null||G.tag!==7?(G=Qa(tt,j.mode,_t,Wt),G.return=j,G):(G=c(G,tt),G.return=j,G)}function vt(j,G,tt){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return G=Jc(""+G,j.mode,tt),G.return=j,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case M:return tt=Yo(G.type,G.key,G.props,null,j.mode,tt),Yr(tt,G),tt.return=j,tt;case A:return G=$c(G,j.mode,tt),G.return=j,G;case W:return G=ns(G),vt(j,G,tt)}if(ct(G)||J(G))return G=Qa(G,j.mode,tt,null),G.return=j,G;if(typeof G.then=="function")return vt(j,tl(G),tt);if(G.$$typeof===U)return vt(j,Ko(j,G),tt);el(j,G)}return null}function at(j,G,tt,_t){var Wt=G!==null?G.key:null;if(typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint")return Wt!==null?null:b(j,G,""+tt,_t);if(typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case M:return tt.key===Wt?B(j,G,tt,_t):null;case A:return tt.key===Wt?et(j,G,tt,_t):null;case W:return tt=ns(tt),at(j,G,tt,_t)}if(ct(tt)||J(tt))return Wt!==null?null:pt(j,G,tt,_t,null);if(typeof tt.then=="function")return at(j,G,tl(tt),_t);if(tt.$$typeof===U)return at(j,G,Ko(j,tt),_t);el(j,tt)}return null}function ut(j,G,tt,_t,Wt){if(typeof _t=="string"&&_t!==""||typeof _t=="number"||typeof _t=="bigint")return j=j.get(tt)||null,b(G,j,""+_t,Wt);if(typeof _t=="object"&&_t!==null){switch(_t.$$typeof){case M:return j=j.get(_t.key===null?tt:_t.key)||null,B(G,j,_t,Wt);case A:return j=j.get(_t.key===null?tt:_t.key)||null,et(G,j,_t,Wt);case W:return _t=ns(_t),ut(j,G,tt,_t,Wt)}if(ct(_t)||J(_t))return j=j.get(tt)||null,pt(G,j,_t,Wt,null);if(typeof _t.then=="function")return ut(j,G,tt,tl(_t),Wt);if(_t.$$typeof===U)return ut(j,G,tt,Ko(G,_t),Wt);el(G,_t)}return null}function Ot(j,G,tt,_t){for(var Wt=null,Ee=null,Bt=G,ce=G=0,_e=null;Bt!==null&&ce<tt.length;ce++){Bt.index>ce?(_e=Bt,Bt=null):_e=Bt.sibling;var Te=at(j,Bt,tt[ce],_t);if(Te===null){Bt===null&&(Bt=_e);break}t&&Bt&&Te.alternate===null&&n(j,Bt),G=f(Te,G,ce),Ee===null?Wt=Te:Ee.sibling=Te,Ee=Te,Bt=_e}if(ce===tt.length)return a(j,Bt),xe&&zi(j,ce),Wt;if(Bt===null){for(;ce<tt.length;ce++)Bt=vt(j,tt[ce],_t),Bt!==null&&(G=f(Bt,G,ce),Ee===null?Wt=Bt:Ee.sibling=Bt,Ee=Bt);return xe&&zi(j,ce),Wt}for(Bt=r(Bt);ce<tt.length;ce++)_e=ut(Bt,j,ce,tt[ce],_t),_e!==null&&(t&&_e.alternate!==null&&Bt.delete(_e.key===null?ce:_e.key),G=f(_e,G,ce),Ee===null?Wt=_e:Ee.sibling=_e,Ee=_e);return t&&Bt.forEach(function(wa){return n(j,wa)}),xe&&zi(j,ce),Wt}function jt(j,G,tt,_t){if(tt==null)throw Error(s(151));for(var Wt=null,Ee=null,Bt=G,ce=G=0,_e=null,Te=tt.next();Bt!==null&&!Te.done;ce++,Te=tt.next()){Bt.index>ce?(_e=Bt,Bt=null):_e=Bt.sibling;var wa=at(j,Bt,Te.value,_t);if(wa===null){Bt===null&&(Bt=_e);break}t&&Bt&&wa.alternate===null&&n(j,Bt),G=f(wa,G,ce),Ee===null?Wt=wa:Ee.sibling=wa,Ee=wa,Bt=_e}if(Te.done)return a(j,Bt),xe&&zi(j,ce),Wt;if(Bt===null){for(;!Te.done;ce++,Te=tt.next())Te=vt(j,Te.value,_t),Te!==null&&(G=f(Te,G,ce),Ee===null?Wt=Te:Ee.sibling=Te,Ee=Te);return xe&&zi(j,ce),Wt}for(Bt=r(Bt);!Te.done;ce++,Te=tt.next())Te=ut(Bt,j,ce,Te.value,_t),Te!==null&&(t&&Te.alternate!==null&&Bt.delete(Te.key===null?ce:Te.key),G=f(Te,G,ce),Ee===null?Wt=Te:Ee.sibling=Te,Ee=Te);return t&&Bt.forEach(function(jx){return n(j,jx)}),xe&&zi(j,ce),Wt}function Ne(j,G,tt,_t){if(typeof tt=="object"&&tt!==null&&tt.type===C&&tt.key===null&&(tt=tt.props.children),typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case M:t:{for(var Wt=tt.key;G!==null;){if(G.key===Wt){if(Wt=tt.type,Wt===C){if(G.tag===7){a(j,G.sibling),_t=c(G,tt.props.children),_t.return=j,j=_t;break t}}else if(G.elementType===Wt||typeof Wt=="object"&&Wt!==null&&Wt.$$typeof===W&&ns(Wt)===G.type){a(j,G.sibling),_t=c(G,tt.props),Yr(_t,tt),_t.return=j,j=_t;break t}a(j,G);break}else n(j,G);G=G.sibling}tt.type===C?(_t=Qa(tt.props.children,j.mode,_t,tt.key),_t.return=j,j=_t):(_t=Yo(tt.type,tt.key,tt.props,null,j.mode,_t),Yr(_t,tt),_t.return=j,j=_t)}return g(j);case A:t:{for(Wt=tt.key;G!==null;){if(G.key===Wt)if(G.tag===4&&G.stateNode.containerInfo===tt.containerInfo&&G.stateNode.implementation===tt.implementation){a(j,G.sibling),_t=c(G,tt.children||[]),_t.return=j,j=_t;break t}else{a(j,G);break}else n(j,G);G=G.sibling}_t=$c(tt,j.mode,_t),_t.return=j,j=_t}return g(j);case W:return tt=ns(tt),Ne(j,G,tt,_t)}if(ct(tt))return Ot(j,G,tt,_t);if(J(tt)){if(Wt=J(tt),typeof Wt!="function")throw Error(s(150));return tt=Wt.call(tt),jt(j,G,tt,_t)}if(typeof tt.then=="function")return Ne(j,G,tl(tt),_t);if(tt.$$typeof===U)return Ne(j,G,Ko(j,tt),_t);el(j,tt)}return typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint"?(tt=""+tt,G!==null&&G.tag===6?(a(j,G.sibling),_t=c(G,tt),_t.return=j,j=_t):(a(j,G),_t=Jc(tt,j.mode,_t),_t.return=j,j=_t),g(j)):a(j,G)}return function(j,G,tt,_t){try{qr=0;var Wt=Ne(j,G,tt,_t);return Fs=null,Wt}catch(Bt){if(Bt===Is||Bt===Jo)throw Bt;var Ee=Gn(29,Bt,null,j.mode);return Ee.lanes=_t,Ee.return=j,Ee}finally{}}}var as=Fd(!0),Hd=Fd(!1),ha=!1;function fu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function hu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function da(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function pa(t,n,a){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(Re&2)!==0){var c=r.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),r.pending=n,n=qo(t),Ed(t,null,a),n}return Wo(t,r,n,a),qo(t)}function jr(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,ui(t,a)}}function du(t,n){var a=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var g={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=g:f=f.next=g,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:r.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var pu=!1;function Zr(){if(pu){var t=Bs;if(t!==null)throw t}}function Kr(t,n,a,r){pu=!1;var c=t.updateQueue;ha=!1;var f=c.firstBaseUpdate,g=c.lastBaseUpdate,b=c.shared.pending;if(b!==null){c.shared.pending=null;var B=b,et=B.next;B.next=null,g===null?f=et:g.next=et,g=B;var pt=t.alternate;pt!==null&&(pt=pt.updateQueue,b=pt.lastBaseUpdate,b!==g&&(b===null?pt.firstBaseUpdate=et:b.next=et,pt.lastBaseUpdate=B))}if(f!==null){var vt=c.baseState;g=0,pt=et=B=null,b=f;do{var at=b.lane&-536870913,ut=at!==b.lane;if(ut?(ge&at)===at:(r&at)===at){at!==0&&at===Ps&&(pu=!0),pt!==null&&(pt=pt.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});t:{var Ot=t,jt=b;at=n;var Ne=a;switch(jt.tag){case 1:if(Ot=jt.payload,typeof Ot=="function"){vt=Ot.call(Ne,vt,at);break t}vt=Ot;break t;case 3:Ot.flags=Ot.flags&-65537|128;case 0:if(Ot=jt.payload,at=typeof Ot=="function"?Ot.call(Ne,vt,at):Ot,at==null)break t;vt=x({},vt,at);break t;case 2:ha=!0}}at=b.callback,at!==null&&(t.flags|=64,ut&&(t.flags|=8192),ut=c.callbacks,ut===null?c.callbacks=[at]:ut.push(at))}else ut={lane:at,tag:b.tag,payload:b.payload,callback:b.callback,next:null},pt===null?(et=pt=ut,B=vt):pt=pt.next=ut,g|=at;if(b=b.next,b===null){if(b=c.shared.pending,b===null)break;ut=b,b=ut.next,ut.next=null,c.lastBaseUpdate=ut,c.shared.pending=null}}while(!0);pt===null&&(B=vt),c.baseState=B,c.firstBaseUpdate=et,c.lastBaseUpdate=pt,f===null&&(c.shared.lanes=0),xa|=g,t.lanes=g,t.memoizedState=vt}}function Gd(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function Vd(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Gd(a[t],n)}var Hs=O(null),nl=O(0);function Xd(t,n){t=qi,St(nl,t),St(Hs,n),qi=t|n.baseLanes}function mu(){St(nl,qi),St(Hs,Hs.current)}function gu(){qi=nl.current,it(Hs),it(nl)}var Vn=O(null),si=null;function ma(t){var n=t.alternate;St(Ke,Ke.current&1),St(Vn,t),si===null&&(n===null||Hs.current!==null||n.memoizedState!==null)&&(si=t)}function _u(t){St(Ke,Ke.current),St(Vn,t),si===null&&(si=t)}function kd(t){t.tag===22?(St(Ke,Ke.current),St(Vn,t),si===null&&(si=t)):ga()}function ga(){St(Ke,Ke.current),St(Vn,Vn.current)}function Xn(t){it(Vn),si===t&&(si=null),it(Ke)}var Ke=O(0);function il(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Tf(a)||bf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ii=0,oe=null,Ue=null,tn=null,al=!1,Gs=!1,ss=!1,sl=0,Qr=0,Vs=null,Iv=0;function qe(){throw Error(s(321))}function vu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Hn(t[a],n[a]))return!1;return!0}function xu(t,n,a,r,c,f){return Ii=f,oe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,I.H=t===null||t.memoizedState===null?Rp:Ou,ss=!1,f=a(r,c),ss=!1,Gs&&(f=qd(n,a,r,c)),Wd(t),f}function Wd(t){I.H=to;var n=Ue!==null&&Ue.next!==null;if(Ii=0,tn=Ue=oe=null,al=!1,Qr=0,Vs=null,n)throw Error(s(300));t===null||en||(t=t.dependencies,t!==null&&Zo(t)&&(en=!0))}function qd(t,n,a,r){oe=t;var c=0;do{if(Gs&&(Vs=null),Qr=0,Gs=!1,25<=c)throw Error(s(301));if(c+=1,tn=Ue=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}I.H=Cp,f=n(a,r)}while(Gs);return f}function Fv(){var t=I.H,n=t.useState()[0];return n=typeof n.then=="function"?Jr(n):n,t=t.useState()[0],(Ue!==null?Ue.memoizedState:null)!==t&&(oe.flags|=1024),n}function yu(){var t=sl!==0;return sl=0,t}function Su(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Mu(t){if(al){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}al=!1}Ii=0,tn=Ue=oe=null,Gs=!1,Qr=sl=0,Vs=null}function Cn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return tn===null?oe.memoizedState=tn=t:tn=tn.next=t,tn}function Qe(){if(Ue===null){var t=oe.alternate;t=t!==null?t.memoizedState:null}else t=Ue.next;var n=tn===null?oe.memoizedState:tn.next;if(n!==null)tn=n,Ue=t;else{if(t===null)throw oe.alternate===null?Error(s(467)):Error(s(310));Ue=t,t={memoizedState:Ue.memoizedState,baseState:Ue.baseState,baseQueue:Ue.baseQueue,queue:Ue.queue,next:null},tn===null?oe.memoizedState=tn=t:tn=tn.next=t}return tn}function rl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Jr(t){var n=Qr;return Qr+=1,Vs===null&&(Vs=[]),t=Pd(Vs,t,n),n=oe,(tn===null?n.memoizedState:tn.next)===null&&(n=n.alternate,I.H=n===null||n.memoizedState===null?Rp:Ou),t}function ol(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Jr(t);if(t.$$typeof===U)return pn(t)}throw Error(s(438,String(t)))}function Eu(t){var n=null,a=oe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=oe.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=rl(),oe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),r=0;r<t;r++)a[r]=T;return n.index++,a}function Fi(t,n){return typeof n=="function"?n(t):n}function ll(t){var n=Qe();return Tu(n,Ue,t)}function Tu(t,n,a){var r=t.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var c=t.baseQueue,f=r.pending;if(f!==null){if(c!==null){var g=c.next;c.next=f.next,f.next=g}n.baseQueue=c=f,r.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var b=g=null,B=null,et=n,pt=!1;do{var vt=et.lane&-536870913;if(vt!==et.lane?(ge&vt)===vt:(Ii&vt)===vt){var at=et.revertLane;if(at===0)B!==null&&(B=B.next={lane:0,revertLane:0,gesture:null,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null}),vt===Ps&&(pt=!0);else if((Ii&at)===at){et=et.next,at===Ps&&(pt=!0);continue}else vt={lane:0,revertLane:et.revertLane,gesture:null,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},B===null?(b=B=vt,g=f):B=B.next=vt,oe.lanes|=at,xa|=at;vt=et.action,ss&&a(f,vt),f=et.hasEagerState?et.eagerState:a(f,vt)}else at={lane:vt,revertLane:et.revertLane,gesture:et.gesture,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},B===null?(b=B=at,g=f):B=B.next=at,oe.lanes|=vt,xa|=vt;et=et.next}while(et!==null&&et!==n);if(B===null?g=f:B.next=b,!Hn(f,t.memoizedState)&&(en=!0,pt&&(a=Bs,a!==null)))throw a;t.memoizedState=f,t.baseState=g,t.baseQueue=B,r.lastRenderedState=f}return c===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function bu(t){var n=Qe(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var r=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var g=c=c.next;do f=t(f,g.action),g=g.next;while(g!==c);Hn(f,n.memoizedState)||(en=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function Yd(t,n,a){var r=oe,c=Qe(),f=xe;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var g=!Hn((Ue||c).memoizedState,a);if(g&&(c.memoizedState=a,en=!0),c=c.queue,Cu(Kd.bind(null,r,c,t),[t]),c.getSnapshot!==n||g||tn!==null&&tn.memoizedState.tag&1){if(r.flags|=2048,Xs(9,{destroy:void 0},Zd.bind(null,r,c,a,n),null),Pe===null)throw Error(s(349));f||(Ii&127)!==0||jd(r,n,a)}return a}function jd(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=oe.updateQueue,n===null?(n=rl(),oe.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Zd(t,n,a,r){n.value=a,n.getSnapshot=r,Qd(n)&&Jd(t)}function Kd(t,n,a){return a(function(){Qd(n)&&Jd(t)})}function Qd(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Hn(t,a)}catch{return!0}}function Jd(t){var n=Ka(t,2);n!==null&&Pn(n,t,2)}function Au(t){var n=Cn();if(typeof t=="function"){var a=t;if(t=a(),ss){Jt(!0);try{a()}finally{Jt(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fi,lastRenderedState:t},n}function $d(t,n,a,r){return t.baseState=a,Tu(t,Ue,typeof r=="function"?r:Fi)}function Hv(t,n,a,r,c){if(fl(t))throw Error(s(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){f.listeners.push(g)}};I.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,tp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function tp(t,n){var a=n.action,r=n.payload,c=t.state;if(n.isTransition){var f=I.T,g={};I.T=g;try{var b=a(c,r),B=I.S;B!==null&&B(g,b),ep(t,n,b)}catch(et){Ru(t,n,et)}finally{f!==null&&g.types!==null&&(f.types=g.types),I.T=f}}else try{f=a(c,r),ep(t,n,f)}catch(et){Ru(t,n,et)}}function ep(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){np(t,n,r)},function(r){return Ru(t,n,r)}):np(t,n,a)}function np(t,n,a){n.status="fulfilled",n.value=a,ip(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,tp(t,a)))}function Ru(t,n,a){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,ip(n),n=n.next;while(n!==r)}t.action=null}function ip(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function ap(t,n){return n}function sp(t,n){if(xe){var a=Pe.formState;if(a!==null){t:{var r=oe;if(xe){if(Ie){e:{for(var c=Ie,f=ai;c.nodeType!==8;){if(!f){c=null;break e}if(c=ri(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){Ie=ri(c.nextSibling),r=c.data==="F!";break t}}ua(r)}r=!1}r&&(n=a[0])}}return a=Cn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ap,lastRenderedState:n},a.queue=r,a=Tp.bind(null,oe,r),r.dispatch=a,r=Au(!1),f=Nu.bind(null,oe,!1,r.queue),r=Cn(),c={state:n,dispatch:null,action:t,pending:null},r.queue=c,a=Hv.bind(null,oe,c,f,a),c.dispatch=a,r.memoizedState=t,[n,a,!1]}function rp(t){var n=Qe();return op(n,Ue,t)}function op(t,n,a){if(n=Tu(t,n,ap)[0],t=ll(Fi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=Jr(n)}catch(g){throw g===Is?Jo:g}else r=n;n=Qe();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(oe.flags|=2048,Xs(9,{destroy:void 0},Gv.bind(null,c,a),null)),[r,f,t]}function Gv(t,n){t.action=n}function lp(t){var n=Qe(),a=Ue;if(a!==null)return op(n,a,t);Qe(),n=n.memoizedState,a=Qe();var r=a.queue.dispatch;return a.memoizedState=t,[n,r,!1]}function Xs(t,n,a,r){return t={tag:t,create:a,deps:r,inst:n,next:null},n=oe.updateQueue,n===null&&(n=rl(),oe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(r=a.next,a.next=t,t.next=r,n.lastEffect=t),t}function cp(){return Qe().memoizedState}function cl(t,n,a,r){var c=Cn();oe.flags|=t,c.memoizedState=Xs(1|n,{destroy:void 0},a,r===void 0?null:r)}function ul(t,n,a,r){var c=Qe();r=r===void 0?null:r;var f=c.memoizedState.inst;Ue!==null&&r!==null&&vu(r,Ue.memoizedState.deps)?c.memoizedState=Xs(n,f,a,r):(oe.flags|=t,c.memoizedState=Xs(1|n,f,a,r))}function up(t,n){cl(8390656,8,t,n)}function Cu(t,n){ul(2048,8,t,n)}function Vv(t){oe.flags|=4;var n=oe.updateQueue;if(n===null)n=rl(),oe.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function fp(t){var n=Qe().memoizedState;return Vv({ref:n,nextImpl:t}),function(){if((Re&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function hp(t,n){return ul(4,2,t,n)}function dp(t,n){return ul(4,4,t,n)}function pp(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function mp(t,n,a){a=a!=null?a.concat([t]):null,ul(4,4,pp.bind(null,n,t),a)}function wu(){}function gp(t,n){var a=Qe();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&vu(n,r[1])?r[0]:(a.memoizedState=[t,n],t)}function _p(t,n){var a=Qe();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&vu(n,r[1]))return r[0];if(r=t(),ss){Jt(!0);try{t()}finally{Jt(!1)}}return a.memoizedState=[r,n],r}function Du(t,n,a){return a===void 0||(Ii&1073741824)!==0&&(ge&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=vm(),oe.lanes|=t,xa|=t,a)}function vp(t,n,a,r){return Hn(a,n)?a:Hs.current!==null?(t=Du(t,a,r),Hn(t,n)||(en=!0),t):(Ii&42)===0||(Ii&1073741824)!==0&&(ge&261930)===0?(en=!0,t.memoizedState=a):(t=vm(),oe.lanes|=t,xa|=t,n)}function xp(t,n,a,r,c){var f=q.p;q.p=f!==0&&8>f?f:8;var g=I.T,b={};I.T=b,Nu(t,!1,n,a);try{var B=c(),et=I.S;if(et!==null&&et(b,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var pt=Bv(B,r);$r(t,n,pt,qn(t))}else $r(t,n,r,qn(t))}catch(vt){$r(t,n,{then:function(){},status:"rejected",reason:vt},qn())}finally{q.p=f,g!==null&&b.types!==null&&(g.types=b.types),I.T=g}}function Xv(){}function Uu(t,n,a,r){if(t.tag!==5)throw Error(s(476));var c=yp(t).queue;xp(t,c,n,X,a===null?Xv:function(){return Sp(t),a(r)})}function yp(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:X,baseState:X,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fi,lastRenderedState:X},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fi,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Sp(t){var n=yp(t);n.next===null&&(n=t.alternate.memoizedState),$r(t,n.next.queue,{},qn())}function Lu(){return pn(_o)}function Mp(){return Qe().memoizedState}function Ep(){return Qe().memoizedState}function kv(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=qn();t=da(a);var r=pa(n,t,a);r!==null&&(Pn(r,n,a),jr(r,n,a)),n={cache:ou()},t.payload=n;return}n=n.return}}function Wv(t,n,a){var r=qn();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},fl(t)?bp(n,a):(a=Kc(t,n,a,r),a!==null&&(Pn(a,t,r),Ap(a,n,r)))}function Tp(t,n,a){var r=qn();$r(t,n,a,r)}function $r(t,n,a,r){var c={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(fl(t))bp(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var g=n.lastRenderedState,b=f(g,a);if(c.hasEagerState=!0,c.eagerState=b,Hn(b,g))return Wo(t,n,c,0),Pe===null&&ko(),!1}catch{}finally{}if(a=Kc(t,n,c,r),a!==null)return Pn(a,t,r),Ap(a,n,r),!0}return!1}function Nu(t,n,a,r){if(r={lane:2,revertLane:hf(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},fl(t)){if(n)throw Error(s(479))}else n=Kc(t,a,r,2),n!==null&&Pn(n,t,2)}function fl(t){var n=t.alternate;return t===oe||n!==null&&n===oe}function bp(t,n){Gs=al=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Ap(t,n,a){if((a&4194048)!==0){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,ui(t,a)}}var to={readContext:pn,use:ol,useCallback:qe,useContext:qe,useEffect:qe,useImperativeHandle:qe,useLayoutEffect:qe,useInsertionEffect:qe,useMemo:qe,useReducer:qe,useRef:qe,useState:qe,useDebugValue:qe,useDeferredValue:qe,useTransition:qe,useSyncExternalStore:qe,useId:qe,useHostTransitionStatus:qe,useFormState:qe,useActionState:qe,useOptimistic:qe,useMemoCache:qe,useCacheRefresh:qe};to.useEffectEvent=qe;var Rp={readContext:pn,use:ol,useCallback:function(t,n){return Cn().memoizedState=[t,n===void 0?null:n],t},useContext:pn,useEffect:up,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,cl(4194308,4,pp.bind(null,n,t),a)},useLayoutEffect:function(t,n){return cl(4194308,4,t,n)},useInsertionEffect:function(t,n){cl(4,2,t,n)},useMemo:function(t,n){var a=Cn();n=n===void 0?null:n;var r=t();if(ss){Jt(!0);try{t()}finally{Jt(!1)}}return a.memoizedState=[r,n],r},useReducer:function(t,n,a){var r=Cn();if(a!==void 0){var c=a(n);if(ss){Jt(!0);try{a(n)}finally{Jt(!1)}}}else c=n;return r.memoizedState=r.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},r.queue=t,t=t.dispatch=Wv.bind(null,oe,t),[r.memoizedState,t]},useRef:function(t){var n=Cn();return t={current:t},n.memoizedState=t},useState:function(t){t=Au(t);var n=t.queue,a=Tp.bind(null,oe,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:wu,useDeferredValue:function(t,n){var a=Cn();return Du(a,t,n)},useTransition:function(){var t=Au(!1);return t=xp.bind(null,oe,t.queue,!0,!1),Cn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var r=oe,c=Cn();if(xe){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Pe===null)throw Error(s(349));(ge&127)!==0||jd(r,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,up(Kd.bind(null,r,f,t),[t]),r.flags|=2048,Xs(9,{destroy:void 0},Zd.bind(null,r,f,a,n),null),a},useId:function(){var t=Cn(),n=Pe.identifierPrefix;if(xe){var a=Mi,r=Si;a=(r&~(1<<32-se(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=sl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Iv++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Lu,useFormState:sp,useActionState:sp,useOptimistic:function(t){var n=Cn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Nu.bind(null,oe,!0,a),a.dispatch=n,[t,n]},useMemoCache:Eu,useCacheRefresh:function(){return Cn().memoizedState=kv.bind(null,oe)},useEffectEvent:function(t){var n=Cn(),a={impl:t};return n.memoizedState=a,function(){if((Re&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Ou={readContext:pn,use:ol,useCallback:gp,useContext:pn,useEffect:Cu,useImperativeHandle:mp,useInsertionEffect:hp,useLayoutEffect:dp,useMemo:_p,useReducer:ll,useRef:cp,useState:function(){return ll(Fi)},useDebugValue:wu,useDeferredValue:function(t,n){var a=Qe();return vp(a,Ue.memoizedState,t,n)},useTransition:function(){var t=ll(Fi)[0],n=Qe().memoizedState;return[typeof t=="boolean"?t:Jr(t),n]},useSyncExternalStore:Yd,useId:Mp,useHostTransitionStatus:Lu,useFormState:rp,useActionState:rp,useOptimistic:function(t,n){var a=Qe();return $d(a,Ue,t,n)},useMemoCache:Eu,useCacheRefresh:Ep};Ou.useEffectEvent=fp;var Cp={readContext:pn,use:ol,useCallback:gp,useContext:pn,useEffect:Cu,useImperativeHandle:mp,useInsertionEffect:hp,useLayoutEffect:dp,useMemo:_p,useReducer:bu,useRef:cp,useState:function(){return bu(Fi)},useDebugValue:wu,useDeferredValue:function(t,n){var a=Qe();return Ue===null?Du(a,t,n):vp(a,Ue.memoizedState,t,n)},useTransition:function(){var t=bu(Fi)[0],n=Qe().memoizedState;return[typeof t=="boolean"?t:Jr(t),n]},useSyncExternalStore:Yd,useId:Mp,useHostTransitionStatus:Lu,useFormState:lp,useActionState:lp,useOptimistic:function(t,n){var a=Qe();return Ue!==null?$d(a,Ue,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Eu,useCacheRefresh:Ep};Cp.useEffectEvent=fp;function zu(t,n,a,r){n=t.memoizedState,a=a(r,n),a=a==null?n:x({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Pu={enqueueSetState:function(t,n,a){t=t._reactInternals;var r=qn(),c=da(r);c.payload=n,a!=null&&(c.callback=a),n=pa(t,c,r),n!==null&&(Pn(n,t,r),jr(n,t,r))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var r=qn(),c=da(r);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=pa(t,c,r),n!==null&&(Pn(n,t,r),jr(n,t,r))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=qn(),r=da(a);r.tag=2,n!=null&&(r.callback=n),n=pa(t,r,a),n!==null&&(Pn(n,t,a),jr(n,t,a))}};function wp(t,n,a,r,c,f,g){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,f,g):n.prototype&&n.prototype.isPureReactComponent?!Hr(a,r)||!Hr(c,f):!0}function Dp(t,n,a,r){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==t&&Pu.enqueueReplaceState(n,n.state,null)}function rs(t,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(t=t.defaultProps){a===n&&(a=x({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}function Up(t){Xo(t)}function Lp(t){console.error(t)}function Np(t){Xo(t)}function hl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function Op(t,n,a){try{var r=t.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Bu(t,n,a){return a=da(a),a.tag=3,a.payload={element:null},a.callback=function(){hl(t,n)},a}function zp(t){return t=da(t),t.tag=3,t}function Pp(t,n,a,r){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=r.value;t.payload=function(){return c(f)},t.callback=function(){Op(n,a,r)}}var g=a.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(t.callback=function(){Op(n,a,r),typeof c!="function"&&(ya===null?ya=new Set([this]):ya.add(this));var b=r.stack;this.componentDidCatch(r.value,{componentStack:b!==null?b:""})})}function qv(t,n,a,r,c){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&zs(n,a,c,!0),a=Vn.current,a!==null){switch(a.tag){case 31:case 13:return si===null?Tl():a.alternate===null&&Ye===0&&(Ye=3),a.flags&=-257,a.flags|=65536,a.lanes=c,r===$o?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),cf(t,r,c)),!1;case 22:return a.flags|=65536,r===$o?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),cf(t,r,c)),!1}throw Error(s(435,a.tag))}return cf(t,r,c),Tl(),!1}if(xe)return n=Vn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,r!==nu&&(t=Error(s(422),{cause:r}),Xr(ei(t,a)))):(r!==nu&&(n=Error(s(423),{cause:r}),Xr(ei(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,r=ei(r,a),c=Bu(t.stateNode,r,c),du(t,c),Ye!==4&&(Ye=2)),!1;var f=Error(s(520),{cause:r});if(f=ei(f,a),lo===null?lo=[f]:lo.push(f),Ye!==4&&(Ye=2),n===null)return!0;r=ei(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=Bu(a.stateNode,r,t),du(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(ya===null||!ya.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=zp(c),Pp(c,t,a,r),du(a,c),!1}a=a.return}while(a!==null);return!1}var Iu=Error(s(461)),en=!1;function mn(t,n,a,r){n.child=t===null?Hd(n,null,a,r):as(n,t.child,a,r)}function Bp(t,n,a,r,c){a=a.render;var f=n.ref;if("ref"in r){var g={};for(var b in r)b!=="ref"&&(g[b]=r[b])}else g=r;return ts(n),r=xu(t,n,a,g,f,c),b=yu(),t!==null&&!en?(Su(t,n,c),Hi(t,n,c)):(xe&&b&&tu(n),n.flags|=1,mn(t,n,r,c),n.child)}function Ip(t,n,a,r,c){if(t===null){var f=a.type;return typeof f=="function"&&!Qc(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Fp(t,n,f,r,c)):(t=Yo(a.type,null,r,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!qu(t,c)){var g=f.memoizedProps;if(a=a.compare,a=a!==null?a:Hr,a(g,r)&&t.ref===n.ref)return Hi(t,n,c)}return n.flags|=1,t=Oi(f,r),t.ref=n.ref,t.return=n,n.child=t}function Fp(t,n,a,r,c){if(t!==null){var f=t.memoizedProps;if(Hr(f,r)&&t.ref===n.ref)if(en=!1,n.pendingProps=r=f,qu(t,c))(t.flags&131072)!==0&&(en=!0);else return n.lanes=t.lanes,Hi(t,n,c)}return Fu(t,n,a,r,c)}function Hp(t,n,a,r){var c=r.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(r=n.child=t.child,c=0;r!==null;)c=c|r.lanes|r.childLanes,r=r.sibling;r=c&~f}else r=0,n.child=null;return Gp(t,n,f,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Qo(n,f!==null?f.cachePool:null),f!==null?Xd(n,f):mu(),kd(n);else return r=n.lanes=536870912,Gp(t,n,f!==null?f.baseLanes|a:a,a,r)}else f!==null?(Qo(n,f.cachePool),Xd(n,f),ga(),n.memoizedState=null):(t!==null&&Qo(n,null),mu(),ga());return mn(t,n,c,a),n.child}function eo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Gp(t,n,a,r,c){var f=cu();return f=f===null?null:{parent:$e._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&Qo(n,null),mu(),kd(n),t!==null&&zs(t,n,r,!0),n.childLanes=c,null}function dl(t,n){return n=ml({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Vp(t,n,a){return as(n,t.child,null,a),t=dl(n,n.pendingProps),t.flags|=2,Xn(n),n.memoizedState=null,t}function Yv(t,n,a){var r=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(xe){if(r.mode==="hidden")return t=dl(n,r),n.lanes=536870912,eo(null,t);if(_u(n),(t=Ie)?(t=tg(t,ai),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:la!==null?{id:Si,overflow:Mi}:null,retryLane:536870912,hydrationErrors:null},a=bd(t),a.return=n,n.child=a,dn=n,Ie=null)):t=null,t===null)throw ua(n);return n.lanes=536870912,null}return dl(n,r)}var f=t.memoizedState;if(f!==null){var g=f.dehydrated;if(_u(n),c)if(n.flags&256)n.flags&=-257,n=Vp(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(en||zs(t,n,a,!1),c=(a&t.childLanes)!==0,en||c){if(r=Pe,r!==null&&(g=Jn(r,a),g!==0&&g!==f.retryLane))throw f.retryLane=g,Ka(t,g),Pn(r,t,g),Iu;Tl(),n=Vp(t,n,a)}else t=f.treeContext,Ie=ri(g.nextSibling),dn=n,xe=!0,ca=null,ai=!1,t!==null&&Cd(n,t),n=dl(n,r),n.flags|=4096;return n}return t=Oi(t.child,{mode:r.mode,children:r.children}),t.ref=n.ref,n.child=t,t.return=n,t}function pl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Fu(t,n,a,r,c){return ts(n),a=xu(t,n,a,r,void 0,c),r=yu(),t!==null&&!en?(Su(t,n,c),Hi(t,n,c)):(xe&&r&&tu(n),n.flags|=1,mn(t,n,a,c),n.child)}function Xp(t,n,a,r,c,f){return ts(n),n.updateQueue=null,a=qd(n,r,a,c),Wd(t),r=yu(),t!==null&&!en?(Su(t,n,f),Hi(t,n,f)):(xe&&r&&tu(n),n.flags|=1,mn(t,n,a,f),n.child)}function kp(t,n,a,r,c){if(ts(n),n.stateNode===null){var f=Us,g=a.contextType;typeof g=="object"&&g!==null&&(f=pn(g)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Pu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},fu(n),g=a.contextType,f.context=typeof g=="object"&&g!==null?pn(g):Us,f.state=n.memoizedState,g=a.getDerivedStateFromProps,typeof g=="function"&&(zu(n,a,g,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(g=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),g!==f.state&&Pu.enqueueReplaceState(f,f.state,null),Kr(n,r,f,c),Zr(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(t===null){f=n.stateNode;var b=n.memoizedProps,B=rs(a,b);f.props=B;var et=f.context,pt=a.contextType;g=Us,typeof pt=="object"&&pt!==null&&(g=pn(pt));var vt=a.getDerivedStateFromProps;pt=typeof vt=="function"||typeof f.getSnapshotBeforeUpdate=="function",b=n.pendingProps!==b,pt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(b||et!==g)&&Dp(n,f,r,g),ha=!1;var at=n.memoizedState;f.state=at,Kr(n,r,f,c),Zr(),et=n.memoizedState,b||at!==et||ha?(typeof vt=="function"&&(zu(n,a,vt,r),et=n.memoizedState),(B=ha||wp(n,a,B,r,at,et,g))?(pt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=et),f.props=r,f.state=et,f.context=g,r=B):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,hu(t,n),g=n.memoizedProps,pt=rs(a,g),f.props=pt,vt=n.pendingProps,at=f.context,et=a.contextType,B=Us,typeof et=="object"&&et!==null&&(B=pn(et)),b=a.getDerivedStateFromProps,(et=typeof b=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(g!==vt||at!==B)&&Dp(n,f,r,B),ha=!1,at=n.memoizedState,f.state=at,Kr(n,r,f,c),Zr();var ut=n.memoizedState;g!==vt||at!==ut||ha||t!==null&&t.dependencies!==null&&Zo(t.dependencies)?(typeof b=="function"&&(zu(n,a,b,r),ut=n.memoizedState),(pt=ha||wp(n,a,pt,r,at,ut,B)||t!==null&&t.dependencies!==null&&Zo(t.dependencies))?(et||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,ut,B),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,ut,B)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||g===t.memoizedProps&&at===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&at===t.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=ut),f.props=r,f.state=ut,f.context=B,r=pt):(typeof f.componentDidUpdate!="function"||g===t.memoizedProps&&at===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&at===t.memoizedState||(n.flags|=1024),r=!1)}return f=r,pl(t,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&r?(n.child=as(n,t.child,null,c),n.child=as(n,null,a,c)):mn(t,n,a,c),n.memoizedState=f.state,t=n.child):t=Hi(t,n,c),t}function Wp(t,n,a,r){return Ja(),n.flags|=256,mn(t,n,a,r),n.child}var Hu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Gu(t){return{baseLanes:t,cachePool:Od()}}function Vu(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=Wn),t}function qp(t,n,a){var r=n.pendingProps,c=!1,f=(n.flags&128)!==0,g;if((g=f)||(g=t!==null&&t.memoizedState===null?!1:(Ke.current&2)!==0),g&&(c=!0,n.flags&=-129),g=(n.flags&32)!==0,n.flags&=-33,t===null){if(xe){if(c?ma(n):ga(),(t=Ie)?(t=tg(t,ai),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:la!==null?{id:Si,overflow:Mi}:null,retryLane:536870912,hydrationErrors:null},a=bd(t),a.return=n,n.child=a,dn=n,Ie=null)):t=null,t===null)throw ua(n);return bf(t)?n.lanes=32:n.lanes=536870912,null}var b=r.children;return r=r.fallback,c?(ga(),c=n.mode,b=ml({mode:"hidden",children:b},c),r=Qa(r,c,a,null),b.return=n,r.return=n,b.sibling=r,n.child=b,r=n.child,r.memoizedState=Gu(a),r.childLanes=Vu(t,g,a),n.memoizedState=Hu,eo(null,r)):(ma(n),Xu(n,b))}var B=t.memoizedState;if(B!==null&&(b=B.dehydrated,b!==null)){if(f)n.flags&256?(ma(n),n.flags&=-257,n=ku(t,n,a)):n.memoizedState!==null?(ga(),n.child=t.child,n.flags|=128,n=null):(ga(),b=r.fallback,c=n.mode,r=ml({mode:"visible",children:r.children},c),b=Qa(b,c,a,null),b.flags|=2,r.return=n,b.return=n,r.sibling=b,n.child=r,as(n,t.child,null,a),r=n.child,r.memoizedState=Gu(a),r.childLanes=Vu(t,g,a),n.memoizedState=Hu,n=eo(null,r));else if(ma(n),bf(b)){if(g=b.nextSibling&&b.nextSibling.dataset,g)var et=g.dgst;g=et,r=Error(s(419)),r.stack="",r.digest=g,Xr({value:r,source:null,stack:null}),n=ku(t,n,a)}else if(en||zs(t,n,a,!1),g=(a&t.childLanes)!==0,en||g){if(g=Pe,g!==null&&(r=Jn(g,a),r!==0&&r!==B.retryLane))throw B.retryLane=r,Ka(t,r),Pn(g,t,r),Iu;Tf(b)||Tl(),n=ku(t,n,a)}else Tf(b)?(n.flags|=192,n.child=t.child,n=null):(t=B.treeContext,Ie=ri(b.nextSibling),dn=n,xe=!0,ca=null,ai=!1,t!==null&&Cd(n,t),n=Xu(n,r.children),n.flags|=4096);return n}return c?(ga(),b=r.fallback,c=n.mode,B=t.child,et=B.sibling,r=Oi(B,{mode:"hidden",children:r.children}),r.subtreeFlags=B.subtreeFlags&65011712,et!==null?b=Oi(et,b):(b=Qa(b,c,a,null),b.flags|=2),b.return=n,r.return=n,r.sibling=b,n.child=r,eo(null,r),r=n.child,b=t.child.memoizedState,b===null?b=Gu(a):(c=b.cachePool,c!==null?(B=$e._currentValue,c=c.parent!==B?{parent:B,pool:B}:c):c=Od(),b={baseLanes:b.baseLanes|a,cachePool:c}),r.memoizedState=b,r.childLanes=Vu(t,g,a),n.memoizedState=Hu,eo(t.child,r)):(ma(n),a=t.child,t=a.sibling,a=Oi(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,t!==null&&(g=n.deletions,g===null?(n.deletions=[t],n.flags|=16):g.push(t)),n.child=a,n.memoizedState=null,a)}function Xu(t,n){return n=ml({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function ml(t,n){return t=Gn(22,t,null,n),t.lanes=0,t}function ku(t,n,a){return as(n,t.child,null,a),t=Xu(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Yp(t,n,a){t.lanes|=n;var r=t.alternate;r!==null&&(r.lanes|=n),su(t.return,n,a)}function Wu(t,n,a,r,c,f){var g=t.memoizedState;g===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:c,treeForkCount:f}:(g.isBackwards=n,g.rendering=null,g.renderingStartTime=0,g.last=r,g.tail=a,g.tailMode=c,g.treeForkCount=f)}function jp(t,n,a){var r=n.pendingProps,c=r.revealOrder,f=r.tail;r=r.children;var g=Ke.current,b=(g&2)!==0;if(b?(g=g&1|2,n.flags|=128):g&=1,St(Ke,g),mn(t,n,r,a),r=xe?Vr:0,!b&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Yp(t,a,n);else if(t.tag===19)Yp(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)t=a.alternate,t!==null&&il(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Wu(n,!1,c,a,f,r);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&il(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}Wu(n,!0,a,null,f,r);break;case"together":Wu(n,!1,null,null,void 0,r);break;default:n.memoizedState=null}return n.child}function Hi(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),xa|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(zs(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=Oi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Oi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function qu(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Zo(t)))}function jv(t,n,a){switch(n.tag){case 3:Gt(n,n.stateNode.containerInfo),fa(n,$e,t.memoizedState.cache),Ja();break;case 27:case 5:$(n);break;case 4:Gt(n,n.stateNode.containerInfo);break;case 10:fa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,_u(n),null;break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(ma(n),n.flags|=128,null):(a&n.child.childLanes)!==0?qp(t,n,a):(ma(n),t=Hi(t,n,a),t!==null?t.sibling:null);ma(n);break;case 19:var c=(t.flags&128)!==0;if(r=(a&n.childLanes)!==0,r||(zs(t,n,a,!1),r=(a&n.childLanes)!==0),c){if(r)return jp(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),St(Ke,Ke.current),r)break;return null;case 22:return n.lanes=0,Hp(t,n,a,n.pendingProps);case 24:fa(n,$e,t.memoizedState.cache)}return Hi(t,n,a)}function Zp(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)en=!0;else{if(!qu(t,a)&&(n.flags&128)===0)return en=!1,jv(t,n,a);en=(t.flags&131072)!==0}else en=!1,xe&&(n.flags&1048576)!==0&&Rd(n,Vr,n.index);switch(n.lanes=0,n.tag){case 16:t:{var r=n.pendingProps;if(t=ns(n.elementType),n.type=t,typeof t=="function")Qc(t)?(r=rs(t,r),n.tag=1,n=kp(null,n,t,r,a)):(n.tag=0,n=Fu(null,n,t,r,a));else{if(t!=null){var c=t.$$typeof;if(c===L){n.tag=11,n=Bp(null,n,t,r,a);break t}else if(c===N){n.tag=14,n=Ip(null,n,t,r,a);break t}}throw n=ot(t)||t,Error(s(306,n,""))}}return n;case 0:return Fu(t,n,n.type,n.pendingProps,a);case 1:return r=n.type,c=rs(r,n.pendingProps),kp(t,n,r,c,a);case 3:t:{if(Gt(n,n.stateNode.containerInfo),t===null)throw Error(s(387));r=n.pendingProps;var f=n.memoizedState;c=f.element,hu(t,n),Kr(n,r,null,a);var g=n.memoizedState;if(r=g.cache,fa(n,$e,r),r!==f.cache&&ru(n,[$e],a,!0),Zr(),r=g.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:g.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Wp(t,n,r,a);break t}else if(r!==c){c=ei(Error(s(424)),n),Xr(c),n=Wp(t,n,r,a);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Ie=ri(t.firstChild),dn=n,xe=!0,ca=null,ai=!0,a=Hd(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Ja(),r===c){n=Hi(t,n,a);break t}mn(t,n,r,a)}n=n.child}return n;case 26:return pl(t,n),t===null?(a=rg(n.type,null,n.pendingProps,null))?n.memoizedState=a:xe||(a=n.type,t=n.pendingProps,r=Ul(Et.current).createElement(a),r[sn]=n,r[_n]=t,gn(r,a,t),Ht(r),n.stateNode=r):n.memoizedState=rg(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return $(n),t===null&&xe&&(r=n.stateNode=ig(n.type,n.pendingProps,Et.current),dn=n,ai=!0,c=Ie,Ta(n.type)?(Af=c,Ie=ri(r.firstChild)):Ie=c),mn(t,n,n.pendingProps.children,a),pl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&xe&&((c=r=Ie)&&(r=Tx(r,n.type,n.pendingProps,ai),r!==null?(n.stateNode=r,dn=n,Ie=ri(r.firstChild),ai=!1,c=!0):c=!1),c||ua(n)),$(n),c=n.type,f=n.pendingProps,g=t!==null?t.memoizedProps:null,r=f.children,Sf(c,f)?r=null:g!==null&&Sf(c,g)&&(n.flags|=32),n.memoizedState!==null&&(c=xu(t,n,Fv,null,null,a),_o._currentValue=c),pl(t,n),mn(t,n,r,a),n.child;case 6:return t===null&&xe&&((t=a=Ie)&&(a=bx(a,n.pendingProps,ai),a!==null?(n.stateNode=a,dn=n,Ie=null,t=!0):t=!1),t||ua(n)),null;case 13:return qp(t,n,a);case 4:return Gt(n,n.stateNode.containerInfo),r=n.pendingProps,t===null?n.child=as(n,null,r,a):mn(t,n,r,a),n.child;case 11:return Bp(t,n,n.type,n.pendingProps,a);case 7:return mn(t,n,n.pendingProps,a),n.child;case 8:return mn(t,n,n.pendingProps.children,a),n.child;case 12:return mn(t,n,n.pendingProps.children,a),n.child;case 10:return r=n.pendingProps,fa(n,n.type,r.value),mn(t,n,r.children,a),n.child;case 9:return c=n.type._context,r=n.pendingProps.children,ts(n),c=pn(c),r=r(c),n.flags|=1,mn(t,n,r,a),n.child;case 14:return Ip(t,n,n.type,n.pendingProps,a);case 15:return Fp(t,n,n.type,n.pendingProps,a);case 19:return jp(t,n,a);case 31:return Yv(t,n,a);case 22:return Hp(t,n,a,n.pendingProps);case 24:return ts(n),r=pn($e),t===null?(c=cu(),c===null&&(c=Pe,f=ou(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:r,cache:c},fu(n),fa(n,$e,c)):((t.lanes&a)!==0&&(hu(t,n),Kr(n,null,null,a),Zr()),c=t.memoizedState,f=n.memoizedState,c.parent!==r?(c={parent:r,cache:r},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),fa(n,$e,r)):(r=f.cache,fa(n,$e,r),r!==c.cache&&ru(n,[$e],a,!0))),mn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Gi(t){t.flags|=4}function Yu(t,n,a,r,c){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(c&335544128)===c)if(t.stateNode.complete)t.flags|=8192;else if(Mm())t.flags|=8192;else throw is=$o,uu}else t.flags&=-16777217}function Kp(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!fg(n))if(Mm())t.flags|=8192;else throw is=$o,uu}function gl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?ve():536870912,t.lanes|=n,Ys|=n)}function no(t,n){if(!xe)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Fe(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,r=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags&65011712,r|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags,r|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=r,t.childLanes=a,n}function Zv(t,n,a){var r=n.pendingProps;switch(eu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Fe(n),null;case 1:return Fe(n),null;case 3:return a=n.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),Bi($e),Nt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Os(n)?Gi(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,iu())),Fe(n),null;case 26:var c=n.type,f=n.memoizedState;return t===null?(Gi(n),f!==null?(Fe(n),Kp(n,f)):(Fe(n),Yu(n,c,null,r,a))):f?f!==t.memoizedState?(Gi(n),Fe(n),Kp(n,f)):(Fe(n),n.flags&=-16777217):(t=t.memoizedProps,t!==r&&Gi(n),Fe(n),Yu(n,c,t,r,a)),null;case 27:if(ye(n),a=Et.current,c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&Gi(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Fe(n),null}t=V.current,Os(n)?wd(n):(t=ig(c,r,a),n.stateNode=t,Gi(n))}return Fe(n),null;case 5:if(ye(n),c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&Gi(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Fe(n),null}if(f=V.current,Os(n))wd(n);else{var g=Ul(Et.current);switch(f){case 1:f=g.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=g.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=g.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=g.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=g.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof r.is=="string"?g.createElement("select",{is:r.is}):g.createElement("select"),r.multiple?f.multiple=!0:r.size&&(f.size=r.size);break;default:f=typeof r.is=="string"?g.createElement(c,{is:r.is}):g.createElement(c)}}f[sn]=n,f[_n]=r;t:for(g=n.child;g!==null;){if(g.tag===5||g.tag===6)f.appendChild(g.stateNode);else if(g.tag!==4&&g.tag!==27&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===n)break t;for(;g.sibling===null;){if(g.return===null||g.return===n)break t;g=g.return}g.sibling.return=g.return,g=g.sibling}n.stateNode=f;t:switch(gn(f,c,r),c){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&Gi(n)}}return Fe(n),Yu(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==r&&Gi(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(t=Et.current,Os(n)){if(t=n.stateNode,a=n.memoizedProps,r=null,c=dn,c!==null)switch(c.tag){case 27:case 5:r=c.memoizedProps}t[sn]=n,t=!!(t.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||qm(t.nodeValue,a)),t||ua(n,!0)}else t=Ul(t).createTextNode(r),t[sn]=n,n.stateNode=t}return Fe(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(r=Os(n),a!==null){if(t===null){if(!r)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[sn]=n}else Ja(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Fe(n),t=!1}else a=iu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(Xn(n),n):(Xn(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Fe(n),null;case 13:if(r=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=Os(n),r!==null&&r.dehydrated!==null){if(t===null){if(!c)throw Error(s(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(s(317));c[sn]=n}else Ja(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Fe(n),c=!1}else c=iu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Xn(n),n):(Xn(n),null)}return Xn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,t=t!==null&&t.memoizedState!==null,a&&(r=n.child,c=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(c=r.alternate.memoizedState.cachePool.pool),f=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==c&&(r.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),gl(n,n.updateQueue),Fe(n),null);case 4:return Nt(),t===null&&gf(n.stateNode.containerInfo),Fe(n),null;case 10:return Bi(n.type),Fe(n),null;case 19:if(it(Ke),r=n.memoizedState,r===null)return Fe(n),null;if(c=(n.flags&128)!==0,f=r.rendering,f===null)if(c)no(r,!1);else{if(Ye!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=il(t),f!==null){for(n.flags|=128,no(r,!1),t=f.updateQueue,n.updateQueue=t,gl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Td(a,t),a=a.sibling;return St(Ke,Ke.current&1|2),xe&&zi(n,r.treeForkCount),n.child}t=t.sibling}r.tail!==null&&yt()>Sl&&(n.flags|=128,c=!0,no(r,!1),n.lanes=4194304)}else{if(!c)if(t=il(f),t!==null){if(n.flags|=128,c=!0,t=t.updateQueue,n.updateQueue=t,gl(n,t),no(r,!0),r.tail===null&&r.tailMode==="hidden"&&!f.alternate&&!xe)return Fe(n),null}else 2*yt()-r.renderingStartTime>Sl&&a!==536870912&&(n.flags|=128,c=!0,no(r,!1),n.lanes=4194304);r.isBackwards?(f.sibling=n.child,n.child=f):(t=r.last,t!==null?t.sibling=f:n.child=f,r.last=f)}return r.tail!==null?(t=r.tail,r.rendering=t,r.tail=t.sibling,r.renderingStartTime=yt(),t.sibling=null,a=Ke.current,St(Ke,c?a&1|2:a&1),xe&&zi(n,r.treeForkCount),t):(Fe(n),null);case 22:case 23:return Xn(n),gu(),r=n.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(Fe(n),n.subtreeFlags&6&&(n.flags|=8192)):Fe(n),a=n.updateQueue,a!==null&&gl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),t!==null&&it(es),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Bi($e),Fe(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function Kv(t,n){switch(eu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Bi($e),Nt(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return ye(n),null;case 31:if(n.memoizedState!==null){if(Xn(n),n.alternate===null)throw Error(s(340));Ja()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(Xn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Ja()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return it(Ke),null;case 4:return Nt(),null;case 10:return Bi(n.type),null;case 22:case 23:return Xn(n),gu(),t!==null&&it(es),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Bi($e),null;case 25:return null;default:return null}}function Qp(t,n){switch(eu(n),n.tag){case 3:Bi($e),Nt();break;case 26:case 27:case 5:ye(n);break;case 4:Nt();break;case 31:n.memoizedState!==null&&Xn(n);break;case 13:Xn(n);break;case 19:it(Ke);break;case 10:Bi(n.type);break;case 22:case 23:Xn(n),gu(),t!==null&&it(es);break;case 24:Bi($e)}}function io(t,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var c=r.next;a=c;do{if((a.tag&t)===t){r=void 0;var f=a.create,g=a.inst;r=f(),g.destroy=r}a=a.next}while(a!==c)}}catch(b){De(n,n.return,b)}}function _a(t,n,a){try{var r=n.updateQueue,c=r!==null?r.lastEffect:null;if(c!==null){var f=c.next;r=f;do{if((r.tag&t)===t){var g=r.inst,b=g.destroy;if(b!==void 0){g.destroy=void 0,c=n;var B=a,et=b;try{et()}catch(pt){De(c,B,pt)}}}r=r.next}while(r!==f)}}catch(pt){De(n,n.return,pt)}}function Jp(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Vd(n,a)}catch(r){De(t,t.return,r)}}}function $p(t,n,a){a.props=rs(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(r){De(t,n,r)}}function ao(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var r=t.stateNode;break;case 30:r=t.stateNode;break;default:r=t.stateNode}typeof a=="function"?t.refCleanup=a(r):a.current=r}}catch(c){De(t,n,c)}}function Ei(t,n){var a=t.ref,r=t.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(c){De(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){De(t,n,c)}else a.current=null}function tm(t){var n=t.type,a=t.memoizedProps,r=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(c){De(t,t.return,c)}}function ju(t,n,a){try{var r=t.stateNode;vx(r,t.type,a,n),r[_n]=n}catch(c){De(t,t.return,c)}}function em(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ta(t.type)||t.tag===4}function Zu(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||em(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ta(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ku(t,n,a){var r=t.tag;if(r===5||r===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Li));else if(r!==4&&(r===27&&Ta(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Ku(t,n,a),t=t.sibling;t!==null;)Ku(t,n,a),t=t.sibling}function _l(t,n,a){var r=t.tag;if(r===5||r===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(r!==4&&(r===27&&Ta(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(_l(t,n,a),t=t.sibling;t!==null;)_l(t,n,a),t=t.sibling}function nm(t){var n=t.stateNode,a=t.memoizedProps;try{for(var r=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);gn(n,r,a),n[sn]=t,n[_n]=a}catch(f){De(t,t.return,f)}}var Vi=!1,nn=!1,Qu=!1,im=typeof WeakSet=="function"?WeakSet:Set,fn=null;function Qv(t,n){if(t=t.containerInfo,xf=Il,t=md(t),kc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var c=r.anchorOffset,f=r.focusNode;r=r.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var g=0,b=-1,B=-1,et=0,pt=0,vt=t,at=null;e:for(;;){for(var ut;vt!==a||c!==0&&vt.nodeType!==3||(b=g+c),vt!==f||r!==0&&vt.nodeType!==3||(B=g+r),vt.nodeType===3&&(g+=vt.nodeValue.length),(ut=vt.firstChild)!==null;)at=vt,vt=ut;for(;;){if(vt===t)break e;if(at===a&&++et===c&&(b=g),at===f&&++pt===r&&(B=g),(ut=vt.nextSibling)!==null)break;vt=at,at=vt.parentNode}vt=ut}a=b===-1||B===-1?null:{start:b,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(yf={focusedElem:t,selectionRange:a},Il=!1,fn=n;fn!==null;)if(n=fn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,fn=t;else for(;fn!==null;){switch(n=fn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)c=t[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,r=a.stateNode;try{var Ot=rs(a.type,c);t=r.getSnapshotBeforeUpdate(Ot,f),r.__reactInternalSnapshotBeforeUpdate=t}catch(jt){De(a,a.return,jt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Ef(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Ef(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,fn=t;break}fn=n.return}}function am(t,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:ki(t,a),r&4&&io(5,a);break;case 1:if(ki(t,a),r&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(g){De(a,a.return,g)}else{var c=rs(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(g){De(a,a.return,g)}}r&64&&Jp(a),r&512&&ao(a,a.return);break;case 3:if(ki(t,a),r&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Vd(t,n)}catch(g){De(a,a.return,g)}}break;case 27:n===null&&r&4&&nm(a);case 26:case 5:ki(t,a),n===null&&r&4&&tm(a),r&512&&ao(a,a.return);break;case 12:ki(t,a);break;case 31:ki(t,a),r&4&&om(t,a);break;case 13:ki(t,a),r&4&&lm(t,a),r&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=rx.bind(null,a),Ax(t,a))));break;case 22:if(r=a.memoizedState!==null||Vi,!r){n=n!==null&&n.memoizedState!==null||nn,c=Vi;var f=nn;Vi=r,(nn=n)&&!f?Wi(t,a,(a.subtreeFlags&8772)!==0):ki(t,a),Vi=c,nn=f}break;case 30:break;default:ki(t,a)}}function sm(t){var n=t.alternate;n!==null&&(t.alternate=null,sm(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Pt(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Ve=null,Ln=!1;function Xi(t,n,a){for(a=a.child;a!==null;)rm(t,n,a),a=a.sibling}function rm(t,n,a){if(Xt&&typeof Xt.onCommitFiberUnmount=="function")try{Xt.onCommitFiberUnmount(Ut,a)}catch{}switch(a.tag){case 26:nn||Ei(a,n),Xi(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:nn||Ei(a,n);var r=Ve,c=Ln;Ta(a.type)&&(Ve=a.stateNode,Ln=!1),Xi(t,n,a),po(a.stateNode),Ve=r,Ln=c;break;case 5:nn||Ei(a,n);case 6:if(r=Ve,c=Ln,Ve=null,Xi(t,n,a),Ve=r,Ln=c,Ve!==null)if(Ln)try{(Ve.nodeType===9?Ve.body:Ve.nodeName==="HTML"?Ve.ownerDocument.body:Ve).removeChild(a.stateNode)}catch(f){De(a,n,f)}else try{Ve.removeChild(a.stateNode)}catch(f){De(a,n,f)}break;case 18:Ve!==null&&(Ln?(t=Ve,Jm(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),er(t)):Jm(Ve,a.stateNode));break;case 4:r=Ve,c=Ln,Ve=a.stateNode.containerInfo,Ln=!0,Xi(t,n,a),Ve=r,Ln=c;break;case 0:case 11:case 14:case 15:_a(2,a,n),nn||_a(4,a,n),Xi(t,n,a);break;case 1:nn||(Ei(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&$p(a,n,r)),Xi(t,n,a);break;case 21:Xi(t,n,a);break;case 22:nn=(r=nn)||a.memoizedState!==null,Xi(t,n,a),nn=r;break;default:Xi(t,n,a)}}function om(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{er(t)}catch(a){De(n,n.return,a)}}}function lm(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{er(t)}catch(a){De(n,n.return,a)}}function Jv(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new im),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new im),n;default:throw Error(s(435,t.tag))}}function vl(t,n){var a=Jv(t);n.forEach(function(r){if(!a.has(r)){a.add(r);var c=ox.bind(null,t,r);r.then(c,c)}})}function Nn(t,n){var a=n.deletions;if(a!==null)for(var r=0;r<a.length;r++){var c=a[r],f=t,g=n,b=g;t:for(;b!==null;){switch(b.tag){case 27:if(Ta(b.type)){Ve=b.stateNode,Ln=!1;break t}break;case 5:Ve=b.stateNode,Ln=!1;break t;case 3:case 4:Ve=b.stateNode.containerInfo,Ln=!0;break t}b=b.return}if(Ve===null)throw Error(s(160));rm(f,g,c),Ve=null,Ln=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)cm(n,t),n=n.sibling}var hi=null;function cm(t,n){var a=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Nn(n,t),On(t),r&4&&(_a(3,t,t.return),io(3,t),_a(5,t,t.return));break;case 1:Nn(n,t),On(t),r&512&&(nn||a===null||Ei(a,a.return)),r&64&&Vi&&(t=t.updateQueue,t!==null&&(r=t.callbacks,r!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?r:a.concat(r))));break;case 26:var c=hi;if(Nn(n,t),On(t),r&512&&(nn||a===null||Ei(a,a.return)),r&4){var f=a!==null?a.memoizedState:null;if(r=t.memoizedState,a===null)if(r===null)if(t.stateNode===null){t:{r=t.type,a=t.memoizedProps,c=c.ownerDocument||c;e:switch(r){case"title":f=c.getElementsByTagName("title")[0],(!f||f[Rt]||f[sn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(r),c.head.insertBefore(f,c.querySelector("head > title"))),gn(f,r,a),f[sn]=t,Ht(f),r=f;break t;case"link":var g=cg("link","href",c).get(r+(a.href||""));if(g){for(var b=0;b<g.length;b++)if(f=g[b],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){g.splice(b,1);break e}}f=c.createElement(r),gn(f,r,a),c.head.appendChild(f);break;case"meta":if(g=cg("meta","content",c).get(r+(a.content||""))){for(b=0;b<g.length;b++)if(f=g[b],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){g.splice(b,1);break e}}f=c.createElement(r),gn(f,r,a),c.head.appendChild(f);break;default:throw Error(s(468,r))}f[sn]=t,Ht(f),r=f}t.stateNode=r}else ug(c,t.type,t.stateNode);else t.stateNode=lg(c,r,t.memoizedProps);else f!==r?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,r===null?ug(c,t.type,t.stateNode):lg(c,r,t.memoizedProps)):r===null&&t.stateNode!==null&&ju(t,t.memoizedProps,a.memoizedProps)}break;case 27:Nn(n,t),On(t),r&512&&(nn||a===null||Ei(a,a.return)),a!==null&&r&4&&ju(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Nn(n,t),On(t),r&512&&(nn||a===null||Ei(a,a.return)),t.flags&32){c=t.stateNode;try{Ts(c,"")}catch(Ot){De(t,t.return,Ot)}}r&4&&t.stateNode!=null&&(c=t.memoizedProps,ju(t,c,a!==null?a.memoizedProps:c)),r&1024&&(Qu=!0);break;case 6:if(Nn(n,t),On(t),r&4){if(t.stateNode===null)throw Error(s(162));r=t.memoizedProps,a=t.stateNode;try{a.nodeValue=r}catch(Ot){De(t,t.return,Ot)}}break;case 3:if(Ol=null,c=hi,hi=Ll(n.containerInfo),Nn(n,t),hi=c,On(t),r&4&&a!==null&&a.memoizedState.isDehydrated)try{er(n.containerInfo)}catch(Ot){De(t,t.return,Ot)}Qu&&(Qu=!1,um(t));break;case 4:r=hi,hi=Ll(t.stateNode.containerInfo),Nn(n,t),On(t),hi=r;break;case 12:Nn(n,t),On(t);break;case 31:Nn(n,t),On(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,vl(t,r)));break;case 13:Nn(n,t),On(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(yl=yt()),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,vl(t,r)));break;case 22:c=t.memoizedState!==null;var B=a!==null&&a.memoizedState!==null,et=Vi,pt=nn;if(Vi=et||c,nn=pt||B,Nn(n,t),nn=pt,Vi=et,On(t),r&8192)t:for(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||B||Vi||nn||os(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){B=a=n;try{if(f=B.stateNode,c)g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none";else{b=B.stateNode;var vt=B.memoizedProps.style,at=vt!=null&&vt.hasOwnProperty("display")?vt.display:null;b.style.display=at==null||typeof at=="boolean"?"":(""+at).trim()}}catch(Ot){De(B,B.return,Ot)}}}else if(n.tag===6){if(a===null){B=n;try{B.stateNode.nodeValue=c?"":B.memoizedProps}catch(Ot){De(B,B.return,Ot)}}}else if(n.tag===18){if(a===null){B=n;try{var ut=B.stateNode;c?$m(ut,!0):$m(B.stateNode,!1)}catch(Ot){De(B,B.return,Ot)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=t.updateQueue,r!==null&&(a=r.retryQueue,a!==null&&(r.retryQueue=null,vl(t,a))));break;case 19:Nn(n,t),On(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,vl(t,r)));break;case 30:break;case 21:break;default:Nn(n,t),On(t)}}function On(t){var n=t.flags;if(n&2){try{for(var a,r=t.return;r!==null;){if(em(r)){a=r;break}r=r.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var c=a.stateNode,f=Zu(t);_l(t,f,c);break;case 5:var g=a.stateNode;a.flags&32&&(Ts(g,""),a.flags&=-33);var b=Zu(t);_l(t,b,g);break;case 3:case 4:var B=a.stateNode.containerInfo,et=Zu(t);Ku(t,et,B);break;default:throw Error(s(161))}}catch(pt){De(t,t.return,pt)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function um(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;um(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ki(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)am(t,n.alternate,n),n=n.sibling}function os(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:_a(4,n,n.return),os(n);break;case 1:Ei(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&$p(n,n.return,a),os(n);break;case 27:po(n.stateNode);case 26:case 5:Ei(n,n.return),os(n);break;case 22:n.memoizedState===null&&os(n);break;case 30:os(n);break;default:os(n)}t=t.sibling}}function Wi(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,c=t,f=n,g=f.flags;switch(f.tag){case 0:case 11:case 15:Wi(c,f,a),io(4,f);break;case 1:if(Wi(c,f,a),r=f,c=r.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(et){De(r,r.return,et)}if(r=f,c=r.updateQueue,c!==null){var b=r.stateNode;try{var B=c.shared.hiddenCallbacks;if(B!==null)for(c.shared.hiddenCallbacks=null,c=0;c<B.length;c++)Gd(B[c],b)}catch(et){De(r,r.return,et)}}a&&g&64&&Jp(f),ao(f,f.return);break;case 27:nm(f);case 26:case 5:Wi(c,f,a),a&&r===null&&g&4&&tm(f),ao(f,f.return);break;case 12:Wi(c,f,a);break;case 31:Wi(c,f,a),a&&g&4&&om(c,f);break;case 13:Wi(c,f,a),a&&g&4&&lm(c,f);break;case 22:f.memoizedState===null&&Wi(c,f,a),ao(f,f.return);break;case 30:break;default:Wi(c,f,a)}n=n.sibling}}function Ju(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&kr(a))}function $u(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&kr(t))}function di(t,n,a,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)fm(t,n,a,r),n=n.sibling}function fm(t,n,a,r){var c=n.flags;switch(n.tag){case 0:case 11:case 15:di(t,n,a,r),c&2048&&io(9,n);break;case 1:di(t,n,a,r);break;case 3:di(t,n,a,r),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&kr(t)));break;case 12:if(c&2048){di(t,n,a,r),t=n.stateNode;try{var f=n.memoizedProps,g=f.id,b=f.onPostCommit;typeof b=="function"&&b(g,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(B){De(n,n.return,B)}}else di(t,n,a,r);break;case 31:di(t,n,a,r);break;case 13:di(t,n,a,r);break;case 23:break;case 22:f=n.stateNode,g=n.alternate,n.memoizedState!==null?f._visibility&2?di(t,n,a,r):so(t,n):f._visibility&2?di(t,n,a,r):(f._visibility|=2,ks(t,n,a,r,(n.subtreeFlags&10256)!==0||!1)),c&2048&&Ju(g,n);break;case 24:di(t,n,a,r),c&2048&&$u(n.alternate,n);break;default:di(t,n,a,r)}}function ks(t,n,a,r,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,g=n,b=a,B=r,et=g.flags;switch(g.tag){case 0:case 11:case 15:ks(f,g,b,B,c),io(8,g);break;case 23:break;case 22:var pt=g.stateNode;g.memoizedState!==null?pt._visibility&2?ks(f,g,b,B,c):so(f,g):(pt._visibility|=2,ks(f,g,b,B,c)),c&&et&2048&&Ju(g.alternate,g);break;case 24:ks(f,g,b,B,c),c&&et&2048&&$u(g.alternate,g);break;default:ks(f,g,b,B,c)}n=n.sibling}}function so(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,r=n,c=r.flags;switch(r.tag){case 22:so(a,r),c&2048&&Ju(r.alternate,r);break;case 24:so(a,r),c&2048&&$u(r.alternate,r);break;default:so(a,r)}n=n.sibling}}var ro=8192;function Ws(t,n,a){if(t.subtreeFlags&ro)for(t=t.child;t!==null;)hm(t,n,a),t=t.sibling}function hm(t,n,a){switch(t.tag){case 26:Ws(t,n,a),t.flags&ro&&t.memoizedState!==null&&Ix(a,hi,t.memoizedState,t.memoizedProps);break;case 5:Ws(t,n,a);break;case 3:case 4:var r=hi;hi=Ll(t.stateNode.containerInfo),Ws(t,n,a),hi=r;break;case 22:t.memoizedState===null&&(r=t.alternate,r!==null&&r.memoizedState!==null?(r=ro,ro=16777216,Ws(t,n,a),ro=r):Ws(t,n,a));break;default:Ws(t,n,a)}}function dm(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function oo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];fn=r,mm(r,t)}dm(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)pm(t),t=t.sibling}function pm(t){switch(t.tag){case 0:case 11:case 15:oo(t),t.flags&2048&&_a(9,t,t.return);break;case 3:oo(t);break;case 12:oo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,xl(t)):oo(t);break;default:oo(t)}}function xl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];fn=r,mm(r,t)}dm(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:_a(8,n,n.return),xl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,xl(n));break;default:xl(n)}t=t.sibling}}function mm(t,n){for(;fn!==null;){var a=fn;switch(a.tag){case 0:case 11:case 15:_a(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:kr(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,fn=r;else t:for(a=t;fn!==null;){r=fn;var c=r.sibling,f=r.return;if(sm(r),r===a){fn=null;break t}if(c!==null){c.return=f,fn=c;break t}fn=f}}}var $v={getCacheForType:function(t){var n=pn($e),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return pn($e).controller.signal}},tx=typeof WeakMap=="function"?WeakMap:Map,Re=0,Pe=null,pe=null,ge=0,we=0,kn=null,va=!1,qs=!1,tf=!1,qi=0,Ye=0,xa=0,ls=0,ef=0,Wn=0,Ys=0,lo=null,zn=null,nf=!1,yl=0,gm=0,Sl=1/0,Ml=null,ya=null,ln=0,Sa=null,js=null,Yi=0,af=0,sf=null,_m=null,co=0,rf=null;function qn(){return(Re&2)!==0&&ge!==0?ge&-ge:I.T!==null?hf():Ur()}function vm(){if(Wn===0)if((ge&536870912)===0||xe){var t=Mt;Mt<<=1,(Mt&3932160)===0&&(Mt=262144),Wn=t}else Wn=536870912;return t=Vn.current,t!==null&&(t.flags|=32),Wn}function Pn(t,n,a){(t===Pe&&(we===2||we===9)||t.cancelPendingCommit!==null)&&(Zs(t,0),Ma(t,ge,Wn,!1)),Ae(t,a),((Re&2)===0||t!==Pe)&&(t===Pe&&((Re&2)===0&&(ls|=a),Ye===4&&Ma(t,ge,Wn,!1)),Ti(t))}function xm(t,n,a){if((Re&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Ce(t,n),c=r?ix(t,n):lf(t,n,!0),f=r;do{if(c===0){qs&&!r&&Ma(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!ex(a)){c=lf(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var g=0;else g=t.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){n=g;t:{var b=t;c=lo;var B=b.current.memoizedState.isDehydrated;if(B&&(Zs(b,g).flags|=256),g=lf(b,g,!1),g!==2){if(tf&&!B){b.errorRecoveryDisabledLanes|=f,ls|=f,c=4;break t}f=zn,zn=c,f!==null&&(zn===null?zn=f:zn.push.apply(zn,f))}c=g}if(f=!1,c!==2)continue}}if(c===1){Zs(t,0),Ma(t,n,0,!0);break}t:{switch(r=t,f=c,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Ma(r,n,Wn,!va);break t;case 2:zn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(c=yl+300-yt(),10<c)){if(Ma(r,n,Wn,!va),ae(r,0,!0)!==0)break t;Yi=n,r.timeoutHandle=Km(ym.bind(null,r,a,zn,Ml,nf,n,Wn,ls,Ys,va,f,"Throttled",-0,0),c);break t}ym(r,a,zn,Ml,nf,n,Wn,ls,Ys,va,f,null,-0,0)}}break}while(!0);Ti(t)}function ym(t,n,a,r,c,f,g,b,B,et,pt,vt,at,ut){if(t.timeoutHandle=-1,vt=n.subtreeFlags,vt&8192||(vt&16785408)===16785408){vt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Li},hm(n,f,vt);var Ot=(f&62914560)===f?yl-yt():(f&4194048)===f?gm-yt():0;if(Ot=Fx(vt,Ot),Ot!==null){Yi=f,t.cancelPendingCommit=Ot(Cm.bind(null,t,n,f,a,r,c,g,b,B,pt,vt,null,at,ut)),Ma(t,f,g,!et);return}}Cm(t,n,f,a,r,c,g,b,B)}function ex(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var c=a[r],f=c.getSnapshot;c=c.value;try{if(!Hn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ma(t,n,a,r){n&=~ef,n&=~ls,t.suspendedLanes|=n,t.pingedLanes&=~n,r&&(t.warmLanes|=n),r=t.expirationTimes;for(var c=n;0<c;){var f=31-se(c),g=1<<f;r[f]=-1,c&=~g}a!==0&&Tn(t,a,n)}function El(){return(Re&6)===0?(uo(0),!1):!0}function of(){if(pe!==null){if(we===0)var t=pe.return;else t=pe,Pi=$a=null,Mu(t),Fs=null,qr=0,t=pe;for(;t!==null;)Qp(t.alternate,t),t=t.return;pe=null}}function Zs(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,Sx(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Yi=0,of(),Pe=t,pe=a=Oi(t.current,null),ge=n,we=0,kn=null,va=!1,qs=Ce(t,n),tf=!1,Ys=Wn=ef=ls=xa=Ye=0,zn=lo=null,nf=!1,(n&8)!==0&&(n|=n&32);var r=t.entangledLanes;if(r!==0)for(t=t.entanglements,r&=n;0<r;){var c=31-se(r),f=1<<c;n|=t[c],r&=~f}return qi=n,ko(),a}function Sm(t,n){oe=null,I.H=to,n===Is||n===Jo?(n=Bd(),we=3):n===uu?(n=Bd(),we=4):we=n===Iu?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,kn=n,pe===null&&(Ye=1,hl(t,ei(n,t.current)))}function Mm(){var t=Vn.current;return t===null?!0:(ge&4194048)===ge?si===null:(ge&62914560)===ge||(ge&536870912)!==0?t===si:!1}function Em(){var t=I.H;return I.H=to,t===null?to:t}function Tm(){var t=I.A;return I.A=$v,t}function Tl(){Ye=4,va||(ge&4194048)!==ge&&Vn.current!==null||(qs=!0),(xa&134217727)===0&&(ls&134217727)===0||Pe===null||Ma(Pe,ge,Wn,!1)}function lf(t,n,a){var r=Re;Re|=2;var c=Em(),f=Tm();(Pe!==t||ge!==n)&&(Ml=null,Zs(t,n)),n=!1;var g=Ye;t:do try{if(we!==0&&pe!==null){var b=pe,B=kn;switch(we){case 8:of(),g=6;break t;case 3:case 2:case 9:case 6:Vn.current===null&&(n=!0);var et=we;if(we=0,kn=null,Ks(t,b,B,et),a&&qs){g=0;break t}break;default:et=we,we=0,kn=null,Ks(t,b,B,et)}}nx(),g=Ye;break}catch(pt){Sm(t,pt)}while(!0);return n&&t.shellSuspendCounter++,Pi=$a=null,Re=r,I.H=c,I.A=f,pe===null&&(Pe=null,ge=0,ko()),g}function nx(){for(;pe!==null;)bm(pe)}function ix(t,n){var a=Re;Re|=2;var r=Em(),c=Tm();Pe!==t||ge!==n?(Ml=null,Sl=yt()+500,Zs(t,n)):qs=Ce(t,n);t:do try{if(we!==0&&pe!==null){n=pe;var f=kn;e:switch(we){case 1:we=0,kn=null,Ks(t,n,f,1);break;case 2:case 9:if(zd(f)){we=0,kn=null,Am(n);break}n=function(){we!==2&&we!==9||Pe!==t||(we=7),Ti(t)},f.then(n,n);break t;case 3:we=7;break t;case 4:we=5;break t;case 7:zd(f)?(we=0,kn=null,Am(n)):(we=0,kn=null,Ks(t,n,f,7));break;case 5:var g=null;switch(pe.tag){case 26:g=pe.memoizedState;case 5:case 27:var b=pe;if(g?fg(g):b.stateNode.complete){we=0,kn=null;var B=b.sibling;if(B!==null)pe=B;else{var et=b.return;et!==null?(pe=et,bl(et)):pe=null}break e}}we=0,kn=null,Ks(t,n,f,5);break;case 6:we=0,kn=null,Ks(t,n,f,6);break;case 8:of(),Ye=6;break t;default:throw Error(s(462))}}ax();break}catch(pt){Sm(t,pt)}while(!0);return Pi=$a=null,I.H=r,I.A=c,Re=a,pe!==null?0:(Pe=null,ge=0,ko(),Ye)}function ax(){for(;pe!==null&&!xt();)bm(pe)}function bm(t){var n=Zp(t.alternate,t,qi);t.memoizedProps=t.pendingProps,n===null?bl(t):pe=n}function Am(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Xp(a,n,n.pendingProps,n.type,void 0,ge);break;case 11:n=Xp(a,n,n.pendingProps,n.type.render,n.ref,ge);break;case 5:Mu(n);default:Qp(a,n),n=pe=Td(n,qi),n=Zp(a,n,qi)}t.memoizedProps=t.pendingProps,n===null?bl(t):pe=n}function Ks(t,n,a,r){Pi=$a=null,Mu(n),Fs=null,qr=0;var c=n.return;try{if(qv(t,c,n,a,ge)){Ye=1,hl(t,ei(a,t.current)),pe=null;return}}catch(f){if(c!==null)throw pe=c,f;Ye=1,hl(t,ei(a,t.current)),pe=null;return}n.flags&32768?(xe||r===1?t=!0:qs||(ge&536870912)!==0?t=!1:(va=t=!0,(r===2||r===9||r===3||r===6)&&(r=Vn.current,r!==null&&r.tag===13&&(r.flags|=16384))),Rm(n,t)):bl(n)}function bl(t){var n=t;do{if((n.flags&32768)!==0){Rm(n,va);return}t=n.return;var a=Zv(n.alternate,n,qi);if(a!==null){pe=a;return}if(n=n.sibling,n!==null){pe=n;return}pe=n=t}while(n!==null);Ye===0&&(Ye=5)}function Rm(t,n){do{var a=Kv(t.alternate,t);if(a!==null){a.flags&=32767,pe=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){pe=t;return}pe=t=a}while(t!==null);Ye=6,pe=null}function Cm(t,n,a,r,c,f,g,b,B){t.cancelPendingCommit=null;do Al();while(ln!==0);if((Re&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=Zc,vi(t,a,f,g,b,B),t===Pe&&(pe=Pe=null,ge=0),js=n,Sa=t,Yi=a,af=f,sf=c,_m=r,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,lx(Kt,function(){return Nm(),null})):(t.callbackNode=null,t.callbackPriority=0),r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=I.T,I.T=null,c=q.p,q.p=2,g=Re,Re|=4;try{Qv(t,n,a)}finally{Re=g,q.p=c,I.T=r}}ln=1,wm(),Dm(),Um()}}function wm(){if(ln===1){ln=0;var t=Sa,n=js,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=I.T,I.T=null;var r=q.p;q.p=2;var c=Re;Re|=4;try{cm(n,t);var f=yf,g=md(t.containerInfo),b=f.focusedElem,B=f.selectionRange;if(g!==b&&b&&b.ownerDocument&&pd(b.ownerDocument.documentElement,b)){if(B!==null&&kc(b)){var et=B.start,pt=B.end;if(pt===void 0&&(pt=et),"selectionStart"in b)b.selectionStart=et,b.selectionEnd=Math.min(pt,b.value.length);else{var vt=b.ownerDocument||document,at=vt&&vt.defaultView||window;if(at.getSelection){var ut=at.getSelection(),Ot=b.textContent.length,jt=Math.min(B.start,Ot),Ne=B.end===void 0?jt:Math.min(B.end,Ot);!ut.extend&&jt>Ne&&(g=Ne,Ne=jt,jt=g);var j=dd(b,jt),G=dd(b,Ne);if(j&&G&&(ut.rangeCount!==1||ut.anchorNode!==j.node||ut.anchorOffset!==j.offset||ut.focusNode!==G.node||ut.focusOffset!==G.offset)){var tt=vt.createRange();tt.setStart(j.node,j.offset),ut.removeAllRanges(),jt>Ne?(ut.addRange(tt),ut.extend(G.node,G.offset)):(tt.setEnd(G.node,G.offset),ut.addRange(tt))}}}}for(vt=[],ut=b;ut=ut.parentNode;)ut.nodeType===1&&vt.push({element:ut,left:ut.scrollLeft,top:ut.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<vt.length;b++){var _t=vt[b];_t.element.scrollLeft=_t.left,_t.element.scrollTop=_t.top}}Il=!!xf,yf=xf=null}finally{Re=c,q.p=r,I.T=a}}t.current=n,ln=2}}function Dm(){if(ln===2){ln=0;var t=Sa,n=js,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=I.T,I.T=null;var r=q.p;q.p=2;var c=Re;Re|=4;try{am(t,n.alternate,n)}finally{Re=c,q.p=r,I.T=a}}ln=3}}function Um(){if(ln===4||ln===3){ln=0,Tt();var t=Sa,n=js,a=Yi,r=_m;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?ln=5:(ln=0,js=Sa=null,Lm(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(ya=null),aa(a),n=n.stateNode,Xt&&typeof Xt.onCommitFiberRoot=="function")try{Xt.onCommitFiberRoot(Ut,n,void 0,(n.current.flags&128)===128)}catch{}if(r!==null){n=I.T,c=q.p,q.p=2,I.T=null;try{for(var f=t.onRecoverableError,g=0;g<r.length;g++){var b=r[g];f(b.value,{componentStack:b.stack})}}finally{I.T=n,q.p=c}}(Yi&3)!==0&&Al(),Ti(t),c=t.pendingLanes,(a&261930)!==0&&(c&42)!==0?t===rf?co++:(co=0,rf=t):co=0,uo(0)}}function Lm(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,kr(n)))}function Al(){return wm(),Dm(),Um(),Nm()}function Nm(){if(ln!==5)return!1;var t=Sa,n=af;af=0;var a=aa(Yi),r=I.T,c=q.p;try{q.p=32>a?32:a,I.T=null,a=sf,sf=null;var f=Sa,g=Yi;if(ln=0,js=Sa=null,Yi=0,(Re&6)!==0)throw Error(s(331));var b=Re;if(Re|=4,pm(f.current),fm(f,f.current,g,a),Re=b,uo(0,!1),Xt&&typeof Xt.onPostCommitFiberRoot=="function")try{Xt.onPostCommitFiberRoot(Ut,f)}catch{}return!0}finally{q.p=c,I.T=r,Lm(t,n)}}function Om(t,n,a){n=ei(a,n),n=Bu(t.stateNode,n,2),t=pa(t,n,2),t!==null&&(Ae(t,2),Ti(t))}function De(t,n,a){if(t.tag===3)Om(t,t,a);else for(;n!==null;){if(n.tag===3){Om(n,t,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ya===null||!ya.has(r))){t=ei(a,t),a=zp(2),r=pa(n,a,2),r!==null&&(Pp(a,r,n,t),Ae(r,2),Ti(r));break}}n=n.return}}function cf(t,n,a){var r=t.pingCache;if(r===null){r=t.pingCache=new tx;var c=new Set;r.set(n,c)}else c=r.get(n),c===void 0&&(c=new Set,r.set(n,c));c.has(a)||(tf=!0,c.add(a),t=sx.bind(null,t,n,a),n.then(t,t))}function sx(t,n,a){var r=t.pingCache;r!==null&&r.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Pe===t&&(ge&a)===a&&(Ye===4||Ye===3&&(ge&62914560)===ge&&300>yt()-yl?(Re&2)===0&&Zs(t,0):ef|=a,Ys===ge&&(Ys=0)),Ti(t)}function zm(t,n){n===0&&(n=ve()),t=Ka(t,n),t!==null&&(Ae(t,n),Ti(t))}function rx(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),zm(t,a)}function ox(t,n){var a=0;switch(t.tag){case 31:case 13:var r=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),zm(t,a)}function lx(t,n){return R(t,n)}var Rl=null,Qs=null,uf=!1,Cl=!1,ff=!1,Ea=0;function Ti(t){t!==Qs&&t.next===null&&(Qs===null?Rl=Qs=t:Qs=Qs.next=t),Cl=!0,uf||(uf=!0,ux())}function uo(t,n){if(!ff&&Cl){ff=!0;do for(var a=!1,r=Rl;r!==null;){if(t!==0){var c=r.pendingLanes;if(c===0)var f=0;else{var g=r.suspendedLanes,b=r.pingedLanes;f=(1<<31-se(42|t)+1)-1,f&=c&~(g&~b),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Fm(r,f))}else f=ge,f=ae(r,r===Pe?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||Ce(r,f)||(a=!0,Fm(r,f));r=r.next}while(a);ff=!1}}function cx(){Pm()}function Pm(){Cl=uf=!1;var t=0;Ea!==0&&yx()&&(t=Ea);for(var n=yt(),a=null,r=Rl;r!==null;){var c=r.next,f=Bm(r,n);f===0?(r.next=null,a===null?Rl=c:a.next=c,c===null&&(Qs=a)):(a=r,(t!==0||(f&3)!==0)&&(Cl=!0)),r=c}ln!==0&&ln!==5||uo(t),Ea!==0&&(Ea=0)}function Bm(t,n){for(var a=t.suspendedLanes,r=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var g=31-se(f),b=1<<g,B=c[g];B===-1?((b&a)===0||(b&r)!==0)&&(c[g]=Je(b,n)):B<=n&&(t.expiredLanes|=b),f&=~b}if(n=Pe,a=ge,a=ae(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r=t.callbackNode,a===0||t===n&&(we===2||we===9)||t.cancelPendingCommit!==null)return r!==null&&r!==null&&ft(r),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Ce(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(r!==null&&ft(r),aa(a)){case 2:case 8:a=Ct;break;case 32:a=Kt;break;case 268435456:a=Ft;break;default:a=Kt}return r=Im.bind(null,t),a=R(a,r),t.callbackPriority=n,t.callbackNode=a,n}return r!==null&&r!==null&&ft(r),t.callbackPriority=2,t.callbackNode=null,2}function Im(t,n){if(ln!==0&&ln!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Al()&&t.callbackNode!==a)return null;var r=ge;return r=ae(t,t===Pe?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r===0?null:(xm(t,r,n),Bm(t,yt()),t.callbackNode!=null&&t.callbackNode===a?Im.bind(null,t):null)}function Fm(t,n){if(Al())return null;xm(t,n,!0)}function ux(){Mx(function(){(Re&6)!==0?R(wt,cx):Pm()})}function hf(){if(Ea===0){var t=Ps;t===0&&(t=nt,nt<<=1,(nt&261888)===0&&(nt=256)),Ea=t}return Ea}function Hm(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Po(""+t)}function Gm(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function fx(t,n,a,r,c){if(n==="submit"&&a&&a.stateNode===c){var f=Hm((c[_n]||null).action),g=r.submitter;g&&(n=(n=g[_n]||null)?Hm(n.formAction):g.getAttribute("formAction"),n!==null&&(f=n,g=null));var b=new Ho("action","action",null,r,c);t.push({event:b,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Ea!==0){var B=g?Gm(c,g):new FormData(c);Uu(a,{pending:!0,data:B,method:c.method,action:f},null,B)}}else typeof f=="function"&&(b.preventDefault(),B=g?Gm(c,g):new FormData(c),Uu(a,{pending:!0,data:B,method:c.method,action:f},f,B))},currentTarget:c}]})}}for(var df=0;df<jc.length;df++){var pf=jc[df],hx=pf.toLowerCase(),dx=pf[0].toUpperCase()+pf.slice(1);fi(hx,"on"+dx)}fi(vd,"onAnimationEnd"),fi(xd,"onAnimationIteration"),fi(yd,"onAnimationStart"),fi("dblclick","onDoubleClick"),fi("focusin","onFocus"),fi("focusout","onBlur"),fi(wv,"onTransitionRun"),fi(Dv,"onTransitionStart"),fi(Uv,"onTransitionCancel"),fi(Sd,"onTransitionEnd"),vn("onMouseEnter",["mouseout","mouseover"]),vn("onMouseLeave",["mouseout","mouseover"]),vn("onPointerEnter",["pointerout","pointerover"]),vn("onPointerLeave",["pointerout","pointerover"]),Ze("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ze("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ze("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ze("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ze("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ze("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),px=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(fo));function Vm(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var r=t[a],c=r.event;r=r.listeners;t:{var f=void 0;if(n)for(var g=r.length-1;0<=g;g--){var b=r[g],B=b.instance,et=b.currentTarget;if(b=b.listener,B!==f&&c.isPropagationStopped())break t;f=b,c.currentTarget=et;try{f(c)}catch(pt){Xo(pt)}c.currentTarget=null,f=B}else for(g=0;g<r.length;g++){if(b=r[g],B=b.instance,et=b.currentTarget,b=b.listener,B!==f&&c.isPropagationStopped())break t;f=b,c.currentTarget=et;try{f(c)}catch(pt){Xo(pt)}c.currentTarget=null,f=B}}}}function me(t,n){var a=n[Q];a===void 0&&(a=n[Q]=new Set);var r=t+"__bubble";a.has(r)||(Xm(n,t,2,!1),a.add(r))}function mf(t,n,a){var r=0;n&&(r|=4),Xm(a,t,r,n)}var wl="_reactListening"+Math.random().toString(36).slice(2);function gf(t){if(!t[wl]){t[wl]=!0,We.forEach(function(a){a!=="selectionchange"&&(px.has(a)||mf(a,!1,t),mf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[wl]||(n[wl]=!0,mf("selectionchange",!1,n))}}function Xm(t,n,a,r){switch(vg(n)){case 2:var c=Vx;break;case 8:c=Xx;break;default:c=Uf}a=c.bind(null,n,a,t),c=void 0,!zc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),r?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function _f(t,n,a,r,c){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var g=r.tag;if(g===3||g===4){var b=r.stateNode.containerInfo;if(b===c)break;if(g===4)for(g=r.return;g!==null;){var B=g.tag;if((B===3||B===4)&&g.stateNode.containerInfo===c)return;g=g.return}for(;b!==null;){if(g=zt(b),g===null)return;if(B=g.tag,B===5||B===6||B===26||B===27){r=f=g;continue t}b=b.parentNode}}r=r.return}jh(function(){var et=f,pt=Nc(a),vt=[];t:{var at=Md.get(t);if(at!==void 0){var ut=Ho,Ot=t;switch(t){case"keypress":if(Io(a)===0)break t;case"keydown":case"keyup":ut=ov;break;case"focusin":Ot="focus",ut=Fc;break;case"focusout":Ot="blur",ut=Fc;break;case"beforeblur":case"afterblur":ut=Fc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ut=Qh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ut=Z0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ut=uv;break;case vd:case xd:case yd:ut=J0;break;case Sd:ut=hv;break;case"scroll":case"scrollend":ut=Y0;break;case"wheel":ut=pv;break;case"copy":case"cut":case"paste":ut=tv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ut=$h;break;case"toggle":case"beforetoggle":ut=gv}var jt=(n&4)!==0,Ne=!jt&&(t==="scroll"||t==="scrollend"),j=jt?at!==null?at+"Capture":null:at;jt=[];for(var G=et,tt;G!==null;){var _t=G;if(tt=_t.stateNode,_t=_t.tag,_t!==5&&_t!==26&&_t!==27||tt===null||j===null||(_t=Nr(G,j),_t!=null&&jt.push(ho(G,_t,tt))),Ne)break;G=G.return}0<jt.length&&(at=new ut(at,Ot,null,a,pt),vt.push({event:at,listeners:jt}))}}if((n&7)===0){t:{if(at=t==="mouseover"||t==="pointerover",ut=t==="mouseout"||t==="pointerout",at&&a!==Lc&&(Ot=a.relatedTarget||a.fromElement)&&(zt(Ot)||Ot[D]))break t;if((ut||at)&&(at=pt.window===pt?pt:(at=pt.ownerDocument)?at.defaultView||at.parentWindow:window,ut?(Ot=a.relatedTarget||a.toElement,ut=et,Ot=Ot?zt(Ot):null,Ot!==null&&(Ne=u(Ot),jt=Ot.tag,Ot!==Ne||jt!==5&&jt!==27&&jt!==6)&&(Ot=null)):(ut=null,Ot=et),ut!==Ot)){if(jt=Qh,_t="onMouseLeave",j="onMouseEnter",G="mouse",(t==="pointerout"||t==="pointerover")&&(jt=$h,_t="onPointerLeave",j="onPointerEnter",G="pointer"),Ne=ut==null?at:Qt(ut),tt=Ot==null?at:Qt(Ot),at=new jt(_t,G+"leave",ut,a,pt),at.target=Ne,at.relatedTarget=tt,_t=null,zt(pt)===et&&(jt=new jt(j,G+"enter",Ot,a,pt),jt.target=tt,jt.relatedTarget=Ne,_t=jt),Ne=_t,ut&&Ot)e:{for(jt=mx,j=ut,G=Ot,tt=0,_t=j;_t;_t=jt(_t))tt++;_t=0;for(var Wt=G;Wt;Wt=jt(Wt))_t++;for(;0<tt-_t;)j=jt(j),tt--;for(;0<_t-tt;)G=jt(G),_t--;for(;tt--;){if(j===G||G!==null&&j===G.alternate){jt=j;break e}j=jt(j),G=jt(G)}jt=null}else jt=null;ut!==null&&km(vt,at,ut,jt,!1),Ot!==null&&Ne!==null&&km(vt,Ne,Ot,jt,!0)}}t:{if(at=et?Qt(et):window,ut=at.nodeName&&at.nodeName.toLowerCase(),ut==="select"||ut==="input"&&at.type==="file")var Ee=od;else if(sd(at))if(ld)Ee=Av;else{Ee=Tv;var Bt=Ev}else ut=at.nodeName,!ut||ut.toLowerCase()!=="input"||at.type!=="checkbox"&&at.type!=="radio"?et&&Uc(et.elementType)&&(Ee=od):Ee=bv;if(Ee&&(Ee=Ee(t,et))){rd(vt,Ee,a,pt);break t}Bt&&Bt(t,at,et),t==="focusout"&&et&&at.type==="number"&&et.memoizedProps.value!=null&&Dc(at,"number",at.value)}switch(Bt=et?Qt(et):window,t){case"focusin":(sd(Bt)||Bt.contentEditable==="true")&&(Cs=Bt,Wc=et,Gr=null);break;case"focusout":Gr=Wc=Cs=null;break;case"mousedown":qc=!0;break;case"contextmenu":case"mouseup":case"dragend":qc=!1,gd(vt,a,pt);break;case"selectionchange":if(Cv)break;case"keydown":case"keyup":gd(vt,a,pt)}var ce;if(Gc)t:{switch(t){case"compositionstart":var _e="onCompositionStart";break t;case"compositionend":_e="onCompositionEnd";break t;case"compositionupdate":_e="onCompositionUpdate";break t}_e=void 0}else Rs?id(t,a)&&(_e="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(_e="onCompositionStart");_e&&(td&&a.locale!=="ko"&&(Rs||_e!=="onCompositionStart"?_e==="onCompositionEnd"&&Rs&&(ce=Zh()):(oa=pt,Pc="value"in oa?oa.value:oa.textContent,Rs=!0)),Bt=Dl(et,_e),0<Bt.length&&(_e=new Jh(_e,t,null,a,pt),vt.push({event:_e,listeners:Bt}),ce?_e.data=ce:(ce=ad(a),ce!==null&&(_e.data=ce)))),(ce=vv?xv(t,a):yv(t,a))&&(_e=Dl(et,"onBeforeInput"),0<_e.length&&(Bt=new Jh("onBeforeInput","beforeinput",null,a,pt),vt.push({event:Bt,listeners:_e}),Bt.data=ce)),fx(vt,t,et,a,pt)}Vm(vt,n)})}function ho(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Dl(t,n){for(var a=n+"Capture",r=[];t!==null;){var c=t,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Nr(t,a),c!=null&&r.unshift(ho(t,c,f)),c=Nr(t,n),c!=null&&r.push(ho(t,c,f))),t.tag===3)return r;t=t.return}return[]}function mx(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function km(t,n,a,r,c){for(var f=n._reactName,g=[];a!==null&&a!==r;){var b=a,B=b.alternate,et=b.stateNode;if(b=b.tag,B!==null&&B===r)break;b!==5&&b!==26&&b!==27||et===null||(B=et,c?(et=Nr(a,f),et!=null&&g.unshift(ho(a,et,B))):c||(et=Nr(a,f),et!=null&&g.push(ho(a,et,B)))),a=a.return}g.length!==0&&t.push({event:n,listeners:g})}var gx=/\r\n?/g,_x=/\u0000|\uFFFD/g;function Wm(t){return(typeof t=="string"?t:""+t).replace(gx,`
`).replace(_x,"")}function qm(t,n){return n=Wm(n),Wm(t)===n}function Le(t,n,a,r,c,f){switch(a){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||Ts(t,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&Ts(t,""+r);break;case"className":Wa(t,"class",r);break;case"tabIndex":Wa(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Wa(t,a,r);break;case"style":qh(t,r,f);break;case"data":if(n!=="object"){Wa(t,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=Po(""+r),t.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Le(t,n,"name",c.name,c,null),Le(t,n,"formEncType",c.formEncType,c,null),Le(t,n,"formMethod",c.formMethod,c,null),Le(t,n,"formTarget",c.formTarget,c,null)):(Le(t,n,"encType",c.encType,c,null),Le(t,n,"method",c.method,c,null),Le(t,n,"target",c.target,c,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=Po(""+r),t.setAttribute(a,r);break;case"onClick":r!=null&&(t.onclick=Li);break;case"onScroll":r!=null&&me("scroll",t);break;case"onScrollEnd":r!=null&&me("scrollend",t);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}a=Po(""+r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""+r):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":r===!0?t.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,r):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(a,r):t.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(a):t.setAttribute(a,r);break;case"popover":me("beforetoggle",t),me("toggle",t),$n(t,"popover",r);break;case"xlinkActuate":bn(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":bn(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":bn(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":bn(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":bn(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":bn(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":bn(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":bn(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":bn(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":$n(t,"is",r);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=W0.get(a)||a,$n(t,a,r))}}function vf(t,n,a,r,c,f){switch(a){case"style":qh(t,r,f);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof r=="string"?Ts(t,r):(typeof r=="number"||typeof r=="bigint")&&Ts(t,""+r);break;case"onScroll":r!=null&&me("scroll",t);break;case"onScrollEnd":r!=null&&me("scrollend",t);break;case"onClick":r!=null&&(t.onclick=Li);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!rn.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=t[_n]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,c),typeof r=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,r,c);break t}a in t?t[a]=r:r===!0?t.setAttribute(a,""):$n(t,a,r)}}}function gn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":me("error",t),me("load",t);var r=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var g=a[f];if(g!=null)switch(f){case"src":r=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Le(t,n,f,g,a,null)}}c&&Le(t,n,"srcSet",a.srcSet,a,null),r&&Le(t,n,"src",a.src,a,null);return;case"input":me("invalid",t);var b=f=g=c=null,B=null,et=null;for(r in a)if(a.hasOwnProperty(r)){var pt=a[r];if(pt!=null)switch(r){case"name":c=pt;break;case"type":g=pt;break;case"checked":B=pt;break;case"defaultChecked":et=pt;break;case"value":f=pt;break;case"defaultValue":b=pt;break;case"children":case"dangerouslySetInnerHTML":if(pt!=null)throw Error(s(137,n));break;default:Le(t,n,r,pt,a,null)}}Vh(t,f,b,B,et,g,c,!1);return;case"select":me("invalid",t),r=g=f=null;for(c in a)if(a.hasOwnProperty(c)&&(b=a[c],b!=null))switch(c){case"value":f=b;break;case"defaultValue":g=b;break;case"multiple":r=b;default:Le(t,n,c,b,a,null)}n=f,a=g,t.multiple=!!r,n!=null?Es(t,!!r,n,!1):a!=null&&Es(t,!!r,a,!0);return;case"textarea":me("invalid",t),f=c=r=null;for(g in a)if(a.hasOwnProperty(g)&&(b=a[g],b!=null))switch(g){case"value":r=b;break;case"defaultValue":c=b;break;case"children":f=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(s(91));break;default:Le(t,n,g,b,a,null)}kh(t,r,c,f);return;case"option":for(B in a)if(a.hasOwnProperty(B)&&(r=a[B],r!=null))switch(B){case"selected":t.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Le(t,n,B,r,a,null)}return;case"dialog":me("beforetoggle",t),me("toggle",t),me("cancel",t),me("close",t);break;case"iframe":case"object":me("load",t);break;case"video":case"audio":for(r=0;r<fo.length;r++)me(fo[r],t);break;case"image":me("error",t),me("load",t);break;case"details":me("toggle",t);break;case"embed":case"source":case"link":me("error",t),me("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(et in a)if(a.hasOwnProperty(et)&&(r=a[et],r!=null))switch(et){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Le(t,n,et,r,a,null)}return;default:if(Uc(n)){for(pt in a)a.hasOwnProperty(pt)&&(r=a[pt],r!==void 0&&vf(t,n,pt,r,a,void 0));return}}for(b in a)a.hasOwnProperty(b)&&(r=a[b],r!=null&&Le(t,n,b,r,a,null))}function vx(t,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,g=null,b=null,B=null,et=null,pt=null;for(ut in a){var vt=a[ut];if(a.hasOwnProperty(ut)&&vt!=null)switch(ut){case"checked":break;case"value":break;case"defaultValue":B=vt;default:r.hasOwnProperty(ut)||Le(t,n,ut,null,r,vt)}}for(var at in r){var ut=r[at];if(vt=a[at],r.hasOwnProperty(at)&&(ut!=null||vt!=null))switch(at){case"type":f=ut;break;case"name":c=ut;break;case"checked":et=ut;break;case"defaultChecked":pt=ut;break;case"value":g=ut;break;case"defaultValue":b=ut;break;case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(s(137,n));break;default:ut!==vt&&Le(t,n,at,ut,r,vt)}}wc(t,g,b,B,et,pt,f,c);return;case"select":ut=g=b=at=null;for(f in a)if(B=a[f],a.hasOwnProperty(f)&&B!=null)switch(f){case"value":break;case"multiple":ut=B;default:r.hasOwnProperty(f)||Le(t,n,f,null,r,B)}for(c in r)if(f=r[c],B=a[c],r.hasOwnProperty(c)&&(f!=null||B!=null))switch(c){case"value":at=f;break;case"defaultValue":b=f;break;case"multiple":g=f;default:f!==B&&Le(t,n,c,f,r,B)}n=b,a=g,r=ut,at!=null?Es(t,!!a,at,!1):!!r!=!!a&&(n!=null?Es(t,!!a,n,!0):Es(t,!!a,a?[]:"",!1));return;case"textarea":ut=at=null;for(b in a)if(c=a[b],a.hasOwnProperty(b)&&c!=null&&!r.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Le(t,n,b,null,r,c)}for(g in r)if(c=r[g],f=a[g],r.hasOwnProperty(g)&&(c!=null||f!=null))switch(g){case"value":at=c;break;case"defaultValue":ut=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:c!==f&&Le(t,n,g,c,r,f)}Xh(t,at,ut);return;case"option":for(var Ot in a)if(at=a[Ot],a.hasOwnProperty(Ot)&&at!=null&&!r.hasOwnProperty(Ot))switch(Ot){case"selected":t.selected=!1;break;default:Le(t,n,Ot,null,r,at)}for(B in r)if(at=r[B],ut=a[B],r.hasOwnProperty(B)&&at!==ut&&(at!=null||ut!=null))switch(B){case"selected":t.selected=at&&typeof at!="function"&&typeof at!="symbol";break;default:Le(t,n,B,at,r,ut)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var jt in a)at=a[jt],a.hasOwnProperty(jt)&&at!=null&&!r.hasOwnProperty(jt)&&Le(t,n,jt,null,r,at);for(et in r)if(at=r[et],ut=a[et],r.hasOwnProperty(et)&&at!==ut&&(at!=null||ut!=null))switch(et){case"children":case"dangerouslySetInnerHTML":if(at!=null)throw Error(s(137,n));break;default:Le(t,n,et,at,r,ut)}return;default:if(Uc(n)){for(var Ne in a)at=a[Ne],a.hasOwnProperty(Ne)&&at!==void 0&&!r.hasOwnProperty(Ne)&&vf(t,n,Ne,void 0,r,at);for(pt in r)at=r[pt],ut=a[pt],!r.hasOwnProperty(pt)||at===ut||at===void 0&&ut===void 0||vf(t,n,pt,at,r,ut);return}}for(var j in a)at=a[j],a.hasOwnProperty(j)&&at!=null&&!r.hasOwnProperty(j)&&Le(t,n,j,null,r,at);for(vt in r)at=r[vt],ut=a[vt],!r.hasOwnProperty(vt)||at===ut||at==null&&ut==null||Le(t,n,vt,at,r,ut)}function Ym(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function xx(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var c=a[r],f=c.transferSize,g=c.initiatorType,b=c.duration;if(f&&b&&Ym(g)){for(g=0,b=c.responseEnd,r+=1;r<a.length;r++){var B=a[r],et=B.startTime;if(et>b)break;var pt=B.transferSize,vt=B.initiatorType;pt&&Ym(vt)&&(B=B.responseEnd,g+=pt*(B<b?1:(b-et)/(B-et)))}if(--r,n+=8*(f+g)/(c.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var xf=null,yf=null;function Ul(t){return t.nodeType===9?t:t.ownerDocument}function jm(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Zm(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Sf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Mf=null;function yx(){var t=window.event;return t&&t.type==="popstate"?t===Mf?!1:(Mf=t,!0):(Mf=null,!1)}var Km=typeof setTimeout=="function"?setTimeout:void 0,Sx=typeof clearTimeout=="function"?clearTimeout:void 0,Qm=typeof Promise=="function"?Promise:void 0,Mx=typeof queueMicrotask=="function"?queueMicrotask:typeof Qm<"u"?function(t){return Qm.resolve(null).then(t).catch(Ex)}:Km;function Ex(t){setTimeout(function(){throw t})}function Ta(t){return t==="head"}function Jm(t,n){var a=n,r=0;do{var c=a.nextSibling;if(t.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(r===0){t.removeChild(c),er(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")po(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,po(a);for(var f=a.firstChild;f;){var g=f.nextSibling,b=f.nodeName;f[Rt]||b==="SCRIPT"||b==="STYLE"||b==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=g}}else a==="body"&&po(t.ownerDocument.body);a=c}while(a);er(n)}function $m(t,n){var a=t;t=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=r}while(a)}function Ef(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Ef(a),Pt(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Tx(t,n,a,r){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[Rt])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=ri(t.nextSibling),t===null)break}return null}function bx(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=ri(t.nextSibling),t===null))return null;return t}function tg(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=ri(t.nextSibling),t===null))return null;return t}function Tf(t){return t.data==="$?"||t.data==="$~"}function bf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Ax(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),t._reactRetry=r}}function ri(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Af=null;function eg(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return ri(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function ng(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function ig(t,n,a){switch(n=Ul(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function po(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Pt(t)}var oi=new Map,ag=new Set;function Ll(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ji=q.d;q.d={f:Rx,r:Cx,D:wx,C:Dx,L:Ux,m:Lx,X:Ox,S:Nx,M:zx};function Rx(){var t=ji.f(),n=El();return t||n}function Cx(t){var n=kt(t);n!==null&&n.tag===5&&n.type==="form"?Sp(n):ji.r(t)}var Js=typeof document>"u"?null:document;function sg(t,n,a){var r=Js;if(r&&typeof n=="string"&&n){var c=Rn(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),ag.has(c)||(ag.add(c),t={rel:t,crossOrigin:a,href:n},r.querySelector(c)===null&&(n=r.createElement("link"),gn(n,"link",t),Ht(n),r.head.appendChild(n)))}}function wx(t){ji.D(t),sg("dns-prefetch",t,null)}function Dx(t,n){ji.C(t,n),sg("preconnect",t,n)}function Ux(t,n,a){ji.L(t,n,a);var r=Js;if(r&&t&&n){var c='link[rel="preload"][as="'+Rn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+Rn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+Rn(a.imageSizes)+'"]')):c+='[href="'+Rn(t)+'"]';var f=c;switch(n){case"style":f=$s(t);break;case"script":f=tr(t)}oi.has(f)||(t=x({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),oi.set(f,t),r.querySelector(c)!==null||n==="style"&&r.querySelector(mo(f))||n==="script"&&r.querySelector(go(f))||(n=r.createElement("link"),gn(n,"link",t),Ht(n),r.head.appendChild(n)))}}function Lx(t,n){ji.m(t,n);var a=Js;if(a&&t){var r=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+Rn(r)+'"][href="'+Rn(t)+'"]',f=c;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=tr(t)}if(!oi.has(f)&&(t=x({rel:"modulepreload",href:t},n),oi.set(f,t),a.querySelector(c)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(go(f)))return}r=a.createElement("link"),gn(r,"link",t),Ht(r),a.head.appendChild(r)}}}function Nx(t,n,a){ji.S(t,n,a);var r=Js;if(r&&t){var c=$t(r).hoistableStyles,f=$s(t);n=n||"default";var g=c.get(f);if(!g){var b={loading:0,preload:null};if(g=r.querySelector(mo(f)))b.loading=5;else{t=x({rel:"stylesheet",href:t,"data-precedence":n},a),(a=oi.get(f))&&Rf(t,a);var B=g=r.createElement("link");Ht(B),gn(B,"link",t),B._p=new Promise(function(et,pt){B.onload=et,B.onerror=pt}),B.addEventListener("load",function(){b.loading|=1}),B.addEventListener("error",function(){b.loading|=2}),b.loading|=4,Nl(g,n,r)}g={type:"stylesheet",instance:g,count:1,state:b},c.set(f,g)}}}function Ox(t,n){ji.X(t,n);var a=Js;if(a&&t){var r=$t(a).hoistableScripts,c=tr(t),f=r.get(c);f||(f=a.querySelector(go(c)),f||(t=x({src:t,async:!0},n),(n=oi.get(c))&&Cf(t,n),f=a.createElement("script"),Ht(f),gn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function zx(t,n){ji.M(t,n);var a=Js;if(a&&t){var r=$t(a).hoistableScripts,c=tr(t),f=r.get(c);f||(f=a.querySelector(go(c)),f||(t=x({src:t,async:!0,type:"module"},n),(n=oi.get(c))&&Cf(t,n),f=a.createElement("script"),Ht(f),gn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function rg(t,n,a,r){var c=(c=Et.current)?Ll(c):null;if(!c)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=$s(a.href),a=$t(c).hoistableStyles,r=a.get(n),r||(r={type:"style",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=$s(a.href);var f=$t(c).hoistableStyles,g=f.get(t);if(g||(c=c.ownerDocument||c,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,g),(f=c.querySelector(mo(t)))&&!f._p&&(g.instance=f,g.state.loading=5),oi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},oi.set(t,a),f||Px(c,t,a,g.state))),n&&r===null)throw Error(s(528,""));return g}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=tr(a),a=$t(c).hoistableScripts,r=a.get(n),r||(r={type:"script",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function $s(t){return'href="'+Rn(t)+'"'}function mo(t){return'link[rel="stylesheet"]['+t+"]"}function og(t){return x({},t,{"data-precedence":t.precedence,precedence:null})}function Px(t,n,a,r){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=t.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),gn(n,"link",a),Ht(n),t.head.appendChild(n))}function tr(t){return'[src="'+Rn(t)+'"]'}function go(t){return"script[async]"+t}function lg(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=t.querySelector('style[data-href~="'+Rn(a.href)+'"]');if(r)return n.instance=r,Ht(r),r;var c=x({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),Ht(r),gn(r,"style",c),Nl(r,a.precedence,t),n.instance=r;case"stylesheet":c=$s(a.href);var f=t.querySelector(mo(c));if(f)return n.state.loading|=4,n.instance=f,Ht(f),f;r=og(a),(c=oi.get(c))&&Rf(r,c),f=(t.ownerDocument||t).createElement("link"),Ht(f);var g=f;return g._p=new Promise(function(b,B){g.onload=b,g.onerror=B}),gn(f,"link",r),n.state.loading|=4,Nl(f,a.precedence,t),n.instance=f;case"script":return f=tr(a.src),(c=t.querySelector(go(f)))?(n.instance=c,Ht(c),c):(r=a,(c=oi.get(f))&&(r=x({},a),Cf(r,c)),t=t.ownerDocument||t,c=t.createElement("script"),Ht(c),gn(c,"link",r),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,Nl(r,a.precedence,t));return n.instance}function Nl(t,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=r.length?r[r.length-1]:null,f=c,g=0;g<r.length;g++){var b=r[g];if(b.dataset.precedence===n)f=b;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Rf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Cf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Ol=null;function cg(t,n,a){if(Ol===null){var r=new Map,c=Ol=new Map;c.set(a,r)}else c=Ol,r=c.get(a),r||(r=new Map,c.set(a,r));if(r.has(t))return r;for(r.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var f=a[c];if(!(f[Rt]||f[sn]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var g=f.getAttribute(n)||"";g=t+g;var b=r.get(g);b?b.push(f):r.set(g,[f])}}return r}function ug(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function Bx(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function fg(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Ix(t,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=$s(r.href),f=n.querySelector(mo(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=zl.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,Ht(f);return}f=n.ownerDocument||n,r=og(r),(c=oi.get(c))&&Rf(r,c),f=f.createElement("link"),Ht(f);var g=f;g._p=new Promise(function(b,B){g.onload=b,g.onerror=B}),gn(f,"link",r),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=zl.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var wf=0;function Fx(t,n){return t.stylesheets&&t.count===0&&Bl(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var r=setTimeout(function(){if(t.stylesheets&&Bl(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&wf===0&&(wf=62500*xx());var c=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Bl(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>wf?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(r),clearTimeout(c)}}:null}function zl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Bl(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Pl=null;function Bl(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Pl=new Map,n.forEach(Hx,t),Pl=null,zl.call(t))}function Hx(t,n){if(!(n.state.loading&4)){var a=Pl.get(t);if(a)var r=a.get(null);else{a=new Map,Pl.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var g=c[f];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(a.set(g.dataset.precedence,g),r=g)}r&&a.set(null,r)}c=n.instance,g=c.getAttribute("data-precedence"),f=a.get(g)||r,f===r&&a.set(null,c),a.set(g,c),this.count++,r=zl.bind(this),c.addEventListener("load",r),c.addEventListener("error",r),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var _o={$$typeof:U,Provider:null,Consumer:null,_currentValue:X,_currentValue2:X,_threadCount:0};function Gx(t,n,a,r,c,f,g,b,B){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ge(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ge(0),this.hiddenUpdates=Ge(null),this.identifierPrefix=r,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=B,this.incompleteTransitions=new Map}function hg(t,n,a,r,c,f,g,b,B,et,pt,vt){return t=new Gx(t,n,a,g,B,et,pt,vt,b),n=1,f===!0&&(n|=24),f=Gn(3,null,null,n),t.current=f,f.stateNode=t,n=ou(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},fu(f),t}function dg(t){return t?(t=Us,t):Us}function pg(t,n,a,r,c,f){c=dg(c),r.context===null?r.context=c:r.pendingContext=c,r=da(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=pa(t,r,n),a!==null&&(Pn(a,t,n),jr(a,t,n))}function mg(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Df(t,n){mg(t,n),(t=t.alternate)&&mg(t,n)}function gg(t){if(t.tag===13||t.tag===31){var n=Ka(t,67108864);n!==null&&Pn(n,t,67108864),Df(t,67108864)}}function _g(t){if(t.tag===13||t.tag===31){var n=qn();n=Ui(n);var a=Ka(t,n);a!==null&&Pn(a,t,n),Df(t,n)}}var Il=!0;function Vx(t,n,a,r){var c=I.T;I.T=null;var f=q.p;try{q.p=2,Uf(t,n,a,r)}finally{q.p=f,I.T=c}}function Xx(t,n,a,r){var c=I.T;I.T=null;var f=q.p;try{q.p=8,Uf(t,n,a,r)}finally{q.p=f,I.T=c}}function Uf(t,n,a,r){if(Il){var c=Lf(r);if(c===null)_f(t,n,r,Fl,a),xg(t,r);else if(Wx(c,t,n,a,r))r.stopPropagation();else if(xg(t,r),n&4&&-1<kx.indexOf(t)){for(;c!==null;){var f=kt(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var g=Zt(f.pendingLanes);if(g!==0){var b=f;for(b.pendingLanes|=2,b.entangledLanes|=2;g;){var B=1<<31-se(g);b.entanglements[1]|=B,g&=~B}Ti(f),(Re&6)===0&&(Sl=yt()+500,uo(0))}}break;case 31:case 13:b=Ka(f,2),b!==null&&Pn(b,f,2),El(),Df(f,2)}if(f=Lf(r),f===null&&_f(t,n,r,Fl,a),f===c)break;c=f}c!==null&&r.stopPropagation()}else _f(t,n,r,null,a)}}function Lf(t){return t=Nc(t),Nf(t)}var Fl=null;function Nf(t){if(Fl=null,t=zt(t),t!==null){var n=u(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===31){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Fl=t,null}function vg(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Vt()){case wt:return 2;case Ct:return 8;case Kt:case At:return 32;case Ft:return 268435456;default:return 32}default:return 32}}var Of=!1,ba=null,Aa=null,Ra=null,vo=new Map,xo=new Map,Ca=[],kx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function xg(t,n){switch(t){case"focusin":case"focusout":ba=null;break;case"dragenter":case"dragleave":Aa=null;break;case"mouseover":case"mouseout":Ra=null;break;case"pointerover":case"pointerout":vo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":xo.delete(n.pointerId)}}function yo(t,n,a,r,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[c]},n!==null&&(n=kt(n),n!==null&&gg(n)),t):(t.eventSystemFlags|=r,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function Wx(t,n,a,r,c){switch(n){case"focusin":return ba=yo(ba,t,n,a,r,c),!0;case"dragenter":return Aa=yo(Aa,t,n,a,r,c),!0;case"mouseover":return Ra=yo(Ra,t,n,a,r,c),!0;case"pointerover":var f=c.pointerId;return vo.set(f,yo(vo.get(f)||null,t,n,a,r,c)),!0;case"gotpointercapture":return f=c.pointerId,xo.set(f,yo(xo.get(f)||null,t,n,a,r,c)),!0}return!1}function yg(t){var n=zt(t.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,Lr(t.priority,function(){_g(a)});return}}else if(n===31){if(n=h(a),n!==null){t.blockedOn=n,Lr(t.priority,function(){_g(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Hl(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Lf(t.nativeEvent);if(a===null){a=t.nativeEvent;var r=new a.constructor(a.type,a);Lc=r,a.target.dispatchEvent(r),Lc=null}else return n=kt(a),n!==null&&gg(n),t.blockedOn=a,!1;n.shift()}return!0}function Sg(t,n,a){Hl(t)&&a.delete(n)}function qx(){Of=!1,ba!==null&&Hl(ba)&&(ba=null),Aa!==null&&Hl(Aa)&&(Aa=null),Ra!==null&&Hl(Ra)&&(Ra=null),vo.forEach(Sg),xo.forEach(Sg)}function Gl(t,n){t.blockedOn===n&&(t.blockedOn=null,Of||(Of=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,qx)))}var Vl=null;function Mg(t){Vl!==t&&(Vl=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Vl===t&&(Vl=null);for(var n=0;n<t.length;n+=3){var a=t[n],r=t[n+1],c=t[n+2];if(typeof r!="function"){if(Nf(r||a)===null)continue;break}var f=kt(a);f!==null&&(t.splice(n,3),n-=3,Uu(f,{pending:!0,data:c,method:a.method,action:r},r,c))}}))}function er(t){function n(B){return Gl(B,t)}ba!==null&&Gl(ba,t),Aa!==null&&Gl(Aa,t),Ra!==null&&Gl(Ra,t),vo.forEach(n),xo.forEach(n);for(var a=0;a<Ca.length;a++){var r=Ca[a];r.blockedOn===t&&(r.blockedOn=null)}for(;0<Ca.length&&(a=Ca[0],a.blockedOn===null);)yg(a),a.blockedOn===null&&Ca.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var c=a[r],f=a[r+1],g=c[_n]||null;if(typeof f=="function")g||Mg(a);else if(g){var b=null;if(f&&f.hasAttribute("formAction")){if(c=f,g=f[_n]||null)b=g.formAction;else if(Nf(c)!==null)continue}else b=g.action;typeof b=="function"?a[r+1]=b:(a.splice(r,3),r-=3),Mg(a)}}}function Eg(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(g){return c=g})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,c=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function zf(t){this._internalRoot=t}Xl.prototype.render=zf.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=qn();pg(a,r,t,n,null,null)},Xl.prototype.unmount=zf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;pg(t.current,2,null,t,null,null),El(),n[D]=null}};function Xl(t){this._internalRoot=t}Xl.prototype.unstable_scheduleHydration=function(t){if(t){var n=Ur();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Ca.length&&n!==0&&n<Ca[a].priority;a++);Ca.splice(a,0,t),a===0&&yg(t)}};var Tg=e.version;if(Tg!=="19.2.3")throw Error(s(527,Tg,"19.2.3"));q.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=p(n),t=t!==null?_(t):null,t=t===null?null:t.stateNode,t};var Yx={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:I,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var kl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!kl.isDisabled&&kl.supportsFiber)try{Ut=kl.inject(Yx),Xt=kl}catch{}}return Mo.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,r="",c=Up,f=Lp,g=Np;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError)),n=hg(t,1,!1,null,null,a,r,null,c,f,g,Eg),t[D]=n.current,gf(t),new zf(n)},Mo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var r=!1,c="",f=Up,g=Lp,b=Np,B=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(g=a.onCaughtError),a.onRecoverableError!==void 0&&(b=a.onRecoverableError),a.formState!==void 0&&(B=a.formState)),n=hg(t,1,!0,n,a??null,r,c,B,f,g,b,Eg),n.context=dg(null),a=n.current,r=qn(),r=Ui(r),c=da(r),c.callback=null,pa(a,c,r),a=r,n.current.lanes=a,Ae(n,a),Ti(n),t[D]=n.current,gf(t),new Xl(n)},Mo.version="19.2.3",Mo}var Og;function ay(){if(Og)return If.exports;Og=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),If.exports=iy(),If.exports}var sy=ay();const ry=c0(sy);const Nh="164",nr={ROTATE:0,DOLLY:1,PAN:2},ir={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},oy=0,zg=1,ly=2,u0=1,f0=2,ta=3,Ga=0,In=1,ea=2,Fa=0,Mr=1,Pg=2,Bg=3,Ig=4,cy=5,gs=100,uy=101,fy=102,hy=103,dy=104,py=200,my=201,gy=202,_y=203,Eh=204,Th=205,vy=206,xy=207,yy=208,Sy=209,My=210,Ey=211,Ty=212,by=213,Ay=214,Ry=0,Cy=1,wy=2,vc=3,Dy=4,Uy=5,Ly=6,Ny=7,h0=0,Oy=1,zy=2,Ha=0,Py=1,By=2,Iy=3,Fy=4,Hy=5,Gy=6,Vy=7,d0=300,br=301,Ar=302,bh=303,Ah=304,Tc=306,Rh=1e3,vs=1001,Ch=1002,ci=1003,Xy=1004,Wl=1005,_i=1006,Vf=1007,xs=1008,Va=1009,ky=1010,Wy=1011,p0=1012,m0=1013,Rr=1014,Ia=1015,bc=1016,g0=1017,_0=1018,Uo=1020,qy=35902,Yy=1021,jy=1022,Ci=1023,Zy=1024,Ky=1025,Er=1026,Do=1027,Qy=1028,v0=1029,Jy=1030,x0=1031,y0=1033,Xf=33776,kf=33777,Wf=33778,qf=33779,Fg=35840,Hg=35841,Gg=35842,Vg=35843,Xg=36196,kg=37492,Wg=37496,qg=37808,Yg=37809,jg=37810,Zg=37811,Kg=37812,Qg=37813,Jg=37814,$g=37815,t_=37816,e_=37817,n_=37818,i_=37819,a_=37820,s_=37821,Yf=36492,r_=36494,o_=36495,$y=36283,l_=36284,c_=36285,u_=36286,tS=3200,eS=3201,S0=0,nS=1,Ba="",bi="srgb",ka="srgb-linear",Oh="display-p3",Ac="display-p3-linear",xc="linear",He="srgb",yc="rec709",Sc="p3",ar=7680,f_=519,iS=512,aS=513,sS=514,M0=515,rS=516,oS=517,lS=518,cS=519,h_=35044,d_="300 es",na=2e3,Mc=2001;class Ms{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){if(this._listeners===void 0)return!1;const s=this._listeners;return s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){if(this._listeners===void 0)return;const l=this._listeners[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const s=this._listeners[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let u=0,d=l.length;u<d;u++)l[u].call(this,e);e.target=null}}}const Sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],gc=Math.PI/180,wh=180/Math.PI;function Lo(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Sn[o&255]+Sn[o>>8&255]+Sn[o>>16&255]+Sn[o>>24&255]+"-"+Sn[e&255]+Sn[e>>8&255]+"-"+Sn[e>>16&15|64]+Sn[e>>24&255]+"-"+Sn[i&63|128]+Sn[i>>8&255]+"-"+Sn[i>>16&255]+Sn[i>>24&255]+Sn[s&255]+Sn[s>>8&255]+Sn[s>>16&255]+Sn[s>>24&255]).toLowerCase()}function Dn(o,e,i){return Math.max(e,Math.min(i,o))}function uS(o,e){return(o%e+e)%e}function jf(o,e,i){return(1-i)*o+i*e}function Eo(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Bn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const fS={DEG2RAD:gc};class te{constructor(e=0,i=0){te.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(i,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Dn(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),u=this.x-e.x,d=this.y-e.y;return this.x=u*s-d*l+e.x,this.y=u*l+d*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class fe{constructor(e,i,s,l,u,d,h,m,p){fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,u,d,h,m,p)}set(e,i,s,l,u,d,h,m,p){const _=this.elements;return _[0]=e,_[1]=l,_[2]=h,_[3]=i,_[4]=u,_[5]=m,_[6]=s,_[7]=d,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,u=this.elements,d=s[0],h=s[3],m=s[6],p=s[1],_=s[4],x=s[7],y=s[2],M=s[5],A=s[8],C=l[0],S=l[3],v=l[6],z=l[1],U=l[4],L=l[7],Y=l[2],F=l[5],N=l[8];return u[0]=d*C+h*z+m*Y,u[3]=d*S+h*U+m*F,u[6]=d*v+h*L+m*N,u[1]=p*C+_*z+x*Y,u[4]=p*S+_*U+x*F,u[7]=p*v+_*L+x*N,u[2]=y*C+M*z+A*Y,u[5]=y*S+M*U+A*F,u[8]=y*v+M*L+A*N,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],d=e[4],h=e[5],m=e[6],p=e[7],_=e[8];return i*d*_-i*h*p-s*u*_+s*h*m+l*u*p-l*d*m}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],d=e[4],h=e[5],m=e[6],p=e[7],_=e[8],x=_*d-h*p,y=h*m-_*u,M=p*u-d*m,A=i*x+s*y+l*M;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/A;return e[0]=x*C,e[1]=(l*p-_*s)*C,e[2]=(h*s-l*d)*C,e[3]=y*C,e[4]=(_*i-l*m)*C,e[5]=(l*u-h*i)*C,e[6]=M*C,e[7]=(s*m-p*i)*C,e[8]=(d*i-s*u)*C,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,u,d,h){const m=Math.cos(u),p=Math.sin(u);return this.set(s*m,s*p,-s*(m*d+p*h)+d+e,-l*p,l*m,-l*(-p*d+m*h)+h+i,0,0,1),this}scale(e,i){return this.premultiply(Zf.makeScale(e,i)),this}rotate(e){return this.premultiply(Zf.makeRotation(-e)),this}translate(e,i){return this.premultiply(Zf.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Zf=new fe;function E0(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Ec(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function hS(){const o=Ec("canvas");return o.style.display="block",o}const p_={};function dS(o){o in p_||(p_[o]=!0,console.warn(o))}const m_=new fe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),g_=new fe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ql={[ka]:{transfer:xc,primaries:yc,toReference:o=>o,fromReference:o=>o},[bi]:{transfer:He,primaries:yc,toReference:o=>o.convertSRGBToLinear(),fromReference:o=>o.convertLinearToSRGB()},[Ac]:{transfer:xc,primaries:Sc,toReference:o=>o.applyMatrix3(g_),fromReference:o=>o.applyMatrix3(m_)},[Oh]:{transfer:He,primaries:Sc,toReference:o=>o.convertSRGBToLinear().applyMatrix3(g_),fromReference:o=>o.applyMatrix3(m_).convertLinearToSRGB()}},pS=new Set([ka,Ac]),Oe={enabled:!0,_workingColorSpace:ka,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(o){if(!pS.has(o))throw new Error(`Unsupported working color space, "${o}".`);this._workingColorSpace=o},convert:function(o,e,i){if(this.enabled===!1||e===i||!e||!i)return o;const s=ql[e].toReference,l=ql[i].fromReference;return l(s(o))},fromWorkingColorSpace:function(o,e){return this.convert(o,this._workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this._workingColorSpace)},getPrimaries:function(o){return ql[o].primaries},getTransfer:function(o){return o===Ba?xc:ql[o].transfer}};function Tr(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Kf(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let sr;class mS{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{sr===void 0&&(sr=Ec("canvas")),sr.width=e.width,sr.height=e.height;const s=sr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=sr}return i.width>2048||i.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),i.toDataURL("image/jpeg",.6)):i.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Ec("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),u=l.data;for(let d=0;d<u.length;d++)u[d]=Tr(u[d]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Tr(i[s]/255)*255):i[s]=Tr(i[s]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let gS=0;class T0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gS++}),this.uuid=Lo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?u.push(Qf(l[d].image)):u.push(Qf(l[d]))}else u=Qf(l);s.url=u}return i||(e.images[this.uuid]=s),s}}function Qf(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?mS.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let _S=0;class Fn extends Ms{constructor(e=Fn.DEFAULT_IMAGE,i=Fn.DEFAULT_MAPPING,s=vs,l=vs,u=_i,d=xs,h=Ci,m=Va,p=Fn.DEFAULT_ANISOTROPY,_=Ba){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_S++}),this.uuid=Lo(),this.name="",this.source=new T0(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=u,this.minFilter=d,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new te(0,0),this.repeat=new te(1,1),this.center=new te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==d0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Rh:e.x=e.x-Math.floor(e.x);break;case vs:e.x=e.x<0?0:1;break;case Ch:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Rh:e.y=e.y-Math.floor(e.y);break;case vs:e.y=e.y<0?0:1;break;case Ch:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Fn.DEFAULT_IMAGE=null;Fn.DEFAULT_MAPPING=d0;Fn.DEFAULT_ANISOTROPY=1;class ke{constructor(e=0,i=0,s=0,l=1){ke.prototype.isVector4=!0,this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,u=this.w,d=e.elements;return this.x=d[0]*i+d[4]*s+d[8]*l+d[12]*u,this.y=d[1]*i+d[5]*s+d[9]*l+d[13]*u,this.z=d[2]*i+d[6]*s+d[10]*l+d[14]*u,this.w=d[3]*i+d[7]*s+d[11]*l+d[15]*u,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,u;const m=e.elements,p=m[0],_=m[4],x=m[8],y=m[1],M=m[5],A=m[9],C=m[2],S=m[6],v=m[10];if(Math.abs(_-y)<.01&&Math.abs(x-C)<.01&&Math.abs(A-S)<.01){if(Math.abs(_+y)<.1&&Math.abs(x+C)<.1&&Math.abs(A+S)<.1&&Math.abs(p+M+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const U=(p+1)/2,L=(M+1)/2,Y=(v+1)/2,F=(_+y)/4,N=(x+C)/4,W=(A+S)/4;return U>L&&U>Y?U<.01?(s=0,l=.707106781,u=.707106781):(s=Math.sqrt(U),l=F/s,u=N/s):L>Y?L<.01?(s=.707106781,l=0,u=.707106781):(l=Math.sqrt(L),s=F/l,u=W/l):Y<.01?(s=.707106781,l=.707106781,u=0):(u=Math.sqrt(Y),s=N/u,l=W/u),this.set(s,l,u,i),this}let z=Math.sqrt((S-A)*(S-A)+(x-C)*(x-C)+(y-_)*(y-_));return Math.abs(z)<.001&&(z=1),this.x=(S-A)/z,this.y=(x-C)/z,this.z=(y-_)/z,this.w=Math.acos((p+M+v-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this.z=Math.max(e.z,Math.min(i.z,this.z)),this.w=Math.max(e.w,Math.min(i.w,this.w)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this.z=Math.max(e,Math.min(i,this.z)),this.w=Math.max(e,Math.min(i,this.w)),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(i,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class vS extends Ms{constructor(e=1,i=1,s={}){super(),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=1,this.scissor=new ke(0,0,e,i),this.scissorTest=!1,this.viewport=new ke(0,0,e,i);const l={width:e,height:i,depth:1};s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_i,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},s);const u=new Fn(l,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace);u.flipY=!1,u.generateMipmaps=s.generateMipmaps,u.internalFormat=s.internalFormat,this.textures=[];const d=s.count;for(let h=0;h<d;h++)this.textures[h]=u.clone(),this.textures[h].isRenderTargetTexture=!0;this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this.depthTexture=s.depthTexture,this.samples=s.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let s=0,l=e.textures.length;s<l;s++)this.textures[s]=e.textures[s].clone(),this.textures[s].isRenderTargetTexture=!0;const i=Object.assign({},e.texture.image);return this.texture.source=new T0(i),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ys extends vS{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class b0 extends Fn{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=ci,this.minFilter=ci,this.wrapR=vs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xS extends Fn{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=ci,this.minFilter=ci,this.wrapR=vs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ss{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,u,d,h){let m=s[l+0],p=s[l+1],_=s[l+2],x=s[l+3];const y=u[d+0],M=u[d+1],A=u[d+2],C=u[d+3];if(h===0){e[i+0]=m,e[i+1]=p,e[i+2]=_,e[i+3]=x;return}if(h===1){e[i+0]=y,e[i+1]=M,e[i+2]=A,e[i+3]=C;return}if(x!==C||m!==y||p!==M||_!==A){let S=1-h;const v=m*y+p*M+_*A+x*C,z=v>=0?1:-1,U=1-v*v;if(U>Number.EPSILON){const Y=Math.sqrt(U),F=Math.atan2(Y,v*z);S=Math.sin(S*F)/Y,h=Math.sin(h*F)/Y}const L=h*z;if(m=m*S+y*L,p=p*S+M*L,_=_*S+A*L,x=x*S+C*L,S===1-h){const Y=1/Math.sqrt(m*m+p*p+_*_+x*x);m*=Y,p*=Y,_*=Y,x*=Y}}e[i]=m,e[i+1]=p,e[i+2]=_,e[i+3]=x}static multiplyQuaternionsFlat(e,i,s,l,u,d){const h=s[l],m=s[l+1],p=s[l+2],_=s[l+3],x=u[d],y=u[d+1],M=u[d+2],A=u[d+3];return e[i]=h*A+_*x+m*M-p*y,e[i+1]=m*A+_*y+p*x-h*M,e[i+2]=p*A+_*M+h*y-m*x,e[i+3]=_*A-h*x-m*y-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,u=e._z,d=e._order,h=Math.cos,m=Math.sin,p=h(s/2),_=h(l/2),x=h(u/2),y=m(s/2),M=m(l/2),A=m(u/2);switch(d){case"XYZ":this._x=y*_*x+p*M*A,this._y=p*M*x-y*_*A,this._z=p*_*A+y*M*x,this._w=p*_*x-y*M*A;break;case"YXZ":this._x=y*_*x+p*M*A,this._y=p*M*x-y*_*A,this._z=p*_*A-y*M*x,this._w=p*_*x+y*M*A;break;case"ZXY":this._x=y*_*x-p*M*A,this._y=p*M*x+y*_*A,this._z=p*_*A+y*M*x,this._w=p*_*x-y*M*A;break;case"ZYX":this._x=y*_*x-p*M*A,this._y=p*M*x+y*_*A,this._z=p*_*A-y*M*x,this._w=p*_*x+y*M*A;break;case"YZX":this._x=y*_*x+p*M*A,this._y=p*M*x+y*_*A,this._z=p*_*A-y*M*x,this._w=p*_*x-y*M*A;break;case"XZY":this._x=y*_*x-p*M*A,this._y=p*M*x-y*_*A,this._z=p*_*A+y*M*x,this._w=p*_*x+y*M*A;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],u=i[8],d=i[1],h=i[5],m=i[9],p=i[2],_=i[6],x=i[10],y=s+h+x;if(y>0){const M=.5/Math.sqrt(y+1);this._w=.25/M,this._x=(_-m)*M,this._y=(u-p)*M,this._z=(d-l)*M}else if(s>h&&s>x){const M=2*Math.sqrt(1+s-h-x);this._w=(_-m)/M,this._x=.25*M,this._y=(l+d)/M,this._z=(u+p)/M}else if(h>x){const M=2*Math.sqrt(1+h-s-x);this._w=(u-p)/M,this._x=(l+d)/M,this._y=.25*M,this._z=(m+_)/M}else{const M=2*Math.sqrt(1+x-s-h);this._w=(d-l)/M,this._x=(u+p)/M,this._y=(m+_)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<Number.EPSILON?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Dn(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,u=e._z,d=e._w,h=i._x,m=i._y,p=i._z,_=i._w;return this._x=s*_+d*h+l*p-u*m,this._y=l*_+d*m+u*h-s*p,this._z=u*_+d*p+s*m-l*h,this._w=d*_-s*h-l*m-u*p,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const s=this._x,l=this._y,u=this._z,d=this._w;let h=d*e._w+s*e._x+l*e._y+u*e._z;if(h<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,h=-h):this.copy(e),h>=1)return this._w=d,this._x=s,this._y=l,this._z=u,this;const m=1-h*h;if(m<=Number.EPSILON){const M=1-i;return this._w=M*d+i*this._w,this._x=M*s+i*this._x,this._y=M*l+i*this._y,this._z=M*u+i*this._z,this.normalize(),this}const p=Math.sqrt(m),_=Math.atan2(p,h),x=Math.sin((1-i)*_)/p,y=Math.sin(i*_)/p;return this._w=d*x+this._w*y,this._x=s*x+this._x*y,this._y=l*x+this._y*y,this._z=u*x+this._z*y,this._onChangeCallback(),this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),u=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(i),u*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Z{constructor(e=0,i=0,s=0){Z.prototype.isVector3=!0,this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(__.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(__.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*s+u[6]*l,this.y=u[1]*i+u[4]*s+u[7]*l,this.z=u[2]*i+u[5]*s+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,u=e.elements,d=1/(u[3]*i+u[7]*s+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*s+u[8]*l+u[12])*d,this.y=(u[1]*i+u[5]*s+u[9]*l+u[13])*d,this.z=(u[2]*i+u[6]*s+u[10]*l+u[14])*d,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,u=e.x,d=e.y,h=e.z,m=e.w,p=2*(d*l-h*s),_=2*(h*i-u*l),x=2*(u*s-d*i);return this.x=i+m*p+d*x-h*_,this.y=s+m*_+h*p-u*x,this.z=l+m*x+u*_-d*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*s+u[8]*l,this.y=u[1]*i+u[5]*s+u[9]*l,this.z=u[2]*i+u[6]*s+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this.z=Math.max(e.z,Math.min(i.z,this.z)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this.z=Math.max(e,Math.min(i,this.z)),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(i,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,u=e.z,d=i.x,h=i.y,m=i.z;return this.x=l*m-u*h,this.y=u*d-s*m,this.z=s*h-l*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Jf.copy(this).projectOnVector(e),this.sub(Jf)}reflect(e){return this.sub(Jf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Dn(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Jf=new Z,__=new Ss;class No{constructor(e=new Z(1/0,1/0,1/0),i=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(pi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(pi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=pi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const u=s.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let d=0,h=u.count;d<h;d++)e.isMesh===!0?e.getVertexPosition(d,pi):pi.fromBufferAttribute(u,d),pi.applyMatrix4(e.matrixWorld),this.expandByPoint(pi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Yl.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Yl.copy(s.boundingBox)),Yl.applyMatrix4(e.matrixWorld),this.union(Yl)}const l=e.children;for(let u=0,d=l.length;u<d;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,pi),pi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(To),jl.subVectors(this.max,To),rr.subVectors(e.a,To),or.subVectors(e.b,To),lr.subVectors(e.c,To),Da.subVectors(or,rr),Ua.subVectors(lr,or),cs.subVectors(rr,lr);let i=[0,-Da.z,Da.y,0,-Ua.z,Ua.y,0,-cs.z,cs.y,Da.z,0,-Da.x,Ua.z,0,-Ua.x,cs.z,0,-cs.x,-Da.y,Da.x,0,-Ua.y,Ua.x,0,-cs.y,cs.x,0];return!$f(i,rr,or,lr,jl)||(i=[1,0,0,0,1,0,0,0,1],!$f(i,rr,or,lr,jl))?!1:(Zl.crossVectors(Da,Ua),i=[Zl.x,Zl.y,Zl.z],$f(i,rr,or,lr,jl))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,pi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(pi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Zi=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],pi=new Z,Yl=new No,rr=new Z,or=new Z,lr=new Z,Da=new Z,Ua=new Z,cs=new Z,To=new Z,jl=new Z,Zl=new Z,us=new Z;function $f(o,e,i,s,l){for(let u=0,d=o.length-3;u<=d;u+=3){us.fromArray(o,u);const h=l.x*Math.abs(us.x)+l.y*Math.abs(us.y)+l.z*Math.abs(us.z),m=e.dot(us),p=i.dot(us),_=s.dot(us);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>h)return!1}return!0}const yS=new No,bo=new Z,th=new Z;class zh{constructor(e=new Z,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):yS.setFromPoints(e).getCenter(s);let l=0;for(let u=0,d=e.length;u<d;u++)l=Math.max(l,s.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;bo.subVectors(e,this.center);const i=bo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(bo,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(th.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(bo.copy(e.center).add(th)),this.expandByPoint(bo.copy(e.center).sub(th))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ki=new Z,eh=new Z,Kl=new Z,La=new Z,nh=new Z,Ql=new Z,ih=new Z;class A0{constructor(e=new Z,i=new Z(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ki)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Ki.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Ki.copy(this.origin).addScaledVector(this.direction,i),Ki.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){eh.copy(e).add(i).multiplyScalar(.5),Kl.copy(i).sub(e).normalize(),La.copy(this.origin).sub(eh);const u=e.distanceTo(i)*.5,d=-this.direction.dot(Kl),h=La.dot(this.direction),m=-La.dot(Kl),p=La.lengthSq(),_=Math.abs(1-d*d);let x,y,M,A;if(_>0)if(x=d*m-h,y=d*h-m,A=u*_,x>=0)if(y>=-A)if(y<=A){const C=1/_;x*=C,y*=C,M=x*(x+d*y+2*h)+y*(d*x+y+2*m)+p}else y=u,x=Math.max(0,-(d*y+h)),M=-x*x+y*(y+2*m)+p;else y=-u,x=Math.max(0,-(d*y+h)),M=-x*x+y*(y+2*m)+p;else y<=-A?(x=Math.max(0,-(-d*u+h)),y=x>0?-u:Math.min(Math.max(-u,-m),u),M=-x*x+y*(y+2*m)+p):y<=A?(x=0,y=Math.min(Math.max(-u,-m),u),M=y*(y+2*m)+p):(x=Math.max(0,-(d*u+h)),y=x>0?u:Math.min(Math.max(-u,-m),u),M=-x*x+y*(y+2*m)+p);else y=d>0?-u:u,x=Math.max(0,-(d*y+h)),M=-x*x+y*(y+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(eh).addScaledVector(Kl,y),M}intersectSphere(e,i){Ki.subVectors(e.center,this.origin);const s=Ki.dot(this.direction),l=Ki.dot(Ki)-s*s,u=e.radius*e.radius;if(l>u)return null;const d=Math.sqrt(u-l),h=s-d,m=s+d;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,u,d,h,m;const p=1/this.direction.x,_=1/this.direction.y,x=1/this.direction.z,y=this.origin;return p>=0?(s=(e.min.x-y.x)*p,l=(e.max.x-y.x)*p):(s=(e.max.x-y.x)*p,l=(e.min.x-y.x)*p),_>=0?(u=(e.min.y-y.y)*_,d=(e.max.y-y.y)*_):(u=(e.max.y-y.y)*_,d=(e.min.y-y.y)*_),s>d||u>l||((u>s||isNaN(s))&&(s=u),(d<l||isNaN(l))&&(l=d),x>=0?(h=(e.min.z-y.z)*x,m=(e.max.z-y.z)*x):(h=(e.max.z-y.z)*x,m=(e.min.z-y.z)*x),s>m||h>l)||((h>s||s!==s)&&(s=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,Ki)!==null}intersectTriangle(e,i,s,l,u){nh.subVectors(i,e),Ql.subVectors(s,e),ih.crossVectors(nh,Ql);let d=this.direction.dot(ih),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;La.subVectors(this.origin,e);const m=h*this.direction.dot(Ql.crossVectors(La,Ql));if(m<0)return null;const p=h*this.direction.dot(nh.cross(La));if(p<0||m+p>d)return null;const _=-h*La.dot(ih);return _<0?null:this.at(_/d,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class je{constructor(e,i,s,l,u,d,h,m,p,_,x,y,M,A,C,S){je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,u,d,h,m,p,_,x,y,M,A,C,S)}set(e,i,s,l,u,d,h,m,p,_,x,y,M,A,C,S){const v=this.elements;return v[0]=e,v[4]=i,v[8]=s,v[12]=l,v[1]=u,v[5]=d,v[9]=h,v[13]=m,v[2]=p,v[6]=_,v[10]=x,v[14]=y,v[3]=M,v[7]=A,v[11]=C,v[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new je().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,s=e.elements,l=1/cr.setFromMatrixColumn(e,0).length(),u=1/cr.setFromMatrixColumn(e,1).length(),d=1/cr.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*u,i[5]=s[5]*u,i[6]=s[6]*u,i[7]=0,i[8]=s[8]*d,i[9]=s[9]*d,i[10]=s[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,u=e.z,d=Math.cos(s),h=Math.sin(s),m=Math.cos(l),p=Math.sin(l),_=Math.cos(u),x=Math.sin(u);if(e.order==="XYZ"){const y=d*_,M=d*x,A=h*_,C=h*x;i[0]=m*_,i[4]=-m*x,i[8]=p,i[1]=M+A*p,i[5]=y-C*p,i[9]=-h*m,i[2]=C-y*p,i[6]=A+M*p,i[10]=d*m}else if(e.order==="YXZ"){const y=m*_,M=m*x,A=p*_,C=p*x;i[0]=y+C*h,i[4]=A*h-M,i[8]=d*p,i[1]=d*x,i[5]=d*_,i[9]=-h,i[2]=M*h-A,i[6]=C+y*h,i[10]=d*m}else if(e.order==="ZXY"){const y=m*_,M=m*x,A=p*_,C=p*x;i[0]=y-C*h,i[4]=-d*x,i[8]=A+M*h,i[1]=M+A*h,i[5]=d*_,i[9]=C-y*h,i[2]=-d*p,i[6]=h,i[10]=d*m}else if(e.order==="ZYX"){const y=d*_,M=d*x,A=h*_,C=h*x;i[0]=m*_,i[4]=A*p-M,i[8]=y*p+C,i[1]=m*x,i[5]=C*p+y,i[9]=M*p-A,i[2]=-p,i[6]=h*m,i[10]=d*m}else if(e.order==="YZX"){const y=d*m,M=d*p,A=h*m,C=h*p;i[0]=m*_,i[4]=C-y*x,i[8]=A*x+M,i[1]=x,i[5]=d*_,i[9]=-h*_,i[2]=-p*_,i[6]=M*x+A,i[10]=y-C*x}else if(e.order==="XZY"){const y=d*m,M=d*p,A=h*m,C=h*p;i[0]=m*_,i[4]=-x,i[8]=p*_,i[1]=y*x+C,i[5]=d*_,i[9]=M*x-A,i[2]=A*x-M,i[6]=h*_,i[10]=C*x+y}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(SS,e,MS)}lookAt(e,i,s){const l=this.elements;return Yn.subVectors(e,i),Yn.lengthSq()===0&&(Yn.z=1),Yn.normalize(),Na.crossVectors(s,Yn),Na.lengthSq()===0&&(Math.abs(s.z)===1?Yn.x+=1e-4:Yn.z+=1e-4,Yn.normalize(),Na.crossVectors(s,Yn)),Na.normalize(),Jl.crossVectors(Yn,Na),l[0]=Na.x,l[4]=Jl.x,l[8]=Yn.x,l[1]=Na.y,l[5]=Jl.y,l[9]=Yn.y,l[2]=Na.z,l[6]=Jl.z,l[10]=Yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,u=this.elements,d=s[0],h=s[4],m=s[8],p=s[12],_=s[1],x=s[5],y=s[9],M=s[13],A=s[2],C=s[6],S=s[10],v=s[14],z=s[3],U=s[7],L=s[11],Y=s[15],F=l[0],N=l[4],W=l[8],w=l[12],T=l[1],k=l[5],J=l[9],H=l[13],ot=l[2],ct=l[6],I=l[10],q=l[14],X=l[3],mt=l[7],lt=l[11],O=l[15];return u[0]=d*F+h*T+m*ot+p*X,u[4]=d*N+h*k+m*ct+p*mt,u[8]=d*W+h*J+m*I+p*lt,u[12]=d*w+h*H+m*q+p*O,u[1]=_*F+x*T+y*ot+M*X,u[5]=_*N+x*k+y*ct+M*mt,u[9]=_*W+x*J+y*I+M*lt,u[13]=_*w+x*H+y*q+M*O,u[2]=A*F+C*T+S*ot+v*X,u[6]=A*N+C*k+S*ct+v*mt,u[10]=A*W+C*J+S*I+v*lt,u[14]=A*w+C*H+S*q+v*O,u[3]=z*F+U*T+L*ot+Y*X,u[7]=z*N+U*k+L*ct+Y*mt,u[11]=z*W+U*J+L*I+Y*lt,u[15]=z*w+U*H+L*q+Y*O,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],u=e[12],d=e[1],h=e[5],m=e[9],p=e[13],_=e[2],x=e[6],y=e[10],M=e[14],A=e[3],C=e[7],S=e[11],v=e[15];return A*(+u*m*x-l*p*x-u*h*y+s*p*y+l*h*M-s*m*M)+C*(+i*m*M-i*p*y+u*d*y-l*d*M+l*p*_-u*m*_)+S*(+i*p*x-i*h*M-u*d*x+s*d*M+u*h*_-s*p*_)+v*(-l*h*_-i*m*x+i*h*y+l*d*x-s*d*y+s*m*_)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],d=e[4],h=e[5],m=e[6],p=e[7],_=e[8],x=e[9],y=e[10],M=e[11],A=e[12],C=e[13],S=e[14],v=e[15],z=x*S*p-C*y*p+C*m*M-h*S*M-x*m*v+h*y*v,U=A*y*p-_*S*p-A*m*M+d*S*M+_*m*v-d*y*v,L=_*C*p-A*x*p+A*h*M-d*C*M-_*h*v+d*x*v,Y=A*x*m-_*C*m-A*h*y+d*C*y+_*h*S-d*x*S,F=i*z+s*U+l*L+u*Y;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/F;return e[0]=z*N,e[1]=(C*y*u-x*S*u-C*l*M+s*S*M+x*l*v-s*y*v)*N,e[2]=(h*S*u-C*m*u+C*l*p-s*S*p-h*l*v+s*m*v)*N,e[3]=(x*m*u-h*y*u-x*l*p+s*y*p+h*l*M-s*m*M)*N,e[4]=U*N,e[5]=(_*S*u-A*y*u+A*l*M-i*S*M-_*l*v+i*y*v)*N,e[6]=(A*m*u-d*S*u-A*l*p+i*S*p+d*l*v-i*m*v)*N,e[7]=(d*y*u-_*m*u+_*l*p-i*y*p-d*l*M+i*m*M)*N,e[8]=L*N,e[9]=(A*x*u-_*C*u-A*s*M+i*C*M+_*s*v-i*x*v)*N,e[10]=(d*C*u-A*h*u+A*s*p-i*C*p-d*s*v+i*h*v)*N,e[11]=(_*h*u-d*x*u-_*s*p+i*x*p+d*s*M-i*h*M)*N,e[12]=Y*N,e[13]=(_*C*l-A*x*l+A*s*y-i*C*y-_*s*S+i*x*S)*N,e[14]=(A*h*l-d*C*l-A*s*m+i*C*m+d*s*S-i*h*S)*N,e[15]=(d*x*l-_*h*l+_*s*m-i*x*m-d*s*y+i*h*y)*N,this}scale(e){const i=this.elements,s=e.x,l=e.y,u=e.z;return i[0]*=s,i[4]*=l,i[8]*=u,i[1]*=s,i[5]*=l,i[9]*=u,i[2]*=s,i[6]*=l,i[10]*=u,i[3]*=s,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),u=1-s,d=e.x,h=e.y,m=e.z,p=u*d,_=u*h;return this.set(p*d+s,p*h-l*m,p*m+l*h,0,p*h+l*m,_*h+s,_*m-l*d,0,p*m-l*h,_*m+l*d,u*m*m+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,u,d){return this.set(1,s,u,0,e,1,d,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,u=i._x,d=i._y,h=i._z,m=i._w,p=u+u,_=d+d,x=h+h,y=u*p,M=u*_,A=u*x,C=d*_,S=d*x,v=h*x,z=m*p,U=m*_,L=m*x,Y=s.x,F=s.y,N=s.z;return l[0]=(1-(C+v))*Y,l[1]=(M+L)*Y,l[2]=(A-U)*Y,l[3]=0,l[4]=(M-L)*F,l[5]=(1-(y+v))*F,l[6]=(S+z)*F,l[7]=0,l[8]=(A+U)*N,l[9]=(S-z)*N,l[10]=(1-(y+C))*N,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;let u=cr.set(l[0],l[1],l[2]).length();const d=cr.set(l[4],l[5],l[6]).length(),h=cr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),e.x=l[12],e.y=l[13],e.z=l[14],mi.copy(this);const p=1/u,_=1/d,x=1/h;return mi.elements[0]*=p,mi.elements[1]*=p,mi.elements[2]*=p,mi.elements[4]*=_,mi.elements[5]*=_,mi.elements[6]*=_,mi.elements[8]*=x,mi.elements[9]*=x,mi.elements[10]*=x,i.setFromRotationMatrix(mi),s.x=u,s.y=d,s.z=h,this}makePerspective(e,i,s,l,u,d,h=na){const m=this.elements,p=2*u/(i-e),_=2*u/(s-l),x=(i+e)/(i-e),y=(s+l)/(s-l);let M,A;if(h===na)M=-(d+u)/(d-u),A=-2*d*u/(d-u);else if(h===Mc)M=-d/(d-u),A=-d*u/(d-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return m[0]=p,m[4]=0,m[8]=x,m[12]=0,m[1]=0,m[5]=_,m[9]=y,m[13]=0,m[2]=0,m[6]=0,m[10]=M,m[14]=A,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,i,s,l,u,d,h=na){const m=this.elements,p=1/(i-e),_=1/(s-l),x=1/(d-u),y=(i+e)*p,M=(s+l)*_;let A,C;if(h===na)A=(d+u)*x,C=-2*x;else if(h===Mc)A=u*x,C=-1*x;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return m[0]=2*p,m[4]=0,m[8]=0,m[12]=-y,m[1]=0,m[5]=2*_,m[9]=0,m[13]=-M,m[2]=0,m[6]=0,m[10]=C,m[14]=-A,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}}const cr=new Z,mi=new je,SS=new Z(0,0,0),MS=new Z(1,1,1),Na=new Z,Jl=new Z,Yn=new Z,v_=new je,x_=new Ss;class Di{constructor(e=0,i=0,s=0,l=Di.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,u=l[0],d=l[4],h=l[8],m=l[1],p=l[5],_=l[9],x=l[2],y=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Dn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,M),this._z=Math.atan2(-d,u)):(this._x=Math.atan2(y,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Dn(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(h,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-x,u),this._z=0);break;case"ZXY":this._x=Math.asin(Dn(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-x,M),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-Dn(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(y,M),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(Dn(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-x,u)):(this._x=0,this._y=Math.atan2(h,M));break;case"XZY":this._z=Math.asin(-Dn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(y,p),this._y=Math.atan2(h,u)):(this._x=Math.atan2(-_,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return v_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(v_,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return x_.setFromEuler(this),this.setFromQuaternion(x_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Di.DEFAULT_ORDER="XYZ";class R0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ES=0;const y_=new Z,ur=new Ss,Qi=new je,$l=new Z,Ao=new Z,TS=new Z,bS=new Ss,S_=new Z(1,0,0),M_=new Z(0,1,0),E_=new Z(0,0,1),T_={type:"added"},AS={type:"removed"},fr={type:"childadded",child:null},ah={type:"childremoved",child:null};class En extends Ms{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ES++}),this.uuid=Lo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=En.DEFAULT_UP.clone();const e=new Z,i=new Di,s=new Ss,l=new Z(1,1,1);function u(){s.setFromEuler(i,!1)}function d(){i.setFromQuaternion(s,void 0,!1)}i._onChange(u),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new je},normalMatrix:{value:new fe}}),this.matrix=new je,this.matrixWorld=new je,this.matrixAutoUpdate=En.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=En.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new R0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return ur.setFromAxisAngle(e,i),this.quaternion.multiply(ur),this}rotateOnWorldAxis(e,i){return ur.setFromAxisAngle(e,i),this.quaternion.premultiply(ur),this}rotateX(e){return this.rotateOnAxis(S_,e)}rotateY(e){return this.rotateOnAxis(M_,e)}rotateZ(e){return this.rotateOnAxis(E_,e)}translateOnAxis(e,i){return y_.copy(e).applyQuaternion(this.quaternion),this.position.add(y_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(S_,e)}translateY(e){return this.translateOnAxis(M_,e)}translateZ(e){return this.translateOnAxis(E_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Qi.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?$l.copy(e):$l.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Ao.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qi.lookAt(Ao,$l,this.up):Qi.lookAt($l,Ao,this.up),this.quaternion.setFromRotationMatrix(Qi),l&&(Qi.extractRotation(l.matrixWorld),ur.setFromRotationMatrix(Qi),this.quaternion.premultiply(ur.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(T_),fr.child=e,this.dispatchEvent(fr),fr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(AS),ah.child=e,this.dispatchEvent(ah),ah.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Qi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Qi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Qi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(T_),fr.child=e,this.dispatchEvent(fr),fr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const d=this.children[s].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ao,e,TS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ao,bS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++){const u=i[s];(u.matrixWorldAutoUpdate===!0||e===!0)&&u.updateMatrixWorld(e)}}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),i===!0){const l=this.children;for(let u=0,d=l.length;u<d;u++){const h=l[u];h.matrixWorldAutoUpdate===!0&&h.updateWorldMatrix(!1,!0)}}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(h=>({boxInitialized:h.boxInitialized,boxMin:h.box.min.toArray(),boxMax:h.box.max.toArray(),sphereInitialized:h.sphereInitialized,sphereRadius:h.sphere.radius,sphereCenter:h.sphere.center.toArray()})),l.maxGeometryCount=this._maxGeometryCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function u(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const x=m[p];u(e.shapes,x)}else u(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(u(e.materials,this.material[m]));l.material=h}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(u(e.animations,m))}}if(i){const h=d(e.geometries),m=d(e.materials),p=d(e.textures),_=d(e.images),x=d(e.shapes),y=d(e.skeletons),M=d(e.animations),A=d(e.nodes);h.length>0&&(s.geometries=h),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),_.length>0&&(s.images=_),x.length>0&&(s.shapes=x),y.length>0&&(s.skeletons=y),M.length>0&&(s.animations=M),A.length>0&&(s.nodes=A)}return s.object=l,s;function d(h){const m=[];for(const p in h){const _=h[p];delete _.metadata,m.push(_)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}En.DEFAULT_UP=new Z(0,1,0);En.DEFAULT_MATRIX_AUTO_UPDATE=!0;En.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const gi=new Z,Ji=new Z,sh=new Z,$i=new Z,hr=new Z,dr=new Z,b_=new Z,rh=new Z,oh=new Z,lh=new Z;class Ri{constructor(e=new Z,i=new Z,s=new Z){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),gi.subVectors(e,i),l.cross(gi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,s,l,u){gi.subVectors(l,i),Ji.subVectors(s,i),sh.subVectors(e,i);const d=gi.dot(gi),h=gi.dot(Ji),m=gi.dot(sh),p=Ji.dot(Ji),_=Ji.dot(sh),x=d*p-h*h;if(x===0)return u.set(0,0,0),null;const y=1/x,M=(p*m-h*_)*y,A=(d*_-h*m)*y;return u.set(1-M-A,A,M)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,$i)===null?!1:$i.x>=0&&$i.y>=0&&$i.x+$i.y<=1}static getInterpolation(e,i,s,l,u,d,h,m){return this.getBarycoord(e,i,s,l,$i)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,$i.x),m.addScaledVector(d,$i.y),m.addScaledVector(h,$i.z),m)}static isFrontFacing(e,i,s,l){return gi.subVectors(s,i),Ji.subVectors(e,i),gi.cross(Ji).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return gi.subVectors(this.c,this.b),Ji.subVectors(this.a,this.b),gi.cross(Ji).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ri.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Ri.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,u){return Ri.getInterpolation(e,this.a,this.b,this.c,i,s,l,u)}containsPoint(e){return Ri.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ri.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,u=this.c;let d,h;hr.subVectors(l,s),dr.subVectors(u,s),rh.subVectors(e,s);const m=hr.dot(rh),p=dr.dot(rh);if(m<=0&&p<=0)return i.copy(s);oh.subVectors(e,l);const _=hr.dot(oh),x=dr.dot(oh);if(_>=0&&x<=_)return i.copy(l);const y=m*x-_*p;if(y<=0&&m>=0&&_<=0)return d=m/(m-_),i.copy(s).addScaledVector(hr,d);lh.subVectors(e,u);const M=hr.dot(lh),A=dr.dot(lh);if(A>=0&&M<=A)return i.copy(u);const C=M*p-m*A;if(C<=0&&p>=0&&A<=0)return h=p/(p-A),i.copy(s).addScaledVector(dr,h);const S=_*A-M*x;if(S<=0&&x-_>=0&&M-A>=0)return b_.subVectors(u,l),h=(x-_)/(x-_+(M-A)),i.copy(l).addScaledVector(b_,h);const v=1/(S+C+y);return d=C*v,h=y*v,i.copy(s).addScaledVector(hr,d).addScaledVector(dr,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const C0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Oa={h:0,s:0,l:0},tc={h:0,s:0,l:0};function ch(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Se{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=bi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Oe.toWorkingColorSpace(this,i),this}setRGB(e,i,s,l=Oe.workingColorSpace){return this.r=e,this.g=i,this.b=s,Oe.toWorkingColorSpace(this,l),this}setHSL(e,i,s,l=Oe.workingColorSpace){if(e=uS(e,1),i=Dn(i,0,1),s=Dn(s,0,1),i===0)this.r=this.g=this.b=s;else{const u=s<=.5?s*(1+i):s+i-s*i,d=2*s-u;this.r=ch(d,u,e+1/3),this.g=ch(d,u,e),this.b=ch(d,u,e-1/3)}return Oe.toWorkingColorSpace(this,l),this}setStyle(e,i=bi){function s(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],d=u.length;if(d===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=bi){const s=C0[e.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Tr(e.r),this.g=Tr(e.g),this.b=Tr(e.b),this}copyLinearToSRGB(e){return this.r=Kf(e.r),this.g=Kf(e.g),this.b=Kf(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=bi){return Oe.fromWorkingColorSpace(Mn.copy(this),e),Math.round(Dn(Mn.r*255,0,255))*65536+Math.round(Dn(Mn.g*255,0,255))*256+Math.round(Dn(Mn.b*255,0,255))}getHexString(e=bi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Oe.workingColorSpace){Oe.fromWorkingColorSpace(Mn.copy(this),i);const s=Mn.r,l=Mn.g,u=Mn.b,d=Math.max(s,l,u),h=Math.min(s,l,u);let m,p;const _=(h+d)/2;if(h===d)m=0,p=0;else{const x=d-h;switch(p=_<=.5?x/(d+h):x/(2-d-h),d){case s:m=(l-u)/x+(l<u?6:0);break;case l:m=(u-s)/x+2;break;case u:m=(s-l)/x+4;break}m/=6}return e.h=m,e.s=p,e.l=_,e}getRGB(e,i=Oe.workingColorSpace){return Oe.fromWorkingColorSpace(Mn.copy(this),i),e.r=Mn.r,e.g=Mn.g,e.b=Mn.b,e}getStyle(e=bi){Oe.fromWorkingColorSpace(Mn.copy(this),e);const i=Mn.r,s=Mn.g,l=Mn.b;return e!==bi?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(Oa),this.setHSL(Oa.h+e,Oa.s+i,Oa.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(Oa),e.getHSL(tc);const s=jf(Oa.h,tc.h,i),l=jf(Oa.s,tc.s,i),u=jf(Oa.l,tc.l,i);return this.setHSL(s,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*s+u[6]*l,this.g=u[1]*i+u[4]*s+u[7]*l,this.b=u[2]*i+u[5]*s+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Mn=new Se;Se.NAMES=C0;let RS=0;class Oo extends Ms{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:RS++}),this.uuid=Lo(),this.name="",this.type="Material",this.blending=Mr,this.side=Ga,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Eh,this.blendDst=Th,this.blendEquation=gs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Se(0,0,0),this.blendAlpha=0,this.depthFunc=vc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=f_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ar,this.stencilZFail=ar,this.stencilZPass=ar,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Mr&&(s.blending=this.blending),this.side!==Ga&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Eh&&(s.blendSrc=this.blendSrc),this.blendDst!==Th&&(s.blendDst=this.blendDst),this.blendEquation!==gs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==vc&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==f_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ar&&(s.stencilFail=this.stencilFail),this.stencilZFail!==ar&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==ar&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(u){const d=[];for(const h in u){const m=u[h];delete m.metadata,d.push(m)}return d}if(i){const u=l(e.textures),d=l(e.images);u.length>0&&(s.textures=u),d.length>0&&(s.images=d)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let u=0;u!==l;++u)s[u]=i[u].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class w0 extends Oo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Di,this.combine=h0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const an=new Z,ec=new te;class wi{constructor(e,i,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=h_,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ia,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return dS("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)ec.fromBufferAttribute(this,i),ec.applyMatrix3(e),this.setXY(i,ec.x,ec.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)an.fromBufferAttribute(this,i),an.applyMatrix3(e),this.setXYZ(i,an.x,an.y,an.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)an.fromBufferAttribute(this,i),an.applyMatrix4(e),this.setXYZ(i,an.x,an.y,an.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)an.fromBufferAttribute(this,i),an.applyNormalMatrix(e),this.setXYZ(i,an.x,an.y,an.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)an.fromBufferAttribute(this,i),an.transformDirection(e),this.setXYZ(i,an.x,an.y,an.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=Eo(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=Bn(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Eo(i,this.array)),i}setX(e,i){return this.normalized&&(i=Bn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Eo(i,this.array)),i}setY(e,i){return this.normalized&&(i=Bn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Eo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Bn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Eo(i,this.array)),i}setW(e,i){return this.normalized&&(i=Bn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=Bn(i,this.array),s=Bn(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=Bn(i,this.array),s=Bn(s,this.array),l=Bn(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,u){return e*=this.itemSize,this.normalized&&(i=Bn(i,this.array),s=Bn(s,this.array),l=Bn(l,this.array),u=Bn(u,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==h_&&(e.usage=this.usage),e}}class D0 extends wi{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class U0 extends wi{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class Qn extends wi{constructor(e,i,s){super(new Float32Array(e),i,s)}}let CS=0;const li=new je,uh=new En,pr=new Z,jn=new No,Ro=new No,hn=new Z;class ia extends Ms{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:CS++}),this.uuid=Lo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(E0(e)?U0:D0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const u=new fe().getNormalMatrix(e);s.applyNormalMatrix(u),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return li.makeRotationFromQuaternion(e),this.applyMatrix4(li),this}rotateX(e){return li.makeRotationX(e),this.applyMatrix4(li),this}rotateY(e){return li.makeRotationY(e),this.applyMatrix4(li),this}rotateZ(e){return li.makeRotationZ(e),this.applyMatrix4(li),this}translate(e,i,s){return li.makeTranslation(e,i,s),this.applyMatrix4(li),this}scale(e,i,s){return li.makeScale(e,i,s),this.applyMatrix4(li),this}lookAt(e){return uh.lookAt(e),uh.updateMatrix(),this.applyMatrix4(uh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(pr).negate(),this.translate(pr.x,pr.y,pr.z),this}setFromPoints(e){const i=[];for(let s=0,l=e.length;s<l;s++){const u=e[s];i.push(u.x,u.y,u.z||0)}return this.setAttribute("position",new Qn(i,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new No);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const u=i[s];jn.setFromBufferAttribute(u),this.morphTargetsRelative?(hn.addVectors(this.boundingBox.min,jn.min),this.boundingBox.expandByPoint(hn),hn.addVectors(this.boundingBox.max,jn.max),this.boundingBox.expandByPoint(hn)):(this.boundingBox.expandByPoint(jn.min),this.boundingBox.expandByPoint(jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zh);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(e){const s=this.boundingSphere.center;if(jn.setFromBufferAttribute(e),i)for(let u=0,d=i.length;u<d;u++){const h=i[u];Ro.setFromBufferAttribute(h),this.morphTargetsRelative?(hn.addVectors(jn.min,Ro.min),jn.expandByPoint(hn),hn.addVectors(jn.max,Ro.max),jn.expandByPoint(hn)):(jn.expandByPoint(Ro.min),jn.expandByPoint(Ro.max))}jn.getCenter(s);let l=0;for(let u=0,d=e.count;u<d;u++)hn.fromBufferAttribute(e,u),l=Math.max(l,s.distanceToSquared(hn));if(i)for(let u=0,d=i.length;u<d;u++){const h=i[u],m=this.morphTargetsRelative;for(let p=0,_=h.count;p<_;p++)hn.fromBufferAttribute(h,p),m&&(pr.fromBufferAttribute(e,p),hn.add(pr)),l=Math.max(l,s.distanceToSquared(hn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wi(new Float32Array(4*s.count),4));const d=this.getAttribute("tangent"),h=[],m=[];for(let W=0;W<s.count;W++)h[W]=new Z,m[W]=new Z;const p=new Z,_=new Z,x=new Z,y=new te,M=new te,A=new te,C=new Z,S=new Z;function v(W,w,T){p.fromBufferAttribute(s,W),_.fromBufferAttribute(s,w),x.fromBufferAttribute(s,T),y.fromBufferAttribute(u,W),M.fromBufferAttribute(u,w),A.fromBufferAttribute(u,T),_.sub(p),x.sub(p),M.sub(y),A.sub(y);const k=1/(M.x*A.y-A.x*M.y);isFinite(k)&&(C.copy(_).multiplyScalar(A.y).addScaledVector(x,-M.y).multiplyScalar(k),S.copy(x).multiplyScalar(M.x).addScaledVector(_,-A.x).multiplyScalar(k),h[W].add(C),h[w].add(C),h[T].add(C),m[W].add(S),m[w].add(S),m[T].add(S))}let z=this.groups;z.length===0&&(z=[{start:0,count:e.count}]);for(let W=0,w=z.length;W<w;++W){const T=z[W],k=T.start,J=T.count;for(let H=k,ot=k+J;H<ot;H+=3)v(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const U=new Z,L=new Z,Y=new Z,F=new Z;function N(W){Y.fromBufferAttribute(l,W),F.copy(Y);const w=h[W];U.copy(w),U.sub(Y.multiplyScalar(Y.dot(w))).normalize(),L.crossVectors(F,w);const k=L.dot(m[W])<0?-1:1;d.setXYZW(W,U.x,U.y,U.z,k)}for(let W=0,w=z.length;W<w;++W){const T=z[W],k=T.start,J=T.count;for(let H=k,ot=k+J;H<ot;H+=3)N(e.getX(H+0)),N(e.getX(H+1)),N(e.getX(H+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new wi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let y=0,M=s.count;y<M;y++)s.setXYZ(y,0,0,0);const l=new Z,u=new Z,d=new Z,h=new Z,m=new Z,p=new Z,_=new Z,x=new Z;if(e)for(let y=0,M=e.count;y<M;y+=3){const A=e.getX(y+0),C=e.getX(y+1),S=e.getX(y+2);l.fromBufferAttribute(i,A),u.fromBufferAttribute(i,C),d.fromBufferAttribute(i,S),_.subVectors(d,u),x.subVectors(l,u),_.cross(x),h.fromBufferAttribute(s,A),m.fromBufferAttribute(s,C),p.fromBufferAttribute(s,S),h.add(_),m.add(_),p.add(_),s.setXYZ(A,h.x,h.y,h.z),s.setXYZ(C,m.x,m.y,m.z),s.setXYZ(S,p.x,p.y,p.z)}else for(let y=0,M=i.count;y<M;y+=3)l.fromBufferAttribute(i,y+0),u.fromBufferAttribute(i,y+1),d.fromBufferAttribute(i,y+2),_.subVectors(d,u),x.subVectors(l,u),_.cross(x),s.setXYZ(y+0,_.x,_.y,_.z),s.setXYZ(y+1,_.x,_.y,_.z),s.setXYZ(y+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)hn.fromBufferAttribute(e,i),hn.normalize(),e.setXYZ(i,hn.x,hn.y,hn.z)}toNonIndexed(){function e(h,m){const p=h.array,_=h.itemSize,x=h.normalized,y=new p.constructor(m.length*_);let M=0,A=0;for(let C=0,S=m.length;C<S;C++){h.isInterleavedBufferAttribute?M=m[C]*h.data.stride+h.offset:M=m[C]*_;for(let v=0;v<_;v++)y[A++]=p[M++]}return new wi(y,_,x)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new ia,s=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=e(m,s);i.setAttribute(h,p)}const u=this.morphAttributes;for(const h in u){const m=[],p=u[h];for(let _=0,x=p.length;_<x;_++){const y=p[_],M=e(y,s);m.push(M)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,m=d.length;h<m;h++){const p=d[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let x=0,y=p.length;x<y;x++){const M=p[x];_.push(M.toJSON(e.data))}_.length>0&&(l[m]=_,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere={center:h.center.toArray(),radius:h.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone(i));const l=e.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(i))}const u=e.morphAttributes;for(const p in u){const _=[],x=u[p];for(let y=0,M=x.length;y<M;y++)_.push(x[y].clone(i));this.morphAttributes[p]=_}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let p=0,_=d.length;p<_;p++){const x=d[p];this.addGroup(x.start,x.count,x.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const A_=new je,fs=new A0,nc=new zh,R_=new Z,mr=new Z,gr=new Z,_r=new Z,fh=new Z,ic=new Z,ac=new te,sc=new te,rc=new te,C_=new Z,w_=new Z,D_=new Z,oc=new Z,lc=new Z;class Kn extends En{constructor(e=new ia,i=new w0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,u=s.morphAttributes.position,d=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(u&&h){ic.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const _=h[m],x=u[m];_!==0&&(fh.fromBufferAttribute(x,e),d?ic.addScaledVector(fh,_):ic.addScaledVector(fh.sub(i),_))}i.add(ic)}return i}raycast(e,i){const s=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),nc.copy(s.boundingSphere),nc.applyMatrix4(u),fs.copy(e.ray).recast(e.near),!(nc.containsPoint(fs.origin)===!1&&(fs.intersectSphere(nc,R_)===null||fs.origin.distanceToSquared(R_)>(e.far-e.near)**2))&&(A_.copy(u).invert(),fs.copy(e.ray).applyMatrix4(A_),!(s.boundingBox!==null&&fs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,fs)))}_computeIntersections(e,i,s){let l;const u=this.geometry,d=this.material,h=u.index,m=u.attributes.position,p=u.attributes.uv,_=u.attributes.uv1,x=u.attributes.normal,y=u.groups,M=u.drawRange;if(h!==null)if(Array.isArray(d))for(let A=0,C=y.length;A<C;A++){const S=y[A],v=d[S.materialIndex],z=Math.max(S.start,M.start),U=Math.min(h.count,Math.min(S.start+S.count,M.start+M.count));for(let L=z,Y=U;L<Y;L+=3){const F=h.getX(L),N=h.getX(L+1),W=h.getX(L+2);l=cc(this,v,e,s,p,_,x,F,N,W),l&&(l.faceIndex=Math.floor(L/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const A=Math.max(0,M.start),C=Math.min(h.count,M.start+M.count);for(let S=A,v=C;S<v;S+=3){const z=h.getX(S),U=h.getX(S+1),L=h.getX(S+2);l=cc(this,d,e,s,p,_,x,z,U,L),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let A=0,C=y.length;A<C;A++){const S=y[A],v=d[S.materialIndex],z=Math.max(S.start,M.start),U=Math.min(m.count,Math.min(S.start+S.count,M.start+M.count));for(let L=z,Y=U;L<Y;L+=3){const F=L,N=L+1,W=L+2;l=cc(this,v,e,s,p,_,x,F,N,W),l&&(l.faceIndex=Math.floor(L/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const A=Math.max(0,M.start),C=Math.min(m.count,M.start+M.count);for(let S=A,v=C;S<v;S+=3){const z=S,U=S+1,L=S+2;l=cc(this,d,e,s,p,_,x,z,U,L),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function wS(o,e,i,s,l,u,d,h){let m;if(e.side===In?m=s.intersectTriangle(d,u,l,!0,h):m=s.intersectTriangle(l,u,d,e.side===Ga,h),m===null)return null;lc.copy(h),lc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(lc);return p<i.near||p>i.far?null:{distance:p,point:lc.clone(),object:o}}function cc(o,e,i,s,l,u,d,h,m,p){o.getVertexPosition(h,mr),o.getVertexPosition(m,gr),o.getVertexPosition(p,_r);const _=wS(o,e,i,s,mr,gr,_r,oc);if(_){l&&(ac.fromBufferAttribute(l,h),sc.fromBufferAttribute(l,m),rc.fromBufferAttribute(l,p),_.uv=Ri.getInterpolation(oc,mr,gr,_r,ac,sc,rc,new te)),u&&(ac.fromBufferAttribute(u,h),sc.fromBufferAttribute(u,m),rc.fromBufferAttribute(u,p),_.uv1=Ri.getInterpolation(oc,mr,gr,_r,ac,sc,rc,new te)),d&&(C_.fromBufferAttribute(d,h),w_.fromBufferAttribute(d,m),D_.fromBufferAttribute(d,p),_.normal=Ri.getInterpolation(oc,mr,gr,_r,C_,w_,D_,new Z),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const x={a:h,b:m,c:p,normal:new Z,materialIndex:0};Ri.getNormal(mr,gr,_r,x.normal),_.face=x}return _}class wr extends ia{constructor(e=1,i=1,s=1,l=1,u=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:u,depthSegments:d};const h=this;l=Math.floor(l),u=Math.floor(u),d=Math.floor(d);const m=[],p=[],_=[],x=[];let y=0,M=0;A("z","y","x",-1,-1,s,i,e,d,u,0),A("z","y","x",1,-1,s,i,-e,d,u,1),A("x","z","y",1,1,e,s,i,l,d,2),A("x","z","y",1,-1,e,s,-i,l,d,3),A("x","y","z",1,-1,e,i,s,l,u,4),A("x","y","z",-1,-1,e,i,-s,l,u,5),this.setIndex(m),this.setAttribute("position",new Qn(p,3)),this.setAttribute("normal",new Qn(_,3)),this.setAttribute("uv",new Qn(x,2));function A(C,S,v,z,U,L,Y,F,N,W,w){const T=L/N,k=Y/W,J=L/2,H=Y/2,ot=F/2,ct=N+1,I=W+1;let q=0,X=0;const mt=new Z;for(let lt=0;lt<I;lt++){const O=lt*k-H;for(let it=0;it<ct;it++){const St=it*T-J;mt[C]=St*z,mt[S]=O*U,mt[v]=ot,p.push(mt.x,mt.y,mt.z),mt[C]=0,mt[S]=0,mt[v]=F>0?1:-1,_.push(mt.x,mt.y,mt.z),x.push(it/N),x.push(1-lt/W),q+=1}}for(let lt=0;lt<W;lt++)for(let O=0;O<N;O++){const it=y+O+ct*lt,St=y+O+ct*(lt+1),V=y+(O+1)+ct*(lt+1),dt=y+(O+1)+ct*lt;m.push(it,St,dt),m.push(St,V,dt),X+=6}h.addGroup(M,X,w),M+=X,y+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Cr(o){const e={};for(const i in o){e[i]={};for(const s in o[i]){const l=o[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone():Array.isArray(l)?e[i][s]=l.slice():e[i][s]=l}}return e}function wn(o){const e={};for(let i=0;i<o.length;i++){const s=Cr(o[i]);for(const l in s)e[l]=s[l]}return e}function DS(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function L0(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Oe.workingColorSpace}const US={clone:Cr,merge:wn};var LS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,NS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xa extends Oo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=LS,this.fragmentShader=NS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Cr(e.uniforms),this.uniformsGroups=DS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class N0 extends En{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new je,this.projectionMatrix=new je,this.projectionMatrixInverse=new je,this.coordinateSystem=na}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const za=new Z,U_=new te,L_=new te;class Zn extends N0{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=wh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(gc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return wh*2*Math.atan(Math.tan(gc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){za.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(za.x,za.y).multiplyScalar(-e/za.z),za.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(za.x,za.y).multiplyScalar(-e/za.z)}getViewSize(e,i){return this.getViewBounds(e,U_,L_),i.subVectors(L_,U_)}setViewOffset(e,i,s,l,u,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(gc*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,u=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,p=d.fullHeight;u+=d.offsetX*l/m,i-=d.offsetY*s/p,l*=d.width/m,s*=d.height/p}const h=this.filmOffset;h!==0&&(u+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-s,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const vr=-90,xr=1;class OS extends En{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Zn(vr,xr,e,i);l.layers=this.layers,this.add(l);const u=new Zn(vr,xr,e,i);u.layers=this.layers,this.add(u);const d=new Zn(vr,xr,e,i);d.layers=this.layers,this.add(d);const h=new Zn(vr,xr,e,i);h.layers=this.layers,this.add(h);const m=new Zn(vr,xr,e,i);m.layers=this.layers,this.add(m);const p=new Zn(vr,xr,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,u,d,h,m]=i;for(const p of i)this.remove(p);if(e===na)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Mc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,d,h,m,p,_]=this.children,x=e.getRenderTarget(),y=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),A=e.xr.enabled;e.xr.enabled=!1;const C=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,l),e.render(i,u),e.setRenderTarget(s,1,l),e.render(i,d),e.setRenderTarget(s,2,l),e.render(i,h),e.setRenderTarget(s,3,l),e.render(i,m),e.setRenderTarget(s,4,l),e.render(i,p),s.texture.generateMipmaps=C,e.setRenderTarget(s,5,l),e.render(i,_),e.setRenderTarget(x,y,M),e.xr.enabled=A,s.texture.needsPMREMUpdate=!0}}class O0 extends Fn{constructor(e,i,s,l,u,d,h,m,p,_){e=e!==void 0?e:[],i=i!==void 0?i:br,super(e,i,s,l,u,d,h,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class zS extends ys{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new O0(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:_i}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new wr(5,5,5),u=new Xa({name:"CubemapFromEquirect",uniforms:Cr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:In,blending:Fa});u.uniforms.tEquirect.value=i;const d=new Kn(l,u),h=i.minFilter;return i.minFilter===xs&&(i.minFilter=_i),new OS(1,10,this).update(e,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(e,i,s,l){const u=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,s,l);e.setRenderTarget(u)}}const hh=new Z,PS=new Z,BS=new fe;class Pa{constructor(e=new Z(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=hh.subVectors(s,i).cross(PS.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const s=e.delta(hh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(e.start).addScaledVector(s,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||BS.getNormalMatrix(e),l=this.coplanarPoint(hh).applyMatrix4(e),u=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const hs=new zh,uc=new Z;class Ph{constructor(e=new Pa,i=new Pa,s=new Pa,l=new Pa,u=new Pa,d=new Pa){this.planes=[e,i,s,l,u,d]}set(e,i,s,l,u,d){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(s),h[3].copy(l),h[4].copy(u),h[5].copy(d),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=na){const s=this.planes,l=e.elements,u=l[0],d=l[1],h=l[2],m=l[3],p=l[4],_=l[5],x=l[6],y=l[7],M=l[8],A=l[9],C=l[10],S=l[11],v=l[12],z=l[13],U=l[14],L=l[15];if(s[0].setComponents(m-u,y-p,S-M,L-v).normalize(),s[1].setComponents(m+u,y+p,S+M,L+v).normalize(),s[2].setComponents(m+d,y+_,S+A,L+z).normalize(),s[3].setComponents(m-d,y-_,S-A,L-z).normalize(),s[4].setComponents(m-h,y-x,S-C,L-U).normalize(),i===na)s[5].setComponents(m+h,y+x,S+C,L+U).normalize();else if(i===Mc)s[5].setComponents(h,x,C,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),hs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),hs.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(hs)}intersectsSprite(e){return hs.center.set(0,0,0),hs.radius=.7071067811865476,hs.applyMatrix4(e.matrixWorld),this.intersectsSphere(hs)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(uc.x=l.normal.x>0?e.max.x:e.min.x,uc.y=l.normal.y>0?e.max.y:e.min.y,uc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(uc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function z0(){let o=null,e=!1,i=null,s=null;function l(u,d){i(u,d),s=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(s=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function IS(o){const e=new WeakMap;function i(h,m){const p=h.array,_=h.usage,x=p.byteLength,y=o.createBuffer();o.bindBuffer(m,y),o.bufferData(m,p,_),h.onUploadCallback();let M;if(p instanceof Float32Array)M=o.FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=o.SHORT;else if(p instanceof Uint32Array)M=o.UNSIGNED_INT;else if(p instanceof Int32Array)M=o.INT;else if(p instanceof Int8Array)M=o.BYTE;else if(p instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:y,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:x}}function s(h,m,p){const _=m.array,x=m._updateRange,y=m.updateRanges;if(o.bindBuffer(p,h),x.count===-1&&y.length===0&&o.bufferSubData(p,0,_),y.length!==0){for(let M=0,A=y.length;M<A;M++){const C=y[M];o.bufferSubData(p,C.start*_.BYTES_PER_ELEMENT,_,C.start,C.count)}m.clearUpdateRanges()}x.count!==-1&&(o.bufferSubData(p,x.offset*_.BYTES_PER_ELEMENT,_,x.offset,x.count),x.count=-1),m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function u(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=e.get(h);m&&(o.deleteBuffer(m.buffer),e.delete(h))}function d(h,m){if(h.isGLBufferAttribute){const _=e.get(h);(!_||_.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}h.isInterleavedBufferAttribute&&(h=h.data);const p=e.get(h);if(p===void 0)e.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,h,m),p.version=h.version}}return{get:l,remove:u,update:d}}class zo extends ia{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const u=e/2,d=i/2,h=Math.floor(s),m=Math.floor(l),p=h+1,_=m+1,x=e/h,y=i/m,M=[],A=[],C=[],S=[];for(let v=0;v<_;v++){const z=v*y-d;for(let U=0;U<p;U++){const L=U*x-u;A.push(L,-z,0),C.push(0,0,1),S.push(U/h),S.push(1-v/m)}}for(let v=0;v<m;v++)for(let z=0;z<h;z++){const U=z+p*v,L=z+p*(v+1),Y=z+1+p*(v+1),F=z+1+p*v;M.push(U,L,F),M.push(L,Y,F)}this.setIndex(M),this.setAttribute("position",new Qn(A,3)),this.setAttribute("normal",new Qn(C,3)),this.setAttribute("uv",new Qn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zo(e.width,e.height,e.widthSegments,e.heightSegments)}}var FS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,HS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,GS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,VS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,XS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,kS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,WS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,qS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,YS=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,jS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,ZS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,KS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,QS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,JS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,$S=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,tM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,eM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,iM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,aM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,sM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,rM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,oM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,lM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,uM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,fM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,dM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mM="gl_FragColor = linearToOutputTexel( gl_FragColor );",gM=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,_M=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,vM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,xM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,yM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,SM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,MM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,EM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,TM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,AM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,RM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,CM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,DM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,UM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,LM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,NM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,OM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,PM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,BM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,IM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,FM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,HM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,GM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,VM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,XM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,WM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,YM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,jM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ZM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,KM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,QM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,JM=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$M=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,tE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,eE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,nE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,iE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,aE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,oE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,lE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,cE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,uE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,pE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_E=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,SE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ME=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,EE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,TE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,AE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,RE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,CE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,DE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,UE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,LE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,NE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,OE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,PE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,BE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const IE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,FE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,GE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,VE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,XE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,WE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,qE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,YE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,jE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ZE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,QE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,JE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,$E=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,eT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,iT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,sT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,rT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,oT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,cT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,dT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,pT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,gT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_T=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ue={alphahash_fragment:FS,alphahash_pars_fragment:HS,alphamap_fragment:GS,alphamap_pars_fragment:VS,alphatest_fragment:XS,alphatest_pars_fragment:kS,aomap_fragment:WS,aomap_pars_fragment:qS,batching_pars_vertex:YS,batching_vertex:jS,begin_vertex:ZS,beginnormal_vertex:KS,bsdfs:QS,iridescence_fragment:JS,bumpmap_pars_fragment:$S,clipping_planes_fragment:tM,clipping_planes_pars_fragment:eM,clipping_planes_pars_vertex:nM,clipping_planes_vertex:iM,color_fragment:aM,color_pars_fragment:sM,color_pars_vertex:rM,color_vertex:oM,common:lM,cube_uv_reflection_fragment:cM,defaultnormal_vertex:uM,displacementmap_pars_vertex:fM,displacementmap_vertex:hM,emissivemap_fragment:dM,emissivemap_pars_fragment:pM,colorspace_fragment:mM,colorspace_pars_fragment:gM,envmap_fragment:_M,envmap_common_pars_fragment:vM,envmap_pars_fragment:xM,envmap_pars_vertex:yM,envmap_physical_pars_fragment:UM,envmap_vertex:SM,fog_vertex:MM,fog_pars_vertex:EM,fog_fragment:TM,fog_pars_fragment:bM,gradientmap_pars_fragment:AM,lightmap_pars_fragment:RM,lights_lambert_fragment:CM,lights_lambert_pars_fragment:wM,lights_pars_begin:DM,lights_toon_fragment:LM,lights_toon_pars_fragment:NM,lights_phong_fragment:OM,lights_phong_pars_fragment:zM,lights_physical_fragment:PM,lights_physical_pars_fragment:BM,lights_fragment_begin:IM,lights_fragment_maps:FM,lights_fragment_end:HM,logdepthbuf_fragment:GM,logdepthbuf_pars_fragment:VM,logdepthbuf_pars_vertex:XM,logdepthbuf_vertex:kM,map_fragment:WM,map_pars_fragment:qM,map_particle_fragment:YM,map_particle_pars_fragment:jM,metalnessmap_fragment:ZM,metalnessmap_pars_fragment:KM,morphinstance_vertex:QM,morphcolor_vertex:JM,morphnormal_vertex:$M,morphtarget_pars_vertex:tE,morphtarget_vertex:eE,normal_fragment_begin:nE,normal_fragment_maps:iE,normal_pars_fragment:aE,normal_pars_vertex:sE,normal_vertex:rE,normalmap_pars_fragment:oE,clearcoat_normal_fragment_begin:lE,clearcoat_normal_fragment_maps:cE,clearcoat_pars_fragment:uE,iridescence_pars_fragment:fE,opaque_fragment:hE,packing:dE,premultiplied_alpha_fragment:pE,project_vertex:mE,dithering_fragment:gE,dithering_pars_fragment:_E,roughnessmap_fragment:vE,roughnessmap_pars_fragment:xE,shadowmap_pars_fragment:yE,shadowmap_pars_vertex:SE,shadowmap_vertex:ME,shadowmask_pars_fragment:EE,skinbase_vertex:TE,skinning_pars_vertex:bE,skinning_vertex:AE,skinnormal_vertex:RE,specularmap_fragment:CE,specularmap_pars_fragment:wE,tonemapping_fragment:DE,tonemapping_pars_fragment:UE,transmission_fragment:LE,transmission_pars_fragment:NE,uv_pars_fragment:OE,uv_pars_vertex:zE,uv_vertex:PE,worldpos_vertex:BE,background_vert:IE,background_frag:FE,backgroundCube_vert:HE,backgroundCube_frag:GE,cube_vert:VE,cube_frag:XE,depth_vert:kE,depth_frag:WE,distanceRGBA_vert:qE,distanceRGBA_frag:YE,equirect_vert:jE,equirect_frag:ZE,linedashed_vert:KE,linedashed_frag:QE,meshbasic_vert:JE,meshbasic_frag:$E,meshlambert_vert:tT,meshlambert_frag:eT,meshmatcap_vert:nT,meshmatcap_frag:iT,meshnormal_vert:aT,meshnormal_frag:sT,meshphong_vert:rT,meshphong_frag:oT,meshphysical_vert:lT,meshphysical_frag:cT,meshtoon_vert:uT,meshtoon_frag:fT,points_vert:hT,points_frag:dT,shadow_vert:pT,shadow_frag:mT,sprite_vert:gT,sprite_frag:_T},Dt={common:{diffuse:{value:new Se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new fe}},envmap:{envMap:{value:null},envMapRotation:{value:new fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new fe},normalScale:{value:new te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0},uvTransform:{value:new fe}},sprite:{diffuse:{value:new Se(16777215)},opacity:{value:1},center:{value:new te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}}},Ai={basic:{uniforms:wn([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.fog]),vertexShader:ue.meshbasic_vert,fragmentShader:ue.meshbasic_frag},lambert:{uniforms:wn([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new Se(0)}}]),vertexShader:ue.meshlambert_vert,fragmentShader:ue.meshlambert_frag},phong:{uniforms:wn([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new Se(0)},specular:{value:new Se(1118481)},shininess:{value:30}}]),vertexShader:ue.meshphong_vert,fragmentShader:ue.meshphong_frag},standard:{uniforms:wn([Dt.common,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.roughnessmap,Dt.metalnessmap,Dt.fog,Dt.lights,{emissive:{value:new Se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag},toon:{uniforms:wn([Dt.common,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.gradientmap,Dt.fog,Dt.lights,{emissive:{value:new Se(0)}}]),vertexShader:ue.meshtoon_vert,fragmentShader:ue.meshtoon_frag},matcap:{uniforms:wn([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,{matcap:{value:null}}]),vertexShader:ue.meshmatcap_vert,fragmentShader:ue.meshmatcap_frag},points:{uniforms:wn([Dt.points,Dt.fog]),vertexShader:ue.points_vert,fragmentShader:ue.points_frag},dashed:{uniforms:wn([Dt.common,Dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ue.linedashed_vert,fragmentShader:ue.linedashed_frag},depth:{uniforms:wn([Dt.common,Dt.displacementmap]),vertexShader:ue.depth_vert,fragmentShader:ue.depth_frag},normal:{uniforms:wn([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,{opacity:{value:1}}]),vertexShader:ue.meshnormal_vert,fragmentShader:ue.meshnormal_frag},sprite:{uniforms:wn([Dt.sprite,Dt.fog]),vertexShader:ue.sprite_vert,fragmentShader:ue.sprite_frag},background:{uniforms:{uvTransform:{value:new fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ue.background_vert,fragmentShader:ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new fe}},vertexShader:ue.backgroundCube_vert,fragmentShader:ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ue.cube_vert,fragmentShader:ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ue.equirect_vert,fragmentShader:ue.equirect_frag},distanceRGBA:{uniforms:wn([Dt.common,Dt.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ue.distanceRGBA_vert,fragmentShader:ue.distanceRGBA_frag},shadow:{uniforms:wn([Dt.lights,Dt.fog,{color:{value:new Se(0)},opacity:{value:1}}]),vertexShader:ue.shadow_vert,fragmentShader:ue.shadow_frag}};Ai.physical={uniforms:wn([Ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new fe},clearcoatNormalScale:{value:new te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new fe},sheen:{value:0},sheenColor:{value:new Se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new fe},transmissionSamplerSize:{value:new te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new fe},attenuationDistance:{value:0},attenuationColor:{value:new Se(0)},specularColor:{value:new Se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new fe},anisotropyVector:{value:new te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new fe}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag};const fc={r:0,b:0,g:0},ds=new Di,vT=new je;function xT(o,e,i,s,l,u,d){const h=new Se(0);let m=u===!0?0:1,p,_,x=null,y=0,M=null;function A(z){let U=z.isScene===!0?z.background:null;return U&&U.isTexture&&(U=(z.backgroundBlurriness>0?i:e).get(U)),U}function C(z){let U=!1;const L=A(z);L===null?v(h,m):L&&L.isColor&&(v(L,1),U=!0);const Y=o.xr.getEnvironmentBlendMode();Y==="additive"?s.buffers.color.setClear(0,0,0,1,d):Y==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,d),(o.autoClear||U)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil)}function S(z,U){const L=A(U);L&&(L.isCubeTexture||L.mapping===Tc)?(_===void 0&&(_=new Kn(new wr(1,1,1),new Xa({name:"BackgroundCubeMaterial",uniforms:Cr(Ai.backgroundCube.uniforms),vertexShader:Ai.backgroundCube.vertexShader,fragmentShader:Ai.backgroundCube.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(Y,F,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(_)),ds.copy(U.backgroundRotation),ds.x*=-1,ds.y*=-1,ds.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(ds.y*=-1,ds.z*=-1),_.material.uniforms.envMap.value=L,_.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(vT.makeRotationFromEuler(ds)),_.material.toneMapped=Oe.getTransfer(L.colorSpace)!==He,(x!==L||y!==L.version||M!==o.toneMapping)&&(_.material.needsUpdate=!0,x=L,y=L.version,M=o.toneMapping),_.layers.enableAll(),z.unshift(_,_.geometry,_.material,0,0,null)):L&&L.isTexture&&(p===void 0&&(p=new Kn(new zo(2,2),new Xa({name:"BackgroundMaterial",uniforms:Cr(Ai.background.uniforms),vertexShader:Ai.background.vertexShader,fragmentShader:Ai.background.fragmentShader,side:Ga,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=L,p.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,p.material.toneMapped=Oe.getTransfer(L.colorSpace)!==He,L.matrixAutoUpdate===!0&&L.updateMatrix(),p.material.uniforms.uvTransform.value.copy(L.matrix),(x!==L||y!==L.version||M!==o.toneMapping)&&(p.material.needsUpdate=!0,x=L,y=L.version,M=o.toneMapping),p.layers.enableAll(),z.unshift(p,p.geometry,p.material,0,0,null))}function v(z,U){z.getRGB(fc,L0(o)),s.buffers.color.setClear(fc.r,fc.g,fc.b,U,d)}return{getClearColor:function(){return h},setClearColor:function(z,U=1){h.set(z),m=U,v(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(z){m=z,v(h,m)},render:C,addToRenderList:S}}function yT(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=y(null);let u=l,d=!1;function h(T,k,J,H,ot){let ct=!1;const I=x(H,J,k);u!==I&&(u=I,p(u.object)),ct=M(T,H,J,ot),ct&&A(T,H,J,ot),ot!==null&&e.update(ot,o.ELEMENT_ARRAY_BUFFER),(ct||d)&&(d=!1,L(T,k,J,H),ot!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(ot).buffer))}function m(){return o.createVertexArray()}function p(T){return o.bindVertexArray(T)}function _(T){return o.deleteVertexArray(T)}function x(T,k,J){const H=J.wireframe===!0;let ot=s[T.id];ot===void 0&&(ot={},s[T.id]=ot);let ct=ot[k.id];ct===void 0&&(ct={},ot[k.id]=ct);let I=ct[H];return I===void 0&&(I=y(m()),ct[H]=I),I}function y(T){const k=[],J=[],H=[];for(let ot=0;ot<i;ot++)k[ot]=0,J[ot]=0,H[ot]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:J,attributeDivisors:H,object:T,attributes:{},index:null}}function M(T,k,J,H){const ot=u.attributes,ct=k.attributes;let I=0;const q=J.getAttributes();for(const X in q)if(q[X].location>=0){const lt=ot[X];let O=ct[X];if(O===void 0&&(X==="instanceMatrix"&&T.instanceMatrix&&(O=T.instanceMatrix),X==="instanceColor"&&T.instanceColor&&(O=T.instanceColor)),lt===void 0||lt.attribute!==O||O&&lt.data!==O.data)return!0;I++}return u.attributesNum!==I||u.index!==H}function A(T,k,J,H){const ot={},ct=k.attributes;let I=0;const q=J.getAttributes();for(const X in q)if(q[X].location>=0){let lt=ct[X];lt===void 0&&(X==="instanceMatrix"&&T.instanceMatrix&&(lt=T.instanceMatrix),X==="instanceColor"&&T.instanceColor&&(lt=T.instanceColor));const O={};O.attribute=lt,lt&&lt.data&&(O.data=lt.data),ot[X]=O,I++}u.attributes=ot,u.attributesNum=I,u.index=H}function C(){const T=u.newAttributes;for(let k=0,J=T.length;k<J;k++)T[k]=0}function S(T){v(T,0)}function v(T,k){const J=u.newAttributes,H=u.enabledAttributes,ot=u.attributeDivisors;J[T]=1,H[T]===0&&(o.enableVertexAttribArray(T),H[T]=1),ot[T]!==k&&(o.vertexAttribDivisor(T,k),ot[T]=k)}function z(){const T=u.newAttributes,k=u.enabledAttributes;for(let J=0,H=k.length;J<H;J++)k[J]!==T[J]&&(o.disableVertexAttribArray(J),k[J]=0)}function U(T,k,J,H,ot,ct,I){I===!0?o.vertexAttribIPointer(T,k,J,ot,ct):o.vertexAttribPointer(T,k,J,H,ot,ct)}function L(T,k,J,H){C();const ot=H.attributes,ct=J.getAttributes(),I=k.defaultAttributeValues;for(const q in ct){const X=ct[q];if(X.location>=0){let mt=ot[q];if(mt===void 0&&(q==="instanceMatrix"&&T.instanceMatrix&&(mt=T.instanceMatrix),q==="instanceColor"&&T.instanceColor&&(mt=T.instanceColor)),mt!==void 0){const lt=mt.normalized,O=mt.itemSize,it=e.get(mt);if(it===void 0)continue;const St=it.buffer,V=it.type,dt=it.bytesPerElement,Et=V===o.INT||V===o.UNSIGNED_INT||mt.gpuType===m0;if(mt.isInterleavedBufferAttribute){const gt=mt.data,Gt=gt.stride,Nt=mt.offset;if(gt.isInstancedInterleavedBuffer){for(let $=0;$<X.locationSize;$++)v(X.location+$,gt.meshPerAttribute);T.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let $=0;$<X.locationSize;$++)S(X.location+$);o.bindBuffer(o.ARRAY_BUFFER,St);for(let $=0;$<X.locationSize;$++)U(X.location+$,O/X.locationSize,V,lt,Gt*dt,(Nt+O/X.locationSize*$)*dt,Et)}else{if(mt.isInstancedBufferAttribute){for(let gt=0;gt<X.locationSize;gt++)v(X.location+gt,mt.meshPerAttribute);T.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let gt=0;gt<X.locationSize;gt++)S(X.location+gt);o.bindBuffer(o.ARRAY_BUFFER,St);for(let gt=0;gt<X.locationSize;gt++)U(X.location+gt,O/X.locationSize,V,lt,O*dt,O/X.locationSize*gt*dt,Et)}}else if(I!==void 0){const lt=I[q];if(lt!==void 0)switch(lt.length){case 2:o.vertexAttrib2fv(X.location,lt);break;case 3:o.vertexAttrib3fv(X.location,lt);break;case 4:o.vertexAttrib4fv(X.location,lt);break;default:o.vertexAttrib1fv(X.location,lt)}}}}z()}function Y(){W();for(const T in s){const k=s[T];for(const J in k){const H=k[J];for(const ot in H)_(H[ot].object),delete H[ot];delete k[J]}delete s[T]}}function F(T){if(s[T.id]===void 0)return;const k=s[T.id];for(const J in k){const H=k[J];for(const ot in H)_(H[ot].object),delete H[ot];delete k[J]}delete s[T.id]}function N(T){for(const k in s){const J=s[k];if(J[T.id]===void 0)continue;const H=J[T.id];for(const ot in H)_(H[ot].object),delete H[ot];delete J[T.id]}}function W(){w(),d=!0,u!==l&&(u=l,p(u.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:W,resetDefaultState:w,dispose:Y,releaseStatesOfGeometry:F,releaseStatesOfProgram:N,initAttributes:C,enableAttribute:S,disableUnusedAttributes:z}}function ST(o,e,i){let s;function l(p){s=p}function u(p,_){o.drawArrays(s,p,_),i.update(_,s,1)}function d(p,_,x){x!==0&&(o.drawArraysInstanced(s,p,_,x),i.update(_,s,x))}function h(p,_,x){if(x===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let M=0;M<x;M++)this.render(p[M],_[M]);else{y.multiDrawArraysWEBGL(s,p,0,_,0,x);let M=0;for(let A=0;A<x;A++)M+=_[A];i.update(M,s,1)}}function m(p,_,x,y){if(x===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let A=0;A<p.length;A++)d(p[A],_[A],y[A]);else{M.multiDrawArraysInstancedWEBGL(s,p,0,_,0,y,0,x);let A=0;for(let C=0;C<x;C++)A+=_[C];for(let C=0;C<y.length;C++)i.update(A,s,y[C])}}this.setMode=l,this.render=u,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function MT(o,e,i,s){let l;function u(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(F){return!(F!==Ci&&s.convert(F)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(F){const N=F===bc&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==Va&&s.convert(F)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Ia&&!N)}function m(F){if(F==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const _=m(p);_!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const x=i.logarithmicDepthBuffer===!0,y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),M=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_TEXTURE_SIZE),C=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),S=o.getParameter(o.MAX_VERTEX_ATTRIBS),v=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),z=o.getParameter(o.MAX_VARYING_VECTORS),U=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),L=M>0,Y=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:x,maxTextures:y,maxVertexTextures:M,maxTextureSize:A,maxCubemapSize:C,maxAttributes:S,maxVertexUniforms:v,maxVaryings:z,maxFragmentUniforms:U,vertexTextures:L,maxSamples:Y}}function ET(o){const e=this;let i=null,s=0,l=!1,u=!1;const d=new Pa,h=new fe,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(x,y){const M=x.length!==0||y||s!==0||l;return l=y,s=x.length,M},this.beginShadows=function(){u=!0,_(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(x,y){i=_(x,y,0)},this.setState=function(x,y,M){const A=x.clippingPlanes,C=x.clipIntersection,S=x.clipShadows,v=o.get(x);if(!l||A===null||A.length===0||u&&!S)u?_(null):p();else{const z=u?0:s,U=z*4;let L=v.clippingState||null;m.value=L,L=_(A,y,U,M);for(let Y=0;Y!==U;++Y)L[Y]=i[Y];v.clippingState=L,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=z}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function _(x,y,M,A){const C=x!==null?x.length:0;let S=null;if(C!==0){if(S=m.value,A!==!0||S===null){const v=M+C*4,z=y.matrixWorldInverse;h.getNormalMatrix(z),(S===null||S.length<v)&&(S=new Float32Array(v));for(let U=0,L=M;U!==C;++U,L+=4)d.copy(x[U]).applyMatrix4(z,h),d.normal.toArray(S,L),S[L+3]=d.constant}m.value=S,m.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,S}}function TT(o){let e=new WeakMap;function i(d,h){return h===bh?d.mapping=br:h===Ah&&(d.mapping=Ar),d}function s(d){if(d&&d.isTexture){const h=d.mapping;if(h===bh||h===Ah)if(e.has(d)){const m=e.get(d).texture;return i(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const p=new zS(m.height);return p.fromEquirectangularTexture(o,d),e.set(d,p),d.addEventListener("dispose",l),i(p.texture,d.mapping)}else return null}}return d}function l(d){const h=d.target;h.removeEventListener("dispose",l);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function u(){e=new WeakMap}return{get:s,dispose:u}}class P0 extends N0{constructor(e=-1,i=1,s=1,l=-1,u=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=u,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,u,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=s-e,d=s+e,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,d=u+p*this.view.width,h-=_*this.view.offsetY,m=h-_*this.view.height}this.projectionMatrix.makeOrthographic(u,d,h,m,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const Sr=4,N_=[.125,.215,.35,.446,.526,.582],_s=20,dh=new P0,O_=new Se;let ph=null,mh=0,gh=0,_h=!1;const ms=(1+Math.sqrt(5))/2,yr=1/ms,z_=[new Z(-ms,yr,0),new Z(ms,yr,0),new Z(-yr,0,ms),new Z(yr,0,ms),new Z(0,ms,-yr),new Z(0,ms,yr),new Z(-1,1,-1),new Z(1,1,-1),new Z(-1,1,1),new Z(1,1,1)];class P_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,s=.1,l=100){ph=this._renderer.getRenderTarget(),mh=this._renderer.getActiveCubeFace(),gh=this._renderer.getActiveMipmapLevel(),_h=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(e,s,l,u),i>0&&this._blur(u,0,0,i),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=F_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=I_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ph,mh,gh),this._renderer.xr.enabled=_h,e.scissorTest=!1,hc(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===br||e.mapping===Ar?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ph=this._renderer.getRenderTarget(),mh=this._renderer.getActiveCubeFace(),gh=this._renderer.getActiveMipmapLevel(),_h=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:_i,minFilter:_i,generateMipmaps:!1,type:bc,format:Ci,colorSpace:ka,depthBuffer:!1},l=B_(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=B_(e,i,s);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=bT(u)),this._blurMaterial=AT(u,e,i)}return l}_compileMaterial(e){const i=new Kn(this._lodPlanes[0],e);this._renderer.compile(i,dh)}_sceneToCubeUV(e,i,s,l){const h=new Zn(90,1,i,s),m=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],_=this._renderer,x=_.autoClear,y=_.toneMapping;_.getClearColor(O_),_.toneMapping=Ha,_.autoClear=!1;const M=new w0({name:"PMREM.Background",side:In,depthWrite:!1,depthTest:!1}),A=new Kn(new wr,M);let C=!1;const S=e.background;S?S.isColor&&(M.color.copy(S),e.background=null,C=!0):(M.color.copy(O_),C=!0);for(let v=0;v<6;v++){const z=v%3;z===0?(h.up.set(0,m[v],0),h.lookAt(p[v],0,0)):z===1?(h.up.set(0,0,m[v]),h.lookAt(0,p[v],0)):(h.up.set(0,m[v],0),h.lookAt(0,0,p[v]));const U=this._cubeSize;hc(l,z*U,v>2?U:0,U,U),_.setRenderTarget(l),C&&_.render(A,h),_.render(e,h)}A.geometry.dispose(),A.material.dispose(),_.toneMapping=y,_.autoClear=x,e.background=S}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===br||e.mapping===Ar;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=F_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=I_());const u=l?this._cubemapMaterial:this._equirectMaterial,d=new Kn(this._lodPlanes[0],u),h=u.uniforms;h.envMap.value=e;const m=this._cubeSize;hc(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(d,dh)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const d=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),h=z_[(l-u-1)%z_.length];this._blur(e,u-1,u,d,h)}i.autoClear=s}_blur(e,i,s,l,u){const d=this._pingPongRenderTarget;this._halfBlur(e,d,i,s,l,"latitudinal",u),this._halfBlur(d,e,s,s,l,"longitudinal",u)}_halfBlur(e,i,s,l,u,d,h){const m=this._renderer,p=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,x=new Kn(this._lodPlanes[l],p),y=p.uniforms,M=this._sizeLods[s]-1,A=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*_s-1),C=u/A,S=isFinite(u)?1+Math.floor(_*C):_s;S>_s&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${_s}`);const v=[];let z=0;for(let N=0;N<_s;++N){const W=N/C,w=Math.exp(-W*W/2);v.push(w),N===0?z+=w:N<S&&(z+=2*w)}for(let N=0;N<v.length;N++)v[N]=v[N]/z;y.envMap.value=e.texture,y.samples.value=S,y.weights.value=v,y.latitudinal.value=d==="latitudinal",h&&(y.poleAxis.value=h);const{_lodMax:U}=this;y.dTheta.value=A,y.mipInt.value=U-s;const L=this._sizeLods[l],Y=3*L*(l>U-Sr?l-U+Sr:0),F=4*(this._cubeSize-L);hc(i,Y,F,3*L,2*L),m.setRenderTarget(i),m.render(x,dh)}}function bT(o){const e=[],i=[],s=[];let l=o;const u=o-Sr+1+N_.length;for(let d=0;d<u;d++){const h=Math.pow(2,l);i.push(h);let m=1/h;d>o-Sr?m=N_[d-o+Sr-1]:d===0&&(m=0),s.push(m);const p=1/(h-2),_=-p,x=1+p,y=[_,_,x,_,x,x,_,_,x,x,_,x],M=6,A=6,C=3,S=2,v=1,z=new Float32Array(C*A*M),U=new Float32Array(S*A*M),L=new Float32Array(v*A*M);for(let F=0;F<M;F++){const N=F%3*2/3-1,W=F>2?0:-1,w=[N,W,0,N+2/3,W,0,N+2/3,W+1,0,N,W,0,N+2/3,W+1,0,N,W+1,0];z.set(w,C*A*F),U.set(y,S*A*F);const T=[F,F,F,F,F,F];L.set(T,v*A*F)}const Y=new ia;Y.setAttribute("position",new wi(z,C)),Y.setAttribute("uv",new wi(U,S)),Y.setAttribute("faceIndex",new wi(L,v)),e.push(Y),l>Sr&&l--}return{lodPlanes:e,sizeLods:i,sigmas:s}}function B_(o,e,i){const s=new ys(o,e,i);return s.texture.mapping=Tc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function hc(o,e,i,s,l){o.viewport.set(e,i,s,l),o.scissor.set(e,i,s,l)}function AT(o,e,i){const s=new Float32Array(_s),l=new Z(0,1,0);return new Xa({name:"SphericalGaussianBlur",defines:{n:_s,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Bh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Fa,depthTest:!1,depthWrite:!1})}function I_(){return new Xa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Fa,depthTest:!1,depthWrite:!1})}function F_(){return new Xa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fa,depthTest:!1,depthWrite:!1})}function Bh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function RT(o){let e=new WeakMap,i=null;function s(h){if(h&&h.isTexture){const m=h.mapping,p=m===bh||m===Ah,_=m===br||m===Ar;if(p||_){let x=e.get(h);const y=x!==void 0?x.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==y)return i===null&&(i=new P_(o)),x=p?i.fromEquirectangular(h,x):i.fromCubemap(h,x),x.texture.pmremVersion=h.pmremVersion,e.set(h,x),x.texture;if(x!==void 0)return x.texture;{const M=h.image;return p&&M&&M.height>0||_&&M&&l(M)?(i===null&&(i=new P_(o)),x=p?i.fromEquirectangular(h):i.fromCubemap(h),x.texture.pmremVersion=h.pmremVersion,e.set(h,x),h.addEventListener("dispose",u),x.texture):null}}}return h}function l(h){let m=0;const p=6;for(let _=0;_<p;_++)h[_]!==void 0&&m++;return m===p}function u(h){const m=h.target;m.removeEventListener("dispose",u);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function d(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function CT(o){const e={};function i(s){if(e[s]!==void 0)return e[s];let l;switch(s){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(s)}return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&console.warn("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function wT(o,e,i,s){const l={},u=new WeakMap;function d(x){const y=x.target;y.index!==null&&e.remove(y.index);for(const A in y.attributes)e.remove(y.attributes[A]);for(const A in y.morphAttributes){const C=y.morphAttributes[A];for(let S=0,v=C.length;S<v;S++)e.remove(C[S])}y.removeEventListener("dispose",d),delete l[y.id];const M=u.get(y);M&&(e.remove(M),u.delete(y)),s.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,i.memory.geometries--}function h(x,y){return l[y.id]===!0||(y.addEventListener("dispose",d),l[y.id]=!0,i.memory.geometries++),y}function m(x){const y=x.attributes;for(const A in y)e.update(y[A],o.ARRAY_BUFFER);const M=x.morphAttributes;for(const A in M){const C=M[A];for(let S=0,v=C.length;S<v;S++)e.update(C[S],o.ARRAY_BUFFER)}}function p(x){const y=[],M=x.index,A=x.attributes.position;let C=0;if(M!==null){const z=M.array;C=M.version;for(let U=0,L=z.length;U<L;U+=3){const Y=z[U+0],F=z[U+1],N=z[U+2];y.push(Y,F,F,N,N,Y)}}else if(A!==void 0){const z=A.array;C=A.version;for(let U=0,L=z.length/3-1;U<L;U+=3){const Y=U+0,F=U+1,N=U+2;y.push(Y,F,F,N,N,Y)}}else return;const S=new(E0(y)?U0:D0)(y,1);S.version=C;const v=u.get(x);v&&e.remove(v),u.set(x,S)}function _(x){const y=u.get(x);if(y){const M=x.index;M!==null&&y.version<M.version&&p(x)}else p(x);return u.get(x)}return{get:h,update:m,getWireframeAttribute:_}}function DT(o,e,i){let s;function l(y){s=y}let u,d;function h(y){u=y.type,d=y.bytesPerElement}function m(y,M){o.drawElements(s,M,u,y*d),i.update(M,s,1)}function p(y,M,A){A!==0&&(o.drawElementsInstanced(s,M,u,y*d,A),i.update(M,s,A))}function _(y,M,A){if(A===0)return;const C=e.get("WEBGL_multi_draw");if(C===null)for(let S=0;S<A;S++)this.render(y[S]/d,M[S]);else{C.multiDrawElementsWEBGL(s,M,0,u,y,0,A);let S=0;for(let v=0;v<A;v++)S+=M[v];i.update(S,s,1)}}function x(y,M,A,C){if(A===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let v=0;v<y.length;v++)p(y[v]/d,M[v],C[v]);else{S.multiDrawElementsInstancedWEBGL(s,M,0,u,y,0,C,0,A);let v=0;for(let z=0;z<A;z++)v+=M[z];for(let z=0;z<C.length;z++)i.update(v,s,C[z])}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=x}function UT(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(u,d,h){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=h*(u/3);break;case o.LINES:i.lines+=h*(u/2);break;case o.LINE_STRIP:i.lines+=h*(u-1);break;case o.LINE_LOOP:i.lines+=h*u;break;case o.POINTS:i.points+=h*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function LT(o,e,i){const s=new WeakMap,l=new ke;function u(d,h,m){const p=d.morphTargetInfluences,_=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,x=_!==void 0?_.length:0;let y=s.get(h);if(y===void 0||y.count!==x){let T=function(){W.dispose(),s.delete(h),h.removeEventListener("dispose",T)};var M=T;y!==void 0&&y.texture.dispose();const A=h.morphAttributes.position!==void 0,C=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,v=h.morphAttributes.position||[],z=h.morphAttributes.normal||[],U=h.morphAttributes.color||[];let L=0;A===!0&&(L=1),C===!0&&(L=2),S===!0&&(L=3);let Y=h.attributes.position.count*L,F=1;Y>e.maxTextureSize&&(F=Math.ceil(Y/e.maxTextureSize),Y=e.maxTextureSize);const N=new Float32Array(Y*F*4*x),W=new b0(N,Y,F,x);W.type=Ia,W.needsUpdate=!0;const w=L*4;for(let k=0;k<x;k++){const J=v[k],H=z[k],ot=U[k],ct=Y*F*4*k;for(let I=0;I<J.count;I++){const q=I*w;A===!0&&(l.fromBufferAttribute(J,I),N[ct+q+0]=l.x,N[ct+q+1]=l.y,N[ct+q+2]=l.z,N[ct+q+3]=0),C===!0&&(l.fromBufferAttribute(H,I),N[ct+q+4]=l.x,N[ct+q+5]=l.y,N[ct+q+6]=l.z,N[ct+q+7]=0),S===!0&&(l.fromBufferAttribute(ot,I),N[ct+q+8]=l.x,N[ct+q+9]=l.y,N[ct+q+10]=l.z,N[ct+q+11]=ot.itemSize===4?l.w:1)}}y={count:x,texture:W,size:new te(Y,F)},s.set(h,y),h.addEventListener("dispose",T)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let A=0;for(let S=0;S<p.length;S++)A+=p[S];const C=h.morphTargetsRelative?1:1-A;m.getUniforms().setValue(o,"morphTargetBaseInfluence",C),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",y.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",y.size)}return{update:u}}function NT(o,e,i,s){let l=new WeakMap;function u(m){const p=s.render.frame,_=m.geometry,x=e.get(m,_);if(l.get(x)!==p&&(e.update(x),l.set(x,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const y=m.skeleton;l.get(y)!==p&&(y.update(),l.set(y,p))}return x}function d(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:d}}class B0 extends Fn{constructor(e,i,s,l,u,d,h,m,p,_){if(_=_!==void 0?_:Er,_!==Er&&_!==Do)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");s===void 0&&_===Er&&(s=Rr),s===void 0&&_===Do&&(s=Uo),super(null,l,u,d,h,m,_,s,p),this.isDepthTexture=!0,this.image={width:e,height:i},this.magFilter=h!==void 0?h:ci,this.minFilter=m!==void 0?m:ci,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}const I0=new Fn,F0=new B0(1,1);F0.compareFunction=M0;const H0=new b0,G0=new xS,V0=new O0,H_=[],G_=[],V_=new Float32Array(16),X_=new Float32Array(9),k_=new Float32Array(4);function Dr(o,e,i){const s=o[0];if(s<=0||s>0)return o;const l=e*i;let u=H_[l];if(u===void 0&&(u=new Float32Array(l),H_[l]=u),e!==0){s.toArray(u,0);for(let d=1,h=0;d!==e;++d)h+=i,o[d].toArray(u,h)}return u}function cn(o,e){if(o.length!==e.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==e[i])return!1;return!0}function un(o,e){for(let i=0,s=e.length;i<s;i++)o[i]=e[i]}function Rc(o,e){let i=G_[e];i===void 0&&(i=new Int32Array(e),G_[e]=i);for(let s=0;s!==e;++s)i[s]=o.allocateTextureUnit();return i}function OT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function zT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(cn(i,e))return;o.uniform2fv(this.addr,e),un(i,e)}}function PT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(cn(i,e))return;o.uniform3fv(this.addr,e),un(i,e)}}function BT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(cn(i,e))return;o.uniform4fv(this.addr,e),un(i,e)}}function IT(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(cn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),un(i,e)}else{if(cn(i,s))return;k_.set(s),o.uniformMatrix2fv(this.addr,!1,k_),un(i,s)}}function FT(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(cn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),un(i,e)}else{if(cn(i,s))return;X_.set(s),o.uniformMatrix3fv(this.addr,!1,X_),un(i,s)}}function HT(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(cn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),un(i,e)}else{if(cn(i,s))return;V_.set(s),o.uniformMatrix4fv(this.addr,!1,V_),un(i,s)}}function GT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function VT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(cn(i,e))return;o.uniform2iv(this.addr,e),un(i,e)}}function XT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(cn(i,e))return;o.uniform3iv(this.addr,e),un(i,e)}}function kT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(cn(i,e))return;o.uniform4iv(this.addr,e),un(i,e)}}function WT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function qT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(cn(i,e))return;o.uniform2uiv(this.addr,e),un(i,e)}}function YT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(cn(i,e))return;o.uniform3uiv(this.addr,e),un(i,e)}}function jT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(cn(i,e))return;o.uniform4uiv(this.addr,e),un(i,e)}}function ZT(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);const u=this.type===o.SAMPLER_2D_SHADOW?F0:I0;i.setTexture2D(e||u,l)}function KT(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||G0,l)}function QT(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||V0,l)}function JT(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||H0,l)}function $T(o){switch(o){case 5126:return OT;case 35664:return zT;case 35665:return PT;case 35666:return BT;case 35674:return IT;case 35675:return FT;case 35676:return HT;case 5124:case 35670:return GT;case 35667:case 35671:return VT;case 35668:case 35672:return XT;case 35669:case 35673:return kT;case 5125:return WT;case 36294:return qT;case 36295:return YT;case 36296:return jT;case 35678:case 36198:case 36298:case 36306:case 35682:return ZT;case 35679:case 36299:case 36307:return KT;case 35680:case 36300:case 36308:case 36293:return QT;case 36289:case 36303:case 36311:case 36292:return JT}}function tb(o,e){o.uniform1fv(this.addr,e)}function eb(o,e){const i=Dr(e,this.size,2);o.uniform2fv(this.addr,i)}function nb(o,e){const i=Dr(e,this.size,3);o.uniform3fv(this.addr,i)}function ib(o,e){const i=Dr(e,this.size,4);o.uniform4fv(this.addr,i)}function ab(o,e){const i=Dr(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function sb(o,e){const i=Dr(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function rb(o,e){const i=Dr(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function ob(o,e){o.uniform1iv(this.addr,e)}function lb(o,e){o.uniform2iv(this.addr,e)}function cb(o,e){o.uniform3iv(this.addr,e)}function ub(o,e){o.uniform4iv(this.addr,e)}function fb(o,e){o.uniform1uiv(this.addr,e)}function hb(o,e){o.uniform2uiv(this.addr,e)}function db(o,e){o.uniform3uiv(this.addr,e)}function pb(o,e){o.uniform4uiv(this.addr,e)}function mb(o,e,i){const s=this.cache,l=e.length,u=Rc(i,l);cn(s,u)||(o.uniform1iv(this.addr,u),un(s,u));for(let d=0;d!==l;++d)i.setTexture2D(e[d]||I0,u[d])}function gb(o,e,i){const s=this.cache,l=e.length,u=Rc(i,l);cn(s,u)||(o.uniform1iv(this.addr,u),un(s,u));for(let d=0;d!==l;++d)i.setTexture3D(e[d]||G0,u[d])}function _b(o,e,i){const s=this.cache,l=e.length,u=Rc(i,l);cn(s,u)||(o.uniform1iv(this.addr,u),un(s,u));for(let d=0;d!==l;++d)i.setTextureCube(e[d]||V0,u[d])}function vb(o,e,i){const s=this.cache,l=e.length,u=Rc(i,l);cn(s,u)||(o.uniform1iv(this.addr,u),un(s,u));for(let d=0;d!==l;++d)i.setTexture2DArray(e[d]||H0,u[d])}function xb(o){switch(o){case 5126:return tb;case 35664:return eb;case 35665:return nb;case 35666:return ib;case 35674:return ab;case 35675:return sb;case 35676:return rb;case 5124:case 35670:return ob;case 35667:case 35671:return lb;case 35668:case 35672:return cb;case 35669:case 35673:return ub;case 5125:return fb;case 36294:return hb;case 36295:return db;case 36296:return pb;case 35678:case 36198:case 36298:case 36306:case 35682:return mb;case 35679:case 36299:case 36307:return gb;case 35680:case 36300:case 36308:case 36293:return _b;case 36289:case 36303:case 36311:case 36292:return vb}}class yb{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=$T(i.type)}}class Sb{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=xb(i.type)}}class Mb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let u=0,d=l.length;u!==d;++u){const h=l[u];h.setValue(e,i[h.id],s)}}}const vh=/(\w+)(\])?(\[|\.)?/g;function W_(o,e){o.seq.push(e),o.map[e.id]=e}function Eb(o,e,i){const s=o.name,l=s.length;for(vh.lastIndex=0;;){const u=vh.exec(s),d=vh.lastIndex;let h=u[1];const m=u[2]==="]",p=u[3];if(m&&(h=h|0),p===void 0||p==="["&&d+2===l){W_(i,p===void 0?new yb(h,o,e):new Sb(h,o,e));break}else{let x=i.map[h];x===void 0&&(x=new Mb(h),W_(i,x)),i=x}}}class _c{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const u=e.getActiveUniform(i,l),d=e.getUniformLocation(i,u.name);Eb(u,d,this)}}setValue(e,i,s,l){const u=this.map[i];u!==void 0&&u.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let u=0,d=i.length;u!==d;++u){const h=i[u],m=s[h.id];m.needsUpdate!==!1&&h.setValue(e,m.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,u=e.length;l!==u;++l){const d=e[l];d.id in i&&s.push(d)}return s}}function q_(o,e,i){const s=o.createShader(e);return o.shaderSource(s,i),o.compileShader(s),s}const Tb=37297;let bb=0;function Ab(o,e){const i=o.split(`
`),s=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let d=l;d<u;d++){const h=d+1;s.push(`${h===e?">":" "} ${h}: ${i[d]}`)}return s.join(`
`)}function Rb(o){const e=Oe.getPrimaries(Oe.workingColorSpace),i=Oe.getPrimaries(o);let s;switch(e===i?s="":e===Sc&&i===yc?s="LinearDisplayP3ToLinearSRGB":e===yc&&i===Sc&&(s="LinearSRGBToLinearDisplayP3"),o){case ka:case Ac:return[s,"LinearTransferOETF"];case bi:case Oh:return[s,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",o),[s,"LinearTransferOETF"]}}function Y_(o,e,i){const s=o.getShaderParameter(e,o.COMPILE_STATUS),l=o.getShaderInfoLog(e).trim();if(s&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const d=parseInt(u[1]);return i.toUpperCase()+`

`+l+`

`+Ab(o.getShaderSource(e),d)}else return l}function Cb(o,e){const i=Rb(e);return`vec4 ${o}( vec4 value ) { return ${i[0]}( ${i[1]}( value ) ); }`}function wb(o,e){let i;switch(e){case Py:i="Linear";break;case By:i="Reinhard";break;case Iy:i="OptimizedCineon";break;case Fy:i="ACESFilmic";break;case Gy:i="AgX";break;case Vy:i="Neutral";break;case Hy:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}function Db(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wo).join(`
`)}function Ub(o){const e=[];for(const i in o){const s=o[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function Lb(o,e){const i={},s=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const u=o.getActiveAttrib(e,l),d=u.name;let h=1;u.type===o.FLOAT_MAT2&&(h=2),u.type===o.FLOAT_MAT3&&(h=3),u.type===o.FLOAT_MAT4&&(h=4),i[d]={type:u.type,location:o.getAttribLocation(e,d),locationSize:h}}return i}function wo(o){return o!==""}function j_(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Z_(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Nb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dh(o){return o.replace(Nb,zb)}const Ob=new Map;function zb(o,e){let i=ue[e];if(i===void 0){const s=Ob.get(e);if(s!==void 0)i=ue[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return Dh(i)}const Pb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function K_(o){return o.replace(Pb,Bb)}function Bb(o,e,i,s){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function Q_(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Ib(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===u0?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===f0?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===ta&&(e="SHADOWMAP_TYPE_VSM"),e}function Fb(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case br:case Ar:e="ENVMAP_TYPE_CUBE";break;case Tc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Hb(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Ar:e="ENVMAP_MODE_REFRACTION";break}return e}function Gb(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case h0:e="ENVMAP_BLENDING_MULTIPLY";break;case Oy:e="ENVMAP_BLENDING_MIX";break;case zy:e="ENVMAP_BLENDING_ADD";break}return e}function Vb(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function Xb(o,e,i,s){const l=o.getContext(),u=i.defines;let d=i.vertexShader,h=i.fragmentShader;const m=Ib(i),p=Fb(i),_=Hb(i),x=Gb(i),y=Vb(i),M=Db(i),A=Ub(u),C=l.createProgram();let S,v,z=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(wo).join(`
`),S.length>0&&(S+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(wo).join(`
`),v.length>0&&(v+=`
`)):(S=[Q_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.useLegacyLights?"#define LEGACY_LIGHTS":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wo).join(`
`),v=[Q_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+_:"",i.envMap?"#define "+x:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.useLegacyLights?"#define LEGACY_LIGHTS":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ha?"#define TONE_MAPPING":"",i.toneMapping!==Ha?ue.tonemapping_pars_fragment:"",i.toneMapping!==Ha?wb("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ue.colorspace_pars_fragment,Cb("linearToOutputTexel",i.outputColorSpace),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(wo).join(`
`)),d=Dh(d),d=j_(d,i),d=Z_(d,i),h=Dh(h),h=j_(h,i),h=Z_(h,i),d=K_(d),h=K_(h),i.isRawShaderMaterial!==!0&&(z=`#version 300 es
`,S=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,v=["#define varying in",i.glslVersion===d_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===d_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const U=z+S+d,L=z+v+h,Y=q_(l,l.VERTEX_SHADER,U),F=q_(l,l.FRAGMENT_SHADER,L);l.attachShader(C,Y),l.attachShader(C,F),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function N(k){if(o.debug.checkShaderErrors){const J=l.getProgramInfoLog(C).trim(),H=l.getShaderInfoLog(Y).trim(),ot=l.getShaderInfoLog(F).trim();let ct=!0,I=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(ct=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,C,Y,F);else{const q=Y_(l,Y,"vertex"),X=Y_(l,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+J+`
`+q+`
`+X)}else J!==""?console.warn("THREE.WebGLProgram: Program Info Log:",J):(H===""||ot==="")&&(I=!1);I&&(k.diagnostics={runnable:ct,programLog:J,vertexShader:{log:H,prefix:S},fragmentShader:{log:ot,prefix:v}})}l.deleteShader(Y),l.deleteShader(F),W=new _c(l,C),w=Lb(l,C)}let W;this.getUniforms=function(){return W===void 0&&N(this),W};let w;this.getAttributes=function(){return w===void 0&&N(this),w};let T=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=l.getProgramParameter(C,Tb)),T},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=bb++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=Y,this.fragmentShader=F,this}let kb=0;class Wb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(s),d=this._getShaderCacheForMaterial(e);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(u)===!1&&(d.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new qb(e),i.set(e,s)),s}}class qb{constructor(e){this.id=kb++,this.code=e,this.usedTimes=0}}function Yb(o,e,i,s,l,u,d){const h=new R0,m=new Wb,p=new Set,_=[],x=l.logarithmicDepthBuffer,y=l.vertexTextures;let M=l.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(w){return p.add(w),w===0?"uv":`uv${w}`}function S(w,T,k,J,H){const ot=J.fog,ct=H.geometry,I=w.isMeshStandardMaterial?J.environment:null,q=(w.isMeshStandardMaterial?i:e).get(w.envMap||I),X=q&&q.mapping===Tc?q.image.height:null,mt=A[w.type];w.precision!==null&&(M=l.getMaxPrecision(w.precision),M!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",M,"instead."));const lt=ct.morphAttributes.position||ct.morphAttributes.normal||ct.morphAttributes.color,O=lt!==void 0?lt.length:0;let it=0;ct.morphAttributes.position!==void 0&&(it=1),ct.morphAttributes.normal!==void 0&&(it=2),ct.morphAttributes.color!==void 0&&(it=3);let St,V,dt,Et;if(mt){const ve=Ai[mt];St=ve.vertexShader,V=ve.fragmentShader}else St=w.vertexShader,V=w.fragmentShader,m.update(w),dt=m.getVertexShaderID(w),Et=m.getFragmentShaderID(w);const gt=o.getRenderTarget(),Gt=H.isInstancedMesh===!0,Nt=H.isBatchedMesh===!0,$=!!w.map,ye=!!w.matcap,qt=!!q,be=!!w.aoMap,It=!!w.lightMap,le=!!w.bumpMap,ee=!!w.normalMap,he=!!w.displacementMap,ze=!!w.emissiveMap,P=!!w.metalnessMap,R=!!w.roughnessMap,ft=w.anisotropy>0,xt=w.clearcoat>0,Tt=w.dispersion>0,yt=w.iridescence>0,Vt=w.sheen>0,wt=w.transmission>0,Ct=ft&&!!w.anisotropyMap,Kt=xt&&!!w.clearcoatMap,At=xt&&!!w.clearcoatNormalMap,Ft=xt&&!!w.clearcoatRoughnessMap,de=yt&&!!w.iridescenceMap,Yt=yt&&!!w.iridescenceThicknessMap,Ut=Vt&&!!w.sheenColorMap,Xt=Vt&&!!w.sheenRoughnessMap,Jt=!!w.specularMap,se=!!w.specularColorMap,re=!!w.specularIntensityMap,E=wt&&!!w.transmissionMap,K=wt&&!!w.thicknessMap,nt=!!w.gradientMap,Mt=!!w.alphaMap,bt=w.alphaTest>0,Zt=!!w.alphaHash,ae=!!w.extensions;let Ce=Ha;w.toneMapped&&(gt===null||gt.isXRRenderTarget===!0)&&(Ce=o.toneMapping);const Je={shaderID:mt,shaderType:w.type,shaderName:w.name,vertexShader:St,fragmentShader:V,defines:w.defines,customVertexShaderID:dt,customFragmentShaderID:Et,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:M,batching:Nt,instancing:Gt,instancingColor:Gt&&H.instanceColor!==null,instancingMorph:Gt&&H.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:gt===null?o.outputColorSpace:gt.isXRRenderTarget===!0?gt.texture.colorSpace:ka,alphaToCoverage:!!w.alphaToCoverage,map:$,matcap:ye,envMap:qt,envMapMode:qt&&q.mapping,envMapCubeUVHeight:X,aoMap:be,lightMap:It,bumpMap:le,normalMap:ee,displacementMap:y&&he,emissiveMap:ze,normalMapObjectSpace:ee&&w.normalMapType===nS,normalMapTangentSpace:ee&&w.normalMapType===S0,metalnessMap:P,roughnessMap:R,anisotropy:ft,anisotropyMap:Ct,clearcoat:xt,clearcoatMap:Kt,clearcoatNormalMap:At,clearcoatRoughnessMap:Ft,dispersion:Tt,iridescence:yt,iridescenceMap:de,iridescenceThicknessMap:Yt,sheen:Vt,sheenColorMap:Ut,sheenRoughnessMap:Xt,specularMap:Jt,specularColorMap:se,specularIntensityMap:re,transmission:wt,transmissionMap:E,thicknessMap:K,gradientMap:nt,opaque:w.transparent===!1&&w.blending===Mr&&w.alphaToCoverage===!1,alphaMap:Mt,alphaTest:bt,alphaHash:Zt,combine:w.combine,mapUv:$&&C(w.map.channel),aoMapUv:be&&C(w.aoMap.channel),lightMapUv:It&&C(w.lightMap.channel),bumpMapUv:le&&C(w.bumpMap.channel),normalMapUv:ee&&C(w.normalMap.channel),displacementMapUv:he&&C(w.displacementMap.channel),emissiveMapUv:ze&&C(w.emissiveMap.channel),metalnessMapUv:P&&C(w.metalnessMap.channel),roughnessMapUv:R&&C(w.roughnessMap.channel),anisotropyMapUv:Ct&&C(w.anisotropyMap.channel),clearcoatMapUv:Kt&&C(w.clearcoatMap.channel),clearcoatNormalMapUv:At&&C(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ft&&C(w.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&C(w.iridescenceMap.channel),iridescenceThicknessMapUv:Yt&&C(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ut&&C(w.sheenColorMap.channel),sheenRoughnessMapUv:Xt&&C(w.sheenRoughnessMap.channel),specularMapUv:Jt&&C(w.specularMap.channel),specularColorMapUv:se&&C(w.specularColorMap.channel),specularIntensityMapUv:re&&C(w.specularIntensityMap.channel),transmissionMapUv:E&&C(w.transmissionMap.channel),thicknessMapUv:K&&C(w.thicknessMap.channel),alphaMapUv:Mt&&C(w.alphaMap.channel),vertexTangents:!!ct.attributes.tangent&&(ee||ft),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!ct.attributes.color&&ct.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!ct.attributes.uv&&($||Mt),fog:!!ot,useFog:w.fog===!0,fogExp2:!!ot&&ot.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:x,skinning:H.isSkinnedMesh===!0,morphTargets:ct.morphAttributes.position!==void 0,morphNormals:ct.morphAttributes.normal!==void 0,morphColors:ct.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:it,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:w.dithering,shadowMapEnabled:o.shadowMap.enabled&&k.length>0,shadowMapType:o.shadowMap.type,toneMapping:Ce,useLegacyLights:o._useLegacyLights,decodeVideoTexture:$&&w.map.isVideoTexture===!0&&Oe.getTransfer(w.map.colorSpace)===He,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===ea,flipSided:w.side===In,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:ae&&w.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:ae&&w.extensions.multiDraw===!0&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Je.vertexUv1s=p.has(1),Je.vertexUv2s=p.has(2),Je.vertexUv3s=p.has(3),p.clear(),Je}function v(w){const T=[];if(w.shaderID?T.push(w.shaderID):(T.push(w.customVertexShaderID),T.push(w.customFragmentShaderID)),w.defines!==void 0)for(const k in w.defines)T.push(k),T.push(w.defines[k]);return w.isRawShaderMaterial===!1&&(z(T,w),U(T,w),T.push(o.outputColorSpace)),T.push(w.customProgramCacheKey),T.join()}function z(w,T){w.push(T.precision),w.push(T.outputColorSpace),w.push(T.envMapMode),w.push(T.envMapCubeUVHeight),w.push(T.mapUv),w.push(T.alphaMapUv),w.push(T.lightMapUv),w.push(T.aoMapUv),w.push(T.bumpMapUv),w.push(T.normalMapUv),w.push(T.displacementMapUv),w.push(T.emissiveMapUv),w.push(T.metalnessMapUv),w.push(T.roughnessMapUv),w.push(T.anisotropyMapUv),w.push(T.clearcoatMapUv),w.push(T.clearcoatNormalMapUv),w.push(T.clearcoatRoughnessMapUv),w.push(T.iridescenceMapUv),w.push(T.iridescenceThicknessMapUv),w.push(T.sheenColorMapUv),w.push(T.sheenRoughnessMapUv),w.push(T.specularMapUv),w.push(T.specularColorMapUv),w.push(T.specularIntensityMapUv),w.push(T.transmissionMapUv),w.push(T.thicknessMapUv),w.push(T.combine),w.push(T.fogExp2),w.push(T.sizeAttenuation),w.push(T.morphTargetsCount),w.push(T.morphAttributeCount),w.push(T.numDirLights),w.push(T.numPointLights),w.push(T.numSpotLights),w.push(T.numSpotLightMaps),w.push(T.numHemiLights),w.push(T.numRectAreaLights),w.push(T.numDirLightShadows),w.push(T.numPointLightShadows),w.push(T.numSpotLightShadows),w.push(T.numSpotLightShadowsWithMaps),w.push(T.numLightProbes),w.push(T.shadowMapType),w.push(T.toneMapping),w.push(T.numClippingPlanes),w.push(T.numClipIntersection),w.push(T.depthPacking)}function U(w,T){h.disableAll(),T.supportsVertexTextures&&h.enable(0),T.instancing&&h.enable(1),T.instancingColor&&h.enable(2),T.instancingMorph&&h.enable(3),T.matcap&&h.enable(4),T.envMap&&h.enable(5),T.normalMapObjectSpace&&h.enable(6),T.normalMapTangentSpace&&h.enable(7),T.clearcoat&&h.enable(8),T.iridescence&&h.enable(9),T.alphaTest&&h.enable(10),T.vertexColors&&h.enable(11),T.vertexAlphas&&h.enable(12),T.vertexUv1s&&h.enable(13),T.vertexUv2s&&h.enable(14),T.vertexUv3s&&h.enable(15),T.vertexTangents&&h.enable(16),T.anisotropy&&h.enable(17),T.alphaHash&&h.enable(18),T.batching&&h.enable(19),T.dispersion&&h.enable(20),w.push(h.mask),h.disableAll(),T.fog&&h.enable(0),T.useFog&&h.enable(1),T.flatShading&&h.enable(2),T.logarithmicDepthBuffer&&h.enable(3),T.skinning&&h.enable(4),T.morphTargets&&h.enable(5),T.morphNormals&&h.enable(6),T.morphColors&&h.enable(7),T.premultipliedAlpha&&h.enable(8),T.shadowMapEnabled&&h.enable(9),T.useLegacyLights&&h.enable(10),T.doubleSided&&h.enable(11),T.flipSided&&h.enable(12),T.useDepthPacking&&h.enable(13),T.dithering&&h.enable(14),T.transmission&&h.enable(15),T.sheen&&h.enable(16),T.opaque&&h.enable(17),T.pointsUvs&&h.enable(18),T.decodeVideoTexture&&h.enable(19),T.alphaToCoverage&&h.enable(20),w.push(h.mask)}function L(w){const T=A[w.type];let k;if(T){const J=Ai[T];k=US.clone(J.uniforms)}else k=w.uniforms;return k}function Y(w,T){let k;for(let J=0,H=_.length;J<H;J++){const ot=_[J];if(ot.cacheKey===T){k=ot,++k.usedTimes;break}}return k===void 0&&(k=new Xb(o,T,w,u),_.push(k)),k}function F(w){if(--w.usedTimes===0){const T=_.indexOf(w);_[T]=_[_.length-1],_.pop(),w.destroy()}}function N(w){m.remove(w)}function W(){m.dispose()}return{getParameters:S,getProgramCacheKey:v,getUniforms:L,acquireProgram:Y,releaseProgram:F,releaseShaderCache:N,programs:_,dispose:W}}function jb(){let o=new WeakMap;function e(u){let d=o.get(u);return d===void 0&&(d={},o.set(u,d)),d}function i(u){o.delete(u)}function s(u,d,h){o.get(u)[d]=h}function l(){o=new WeakMap}return{get:e,remove:i,update:s,dispose:l}}function Zb(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function J_(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function $_(){const o=[];let e=0;const i=[],s=[],l=[];function u(){e=0,i.length=0,s.length=0,l.length=0}function d(x,y,M,A,C,S){let v=o[e];return v===void 0?(v={id:x.id,object:x,geometry:y,material:M,groupOrder:A,renderOrder:x.renderOrder,z:C,group:S},o[e]=v):(v.id=x.id,v.object=x,v.geometry=y,v.material=M,v.groupOrder=A,v.renderOrder=x.renderOrder,v.z=C,v.group=S),e++,v}function h(x,y,M,A,C,S){const v=d(x,y,M,A,C,S);M.transmission>0?s.push(v):M.transparent===!0?l.push(v):i.push(v)}function m(x,y,M,A,C,S){const v=d(x,y,M,A,C,S);M.transmission>0?s.unshift(v):M.transparent===!0?l.unshift(v):i.unshift(v)}function p(x,y){i.length>1&&i.sort(x||Zb),s.length>1&&s.sort(y||J_),l.length>1&&l.sort(y||J_)}function _(){for(let x=e,y=o.length;x<y;x++){const M=o[x];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:s,transparent:l,init:u,push:h,unshift:m,finish:_,sort:p}}function Kb(){let o=new WeakMap;function e(s,l){const u=o.get(s);let d;return u===void 0?(d=new $_,o.set(s,[d])):l>=u.length?(d=new $_,u.push(d)):d=u[l],d}function i(){o=new WeakMap}return{get:e,dispose:i}}function Qb(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new Z,color:new Se};break;case"SpotLight":i={position:new Z,direction:new Z,color:new Se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new Z,color:new Se,distance:0,decay:0};break;case"HemisphereLight":i={direction:new Z,skyColor:new Se,groundColor:new Se};break;case"RectAreaLight":i={color:new Se,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return o[e.id]=i,i}}}function Jb(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"SpotLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"PointLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let $b=0;function t1(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function e1(o){const e=new Qb,i=Jb(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new Z);const l=new Z,u=new je,d=new je;function h(p,_){let x=0,y=0,M=0;for(let k=0;k<9;k++)s.probe[k].set(0,0,0);let A=0,C=0,S=0,v=0,z=0,U=0,L=0,Y=0,F=0,N=0,W=0;p.sort(t1);const w=_===!0?Math.PI:1;for(let k=0,J=p.length;k<J;k++){const H=p[k],ot=H.color,ct=H.intensity,I=H.distance,q=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)x+=ot.r*ct*w,y+=ot.g*ct*w,M+=ot.b*ct*w;else if(H.isLightProbe){for(let X=0;X<9;X++)s.probe[X].addScaledVector(H.sh.coefficients[X],ct);W++}else if(H.isDirectionalLight){const X=e.get(H);if(X.color.copy(H.color).multiplyScalar(H.intensity*w),H.castShadow){const mt=H.shadow,lt=i.get(H);lt.shadowBias=mt.bias,lt.shadowNormalBias=mt.normalBias,lt.shadowRadius=mt.radius,lt.shadowMapSize=mt.mapSize,s.directionalShadow[A]=lt,s.directionalShadowMap[A]=q,s.directionalShadowMatrix[A]=H.shadow.matrix,U++}s.directional[A]=X,A++}else if(H.isSpotLight){const X=e.get(H);X.position.setFromMatrixPosition(H.matrixWorld),X.color.copy(ot).multiplyScalar(ct*w),X.distance=I,X.coneCos=Math.cos(H.angle),X.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),X.decay=H.decay,s.spot[S]=X;const mt=H.shadow;if(H.map&&(s.spotLightMap[F]=H.map,F++,mt.updateMatrices(H),H.castShadow&&N++),s.spotLightMatrix[S]=mt.matrix,H.castShadow){const lt=i.get(H);lt.shadowBias=mt.bias,lt.shadowNormalBias=mt.normalBias,lt.shadowRadius=mt.radius,lt.shadowMapSize=mt.mapSize,s.spotShadow[S]=lt,s.spotShadowMap[S]=q,Y++}S++}else if(H.isRectAreaLight){const X=e.get(H);X.color.copy(ot).multiplyScalar(ct),X.halfWidth.set(H.width*.5,0,0),X.halfHeight.set(0,H.height*.5,0),s.rectArea[v]=X,v++}else if(H.isPointLight){const X=e.get(H);if(X.color.copy(H.color).multiplyScalar(H.intensity*w),X.distance=H.distance,X.decay=H.decay,H.castShadow){const mt=H.shadow,lt=i.get(H);lt.shadowBias=mt.bias,lt.shadowNormalBias=mt.normalBias,lt.shadowRadius=mt.radius,lt.shadowMapSize=mt.mapSize,lt.shadowCameraNear=mt.camera.near,lt.shadowCameraFar=mt.camera.far,s.pointShadow[C]=lt,s.pointShadowMap[C]=q,s.pointShadowMatrix[C]=H.shadow.matrix,L++}s.point[C]=X,C++}else if(H.isHemisphereLight){const X=e.get(H);X.skyColor.copy(H.color).multiplyScalar(ct*w),X.groundColor.copy(H.groundColor).multiplyScalar(ct*w),s.hemi[z]=X,z++}}v>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Dt.LTC_FLOAT_1,s.rectAreaLTC2=Dt.LTC_FLOAT_2):(s.rectAreaLTC1=Dt.LTC_HALF_1,s.rectAreaLTC2=Dt.LTC_HALF_2)),s.ambient[0]=x,s.ambient[1]=y,s.ambient[2]=M;const T=s.hash;(T.directionalLength!==A||T.pointLength!==C||T.spotLength!==S||T.rectAreaLength!==v||T.hemiLength!==z||T.numDirectionalShadows!==U||T.numPointShadows!==L||T.numSpotShadows!==Y||T.numSpotMaps!==F||T.numLightProbes!==W)&&(s.directional.length=A,s.spot.length=S,s.rectArea.length=v,s.point.length=C,s.hemi.length=z,s.directionalShadow.length=U,s.directionalShadowMap.length=U,s.pointShadow.length=L,s.pointShadowMap.length=L,s.spotShadow.length=Y,s.spotShadowMap.length=Y,s.directionalShadowMatrix.length=U,s.pointShadowMatrix.length=L,s.spotLightMatrix.length=Y+F-N,s.spotLightMap.length=F,s.numSpotLightShadowsWithMaps=N,s.numLightProbes=W,T.directionalLength=A,T.pointLength=C,T.spotLength=S,T.rectAreaLength=v,T.hemiLength=z,T.numDirectionalShadows=U,T.numPointShadows=L,T.numSpotShadows=Y,T.numSpotMaps=F,T.numLightProbes=W,s.version=$b++)}function m(p,_){let x=0,y=0,M=0,A=0,C=0;const S=_.matrixWorldInverse;for(let v=0,z=p.length;v<z;v++){const U=p[v];if(U.isDirectionalLight){const L=s.directional[x];L.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(S),x++}else if(U.isSpotLight){const L=s.spot[M];L.position.setFromMatrixPosition(U.matrixWorld),L.position.applyMatrix4(S),L.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(S),M++}else if(U.isRectAreaLight){const L=s.rectArea[A];L.position.setFromMatrixPosition(U.matrixWorld),L.position.applyMatrix4(S),d.identity(),u.copy(U.matrixWorld),u.premultiply(S),d.extractRotation(u),L.halfWidth.set(U.width*.5,0,0),L.halfHeight.set(0,U.height*.5,0),L.halfWidth.applyMatrix4(d),L.halfHeight.applyMatrix4(d),A++}else if(U.isPointLight){const L=s.point[y];L.position.setFromMatrixPosition(U.matrixWorld),L.position.applyMatrix4(S),y++}else if(U.isHemisphereLight){const L=s.hemi[C];L.direction.setFromMatrixPosition(U.matrixWorld),L.direction.transformDirection(S),C++}}}return{setup:h,setupView:m,state:s}}function t0(o){const e=new e1(o),i=[],s=[];function l(_){p.camera=_,i.length=0,s.length=0}function u(_){i.push(_)}function d(_){s.push(_)}function h(_){e.setup(i,_)}function m(_){e.setupView(i,_)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:u,pushShadow:d}}function n1(o){let e=new WeakMap;function i(l,u=0){const d=e.get(l);let h;return d===void 0?(h=new t0(o),e.set(l,[h])):u>=d.length?(h=new t0(o),d.push(h)):h=d[u],h}function s(){e=new WeakMap}return{get:i,dispose:s}}class i1 extends Oo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=tS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class a1 extends Oo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const s1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,r1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function o1(o,e,i){let s=new Ph;const l=new te,u=new te,d=new ke,h=new i1({depthPacking:eS}),m=new a1,p={},_=i.maxTextureSize,x={[Ga]:In,[In]:Ga,[ea]:ea},y=new Xa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new te},radius:{value:4}},vertexShader:s1,fragmentShader:r1}),M=y.clone();M.defines.HORIZONTAL_PASS=1;const A=new ia;A.setAttribute("position",new wi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Kn(A,y),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=u0;let v=this.type;this.render=function(F,N,W){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||F.length===0)return;const w=o.getRenderTarget(),T=o.getActiveCubeFace(),k=o.getActiveMipmapLevel(),J=o.state;J.setBlending(Fa),J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const H=v!==ta&&this.type===ta,ot=v===ta&&this.type!==ta;for(let ct=0,I=F.length;ct<I;ct++){const q=F[ct],X=q.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;l.copy(X.mapSize);const mt=X.getFrameExtents();if(l.multiply(mt),u.copy(X.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(u.x=Math.floor(_/mt.x),l.x=u.x*mt.x,X.mapSize.x=u.x),l.y>_&&(u.y=Math.floor(_/mt.y),l.y=u.y*mt.y,X.mapSize.y=u.y)),X.map===null||H===!0||ot===!0){const O=this.type!==ta?{minFilter:ci,magFilter:ci}:{};X.map!==null&&X.map.dispose(),X.map=new ys(l.x,l.y,O),X.map.texture.name=q.name+".shadowMap",X.camera.updateProjectionMatrix()}o.setRenderTarget(X.map),o.clear();const lt=X.getViewportCount();for(let O=0;O<lt;O++){const it=X.getViewport(O);d.set(u.x*it.x,u.y*it.y,u.x*it.z,u.y*it.w),J.viewport(d),X.updateMatrices(q,O),s=X.getFrustum(),L(N,W,X.camera,q,this.type)}X.isPointLightShadow!==!0&&this.type===ta&&z(X,W),X.needsUpdate=!1}v=this.type,S.needsUpdate=!1,o.setRenderTarget(w,T,k)};function z(F,N){const W=e.update(C);y.defines.VSM_SAMPLES!==F.blurSamples&&(y.defines.VSM_SAMPLES=F.blurSamples,M.defines.VSM_SAMPLES=F.blurSamples,y.needsUpdate=!0,M.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new ys(l.x,l.y)),y.uniforms.shadow_pass.value=F.map.texture,y.uniforms.resolution.value=F.mapSize,y.uniforms.radius.value=F.radius,o.setRenderTarget(F.mapPass),o.clear(),o.renderBufferDirect(N,null,W,y,C,null),M.uniforms.shadow_pass.value=F.mapPass.texture,M.uniforms.resolution.value=F.mapSize,M.uniforms.radius.value=F.radius,o.setRenderTarget(F.map),o.clear(),o.renderBufferDirect(N,null,W,M,C,null)}function U(F,N,W,w){let T=null;const k=W.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(k!==void 0)T=k;else if(T=W.isPointLight===!0?m:h,o.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0){const J=T.uuid,H=N.uuid;let ot=p[J];ot===void 0&&(ot={},p[J]=ot);let ct=ot[H];ct===void 0&&(ct=T.clone(),ot[H]=ct,N.addEventListener("dispose",Y)),T=ct}if(T.visible=N.visible,T.wireframe=N.wireframe,w===ta?T.side=N.shadowSide!==null?N.shadowSide:N.side:T.side=N.shadowSide!==null?N.shadowSide:x[N.side],T.alphaMap=N.alphaMap,T.alphaTest=N.alphaTest,T.map=N.map,T.clipShadows=N.clipShadows,T.clippingPlanes=N.clippingPlanes,T.clipIntersection=N.clipIntersection,T.displacementMap=N.displacementMap,T.displacementScale=N.displacementScale,T.displacementBias=N.displacementBias,T.wireframeLinewidth=N.wireframeLinewidth,T.linewidth=N.linewidth,W.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const J=o.properties.get(T);J.light=W}return T}function L(F,N,W,w,T){if(F.visible===!1)return;if(F.layers.test(N.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&T===ta)&&(!F.frustumCulled||s.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,F.matrixWorld);const H=e.update(F),ot=F.material;if(Array.isArray(ot)){const ct=H.groups;for(let I=0,q=ct.length;I<q;I++){const X=ct[I],mt=ot[X.materialIndex];if(mt&&mt.visible){const lt=U(F,mt,w,T);F.onBeforeShadow(o,F,N,W,H,lt,X),o.renderBufferDirect(W,null,H,lt,F,X),F.onAfterShadow(o,F,N,W,H,lt,X)}}}else if(ot.visible){const ct=U(F,ot,w,T);F.onBeforeShadow(o,F,N,W,H,ct,null),o.renderBufferDirect(W,null,H,ct,F,null),F.onAfterShadow(o,F,N,W,H,ct,null)}}const J=F.children;for(let H=0,ot=J.length;H<ot;H++)L(J[H],N,W,w,T)}function Y(F){F.target.removeEventListener("dispose",Y);for(const W in p){const w=p[W],T=F.target.uuid;T in w&&(w[T].dispose(),delete w[T])}}}function l1(o){function e(){let E=!1;const K=new ke;let nt=null;const Mt=new ke(0,0,0,0);return{setMask:function(bt){nt!==bt&&!E&&(o.colorMask(bt,bt,bt,bt),nt=bt)},setLocked:function(bt){E=bt},setClear:function(bt,Zt,ae,Ce,Je){Je===!0&&(bt*=Ce,Zt*=Ce,ae*=Ce),K.set(bt,Zt,ae,Ce),Mt.equals(K)===!1&&(o.clearColor(bt,Zt,ae,Ce),Mt.copy(K))},reset:function(){E=!1,nt=null,Mt.set(-1,0,0,0)}}}function i(){let E=!1,K=null,nt=null,Mt=null;return{setTest:function(bt){bt?Et(o.DEPTH_TEST):gt(o.DEPTH_TEST)},setMask:function(bt){K!==bt&&!E&&(o.depthMask(bt),K=bt)},setFunc:function(bt){if(nt!==bt){switch(bt){case Ry:o.depthFunc(o.NEVER);break;case Cy:o.depthFunc(o.ALWAYS);break;case wy:o.depthFunc(o.LESS);break;case vc:o.depthFunc(o.LEQUAL);break;case Dy:o.depthFunc(o.EQUAL);break;case Uy:o.depthFunc(o.GEQUAL);break;case Ly:o.depthFunc(o.GREATER);break;case Ny:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}nt=bt}},setLocked:function(bt){E=bt},setClear:function(bt){Mt!==bt&&(o.clearDepth(bt),Mt=bt)},reset:function(){E=!1,K=null,nt=null,Mt=null}}}function s(){let E=!1,K=null,nt=null,Mt=null,bt=null,Zt=null,ae=null,Ce=null,Je=null;return{setTest:function(ve){E||(ve?Et(o.STENCIL_TEST):gt(o.STENCIL_TEST))},setMask:function(ve){K!==ve&&!E&&(o.stencilMask(ve),K=ve)},setFunc:function(ve,Ge,Ae){(nt!==ve||Mt!==Ge||bt!==Ae)&&(o.stencilFunc(ve,Ge,Ae),nt=ve,Mt=Ge,bt=Ae)},setOp:function(ve,Ge,Ae){(Zt!==ve||ae!==Ge||Ce!==Ae)&&(o.stencilOp(ve,Ge,Ae),Zt=ve,ae=Ge,Ce=Ae)},setLocked:function(ve){E=ve},setClear:function(ve){Je!==ve&&(o.clearStencil(ve),Je=ve)},reset:function(){E=!1,K=null,nt=null,Mt=null,bt=null,Zt=null,ae=null,Ce=null,Je=null}}}const l=new e,u=new i,d=new s,h=new WeakMap,m=new WeakMap;let p={},_={},x=new WeakMap,y=[],M=null,A=!1,C=null,S=null,v=null,z=null,U=null,L=null,Y=null,F=new Se(0,0,0),N=0,W=!1,w=null,T=null,k=null,J=null,H=null;const ot=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ct=!1,I=0;const q=o.getParameter(o.VERSION);q.indexOf("WebGL")!==-1?(I=parseFloat(/^WebGL (\d)/.exec(q)[1]),ct=I>=1):q.indexOf("OpenGL ES")!==-1&&(I=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),ct=I>=2);let X=null,mt={};const lt=o.getParameter(o.SCISSOR_BOX),O=o.getParameter(o.VIEWPORT),it=new ke().fromArray(lt),St=new ke().fromArray(O);function V(E,K,nt,Mt){const bt=new Uint8Array(4),Zt=o.createTexture();o.bindTexture(E,Zt),o.texParameteri(E,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(E,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let ae=0;ae<nt;ae++)E===o.TEXTURE_3D||E===o.TEXTURE_2D_ARRAY?o.texImage3D(K,0,o.RGBA,1,1,Mt,0,o.RGBA,o.UNSIGNED_BYTE,bt):o.texImage2D(K+ae,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,bt);return Zt}const dt={};dt[o.TEXTURE_2D]=V(o.TEXTURE_2D,o.TEXTURE_2D,1),dt[o.TEXTURE_CUBE_MAP]=V(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),dt[o.TEXTURE_2D_ARRAY]=V(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),dt[o.TEXTURE_3D]=V(o.TEXTURE_3D,o.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),d.setClear(0),Et(o.DEPTH_TEST),u.setFunc(vc),le(!1),ee(zg),Et(o.CULL_FACE),be(Fa);function Et(E){p[E]!==!0&&(o.enable(E),p[E]=!0)}function gt(E){p[E]!==!1&&(o.disable(E),p[E]=!1)}function Gt(E,K){return _[E]!==K?(o.bindFramebuffer(E,K),_[E]=K,E===o.DRAW_FRAMEBUFFER&&(_[o.FRAMEBUFFER]=K),E===o.FRAMEBUFFER&&(_[o.DRAW_FRAMEBUFFER]=K),!0):!1}function Nt(E,K){let nt=y,Mt=!1;if(E){nt=x.get(K),nt===void 0&&(nt=[],x.set(K,nt));const bt=E.textures;if(nt.length!==bt.length||nt[0]!==o.COLOR_ATTACHMENT0){for(let Zt=0,ae=bt.length;Zt<ae;Zt++)nt[Zt]=o.COLOR_ATTACHMENT0+Zt;nt.length=bt.length,Mt=!0}}else nt[0]!==o.BACK&&(nt[0]=o.BACK,Mt=!0);Mt&&o.drawBuffers(nt)}function $(E){return M!==E?(o.useProgram(E),M=E,!0):!1}const ye={[gs]:o.FUNC_ADD,[uy]:o.FUNC_SUBTRACT,[fy]:o.FUNC_REVERSE_SUBTRACT};ye[hy]=o.MIN,ye[dy]=o.MAX;const qt={[py]:o.ZERO,[my]:o.ONE,[gy]:o.SRC_COLOR,[Eh]:o.SRC_ALPHA,[My]:o.SRC_ALPHA_SATURATE,[yy]:o.DST_COLOR,[vy]:o.DST_ALPHA,[_y]:o.ONE_MINUS_SRC_COLOR,[Th]:o.ONE_MINUS_SRC_ALPHA,[Sy]:o.ONE_MINUS_DST_COLOR,[xy]:o.ONE_MINUS_DST_ALPHA,[Ey]:o.CONSTANT_COLOR,[Ty]:o.ONE_MINUS_CONSTANT_COLOR,[by]:o.CONSTANT_ALPHA,[Ay]:o.ONE_MINUS_CONSTANT_ALPHA};function be(E,K,nt,Mt,bt,Zt,ae,Ce,Je,ve){if(E===Fa){A===!0&&(gt(o.BLEND),A=!1);return}if(A===!1&&(Et(o.BLEND),A=!0),E!==cy){if(E!==C||ve!==W){if((S!==gs||U!==gs)&&(o.blendEquation(o.FUNC_ADD),S=gs,U=gs),ve)switch(E){case Mr:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Pg:o.blendFunc(o.ONE,o.ONE);break;case Bg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Ig:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",E);break}else switch(E){case Mr:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Pg:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case Bg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Ig:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",E);break}v=null,z=null,L=null,Y=null,F.set(0,0,0),N=0,C=E,W=ve}return}bt=bt||K,Zt=Zt||nt,ae=ae||Mt,(K!==S||bt!==U)&&(o.blendEquationSeparate(ye[K],ye[bt]),S=K,U=bt),(nt!==v||Mt!==z||Zt!==L||ae!==Y)&&(o.blendFuncSeparate(qt[nt],qt[Mt],qt[Zt],qt[ae]),v=nt,z=Mt,L=Zt,Y=ae),(Ce.equals(F)===!1||Je!==N)&&(o.blendColor(Ce.r,Ce.g,Ce.b,Je),F.copy(Ce),N=Je),C=E,W=!1}function It(E,K){E.side===ea?gt(o.CULL_FACE):Et(o.CULL_FACE);let nt=E.side===In;K&&(nt=!nt),le(nt),E.blending===Mr&&E.transparent===!1?be(Fa):be(E.blending,E.blendEquation,E.blendSrc,E.blendDst,E.blendEquationAlpha,E.blendSrcAlpha,E.blendDstAlpha,E.blendColor,E.blendAlpha,E.premultipliedAlpha),u.setFunc(E.depthFunc),u.setTest(E.depthTest),u.setMask(E.depthWrite),l.setMask(E.colorWrite);const Mt=E.stencilWrite;d.setTest(Mt),Mt&&(d.setMask(E.stencilWriteMask),d.setFunc(E.stencilFunc,E.stencilRef,E.stencilFuncMask),d.setOp(E.stencilFail,E.stencilZFail,E.stencilZPass)),ze(E.polygonOffset,E.polygonOffsetFactor,E.polygonOffsetUnits),E.alphaToCoverage===!0?Et(o.SAMPLE_ALPHA_TO_COVERAGE):gt(o.SAMPLE_ALPHA_TO_COVERAGE)}function le(E){w!==E&&(E?o.frontFace(o.CW):o.frontFace(o.CCW),w=E)}function ee(E){E!==oy?(Et(o.CULL_FACE),E!==T&&(E===zg?o.cullFace(o.BACK):E===ly?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):gt(o.CULL_FACE),T=E}function he(E){E!==k&&(ct&&o.lineWidth(E),k=E)}function ze(E,K,nt){E?(Et(o.POLYGON_OFFSET_FILL),(J!==K||H!==nt)&&(o.polygonOffset(K,nt),J=K,H=nt)):gt(o.POLYGON_OFFSET_FILL)}function P(E){E?Et(o.SCISSOR_TEST):gt(o.SCISSOR_TEST)}function R(E){E===void 0&&(E=o.TEXTURE0+ot-1),X!==E&&(o.activeTexture(E),X=E)}function ft(E,K,nt){nt===void 0&&(X===null?nt=o.TEXTURE0+ot-1:nt=X);let Mt=mt[nt];Mt===void 0&&(Mt={type:void 0,texture:void 0},mt[nt]=Mt),(Mt.type!==E||Mt.texture!==K)&&(X!==nt&&(o.activeTexture(nt),X=nt),o.bindTexture(E,K||dt[E]),Mt.type=E,Mt.texture=K)}function xt(){const E=mt[X];E!==void 0&&E.type!==void 0&&(o.bindTexture(E.type,null),E.type=void 0,E.texture=void 0)}function Tt(){try{o.compressedTexImage2D.apply(o,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function yt(){try{o.compressedTexImage3D.apply(o,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function Vt(){try{o.texSubImage2D.apply(o,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function wt(){try{o.texSubImage3D.apply(o,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function Ct(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function Kt(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function At(){try{o.texStorage2D.apply(o,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function Ft(){try{o.texStorage3D.apply(o,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function de(){try{o.texImage2D.apply(o,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function Yt(){try{o.texImage3D.apply(o,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function Ut(E){it.equals(E)===!1&&(o.scissor(E.x,E.y,E.z,E.w),it.copy(E))}function Xt(E){St.equals(E)===!1&&(o.viewport(E.x,E.y,E.z,E.w),St.copy(E))}function Jt(E,K){let nt=m.get(K);nt===void 0&&(nt=new WeakMap,m.set(K,nt));let Mt=nt.get(E);Mt===void 0&&(Mt=o.getUniformBlockIndex(K,E.name),nt.set(E,Mt))}function se(E,K){const Mt=m.get(K).get(E);h.get(K)!==Mt&&(o.uniformBlockBinding(K,Mt,E.__bindingPointIndex),h.set(K,Mt))}function re(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),p={},X=null,mt={},_={},x=new WeakMap,y=[],M=null,A=!1,C=null,S=null,v=null,z=null,U=null,L=null,Y=null,F=new Se(0,0,0),N=0,W=!1,w=null,T=null,k=null,J=null,H=null,it.set(0,0,o.canvas.width,o.canvas.height),St.set(0,0,o.canvas.width,o.canvas.height),l.reset(),u.reset(),d.reset()}return{buffers:{color:l,depth:u,stencil:d},enable:Et,disable:gt,bindFramebuffer:Gt,drawBuffers:Nt,useProgram:$,setBlending:be,setMaterial:It,setFlipSided:le,setCullFace:ee,setLineWidth:he,setPolygonOffset:ze,setScissorTest:P,activeTexture:R,bindTexture:ft,unbindTexture:xt,compressedTexImage2D:Tt,compressedTexImage3D:yt,texImage2D:de,texImage3D:Yt,updateUBOMapping:Jt,uniformBlockBinding:se,texStorage2D:At,texStorage3D:Ft,texSubImage2D:Vt,texSubImage3D:wt,compressedTexSubImage2D:Ct,compressedTexSubImage3D:Kt,scissor:Ut,viewport:Xt,reset:re}}function c1(o,e,i,s,l,u,d){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new te,_=new WeakMap;let x;const y=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(P,R){return M?new OffscreenCanvas(P,R):Ec("canvas")}function C(P,R,ft){let xt=1;const Tt=ze(P);if((Tt.width>ft||Tt.height>ft)&&(xt=ft/Math.max(Tt.width,Tt.height)),xt<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const yt=Math.floor(xt*Tt.width),Vt=Math.floor(xt*Tt.height);x===void 0&&(x=A(yt,Vt));const wt=R?A(yt,Vt):x;return wt.width=yt,wt.height=Vt,wt.getContext("2d").drawImage(P,0,0,yt,Vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Tt.width+"x"+Tt.height+") to ("+yt+"x"+Vt+")."),wt}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Tt.width+"x"+Tt.height+")."),P;return P}function S(P){return P.generateMipmaps&&P.minFilter!==ci&&P.minFilter!==_i}function v(P){o.generateMipmap(P)}function z(P,R,ft,xt,Tt=!1){if(P!==null){if(o[P]!==void 0)return o[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let yt=R;if(R===o.RED&&(ft===o.FLOAT&&(yt=o.R32F),ft===o.HALF_FLOAT&&(yt=o.R16F),ft===o.UNSIGNED_BYTE&&(yt=o.R8)),R===o.RED_INTEGER&&(ft===o.UNSIGNED_BYTE&&(yt=o.R8UI),ft===o.UNSIGNED_SHORT&&(yt=o.R16UI),ft===o.UNSIGNED_INT&&(yt=o.R32UI),ft===o.BYTE&&(yt=o.R8I),ft===o.SHORT&&(yt=o.R16I),ft===o.INT&&(yt=o.R32I)),R===o.RG&&(ft===o.FLOAT&&(yt=o.RG32F),ft===o.HALF_FLOAT&&(yt=o.RG16F),ft===o.UNSIGNED_BYTE&&(yt=o.RG8)),R===o.RG_INTEGER&&(ft===o.UNSIGNED_BYTE&&(yt=o.RG8UI),ft===o.UNSIGNED_SHORT&&(yt=o.RG16UI),ft===o.UNSIGNED_INT&&(yt=o.RG32UI),ft===o.BYTE&&(yt=o.RG8I),ft===o.SHORT&&(yt=o.RG16I),ft===o.INT&&(yt=o.RG32I)),R===o.RGB&&ft===o.UNSIGNED_INT_5_9_9_9_REV&&(yt=o.RGB9_E5),R===o.RGBA){const Vt=Tt?xc:Oe.getTransfer(xt);ft===o.FLOAT&&(yt=o.RGBA32F),ft===o.HALF_FLOAT&&(yt=o.RGBA16F),ft===o.UNSIGNED_BYTE&&(yt=Vt===He?o.SRGB8_ALPHA8:o.RGBA8),ft===o.UNSIGNED_SHORT_4_4_4_4&&(yt=o.RGBA4),ft===o.UNSIGNED_SHORT_5_5_5_1&&(yt=o.RGB5_A1)}return(yt===o.R16F||yt===o.R32F||yt===o.RG16F||yt===o.RG32F||yt===o.RGBA16F||yt===o.RGBA32F)&&e.get("EXT_color_buffer_float"),yt}function U(P,R){return S(P)===!0||P.isFramebufferTexture&&P.minFilter!==ci&&P.minFilter!==_i?Math.log2(Math.max(R.width,R.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?R.mipmaps.length:1}function L(P){const R=P.target;R.removeEventListener("dispose",L),F(R),R.isVideoTexture&&_.delete(R)}function Y(P){const R=P.target;R.removeEventListener("dispose",Y),W(R)}function F(P){const R=s.get(P);if(R.__webglInit===void 0)return;const ft=P.source,xt=y.get(ft);if(xt){const Tt=xt[R.__cacheKey];Tt.usedTimes--,Tt.usedTimes===0&&N(P),Object.keys(xt).length===0&&y.delete(ft)}s.remove(P)}function N(P){const R=s.get(P);o.deleteTexture(R.__webglTexture);const ft=P.source,xt=y.get(ft);delete xt[R.__cacheKey],d.memory.textures--}function W(P){const R=s.get(P);if(P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let xt=0;xt<6;xt++){if(Array.isArray(R.__webglFramebuffer[xt]))for(let Tt=0;Tt<R.__webglFramebuffer[xt].length;Tt++)o.deleteFramebuffer(R.__webglFramebuffer[xt][Tt]);else o.deleteFramebuffer(R.__webglFramebuffer[xt]);R.__webglDepthbuffer&&o.deleteRenderbuffer(R.__webglDepthbuffer[xt])}else{if(Array.isArray(R.__webglFramebuffer))for(let xt=0;xt<R.__webglFramebuffer.length;xt++)o.deleteFramebuffer(R.__webglFramebuffer[xt]);else o.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&o.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&o.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let xt=0;xt<R.__webglColorRenderbuffer.length;xt++)R.__webglColorRenderbuffer[xt]&&o.deleteRenderbuffer(R.__webglColorRenderbuffer[xt]);R.__webglDepthRenderbuffer&&o.deleteRenderbuffer(R.__webglDepthRenderbuffer)}const ft=P.textures;for(let xt=0,Tt=ft.length;xt<Tt;xt++){const yt=s.get(ft[xt]);yt.__webglTexture&&(o.deleteTexture(yt.__webglTexture),d.memory.textures--),s.remove(ft[xt])}s.remove(P)}let w=0;function T(){w=0}function k(){const P=w;return P>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+l.maxTextures),w+=1,P}function J(P){const R=[];return R.push(P.wrapS),R.push(P.wrapT),R.push(P.wrapR||0),R.push(P.magFilter),R.push(P.minFilter),R.push(P.anisotropy),R.push(P.internalFormat),R.push(P.format),R.push(P.type),R.push(P.generateMipmaps),R.push(P.premultiplyAlpha),R.push(P.flipY),R.push(P.unpackAlignment),R.push(P.colorSpace),R.join()}function H(P,R){const ft=s.get(P);if(P.isVideoTexture&&ee(P),P.isRenderTargetTexture===!1&&P.version>0&&ft.__version!==P.version){const xt=P.image;if(xt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(xt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{it(ft,P,R);return}}i.bindTexture(o.TEXTURE_2D,ft.__webglTexture,o.TEXTURE0+R)}function ot(P,R){const ft=s.get(P);if(P.version>0&&ft.__version!==P.version){it(ft,P,R);return}i.bindTexture(o.TEXTURE_2D_ARRAY,ft.__webglTexture,o.TEXTURE0+R)}function ct(P,R){const ft=s.get(P);if(P.version>0&&ft.__version!==P.version){it(ft,P,R);return}i.bindTexture(o.TEXTURE_3D,ft.__webglTexture,o.TEXTURE0+R)}function I(P,R){const ft=s.get(P);if(P.version>0&&ft.__version!==P.version){St(ft,P,R);return}i.bindTexture(o.TEXTURE_CUBE_MAP,ft.__webglTexture,o.TEXTURE0+R)}const q={[Rh]:o.REPEAT,[vs]:o.CLAMP_TO_EDGE,[Ch]:o.MIRRORED_REPEAT},X={[ci]:o.NEAREST,[Xy]:o.NEAREST_MIPMAP_NEAREST,[Wl]:o.NEAREST_MIPMAP_LINEAR,[_i]:o.LINEAR,[Vf]:o.LINEAR_MIPMAP_NEAREST,[xs]:o.LINEAR_MIPMAP_LINEAR},mt={[iS]:o.NEVER,[cS]:o.ALWAYS,[aS]:o.LESS,[M0]:o.LEQUAL,[sS]:o.EQUAL,[lS]:o.GEQUAL,[rS]:o.GREATER,[oS]:o.NOTEQUAL};function lt(P,R){if(R.type===Ia&&e.has("OES_texture_float_linear")===!1&&(R.magFilter===_i||R.magFilter===Vf||R.magFilter===Wl||R.magFilter===xs||R.minFilter===_i||R.minFilter===Vf||R.minFilter===Wl||R.minFilter===xs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(P,o.TEXTURE_WRAP_S,q[R.wrapS]),o.texParameteri(P,o.TEXTURE_WRAP_T,q[R.wrapT]),(P===o.TEXTURE_3D||P===o.TEXTURE_2D_ARRAY)&&o.texParameteri(P,o.TEXTURE_WRAP_R,q[R.wrapR]),o.texParameteri(P,o.TEXTURE_MAG_FILTER,X[R.magFilter]),o.texParameteri(P,o.TEXTURE_MIN_FILTER,X[R.minFilter]),R.compareFunction&&(o.texParameteri(P,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(P,o.TEXTURE_COMPARE_FUNC,mt[R.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===ci||R.minFilter!==Wl&&R.minFilter!==xs||R.type===Ia&&e.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||s.get(R).__currentAnisotropy){const ft=e.get("EXT_texture_filter_anisotropic");o.texParameterf(P,ft.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,l.getMaxAnisotropy())),s.get(R).__currentAnisotropy=R.anisotropy}}}function O(P,R){let ft=!1;P.__webglInit===void 0&&(P.__webglInit=!0,R.addEventListener("dispose",L));const xt=R.source;let Tt=y.get(xt);Tt===void 0&&(Tt={},y.set(xt,Tt));const yt=J(R);if(yt!==P.__cacheKey){Tt[yt]===void 0&&(Tt[yt]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,ft=!0),Tt[yt].usedTimes++;const Vt=Tt[P.__cacheKey];Vt!==void 0&&(Tt[P.__cacheKey].usedTimes--,Vt.usedTimes===0&&N(R)),P.__cacheKey=yt,P.__webglTexture=Tt[yt].texture}return ft}function it(P,R,ft){let xt=o.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(xt=o.TEXTURE_2D_ARRAY),R.isData3DTexture&&(xt=o.TEXTURE_3D);const Tt=O(P,R),yt=R.source;i.bindTexture(xt,P.__webglTexture,o.TEXTURE0+ft);const Vt=s.get(yt);if(yt.version!==Vt.__version||Tt===!0){i.activeTexture(o.TEXTURE0+ft);const wt=Oe.getPrimaries(Oe.workingColorSpace),Ct=R.colorSpace===Ba?null:Oe.getPrimaries(R.colorSpace),Kt=R.colorSpace===Ba||wt===Ct?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,R.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,R.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Kt);let At=C(R.image,!1,l.maxTextureSize);At=he(R,At);const Ft=u.convert(R.format,R.colorSpace),de=u.convert(R.type);let Yt=z(R.internalFormat,Ft,de,R.colorSpace,R.isVideoTexture);lt(xt,R);let Ut;const Xt=R.mipmaps,Jt=R.isVideoTexture!==!0,se=Vt.__version===void 0||Tt===!0,re=yt.dataReady,E=U(R,At);if(R.isDepthTexture)Yt=o.DEPTH_COMPONENT16,R.type===Ia?Yt=o.DEPTH_COMPONENT32F:R.type===Rr?Yt=o.DEPTH_COMPONENT24:R.type===Uo&&(Yt=o.DEPTH24_STENCIL8),se&&(Jt?i.texStorage2D(o.TEXTURE_2D,1,Yt,At.width,At.height):i.texImage2D(o.TEXTURE_2D,0,Yt,At.width,At.height,0,Ft,de,null));else if(R.isDataTexture)if(Xt.length>0){Jt&&se&&i.texStorage2D(o.TEXTURE_2D,E,Yt,Xt[0].width,Xt[0].height);for(let K=0,nt=Xt.length;K<nt;K++)Ut=Xt[K],Jt?re&&i.texSubImage2D(o.TEXTURE_2D,K,0,0,Ut.width,Ut.height,Ft,de,Ut.data):i.texImage2D(o.TEXTURE_2D,K,Yt,Ut.width,Ut.height,0,Ft,de,Ut.data);R.generateMipmaps=!1}else Jt?(se&&i.texStorage2D(o.TEXTURE_2D,E,Yt,At.width,At.height),re&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,At.width,At.height,Ft,de,At.data)):i.texImage2D(o.TEXTURE_2D,0,Yt,At.width,At.height,0,Ft,de,At.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){Jt&&se&&i.texStorage3D(o.TEXTURE_2D_ARRAY,E,Yt,Xt[0].width,Xt[0].height,At.depth);for(let K=0,nt=Xt.length;K<nt;K++)Ut=Xt[K],R.format!==Ci?Ft!==null?Jt?re&&i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,K,0,0,0,Ut.width,Ut.height,At.depth,Ft,Ut.data,0,0):i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,K,Yt,Ut.width,Ut.height,At.depth,0,Ut.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Jt?re&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,K,0,0,0,Ut.width,Ut.height,At.depth,Ft,de,Ut.data):i.texImage3D(o.TEXTURE_2D_ARRAY,K,Yt,Ut.width,Ut.height,At.depth,0,Ft,de,Ut.data)}else{Jt&&se&&i.texStorage2D(o.TEXTURE_2D,E,Yt,Xt[0].width,Xt[0].height);for(let K=0,nt=Xt.length;K<nt;K++)Ut=Xt[K],R.format!==Ci?Ft!==null?Jt?re&&i.compressedTexSubImage2D(o.TEXTURE_2D,K,0,0,Ut.width,Ut.height,Ft,Ut.data):i.compressedTexImage2D(o.TEXTURE_2D,K,Yt,Ut.width,Ut.height,0,Ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Jt?re&&i.texSubImage2D(o.TEXTURE_2D,K,0,0,Ut.width,Ut.height,Ft,de,Ut.data):i.texImage2D(o.TEXTURE_2D,K,Yt,Ut.width,Ut.height,0,Ft,de,Ut.data)}else if(R.isDataArrayTexture)Jt?(se&&i.texStorage3D(o.TEXTURE_2D_ARRAY,E,Yt,At.width,At.height,At.depth),re&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,At.width,At.height,At.depth,Ft,de,At.data)):i.texImage3D(o.TEXTURE_2D_ARRAY,0,Yt,At.width,At.height,At.depth,0,Ft,de,At.data);else if(R.isData3DTexture)Jt?(se&&i.texStorage3D(o.TEXTURE_3D,E,Yt,At.width,At.height,At.depth),re&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,At.width,At.height,At.depth,Ft,de,At.data)):i.texImage3D(o.TEXTURE_3D,0,Yt,At.width,At.height,At.depth,0,Ft,de,At.data);else if(R.isFramebufferTexture){if(se)if(Jt)i.texStorage2D(o.TEXTURE_2D,E,Yt,At.width,At.height);else{let K=At.width,nt=At.height;for(let Mt=0;Mt<E;Mt++)i.texImage2D(o.TEXTURE_2D,Mt,Yt,K,nt,0,Ft,de,null),K>>=1,nt>>=1}}else if(Xt.length>0){if(Jt&&se){const K=ze(Xt[0]);i.texStorage2D(o.TEXTURE_2D,E,Yt,K.width,K.height)}for(let K=0,nt=Xt.length;K<nt;K++)Ut=Xt[K],Jt?re&&i.texSubImage2D(o.TEXTURE_2D,K,0,0,Ft,de,Ut):i.texImage2D(o.TEXTURE_2D,K,Yt,Ft,de,Ut);R.generateMipmaps=!1}else if(Jt){if(se){const K=ze(At);i.texStorage2D(o.TEXTURE_2D,E,Yt,K.width,K.height)}re&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Ft,de,At)}else i.texImage2D(o.TEXTURE_2D,0,Yt,Ft,de,At);S(R)&&v(xt),Vt.__version=yt.version,R.onUpdate&&R.onUpdate(R)}P.__version=R.version}function St(P,R,ft){if(R.image.length!==6)return;const xt=O(P,R),Tt=R.source;i.bindTexture(o.TEXTURE_CUBE_MAP,P.__webglTexture,o.TEXTURE0+ft);const yt=s.get(Tt);if(Tt.version!==yt.__version||xt===!0){i.activeTexture(o.TEXTURE0+ft);const Vt=Oe.getPrimaries(Oe.workingColorSpace),wt=R.colorSpace===Ba?null:Oe.getPrimaries(R.colorSpace),Ct=R.colorSpace===Ba||Vt===wt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,R.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,R.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ct);const Kt=R.isCompressedTexture||R.image[0].isCompressedTexture,At=R.image[0]&&R.image[0].isDataTexture,Ft=[];for(let nt=0;nt<6;nt++)!Kt&&!At?Ft[nt]=C(R.image[nt],!0,l.maxCubemapSize):Ft[nt]=At?R.image[nt].image:R.image[nt],Ft[nt]=he(R,Ft[nt]);const de=Ft[0],Yt=u.convert(R.format,R.colorSpace),Ut=u.convert(R.type),Xt=z(R.internalFormat,Yt,Ut,R.colorSpace),Jt=R.isVideoTexture!==!0,se=yt.__version===void 0||xt===!0,re=Tt.dataReady;let E=U(R,de);lt(o.TEXTURE_CUBE_MAP,R);let K;if(Kt){Jt&&se&&i.texStorage2D(o.TEXTURE_CUBE_MAP,E,Xt,de.width,de.height);for(let nt=0;nt<6;nt++){K=Ft[nt].mipmaps;for(let Mt=0;Mt<K.length;Mt++){const bt=K[Mt];R.format!==Ci?Yt!==null?Jt?re&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Mt,0,0,bt.width,bt.height,Yt,bt.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Mt,Xt,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Jt?re&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Mt,0,0,bt.width,bt.height,Yt,Ut,bt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Mt,Xt,bt.width,bt.height,0,Yt,Ut,bt.data)}}}else{if(K=R.mipmaps,Jt&&se){K.length>0&&E++;const nt=ze(Ft[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,E,Xt,nt.width,nt.height)}for(let nt=0;nt<6;nt++)if(At){Jt?re&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,Ft[nt].width,Ft[nt].height,Yt,Ut,Ft[nt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Xt,Ft[nt].width,Ft[nt].height,0,Yt,Ut,Ft[nt].data);for(let Mt=0;Mt<K.length;Mt++){const Zt=K[Mt].image[nt].image;Jt?re&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Mt+1,0,0,Zt.width,Zt.height,Yt,Ut,Zt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Mt+1,Xt,Zt.width,Zt.height,0,Yt,Ut,Zt.data)}}else{Jt?re&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,Yt,Ut,Ft[nt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Xt,Yt,Ut,Ft[nt]);for(let Mt=0;Mt<K.length;Mt++){const bt=K[Mt];Jt?re&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Mt+1,0,0,Yt,Ut,bt.image[nt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Mt+1,Xt,Yt,Ut,bt.image[nt])}}}S(R)&&v(o.TEXTURE_CUBE_MAP),yt.__version=Tt.version,R.onUpdate&&R.onUpdate(R)}P.__version=R.version}function V(P,R,ft,xt,Tt,yt){const Vt=u.convert(ft.format,ft.colorSpace),wt=u.convert(ft.type),Ct=z(ft.internalFormat,Vt,wt,ft.colorSpace);if(!s.get(R).__hasExternalTextures){const At=Math.max(1,R.width>>yt),Ft=Math.max(1,R.height>>yt);Tt===o.TEXTURE_3D||Tt===o.TEXTURE_2D_ARRAY?i.texImage3D(Tt,yt,Ct,At,Ft,R.depth,0,Vt,wt,null):i.texImage2D(Tt,yt,Ct,At,Ft,0,Vt,wt,null)}i.bindFramebuffer(o.FRAMEBUFFER,P),le(R)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,xt,Tt,s.get(ft).__webglTexture,0,It(R)):(Tt===o.TEXTURE_2D||Tt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&Tt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,xt,Tt,s.get(ft).__webglTexture,yt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function dt(P,R,ft){if(o.bindRenderbuffer(o.RENDERBUFFER,P),R.depthBuffer&&!R.stencilBuffer){let xt=o.DEPTH_COMPONENT24;if(ft||le(R)){const Tt=R.depthTexture;Tt&&Tt.isDepthTexture&&(Tt.type===Ia?xt=o.DEPTH_COMPONENT32F:Tt.type===Rr&&(xt=o.DEPTH_COMPONENT24));const yt=It(R);le(R)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,yt,xt,R.width,R.height):o.renderbufferStorageMultisample(o.RENDERBUFFER,yt,xt,R.width,R.height)}else o.renderbufferStorage(o.RENDERBUFFER,xt,R.width,R.height);o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.RENDERBUFFER,P)}else if(R.depthBuffer&&R.stencilBuffer){const xt=It(R);ft&&le(R)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,xt,o.DEPTH24_STENCIL8,R.width,R.height):le(R)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,xt,o.DEPTH24_STENCIL8,R.width,R.height):o.renderbufferStorage(o.RENDERBUFFER,o.DEPTH_STENCIL,R.width,R.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.RENDERBUFFER,P)}else{const xt=R.textures;for(let Tt=0;Tt<xt.length;Tt++){const yt=xt[Tt],Vt=u.convert(yt.format,yt.colorSpace),wt=u.convert(yt.type),Ct=z(yt.internalFormat,Vt,wt,yt.colorSpace),Kt=It(R);ft&&le(R)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Kt,Ct,R.width,R.height):le(R)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Kt,Ct,R.width,R.height):o.renderbufferStorage(o.RENDERBUFFER,Ct,R.width,R.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Et(P,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,P),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!s.get(R.depthTexture).__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),H(R.depthTexture,0);const xt=s.get(R.depthTexture).__webglTexture,Tt=It(R);if(R.depthTexture.format===Er)le(R)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,xt,0,Tt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,xt,0);else if(R.depthTexture.format===Do)le(R)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,xt,0,Tt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,xt,0);else throw new Error("Unknown depthTexture format")}function gt(P){const R=s.get(P),ft=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!R.__autoAllocateDepthBuffer){if(ft)throw new Error("target.depthTexture not supported in Cube render targets");Et(R.__webglFramebuffer,P)}else if(ft){R.__webglDepthbuffer=[];for(let xt=0;xt<6;xt++)i.bindFramebuffer(o.FRAMEBUFFER,R.__webglFramebuffer[xt]),R.__webglDepthbuffer[xt]=o.createRenderbuffer(),dt(R.__webglDepthbuffer[xt],P,!1)}else i.bindFramebuffer(o.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer=o.createRenderbuffer(),dt(R.__webglDepthbuffer,P,!1);i.bindFramebuffer(o.FRAMEBUFFER,null)}function Gt(P,R,ft){const xt=s.get(P);R!==void 0&&V(xt.__webglFramebuffer,P,P.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),ft!==void 0&&gt(P)}function Nt(P){const R=P.texture,ft=s.get(P),xt=s.get(R);P.addEventListener("dispose",Y);const Tt=P.textures,yt=P.isWebGLCubeRenderTarget===!0,Vt=Tt.length>1;if(Vt||(xt.__webglTexture===void 0&&(xt.__webglTexture=o.createTexture()),xt.__version=R.version,d.memory.textures++),yt){ft.__webglFramebuffer=[];for(let wt=0;wt<6;wt++)if(R.mipmaps&&R.mipmaps.length>0){ft.__webglFramebuffer[wt]=[];for(let Ct=0;Ct<R.mipmaps.length;Ct++)ft.__webglFramebuffer[wt][Ct]=o.createFramebuffer()}else ft.__webglFramebuffer[wt]=o.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){ft.__webglFramebuffer=[];for(let wt=0;wt<R.mipmaps.length;wt++)ft.__webglFramebuffer[wt]=o.createFramebuffer()}else ft.__webglFramebuffer=o.createFramebuffer();if(Vt)for(let wt=0,Ct=Tt.length;wt<Ct;wt++){const Kt=s.get(Tt[wt]);Kt.__webglTexture===void 0&&(Kt.__webglTexture=o.createTexture(),d.memory.textures++)}if(P.samples>0&&le(P)===!1){ft.__webglMultisampledFramebuffer=o.createFramebuffer(),ft.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,ft.__webglMultisampledFramebuffer);for(let wt=0;wt<Tt.length;wt++){const Ct=Tt[wt];ft.__webglColorRenderbuffer[wt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,ft.__webglColorRenderbuffer[wt]);const Kt=u.convert(Ct.format,Ct.colorSpace),At=u.convert(Ct.type),Ft=z(Ct.internalFormat,Kt,At,Ct.colorSpace,P.isXRRenderTarget===!0),de=It(P);o.renderbufferStorageMultisample(o.RENDERBUFFER,de,Ft,P.width,P.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+wt,o.RENDERBUFFER,ft.__webglColorRenderbuffer[wt])}o.bindRenderbuffer(o.RENDERBUFFER,null),P.depthBuffer&&(ft.__webglDepthRenderbuffer=o.createRenderbuffer(),dt(ft.__webglDepthRenderbuffer,P,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(yt){i.bindTexture(o.TEXTURE_CUBE_MAP,xt.__webglTexture),lt(o.TEXTURE_CUBE_MAP,R);for(let wt=0;wt<6;wt++)if(R.mipmaps&&R.mipmaps.length>0)for(let Ct=0;Ct<R.mipmaps.length;Ct++)V(ft.__webglFramebuffer[wt][Ct],P,R,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Ct);else V(ft.__webglFramebuffer[wt],P,R,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0);S(R)&&v(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Vt){for(let wt=0,Ct=Tt.length;wt<Ct;wt++){const Kt=Tt[wt],At=s.get(Kt);i.bindTexture(o.TEXTURE_2D,At.__webglTexture),lt(o.TEXTURE_2D,Kt),V(ft.__webglFramebuffer,P,Kt,o.COLOR_ATTACHMENT0+wt,o.TEXTURE_2D,0),S(Kt)&&v(o.TEXTURE_2D)}i.unbindTexture()}else{let wt=o.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(wt=P.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(wt,xt.__webglTexture),lt(wt,R),R.mipmaps&&R.mipmaps.length>0)for(let Ct=0;Ct<R.mipmaps.length;Ct++)V(ft.__webglFramebuffer[Ct],P,R,o.COLOR_ATTACHMENT0,wt,Ct);else V(ft.__webglFramebuffer,P,R,o.COLOR_ATTACHMENT0,wt,0);S(R)&&v(wt),i.unbindTexture()}P.depthBuffer&&gt(P)}function $(P){const R=P.textures;for(let ft=0,xt=R.length;ft<xt;ft++){const Tt=R[ft];if(S(Tt)){const yt=P.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:o.TEXTURE_2D,Vt=s.get(Tt).__webglTexture;i.bindTexture(yt,Vt),v(yt),i.unbindTexture()}}}const ye=[],qt=[];function be(P){if(P.samples>0){if(le(P)===!1){const R=P.textures,ft=P.width,xt=P.height;let Tt=o.COLOR_BUFFER_BIT;const yt=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Vt=s.get(P),wt=R.length>1;if(wt)for(let Ct=0;Ct<R.length;Ct++)i.bindFramebuffer(o.FRAMEBUFFER,Vt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ct,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Vt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ct,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Vt.__webglMultisampledFramebuffer),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Vt.__webglFramebuffer);for(let Ct=0;Ct<R.length;Ct++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(Tt|=o.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(Tt|=o.STENCIL_BUFFER_BIT)),wt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Vt.__webglColorRenderbuffer[Ct]);const Kt=s.get(R[Ct]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Kt,0)}o.blitFramebuffer(0,0,ft,xt,0,0,ft,xt,Tt,o.NEAREST),m===!0&&(ye.length=0,qt.length=0,ye.push(o.COLOR_ATTACHMENT0+Ct),P.depthBuffer&&P.resolveDepthBuffer===!1&&(ye.push(yt),qt.push(yt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,qt)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,ye))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),wt)for(let Ct=0;Ct<R.length;Ct++){i.bindFramebuffer(o.FRAMEBUFFER,Vt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ct,o.RENDERBUFFER,Vt.__webglColorRenderbuffer[Ct]);const Kt=s.get(R[Ct]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Vt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ct,o.TEXTURE_2D,Kt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Vt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&m){const R=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[R])}}}function It(P){return Math.min(l.maxSamples,P.samples)}function le(P){const R=s.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function ee(P){const R=d.render.frame;_.get(P)!==R&&(_.set(P,R),P.update())}function he(P,R){const ft=P.colorSpace,xt=P.format,Tt=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||ft!==ka&&ft!==Ba&&(Oe.getTransfer(ft)===He?(xt!==Ci||Tt!==Va)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ft)),R}function ze(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(p.width=P.naturalWidth||P.width,p.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(p.width=P.displayWidth,p.height=P.displayHeight):(p.width=P.width,p.height=P.height),p}this.allocateTextureUnit=k,this.resetTextureUnits=T,this.setTexture2D=H,this.setTexture2DArray=ot,this.setTexture3D=ct,this.setTextureCube=I,this.rebindTextures=Gt,this.setupRenderTarget=Nt,this.updateRenderTargetMipmap=$,this.updateMultisampleRenderTarget=be,this.setupDepthRenderbuffer=gt,this.setupFrameBufferTexture=V,this.useMultisampledRTT=le}function u1(o,e){function i(s,l=Ba){let u;const d=Oe.getTransfer(l);if(s===Va)return o.UNSIGNED_BYTE;if(s===g0)return o.UNSIGNED_SHORT_4_4_4_4;if(s===_0)return o.UNSIGNED_SHORT_5_5_5_1;if(s===qy)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===ky)return o.BYTE;if(s===Wy)return o.SHORT;if(s===p0)return o.UNSIGNED_SHORT;if(s===m0)return o.INT;if(s===Rr)return o.UNSIGNED_INT;if(s===Ia)return o.FLOAT;if(s===bc)return o.HALF_FLOAT;if(s===Yy)return o.ALPHA;if(s===jy)return o.RGB;if(s===Ci)return o.RGBA;if(s===Zy)return o.LUMINANCE;if(s===Ky)return o.LUMINANCE_ALPHA;if(s===Er)return o.DEPTH_COMPONENT;if(s===Do)return o.DEPTH_STENCIL;if(s===Qy)return o.RED;if(s===v0)return o.RED_INTEGER;if(s===Jy)return o.RG;if(s===x0)return o.RG_INTEGER;if(s===y0)return o.RGBA_INTEGER;if(s===Xf||s===kf||s===Wf||s===qf)if(d===He)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(s===Xf)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===kf)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Wf)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===qf)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(s===Xf)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===kf)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Wf)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===qf)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Fg||s===Hg||s===Gg||s===Vg)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(s===Fg)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Hg)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Gg)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Vg)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Xg||s===kg||s===Wg)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(s===Xg||s===kg)return d===He?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(s===Wg)return d===He?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===qg||s===Yg||s===jg||s===Zg||s===Kg||s===Qg||s===Jg||s===$g||s===t_||s===e_||s===n_||s===i_||s===a_||s===s_)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(s===qg)return d===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Yg)return d===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===jg)return d===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Zg)return d===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Kg)return d===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Qg)return d===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Jg)return d===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===$g)return d===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===t_)return d===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===e_)return d===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===n_)return d===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===i_)return d===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===a_)return d===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===s_)return d===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Yf||s===r_||s===o_)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(s===Yf)return d===He?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===r_)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===o_)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===$y||s===l_||s===c_||s===u_)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(s===Yf)return u.COMPRESSED_RED_RGTC1_EXT;if(s===l_)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===c_)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===u_)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Uo?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}class f1 extends Zn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class dc extends En{constructor(){super(),this.isGroup=!0,this.type="Group"}}const h1={type:"move"};class xh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new dc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new dc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new dc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,u=null,d=null;const h=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){d=!0;for(const C of e.hand.values()){const S=i.getJointPose(C,s),v=this._getHandJoint(p,C);S!==null&&(v.matrix.fromArray(S.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=S.radius),v.visible=S!==null}const _=p.joints["index-finger-tip"],x=p.joints["thumb-tip"],y=_.position.distanceTo(x.position),M=.02,A=.005;p.inputState.pinching&&y>M+A?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&y<=M-A&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,s),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&u!==null&&(l=u),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(h1)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new dc;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}const d1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,p1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class m1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i,s){if(this.texture===null){const l=new Fn,u=e.properties.get(l);u.__webglTexture=i.texture,(i.depthNear!=s.depthNear||i.depthFar!=s.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}render(e,i){if(this.texture!==null){if(this.mesh===null){const s=i.cameras[0].viewport,l=new Xa({vertexShader:d1,fragmentShader:p1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:s.z},depthHeight:{value:s.w}}});this.mesh=new Kn(new zo(20,20),l)}e.render(this.mesh,i)}}reset(){this.texture=null,this.mesh=null}}class g1 extends Ms{constructor(e,i){super();const s=this;let l=null,u=1,d=null,h="local-floor",m=1,p=null,_=null,x=null,y=null,M=null,A=null;const C=new m1,S=i.getContextAttributes();let v=null,z=null;const U=[],L=[],Y=new te;let F=null;const N=new Zn;N.layers.enable(1),N.viewport=new ke;const W=new Zn;W.layers.enable(2),W.viewport=new ke;const w=[N,W],T=new f1;T.layers.enable(1),T.layers.enable(2);let k=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let dt=U[V];return dt===void 0&&(dt=new xh,U[V]=dt),dt.getTargetRaySpace()},this.getControllerGrip=function(V){let dt=U[V];return dt===void 0&&(dt=new xh,U[V]=dt),dt.getGripSpace()},this.getHand=function(V){let dt=U[V];return dt===void 0&&(dt=new xh,U[V]=dt),dt.getHandSpace()};function H(V){const dt=L.indexOf(V.inputSource);if(dt===-1)return;const Et=U[dt];Et!==void 0&&(Et.update(V.inputSource,V.frame,p||d),Et.dispatchEvent({type:V.type,data:V.inputSource}))}function ot(){l.removeEventListener("select",H),l.removeEventListener("selectstart",H),l.removeEventListener("selectend",H),l.removeEventListener("squeeze",H),l.removeEventListener("squeezestart",H),l.removeEventListener("squeezeend",H),l.removeEventListener("end",ot),l.removeEventListener("inputsourceschange",ct);for(let V=0;V<U.length;V++){const dt=L[V];dt!==null&&(L[V]=null,U[V].disconnect(dt))}k=null,J=null,C.reset(),e.setRenderTarget(v),M=null,y=null,x=null,l=null,z=null,St.stop(),s.isPresenting=!1,e.setPixelRatio(F),e.setSize(Y.width,Y.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){u=V,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){h=V,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(V){p=V},this.getBaseLayer=function(){return y!==null?y:M},this.getBinding=function(){return x},this.getFrame=function(){return A},this.getSession=function(){return l},this.setSession=async function(V){if(l=V,l!==null){if(v=e.getRenderTarget(),l.addEventListener("select",H),l.addEventListener("selectstart",H),l.addEventListener("selectend",H),l.addEventListener("squeeze",H),l.addEventListener("squeezestart",H),l.addEventListener("squeezeend",H),l.addEventListener("end",ot),l.addEventListener("inputsourceschange",ct),S.xrCompatible!==!0&&await i.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(Y),l.renderState.layers===void 0){const dt={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(l,i,dt),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),z=new ys(M.framebufferWidth,M.framebufferHeight,{format:Ci,type:Va,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil})}else{let dt=null,Et=null,gt=null;S.depth&&(gt=S.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,dt=S.stencil?Do:Er,Et=S.stencil?Uo:Rr);const Gt={colorFormat:i.RGBA8,depthFormat:gt,scaleFactor:u};x=new XRWebGLBinding(l,i),y=x.createProjectionLayer(Gt),l.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),z=new ys(y.textureWidth,y.textureHeight,{format:Ci,type:Va,depthTexture:new B0(y.textureWidth,y.textureHeight,Et,void 0,void 0,void 0,void 0,void 0,void 0,dt),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1})}z.isXRRenderTarget=!0,this.setFoveation(m),p=null,d=await l.requestReferenceSpace(h),St.setContext(l),St.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode};function ct(V){for(let dt=0;dt<V.removed.length;dt++){const Et=V.removed[dt],gt=L.indexOf(Et);gt>=0&&(L[gt]=null,U[gt].disconnect(Et))}for(let dt=0;dt<V.added.length;dt++){const Et=V.added[dt];let gt=L.indexOf(Et);if(gt===-1){for(let Nt=0;Nt<U.length;Nt++)if(Nt>=L.length){L.push(Et),gt=Nt;break}else if(L[Nt]===null){L[Nt]=Et,gt=Nt;break}if(gt===-1)break}const Gt=U[gt];Gt&&Gt.connect(Et)}}const I=new Z,q=new Z;function X(V,dt,Et){I.setFromMatrixPosition(dt.matrixWorld),q.setFromMatrixPosition(Et.matrixWorld);const gt=I.distanceTo(q),Gt=dt.projectionMatrix.elements,Nt=Et.projectionMatrix.elements,$=Gt[14]/(Gt[10]-1),ye=Gt[14]/(Gt[10]+1),qt=(Gt[9]+1)/Gt[5],be=(Gt[9]-1)/Gt[5],It=(Gt[8]-1)/Gt[0],le=(Nt[8]+1)/Nt[0],ee=$*It,he=$*le,ze=gt/(-It+le),P=ze*-It;dt.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(P),V.translateZ(ze),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const R=$+ze,ft=ye+ze,xt=ee-P,Tt=he+(gt-P),yt=qt*ye/ft*R,Vt=be*ye/ft*R;V.projectionMatrix.makePerspective(xt,Tt,yt,Vt,R,ft),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function mt(V,dt){dt===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(dt.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(l===null)return;C.texture!==null&&(V.near=C.depthNear,V.far=C.depthFar),T.near=W.near=N.near=V.near,T.far=W.far=N.far=V.far,(k!==T.near||J!==T.far)&&(l.updateRenderState({depthNear:T.near,depthFar:T.far}),k=T.near,J=T.far,N.near=k,N.far=J,W.near=k,W.far=J,N.updateProjectionMatrix(),W.updateProjectionMatrix(),V.updateProjectionMatrix());const dt=V.parent,Et=T.cameras;mt(T,dt);for(let gt=0;gt<Et.length;gt++)mt(Et[gt],dt);Et.length===2?X(T,N,W):T.projectionMatrix.copy(N.projectionMatrix),lt(V,T,dt)};function lt(V,dt,Et){Et===null?V.matrix.copy(dt.matrixWorld):(V.matrix.copy(Et.matrixWorld),V.matrix.invert(),V.matrix.multiply(dt.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(dt.projectionMatrix),V.projectionMatrixInverse.copy(dt.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=wh*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(y===null&&M===null))return m},this.setFoveation=function(V){m=V,y!==null&&(y.fixedFoveation=V),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=V)},this.hasDepthSensing=function(){return C.texture!==null};let O=null;function it(V,dt){if(_=dt.getViewerPose(p||d),A=dt,_!==null){const Et=_.views;M!==null&&(e.setRenderTargetFramebuffer(z,M.framebuffer),e.setRenderTarget(z));let gt=!1;Et.length!==T.cameras.length&&(T.cameras.length=0,gt=!0);for(let Nt=0;Nt<Et.length;Nt++){const $=Et[Nt];let ye=null;if(M!==null)ye=M.getViewport($);else{const be=x.getViewSubImage(y,$);ye=be.viewport,Nt===0&&(e.setRenderTargetTextures(z,be.colorTexture,y.ignoreDepthValues?void 0:be.depthStencilTexture),e.setRenderTarget(z))}let qt=w[Nt];qt===void 0&&(qt=new Zn,qt.layers.enable(Nt),qt.viewport=new ke,w[Nt]=qt),qt.matrix.fromArray($.transform.matrix),qt.matrix.decompose(qt.position,qt.quaternion,qt.scale),qt.projectionMatrix.fromArray($.projectionMatrix),qt.projectionMatrixInverse.copy(qt.projectionMatrix).invert(),qt.viewport.set(ye.x,ye.y,ye.width,ye.height),Nt===0&&(T.matrix.copy(qt.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),gt===!0&&T.cameras.push(qt)}const Gt=l.enabledFeatures;if(Gt&&Gt.includes("depth-sensing")){const Nt=x.getDepthInformation(Et[0]);Nt&&Nt.isValid&&Nt.texture&&C.init(e,Nt,l.renderState)}}for(let Et=0;Et<U.length;Et++){const gt=L[Et],Gt=U[Et];gt!==null&&Gt!==void 0&&Gt.update(gt,dt,p||d)}C.render(e,T),O&&O(V,dt),dt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:dt}),A=null}const St=new z0;St.setAnimationLoop(it),this.setAnimationLoop=function(V){O=V},this.dispose=function(){}}}const ps=new Di,_1=new je;function v1(o,e){function i(S,v){S.matrixAutoUpdate===!0&&S.updateMatrix(),v.value.copy(S.matrix)}function s(S,v){v.color.getRGB(S.fogColor.value,L0(o)),v.isFog?(S.fogNear.value=v.near,S.fogFar.value=v.far):v.isFogExp2&&(S.fogDensity.value=v.density)}function l(S,v,z,U,L){v.isMeshBasicMaterial||v.isMeshLambertMaterial?u(S,v):v.isMeshToonMaterial?(u(S,v),x(S,v)):v.isMeshPhongMaterial?(u(S,v),_(S,v)):v.isMeshStandardMaterial?(u(S,v),y(S,v),v.isMeshPhysicalMaterial&&M(S,v,L)):v.isMeshMatcapMaterial?(u(S,v),A(S,v)):v.isMeshDepthMaterial?u(S,v):v.isMeshDistanceMaterial?(u(S,v),C(S,v)):v.isMeshNormalMaterial?u(S,v):v.isLineBasicMaterial?(d(S,v),v.isLineDashedMaterial&&h(S,v)):v.isPointsMaterial?m(S,v,z,U):v.isSpriteMaterial?p(S,v):v.isShadowMaterial?(S.color.value.copy(v.color),S.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function u(S,v){S.opacity.value=v.opacity,v.color&&S.diffuse.value.copy(v.color),v.emissive&&S.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(S.map.value=v.map,i(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,i(v.alphaMap,S.alphaMapTransform)),v.bumpMap&&(S.bumpMap.value=v.bumpMap,i(v.bumpMap,S.bumpMapTransform),S.bumpScale.value=v.bumpScale,v.side===In&&(S.bumpScale.value*=-1)),v.normalMap&&(S.normalMap.value=v.normalMap,i(v.normalMap,S.normalMapTransform),S.normalScale.value.copy(v.normalScale),v.side===In&&S.normalScale.value.negate()),v.displacementMap&&(S.displacementMap.value=v.displacementMap,i(v.displacementMap,S.displacementMapTransform),S.displacementScale.value=v.displacementScale,S.displacementBias.value=v.displacementBias),v.emissiveMap&&(S.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,S.emissiveMapTransform)),v.specularMap&&(S.specularMap.value=v.specularMap,i(v.specularMap,S.specularMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest);const z=e.get(v),U=z.envMap,L=z.envMapRotation;if(U&&(S.envMap.value=U,ps.copy(L),ps.x*=-1,ps.y*=-1,ps.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(ps.y*=-1,ps.z*=-1),S.envMapRotation.value.setFromMatrix4(_1.makeRotationFromEuler(ps)),S.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=v.reflectivity,S.ior.value=v.ior,S.refractionRatio.value=v.refractionRatio),v.lightMap){S.lightMap.value=v.lightMap;const Y=o._useLegacyLights===!0?Math.PI:1;S.lightMapIntensity.value=v.lightMapIntensity*Y,i(v.lightMap,S.lightMapTransform)}v.aoMap&&(S.aoMap.value=v.aoMap,S.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,S.aoMapTransform))}function d(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,v.map&&(S.map.value=v.map,i(v.map,S.mapTransform))}function h(S,v){S.dashSize.value=v.dashSize,S.totalSize.value=v.dashSize+v.gapSize,S.scale.value=v.scale}function m(S,v,z,U){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.size.value=v.size*z,S.scale.value=U*.5,v.map&&(S.map.value=v.map,i(v.map,S.uvTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,i(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function p(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.rotation.value=v.rotation,v.map&&(S.map.value=v.map,i(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,i(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function _(S,v){S.specular.value.copy(v.specular),S.shininess.value=Math.max(v.shininess,1e-4)}function x(S,v){v.gradientMap&&(S.gradientMap.value=v.gradientMap)}function y(S,v){S.metalness.value=v.metalness,v.metalnessMap&&(S.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,S.metalnessMapTransform)),S.roughness.value=v.roughness,v.roughnessMap&&(S.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,S.roughnessMapTransform)),v.envMap&&(S.envMapIntensity.value=v.envMapIntensity)}function M(S,v,z){S.ior.value=v.ior,v.sheen>0&&(S.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),S.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(S.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,S.sheenColorMapTransform)),v.sheenRoughnessMap&&(S.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,S.sheenRoughnessMapTransform))),v.clearcoat>0&&(S.clearcoat.value=v.clearcoat,S.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(S.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,S.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(S.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===In&&S.clearcoatNormalScale.value.negate())),v.dispersion>0&&(S.dispersion.value=v.dispersion),v.iridescence>0&&(S.iridescence.value=v.iridescence,S.iridescenceIOR.value=v.iridescenceIOR,S.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(S.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,S.iridescenceMapTransform)),v.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),v.transmission>0&&(S.transmission.value=v.transmission,S.transmissionSamplerMap.value=z.texture,S.transmissionSamplerSize.value.set(z.width,z.height),v.transmissionMap&&(S.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,S.transmissionMapTransform)),S.thickness.value=v.thickness,v.thicknessMap&&(S.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=v.attenuationDistance,S.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(S.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(S.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=v.specularIntensity,S.specularColor.value.copy(v.specularColor),v.specularColorMap&&(S.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,S.specularColorMapTransform)),v.specularIntensityMap&&(S.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,S.specularIntensityMapTransform))}function A(S,v){v.matcap&&(S.matcap.value=v.matcap)}function C(S,v){const z=e.get(v).light;S.referencePosition.value.setFromMatrixPosition(z.matrixWorld),S.nearDistance.value=z.shadow.camera.near,S.farDistance.value=z.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function x1(o,e,i,s){let l={},u={},d=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(z,U){const L=U.program;s.uniformBlockBinding(z,L)}function p(z,U){let L=l[z.id];L===void 0&&(A(z),L=_(z),l[z.id]=L,z.addEventListener("dispose",S));const Y=U.program;s.updateUBOMapping(z,Y);const F=e.render.frame;u[z.id]!==F&&(y(z),u[z.id]=F)}function _(z){const U=x();z.__bindingPointIndex=U;const L=o.createBuffer(),Y=z.__size,F=z.usage;return o.bindBuffer(o.UNIFORM_BUFFER,L),o.bufferData(o.UNIFORM_BUFFER,Y,F),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,U,L),L}function x(){for(let z=0;z<h;z++)if(d.indexOf(z)===-1)return d.push(z),z;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(z){const U=l[z.id],L=z.uniforms,Y=z.__cache;o.bindBuffer(o.UNIFORM_BUFFER,U);for(let F=0,N=L.length;F<N;F++){const W=Array.isArray(L[F])?L[F]:[L[F]];for(let w=0,T=W.length;w<T;w++){const k=W[w];if(M(k,F,w,Y)===!0){const J=k.__offset,H=Array.isArray(k.value)?k.value:[k.value];let ot=0;for(let ct=0;ct<H.length;ct++){const I=H[ct],q=C(I);typeof I=="number"||typeof I=="boolean"?(k.__data[0]=I,o.bufferSubData(o.UNIFORM_BUFFER,J+ot,k.__data)):I.isMatrix3?(k.__data[0]=I.elements[0],k.__data[1]=I.elements[1],k.__data[2]=I.elements[2],k.__data[3]=0,k.__data[4]=I.elements[3],k.__data[5]=I.elements[4],k.__data[6]=I.elements[5],k.__data[7]=0,k.__data[8]=I.elements[6],k.__data[9]=I.elements[7],k.__data[10]=I.elements[8],k.__data[11]=0):(I.toArray(k.__data,ot),ot+=q.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,J,k.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(z,U,L,Y){const F=z.value,N=U+"_"+L;if(Y[N]===void 0)return typeof F=="number"||typeof F=="boolean"?Y[N]=F:Y[N]=F.clone(),!0;{const W=Y[N];if(typeof F=="number"||typeof F=="boolean"){if(W!==F)return Y[N]=F,!0}else if(W.equals(F)===!1)return W.copy(F),!0}return!1}function A(z){const U=z.uniforms;let L=0;const Y=16;for(let N=0,W=U.length;N<W;N++){const w=Array.isArray(U[N])?U[N]:[U[N]];for(let T=0,k=w.length;T<k;T++){const J=w[T],H=Array.isArray(J.value)?J.value:[J.value];for(let ot=0,ct=H.length;ot<ct;ot++){const I=H[ot],q=C(I),X=L%Y;X!==0&&Y-X<q.boundary&&(L+=Y-X),J.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=L,L+=q.storage}}}const F=L%Y;return F>0&&(L+=Y-F),z.__size=L,z.__cache={},this}function C(z){const U={boundary:0,storage:0};return typeof z=="number"||typeof z=="boolean"?(U.boundary=4,U.storage=4):z.isVector2?(U.boundary=8,U.storage=8):z.isVector3||z.isColor?(U.boundary=16,U.storage=12):z.isVector4?(U.boundary=16,U.storage=16):z.isMatrix3?(U.boundary=48,U.storage=48):z.isMatrix4?(U.boundary=64,U.storage=64):z.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",z),U}function S(z){const U=z.target;U.removeEventListener("dispose",S);const L=d.indexOf(U.__bindingPointIndex);d.splice(L,1),o.deleteBuffer(l[U.id]),delete l[U.id],delete u[U.id]}function v(){for(const z in l)o.deleteBuffer(l[z]);d=[],l={},u={}}return{bind:m,update:p,dispose:v}}class y1{constructor(e={}){const{canvas:i=hS(),context:s=null,depth:l=!0,stencil:u=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:x=!1}=e;this.isWebGLRenderer=!0;let y;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=s.getContextAttributes().alpha}else y=d;const M=new Uint32Array(4),A=new Int32Array(4);let C=null,S=null;const v=[],z=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=bi,this._useLegacyLights=!1,this.toneMapping=Ha,this.toneMappingExposure=1;const U=this;let L=!1,Y=0,F=0,N=null,W=-1,w=null;const T=new ke,k=new ke;let J=null;const H=new Se(0);let ot=0,ct=i.width,I=i.height,q=1,X=null,mt=null;const lt=new ke(0,0,ct,I),O=new ke(0,0,ct,I);let it=!1;const St=new Ph;let V=!1,dt=!1;const Et=new je,gt=new Z,Gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Nt(){return N===null?q:1}let $=s;function ye(D,Q){return i.getContext(D,Q)}try{const D={alpha:!0,depth:l,stencil:u,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Nh}`),i.addEventListener("webglcontextlost",E,!1),i.addEventListener("webglcontextrestored",K,!1),i.addEventListener("webglcontextcreationerror",nt,!1),$===null){const Q="webgl2";if($=ye(Q,D),$===null)throw ye(Q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let qt,be,It,le,ee,he,ze,P,R,ft,xt,Tt,yt,Vt,wt,Ct,Kt,At,Ft,de,Yt,Ut,Xt,Jt;function se(){qt=new CT($),qt.init(),Ut=new u1($,qt),be=new MT($,qt,e,Ut),It=new l1($),le=new UT($),ee=new jb,he=new c1($,qt,It,ee,be,Ut,le),ze=new TT(U),P=new RT(U),R=new IS($),Xt=new yT($,R),ft=new wT($,R,le,Xt),xt=new NT($,ft,R,le),Ft=new LT($,be,he),Ct=new ET(ee),Tt=new Yb(U,ze,P,qt,be,Xt,Ct),yt=new v1(U,ee),Vt=new Kb,wt=new n1(qt),At=new xT(U,ze,P,It,xt,y,m),Kt=new o1(U,xt,be),Jt=new x1($,le,be,It),de=new ST($,qt,le),Yt=new DT($,qt,le),le.programs=Tt.programs,U.capabilities=be,U.extensions=qt,U.properties=ee,U.renderLists=Vt,U.shadowMap=Kt,U.state=It,U.info=le}se();const re=new g1(U,$);this.xr=re,this.getContext=function(){return $},this.getContextAttributes=function(){return $.getContextAttributes()},this.forceContextLoss=function(){const D=qt.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=qt.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(D){D!==void 0&&(q=D,this.setSize(ct,I,!1))},this.getSize=function(D){return D.set(ct,I)},this.setSize=function(D,Q,ht=!0){if(re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ct=D,I=Q,i.width=Math.floor(D*q),i.height=Math.floor(Q*q),ht===!0&&(i.style.width=D+"px",i.style.height=Q+"px"),this.setViewport(0,0,D,Q)},this.getDrawingBufferSize=function(D){return D.set(ct*q,I*q).floor()},this.setDrawingBufferSize=function(D,Q,ht){ct=D,I=Q,q=ht,i.width=Math.floor(D*ht),i.height=Math.floor(Q*ht),this.setViewport(0,0,D,Q)},this.getCurrentViewport=function(D){return D.copy(T)},this.getViewport=function(D){return D.copy(lt)},this.setViewport=function(D,Q,ht,rt){D.isVector4?lt.set(D.x,D.y,D.z,D.w):lt.set(D,Q,ht,rt),It.viewport(T.copy(lt).multiplyScalar(q).round())},this.getScissor=function(D){return D.copy(O)},this.setScissor=function(D,Q,ht,rt){D.isVector4?O.set(D.x,D.y,D.z,D.w):O.set(D,Q,ht,rt),It.scissor(k.copy(O).multiplyScalar(q).round())},this.getScissorTest=function(){return it},this.setScissorTest=function(D){It.setScissorTest(it=D)},this.setOpaqueSort=function(D){X=D},this.setTransparentSort=function(D){mt=D},this.getClearColor=function(D){return D.copy(At.getClearColor())},this.setClearColor=function(){At.setClearColor.apply(At,arguments)},this.getClearAlpha=function(){return At.getClearAlpha()},this.setClearAlpha=function(){At.setClearAlpha.apply(At,arguments)},this.clear=function(D=!0,Q=!0,ht=!0){let rt=0;if(D){let st=!1;if(N!==null){const Rt=N.texture.format;st=Rt===y0||Rt===x0||Rt===v0}if(st){const Rt=N.texture.type,Pt=Rt===Va||Rt===Rr||Rt===p0||Rt===Uo||Rt===g0||Rt===_0,zt=At.getClearColor(),kt=At.getClearAlpha(),Qt=zt.r,$t=zt.g,Ht=zt.b;Pt?(M[0]=Qt,M[1]=$t,M[2]=Ht,M[3]=kt,$.clearBufferuiv($.COLOR,0,M)):(A[0]=Qt,A[1]=$t,A[2]=Ht,A[3]=kt,$.clearBufferiv($.COLOR,0,A))}else rt|=$.COLOR_BUFFER_BIT}Q&&(rt|=$.DEPTH_BUFFER_BIT),ht&&(rt|=$.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$.clear(rt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",E,!1),i.removeEventListener("webglcontextrestored",K,!1),i.removeEventListener("webglcontextcreationerror",nt,!1),Vt.dispose(),wt.dispose(),ee.dispose(),ze.dispose(),P.dispose(),xt.dispose(),Xt.dispose(),Jt.dispose(),Tt.dispose(),re.dispose(),re.removeEventListener("sessionstart",ve),re.removeEventListener("sessionend",Ge),Ae.stop()};function E(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function K(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const D=le.autoReset,Q=Kt.enabled,ht=Kt.autoUpdate,rt=Kt.needsUpdate,st=Kt.type;se(),le.autoReset=D,Kt.enabled=Q,Kt.autoUpdate=ht,Kt.needsUpdate=rt,Kt.type=st}function nt(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function Mt(D){const Q=D.target;Q.removeEventListener("dispose",Mt),bt(Q)}function bt(D){Zt(D),ee.remove(D)}function Zt(D){const Q=ee.get(D).programs;Q!==void 0&&(Q.forEach(function(ht){Tt.releaseProgram(ht)}),D.isShaderMaterial&&Tt.releaseShaderCache(D))}this.renderBufferDirect=function(D,Q,ht,rt,st,Rt){Q===null&&(Q=Gt);const Pt=st.isMesh&&st.matrixWorld.determinant()<0,zt=xi(D,Q,ht,rt,st);It.setMaterial(rt,Pt);let kt=ht.index,Qt=1;if(rt.wireframe===!0){if(kt=ft.getWireframeAttribute(ht),kt===void 0)return;Qt=2}const $t=ht.drawRange,Ht=ht.attributes.position;let We=$t.start*Qt,rn=($t.start+$t.count)*Qt;Rt!==null&&(We=Math.max(We,Rt.start*Qt),rn=Math.min(rn,(Rt.start+Rt.count)*Qt)),kt!==null?(We=Math.max(We,0),rn=Math.min(rn,kt.count)):Ht!=null&&(We=Math.max(We,0),rn=Math.min(rn,Ht.count));const Ze=rn-We;if(Ze<0||Ze===1/0)return;Xt.setup(st,rt,zt,ht,kt);let vn,Me=de;if(kt!==null&&(vn=R.get(kt),Me=Yt,Me.setIndex(vn)),st.isMesh)rt.wireframe===!0?(It.setLineWidth(rt.wireframeLinewidth*Nt()),Me.setMode($.LINES)):Me.setMode($.TRIANGLES);else if(st.isLine){let ne=rt.linewidth;ne===void 0&&(ne=1),It.setLineWidth(ne*Nt()),st.isLineSegments?Me.setMode($.LINES):st.isLineLoop?Me.setMode($.LINE_LOOP):Me.setMode($.LINE_STRIP)}else st.isPoints?Me.setMode($.POINTS):st.isSprite&&Me.setMode($.TRIANGLES);if(st.isBatchedMesh)st._multiDrawInstances!==null?Me.renderMultiDrawInstances(st._multiDrawStarts,st._multiDrawCounts,st._multiDrawCount,st._multiDrawInstances):Me.renderMultiDraw(st._multiDrawStarts,st._multiDrawCounts,st._multiDrawCount);else if(st.isInstancedMesh)Me.renderInstances(We,Ze,st.count);else if(ht.isInstancedBufferGeometry){const ne=ht._maxInstanceCount!==void 0?ht._maxInstanceCount:1/0,sa=Math.min(ht.instanceCount,ne);Me.renderInstances(We,Ze,sa)}else Me.render(We,Ze)};function ae(D,Q,ht){D.transparent===!0&&D.side===ea&&D.forceSinglePass===!1?(D.side=In,D.needsUpdate=!0,aa(D,Q,ht),D.side=Ga,D.needsUpdate=!0,aa(D,Q,ht),D.side=ea):aa(D,Q,ht)}this.compile=function(D,Q,ht=null){ht===null&&(ht=D),S=wt.get(ht),S.init(Q),z.push(S),ht.traverseVisible(function(st){st.isLight&&st.layers.test(Q.layers)&&(S.pushLight(st),st.castShadow&&S.pushShadow(st))}),D!==ht&&D.traverseVisible(function(st){st.isLight&&st.layers.test(Q.layers)&&(S.pushLight(st),st.castShadow&&S.pushShadow(st))}),S.setupLights(U._useLegacyLights);const rt=new Set;return D.traverse(function(st){const Rt=st.material;if(Rt)if(Array.isArray(Rt))for(let Pt=0;Pt<Rt.length;Pt++){const zt=Rt[Pt];ae(zt,ht,st),rt.add(zt)}else ae(Rt,ht,st),rt.add(Rt)}),z.pop(),S=null,rt},this.compileAsync=function(D,Q,ht=null){const rt=this.compile(D,Q,ht);return new Promise(st=>{function Rt(){if(rt.forEach(function(Pt){ee.get(Pt).currentProgram.isReady()&&rt.delete(Pt)}),rt.size===0){st(D);return}setTimeout(Rt,10)}qt.get("KHR_parallel_shader_compile")!==null?Rt():setTimeout(Rt,10)})};let Ce=null;function Je(D){Ce&&Ce(D)}function ve(){Ae.stop()}function Ge(){Ae.start()}const Ae=new z0;Ae.setAnimationLoop(Je),typeof self<"u"&&Ae.setContext(self),this.setAnimationLoop=function(D){Ce=D,re.setAnimationLoop(D),D===null?Ae.stop():Ae.start()},re.addEventListener("sessionstart",ve),re.addEventListener("sessionend",Ge),this.render=function(D,Q){if(Q!==void 0&&Q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Q.parent===null&&Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(re.cameraAutoUpdate===!0&&re.updateCamera(Q),Q=re.getCamera()),D.isScene===!0&&D.onBeforeRender(U,D,Q,N),S=wt.get(D,z.length),S.init(Q),z.push(S),Et.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),St.setFromProjectionMatrix(Et),dt=this.localClippingEnabled,V=Ct.init(this.clippingPlanes,dt),C=Vt.get(D,v.length),C.init(),v.push(C),vi(D,Q,0,U.sortObjects),C.finish(),U.sortObjects===!0&&C.sort(X,mt);const ht=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1;ht&&At.addToRenderList(C,D),this.info.render.frame++,V===!0&&Ct.beginShadows();const rt=S.state.shadowsArray;Kt.render(rt,D,Q),V===!0&&Ct.endShadows(),this.info.autoReset===!0&&this.info.reset();const st=C.opaque,Rt=C.transmissive;if(S.setupLights(U._useLegacyLights),Q.isArrayCamera){const Pt=Q.cameras;if(Rt.length>0)for(let zt=0,kt=Pt.length;zt<kt;zt++){const Qt=Pt[zt];ui(st,Rt,D,Qt)}ht&&At.render(D);for(let zt=0,kt=Pt.length;zt<kt;zt++){const Qt=Pt[zt];Tn(C,D,Qt,Qt.viewport)}}else Rt.length>0&&ui(st,Rt,D,Q),ht&&At.render(D),Tn(C,D,Q);N!==null&&(he.updateMultisampleRenderTarget(N),he.updateRenderTargetMipmap(N)),D.isScene===!0&&D.onAfterRender(U,D,Q),Xt.resetDefaultState(),W=-1,w=null,z.pop(),z.length>0?(S=z[z.length-1],V===!0&&Ct.setGlobalState(U.clippingPlanes,S.state.camera)):S=null,v.pop(),v.length>0?C=v[v.length-1]:C=null};function vi(D,Q,ht,rt){if(D.visible===!1)return;if(D.layers.test(Q.layers)){if(D.isGroup)ht=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(Q);else if(D.isLight)S.pushLight(D),D.castShadow&&S.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||St.intersectsSprite(D)){rt&&gt.setFromMatrixPosition(D.matrixWorld).applyMatrix4(Et);const Pt=xt.update(D),zt=D.material;zt.visible&&C.push(D,Pt,zt,ht,gt.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||St.intersectsObject(D))){const Pt=xt.update(D),zt=D.material;if(rt&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),gt.copy(D.boundingSphere.center)):(Pt.boundingSphere===null&&Pt.computeBoundingSphere(),gt.copy(Pt.boundingSphere.center)),gt.applyMatrix4(D.matrixWorld).applyMatrix4(Et)),Array.isArray(zt)){const kt=Pt.groups;for(let Qt=0,$t=kt.length;Qt<$t;Qt++){const Ht=kt[Qt],We=zt[Ht.materialIndex];We&&We.visible&&C.push(D,Pt,We,ht,gt.z,Ht)}}else zt.visible&&C.push(D,Pt,zt,ht,gt.z,null)}}const Rt=D.children;for(let Pt=0,zt=Rt.length;Pt<zt;Pt++)vi(Rt[Pt],Q,ht,rt)}function Tn(D,Q,ht,rt){const st=D.opaque,Rt=D.transmissive,Pt=D.transparent;S.setupLightsView(ht),V===!0&&Ct.setGlobalState(U.clippingPlanes,ht),rt&&It.viewport(T.copy(rt)),st.length>0&&Jn(st,Q,ht),Rt.length>0&&Jn(Rt,Q,ht),Pt.length>0&&Jn(Pt,Q,ht),It.buffers.depth.setTest(!0),It.buffers.depth.setMask(!0),It.buffers.color.setMask(!0),It.setPolygonOffset(!1)}function ui(D,Q,ht,rt){if((ht.isScene===!0?ht.overrideMaterial:null)!==null)return;S.state.transmissionRenderTarget[rt.id]===void 0&&(S.state.transmissionRenderTarget[rt.id]=new ys(1,1,{generateMipmaps:!0,type:qt.has("EXT_color_buffer_half_float")||qt.has("EXT_color_buffer_float")?bc:Va,minFilter:xs,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1}));const Rt=S.state.transmissionRenderTarget[rt.id],Pt=rt.viewport||T;Rt.setSize(Pt.z,Pt.w);const zt=U.getRenderTarget();U.setRenderTarget(Rt),U.getClearColor(H),ot=U.getClearAlpha(),ot<1&&U.setClearColor(16777215,.5),U.clear();const kt=U.toneMapping;U.toneMapping=Ha;const Qt=rt.viewport;if(rt.viewport!==void 0&&(rt.viewport=void 0),S.setupLightsView(rt),V===!0&&Ct.setGlobalState(U.clippingPlanes,rt),Jn(D,ht,rt),he.updateMultisampleRenderTarget(Rt),he.updateRenderTargetMipmap(Rt),qt.has("WEBGL_multisampled_render_to_texture")===!1){let $t=!1;for(let Ht=0,We=Q.length;Ht<We;Ht++){const rn=Q[Ht],Ze=rn.object,vn=rn.geometry,Me=rn.material,ne=rn.group;if(Me.side===ea&&Ze.layers.test(rt.layers)){const sa=Me.side;Me.side=In,Me.needsUpdate=!0,Ui(Ze,ht,rt,vn,Me,ne),Me.side=sa,Me.needsUpdate=!0,$t=!0}}$t===!0&&(he.updateMultisampleRenderTarget(Rt),he.updateRenderTargetMipmap(Rt))}U.setRenderTarget(zt),U.setClearColor(H,ot),Qt!==void 0&&(rt.viewport=Qt),U.toneMapping=kt}function Jn(D,Q,ht){const rt=Q.isScene===!0?Q.overrideMaterial:null;for(let st=0,Rt=D.length;st<Rt;st++){const Pt=D[st],zt=Pt.object,kt=Pt.geometry,Qt=rt===null?Pt.material:rt,$t=Pt.group;zt.layers.test(ht.layers)&&Ui(zt,Q,ht,kt,Qt,$t)}}function Ui(D,Q,ht,rt,st,Rt){D.onBeforeRender(U,Q,ht,rt,st,Rt),D.modelViewMatrix.multiplyMatrices(ht.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),st.onBeforeRender(U,Q,ht,rt,D,Rt),st.transparent===!0&&st.side===ea&&st.forceSinglePass===!1?(st.side=In,st.needsUpdate=!0,U.renderBufferDirect(ht,Q,rt,st,D,Rt),st.side=Ga,st.needsUpdate=!0,U.renderBufferDirect(ht,Q,rt,st,D,Rt),st.side=ea):U.renderBufferDirect(ht,Q,rt,st,D,Rt),D.onAfterRender(U,Q,ht,rt,st,Rt)}function aa(D,Q,ht){Q.isScene!==!0&&(Q=Gt);const rt=ee.get(D),st=S.state.lights,Rt=S.state.shadowsArray,Pt=st.state.version,zt=Tt.getParameters(D,st.state,Rt,Q,ht),kt=Tt.getProgramCacheKey(zt);let Qt=rt.programs;rt.environment=D.isMeshStandardMaterial?Q.environment:null,rt.fog=Q.fog,rt.envMap=(D.isMeshStandardMaterial?P:ze).get(D.envMap||rt.environment),rt.envMapRotation=rt.environment!==null&&D.envMap===null?Q.environmentRotation:D.envMapRotation,Qt===void 0&&(D.addEventListener("dispose",Mt),Qt=new Map,rt.programs=Qt);let $t=Qt.get(kt);if($t!==void 0){if(rt.currentProgram===$t&&rt.lightsStateVersion===Pt)return Lr(D,zt),$t}else zt.uniforms=Tt.getUniforms(D),D.onBuild(ht,zt,U),D.onBeforeCompile(zt,U),$t=Tt.acquireProgram(zt,kt),Qt.set(kt,$t),rt.uniforms=zt.uniforms;const Ht=rt.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(Ht.clippingPlanes=Ct.uniform),Lr(D,zt),rt.needsLights=_n(D),rt.lightsStateVersion=Pt,rt.needsLights&&(Ht.ambientLightColor.value=st.state.ambient,Ht.lightProbe.value=st.state.probe,Ht.directionalLights.value=st.state.directional,Ht.directionalLightShadows.value=st.state.directionalShadow,Ht.spotLights.value=st.state.spot,Ht.spotLightShadows.value=st.state.spotShadow,Ht.rectAreaLights.value=st.state.rectArea,Ht.ltc_1.value=st.state.rectAreaLTC1,Ht.ltc_2.value=st.state.rectAreaLTC2,Ht.pointLights.value=st.state.point,Ht.pointLightShadows.value=st.state.pointShadow,Ht.hemisphereLights.value=st.state.hemi,Ht.directionalShadowMap.value=st.state.directionalShadowMap,Ht.directionalShadowMatrix.value=st.state.directionalShadowMatrix,Ht.spotShadowMap.value=st.state.spotShadowMap,Ht.spotLightMatrix.value=st.state.spotLightMatrix,Ht.spotLightMap.value=st.state.spotLightMap,Ht.pointShadowMap.value=st.state.pointShadowMap,Ht.pointShadowMatrix.value=st.state.pointShadowMatrix),rt.currentProgram=$t,rt.uniformsList=null,$t}function Ur(D){if(D.uniformsList===null){const Q=D.currentProgram.getUniforms();D.uniformsList=_c.seqWithValue(Q.seq,D.uniforms)}return D.uniformsList}function Lr(D,Q){const ht=ee.get(D);ht.outputColorSpace=Q.outputColorSpace,ht.batching=Q.batching,ht.instancing=Q.instancing,ht.instancingColor=Q.instancingColor,ht.instancingMorph=Q.instancingMorph,ht.skinning=Q.skinning,ht.morphTargets=Q.morphTargets,ht.morphNormals=Q.morphNormals,ht.morphColors=Q.morphColors,ht.morphTargetsCount=Q.morphTargetsCount,ht.numClippingPlanes=Q.numClippingPlanes,ht.numIntersection=Q.numClipIntersection,ht.vertexAlphas=Q.vertexAlphas,ht.vertexTangents=Q.vertexTangents,ht.toneMapping=Q.toneMapping}function xi(D,Q,ht,rt,st){Q.isScene!==!0&&(Q=Gt),he.resetTextureUnits();const Rt=Q.fog,Pt=rt.isMeshStandardMaterial?Q.environment:null,zt=N===null?U.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:ka,kt=(rt.isMeshStandardMaterial?P:ze).get(rt.envMap||Pt),Qt=rt.vertexColors===!0&&!!ht.attributes.color&&ht.attributes.color.itemSize===4,$t=!!ht.attributes.tangent&&(!!rt.normalMap||rt.anisotropy>0),Ht=!!ht.morphAttributes.position,We=!!ht.morphAttributes.normal,rn=!!ht.morphAttributes.color;let Ze=Ha;rt.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Ze=U.toneMapping);const vn=ht.morphAttributes.position||ht.morphAttributes.normal||ht.morphAttributes.color,Me=vn!==void 0?vn.length:0,ne=ee.get(rt),sa=S.state.lights;if(V===!0&&(dt===!0||D!==w)){const An=D===w&&rt.id===W;Ct.setState(rt,D,An)}let Be=!1;rt.version===ne.__version?(ne.needsLights&&ne.lightsStateVersion!==sa.state.version||ne.outputColorSpace!==zt||st.isBatchedMesh&&ne.batching===!1||!st.isBatchedMesh&&ne.batching===!0||st.isInstancedMesh&&ne.instancing===!1||!st.isInstancedMesh&&ne.instancing===!0||st.isSkinnedMesh&&ne.skinning===!1||!st.isSkinnedMesh&&ne.skinning===!0||st.isInstancedMesh&&ne.instancingColor===!0&&st.instanceColor===null||st.isInstancedMesh&&ne.instancingColor===!1&&st.instanceColor!==null||st.isInstancedMesh&&ne.instancingMorph===!0&&st.morphTexture===null||st.isInstancedMesh&&ne.instancingMorph===!1&&st.morphTexture!==null||ne.envMap!==kt||rt.fog===!0&&ne.fog!==Rt||ne.numClippingPlanes!==void 0&&(ne.numClippingPlanes!==Ct.numPlanes||ne.numIntersection!==Ct.numIntersection)||ne.vertexAlphas!==Qt||ne.vertexTangents!==$t||ne.morphTargets!==Ht||ne.morphNormals!==We||ne.morphColors!==rn||ne.toneMapping!==Ze||ne.morphTargetsCount!==Me)&&(Be=!0):(Be=!0,ne.__version=rt.version);let $n=ne.currentProgram;Be===!0&&($n=aa(rt,Q,st));let Wa=!1,bn=!1,xn=!1;const on=$n.getUniforms(),yi=ne.uniforms;if(It.useProgram($n.program)&&(Wa=!0,bn=!0,xn=!0),rt.id!==W&&(W=rt.id,bn=!0),Wa||w!==D){on.setValue($,"projectionMatrix",D.projectionMatrix),on.setValue($,"viewMatrix",D.matrixWorldInverse);const An=on.map.cameraPosition;An!==void 0&&An.setValue($,gt.setFromMatrixPosition(D.matrixWorld)),be.logarithmicDepthBuffer&&on.setValue($,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(rt.isMeshPhongMaterial||rt.isMeshToonMaterial||rt.isMeshLambertMaterial||rt.isMeshBasicMaterial||rt.isMeshStandardMaterial||rt.isShaderMaterial)&&on.setValue($,"isOrthographic",D.isOrthographicCamera===!0),w!==D&&(w=D,bn=!0,xn=!0)}if(st.isSkinnedMesh){on.setOptional($,st,"bindMatrix"),on.setOptional($,st,"bindMatrixInverse");const An=st.skeleton;An&&(An.boneTexture===null&&An.computeBoneTexture(),on.setValue($,"boneTexture",An.boneTexture,he))}st.isBatchedMesh&&(on.setOptional($,st,"batchingTexture"),on.setValue($,"batchingTexture",st._matricesTexture,he));const qa=ht.morphAttributes;if((qa.position!==void 0||qa.normal!==void 0||qa.color!==void 0)&&Ft.update(st,ht,$n),(bn||ne.receiveShadow!==st.receiveShadow)&&(ne.receiveShadow=st.receiveShadow,on.setValue($,"receiveShadow",st.receiveShadow)),rt.isMeshGouraudMaterial&&rt.envMap!==null&&(yi.envMap.value=kt,yi.flipEnvMap.value=kt.isCubeTexture&&kt.isRenderTargetTexture===!1?-1:1),rt.isMeshStandardMaterial&&rt.envMap===null&&Q.environment!==null&&(yi.envMapIntensity.value=Q.environmentIntensity),bn&&(on.setValue($,"toneMappingExposure",U.toneMappingExposure),ne.needsLights&&sn(yi,xn),Rt&&rt.fog===!0&&yt.refreshFogUniforms(yi,Rt),yt.refreshMaterialUniforms(yi,rt,q,I,S.state.transmissionRenderTarget[D.id]),_c.upload($,Ur(ne),yi,he)),rt.isShaderMaterial&&rt.uniformsNeedUpdate===!0&&(_c.upload($,Ur(ne),yi,he),rt.uniformsNeedUpdate=!1),rt.isSpriteMaterial&&on.setValue($,"center",st.center),on.setValue($,"modelViewMatrix",st.modelViewMatrix),on.setValue($,"normalMatrix",st.normalMatrix),on.setValue($,"modelMatrix",st.matrixWorld),rt.isShaderMaterial||rt.isRawShaderMaterial){const An=rt.uniformsGroups;for(let ra=0,Cc=An.length;ra<Cc;ra++){const Rn=An[ra];Jt.update(Rn,$n),Jt.bind(Rn,$n)}}return $n}function sn(D,Q){D.ambientLightColor.needsUpdate=Q,D.lightProbe.needsUpdate=Q,D.directionalLights.needsUpdate=Q,D.directionalLightShadows.needsUpdate=Q,D.pointLights.needsUpdate=Q,D.pointLightShadows.needsUpdate=Q,D.spotLights.needsUpdate=Q,D.spotLightShadows.needsUpdate=Q,D.rectAreaLights.needsUpdate=Q,D.hemisphereLights.needsUpdate=Q}function _n(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(D,Q,ht){ee.get(D.texture).__webglTexture=Q,ee.get(D.depthTexture).__webglTexture=ht;const rt=ee.get(D);rt.__hasExternalTextures=!0,rt.__autoAllocateDepthBuffer=ht===void 0,rt.__autoAllocateDepthBuffer||qt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),rt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(D,Q){const ht=ee.get(D);ht.__webglFramebuffer=Q,ht.__useDefaultFramebuffer=Q===void 0},this.setRenderTarget=function(D,Q=0,ht=0){N=D,Y=Q,F=ht;let rt=!0,st=null,Rt=!1,Pt=!1;if(D){const kt=ee.get(D);kt.__useDefaultFramebuffer!==void 0?(It.bindFramebuffer($.FRAMEBUFFER,null),rt=!1):kt.__webglFramebuffer===void 0?he.setupRenderTarget(D):kt.__hasExternalTextures&&he.rebindTextures(D,ee.get(D.texture).__webglTexture,ee.get(D.depthTexture).__webglTexture);const Qt=D.texture;(Qt.isData3DTexture||Qt.isDataArrayTexture||Qt.isCompressedArrayTexture)&&(Pt=!0);const $t=ee.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray($t[Q])?st=$t[Q][ht]:st=$t[Q],Rt=!0):D.samples>0&&he.useMultisampledRTT(D)===!1?st=ee.get(D).__webglMultisampledFramebuffer:Array.isArray($t)?st=$t[ht]:st=$t,T.copy(D.viewport),k.copy(D.scissor),J=D.scissorTest}else T.copy(lt).multiplyScalar(q).floor(),k.copy(O).multiplyScalar(q).floor(),J=it;if(It.bindFramebuffer($.FRAMEBUFFER,st)&&rt&&It.drawBuffers(D,st),It.viewport(T),It.scissor(k),It.setScissorTest(J),Rt){const kt=ee.get(D.texture);$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_CUBE_MAP_POSITIVE_X+Q,kt.__webglTexture,ht)}else if(Pt){const kt=ee.get(D.texture),Qt=Q||0;$.framebufferTextureLayer($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,kt.__webglTexture,ht||0,Qt)}W=-1},this.readRenderTargetPixels=function(D,Q,ht,rt,st,Rt,Pt){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let zt=ee.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Pt!==void 0&&(zt=zt[Pt]),zt){It.bindFramebuffer($.FRAMEBUFFER,zt);try{const kt=D.texture,Qt=kt.format,$t=kt.type;if(!be.textureFormatReadable(Qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!be.textureTypeReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Q>=0&&Q<=D.width-rt&&ht>=0&&ht<=D.height-st&&$.readPixels(Q,ht,rt,st,Ut.convert(Qt),Ut.convert($t),Rt)}finally{const kt=N!==null?ee.get(N).__webglFramebuffer:null;It.bindFramebuffer($.FRAMEBUFFER,kt)}}},this.copyFramebufferToTexture=function(D,Q,ht=0){const rt=Math.pow(2,-ht),st=Math.floor(Q.image.width*rt),Rt=Math.floor(Q.image.height*rt);he.setTexture2D(Q,0),$.copyTexSubImage2D($.TEXTURE_2D,ht,0,0,D.x,D.y,st,Rt),It.unbindTexture()},this.copyTextureToTexture=function(D,Q,ht,rt=0){const st=Q.image.width,Rt=Q.image.height,Pt=Ut.convert(ht.format),zt=Ut.convert(ht.type);he.setTexture2D(ht,0),$.pixelStorei($.UNPACK_FLIP_Y_WEBGL,ht.flipY),$.pixelStorei($.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ht.premultiplyAlpha),$.pixelStorei($.UNPACK_ALIGNMENT,ht.unpackAlignment),Q.isDataTexture?$.texSubImage2D($.TEXTURE_2D,rt,D.x,D.y,st,Rt,Pt,zt,Q.image.data):Q.isCompressedTexture?$.compressedTexSubImage2D($.TEXTURE_2D,rt,D.x,D.y,Q.mipmaps[0].width,Q.mipmaps[0].height,Pt,Q.mipmaps[0].data):$.texSubImage2D($.TEXTURE_2D,rt,D.x,D.y,Pt,zt,Q.image),rt===0&&ht.generateMipmaps&&$.generateMipmap($.TEXTURE_2D),It.unbindTexture()},this.copyTextureToTexture3D=function(D,Q,ht,rt,st=0){const Rt=D.max.x-D.min.x,Pt=D.max.y-D.min.y,zt=D.max.z-D.min.z,kt=Ut.convert(rt.format),Qt=Ut.convert(rt.type);let $t;if(rt.isData3DTexture)he.setTexture3D(rt,0),$t=$.TEXTURE_3D;else if(rt.isDataArrayTexture||rt.isCompressedArrayTexture)he.setTexture2DArray(rt,0),$t=$.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}$.pixelStorei($.UNPACK_FLIP_Y_WEBGL,rt.flipY),$.pixelStorei($.UNPACK_PREMULTIPLY_ALPHA_WEBGL,rt.premultiplyAlpha),$.pixelStorei($.UNPACK_ALIGNMENT,rt.unpackAlignment);const Ht=$.getParameter($.UNPACK_ROW_LENGTH),We=$.getParameter($.UNPACK_IMAGE_HEIGHT),rn=$.getParameter($.UNPACK_SKIP_PIXELS),Ze=$.getParameter($.UNPACK_SKIP_ROWS),vn=$.getParameter($.UNPACK_SKIP_IMAGES),Me=ht.isCompressedTexture?ht.mipmaps[st]:ht.image;$.pixelStorei($.UNPACK_ROW_LENGTH,Me.width),$.pixelStorei($.UNPACK_IMAGE_HEIGHT,Me.height),$.pixelStorei($.UNPACK_SKIP_PIXELS,D.min.x),$.pixelStorei($.UNPACK_SKIP_ROWS,D.min.y),$.pixelStorei($.UNPACK_SKIP_IMAGES,D.min.z),ht.isDataTexture||ht.isData3DTexture?$.texSubImage3D($t,st,Q.x,Q.y,Q.z,Rt,Pt,zt,kt,Qt,Me.data):rt.isCompressedArrayTexture?$.compressedTexSubImage3D($t,st,Q.x,Q.y,Q.z,Rt,Pt,zt,kt,Me.data):$.texSubImage3D($t,st,Q.x,Q.y,Q.z,Rt,Pt,zt,kt,Qt,Me),$.pixelStorei($.UNPACK_ROW_LENGTH,Ht),$.pixelStorei($.UNPACK_IMAGE_HEIGHT,We),$.pixelStorei($.UNPACK_SKIP_PIXELS,rn),$.pixelStorei($.UNPACK_SKIP_ROWS,Ze),$.pixelStorei($.UNPACK_SKIP_IMAGES,vn),st===0&&rt.generateMipmaps&&$.generateMipmap($t),It.unbindTexture()},this.initTexture=function(D){D.isCubeTexture?he.setTextureCube(D,0):D.isData3DTexture?he.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?he.setTexture2DArray(D,0):he.setTexture2D(D,0),It.unbindTexture()},this.resetState=function(){Y=0,F=0,N=null,It.reset(),Xt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return na}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=e===Oh?"display-p3":"srgb",i.unpackColorSpace=Oe.workingColorSpace===Ac?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Ih{constructor(e,i=1,s=1e3){this.isFog=!0,this.name="",this.color=new Se(e),this.near=i,this.far=s}clone(){return new Ih(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class S1 extends En{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Di,this.environmentIntensity=1,this.environmentRotation=new Di,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class Fh extends ia{constructor(e=1,i=1,s=1,l=32,u=1,d=!1,h=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:i,height:s,radialSegments:l,heightSegments:u,openEnded:d,thetaStart:h,thetaLength:m};const p=this;l=Math.floor(l),u=Math.floor(u);const _=[],x=[],y=[],M=[];let A=0;const C=[],S=s/2;let v=0;z(),d===!1&&(e>0&&U(!0),i>0&&U(!1)),this.setIndex(_),this.setAttribute("position",new Qn(x,3)),this.setAttribute("normal",new Qn(y,3)),this.setAttribute("uv",new Qn(M,2));function z(){const L=new Z,Y=new Z;let F=0;const N=(i-e)/s;for(let W=0;W<=u;W++){const w=[],T=W/u,k=T*(i-e)+e;for(let J=0;J<=l;J++){const H=J/l,ot=H*m+h,ct=Math.sin(ot),I=Math.cos(ot);Y.x=k*ct,Y.y=-T*s+S,Y.z=k*I,x.push(Y.x,Y.y,Y.z),L.set(ct,N,I).normalize(),y.push(L.x,L.y,L.z),M.push(H,1-T),w.push(A++)}C.push(w)}for(let W=0;W<l;W++)for(let w=0;w<u;w++){const T=C[w][W],k=C[w+1][W],J=C[w+1][W+1],H=C[w][W+1];_.push(T,k,H),_.push(k,J,H),F+=6}p.addGroup(v,F,0),v+=F}function U(L){const Y=A,F=new te,N=new Z;let W=0;const w=L===!0?e:i,T=L===!0?1:-1;for(let J=1;J<=l;J++)x.push(0,S*T,0),y.push(0,T,0),M.push(.5,.5),A++;const k=A;for(let J=0;J<=l;J++){const ot=J/l*m+h,ct=Math.cos(ot),I=Math.sin(ot);N.x=w*I,N.y=S*T,N.z=w*ct,x.push(N.x,N.y,N.z),y.push(0,T,0),F.x=ct*.5+.5,F.y=I*.5*T+.5,M.push(F.x,F.y),A++}for(let J=0;J<l;J++){const H=Y+J,ot=k+J;L===!0?_.push(ot,ot+1,H):_.push(ot+1,ot,H),W+=3}p.addGroup(v,W,L===!0?1:2),v+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fh(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Hh extends ia{constructor(e=1,i=32,s=16,l=0,u=Math.PI*2,d=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:s,phiStart:l,phiLength:u,thetaStart:d,thetaLength:h},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(d+h,Math.PI);let p=0;const _=[],x=new Z,y=new Z,M=[],A=[],C=[],S=[];for(let v=0;v<=s;v++){const z=[],U=v/s;let L=0;v===0&&d===0?L=.5/i:v===s&&m===Math.PI&&(L=-.5/i);for(let Y=0;Y<=i;Y++){const F=Y/i;x.x=-e*Math.cos(l+F*u)*Math.sin(d+U*h),x.y=e*Math.cos(d+U*h),x.z=e*Math.sin(l+F*u)*Math.sin(d+U*h),A.push(x.x,x.y,x.z),y.copy(x).normalize(),C.push(y.x,y.y,y.z),S.push(F+L,1-U),z.push(p++)}_.push(z)}for(let v=0;v<s;v++)for(let z=0;z<i;z++){const U=_[v][z+1],L=_[v][z],Y=_[v+1][z],F=_[v+1][z+1];(v!==0||d>0)&&M.push(U,L,F),(v!==s-1||m<Math.PI)&&M.push(L,Y,F)}this.setIndex(M),this.setAttribute("position",new Qn(A,3)),this.setAttribute("normal",new Qn(C,3)),this.setAttribute("uv",new Qn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hh(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class pc extends Oo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Se(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=S0,this.normalScale=new te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Di,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Gh extends En{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Se(e),this.intensity=i}dispose(){}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),i}}const yh=new je,e0=new Z,n0=new Z;class X0{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new te(512,512),this.map=null,this.mapPass=null,this.matrix=new je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ph,this._frameExtents=new te(1,1),this._viewportCount=1,this._viewports=[new ke(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,s=this.matrix;e0.setFromMatrixPosition(e.matrixWorld),i.position.copy(e0),n0.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(n0),i.updateMatrixWorld(),yh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yh),s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(yh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const i0=new je,Co=new Z,Sh=new Z;class M1 extends X0{constructor(){super(new Zn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new te(4,2),this._viewportCount=6,this._viewports=[new ke(2,1,1,1),new ke(0,1,1,1),new ke(3,1,1,1),new ke(1,1,1,1),new ke(3,0,1,1),new ke(1,0,1,1)],this._cubeDirections=[new Z(1,0,0),new Z(-1,0,0),new Z(0,0,1),new Z(0,0,-1),new Z(0,1,0),new Z(0,-1,0)],this._cubeUps=[new Z(0,1,0),new Z(0,1,0),new Z(0,1,0),new Z(0,1,0),new Z(0,0,1),new Z(0,0,-1)]}updateMatrices(e,i=0){const s=this.camera,l=this.matrix,u=e.distance||s.far;u!==s.far&&(s.far=u,s.updateProjectionMatrix()),Co.setFromMatrixPosition(e.matrixWorld),s.position.copy(Co),Sh.copy(s.position),Sh.add(this._cubeDirections[i]),s.up.copy(this._cubeUps[i]),s.lookAt(Sh),s.updateMatrixWorld(),l.makeTranslation(-Co.x,-Co.y,-Co.z),i0.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),this._frustum.setFromProjectionMatrix(i0)}}class a0 extends Gh{constructor(e,i,s=0,l=2){super(e,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new M1}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,i){return super.copy(e,i),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class E1 extends X0{constructor(){super(new P0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class T1 extends Gh{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(En.DEFAULT_UP),this.updateMatrix(),this.target=new En,this.shadow=new E1}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class b1 extends Gh{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class s0{constructor(e=1,i=0,s=0){return this.radius=e,this.phi=i,this.theta=s,this}set(e,i,s){return this.radius=e,this.phi=i,this.theta=s,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,i,s){return this.radius=Math.sqrt(e*e+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,s),this.phi=Math.acos(Dn(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Nh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Nh);const r0={type:"change"},Mh={type:"start"},o0={type:"end"},mc=new A0,l0=new Pa,A1=Math.cos(70*fS.DEG2RAD);class R1 extends Ms{constructor(e,i){super(),this.object=e,this.domElement=i,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new Z,this.cursor=new Z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:nr.ROTATE,MIDDLE:nr.DOLLY,RIGHT:nr.PAN},this.touches={ONE:ir.ROTATE,TWO:ir.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return h.phi},this.getAzimuthalAngle=function(){return h.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(E){E.addEventListener("keydown",Kt),this._domElementKeyEvents=E},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Kt),this._domElementKeyEvents=null},this.saveState=function(){s.target0.copy(s.target),s.position0.copy(s.object.position),s.zoom0=s.object.zoom},this.reset=function(){s.target.copy(s.target0),s.object.position.copy(s.position0),s.object.zoom=s.zoom0,s.object.updateProjectionMatrix(),s.dispatchEvent(r0),s.update(),u=l.NONE},this.update=(function(){const E=new Z,K=new Ss().setFromUnitVectors(e.up,new Z(0,1,0)),nt=K.clone().invert(),Mt=new Z,bt=new Ss,Zt=new Z,ae=2*Math.PI;return function(Je=null){const ve=s.object.position;E.copy(ve).sub(s.target),E.applyQuaternion(K),h.setFromVector3(E),s.autoRotate&&u===l.NONE&&J(T(Je)),s.enableDamping?(h.theta+=m.theta*s.dampingFactor,h.phi+=m.phi*s.dampingFactor):(h.theta+=m.theta,h.phi+=m.phi);let Ge=s.minAzimuthAngle,Ae=s.maxAzimuthAngle;isFinite(Ge)&&isFinite(Ae)&&(Ge<-Math.PI?Ge+=ae:Ge>Math.PI&&(Ge-=ae),Ae<-Math.PI?Ae+=ae:Ae>Math.PI&&(Ae-=ae),Ge<=Ae?h.theta=Math.max(Ge,Math.min(Ae,h.theta)):h.theta=h.theta>(Ge+Ae)/2?Math.max(Ge,h.theta):Math.min(Ae,h.theta)),h.phi=Math.max(s.minPolarAngle,Math.min(s.maxPolarAngle,h.phi)),h.makeSafe(),s.enableDamping===!0?s.target.addScaledVector(_,s.dampingFactor):s.target.add(_),s.target.sub(s.cursor),s.target.clampLength(s.minTargetRadius,s.maxTargetRadius),s.target.add(s.cursor);let vi=!1;if(s.zoomToCursor&&F||s.object.isOrthographicCamera)h.radius=lt(h.radius);else{const Tn=h.radius;h.radius=lt(h.radius*p),vi=Tn!=h.radius}if(E.setFromSpherical(h),E.applyQuaternion(nt),ve.copy(s.target).add(E),s.object.lookAt(s.target),s.enableDamping===!0?(m.theta*=1-s.dampingFactor,m.phi*=1-s.dampingFactor,_.multiplyScalar(1-s.dampingFactor)):(m.set(0,0,0),_.set(0,0,0)),s.zoomToCursor&&F){let Tn=null;if(s.object.isPerspectiveCamera){const ui=E.length();Tn=lt(ui*p);const Jn=ui-Tn;s.object.position.addScaledVector(L,Jn),s.object.updateMatrixWorld(),vi=!!Jn}else if(s.object.isOrthographicCamera){const ui=new Z(Y.x,Y.y,0);ui.unproject(s.object);const Jn=s.object.zoom;s.object.zoom=Math.max(s.minZoom,Math.min(s.maxZoom,s.object.zoom/p)),s.object.updateProjectionMatrix(),vi=Jn!==s.object.zoom;const Ui=new Z(Y.x,Y.y,0);Ui.unproject(s.object),s.object.position.sub(Ui).add(ui),s.object.updateMatrixWorld(),Tn=E.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),s.zoomToCursor=!1;Tn!==null&&(this.screenSpacePanning?s.target.set(0,0,-1).transformDirection(s.object.matrix).multiplyScalar(Tn).add(s.object.position):(mc.origin.copy(s.object.position),mc.direction.set(0,0,-1).transformDirection(s.object.matrix),Math.abs(s.object.up.dot(mc.direction))<A1?e.lookAt(s.target):(l0.setFromNormalAndCoplanarPoint(s.object.up,s.target),mc.intersectPlane(l0,s.target))))}else if(s.object.isOrthographicCamera){const Tn=s.object.zoom;s.object.zoom=Math.max(s.minZoom,Math.min(s.maxZoom,s.object.zoom/p)),Tn!==s.object.zoom&&(s.object.updateProjectionMatrix(),vi=!0)}return p=1,F=!1,vi||Mt.distanceToSquared(s.object.position)>d||8*(1-bt.dot(s.object.quaternion))>d||Zt.distanceToSquared(s.target)>d?(s.dispatchEvent(r0),Mt.copy(s.object.position),bt.copy(s.object.quaternion),Zt.copy(s.target),!0):!1}})(),this.dispose=function(){s.domElement.removeEventListener("contextmenu",de),s.domElement.removeEventListener("pointerdown",P),s.domElement.removeEventListener("pointercancel",ft),s.domElement.removeEventListener("wheel",yt),s.domElement.removeEventListener("pointermove",R),s.domElement.removeEventListener("pointerup",ft),s.domElement.getRootNode().removeEventListener("keydown",wt,{capture:!0}),s._domElementKeyEvents!==null&&(s._domElementKeyEvents.removeEventListener("keydown",Kt),s._domElementKeyEvents=null)};const s=this,l={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let u=l.NONE;const d=1e-6,h=new s0,m=new s0;let p=1;const _=new Z,x=new te,y=new te,M=new te,A=new te,C=new te,S=new te,v=new te,z=new te,U=new te,L=new Z,Y=new te;let F=!1;const N=[],W={};let w=!1;function T(E){return E!==null?2*Math.PI/60*s.autoRotateSpeed*E:2*Math.PI/60/60*s.autoRotateSpeed}function k(E){const K=Math.abs(E*.01);return Math.pow(.95,s.zoomSpeed*K)}function J(E){m.theta-=E}function H(E){m.phi-=E}const ot=(function(){const E=new Z;return function(nt,Mt){E.setFromMatrixColumn(Mt,0),E.multiplyScalar(-nt),_.add(E)}})(),ct=(function(){const E=new Z;return function(nt,Mt){s.screenSpacePanning===!0?E.setFromMatrixColumn(Mt,1):(E.setFromMatrixColumn(Mt,0),E.crossVectors(s.object.up,E)),E.multiplyScalar(nt),_.add(E)}})(),I=(function(){const E=new Z;return function(nt,Mt){const bt=s.domElement;if(s.object.isPerspectiveCamera){const Zt=s.object.position;E.copy(Zt).sub(s.target);let ae=E.length();ae*=Math.tan(s.object.fov/2*Math.PI/180),ot(2*nt*ae/bt.clientHeight,s.object.matrix),ct(2*Mt*ae/bt.clientHeight,s.object.matrix)}else s.object.isOrthographicCamera?(ot(nt*(s.object.right-s.object.left)/s.object.zoom/bt.clientWidth,s.object.matrix),ct(Mt*(s.object.top-s.object.bottom)/s.object.zoom/bt.clientHeight,s.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),s.enablePan=!1)}})();function q(E){s.object.isPerspectiveCamera||s.object.isOrthographicCamera?p/=E:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),s.enableZoom=!1)}function X(E){s.object.isPerspectiveCamera||s.object.isOrthographicCamera?p*=E:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),s.enableZoom=!1)}function mt(E,K){if(!s.zoomToCursor)return;F=!0;const nt=s.domElement.getBoundingClientRect(),Mt=E-nt.left,bt=K-nt.top,Zt=nt.width,ae=nt.height;Y.x=Mt/Zt*2-1,Y.y=-(bt/ae)*2+1,L.set(Y.x,Y.y,1).unproject(s.object).sub(s.object.position).normalize()}function lt(E){return Math.max(s.minDistance,Math.min(s.maxDistance,E))}function O(E){x.set(E.clientX,E.clientY)}function it(E){mt(E.clientX,E.clientX),v.set(E.clientX,E.clientY)}function St(E){A.set(E.clientX,E.clientY)}function V(E){y.set(E.clientX,E.clientY),M.subVectors(y,x).multiplyScalar(s.rotateSpeed);const K=s.domElement;J(2*Math.PI*M.x/K.clientHeight),H(2*Math.PI*M.y/K.clientHeight),x.copy(y),s.update()}function dt(E){z.set(E.clientX,E.clientY),U.subVectors(z,v),U.y>0?q(k(U.y)):U.y<0&&X(k(U.y)),v.copy(z),s.update()}function Et(E){C.set(E.clientX,E.clientY),S.subVectors(C,A).multiplyScalar(s.panSpeed),I(S.x,S.y),A.copy(C),s.update()}function gt(E){mt(E.clientX,E.clientY),E.deltaY<0?X(k(E.deltaY)):E.deltaY>0&&q(k(E.deltaY)),s.update()}function Gt(E){let K=!1;switch(E.code){case s.keys.UP:E.ctrlKey||E.metaKey||E.shiftKey?H(2*Math.PI*s.rotateSpeed/s.domElement.clientHeight):I(0,s.keyPanSpeed),K=!0;break;case s.keys.BOTTOM:E.ctrlKey||E.metaKey||E.shiftKey?H(-2*Math.PI*s.rotateSpeed/s.domElement.clientHeight):I(0,-s.keyPanSpeed),K=!0;break;case s.keys.LEFT:E.ctrlKey||E.metaKey||E.shiftKey?J(2*Math.PI*s.rotateSpeed/s.domElement.clientHeight):I(s.keyPanSpeed,0),K=!0;break;case s.keys.RIGHT:E.ctrlKey||E.metaKey||E.shiftKey?J(-2*Math.PI*s.rotateSpeed/s.domElement.clientHeight):I(-s.keyPanSpeed,0),K=!0;break}K&&(E.preventDefault(),s.update())}function Nt(E){if(N.length===1)x.set(E.pageX,E.pageY);else{const K=se(E),nt=.5*(E.pageX+K.x),Mt=.5*(E.pageY+K.y);x.set(nt,Mt)}}function $(E){if(N.length===1)A.set(E.pageX,E.pageY);else{const K=se(E),nt=.5*(E.pageX+K.x),Mt=.5*(E.pageY+K.y);A.set(nt,Mt)}}function ye(E){const K=se(E),nt=E.pageX-K.x,Mt=E.pageY-K.y,bt=Math.sqrt(nt*nt+Mt*Mt);v.set(0,bt)}function qt(E){s.enableZoom&&ye(E),s.enablePan&&$(E)}function be(E){s.enableZoom&&ye(E),s.enableRotate&&Nt(E)}function It(E){if(N.length==1)y.set(E.pageX,E.pageY);else{const nt=se(E),Mt=.5*(E.pageX+nt.x),bt=.5*(E.pageY+nt.y);y.set(Mt,bt)}M.subVectors(y,x).multiplyScalar(s.rotateSpeed);const K=s.domElement;J(2*Math.PI*M.x/K.clientHeight),H(2*Math.PI*M.y/K.clientHeight),x.copy(y)}function le(E){if(N.length===1)C.set(E.pageX,E.pageY);else{const K=se(E),nt=.5*(E.pageX+K.x),Mt=.5*(E.pageY+K.y);C.set(nt,Mt)}S.subVectors(C,A).multiplyScalar(s.panSpeed),I(S.x,S.y),A.copy(C)}function ee(E){const K=se(E),nt=E.pageX-K.x,Mt=E.pageY-K.y,bt=Math.sqrt(nt*nt+Mt*Mt);z.set(0,bt),U.set(0,Math.pow(z.y/v.y,s.zoomSpeed)),q(U.y),v.copy(z);const Zt=(E.pageX+K.x)*.5,ae=(E.pageY+K.y)*.5;mt(Zt,ae)}function he(E){s.enableZoom&&ee(E),s.enablePan&&le(E)}function ze(E){s.enableZoom&&ee(E),s.enableRotate&&It(E)}function P(E){s.enabled!==!1&&(N.length===0&&(s.domElement.setPointerCapture(E.pointerId),s.domElement.addEventListener("pointermove",R),s.domElement.addEventListener("pointerup",ft)),!Xt(E)&&(Yt(E),E.pointerType==="touch"?At(E):xt(E)))}function R(E){s.enabled!==!1&&(E.pointerType==="touch"?Ft(E):Tt(E))}function ft(E){switch(Ut(E),N.length){case 0:s.domElement.releasePointerCapture(E.pointerId),s.domElement.removeEventListener("pointermove",R),s.domElement.removeEventListener("pointerup",ft),s.dispatchEvent(o0),u=l.NONE;break;case 1:const K=N[0],nt=W[K];At({pointerId:K,pageX:nt.x,pageY:nt.y});break}}function xt(E){let K;switch(E.button){case 0:K=s.mouseButtons.LEFT;break;case 1:K=s.mouseButtons.MIDDLE;break;case 2:K=s.mouseButtons.RIGHT;break;default:K=-1}switch(K){case nr.DOLLY:if(s.enableZoom===!1)return;it(E),u=l.DOLLY;break;case nr.ROTATE:if(E.ctrlKey||E.metaKey||E.shiftKey){if(s.enablePan===!1)return;St(E),u=l.PAN}else{if(s.enableRotate===!1)return;O(E),u=l.ROTATE}break;case nr.PAN:if(E.ctrlKey||E.metaKey||E.shiftKey){if(s.enableRotate===!1)return;O(E),u=l.ROTATE}else{if(s.enablePan===!1)return;St(E),u=l.PAN}break;default:u=l.NONE}u!==l.NONE&&s.dispatchEvent(Mh)}function Tt(E){switch(u){case l.ROTATE:if(s.enableRotate===!1)return;V(E);break;case l.DOLLY:if(s.enableZoom===!1)return;dt(E);break;case l.PAN:if(s.enablePan===!1)return;Et(E);break}}function yt(E){s.enabled===!1||s.enableZoom===!1||u!==l.NONE||(E.preventDefault(),s.dispatchEvent(Mh),gt(Vt(E)),s.dispatchEvent(o0))}function Vt(E){const K=E.deltaMode,nt={clientX:E.clientX,clientY:E.clientY,deltaY:E.deltaY};switch(K){case 1:nt.deltaY*=16;break;case 2:nt.deltaY*=100;break}return E.ctrlKey&&!w&&(nt.deltaY*=10),nt}function wt(E){E.key==="Control"&&(w=!0,s.domElement.getRootNode().addEventListener("keyup",Ct,{passive:!0,capture:!0}))}function Ct(E){E.key==="Control"&&(w=!1,s.domElement.getRootNode().removeEventListener("keyup",Ct,{passive:!0,capture:!0}))}function Kt(E){s.enabled===!1||s.enablePan===!1||Gt(E)}function At(E){switch(Jt(E),N.length){case 1:switch(s.touches.ONE){case ir.ROTATE:if(s.enableRotate===!1)return;Nt(E),u=l.TOUCH_ROTATE;break;case ir.PAN:if(s.enablePan===!1)return;$(E),u=l.TOUCH_PAN;break;default:u=l.NONE}break;case 2:switch(s.touches.TWO){case ir.DOLLY_PAN:if(s.enableZoom===!1&&s.enablePan===!1)return;qt(E),u=l.TOUCH_DOLLY_PAN;break;case ir.DOLLY_ROTATE:if(s.enableZoom===!1&&s.enableRotate===!1)return;be(E),u=l.TOUCH_DOLLY_ROTATE;break;default:u=l.NONE}break;default:u=l.NONE}u!==l.NONE&&s.dispatchEvent(Mh)}function Ft(E){switch(Jt(E),u){case l.TOUCH_ROTATE:if(s.enableRotate===!1)return;It(E),s.update();break;case l.TOUCH_PAN:if(s.enablePan===!1)return;le(E),s.update();break;case l.TOUCH_DOLLY_PAN:if(s.enableZoom===!1&&s.enablePan===!1)return;he(E),s.update();break;case l.TOUCH_DOLLY_ROTATE:if(s.enableZoom===!1&&s.enableRotate===!1)return;ze(E),s.update();break;default:u=l.NONE}}function de(E){s.enabled!==!1&&E.preventDefault()}function Yt(E){N.push(E.pointerId)}function Ut(E){delete W[E.pointerId];for(let K=0;K<N.length;K++)if(N[K]==E.pointerId){N.splice(K,1);return}}function Xt(E){for(let K=0;K<N.length;K++)if(N[K]==E.pointerId)return!0;return!1}function Jt(E){let K=W[E.pointerId];K===void 0&&(K=new te,W[E.pointerId]=K),K.set(E.pageX,E.pageY)}function se(E){const K=E.pointerId===N[0]?N[1]:N[0];return W[K]}s.domElement.addEventListener("contextmenu",de),s.domElement.addEventListener("pointerdown",P),s.domElement.addEventListener("pointercancel",ft),s.domElement.addEventListener("wheel",yt,{passive:!1}),s.domElement.getRootNode().addEventListener("keydown",wt,{passive:!0,capture:!0}),this.update()}}const Uh=[{id:1,name:"Beginner Maze",difficulty:"Easy",ballStart:{x:0,y:.5,z:0},exit:{x:12,y:.05,z:12},size:30,description:"A simple maze to learn the controls",walls:[{x:0,y:1,z:-14.5,width:30,height:2,depth:1,color:3821675},{x:0,y:1,z:14.5,width:30,height:2,depth:1,color:3821675},{x:-14.5,y:1,z:0,width:1,height:2,depth:30,color:3821675},{x:14.5,y:1,z:0,width:1,height:2,depth:30,color:3821675},{x:0,y:1,z:-8,width:12,height:2,depth:.5,color:4415982},{x:6,y:1,z:-4,width:.5,height:2,depth:8,color:4415982},{x:-6,y:1,z:4,width:8,height:2,depth:.5,color:4415982},{x:8,y:1,z:8,width:.5,height:2,depth:6,color:4415982}]},{id:2,name:"Winding Path",difficulty:"Easy",ballStart:{x:-13,y:.5,z:-13},exit:{x:13,y:.05,z:13},size:30,description:"Navigate through winding corridors",walls:[{x:0,y:1,z:-14.5,width:30,height:2,depth:1,color:3821675},{x:0,y:1,z:14.5,width:30,height:2,depth:1,color:3821675},{x:-14.5,y:1,z:0,width:1,height:2,depth:30,color:3821675},{x:14.5,y:1,z:0,width:1,height:2,depth:30,color:3821675},{x:0,y:1,z:-10,width:20,height:2,depth:.5,color:4415982},{x:10,y:1,z:-5,width:.5,height:2,depth:10,color:4415982},{x:-8,y:1,z:0,width:16,height:2,depth:.5,color:4415982},{x:0,y:1,z:5,width:15,height:2,depth:.5,color:4415982},{x:7,y:1,z:10,width:.5,height:2,depth:8,color:4415982},{x:-12,y:1,z:8,width:8,height:2,depth:.5,color:4415982},{x:-5,y:1,z:-6,width:.5,height:2,depth:8,color:4415982}]},{id:3,name:"The Labyrinth",difficulty:"Medium",ballStart:{x:-13,y:.5,z:-13},exit:{x:13,y:.05,z:13},size:30,description:"A more complex maze with dead ends",walls:[{x:0,y:1,z:-14.5,width:30,height:2.5,depth:1,color:3821675},{x:0,y:1,z:14.5,width:30,height:2.5,depth:1,color:3821675},{x:-14.5,y:1,z:0,width:1,height:2.5,depth:30,color:3821675},{x:14.5,y:1,z:0,width:1,height:2.5,depth:30,color:3821675},{x:0,y:1,z:-12,width:25,height:2,depth:.5,color:4415982},{x:12,y:1.5,z:-6,width:.5,height:3,depth:12,color:4415982},{x:-10,y:1,z:0,width:20,height:2,depth:.5,color:4415982},{x:8,y:1,z:6,width:.5,height:2,depth:12,color:4415982},{x:-5,y:1,z:8,width:10,height:2,depth:.5,color:4415982},{x:0,y:1.5,z:12,width:15,height:3,depth:.5,color:4415982},{x:-12,y:1,z:-8,width:.5,height:2,depth:10,color:4415982},{x:5,y:1,z:-4,width:10,height:2,depth:.5,color:4415982},{x:-8,y:1.5,z:4,width:.5,height:3,depth:8,color:4415982},{x:10,y:1,z:2,width:8,height:2,depth:.5,color:4415982}]},{id:4,name:"Dead End Alley",difficulty:"Hard",ballStart:{x:-13,y:.5,z:-13},exit:{x:13,y:.05,z:13},size:30,description:"Many dead ends, find the correct path",walls:[{x:0,y:1.5,z:-14.5,width:30,height:3,depth:1,color:3821675},{x:0,y:1.5,z:14.5,width:30,height:3,depth:1,color:3821675},{x:-14.5,y:1.5,z:0,width:1,height:3,depth:30,color:3821675},{x:14.5,y:1.5,z:0,width:1,height:3,depth:30,color:3821675},{x:0,y:2,z:-12,width:28,height:4,depth:.5,color:4415982},{x:14,y:1.5,z:-8,width:.5,height:3,depth:16,color:4415982},{x:-12,y:1,z:-4,width:24,height:2,depth:.5,color:4415982},{x:10,y:2,z:0,width:.5,height:4,depth:20,color:4415982},{x:-8,y:1.5,z:4,width:16,height:3,depth:.5,color:4415982},{x:0,y:1,z:8,width:15,height:2,depth:.5,color:4415982},{x:-14,y:2,z:12,width:.5,height:4,depth:16,color:4415982},{x:5,y:1.5,z:-10,width:10,height:3,depth:.5,color:4415982},{x:-10,y:1,z:10,width:.5,height:2,depth:8,color:4415982},{x:8,y:2,z:6,width:4,height:4,depth:.5,color:4415982},{x:-5,y:1.5,z:-6,width:.5,height:3,depth:8,color:4415982},{x:12,y:1,z:2,width:4,height:2,depth:.5,color:4415982},{x:-2,y:2,z:14,width:4,height:4,depth:.5,color:4415982}]},{id:5,name:"The Final Challenge",difficulty:"Expert",ballStart:{x:-13,y:.5,z:-13},exit:{x:13,y:.05,z:13},size:30,description:"The ultimate test of skill and patience",walls:[{x:0,y:2,z:-14.5,width:30,height:4,depth:1,color:3821675},{x:0,y:2,z:14.5,width:30,height:4,depth:1,color:3821675},{x:-14.5,y:2,z:0,width:1,height:4,depth:30,color:3821675},{x:14.5,y:2,z:0,width:1,height:4,depth:30,color:3821675},{x:0,y:2.5,z:-12,width:28,height:5,depth:.5,color:4415982},{x:14,y:3,z:-8,width:.5,height:6,depth:16,color:4415982},{x:-12,y:2,z:-4,width:24,height:4,depth:.5,color:4415982},{x:10,y:2.5,z:0,width:.5,height:5,depth:20,color:4415982},{x:-8,y:2,z:4,width:16,height:4,depth:.5,color:4415982},{x:0,y:3,z:8,width:15,height:6,depth:.5,color:4415982},{x:-14,y:2.5,z:12,width:.5,height:5,depth:16,color:4415982},{x:5,y:2,z:-10,width:10,height:4,depth:.5,color:4415982},{x:-10,y:3,z:10,width:.5,height:6,depth:8,color:4415982},{x:8,y:2.5,z:6,width:4,height:5,depth:.5,color:4415982},{x:-5,y:2,z:-6,width:.5,height:4,depth:8,color:4415982},{x:12,y:3,z:2,width:4,height:6,depth:.5,color:4415982},{x:-2,y:2.5,z:14,width:4,height:5,depth:.5,color:4415982},{x:6,y:2,z:-2,width:12,height:4,depth:.5,color:4415982},{x:-4,y:3,z:2,width:8,height:6,depth:.5,color:4415982},{x:2,y:2,z:10,width:.5,height:4,depth:8,color:4415982},{x:-14,y:2.5,z:-6,width:12,height:5,depth:.5,color:4415982},{x:8,y:3,z:-14,width:4,height:6,depth:.5,color:4415982},{x:-6,y:2,z:8,width:.5,height:4,depth:4,color:4415982},{x:10,y:2.5,z:12,width:8,height:5,depth:.5,color:4415982}]}],C1=o=>Uh.find(e=>e.id===o)||Uh[0],w1=()=>Uh.length,D1=({level:o,gameState:e,onGameComplete:i,onMovesUpdate:s,isMobile:l})=>{const u=Xe.useRef(null),d=Xe.useRef(null),h=Xe.useRef(null),m=Xe.useRef(null),p=Xe.useRef(null),_=Xe.useRef([]),x=Xe.useRef(null),y=Xe.useRef(null),M=Xe.useRef({}),[A,C]=Xe.useState({x:0,y:.5,z:0}),[S,v]=Xe.useState({x:0,y:0,z:0}),[z,U]=Xe.useState(!1),L=C1(o),Y=.5;Xe.useEffect(()=>{if(!u.current)return;u.current.children.length>0&&(u.current.innerHTML="");const W=new S1;W.background=new Se(657946),W.fog=new Ih(657946,10,L.size*2);const w=new Zn(75,u.current.clientWidth/u.current.clientHeight,.1,1e3);w.position.set(15,20,15);const T=new y1({antialias:!0});if(T.setSize(u.current.clientWidth,u.current.clientHeight),T.shadowMap.enabled=!0,T.shadowMap.type=f0,u.current.appendChild(T.domElement),!l){const gt=new R1(w,T.domElement);gt.enableDamping=!0,gt.dampingFactor=.05,gt.minDistance=5,gt.maxDistance=50}const k=new b1(16777215,.5);W.add(k);const J=new T1(16777215,.8);J.position.set(10,20,10),J.castShadow=!0,W.add(J);const H=new zo(L.size*2,L.size*2),ot=new pc({color:1710638,roughness:.8}),ct=new Kn(H,ot);ct.rotation.x=-Math.PI/2,ct.receiveShadow=!0,W.add(ct);const I=new Hh(Y,32,32),q=new pc({color:16739179,roughness:.3,metalness:.7,emissive:16739179,emissiveIntensity:.2}),X=new Kn(I,q);X.position.set(L.ballStart.x,L.ballStart.y,L.ballStart.z),X.castShadow=!0,X.receiveShadow=!0,W.add(X);const mt=new a0(16739179,1,15);X.add(mt);const lt=[],O=new pc({color:3821675,roughness:.7});L.walls.forEach(gt=>{const Gt=new wr(gt.width,gt.height,gt.depth),Nt=new Kn(Gt,O);Nt.position.set(gt.x,gt.y,gt.z),Nt.castShadow=!0,Nt.receiveShadow=!0,W.add(Nt),lt.push({mesh:Nt,...gt})});const it=new Fh(1.5,1.5,.1,32),St=new pc({color:65416,emissive:65416,emissiveIntensity:.3}),V=new Kn(it,St);V.position.set(L.exit.x,L.exit.y,L.exit.z),V.rotation.x=Math.PI/2,V.receiveShadow=!0,W.add(V);const dt=new a0(65416,2,20);dt.position.set(L.exit.x,3,L.exit.z),W.add(dt),d.current=W,h.current=w,m.current=T,p.current=X,_.current=lt,x.current=V;const Et=()=>{!u.current||!w||!T||(w.aspect=u.current.clientWidth/u.current.clientHeight,w.updateProjectionMatrix(),T.setSize(u.current.clientWidth,u.current.clientHeight))};return window.addEventListener("resize",Et),T.render(W,w),()=>{window.removeEventListener("resize",Et),y.current&&cancelAnimationFrame(y.current)}},[o,L,l]),Xe.useEffect(()=>{const W=T=>{if(e!=="playing")return;const k=T.key.toLowerCase();["arrowup","w"].includes(k)&&(T.preventDefault(),M.current.up=!0),["arrowdown","s"].includes(k)&&(T.preventDefault(),M.current.down=!0),["arrowleft","a"].includes(k)&&(T.preventDefault(),M.current.left=!0),["arrowright","d"].includes(k)&&(T.preventDefault(),M.current.right=!0),k===" "&&p.current&&p.current.position.y<=.6&&(T.preventDefault(),U(!0),v(J=>({...J,y:6}))),k==="r"&&(T.preventDefault(),p.current.position.set(L.ballStart.x,L.ballStart.y,L.ballStart.z),C(L.ballStart),v({x:0,y:0,z:0}),U(!1))},w=T=>{const k=T.key.toLowerCase();["arrowup","w"].includes(k)&&(M.current.up=!1),["arrowdown","s"].includes(k)&&(M.current.down=!1),["arrowleft","a"].includes(k)&&(M.current.left=!1),["arrowright","d"].includes(k)&&(M.current.right=!1)};return window.addEventListener("keydown",W),window.addEventListener("keyup",w),()=>{window.removeEventListener("keydown",W),window.removeEventListener("keyup",w)}},[e,L]);const F=(W,w)=>{const T=w.width/2,k=w.depth/2,J=w.height/2,H=Math.abs(W.x-w.x),ot=Math.abs(W.y-w.y),ct=Math.abs(W.z-w.z);return!(H>T+Y||ot>J+Y||ct>k+Y)},N=(W,w,T)=>{const k=w.width/2,J=w.depth/2,H={...W},ot={...T},ct=k+Y-Math.abs(W.x-w.x),I=J+Y-Math.abs(W.z-w.z);if(ct<I){const q=W.x>w.x?1:-1;H.x=w.x+q*(k+Y+.01),ot.x=-ot.x*.7}else{const q=W.z>w.z?1:-1;H.z=w.z+q*(J+Y+.01),ot.z=-ot.z*.7}return{position:H,velocity:ot}};return Xe.useEffect(()=>{if(e!=="playing"||!p.current)return;let W=0,w=0;const T=k=>{y.current=requestAnimationFrame(T);const J=p.current,H=M.current;z||J.position.y>.5?v(V=>({...V,y:V.y-.2})):(v(V=>({...V,y:0})),J.position.y=.5,U(!1));const ot=.1;let ct=0,I=0;H.up&&(I-=ot),H.down&&(I+=ot),H.left&&(ct-=ot),H.right&&(ct+=ot);const q={x:S.x*.95+ct,y:S.y,z:S.z*.95+I},X=.5,mt=Math.sqrt(q.x**2+q.z**2);if(mt>X){const V=X/mt;q.x*=V,q.z*=V}const lt={x:J.position.x+q.x,y:J.position.y+q.y,z:J.position.z+q.z};lt.y<Y&&(lt.y=Y,q.y=0),_.current.forEach(V=>{if(F(lt,V)){const dt=N(lt,V,q);lt.x=dt.position.x,lt.z=dt.position.z,q.x=dt.velocity.x,q.z=dt.velocity.z}});const O=L.size/2-Y-.5;Math.abs(lt.x)>O&&(lt.x=Math.sign(lt.x)*O,q.x=-q.x*.5),Math.abs(lt.z)>O&&(lt.z=Math.sign(lt.z)*O,q.z=-q.z*.5),J.position.set(lt.x,lt.y,lt.z),C(lt),v(q),(H.up||H.down||H.left||H.right)&&k-w>200&&(w=k,W++,s(W)),Math.sqrt(Math.pow(lt.x-L.exit.x,2)+Math.pow(lt.z-L.exit.z,2))<2&&i(),l&&h.current&&(h.current.position.x=lt.x,h.current.position.y=Math.max(8,lt.y+8),h.current.position.z=lt.z+12,h.current.lookAt(lt.x,0,lt.z)),d.current&&h.current&&m.current&&m.current.render(d.current,h.current)};return y.current=requestAnimationFrame(T),()=>{y.current&&cancelAnimationFrame(y.current)}},[e,S,z,L,i,s,l]),Lt.jsx("div",{className:"game-canvas",ref:u})},U1=({gameState:o,level:e,totalLevels:i,score:s,moves:l,time:u,isMobile:d,onStart:h,onReset:m,onNextLevel:p})=>{const _=x=>{console.log(`Mobile control: ${x}`)};return Lt.jsxs("div",{className:"ui-overlay",children:[Lt.jsxs("div",{className:"header",children:[Lt.jsx("div",{className:"logo",children:Lt.jsx("h1",{children:"3D Ball Maze"})}),o==="playing"&&Lt.jsxs("div",{className:"header-stats",children:[Lt.jsxs("div",{className:"stat",children:[Lt.jsx("div",{className:"stat-label",children:"Level"}),Lt.jsxs("div",{className:"stat-value",children:[e,"/",i]})]}),Lt.jsxs("div",{className:"stat",children:[Lt.jsx("div",{className:"stat-label",children:"Score"}),Lt.jsx("div",{className:"stat-value",children:s})]}),Lt.jsxs("div",{className:"stat",children:[Lt.jsx("div",{className:"stat-label",children:"Moves"}),Lt.jsx("div",{className:"stat-value",children:l})]}),Lt.jsxs("div",{className:"stat",children:[Lt.jsx("div",{className:"stat-label",children:"Time"}),Lt.jsxs("div",{className:"stat-value",children:[u,"s"]})]})]})]}),o==="menu"&&Lt.jsx("div",{className:"menu-overlay",children:Lt.jsxs("div",{className:"menu-content",children:[Lt.jsx("h1",{className:"menu-title",children:"Ball Maze Runner"}),Lt.jsx("p",{className:"menu-description",children:"Navigate the ball through 3D mazes to reach the exit! Avoid walls and complete each level as fast as possible."}),Lt.jsxs("div",{className:"menu-buttons",children:[Lt.jsx("button",{className:"btn btn-primary",onClick:h,children:"Start Game"}),Lt.jsx("button",{className:"btn btn-secondary",onClick:m,children:"Reset Progress"})]}),Lt.jsxs("div",{className:"instructions",style:{marginTop:"20px"},children:[Lt.jsxs("p",{children:[Lt.jsx("strong",{children:"Controls:"})," WASD to move • SPACE to jump • R to reset"]}),Lt.jsxs("p",{children:[Lt.jsx("strong",{children:"Goal:"})," Reach the green platform to complete each level"]})]})]})}),o==="won"&&Lt.jsx("div",{className:"win-overlay",children:Lt.jsxs("div",{className:"win-content",children:[Lt.jsx("h1",{className:"win-title",children:"Level Complete!"}),Lt.jsxs("div",{className:"win-stats",children:[Lt.jsxs("div",{className:"win-stat",children:[Lt.jsx("div",{className:"win-stat-label",children:"Time"}),Lt.jsxs("div",{className:"win-stat-value",children:[u,"s"]})]}),Lt.jsxs("div",{className:"win-stat",children:[Lt.jsx("div",{className:"win-stat-label",children:"Moves"}),Lt.jsx("div",{className:"win-stat-value",children:l})]}),Lt.jsxs("div",{className:"win-stat",children:[Lt.jsx("div",{className:"win-stat-label",children:"Level"}),Lt.jsx("div",{className:"win-stat-value",children:e})]}),Lt.jsxs("div",{className:"win-stat",children:[Lt.jsx("div",{className:"win-stat-label",children:"Score"}),Lt.jsxs("div",{className:"win-stat-value",children:["+",Math.max(100,1e3-u*10-l*5)]})]})]}),Lt.jsxs("div",{className:"win-buttons",children:[e<i?Lt.jsxs("button",{className:"btn btn-success",onClick:p,children:["Next Level (",e+1,"/",i,")"]}):Lt.jsx("button",{className:"btn btn-success",onClick:m,children:"Game Complete!"}),Lt.jsx("button",{className:"btn btn-primary",onClick:()=>h(),children:"Play Again"}),Lt.jsx("button",{className:"btn btn-secondary",onClick:m,children:"Main Menu"})]})]})}),d&&o==="playing"&&Lt.jsx("div",{className:"controls",children:Lt.jsxs("div",{className:"mobile-controls",children:[Lt.jsx("div",{className:"mobile-row",children:Lt.jsx("button",{className:"control-btn",onTouchStart:()=>_("up"),onTouchEnd:()=>{},children:"↑"})}),Lt.jsxs("div",{className:"mobile-row",children:[Lt.jsx("button",{className:"control-btn",onTouchStart:()=>_("left"),onTouchEnd:()=>{},children:"←"}),Lt.jsx("button",{className:"control-btn",onTouchStart:()=>_("down"),onTouchEnd:()=>{},children:"↓"}),Lt.jsx("button",{className:"control-btn",onTouchStart:()=>_("right"),onTouchEnd:()=>{},children:"→"})]}),Lt.jsxs("div",{className:"mobile-row",children:[Lt.jsx("button",{className:"control-btn",style:{background:"#4caf50"},onClick:()=>_("jump"),children:"JUMP"}),Lt.jsx("button",{className:"control-btn",style:{background:"#f44336"},onClick:m,children:"MENU"})]})]})}),Lt.jsxs("div",{className:"instructions",children:[o==="playing"&&!d&&Lt.jsx("p",{children:"WASD: Move • SPACE: Jump • R: Reset • Mouse: Rotate view"}),o==="playing"&&d&&Lt.jsx("p",{children:"Use touch controls to move the ball"})]})]})};function L1(){const[o,e]=Xe.useState("menu"),[i,s]=Xe.useState(1),[l,u]=Xe.useState(0),[d,h]=Xe.useState(0),[m,p]=Xe.useState(0),[_,x]=Xe.useState(!1),y=w1();Xe.useEffect(()=>{const z=()=>x(window.innerWidth<=768);return z(),window.addEventListener("resize",z),()=>window.removeEventListener("resize",z)},[]),Xe.useEffect(()=>{let z;return o==="playing"&&(z=setInterval(()=>p(U=>U+1),1e3)),()=>clearInterval(z)},[o]);const M=()=>{e("playing"),h(0),p(0)},A=()=>{e("menu"),s(1),u(0),h(0),p(0)},C=()=>{const z=Math.max(100,1e3-m*10-d*5+i*100);u(U=>U+z),e("won")},S=()=>{i<y?(s(z=>z+1),e("playing"),h(0),p(0)):e("menu")},v=z=>{h(z)};return Lt.jsxs("div",{className:"app",children:[Lt.jsx(U1,{gameState:o,level:i,totalLevels:y,score:l,moves:d,time:m,isMobile:_,onStart:M,onReset:A,onNextLevel:S}),Lt.jsx("div",{className:"game-area",children:Lt.jsx(D1,{level:i,gameState:o,onGameComplete:C,onMovesUpdate:v,isMobile:_})})]})}ry.createRoot(document.getElementById("root")).render(Lt.jsx(Jx.StrictMode,{children:Lt.jsx(L1,{})}));
//# sourceMappingURL=index-D1M7btek.js.map
