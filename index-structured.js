(function(){
  const i=document.createElement("link").relList;
  if(i&&i.supports&&i.supports("modulepreload"))return;
  for(const u of document.querySelectorAll('link[rel="modulepreload"]'))o(u);
  new MutationObserver(u=>{
  for(const d of u)if(d.type==="childList")for(const f of d.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&o(f)
}

).observe(document,{
  childList:!0,subtree:!0
}

);
  function l(u){
  const d={

}

;
  return u.integrity&&(d.integrity=u.integrity),u.referrerPolicy&&(d.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?d.credentials="include":u.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d
}

function o(u){
  if(u.ep)return;
  u.ep=!0;
  const d=l(u);
  fetch(u.href,d)
}

}

)();
  var Xc={
  exports:{

}

}

,ds={

}

;
  var E0;
  function Bx(){
  if(E0)return ds;
  E0=1;
  var a=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");
  function l(o,u,d){
  var f=null;
  if(d!==void 0&&(f=""+d),u.key!==void 0&&(f=""+u.key),"key"in u){
  d={

}

;
  for(var y in u)y!=="key"&&(d[y]=u[y])
}

else d=u;
  return u=d.ref,{
  $$typeof:a,type:o,key:f,ref:u!==void 0?u:null,props:d
}

}

return ds.Fragment=i,ds.jsx=l,ds.jsxs=l,ds
}

var N0;
  function Hx(){
  return N0||(N0=1,Xc.exports=Bx()),Xc.exports
}

var g=Hx(),kc={
  exports:{

}

}

,st={

}

;
  var M0;
  function Ux(){
  if(M0)return st;
  M0=1;
  var a=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),f=Symbol.for("react.context"),y=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),b=Symbol.for("react.activity"),S=Symbol.iterator;
  function N(w){
  return w===null||typeof w!="object"?null:(w=S&&w[S]||w["@@iterator"],typeof w=="function"?w:null)
}

var z={
  isMounted:function(){
  return!1
}

,enqueueForceUpdate:function(){

}

,enqueueReplaceState:function(){

}

,enqueueSetState:function(){

}

}

,U=Object.assign,X={

}

;
  function L(w,H,Q){
  this.props=w,this.context=H,this.refs=X,this.updater=Q||z
}

L.prototype.isReactComponent={

}

,L.prototype.setState=function(w,H){
  if(typeof w!="object"&&typeof w!="function"&&w!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this,w,H,"setState")
}

,L.prototype.forceUpdate=function(w){
  this.updater.enqueueForceUpdate(this,w,"forceUpdate")
}

;
  function Y(){

}

Y.prototype=L.prototype;
  function q(w,H,Q){
  this.props=w,this.context=H,this.refs=X,this.updater=Q||z
}

var k=q.prototype=new Y;
  k.constructor=q,U(k,L.prototype),k.isPureReactComponent=!0;
  var Z=Array.isArray;
  function at(){

}

var tt={
  H:null,A:null,T:null,S:null
}

,$=Object.prototype.hasOwnProperty;
  function it(w,H,Q){
  var P=Q.ref;
  return{
  $$typeof:a,type:w,key:H,ref:P!==void 0?P:null,props:Q
}

}

function jt(w,H){
  return it(w.type,H,w.props)
}

function Jt(w){
  return typeof w=="object"&&w!==null&&w.$$typeof===a
}

function Ot(w){
  var H={
  "=":"=0",":":"=2"
}

;
  return"$"+w.replace(/[=:]/g,function(Q){
  return H[Q]
}

)
}

var Ce=/\/+/g;
  function qe(w,H){
  return typeof w=="object"&&w!==null&&w.key!=null?Ot(""+w.key):H.toString(36)
}

function ce(w){
  switch(w.status){
  case"fulfilled":return w.value;
  case"rejected":throw w.reason;
  default:switch(typeof w.status=="string"?w.then(at,at):(w.status="pending",w.then(function(H){
  w.status==="pending"&&(w.status="fulfilled",w.value=H)
}

,function(H){
  w.status==="pending"&&(w.status="rejected",w.reason=H)
}

)),w.status){
  case"fulfilled":return w.value;
  case"rejected":throw w.reason
}

}

throw w
}

function V(w,H,Q,P,lt){
  var ft=typeof w;
  (ft==="undefined"||ft==="boolean")&&(w=null);
  var Tt=!1;
  if(w===null)Tt=!0;
  else switch(ft){
  case"bigint":case"string":case"number":Tt=!0;
  break;
  case"object":switch(w.$$typeof){
  case a:case i:Tt=!0;
  break;
  case x:return Tt=w._init,V(Tt(w._payload),H,Q,P,lt)
}

}

if(Tt)return lt=lt(w),Tt=P===""?"."+qe(w,0):P,Z(lt)?(Q="",Tt!=null&&(Q=Tt.replace(Ce,"$&/")+"/"),V(lt,H,Q,"",function(xi){
  return xi
}

)):lt!=null&&(Jt(lt)&&(lt=jt(lt,Q+(lt.key==null||w&&w.key===lt.key?"":(""+lt.key).replace(Ce,"$&/")+"/")+Tt)),H.push(lt)),1;
  Tt=0;
  var se=P===""?".":P+":";
  if(Z(w))for(var Ut=0;
  Ut<w.length;
  Ut++)P=w[Ut],ft=se+qe(P,Ut),Tt+=V(P,H,Q,ft,lt);
  else if(Ut=N(w),typeof Ut=="function")for(w=Ut.call(w),Ut=0;
  !(P=w.next()).done;
  )P=P.value,ft=se+qe(P,Ut++),Tt+=V(P,H,Q,ft,lt);
  else if(ft==="object"){
  if(typeof w.then=="function")return V(ce(w),H,Q,P,lt);
  throw H=String(w),Error("Objects are not valid as a React child (found: "+(H==="[object Object]"?"object with keys {
  "+Object.keys(w).join(", ")+"
}

":H)+"). If you meant to render a collection of children, use an array instead.")
}

return Tt
}

function K(w,H,Q){
  if(w==null)return w;
  var P=[],lt=0;
  return V(w,P,"","",function(ft){
  return H.call(Q,ft,lt++)
}

),P
}

function J(w){
  if(w._status===-1){
  var H=w._result;
  H=H(),H.then(function(Q){
  (w._status===0||w._status===-1)&&(w._status=1,w._result=Q)
}

,function(Q){
  (w._status===0||w._status===-1)&&(w._status=2,w._result=Q)
}

),w._status===-1&&(w._status=0,w._result=H)
}

if(w._status===1)return w._result.default;
  throw w._result
}

var rt=typeof reportError=="function"?reportError:function(w){
  if(typeof window=="object"&&typeof window.ErrorEvent=="function"){
  var H=new window.ErrorEvent("error",{
  bubbles:!0,cancelable:!0,message:typeof w=="object"&&w!==null&&typeof w.message=="string"?String(w.message):String(w),error:w
}

);
  if(!window.dispatchEvent(H))return
}

else if(typeof process=="object"&&typeof process.emit=="function"){
  process.emit("uncaughtException",w);
  return
}

console.error(w)
}

,yt={
  map:K,forEach:function(w,H,Q){
  K(w,function(){
  H.apply(this,arguments)
}

,Q)
}

,count:function(w){
  var H=0;
  return K(w,function(){
  H++
}

),H
}

,toArray:function(w){
  return K(w,function(H){
  return H
}

)||[]
}

,only:function(w){
  if(!Jt(w))throw Error("React.Children.only expected to receive a single React element child.");
  return w
}

}

;
  return st.Activity=b,st.Children=yt,st.Component=L,st.Fragment=l,st.Profiler=u,st.PureComponent=q,st.StrictMode=o,st.Suspense=p,st.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=tt,st.__COMPILER_RUNTIME={
  __proto__:null,c:function(w){
  return tt.H.useMemoCache(w)
}

}

,st.cache=function(w){
  return function(){
  return w.apply(null,arguments)
}

}

,st.cacheSignal=function(){
  return null
}

,st.cloneElement=function(w,H,Q){
  if(w==null)throw Error("The argument must be a React element, but you passed "+w+".");
  var P=U({

}

,w.props),lt=w.key;
  if(H!=null)for(ft in H.key!==void 0&&(lt=""+H.key),H)!$.call(H,ft)||ft==="key"||ft==="__self"||ft==="__source"||ft==="ref"&&H.ref===void 0||(P[ft]=H[ft]);
  var ft=arguments.length-2;
  if(ft===1)P.children=Q;
  else if(1<ft){
  for(var Tt=Array(ft),se=0;
  se<ft;
  se++)Tt[se]=arguments[se+2];
  P.children=Tt
}

return it(w.type,lt,P)
}

,st.createContext=function(w){
  return w={
  $$typeof:f,_currentValue:w,_currentValue2:w,_threadCount:0,Provider:null,Consumer:null
}

,w.Provider=w,w.Consumer={
  $$typeof:d,_context:w
}

,w
}

,st.createElement=function(w,H,Q){
  var P,lt={

}

,ft=null;
  if(H!=null)for(P in H.key!==void 0&&(ft=""+H.key),H)$.call(H,P)&&P!=="key"&&P!=="__self"&&P!=="__source"&&(lt[P]=H[P]);
  var Tt=arguments.length-2;
  if(Tt===1)lt.children=Q;
  else if(1<Tt){
  for(var se=Array(Tt),Ut=0;
  Ut<Tt;
  Ut++)se[Ut]=arguments[Ut+2];
  lt.children=se
}

if(w&&w.defaultProps)for(P in Tt=w.defaultProps,Tt)lt[P]===void 0&&(lt[P]=Tt[P]);
  return it(w,ft,lt)
}

,st.createRef=function(){
  return{
  current:null
}

}

,st.forwardRef=function(w){
  return{
  $$typeof:y,render:w
}

}

,st.isValidElement=Jt,st.lazy=function(w){
  return{
  $$typeof:x,_payload:{
  _status:-1,_result:w
}

,_init:J
}

}

,st.memo=function(w,H){
  return{
  $$typeof:m,type:w,compare:H===void 0?null:H
}

}

,st.startTransition=function(w){
  var H=tt.T,Q={

}

;
  tt.T=Q;
  try{
  var P=w(),lt=tt.S;
  lt!==null&&lt(Q,P),typeof P=="object"&&P!==null&&typeof P.then=="function"&&P.then(at,rt)
}

catch(ft){
  rt(ft)
}

finally{
  H!==null&&Q.types!==null&&(H.types=Q.types),tt.T=H
}

}

,st.unstable_useCacheRefresh=function(){
  return tt.H.useCacheRefresh()
}

,st.use=function(w){
  return tt.H.use(w)
}

,st.useActionState=function(w,H,Q){
  return tt.H.useActionState(w,H,Q)
}

,st.useCallback=function(w,H){
  return tt.H.useCallback(w,H)
}

,st.useContext=function(w){
  return tt.H.useContext(w)
}

,st.useDebugValue=function(){

}

,st.useDeferredValue=function(w,H){
  return tt.H.useDeferredValue(w,H)
}

,st.useEffect=function(w,H){
  return tt.H.useEffect(w,H)
}

,st.useEffectEvent=function(w){
  return tt.H.useEffectEvent(w)
}

,st.useId=function(){
  return tt.H.useId()
}

,st.useImperativeHandle=function(w,H,Q){
  return tt.H.useImperativeHandle(w,H,Q)
}

,st.useInsertionEffect=function(w,H){
  return tt.H.useInsertionEffect(w,H)
}

,st.useLayoutEffect=function(w,H){
  return tt.H.useLayoutEffect(w,H)
}

,st.useMemo=function(w,H){
  return tt.H.useMemo(w,H)
}

,st.useOptimistic=function(w,H){
  return tt.H.useOptimistic(w,H)
}

,st.useReducer=function(w,H,Q){
  return tt.H.useReducer(w,H,Q)
}

,st.useRef=function(w){
  return tt.H.useRef(w)
}

,st.useState=function(w){
  return tt.H.useState(w)
}

,st.useSyncExternalStore=function(w,H,Q){
  return tt.H.useSyncExternalStore(w,H,Q)
}

,st.useTransition=function(){
  return tt.H.useTransition()
}

,st.version="19.2.3",st
}

var C0;
  function ku(){
  return C0||(C0=1,kc.exports=Ux()),kc.exports
}

var R=ku(),Kc={
  exports:{

}

}

,hs={

}

,Qc={
  exports:{

}

}

,Zc={

}

;
  var j0;
  function Lx(){
  return j0||(j0=1,(function(a){
  function i(V,K){
  var J=V.length;
  V.push(K);
  t:for(;
  0<J;
  ){
  var rt=J-1>>>1,yt=V[rt];
  if(0<u(yt,K))V[rt]=K,V[J]=yt,J=rt;
  else break t
}

}

function l(V){
  return V.length===0?null:V[0]
}

function o(V){
  if(V.length===0)return null;
  var K=V[0],J=V.pop();
  if(J!==K){
  V[0]=J;
  t:for(var rt=0,yt=V.length,w=yt>>>1;
  rt<w;
  ){
  var H=2*(rt+1)-1,Q=V[H],P=H+1,lt=V[P];
  if(0>u(Q,J))P<yt&&0>u(lt,Q)?(V[rt]=lt,V[P]=J,rt=P):(V[rt]=Q,V[H]=J,rt=H);
  else if(P<yt&&0>u(lt,J))V[rt]=lt,V[P]=J,rt=P;
  else break t
}

}

return K
}

function u(V,K){
  var J=V.sortIndex-K.sortIndex;
  return J!==0?J:V.id-K.id
}

if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){
  var d=performance;
  a.unstable_now=function(){
  return d.now()
}

}

else{
  var f=Date,y=f.now();
  a.unstable_now=function(){
  return f.now()-y
}

}

var p=[],m=[],x=1,b=null,S=3,N=!1,z=!1,U=!1,X=!1,L=typeof setTimeout=="function"?setTimeout:null,Y=typeof clearTimeout=="function"?clearTimeout:null,q=typeof setImmediate<"u"?setImmediate:null;
  function k(V){
  for(var K=l(m);
  K!==null;
  ){
  if(K.callback===null)o(m);
  else if(K.startTime<=V)o(m),K.sortIndex=K.expirationTime,i(p,K);
  else break;
  K=l(m)
}

}

function Z(V){
  if(U=!1,k(V),!z)if(l(p)!==null)z=!0,at||(at=!0,Ot());
  else{
  var K=l(m);
  K!==null&&ce(Z,K.startTime-V)
}

}

var at=!1,tt=-1,$=5,it=-1;
  function jt(){
  return X?!0:!(a.unstable_now()-it<$)
}

function Jt(){
  if(X=!1,at){
  var V=a.unstable_now();
  it=V;
  var K=!0;
  try{
  t:{
  z=!1,U&&(U=!1,Y(tt),tt=-1),N=!0;
  var J=S;
  try{
  e:{
  for(k(V),b=l(p);
  b!==null&&!(b.expirationTime>V&&jt());
  ){
  var rt=b.callback;
  if(typeof rt=="function"){
  b.callback=null,S=b.priorityLevel;
  var yt=rt(b.expirationTime<=V);
  if(V=a.unstable_now(),typeof yt=="function"){
  b.callback=yt,k(V),K=!0;
  break e
}

b===l(p)&&o(p),k(V)
}

else o(p);
  b=l(p)
}

if(b!==null)K=!0;
  else{
  var w=l(m);
  w!==null&&ce(Z,w.startTime-V),K=!1
}

}

break t
}

finally{
  b=null,S=J,N=!1
}

K=void 0
}

}

finally{
  K?Ot():at=!1
}

}

}

var Ot;
  if(typeof q=="function")Ot=function(){
  q(Jt)
}

;
  else if(typeof MessageChannel<"u"){
  var Ce=new MessageChannel,qe=Ce.port2;
  Ce.port1.onmessage=Jt,Ot=function(){
  qe.postMessage(null)
}

}

else Ot=function(){
  L(Jt,0)
}

;
  function ce(V,K){
  tt=L(function(){
  V(a.unstable_now())
}

,K)
}

a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(V){
  V.callback=null
}

,a.unstable_forceFrameRate=function(V){
  0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<V?Math.floor(1e3/V):5
}

,a.unstable_getCurrentPriorityLevel=function(){
  return S
}

,a.unstable_next=function(V){
  switch(S){
  case 1:case 2:case 3:var K=3;
  break;
  default:K=S
}

var J=S;
  S=K;
  try{
  return V()
}

finally{
  S=J
}

}

,a.unstable_requestPaint=function(){
  X=!0
}

,a.unstable_runWithPriority=function(V,K){
  switch(V){
  case 1:case 2:case 3:case 4:case 5:break;
  default:V=3
}

var J=S;
  S=V;
  try{
  return K()
}

finally{
  S=J
}

}

,a.unstable_scheduleCallback=function(V,K,J){
  var rt=a.unstable_now();
  switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?rt+J:rt):J=rt,V){
  case 1:var yt=-1;
  break;
  case 2:yt=250;
  break;
  case 5:yt=1073741823;
  break;
  case 4:yt=1e4;
  break;
  default:yt=5e3
}

return yt=J+yt,V={
  id:x++,callback:K,priorityLevel:V,startTime:J,expirationTime:yt,sortIndex:-1
}

,J>rt?(V.sortIndex=J,i(m,V),l(p)===null&&V===l(m)&&(U?(Y(tt),tt=-1):U=!0,ce(Z,J-rt))):(V.sortIndex=yt,i(p,V),z||N||(z=!0,at||(at=!0,Ot()))),V
}

,a.unstable_shouldYield=jt,a.unstable_wrapCallback=function(V){
  var K=S;
  return function(){
  var J=S;
  S=K;
  try{
  return V.apply(this,arguments)
}

finally{
  S=J
}

}

}

}

)(Zc)),Zc
}

var D0;
  function Gx(){
  return D0||(D0=1,Qc.exports=Lx()),Qc.exports
}

var Jc={
  exports:{

}

}

,ae={

}

;
  var z0;
  function qx(){
  if(z0)return ae;
  z0=1;
  var a=ku();
  function i(p){
  var m="https://react.dev/errors/"+p;
  if(1<arguments.length){
  m+="?args[]="+encodeURIComponent(arguments[1]);
  for(var x=2;
  x<arguments.length;
  x++)m+="&args[]="+encodeURIComponent(arguments[x])
}

return"Minified React error #"+p+";
   visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}

function l(){

}

var o={
  d:{
  f:l,r:function(){
  throw Error(i(522))
}

,D:l,C:l,L:l,m:l,X:l,S:l,M:l
}

,p:0,findDOMNode:null
}

,u=Symbol.for("react.portal");
  function d(p,m,x){
  var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;
  return{
  $$typeof:u,key:b==null?null:""+b,children:p,containerInfo:m,implementation:x
}

}

var f=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function y(p,m){
  if(p==="font")return"";
  if(typeof m=="string")return m==="use-credentials"?m:""
}

return ae.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,ae.createPortal=function(p,m){
  var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;
  if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(i(299));
  return d(p,m,null,x)
}

,ae.flushSync=function(p){
  var m=f.T,x=o.p;
  try{
  if(f.T=null,o.p=2,p)return p()
}

finally{
  f.T=m,o.p=x,o.d.f()
}

}

,ae.preconnect=function(p,m){
  typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,o.d.C(p,m))
}

,ae.prefetchDNS=function(p){
  typeof p=="string"&&o.d.D(p)
}

,ae.preinit=function(p,m){
  if(typeof p=="string"&&m&&typeof m.as=="string"){
  var x=m.as,b=y(x,m.crossOrigin),S=typeof m.integrity=="string"?m.integrity:void 0,N=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;
  x==="style"?o.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{
  crossOrigin:b,integrity:S,fetchPriority:N
}

):x==="script"&&o.d.X(p,{
  crossOrigin:b,integrity:S,fetchPriority:N,nonce:typeof m.nonce=="string"?m.nonce:void 0
}

)
}

}

,ae.preinitModule=function(p,m){
  if(typeof p=="string")if(typeof m=="object"&&m!==null){
  if(m.as==null||m.as==="script"){
  var x=y(m.as,m.crossOrigin);
  o.d.M(p,{
  crossOrigin:x,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0
}

)
}

}

else m==null&&o.d.M(p)
}

,ae.preload=function(p,m){
  if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){
  var x=m.as,b=y(x,m.crossOrigin);
  o.d.L(p,x,{
  crossOrigin:b,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0
}

)
}

}

,ae.preloadModule=function(p,m){
  if(typeof p=="string")if(m){
  var x=y(m.as,m.crossOrigin);
  o.d.m(p,{
  as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:x,integrity:typeof m.integrity=="string"?m.integrity:void 0
}

)
}

else o.d.m(p)
}

,ae.requestFormReset=function(p){
  o.d.r(p)
}

,ae.unstable_batchedUpdates=function(p,m){
  return p(m)
}

,ae.useFormState=function(p,m,x){
  return f.H.useFormState(p,m,x)
}

,ae.useFormStatus=function(){
  return f.H.useHostTransitionStatus()
}

,ae.version="19.2.3",ae
}

var R0;
  function Yx(){
  if(R0)return Jc.exports;
  R0=1;
  function a(){
  if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{
  __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)
}

catch(i){
  console.error(i)
}

}

return a(),Jc.exports=qx(),Jc.exports
}

var O0;
  function Xx(){
  if(O0)return hs;
  O0=1;
  var a=Gx(),i=ku(),l=Yx();
  function o(t){
  var e="https://react.dev/errors/"+t;
  if(1<arguments.length){
  e+="?args[]="+encodeURIComponent(arguments[1]);
  for(var n=2;
  n<arguments.length;
  n++)e+="&args[]="+encodeURIComponent(arguments[n])
}

return"Minified React error #"+t+";
   visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}

function u(t){
  return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)
}

function d(t){
  var e=t,n=t;
  if(t.alternate)for(;
  e.return;
  )e=e.return;
  else{
  t=e;
  do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;
  while(t)
}

return e.tag===3?n:null
}

function f(t){
  if(t.tag===13){
  var e=t.memoizedState;
  if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated
}

return null
}

function y(t){
  if(t.tag===31){
  var e=t.memoizedState;
  if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated
}

return null
}

function p(t){
  if(d(t)!==t)throw Error(o(188))
}

function m(t){
  var e=t.alternate;
  if(!e){
  if(e=d(t),e===null)throw Error(o(188));
  return e!==t?null:t
}

for(var n=t,s=e;
  ;
  ){
  var r=n.return;
  if(r===null)break;
  var c=r.alternate;
  if(c===null){
  if(s=r.return,s!==null){
  n=s;
  continue
}

break
}

if(r.child===c.child){
  for(c=r.child;
  c;
  ){
  if(c===n)return p(r),t;
  if(c===s)return p(r),e;
  c=c.sibling
}

throw Error(o(188))
}

if(n.return!==s.return)n=r,s=c;
  else{
  for(var h=!1,v=r.child;
  v;
  ){
  if(v===n){
  h=!0,n=r,s=c;
  break
}

if(v===s){
  h=!0,s=r,n=c;
  break
}

v=v.sibling
}

if(!h){
  for(v=c.child;
  v;
  ){
  if(v===n){
  h=!0,n=c,s=r;
  break
}

if(v===s){
  h=!0,s=c,n=r;
  break
}

v=v.sibling
}

if(!h)throw Error(o(189))
}

}

if(n.alternate!==s)throw Error(o(190))
}

if(n.tag!==3)throw Error(o(188));
  return n.stateNode.current===n?t:e
}

function x(t){
  var e=t.tag;
  if(e===5||e===26||e===27||e===6)return t;
  for(t=t.child;
  t!==null;
  ){
  if(e=x(t),e!==null)return e;
  t=t.sibling
}

return null
}

var b=Object.assign,S=Symbol.for("react.element"),N=Symbol.for("react.transitional.element"),z=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),X=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),Y=Symbol.for("react.consumer"),q=Symbol.for("react.context"),k=Symbol.for("react.forward_ref"),Z=Symbol.for("react.suspense"),at=Symbol.for("react.suspense_list"),tt=Symbol.for("react.memo"),$=Symbol.for("react.lazy"),it=Symbol.for("react.activity"),jt=Symbol.for("react.memo_cache_sentinel"),Jt=Symbol.iterator;
  function Ot(t){
  return t===null||typeof t!="object"?null:(t=Jt&&t[Jt]||t["@@iterator"],typeof t=="function"?t:null)
}

var Ce=Symbol.for("react.client.reference");
  function qe(t){
  if(t==null)return null;
  if(typeof t=="function")return t.$$typeof===Ce?null:t.displayName||t.name||null;
  if(typeof t=="string")return t;
  switch(t){
  case U:return"Fragment";
  case L:return"Profiler";
  case X:return"StrictMode";
  case Z:return"Suspense";
  case at:return"SuspenseList";
  case it:return"Activity"
}

if(typeof t=="object")switch(t.$$typeof){
  case z:return"Portal";
  case q:return t.displayName||"Context";
  case Y:return(t._context.displayName||"Context")+".Consumer";
  case k:var e=t.render;
  return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;
  case tt:return e=t.displayName||null,e!==null?e:qe(t.type)||"Memo";
  case $:e=t._payload,t=t._init;
  try{
  return qe(t(e))
}

catch{

}

}

return null
}

var ce=Array.isArray,V=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K=l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J={
  pending:!1,data:null,method:null,action:null
}

,rt=[],yt=-1;
  function w(t){
  return{
  current:t
}

}

function H(t){
  0>yt||(t.current=rt[yt],rt[yt]=null,yt--)
}

function Q(t,e){
  yt++,rt[yt]=t.current,t.current=e
}

var P=w(null),lt=w(null),ft=w(null),Tt=w(null);
  function se(t,e){
  switch(Q(ft,e),Q(lt,t),Q(P,null),e.nodeType){
  case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?Jm(t):0;
  break;
  default:if(t=e.tagName,e=e.namespaceURI)e=Jm(e),t=Fm(e,t);
  else switch(t){
  case"svg":t=1;
  break;
  case"math":t=2;
  break;
  default:t=0
}

}

H(P),Q(P,t)
}

function Ut(){
  H(P),H(lt),H(ft)
}

function xi(t){
  t.memoizedState!==null&&Q(Tt,t);
  var e=P.current,n=Fm(e,t.type);
  e!==n&&(Q(lt,t),Q(P,n))
}

function Ds(t){
  lt.current===t&&(H(P),H(lt)),Tt.current===t&&(H(Tt),rs._currentValue=J)
}

var Eo,wf;
  function $n(t){
  if(Eo===void 0)try{
  throw Error()
}

catch(n){
  var e=n.stack.trim().match(/\n( *(at )?)/);
  Eo=e&&e[1]||"",wf=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""
}

return`
`+Eo+t+wf
}

var No=!1;
  function Mo(t,e){
  if(!t||No)return"";
  No=!0;
  var n=Error.prepareStackTrace;
  Error.prepareStackTrace=void 0;
  try{
  var s={
  DetermineComponentFrameRoot:function(){
  try{
  if(e){
  var B=function(){
  throw Error()
}

;
  if(Object.defineProperty(B.prototype,"props",{
  set:function(){
  throw Error()
}

}

),typeof Reflect=="object"&&Reflect.construct){
  try{
  Reflect.construct(B,[])
}

catch(D){
  var j=D
}

Reflect.construct(t,[],B)
}

else{
  try{
  B.call()
}

catch(D){
  j=D
}

t.call(B.prototype)
}

}

else{
  try{
  throw Error()
}

catch(D){
  j=D
}

(B=t())&&typeof B.catch=="function"&&B.catch(function(){

}

)
}

}

catch(D){
  if(D&&j&&typeof D.stack=="string")return[D.stack,j.stack]
}

return[null,null]
}

}

;
  s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";
  var r=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");
  r&&r.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{
  value:"DetermineComponentFrameRoot"
}

);
  var c=s.DetermineComponentFrameRoot(),h=c[0],v=c[1];
  if(h&&v){
  var T=h.split(`
`),C=v.split(`
`);
  for(r=s=0;
  s<T.length&&!T[s].includes("DetermineComponentFrameRoot");
  )s++;
  for(;
  r<C.length&&!C[r].includes("DetermineComponentFrameRoot");
  )r++;
  if(s===T.length||r===C.length)for(s=T.length-1,r=C.length-1;
  1<=s&&0<=r&&T[s]!==C[r];
  )r--;
  for(;
  1<=s&&0<=r;
  s--,r--)if(T[s]!==C[r]){
  if(s!==1||r!==1)do if(s--,r--,0>r||T[s]!==C[r]){
  var O=`
`+T[s].replace(" at new "," at ");
  return t.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",t.displayName)),O
}

while(1<=s&&0<=r);
  break
}

}

}

finally{
  No=!1,Error.prepareStackTrace=n
}

return(n=t?t.displayName||t.name:"")?$n(n):""
}

function h1(t,e){
  switch(t.tag){
  case 26:case 27:case 5:return $n(t.type);
  case 16:return $n("Lazy");
  case 13:return t.child!==e&&e!==null?$n("Suspense Fallback"):$n("Suspense");
  case 19:return $n("SuspenseList");
  case 0:case 15:return Mo(t.type,!1);
  case 11:return Mo(t.type.render,!1);
  case 1:return Mo(t.type,!0);
  case 31:return $n("Activity");
  default:return""
}

}

function Ef(t){
  try{
  var e="",n=null;
  do e+=h1(t,n),n=t,t=t.return;
  while(t);
  return e
}

catch(s){
  return`
Error generating stack: `+s.message+`
`+s.stack
}

}

var Co=Object.prototype.hasOwnProperty,jo=a.unstable_scheduleCallback,Do=a.unstable_cancelCallback,m1=a.unstable_shouldYield,p1=a.unstable_requestPaint,ve=a.unstable_now,y1=a.unstable_getCurrentPriorityLevel,Nf=a.unstable_ImmediatePriority,Mf=a.unstable_UserBlockingPriority,zs=a.unstable_NormalPriority,g1=a.unstable_LowPriority,Cf=a.unstable_IdlePriority,v1=a.log,x1=a.unstable_setDisableYieldValue,bi=null,xe=null;
  function An(t){
  if(typeof v1=="function"&&x1(t),xe&&typeof xe.setStrictMode=="function")try{
  xe.setStrictMode(bi,t)
}

catch{

}

}

var be=Math.clz32?Math.clz32:T1,b1=Math.log,S1=Math.LN2;
  function T1(t){
  return t>>>=0,t===0?32:31-(b1(t)/S1|0)|0
}

var Rs=256,Os=262144,Vs=4194304;
  function In(t){
  var e=t&42;
  if(e!==0)return e;
  switch(t&-t){
  case 1:return 1;
  case 2:return 2;
  case 4:return 4;
  case 8:return 8;
  case 16:return 16;
  case 32:return 32;
  case 64:return 64;
  case 128:return 128;
  case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;
  case 262144:case 524288:case 1048576:case 2097152:return t&3932160;
  case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;
  case 67108864:return 67108864;
  case 134217728:return 134217728;
  case 268435456:return 268435456;
  case 536870912:return 536870912;
  case 1073741824:return 0;
  default:return t
}

}

function _s(t,e,n){
  var s=t.pendingLanes;
  if(s===0)return 0;
  var r=0,c=t.suspendedLanes,h=t.pingedLanes;
  t=t.warmLanes;
  var v=s&134217727;
  return v!==0?(s=v&~c,s!==0?r=In(s):(h&=v,h!==0?r=In(h):n||(n=v&~t,n!==0&&(r=In(n))))):(v=s&~c,v!==0?r=In(v):h!==0?r=In(h):n||(n=s&~t,n!==0&&(r=In(n)))),r===0?0:e!==0&&e!==r&&(e&c)===0&&(c=r&-r,n=e&-e,c>=n||c===32&&(n&4194048)!==0)?e:r
}

function Si(t,e){
  return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0
}

function A1(t,e){
  switch(t){
  case 1:case 2:case 4:case 8:case 64:return e+250;
  case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;
  case 4194304:case 8388608:case 16777216:case 33554432:return-1;
  case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;
  default:return-1
}

}

function jf(){
  var t=Vs;
  return Vs<<=1,(Vs&62914560)===0&&(Vs=4194304),t
}

function zo(t){
  for(var e=[],n=0;
  31>n;
  n++)e.push(t);
  return e
}

function Ti(t,e){
  t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)
}

function w1(t,e,n,s,r,c){
  var h=t.pendingLanes;
  t.pendingLanes=n,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=n,t.entangledLanes&=n,t.errorRecoveryDisabledLanes&=n,t.shellSuspendCounter=0;
  var v=t.entanglements,T=t.expirationTimes,C=t.hiddenUpdates;
  for(n=h&~n;
  0<n;
  ){
  var O=31-be(n),B=1<<O;
  v[O]=0,T[O]=-1;
  var j=C[O];
  if(j!==null)for(C[O]=null,O=0;
  O<j.length;
  O++){
  var D=j[O];
  D!==null&&(D.lane&=-536870913)
}

n&=~B
}

s!==0&&Df(t,s,0),c!==0&&r===0&&t.tag!==0&&(t.suspendedLanes|=c&~(h&~e))
}

function Df(t,e,n){
  t.pendingLanes|=e,t.suspendedLanes&=~e;
  var s=31-be(e);
  t.entangledLanes|=e,t.entanglements[s]=t.entanglements[s]|1073741824|n&261930
}

function zf(t,e){
  var n=t.entangledLanes|=e;
  for(t=t.entanglements;
  n;
  ){
  var s=31-be(n),r=1<<s;
  r&e|t[s]&e&&(t[s]|=e),n&=~r
}

}

function Rf(t,e){
  var n=e&-e;
  return n=(n&42)!==0?1:Ro(n),(n&(t.suspendedLanes|e))!==0?0:n
}

function Ro(t){
  switch(t){
  case 2:t=1;
  break;
  case 8:t=4;
  break;
  case 32:t=16;
  break;
  case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;
  break;
  case 268435456:t=134217728;
  break;
  default:t=0
}

return t
}

function Oo(t){
  return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2
}

function Of(){
  var t=K.p;
  return t!==0?t:(t=window.event,t===void 0?32:v0(t.type))
}

function Vf(t,e){
  var n=K.p;
  try{
  return K.p=t,e()
}

finally{
  K.p=n
}

}

var wn=Math.random().toString(36).slice(2),$t="__reactFiber$"+wn,ue="__reactProps$"+wn,Aa="__reactContainer$"+wn,Vo="__reactEvents$"+wn,E1="__reactListeners$"+wn,N1="__reactHandles$"+wn,_f="__reactResources$"+wn,Ai="__reactMarker$"+wn;
  function _o(t){
  delete t[$t],delete t[ue],delete t[Vo],delete t[E1],delete t[N1]
}

function wa(t){
  var e=t[$t];
  if(e)return e;
  for(var n=t.parentNode;
  n;
  ){
  if(e=n[Aa]||n[$t]){
  if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=n0(t);
  t!==null;
  ){
  if(n=t[$t])return n;
  t=n0(t)
}

return e
}

t=n,n=t.parentNode
}

return null
}

function Ea(t){
  if(t=t[$t]||t[Aa]){
  var e=t.tag;
  if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t
}

return null
}

function wi(t){
  var e=t.tag;
  if(e===5||e===26||e===27||e===6)return t.stateNode;
  throw Error(o(33))
}

function Na(t){
  var e=t[_f];
  return e||(e=t[_f]={
  hoistableStyles:new Map,hoistableScripts:new Map
}

),e
}

function Ft(t){
  t[Ai]=!0
}

var Bf=new Set,Hf={

}

;
  function ta(t,e){
  Ma(t,e),Ma(t+"Capture",e)
}

function Ma(t,e){
  for(Hf[t]=e,t=0;
  t<e.length;
  t++)Bf.add(e[t])
}

var M1=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Uf={

}

,Lf={

}

;
  function C1(t){
  return Co.call(Lf,t)?!0:Co.call(Uf,t)?!1:M1.test(t)?Lf[t]=!0:(Uf[t]=!0,!1)
}

function Bs(t,e,n){
  if(C1(e))if(n===null)t.removeAttribute(e);
  else{
  switch(typeof n){
  case"undefined":case"function":case"symbol":t.removeAttribute(e);
  return;
  case"boolean":var s=e.toLowerCase().slice(0,5);
  if(s!=="data-"&&s!=="aria-"){
  t.removeAttribute(e);
  return
}

}

t.setAttribute(e,""+n)
}

}

function Hs(t,e,n){
  if(n===null)t.removeAttribute(e);
  else{
  switch(typeof n){
  case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);
  return
}

t.setAttribute(e,""+n)
}

}

function an(t,e,n,s){
  if(s===null)t.removeAttribute(n);
  else{
  switch(typeof s){
  case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);
  return
}

t.setAttributeNS(e,n,""+s)
}

}

function je(t){
  switch(typeof t){
  case"bigint":case"boolean":case"number":case"string":case"undefined":return t;
  case"object":return t;
  default:return""
}

}

function Gf(t){
  var e=t.type;
  return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")
}

function j1(t,e,n){
  var s=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);
  if(!t.hasOwnProperty(e)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){
  var r=s.get,c=s.set;
  return Object.defineProperty(t,e,{
  configurable:!0,get:function(){
  return r.call(this)
}

,set:function(h){
  n=""+h,c.call(this,h)
}

}

),Object.defineProperty(t,e,{
  enumerable:s.enumerable
}

),{
  getValue:function(){
  return n
}

,setValue:function(h){
  n=""+h
}

,stopTracking:function(){
  t._valueTracker=null,delete t[e]
}

}

}

}

function Bo(t){
  if(!t._valueTracker){
  var e=Gf(t)?"checked":"value";
  t._valueTracker=j1(t,e,""+t[e])
}

}

function qf(t){
  if(!t)return!1;
  var e=t._valueTracker;
  if(!e)return!0;
  var n=e.getValue(),s="";
  return t&&(s=Gf(t)?t.checked?"true":"false":t.value),t=s,t!==n?(e.setValue(t),!0):!1
}

function Us(t){
  if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;
  try{
  return t.activeElement||t.body
}

catch{
  return t.body
}

}

var D1=/[\n"\\]/g;
  function De(t){
  return t.replace(D1,function(e){
  return"\\"+e.charCodeAt(0).toString(16)+" "
}

)
}

function Ho(t,e,n,s,r,c,h,v){
  t.name="",h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"?t.type=h:t.removeAttribute("type"),e!=null?h==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+je(e)):t.value!==""+je(e)&&(t.value=""+je(e)):h!=="submit"&&h!=="reset"||t.removeAttribute("value"),e!=null?Uo(t,h,je(e)):n!=null?Uo(t,h,je(n)):s!=null&&t.removeAttribute("value"),r==null&&c!=null&&(t.defaultChecked=!!c),r!=null&&(t.checked=r&&typeof r!="function"&&typeof r!="symbol"),v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?t.name=""+je(v):t.removeAttribute("name")
}

function Yf(t,e,n,s,r,c,h,v){
  if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(t.type=c),e!=null||n!=null){
  if(!(c!=="submit"&&c!=="reset"||e!=null)){
  Bo(t);
  return
}

n=n!=null?""+je(n):"",e=e!=null?""+je(e):n,v||e===t.value||(t.value=e),t.defaultValue=e
}

s=s??r,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=v?t.checked:!!s,t.defaultChecked=!!s,h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(t.name=h),Bo(t)
}

function Uo(t,e,n){
  e==="number"&&Us(t.ownerDocument)===t||t.defaultValue===""+n||(t.defaultValue=""+n)
}

function Ca(t,e,n,s){
  if(t=t.options,e){
  e={

}

;
  for(var r=0;
  r<n.length;
  r++)e["$"+n[r]]=!0;
  for(n=0;
  n<t.length;
  n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&s&&(t[n].defaultSelected=!0)
}

else{
  for(n=""+je(n),e=null,r=0;
  r<t.length;
  r++){
  if(t[r].value===n){
  t[r].selected=!0,s&&(t[r].defaultSelected=!0);
  return
}

e!==null||t[r].disabled||(e=t[r])
}

e!==null&&(e.selected=!0)
}

}

function Xf(t,e,n){
  if(e!=null&&(e=""+je(e),e!==t.value&&(t.value=e),n==null)){
  t.defaultValue!==e&&(t.defaultValue=e);
  return
}

t.defaultValue=n!=null?""+je(n):""
}

function kf(t,e,n,s){
  if(e==null){
  if(s!=null){
  if(n!=null)throw Error(o(92));
  if(ce(s)){
  if(1<s.length)throw Error(o(93));
  s=s[0]
}

n=s
}

n==null&&(n=""),e=n
}

n=je(e),t.defaultValue=n,s=t.textContent,s===n&&s!==""&&s!==null&&(t.value=s),Bo(t)
}

function ja(t,e){
  if(e){
  var n=t.firstChild;
  if(n&&n===t.lastChild&&n.nodeType===3){
  n.nodeValue=e;
  return
}

}

t.textContent=e
}

var z1=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
  function Kf(t,e,n){
  var s=e.indexOf("--")===0;
  n==null||typeof n=="boolean"||n===""?s?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":s?t.setProperty(e,n):typeof n!="number"||n===0||z1.has(e)?e==="float"?t.cssFloat=n:t[e]=(""+n).trim():t[e]=n+"px"
}

function Qf(t,e,n){
  if(e!=null&&typeof e!="object")throw Error(o(62));
  if(t=t.style,n!=null){
  for(var s in n)!n.hasOwnProperty(s)||e!=null&&e.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="");
  for(var r in e)s=e[r],e.hasOwnProperty(r)&&n[r]!==s&&Kf(t,r,s)
}

else for(var c in e)e.hasOwnProperty(c)&&Kf(t,c,e[c])
}

function Lo(t){
  if(t.indexOf("-")===-1)return!1;
  switch(t){
  case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;
  default:return!0
}

}

var R1=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),O1=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Ls(t){
  return O1.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t
}

function sn(){

}

var Go=null;
  function qo(t){
  return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t
}

var Da=null,za=null;
  function Zf(t){
  var e=Ea(t);
  if(e&&(t=e.stateNode)){
  var n=t[ue]||null;
  t:switch(t=e.stateNode,e.type){
  case"input":if(Ho(t,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),e=n.name,n.type==="radio"&&e!=null){
  for(n=t;
  n.parentNode;
  )n=n.parentNode;
  for(n=n.querySelectorAll('input[name="'+De(""+e)+'"][type="radio"]'),e=0;
  e<n.length;
  e++){
  var s=n[e];
  if(s!==t&&s.form===t.form){
  var r=s[ue]||null;
  if(!r)throw Error(o(90));
  Ho(s,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name)
}

}

for(e=0;
  e<n.length;
  e++)s=n[e],s.form===t.form&&qf(s)
}

break t;
  case"textarea":Xf(t,n.value,n.defaultValue);
  break t;
  case"select":e=n.value,e!=null&&Ca(t,!!n.multiple,e,!1)
}

}

}

var Yo=!1;
  function Jf(t,e,n){
  if(Yo)return t(e,n);
  Yo=!0;
  try{
  var s=t(e);
  return s
}

finally{
  if(Yo=!1,(Da!==null||za!==null)&&(Nl(),Da&&(e=Da,t=za,za=Da=null,Zf(e),t)))for(e=0;
  e<t.length;
  e++)Zf(t[e])
}

}

function Ei(t,e){
  var n=t.stateNode;
  if(n===null)return null;
  var s=n[ue]||null;
  if(s===null)return null;
  n=s[e];
  t:switch(e){
  case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;
  break t;
  default:t=!1
}

if(t)return null;
  if(n&&typeof n!="function")throw Error(o(231,e,typeof n));
  return n
}

var ln=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xo=!1;
  if(ln)try{
  var Ni={

}

;
  Object.defineProperty(Ni,"passive",{
  get:function(){
  Xo=!0
}

}

),window.addEventListener("test",Ni,Ni),window.removeEventListener("test",Ni,Ni)
}

catch{
  Xo=!1
}

var En=null,ko=null,Gs=null;
  function Ff(){
  if(Gs)return Gs;
  var t,e=ko,n=e.length,s,r="value"in En?En.value:En.textContent,c=r.length;
  for(t=0;
  t<n&&e[t]===r[t];
  t++);
  var h=n-t;
  for(s=1;
  s<=h&&e[n-s]===r[c-s];
  s++);
  return Gs=r.slice(t,1<s?1-s:void 0)
}

function qs(t){
  var e=t.keyCode;
  return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0
}

function Ys(){
  return!0
}

function Wf(){
  return!1
}

function fe(t){
  function e(n,s,r,c,h){
  this._reactName=n,this._targetInst=r,this.type=s,this.nativeEvent=c,this.target=h,this.currentTarget=null;
  for(var v in t)t.hasOwnProperty(v)&&(n=t[v],this[v]=n?n(c):c[v]);
  return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?Ys:Wf,this.isPropagationStopped=Wf,this
}

return b(e.prototype,{
  preventDefault:function(){
  this.defaultPrevented=!0;
  var n=this.nativeEvent;
  n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ys)
}

,stopPropagation:function(){
  var n=this.nativeEvent;
  n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ys)
}

,persist:function(){

}

,isPersistent:Ys
}

),e
}

var ea={
  eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){
  return t.timeStamp||Date.now()
}

,defaultPrevented:0,isTrusted:0
}

,Xs=fe(ea),Mi=b({

}

,ea,{
  view:0,detail:0
}

),V1=fe(Mi),Ko,Qo,Ci,ks=b({

}

,Mi,{
  screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Jo,button:0,buttons:0,relatedTarget:function(t){
  return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget
}

,movementX:function(t){
  return"movementX"in t?t.movementX:(t!==Ci&&(Ci&&t.type==="mousemove"?(Ko=t.screenX-Ci.screenX,Qo=t.screenY-Ci.screenY):Qo=Ko=0,Ci=t),Ko)
}

,movementY:function(t){
  return"movementY"in t?t.movementY:Qo
}

}

),Pf=fe(ks),_1=b({

}

,ks,{
  dataTransfer:0
}

),B1=fe(_1),H1=b({

}

,Mi,{
  relatedTarget:0
}

),Zo=fe(H1),U1=b({

}

,ea,{
  animationName:0,elapsedTime:0,pseudoElement:0
}

),L1=fe(U1),G1=b({

}

,ea,{
  clipboardData:function(t){
  return"clipboardData"in t?t.clipboardData:window.clipboardData
}

}

),q1=fe(G1),Y1=b({

}

,ea,{
  data:0
}

),$f=fe(Y1),X1={
  Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"
}

,k1={
  8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"
}

,K1={
  Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"
}

;
  function Q1(t){
  var e=this.nativeEvent;
  return e.getModifierState?e.getModifierState(t):(t=K1[t])?!!e[t]:!1
}

function Jo(){
  return Q1
}

var Z1=b({

}

,Mi,{
  key:function(t){
  if(t.key){
  var e=X1[t.key]||t.key;
  if(e!=="Unidentified")return e
}

return t.type==="keypress"?(t=qs(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?k1[t.keyCode]||"Unidentified":""
}

,code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Jo,charCode:function(t){
  return t.type==="keypress"?qs(t):0
}

,keyCode:function(t){
  return t.type==="keydown"||t.type==="keyup"?t.keyCode:0
}

,which:function(t){
  return t.type==="keypress"?qs(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0
}

}

),J1=fe(Z1),F1=b({

}

,ks,{
  pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0
}

),If=fe(F1),W1=b({

}

,Mi,{
  touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Jo
}

),P1=fe(W1),$1=b({

}

,ea,{
  propertyName:0,elapsedTime:0,pseudoElement:0
}

),I1=fe($1),tv=b({

}

,ks,{
  deltaX:function(t){
  return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0
}

,deltaY:function(t){
  return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0
}

,deltaZ:0,deltaMode:0
}

),ev=fe(tv),nv=b({

}

,ea,{
  newState:0,oldState:0
}

),av=fe(nv),iv=[9,13,27,32],Fo=ln&&"CompositionEvent"in window,ji=null;
  ln&&"documentMode"in document&&(ji=document.documentMode);
  var sv=ln&&"TextEvent"in window&&!ji,td=ln&&(!Fo||ji&&8<ji&&11>=ji),ed=" ",nd=!1;
  function ad(t,e){
  switch(t){
  case"keyup":return iv.indexOf(e.keyCode)!==-1;
  case"keydown":return e.keyCode!==229;
  case"keypress":case"mousedown":case"focusout":return!0;
  default:return!1
}

}

function id(t){
  return t=t.detail,typeof t=="object"&&"data"in t?t.data:null
}

var Ra=!1;
  function lv(t,e){
  switch(t){
  case"compositionend":return id(e);
  case"keypress":return e.which!==32?null:(nd=!0,ed);
  case"textInput":return t=e.data,t===ed&&nd?null:t;
  default:return null
}

}

function ov(t,e){
  if(Ra)return t==="compositionend"||!Fo&&ad(t,e)?(t=Ff(),Gs=ko=En=null,Ra=!1,t):null;
  switch(t){
  case"paste":return null;
  case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){
  if(e.char&&1<e.char.length)return e.char;
  if(e.which)return String.fromCharCode(e.which)
}

return null;
  case"compositionend":return td&&e.locale!=="ko"?null:e.data;
  default:return null
}

}

var rv={
  color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0
}

;
  function sd(t){
  var e=t&&t.nodeName&&t.nodeName.toLowerCase();
  return e==="input"?!!rv[t.type]:e==="textarea"
}

function ld(t,e,n,s){
  Da?za?za.push(s):za=[s]:Da=s,e=Ol(e,"onChange"),0<e.length&&(n=new Xs("onChange","change",null,n,s),t.push({
  event:n,listeners:e
}

))
}

var Di=null,zi=null;
  function cv(t){
  Ym(t,0)
}

function Ks(t){
  var e=wi(t);
  if(qf(e))return t
}

function od(t,e){
  if(t==="change")return e
}

var rd=!1;
  if(ln){
  var Wo;
  if(ln){
  var Po="oninput"in document;
  if(!Po){
  var cd=document.createElement("div");
  cd.setAttribute("oninput","return;
  "),Po=typeof cd.oninput=="function"
}

Wo=Po
}

else Wo=!1;
  rd=Wo&&(!document.documentMode||9<document.documentMode)
}

function ud(){
  Di&&(Di.detachEvent("onpropertychange",fd),zi=Di=null)
}

function fd(t){
  if(t.propertyName==="value"&&Ks(zi)){
  var e=[];
  ld(e,zi,t,qo(t)),Jf(cv,e)
}

}

function uv(t,e,n){
  t==="focusin"?(ud(),Di=e,zi=n,Di.attachEvent("onpropertychange",fd)):t==="focusout"&&ud()
}

function fv(t){
  if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ks(zi)
}

function dv(t,e){
  if(t==="click")return Ks(e)
}

function hv(t,e){
  if(t==="input"||t==="change")return Ks(e)
}

function mv(t,e){
  return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e
}

var Se=typeof Object.is=="function"?Object.is:mv;
  function Ri(t,e){
  if(Se(t,e))return!0;
  if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;
  var n=Object.keys(t),s=Object.keys(e);
  if(n.length!==s.length)return!1;
  for(s=0;
  s<n.length;
  s++){
  var r=n[s];
  if(!Co.call(e,r)||!Se(t[r],e[r]))return!1
}

return!0
}

function dd(t){
  for(;
  t&&t.firstChild;
  )t=t.firstChild;
  return t
}

function hd(t,e){
  var n=dd(t);
  t=0;
  for(var s;
  n;
  ){
  if(n.nodeType===3){
  if(s=t+n.textContent.length,t<=e&&s>=e)return{
  node:n,offset:e-t
}

;
  t=s
}

t:{
  for(;
  n;
  ){
  if(n.nextSibling){
  n=n.nextSibling;
  break t
}

n=n.parentNode
}

n=void 0
}

n=dd(n)
}

}

function md(t,e){
  return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?md(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1
}

function pd(t){
  t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;
  for(var e=Us(t.document);
  e instanceof t.HTMLIFrameElement;
  ){
  try{
  var n=typeof e.contentWindow.location.href=="string"
}

catch{
  n=!1
}

if(n)t=e.contentWindow;
  else break;
  e=Us(t.document)
}

return e
}

function $o(t){
  var e=t&&t.nodeName&&t.nodeName.toLowerCase();
  return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")
}

var pv=ln&&"documentMode"in document&&11>=document.documentMode,Oa=null,Io=null,Oi=null,tr=!1;
  function yd(t,e,n){
  var s=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;
  tr||Oa==null||Oa!==Us(s)||(s=Oa,"selectionStart"in s&&$o(s)?s={
  start:s.selectionStart,end:s.selectionEnd
}

:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={
  anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset
}

),Oi&&Ri(Oi,s)||(Oi=s,s=Ol(Io,"onSelect"),0<s.length&&(e=new Xs("onSelect","select",null,e,n),t.push({
  event:e,listeners:s
}

),e.target=Oa)))
}

function na(t,e){
  var n={

}

;
  return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n
}

var Va={
  animationend:na("Animation","AnimationEnd"),animationiteration:na("Animation","AnimationIteration"),animationstart:na("Animation","AnimationStart"),transitionrun:na("Transition","TransitionRun"),transitionstart:na("Transition","TransitionStart"),transitioncancel:na("Transition","TransitionCancel"),transitionend:na("Transition","TransitionEnd")
}

,er={

}

,gd={

}

;
  ln&&(gd=document.createElement("div").style,"AnimationEvent"in window||(delete Va.animationend.animation,delete Va.animationiteration.animation,delete Va.animationstart.animation),"TransitionEvent"in window||delete Va.transitionend.transition);
  function aa(t){
  if(er[t])return er[t];
  if(!Va[t])return t;
  var e=Va[t],n;
  for(n in e)if(e.hasOwnProperty(n)&&n in gd)return er[t]=e[n];
  return t
}

var vd=aa("animationend"),xd=aa("animationiteration"),bd=aa("animationstart"),yv=aa("transitionrun"),gv=aa("transitionstart"),vv=aa("transitioncancel"),Sd=aa("transitionend"),Td=new Map,nr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  nr.push("scrollEnd");
  function Ye(t,e){
  Td.set(t,e),ta(e,[t])
}

var Qs=typeof reportError=="function"?reportError:function(t){
  if(typeof window=="object"&&typeof window.ErrorEvent=="function"){
  var e=new window.ErrorEvent("error",{
  bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t
}

);
  if(!window.dispatchEvent(e))return
}

else if(typeof process=="object"&&typeof process.emit=="function"){
  process.emit("uncaughtException",t);
  return
}

console.error(t)
}

,ze=[],_a=0,ar=0;
  function Zs(){
  for(var t=_a,e=ar=_a=0;
  e<t;
  ){
  var n=ze[e];
  ze[e++]=null;
  var s=ze[e];
  ze[e++]=null;
  var r=ze[e];
  ze[e++]=null;
  var c=ze[e];
  if(ze[e++]=null,s!==null&&r!==null){
  var h=s.pending;
  h===null?r.next=r:(r.next=h.next,h.next=r),s.pending=r
}

c!==0&&Ad(n,r,c)
}

}

function Js(t,e,n,s){
  ze[_a++]=t,ze[_a++]=e,ze[_a++]=n,ze[_a++]=s,ar|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)
}

function ir(t,e,n,s){
  return Js(t,e,n,s),Fs(t)
}

function ia(t,e){
  return Js(t,null,null,e),Fs(t)
}

function Ad(t,e,n){
  t.lanes|=n;
  var s=t.alternate;
  s!==null&&(s.lanes|=n);
  for(var r=!1,c=t.return;
  c!==null;
  )c.childLanes|=n,s=c.alternate,s!==null&&(s.childLanes|=n),c.tag===22&&(t=c.stateNode,t===null||t._visibility&1||(r=!0)),t=c,c=c.return;
  return t.tag===3?(c=t.stateNode,r&&e!==null&&(r=31-be(n),t=c.hiddenUpdates,s=t[r],s===null?t[r]=[e]:s.push(e),e.lane=n|536870912),c):null
}

function Fs(t){
  if(50<es)throw es=0,hc=null,Error(o(185));
  for(var e=t.return;
  e!==null;
  )t=e,e=t.return;
  return t.tag===3?t.stateNode:null
}

var Ba={

}

;
  function xv(t,e,n,s){
  this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null
}

function Te(t,e,n,s){
  return new xv(t,e,n,s)
}

function sr(t){
  return t=t.prototype,!(!t||!t.isReactComponent)
}

function on(t,e){
  var n=t.alternate;
  return n===null?(n=Te(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&65011712,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{
  lanes:e.lanes,firstContext:e.firstContext
}

,n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n.refCleanup=t.refCleanup,n
}

function wd(t,e){
  t.flags&=65011714;
  var n=t.alternate;
  return n===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,t.type=n.type,e=n.dependencies,t.dependencies=e===null?null:{
  lanes:e.lanes,firstContext:e.firstContext
}

),t
}

function Ws(t,e,n,s,r,c){
  var h=0;
  if(s=t,typeof t=="function")sr(t)&&(h=1);
  else if(typeof t=="string")h=wx(t,n,P.current)?26:t==="html"||t==="head"||t==="body"?27:5;
  else t:switch(t){
  case it:return t=Te(31,n,e,r),t.elementType=it,t.lanes=c,t;
  case U:return sa(n.children,r,c,e);
  case X:h=8,r|=24;
  break;
  case L:return t=Te(12,n,e,r|2),t.elementType=L,t.lanes=c,t;
  case Z:return t=Te(13,n,e,r),t.elementType=Z,t.lanes=c,t;
  case at:return t=Te(19,n,e,r),t.elementType=at,t.lanes=c,t;
  default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){
  case q:h=10;
  break t;
  case Y:h=9;
  break t;
  case k:h=11;
  break t;
  case tt:h=14;
  break t;
  case $:h=16,s=null;
  break t
}

h=29,n=Error(o(130,t===null?"null":typeof t,"")),s=null
}

return e=Te(h,n,e,r),e.elementType=t,e.type=s,e.lanes=c,e
}

function sa(t,e,n,s){
  return t=Te(7,t,s,e),t.lanes=n,t
}

function lr(t,e,n){
  return t=Te(6,t,null,e),t.lanes=n,t
}

function Ed(t){
  var e=Te(18,null,null,0);
  return e.stateNode=t,e
}

function or(t,e,n){
  return e=Te(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={
  containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation
}

,e
}

var Nd=new WeakMap;
  function Re(t,e){
  if(typeof t=="object"&&t!==null){
  var n=Nd.get(t);
  return n!==void 0?n:(e={
  value:t,source:e,stack:Ef(e)
}

,Nd.set(t,e),e)
}

return{
  value:t,source:e,stack:Ef(e)
}

}

var Ha=[],Ua=0,Ps=null,Vi=0,Oe=[],Ve=0,Nn=null,Pe=1,$e="";
  function rn(t,e){
  Ha[Ua++]=Vi,Ha[Ua++]=Ps,Ps=t,Vi=e
}

function Md(t,e,n){
  Oe[Ve++]=Pe,Oe[Ve++]=$e,Oe[Ve++]=Nn,Nn=t;
  var s=Pe;
  t=$e;
  var r=32-be(s)-1;
  s&=~(1<<r),n+=1;
  var c=32-be(e)+r;
  if(30<c){
  var h=r-r%5;
  c=(s&(1<<h)-1).toString(32),s>>=h,r-=h,Pe=1<<32-be(e)+r|n<<r|s,$e=c+t
}

else Pe=1<<c|n<<r|s,$e=t
}

function rr(t){
  t.return!==null&&(rn(t,1),Md(t,1,0))
}

function cr(t){
  for(;
  t===Ps;
  )Ps=Ha[--Ua],Ha[Ua]=null,Vi=Ha[--Ua],Ha[Ua]=null;
  for(;
  t===Nn;
  )Nn=Oe[--Ve],Oe[Ve]=null,$e=Oe[--Ve],Oe[Ve]=null,Pe=Oe[--Ve],Oe[Ve]=null
}

function Cd(t,e){
  Oe[Ve++]=Pe,Oe[Ve++]=$e,Oe[Ve++]=Nn,Pe=e.id,$e=e.overflow,Nn=t
}

var It=null,Dt=null,gt=!1,Mn=null,_e=!1,ur=Error(o(519));
  function Cn(t){
  var e=Error(o(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));
  throw _i(Re(e,t)),ur
}

function jd(t){
  var e=t.stateNode,n=t.type,s=t.memoizedProps;
  switch(e[$t]=t,e[ue]=s,n){
  case"dialog":ht("cancel",e),ht("close",e);
  break;
  case"iframe":case"object":case"embed":ht("load",e);
  break;
  case"video":case"audio":for(n=0;
  n<as.length;
  n++)ht(as[n],e);
  break;
  case"source":ht("error",e);
  break;
  case"img":case"image":case"link":ht("error",e),ht("load",e);
  break;
  case"details":ht("toggle",e);
  break;
  case"input":ht("invalid",e),Yf(e,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);
  break;
  case"select":ht("invalid",e);
  break;
  case"textarea":ht("invalid",e),kf(e,s.value,s.defaultValue,s.children)
}

n=s.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||e.textContent===""+n||s.suppressHydrationWarning===!0||Qm(e.textContent,n)?(s.popover!=null&&(ht("beforetoggle",e),ht("toggle",e)),s.onScroll!=null&&ht("scroll",e),s.onScrollEnd!=null&&ht("scrollend",e),s.onClick!=null&&(e.onclick=sn),e=!0):e=!1,e||Cn(t,!0)
}

function Dd(t){
  for(It=t.return;
  It;
  )switch(It.tag){
  case 5:case 31:case 13:_e=!1;
  return;
  case 27:case 3:_e=!0;
  return;
  default:It=It.return
}

}

function La(t){
  if(t!==It)return!1;
  if(!gt)return Dd(t),gt=!0,!1;
  var e=t.tag,n;
  if((n=e!==3&&e!==27)&&((n=e===5)&&(n=t.type,n=!(n!=="form"&&n!=="button")||Cc(t.type,t.memoizedProps)),n=!n),n&&Dt&&Cn(t),Dd(t),e===13){
  if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(o(317));
  Dt=e0(t)
}

else if(e===31){
  if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(o(317));
  Dt=e0(t)
}

else e===27?(e=Dt,Yn(t.type)?(t=Oc,Oc=null,Dt=t):Dt=e):Dt=It?He(t.stateNode.nextSibling):null;
  return!0
}

function la(){
  Dt=It=null,gt=!1
}

function fr(){
  var t=Mn;
  return t!==null&&(pe===null?pe=t:pe.push.apply(pe,t),Mn=null),t
}

function _i(t){
  Mn===null?Mn=[t]:Mn.push(t)
}

var dr=w(null),oa=null,cn=null;
  function jn(t,e,n){
  Q(dr,e._currentValue),e._currentValue=n
}

function un(t){
  t._currentValue=dr.current,H(dr)
}

function hr(t,e,n){
  for(;
  t!==null;
  ){
  var s=t.alternate;
  if((t.childLanes&e)!==e?(t.childLanes|=e,s!==null&&(s.childLanes|=e)):s!==null&&(s.childLanes&e)!==e&&(s.childLanes|=e),t===n)break;
  t=t.return
}

}

function mr(t,e,n,s){
  var r=t.child;
  for(r!==null&&(r.return=t);
  r!==null;
  ){
  var c=r.dependencies;
  if(c!==null){
  var h=r.child;
  c=c.firstContext;
  t:for(;
  c!==null;
  ){
  var v=c;
  c=r;
  for(var T=0;
  T<e.length;
  T++)if(v.context===e[T]){
  c.lanes|=n,v=c.alternate,v!==null&&(v.lanes|=n),hr(c.return,n,t),s||(h=null);
  break t
}

c=v.next
}

}

else if(r.tag===18){
  if(h=r.return,h===null)throw Error(o(341));
  h.lanes|=n,c=h.alternate,c!==null&&(c.lanes|=n),hr(h,n,t),h=null
}

else h=r.child;
  if(h!==null)h.return=r;
  else for(h=r;
  h!==null;
  ){
  if(h===t){
  h=null;
  break
}

if(r=h.sibling,r!==null){
  r.return=h.return,h=r;
  break
}

h=h.return
}

r=h
}

}

function Ga(t,e,n,s){
  t=null;
  for(var r=e,c=!1;
  r!==null;
  ){
  if(!c){
  if((r.flags&524288)!==0)c=!0;
  else if((r.flags&262144)!==0)break
}

if(r.tag===10){
  var h=r.alternate;
  if(h===null)throw Error(o(387));
  if(h=h.memoizedProps,h!==null){
  var v=r.type;
  Se(r.pendingProps.value,h.value)||(t!==null?t.push(v):t=[v])
}

}

else if(r===Tt.current){
  if(h=r.alternate,h===null)throw Error(o(387));
  h.memoizedState.memoizedState!==r.memoizedState.memoizedState&&(t!==null?t.push(rs):t=[rs])
}

r=r.return
}

t!==null&&mr(e,t,n,s),e.flags|=262144
}

function $s(t){
  for(t=t.firstContext;
  t!==null;
  ){
  if(!Se(t.context._currentValue,t.memoizedValue))return!0;
  t=t.next
}

return!1
}

function ra(t){
  oa=t,cn=null,t=t.dependencies,t!==null&&(t.firstContext=null)
}

function te(t){
  return zd(oa,t)
}

function Is(t,e){
  return oa===null&&ra(t),zd(t,e)
}

function zd(t,e){
  var n=e._currentValue;
  if(e={
  context:e,memoizedValue:n,next:null
}

,cn===null){
  if(t===null)throw Error(o(308));
  cn=e,t.dependencies={
  lanes:0,firstContext:e
}

,t.flags|=524288
}

else cn=cn.next=e;
  return n
}

var bv=typeof AbortController<"u"?AbortController:function(){
  var t=[],e=this.signal={
  aborted:!1,addEventListener:function(n,s){
  t.push(s)
}

}

;
  this.abort=function(){
  e.aborted=!0,t.forEach(function(n){
  return n()
}

)
}

}

,Sv=a.unstable_scheduleCallback,Tv=a.unstable_NormalPriority,qt={
  $$typeof:q,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0
}

;
  function pr(){
  return{
  controller:new bv,data:new Map,refCount:0
}

}

function Bi(t){
  t.refCount--,t.refCount===0&&Sv(Tv,function(){
  t.controller.abort()
}

)
}

var Hi=null,yr=0,qa=0,Ya=null;
  function Av(t,e){
  if(Hi===null){
  var n=Hi=[];
  yr=0,qa=xc(),Ya={
  status:"pending",value:void 0,then:function(s){
  n.push(s)
}

}

}

return yr++,e.then(Rd,Rd),e
}

function Rd(){
  if(--yr===0&&Hi!==null){
  Ya!==null&&(Ya.status="fulfilled");
  var t=Hi;
  Hi=null,qa=0,Ya=null;
  for(var e=0;
  e<t.length;
  e++)(0,t[e])()
}

}

function wv(t,e){
  var n=[],s={
  status:"pending",value:null,reason:null,then:function(r){
  n.push(r)
}

}

;
  return t.then(function(){
  s.status="fulfilled",s.value=e;
  for(var r=0;
  r<n.length;
  r++)(0,n[r])(e)
}

,function(r){
  for(s.status="rejected",s.reason=r,r=0;
  r<n.length;
  r++)(0,n[r])(void 0)
}

),s
}

var Od=V.S;
  V.S=function(t,e){
  ym=ve(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&Av(t,e),Od!==null&&Od(t,e)
}

;
  var ca=w(null);
  function gr(){
  var t=ca.current;
  return t!==null?t:Ct.pooledCache
}

function tl(t,e){
  e===null?Q(ca,ca.current):Q(ca,e.pool)
}

function Vd(){
  var t=gr();
  return t===null?null:{
  parent:qt._currentValue,pool:t
}

}

var Xa=Error(o(460)),vr=Error(o(474)),el=Error(o(542)),nl={
  then:function(){

}

}

;
  function _d(t){
  return t=t.status,t==="fulfilled"||t==="rejected"
}

function Bd(t,e,n){
  switch(n=t[n],n===void 0?t.push(e):n!==e&&(e.then(sn,sn),e=n),e.status){
  case"fulfilled":return e.value;
  case"rejected":throw t=e.reason,Ud(t),t;
  default:if(typeof e.status=="string")e.then(sn,sn);
  else{
  if(t=Ct,t!==null&&100<t.shellSuspendCounter)throw Error(o(482));
  t=e,t.status="pending",t.then(function(s){
  if(e.status==="pending"){
  var r=e;
  r.status="fulfilled",r.value=s
}

}

,function(s){
  if(e.status==="pending"){
  var r=e;
  r.status="rejected",r.reason=s
}

}

)
}

switch(e.status){
  case"fulfilled":return e.value;
  case"rejected":throw t=e.reason,Ud(t),t
}

throw fa=e,Xa
}

}

function ua(t){
  try{
  var e=t._init;
  return e(t._payload)
}

catch(n){
  throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(fa=n,Xa):n
}

}

var fa=null;
  function Hd(){
  if(fa===null)throw Error(o(459));
  var t=fa;
  return fa=null,t
}

function Ud(t){
  if(t===Xa||t===el)throw Error(o(483))
}

var ka=null,Ui=0;
  function al(t){
  var e=Ui;
  return Ui+=1,ka===null&&(ka=[]),Bd(ka,t,e)
}

function Li(t,e){
  e=e.props.ref,t.ref=e!==void 0?e:null
}

function il(t,e){
  throw e.$$typeof===S?Error(o(525)):(t=Object.prototype.toString.call(e),Error(o(31,t==="[object Object]"?"object with keys {
  "+Object.keys(e).join(", ")+"
}

":t)))
}

function Ld(t){
  function e(E,A){
  if(t){
  var M=E.deletions;
  M===null?(E.deletions=[A],E.flags|=16):M.push(A)
}

}

function n(E,A){
  if(!t)return null;
  for(;
  A!==null;
  )e(E,A),A=A.sibling;
  return null
}

function s(E){
  for(var A=new Map;
  E!==null;
  )E.key!==null?A.set(E.key,E):A.set(E.index,E),E=E.sibling;
  return A
}

function r(E,A){
  return E=on(E,A),E.index=0,E.sibling=null,E
}

function c(E,A,M){
  return E.index=M,t?(M=E.alternate,M!==null?(M=M.index,M<A?(E.flags|=67108866,A):M):(E.flags|=67108866,A)):(E.flags|=1048576,A)
}

function h(E){
  return t&&E.alternate===null&&(E.flags|=67108866),E
}

function v(E,A,M,_){
  return A===null||A.tag!==6?(A=lr(M,E.mode,_),A.return=E,A):(A=r(A,M),A.return=E,A)
}

function T(E,A,M,_){
  var et=M.type;
  return et===U?O(E,A,M.props.children,_,M.key):A!==null&&(A.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===$&&ua(et)===A.type)?(A=r(A,M.props),Li(A,M),A.return=E,A):(A=Ws(M.type,M.key,M.props,null,E.mode,_),Li(A,M),A.return=E,A)
}

function C(E,A,M,_){
  return A===null||A.tag!==4||A.stateNode.containerInfo!==M.containerInfo||A.stateNode.implementation!==M.implementation?(A=or(M,E.mode,_),A.return=E,A):(A=r(A,M.children||[]),A.return=E,A)
}

function O(E,A,M,_,et){
  return A===null||A.tag!==7?(A=sa(M,E.mode,_,et),A.return=E,A):(A=r(A,M),A.return=E,A)
}

function B(E,A,M){
  if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return A=lr(""+A,E.mode,M),A.return=E,A;
  if(typeof A=="object"&&A!==null){
  switch(A.$$typeof){
  case N:return M=Ws(A.type,A.key,A.props,null,E.mode,M),Li(M,A),M.return=E,M;
  case z:return A=or(A,E.mode,M),A.return=E,A;
  case $:return A=ua(A),B(E,A,M)
}

if(ce(A)||Ot(A))return A=sa(A,E.mode,M,null),A.return=E,A;
  if(typeof A.then=="function")return B(E,al(A),M);
  if(A.$$typeof===q)return B(E,Is(E,A),M);
  il(E,A)
}

return null
}

function j(E,A,M,_){
  var et=A!==null?A.key:null;
  if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return et!==null?null:v(E,A,""+M,_);
  if(typeof M=="object"&&M!==null){
  switch(M.$$typeof){
  case N:return M.key===et?T(E,A,M,_):null;
  case z:return M.key===et?C(E,A,M,_):null;
  case $:return M=ua(M),j(E,A,M,_)
}

if(ce(M)||Ot(M))return et!==null?null:O(E,A,M,_,null);
  if(typeof M.then=="function")return j(E,A,al(M),_);
  if(M.$$typeof===q)return j(E,A,Is(E,M),_);
  il(E,M)
}

return null
}

function D(E,A,M,_,et){
  if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return E=E.get(M)||null,v(A,E,""+_,et);
  if(typeof _=="object"&&_!==null){
  switch(_.$$typeof){
  case N:return E=E.get(_.key===null?M:_.key)||null,T(A,E,_,et);
  case z:return E=E.get(_.key===null?M:_.key)||null,C(A,E,_,et);
  case $:return _=ua(_),D(E,A,M,_,et)
}

if(ce(_)||Ot(_))return E=E.get(M)||null,O(A,E,_,et,null);
  if(typeof _.then=="function")return D(E,A,M,al(_),et);
  if(_.$$typeof===q)return D(E,A,M,Is(A,_),et);
  il(A,_)
}

return null
}

function F(E,A,M,_){
  for(var et=null,vt=null,I=A,ct=A=0,pt=null;
  I!==null&&ct<M.length;
  ct++){
  I.index>ct?(pt=I,I=null):pt=I.sibling;
  var xt=j(E,I,M[ct],_);
  if(xt===null){
  I===null&&(I=pt);
  break
}

t&&I&&xt.alternate===null&&e(E,I),A=c(xt,A,ct),vt===null?et=xt:vt.sibling=xt,vt=xt,I=pt
}

if(ct===M.length)return n(E,I),gt&&rn(E,ct),et;
  if(I===null){
  for(;
  ct<M.length;
  ct++)I=B(E,M[ct],_),I!==null&&(A=c(I,A,ct),vt===null?et=I:vt.sibling=I,vt=I);
  return gt&&rn(E,ct),et
}

for(I=s(I);
  ct<M.length;
  ct++)pt=D(I,E,ct,M[ct],_),pt!==null&&(t&&pt.alternate!==null&&I.delete(pt.key===null?ct:pt.key),A=c(pt,A,ct),vt===null?et=pt:vt.sibling=pt,vt=pt);
  return t&&I.forEach(function(Zn){
  return e(E,Zn)
}

),gt&&rn(E,ct),et
}

function nt(E,A,M,_){
  if(M==null)throw Error(o(151));
  for(var et=null,vt=null,I=A,ct=A=0,pt=null,xt=M.next();
  I!==null&&!xt.done;
  ct++,xt=M.next()){
  I.index>ct?(pt=I,I=null):pt=I.sibling;
  var Zn=j(E,I,xt.value,_);
  if(Zn===null){
  I===null&&(I=pt);
  break
}

t&&I&&Zn.alternate===null&&e(E,I),A=c(Zn,A,ct),vt===null?et=Zn:vt.sibling=Zn,vt=Zn,I=pt
}

if(xt.done)return n(E,I),gt&&rn(E,ct),et;
  if(I===null){
  for(;
  !xt.done;
  ct++,xt=M.next())xt=B(E,xt.value,_),xt!==null&&(A=c(xt,A,ct),vt===null?et=xt:vt.sibling=xt,vt=xt);
  return gt&&rn(E,ct),et
}

for(I=s(I);
  !xt.done;
  ct++,xt=M.next())xt=D(I,E,ct,xt.value,_),xt!==null&&(t&&xt.alternate!==null&&I.delete(xt.key===null?ct:xt.key),A=c(xt,A,ct),vt===null?et=xt:vt.sibling=xt,vt=xt);
  return t&&I.forEach(function(_x){
  return e(E,_x)
}

),gt&&rn(E,ct),et
}

function Mt(E,A,M,_){
  if(typeof M=="object"&&M!==null&&M.type===U&&M.key===null&&(M=M.props.children),typeof M=="object"&&M!==null){
  switch(M.$$typeof){
  case N:t:{
  for(var et=M.key;
  A!==null;
  ){
  if(A.key===et){
  if(et=M.type,et===U){
  if(A.tag===7){
  n(E,A.sibling),_=r(A,M.props.children),_.return=E,E=_;
  break t
}

}

else if(A.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===$&&ua(et)===A.type){
  n(E,A.sibling),_=r(A,M.props),Li(_,M),_.return=E,E=_;
  break t
}

n(E,A);
  break
}

else e(E,A);
  A=A.sibling
}

M.type===U?(_=sa(M.props.children,E.mode,_,M.key),_.return=E,E=_):(_=Ws(M.type,M.key,M.props,null,E.mode,_),Li(_,M),_.return=E,E=_)
}

return h(E);
  case z:t:{
  for(et=M.key;
  A!==null;
  ){
  if(A.key===et)if(A.tag===4&&A.stateNode.containerInfo===M.containerInfo&&A.stateNode.implementation===M.implementation){
  n(E,A.sibling),_=r(A,M.children||[]),_.return=E,E=_;
  break t
}

else{
  n(E,A);
  break
}

else e(E,A);
  A=A.sibling
}

_=or(M,E.mode,_),_.return=E,E=_
}

return h(E);
  case $:return M=ua(M),Mt(E,A,M,_)
}

if(ce(M))return F(E,A,M,_);
  if(Ot(M)){
  if(et=Ot(M),typeof et!="function")throw Error(o(150));
  return M=et.call(M),nt(E,A,M,_)
}

if(typeof M.then=="function")return Mt(E,A,al(M),_);
  if(M.$$typeof===q)return Mt(E,A,Is(E,M),_);
  il(E,M)
}

return typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint"?(M=""+M,A!==null&&A.tag===6?(n(E,A.sibling),_=r(A,M),_.return=E,E=_):(n(E,A),_=lr(M,E.mode,_),_.return=E,E=_),h(E)):n(E,A)
}

return function(E,A,M,_){
  try{
  Ui=0;
  var et=Mt(E,A,M,_);
  return ka=null,et
}

catch(I){
  if(I===Xa||I===el)throw I;
  var vt=Te(29,I,null,E.mode);
  return vt.lanes=_,vt.return=E,vt
}

}

}

var da=Ld(!0),Gd=Ld(!1),Dn=!1;
  function xr(t){
  t.updateQueue={
  baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{
  pending:null,lanes:0,hiddenCallbacks:null
}

,callbacks:null
}

}

function br(t,e){
  t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={
  baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null
}

)
}

function zn(t){
  return{
  lane:t,tag:0,payload:null,callback:null,next:null
}

}

function Rn(t,e,n){
  var s=t.updateQueue;
  if(s===null)return null;
  if(s=s.shared,(St&2)!==0){
  var r=s.pending;
  return r===null?e.next=e:(e.next=r.next,r.next=e),s.pending=e,e=Fs(t),Ad(t,null,n),e
}

return Js(t,s,e,n),Fs(t)
}

function Gi(t,e,n){
  if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194048)!==0)){
  var s=e.lanes;
  s&=t.pendingLanes,n|=s,e.lanes=n,zf(t,n)
}

}

function Sr(t,e){
  var n=t.updateQueue,s=t.alternate;
  if(s!==null&&(s=s.updateQueue,n===s)){
  var r=null,c=null;
  if(n=n.firstBaseUpdate,n!==null){
  do{
  var h={
  lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null
}

;
  c===null?r=c=h:c=c.next=h,n=n.next
}

while(n!==null);
  c===null?r=c=e:c=c.next=e
}

else r=c=e;
  n={
  baseState:s.baseState,firstBaseUpdate:r,lastBaseUpdate:c,shared:s.shared,callbacks:s.callbacks
}

,t.updateQueue=n;
  return
}

t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e
}

var Tr=!1;
  function qi(){
  if(Tr){
  var t=Ya;
  if(t!==null)throw t
}

}

function Yi(t,e,n,s){
  Tr=!1;
  var r=t.updateQueue;
  Dn=!1;
  var c=r.firstBaseUpdate,h=r.lastBaseUpdate,v=r.shared.pending;
  if(v!==null){
  r.shared.pending=null;
  var T=v,C=T.next;
  T.next=null,h===null?c=C:h.next=C,h=T;
  var O=t.alternate;
  O!==null&&(O=O.updateQueue,v=O.lastBaseUpdate,v!==h&&(v===null?O.firstBaseUpdate=C:v.next=C,O.lastBaseUpdate=T))
}

if(c!==null){
  var B=r.baseState;
  h=0,O=C=T=null,v=c;
  do{
  var j=v.lane&-536870913,D=j!==v.lane;
  if(D?(mt&j)===j:(s&j)===j){
  j!==0&&j===qa&&(Tr=!0),O!==null&&(O=O.next={
  lane:0,tag:v.tag,payload:v.payload,callback:null,next:null
}

);
  t:{
  var F=t,nt=v;
  j=e;
  var Mt=n;
  switch(nt.tag){
  case 1:if(F=nt.payload,typeof F=="function"){
  B=F.call(Mt,B,j);
  break t
}

B=F;
  break t;
  case 3:F.flags=F.flags&-65537|128;
  case 0:if(F=nt.payload,j=typeof F=="function"?F.call(Mt,B,j):F,j==null)break t;
  B=b({

}

,B,j);
  break t;
  case 2:Dn=!0
}

}

j=v.callback,j!==null&&(t.flags|=64,D&&(t.flags|=8192),D=r.callbacks,D===null?r.callbacks=[j]:D.push(j))
}

else D={
  lane:j,tag:v.tag,payload:v.payload,callback:v.callback,next:null
}

,O===null?(C=O=D,T=B):O=O.next=D,h|=j;
  if(v=v.next,v===null){
  if(v=r.shared.pending,v===null)break;
  D=v,v=D.next,D.next=null,r.lastBaseUpdate=D,r.shared.pending=null
}

}

while(!0);
  O===null&&(T=B),r.baseState=T,r.firstBaseUpdate=C,r.lastBaseUpdate=O,c===null&&(r.shared.lanes=0),Hn|=h,t.lanes=h,t.memoizedState=B
}

}

function qd(t,e){
  if(typeof t!="function")throw Error(o(191,t));
  t.call(e)
}

function Yd(t,e){
  var n=t.callbacks;
  if(n!==null)for(t.callbacks=null,t=0;
  t<n.length;
  t++)qd(n[t],e)
}

var Ka=w(null),sl=w(0);
  function Xd(t,e){
  t=xn,Q(sl,t),Q(Ka,e),xn=t|e.baseLanes
}

function Ar(){
  Q(sl,xn),Q(Ka,Ka.current)
}

function wr(){
  xn=sl.current,H(Ka),H(sl)
}

var Ae=w(null),Be=null;
  function On(t){
  var e=t.alternate;
  Q(Lt,Lt.current&1),Q(Ae,t),Be===null&&(e===null||Ka.current!==null||e.memoizedState!==null)&&(Be=t)
}

function Er(t){
  Q(Lt,Lt.current),Q(Ae,t),Be===null&&(Be=t)
}

function kd(t){
  t.tag===22?(Q(Lt,Lt.current),Q(Ae,t),Be===null&&(Be=t)):Vn()
}

function Vn(){
  Q(Lt,Lt.current),Q(Ae,Ae.current)
}

function we(t){
  H(Ae),Be===t&&(Be=null),H(Lt)
}

var Lt=w(0);
  function ll(t){
  for(var e=t;
  e!==null;
  ){
  if(e.tag===13){
  var n=e.memoizedState;
  if(n!==null&&(n=n.dehydrated,n===null||zc(n)||Rc(n)))return e
}

else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){
  if((e.flags&128)!==0)return e
}

else if(e.child!==null){
  e.child.return=e,e=e.child;
  continue
}

if(e===t)break;
  for(;
  e.sibling===null;
  ){
  if(e.return===null||e.return===t)return null;
  e=e.return
}

e.sibling.return=e.return,e=e.sibling
}

return null
}

var fn=0,ot=null,Et=null,Yt=null,ol=!1,Qa=!1,ha=!1,rl=0,Xi=0,Za=null,Ev=0;
  function _t(){
  throw Error(o(321))
}

function Nr(t,e){
  if(e===null)return!1;
  for(var n=0;
  n<e.length&&n<t.length;
  n++)if(!Se(t[n],e[n]))return!1;
  return!0
}

function Mr(t,e,n,s,r,c){
  return fn=c,ot=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,V.H=t===null||t.memoizedState===null?Mh:Yr,ha=!1,c=n(s,r),ha=!1,Qa&&(c=Qd(e,n,s,r)),Kd(t),c
}

function Kd(t){
  V.H=Qi;
  var e=Et!==null&&Et.next!==null;
  if(fn=0,Yt=Et=ot=null,ol=!1,Xi=0,Za=null,e)throw Error(o(300));
  t===null||Xt||(t=t.dependencies,t!==null&&$s(t)&&(Xt=!0))
}

function Qd(t,e,n,s){
  ot=t;
  var r=0;
  do{
  if(Qa&&(Za=null),Xi=0,Qa=!1,25<=r)throw Error(o(301));
  if(r+=1,Yt=Et=null,t.updateQueue!=null){
  var c=t.updateQueue;
  c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)
}

V.H=Ch,c=e(n,s)
}

while(Qa);
  return c
}

function Nv(){
  var t=V.H,e=t.useState()[0];
  return e=typeof e.then=="function"?ki(e):e,t=t.useState()[0],(Et!==null?Et.memoizedState:null)!==t&&(ot.flags|=1024),e
}

function Cr(){
  var t=rl!==0;
  return rl=0,t
}

function jr(t,e,n){
  e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~n
}

function Dr(t){
  if(ol){
  for(t=t.memoizedState;
  t!==null;
  ){
  var e=t.queue;
  e!==null&&(e.pending=null),t=t.next
}

ol=!1
}

fn=0,Yt=Et=ot=null,Qa=!1,Xi=rl=0,Za=null
}

function le(){
  var t={
  memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null
}

;
  return Yt===null?ot.memoizedState=Yt=t:Yt=Yt.next=t,Yt
}

function Gt(){
  if(Et===null){
  var t=ot.alternate;
  t=t!==null?t.memoizedState:null
}

else t=Et.next;
  var e=Yt===null?ot.memoizedState:Yt.next;
  if(e!==null)Yt=e,Et=t;
  else{
  if(t===null)throw ot.alternate===null?Error(o(467)):Error(o(310));
  Et=t,t={
  memoizedState:Et.memoizedState,baseState:Et.baseState,baseQueue:Et.baseQueue,queue:Et.queue,next:null
}

,Yt===null?ot.memoizedState=Yt=t:Yt=Yt.next=t
}

return Yt
}

function cl(){
  return{
  lastEffect:null,events:null,stores:null,memoCache:null
}

}

function ki(t){
  var e=Xi;
  return Xi+=1,Za===null&&(Za=[]),t=Bd(Za,t,e),e=ot,(Yt===null?e.memoizedState:Yt.next)===null&&(e=e.alternate,V.H=e===null||e.memoizedState===null?Mh:Yr),t
}

function ul(t){
  if(t!==null&&typeof t=="object"){
  if(typeof t.then=="function")return ki(t);
  if(t.$$typeof===q)return te(t)
}

throw Error(o(438,String(t)))
}

function zr(t){
  var e=null,n=ot.updateQueue;
  if(n!==null&&(e=n.memoCache),e==null){
  var s=ot.alternate;
  s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(e={
  data:s.data.map(function(r){
  return r.slice()
}

),index:0
}

)))
}

if(e==null&&(e={
  data:[],index:0
}

),n===null&&(n=cl(),ot.updateQueue=n),n.memoCache=e,n=e.data[e.index],n===void 0)for(n=e.data[e.index]=Array(t),s=0;
  s<t;
  s++)n[s]=jt;
  return e.index++,n
}

function dn(t,e){
  return typeof e=="function"?e(t):e
}

function fl(t){
  var e=Gt();
  return Rr(e,Et,t)
}

function Rr(t,e,n){
  var s=t.queue;
  if(s===null)throw Error(o(311));
  s.lastRenderedReducer=n;
  var r=t.baseQueue,c=s.pending;
  if(c!==null){
  if(r!==null){
  var h=r.next;
  r.next=c.next,c.next=h
}

e.baseQueue=r=c,s.pending=null
}

if(c=t.baseState,r===null)t.memoizedState=c;
  else{
  e=r.next;
  var v=h=null,T=null,C=e,O=!1;
  do{
  var B=C.lane&-536870913;
  if(B!==C.lane?(mt&B)===B:(fn&B)===B){
  var j=C.revertLane;
  if(j===0)T!==null&&(T=T.next={
  lane:0,revertLane:0,gesture:null,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null
}

),B===qa&&(O=!0);
  else if((fn&j)===j){
  C=C.next,j===qa&&(O=!0);
  continue
}

else B={
  lane:0,revertLane:C.revertLane,gesture:null,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null
}

,T===null?(v=T=B,h=c):T=T.next=B,ot.lanes|=j,Hn|=j;
  B=C.action,ha&&n(c,B),c=C.hasEagerState?C.eagerState:n(c,B)
}

else j={
  lane:B,revertLane:C.revertLane,gesture:C.gesture,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null
}

,T===null?(v=T=j,h=c):T=T.next=j,ot.lanes|=B,Hn|=B;
  C=C.next
}

while(C!==null&&C!==e);
  if(T===null?h=c:T.next=v,!Se(c,t.memoizedState)&&(Xt=!0,O&&(n=Ya,n!==null)))throw n;
  t.memoizedState=c,t.baseState=h,t.baseQueue=T,s.lastRenderedState=c
}

return r===null&&(s.lanes=0),[t.memoizedState,s.dispatch]
}

function Or(t){
  var e=Gt(),n=e.queue;
  if(n===null)throw Error(o(311));
  n.lastRenderedReducer=t;
  var s=n.dispatch,r=n.pending,c=e.memoizedState;
  if(r!==null){
  n.pending=null;
  var h=r=r.next;
  do c=t(c,h.action),h=h.next;
  while(h!==r);
  Se(c,e.memoizedState)||(Xt=!0),e.memoizedState=c,e.baseQueue===null&&(e.baseState=c),n.lastRenderedState=c
}

return[c,s]
}

function Zd(t,e,n){
  var s=ot,r=Gt(),c=gt;
  if(c){
  if(n===void 0)throw Error(o(407));
  n=n()
}

else n=e();
  var h=!Se((Et||r).memoizedState,n);
  if(h&&(r.memoizedState=n,Xt=!0),r=r.queue,Br(Wd.bind(null,s,r,t),[t]),r.getSnapshot!==e||h||Yt!==null&&Yt.memoizedState.tag&1){
  if(s.flags|=2048,Ja(9,{
  destroy:void 0
}

,Fd.bind(null,s,r,n,e),null),Ct===null)throw Error(o(349));
  c||(fn&127)!==0||Jd(s,e,n)
}

return n
}

function Jd(t,e,n){
  t.flags|=16384,t={
  getSnapshot:e,value:n
}

,e=ot.updateQueue,e===null?(e=cl(),ot.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))
}

function Fd(t,e,n,s){
  e.value=n,e.getSnapshot=s,Pd(e)&&$d(t)
}

function Wd(t,e,n){
  return n(function(){
  Pd(e)&&$d(t)
}

)
}

function Pd(t){
  var e=t.getSnapshot;
  t=t.value;
  try{
  var n=e();
  return!Se(t,n)
}

catch{
  return!0
}

}

function $d(t){
  var e=ia(t,2);
  e!==null&&ye(e,t,2)
}

function Vr(t){
  var e=le();
  if(typeof t=="function"){
  var n=t;
  if(t=n(),ha){
  An(!0);
  try{
  n()
}

finally{
  An(!1)
}

}

}

return e.memoizedState=e.baseState=t,e.queue={
  pending:null,lanes:0,dispatch:null,lastRenderedReducer:dn,lastRenderedState:t
}

,e
}

function Id(t,e,n,s){
  return t.baseState=n,Rr(t,Et,typeof s=="function"?s:dn)
}

function Mv(t,e,n,s,r){
  if(ml(t))throw Error(o(485));
  if(t=e.action,t!==null){
  var c={
  payload:r,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(h){
  c.listeners.push(h)
}

}

;
  V.T!==null?n(!0):c.isTransition=!1,s(c),n=e.pending,n===null?(c.next=e.pending=c,th(e,c)):(c.next=n.next,e.pending=n.next=c)
}

}

function th(t,e){
  var n=e.action,s=e.payload,r=t.state;
  if(e.isTransition){
  var c=V.T,h={

}

;
  V.T=h;
  try{
  var v=n(r,s),T=V.S;
  T!==null&&T(h,v),eh(t,e,v)
}

catch(C){
  _r(t,e,C)
}

finally{
  c!==null&&h.types!==null&&(c.types=h.types),V.T=c
}

}

else try{
  c=n(r,s),eh(t,e,c)
}

catch(C){
  _r(t,e,C)
}

}

function eh(t,e,n){
  n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(s){
  nh(t,e,s)
}

,function(s){
  return _r(t,e,s)
}

):nh(t,e,n)
}

function nh(t,e,n){
  e.status="fulfilled",e.value=n,ah(e),t.state=n,e=t.pending,e!==null&&(n=e.next,n===e?t.pending=null:(n=n.next,e.next=n,th(t,n)))
}

function _r(t,e,n){
  var s=t.pending;
  if(t.pending=null,s!==null){
  s=s.next;
  do e.status="rejected",e.reason=n,ah(e),e=e.next;
  while(e!==s)
}

t.action=null
}

function ah(t){
  t=t.listeners;
  for(var e=0;
  e<t.length;
  e++)(0,t[e])()
}

function ih(t,e){
  return e
}

function sh(t,e){
  if(gt){
  var n=Ct.formState;
  if(n!==null){
  t:{
  var s=ot;
  if(gt){
  if(Dt){
  e:{
  for(var r=Dt,c=_e;
  r.nodeType!==8;
  ){
  if(!c){
  r=null;
  break e
}

if(r=He(r.nextSibling),r===null){
  r=null;
  break e
}

}

c=r.data,r=c==="F!"||c==="F"?r:null
}

if(r){
  Dt=He(r.nextSibling),s=r.data==="F!";
  break t
}

}

Cn(s)
}

s=!1
}

s&&(e=n[0])
}

}

return n=le(),n.memoizedState=n.baseState=e,s={
  pending:null,lanes:0,dispatch:null,lastRenderedReducer:ih,lastRenderedState:e
}

,n.queue=s,n=wh.bind(null,ot,s),s.dispatch=n,s=Vr(!1),c=qr.bind(null,ot,!1,s.queue),s=le(),r={
  state:e,dispatch:null,action:t,pending:null
}

,s.queue=r,n=Mv.bind(null,ot,r,c,n),r.dispatch=n,s.memoizedState=t,[e,n,!1]
}

function lh(t){
  var e=Gt();
  return oh(e,Et,t)
}

function oh(t,e,n){
  if(e=Rr(t,e,ih)[0],t=fl(dn)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{
  var s=ki(e)
}

catch(h){
  throw h===Xa?el:h
}

else s=e;
  e=Gt();
  var r=e.queue,c=r.dispatch;
  return n!==e.memoizedState&&(ot.flags|=2048,Ja(9,{
  destroy:void 0
}

,Cv.bind(null,r,n),null)),[s,c,t]
}

function Cv(t,e){
  t.action=e
}

function rh(t){
  var e=Gt(),n=Et;
  if(n!==null)return oh(e,n,t);
  Gt(),e=e.memoizedState,n=Gt();
  var s=n.queue.dispatch;
  return n.memoizedState=t,[e,s,!1]
}

function Ja(t,e,n,s){
  return t={
  tag:t,create:n,deps:s,inst:e,next:null
}

,e=ot.updateQueue,e===null&&(e=cl(),ot.updateQueue=e),n=e.lastEffect,n===null?e.lastEffect=t.next=t:(s=n.next,n.next=t,t.next=s,e.lastEffect=t),t
}

function ch(){
  return Gt().memoizedState
}

function dl(t,e,n,s){
  var r=le();
  ot.flags|=t,r.memoizedState=Ja(1|e,{
  destroy:void 0
}

,n,s===void 0?null:s)
}

function hl(t,e,n,s){
  var r=Gt();
  s=s===void 0?null:s;
  var c=r.memoizedState.inst;
  Et!==null&&s!==null&&Nr(s,Et.memoizedState.deps)?r.memoizedState=Ja(e,c,n,s):(ot.flags|=t,r.memoizedState=Ja(1|e,c,n,s))
}

function uh(t,e){
  dl(8390656,8,t,e)
}

function Br(t,e){
  hl(2048,8,t,e)
}

function jv(t){
  ot.flags|=4;
  var e=ot.updateQueue;
  if(e===null)e=cl(),ot.updateQueue=e,e.events=[t];
  else{
  var n=e.events;
  n===null?e.events=[t]:n.push(t)
}

}

function fh(t){
  var e=Gt().memoizedState;
  return jv({
  ref:e,nextImpl:t
}

),function(){
  if((St&2)!==0)throw Error(o(440));
  return e.impl.apply(void 0,arguments)
}

}

function dh(t,e){
  return hl(4,2,t,e)
}

function hh(t,e){
  return hl(4,4,t,e)
}

function mh(t,e){
  if(typeof e=="function"){
  t=t();
  var n=e(t);
  return function(){
  typeof n=="function"?n():e(null)
}

}

if(e!=null)return t=t(),e.current=t,function(){
  e.current=null
}

}

function ph(t,e,n){
  n=n!=null?n.concat([t]):null,hl(4,4,mh.bind(null,e,t),n)
}

function Hr(){

}

function yh(t,e){
  var n=Gt();
  e=e===void 0?null:e;
  var s=n.memoizedState;
  return e!==null&&Nr(e,s[1])?s[0]:(n.memoizedState=[t,e],t)
}

function gh(t,e){
  var n=Gt();
  e=e===void 0?null:e;
  var s=n.memoizedState;
  if(e!==null&&Nr(e,s[1]))return s[0];
  if(s=t(),ha){
  An(!0);
  try{
  t()
}

finally{
  An(!1)
}

}

return n.memoizedState=[s,e],s
}

function Ur(t,e,n){
  return n===void 0||(fn&1073741824)!==0&&(mt&261930)===0?t.memoizedState=e:(t.memoizedState=n,t=vm(),ot.lanes|=t,Hn|=t,n)
}

function vh(t,e,n,s){
  return Se(n,e)?n:Ka.current!==null?(t=Ur(t,n,s),Se(t,e)||(Xt=!0),t):(fn&42)===0||(fn&1073741824)!==0&&(mt&261930)===0?(Xt=!0,t.memoizedState=n):(t=vm(),ot.lanes|=t,Hn|=t,e)
}

function xh(t,e,n,s,r){
  var c=K.p;
  K.p=c!==0&&8>c?c:8;
  var h=V.T,v={

}

;
  V.T=v,qr(t,!1,e,n);
  try{
  var T=r(),C=V.S;
  if(C!==null&&C(v,T),T!==null&&typeof T=="object"&&typeof T.then=="function"){
  var O=wv(T,s);
  Ki(t,e,O,Me(t))
}

else Ki(t,e,s,Me(t))
}

catch(B){
  Ki(t,e,{
  then:function(){

}

,status:"rejected",reason:B
}

,Me())
}

finally{
  K.p=c,h!==null&&v.types!==null&&(h.types=v.types),V.T=h
}

}

function Dv(){

}

function Lr(t,e,n,s){
  if(t.tag!==5)throw Error(o(476));
  var r=bh(t).queue;
  xh(t,r,e,J,n===null?Dv:function(){
  return Sh(t),n(s)
}

)
}

function bh(t){
  var e=t.memoizedState;
  if(e!==null)return e;
  e={
  memoizedState:J,baseState:J,baseQueue:null,queue:{
  pending:null,lanes:0,dispatch:null,lastRenderedReducer:dn,lastRenderedState:J
}

,next:null
}

;
  var n={

}

;
  return e.next={
  memoizedState:n,baseState:n,baseQueue:null,queue:{
  pending:null,lanes:0,dispatch:null,lastRenderedReducer:dn,lastRenderedState:n
}

,next:null
}

,t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e
}

function Sh(t){
  var e=bh(t);
  e.next===null&&(e=t.alternate.memoizedState),Ki(t,e.next.queue,{

}

,Me())
}

function Gr(){
  return te(rs)
}

function Th(){
  return Gt().memoizedState
}

function Ah(){
  return Gt().memoizedState
}

function zv(t){
  for(var e=t.return;
  e!==null;
  ){
  switch(e.tag){
  case 24:case 3:var n=Me();
  t=zn(n);
  var s=Rn(e,t,n);
  s!==null&&(ye(s,e,n),Gi(s,e,n)),e={
  cache:pr()
}

,t.payload=e;
  return
}

e=e.return
}

}

function Rv(t,e,n){
  var s=Me();
  n={
  lane:s,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null
}

,ml(t)?Eh(e,n):(n=ir(t,e,n,s),n!==null&&(ye(n,t,s),Nh(n,e,s)))
}

function wh(t,e,n){
  var s=Me();
  Ki(t,e,n,s)
}

function Ki(t,e,n,s){
  var r={
  lane:s,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null
}

;
  if(ml(t))Eh(e,r);
  else{
  var c=t.alternate;
  if(t.lanes===0&&(c===null||c.lanes===0)&&(c=e.lastRenderedReducer,c!==null))try{
  var h=e.lastRenderedState,v=c(h,n);
  if(r.hasEagerState=!0,r.eagerState=v,Se(v,h))return Js(t,e,r,0),Ct===null&&Zs(),!1
}

catch{

}

if(n=ir(t,e,r,s),n!==null)return ye(n,t,s),Nh(n,e,s),!0
}

return!1
}

function qr(t,e,n,s){
  if(s={
  lane:2,revertLane:xc(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null
}

,ml(t)){
  if(e)throw Error(o(479))
}

else e=ir(t,n,s,2),e!==null&&ye(e,t,2)
}

function ml(t){
  var e=t.alternate;
  return t===ot||e!==null&&e===ot
}

function Eh(t,e){
  Qa=ol=!0;
  var n=t.pending;
  n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e
}

function Nh(t,e,n){
  if((n&4194048)!==0){
  var s=e.lanes;
  s&=t.pendingLanes,n|=s,e.lanes=n,zf(t,n)
}

}

var Qi={
  readContext:te,use:ul,useCallback:_t,useContext:_t,useEffect:_t,useImperativeHandle:_t,useLayoutEffect:_t,useInsertionEffect:_t,useMemo:_t,useReducer:_t,useRef:_t,useState:_t,useDebugValue:_t,useDeferredValue:_t,useTransition:_t,useSyncExternalStore:_t,useId:_t,useHostTransitionStatus:_t,useFormState:_t,useActionState:_t,useOptimistic:_t,useMemoCache:_t,useCacheRefresh:_t
}

;
  Qi.useEffectEvent=_t;
  var Mh={
  readContext:te,use:ul,useCallback:function(t,e){
  return le().memoizedState=[t,e===void 0?null:e],t
}

,useContext:te,useEffect:uh,useImperativeHandle:function(t,e,n){
  n=n!=null?n.concat([t]):null,dl(4194308,4,mh.bind(null,e,t),n)
}

,useLayoutEffect:function(t,e){
  return dl(4194308,4,t,e)
}

,useInsertionEffect:function(t,e){
  dl(4,2,t,e)
}

,useMemo:function(t,e){
  var n=le();
  e=e===void 0?null:e;
  var s=t();
  if(ha){
  An(!0);
  try{
  t()
}

finally{
  An(!1)
}

}

return n.memoizedState=[s,e],s
}

,useReducer:function(t,e,n){
  var s=le();
  if(n!==void 0){
  var r=n(e);
  if(ha){
  An(!0);
  try{
  n(e)
}

finally{
  An(!1)
}

}

}

else r=e;
  return s.memoizedState=s.baseState=r,t={
  pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:r
}

,s.queue=t,t=t.dispatch=Rv.bind(null,ot,t),[s.memoizedState,t]
}

,useRef:function(t){
  var e=le();
  return t={
  current:t
}

,e.memoizedState=t
}

,useState:function(t){
  t=Vr(t);
  var e=t.queue,n=wh.bind(null,ot,e);
  return e.dispatch=n,[t.memoizedState,n]
}

,useDebugValue:Hr,useDeferredValue:function(t,e){
  var n=le();
  return Ur(n,t,e)
}

,useTransition:function(){
  var t=Vr(!1);
  return t=xh.bind(null,ot,t.queue,!0,!1),le().memoizedState=t,[!1,t]
}

,useSyncExternalStore:function(t,e,n){
  var s=ot,r=le();
  if(gt){
  if(n===void 0)throw Error(o(407));
  n=n()
}

else{
  if(n=e(),Ct===null)throw Error(o(349));
  (mt&127)!==0||Jd(s,e,n)
}

r.memoizedState=n;
  var c={
  value:n,getSnapshot:e
}

;
  return r.queue=c,uh(Wd.bind(null,s,c,t),[t]),s.flags|=2048,Ja(9,{
  destroy:void 0
}

,Fd.bind(null,s,c,n,e),null),n
}

,useId:function(){
  var t=le(),e=Ct.identifierPrefix;
  if(gt){
  var n=$e,s=Pe;
  n=(s&~(1<<32-be(s)-1)).toString(32)+n,e="_"+e+"R_"+n,n=rl++,0<n&&(e+="H"+n.toString(32)),e+="_"
}

else n=Ev++,e="_"+e+"r_"+n.toString(32)+"_";
  return t.memoizedState=e
}

,useHostTransitionStatus:Gr,useFormState:sh,useActionState:sh,useOptimistic:function(t){
  var e=le();
  e.memoizedState=e.baseState=t;
  var n={
  pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null
}

;
  return e.queue=n,e=qr.bind(null,ot,!0,n),n.dispatch=e,[t,e]
}

,useMemoCache:zr,useCacheRefresh:function(){
  return le().memoizedState=zv.bind(null,ot)
}

,useEffectEvent:function(t){
  var e=le(),n={
  impl:t
}

;
  return e.memoizedState=n,function(){
  if((St&2)!==0)throw Error(o(440));
  return n.impl.apply(void 0,arguments)
}

}

}

,Yr={
  readContext:te,use:ul,useCallback:yh,useContext:te,useEffect:Br,useImperativeHandle:ph,useInsertionEffect:dh,useLayoutEffect:hh,useMemo:gh,useReducer:fl,useRef:ch,useState:function(){
  return fl(dn)
}

,useDebugValue:Hr,useDeferredValue:function(t,e){
  var n=Gt();
  return vh(n,Et.memoizedState,t,e)
}

,useTransition:function(){
  var t=fl(dn)[0],e=Gt().memoizedState;
  return[typeof t=="boolean"?t:ki(t),e]
}

,useSyncExternalStore:Zd,useId:Th,useHostTransitionStatus:Gr,useFormState:lh,useActionState:lh,useOptimistic:function(t,e){
  var n=Gt();
  return Id(n,Et,t,e)
}

,useMemoCache:zr,useCacheRefresh:Ah
}

;
  Yr.useEffectEvent=fh;
  var Ch={
  readContext:te,use:ul,useCallback:yh,useContext:te,useEffect:Br,useImperativeHandle:ph,useInsertionEffect:dh,useLayoutEffect:hh,useMemo:gh,useReducer:Or,useRef:ch,useState:function(){
  return Or(dn)
}

,useDebugValue:Hr,useDeferredValue:function(t,e){
  var n=Gt();
  return Et===null?Ur(n,t,e):vh(n,Et.memoizedState,t,e)
}

,useTransition:function(){
  var t=Or(dn)[0],e=Gt().memoizedState;
  return[typeof t=="boolean"?t:ki(t),e]
}

,useSyncExternalStore:Zd,useId:Th,useHostTransitionStatus:Gr,useFormState:rh,useActionState:rh,useOptimistic:function(t,e){
  var n=Gt();
  return Et!==null?Id(n,Et,t,e):(n.baseState=t,[t,n.queue.dispatch])
}

,useMemoCache:zr,useCacheRefresh:Ah
}

;
  Ch.useEffectEvent=fh;
  function Xr(t,e,n,s){
  e=t.memoizedState,n=n(s,e),n=n==null?e:b({

}

,e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)
}

var kr={
  enqueueSetState:function(t,e,n){
  t=t._reactInternals;
  var s=Me(),r=zn(s);
  r.payload=e,n!=null&&(r.callback=n),e=Rn(t,r,s),e!==null&&(ye(e,t,s),Gi(e,t,s))
}

,enqueueReplaceState:function(t,e,n){
  t=t._reactInternals;
  var s=Me(),r=zn(s);
  r.tag=1,r.payload=e,n!=null&&(r.callback=n),e=Rn(t,r,s),e!==null&&(ye(e,t,s),Gi(e,t,s))
}

,enqueueForceUpdate:function(t,e){
  t=t._reactInternals;
  var n=Me(),s=zn(n);
  s.tag=2,e!=null&&(s.callback=e),e=Rn(t,s,n),e!==null&&(ye(e,t,n),Gi(e,t,n))
}

}

;
  function jh(t,e,n,s,r,c,h){
  return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,c,h):e.prototype&&e.prototype.isPureReactComponent?!Ri(n,s)||!Ri(r,c):!0
}

function Dh(t,e,n,s){
  t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,s),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,s),e.state!==t&&kr.enqueueReplaceState(e,e.state,null)
}

function ma(t,e){
  var n=e;
  if("ref"in e){
  n={

}

;
  for(var s in e)s!=="ref"&&(n[s]=e[s])
}

if(t=t.defaultProps){
  n===e&&(n=b({

}

,n));
  for(var r in t)n[r]===void 0&&(n[r]=t[r])
}

return n
}

function zh(t){
  Qs(t)
}

function Rh(t){
  console.error(t)
}

function Oh(t){
  Qs(t)
}

function pl(t,e){
  try{
  var n=t.onUncaughtError;
  n(e.value,{
  componentStack:e.stack
}

)
}

catch(s){
  setTimeout(function(){
  throw s
}

)
}

}

function Vh(t,e,n){
  try{
  var s=t.onCaughtError;
  s(n.value,{
  componentStack:n.stack,errorBoundary:e.tag===1?e.stateNode:null
}

)
}

catch(r){
  setTimeout(function(){
  throw r
}

)
}

}

function Kr(t,e,n){
  return n=zn(n),n.tag=3,n.payload={
  element:null
}

,n.callback=function(){
  pl(t,e)
}

,n
}

function _h(t){
  return t=zn(t),t.tag=3,t
}

function Bh(t,e,n,s){
  var r=n.type.getDerivedStateFromError;
  if(typeof r=="function"){
  var c=s.value;
  t.payload=function(){
  return r(c)
}

,t.callback=function(){
  Vh(e,n,s)
}

}

var h=n.stateNode;
  h!==null&&typeof h.componentDidCatch=="function"&&(t.callback=function(){
  Vh(e,n,s),typeof r!="function"&&(Un===null?Un=new Set([this]):Un.add(this));
  var v=s.stack;
  this.componentDidCatch(s.value,{
  componentStack:v!==null?v:""
}

)
}

)
}

function Ov(t,e,n,s,r){
  if(n.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){
  if(e=n.alternate,e!==null&&Ga(e,n,r,!0),n=Ae.current,n!==null){
  switch(n.tag){
  case 31:case 13:return Be===null?Ml():n.alternate===null&&Bt===0&&(Bt=3),n.flags&=-257,n.flags|=65536,n.lanes=r,s===nl?n.flags|=16384:(e=n.updateQueue,e===null?n.updateQueue=new Set([s]):e.add(s),yc(t,s,r)),!1;
  case 22:return n.flags|=65536,s===nl?n.flags|=16384:(e=n.updateQueue,e===null?(e={
  transitions:null,markerInstances:null,retryQueue:new Set([s])
}

,n.updateQueue=e):(n=e.retryQueue,n===null?e.retryQueue=new Set([s]):n.add(s)),yc(t,s,r)),!1
}

throw Error(o(435,n.tag))
}

return yc(t,s,r),Ml(),!1
}

if(gt)return e=Ae.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=r,s!==ur&&(t=Error(o(422),{
  cause:s
}

),_i(Re(t,n)))):(s!==ur&&(e=Error(o(423),{
  cause:s
}

),_i(Re(e,n))),t=t.current.alternate,t.flags|=65536,r&=-r,t.lanes|=r,s=Re(s,n),r=Kr(t.stateNode,s,r),Sr(t,r),Bt!==4&&(Bt=2)),!1;
  var c=Error(o(520),{
  cause:s
}

);
  if(c=Re(c,n),ts===null?ts=[c]:ts.push(c),Bt!==4&&(Bt=2),e===null)return!0;
  s=Re(s,n),n=e;
  do{
  switch(n.tag){
  case 3:return n.flags|=65536,t=r&-r,n.lanes|=t,t=Kr(n.stateNode,s,t),Sr(n,t),!1;
  case 1:if(e=n.type,c=n.stateNode,(n.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(Un===null||!Un.has(c))))return n.flags|=65536,r&=-r,n.lanes|=r,r=_h(r),Bh(r,t,n,s),Sr(n,r),!1
}

n=n.return
}

while(n!==null);
  return!1
}

var Qr=Error(o(461)),Xt=!1;
  function ee(t,e,n,s){
  e.child=t===null?Gd(e,null,n,s):da(e,t.child,n,s)
}

function Hh(t,e,n,s,r){
  n=n.render;
  var c=e.ref;
  if("ref"in s){
  var h={

}

;
  for(var v in s)v!=="ref"&&(h[v]=s[v])
}

else h=s;
  return ra(e),s=Mr(t,e,n,h,c,r),v=Cr(),t!==null&&!Xt?(jr(t,e,r),hn(t,e,r)):(gt&&v&&rr(e),e.flags|=1,ee(t,e,s,r),e.child)
}

function Uh(t,e,n,s,r){
  if(t===null){
  var c=n.type;
  return typeof c=="function"&&!sr(c)&&c.defaultProps===void 0&&n.compare===null?(e.tag=15,e.type=c,Lh(t,e,c,s,r)):(t=Ws(n.type,null,s,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)
}

if(c=t.child,!tc(t,r)){
  var h=c.memoizedProps;
  if(n=n.compare,n=n!==null?n:Ri,n(h,s)&&t.ref===e.ref)return hn(t,e,r)
}

return e.flags|=1,t=on(c,s),t.ref=e.ref,t.return=e,e.child=t
}

function Lh(t,e,n,s,r){
  if(t!==null){
  var c=t.memoizedProps;
  if(Ri(c,s)&&t.ref===e.ref)if(Xt=!1,e.pendingProps=s=c,tc(t,r))(t.flags&131072)!==0&&(Xt=!0);
  else return e.lanes=t.lanes,hn(t,e,r)
}

return Zr(t,e,n,s,r)
}

function Gh(t,e,n,s){
  var r=s.children,c=t!==null?t.memoizedState:null;
  if(t===null&&e.stateNode===null&&(e.stateNode={
  _visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null
}

),s.mode==="hidden"){
  if((e.flags&128)!==0){
  if(c=c!==null?c.baseLanes|n:n,t!==null){
  for(s=e.child=t.child,r=0;
  s!==null;
  )r=r|s.lanes|s.childLanes,s=s.sibling;
  s=r&~c
}

else s=0,e.child=null;
  return qh(t,e,c,n,s)
}

if((n&536870912)!==0)e.memoizedState={
  baseLanes:0,cachePool:null
}

,t!==null&&tl(e,c!==null?c.cachePool:null),c!==null?Xd(e,c):Ar(),kd(e);
  else return s=e.lanes=536870912,qh(t,e,c!==null?c.baseLanes|n:n,n,s)
}

else c!==null?(tl(e,c.cachePool),Xd(e,c),Vn(),e.memoizedState=null):(t!==null&&tl(e,null),Ar(),Vn());
  return ee(t,e,r,n),e.child
}

function Zi(t,e){
  return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={
  _visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null
}

),e.sibling
}

function qh(t,e,n,s,r){
  var c=gr();
  return c=c===null?null:{
  parent:qt._currentValue,pool:c
}

,e.memoizedState={
  baseLanes:n,cachePool:c
}

,t!==null&&tl(e,null),Ar(),kd(e),t!==null&&Ga(t,e,s,!0),e.childLanes=r,null
}

function yl(t,e){
  return e=vl({
  mode:e.mode,children:e.children
}

,t.mode),e.ref=t.ref,t.child=e,e.return=t,e
}

function Yh(t,e,n){
  return da(e,t.child,null,n),t=yl(e,e.pendingProps),t.flags|=2,we(e),e.memoizedState=null,t
}

function Vv(t,e,n){
  var s=e.pendingProps,r=(e.flags&128)!==0;
  if(e.flags&=-129,t===null){
  if(gt){
  if(s.mode==="hidden")return t=yl(e,s),e.lanes=536870912,Zi(null,t);
  if(Er(e),(t=Dt)?(t=t0(t,_e),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={
  dehydrated:t,treeContext:Nn!==null?{
  id:Pe,overflow:$e
}

:null,retryLane:536870912,hydrationErrors:null
}

,n=Ed(t),n.return=e,e.child=n,It=e,Dt=null)):t=null,t===null)throw Cn(e);
  return e.lanes=536870912,null
}

return yl(e,s)
}

var c=t.memoizedState;
  if(c!==null){
  var h=c.dehydrated;
  if(Er(e),r)if(e.flags&256)e.flags&=-257,e=Yh(t,e,n);
  else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;
  else throw Error(o(558));
  else if(Xt||Ga(t,e,n,!1),r=(n&t.childLanes)!==0,Xt||r){
  if(s=Ct,s!==null&&(h=Rf(s,n),h!==0&&h!==c.retryLane))throw c.retryLane=h,ia(t,h),ye(s,t,h),Qr;
  Ml(),e=Yh(t,e,n)
}

else t=c.treeContext,Dt=He(h.nextSibling),It=e,gt=!0,Mn=null,_e=!1,t!==null&&Cd(e,t),e=yl(e,s),e.flags|=4096;
  return e
}

return t=on(t.child,{
  mode:s.mode,children:s.children
}

),t.ref=e.ref,e.child=t,t.return=e,t
}

function gl(t,e){
  var n=e.ref;
  if(n===null)t!==null&&t.ref!==null&&(e.flags|=4194816);
  else{
  if(typeof n!="function"&&typeof n!="object")throw Error(o(284));
  (t===null||t.ref!==n)&&(e.flags|=4194816)
}

}

function Zr(t,e,n,s,r){
  return ra(e),n=Mr(t,e,n,s,void 0,r),s=Cr(),t!==null&&!Xt?(jr(t,e,r),hn(t,e,r)):(gt&&s&&rr(e),e.flags|=1,ee(t,e,n,r),e.child)
}

function Xh(t,e,n,s,r,c){
  return ra(e),e.updateQueue=null,n=Qd(e,s,n,r),Kd(t),s=Cr(),t!==null&&!Xt?(jr(t,e,c),hn(t,e,c)):(gt&&s&&rr(e),e.flags|=1,ee(t,e,n,c),e.child)
}

function kh(t,e,n,s,r){
  if(ra(e),e.stateNode===null){
  var c=Ba,h=n.contextType;
  typeof h=="object"&&h!==null&&(c=te(h)),c=new n(s,c),e.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=kr,e.stateNode=c,c._reactInternals=e,c=e.stateNode,c.props=s,c.state=e.memoizedState,c.refs={

}

,xr(e),h=n.contextType,c.context=typeof h=="object"&&h!==null?te(h):Ba,c.state=e.memoizedState,h=n.getDerivedStateFromProps,typeof h=="function"&&(Xr(e,n,h,s),c.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(h=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),h!==c.state&&kr.enqueueReplaceState(c,c.state,null),Yi(e,s,c,r),qi(),c.state=e.memoizedState),typeof c.componentDidMount=="function"&&(e.flags|=4194308),s=!0
}

else if(t===null){
  c=e.stateNode;
  var v=e.memoizedProps,T=ma(n,v);
  c.props=T;
  var C=c.context,O=n.contextType;
  h=Ba,typeof O=="object"&&O!==null&&(h=te(O));
  var B=n.getDerivedStateFromProps;
  O=typeof B=="function"||typeof c.getSnapshotBeforeUpdate=="function",v=e.pendingProps!==v,O||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(v||C!==h)&&Dh(e,c,s,h),Dn=!1;
  var j=e.memoizedState;
  c.state=j,Yi(e,s,c,r),qi(),C=e.memoizedState,v||j!==C||Dn?(typeof B=="function"&&(Xr(e,n,B,s),C=e.memoizedState),(T=Dn||jh(e,n,T,s,j,C,h))?(O||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(e.flags|=4194308)):(typeof c.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=s,e.memoizedState=C),c.props=s,c.state=C,c.context=h,s=T):(typeof c.componentDidMount=="function"&&(e.flags|=4194308),s=!1)
}

else{
  c=e.stateNode,br(t,e),h=e.memoizedProps,O=ma(n,h),c.props=O,B=e.pendingProps,j=c.context,C=n.contextType,T=Ba,typeof C=="object"&&C!==null&&(T=te(C)),v=n.getDerivedStateFromProps,(C=typeof v=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(h!==B||j!==T)&&Dh(e,c,s,T),Dn=!1,j=e.memoizedState,c.state=j,Yi(e,s,c,r),qi();
  var D=e.memoizedState;
  h!==B||j!==D||Dn||t!==null&&t.dependencies!==null&&$s(t.dependencies)?(typeof v=="function"&&(Xr(e,n,v,s),D=e.memoizedState),(O=Dn||jh(e,n,O,s,j,D,T)||t!==null&&t.dependencies!==null&&$s(t.dependencies))?(C||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(s,D,T),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(s,D,T)),typeof c.componentDidUpdate=="function"&&(e.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof c.componentDidUpdate!="function"||h===t.memoizedProps&&j===t.memoizedState||(e.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||h===t.memoizedProps&&j===t.memoizedState||(e.flags|=1024),e.memoizedProps=s,e.memoizedState=D),c.props=s,c.state=D,c.context=T,s=O):(typeof c.componentDidUpdate!="function"||h===t.memoizedProps&&j===t.memoizedState||(e.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||h===t.memoizedProps&&j===t.memoizedState||(e.flags|=1024),s=!1)
}

return c=s,gl(t,e),s=(e.flags&128)!==0,c||s?(c=e.stateNode,n=s&&typeof n.getDerivedStateFromError!="function"?null:c.render(),e.flags|=1,t!==null&&s?(e.child=da(e,t.child,null,r),e.child=da(e,null,n,r)):ee(t,e,n,r),e.memoizedState=c.state,t=e.child):t=hn(t,e,r),t
}

function Kh(t,e,n,s){
  return la(),e.flags|=256,ee(t,e,n,s),e.child
}

var Jr={
  dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null
}

;
  function Fr(t){
  return{
  baseLanes:t,cachePool:Vd()
}

}

function Wr(t,e,n){
  return t=t!==null?t.childLanes&~n:0,e&&(t|=Ne),t
}

function Qh(t,e,n){
  var s=e.pendingProps,r=!1,c=(e.flags&128)!==0,h;
  if((h=c)||(h=t!==null&&t.memoizedState===null?!1:(Lt.current&2)!==0),h&&(r=!0,e.flags&=-129),h=(e.flags&32)!==0,e.flags&=-33,t===null){
  if(gt){
  if(r?On(e):Vn(),(t=Dt)?(t=t0(t,_e),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={
  dehydrated:t,treeContext:Nn!==null?{
  id:Pe,overflow:$e
}

:null,retryLane:536870912,hydrationErrors:null
}

,n=Ed(t),n.return=e,e.child=n,It=e,Dt=null)):t=null,t===null)throw Cn(e);
  return Rc(t)?e.lanes=32:e.lanes=536870912,null
}

var v=s.children;
  return s=s.fallback,r?(Vn(),r=e.mode,v=vl({
  mode:"hidden",children:v
}

,r),s=sa(s,r,n,null),v.return=e,s.return=e,v.sibling=s,e.child=v,s=e.child,s.memoizedState=Fr(n),s.childLanes=Wr(t,h,n),e.memoizedState=Jr,Zi(null,s)):(On(e),Pr(e,v))
}

var T=t.memoizedState;
  if(T!==null&&(v=T.dehydrated,v!==null)){
  if(c)e.flags&256?(On(e),e.flags&=-257,e=$r(t,e,n)):e.memoizedState!==null?(Vn(),e.child=t.child,e.flags|=128,e=null):(Vn(),v=s.fallback,r=e.mode,s=vl({
  mode:"visible",children:s.children
}

,r),v=sa(v,r,n,null),v.flags|=2,s.return=e,v.return=e,s.sibling=v,e.child=s,da(e,t.child,null,n),s=e.child,s.memoizedState=Fr(n),s.childLanes=Wr(t,h,n),e.memoizedState=Jr,e=Zi(null,s));
  else if(On(e),Rc(v)){
  if(h=v.nextSibling&&v.nextSibling.dataset,h)var C=h.dgst;
  h=C,s=Error(o(419)),s.stack="",s.digest=h,_i({
  value:s,source:null,stack:null
}

),e=$r(t,e,n)
}

else if(Xt||Ga(t,e,n,!1),h=(n&t.childLanes)!==0,Xt||h){
  if(h=Ct,h!==null&&(s=Rf(h,n),s!==0&&s!==T.retryLane))throw T.retryLane=s,ia(t,s),ye(h,t,s),Qr;
  zc(v)||Ml(),e=$r(t,e,n)
}

else zc(v)?(e.flags|=192,e.child=t.child,e=null):(t=T.treeContext,Dt=He(v.nextSibling),It=e,gt=!0,Mn=null,_e=!1,t!==null&&Cd(e,t),e=Pr(e,s.children),e.flags|=4096);
  return e
}

return r?(Vn(),v=s.fallback,r=e.mode,T=t.child,C=T.sibling,s=on(T,{
  mode:"hidden",children:s.children
}

),s.subtreeFlags=T.subtreeFlags&65011712,C!==null?v=on(C,v):(v=sa(v,r,n,null),v.flags|=2),v.return=e,s.return=e,s.sibling=v,e.child=s,Zi(null,s),s=e.child,v=t.child.memoizedState,v===null?v=Fr(n):(r=v.cachePool,r!==null?(T=qt._currentValue,r=r.parent!==T?{
  parent:T,pool:T
}

:r):r=Vd(),v={
  baseLanes:v.baseLanes|n,cachePool:r
}

),s.memoizedState=v,s.childLanes=Wr(t,h,n),e.memoizedState=Jr,Zi(t.child,s)):(On(e),n=t.child,t=n.sibling,n=on(n,{
  mode:"visible",children:s.children
}

),n.return=e,n.sibling=null,t!==null&&(h=e.deletions,h===null?(e.deletions=[t],e.flags|=16):h.push(t)),e.child=n,e.memoizedState=null,n)
}

function Pr(t,e){
  return e=vl({
  mode:"visible",children:e
}

,t.mode),e.return=t,t.child=e
}

function vl(t,e){
  return t=Te(22,t,null,e),t.lanes=0,t
}

function $r(t,e,n){
  return da(e,t.child,null,n),t=Pr(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t
}

function Zh(t,e,n){
  t.lanes|=e;
  var s=t.alternate;
  s!==null&&(s.lanes|=e),hr(t.return,e,n)
}

function Ir(t,e,n,s,r,c){
  var h=t.memoizedState;
  h===null?t.memoizedState={
  isBackwards:e,rendering:null,renderingStartTime:0,last:s,tail:n,tailMode:r,treeForkCount:c
}

:(h.isBackwards=e,h.rendering=null,h.renderingStartTime=0,h.last=s,h.tail=n,h.tailMode=r,h.treeForkCount=c)
}

function Jh(t,e,n){
  var s=e.pendingProps,r=s.revealOrder,c=s.tail;
  s=s.children;
  var h=Lt.current,v=(h&2)!==0;
  if(v?(h=h&1|2,e.flags|=128):h&=1,Q(Lt,h),ee(t,e,s,n),s=gt?Vi:0,!v&&t!==null&&(t.flags&128)!==0)t:for(t=e.child;
  t!==null;
  ){
  if(t.tag===13)t.memoizedState!==null&&Zh(t,n,e);
  else if(t.tag===19)Zh(t,n,e);
  else if(t.child!==null){
  t.child.return=t,t=t.child;
  continue
}

if(t===e)break t;
  for(;
  t.sibling===null;
  ){
  if(t.return===null||t.return===e)break t;
  t=t.return
}

t.sibling.return=t.return,t=t.sibling
}

switch(r){
  case"forwards":for(n=e.child,r=null;
  n!==null;
  )t=n.alternate,t!==null&&ll(t)===null&&(r=n),n=n.sibling;
  n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Ir(e,!1,r,n,c,s);
  break;
  case"backwards":case"unstable_legacy-backwards":for(n=null,r=e.child,e.child=null;
  r!==null;
  ){
  if(t=r.alternate,t!==null&&ll(t)===null){
  e.child=r;
  break
}

t=r.sibling,r.sibling=n,n=r,r=t
}

Ir(e,!0,n,null,c,s);
  break;
  case"together":Ir(e,!1,null,null,void 0,s);
  break;
  default:e.memoizedState=null
}

return e.child
}

function hn(t,e,n){
  if(t!==null&&(e.dependencies=t.dependencies),Hn|=e.lanes,(n&e.childLanes)===0)if(t!==null){
  if(Ga(t,e,n,!1),(n&e.childLanes)===0)return null
}

else return null;
  if(t!==null&&e.child!==t.child)throw Error(o(153));
  if(e.child!==null){
  for(t=e.child,n=on(t,t.pendingProps),e.child=n,n.return=e;
  t.sibling!==null;
  )t=t.sibling,n=n.sibling=on(t,t.pendingProps),n.return=e;
  n.sibling=null
}

return e.child
}

function tc(t,e){
  return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&$s(t)))
}

function _v(t,e,n){
  switch(e.tag){
  case 3:se(e,e.stateNode.containerInfo),jn(e,qt,t.memoizedState.cache),la();
  break;
  case 27:case 5:xi(e);
  break;
  case 4:se(e,e.stateNode.containerInfo);
  break;
  case 10:jn(e,e.type,e.memoizedProps.value);
  break;
  case 31:if(e.memoizedState!==null)return e.flags|=128,Er(e),null;
  break;
  case 13:var s=e.memoizedState;
  if(s!==null)return s.dehydrated!==null?(On(e),e.flags|=128,null):(n&e.child.childLanes)!==0?Qh(t,e,n):(On(e),t=hn(t,e,n),t!==null?t.sibling:null);
  On(e);
  break;
  case 19:var r=(t.flags&128)!==0;
  if(s=(n&e.childLanes)!==0,s||(Ga(t,e,n,!1),s=(n&e.childLanes)!==0),r){
  if(s)return Jh(t,e,n);
  e.flags|=128
}

if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Q(Lt,Lt.current),s)break;
  return null;
  case 22:return e.lanes=0,Gh(t,e,n,e.pendingProps);
  case 24:jn(e,qt,t.memoizedState.cache)
}

return hn(t,e,n)
}

function Fh(t,e,n){
  if(t!==null)if(t.memoizedProps!==e.pendingProps)Xt=!0;
  else{
  if(!tc(t,n)&&(e.flags&128)===0)return Xt=!1,_v(t,e,n);
  Xt=(t.flags&131072)!==0
}

else Xt=!1,gt&&(e.flags&1048576)!==0&&Md(e,Vi,e.index);
  switch(e.lanes=0,e.tag){
  case 16:t:{
  var s=e.pendingProps;
  if(t=ua(e.elementType),e.type=t,typeof t=="function")sr(t)?(s=ma(t,s),e.tag=1,e=kh(null,e,t,s,n)):(e.tag=0,e=Zr(null,e,t,s,n));
  else{
  if(t!=null){
  var r=t.$$typeof;
  if(r===k){
  e.tag=11,e=Hh(null,e,t,s,n);
  break t
}

else if(r===tt){
  e.tag=14,e=Uh(null,e,t,s,n);
  break t
}

}

throw e=qe(t)||t,Error(o(306,e,""))
}

}

return e;
  case 0:return Zr(t,e,e.type,e.pendingProps,n);
  case 1:return s=e.type,r=ma(s,e.pendingProps),kh(t,e,s,r,n);
  case 3:t:{
  if(se(e,e.stateNode.containerInfo),t===null)throw Error(o(387));
  s=e.pendingProps;
  var c=e.memoizedState;
  r=c.element,br(t,e),Yi(e,s,null,n);
  var h=e.memoizedState;
  if(s=h.cache,jn(e,qt,s),s!==c.cache&&mr(e,[qt],n,!0),qi(),s=h.element,c.isDehydrated)if(c={
  element:s,isDehydrated:!1,cache:h.cache
}

,e.updateQueue.baseState=c,e.memoizedState=c,e.flags&256){
  e=Kh(t,e,s,n);
  break t
}

else if(s!==r){
  r=Re(Error(o(424)),e),_i(r),e=Kh(t,e,s,n);
  break t
}

else for(t=e.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,Dt=He(t.firstChild),It=e,gt=!0,Mn=null,_e=!0,n=Gd(e,null,s,n),e.child=n;
  n;
  )n.flags=n.flags&-3|4096,n=n.sibling;
  else{
  if(la(),s===r){
  e=hn(t,e,n);
  break t
}

ee(t,e,s,n)
}

e=e.child
}

return e;
  case 26:return gl(t,e),t===null?(n=l0(e.type,null,e.pendingProps,null))?e.memoizedState=n:gt||(n=e.type,t=e.pendingProps,s=Vl(ft.current).createElement(n),s[$t]=e,s[ue]=t,ne(s,n,t),Ft(s),e.stateNode=s):e.memoizedState=l0(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;
  case 27:return xi(e),t===null&&gt&&(s=e.stateNode=a0(e.type,e.pendingProps,ft.current),It=e,_e=!0,r=Dt,Yn(e.type)?(Oc=r,Dt=He(s.firstChild)):Dt=r),ee(t,e,e.pendingProps.children,n),gl(t,e),t===null&&(e.flags|=4194304),e.child;
  case 5:return t===null&&gt&&((r=s=Dt)&&(s=fx(s,e.type,e.pendingProps,_e),s!==null?(e.stateNode=s,It=e,Dt=He(s.firstChild),_e=!1,r=!0):r=!1),r||Cn(e)),xi(e),r=e.type,c=e.pendingProps,h=t!==null?t.memoizedProps:null,s=c.children,Cc(r,c)?s=null:h!==null&&Cc(r,h)&&(e.flags|=32),e.memoizedState!==null&&(r=Mr(t,e,Nv,null,null,n),rs._currentValue=r),gl(t,e),ee(t,e,s,n),e.child;
  case 6:return t===null&&gt&&((t=n=Dt)&&(n=dx(n,e.pendingProps,_e),n!==null?(e.stateNode=n,It=e,Dt=null,t=!0):t=!1),t||Cn(e)),null;
  case 13:return Qh(t,e,n);
  case 4:return se(e,e.stateNode.containerInfo),s=e.pendingProps,t===null?e.child=da(e,null,s,n):ee(t,e,s,n),e.child;
  case 11:return Hh(t,e,e.type,e.pendingProps,n);
  case 7:return ee(t,e,e.pendingProps,n),e.child;
  case 8:return ee(t,e,e.pendingProps.children,n),e.child;
  case 12:return ee(t,e,e.pendingProps.children,n),e.child;
  case 10:return s=e.pendingProps,jn(e,e.type,s.value),ee(t,e,s.children,n),e.child;
  case 9:return r=e.type._context,s=e.pendingProps.children,ra(e),r=te(r),s=s(r),e.flags|=1,ee(t,e,s,n),e.child;
  case 14:return Uh(t,e,e.type,e.pendingProps,n);
  case 15:return Lh(t,e,e.type,e.pendingProps,n);
  case 19:return Jh(t,e,n);
  case 31:return Vv(t,e,n);
  case 22:return Gh(t,e,n,e.pendingProps);
  case 24:return ra(e),s=te(qt),t===null?(r=gr(),r===null&&(r=Ct,c=pr(),r.pooledCache=c,c.refCount++,c!==null&&(r.pooledCacheLanes|=n),r=c),e.memoizedState={
  parent:s,cache:r
}

,xr(e),jn(e,qt,r)):((t.lanes&n)!==0&&(br(t,e),Yi(e,null,null,n),qi()),r=t.memoizedState,c=e.memoizedState,r.parent!==s?(r={
  parent:s,cache:s
}

,e.memoizedState=r,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=r),jn(e,qt,s)):(s=c.cache,jn(e,qt,s),s!==r.cache&&mr(e,[qt],n,!0))),ee(t,e,e.pendingProps.children,n),e.child;
  case 29:throw e.pendingProps
}

throw Error(o(156,e.tag))
}

function mn(t){
  t.flags|=4
}

function ec(t,e,n,s,r){
  if((e=(t.mode&32)!==0)&&(e=!1),e){
  if(t.flags|=16777216,(r&335544128)===r)if(t.stateNode.complete)t.flags|=8192;
  else if(Tm())t.flags|=8192;
  else throw fa=nl,vr
}

else t.flags&=-16777217
}

function Wh(t,e){
  if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;
  else if(t.flags|=16777216,!f0(e))if(Tm())t.flags|=8192;
  else throw fa=nl,vr
}

function xl(t,e){
  e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?jf():536870912,t.lanes|=e,$a|=e)
}

function Ji(t,e){
  if(!gt)switch(t.tailMode){
  case"hidden":e=t.tail;
  for(var n=null;
  e!==null;
  )e.alternate!==null&&(n=e),e=e.sibling;
  n===null?t.tail=null:n.sibling=null;
  break;
  case"collapsed":n=t.tail;
  for(var s=null;
  n!==null;
  )n.alternate!==null&&(s=n),n=n.sibling;
  s===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null
}

}

function zt(t){
  var e=t.alternate!==null&&t.alternate.child===t.child,n=0,s=0;
  if(e)for(var r=t.child;
  r!==null;
  )n|=r.lanes|r.childLanes,s|=r.subtreeFlags&65011712,s|=r.flags&65011712,r.return=t,r=r.sibling;
  else for(r=t.child;
  r!==null;
  )n|=r.lanes|r.childLanes,s|=r.subtreeFlags,s|=r.flags,r.return=t,r=r.sibling;
  return t.subtreeFlags|=s,t.childLanes=n,e
}

function Bv(t,e,n){
  var s=e.pendingProps;
  switch(cr(e),e.tag){
  case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return zt(e),null;
  case 1:return zt(e),null;
  case 3:return n=e.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),e.memoizedState.cache!==s&&(e.flags|=2048),un(qt),Ut(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(La(e)?mn(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,fr())),zt(e),null;
  case 26:var r=e.type,c=e.memoizedState;
  return t===null?(mn(e),c!==null?(zt(e),Wh(e,c)):(zt(e),ec(e,r,null,s,n))):c?c!==t.memoizedState?(mn(e),zt(e),Wh(e,c)):(zt(e),e.flags&=-16777217):(t=t.memoizedProps,t!==s&&mn(e),zt(e),ec(e,r,t,s,n)),null;
  case 27:if(Ds(e),n=ft.current,r=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==s&&mn(e);
  else{
  if(!s){
  if(e.stateNode===null)throw Error(o(166));
  return zt(e),null
}

t=P.current,La(e)?jd(e):(t=a0(r,s,n),e.stateNode=t,mn(e))
}

return zt(e),null;
  case 5:if(Ds(e),r=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==s&&mn(e);
  else{
  if(!s){
  if(e.stateNode===null)throw Error(o(166));
  return zt(e),null
}

if(c=P.current,La(e))jd(e);
  else{
  var h=Vl(ft.current);
  switch(c){
  case 1:c=h.createElementNS("http://www.w3.org/2000/svg",r);
  break;
  case 2:c=h.createElementNS("http://www.w3.org/1998/Math/MathML",r);
  break;
  default:switch(r){
  case"svg":c=h.createElementNS("http://www.w3.org/2000/svg",r);
  break;
  case"math":c=h.createElementNS("http://www.w3.org/1998/Math/MathML",r);
  break;
  case"script":c=h.createElement("div"),c.innerHTML="<script><\/script>",c=c.removeChild(c.firstChild);
  break;
  case"select":c=typeof s.is=="string"?h.createElement("select",{
  is:s.is
}

):h.createElement("select"),s.multiple?c.multiple=!0:s.size&&(c.size=s.size);
  break;
  default:c=typeof s.is=="string"?h.createElement(r,{
  is:s.is
}

):h.createElement(r)
}

}

c[$t]=e,c[ue]=s;
  t:for(h=e.child;
  h!==null;
  ){
  if(h.tag===5||h.tag===6)c.appendChild(h.stateNode);
  else if(h.tag!==4&&h.tag!==27&&h.child!==null){
  h.child.return=h,h=h.child;
  continue
}

if(h===e)break t;
  for(;
  h.sibling===null;
  ){
  if(h.return===null||h.return===e)break t;
  h=h.return
}

h.sibling.return=h.return,h=h.sibling
}

e.stateNode=c;
  t:switch(ne(c,r,s),r){
  case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;
  break t;
  case"img":s=!0;
  break t;
  default:s=!1
}

s&&mn(e)
}

}

return zt(e),ec(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,n),null;
  case 6:if(t&&e.stateNode!=null)t.memoizedProps!==s&&mn(e);
  else{
  if(typeof s!="string"&&e.stateNode===null)throw Error(o(166));
  if(t=ft.current,La(e)){
  if(t=e.stateNode,n=e.memoizedProps,s=null,r=It,r!==null)switch(r.tag){
  case 27:case 5:s=r.memoizedProps
}

t[$t]=e,t=!!(t.nodeValue===n||s!==null&&s.suppressHydrationWarning===!0||Qm(t.nodeValue,n)),t||Cn(e,!0)
}

else t=Vl(t).createTextNode(s),t[$t]=e,e.stateNode=t
}

return zt(e),null;
  case 31:if(n=e.memoizedState,t===null||t.memoizedState!==null){
  if(s=La(e),n!==null){
  if(t===null){
  if(!s)throw Error(o(318));
  if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(o(557));
  t[$t]=e
}

else la(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;
  zt(e),t=!1
}

else n=fr(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),t=!0;
  if(!t)return e.flags&256?(we(e),e):(we(e),null);
  if((e.flags&128)!==0)throw Error(o(558))
}

return zt(e),null;
  case 13:if(s=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){
  if(r=La(e),s!==null&&s.dehydrated!==null){
  if(t===null){
  if(!r)throw Error(o(318));
  if(r=e.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(o(317));
  r[$t]=e
}

else la(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;
  zt(e),r=!1
}

else r=fr(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=r),r=!0;
  if(!r)return e.flags&256?(we(e),e):(we(e),null)
}

return we(e),(e.flags&128)!==0?(e.lanes=n,e):(n=s!==null,t=t!==null&&t.memoizedState!==null,n&&(s=e.child,r=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(r=s.alternate.memoizedState.cachePool.pool),c=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(c=s.memoizedState.cachePool.pool),c!==r&&(s.flags|=2048)),n!==t&&n&&(e.child.flags|=8192),xl(e,e.updateQueue),zt(e),null);
  case 4:return Ut(),t===null&&Ac(e.stateNode.containerInfo),zt(e),null;
  case 10:return un(e.type),zt(e),null;
  case 19:if(H(Lt),s=e.memoizedState,s===null)return zt(e),null;
  if(r=(e.flags&128)!==0,c=s.rendering,c===null)if(r)Ji(s,!1);
  else{
  if(Bt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;
  t!==null;
  ){
  if(c=ll(t),c!==null){
  for(e.flags|=128,Ji(s,!1),t=c.updateQueue,e.updateQueue=t,xl(e,t),e.subtreeFlags=0,t=n,n=e.child;
  n!==null;
  )wd(n,t),n=n.sibling;
  return Q(Lt,Lt.current&1|2),gt&&rn(e,s.treeForkCount),e.child
}

t=t.sibling
}

s.tail!==null&&ve()>wl&&(e.flags|=128,r=!0,Ji(s,!1),e.lanes=4194304)
}

else{
  if(!r)if(t=ll(c),t!==null){
  if(e.flags|=128,r=!0,t=t.updateQueue,e.updateQueue=t,xl(e,t),Ji(s,!0),s.tail===null&&s.tailMode==="hidden"&&!c.alternate&&!gt)return zt(e),null
}

else 2*ve()-s.renderingStartTime>wl&&n!==536870912&&(e.flags|=128,r=!0,Ji(s,!1),e.lanes=4194304);
  s.isBackwards?(c.sibling=e.child,e.child=c):(t=s.last,t!==null?t.sibling=c:e.child=c,s.last=c)
}

return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=ve(),t.sibling=null,n=Lt.current,Q(Lt,r?n&1|2:n&1),gt&&rn(e,s.treeForkCount),t):(zt(e),null);
  case 22:case 23:return we(e),wr(),s=e.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(e.flags|=8192):s&&(e.flags|=8192),s?(n&536870912)!==0&&(e.flags&128)===0&&(zt(e),e.subtreeFlags&6&&(e.flags|=8192)):zt(e),n=e.updateQueue,n!==null&&xl(e,n.retryQueue),n=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),s=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),s!==n&&(e.flags|=2048),t!==null&&H(ca),null;
  case 24:return n=null,t!==null&&(n=t.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),un(qt),zt(e),null;
  case 25:return null;
  case 30:return null
}

throw Error(o(156,e.tag))
}

function Hv(t,e){
  switch(cr(e),e.tag){
  case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;
  case 3:return un(qt),Ut(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;
  case 26:case 27:case 5:return Ds(e),null;
  case 31:if(e.memoizedState!==null){
  if(we(e),e.alternate===null)throw Error(o(340));
  la()
}

return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;
  case 13:if(we(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){
  if(e.alternate===null)throw Error(o(340));
  la()
}

return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;
  case 19:return H(Lt),null;
  case 4:return Ut(),null;
  case 10:return un(e.type),null;
  case 22:case 23:return we(e),wr(),t!==null&&H(ca),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;
  case 24:return un(qt),null;
  case 25:return null;
  default:return null
}

}

function Ph(t,e){
  switch(cr(e),e.tag){
  case 3:un(qt),Ut();
  break;
  case 26:case 27:case 5:Ds(e);
  break;
  case 4:Ut();
  break;
  case 31:e.memoizedState!==null&&we(e);
  break;
  case 13:we(e);
  break;
  case 19:H(Lt);
  break;
  case 10:un(e.type);
  break;
  case 22:case 23:we(e),wr(),t!==null&&H(ca);
  break;
  case 24:un(qt)
}

}

function Fi(t,e){
  try{
  var n=e.updateQueue,s=n!==null?n.lastEffect:null;
  if(s!==null){
  var r=s.next;
  n=r;
  do{
  if((n.tag&t)===t){
  s=void 0;
  var c=n.create,h=n.inst;
  s=c(),h.destroy=s
}

n=n.next
}

while(n!==r)
}

}

catch(v){
  wt(e,e.return,v)
}

}

function _n(t,e,n){
  try{
  var s=e.updateQueue,r=s!==null?s.lastEffect:null;
  if(r!==null){
  var c=r.next;
  s=c;
  do{
  if((s.tag&t)===t){
  var h=s.inst,v=h.destroy;
  if(v!==void 0){
  h.destroy=void 0,r=e;
  var T=n,C=v;
  try{
  C()
}

catch(O){
  wt(r,T,O)
}

}

}

s=s.next
}

while(s!==c)
}

}

catch(O){
  wt(e,e.return,O)
}

}

function $h(t){
  var e=t.updateQueue;
  if(e!==null){
  var n=t.stateNode;
  try{
  Yd(e,n)
}

catch(s){
  wt(t,t.return,s)
}

}

}

function Ih(t,e,n){
  n.props=ma(t.type,t.memoizedProps),n.state=t.memoizedState;
  try{
  n.componentWillUnmount()
}

catch(s){
  wt(t,e,s)
}

}

function Wi(t,e){
  try{
  var n=t.ref;
  if(n!==null){
  switch(t.tag){
  case 26:case 27:case 5:var s=t.stateNode;
  break;
  case 30:s=t.stateNode;
  break;
  default:s=t.stateNode
}

typeof n=="function"?t.refCleanup=n(s):n.current=s
}

}

catch(r){
  wt(t,e,r)
}

}

function Ie(t,e){
  var n=t.ref,s=t.refCleanup;
  if(n!==null)if(typeof s=="function")try{
  s()
}

catch(r){
  wt(t,e,r)
}

finally{
  t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)
}

else if(typeof n=="function")try{
  n(null)
}

catch(r){
  wt(t,e,r)
}

else n.current=null
}

function tm(t){
  var e=t.type,n=t.memoizedProps,s=t.stateNode;
  try{
  t:switch(e){
  case"button":case"input":case"select":case"textarea":n.autoFocus&&s.focus();
  break t;
  case"img":n.src?s.src=n.src:n.srcSet&&(s.srcset=n.srcSet)
}

}

catch(r){
  wt(t,t.return,r)
}

}

function nc(t,e,n){
  try{
  var s=t.stateNode;
  sx(s,t.type,n,e),s[ue]=e
}

catch(r){
  wt(t,t.return,r)
}

}

function em(t){
  return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Yn(t.type)||t.tag===4
}

function ac(t){
  t:for(;
  ;
  ){
  for(;
  t.sibling===null;
  ){
  if(t.return===null||em(t.return))return null;
  t=t.return
}

for(t.sibling.return=t.return,t=t.sibling;
  t.tag!==5&&t.tag!==6&&t.tag!==18;
  ){
  if(t.tag===27&&Yn(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;
  t.child.return=t,t=t.child
}

if(!(t.flags&2))return t.stateNode
}

}

function ic(t,e,n){
  var s=t.tag;
  if(s===5||s===6)t=t.stateNode,e?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(t,e):(e=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,e.appendChild(t),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=sn));
  else if(s!==4&&(s===27&&Yn(t.type)&&(n=t.stateNode,e=null),t=t.child,t!==null))for(ic(t,e,n),t=t.sibling;
  t!==null;
  )ic(t,e,n),t=t.sibling
}

function bl(t,e,n){
  var s=t.tag;
  if(s===5||s===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);
  else if(s!==4&&(s===27&&Yn(t.type)&&(n=t.stateNode),t=t.child,t!==null))for(bl(t,e,n),t=t.sibling;
  t!==null;
  )bl(t,e,n),t=t.sibling
}

function nm(t){
  var e=t.stateNode,n=t.memoizedProps;
  try{
  for(var s=t.type,r=e.attributes;
  r.length;
  )e.removeAttributeNode(r[0]);
  ne(e,s,n),e[$t]=t,e[ue]=n
}

catch(c){
  wt(t,t.return,c)
}

}

var pn=!1,kt=!1,sc=!1,am=typeof WeakSet=="function"?WeakSet:Set,Wt=null;
  function Uv(t,e){
  if(t=t.containerInfo,Nc=ql,t=pd(t),$o(t)){
  if("selectionStart"in t)var n={
  start:t.selectionStart,end:t.selectionEnd
}

;
  else t:{
  n=(n=t.ownerDocument)&&n.defaultView||window;
  var s=n.getSelection&&n.getSelection();
  if(s&&s.rangeCount!==0){
  n=s.anchorNode;
  var r=s.anchorOffset,c=s.focusNode;
  s=s.focusOffset;
  try{
  n.nodeType,c.nodeType
}

catch{
  n=null;
  break t
}

var h=0,v=-1,T=-1,C=0,O=0,B=t,j=null;
  e:for(;
  ;
  ){
  for(var D;
  B!==n||r!==0&&B.nodeType!==3||(v=h+r),B!==c||s!==0&&B.nodeType!==3||(T=h+s),B.nodeType===3&&(h+=B.nodeValue.length),(D=B.firstChild)!==null;
  )j=B,B=D;
  for(;
  ;
  ){
  if(B===t)break e;
  if(j===n&&++C===r&&(v=h),j===c&&++O===s&&(T=h),(D=B.nextSibling)!==null)break;
  B=j,j=B.parentNode
}

B=D
}

n=v===-1||T===-1?null:{
  start:v,end:T
}

}

else n=null
}

n=n||{
  start:0,end:0
}

}

else n=null;
  for(Mc={
  focusedElem:t,selectionRange:n
}

,ql=!1,Wt=e;
  Wt!==null;
  )if(e=Wt,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Wt=t;
  else for(;
  Wt!==null;
  ){
  switch(e=Wt,c=e.alternate,t=e.flags,e.tag){
  case 0:if((t&4)!==0&&(t=e.updateQueue,t=t!==null?t.events:null,t!==null))for(n=0;
  n<t.length;
  n++)r=t[n],r.ref.impl=r.nextImpl;
  break;
  case 11:case 15:break;
  case 1:if((t&1024)!==0&&c!==null){
  t=void 0,n=e,r=c.memoizedProps,c=c.memoizedState,s=n.stateNode;
  try{
  var F=ma(n.type,r);
  t=s.getSnapshotBeforeUpdate(F,c),s.__reactInternalSnapshotBeforeUpdate=t
}

catch(nt){
  wt(n,n.return,nt)
}

}

break;
  case 3:if((t&1024)!==0){
  if(t=e.stateNode.containerInfo,n=t.nodeType,n===9)Dc(t);
  else if(n===1)switch(t.nodeName){
  case"HEAD":case"HTML":case"BODY":Dc(t);
  break;
  default:t.textContent=""
}

}

break;
  case 5:case 26:case 27:case 6:case 4:case 17:break;
  default:if((t&1024)!==0)throw Error(o(163))
}

if(t=e.sibling,t!==null){
  t.return=e.return,Wt=t;
  break
}

Wt=e.return
}

}

function im(t,e,n){
  var s=n.flags;
  switch(n.tag){
  case 0:case 11:case 15:gn(t,n),s&4&&Fi(5,n);
  break;
  case 1:if(gn(t,n),s&4)if(t=n.stateNode,e===null)try{
  t.componentDidMount()
}

catch(h){
  wt(n,n.return,h)
}

else{
  var r=ma(n.type,e.memoizedProps);
  e=e.memoizedState;
  try{
  t.componentDidUpdate(r,e,t.__reactInternalSnapshotBeforeUpdate)
}

catch(h){
  wt(n,n.return,h)
}

}

s&64&&$h(n),s&512&&Wi(n,n.return);
  break;
  case 3:if(gn(t,n),s&64&&(t=n.updateQueue,t!==null)){
  if(e=null,n.child!==null)switch(n.child.tag){
  case 27:case 5:e=n.child.stateNode;
  break;
  case 1:e=n.child.stateNode
}

try{
  Yd(t,e)
}

catch(h){
  wt(n,n.return,h)
}

}

break;
  case 27:e===null&&s&4&&nm(n);
  case 26:case 5:gn(t,n),e===null&&s&4&&tm(n),s&512&&Wi(n,n.return);
  break;
  case 12:gn(t,n);
  break;
  case 31:gn(t,n),s&4&&om(t,n);
  break;
  case 13:gn(t,n),s&4&&rm(t,n),s&64&&(t=n.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(n=Zv.bind(null,n),hx(t,n))));
  break;
  case 22:if(s=n.memoizedState!==null||pn,!s){
  e=e!==null&&e.memoizedState!==null||kt,r=pn;
  var c=kt;
  pn=s,(kt=e)&&!c?vn(t,n,(n.subtreeFlags&8772)!==0):gn(t,n),pn=r,kt=c
}

break;
  case 30:break;
  default:gn(t,n)
}

}

function sm(t){
  var e=t.alternate;
  e!==null&&(t.alternate=null,sm(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&_o(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null
}

var Rt=null,de=!1;
  function yn(t,e,n){
  for(n=n.child;
  n!==null;
  )lm(t,e,n),n=n.sibling
}

function lm(t,e,n){
  if(xe&&typeof xe.onCommitFiberUnmount=="function")try{
  xe.onCommitFiberUnmount(bi,n)
}

catch{

}

switch(n.tag){
  case 26:kt||Ie(n,e),yn(t,e,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));
  break;
  case 27:kt||Ie(n,e);
  var s=Rt,r=de;
  Yn(n.type)&&(Rt=n.stateNode,de=!1),yn(t,e,n),ss(n.stateNode),Rt=s,de=r;
  break;
  case 5:kt||Ie(n,e);
  case 6:if(s=Rt,r=de,Rt=null,yn(t,e,n),Rt=s,de=r,Rt!==null)if(de)try{
  (Rt.nodeType===9?Rt.body:Rt.nodeName==="HTML"?Rt.ownerDocument.body:Rt).removeChild(n.stateNode)
}

catch(c){
  wt(n,e,c)
}

else try{
  Rt.removeChild(n.stateNode)
}

catch(c){
  wt(n,e,c)
}

break;
  case 18:Rt!==null&&(de?(t=Rt,$m(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.stateNode),li(t)):$m(Rt,n.stateNode));
  break;
  case 4:s=Rt,r=de,Rt=n.stateNode.containerInfo,de=!0,yn(t,e,n),Rt=s,de=r;
  break;
  case 0:case 11:case 14:case 15:_n(2,n,e),kt||_n(4,n,e),yn(t,e,n);
  break;
  case 1:kt||(Ie(n,e),s=n.stateNode,typeof s.componentWillUnmount=="function"&&Ih(n,e,s)),yn(t,e,n);
  break;
  case 21:yn(t,e,n);
  break;
  case 22:kt=(s=kt)||n.memoizedState!==null,yn(t,e,n),kt=s;
  break;
  default:yn(t,e,n)
}

}

function om(t,e){
  if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){
  t=t.dehydrated;
  try{
  li(t)
}

catch(n){
  wt(e,e.return,n)
}

}

}

function rm(t,e){
  if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{
  li(t)
}

catch(n){
  wt(e,e.return,n)
}

}

function Lv(t){
  switch(t.tag){
  case 31:case 13:case 19:var e=t.stateNode;
  return e===null&&(e=t.stateNode=new am),e;
  case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new am),e;
  default:throw Error(o(435,t.tag))
}

}

function Sl(t,e){
  var n=Lv(t);
  e.forEach(function(s){
  if(!n.has(s)){
  n.add(s);
  var r=Jv.bind(null,t,s);
  s.then(r,r)
}

}

)
}

function he(t,e){
  var n=e.deletions;
  if(n!==null)for(var s=0;
  s<n.length;
  s++){
  var r=n[s],c=t,h=e,v=h;
  t:for(;
  v!==null;
  ){
  switch(v.tag){
  case 27:if(Yn(v.type)){
  Rt=v.stateNode,de=!1;
  break t
}

break;
  case 5:Rt=v.stateNode,de=!1;
  break t;
  case 3:case 4:Rt=v.stateNode.containerInfo,de=!0;
  break t
}

v=v.return
}

if(Rt===null)throw Error(o(160));
  lm(c,h,r),Rt=null,de=!1,c=r.alternate,c!==null&&(c.return=null),r.return=null
}

if(e.subtreeFlags&13886)for(e=e.child;
  e!==null;
  )cm(e,t),e=e.sibling
}

var Xe=null;
  function cm(t,e){
  var n=t.alternate,s=t.flags;
  switch(t.tag){
  case 0:case 11:case 14:case 15:he(e,t),me(t),s&4&&(_n(3,t,t.return),Fi(3,t),_n(5,t,t.return));
  break;
  case 1:he(e,t),me(t),s&512&&(kt||n===null||Ie(n,n.return)),s&64&&pn&&(t=t.updateQueue,t!==null&&(s=t.callbacks,s!==null&&(n=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=n===null?s:n.concat(s))));
  break;
  case 26:var r=Xe;
  if(he(e,t),me(t),s&512&&(kt||n===null||Ie(n,n.return)),s&4){
  var c=n!==null?n.memoizedState:null;
  if(s=t.memoizedState,n===null)if(s===null)if(t.stateNode===null){
  t:{
  s=t.type,n=t.memoizedProps,r=r.ownerDocument||r;
  e:switch(s){
  case"title":c=r.getElementsByTagName("title")[0],(!c||c[Ai]||c[$t]||c.namespaceURI==="http://www.w3.org/2000/svg"||c.hasAttribute("itemprop"))&&(c=r.createElement(s),r.head.insertBefore(c,r.querySelector("head > title"))),ne(c,s,n),c[$t]=t,Ft(c),s=c;
  break t;
  case"link":var h=c0("link","href",r).get(s+(n.href||""));
  if(h){
  for(var v=0;
  v<h.length;
  v++)if(c=h[v],c.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&c.getAttribute("rel")===(n.rel==null?null:n.rel)&&c.getAttribute("title")===(n.title==null?null:n.title)&&c.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){
  h.splice(v,1);
  break e
}

}

c=r.createElement(s),ne(c,s,n),r.head.appendChild(c);
  break;
  case"meta":if(h=c0("meta","content",r).get(s+(n.content||""))){
  for(v=0;
  v<h.length;
  v++)if(c=h[v],c.getAttribute("content")===(n.content==null?null:""+n.content)&&c.getAttribute("name")===(n.name==null?null:n.name)&&c.getAttribute("property")===(n.property==null?null:n.property)&&c.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&c.getAttribute("charset")===(n.charSet==null?null:n.charSet)){
  h.splice(v,1);
  break e
}

}

c=r.createElement(s),ne(c,s,n),r.head.appendChild(c);
  break;
  default:throw Error(o(468,s))
}

c[$t]=t,Ft(c),s=c
}

t.stateNode=s
}

else u0(r,t.type,t.stateNode);
  else t.stateNode=r0(r,s,t.memoizedProps);
  else c!==s?(c===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):c.count--,s===null?u0(r,t.type,t.stateNode):r0(r,s,t.memoizedProps)):s===null&&t.stateNode!==null&&nc(t,t.memoizedProps,n.memoizedProps)
}

break;
  case 27:he(e,t),me(t),s&512&&(kt||n===null||Ie(n,n.return)),n!==null&&s&4&&nc(t,t.memoizedProps,n.memoizedProps);
  break;
  case 5:if(he(e,t),me(t),s&512&&(kt||n===null||Ie(n,n.return)),t.flags&32){
  r=t.stateNode;
  try{
  ja(r,"")
}

catch(F){
  wt(t,t.return,F)
}

}

s&4&&t.stateNode!=null&&(r=t.memoizedProps,nc(t,r,n!==null?n.memoizedProps:r)),s&1024&&(sc=!0);
  break;
  case 6:if(he(e,t),me(t),s&4){
  if(t.stateNode===null)throw Error(o(162));
  s=t.memoizedProps,n=t.stateNode;
  try{
  n.nodeValue=s
}

catch(F){
  wt(t,t.return,F)
}

}

break;
  case 3:if(Hl=null,r=Xe,Xe=_l(e.containerInfo),he(e,t),Xe=r,me(t),s&4&&n!==null&&n.memoizedState.isDehydrated)try{
  li(e.containerInfo)
}

catch(F){
  wt(t,t.return,F)
}

sc&&(sc=!1,um(t));
  break;
  case 4:s=Xe,Xe=_l(t.stateNode.containerInfo),he(e,t),me(t),Xe=s;
  break;
  case 12:he(e,t),me(t);
  break;
  case 31:he(e,t),me(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Sl(t,s)));
  break;
  case 13:he(e,t),me(t),t.child.flags&8192&&t.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Al=ve()),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Sl(t,s)));
  break;
  case 22:r=t.memoizedState!==null;
  var T=n!==null&&n.memoizedState!==null,C=pn,O=kt;
  if(pn=C||r,kt=O||T,he(e,t),kt=O,pn=C,me(t),s&8192)t:for(e=t.stateNode,e._visibility=r?e._visibility&-2:e._visibility|1,r&&(n===null||T||pn||kt||pa(t)),n=null,e=t;
  ;
  ){
  if(e.tag===5||e.tag===26){
  if(n===null){
  T=n=e;
  try{
  if(c=T.stateNode,r)h=c.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none";
  else{
  v=T.stateNode;
  var B=T.memoizedProps.style,j=B!=null&&B.hasOwnProperty("display")?B.display:null;
  v.style.display=j==null||typeof j=="boolean"?"":(""+j).trim()
}

}

catch(F){
  wt(T,T.return,F)
}

}

}

else if(e.tag===6){
  if(n===null){
  T=e;
  try{
  T.stateNode.nodeValue=r?"":T.memoizedProps
}

catch(F){
  wt(T,T.return,F)
}

}

}

else if(e.tag===18){
  if(n===null){
  T=e;
  try{
  var D=T.stateNode;
  r?Im(D,!0):Im(T.stateNode,!1)
}

catch(F){
  wt(T,T.return,F)
}

}

}

else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){
  e.child.return=e,e=e.child;
  continue
}

if(e===t)break t;
  for(;
  e.sibling===null;
  ){
  if(e.return===null||e.return===t)break t;
  n===e&&(n=null),e=e.return
}

n===e&&(n=null),e.sibling.return=e.return,e=e.sibling
}

s&4&&(s=t.updateQueue,s!==null&&(n=s.retryQueue,n!==null&&(s.retryQueue=null,Sl(t,n))));
  break;
  case 19:he(e,t),me(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Sl(t,s)));
  break;
  case 30:break;
  case 21:break;
  default:he(e,t),me(t)
}

}

function me(t){
  var e=t.flags;
  if(e&2){
  try{
  for(var n,s=t.return;
  s!==null;
  ){
  if(em(s)){
  n=s;
  break
}

s=s.return
}

if(n==null)throw Error(o(160));
  switch(n.tag){
  case 27:var r=n.stateNode,c=ac(t);
  bl(t,c,r);
  break;
  case 5:var h=n.stateNode;
  n.flags&32&&(ja(h,""),n.flags&=-33);
  var v=ac(t);
  bl(t,v,h);
  break;
  case 3:case 4:var T=n.stateNode.containerInfo,C=ac(t);
  ic(t,C,T);
  break;
  default:throw Error(o(161))
}

}

catch(O){
  wt(t,t.return,O)
}

t.flags&=-3
}

e&4096&&(t.flags&=-4097)
}

function um(t){
  if(t.subtreeFlags&1024)for(t=t.child;
  t!==null;
  ){
  var e=t;
  um(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling
}

}

function gn(t,e){
  if(e.subtreeFlags&8772)for(e=e.child;
  e!==null;
  )im(t,e.alternate,e),e=e.sibling
}

function pa(t){
  for(t=t.child;
  t!==null;
  ){
  var e=t;
  switch(e.tag){
  case 0:case 11:case 14:case 15:_n(4,e,e.return),pa(e);
  break;
  case 1:Ie(e,e.return);
  var n=e.stateNode;
  typeof n.componentWillUnmount=="function"&&Ih(e,e.return,n),pa(e);
  break;
  case 27:ss(e.stateNode);
  case 26:case 5:Ie(e,e.return),pa(e);
  break;
  case 22:e.memoizedState===null&&pa(e);
  break;
  case 30:pa(e);
  break;
  default:pa(e)
}

t=t.sibling
}

}

function vn(t,e,n){
  for(n=n&&(e.subtreeFlags&8772)!==0,e=e.child;
  e!==null;
  ){
  var s=e.alternate,r=t,c=e,h=c.flags;
  switch(c.tag){
  case 0:case 11:case 15:vn(r,c,n),Fi(4,c);
  break;
  case 1:if(vn(r,c,n),s=c,r=s.stateNode,typeof r.componentDidMount=="function")try{
  r.componentDidMount()
}

catch(C){
  wt(s,s.return,C)
}

if(s=c,r=s.updateQueue,r!==null){
  var v=s.stateNode;
  try{
  var T=r.shared.hiddenCallbacks;
  if(T!==null)for(r.shared.hiddenCallbacks=null,r=0;
  r<T.length;
  r++)qd(T[r],v)
}

catch(C){
  wt(s,s.return,C)
}

}

n&&h&64&&$h(c),Wi(c,c.return);
  break;
  case 27:nm(c);
  case 26:case 5:vn(r,c,n),n&&s===null&&h&4&&tm(c),Wi(c,c.return);
  break;
  case 12:vn(r,c,n);
  break;
  case 31:vn(r,c,n),n&&h&4&&om(r,c);
  break;
  case 13:vn(r,c,n),n&&h&4&&rm(r,c);
  break;
  case 22:c.memoizedState===null&&vn(r,c,n),Wi(c,c.return);
  break;
  case 30:break;
  default:vn(r,c,n)
}

e=e.sibling
}

}

function lc(t,e){
  var n=null;
  t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==n&&(t!=null&&t.refCount++,n!=null&&Bi(n))
}

function oc(t,e){
  t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Bi(t))
}

function ke(t,e,n,s){
  if(e.subtreeFlags&10256)for(e=e.child;
  e!==null;
  )fm(t,e,n,s),e=e.sibling
}

function fm(t,e,n,s){
  var r=e.flags;
  switch(e.tag){
  case 0:case 11:case 15:ke(t,e,n,s),r&2048&&Fi(9,e);
  break;
  case 1:ke(t,e,n,s);
  break;
  case 3:ke(t,e,n,s),r&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Bi(t)));
  break;
  case 12:if(r&2048){
  ke(t,e,n,s),t=e.stateNode;
  try{
  var c=e.memoizedProps,h=c.id,v=c.onPostCommit;
  typeof v=="function"&&v(h,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)
}

catch(T){
  wt(e,e.return,T)
}

}

else ke(t,e,n,s);
  break;
  case 31:ke(t,e,n,s);
  break;
  case 13:ke(t,e,n,s);
  break;
  case 23:break;
  case 22:c=e.stateNode,h=e.alternate,e.memoizedState!==null?c._visibility&2?ke(t,e,n,s):Pi(t,e):c._visibility&2?ke(t,e,n,s):(c._visibility|=2,Fa(t,e,n,s,(e.subtreeFlags&10256)!==0||!1)),r&2048&&lc(h,e);
  break;
  case 24:ke(t,e,n,s),r&2048&&oc(e.alternate,e);
  break;
  default:ke(t,e,n,s)
}

}

function Fa(t,e,n,s,r){
  for(r=r&&((e.subtreeFlags&10256)!==0||!1),e=e.child;
  e!==null;
  ){
  var c=t,h=e,v=n,T=s,C=h.flags;
  switch(h.tag){
  case 0:case 11:case 15:Fa(c,h,v,T,r),Fi(8,h);
  break;
  case 23:break;
  case 22:var O=h.stateNode;
  h.memoizedState!==null?O._visibility&2?Fa(c,h,v,T,r):Pi(c,h):(O._visibility|=2,Fa(c,h,v,T,r)),r&&C&2048&&lc(h.alternate,h);
  break;
  case 24:Fa(c,h,v,T,r),r&&C&2048&&oc(h.alternate,h);
  break;
  default:Fa(c,h,v,T,r)
}

e=e.sibling
}

}

function Pi(t,e){
  if(e.subtreeFlags&10256)for(e=e.child;
  e!==null;
  ){
  var n=t,s=e,r=s.flags;
  switch(s.tag){
  case 22:Pi(n,s),r&2048&&lc(s.alternate,s);
  break;
  case 24:Pi(n,s),r&2048&&oc(s.alternate,s);
  break;
  default:Pi(n,s)
}

e=e.sibling
}

}

var $i=8192;
  function Wa(t,e,n){
  if(t.subtreeFlags&$i)for(t=t.child;
  t!==null;
  )dm(t,e,n),t=t.sibling
}

function dm(t,e,n){
  switch(t.tag){
  case 26:Wa(t,e,n),t.flags&$i&&t.memoizedState!==null&&Ex(n,Xe,t.memoizedState,t.memoizedProps);
  break;
  case 5:Wa(t,e,n);
  break;
  case 3:case 4:var s=Xe;
  Xe=_l(t.stateNode.containerInfo),Wa(t,e,n),Xe=s;
  break;
  case 22:t.memoizedState===null&&(s=t.alternate,s!==null&&s.memoizedState!==null?(s=$i,$i=16777216,Wa(t,e,n),$i=s):Wa(t,e,n));
  break;
  default:Wa(t,e,n)
}

}

function hm(t){
  var e=t.alternate;
  if(e!==null&&(t=e.child,t!==null)){
  e.child=null;
  do e=t.sibling,t.sibling=null,t=e;
  while(t!==null)
}

}

function Ii(t){
  var e=t.deletions;
  if((t.flags&16)!==0){
  if(e!==null)for(var n=0;
  n<e.length;
  n++){
  var s=e[n];
  Wt=s,pm(s,t)
}

hm(t)
}

if(t.subtreeFlags&10256)for(t=t.child;
  t!==null;
  )mm(t),t=t.sibling
}

function mm(t){
  switch(t.tag){
  case 0:case 11:case 15:Ii(t),t.flags&2048&&_n(9,t,t.return);
  break;
  case 3:Ii(t);
  break;
  case 12:Ii(t);
  break;
  case 22:var e=t.stateNode;
  t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,Tl(t)):Ii(t);
  break;
  default:Ii(t)
}

}

function Tl(t){
  var e=t.deletions;
  if((t.flags&16)!==0){
  if(e!==null)for(var n=0;
  n<e.length;
  n++){
  var s=e[n];
  Wt=s,pm(s,t)
}

hm(t)
}

for(t=t.child;
  t!==null;
  ){
  switch(e=t,e.tag){
  case 0:case 11:case 15:_n(8,e,e.return),Tl(e);
  break;
  case 22:n=e.stateNode,n._visibility&2&&(n._visibility&=-3,Tl(e));
  break;
  default:Tl(e)
}

t=t.sibling
}

}

function pm(t,e){
  for(;
  Wt!==null;
  ){
  var n=Wt;
  switch(n.tag){
  case 0:case 11:case 15:_n(8,n,e);
  break;
  case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){
  var s=n.memoizedState.cachePool.pool;
  s!=null&&s.refCount++
}

break;
  case 24:Bi(n.memoizedState.cache)
}

if(s=n.child,s!==null)s.return=n,Wt=s;
  else t:for(n=t;
  Wt!==null;
  ){
  s=Wt;
  var r=s.sibling,c=s.return;
  if(sm(s),s===n){
  Wt=null;
  break t
}

if(r!==null){
  r.return=c,Wt=r;
  break t
}

Wt=c
}

}

}

var Gv={
  getCacheForType:function(t){
  var e=te(qt),n=e.data.get(t);
  return n===void 0&&(n=t(),e.data.set(t,n)),n
}

,cacheSignal:function(){
  return te(qt).controller.signal
}

}

,qv=typeof WeakMap=="function"?WeakMap:Map,St=0,Ct=null,dt=null,mt=0,At=0,Ee=null,Bn=!1,Pa=!1,rc=!1,xn=0,Bt=0,Hn=0,ya=0,cc=0,Ne=0,$a=0,ts=null,pe=null,uc=!1,Al=0,ym=0,wl=1/0,El=null,Un=null,Qt=0,Ln=null,Ia=null,bn=0,fc=0,dc=null,gm=null,es=0,hc=null;
  function Me(){
  return(St&2)!==0&&mt!==0?mt&-mt:V.T!==null?xc():Of()
}

function vm(){
  if(Ne===0)if((mt&536870912)===0||gt){
  var t=Os;
  Os<<=1,(Os&3932160)===0&&(Os=262144),Ne=t
}

else Ne=536870912;
  return t=Ae.current,t!==null&&(t.flags|=32),Ne
}

function ye(t,e,n){
  (t===Ct&&(At===2||At===9)||t.cancelPendingCommit!==null)&&(ti(t,0),Gn(t,mt,Ne,!1)),Ti(t,n),((St&2)===0||t!==Ct)&&(t===Ct&&((St&2)===0&&(ya|=n),Bt===4&&Gn(t,mt,Ne,!1)),tn(t))
}

function xm(t,e,n){
  if((St&6)!==0)throw Error(o(327));
  var s=!n&&(e&127)===0&&(e&t.expiredLanes)===0||Si(t,e),r=s?kv(t,e):pc(t,e,!0),c=s;
  do{
  if(r===0){
  Pa&&!s&&Gn(t,e,0,!1);
  break
}

else{
  if(n=t.current.alternate,c&&!Yv(n)){
  r=pc(t,e,!1),c=!1;
  continue
}

if(r===2){
  if(c=e,t.errorRecoveryDisabledLanes&c)var h=0;
  else h=t.pendingLanes&-536870913,h=h!==0?h:h&536870912?536870912:0;
  if(h!==0){
  e=h;
  t:{
  var v=t;
  r=ts;
  var T=v.current.memoizedState.isDehydrated;
  if(T&&(ti(v,h).flags|=256),h=pc(v,h,!1),h!==2){
  if(rc&&!T){
  v.errorRecoveryDisabledLanes|=c,ya|=c,r=4;
  break t
}

c=pe,pe=r,c!==null&&(pe===null?pe=c:pe.push.apply(pe,c))
}

r=h
}

if(c=!1,r!==2)continue
}

}

if(r===1){
  ti(t,0),Gn(t,e,0,!0);
  break
}

t:{
  switch(s=t,c=r,c){
  case 0:case 1:throw Error(o(345));
  case 4:if((e&4194048)!==e)break;
  case 6:Gn(s,e,Ne,!Bn);
  break t;
  case 2:pe=null;
  break;
  case 3:case 5:break;
  default:throw Error(o(329))
}

if((e&62914560)===e&&(r=Al+300-ve(),10<r)){
  if(Gn(s,e,Ne,!Bn),_s(s,0,!0)!==0)break t;
  bn=e,s.timeoutHandle=Wm(bm.bind(null,s,n,pe,El,uc,e,Ne,ya,$a,Bn,c,"Throttled",-0,0),r);
  break t
}

bm(s,n,pe,El,uc,e,Ne,ya,$a,Bn,c,null,-0,0)
}

}

break
}

while(!0);
  tn(t)
}

function bm(t,e,n,s,r,c,h,v,T,C,O,B,j,D){
  if(t.timeoutHandle=-1,B=e.subtreeFlags,B&8192||(B&16785408)===16785408){
  B={
  stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:sn
}

,dm(e,c,B);
  var F=(c&62914560)===c?Al-ve():(c&4194048)===c?ym-ve():0;
  if(F=Nx(B,F),F!==null){
  bn=c,t.cancelPendingCommit=F(Cm.bind(null,t,e,c,n,s,r,h,v,T,O,B,null,j,D)),Gn(t,c,h,!C);
  return
}

}

Cm(t,e,c,n,s,r,h,v,T)
}

function Yv(t){
  for(var e=t;
  ;
  ){
  var n=e.tag;
  if((n===0||n===11||n===15)&&e.flags&16384&&(n=e.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var s=0;
  s<n.length;
  s++){
  var r=n[s],c=r.getSnapshot;
  r=r.value;
  try{
  if(!Se(c(),r))return!1
}

catch{
  return!1
}

}

if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;
  else{
  if(e===t)break;
  for(;
  e.sibling===null;
  ){
  if(e.return===null||e.return===t)return!0;
  e=e.return
}

e.sibling.return=e.return,e=e.sibling
}

}

return!0
}

function Gn(t,e,n,s){
  e&=~cc,e&=~ya,t.suspendedLanes|=e,t.pingedLanes&=~e,s&&(t.warmLanes|=e),s=t.expirationTimes;
  for(var r=e;
  0<r;
  ){
  var c=31-be(r),h=1<<c;
  s[c]=-1,r&=~h
}

n!==0&&Df(t,n,e)
}

function Nl(){
  return(St&6)===0?(ns(0),!1):!0
}

function mc(){
  if(dt!==null){
  if(At===0)var t=dt.return;
  else t=dt,cn=oa=null,Dr(t),ka=null,Ui=0,t=dt;
  for(;
  t!==null;
  )Ph(t.alternate,t),t=t.return;
  dt=null
}

}

function ti(t,e){
  var n=t.timeoutHandle;
  n!==-1&&(t.timeoutHandle=-1,rx(n)),n=t.cancelPendingCommit,n!==null&&(t.cancelPendingCommit=null,n()),bn=0,mc(),Ct=t,dt=n=on(t.current,null),mt=e,At=0,Ee=null,Bn=!1,Pa=Si(t,e),rc=!1,$a=Ne=cc=ya=Hn=Bt=0,pe=ts=null,uc=!1,(e&8)!==0&&(e|=e&32);
  var s=t.entangledLanes;
  if(s!==0)for(t=t.entanglements,s&=e;
  0<s;
  ){
  var r=31-be(s),c=1<<r;
  e|=t[r],s&=~c
}

return xn=e,Zs(),n
}

function Sm(t,e){
  ot=null,V.H=Qi,e===Xa||e===el?(e=Hd(),At=3):e===vr?(e=Hd(),At=4):At=e===Qr?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,Ee=e,dt===null&&(Bt=1,pl(t,Re(e,t.current)))
}

function Tm(){
  var t=Ae.current;
  return t===null?!0:(mt&4194048)===mt?Be===null:(mt&62914560)===mt||(mt&536870912)!==0?t===Be:!1
}

function Am(){
  var t=V.H;
  return V.H=Qi,t===null?Qi:t
}

function wm(){
  var t=V.A;
  return V.A=Gv,t
}

function Ml(){
  Bt=4,Bn||(mt&4194048)!==mt&&Ae.current!==null||(Pa=!0),(Hn&134217727)===0&&(ya&134217727)===0||Ct===null||Gn(Ct,mt,Ne,!1)
}

function pc(t,e,n){
  var s=St;
  St|=2;
  var r=Am(),c=wm();
  (Ct!==t||mt!==e)&&(El=null,ti(t,e)),e=!1;
  var h=Bt;
  t:do try{
  if(At!==0&&dt!==null){
  var v=dt,T=Ee;
  switch(At){
  case 8:mc(),h=6;
  break t;
  case 3:case 2:case 9:case 6:Ae.current===null&&(e=!0);
  var C=At;
  if(At=0,Ee=null,ei(t,v,T,C),n&&Pa){
  h=0;
  break t
}

break;
  default:C=At,At=0,Ee=null,ei(t,v,T,C)
}

}

Xv(),h=Bt;
  break
}

catch(O){
  Sm(t,O)
}

while(!0);
  return e&&t.shellSuspendCounter++,cn=oa=null,St=s,V.H=r,V.A=c,dt===null&&(Ct=null,mt=0,Zs()),h
}

function Xv(){
  for(;
  dt!==null;
  )Em(dt)
}

function kv(t,e){
  var n=St;
  St|=2;
  var s=Am(),r=wm();
  Ct!==t||mt!==e?(El=null,wl=ve()+500,ti(t,e)):Pa=Si(t,e);
  t:do try{
  if(At!==0&&dt!==null){
  e=dt;
  var c=Ee;
  e:switch(At){
  case 1:At=0,Ee=null,ei(t,e,c,1);
  break;
  case 2:case 9:if(_d(c)){
  At=0,Ee=null,Nm(e);
  break
}

e=function(){
  At!==2&&At!==9||Ct!==t||(At=7),tn(t)
}

,c.then(e,e);
  break t;
  case 3:At=7;
  break t;
  case 4:At=5;
  break t;
  case 7:_d(c)?(At=0,Ee=null,Nm(e)):(At=0,Ee=null,ei(t,e,c,7));
  break;
  case 5:var h=null;
  switch(dt.tag){
  case 26:h=dt.memoizedState;
  case 5:case 27:var v=dt;
  if(h?f0(h):v.stateNode.complete){
  At=0,Ee=null;
  var T=v.sibling;
  if(T!==null)dt=T;
  else{
  var C=v.return;
  C!==null?(dt=C,Cl(C)):dt=null
}

break e
}

}

At=0,Ee=null,ei(t,e,c,5);
  break;
  case 6:At=0,Ee=null,ei(t,e,c,6);
  break;
  case 8:mc(),Bt=6;
  break t;
  default:throw Error(o(462))
}

}

Kv();
  break
}

catch(O){
  Sm(t,O)
}

while(!0);
  return cn=oa=null,V.H=s,V.A=r,St=n,dt!==null?0:(Ct=null,mt=0,Zs(),Bt)
}

function Kv(){
  for(;
  dt!==null&&!m1();
  )Em(dt)
}

function Em(t){
  var e=Fh(t.alternate,t,xn);
  t.memoizedProps=t.pendingProps,e===null?Cl(t):dt=e
}

function Nm(t){
  var e=t,n=e.alternate;
  switch(e.tag){
  case 15:case 0:e=Xh(n,e,e.pendingProps,e.type,void 0,mt);
  break;
  case 11:e=Xh(n,e,e.pendingProps,e.type.render,e.ref,mt);
  break;
  case 5:Dr(e);
  default:Ph(n,e),e=dt=wd(e,xn),e=Fh(n,e,xn)
}

t.memoizedProps=t.pendingProps,e===null?Cl(t):dt=e
}

function ei(t,e,n,s){
  cn=oa=null,Dr(e),ka=null,Ui=0;
  var r=e.return;
  try{
  if(Ov(t,r,e,n,mt)){
  Bt=1,pl(t,Re(n,t.current)),dt=null;
  return
}

}

catch(c){
  if(r!==null)throw dt=r,c;
  Bt=1,pl(t,Re(n,t.current)),dt=null;
  return
}

e.flags&32768?(gt||s===1?t=!0:Pa||(mt&536870912)!==0?t=!1:(Bn=t=!0,(s===2||s===9||s===3||s===6)&&(s=Ae.current,s!==null&&s.tag===13&&(s.flags|=16384))),Mm(e,t)):Cl(e)
}

function Cl(t){
  var e=t;
  do{
  if((e.flags&32768)!==0){
  Mm(e,Bn);
  return
}

t=e.return;
  var n=Bv(e.alternate,e,xn);
  if(n!==null){
  dt=n;
  return
}

if(e=e.sibling,e!==null){
  dt=e;
  return
}

dt=e=t
}

while(e!==null);
  Bt===0&&(Bt=5)
}

function Mm(t,e){
  do{
  var n=Hv(t.alternate,t);
  if(n!==null){
  n.flags&=32767,dt=n;
  return
}

if(n=t.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!e&&(t=t.sibling,t!==null)){
  dt=t;
  return
}

dt=t=n
}

while(t!==null);
  Bt=6,dt=null
}

function Cm(t,e,n,s,r,c,h,v,T){
  t.cancelPendingCommit=null;
  do jl();
  while(Qt!==0);
  if((St&6)!==0)throw Error(o(327));
  if(e!==null){
  if(e===t.current)throw Error(o(177));
  if(c=e.lanes|e.childLanes,c|=ar,w1(t,n,c,h,v,T),t===Ct&&(dt=Ct=null,mt=0),Ia=e,Ln=t,bn=n,fc=c,dc=r,gm=s,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Fv(zs,function(){
  return Om(),null
}

)):(t.callbackNode=null,t.callbackPriority=0),s=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||s){
  s=V.T,V.T=null,r=K.p,K.p=2,h=St,St|=4;
  try{
  Uv(t,e,n)
}

finally{
  St=h,K.p=r,V.T=s
}

}

Qt=1,jm(),Dm(),zm()
}

}

function jm(){
  if(Qt===1){
  Qt=0;
  var t=Ln,e=Ia,n=(e.flags&13878)!==0;
  if((e.subtreeFlags&13878)!==0||n){
  n=V.T,V.T=null;
  var s=K.p;
  K.p=2;
  var r=St;
  St|=4;
  try{
  cm(e,t);
  var c=Mc,h=pd(t.containerInfo),v=c.focusedElem,T=c.selectionRange;
  if(h!==v&&v&&v.ownerDocument&&md(v.ownerDocument.documentElement,v)){
  if(T!==null&&$o(v)){
  var C=T.start,O=T.end;
  if(O===void 0&&(O=C),"selectionStart"in v)v.selectionStart=C,v.selectionEnd=Math.min(O,v.value.length);
  else{
  var B=v.ownerDocument||document,j=B&&B.defaultView||window;
  if(j.getSelection){
  var D=j.getSelection(),F=v.textContent.length,nt=Math.min(T.start,F),Mt=T.end===void 0?nt:Math.min(T.end,F);
  !D.extend&&nt>Mt&&(h=Mt,Mt=nt,nt=h);
  var E=hd(v,nt),A=hd(v,Mt);
  if(E&&A&&(D.rangeCount!==1||D.anchorNode!==E.node||D.anchorOffset!==E.offset||D.focusNode!==A.node||D.focusOffset!==A.offset)){
  var M=B.createRange();
  M.setStart(E.node,E.offset),D.removeAllRanges(),nt>Mt?(D.addRange(M),D.extend(A.node,A.offset)):(M.setEnd(A.node,A.offset),D.addRange(M))
}

}

}

}

for(B=[],D=v;
  D=D.parentNode;
  )D.nodeType===1&&B.push({
  element:D,left:D.scrollLeft,top:D.scrollTop
}

);
  for(typeof v.focus=="function"&&v.focus(),v=0;
  v<B.length;
  v++){
  var _=B[v];
  _.element.scrollLeft=_.left,_.element.scrollTop=_.top
}

}

ql=!!Nc,Mc=Nc=null
}

finally{
  St=r,K.p=s,V.T=n
}

}

t.current=e,Qt=2
}

}

function Dm(){
  if(Qt===2){
  Qt=0;
  var t=Ln,e=Ia,n=(e.flags&8772)!==0;
  if((e.subtreeFlags&8772)!==0||n){
  n=V.T,V.T=null;
  var s=K.p;
  K.p=2;
  var r=St;
  St|=4;
  try{
  im(t,e.alternate,e)
}

finally{
  St=r,K.p=s,V.T=n
}

}

Qt=3
}

}

function zm(){
  if(Qt===4||Qt===3){
  Qt=0,p1();
  var t=Ln,e=Ia,n=bn,s=gm;
  (e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?Qt=5:(Qt=0,Ia=Ln=null,Rm(t,t.pendingLanes));
  var r=t.pendingLanes;
  if(r===0&&(Un=null),Oo(n),e=e.stateNode,xe&&typeof xe.onCommitFiberRoot=="function")try{
  xe.onCommitFiberRoot(bi,e,void 0,(e.current.flags&128)===128)
}

catch{

}

if(s!==null){
  e=V.T,r=K.p,K.p=2,V.T=null;
  try{
  for(var c=t.onRecoverableError,h=0;
  h<s.length;
  h++){
  var v=s[h];
  c(v.value,{
  componentStack:v.stack
}

)
}

}

finally{
  V.T=e,K.p=r
}

}

(bn&3)!==0&&jl(),tn(t),r=t.pendingLanes,(n&261930)!==0&&(r&42)!==0?t===hc?es++:(es=0,hc=t):es=0,ns(0)
}

}

function Rm(t,e){
  (t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,Bi(e)))
}

function jl(){
  return jm(),Dm(),zm(),Om()
}

function Om(){
  if(Qt!==5)return!1;
  var t=Ln,e=fc;
  fc=0;
  var n=Oo(bn),s=V.T,r=K.p;
  try{
  K.p=32>n?32:n,V.T=null,n=dc,dc=null;
  var c=Ln,h=bn;
  if(Qt=0,Ia=Ln=null,bn=0,(St&6)!==0)throw Error(o(331));
  var v=St;
  if(St|=4,mm(c.current),fm(c,c.current,h,n),St=v,ns(0,!1),xe&&typeof xe.onPostCommitFiberRoot=="function")try{
  xe.onPostCommitFiberRoot(bi,c)
}

catch{

}

return!0
}

finally{
  K.p=r,V.T=s,Rm(t,e)
}

}

function Vm(t,e,n){
  e=Re(n,e),e=Kr(t.stateNode,e,2),t=Rn(t,e,2),t!==null&&(Ti(t,2),tn(t))
}

function wt(t,e,n){
  if(t.tag===3)Vm(t,t,n);
  else for(;
  e!==null;
  ){
  if(e.tag===3){
  Vm(e,t,n);
  break
}

else if(e.tag===1){
  var s=e.stateNode;
  if(typeof e.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Un===null||!Un.has(s))){
  t=Re(n,t),n=_h(2),s=Rn(e,n,2),s!==null&&(Bh(n,s,e,t),Ti(s,2),tn(s));
  break
}

}

e=e.return
}

}

function yc(t,e,n){
  var s=t.pingCache;
  if(s===null){
  s=t.pingCache=new qv;
  var r=new Set;
  s.set(e,r)
}

else r=s.get(e),r===void 0&&(r=new Set,s.set(e,r));
  r.has(n)||(rc=!0,r.add(n),t=Qv.bind(null,t,e,n),e.then(t,t))
}

function Qv(t,e,n){
  var s=t.pingCache;
  s!==null&&s.delete(e),t.pingedLanes|=t.suspendedLanes&n,t.warmLanes&=~n,Ct===t&&(mt&n)===n&&(Bt===4||Bt===3&&(mt&62914560)===mt&&300>ve()-Al?(St&2)===0&&ti(t,0):cc|=n,$a===mt&&($a=0)),tn(t)
}

function _m(t,e){
  e===0&&(e=jf()),t=ia(t,e),t!==null&&(Ti(t,e),tn(t))
}

function Zv(t){
  var e=t.memoizedState,n=0;
  e!==null&&(n=e.retryLane),_m(t,n)
}

function Jv(t,e){
  var n=0;
  switch(t.tag){
  case 31:case 13:var s=t.stateNode,r=t.memoizedState;
  r!==null&&(n=r.retryLane);
  break;
  case 19:s=t.stateNode;
  break;
  case 22:s=t.stateNode._retryCache;
  break;
  default:throw Error(o(314))
}

s!==null&&s.delete(e),_m(t,n)
}

function Fv(t,e){
  return jo(t,e)
}

var Dl=null,ni=null,gc=!1,zl=!1,vc=!1,qn=0;
  function tn(t){
  t!==ni&&t.next===null&&(ni===null?Dl=ni=t:ni=ni.next=t),zl=!0,gc||(gc=!0,Pv())
}

function ns(t,e){
  if(!vc&&zl){
  vc=!0;
  do for(var n=!1,s=Dl;
  s!==null;
  ){
  if(t!==0){
  var r=s.pendingLanes;
  if(r===0)var c=0;
  else{
  var h=s.suspendedLanes,v=s.pingedLanes;
  c=(1<<31-be(42|t)+1)-1,c&=r&~(h&~v),c=c&201326741?c&201326741|1:c?c|2:0
}

c!==0&&(n=!0,Lm(s,c))
}

else c=mt,c=_s(s,s===Ct?c:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(c&3)===0||Si(s,c)||(n=!0,Lm(s,c));
  s=s.next
}

while(n);
  vc=!1
}

}

function Wv(){
  Bm()
}

function Bm(){
  zl=gc=!1;
  var t=0;
  qn!==0&&ox()&&(t=qn);
  for(var e=ve(),n=null,s=Dl;
  s!==null;
  ){
  var r=s.next,c=Hm(s,e);
  c===0?(s.next=null,n===null?Dl=r:n.next=r,r===null&&(ni=n)):(n=s,(t!==0||(c&3)!==0)&&(zl=!0)),s=r
}

Qt!==0&&Qt!==5||ns(t),qn!==0&&(qn=0)
}

function Hm(t,e){
  for(var n=t.suspendedLanes,s=t.pingedLanes,r=t.expirationTimes,c=t.pendingLanes&-62914561;
  0<c;
  ){
  var h=31-be(c),v=1<<h,T=r[h];
  T===-1?((v&n)===0||(v&s)!==0)&&(r[h]=A1(v,e)):T<=e&&(t.expiredLanes|=v),c&=~v
}

if(e=Ct,n=mt,n=_s(t,t===e?n:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,n===0||t===e&&(At===2||At===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&Do(s),t.callbackNode=null,t.callbackPriority=0;
  if((n&3)===0||Si(t,n)){
  if(e=n&-n,e===t.callbackPriority)return e;
  switch(s!==null&&Do(s),Oo(n)){
  case 2:case 8:n=Mf;
  break;
  case 32:n=zs;
  break;
  case 268435456:n=Cf;
  break;
  default:n=zs
}

return s=Um.bind(null,t),n=jo(n,s),t.callbackPriority=e,t.callbackNode=n,e
}

return s!==null&&s!==null&&Do(s),t.callbackPriority=2,t.callbackNode=null,2
}

function Um(t,e){
  if(Qt!==0&&Qt!==5)return t.callbackNode=null,t.callbackPriority=0,null;
  var n=t.callbackNode;
  if(jl()&&t.callbackNode!==n)return null;
  var s=mt;
  return s=_s(t,t===Ct?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(xm(t,s,e),Hm(t,ve()),t.callbackNode!=null&&t.callbackNode===n?Um.bind(null,t):null)
}

function Lm(t,e){
  if(jl())return null;
  xm(t,e,!0)
}

function Pv(){
  cx(function(){
  (St&6)!==0?jo(Nf,Wv):Bm()
}

)
}

function xc(){
  if(qn===0){
  var t=qa;
  t===0&&(t=Rs,Rs<<=1,(Rs&261888)===0&&(Rs=256)),qn=t
}

return qn
}

function Gm(t){
  return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Ls(""+t)
}

function qm(t,e){
  var n=e.ownerDocument.createElement("input");
  return n.name=e.name,n.value=e.value,t.id&&n.setAttribute("form",t.id),e.parentNode.insertBefore(n,e),t=new FormData(t),n.parentNode.removeChild(n),t
}

function $v(t,e,n,s,r){
  if(e==="submit"&&n&&n.stateNode===r){
  var c=Gm((r[ue]||null).action),h=s.submitter;
  h&&(e=(e=h[ue]||null)?Gm(e.formAction):h.getAttribute("formAction"),e!==null&&(c=e,h=null));
  var v=new Xs("action","action",null,s,r);
  t.push({
  event:v,listeners:[{
  instance:null,listener:function(){
  if(s.defaultPrevented){
  if(qn!==0){
  var T=h?qm(r,h):new FormData(r);
  Lr(n,{
  pending:!0,data:T,method:r.method,action:c
}

,null,T)
}

}

else typeof c=="function"&&(v.preventDefault(),T=h?qm(r,h):new FormData(r),Lr(n,{
  pending:!0,data:T,method:r.method,action:c
}

,c,T))
}

,currentTarget:r
}

]
}

)
}

}

for(var bc=0;
  bc<nr.length;
  bc++){
  var Sc=nr[bc],Iv=Sc.toLowerCase(),tx=Sc[0].toUpperCase()+Sc.slice(1);
  Ye(Iv,"on"+tx)
}

Ye(vd,"onAnimationEnd"),Ye(xd,"onAnimationIteration"),Ye(bd,"onAnimationStart"),Ye("dblclick","onDoubleClick"),Ye("focusin","onFocus"),Ye("focusout","onBlur"),Ye(yv,"onTransitionRun"),Ye(gv,"onTransitionStart"),Ye(vv,"onTransitionCancel"),Ye(Sd,"onTransitionEnd"),Ma("onMouseEnter",["mouseout","mouseover"]),Ma("onMouseLeave",["mouseout","mouseover"]),Ma("onPointerEnter",["pointerout","pointerover"]),Ma("onPointerLeave",["pointerout","pointerover"]),ta("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ta("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ta("onBeforeInput",["compositionend","keypress","textInput","paste"]),ta("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ta("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ta("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var as="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ex=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(as));
  function Ym(t,e){
  e=(e&4)!==0;
  for(var n=0;
  n<t.length;
  n++){
  var s=t[n],r=s.event;
  s=s.listeners;
  t:{
  var c=void 0;
  if(e)for(var h=s.length-1;
  0<=h;
  h--){
  var v=s[h],T=v.instance,C=v.currentTarget;
  if(v=v.listener,T!==c&&r.isPropagationStopped())break t;
  c=v,r.currentTarget=C;
  try{
  c(r)
}

catch(O){
  Qs(O)
}

r.currentTarget=null,c=T
}

else for(h=0;
  h<s.length;
  h++){
  if(v=s[h],T=v.instance,C=v.currentTarget,v=v.listener,T!==c&&r.isPropagationStopped())break t;
  c=v,r.currentTarget=C;
  try{
  c(r)
}

catch(O){
  Qs(O)
}

r.currentTarget=null,c=T
}

}

}

}

function ht(t,e){
  var n=e[Vo];
  n===void 0&&(n=e[Vo]=new Set);
  var s=t+"__bubble";
  n.has(s)||(Xm(e,t,2,!1),n.add(s))
}

function Tc(t,e,n){
  var s=0;
  e&&(s|=4),Xm(n,t,s,e)
}

var Rl="_reactListening"+Math.random().toString(36).slice(2);
  function Ac(t){
  if(!t[Rl]){
  t[Rl]=!0,Bf.forEach(function(n){
  n!=="selectionchange"&&(ex.has(n)||Tc(n,!1,t),Tc(n,!0,t))
}

);
  var e=t.nodeType===9?t:t.ownerDocument;
  e===null||e[Rl]||(e[Rl]=!0,Tc("selectionchange",!1,e))
}

}

function Xm(t,e,n,s){
  switch(v0(e)){
  case 2:var r=jx;
  break;
  case 8:r=Dx;
  break;
  default:r=Uc
}

n=r.bind(null,e,n,t),r=void 0,!Xo||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),s?r!==void 0?t.addEventListener(e,n,{
  capture:!0,passive:r
}

):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{
  passive:r
}

):t.addEventListener(e,n,!1)
}

function wc(t,e,n,s,r){
  var c=s;
  if((e&1)===0&&(e&2)===0&&s!==null)t:for(;
  ;
  ){
  if(s===null)return;
  var h=s.tag;
  if(h===3||h===4){
  var v=s.stateNode.containerInfo;
  if(v===r)break;
  if(h===4)for(h=s.return;
  h!==null;
  ){
  var T=h.tag;
  if((T===3||T===4)&&h.stateNode.containerInfo===r)return;
  h=h.return
}

for(;
  v!==null;
  ){
  if(h=wa(v),h===null)return;
  if(T=h.tag,T===5||T===6||T===26||T===27){
  s=c=h;
  continue t
}

v=v.parentNode
}

}

s=s.return
}

Jf(function(){
  var C=c,O=qo(n),B=[];
  t:{
  var j=Td.get(t);
  if(j!==void 0){
  var D=Xs,F=t;
  switch(t){
  case"keypress":if(qs(n)===0)break t;
  case"keydown":case"keyup":D=J1;
  break;
  case"focusin":F="focus",D=Zo;
  break;
  case"focusout":F="blur",D=Zo;
  break;
  case"beforeblur":case"afterblur":D=Zo;
  break;
  case"click":if(n.button===2)break t;
  case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":D=Pf;
  break;
  case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":D=B1;
  break;
  case"touchcancel":case"touchend":case"touchmove":case"touchstart":D=P1;
  break;
  case vd:case xd:case bd:D=L1;
  break;
  case Sd:D=I1;
  break;
  case"scroll":case"scrollend":D=V1;
  break;
  case"wheel":D=ev;
  break;
  case"copy":case"cut":case"paste":D=q1;
  break;
  case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":D=If;
  break;
  case"toggle":case"beforetoggle":D=av
}

var nt=(e&4)!==0,Mt=!nt&&(t==="scroll"||t==="scrollend"),E=nt?j!==null?j+"Capture":null:j;
  nt=[];
  for(var A=C,M;
  A!==null;
  ){
  var _=A;
  if(M=_.stateNode,_=_.tag,_!==5&&_!==26&&_!==27||M===null||E===null||(_=Ei(A,E),_!=null&&nt.push(is(A,_,M))),Mt)break;
  A=A.return
}

0<nt.length&&(j=new D(j,F,null,n,O),B.push({
  event:j,listeners:nt
}

))
}

}

if((e&7)===0){
  t:{
  if(j=t==="mouseover"||t==="pointerover",D=t==="mouseout"||t==="pointerout",j&&n!==Go&&(F=n.relatedTarget||n.fromElement)&&(wa(F)||F[Aa]))break t;
  if((D||j)&&(j=O.window===O?O:(j=O.ownerDocument)?j.defaultView||j.parentWindow:window,D?(F=n.relatedTarget||n.toElement,D=C,F=F?wa(F):null,F!==null&&(Mt=d(F),nt=F.tag,F!==Mt||nt!==5&&nt!==27&&nt!==6)&&(F=null)):(D=null,F=C),D!==F)){
  if(nt=Pf,_="onMouseLeave",E="onMouseEnter",A="mouse",(t==="pointerout"||t==="pointerover")&&(nt=If,_="onPointerLeave",E="onPointerEnter",A="pointer"),Mt=D==null?j:wi(D),M=F==null?j:wi(F),j=new nt(_,A+"leave",D,n,O),j.target=Mt,j.relatedTarget=M,_=null,wa(O)===C&&(nt=new nt(E,A+"enter",F,n,O),nt.target=M,nt.relatedTarget=Mt,_=nt),Mt=_,D&&F)e:{
  for(nt=nx,E=D,A=F,M=0,_=E;
  _;
  _=nt(_))M++;
  _=0;
  for(var et=A;
  et;
  et=nt(et))_++;
  for(;
  0<M-_;
  )E=nt(E),M--;
  for(;
  0<_-M;
  )A=nt(A),_--;
  for(;
  M--;
  ){
  if(E===A||A!==null&&E===A.alternate){
  nt=E;
  break e
}

E=nt(E),A=nt(A)
}

nt=null
}

else nt=null;
  D!==null&&km(B,j,D,nt,!1),F!==null&&Mt!==null&&km(B,Mt,F,nt,!0)
}

}

t:{
  if(j=C?wi(C):window,D=j.nodeName&&j.nodeName.toLowerCase(),D==="select"||D==="input"&&j.type==="file")var vt=od;
  else if(sd(j))if(rd)vt=hv;
  else{
  vt=fv;
  var I=uv
}

else D=j.nodeName,!D||D.toLowerCase()!=="input"||j.type!=="checkbox"&&j.type!=="radio"?C&&Lo(C.elementType)&&(vt=od):vt=dv;
  if(vt&&(vt=vt(t,C))){
  ld(B,vt,n,O);
  break t
}

I&&I(t,j,C),t==="focusout"&&C&&j.type==="number"&&C.memoizedProps.value!=null&&Uo(j,"number",j.value)
}

switch(I=C?wi(C):window,t){
  case"focusin":(sd(I)||I.contentEditable==="true")&&(Oa=I,Io=C,Oi=null);
  break;
  case"focusout":Oi=Io=Oa=null;
  break;
  case"mousedown":tr=!0;
  break;
  case"contextmenu":case"mouseup":case"dragend":tr=!1,yd(B,n,O);
  break;
  case"selectionchange":if(pv)break;
  case"keydown":case"keyup":yd(B,n,O)
}

var ct;
  if(Fo)t:{
  switch(t){
  case"compositionstart":var pt="onCompositionStart";
  break t;
  case"compositionend":pt="onCompositionEnd";
  break t;
  case"compositionupdate":pt="onCompositionUpdate";
  break t
}

pt=void 0
}

else Ra?ad(t,n)&&(pt="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(pt="onCompositionStart");
  pt&&(td&&n.locale!=="ko"&&(Ra||pt!=="onCompositionStart"?pt==="onCompositionEnd"&&Ra&&(ct=Ff()):(En=O,ko="value"in En?En.value:En.textContent,Ra=!0)),I=Ol(C,pt),0<I.length&&(pt=new $f(pt,t,null,n,O),B.push({
  event:pt,listeners:I
}

),ct?pt.data=ct:(ct=id(n),ct!==null&&(pt.data=ct)))),(ct=sv?lv(t,n):ov(t,n))&&(pt=Ol(C,"onBeforeInput"),0<pt.length&&(I=new $f("onBeforeInput","beforeinput",null,n,O),B.push({
  event:I,listeners:pt
}

),I.data=ct)),$v(B,t,C,n,O)
}

Ym(B,e)
}

)
}

function is(t,e,n){
  return{
  instance:t,listener:e,currentTarget:n
}

}

function Ol(t,e){
  for(var n=e+"Capture",s=[];
  t!==null;
  ){
  var r=t,c=r.stateNode;
  if(r=r.tag,r!==5&&r!==26&&r!==27||c===null||(r=Ei(t,n),r!=null&&s.unshift(is(t,r,c)),r=Ei(t,e),r!=null&&s.push(is(t,r,c))),t.tag===3)return s;
  t=t.return
}

return[]
}

function nx(t){
  if(t===null)return null;
  do t=t.return;
  while(t&&t.tag!==5&&t.tag!==27);
  return t||null
}

function km(t,e,n,s,r){
  for(var c=e._reactName,h=[];
  n!==null&&n!==s;
  ){
  var v=n,T=v.alternate,C=v.stateNode;
  if(v=v.tag,T!==null&&T===s)break;
  v!==5&&v!==26&&v!==27||C===null||(T=C,r?(C=Ei(n,c),C!=null&&h.unshift(is(n,C,T))):r||(C=Ei(n,c),C!=null&&h.push(is(n,C,T)))),n=n.return
}

h.length!==0&&t.push({
  event:e,listeners:h
}

)
}

var ax=/\r\n?/g,ix=/\u0000|\uFFFD/g;
  function Km(t){
  return(typeof t=="string"?t:""+t).replace(ax,`
`).replace(ix,"")
}

function Qm(t,e){
  return e=Km(e),Km(t)===e
}

function Nt(t,e,n,s,r,c){
  switch(n){
  case"children":typeof s=="string"?e==="body"||e==="textarea"&&s===""||ja(t,s):(typeof s=="number"||typeof s=="bigint")&&e!=="body"&&ja(t,""+s);
  break;
  case"className":Hs(t,"class",s);
  break;
  case"tabIndex":Hs(t,"tabindex",s);
  break;
  case"dir":case"role":case"viewBox":case"width":case"height":Hs(t,n,s);
  break;
  case"style":Qf(t,s,c);
  break;
  case"data":if(e!=="object"){
  Hs(t,"data",s);
  break
}

case"src":case"href":if(s===""&&(e!=="a"||n!=="href")){
  t.removeAttribute(n);
  break
}

if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){
  t.removeAttribute(n);
  break
}

s=Ls(""+s),t.setAttribute(n,s);
  break;
  case"action":case"formAction":if(typeof s=="function"){
  t.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
  break
}

else typeof c=="function"&&(n==="formAction"?(e!=="input"&&Nt(t,e,"name",r.name,r,null),Nt(t,e,"formEncType",r.formEncType,r,null),Nt(t,e,"formMethod",r.formMethod,r,null),Nt(t,e,"formTarget",r.formTarget,r,null)):(Nt(t,e,"encType",r.encType,r,null),Nt(t,e,"method",r.method,r,null),Nt(t,e,"target",r.target,r,null)));
  if(s==null||typeof s=="symbol"||typeof s=="boolean"){
  t.removeAttribute(n);
  break
}

s=Ls(""+s),t.setAttribute(n,s);
  break;
  case"onClick":s!=null&&(t.onclick=sn);
  break;
  case"onScroll":s!=null&&ht("scroll",t);
  break;
  case"onScrollEnd":s!=null&&ht("scrollend",t);
  break;
  case"dangerouslySetInnerHTML":if(s!=null){
  if(typeof s!="object"||!("__html"in s))throw Error(o(61));
  if(n=s.__html,n!=null){
  if(r.children!=null)throw Error(o(60));
  t.innerHTML=n
}

}

break;
  case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";
  break;
  case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";
  break;
  case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;
  case"autoFocus":break;
  case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){
  t.removeAttribute("xlink:href");
  break
}

n=Ls(""+s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);
  break;
  case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(n,""+s):t.removeAttribute(n);
  break;
  case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(n,""):t.removeAttribute(n);
  break;
  case"capture":case"download":s===!0?t.setAttribute(n,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(n,s):t.removeAttribute(n);
  break;
  case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(n,s):t.removeAttribute(n);
  break;
  case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(n):t.setAttribute(n,s);
  break;
  case"popover":ht("beforetoggle",t),ht("toggle",t),Bs(t,"popover",s);
  break;
  case"xlinkActuate":an(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);
  break;
  case"xlinkArcrole":an(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);
  break;
  case"xlinkRole":an(t,"http://www.w3.org/1999/xlink","xlink:role",s);
  break;
  case"xlinkShow":an(t,"http://www.w3.org/1999/xlink","xlink:show",s);
  break;
  case"xlinkTitle":an(t,"http://www.w3.org/1999/xlink","xlink:title",s);
  break;
  case"xlinkType":an(t,"http://www.w3.org/1999/xlink","xlink:type",s);
  break;
  case"xmlBase":an(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);
  break;
  case"xmlLang":an(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);
  break;
  case"xmlSpace":an(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);
  break;
  case"is":Bs(t,"is",s);
  break;
  case"innerText":case"textContent":break;
  default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=R1.get(n)||n,Bs(t,n,s))
}

}

function Ec(t,e,n,s,r,c){
  switch(n){
  case"style":Qf(t,s,c);
  break;
  case"dangerouslySetInnerHTML":if(s!=null){
  if(typeof s!="object"||!("__html"in s))throw Error(o(61));
  if(n=s.__html,n!=null){
  if(r.children!=null)throw Error(o(60));
  t.innerHTML=n
}

}

break;
  case"children":typeof s=="string"?ja(t,s):(typeof s=="number"||typeof s=="bigint")&&ja(t,""+s);
  break;
  case"onScroll":s!=null&&ht("scroll",t);
  break;
  case"onScrollEnd":s!=null&&ht("scrollend",t);
  break;
  case"onClick":s!=null&&(t.onclick=sn);
  break;
  case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;
  case"innerText":case"textContent":break;
  default:if(!Hf.hasOwnProperty(n))t:{
  if(n[0]==="o"&&n[1]==="n"&&(r=n.endsWith("Capture"),e=n.slice(2,r?n.length-7:void 0),c=t[ue]||null,c=c!=null?c[n]:null,typeof c=="function"&&t.removeEventListener(e,c,r),typeof s=="function")){
  typeof c!="function"&&c!==null&&(n in t?t[n]=null:t.hasAttribute(n)&&t.removeAttribute(n)),t.addEventListener(e,s,r);
  break t
}

n in t?t[n]=s:s===!0?t.setAttribute(n,""):Bs(t,n,s)
}

}

}

function ne(t,e,n){
  switch(e){
  case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;
  case"img":ht("error",t),ht("load",t);
  var s=!1,r=!1,c;
  for(c in n)if(n.hasOwnProperty(c)){
  var h=n[c];
  if(h!=null)switch(c){
  case"src":s=!0;
  break;
  case"srcSet":r=!0;
  break;
  case"children":case"dangerouslySetInnerHTML":throw Error(o(137,e));
  default:Nt(t,e,c,h,n,null)
}

}

r&&Nt(t,e,"srcSet",n.srcSet,n,null),s&&Nt(t,e,"src",n.src,n,null);
  return;
  case"input":ht("invalid",t);
  var v=c=h=r=null,T=null,C=null;
  for(s in n)if(n.hasOwnProperty(s)){
  var O=n[s];
  if(O!=null)switch(s){
  case"name":r=O;
  break;
  case"type":h=O;
  break;
  case"checked":T=O;
  break;
  case"defaultChecked":C=O;
  break;
  case"value":c=O;
  break;
  case"defaultValue":v=O;
  break;
  case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(o(137,e));
  break;
  default:Nt(t,e,s,O,n,null)
}

}

Yf(t,c,v,T,C,h,r,!1);
  return;
  case"select":ht("invalid",t),s=h=c=null;
  for(r in n)if(n.hasOwnProperty(r)&&(v=n[r],v!=null))switch(r){
  case"value":c=v;
  break;
  case"defaultValue":h=v;
  break;
  case"multiple":s=v;
  default:Nt(t,e,r,v,n,null)
}

e=c,n=h,t.multiple=!!s,e!=null?Ca(t,!!s,e,!1):n!=null&&Ca(t,!!s,n,!0);
  return;
  case"textarea":ht("invalid",t),c=r=s=null;
  for(h in n)if(n.hasOwnProperty(h)&&(v=n[h],v!=null))switch(h){
  case"value":s=v;
  break;
  case"defaultValue":r=v;
  break;
  case"children":c=v;
  break;
  case"dangerouslySetInnerHTML":if(v!=null)throw Error(o(91));
  break;
  default:Nt(t,e,h,v,n,null)
}

kf(t,s,r,c);
  return;
  case"option":for(T in n)n.hasOwnProperty(T)&&(s=n[T],s!=null)&&(T==="selected"?t.selected=s&&typeof s!="function"&&typeof s!="symbol":Nt(t,e,T,s,n,null));
  return;
  case"dialog":ht("beforetoggle",t),ht("toggle",t),ht("cancel",t),ht("close",t);
  break;
  case"iframe":case"object":ht("load",t);
  break;
  case"video":case"audio":for(s=0;
  s<as.length;
  s++)ht(as[s],t);
  break;
  case"image":ht("error",t),ht("load",t);
  break;
  case"details":ht("toggle",t);
  break;
  case"embed":case"source":case"link":ht("error",t),ht("load",t);
  case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(C in n)if(n.hasOwnProperty(C)&&(s=n[C],s!=null))switch(C){
  case"children":case"dangerouslySetInnerHTML":throw Error(o(137,e));
  default:Nt(t,e,C,s,n,null)
}

return;
  default:if(Lo(e)){
  for(O in n)n.hasOwnProperty(O)&&(s=n[O],s!==void 0&&Ec(t,e,O,s,n,void 0));
  return
}

}

for(v in n)n.hasOwnProperty(v)&&(s=n[v],s!=null&&Nt(t,e,v,s,n,null))
}

function sx(t,e,n,s){
  switch(e){
  case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;
  case"input":var r=null,c=null,h=null,v=null,T=null,C=null,O=null;
  for(D in n){
  var B=n[D];
  if(n.hasOwnProperty(D)&&B!=null)switch(D){
  case"checked":break;
  case"value":break;
  case"defaultValue":T=B;
  default:s.hasOwnProperty(D)||Nt(t,e,D,null,s,B)
}

}

for(var j in s){
  var D=s[j];
  if(B=n[j],s.hasOwnProperty(j)&&(D!=null||B!=null))switch(j){
  case"type":c=D;
  break;
  case"name":r=D;
  break;
  case"checked":C=D;
  break;
  case"defaultChecked":O=D;
  break;
  case"value":h=D;
  break;
  case"defaultValue":v=D;
  break;
  case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(o(137,e));
  break;
  default:D!==B&&Nt(t,e,j,D,s,B)
}

}

Ho(t,h,v,T,C,O,c,r);
  return;
  case"select":D=h=v=j=null;
  for(c in n)if(T=n[c],n.hasOwnProperty(c)&&T!=null)switch(c){
  case"value":break;
  case"multiple":D=T;
  default:s.hasOwnProperty(c)||Nt(t,e,c,null,s,T)
}

for(r in s)if(c=s[r],T=n[r],s.hasOwnProperty(r)&&(c!=null||T!=null))switch(r){
  case"value":j=c;
  break;
  case"defaultValue":v=c;
  break;
  case"multiple":h=c;
  default:c!==T&&Nt(t,e,r,c,s,T)
}

e=v,n=h,s=D,j!=null?Ca(t,!!n,j,!1):!!s!=!!n&&(e!=null?Ca(t,!!n,e,!0):Ca(t,!!n,n?[]:"",!1));
  return;
  case"textarea":D=j=null;
  for(v in n)if(r=n[v],n.hasOwnProperty(v)&&r!=null&&!s.hasOwnProperty(v))switch(v){
  case"value":break;
  case"children":break;
  default:Nt(t,e,v,null,s,r)
}

for(h in s)if(r=s[h],c=n[h],s.hasOwnProperty(h)&&(r!=null||c!=null))switch(h){
  case"value":j=r;
  break;
  case"defaultValue":D=r;
  break;
  case"children":break;
  case"dangerouslySetInnerHTML":if(r!=null)throw Error(o(91));
  break;
  default:r!==c&&Nt(t,e,h,r,s,c)
}

Xf(t,j,D);
  return;
  case"option":for(var F in n)j=n[F],n.hasOwnProperty(F)&&j!=null&&!s.hasOwnProperty(F)&&(F==="selected"?t.selected=!1:Nt(t,e,F,null,s,j));
  for(T in s)j=s[T],D=n[T],s.hasOwnProperty(T)&&j!==D&&(j!=null||D!=null)&&(T==="selected"?t.selected=j&&typeof j!="function"&&typeof j!="symbol":Nt(t,e,T,j,s,D));
  return;
  case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var nt in n)j=n[nt],n.hasOwnProperty(nt)&&j!=null&&!s.hasOwnProperty(nt)&&Nt(t,e,nt,null,s,j);
  for(C in s)if(j=s[C],D=n[C],s.hasOwnProperty(C)&&j!==D&&(j!=null||D!=null))switch(C){
  case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(o(137,e));
  break;
  default:Nt(t,e,C,j,s,D)
}

return;
  default:if(Lo(e)){
  for(var Mt in n)j=n[Mt],n.hasOwnProperty(Mt)&&j!==void 0&&!s.hasOwnProperty(Mt)&&Ec(t,e,Mt,void 0,s,j);
  for(O in s)j=s[O],D=n[O],!s.hasOwnProperty(O)||j===D||j===void 0&&D===void 0||Ec(t,e,O,j,s,D);
  return
}

}

for(var E in n)j=n[E],n.hasOwnProperty(E)&&j!=null&&!s.hasOwnProperty(E)&&Nt(t,e,E,null,s,j);
  for(B in s)j=s[B],D=n[B],!s.hasOwnProperty(B)||j===D||j==null&&D==null||Nt(t,e,B,j,s,D)
}

function Zm(t){
  switch(t){
  case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;
  default:return!1
}

}

function lx(){
  if(typeof performance.getEntriesByType=="function"){
  for(var t=0,e=0,n=performance.getEntriesByType("resource"),s=0;
  s<n.length;
  s++){
  var r=n[s],c=r.transferSize,h=r.initiatorType,v=r.duration;
  if(c&&v&&Zm(h)){
  for(h=0,v=r.responseEnd,s+=1;
  s<n.length;
  s++){
  var T=n[s],C=T.startTime;
  if(C>v)break;
  var O=T.transferSize,B=T.initiatorType;
  O&&Zm(B)&&(T=T.responseEnd,h+=O*(T<v?1:(v-C)/(T-C)))
}

if(--s,e+=8*(c+h)/(r.duration/1e3),t++,10<t)break
}

}

if(0<t)return e/t/1e6
}

return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5
}

var Nc=null,Mc=null;
  function Vl(t){
  return t.nodeType===9?t:t.ownerDocument
}

function Jm(t){
  switch(t){
  case"http://www.w3.org/2000/svg":return 1;
  case"http://www.w3.org/1998/Math/MathML":return 2;
  default:return 0
}

}

function Fm(t,e){
  if(t===0)switch(e){
  case"svg":return 1;
  case"math":return 2;
  default:return 0
}

return t===1&&e==="foreignObject"?0:t
}

function Cc(t,e){
  return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null
}

var jc=null;
  function ox(){
  var t=window.event;
  return t&&t.type==="popstate"?t===jc?!1:(jc=t,!0):(jc=null,!1)
}

var Wm=typeof setTimeout=="function"?setTimeout:void 0,rx=typeof clearTimeout=="function"?clearTimeout:void 0,Pm=typeof Promise=="function"?Promise:void 0,cx=typeof queueMicrotask=="function"?queueMicrotask:typeof Pm<"u"?function(t){
  return Pm.resolve(null).then(t).catch(ux)
}

:Wm;
  function ux(t){
  setTimeout(function(){
  throw t
}

)
}

function Yn(t){
  return t==="head"
}

function $m(t,e){
  var n=e,s=0;
  do{
  var r=n.nextSibling;
  if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"||n==="/&"){
  if(s===0){
  t.removeChild(r),li(e);
  return
}

s--
}

else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")s++;
  else if(n==="html")ss(t.ownerDocument.documentElement);
  else if(n==="head"){
  n=t.ownerDocument.head,ss(n);
  for(var c=n.firstChild;
  c;
  ){
  var h=c.nextSibling,v=c.nodeName;
  c[Ai]||v==="SCRIPT"||v==="STYLE"||v==="LINK"&&c.rel.toLowerCase()==="stylesheet"||n.removeChild(c),c=h
}

}

else n==="body"&&ss(t.ownerDocument.body);
  n=r
}

while(n);
  li(e)
}

function Im(t,e){
  var n=t;
  t=0;
  do{
  var s=n.nextSibling;
  if(n.nodeType===1?e?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(e?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),s&&s.nodeType===8)if(n=s.data,n==="/$"){
  if(t===0)break;
  t--
}

else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||t++;
  n=s
}

while(n)
}

function Dc(t){
  var e=t.firstChild;
  for(e&&e.nodeType===10&&(e=e.nextSibling);
  e;
  ){
  var n=e;
  switch(e=e.nextSibling,n.nodeName){
  case"HTML":case"HEAD":case"BODY":Dc(n),_o(n);
  continue;
  case"SCRIPT":case"STYLE":continue;
  case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue
}

t.removeChild(n)
}

}

function fx(t,e,n,s){
  for(;
  t.nodeType===1;
  ){
  var r=n;
  if(t.nodeName.toLowerCase()!==e.toLowerCase()){
  if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break
}

else if(s){
  if(!t[Ai])switch(e){
  case"meta":if(!t.hasAttribute("itemprop"))break;
  return t;
  case"link":if(c=t.getAttribute("rel"),c==="stylesheet"&&t.hasAttribute("data-precedence"))break;
  if(c!==r.rel||t.getAttribute("href")!==(r.href==null||r.href===""?null:r.href)||t.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin)||t.getAttribute("title")!==(r.title==null?null:r.title))break;
  return t;
  case"style":if(t.hasAttribute("data-precedence"))break;
  return t;
  case"script":if(c=t.getAttribute("src"),(c!==(r.src==null?null:r.src)||t.getAttribute("type")!==(r.type==null?null:r.type)||t.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin))&&c&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;
  return t;
  default:return t
}

}

else if(e==="input"&&t.type==="hidden"){
  var c=r.name==null?null:""+r.name;
  if(r.type==="hidden"&&t.getAttribute("name")===c)return t
}

else return t;
  if(t=He(t.nextSibling),t===null)break
}

return null
}

function dx(t,e,n){
  if(e==="")return null;
  for(;
  t.nodeType!==3;
  )if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=He(t.nextSibling),t===null))return null;
  return t
}

function t0(t,e){
  for(;
  t.nodeType!==8;
  )if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=He(t.nextSibling),t===null))return null;
  return t
}

function zc(t){
  return t.data==="$?"||t.data==="$~"
}

function Rc(t){
  return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"
}

function hx(t,e){
  var n=t.ownerDocument;
  if(t.data==="$~")t._reactRetry=e;
  else if(t.data!=="$?"||n.readyState!=="loading")e();
  else{
  var s=function(){
  e(),n.removeEventListener("DOMContentLoaded",s)
}

;
  n.addEventListener("DOMContentLoaded",s),t._reactRetry=s
}

}

function He(t){
  for(;
  t!=null;
  t=t.nextSibling){
  var e=t.nodeType;
  if(e===1||e===3)break;
  if(e===8){
  if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;
  if(e==="/$"||e==="/&")return null
}

}

return t
}

var Oc=null;
  function e0(t){
  t=t.nextSibling;
  for(var e=0;
  t;
  ){
  if(t.nodeType===8){
  var n=t.data;
  if(n==="/$"||n==="/&"){
  if(e===0)return He(t.nextSibling);
  e--
}

else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||e++
}

t=t.nextSibling
}

return null
}

function n0(t){
  t=t.previousSibling;
  for(var e=0;
  t;
  ){
  if(t.nodeType===8){
  var n=t.data;
  if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){
  if(e===0)return t;
  e--
}

else n!=="/$"&&n!=="/&"||e++
}

t=t.previousSibling
}

return null
}

function a0(t,e,n){
  switch(e=Vl(n),t){
  case"html":if(t=e.documentElement,!t)throw Error(o(452));
  return t;
  case"head":if(t=e.head,!t)throw Error(o(453));
  return t;
  case"body":if(t=e.body,!t)throw Error(o(454));
  return t;
  default:throw Error(o(451))
}

}

function ss(t){
  for(var e=t.attributes;
  e.length;
  )t.removeAttributeNode(e[0]);
  _o(t)
}

var Ue=new Map,i0=new Set;
  function _l(t){
  return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument
}

var Sn=K.d;
  K.d={
  f:mx,r:px,D:yx,C:gx,L:vx,m:xx,X:Sx,S:bx,M:Tx
}

;
  function mx(){
  var t=Sn.f(),e=Nl();
  return t||e
}

function px(t){
  var e=Ea(t);
  e!==null&&e.tag===5&&e.type==="form"?Sh(e):Sn.r(t)
}

var ai=typeof document>"u"?null:document;
  function s0(t,e,n){
  var s=ai;
  if(s&&typeof e=="string"&&e){
  var r=De(e);
  r='link[rel="'+t+'"][href="'+r+'"]',typeof n=="string"&&(r+='[crossorigin="'+n+'"]'),i0.has(r)||(i0.add(r),t={
  rel:t,crossOrigin:n,href:e
}

,s.querySelector(r)===null&&(e=s.createElement("link"),ne(e,"link",t),Ft(e),s.head.appendChild(e)))
}

}

function yx(t){
  Sn.D(t),s0("dns-prefetch",t,null)
}

function gx(t,e){
  Sn.C(t,e),s0("preconnect",t,e)
}

function vx(t,e,n){
  Sn.L(t,e,n);
  var s=ai;
  if(s&&t&&e){
  var r='link[rel="preload"][as="'+De(e)+'"]';
  e==="image"&&n&&n.imageSrcSet?(r+='[imagesrcset="'+De(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(r+='[imagesizes="'+De(n.imageSizes)+'"]')):r+='[href="'+De(t)+'"]';
  var c=r;
  switch(e){
  case"style":c=ii(t);
  break;
  case"script":c=si(t)
}

Ue.has(c)||(t=b({
  rel:"preload",href:e==="image"&&n&&n.imageSrcSet?void 0:t,as:e
}

,n),Ue.set(c,t),s.querySelector(r)!==null||e==="style"&&s.querySelector(ls(c))||e==="script"&&s.querySelector(os(c))||(e=s.createElement("link"),ne(e,"link",t),Ft(e),s.head.appendChild(e)))
}

}

function xx(t,e){
  Sn.m(t,e);
  var n=ai;
  if(n&&t){
  var s=e&&typeof e.as=="string"?e.as:"script",r='link[rel="modulepreload"][as="'+De(s)+'"][href="'+De(t)+'"]',c=r;
  switch(s){
  case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=si(t)
}

if(!Ue.has(c)&&(t=b({
  rel:"modulepreload",href:t
}

,e),Ue.set(c,t),n.querySelector(r)===null)){
  switch(s){
  case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(os(c)))return
}

s=n.createElement("link"),ne(s,"link",t),Ft(s),n.head.appendChild(s)
}

}

}

function bx(t,e,n){
  Sn.S(t,e,n);
  var s=ai;
  if(s&&t){
  var r=Na(s).hoistableStyles,c=ii(t);
  e=e||"default";
  var h=r.get(c);
  if(!h){
  var v={
  loading:0,preload:null
}

;
  if(h=s.querySelector(ls(c)))v.loading=5;
  else{
  t=b({
  rel:"stylesheet",href:t,"data-precedence":e
}

,n),(n=Ue.get(c))&&Vc(t,n);
  var T=h=s.createElement("link");
  Ft(T),ne(T,"link",t),T._p=new Promise(function(C,O){
  T.onload=C,T.onerror=O
}

),T.addEventListener("load",function(){
  v.loading|=1
}

),T.addEventListener("error",function(){
  v.loading|=2
}

),v.loading|=4,Bl(h,e,s)
}

h={
  type:"stylesheet",instance:h,count:1,state:v
}

,r.set(c,h)
}

}

}

function Sx(t,e){
  Sn.X(t,e);
  var n=ai;
  if(n&&t){
  var s=Na(n).hoistableScripts,r=si(t),c=s.get(r);
  c||(c=n.querySelector(os(r)),c||(t=b({
  src:t,async:!0
}

,e),(e=Ue.get(r))&&_c(t,e),c=n.createElement("script"),Ft(c),ne(c,"link",t),n.head.appendChild(c)),c={
  type:"script",instance:c,count:1,state:null
}

,s.set(r,c))
}

}

function Tx(t,e){
  Sn.M(t,e);
  var n=ai;
  if(n&&t){
  var s=Na(n).hoistableScripts,r=si(t),c=s.get(r);
  c||(c=n.querySelector(os(r)),c||(t=b({
  src:t,async:!0,type:"module"
}

,e),(e=Ue.get(r))&&_c(t,e),c=n.createElement("script"),Ft(c),ne(c,"link",t),n.head.appendChild(c)),c={
  type:"script",instance:c,count:1,state:null
}

,s.set(r,c))
}

}

function l0(t,e,n,s){
  var r=(r=ft.current)?_l(r):null;
  if(!r)throw Error(o(446));
  switch(t){
  case"meta":case"title":return null;
  case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(e=ii(n.href),n=Na(r).hoistableStyles,s=n.get(e),s||(s={
  type:"style",instance:null,count:0,state:null
}

,n.set(e,s)),s):{
  type:"void",instance:null,count:0,state:null
}

;
  case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){
  t=ii(n.href);
  var c=Na(r).hoistableStyles,h=c.get(t);
  if(h||(r=r.ownerDocument||r,h={
  type:"stylesheet",instance:null,count:0,state:{
  loading:0,preload:null
}

}

,c.set(t,h),(c=r.querySelector(ls(t)))&&!c._p&&(h.instance=c,h.state.loading=5),Ue.has(t)||(n={
  rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy
}

,Ue.set(t,n),c||Ax(r,t,n,h.state))),e&&s===null)throw Error(o(528,""));
  return h
}

if(e&&s!==null)throw Error(o(529,""));
  return null;
  case"script":return e=n.async,n=n.src,typeof n=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=si(n),n=Na(r).hoistableScripts,s=n.get(e),s||(s={
  type:"script",instance:null,count:0,state:null
}

,n.set(e,s)),s):{
  type:"void",instance:null,count:0,state:null
}

;
  default:throw Error(o(444,t))
}

}

function ii(t){
  return'href="'+De(t)+'"'
}

function ls(t){
  return'link[rel="stylesheet"]['+t+"]"
}

function o0(t){
  return b({

}

,t,{
  "data-precedence":t.precedence,precedence:null
}

)
}

function Ax(t,e,n,s){
  t.querySelector('link[rel="preload"][as="style"]['+e+"]")?s.loading=1:(e=t.createElement("link"),s.preload=e,e.addEventListener("load",function(){
  return s.loading|=1
}

),e.addEventListener("error",function(){
  return s.loading|=2
}

),ne(e,"link",n),Ft(e),t.head.appendChild(e))
}

function si(t){
  return'[src="'+De(t)+'"]'
}

function os(t){
  return"script[async]"+t
}

function r0(t,e,n){
  if(e.count++,e.instance===null)switch(e.type){
  case"style":var s=t.querySelector('style[data-href~="'+De(n.href)+'"]');
  if(s)return e.instance=s,Ft(s),s;
  var r=b({

}

,n,{
  "data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null
}

);
  return s=(t.ownerDocument||t).createElement("style"),Ft(s),ne(s,"style",r),Bl(s,n.precedence,t),e.instance=s;
  case"stylesheet":r=ii(n.href);
  var c=t.querySelector(ls(r));
  if(c)return e.state.loading|=4,e.instance=c,Ft(c),c;
  s=o0(n),(r=Ue.get(r))&&Vc(s,r),c=(t.ownerDocument||t).createElement("link"),Ft(c);
  var h=c;
  return h._p=new Promise(function(v,T){
  h.onload=v,h.onerror=T
}

),ne(c,"link",s),e.state.loading|=4,Bl(c,n.precedence,t),e.instance=c;
  case"script":return c=si(n.src),(r=t.querySelector(os(c)))?(e.instance=r,Ft(r),r):(s=n,(r=Ue.get(c))&&(s=b({

}

,n),_c(s,r)),t=t.ownerDocument||t,r=t.createElement("script"),Ft(r),ne(r,"link",s),t.head.appendChild(r),e.instance=r);
  case"void":return null;
  default:throw Error(o(443,e.type))
}

else e.type==="stylesheet"&&(e.state.loading&4)===0&&(s=e.instance,e.state.loading|=4,Bl(s,n.precedence,t));
  return e.instance
}

function Bl(t,e,n){
  for(var s=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),r=s.length?s[s.length-1]:null,c=r,h=0;
  h<s.length;
  h++){
  var v=s[h];
  if(v.dataset.precedence===e)c=v;
  else if(c!==r)break
}

c?c.parentNode.insertBefore(t,c.nextSibling):(e=n.nodeType===9?n.head:n,e.insertBefore(t,e.firstChild))
}

function Vc(t,e){
  t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)
}

function _c(t,e){
  t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)
}

var Hl=null;
  function c0(t,e,n){
  if(Hl===null){
  var s=new Map,r=Hl=new Map;
  r.set(n,s)
}

else r=Hl,s=r.get(n),s||(s=new Map,r.set(n,s));
  if(s.has(t))return s;
  for(s.set(t,null),n=n.getElementsByTagName(t),r=0;
  r<n.length;
  r++){
  var c=n[r];
  if(!(c[Ai]||c[$t]||t==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){
  var h=c.getAttribute(e)||"";
  h=t+h;
  var v=s.get(h);
  v?v.push(c):s.set(h,[c])
}

}

return s
}

function u0(t,e,n){
  t=t.ownerDocument||t,t.head.insertBefore(n,e==="title"?t.querySelector("head > title"):null)
}

function wx(t,e,n){
  if(n===1||e.itemProp!=null)return!1;
  switch(t){
  case"meta":case"title":return!0;
  case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;
  return!0;
  case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;
  return e.rel==="stylesheet"?(t=e.disabled,typeof e.precedence=="string"&&t==null):!0;
  case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0
}

return!1
}

function f0(t){
  return!(t.type==="stylesheet"&&(t.state.loading&3)===0)
}

function Ex(t,e,n,s){
  if(n.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(n.state.loading&4)===0){
  if(n.instance===null){
  var r=ii(s.href),c=e.querySelector(ls(r));
  if(c){
  e=c._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=Ul.bind(t),e.then(t,t)),n.state.loading|=4,n.instance=c,Ft(c);
  return
}

c=e.ownerDocument||e,s=o0(s),(r=Ue.get(r))&&Vc(s,r),c=c.createElement("link"),Ft(c);
  var h=c;
  h._p=new Promise(function(v,T){
  h.onload=v,h.onerror=T
}

),ne(c,"link",s),n.instance=c
}

t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(t.count++,n=Ul.bind(t),e.addEventListener("load",n),e.addEventListener("error",n))
}

}

var Bc=0;
  function Nx(t,e){
  return t.stylesheets&&t.count===0&&Gl(t,t.stylesheets),0<t.count||0<t.imgCount?function(n){
  var s=setTimeout(function(){
  if(t.stylesheets&&Gl(t,t.stylesheets),t.unsuspend){
  var c=t.unsuspend;
  t.unsuspend=null,c()
}

}

,6e4+e);
  0<t.imgBytes&&Bc===0&&(Bc=62500*lx());
  var r=setTimeout(function(){
  if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Gl(t,t.stylesheets),t.unsuspend)){
  var c=t.unsuspend;
  t.unsuspend=null,c()
}

}

,(t.imgBytes>Bc?50:800)+e);
  return t.unsuspend=n,function(){
  t.unsuspend=null,clearTimeout(s),clearTimeout(r)
}

}

:null
}

function Ul(){
  if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){
  if(this.stylesheets)Gl(this,this.stylesheets);
  else if(this.unsuspend){
  var t=this.unsuspend;
  this.unsuspend=null,t()
}

}

}

var Ll=null;
  function Gl(t,e){
  t.stylesheets=null,t.unsuspend!==null&&(t.count++,Ll=new Map,e.forEach(Mx,t),Ll=null,Ul.call(t))
}

function Mx(t,e){
  if(!(e.state.loading&4)){
  var n=Ll.get(t);
  if(n)var s=n.get(null);
  else{
  n=new Map,Ll.set(t,n);
  for(var r=t.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;
  c<r.length;
  c++){
  var h=r[c];
  (h.nodeName==="LINK"||h.getAttribute("media")!=="not all")&&(n.set(h.dataset.precedence,h),s=h)
}

s&&n.set(null,s)
}

r=e.instance,h=r.getAttribute("data-precedence"),c=n.get(h)||s,c===s&&n.set(null,r),n.set(h,r),this.count++,s=Ul.bind(this),r.addEventListener("load",s),r.addEventListener("error",s),c?c.parentNode.insertBefore(r,c.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(r,t.firstChild)),e.state.loading|=4
}

}

var rs={
  $$typeof:q,Provider:null,Consumer:null,_currentValue:J,_currentValue2:J,_threadCount:0
}

;
  function Cx(t,e,n,s,r,c,h,v,T){
  this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=zo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zo(0),this.hiddenUpdates=zo(null),this.identifierPrefix=s,this.onUncaughtError=r,this.onCaughtError=c,this.onRecoverableError=h,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map
}

function d0(t,e,n,s,r,c,h,v,T,C,O,B){
  return t=new Cx(t,e,n,h,T,C,O,B,v),e=1,c===!0&&(e|=24),c=Te(3,null,null,e),t.current=c,c.stateNode=t,e=pr(),e.refCount++,t.pooledCache=e,e.refCount++,c.memoizedState={
  element:s,isDehydrated:n,cache:e
}

,xr(c),t
}

function h0(t){
  return t?(t=Ba,t):Ba
}

function m0(t,e,n,s,r,c){
  r=h0(r),s.context===null?s.context=r:s.pendingContext=r,s=zn(e),s.payload={
  element:n
}

,c=c===void 0?null:c,c!==null&&(s.callback=c),n=Rn(t,s,e),n!==null&&(ye(n,t,e),Gi(n,t,e))
}

function p0(t,e){
  if(t=t.memoizedState,t!==null&&t.dehydrated!==null){
  var n=t.retryLane;
  t.retryLane=n!==0&&n<e?n:e
}

}

function Hc(t,e){
  p0(t,e),(t=t.alternate)&&p0(t,e)
}

function y0(t){
  if(t.tag===13||t.tag===31){
  var e=ia(t,67108864);
  e!==null&&ye(e,t,67108864),Hc(t,67108864)
}

}

function g0(t){
  if(t.tag===13||t.tag===31){
  var e=Me();
  e=Ro(e);
  var n=ia(t,e);
  n!==null&&ye(n,t,e),Hc(t,e)
}

}

var ql=!0;
  function jx(t,e,n,s){
  var r=V.T;
  V.T=null;
  var c=K.p;
  try{
  K.p=2,Uc(t,e,n,s)
}

finally{
  K.p=c,V.T=r
}

}

function Dx(t,e,n,s){
  var r=V.T;
  V.T=null;
  var c=K.p;
  try{
  K.p=8,Uc(t,e,n,s)
}

finally{
  K.p=c,V.T=r
}

}

function Uc(t,e,n,s){
  if(ql){
  var r=Lc(s);
  if(r===null)wc(t,e,s,Yl,n),x0(t,s);
  else if(Rx(r,t,e,n,s))s.stopPropagation();
  else if(x0(t,s),e&4&&-1<zx.indexOf(t)){
  for(;
  r!==null;
  ){
  var c=Ea(r);
  if(c!==null)switch(c.tag){
  case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){
  var h=In(c.pendingLanes);
  if(h!==0){
  var v=c;
  for(v.pendingLanes|=2,v.entangledLanes|=2;
  h;
  ){
  var T=1<<31-be(h);
  v.entanglements[1]|=T,h&=~T
}

tn(c),(St&6)===0&&(wl=ve()+500,ns(0))
}

}

break;
  case 31:case 13:v=ia(c,2),v!==null&&ye(v,c,2),Nl(),Hc(c,2)
}

if(c=Lc(s),c===null&&wc(t,e,s,Yl,n),c===r)break;
  r=c
}

r!==null&&s.stopPropagation()
}

else wc(t,e,s,null,n)
}

}

function Lc(t){
  return t=qo(t),Gc(t)
}

var Yl=null;
  function Gc(t){
  if(Yl=null,t=wa(t),t!==null){
  var e=d(t);
  if(e===null)t=null;
  else{
  var n=e.tag;
  if(n===13){
  if(t=f(e),t!==null)return t;
  t=null
}

else if(n===31){
  if(t=y(e),t!==null)return t;
  t=null
}

else if(n===3){
  if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;
  t=null
}

else e!==t&&(t=null)
}

}

return Yl=t,null
}

function v0(t){
  switch(t){
  case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;
  case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;
  case"message":switch(y1()){
  case Nf:return 2;
  case Mf:return 8;
  case zs:case g1:return 32;
  case Cf:return 268435456;
  default:return 32
}

default:return 32
}

}

var qc=!1,Xn=null,kn=null,Kn=null,cs=new Map,us=new Map,Qn=[],zx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
  function x0(t,e){
  switch(t){
  case"focusin":case"focusout":Xn=null;
  break;
  case"dragenter":case"dragleave":kn=null;
  break;
  case"mouseover":case"mouseout":Kn=null;
  break;
  case"pointerover":case"pointerout":cs.delete(e.pointerId);
  break;
  case"gotpointercapture":case"lostpointercapture":us.delete(e.pointerId)
}

}

function fs(t,e,n,s,r,c){
  return t===null||t.nativeEvent!==c?(t={
  blockedOn:e,domEventName:n,eventSystemFlags:s,nativeEvent:c,targetContainers:[r]
}

,e!==null&&(e=Ea(e),e!==null&&y0(e)),t):(t.eventSystemFlags|=s,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)
}

function Rx(t,e,n,s,r){
  switch(e){
  case"focusin":return Xn=fs(Xn,t,e,n,s,r),!0;
  case"dragenter":return kn=fs(kn,t,e,n,s,r),!0;
  case"mouseover":return Kn=fs(Kn,t,e,n,s,r),!0;
  case"pointerover":var c=r.pointerId;
  return cs.set(c,fs(cs.get(c)||null,t,e,n,s,r)),!0;
  case"gotpointercapture":return c=r.pointerId,us.set(c,fs(us.get(c)||null,t,e,n,s,r)),!0
}

return!1
}

function b0(t){
  var e=wa(t.target);
  if(e!==null){
  var n=d(e);
  if(n!==null){
  if(e=n.tag,e===13){
  if(e=f(n),e!==null){
  t.blockedOn=e,Vf(t.priority,function(){
  g0(n)
}

);
  return
}

}

else if(e===31){
  if(e=y(n),e!==null){
  t.blockedOn=e,Vf(t.priority,function(){
  g0(n)
}

);
  return
}

}

else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){
  t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;
  return
}

}

}

t.blockedOn=null
}

function Xl(t){
  if(t.blockedOn!==null)return!1;
  for(var e=t.targetContainers;
  0<e.length;
  ){
  var n=Lc(t.nativeEvent);
  if(n===null){
  n=t.nativeEvent;
  var s=new n.constructor(n.type,n);
  Go=s,n.target.dispatchEvent(s),Go=null
}

else return e=Ea(n),e!==null&&y0(e),t.blockedOn=n,!1;
  e.shift()
}

return!0
}

function S0(t,e,n){
  Xl(t)&&n.delete(e)
}

function Ox(){
  qc=!1,Xn!==null&&Xl(Xn)&&(Xn=null),kn!==null&&Xl(kn)&&(kn=null),Kn!==null&&Xl(Kn)&&(Kn=null),cs.forEach(S0),us.forEach(S0)
}

function kl(t,e){
  t.blockedOn===e&&(t.blockedOn=null,qc||(qc=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,Ox)))
}

var Kl=null;
  function T0(t){
  Kl!==t&&(Kl=t,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){
  Kl===t&&(Kl=null);
  for(var e=0;
  e<t.length;
  e+=3){
  var n=t[e],s=t[e+1],r=t[e+2];
  if(typeof s!="function"){
  if(Gc(s||n)===null)continue;
  break
}

var c=Ea(n);
  c!==null&&(t.splice(e,3),e-=3,Lr(c,{
  pending:!0,data:r,method:n.method,action:s
}

,s,r))
}

}

))
}

function li(t){
  function e(T){
  return kl(T,t)
}

Xn!==null&&kl(Xn,t),kn!==null&&kl(kn,t),Kn!==null&&kl(Kn,t),cs.forEach(e),us.forEach(e);
  for(var n=0;
  n<Qn.length;
  n++){
  var s=Qn[n];
  s.blockedOn===t&&(s.blockedOn=null)
}

for(;
  0<Qn.length&&(n=Qn[0],n.blockedOn===null);
  )b0(n),n.blockedOn===null&&Qn.shift();
  if(n=(t.ownerDocument||t).$$reactFormReplay,n!=null)for(s=0;
  s<n.length;
  s+=3){
  var r=n[s],c=n[s+1],h=r[ue]||null;
  if(typeof c=="function")h||T0(n);
  else if(h){
  var v=null;
  if(c&&c.hasAttribute("formAction")){
  if(r=c,h=c[ue]||null)v=h.formAction;
  else if(Gc(r)!==null)continue
}

else v=h.action;
  typeof v=="function"?n[s+1]=v:(n.splice(s,3),s-=3),T0(n)
}

}

}

function A0(){
  function t(c){
  c.canIntercept&&c.info==="react-transition"&&c.intercept({
  handler:function(){
  return new Promise(function(h){
  return r=h
}

)
}

,focusReset:"manual",scroll:"manual"
}

)
}

function e(){
  r!==null&&(r(),r=null),s||setTimeout(n,20)
}

function n(){
  if(!s&&!navigation.transition){
  var c=navigation.currentEntry;
  c&&c.url!=null&&navigation.navigate(c.url,{
  state:c.getState(),info:"react-transition",history:"replace"
}

)
}

}

if(typeof navigation=="object"){
  var s=!1,r=null;
  return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(n,100),function(){
  s=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),r!==null&&(r(),r=null)
}

}

}

function Yc(t){
  this._internalRoot=t
}

Ql.prototype.render=Yc.prototype.render=function(t){
  var e=this._internalRoot;
  if(e===null)throw Error(o(409));
  var n=e.current,s=Me();
  m0(n,s,t,e,null,null)
}

,Ql.prototype.unmount=Yc.prototype.unmount=function(){
  var t=this._internalRoot;
  if(t!==null){
  this._internalRoot=null;
  var e=t.containerInfo;
  m0(t.current,2,null,t,null,null),Nl(),e[Aa]=null
}

}

;
  function Ql(t){
  this._internalRoot=t
}

Ql.prototype.unstable_scheduleHydration=function(t){
  if(t){
  var e=Of();
  t={
  blockedOn:null,target:t,priority:e
}

;
  for(var n=0;
  n<Qn.length&&e!==0&&e<Qn[n].priority;
  n++);
  Qn.splice(n,0,t),n===0&&b0(t)
}

}

;
  var w0=i.version;
  if(w0!=="19.2.3")throw Error(o(527,w0,"19.2.3"));
  K.findDOMNode=function(t){
  var e=t._reactInternals;
  if(e===void 0)throw typeof t.render=="function"?Error(o(188)):(t=Object.keys(t).join(","),Error(o(268,t)));
  return t=m(e),t=t!==null?x(t):null,t=t===null?null:t.stateNode,t
}

;
  var Vx={
  bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:V,reconcilerVersion:"19.2.3"
}

;
  if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){
  var Zl=__REACT_DEVTOOLS_GLOBAL_HOOK__;
  if(!Zl.isDisabled&&Zl.supportsFiber)try{
  bi=Zl.inject(Vx),xe=Zl
}

catch{

}

}

return hs.createRoot=function(t,e){
  if(!u(t))throw Error(o(299));
  var n=!1,s="",r=zh,c=Rh,h=Oh;
  return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(s=e.identifierPrefix),e.onUncaughtError!==void 0&&(r=e.onUncaughtError),e.onCaughtError!==void 0&&(c=e.onCaughtError),e.onRecoverableError!==void 0&&(h=e.onRecoverableError)),e=d0(t,1,!1,null,null,n,s,null,r,c,h,A0),t[Aa]=e.current,Ac(t),new Yc(e)
}

,hs.hydrateRoot=function(t,e,n){
  if(!u(t))throw Error(o(299));
  var s=!1,r="",c=zh,h=Rh,v=Oh,T=null;
  return n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError),n.formState!==void 0&&(T=n.formState)),e=d0(t,1,!0,e,n??null,s,r,T,c,h,v,A0),e.context=h0(null),n=e.current,s=Me(),s=Ro(s),r=zn(s),r.callback=null,Rn(n,r,s),n=s,e.current.lanes=n,Ti(e,n),tn(e),t[Aa]=e.current,Ac(t),new Ql(e)
}

,hs.version="19.2.3",hs
}

var V0;
  function kx(){
  if(V0)return Kc.exports;
  V0=1;
  function a(){
  if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{
  __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)
}

catch(i){
  console.error(i)
}

}

return a(),Kc.exports=Xx(),Kc.exports
}

var Kx=kx();
  const Ku=R.createContext({

}

);
  function Wn(a){
  const i=R.useRef(null);
  return i.current===null&&(i.current=a()),i.current
}

const Qx=typeof window<"u",xo=Qx?R.useLayoutEffect:R.useEffect,bo=R.createContext(null);
  function Qu(a,i){
  a.indexOf(i)===-1&&a.push(i)
}

function ro(a,i){
  const l=a.indexOf(i);
  l>-1&&a.splice(l,1)
}

const We=(a,i,l)=>l>i?i:l<a?a:l;
  let Ss=()=>{

}

;
  const Tn={

}

,dy=a=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(a);
  function hy(a){
  return typeof a=="object"&&a!==null
}

const my=a=>/^0[^.\s]+$/u.test(a);
  function py(a){
  let i;
  return()=>(i===void 0&&(i=a()),i)
}

const ge=a=>a,Zx=(a,i)=>l=>i(a(l)),Ns=(...a)=>a.reduce(Zx),pi=(a,i,l)=>{
  const o=i-a;
  return o===0?1:(l-a)/o
}

;
  class Zu{
  constructor(){
  this.subscriptions=[]
}

add(i){
  return Qu(this.subscriptions,i),()=>ro(this.subscriptions,i)
}

notify(i,l,o){
  const u=this.subscriptions.length;
  if(u)if(u===1)this.subscriptions[0](i,l,o);
  else for(let d=0;
  d<u;
  d++){
  const f=this.subscriptions[d];
  f&&f(i,l,o)
}

}

getSize(){
  return this.subscriptions.length
}

clear(){
  this.subscriptions.length=0
}

}

const Je=a=>a*1e3,Le=a=>a/1e3;
  function Ju(a,i){
  return i?a*(1e3/i):0
}

const yy=(a,i,l)=>(((1-3*l+3*i)*a+(3*l-6*i))*a+3*i)*a,Jx=1e-7,Fx=12;
  function Wx(a,i,l,o,u){
  let d,f,y=0;
  do f=i+(l-i)/2,d=yy(f,o,u)-a,d>0?l=f:i=f;
  while(Math.abs(d)>Jx&&++y<Fx);
  return f
}

function Ms(a,i,l,o){
  if(a===i&&l===o)return ge;
  const u=d=>Wx(d,0,1,a,l);
  return d=>d===0||d===1?d:yy(u(d),i,o)
}

const gy=a=>i=>i<=.5?a(2*i)/2:(2-a(2*(1-i)))/2,vy=a=>i=>1-a(1-i),xy=Ms(.33,1.53,.69,.99),Fu=vy(xy),by=gy(Fu),Sy=a=>(a*=2)<1?.5*Fu(a):.5*(2-Math.pow(2,-10*(a-1))),Wu=a=>1-Math.sin(Math.acos(a)),Ty=vy(Wu),Ay=gy(Wu),Px=Ms(.42,0,1,1),$x=Ms(0,0,.58,1),wy=Ms(.42,0,.58,1),Ix=a=>Array.isArray(a)&&typeof a[0]!="number",Ey=a=>Array.isArray(a)&&typeof a[0]=="number",t2={
  linear:ge,easeIn:Px,easeInOut:wy,easeOut:$x,circIn:Wu,circInOut:Ay,circOut:Ty,backIn:Fu,backInOut:by,backOut:xy,anticipate:Sy
}

,e2=a=>typeof a=="string",_0=a=>{
  if(Ey(a)){
  Ss(a.length===4);
  const[i,l,o,u]=a;
  return Ms(i,l,o,u)
}

else if(e2(a))return t2[a];
  return a
}

,Jl=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];
  function n2(a,i){
  let l=new Set,o=new Set,u=!1,d=!1;
  const f=new WeakSet;
  let y={
  delta:0,timestamp:0,isProcessing:!1
}

;
  function p(x){
  f.has(x)&&(m.schedule(x),a()),x(y)
}

const m={
  schedule:(x,b=!1,S=!1)=>{
  const z=S&&u?l:o;
  return b&&f.add(x),z.has(x)||z.add(x),x
}

,cancel:x=>{
  o.delete(x),f.delete(x)
}

,process:x=>{
  if(y=x,u){
  d=!0;
  return
}

u=!0,[l,o]=[o,l],l.forEach(p),l.clear(),u=!1,d&&(d=!1,m.process(x))
}

}

;
  return m
}

const a2=40;
  function Ny(a,i){
  let l=!1,o=!0;
  const u={
  delta:0,timestamp:0,isProcessing:!1
}

,d=()=>l=!0,f=Jl.reduce((q,k)=>(q[k]=n2(d),q),{

}

),{
  setup:y,read:p,resolveKeyframes:m,preUpdate:x,update:b,preRender:S,render:N,postRender:z
}

=f,U=()=>{
  const q=Tn.useManualTiming?u.timestamp:performance.now();
  l=!1,Tn.useManualTiming||(u.delta=o?1e3/60:Math.max(Math.min(q-u.timestamp,a2),1)),u.timestamp=q,u.isProcessing=!0,y.process(u),p.process(u),m.process(u),x.process(u),b.process(u),S.process(u),N.process(u),z.process(u),u.isProcessing=!1,l&&i&&(o=!1,a(U))
}

,X=()=>{
  l=!0,o=!0,u.isProcessing||a(U)
}

;
  return{
  schedule:Jl.reduce((q,k)=>{
  const Z=f[k];
  return q[k]=(at,tt=!1,$=!1)=>(l||X(),Z.schedule(at,tt,$)),q
}

,{

}

),cancel:q=>{
  for(let k=0;
  k<Jl.length;
  k++)f[Jl[k]].cancel(q)
}

,state:u,steps:f
}

}

const{
  schedule:bt,cancel:Ge,state:Pt,steps:Fc
}

=Ny(typeof requestAnimationFrame<"u"?requestAnimationFrame:ge,!0);
  let to;
  function i2(){
  to=void 0
}

const oe={
  now:()=>(to===void 0&&oe.set(Pt.isProcessing||Tn.useManualTiming?Pt.timestamp:performance.now()),to),set:a=>{
  to=a,queueMicrotask(i2)
}

}

,My=a=>i=>typeof i=="string"&&i.startsWith(a),Cy=My("--"),s2=My("var(--"),Pu=a=>s2(a)?l2.test(a.split("/*")[0].trim()):!1,l2=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
  function B0(a){
  return typeof a!="string"?!1:a.split("/*")[0].includes("var(--")
}

const yi={
  test:a=>typeof a=="number",parse:parseFloat,transform:a=>a
}

,Ts={
  ...yi,transform:a=>We(0,1,a)
}

,Fl={
  ...yi,default:1
}

,ys=a=>Math.round(a*1e5)/1e5,$u=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
  function o2(a){
  return a==null
}

const r2=/^(?:#[\da-f]{
  3,8
}

|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){
  2
}

-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Iu=(a,i)=>l=>!!(typeof l=="string"&&r2.test(l)&&l.startsWith(a)||i&&!o2(l)&&Object.prototype.hasOwnProperty.call(l,i)),jy=(a,i,l)=>o=>{
  if(typeof o!="string")return o;
  const[u,d,f,y]=o.match($u);
  return{
  [a]:parseFloat(u),[i]:parseFloat(d),[l]:parseFloat(f),alpha:y!==void 0?parseFloat(y):1
}

}

,c2=a=>We(0,255,a),Wc={
  ...yi,transform:a=>Math.round(c2(a))
}

,xa={
  test:Iu("rgb","red"),parse:jy("red","green","blue"),transform:({
  red:a,green:i,blue:l,alpha:o=1
}

)=>"rgba("+Wc.transform(a)+", "+Wc.transform(i)+", "+Wc.transform(l)+", "+ys(Ts.transform(o))+")"
}

;
  function u2(a){
  let i="",l="",o="",u="";
  return a.length>5?(i=a.substring(1,3),l=a.substring(3,5),o=a.substring(5,7),u=a.substring(7,9)):(i=a.substring(1,2),l=a.substring(2,3),o=a.substring(3,4),u=a.substring(4,5),i+=i,l+=l,o+=o,u+=u),{
  red:parseInt(i,16),green:parseInt(l,16),blue:parseInt(o,16),alpha:u?parseInt(u,16)/255:1
}

}

const gu={
  test:Iu("#"),parse:u2,transform:xa.transform
}

,Cs=a=>({
  test:i=>typeof i=="string"&&i.endsWith(a)&&i.split(" ").length===1,parse:parseFloat,transform:i=>`${
  i
}

${
  a
}

`
}

),Jn=Cs("deg"),nn=Cs("%"),W=Cs("px"),f2=Cs("vh"),d2=Cs("vw"),H0={
  ...nn,parse:a=>nn.parse(a)/100,transform:a=>nn.transform(a*100)
}

,ci={
  test:Iu("hsl","hue"),parse:jy("hue","saturation","lightness"),transform:({
  hue:a,saturation:i,lightness:l,alpha:o=1
}

)=>"hsla("+Math.round(a)+", "+nn.transform(ys(i))+", "+nn.transform(ys(l))+", "+ys(Ts.transform(o))+")"
}

,Kt={
  test:a=>xa.test(a)||gu.test(a)||ci.test(a),parse:a=>xa.test(a)?xa.parse(a):ci.test(a)?ci.parse(a):gu.parse(a),transform:a=>typeof a=="string"?a:a.hasOwnProperty("red")?xa.transform(a):ci.transform(a),getAnimatableNone:a=>{
  const i=Kt.parse(a);
  return i.alpha=0,Kt.transform(i)
}

}

,h2=/(?:#[\da-f]{
  3,8
}

|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){
  2
}

-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
  function m2(a){
  return isNaN(a)&&typeof a=="string"&&(a.match($u)?.length||0)+(a.match(h2)?.length||0)>0
}

const Dy="number",zy="color",p2="var",y2="var(",U0="${

}

",g2=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{
  3,8
}

|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){
  2
}

-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
  function As(a){
  const i=a.toString(),l=[],o={
  color:[],number:[],var:[]
}

,u=[];
  let d=0;
  const y=i.replace(g2,p=>(Kt.test(p)?(o.color.push(d),u.push(zy),l.push(Kt.parse(p))):p.startsWith(y2)?(o.var.push(d),u.push(p2),l.push(p)):(o.number.push(d),u.push(Dy),l.push(parseFloat(p))),++d,U0)).split(U0);
  return{
  values:l,split:y,indexes:o,types:u
}

}

function Ry(a){
  return As(a).values
}

function Oy(a){
  const{
  split:i,types:l
}

=As(a),o=i.length;
  return u=>{
  let d="";
  for(let f=0;
  f<o;
  f++)if(d+=i[f],u[f]!==void 0){
  const y=l[f];
  y===Dy?d+=ys(u[f]):y===zy?d+=Kt.transform(u[f]):d+=u[f]
}

return d
}

}

const v2=a=>typeof a=="number"?0:Kt.test(a)?Kt.getAnimatableNone(a):a;
  function x2(a){
  const i=Ry(a);
  return Oy(a)(i.map(v2))
}

const Fe={
  test:m2,parse:Ry,createTransformer:Oy,getAnimatableNone:x2
}

;
  function Pc(a,i,l){
  return l<0&&(l+=1),l>1&&(l-=1),l<1/6?a+(i-a)*6*l:l<1/2?i:l<2/3?a+(i-a)*(2/3-l)*6:a
}

function b2({
  hue:a,saturation:i,lightness:l,alpha:o
}

){
  a/=360,i/=100,l/=100;
  let u=0,d=0,f=0;
  if(!i)u=d=f=l;
  else{
  const y=l<.5?l*(1+i):l+i-l*i,p=2*l-y;
  u=Pc(p,y,a+1/3),d=Pc(p,y,a),f=Pc(p,y,a-1/3)
}

return{
  red:Math.round(u*255),green:Math.round(d*255),blue:Math.round(f*255),alpha:o
}

}

function co(a,i){
  return l=>l>0?i:a
}

const Vt=(a,i,l)=>a+(i-a)*l,$c=(a,i,l)=>{
  const o=a*a,u=l*(i*i-o)+o;
  return u<0?0:Math.sqrt(u)
}

,S2=[gu,xa,ci],T2=a=>S2.find(i=>i.test(a));
  function L0(a){
  const i=T2(a);
  if(!i)return!1;
  let l=i.parse(a);
  return i===ci&&(l=b2(l)),l
}

const G0=(a,i)=>{
  const l=L0(a),o=L0(i);
  if(!l||!o)return co(a,i);
  const u={
  ...l
}

;
  return d=>(u.red=$c(l.red,o.red,d),u.green=$c(l.green,o.green,d),u.blue=$c(l.blue,o.blue,d),u.alpha=Vt(l.alpha,o.alpha,d),xa.transform(u))
}

,vu=new Set(["none","hidden"]);
  function A2(a,i){
  return vu.has(a)?l=>l<=0?a:i:l=>l>=1?i:a
}

function w2(a,i){
  return l=>Vt(a,i,l)
}

function tf(a){
  return typeof a=="number"?w2:typeof a=="string"?Pu(a)?co:Kt.test(a)?G0:M2:Array.isArray(a)?Vy:typeof a=="object"?Kt.test(a)?G0:E2:co
}

function Vy(a,i){
  const l=[...a],o=l.length,u=a.map((d,f)=>tf(d)(d,i[f]));
  return d=>{
  for(let f=0;
  f<o;
  f++)l[f]=u[f](d);
  return l
}

}

function E2(a,i){
  const l={
  ...a,...i
}

,o={

}

;
  for(const u in l)a[u]!==void 0&&i[u]!==void 0&&(o[u]=tf(a[u])(a[u],i[u]));
  return u=>{
  for(const d in o)l[d]=o[d](u);
  return l
}

}

function N2(a,i){
  const l=[],o={
  color:0,var:0,number:0
}

;
  for(let u=0;
  u<i.values.length;
  u++){
  const d=i.types[u],f=a.indexes[d][o[d]],y=a.values[f]??0;
  l[u]=y,o[d]++
}

return l
}

const M2=(a,i)=>{
  const l=Fe.createTransformer(i),o=As(a),u=As(i);
  return o.indexes.var.length===u.indexes.var.length&&o.indexes.color.length===u.indexes.color.length&&o.indexes.number.length>=u.indexes.number.length?vu.has(a)&&!u.values.length||vu.has(i)&&!o.values.length?A2(a,i):Ns(Vy(N2(o,u),u.values),l):co(a,i)
}

;
  function _y(a,i,l){
  return typeof a=="number"&&typeof i=="number"&&typeof l=="number"?Vt(a,i,l):tf(a)(a,i)
}

const C2=a=>{
  const i=({
  timestamp:l
}

)=>a(l);
  return{
  start:(l=!0)=>bt.update(i,l),stop:()=>Ge(i),now:()=>Pt.isProcessing?Pt.timestamp:oe.now()
}

}

,By=(a,i,l=10)=>{
  let o="";
  const u=Math.max(Math.round(i/l),2);
  for(let d=0;
  d<u;
  d++)o+=Math.round(a(d/(u-1))*1e4)/1e4+", ";
  return`linear(${
  o.substring(0,o.length-2)
}

)`
}

,uo=2e4;
  function ef(a){
  let i=0;
  const l=50;
  let o=a.next(i);
  for(;
  !o.done&&i<uo;
  )i+=l,o=a.next(i);
  return i>=uo?1/0:i
}

function j2(a,i=100,l){
  const o=l({
  ...a,keyframes:[0,i]
}

),u=Math.min(ef(o),uo);
  return{
  type:"keyframes",ease:d=>o.next(u*d).value/i,duration:Le(u)
}

}

const D2=5;
  function Hy(a,i,l){
  const o=Math.max(i-D2,0);
  return Ju(l-a(o),i-o)
}

const Ht={
  stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{
  granular:.01,default:2
}

,restDelta:{
  granular:.005,default:.5
}

,minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1
}

,Ic=.001;
  function z2({
  duration:a=Ht.duration,bounce:i=Ht.bounce,velocity:l=Ht.velocity,mass:o=Ht.mass
}

){
  let u,d,f=1-i;
  f=We(Ht.minDamping,Ht.maxDamping,f),a=We(Ht.minDuration,Ht.maxDuration,Le(a)),f<1?(u=m=>{
  const x=m*f,b=x*a,S=x-l,N=xu(m,f),z=Math.exp(-b);
  return Ic-S/N*z
}

,d=m=>{
  const b=m*f*a,S=b*l+l,N=Math.pow(f,2)*Math.pow(m,2)*a,z=Math.exp(-b),U=xu(Math.pow(m,2),f);
  return(-u(m)+Ic>0?-1:1)*((S-N)*z)/U
}

):(u=m=>{
  const x=Math.exp(-m*a),b=(m-l)*a+1;
  return-Ic+x*b
}

,d=m=>{
  const x=Math.exp(-m*a),b=(l-m)*(a*a);
  return x*b
}

);
  const y=5/a,p=O2(u,d,y);
  if(a=Je(a),isNaN(p))return{
  stiffness:Ht.stiffness,damping:Ht.damping,duration:a
}

;
  {
  const m=Math.pow(p,2)*o;
  return{
  stiffness:m,damping:f*2*Math.sqrt(o*m),duration:a
}

}

}

const R2=12;
  function O2(a,i,l){
  let o=l;
  for(let u=1;
  u<R2;
  u++)o=o-a(o)/i(o);
  return o
}

function xu(a,i){
  return a*Math.sqrt(1-i*i)
}

const V2=["duration","bounce"],_2=["stiffness","damping","mass"];
  function q0(a,i){
  return i.some(l=>a[l]!==void 0)
}

function B2(a){
  let i={
  velocity:Ht.velocity,stiffness:Ht.stiffness,damping:Ht.damping,mass:Ht.mass,isResolvedFromDuration:!1,...a
}

;
  if(!q0(a,_2)&&q0(a,V2))if(i.velocity=0,a.visualDuration){
  const l=a.visualDuration,o=2*Math.PI/(l*1.2),u=o*o,d=2*We(.05,1,1-(a.bounce||0))*Math.sqrt(u);
  i={
  ...i,mass:Ht.mass,stiffness:u,damping:d
}

}

else{
  const l=z2({
  ...a,velocity:0
}

);
  i={
  ...i,...l,mass:Ht.mass
}

,i.isResolvedFromDuration=!0
}

return i
}

function fo(a=Ht.visualDuration,i=Ht.bounce){
  const l=typeof a!="object"?{
  visualDuration:a,keyframes:[0,1],bounce:i
}

:a;
  let{
  restSpeed:o,restDelta:u
}

=l;
  const d=l.keyframes[0],f=l.keyframes[l.keyframes.length-1],y={
  done:!1,value:d
}

,{
  stiffness:p,damping:m,mass:x,duration:b,velocity:S,isResolvedFromDuration:N
}

=B2({
  ...l,velocity:-Le(l.velocity||0)
}

),z=S||0,U=m/(2*Math.sqrt(p*x)),X=f-d,L=Le(Math.sqrt(p/x)),Y=Math.abs(X)<5;
  o||(o=Y?Ht.restSpeed.granular:Ht.restSpeed.default),u||(u=Y?Ht.restDelta.granular:Ht.restDelta.default);
  let q;
  if(U<1){
  const Z=xu(L,U);
  q=at=>{
  const tt=Math.exp(-U*L*at);
  return f-tt*((z+U*L*X)/Z*Math.sin(Z*at)+X*Math.cos(Z*at))
}

}

else if(U===1)q=Z=>f-Math.exp(-L*Z)*(X+(z+L*X)*Z);
  else{
  const Z=L*Math.sqrt(U*U-1);
  q=at=>{
  const tt=Math.exp(-U*L*at),$=Math.min(Z*at,300);
  return f-tt*((z+U*L*X)*Math.sinh($)+Z*X*Math.cosh($))/Z
}

}

const k={
  calculatedDuration:N&&b||null,next:Z=>{
  const at=q(Z);
  if(N)y.done=Z>=b;
  else{
  let tt=Z===0?z:0;
  U<1&&(tt=Z===0?Je(z):Hy(q,Z,at));
  const $=Math.abs(tt)<=o,it=Math.abs(f-at)<=u;
  y.done=$&&it
}

return y.value=y.done?f:at,y
}

,toString:()=>{
  const Z=Math.min(ef(k),uo),at=By(tt=>k.next(Z*tt).value,Z,30);
  return Z+"ms "+at
}

,toTransition:()=>{

}

}

;
  return k
}

fo.applyToOptions=a=>{
  const i=j2(a,100,fo);
  return a.ease=i.ease,a.duration=Je(i.duration),a.type="keyframes",a
}

;
  function bu({
  keyframes:a,velocity:i=0,power:l=.8,timeConstant:o=325,bounceDamping:u=10,bounceStiffness:d=500,modifyTarget:f,min:y,max:p,restDelta:m=.5,restSpeed:x
}

){
  const b=a[0],S={
  done:!1,value:b
}

,N=$=>y!==void 0&&$<y||p!==void 0&&$>p,z=$=>y===void 0?p:p===void 0||Math.abs(y-$)<Math.abs(p-$)?y:p;
  let U=l*i;
  const X=b+U,L=f===void 0?X:f(X);
  L!==X&&(U=L-b);
  const Y=$=>-U*Math.exp(-$/o),q=$=>L+Y($),k=$=>{
  const it=Y($),jt=q($);
  S.done=Math.abs(it)<=m,S.value=S.done?L:jt
}

;
  let Z,at;
  const tt=$=>{
  N(S.value)&&(Z=$,at=fo({
  keyframes:[S.value,z(S.value)],velocity:Hy(q,$,S.value),damping:u,stiffness:d,restDelta:m,restSpeed:x
}

))
}

;
  return tt(0),{
  calculatedDuration:null,next:$=>{
  let it=!1;
  return!at&&Z===void 0&&(it=!0,k($),tt($)),Z!==void 0&&$>=Z?at.next($-Z):(!it&&k($),S)
}

}

}

function H2(a,i,l){
  const o=[],u=l||Tn.mix||_y,d=a.length-1;
  for(let f=0;
  f<d;
  f++){
  let y=u(a[f],a[f+1]);
  if(i){
  const p=Array.isArray(i)?i[f]||ge:i;
  y=Ns(p,y)
}

o.push(y)
}

return o
}

function nf(a,i,{
  clamp:l=!0,ease:o,mixer:u
}

={

}

){
  const d=a.length;
  if(Ss(d===i.length),d===1)return()=>i[0];
  if(d===2&&i[0]===i[1])return()=>i[1];
  const f=a[0]===a[1];
  a[0]>a[d-1]&&(a=[...a].reverse(),i=[...i].reverse());
  const y=H2(i,o,u),p=y.length,m=x=>{
  if(f&&x<a[0])return i[0];
  let b=0;
  if(p>1)for(;
  b<a.length-2&&!(x<a[b+1]);
  b++);
  const S=pi(a[b],a[b+1],x);
  return y[b](S)
}

;
  return l?x=>m(We(a[0],a[d-1],x)):m
}

function U2(a,i){
  const l=a[a.length-1];
  for(let o=1;
  o<=i;
  o++){
  const u=pi(0,i,o);
  a.push(Vt(l,1,u))
}

}

function Uy(a){
  const i=[0];
  return U2(i,a.length-1),i
}

function L2(a,i){
  return a.map(l=>l*i)
}

function G2(a,i){
  return a.map(()=>i||wy).splice(0,a.length-1)
}

function gs({
  duration:a=300,keyframes:i,times:l,ease:o="easeInOut"
}

){
  const u=Ix(o)?o.map(_0):_0(o),d={
  done:!1,value:i[0]
}

,f=L2(l&&l.length===i.length?l:Uy(i),a),y=nf(f,i,{
  ease:Array.isArray(u)?u:G2(i,u)
}

);
  return{
  calculatedDuration:a,next:p=>(d.value=y(p),d.done=p>=a,d)
}

}

const q2=a=>a!==null;
  function af(a,{
  repeat:i,repeatType:l="loop"
}

,o,u=1){
  const d=a.filter(q2),y=u<0||i&&l!=="loop"&&i%2===1?0:d.length-1;
  return!y||o===void 0?d[y]:o
}

const Y2={
  decay:bu,inertia:bu,tween:gs,keyframes:gs,spring:fo
}

;
  function Ly(a){
  typeof a.type=="string"&&(a.type=Y2[a.type])
}

class sf{
  constructor(){
  this.updateFinished()
}

get finished(){
  return this._finished
}

updateFinished(){
  this._finished=new Promise(i=>{
  this.resolve=i
}

)
}

notifyFinished(){
  this.resolve()
}

then(i,l){
  return this.finished.then(i,l)
}

}

const X2=a=>a/100;
  class lf extends sf{
  constructor(i){
  super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{
  const{
  motionValue:l
}

=this.options;
  l&&l.updatedAt!==oe.now()&&this.tick(oe.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),this.options.onStop?.())
}

,this.options=i,this.initAnimation(),this.play(),i.autoplay===!1&&this.pause()
}

initAnimation(){
  const{
  options:i
}

=this;
  Ly(i);
  const{
  type:l=gs,repeat:o=0,repeatDelay:u=0,repeatType:d,velocity:f=0
}

=i;
  let{
  keyframes:y
}

=i;
  const p=l||gs;
  p!==gs&&typeof y[0]!="number"&&(this.mixKeyframes=Ns(X2,_y(y[0],y[1])),y=[0,100]);
  const m=p({
  ...i,keyframes:y
}

);
  d==="mirror"&&(this.mirroredGenerator=p({
  ...i,keyframes:[...y].reverse(),velocity:-f
}

)),m.calculatedDuration===null&&(m.calculatedDuration=ef(m));
  const{
  calculatedDuration:x
}

=m;
  this.calculatedDuration=x,this.resolvedDuration=x+u,this.totalDuration=this.resolvedDuration*(o+1)-u,this.generator=m
}

updateTime(i){
  const l=Math.round(i-this.startTime)*this.playbackSpeed;
  this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=l
}

tick(i,l=!1){
  const{
  generator:o,totalDuration:u,mixKeyframes:d,mirroredGenerator:f,resolvedDuration:y,calculatedDuration:p
}

=this;
  if(this.startTime===null)return o.next(0);
  const{
  delay:m=0,keyframes:x,repeat:b,repeatType:S,repeatDelay:N,type:z,onUpdate:U,finalKeyframe:X
}

=this.options;
  this.speed>0?this.startTime=Math.min(this.startTime,i):this.speed<0&&(this.startTime=Math.min(i-u/this.speed,this.startTime)),l?this.currentTime=i:this.updateTime(i);
  const L=this.currentTime-m*(this.playbackSpeed>=0?1:-1),Y=this.playbackSpeed>=0?L<0:L>u;
  this.currentTime=Math.max(L,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=u);
  let q=this.currentTime,k=o;
  if(b){
  const $=Math.min(this.currentTime,u)/y;
  let it=Math.floor($),jt=$%1;
  !jt&&$>=1&&(jt=1),jt===1&&it--,it=Math.min(it,b+1),it%2&&(S==="reverse"?(jt=1-jt,N&&(jt-=N/y)):S==="mirror"&&(k=f)),q=We(0,1,jt)*y
}

const Z=Y?{
  done:!1,value:x[0]
}

:k.next(q);
  d&&(Z.value=d(Z.value));
  let{
  done:at
}

=Z;
  !Y&&p!==null&&(at=this.playbackSpeed>=0?this.currentTime>=u:this.currentTime<=0);
  const tt=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&at);
  return tt&&z!==bu&&(Z.value=af(x,this.options,X,this.speed)),U&&U(Z.value),tt&&this.finish(),Z
}

then(i,l){
  return this.finished.then(i,l)
}

get duration(){
  return Le(this.calculatedDuration)
}

get iterationDuration(){
  const{
  delay:i=0
}

=this.options||{

}

;
  return this.duration+Le(i)
}

get time(){
  return Le(this.currentTime)
}

set time(i){
  i=Je(i),this.currentTime=i,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=i:this.driver&&(this.startTime=this.driver.now()-i/this.playbackSpeed),this.driver?.start(!1)
}

get speed(){
  return this.playbackSpeed
}

set speed(i){
  this.updateTime(oe.now());
  const l=this.playbackSpeed!==i;
  this.playbackSpeed=i,l&&(this.time=Le(this.currentTime))
}

play(){
  if(this.isStopped)return;
  const{
  driver:i=C2,startTime:l
}

=this.options;
  this.driver||(this.driver=i(u=>this.tick(u))),this.options.onPlay?.();
  const o=this.driver.now();
  this.state==="finished"?(this.updateFinished(),this.startTime=o):this.holdTime!==null?this.startTime=o-this.holdTime:this.startTime||(this.startTime=l??o),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()
}

pause(){
  this.state="paused",this.updateTime(oe.now()),this.holdTime=this.currentTime
}

complete(){
  this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null
}

finish(){
  this.notifyFinished(),this.teardown(),this.state="finished",this.options.onComplete?.()
}

cancel(){
  this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()
}

teardown(){
  this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null
}

stopDriver(){
  this.driver&&(this.driver.stop(),this.driver=void 0)
}

sample(i){
  return this.startTime=0,this.tick(i,!0)
}

attachTimeline(i){
  return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),this.driver?.stop(),i.observe(this)
}

}

function k2(a){
  for(let i=1;
  i<a.length;
  i++)a[i]??(a[i]=a[i-1])
}

const ba=a=>a*180/Math.PI,Su=a=>{
  const i=ba(Math.atan2(a[1],a[0]));
  return Tu(i)
}

,K2={
  x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:a=>(Math.abs(a[0])+Math.abs(a[3]))/2,rotate:Su,rotateZ:Su,skewX:a=>ba(Math.atan(a[1])),skewY:a=>ba(Math.atan(a[2])),skew:a=>(Math.abs(a[1])+Math.abs(a[2]))/2
}

,Tu=a=>(a=a%360,a<0&&(a+=360),a),Y0=Su,X0=a=>Math.sqrt(a[0]*a[0]+a[1]*a[1]),k0=a=>Math.sqrt(a[4]*a[4]+a[5]*a[5]),Q2={
  x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:X0,scaleY:k0,scale:a=>(X0(a)+k0(a))/2,rotateX:a=>Tu(ba(Math.atan2(a[6],a[5]))),rotateY:a=>Tu(ba(Math.atan2(-a[2],a[0]))),rotateZ:Y0,rotate:Y0,skewX:a=>ba(Math.atan(a[4])),skewY:a=>ba(Math.atan(a[1])),skew:a=>(Math.abs(a[1])+Math.abs(a[4]))/2
}

;
  function Au(a){
  return a.includes("scale")?1:0
}

function wu(a,i){
  if(!a||a==="none")return Au(i);
  const l=a.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let o,u;
  if(l)o=Q2,u=l;
  else{
  const y=a.match(/^matrix\(([-\d.e\s,]+)\)$/u);
  o=K2,u=y
}

if(!u)return Au(i);
  const d=o[i],f=u[1].split(",").map(J2);
  return typeof d=="function"?d(f):f[d]
}

const Z2=(a,i)=>{
  const{
  transform:l="none"
}

=getComputedStyle(a);
  return wu(l,i)
}

;
  function J2(a){
  return parseFloat(a.trim())
}

const gi=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],vi=new Set(gi),K0=a=>a===yi||a===W,F2=new Set(["x","y","z"]),W2=gi.filter(a=>!F2.has(a));
  function P2(a){
  const i=[];
  return W2.forEach(l=>{
  const o=a.getValue(l);
  o!==void 0&&(i.push([l,o.get()]),o.set(l.startsWith("scale")?1:0))
}

),i
}

const Fn={
  width:({
  x:a
}

,{
  paddingLeft:i="0",paddingRight:l="0"
}

)=>a.max-a.min-parseFloat(i)-parseFloat(l),height:({
  y:a
}

,{
  paddingTop:i="0",paddingBottom:l="0"
}

)=>a.max-a.min-parseFloat(i)-parseFloat(l),top:(a,{
  top:i
}

)=>parseFloat(i),left:(a,{
  left:i
}

)=>parseFloat(i),bottom:({
  y:a
}

,{
  top:i
}

)=>parseFloat(i)+(a.max-a.min),right:({
  x:a
}

,{
  left:i
}

)=>parseFloat(i)+(a.max-a.min),x:(a,{
  transform:i
}

)=>wu(i,"x"),y:(a,{
  transform:i
}

)=>wu(i,"y")
}

;
  Fn.translateX=Fn.x;
  Fn.translateY=Fn.y;
  const Sa=new Set;
  let Eu=!1,Nu=!1,Mu=!1;
  function Gy(){
  if(Nu){
  const a=Array.from(Sa).filter(o=>o.needsMeasurement),i=new Set(a.map(o=>o.element)),l=new Map;
  i.forEach(o=>{
  const u=P2(o);
  u.length&&(l.set(o,u),o.render())
}

),a.forEach(o=>o.measureInitialState()),i.forEach(o=>{
  o.render();
  const u=l.get(o);
  u&&u.forEach(([d,f])=>{
  o.getValue(d)?.set(f)
}

)
}

),a.forEach(o=>o.measureEndState()),a.forEach(o=>{
  o.suspendedScrollY!==void 0&&window.scrollTo(0,o.suspendedScrollY)
}

)
}

Nu=!1,Eu=!1,Sa.forEach(a=>a.complete(Mu)),Sa.clear()
}

function qy(){
  Sa.forEach(a=>{
  a.readKeyframes(),a.needsMeasurement&&(Nu=!0)
}

)
}

function $2(){
  Mu=!0,qy(),Gy(),Mu=!1
}

class of{
  constructor(i,l,o,u,d,f=!1){
  this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...i],this.onComplete=l,this.name=o,this.motionValue=u,this.element=d,this.isAsync=f
}

scheduleResolve(){
  this.state="scheduled",this.isAsync?(Sa.add(this),Eu||(Eu=!0,bt.read(qy),bt.resolveKeyframes(Gy))):(this.readKeyframes(),this.complete())
}

readKeyframes(){
  const{
  unresolvedKeyframes:i,name:l,element:o,motionValue:u
}

=this;
  if(i[0]===null){
  const d=u?.get(),f=i[i.length-1];
  if(d!==void 0)i[0]=d;
  else if(o&&l){
  const y=o.readValue(l,f);
  y!=null&&(i[0]=y)
}

i[0]===void 0&&(i[0]=f),u&&d===void 0&&u.set(i[0])
}

k2(i)
}

setFinalKeyframe(){

}

measureInitialState(){

}

renderEndStyles(){

}

measureEndState(){

}

complete(i=!1){
  this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,i),Sa.delete(this)
}

cancel(){
  this.state==="scheduled"&&(Sa.delete(this),this.state="pending")
}

resume(){
  this.state==="pending"&&this.scheduleResolve()
}

}

const I2=a=>a.startsWith("--");
  function tb(a,i,l){
  I2(i)?a.style.setProperty(i,l):a.style[i]=l
}

const eb={

}

;
  function Yy(a,i){
  const l=py(a);
  return()=>eb[i]??l()
}

const Xy=Yy(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),ky=Yy(()=>{
  try{
  document.createElement("div").animate({
  opacity:0
}

,{
  easing:"linear(0, 1)"
}

)
}

catch{
  return!1
}

return!0
}

,"linearEasing"),ps=([a,i,l,o])=>`cubic-bezier(${
  a
}

, ${
  i
}

, ${
  l
}

, ${
  o
}

)`,Q0={
  linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:ps([0,.65,.55,1]),circOut:ps([.55,0,1,.45]),backIn:ps([.31,.01,.66,-.59]),backOut:ps([.33,1.53,.69,.99])
}

;
  function Ky(a,i){
  if(a)return typeof a=="function"?ky()?By(a,i):"ease-out":Ey(a)?ps(a):Array.isArray(a)?a.map(l=>Ky(l,i)||Q0.easeOut):Q0[a]
}

function nb(a,i,l,{
  delay:o=0,duration:u=300,repeat:d=0,repeatType:f="loop",ease:y="easeOut",times:p
}

={

}

,m=void 0){
  const x={
  [i]:l
}

;
  p&&(x.offset=p);
  const b=Ky(y,u);
  Array.isArray(b)&&(x.easing=b);
  const S={
  delay:o,duration:u,easing:Array.isArray(b)?"linear":b,fill:"both",iterations:d+1,direction:f==="reverse"?"alternate":"normal"
}

;
  return m&&(S.pseudoElement=m),a.animate(x,S)
}

function Qy(a){
  return typeof a=="function"&&"applyToOptions"in a
}

function ab({
  type:a,...i
}

){
  return Qy(a)&&ky()?a.applyToOptions(i):(i.duration??(i.duration=300),i.ease??(i.ease="easeOut"),i)
}

class Zy extends sf{
  constructor(i){
  if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!i)return;
  const{
  element:l,name:o,keyframes:u,pseudoElement:d,allowFlatten:f=!1,finalKeyframe:y,onComplete:p
}

=i;
  this.isPseudoElement=!!d,this.allowFlatten=f,this.options=i,Ss(typeof i.type!="string");
  const m=ab(i);
  this.animation=nb(l,o,u,m,d),m.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{
  if(this.finishedTime=this.time,!d){
  const x=af(u,this.options,y,this.speed);
  this.updateMotionValue&&this.updateMotionValue(x),tb(l,o,x),this.animation.cancel()
}

p?.(),this.notifyFinished()
}

}

play(){
  this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())
}

pause(){
  this.animation.pause()
}

complete(){
  this.animation.finish?.()
}

cancel(){
  try{
  this.animation.cancel()
}

catch{

}

}

stop(){
  if(this.isStopped)return;
  this.isStopped=!0;
  const{
  state:i
}

=this;
  i==="idle"||i==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())
}

commitStyles(){
  const i=this.options?.element;
  !this.isPseudoElement&&i?.isConnected&&this.animation.commitStyles?.()
}

get duration(){
  const i=this.animation.effect?.getComputedTiming?.().duration||0;
  return Le(Number(i))
}

get iterationDuration(){
  const{
  delay:i=0
}

=this.options||{

}

;
  return this.duration+Le(i)
}

get time(){
  return Le(Number(this.animation.currentTime)||0)
}

set time(i){
  this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=Je(i)
}

get speed(){
  return this.animation.playbackRate
}

set speed(i){
  i<0&&(this.finishedTime=null),this.animation.playbackRate=i
}

get state(){
  return this.finishedTime!==null?"finished":this.animation.playState
}

get startTime(){
  return this.manualStartTime??Number(this.animation.startTime)
}

set startTime(i){
  this.manualStartTime=this.animation.startTime=i
}

attachTimeline({
  timeline:i,observe:l
}

){
  return this.allowFlatten&&this.animation.effect?.updateTiming({
  easing:"linear"
}

),this.animation.onfinish=null,i&&Xy()?(this.animation.timeline=i,ge):l(this)
}

}

const Jy={
  anticipate:Sy,backInOut:by,circInOut:Ay
}

;
  function ib(a){
  return a in Jy
}

function sb(a){
  typeof a.ease=="string"&&ib(a.ease)&&(a.ease=Jy[a.ease])
}

const tu=10;
  class lb extends Zy{
  constructor(i){
  sb(i),Ly(i),super(i),i.startTime!==void 0&&(this.startTime=i.startTime),this.options=i
}

updateMotionValue(i){
  const{
  motionValue:l,onUpdate:o,onComplete:u,element:d,...f
}

=this.options;
  if(!l)return;
  if(i!==void 0){
  l.set(i);
  return
}

const y=new lf({
  ...f,autoplay:!1
}

),p=Math.max(tu,oe.now()-this.startTime),m=We(0,tu,p-tu);
  l.setWithVelocity(y.sample(Math.max(0,p-m)).value,y.sample(p).value,m),y.stop()
}

}

const Z0=(a,i)=>i==="zIndex"?!1:!!(typeof a=="number"||Array.isArray(a)||typeof a=="string"&&(Fe.test(a)||a==="0")&&!a.startsWith("url("));
  function ob(a){
  const i=a[0];
  if(a.length===1)return!0;
  for(let l=0;
  l<a.length;
  l++)if(a[l]!==i)return!0
}

function rb(a,i,l,o){
  const u=a[0];
  if(u===null)return!1;
  if(i==="display"||i==="visibility")return!0;
  const d=a[a.length-1],f=Z0(u,i),y=Z0(d,i);
  return!f||!y?!1:ob(a)||(l==="spring"||Qy(l))&&o
}

function Cu(a){
  a.duration=0,a.type="keyframes"
}

const cb=new Set(["opacity","clipPath","filter","transform"]),ub=py(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));
  function fb(a){
  const{
  motionValue:i,name:l,repeatDelay:o,repeatType:u,damping:d,type:f
}

=a;
  if(!(i?.owner?.current instanceof HTMLElement))return!1;
  const{
  onUpdate:p,transformTemplate:m
}

=i.owner.getProps();
  return ub()&&l&&cb.has(l)&&(l!=="transform"||!m)&&!p&&!o&&u!=="mirror"&&d!==0&&f!=="inertia"
}

const db=40;
  class hb extends sf{
  constructor({
  autoplay:i=!0,delay:l=0,type:o="keyframes",repeat:u=0,repeatDelay:d=0,repeatType:f="loop",keyframes:y,name:p,motionValue:m,element:x,...b
}

){
  super(),this.stop=()=>{
  this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()
}

,this.createdAt=oe.now();
  const S={
  autoplay:i,delay:l,type:o,repeat:u,repeatDelay:d,repeatType:f,name:p,motionValue:m,element:x,...b
}

,N=x?.KeyframeResolver||of;
  this.keyframeResolver=new N(y,(z,U,X)=>this.onKeyframesResolved(z,U,S,!X),p,m,x),this.keyframeResolver?.scheduleResolve()
}

onKeyframesResolved(i,l,o,u){
  this.keyframeResolver=void 0;
  const{
  name:d,type:f,velocity:y,delay:p,isHandoff:m,onUpdate:x
}

=o;
  this.resolvedAt=oe.now(),rb(i,d,f,y)||((Tn.instantAnimations||!p)&&x?.(af(i,o,l)),i[0]=i[i.length-1],Cu(o),o.repeat=0);
  const S={
  startTime:u?this.resolvedAt?this.resolvedAt-this.createdAt>db?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:l,...o,keyframes:i
}

,N=!m&&fb(S),z=S.motionValue?.owner?.current,U=N?new lb({
  ...S,element:z
}

):new lf(S);
  U.finished.then(()=>{
  this.notifyFinished()
}

).catch(ge),this.pendingTimeline&&(this.stopTimeline=U.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=U
}

get finished(){
  return this._animation?this.animation.finished:this._finished
}

then(i,l){
  return this.finished.finally(i).then(()=>{

}

)
}

get animation(){
  return this._animation||(this.keyframeResolver?.resume(),$2()),this._animation
}

get duration(){
  return this.animation.duration
}

get iterationDuration(){
  return this.animation.iterationDuration
}

get time(){
  return this.animation.time
}

set time(i){
  this.animation.time=i
}

get speed(){
  return this.animation.speed
}

get state(){
  return this.animation.state
}

set speed(i){
  this.animation.speed=i
}

get startTime(){
  return this.animation.startTime
}

attachTimeline(i){
  return this._animation?this.stopTimeline=this.animation.attachTimeline(i):this.pendingTimeline=i,()=>this.stop()
}

play(){
  this.animation.play()
}

pause(){
  this.animation.pause()
}

complete(){
  this.animation.complete()
}

cancel(){
  this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()
}

}

function Fy(a,i,l,o=0,u=1){
  const d=Array.from(a).sort((m,x)=>m.sortNodePosition(x)).indexOf(i),f=a.size,y=(f-1)*o;
  return typeof l=="function"?l(d,f):u===1?d*o:y-d*o
}

const mb=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
  function pb(a){
  const i=mb.exec(a);
  if(!i)return[,];
  const[,l,o,u]=i;
  return[`--${
  l??o
}

`,u]
}

function Wy(a,i,l=1){
  const[o,u]=pb(a);
  if(!o)return;
  const d=window.getComputedStyle(i).getPropertyValue(o);
  if(d){
  const f=d.trim();
  return dy(f)?parseFloat(f):f
}

return Pu(u)?Wy(u,i,l+1):u
}

const yb={
  type:"spring",stiffness:500,damping:25,restSpeed:10
}

,gb=a=>({
  type:"spring",stiffness:550,damping:a===0?2*Math.sqrt(550):30,restSpeed:10
}

),vb={
  type:"keyframes",duration:.8
}

,xb={
  type:"keyframes",ease:[.25,.1,.35,1],duration:.3
}

,bb=(a,{
  keyframes:i
}

)=>i.length>2?vb:vi.has(a)?a.startsWith("scale")?gb(i[1]):yb:xb,Sb=a=>a!==null;
  function Tb(a,{
  repeat:i,repeatType:l="loop"
}

,o){
  const u=a.filter(Sb),d=i&&l!=="loop"&&i%2===1?0:u.length-1;
  return u[d]
}

function Py(a,i){
  if(a?.inherit&&i){
  const{
  inherit:l,...o
}

=a;
  return{
  ...i,...o
}

}

return a
}

function rf(a,i){
  const l=a?.[i]??a?.default??a;
  return l!==a?Py(l,a):l
}

function Ab({
  when:a,delay:i,delayChildren:l,staggerChildren:o,staggerDirection:u,repeat:d,repeatType:f,repeatDelay:y,from:p,elapsed:m,...x
}

){
  return!!Object.keys(x).length
}

const cf=(a,i,l,o={

}

,u,d)=>f=>{
  const y=rf(o,a)||{

}

,p=y.delay||o.delay||0;
  let{
  elapsed:m=0
}

=o;
  m=m-Je(p);
  const x={
  keyframes:Array.isArray(l)?l:[null,l],ease:"easeOut",velocity:i.getVelocity(),...y,delay:-m,onUpdate:S=>{
  i.set(S),y.onUpdate&&y.onUpdate(S)
}

,onComplete:()=>{
  f(),y.onComplete&&y.onComplete()
}

,name:a,motionValue:i,element:d?void 0:u
}

;
  Ab(y)||Object.assign(x,bb(a,x)),x.duration&&(x.duration=Je(x.duration)),x.repeatDelay&&(x.repeatDelay=Je(x.repeatDelay)),x.from!==void 0&&(x.keyframes[0]=x.from);
  let b=!1;
  if((x.type===!1||x.duration===0&&!x.repeatDelay)&&(Cu(x),x.delay===0&&(b=!0)),(Tn.instantAnimations||Tn.skipAnimations||u?.shouldSkipAnimations)&&(b=!0,Cu(x),x.delay=0),x.allowFlatten=!y.type&&!y.ease,b&&!d&&i.get()!==void 0){
  const S=Tb(x.keyframes,y);
  if(S!==void 0){
  bt.update(()=>{
  x.onUpdate(S),x.onComplete()
}

);
  return
}

}

return y.isSync?new lf(x):new hb(x)
}

;
  function J0(a){
  const i=[{

}

,{

}

];
  return a?.values.forEach((l,o)=>{
  i[0][o]=l.get(),i[1][o]=l.getVelocity()
}

),i
}

function uf(a,i,l,o){
  if(typeof i=="function"){
  const[u,d]=J0(o);
  i=i(l!==void 0?l:a.custom,u,d)
}

if(typeof i=="string"&&(i=a.variants&&a.variants[i]),typeof i=="function"){
  const[u,d]=J0(o);
  i=i(l!==void 0?l:a.custom,u,d)
}

return i
}

function mi(a,i,l){
  const o=a.getProps();
  return uf(o,i,l!==void 0?l:o.custom,a)
}

const $y=new Set(["width","height","top","left","right","bottom",...gi]),F0=30,wb=a=>!isNaN(parseFloat(a)),vs={
  current:void 0
}

;
  class Eb{
  constructor(i,l={

}

){
  this.canTrackVelocity=null,this.events={

}

,this.updateAndNotify=o=>{
  const u=oe.now();
  if(this.updatedAt!==u&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(o),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(const d of this.dependents)d.dirty()
}

,this.hasAnimated=!1,this.setCurrent(i),this.owner=l.owner
}

setCurrent(i){
  this.current=i,this.updatedAt=oe.now(),this.canTrackVelocity===null&&i!==void 0&&(this.canTrackVelocity=wb(this.current))
}

setPrevFrameValue(i=this.current){
  this.prevFrameValue=i,this.prevUpdatedAt=this.updatedAt
}

onChange(i){
  return this.on("change",i)
}

on(i,l){
  this.events[i]||(this.events[i]=new Zu);
  const o=this.events[i].add(l);
  return i==="change"?()=>{
  o(),bt.read(()=>{
  this.events.change.getSize()||this.stop()
}

)
}

:o
}

clearListeners(){
  for(const i in this.events)this.events[i].clear()
}

attach(i,l){
  this.passiveEffect=i,this.stopPassiveEffect=l
}

set(i){
  this.passiveEffect?this.passiveEffect(i,this.updateAndNotify):this.updateAndNotify(i)
}

setWithVelocity(i,l,o){
  this.set(l),this.prev=void 0,this.prevFrameValue=i,this.prevUpdatedAt=this.updatedAt-o
}

jump(i,l=!0){
  this.updateAndNotify(i),this.prev=i,this.prevUpdatedAt=this.prevFrameValue=void 0,l&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()
}

dirty(){
  this.events.change?.notify(this.current)
}

addDependent(i){
  this.dependents||(this.dependents=new Set),this.dependents.add(i)
}

removeDependent(i){
  this.dependents&&this.dependents.delete(i)
}

get(){
  return vs.current&&vs.current.push(this),this.current
}

getPrevious(){
  return this.prev
}

getVelocity(){
  const i=oe.now();
  if(!this.canTrackVelocity||this.prevFrameValue===void 0||i-this.updatedAt>F0)return 0;
  const l=Math.min(this.updatedAt-this.prevUpdatedAt,F0);
  return Ju(parseFloat(this.current)-parseFloat(this.prevFrameValue),l)
}

start(i){
  return this.stop(),new Promise(l=>{
  this.hasAnimated=!0,this.animation=i(l),this.events.animationStart&&this.events.animationStart.notify()
}

).then(()=>{
  this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()
}

)
}

stop(){
  this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()
}

isAnimating(){
  return!!this.animation
}

clearAnimation(){
  delete this.animation
}

destroy(){
  this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()
}

}

function Ze(a,i){
  return new Eb(a,i)
}

const ju=a=>Array.isArray(a);
  function Nb(a,i,l){
  a.hasValue(i)?a.getValue(i).set(l):a.addValue(i,Ze(l))
}

function Mb(a){
  return ju(a)?a[a.length-1]||0:a
}

function Cb(a,i){
  const l=mi(a,i);
  let{
  transitionEnd:o={

}

,transition:u={

}

,...d
}

=l||{

}

;
  d={
  ...d,...o
}

;
  for(const f in d){
  const y=Mb(d[f]);
  Nb(a,f,y)
}

}

const ie=a=>!!(a&&a.getVelocity);
  function jb(a){
  return!!(ie(a)&&a.add)
}

function Du(a,i){
  const l=a.getValue("willChange");
  if(jb(l))return l.add(i);
  if(!l&&Tn.WillChange){
  const o=new Tn.WillChange("auto");
  a.addValue("willChange",o),o.add(i)
}

}

function ff(a){
  return a.replace(/([A-Z])/g,i=>`-${
  i.toLowerCase()
}

`)
}

const Db="framerAppearId",Iy="data-"+ff(Db);
  function tg(a){
  return a.props[Iy]
}

function zb({
  protectedKeys:a,needsAnimating:i
}

,l){
  const o=a.hasOwnProperty(l)&&i[l]!==!0;
  return i[l]=!1,o
}

function eg(a,i,{
  delay:l=0,transitionOverride:o,type:u
}

={

}

){
  let{
  transition:d,transitionEnd:f,...y
}

=i;
  const p=a.getDefaultTransition();
  d=d?Py(d,p):p;
  const m=d?.reduceMotion;
  o&&(d=o);
  const x=[],b=u&&a.animationState&&a.animationState.getState()[u];
  for(const S in y){
  const N=a.getValue(S,a.latestValues[S]??null),z=y[S];
  if(z===void 0||b&&zb(b,S))continue;
  const U={
  delay:l,...rf(d||{

}

,S)
}

,X=N.get();
  if(X!==void 0&&!N.isAnimating&&!Array.isArray(z)&&z===X&&!U.velocity)continue;
  let L=!1;
  if(window.MotionHandoffAnimation){
  const k=tg(a);
  if(k){
  const Z=window.MotionHandoffAnimation(k,S,bt);
  Z!==null&&(U.startTime=Z,L=!0)
}

}

Du(a,S);
  const Y=m??a.shouldReduceMotion;
  N.start(cf(S,N,z,Y&&$y.has(S)?{
  type:!1
}

:U,a,L));
  const q=N.animation;
  q&&x.push(q)
}

if(f){
  const S=()=>bt.update(()=>{
  f&&Cb(a,f)
}

);
  x.length?Promise.all(x).then(S):S()
}

return x
}

function zu(a,i,l={

}

){
  const o=mi(a,i,l.type==="exit"?a.presenceContext?.custom:void 0);
  let{
  transition:u=a.getDefaultTransition()||{

}

}

=o||{

}

;
  l.transitionOverride&&(u=l.transitionOverride);
  const d=o?()=>Promise.all(eg(a,o,l)):()=>Promise.resolve(),f=a.variantChildren&&a.variantChildren.size?(p=0)=>{
  const{
  delayChildren:m=0,staggerChildren:x,staggerDirection:b
}

=u;
  return Rb(a,i,p,m,x,b,l)
}

:()=>Promise.resolve(),{
  when:y
}

=u;
  if(y){
  const[p,m]=y==="beforeChildren"?[d,f]:[f,d];
  return p().then(()=>m())
}

else return Promise.all([d(),f(l.delay)])
}

function Rb(a,i,l=0,o=0,u=0,d=1,f){
  const y=[];
  for(const p of a.variantChildren)p.notify("AnimationStart",i),y.push(zu(p,i,{
  ...f,delay:l+(typeof o=="function"?0:o)+Fy(a.variantChildren,p,o,u,d)
}

).then(()=>p.notify("AnimationComplete",i)));
  return Promise.all(y)
}

function Ob(a,i,l={

}

){
  a.notify("AnimationStart",i);
  let o;
  if(Array.isArray(i)){
  const u=i.map(d=>zu(a,d,l));
  o=Promise.all(u)
}

else if(typeof i=="string")o=zu(a,i,l);
  else{
  const u=typeof i=="function"?mi(a,i,l.custom):i;
  o=Promise.all(eg(a,u,l))
}

return o.then(()=>{
  a.notify("AnimationComplete",i)
}

)
}

const Vb={
  test:a=>a==="auto",parse:a=>a
}

,ng=a=>i=>i.test(a),ag=[yi,W,nn,Jn,d2,f2,Vb],W0=a=>ag.find(ng(a));
  function _b(a){
  return typeof a=="number"?a===0:a!==null?a==="none"||a==="0"||my(a):!0
}

const Bb=new Set(["brightness","contrast","saturate","opacity"]);
  function Hb(a){
  const[i,l]=a.slice(0,-1).split("(");
  if(i==="drop-shadow")return a;
  const[o]=l.match($u)||[];
  if(!o)return a;
  const u=l.replace(o,"");
  let d=Bb.has(i)?1:0;
  return o!==l&&(d*=100),i+"("+d+u+")"
}

const Ub=/\b([a-z-]*)\(.*?\)/gu,Ru={
  ...Fe,getAnimatableNone:a=>{
  const i=a.match(Ub);
  return i?i.map(Hb).join(" "):a
}

}

,Ou={
  ...Fe,getAnimatableNone:a=>{
  const i=Fe.parse(a);
  return Fe.createTransformer(a)(i.map(o=>typeof o=="number"?0:typeof o=="object"?{
  ...o,alpha:1
}

:o))
}

}

,P0={
  ...yi,transform:Math.round
}

,Lb={
  rotate:Jn,rotateX:Jn,rotateY:Jn,rotateZ:Jn,scale:Fl,scaleX:Fl,scaleY:Fl,scaleZ:Fl,skew:Jn,skewX:Jn,skewY:Jn,distance:W,translateX:W,translateY:W,translateZ:W,x:W,y:W,z:W,perspective:W,transformPerspective:W,opacity:Ts,originX:H0,originY:H0,originZ:W
}

,df={
  borderWidth:W,borderTopWidth:W,borderRightWidth:W,borderBottomWidth:W,borderLeftWidth:W,borderRadius:W,borderTopLeftRadius:W,borderTopRightRadius:W,borderBottomRightRadius:W,borderBottomLeftRadius:W,width:W,maxWidth:W,height:W,maxHeight:W,top:W,right:W,bottom:W,left:W,inset:W,insetBlock:W,insetBlockStart:W,insetBlockEnd:W,insetInline:W,insetInlineStart:W,insetInlineEnd:W,padding:W,paddingTop:W,paddingRight:W,paddingBottom:W,paddingLeft:W,paddingBlock:W,paddingBlockStart:W,paddingBlockEnd:W,paddingInline:W,paddingInlineStart:W,paddingInlineEnd:W,margin:W,marginTop:W,marginRight:W,marginBottom:W,marginLeft:W,marginBlock:W,marginBlockStart:W,marginBlockEnd:W,marginInline:W,marginInlineStart:W,marginInlineEnd:W,fontSize:W,backgroundPositionX:W,backgroundPositionY:W,...Lb,zIndex:P0,fillOpacity:Ts,strokeOpacity:Ts,numOctaves:P0
}

,Gb={
  ...df,color:Kt,backgroundColor:Kt,outlineColor:Kt,fill:Kt,stroke:Kt,borderColor:Kt,borderTopColor:Kt,borderRightColor:Kt,borderBottomColor:Kt,borderLeftColor:Kt,filter:Ru,WebkitFilter:Ru,mask:Ou,WebkitMask:Ou
}

,ig=a=>Gb[a],qb=new Set([Ru,Ou]);
  function sg(a,i){
  let l=ig(a);
  return qb.has(l)||(l=Fe),l.getAnimatableNone?l.getAnimatableNone(i):void 0
}

const Yb=new Set(["auto","none","0"]);
  function Xb(a,i,l){
  let o=0,u;
  for(;
  o<a.length&&!u;
  ){
  const d=a[o];
  typeof d=="string"&&!Yb.has(d)&&As(d).values.length&&(u=a[o]),o++
}

if(u&&l)for(const d of i)a[d]=sg(l,u)
}

class kb extends of{
  constructor(i,l,o,u,d){
  super(i,l,o,u,d,!0)
}

readKeyframes(){
  const{
  unresolvedKeyframes:i,element:l,name:o
}

=this;
  if(!l||!l.current)return;
  super.readKeyframes();
  for(let x=0;
  x<i.length;
  x++){
  let b=i[x];
  if(typeof b=="string"&&(b=b.trim(),Pu(b))){
  const S=Wy(b,l.current);
  S!==void 0&&(i[x]=S),x===i.length-1&&(this.finalKeyframe=b)
}

}

if(this.resolveNoneKeyframes(),!$y.has(o)||i.length!==2)return;
  const[u,d]=i,f=W0(u),y=W0(d),p=B0(u),m=B0(d);
  if(p!==m&&Fn[o]){
  this.needsMeasurement=!0;
  return
}

if(f!==y)if(K0(f)&&K0(y))for(let x=0;
  x<i.length;
  x++){
  const b=i[x];
  typeof b=="string"&&(i[x]=parseFloat(b))
}

else Fn[o]&&(this.needsMeasurement=!0)
}

resolveNoneKeyframes(){
  const{
  unresolvedKeyframes:i,name:l
}

=this,o=[];
  for(let u=0;
  u<i.length;
  u++)(i[u]===null||_b(i[u]))&&o.push(u);
  o.length&&Xb(i,o,l)
}

measureInitialState(){
  const{
  element:i,unresolvedKeyframes:l,name:o
}

=this;
  if(!i||!i.current)return;
  o==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Fn[o](i.measureViewportBox(),window.getComputedStyle(i.current)),l[0]=this.measuredOrigin;
  const u=l[l.length-1];
  u!==void 0&&i.getValue(o,u).jump(u,!1)
}

measureEndState(){
  const{
  element:i,name:l,unresolvedKeyframes:o
}

=this;
  if(!i||!i.current)return;
  const u=i.getValue(l);
  u&&u.jump(this.measuredOrigin,!1);
  const d=o.length-1,f=o[d];
  o[d]=Fn[l](i.measureViewportBox(),window.getComputedStyle(i.current)),f!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=f),this.removedTransforms?.length&&this.removedTransforms.forEach(([y,p])=>{
  i.getValue(y).set(p)
}

),this.resolveNoneKeyframes()
}

}

const Kb=new Set(["opacity","clipPath","filter","transform"]);
  function lg(a,i,l){
  if(a==null)return[];
  if(a instanceof EventTarget)return[a];
  if(typeof a=="string"){
  const u=document.querySelectorAll(a);
  return u?Array.from(u):[]
}

return Array.from(a).filter(o=>o!=null)
}

const og=(a,i)=>i&&typeof a=="number"?i.transform(a):a;
  function ho(a){
  return hy(a)&&"offsetHeight"in a
}

const{
  schedule:hf
}

=Ny(queueMicrotask,!1),Qe={
  x:!1,y:!1
}

;
  function rg(){
  return Qe.x||Qe.y
}

function Qb(a){
  return a==="x"||a==="y"?Qe[a]?null:(Qe[a]=!0,()=>{
  Qe[a]=!1
}

):Qe.x||Qe.y?null:(Qe.x=Qe.y=!0,()=>{
  Qe.x=Qe.y=!1
}

)
}

function cg(a,i){
  const l=lg(a),o=new AbortController,u={
  passive:!0,...i,signal:o.signal
}

;
  return[l,u,()=>o.abort()]
}

function Zb(a){
  return!(a.pointerType==="touch"||rg())
}

function Jb(a,i,l={

}

){
  const[o,u,d]=cg(a,l);
  return o.forEach(f=>{
  let y=!1,p=!1,m;
  const x=()=>{
  f.removeEventListener("pointerleave",z)
}

,b=X=>{
  m&&(m(X),m=void 0),x()
}

,S=X=>{
  y=!1,window.removeEventListener("pointerup",S),window.removeEventListener("pointercancel",S),p&&(p=!1,b(X))
}

,N=()=>{
  y=!0,window.addEventListener("pointerup",S,u),window.addEventListener("pointercancel",S,u)
}

,z=X=>{
  if(X.pointerType!=="touch"){
  if(y){
  p=!0;
  return
}

b(X)
}

}

,U=X=>{
  if(!Zb(X))return;
  p=!1;
  const L=i(f,X);
  typeof L=="function"&&(m=L,f.addEventListener("pointerleave",z,u))
}

;
  f.addEventListener("pointerenter",U,u),f.addEventListener("pointerdown",N,u)
}

),d
}

const ug=(a,i)=>i?a===i?!0:ug(a,i.parentElement):!1,mf=a=>a.pointerType==="mouse"?typeof a.button!="number"||a.button<=0:a.isPrimary!==!1,Fb=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);
  function Wb(a){
  return Fb.has(a.tagName)||a.isContentEditable===!0
}

const Pb=new Set(["INPUT","SELECT","TEXTAREA"]);
  function $b(a){
  return Pb.has(a.tagName)||a.isContentEditable===!0
}

const eo=new WeakSet;
  function $0(a){
  return i=>{
  i.key==="Enter"&&a(i)
}

}

function eu(a,i){
  a.dispatchEvent(new PointerEvent("pointer"+i,{
  isPrimary:!0,bubbles:!0
}

))
}

const Ib=(a,i)=>{
  const l=a.currentTarget;
  if(!l)return;
  const o=$0(()=>{
  if(eo.has(l))return;
  eu(l,"down");
  const u=$0(()=>{
  eu(l,"up")
}

),d=()=>eu(l,"cancel");
  l.addEventListener("keyup",u,i),l.addEventListener("blur",d,i)
}

);
  l.addEventListener("keydown",o,i),l.addEventListener("blur",()=>l.removeEventListener("keydown",o),i)
}

;
  function I0(a){
  return mf(a)&&!rg()
}

const tp=new WeakSet;
  function tS(a,i,l={

}

){
  const[o,u,d]=cg(a,l),f=y=>{
  const p=y.currentTarget;
  if(!I0(y)||tp.has(y))return;
  eo.add(p),l.stopPropagation&&tp.add(y);
  const m=i(p,y),x=(N,z)=>{
  window.removeEventListener("pointerup",b),window.removeEventListener("pointercancel",S),eo.has(p)&&eo.delete(p),I0(N)&&typeof m=="function"&&m(N,{
  success:z
}

)
}

,b=N=>{
  x(N,p===window||p===document||l.useGlobalTarget||ug(p,N.target))
}

,S=N=>{
  x(N,!1)
}

;
  window.addEventListener("pointerup",b,u),window.addEventListener("pointercancel",S,u)
}

;
  return o.forEach(y=>{
  (l.useGlobalTarget?window:y).addEventListener("pointerdown",f,u),ho(y)&&(y.addEventListener("focus",m=>Ib(m,u)),!Wb(y)&&!y.hasAttribute("tabindex")&&(y.tabIndex=0))
}

),d
}

function pf(a){
  return hy(a)&&"ownerSVGElement"in a
}

const no=new WeakMap;
  let ao;
  const fg=(a,i,l)=>(o,u)=>u&&u[0]?u[0][a+"Size"]:pf(o)&&"getBBox"in o?o.getBBox()[i]:o[l],eS=fg("inline","width","offsetWidth"),nS=fg("block","height","offsetHeight");
  function aS({
  target:a,borderBoxSize:i
}

){
  no.get(a)?.forEach(l=>{
  l(a,{
  get width(){
  return eS(a,i)
}

,get height(){
  return nS(a,i)
}

}

)
}

)
}

function iS(a){
  a.forEach(aS)
}

function sS(){
  typeof ResizeObserver>"u"||(ao=new ResizeObserver(iS))
}

function lS(a,i){
  ao||sS();
  const l=lg(a);
  return l.forEach(o=>{
  let u=no.get(o);
  u||(u=new Set,no.set(o,u)),u.add(i),ao?.observe(o)
}

),()=>{
  l.forEach(o=>{
  const u=no.get(o);
  u?.delete(i),u?.size||ao?.unobserve(o)
}

)
}

}

const io=new Set;
  let ui;
  function oS(){
  ui=()=>{
  const a={
  get width(){
  return window.innerWidth
}

,get height(){
  return window.innerHeight
}

}

;
  io.forEach(i=>i(a))
}

,window.addEventListener("resize",ui)
}

function rS(a){
  return io.add(a),ui||oS(),()=>{
  io.delete(a),!io.size&&typeof ui=="function"&&(window.removeEventListener("resize",ui),ui=void 0)
}

}

function Vu(a,i){
  return typeof a=="function"?rS(a):lS(a,i)
}

function dg(a,i){
  let l;
  const o=()=>{
  const{
  currentTime:u
}

=i,f=(u===null?0:u.value)/100;
  l!==f&&a(f),l=f
}

;
  return bt.preUpdate(o,!0),()=>Ge(o)
}

function cS(a){
  return pf(a)&&a.tagName==="svg"
}

function uS(...a){
  const i=!Array.isArray(a[0]),l=i?0:-1,o=a[0+l],u=a[1+l],d=a[2+l],f=a[3+l],y=nf(u,d,f);
  return i?y(o):y
}

const fS=[...ag,Kt,Fe],dS=a=>fS.find(ng(a)),ep=()=>({
  translate:0,scale:1,origin:0,originPoint:0
}

),fi=()=>({
  x:ep(),y:ep()
}

),np=()=>({
  min:0,max:0
}

),Zt=()=>({
  x:np(),y:np()
}

),hS=new WeakMap;
  function So(a){
  return a!==null&&typeof a=="object"&&typeof a.start=="function"
}

function ws(a){
  return typeof a=="string"||Array.isArray(a)
}

const yf=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],gf=["initial",...yf];
  function To(a){
  return So(a.animate)||gf.some(i=>ws(a[i]))
}

function hg(a){
  return!!(To(a)||a.variants)
}

function mS(a,i,l){
  for(const o in i){
  const u=i[o],d=l[o];
  if(ie(u))a.addValue(o,u);
  else if(ie(d))a.addValue(o,Ze(u,{
  owner:a
}

));
  else if(d!==u)if(a.hasValue(o)){
  const f=a.getValue(o);
  f.liveStyle===!0?f.jump(u):f.hasAnimated||f.set(u)
}

else{
  const f=a.getStaticValue(o);
  a.addValue(o,Ze(f!==void 0?f:u,{
  owner:a
}

))
}

}

for(const o in l)i[o]===void 0&&a.removeValue(o);
  return i
}

const _u={
  current:null
}

,mg={
  current:!1
}

,pS=typeof window<"u";
  function yS(){
  if(mg.current=!0,!!pS)if(window.matchMedia){
  const a=window.matchMedia("(prefers-reduced-motion)"),i=()=>_u.current=a.matches;
  a.addEventListener("change",i),i()
}

else _u.current=!1
}

const ap=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];
  let mo={

}

;
  function pg(a){
  mo=a
}

function gS(){
  return mo
}

class vS{
  scrapeMotionValuesFromProps(i,l,o){
  return{

}

}

constructor({
  parent:i,props:l,presenceContext:o,reducedMotionConfig:u,skipAnimations:d,blockInitialAnimation:f,visualState:y
}

,p={

}

){
  this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=of,this.features={

}

,this.valueSubscriptions=new Map,this.prevMotionValues={

}

,this.hasBeenMounted=!1,this.events={

}

,this.propEventSubscriptions={

}

,this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{
  this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))
}

,this.renderScheduledAt=0,this.scheduleRender=()=>{
  const N=oe.now();
  this.renderScheduledAt<N&&(this.renderScheduledAt=N,bt.render(this.render,!1,!0))
}

;
  const{
  latestValues:m,renderState:x
}

=y;
  this.latestValues=m,this.baseTarget={
  ...m
}

,this.initialValues=l.initial?{
  ...m
}

:{

}

,this.renderState=x,this.parent=i,this.props=l,this.presenceContext=o,this.depth=i?i.depth+1:0,this.reducedMotionConfig=u,this.skipAnimationsConfig=d,this.options=p,this.blockInitialAnimation=!!f,this.isControllingVariants=To(l),this.isVariantNode=hg(l),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(i&&i.current);
  const{
  willChange:b,...S
}

=this.scrapeMotionValuesFromProps(l,{

}

,this);
  for(const N in S){
  const z=S[N];
  m[N]!==void 0&&ie(z)&&z.set(m[N])
}

}

mount(i){
  if(this.hasBeenMounted)for(const l in this.initialValues)this.values.get(l)?.jump(this.initialValues[l]),this.latestValues[l]=this.initialValues[l];
  this.current=i,hS.set(i,this),this.projection&&!this.projection.instance&&this.projection.mount(i),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((l,o)=>this.bindToMotionValue(o,l)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(mg.current||yS(),this.shouldReduceMotion=_u.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,this.parent?.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0
}

unmount(){
  this.projection&&this.projection.unmount(),Ge(this.notifyUpdate),Ge(this.render),this.valueSubscriptions.forEach(i=>i()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this);
  for(const i in this.events)this.events[i].clear();
  for(const i in this.features){
  const l=this.features[i];
  l&&(l.unmount(),l.isMounted=!1)
}

this.current=null
}

addChild(i){
  this.children.add(i),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(i)
}

removeChild(i){
  this.children.delete(i),this.enteringChildren&&this.enteringChildren.delete(i)
}

bindToMotionValue(i,l){
  if(this.valueSubscriptions.has(i)&&this.valueSubscriptions.get(i)(),l.accelerate&&Kb.has(i)&&this.current instanceof HTMLElement){
  const{
  factory:f,keyframes:y,times:p,ease:m,duration:x
}

=l.accelerate,b=new Zy({
  element:this.current,name:i,keyframes:y,times:p,ease:m,duration:Je(x)
}

),S=f(b);
  this.valueSubscriptions.set(i,()=>{
  S(),b.cancel()
}

);
  return
}

const o=vi.has(i);
  o&&this.onBindTransform&&this.onBindTransform();
  const u=l.on("change",f=>{
  this.latestValues[i]=f,this.props.onUpdate&&bt.preRender(this.notifyUpdate),o&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()
}

);
  let d;
  typeof window<"u"&&window.MotionCheckAppearSync&&(d=window.MotionCheckAppearSync(this,i,l)),this.valueSubscriptions.set(i,()=>{
  u(),d&&d(),l.owner&&l.stop()
}

)
}

sortNodePosition(i){
  return!this.current||!this.sortInstanceNodePosition||this.type!==i.type?0:this.sortInstanceNodePosition(this.current,i.current)
}

updateFeatures(){
  let i="animation";
  for(i in mo){
  const l=mo[i];
  if(!l)continue;
  const{
  isEnabled:o,Feature:u
}

=l;
  if(!this.features[i]&&u&&o(this.props)&&(this.features[i]=new u(this)),this.features[i]){
  const d=this.features[i];
  d.isMounted?d.update():(d.mount(),d.isMounted=!0)
}

}

}

triggerBuild(){
  this.build(this.renderState,this.latestValues,this.props)
}

measureViewportBox(){
  return this.current?this.measureInstanceViewportBox(this.current,this.props):Zt()
}

getStaticValue(i){
  return this.latestValues[i]
}

setStaticValue(i,l){
  this.latestValues[i]=l
}

update(i,l){
  (i.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=i,this.prevPresenceContext=this.presenceContext,this.presenceContext=l;
  for(let o=0;
  o<ap.length;
  o++){
  const u=ap[o];
  this.propEventSubscriptions[u]&&(this.propEventSubscriptions[u](),delete this.propEventSubscriptions[u]);
  const d="on"+u,f=i[d];
  f&&(this.propEventSubscriptions[u]=this.on(u,f))
}

this.prevMotionValues=mS(this,this.scrapeMotionValuesFromProps(i,this.prevProps||{

}

,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()
}

getProps(){
  return this.props
}

getVariant(i){
  return this.props.variants?this.props.variants[i]:void 0
}

getDefaultTransition(){
  return this.props.transition
}

getTransformPagePoint(){
  return this.props.transformPagePoint
}

getClosestVariantNode(){
  return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0
}

addVariantChild(i){
  const l=this.getClosestVariantNode();
  if(l)return l.variantChildren&&l.variantChildren.add(i),()=>l.variantChildren.delete(i)
}

addValue(i,l){
  const o=this.values.get(i);
  l!==o&&(o&&this.removeValue(i),this.bindToMotionValue(i,l),this.values.set(i,l),this.latestValues[i]=l.get())
}

removeValue(i){
  this.values.delete(i);
  const l=this.valueSubscriptions.get(i);
  l&&(l(),this.valueSubscriptions.delete(i)),delete this.latestValues[i],this.removeValueFromRenderState(i,this.renderState)
}

hasValue(i){
  return this.values.has(i)
}

getValue(i,l){
  if(this.props.values&&this.props.values[i])return this.props.values[i];
  let o=this.values.get(i);
  return o===void 0&&l!==void 0&&(o=Ze(l===null?void 0:l,{
  owner:this
}

),this.addValue(i,o)),o
}

readValue(i,l){
  let o=this.latestValues[i]!==void 0||!this.current?this.latestValues[i]:this.getBaseTargetFromProps(this.props,i)??this.readValueFromInstance(this.current,i,this.options);
  return o!=null&&(typeof o=="string"&&(dy(o)||my(o))?o=parseFloat(o):!dS(o)&&Fe.test(l)&&(o=sg(i,l)),this.setBaseTarget(i,ie(o)?o.get():o)),ie(o)?o.get():o
}

setBaseTarget(i,l){
  this.baseTarget[i]=l
}

getBaseTarget(i){
  const{
  initial:l
}

=this.props;
  let o;
  if(typeof l=="string"||typeof l=="object"){
  const d=uf(this.props,l,this.presenceContext?.custom);
  d&&(o=d[i])
}

if(l&&o!==void 0)return o;
  const u=this.getBaseTargetFromProps(this.props,i);
  return u!==void 0&&!ie(u)?u:this.initialValues[i]!==void 0&&o===void 0?void 0:this.baseTarget[i]
}

on(i,l){
  return this.events[i]||(this.events[i]=new Zu),this.events[i].add(l)
}

notify(i,...l){
  this.events[i]&&this.events[i].notify(...l)
}

scheduleRenderMicrotask(){
  hf.render(this.render)
}

}

class yg extends vS{
  constructor(){
  super(...arguments),this.KeyframeResolver=kb
}

sortInstanceNodePosition(i,l){
  return i.compareDocumentPosition(l)&2?1:-1
}

getBaseTargetFromProps(i,l){
  const o=i.style;
  return o?o[l]:void 0
}

removeValueFromRenderState(i,{
  vars:l,style:o
}

){
  delete l[i],delete o[i]
}

handleChildMotionValue(){
  this.childSubscription&&(this.childSubscription(),delete this.childSubscription);
  const{
  children:i
}

=this.props;
  ie(i)&&(this.childSubscription=i.on("change",l=>{
  this.current&&(this.current.textContent=`${
  l
}

`)
}

))
}

}

class Pn{
  constructor(i){
  this.isMounted=!1,this.node=i
}

update(){

}

}

function gg({
  top:a,left:i,right:l,bottom:o
}

){
  return{
  x:{
  min:i,max:l
}

,y:{
  min:a,max:o
}

}

}

function xS({
  x:a,y:i
}

){
  return{
  top:i.min,right:a.max,bottom:i.max,left:a.min
}

}

function bS(a,i){
  if(!i)return a;
  const l=i({
  x:a.left,y:a.top
}

),o=i({
  x:a.right,y:a.bottom
}

);
  return{
  top:l.y,left:l.x,bottom:o.y,right:o.x
}

}

function nu(a){
  return a===void 0||a===1
}

function Bu({
  scale:a,scaleX:i,scaleY:l
}

){
  return!nu(a)||!nu(i)||!nu(l)
}

function va(a){
  return Bu(a)||vg(a)||a.z||a.rotate||a.rotateX||a.rotateY||a.skewX||a.skewY
}

function vg(a){
  return ip(a.x)||ip(a.y)
}

function ip(a){
  return a&&a!=="0%"
}

function po(a,i,l){
  const o=a-l,u=i*o;
  return l+u
}

function sp(a,i,l,o,u){
  return u!==void 0&&(a=po(a,u,o)),po(a,l,o)+i
}

function Hu(a,i=0,l=1,o,u){
  a.min=sp(a.min,i,l,o,u),a.max=sp(a.max,i,l,o,u)
}

function xg(a,{
  x:i,y:l
}

){
  Hu(a.x,i.translate,i.scale,i.originPoint),Hu(a.y,l.translate,l.scale,l.originPoint)
}

const lp=.999999999999,op=1.0000000000001;
  function SS(a,i,l,o=!1){
  const u=l.length;
  if(!u)return;
  i.x=i.y=1;
  let d,f;
  for(let y=0;
  y<u;
  y++){
  d=l[y],f=d.projectionDelta;
  const{
  visualElement:p
}

=d.options;
  p&&p.props.style&&p.props.style.display==="contents"||(o&&d.options.layoutScroll&&d.scroll&&d!==d.root&&hi(a,{
  x:-d.scroll.offset.x,y:-d.scroll.offset.y
}

),f&&(i.x*=f.x.scale,i.y*=f.y.scale,xg(a,f)),o&&va(d.latestValues)&&hi(a,d.latestValues))
}

i.x<op&&i.x>lp&&(i.x=1),i.y<op&&i.y>lp&&(i.y=1)
}

function di(a,i){
  a.min=a.min+i,a.max=a.max+i
}

function rp(a,i,l,o,u=.5){
  const d=Vt(a.min,a.max,u);
  Hu(a,i,l,d,o)
}

function hi(a,i){
  rp(a.x,i.x,i.scaleX,i.scale,i.originX),rp(a.y,i.y,i.scaleY,i.scale,i.originY)
}

function bg(a,i){
  return gg(bS(a.getBoundingClientRect(),i))
}

function TS(a,i,l){
  const o=bg(a,l),{
  scroll:u
}

=i;
  return u&&(di(o.x,u.offset.x),di(o.y,u.offset.y)),o
}

const AS={
  x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"
}

,wS=gi.length;
  function ES(a,i,l){
  let o="",u=!0;
  for(let d=0;
  d<wS;
  d++){
  const f=gi[d],y=a[f];
  if(y===void 0)continue;
  let p=!0;
  if(typeof y=="number")p=y===(f.startsWith("scale")?1:0);
  else{
  const m=parseFloat(y);
  p=f.startsWith("scale")?m===1:m===0
}

if(!p||l){
  const m=og(y,df[f]);
  if(!p){
  u=!1;
  const x=AS[f]||f;
  o+=`${
  x
}

(${
  m
}

) `
}

l&&(i[f]=m)
}

}

return o=o.trim(),l?o=l(i,u?"":o):u&&(o="none"),o
}

function vf(a,i,l){
  const{
  style:o,vars:u,transformOrigin:d
}

=a;
  let f=!1,y=!1;
  for(const p in i){
  const m=i[p];
  if(vi.has(p)){
  f=!0;
  continue
}

else if(Cy(p)){
  u[p]=m;
  continue
}

else{
  const x=og(m,df[p]);
  p.startsWith("origin")?(y=!0,d[p]=x):o[p]=x
}

}

if(i.transform||(f||l?o.transform=ES(i,a.transform,l):o.transform&&(o.transform="none")),y){
  const{
  originX:p="50%",originY:m="50%",originZ:x=0
}

=d;
  o.transformOrigin=`${
  p
}

 ${
  m
}

 ${
  x
}

`
}

}

function Sg(a,{
  style:i,vars:l
}

,o,u){
  const d=a.style;
  let f;
  for(f in i)d[f]=i[f];
  u?.applyProjectionStyles(d,o);
  for(f in l)d.setProperty(f,l[f])
}

function cp(a,i){
  return i.max===i.min?0:a/(i.max-i.min)*100
}

const ms={
  correct:(a,i)=>{
  if(!i.target)return a;
  if(typeof a=="string")if(W.test(a))a=parseFloat(a);
  else return a;
  const l=cp(a,i.target.x),o=cp(a,i.target.y);
  return`${
  l
}

% ${
  o
}

%`
}

}

,NS={
  correct:(a,{
  treeScale:i,projectionDelta:l
}

)=>{
  const o=a,u=Fe.parse(a);
  if(u.length>5)return o;
  const d=Fe.createTransformer(a),f=typeof u[0]!="number"?1:0,y=l.x.scale*i.x,p=l.y.scale*i.y;
  u[0+f]/=y,u[1+f]/=p;
  const m=Vt(y,p,.5);
  return typeof u[2+f]=="number"&&(u[2+f]/=m),typeof u[3+f]=="number"&&(u[3+f]/=m),d(u)
}

}

,Uu={
  borderRadius:{
  ...ms,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]
}

,borderTopLeftRadius:ms,borderTopRightRadius:ms,borderBottomLeftRadius:ms,borderBottomRightRadius:ms,boxShadow:NS
}

;
  function Tg(a,{
  layout:i,layoutId:l
}

){
  return vi.has(a)||a.startsWith("origin")||(i||l!==void 0)&&(!!Uu[a]||a==="opacity")
}

function xf(a,i,l){
  const o=a.style,u=i?.style,d={

}

;
  if(!o)return d;
  for(const f in o)(ie(o[f])||u&&ie(u[f])||Tg(f,a)||l?.getValue(f)?.liveStyle!==void 0)&&(d[f]=o[f]);
  return d
}

function MS(a){
  return window.getComputedStyle(a)
}

class CS extends yg{
  constructor(){
  super(...arguments),this.type="html",this.renderInstance=Sg
}

readValueFromInstance(i,l){
  if(vi.has(l))return this.projection?.isProjecting?Au(l):Z2(i,l);
  {
  const o=MS(i),u=(Cy(l)?o.getPropertyValue(l):o[l])||0;
  return typeof u=="string"?u.trim():u
}

}

measureInstanceViewportBox(i,{
  transformPagePoint:l
}

){
  return bg(i,l)
}

build(i,l,o){
  vf(i,l,o.transformTemplate)
}

scrapeMotionValuesFromProps(i,l,o){
  return xf(i,l,o)
}

}

const jS={
  offset:"stroke-dashoffset",array:"stroke-dasharray"
}

,DS={
  offset:"strokeDashoffset",array:"strokeDasharray"
}

;
  function zS(a,i,l=1,o=0,u=!0){
  a.pathLength=1;
  const d=u?jS:DS;
  a[d.offset]=`${
  -o
}

`,a[d.array]=`${
  i
}

 ${
  l
}

`
}

const RS=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];
  function Ag(a,{
  attrX:i,attrY:l,attrScale:o,pathLength:u,pathSpacing:d=1,pathOffset:f=0,...y
}

,p,m,x){
  if(vf(a,y,m),p){
  a.style.viewBox&&(a.attrs.viewBox=a.style.viewBox);
  return
}

a.attrs=a.style,a.style={

}

;
  const{
  attrs:b,style:S
}

=a;
  b.transform&&(S.transform=b.transform,delete b.transform),(S.transform||b.transformOrigin)&&(S.transformOrigin=b.transformOrigin??"50% 50%",delete b.transformOrigin),S.transform&&(S.transformBox=x?.transformBox??"fill-box",delete b.transformBox);
  for(const N of RS)b[N]!==void 0&&(S[N]=b[N],delete b[N]);
  i!==void 0&&(b.x=i),l!==void 0&&(b.y=l),o!==void 0&&(b.scale=o),u!==void 0&&zS(b,u,d,f,!1)
}

const wg=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),Eg=a=>typeof a=="string"&&a.toLowerCase()==="svg";
  function OS(a,i,l,o){
  Sg(a,i,void 0,o);
  for(const u in i.attrs)a.setAttribute(wg.has(u)?u:ff(u),i.attrs[u])
}

function Ng(a,i,l){
  const o=xf(a,i,l);
  for(const u in a)if(ie(a[u])||ie(i[u])){
  const d=gi.indexOf(u)!==-1?"attr"+u.charAt(0).toUpperCase()+u.substring(1):u;
  o[d]=a[u]
}

return o
}

class VS extends yg{
  constructor(){
  super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Zt
}

getBaseTargetFromProps(i,l){
  return i[l]
}

readValueFromInstance(i,l){
  if(vi.has(l)){
  const o=ig(l);
  return o&&o.default||0
}

return l=wg.has(l)?l:ff(l),i.getAttribute(l)
}

scrapeMotionValuesFromProps(i,l,o){
  return Ng(i,l,o)
}

build(i,l,o){
  Ag(i,l,this.isSVGTag,o.transformTemplate,o.style)
}

renderInstance(i,l,o,u){
  OS(i,l,o,u)
}

mount(i){
  this.isSVGTag=Eg(i.tagName),super.mount(i)
}

}

const _S=gf.length;
  function Mg(a){
  if(!a)return;
  if(!a.isControllingVariants){
  const l=a.parent?Mg(a.parent)||{

}

:{

}

;
  return a.props.initial!==void 0&&(l.initial=a.props.initial),l
}

const i={

}

;
  for(let l=0;
  l<_S;
  l++){
  const o=gf[l],u=a.props[o];
  (ws(u)||u===!1)&&(i[o]=u)
}

return i
}

function Cg(a,i){
  if(!Array.isArray(i))return!1;
  const l=i.length;
  if(l!==a.length)return!1;
  for(let o=0;
  o<l;
  o++)if(i[o]!==a[o])return!1;
  return!0
}

const BS=[...yf].reverse(),HS=yf.length;
  function US(a){
  return i=>Promise.all(i.map(({
  animation:l,options:o
}

)=>Ob(a,l,o)))
}

function LS(a){
  let i=US(a),l=up(),o=!0,u=!1;
  const d=m=>(x,b)=>{
  const S=mi(a,b,m==="exit"?a.presenceContext?.custom:void 0);
  if(S){
  const{
  transition:N,transitionEnd:z,...U
}

=S;
  x={
  ...x,...U,...z
}

}

return x
}

;
  function f(m){
  i=m(a)
}

function y(m){
  const{
  props:x
}

=a,b=Mg(a.parent)||{

}

,S=[],N=new Set;
  let z={

}

,U=1/0;
  for(let L=0;
  L<HS;
  L++){
  const Y=BS[L],q=l[Y],k=x[Y]!==void 0?x[Y]:b[Y],Z=ws(k),at=Y===m?q.isActive:null;
  at===!1&&(U=L);
  let tt=k===b[Y]&&k!==x[Y]&&Z;
  if(tt&&(o||u)&&a.manuallyAnimateOnMount&&(tt=!1),q.protectedKeys={
  ...z
}

,!q.isActive&&at===null||!k&&!q.prevProp||So(k)||typeof k=="boolean")continue;
  if(Y==="exit"&&q.isActive&&at!==!0){
  q.prevResolvedValues&&(z={
  ...z,...q.prevResolvedValues
}

);
  continue
}

const $=GS(q.prevProp,k);
  let it=$||Y===m&&q.isActive&&!tt&&Z||L>U&&Z,jt=!1;
  const Jt=Array.isArray(k)?k:[k];
  let Ot=Jt.reduce(d(Y),{

}

);
  at===!1&&(Ot={

}

);
  const{
  prevResolvedValues:Ce={

}

}

=q,qe={
  ...Ce,...Ot
}

,ce=J=>{
  it=!0,N.has(J)&&(jt=!0,N.delete(J)),q.needsAnimating[J]=!0;
  const rt=a.getValue(J);
  rt&&(rt.liveStyle=!1)
}

;
  for(const J in qe){
  const rt=Ot[J],yt=Ce[J];
  if(z.hasOwnProperty(J))continue;
  let w=!1;
  ju(rt)&&ju(yt)?w=!Cg(rt,yt):w=rt!==yt,w?rt!=null?ce(J):N.add(J):rt!==void 0&&N.has(J)?ce(J):q.protectedKeys[J]=!0
}

q.prevProp=k,q.prevResolvedValues=Ot,q.isActive&&(z={
  ...z,...Ot
}

),(o||u)&&a.blockInitialAnimation&&(it=!1);
  const V=tt&&$;
  it&&(!V||jt)&&S.push(...Jt.map(J=>{
  const rt={
  type:Y
}

;
  if(typeof J=="string"&&(o||u)&&!V&&a.manuallyAnimateOnMount&&a.parent){
  const{
  parent:yt
}

=a,w=mi(yt,J);
  if(yt.enteringChildren&&w){
  const{
  delayChildren:H
}

=w.transition||{

}

;
  rt.delay=Fy(yt.enteringChildren,a,H)
}

}

return{
  animation:J,options:rt
}

}

))
}

if(N.size){
  const L={

}

;
  if(typeof x.initial!="boolean"){
  const Y=mi(a,Array.isArray(x.initial)?x.initial[0]:x.initial);
  Y&&Y.transition&&(L.transition=Y.transition)
}

N.forEach(Y=>{
  const q=a.getBaseTarget(Y),k=a.getValue(Y);
  k&&(k.liveStyle=!0),L[Y]=q??null
}

),S.push({
  animation:L
}

)
}

let X=!!S.length;
  return o&&(x.initial===!1||x.initial===x.animate)&&!a.manuallyAnimateOnMount&&(X=!1),o=!1,u=!1,X?i(S):Promise.resolve()
}

function p(m,x){
  if(l[m].isActive===x)return Promise.resolve();
  a.variantChildren?.forEach(S=>S.animationState?.setActive(m,x)),l[m].isActive=x;
  const b=y(m);
  for(const S in l)l[S].protectedKeys={

}

;
  return b
}

return{
  animateChanges:y,setActive:p,setAnimateFunction:f,getState:()=>l,reset:()=>{
  l=up(),u=!0
}

}

}

function GS(a,i){
  return typeof i=="string"?i!==a:Array.isArray(i)?!Cg(i,a):!1
}

function ga(a=!1){
  return{
  isActive:a,protectedKeys:{

}

,needsAnimating:{

}

,prevResolvedValues:{

}

}

}

function up(){
  return{
  animate:ga(!0),whileInView:ga(),whileHover:ga(),whileTap:ga(),whileDrag:ga(),whileFocus:ga(),exit:ga()
}

}

function fp(a,i){
  a.min=i.min,a.max=i.max
}

function Ke(a,i){
  fp(a.x,i.x),fp(a.y,i.y)
}

function dp(a,i){
  a.translate=i.translate,a.scale=i.scale,a.originPoint=i.originPoint,a.origin=i.origin
}

const jg=1e-4,qS=1-jg,YS=1+jg,Dg=.01,XS=0-Dg,kS=0+Dg;
  function re(a){
  return a.max-a.min
}

function KS(a,i,l){
  return Math.abs(a-i)<=l
}

function hp(a,i,l,o=.5){
  a.origin=o,a.originPoint=Vt(i.min,i.max,a.origin),a.scale=re(l)/re(i),a.translate=Vt(l.min,l.max,a.origin)-a.originPoint,(a.scale>=qS&&a.scale<=YS||isNaN(a.scale))&&(a.scale=1),(a.translate>=XS&&a.translate<=kS||isNaN(a.translate))&&(a.translate=0)
}

function xs(a,i,l,o){
  hp(a.x,i.x,l.x,o?o.originX:void 0),hp(a.y,i.y,l.y,o?o.originY:void 0)
}

function mp(a,i,l){
  a.min=l.min+i.min,a.max=a.min+re(i)
}

function QS(a,i,l){
  mp(a.x,i.x,l.x),mp(a.y,i.y,l.y)
}

function pp(a,i,l){
  a.min=i.min-l.min,a.max=a.min+re(i)
}

function yo(a,i,l){
  pp(a.x,i.x,l.x),pp(a.y,i.y,l.y)
}

function yp(a,i,l,o,u){
  return a-=i,a=po(a,1/l,o),u!==void 0&&(a=po(a,1/u,o)),a
}

function ZS(a,i=0,l=1,o=.5,u,d=a,f=a){
  if(nn.test(i)&&(i=parseFloat(i),i=Vt(f.min,f.max,i/100)-f.min),typeof i!="number")return;
  let y=Vt(d.min,d.max,o);
  a===d&&(y-=i),a.min=yp(a.min,i,l,y,u),a.max=yp(a.max,i,l,y,u)
}

function gp(a,i,[l,o,u],d,f){
  ZS(a,i[l],i[o],i[u],i.scale,d,f)
}

const JS=["x","scaleX","originX"],FS=["y","scaleY","originY"];
  function vp(a,i,l,o){
  gp(a.x,i,JS,l?l.x:void 0,o?o.x:void 0),gp(a.y,i,FS,l?l.y:void 0,o?o.y:void 0)
}

function xp(a){
  return a.translate===0&&a.scale===1
}

function zg(a){
  return xp(a.x)&&xp(a.y)
}

function bp(a,i){
  return a.min===i.min&&a.max===i.max
}

function WS(a,i){
  return bp(a.x,i.x)&&bp(a.y,i.y)
}

function Sp(a,i){
  return Math.round(a.min)===Math.round(i.min)&&Math.round(a.max)===Math.round(i.max)
}

function Rg(a,i){
  return Sp(a.x,i.x)&&Sp(a.y,i.y)
}

function Tp(a){
  return re(a.x)/re(a.y)
}

function Ap(a,i){
  return a.translate===i.translate&&a.scale===i.scale&&a.originPoint===i.originPoint
}

function en(a){
  return[a("x"),a("y")]
}

function PS(a,i,l){
  let o="";
  const u=a.x.translate/i.x,d=a.y.translate/i.y,f=l?.z||0;
  if((u||d||f)&&(o=`translate3d(${
  u
}

px, ${
  d
}

px, ${
  f
}

px) `),(i.x!==1||i.y!==1)&&(o+=`scale(${
  1/i.x
}

, ${
  1/i.y
}

) `),l){
  const{
  transformPerspective:m,rotate:x,rotateX:b,rotateY:S,skewX:N,skewY:z
}

=l;
  m&&(o=`perspective(${
  m
}

px) ${
  o
}

`),x&&(o+=`rotate(${
  x
}

deg) `),b&&(o+=`rotateX(${
  b
}

deg) `),S&&(o+=`rotateY(${
  S
}

deg) `),N&&(o+=`skewX(${
  N
}

deg) `),z&&(o+=`skewY(${
  z
}

deg) `)
}

const y=a.x.scale*i.x,p=a.y.scale*i.y;
  return(y!==1||p!==1)&&(o+=`scale(${
  y
}

, ${
  p
}

)`),o||"none"
}

const Og=["TopLeft","TopRight","BottomLeft","BottomRight"],$S=Og.length,wp=a=>typeof a=="string"?parseFloat(a):a,Ep=a=>typeof a=="number"||W.test(a);
  function IS(a,i,l,o,u,d){
  u?(a.opacity=Vt(0,l.opacity??1,t5(o)),a.opacityExit=Vt(i.opacity??1,0,e5(o))):d&&(a.opacity=Vt(i.opacity??1,l.opacity??1,o));
  for(let f=0;
  f<$S;
  f++){
  const y=`border${
  Og[f]
}

Radius`;
  let p=Np(i,y),m=Np(l,y);
  if(p===void 0&&m===void 0)continue;
  p||(p=0),m||(m=0),p===0||m===0||Ep(p)===Ep(m)?(a[y]=Math.max(Vt(wp(p),wp(m),o),0),(nn.test(m)||nn.test(p))&&(a[y]+="%")):a[y]=m
}

(i.rotate||l.rotate)&&(a.rotate=Vt(i.rotate||0,l.rotate||0,o))
}

function Np(a,i){
  return a[i]!==void 0?a[i]:a.borderRadius
}

const t5=Vg(0,.5,Ty),e5=Vg(.5,.95,ge);
  function Vg(a,i,l){
  return o=>o<a?0:o>i?1:l(pi(a,i,o))
}

function n5(a,i,l){
  const o=ie(a)?a:Ze(a);
  return o.start(cf("",o,i,l)),o.animation
}

function Es(a,i,l,o={
  passive:!0
}

){
  return a.addEventListener(i,l,o),()=>a.removeEventListener(i,l)
}

const a5=(a,i)=>a.depth-i.depth;
  class i5{
  constructor(){
  this.children=[],this.isDirty=!1
}

add(i){
  Qu(this.children,i),this.isDirty=!0
}

remove(i){
  ro(this.children,i),this.isDirty=!0
}

forEach(i){
  this.isDirty&&this.children.sort(a5),this.isDirty=!1,this.children.forEach(i)
}

}

function s5(a,i){
  const l=oe.now(),o=({
  timestamp:u
}

)=>{
  const d=u-l;
  d>=i&&(Ge(o),a(d-i))
}

;
  return bt.setup(o,!0),()=>Ge(o)
}

function so(a){
  return ie(a)?a.get():a
}

class l5{
  constructor(){
  this.members=[]
}

add(i){
  Qu(this.members,i);
  for(let l=this.members.length-1;
  l>=0;
  l--){
  const o=this.members[l];
  if(o===i||o===this.lead||o===this.prevLead)continue;
  const u=o.instance;
  (!u||u.isConnected===!1)&&!o.snapshot&&(ro(this.members,o),o.unmount())
}

i.scheduleRender()
}

remove(i){
  if(ro(this.members,i),i===this.prevLead&&(this.prevLead=void 0),i===this.lead){
  const l=this.members[this.members.length-1];
  l&&this.promote(l)
}

}

relegate(i){
  for(let l=this.members.indexOf(i)-1;
  l>=0;
  l--){
  const o=this.members[l];
  if(o.isPresent!==!1&&o.instance?.isConnected!==!1)return this.promote(o),!0
}

return!1
}

promote(i,l){
  const o=this.lead;
  if(i!==o&&(this.prevLead=o,this.lead=i,i.show(),o)){
  o.updateSnapshot(),i.scheduleRender();
  const{
  layoutDependency:u
}

=o.options,{
  layoutDependency:d
}

=i.options;
  (u===void 0||u!==d)&&(i.resumeFrom=o,l&&(o.preserveOpacity=!0),o.snapshot&&(i.snapshot=o.snapshot,i.snapshot.latestValues=o.animationValues||o.latestValues),i.root?.isUpdating&&(i.isLayoutDirty=!0)),i.options.crossfade===!1&&o.hide()
}

}

exitAnimationComplete(){
  this.members.forEach(i=>{
  i.options.onExitComplete?.(),i.resumingFrom?.options.onExitComplete?.()
}

)
}

scheduleRender(){
  this.members.forEach(i=>i.instance&&i.scheduleRender(!1))
}

removeLeadSnapshot(){
  this.lead?.snapshot&&(this.lead.snapshot=void 0)
}

}

const lo={
  hasAnimatedSinceResize:!0,hasEverUpdated:!1
}

,au=["","X","Y","Z"],o5=1e3;
  let r5=0;
  function iu(a,i,l,o){
  const{
  latestValues:u
}

=i;
  u[a]&&(l[a]=u[a],i.setStaticValue(a,0),o&&(o[a]=0))
}

function _g(a){
  if(a.hasCheckedOptimisedAppear=!0,a.root===a)return;
  const{
  visualElement:i
}

=a.options;
  if(!i)return;
  const l=tg(i);
  if(window.MotionHasOptimisedAnimation(l,"transform")){
  const{
  layout:u,layoutId:d
}

=a.options;
  window.MotionCancelOptimisedAnimation(l,"transform",bt,!(u||d))
}

const{
  parent:o
}

=a;
  o&&!o.hasCheckedOptimisedAppear&&_g(o)
}

function Bg({
  attachResizeListener:a,defaultParent:i,measureScroll:l,checkIsScrollRoot:o,resetTransform:u
}

){
  return class{
  constructor(f={

}

,y=i?.()){
  this.id=r5++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={

}

,this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={
  x:1,y:1
}

,this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{
  this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())
}

,this.updateProjection=()=>{
  this.projectionUpdateScheduled=!1,this.nodes.forEach(f5),this.nodes.forEach(p5),this.nodes.forEach(y5),this.nodes.forEach(d5)
}

,this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=f,this.root=y?y.root||y:this,this.path=y?[...y.path,y]:[],this.parent=y,this.depth=y?y.depth+1:0;
  for(let p=0;
  p<this.path.length;
  p++)this.path[p].shouldResetTransform=!0;
  this.root===this&&(this.nodes=new i5)
}

addEventListener(f,y){
  return this.eventHandlers.has(f)||this.eventHandlers.set(f,new Zu),this.eventHandlers.get(f).add(y)
}

notifyListeners(f,...y){
  const p=this.eventHandlers.get(f);
  p&&p.notify(...y)
}

hasListeners(f){
  return this.eventHandlers.has(f)
}

mount(f){
  if(this.instance)return;
  this.isSVG=pf(f)&&!cS(f),this.instance=f;
  const{
  layoutId:y,layout:p,visualElement:m
}

=this.options;
  if(m&&!m.current&&m.mount(f),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(p||y)&&(this.isLayoutDirty=!0),a){
  let x,b=0;
  const S=()=>this.root.updateBlockedByResize=!1;
  bt.read(()=>{
  b=window.innerWidth
}

),a(f,()=>{
  const N=window.innerWidth;
  N!==b&&(b=N,this.root.updateBlockedByResize=!0,x&&x(),x=s5(S,250),lo.hasAnimatedSinceResize&&(lo.hasAnimatedSinceResize=!1,this.nodes.forEach(jp)))
}

)
}

y&&this.root.registerSharedNode(y,this),this.options.animate!==!1&&m&&(y||p)&&this.addEventListener("didUpdate",({
  delta:x,hasLayoutChanged:b,hasRelativeLayoutChanged:S,layout:N
}

)=>{
  if(this.isTreeAnimationBlocked()){
  this.target=void 0,this.relativeTarget=void 0;
  return
}

const z=this.options.transition||m.getDefaultTransition()||S5,{
  onLayoutAnimationStart:U,onLayoutAnimationComplete:X
}

=m.getProps(),L=!this.targetLayout||!Rg(this.targetLayout,N),Y=!b&&S;
  if(this.options.layoutRoot||this.resumeFrom||Y||b&&(L||!this.currentAnimation)){
  this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);
  const q={
  ...rf(z,"layout"),onPlay:U,onComplete:X
}

;
  (m.shouldReduceMotion||this.options.layoutRoot)&&(q.delay=0,q.type=!1),this.startAnimation(q),this.setAnimationOrigin(x,Y)
}

else b||jp(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();
  this.targetLayout=N
}

)
}

unmount(){
  this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);
  const f=this.getStack();
  f&&f.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Ge(this.updateProjection)
}

blockUpdate(){
  this.updateManuallyBlocked=!0
}

unblockUpdate(){
  this.updateManuallyBlocked=!1
}

isUpdateBlocked(){
  return this.updateManuallyBlocked||this.updateBlockedByResize
}

isTreeAnimationBlocked(){
  return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1
}

startUpdate(){
  this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(g5),this.animationId++)
}

getTransformTemplate(){
  const{
  visualElement:f
}

=this.options;
  return f&&f.getProps().transformTemplate
}

willUpdate(f=!0){
  if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){
  this.options.onExitComplete&&this.options.onExitComplete();
  return
}

if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&_g(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;
  this.isLayoutDirty=!0;
  for(let x=0;
  x<this.path.length;
  x++){
  const b=this.path[x];
  b.shouldResetTransform=!0,b.updateScroll("snapshot"),b.options.layoutRoot&&b.willUpdate(!1)
}

const{
  layoutId:y,layout:p
}

=this.options;
  if(y===void 0&&!p)return;
  const m=this.getTransformTemplate();
  this.prevTransformTemplateValue=m?m(this.latestValues,""):void 0,this.updateSnapshot(),f&&this.notifyListeners("willUpdate")
}

update(){
  if(this.updateScheduled=!1,this.isUpdateBlocked()){
  this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Mp);
  return
}

if(this.animationId<=this.animationCommitId){
  this.nodes.forEach(Cp);
  return
}

this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(m5),this.nodes.forEach(c5),this.nodes.forEach(u5)):this.nodes.forEach(Cp),this.clearAllSnapshots();
  const y=oe.now();
  Pt.delta=We(0,1e3/60,y-Pt.timestamp),Pt.timestamp=y,Pt.isProcessing=!0,Fc.update.process(Pt),Fc.preRender.process(Pt),Fc.render.process(Pt),Pt.isProcessing=!1
}

didUpdate(){
  this.updateScheduled||(this.updateScheduled=!0,hf.read(this.scheduleUpdate))
}

clearAllSnapshots(){
  this.nodes.forEach(h5),this.sharedNodes.forEach(v5)
}

scheduleUpdateProjection(){
  this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,bt.preRender(this.updateProjection,!1,!0))
}

scheduleCheckAfterUnmount(){
  bt.postRender(()=>{
  this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()
}

)
}

updateSnapshot(){
  this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!re(this.snapshot.measuredBox.x)&&!re(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))
}

updateLayout(){
  if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;
  if(this.resumeFrom&&!this.resumeFrom.instance)for(let p=0;
  p<this.path.length;
  p++)this.path[p].updateScroll();
  const f=this.layout;
  this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected=Zt(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);
  const{
  visualElement:y
}

=this.options;
  y&&y.notify("LayoutMeasure",this.layout.layoutBox,f?f.layoutBox:void 0)
}

updateScroll(f="measure"){
  let y=!!(this.options.layoutScroll&&this.instance);
  if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===f&&(y=!1),y&&this.instance){
  const p=o(this.instance);
  this.scroll={
  animationId:this.root.animationId,phase:f,isRoot:p,offset:l(this.instance),wasRoot:this.scroll?this.scroll.isRoot:p
}

}

}

resetTransform(){
  if(!u)return;
  const f=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,y=this.projectionDelta&&!zg(this.projectionDelta),p=this.getTransformTemplate(),m=p?p(this.latestValues,""):void 0,x=m!==this.prevTransformTemplateValue;
  f&&this.instance&&(y||va(this.latestValues)||x)&&(u(this.instance,m),this.shouldResetTransform=!1,this.scheduleRender())
}

measure(f=!0){
  const y=this.measurePageBox();
  let p=this.removeElementScroll(y);
  return f&&(p=this.removeTransform(p)),T5(p),{
  animationId:this.root.animationId,measuredBox:y,layoutBox:p,latestValues:{

}

,source:this.id
}

}

measurePageBox(){
  const{
  visualElement:f
}

=this.options;
  if(!f)return Zt();
  const y=f.measureViewportBox();
  if(!(this.scroll?.wasRoot||this.path.some(A5))){
  const{
  scroll:m
}

=this.root;
  m&&(di(y.x,m.offset.x),di(y.y,m.offset.y))
}

return y
}

removeElementScroll(f){
  const y=Zt();
  if(Ke(y,f),this.scroll?.wasRoot)return y;
  for(let p=0;
  p<this.path.length;
  p++){
  const m=this.path[p],{
  scroll:x,options:b
}

=m;
  m!==this.root&&x&&b.layoutScroll&&(x.wasRoot&&Ke(y,f),di(y.x,x.offset.x),di(y.y,x.offset.y))
}

return y
}

applyTransform(f,y=!1){
  const p=Zt();
  Ke(p,f);
  for(let m=0;
  m<this.path.length;
  m++){
  const x=this.path[m];
  !y&&x.options.layoutScroll&&x.scroll&&x!==x.root&&hi(p,{
  x:-x.scroll.offset.x,y:-x.scroll.offset.y
}

),va(x.latestValues)&&hi(p,x.latestValues)
}

return va(this.latestValues)&&hi(p,this.latestValues),p
}

removeTransform(f){
  const y=Zt();
  Ke(y,f);
  for(let p=0;
  p<this.path.length;
  p++){
  const m=this.path[p];
  if(!m.instance||!va(m.latestValues))continue;
  Bu(m.latestValues)&&m.updateSnapshot();
  const x=Zt(),b=m.measurePageBox();
  Ke(x,b),vp(y,m.latestValues,m.snapshot?m.snapshot.layoutBox:void 0,x)
}

return va(this.latestValues)&&vp(y,this.latestValues),y
}

setTargetDelta(f){
  this.targetDelta=f,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0
}

setOptions(f){
  this.options={
  ...this.options,...f,crossfade:f.crossfade!==void 0?f.crossfade:!0
}

}

clearMeasurements(){
  this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1
}

forceRelativeParentToResolveTarget(){
  this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Pt.timestamp&&this.relativeParent.resolveTargetDelta(!0)
}

resolveTargetDelta(f=!1){
  const y=this.getLead();
  this.isProjectionDirty||(this.isProjectionDirty=y.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=y.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=y.isSharedProjectionDirty);
  const p=!!this.resumingFrom||this!==y;
  if(!(f||p&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;
  const{
  layout:x,layoutId:b
}

=this.options;
  if(!this.layout||!(x||b))return;
  this.resolvedRelativeTargetAt=Pt.timestamp;
  const S=this.getClosestProjectingParent();
  S&&this.linkedParentVersion!==S.layoutVersion&&!S.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(S&&S.layout?this.createRelativeTarget(S,this.layout.layoutBox,S.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Zt(),this.targetWithTransforms=Zt()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),QS(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Ke(this.target,this.layout.layoutBox),xg(this.target,this.targetDelta)):Ke(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,S&&!!S.resumingFrom==!!this.resumingFrom&&!S.options.layoutScroll&&S.target&&this.animationProgress!==1?this.createRelativeTarget(S,this.target,S.target):this.relativeParent=this.relativeTarget=void 0))
}

getClosestProjectingParent(){
  if(!(!this.parent||Bu(this.parent.latestValues)||vg(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()
}

isProjecting(){
  return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)
}

createRelativeTarget(f,y,p){
  this.relativeParent=f,this.linkedParentVersion=f.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Zt(),this.relativeTargetOrigin=Zt(),yo(this.relativeTargetOrigin,y,p),Ke(this.relativeTarget,this.relativeTargetOrigin)
}

removeRelativeTarget(){
  this.relativeParent=this.relativeTarget=void 0
}

calcProjection(){
  const f=this.getLead(),y=!!this.resumingFrom||this!==f;
  let p=!0;
  if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(p=!1),y&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(p=!1),this.resolvedRelativeTargetAt===Pt.timestamp&&(p=!1),p)return;
  const{
  layout:m,layoutId:x
}

=this.options;
  if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(m||x))return;
  Ke(this.layoutCorrected,this.layout.layoutBox);
  const b=this.treeScale.x,S=this.treeScale.y;
  SS(this.layoutCorrected,this.treeScale,this.path,y),f.layout&&!f.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(f.target=f.layout.layoutBox,f.targetWithTransforms=Zt());
  const{
  target:N
}

=f;
  if(!N){
  this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());
  return
}

!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(dp(this.prevProjectionDelta.x,this.projectionDelta.x),dp(this.prevProjectionDelta.y,this.projectionDelta.y)),xs(this.projectionDelta,this.layoutCorrected,N,this.latestValues),(this.treeScale.x!==b||this.treeScale.y!==S||!Ap(this.projectionDelta.x,this.prevProjectionDelta.x)||!Ap(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",N))
}

hide(){
  this.isVisible=!1
}

show(){
  this.isVisible=!0
}

scheduleRender(f=!0){
  if(this.options.visualElement?.scheduleRender(),f){
  const y=this.getStack();
  y&&y.scheduleRender()
}

this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)
}

createProjectionDeltas(){
  this.prevProjectionDelta=fi(),this.projectionDelta=fi(),this.projectionDeltaWithTransform=fi()
}

setAnimationOrigin(f,y=!1){
  const p=this.snapshot,m=p?p.latestValues:{

}

,x={
  ...this.latestValues
}

,b=fi();
  (!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!y;
  const S=Zt(),N=p?p.source:void 0,z=this.layout?this.layout.source:void 0,U=N!==z,X=this.getStack(),L=!X||X.members.length<=1,Y=!!(U&&!L&&this.options.crossfade===!0&&!this.path.some(b5));
  this.animationProgress=0;
  let q;
  this.mixTargetDelta=k=>{
  const Z=k/1e3;
  Dp(b.x,f.x,Z),Dp(b.y,f.y,Z),this.setTargetDelta(b),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(yo(S,this.layout.layoutBox,this.relativeParent.layout.layoutBox),x5(this.relativeTarget,this.relativeTargetOrigin,S,Z),q&&WS(this.relativeTarget,q)&&(this.isProjectionDirty=!1),q||(q=Zt()),Ke(q,this.relativeTarget)),U&&(this.animationValues=x,IS(x,m,this.latestValues,Z,Y,L)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=Z
}

,this.mixTargetDelta(this.options.layoutRoot?1e3:0)
}

startAnimation(f){
  this.notifyListeners("animationStart"),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&(Ge(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=bt.update(()=>{
  lo.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=Ze(0)),this.motionValue.jump(0,!1),this.currentAnimation=n5(this.motionValue,[0,1e3],{
  ...f,velocity:0,isSync:!0,onUpdate:y=>{
  this.mixTargetDelta(y),f.onUpdate&&f.onUpdate(y)
}

,onStop:()=>{

}

,onComplete:()=>{
  f.onComplete&&f.onComplete(),this.completeAnimation()
}

}

),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0
}

)
}

completeAnimation(){
  this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);
  const f=this.getStack();
  f&&f.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")
}

finishAnimation(){
  this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(o5),this.currentAnimation.stop()),this.completeAnimation()
}

applyTransformsToTarget(){
  const f=this.getLead();
  let{
  targetWithTransforms:y,target:p,layout:m,latestValues:x
}

=f;
  if(!(!y||!p||!m)){
  if(this!==f&&this.layout&&m&&Hg(this.options.animationType,this.layout.layoutBox,m.layoutBox)){
  p=this.target||Zt();
  const b=re(this.layout.layoutBox.x);
  p.x.min=f.target.x.min,p.x.max=p.x.min+b;
  const S=re(this.layout.layoutBox.y);
  p.y.min=f.target.y.min,p.y.max=p.y.min+S
}

Ke(y,p),hi(y,x),xs(this.projectionDeltaWithTransform,this.layoutCorrected,y,x)
}

}

registerSharedNode(f,y){
  this.sharedNodes.has(f)||this.sharedNodes.set(f,new l5),this.sharedNodes.get(f).add(y);
  const m=y.options.initialPromotionConfig;
  y.promote({
  transition:m?m.transition:void 0,preserveFollowOpacity:m&&m.shouldPreserveFollowOpacity?m.shouldPreserveFollowOpacity(y):void 0
}

)
}

isLead(){
  const f=this.getStack();
  return f?f.lead===this:!0
}

getLead(){
  const{
  layoutId:f
}

=this.options;
  return f?this.getStack()?.lead||this:this
}

getPrevLead(){
  const{
  layoutId:f
}

=this.options;
  return f?this.getStack()?.prevLead:void 0
}

getStack(){
  const{
  layoutId:f
}

=this.options;
  if(f)return this.root.sharedNodes.get(f)
}

promote({
  needsReset:f,transition:y,preserveFollowOpacity:p
}

={

}

){
  const m=this.getStack();
  m&&m.promote(this,p),f&&(this.projectionDelta=void 0,this.needsReset=!0),y&&this.setOptions({
  transition:y
}

)
}

relegate(){
  const f=this.getStack();
  return f?f.relegate(this):!1
}

resetSkewAndRotation(){
  const{
  visualElement:f
}

=this.options;
  if(!f)return;
  let y=!1;
  const{
  latestValues:p
}

=f;
  if((p.z||p.rotate||p.rotateX||p.rotateY||p.rotateZ||p.skewX||p.skewY)&&(y=!0),!y)return;
  const m={

}

;
  p.z&&iu("z",f,m,this.animationValues);
  for(let x=0;
  x<au.length;
  x++)iu(`rotate${
  au[x]
}

`,f,m,this.animationValues),iu(`skew${
  au[x]
}

`,f,m,this.animationValues);
  f.render();
  for(const x in m)f.setStaticValue(x,m[x]),this.animationValues&&(this.animationValues[x]=m[x]);
  f.scheduleRender()
}

applyProjectionStyles(f,y){
  if(!this.instance||this.isSVG)return;
  if(!this.isVisible){
  f.visibility="hidden";
  return
}

const p=this.getTransformTemplate();
  if(this.needsReset){
  this.needsReset=!1,f.visibility="",f.opacity="",f.pointerEvents=so(y?.pointerEvents)||"",f.transform=p?p(this.latestValues,""):"none";
  return
}

const m=this.getLead();
  if(!this.projectionDelta||!this.layout||!m.target){
  this.options.layoutId&&(f.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,f.pointerEvents=so(y?.pointerEvents)||""),this.hasProjected&&!va(this.latestValues)&&(f.transform=p?p({

}

,""):"none",this.hasProjected=!1);
  return
}

f.visibility="";
  const x=m.animationValues||m.latestValues;
  this.applyTransformsToTarget();
  let b=PS(this.projectionDeltaWithTransform,this.treeScale,x);
  p&&(b=p(x,b)),f.transform=b;
  const{
  x:S,y:N
}

=this.projectionDelta;
  f.transformOrigin=`${
  S.origin*100
}

% ${
  N.origin*100
}

% 0`,m.animationValues?f.opacity=m===this?x.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:x.opacityExit:f.opacity=m===this?x.opacity!==void 0?x.opacity:"":x.opacityExit!==void 0?x.opacityExit:0;
  for(const z in Uu){
  if(x[z]===void 0)continue;
  const{
  correct:U,applyTo:X,isCSSVariable:L
}

=Uu[z],Y=b==="none"?x[z]:U(x[z],m);
  if(X){
  const q=X.length;
  for(let k=0;
  k<q;
  k++)f[X[k]]=Y
}

else L?this.options.visualElement.renderState.vars[z]=Y:f[z]=Y
}

this.options.layoutId&&(f.pointerEvents=m===this?so(y?.pointerEvents)||"":"none")
}

clearSnapshot(){
  this.resumeFrom=this.snapshot=void 0
}

resetTree(){
  this.root.nodes.forEach(f=>f.currentAnimation?.stop()),this.root.nodes.forEach(Mp),this.root.sharedNodes.clear()
}

}

}

function c5(a){
  a.updateLayout()
}

function u5(a){
  const i=a.resumeFrom?.snapshot||a.snapshot;
  if(a.isLead()&&a.layout&&i&&a.hasListeners("didUpdate")){
  const{
  layoutBox:l,measuredBox:o
}

=a.layout,{
  animationType:u
}

=a.options,d=i.source!==a.layout.source;
  u==="size"?en(x=>{
  const b=d?i.measuredBox[x]:i.layoutBox[x],S=re(b);
  b.min=l[x].min,b.max=b.min+S
}

):Hg(u,i.layoutBox,l)&&en(x=>{
  const b=d?i.measuredBox[x]:i.layoutBox[x],S=re(l[x]);
  b.max=b.min+S,a.relativeTarget&&!a.currentAnimation&&(a.isProjectionDirty=!0,a.relativeTarget[x].max=a.relativeTarget[x].min+S)
}

);
  const f=fi();
  xs(f,l,i.layoutBox);
  const y=fi();
  d?xs(y,a.applyTransform(o,!0),i.measuredBox):xs(y,l,i.layoutBox);
  const p=!zg(f);
  let m=!1;
  if(!a.resumeFrom){
  const x=a.getClosestProjectingParent();
  if(x&&!x.resumeFrom){
  const{
  snapshot:b,layout:S
}

=x;
  if(b&&S){
  const N=Zt();
  yo(N,i.layoutBox,b.layoutBox);
  const z=Zt();
  yo(z,l,S.layoutBox),Rg(N,z)||(m=!0),x.options.layoutRoot&&(a.relativeTarget=z,a.relativeTargetOrigin=N,a.relativeParent=x)
}

}

}

a.notifyListeners("didUpdate",{
  layout:l,snapshot:i,delta:y,layoutDelta:f,hasLayoutChanged:p,hasRelativeLayoutChanged:m
}

)
}

else if(a.isLead()){
  const{
  onExitComplete:l
}

=a.options;
  l&&l()
}

a.options.transition=void 0
}

function f5(a){
  a.parent&&(a.isProjecting()||(a.isProjectionDirty=a.parent.isProjectionDirty),a.isSharedProjectionDirty||(a.isSharedProjectionDirty=!!(a.isProjectionDirty||a.parent.isProjectionDirty||a.parent.isSharedProjectionDirty)),a.isTransformDirty||(a.isTransformDirty=a.parent.isTransformDirty))
}

function d5(a){
  a.isProjectionDirty=a.isSharedProjectionDirty=a.isTransformDirty=!1
}

function h5(a){
  a.clearSnapshot()
}

function Mp(a){
  a.clearMeasurements()
}

function Cp(a){
  a.isLayoutDirty=!1
}

function m5(a){
  const{
  visualElement:i
}

=a.options;
  i&&i.getProps().onBeforeLayoutMeasure&&i.notify("BeforeLayoutMeasure"),a.resetTransform()
}

function jp(a){
  a.finishAnimation(),a.targetDelta=a.relativeTarget=a.target=void 0,a.isProjectionDirty=!0
}

function p5(a){
  a.resolveTargetDelta()
}

function y5(a){
  a.calcProjection()
}

function g5(a){
  a.resetSkewAndRotation()
}

function v5(a){
  a.removeLeadSnapshot()
}

function Dp(a,i,l){
  a.translate=Vt(i.translate,0,l),a.scale=Vt(i.scale,1,l),a.origin=i.origin,a.originPoint=i.originPoint
}

function zp(a,i,l,o){
  a.min=Vt(i.min,l.min,o),a.max=Vt(i.max,l.max,o)
}

function x5(a,i,l,o){
  zp(a.x,i.x,l.x,o),zp(a.y,i.y,l.y,o)
}

function b5(a){
  return a.animationValues&&a.animationValues.opacityExit!==void 0
}

const S5={
  duration:.45,ease:[.4,0,.1,1]
}

,Rp=a=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(a),Op=Rp("applewebkit/")&&!Rp("chrome/")?Math.round:ge;
  function Vp(a){
  a.min=Op(a.min),a.max=Op(a.max)
}

function T5(a){
  Vp(a.x),Vp(a.y)
}

function Hg(a,i,l){
  return a==="position"||a==="preserve-aspect"&&!KS(Tp(i),Tp(l),.2)
}

function A5(a){
  return a!==a.root&&a.scroll?.wasRoot
}

const w5=Bg({
  attachResizeListener:(a,i)=>Es(a,"resize",i),measureScroll:()=>({
  x:document.documentElement.scrollLeft||document.body?.scrollLeft||0,y:document.documentElement.scrollTop||document.body?.scrollTop||0
}

),checkIsScrollRoot:()=>!0
}

),su={
  current:void 0
}

,Ug=Bg({
  measureScroll:a=>({
  x:a.scrollLeft,y:a.scrollTop
}

),defaultParent:()=>{
  if(!su.current){
  const a=new w5({

}

);
  a.mount(window),a.setOptions({
  layoutScroll:!0
}

),su.current=a
}

return su.current
}

,resetTransform:(a,i)=>{
  a.style.transform=i!==void 0?i:"none"
}

,checkIsScrollRoot:a=>window.getComputedStyle(a).position==="fixed"
}

),Ao=R.createContext({
  transformPagePoint:a=>a,isStatic:!1,reducedMotion:"never"
}

);
  function _p(a,i){
  if(typeof a=="function")return a(i);
  a!=null&&(a.current=i)
}

function E5(...a){
  return i=>{
  let l=!1;
  const o=a.map(u=>{
  const d=_p(u,i);
  return!l&&typeof d=="function"&&(l=!0),d
}

);
  if(l)return()=>{
  for(let u=0;
  u<o.length;
  u++){
  const d=o[u];
  typeof d=="function"?d():_p(a[u],null)
}

}

}

}

function N5(...a){
  return R.useCallback(E5(...a),a)
}

class M5 extends R.Component{
  getSnapshotBeforeUpdate(i){
  const l=this.props.childRef.current;
  if(l&&i.isPresent&&!this.props.isPresent&&this.props.pop!==!1){
  const o=l.offsetParent,u=ho(o)&&o.offsetWidth||0,d=ho(o)&&o.offsetHeight||0,f=this.props.sizeRef.current;
  f.height=l.offsetHeight||0,f.width=l.offsetWidth||0,f.top=l.offsetTop,f.left=l.offsetLeft,f.right=u-f.width-f.left,f.bottom=d-f.height-f.top
}

return null
}

componentDidUpdate(){

}

render(){
  return this.props.children
}

}

function C5({
  children:a,isPresent:i,anchorX:l,anchorY:o,root:u,pop:d
}

){
  const f=R.useId(),y=R.useRef(null),p=R.useRef({
  width:0,height:0,top:0,left:0,right:0,bottom:0
}

),{
  nonce:m
}

=R.useContext(Ao),x=a.props?.ref??a?.ref,b=N5(y,x);
  return R.useInsertionEffect(()=>{
  const{
  width:S,height:N,top:z,left:U,right:X,bottom:L
}

=p.current;
  if(i||d===!1||!y.current||!S||!N)return;
  const Y=l==="left"?`left: ${
  U
}

`:`right: ${
  X
}

`,q=o==="bottom"?`bottom: ${
  L
}

`:`top: ${
  z
}

`;
  y.current.dataset.motionPopId=f;
  const k=document.createElement("style");
  m&&(k.nonce=m);
  const Z=u??document.head;
  return Z.appendChild(k),k.sheet&&k.sheet.insertRule(`
          [data-motion-pop-id="${
  f
}

"] {

            position: absolute !important;

            width: ${
  S
}

px !important;

            height: ${
  N
}

px !important;

            ${
  Y
}

px !important;

            ${
  q
}

px !important;

}

        `),()=>{
  Z.contains(k)&&Z.removeChild(k)
}

}

,[i]),g.jsx(M5,{
  isPresent:i,childRef:y,sizeRef:p,pop:d,children:d===!1?a:R.cloneElement(a,{
  ref:b
}

)
}

)
}

const j5=({
  children:a,initial:i,isPresent:l,onExitComplete:o,custom:u,presenceAffectsLayout:d,mode:f,anchorX:y,anchorY:p,root:m
}

)=>{
  const x=Wn(D5),b=R.useId();
  let S=!0,N=R.useMemo(()=>(S=!1,{
  id:b,initial:i,isPresent:l,custom:u,onExitComplete:z=>{
  x.set(z,!0);
  for(const U of x.values())if(!U)return;
  o&&o()
}

,register:z=>(x.set(z,!1),()=>x.delete(z))
}

),[l,x,o]);
  return d&&S&&(N={
  ...N
}

),R.useMemo(()=>{
  x.forEach((z,U)=>x.set(U,!1))
}

,[l]),R.useEffect(()=>{
  !l&&!x.size&&o&&o()
}

,[l]),a=g.jsx(C5,{
  pop:f==="popLayout",isPresent:l,anchorX:y,anchorY:p,root:m,children:a
}

),g.jsx(bo.Provider,{
  value:N,children:a
}

)
}

;
  function D5(){
  return new Map
}

function Lg(a=!0){
  const i=R.useContext(bo);
  if(i===null)return[!0,null];
  const{
  isPresent:l,onExitComplete:o,register:u
}

=i,d=R.useId();
  R.useEffect(()=>{
  if(a)return u(d)
}

,[a]);
  const f=R.useCallback(()=>a&&o&&o(d),[d,o,a]);
  return!l&&o?[!1,f]:[!0]
}

const Wl=a=>a.key||"";
  function Bp(a){
  const i=[];
  return R.Children.forEach(a,l=>{
  R.isValidElement(l)&&i.push(l)
}

),i
}

const Lu=({
  children:a,custom:i,initial:l=!0,onExitComplete:o,presenceAffectsLayout:u=!0,mode:d="sync",propagate:f=!1,anchorX:y="left",anchorY:p="top",root:m
}

)=>{
  const[x,b]=Lg(f),S=R.useMemo(()=>Bp(a),[a]),N=f&&!x?[]:S.map(Wl),z=R.useRef(!0),U=R.useRef(S),X=Wn(()=>new Map),L=R.useRef(new Set),[Y,q]=R.useState(S),[k,Z]=R.useState(S);
  xo(()=>{
  z.current=!1,U.current=S;
  for(let $=0;
  $<k.length;
  $++){
  const it=Wl(k[$]);
  N.includes(it)?(X.delete(it),L.current.delete(it)):X.get(it)!==!0&&X.set(it,!1)
}

}

,[k,N.length,N.join("-")]);
  const at=[];
  if(S!==Y){
  let $=[...S];
  for(let it=0;
  it<k.length;
  it++){
  const jt=k[it],Jt=Wl(jt);
  N.includes(Jt)||($.splice(it,0,jt),at.push(jt))
}

return d==="wait"&&at.length&&($=at),Z(Bp($)),q(S),null
}

const{
  forceRender:tt
}

=R.useContext(Ku);
  return g.jsx(g.Fragment,{
  children:k.map($=>{
  const it=Wl($),jt=f&&!x?!1:S===k||N.includes(it),Jt=()=>{
  if(L.current.has(it))return;
  if(L.current.add(it),X.has(it))X.set(it,!0);
  else return;
  let Ot=!0;
  X.forEach(Ce=>{
  Ce||(Ot=!1)
}

),Ot&&(tt?.(),Z(U.current),f&&b?.(),o&&o())
}

;
  return g.jsx(j5,{
  isPresent:jt,initial:!z.current||l?void 0:!1,custom:i,presenceAffectsLayout:u,mode:d,root:m,onExitComplete:jt?void 0:Jt,anchorX:y,anchorY:p,children:$
}

,it)
}

)
}

)
}

,Gg=R.createContext({
  strict:!1
}

),Hp={
  animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]
}

;
  let Up=!1;
  function z5(){
  if(Up)return;
  const a={

}

;
  for(const i in Hp)a[i]={
  isEnabled:l=>Hp[i].some(o=>!!l[o])
}

;
  pg(a),Up=!0
}

function qg(){
  return z5(),gS()
}

function R5(a){
  const i=qg();
  for(const l in a)i[l]={
  ...i[l],...a[l]
}

;
  pg(i)
}

const O5=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);
  function go(a){
  return a.startsWith("while")||a.startsWith("drag")&&a!=="draggable"||a.startsWith("layout")||a.startsWith("onTap")||a.startsWith("onPan")||a.startsWith("onLayout")||O5.has(a)
}

let Yg=a=>!go(a);
  function V5(a){
  typeof a=="function"&&(Yg=i=>i.startsWith("on")?!go(i):a(i))
}

try{
  V5(require("@emotion/is-prop-valid").default)
}

catch{

}

function _5(a,i,l){
  const o={

}

;
  for(const u in a)u==="values"&&typeof a.values=="object"||(Yg(u)||l===!0&&go(u)||!i&&!go(u)||a.draggable&&u.startsWith("onDrag"))&&(o[u]=a[u]);
  return o
}

const wo=R.createContext({

}

);
  function B5(a,i){
  if(To(a)){
  const{
  initial:l,animate:o
}

=a;
  return{
  initial:l===!1||ws(l)?l:void 0,animate:ws(o)?o:void 0
}

}

return a.inherit!==!1?i:{

}

}

function H5(a){
  const{
  initial:i,animate:l
}

=B5(a,R.useContext(wo));
  return R.useMemo(()=>({
  initial:i,animate:l
}

),[Lp(i),Lp(l)])
}

function Lp(a){
  return Array.isArray(a)?a.join(" "):a
}

const bf=()=>({
  style:{

}

,transform:{

}

,transformOrigin:{

}

,vars:{

}

}

);
  function Xg(a,i,l){
  for(const o in i)!ie(i[o])&&!Tg(o,l)&&(a[o]=i[o])
}

function U5({
  transformTemplate:a
}

,i){
  return R.useMemo(()=>{
  const l=bf();
  return vf(l,i,a),Object.assign({

}

,l.vars,l.style)
}

,[i])
}

function L5(a,i){
  const l=a.style||{

}

,o={

}

;
  return Xg(o,l,a),Object.assign(o,U5(a,i)),o
}

function G5(a,i){
  const l={

}

,o=L5(a,i);
  return a.drag&&a.dragListener!==!1&&(l.draggable=!1,o.userSelect=o.WebkitUserSelect=o.WebkitTouchCallout="none",o.touchAction=a.drag===!0?"none":`pan-${
  a.drag==="x"?"y":"x"
}

`),a.tabIndex===void 0&&(a.onTap||a.onTapStart||a.whileTap)&&(l.tabIndex=0),l.style=o,l
}

const kg=()=>({
  ...bf(),attrs:{

}

}

);
  function q5(a,i,l,o){
  const u=R.useMemo(()=>{
  const d=kg();
  return Ag(d,i,Eg(o),a.transformTemplate,a.style),{
  ...d.attrs,style:{
  ...d.style
}

}

}

,[i]);
  if(a.style){
  const d={

}

;
  Xg(d,a.style,a),u.style={
  ...d,...u.style
}

}

return u
}

const Y5=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];
  function Sf(a){
  return typeof a!="string"||a.includes("-")?!1:!!(Y5.indexOf(a)>-1||/[A-Z]/u.test(a))
}

function X5(a,i,l,{
  latestValues:o
}

,u,d=!1,f){
  const p=(f??Sf(a)?q5:G5)(i,o,u,a),m=_5(i,typeof a=="string",d),x=a!==R.Fragment?{
  ...m,...p,ref:l
}

:{

}

,{
  children:b
}

=i,S=R.useMemo(()=>ie(b)?b.get():b,[b]);
  return R.createElement(a,{
  ...x,children:S
}

)
}

function k5({
  scrapeMotionValuesFromProps:a,createRenderState:i
}

,l,o,u){
  return{
  latestValues:K5(l,o,u,a),renderState:i()
}

}

function K5(a,i,l,o){
  const u={

}

,d=o(a,{

}

);
  for(const S in d)u[S]=so(d[S]);
  let{
  initial:f,animate:y
}

=a;
  const p=To(a),m=hg(a);
  i&&m&&!p&&a.inherit!==!1&&(f===void 0&&(f=i.initial),y===void 0&&(y=i.animate));
  let x=l?l.initial===!1:!1;
  x=x||f===!1;
  const b=x?y:f;
  if(b&&typeof b!="boolean"&&!So(b)){
  const S=Array.isArray(b)?b:[b];
  for(let N=0;
  N<S.length;
  N++){
  const z=uf(a,S[N]);
  if(z){
  const{
  transitionEnd:U,transition:X,...L
}

=z;
  for(const Y in L){
  let q=L[Y];
  if(Array.isArray(q)){
  const k=x?q.length-1:0;
  q=q[k]
}

q!==null&&(u[Y]=q)
}

for(const Y in U)u[Y]=U[Y]
}

}

}

return u
}

const Kg=a=>(i,l)=>{
  const o=R.useContext(wo),u=R.useContext(bo),d=()=>k5(a,i,o,u);
  return l?d():Wn(d)
}

,Q5=Kg({
  scrapeMotionValuesFromProps:xf,createRenderState:bf
}

),Z5=Kg({
  scrapeMotionValuesFromProps:Ng,createRenderState:kg
}

),J5=Symbol.for("motionComponentSymbol");
  function F5(a,i,l){
  const o=R.useRef(l);
  R.useInsertionEffect(()=>{
  o.current=l
}

);
  const u=R.useRef(null);
  return R.useCallback(d=>{
  d&&a.onMount?.(d),i&&(d?i.mount(d):i.unmount());
  const f=o.current;
  if(typeof f=="function")if(d){
  const y=f(d);
  typeof y=="function"&&(u.current=y)
}

else u.current?(u.current(),u.current=null):f(d);
  else f&&(f.current=d)
}

,[i])
}

const Qg=R.createContext({

}

);
  function ri(a){
  return a&&typeof a=="object"&&Object.prototype.hasOwnProperty.call(a,"current")
}

function W5(a,i,l,o,u,d){
  const{
  visualElement:f
}

=R.useContext(wo),y=R.useContext(Gg),p=R.useContext(bo),m=R.useContext(Ao),x=m.reducedMotion,b=m.skipAnimations,S=R.useRef(null),N=R.useRef(!1);
  o=o||y.renderer,!S.current&&o&&(S.current=o(a,{
  visualState:i,parent:f,props:l,presenceContext:p,blockInitialAnimation:p?p.initial===!1:!1,reducedMotionConfig:x,skipAnimations:b,isSVG:d
}

),N.current&&S.current&&(S.current.manuallyAnimateOnMount=!0));
  const z=S.current,U=R.useContext(Qg);
  z&&!z.projection&&u&&(z.type==="html"||z.type==="svg")&&P5(S.current,l,u,U);
  const X=R.useRef(!1);
  R.useInsertionEffect(()=>{
  z&&X.current&&z.update(l,p)
}

);
  const L=l[Iy],Y=R.useRef(!!L&&typeof window<"u"&&!window.MotionHandoffIsComplete?.(L)&&window.MotionHasOptimisedAnimation?.(L));
  return xo(()=>{
  N.current=!0,z&&(X.current=!0,window.MotionIsMounted=!0,z.updateFeatures(),z.scheduleRenderMicrotask(),Y.current&&z.animationState&&z.animationState.animateChanges())
}

),R.useEffect(()=>{
  z&&(!Y.current&&z.animationState&&z.animationState.animateChanges(),Y.current&&(queueMicrotask(()=>{
  window.MotionHandoffMarkAsComplete?.(L)
}

),Y.current=!1),z.enteringChildren=void 0)
}

),z
}

function P5(a,i,l,o){
  const{
  layoutId:u,layout:d,drag:f,dragConstraints:y,layoutScroll:p,layoutRoot:m,layoutCrossfade:x
}

=i;
  a.projection=new l(a.latestValues,i["data-framer-portal-id"]?void 0:Zg(a.parent)),a.projection.setOptions({
  layoutId:u,layout:d,alwaysMeasureLayout:!!f||y&&ri(y),visualElement:a,animationType:typeof d=="string"?d:"both",initialPromotionConfig:o,crossfade:x,layoutScroll:p,layoutRoot:m
}

)
}

function Zg(a){
  if(a)return a.options.allowProjection!==!1?a.projection:Zg(a.parent)
}

function lu(a,{
  forwardMotionProps:i=!1,type:l
}

={

}

,o,u){
  o&&R5(o);
  const d=l?l==="svg":Sf(a),f=d?Z5:Q5;
  function y(m,x){
  let b;
  const S={
  ...R.useContext(Ao),...m,layoutId:$5(m)
}

,{
  isStatic:N
}

=S,z=H5(m),U=f(m,N);
  if(!N&&typeof window<"u"){
  I5();
  const X=tT(S);
  b=X.MeasureLayout,z.visualElement=W5(a,U,S,u,X.ProjectionNode,d)
}

return g.jsxs(wo.Provider,{
  value:z,children:[b&&z.visualElement?g.jsx(b,{
  visualElement:z.visualElement,...S
}

):null,X5(a,m,F5(U,z.visualElement,x),U,N,i,d)]
}

)
}

y.displayName=`motion.${
  typeof a=="string"?a:`create(${
  a.displayName??a.name??""
}

)`
}

`;
  const p=R.forwardRef(y);
  return p[J5]=a,p
}

function $5({
  layoutId:a
}

){
  const i=R.useContext(Ku).id;
  return i&&a!==void 0?i+"-"+a:a
}

function I5(a,i){
  R.useContext(Gg).strict
}

function tT(a){
  const i=qg(),{
  drag:l,layout:o
}

=i;
  if(!l&&!o)return{

}

;
  const u={
  ...l,...o
}

;
  return{
  MeasureLayout:l?.isEnabled(a)||o?.isEnabled(a)?u.MeasureLayout:void 0,ProjectionNode:u.ProjectionNode
}

}

function eT(a,i){
  if(typeof Proxy>"u")return lu;
  const l=new Map,o=(d,f)=>lu(d,f,a,i),u=(d,f)=>o(d,f);
  return new Proxy(u,{
  get:(d,f)=>f==="create"?o:(l.has(f)||l.set(f,lu(f,void 0,a,i)),l.get(f))
}

)
}

const nT=(a,i)=>i.isSVG??Sf(a)?new VS(i):new CS(i,{
  allowProjection:a!==R.Fragment
}

);
  class aT extends Pn{
  constructor(i){
  super(i),i.animationState||(i.animationState=LS(i))
}

updateAnimationControlsSubscription(){
  const{
  animate:i
}

=this.node.getProps();
  So(i)&&(this.unmountControls=i.subscribe(this.node))
}

mount(){
  this.updateAnimationControlsSubscription()
}

update(){
  const{
  animate:i
}

=this.node.getProps(),{
  animate:l
}

=this.node.prevProps||{

}

;
  i!==l&&this.updateAnimationControlsSubscription()
}

unmount(){
  this.node.animationState.reset(),this.unmountControls?.()
}

}

let iT=0;
  class sT extends Pn{
  constructor(){
  super(...arguments),this.id=iT++
}

update(){
  if(!this.node.presenceContext)return;
  const{
  isPresent:i,onExitComplete:l
}

=this.node.presenceContext,{
  isPresent:o
}

=this.node.prevPresenceContext||{

}

;
  if(!this.node.animationState||i===o)return;
  const u=this.node.animationState.setActive("exit",!i);
  l&&!i&&u.then(()=>{
  l(this.id)
}

)
}

mount(){
  const{
  register:i,onExitComplete:l
}

=this.node.presenceContext||{

}

;
  l&&l(this.id),i&&(this.unmount=i(this.id))
}

unmount(){

}

}

const lT={
  animation:{
  Feature:aT
}

,exit:{
  Feature:sT
}

}

;
  function js(a){
  return{
  point:{
  x:a.pageX,y:a.pageY
}

}

}

const oT=a=>i=>mf(i)&&a(i,js(i));
  function bs(a,i,l,o){
  return Es(a,i,oT(l),o)
}

const Jg=({
  current:a
}

)=>a?a.ownerDocument.defaultView:null,Gp=(a,i)=>Math.abs(a-i);
  function rT(a,i){
  const l=Gp(a.x,i.x),o=Gp(a.y,i.y);
  return Math.sqrt(l**2+o**2)
}

const qp=new Set(["auto","scroll"]);
  class Fg{
  constructor(i,l,{
  transformPagePoint:o,contextWindow:u=window,dragSnapToOrigin:d=!1,distanceThreshold:f=3,element:y
}

={

}

){
  if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={

}

,this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=N=>{
  this.handleScroll(N.target)
}

,this.onWindowScroll=()=>{
  this.handleScroll(window)
}

,this.updatePoint=()=>{
  if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;
  const N=ru(this.lastMoveEventInfo,this.history),z=this.startEvent!==null,U=rT(N.offset,{
  x:0,y:0
}

)>=this.distanceThreshold;
  if(!z&&!U)return;
  const{
  point:X
}

=N,{
  timestamp:L
}

=Pt;
  this.history.push({
  ...X,timestamp:L
}

);
  const{
  onStart:Y,onMove:q
}

=this.handlers;
  z||(Y&&Y(this.lastMoveEvent,N),this.startEvent=this.lastMoveEvent),q&&q(this.lastMoveEvent,N)
}

,this.handlePointerMove=(N,z)=>{
  this.lastMoveEvent=N,this.lastMoveEventInfo=ou(z,this.transformPagePoint),bt.update(this.updatePoint,!0)
}

,this.handlePointerUp=(N,z)=>{
  this.end();
  const{
  onEnd:U,onSessionEnd:X,resumeAnimation:L
}

=this.handlers;
  if((this.dragSnapToOrigin||!this.startEvent)&&L&&L(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;
  const Y=ru(N.type==="pointercancel"?this.lastMoveEventInfo:ou(z,this.transformPagePoint),this.history);
  this.startEvent&&U&&U(N,Y),X&&X(N,Y)
}

,!mf(i))return;
  this.dragSnapToOrigin=d,this.handlers=l,this.transformPagePoint=o,this.distanceThreshold=f,this.contextWindow=u||window;
  const p=js(i),m=ou(p,this.transformPagePoint),{
  point:x
}

=m,{
  timestamp:b
}

=Pt;
  this.history=[{
  ...x,timestamp:b
}

];
  const{
  onSessionStart:S
}

=l;
  S&&S(i,ru(m,this.history)),this.removeListeners=Ns(bs(this.contextWindow,"pointermove",this.handlePointerMove),bs(this.contextWindow,"pointerup",this.handlePointerUp),bs(this.contextWindow,"pointercancel",this.handlePointerUp)),y&&this.startScrollTracking(y)
}

startScrollTracking(i){
  let l=i.parentElement;
  for(;
  l;
  ){
  const o=getComputedStyle(l);
  (qp.has(o.overflowX)||qp.has(o.overflowY))&&this.scrollPositions.set(l,{
  x:l.scrollLeft,y:l.scrollTop
}

),l=l.parentElement
}

this.scrollPositions.set(window,{
  x:window.scrollX,y:window.scrollY
}

),window.addEventListener("scroll",this.onElementScroll,{
  capture:!0
}

),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{
  window.removeEventListener("scroll",this.onElementScroll,{
  capture:!0
}

),window.removeEventListener("scroll",this.onWindowScroll)
}

}

handleScroll(i){
  const l=this.scrollPositions.get(i);
  if(!l)return;
  const o=i===window,u=o?{
  x:window.scrollX,y:window.scrollY
}

:{
  x:i.scrollLeft,y:i.scrollTop
}

,d={
  x:u.x-l.x,y:u.y-l.y
}

;
  d.x===0&&d.y===0||(o?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=d.x,this.lastMoveEventInfo.point.y+=d.y):this.history.length>0&&(this.history[0].x-=d.x,this.history[0].y-=d.y),this.scrollPositions.set(i,u),bt.update(this.updatePoint,!0))
}

updateHandlers(i){
  this.handlers=i
}

end(){
  this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),Ge(this.updatePoint)
}

}

function ou(a,i){
  return i?{
  point:i(a.point)
}

:a
}

function Yp(a,i){
  return{
  x:a.x-i.x,y:a.y-i.y
}

}

function ru({
  point:a
}

,i){
  return{
  point:a,delta:Yp(a,Wg(i)),offset:Yp(a,cT(i)),velocity:uT(i,.1)
}

}

function cT(a){
  return a[0]
}

function Wg(a){
  return a[a.length-1]
}

function uT(a,i){
  if(a.length<2)return{
  x:0,y:0
}

;
  let l=a.length-1,o=null;
  const u=Wg(a);
  for(;
  l>=0&&(o=a[l],!(u.timestamp-o.timestamp>Je(i)));
  )l--;
  if(!o)return{
  x:0,y:0
}

;
  o===a[0]&&a.length>2&&u.timestamp-o.timestamp>Je(i)*2&&(o=a[1]);
  const d=Le(u.timestamp-o.timestamp);
  if(d===0)return{
  x:0,y:0
}

;
  const f={
  x:(u.x-o.x)/d,y:(u.y-o.y)/d
}

;
  return f.x===1/0&&(f.x=0),f.y===1/0&&(f.y=0),f
}

function fT(a,{
  min:i,max:l
}

,o){
  return i!==void 0&&a<i?a=o?Vt(i,a,o.min):Math.max(a,i):l!==void 0&&a>l&&(a=o?Vt(l,a,o.max):Math.min(a,l)),a
}

function Xp(a,i,l){
  return{
  min:i!==void 0?a.min+i:void 0,max:l!==void 0?a.max+l-(a.max-a.min):void 0
}

}

function dT(a,{
  top:i,left:l,bottom:o,right:u
}

){
  return{
  x:Xp(a.x,l,u),y:Xp(a.y,i,o)
}

}

function kp(a,i){
  let l=i.min-a.min,o=i.max-a.max;
  return i.max-i.min<a.max-a.min&&([l,o]=[o,l]),{
  min:l,max:o
}

}

function hT(a,i){
  return{
  x:kp(a.x,i.x),y:kp(a.y,i.y)
}

}

function mT(a,i){
  let l=.5;
  const o=re(a),u=re(i);
  return u>o?l=pi(i.min,i.max-o,a.min):o>u&&(l=pi(a.min,a.max-u,i.min)),We(0,1,l)
}

function pT(a,i){
  const l={

}

;
  return i.min!==void 0&&(l.min=i.min-a.min),i.max!==void 0&&(l.max=i.max-a.min),l
}

const Gu=.35;
  function yT(a=Gu){
  return a===!1?a=0:a===!0&&(a=Gu),{
  x:Kp(a,"left","right"),y:Kp(a,"top","bottom")
}

}

function Kp(a,i,l){
  return{
  min:Qp(a,i),max:Qp(a,l)
}

}

function Qp(a,i){
  return typeof a=="number"?a:a[i]||0
}

const gT=new WeakMap;
  class vT{
  constructor(i){
  this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={
  x:0,y:0
}

,this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Zt(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=i
}

start(i,{
  snapToCursor:l=!1,distanceThreshold:o
}

={

}

){
  const{
  presenceContext:u
}

=this.visualElement;
  if(u&&u.isPresent===!1)return;
  const d=b=>{
  l&&this.snapToCursor(js(b).point),this.stopAnimation()
}

,f=(b,S)=>{
  const{
  drag:N,dragPropagation:z,onDragStart:U
}

=this.getProps();
  if(N&&!z&&(this.openDragLock&&this.openDragLock(),this.openDragLock=Qb(N),!this.openDragLock))return;
  this.latestPointerEvent=b,this.latestPanInfo=S,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),en(L=>{
  let Y=this.getAxisMotionValue(L).get()||0;
  if(nn.test(Y)){
  const{
  projection:q
}

=this.visualElement;
  if(q&&q.layout){
  const k=q.layout.layoutBox[L];
  k&&(Y=re(k)*(parseFloat(Y)/100))
}

}

this.originPoint[L]=Y
}

),U&&bt.update(()=>U(b,S),!1,!0),Du(this.visualElement,"transform");
  const{
  animationState:X
}

=this.visualElement;
  X&&X.setActive("whileDrag",!0)
}

,y=(b,S)=>{
  this.latestPointerEvent=b,this.latestPanInfo=S;
  const{
  dragPropagation:N,dragDirectionLock:z,onDirectionLock:U,onDrag:X
}

=this.getProps();
  if(!N&&!this.openDragLock)return;
  const{
  offset:L
}

=S;
  if(z&&this.currentDirection===null){
  this.currentDirection=bT(L),this.currentDirection!==null&&U&&U(this.currentDirection);
  return
}

this.updateAxis("x",S.point,L),this.updateAxis("y",S.point,L),this.visualElement.render(),X&&bt.update(()=>X(b,S),!1,!0)
}

,p=(b,S)=>{
  this.latestPointerEvent=b,this.latestPanInfo=S,this.stop(b,S),this.latestPointerEvent=null,this.latestPanInfo=null
}

,m=()=>{
  const{
  dragSnapToOrigin:b
}

=this.getProps();
  (b||this.constraints)&&this.startAnimation({
  x:0,y:0
}

)
}

,{
  dragSnapToOrigin:x
}

=this.getProps();
  this.panSession=new Fg(i,{
  onSessionStart:d,onStart:f,onMove:y,onSessionEnd:p,resumeAnimation:m
}

,{
  transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:x,distanceThreshold:o,contextWindow:Jg(this.visualElement),element:this.visualElement.current
}

)
}

stop(i,l){
  const o=i||this.latestPointerEvent,u=l||this.latestPanInfo,d=this.isDragging;
  if(this.cancel(),!d||!u||!o)return;
  const{
  velocity:f
}

=u;
  this.startAnimation(f);
  const{
  onDragEnd:y
}

=this.getProps();
  y&&bt.postRender(()=>y(o,u))
}

cancel(){
  this.isDragging=!1;
  const{
  projection:i,animationState:l
}

=this.visualElement;
  i&&(i.isAnimationBlocked=!1),this.endPanSession();
  const{
  dragPropagation:o
}

=this.getProps();
  !o&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),l&&l.setActive("whileDrag",!1)
}

endPanSession(){
  this.panSession&&this.panSession.end(),this.panSession=void 0
}

updateAxis(i,l,o){
  const{
  drag:u
}

=this.getProps();
  if(!o||!Pl(i,u,this.currentDirection))return;
  const d=this.getAxisMotionValue(i);
  let f=this.originPoint[i]+o[i];
  this.constraints&&this.constraints[i]&&(f=fT(f,this.constraints[i],this.elastic[i])),d.set(f)
}

resolveConstraints(){
  const{
  dragConstraints:i,dragElastic:l
}

=this.getProps(),o=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,u=this.constraints;
  i&&ri(i)?this.constraints||(this.constraints=this.resolveRefConstraints()):i&&o?this.constraints=dT(o.layoutBox,i):this.constraints=!1,this.elastic=yT(l),u!==this.constraints&&!ri(i)&&o&&this.constraints&&!this.hasMutatedConstraints&&en(d=>{
  this.constraints!==!1&&this.getAxisMotionValue(d)&&(this.constraints[d]=pT(o.layoutBox[d],this.constraints[d]))
}

)
}

resolveRefConstraints(){
  const{
  dragConstraints:i,onMeasureDragConstraints:l
}

=this.getProps();
  if(!i||!ri(i))return!1;
  const o=i.current,{
  projection:u
}

=this.visualElement;
  if(!u||!u.layout)return!1;
  const d=TS(o,u.root,this.visualElement.getTransformPagePoint());
  let f=hT(u.layout.layoutBox,d);
  if(l){
  const y=l(xS(f));
  this.hasMutatedConstraints=!!y,y&&(f=gg(y))
}

return f
}

startAnimation(i){
  const{
  drag:l,dragMomentum:o,dragElastic:u,dragTransition:d,dragSnapToOrigin:f,onDragTransitionEnd:y
}

=this.getProps(),p=this.constraints||{

}

,m=en(x=>{
  if(!Pl(x,l,this.currentDirection))return;
  let b=p&&p[x]||{

}

;
  f&&(b={
  min:0,max:0
}

);
  const S=u?200:1e6,N=u?40:1e7,z={
  type:"inertia",velocity:o?i[x]:0,bounceStiffness:S,bounceDamping:N,timeConstant:750,restDelta:1,restSpeed:10,...d,...b
}

;
  return this.startAxisValueAnimation(x,z)
}

);
  return Promise.all(m).then(y)
}

startAxisValueAnimation(i,l){
  const o=this.getAxisMotionValue(i);
  return Du(this.visualElement,i),o.start(cf(i,o,0,l,this.visualElement,!1))
}

stopAnimation(){
  en(i=>this.getAxisMotionValue(i).stop())
}

getAxisMotionValue(i){
  const l=`_drag${
  i.toUpperCase()
}

`,o=this.visualElement.getProps(),u=o[l];
  return u||this.visualElement.getValue(i,(o.initial?o.initial[i]:void 0)||0)
}

snapToCursor(i){
  en(l=>{
  const{
  drag:o
}

=this.getProps();
  if(!Pl(l,o,this.currentDirection))return;
  const{
  projection:u
}

=this.visualElement,d=this.getAxisMotionValue(l);
  if(u&&u.layout){
  const{
  min:f,max:y
}

=u.layout.layoutBox[l],p=d.get()||0;
  d.set(i[l]-Vt(f,y,.5)+p)
}

}

)
}

scalePositionWithinConstraints(){
  if(!this.visualElement.current)return;
  const{
  drag:i,dragConstraints:l
}

=this.getProps(),{
  projection:o
}

=this.visualElement;
  if(!ri(l)||!o||!this.constraints)return;
  this.stopAnimation();
  const u={
  x:0,y:0
}

;
  en(f=>{
  const y=this.getAxisMotionValue(f);
  if(y&&this.constraints!==!1){
  const p=y.get();
  u[f]=mT({
  min:p,max:p
}

,this.constraints[f])
}

}

);
  const{
  transformTemplate:d
}

=this.visualElement.getProps();
  this.visualElement.current.style.transform=d?d({

}

,""):"none",o.root&&o.root.updateScroll(),o.updateLayout(),this.constraints=!1,this.resolveConstraints(),en(f=>{
  if(!Pl(f,i,null))return;
  const y=this.getAxisMotionValue(f),{
  min:p,max:m
}

=this.constraints[f];
  y.set(Vt(p,m,u[f]))
}

),this.visualElement.render()
}

addListeners(){
  if(!this.visualElement.current)return;
  gT.set(this.visualElement,this);
  const i=this.visualElement.current,l=bs(i,"pointerdown",m=>{
  const{
  drag:x,dragListener:b=!0
}

=this.getProps(),S=m.target,N=S!==i&&$b(S);
  x&&b&&!N&&this.start(m)
}

);
  let o;
  const u=()=>{
  const{
  dragConstraints:m
}

=this.getProps();
  ri(m)&&m.current&&(this.constraints=this.resolveRefConstraints(),o||(o=xT(i,m.current,()=>this.scalePositionWithinConstraints())))
}

,{
  projection:d
}

=this.visualElement,f=d.addEventListener("measure",u);
  d&&!d.layout&&(d.root&&d.root.updateScroll(),d.updateLayout()),bt.read(u);
  const y=Es(window,"resize",()=>this.scalePositionWithinConstraints()),p=d.addEventListener("didUpdate",(({
  delta:m,hasLayoutChanged:x
}

)=>{
  this.isDragging&&x&&(en(b=>{
  const S=this.getAxisMotionValue(b);
  S&&(this.originPoint[b]+=m[b].translate,S.set(S.get()+m[b].translate))
}

),this.visualElement.render())
}

));
  return()=>{
  y(),l(),f(),p&&p(),o&&o()
}

}

getProps(){
  const i=this.visualElement.getProps(),{
  drag:l=!1,dragDirectionLock:o=!1,dragPropagation:u=!1,dragConstraints:d=!1,dragElastic:f=Gu,dragMomentum:y=!0
}

=i;
  return{
  ...i,drag:l,dragDirectionLock:o,dragPropagation:u,dragConstraints:d,dragElastic:f,dragMomentum:y
}

}

}

function Zp(a){
  let i=!0;
  return()=>{
  if(i){
  i=!1;
  return
}

a()
}

}

function xT(a,i,l){
  const o=Vu(a,Zp(l)),u=Vu(i,Zp(l));
  return()=>{
  o(),u()
}

}

function Pl(a,i,l){
  return(i===!0||i===a)&&(l===null||l===a)
}

function bT(a,i=10){
  let l=null;
  return Math.abs(a.y)>i?l="y":Math.abs(a.x)>i&&(l="x"),l
}

class ST extends Pn{
  constructor(i){
  super(i),this.removeGroupControls=ge,this.removeListeners=ge,this.controls=new vT(i)
}

mount(){
  const{
  dragControls:i
}

=this.node.getProps();
  i&&(this.removeGroupControls=i.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||ge
}

update(){
  const{
  dragControls:i
}

=this.node.getProps(),{
  dragControls:l
}

=this.node.prevProps||{

}

;
  i!==l&&(this.removeGroupControls(),i&&(this.removeGroupControls=i.subscribe(this.controls)))
}

unmount(){
  this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()
}

}

const cu=a=>(i,l)=>{
  a&&bt.update(()=>a(i,l),!1,!0)
}

;
  class TT extends Pn{
  constructor(){
  super(...arguments),this.removePointerDownListener=ge
}

onPointerDown(i){
  this.session=new Fg(i,this.createPanHandlers(),{
  transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Jg(this.node)
}

)
}

createPanHandlers(){
  const{
  onPanSessionStart:i,onPanStart:l,onPan:o,onPanEnd:u
}

=this.node.getProps();
  return{
  onSessionStart:cu(i),onStart:cu(l),onMove:cu(o),onEnd:(d,f)=>{
  delete this.session,u&&bt.postRender(()=>u(d,f))
}

}

}

mount(){
  this.removePointerDownListener=bs(this.node.current,"pointerdown",i=>this.onPointerDown(i))
}

update(){
  this.session&&this.session.updateHandlers(this.createPanHandlers())
}

unmount(){
  this.removePointerDownListener(),this.session&&this.session.end()
}

}

let uu=!1;
  class AT extends R.Component{
  componentDidMount(){
  const{
  visualElement:i,layoutGroup:l,switchLayoutGroup:o,layoutId:u
}

=this.props,{
  projection:d
}

=i;
  d&&(l.group&&l.group.add(d),o&&o.register&&u&&o.register(d),uu&&d.root.didUpdate(),d.addEventListener("animationComplete",()=>{
  this.safeToRemove()
}

),d.setOptions({
  ...d.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()
}

)),lo.hasEverUpdated=!0
}

getSnapshotBeforeUpdate(i){
  const{
  layoutDependency:l,visualElement:o,drag:u,isPresent:d
}

=this.props,{
  projection:f
}

=o;
  return f&&(f.isPresent=d,i.layoutDependency!==l&&f.setOptions({
  ...f.options,layoutDependency:l
}

),uu=!0,u||i.layoutDependency!==l||l===void 0||i.isPresent!==d?f.willUpdate():this.safeToRemove(),i.isPresent!==d&&(d?f.promote():f.relegate()||bt.postRender(()=>{
  const y=f.getStack();
  (!y||!y.members.length)&&this.safeToRemove()
}

))),null
}

componentDidUpdate(){
  const{
  projection:i
}

=this.props.visualElement;
  i&&(i.root.didUpdate(),hf.postRender(()=>{
  !i.currentAnimation&&i.isLead()&&this.safeToRemove()
}

))
}

componentWillUnmount(){
  const{
  visualElement:i,layoutGroup:l,switchLayoutGroup:o
}

=this.props,{
  projection:u
}

=i;
  uu=!0,u&&(u.scheduleCheckAfterUnmount(),l&&l.group&&l.group.remove(u),o&&o.deregister&&o.deregister(u))
}

safeToRemove(){
  const{
  safeToRemove:i
}

=this.props;
  i&&i()
}

render(){
  return null
}

}

function Pg(a){
  const[i,l]=Lg(),o=R.useContext(Ku);
  return g.jsx(AT,{
  ...a,layoutGroup:o,switchLayoutGroup:R.useContext(Qg),isPresent:i,safeToRemove:l
}

)
}

const wT={
  pan:{
  Feature:TT
}

,drag:{
  Feature:ST,ProjectionNode:Ug,MeasureLayout:Pg
}

}

;
  function Jp(a,i,l){
  const{
  props:o
}

=a;
  a.animationState&&o.whileHover&&a.animationState.setActive("whileHover",l==="Start");
  const u="onHover"+l,d=o[u];
  d&&bt.postRender(()=>d(i,js(i)))
}

class ET extends Pn{
  mount(){
  const{
  current:i
}

=this.node;
  i&&(this.unmount=Jb(i,(l,o)=>(Jp(this.node,o,"Start"),u=>Jp(this.node,u,"End"))))
}

unmount(){

}

}

class NT extends Pn{
  constructor(){
  super(...arguments),this.isActive=!1
}

onFocus(){
  let i=!1;
  try{
  i=this.node.current.matches(":focus-visible")
}

catch{
  i=!0
}

!i||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)
}

onBlur(){
  !this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)
}

mount(){
  this.unmount=Ns(Es(this.node.current,"focus",()=>this.onFocus()),Es(this.node.current,"blur",()=>this.onBlur()))
}

unmount(){

}

}

function Fp(a,i,l){
  const{
  props:o
}

=a;
  if(a.current instanceof HTMLButtonElement&&a.current.disabled)return;
  a.animationState&&o.whileTap&&a.animationState.setActive("whileTap",l==="Start");
  const u="onTap"+(l==="End"?"":l),d=o[u];
  d&&bt.postRender(()=>d(i,js(i)))
}

class MT extends Pn{
  mount(){
  const{
  current:i
}

=this.node;
  if(!i)return;
  const{
  globalTapTarget:l,propagate:o
}

=this.node.props;
  this.unmount=tS(i,(u,d)=>(Fp(this.node,d,"Start"),(f,{
  success:y
}

)=>Fp(this.node,f,y?"End":"Cancel")),{
  useGlobalTarget:l,stopPropagation:o?.tap===!1
}

)
}

unmount(){

}

}

const qu=new WeakMap,fu=new WeakMap,CT=a=>{
  const i=qu.get(a.target);
  i&&i(a)
}

,jT=a=>{
  a.forEach(CT)
}

;
  function DT({
  root:a,...i
}

){
  const l=a||document;
  fu.has(l)||fu.set(l,{

}

);
  const o=fu.get(l),u=JSON.stringify(i);
  return o[u]||(o[u]=new IntersectionObserver(jT,{
  root:a,...i
}

)),o[u]
}

function zT(a,i,l){
  const o=DT(i);
  return qu.set(a,l),o.observe(a),()=>{
  qu.delete(a),o.unobserve(a)
}

}

const RT={
  some:0,all:1
}

;
  class OT extends Pn{
  constructor(){
  super(...arguments),this.hasEnteredView=!1,this.isInView=!1
}

startObserver(){
  this.unmount();
  const{
  viewport:i={

}

}

=this.node.getProps(),{
  root:l,margin:o,amount:u="some",once:d
}

=i,f={
  root:l?l.current:void 0,rootMargin:o,threshold:typeof u=="number"?u:RT[u]
}

,y=p=>{
  const{
  isIntersecting:m
}

=p;
  if(this.isInView===m||(this.isInView=m,d&&!m&&this.hasEnteredView))return;
  m&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",m);
  const{
  onViewportEnter:x,onViewportLeave:b
}

=this.node.getProps(),S=m?x:b;
  S&&S(p)
}

;
  return zT(this.node.current,f,y)
}

mount(){
  this.startObserver()
}

update(){
  if(typeof IntersectionObserver>"u")return;
  const{
  props:i,prevProps:l
}

=this.node;
  ["amount","margin","root"].some(VT(i,l))&&this.startObserver()
}

unmount(){

}

}

function VT({
  viewport:a={

}

}

,{
  viewport:i={

}

}

={

}

){
  return l=>a[l]!==i[l]
}

const _T={
  inView:{
  Feature:OT
}

,tap:{
  Feature:MT
}

,focus:{
  Feature:NT
}

,hover:{
  Feature:ET
}

}

,BT={
  layout:{
  ProjectionNode:Ug,MeasureLayout:Pg
}

}

,HT={
  ...lT,..._T,...wT,...BT
}

,G=eT(HT,nT),UT=50,Wp=()=>({
  current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0
}

),LT=()=>({
  time:0,x:Wp(),y:Wp()
}

),GT={
  x:{
  length:"Width",position:"Left"
}

,y:{
  length:"Height",position:"Top"
}

}

;
  function Pp(a,i,l,o){
  const u=l[i],{
  length:d,position:f
}

=GT[i],y=u.current,p=l.time;
  u.current=a[`scroll${
  f
}

`],u.scrollLength=a[`scroll${
  d
}

`]-a[`client${
  d
}

`],u.offset.length=0,u.offset[0]=0,u.offset[1]=u.scrollLength,u.progress=pi(0,u.scrollLength,u.current);
  const m=o-p;
  u.velocity=m>UT?0:Ju(u.current-y,m)
}

function qT(a,i,l){
  Pp(a,"x",i,l),Pp(a,"y",i,l),i.time=l
}

function YT(a,i){
  const l={
  x:0,y:0
}

;
  let o=a;
  for(;
  o&&o!==i;
  )if(ho(o))l.x+=o.offsetLeft,l.y+=o.offsetTop,o=o.offsetParent;
  else if(o.tagName==="svg"){
  const u=o.getBoundingClientRect();
  o=o.parentElement;
  const d=o.getBoundingClientRect();
  l.x+=u.left-d.left,l.y+=u.top-d.top
}

else if(o instanceof SVGGraphicsElement){
  const{
  x:u,y:d
}

=o.getBBox();
  l.x+=u,l.y+=d;
  let f=null,y=o.parentNode;
  for(;
  !f;
  )y.tagName==="svg"&&(f=y),y=o.parentNode;
  o=f
}

else break;
  return l
}

const Yu={
  start:0,center:.5,end:1
}

;
  function $p(a,i,l=0){
  let o=0;
  if(a in Yu&&(a=Yu[a]),typeof a=="string"){
  const u=parseFloat(a);
  a.endsWith("px")?o=u:a.endsWith("%")?a=u/100:a.endsWith("vw")?o=u/100*document.documentElement.clientWidth:a.endsWith("vh")?o=u/100*document.documentElement.clientHeight:a=u
}

return typeof a=="number"&&(o=i*a),l+o
}

const XT=[0,0];
  function kT(a,i,l,o){
  let u=Array.isArray(a)?a:XT,d=0,f=0;
  return typeof a=="number"?u=[a,a]:typeof a=="string"&&(a=a.trim(),a.includes(" ")?u=a.split(" "):u=[a,Yu[a]?a:"0"]),d=$p(u[0],l,o),f=$p(u[1],i),d-f
}

const KT={
  All:[[0,0],[1,1]]
}

,QT={
  x:0,y:0
}

;
  function ZT(a){
  return"getBBox"in a&&a.tagName!=="svg"?a.getBBox():{
  width:a.clientWidth,height:a.clientHeight
}

}

function JT(a,i,l){
  const{
  offset:o=KT.All
}

=l,{
  target:u=a,axis:d="y"
}

=l,f=d==="y"?"height":"width",y=u!==a?YT(u,a):QT,p=u===a?{
  width:a.scrollWidth,height:a.scrollHeight
}

:ZT(u),m={
  width:a.clientWidth,height:a.clientHeight
}

;
  i[d].offset.length=0;
  let x=!i[d].interpolate;
  const b=o.length;
  for(let S=0;
  S<b;
  S++){
  const N=kT(o[S],m[f],p[f],y[d]);
  !x&&N!==i[d].interpolatorOffsets[S]&&(x=!0),i[d].offset[S]=N
}

x&&(i[d].interpolate=nf(i[d].offset,Uy(o),{
  clamp:!1
}

),i[d].interpolatorOffsets=[...i[d].offset]),i[d].progress=We(0,1,i[d].interpolate(i[d].current))
}

function FT(a,i=a,l){
  if(l.x.targetOffset=0,l.y.targetOffset=0,i!==a){
  let o=i;
  for(;
  o&&o!==a;
  )l.x.targetOffset+=o.offsetLeft,l.y.targetOffset+=o.offsetTop,o=o.offsetParent
}

l.x.targetLength=i===a?i.scrollWidth:i.clientWidth,l.y.targetLength=i===a?i.scrollHeight:i.clientHeight,l.x.containerLength=a.clientWidth,l.y.containerLength=a.clientHeight
}

function WT(a,i,l,o={

}

){
  return{
  measure:u=>{
  FT(a,o.target,l),qT(a,l,u),(o.offset||o.target)&&JT(a,l,o)
}

,notify:()=>i(l)
}

}

const oi=new WeakMap,Ip=new WeakMap,du=new WeakMap,ty=new WeakMap,$l=new WeakMap,ey=a=>a===document.scrollingElement?window:a;
  function $g(a,{
  container:i=document.scrollingElement,trackContentSize:l=!1,...o
}

={

}

){
  if(!i)return ge;
  let u=du.get(i);
  u||(u=new Set,du.set(i,u));
  const d=LT(),f=WT(i,a,d,o);
  if(u.add(f),!oi.has(i)){
  const p=()=>{
  for(const S of u)S.measure(Pt.timestamp);
  bt.preUpdate(m)
}

,m=()=>{
  for(const S of u)S.notify()
}

,x=()=>bt.read(p);
  oi.set(i,x);
  const b=ey(i);
  window.addEventListener("resize",x),i!==document.documentElement&&Ip.set(i,Vu(i,x)),b.addEventListener("scroll",x),x()
}

if(l&&!$l.has(i)){
  const p=oi.get(i),m={
  width:i.scrollWidth,height:i.scrollHeight
}

;
  ty.set(i,m);
  const x=()=>{
  const S=i.scrollWidth,N=i.scrollHeight;
  (m.width!==S||m.height!==N)&&(p(),m.width=S,m.height=N)
}

,b=bt.read(x,!0);
  $l.set(i,b)
}

const y=oi.get(i);
  return bt.read(y,!1,!0),()=>{
  Ge(y);
  const p=du.get(i);
  if(!p||(p.delete(f),p.size))return;
  const m=oi.get(i);
  oi.delete(i),m&&(ey(i).removeEventListener("scroll",m),Ip.get(i)?.(),window.removeEventListener("resize",m));
  const x=$l.get(i);
  x&&(Ge(x),$l.delete(i)),ty.delete(i)
}

}

function Ig(a){
  return typeof window<"u"&&!a&&Xy()
}

const ny=new Map;
  function PT(a){
  const i={
  value:0
}

,l=$g(o=>{
  i.value=o[a.axis].progress*100
}

,a);
  return{
  currentTime:i,cancel:l
}

}

function t1({
  source:a,container:i,...l
}

){
  const{
  axis:o
}

=l;
  a&&(i=a);
  const u=ny.get(i)??new Map;
  ny.set(i,u);
  const d=l.target??"self",f=u.get(d)??{

}

,y=o+(l.offset??[]).join(",");
  return f[y]||(f[y]=Ig(l.target)?new ScrollTimeline({
  source:i,axis:o
}

):PT({
  container:i,...l
}

)),f[y]
}

function $T(a,i){
  const l=t1(i);
  return a.attachTimeline({
  timeline:i.target?void 0:l,observe:o=>(o.pause(),dg(u=>{
  o.time=o.iterationDuration*u
}

,l))
}

)
}

function IT(a){
  return a.length===2
}

function t3(a,i){
  return IT(a)?$g(l=>{
  a(l[i.axis].progress,l)
}

,i):dg(a,t1(i))
}

function e1(a,{
  axis:i="y",container:l=document.scrollingElement,...o
}

={

}

){
  if(!l)return ge;
  const u={
  axis:i,container:l,...o
}

;
  return typeof a=="function"?t3(a,u):$T(a,u)
}

const e3=()=>({
  scrollX:Ze(0),scrollY:Ze(0),scrollXProgress:Ze(0),scrollYProgress:Ze(0)
}

),Il=a=>a?!a.current:!1;
  function ay(a,i,l){
  return{
  factory:o=>e1(o,{
  ...i,axis:a,container:l
}

),times:[0,1],keyframes:[0,1],ease:o=>o,duration:1
}

}

function n3({
  container:a,target:i,...l
}

={

}

){
  const o=Wn(e3);
  if(!i&&Ig()){
  const y=a?.current||void 0;
  o.scrollXProgress.accelerate=ay("x",l,y),o.scrollYProgress.accelerate=ay("y",l,y)
}

const u=R.useRef(null),d=R.useRef(!1),f=R.useCallback(()=>(u.current=e1((y,{
  x:p,y:m
}

)=>{
  o.scrollX.set(p.current),o.scrollXProgress.set(p.progress),o.scrollY.set(m.current),o.scrollYProgress.set(m.progress)
}

,{
  ...l,container:a?.current||void 0,target:i?.current||void 0
}

),()=>{
  u.current?.()
}

),[a,i,JSON.stringify(l.offset)]);
  return xo(()=>{
  if(d.current=!1,Il(a)||Il(i)){
  d.current=!0;
  return
}

else return f()
}

,[f]),R.useEffect(()=>{
  if(d.current)return Ss(!Il(a)),Ss(!Il(i)),f()
}

,[f]),o
}

function a3(a){
  const i=Wn(()=>Ze(a)),{
  isStatic:l
}

=R.useContext(Ao);
  if(l){
  const[,o]=R.useState(a);
  R.useEffect(()=>i.on("change",o),[])
}

return i
}

function n1(a,i){
  const l=a3(i()),o=()=>l.set(i());
  return o(),xo(()=>{
  const u=()=>bt.preRender(o,!1,!0),d=a.map(f=>f.on("change",u));
  return()=>{
  d.forEach(f=>f()),Ge(o)
}

}

),l
}

function i3(a){
  vs.current=[],a();
  const i=n1(vs.current,a);
  return vs.current=void 0,i
}

function oo(a,i,l,o){
  if(typeof a=="function")return i3(a);
  if(l!==void 0&&!Array.isArray(l)&&typeof i!="function")return s3(a,i,l,o);
  const f=typeof i=="function"?i:uS(i,l,o),y=Array.isArray(a)?iy(a,f):iy([a],([m])=>f(m)),p=Array.isArray(a)?void 0:a.accelerate;
  return p&&!p.isTransformed&&typeof i!="function"&&Array.isArray(l)&&o?.clamp!==!1&&(y.accelerate={
  ...p,times:i,keyframes:l,isTransformed:!0
}

),y
}

function iy(a,i){
  const l=Wn(()=>[]);
  return n1(a,()=>{
  l.length=0;
  const o=a.length;
  for(let u=0;
  u<o;
  u++)l[u]=a[u].get();
  return i(l)
}

)
}

function s3(a,i,l,o){
  const u=Wn(()=>Object.keys(l)),d=Wn(()=>({

}

));
  for(const f of u)d[f]=oo(a,i,l[f],o);
  return d
}

const l3=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),o3=a=>a.replace(/^([A-Z])|[\s-_]+(\w)/g,(i,l,o)=>o?o.toUpperCase():l.toLowerCase()),sy=a=>{
  const i=o3(a);
  return i.charAt(0).toUpperCase()+i.slice(1)
}

,a1=(...a)=>a.filter((i,l,o)=>!!i&&i.trim()!==""&&o.indexOf(i)===l).join(" ").trim(),r3=a=>{
  for(const i in a)if(i.startsWith("aria-")||i==="role"||i==="title")return!0
}

;
  var c3={
  xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"
}

;
  const u3=R.forwardRef(({
  color:a="currentColor",size:i=24,strokeWidth:l=2,absoluteStrokeWidth:o,className:u="",children:d,iconNode:f,...y
}

,p)=>R.createElement("svg",{
  ref:p,...c3,width:i,height:i,stroke:a,strokeWidth:o?Number(l)*24/Number(i):l,className:a1("lucide",u),...!d&&!r3(y)&&{
  "aria-hidden":"true"
}

,...y
}

,[...f.map(([m,x])=>R.createElement(m,x)),...Array.isArray(d)?d:[d]]));
  const ut=(a,i)=>{
  const l=R.forwardRef(({
  className:o,...u
}

,d)=>R.createElement(u3,{
  ref:d,iconNode:i,className:a1(`lucide-${
  l3(sy(a))
}

`,`lucide-${
  a
}

`,o),...u
}

));
  return l.displayName=sy(a),l
}

;
  const f3=[["path",{
  d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"
}

]],d3=ut("activity",f3);
  const h3=[["path",{
  d:"M5 12h14",key:"1ays0h"
}

],["path",{
  d:"m12 5 7 7-7 7",key:"xquz4c"
}

]],vo=ut("arrow-right",h3);
  const m3=[["path",{
  d:"M7 7h10v10",key:"1tivn9"
}

],["path",{
  d:"M7 17 17 7",key:"1vkiza"
}

]],hu=ut("arrow-up-right",m3);
  const p3=[["path",{
  d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"
}

],["rect",{
  width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"
}

]],y3=ut("briefcase",p3);
  const g3=[["path",{
  d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"
}

],["path",{
  d:"M18 17V9",key:"2bz60n"
}

],["path",{
  d:"M13 17V5",key:"1frdt8"
}

],["path",{
  d:"M8 17v-3",key:"17ska0"
}

]],v3=ut("chart-column",g3);
  const x3=[["path",{
  d:"m6 9 6 6 6-6",key:"qrunsl"
}

]],b3=ut("chevron-down",x3);
  const S3=[["path",{
  d:"m15 18-6-6 6-6",key:"1wnfg3"
}

]],T3=ut("chevron-left",S3);
  const A3=[["path",{
  d:"m9 18 6-6-6-6",key:"mthhwq"
}

]],ly=ut("chevron-right",A3);
  const w3=[["path",{
  d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"
}

],["path",{
  d:"m9 11 3 3L22 4",key:"1pflzl"
}

]],Xu=ut("circle-check-big",w3);
  const E3=[["path",{
  d:"M12 6v6l4 2",key:"mmk7yg"
}

],["circle",{
  cx:"12",cy:"12",r:"10",key:"1mglay"
}

]],i1=ut("clock",E3);
  const N3=[["path",{
  d:"m16 18 6-6-6-6",key:"eg8j8"
}

],["path",{
  d:"m8 6-6 6 6 6",key:"ppft3o"
}

]],M3=ut("code",N3);
  const C3=[["line",{
  x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"
}

],["path",{
  d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"
}

]],j3=ut("dollar-sign",C3);
  const D3=[["path",{
  d:"M15 3h6v6",key:"1q9fwt"
}

],["path",{
  d:"M10 14 21 3",key:"gplh6r"
}

],["path",{
  d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"
}

]],z3=ut("external-link",D3);
  const R3=[["path",{
  d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"
}

],["circle",{
  cx:"12",cy:"12",r:"3",key:"1v7zrd"
}

]],O3=ut("eye",R3);
  const V3=[["path",{
  d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"
}

],["path",{
  d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"
}

]],_3=ut("github",V3);
  const B3=[["path",{
  d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"
}

],["path",{
  d:"M22 10v6",key:"1lu8f3"
}

],["path",{
  d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"
}

]],H3=ut("graduation-cap",B3);
  const U3=[["path",{
  d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"
}

]],L3=ut("heart",U3);
  const G3=[["rect",{
  width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"
}

],["circle",{
  cx:"9",cy:"9",r:"2",key:"af1f0g"
}

],["path",{
  d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"
}

]],q3=ut("image",G3);
  const Y3=[["path",{
  d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"
}

],["rect",{
  width:"4",height:"12",x:"2",y:"9",key:"mk3on5"
}

],["circle",{
  cx:"4",cy:"4",r:"2",key:"bt5ra8"
}

]],X3=ut("linkedin",Y3);
  const k3=[["path",{
  d:"m16 17 5-5-5-5",key:"1bji2h"
}

],["path",{
  d:"M21 12H9",key:"dn1m92"
}

],["path",{
  d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"
}

]],K3=ut("log-out",k3);
  const Q3=[["path",{
  d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"
}

],["rect",{
  x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"
}

]],s1=ut("mail",Q3);
  const Z3=[["path",{
  d:"M4 5h16",key:"1tepv9"
}

],["path",{
  d:"M4 12h16",key:"1lakjw"
}

],["path",{
  d:"M4 19h16",key:"1djgab"
}

]],J3=ut("menu",Z3);
  const F3=[["path",{
  d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"
}

]],W3=ut("message-circle",F3);
  const P3=[["path",{
  d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"
}

]],$3=ut("message-square",P3);
  const I3=[["path",{
  d:"M9 18V5l12-2v13",key:"1jmyc2"
}

],["circle",{
  cx:"6",cy:"18",r:"3",key:"fqmcym"
}

],["circle",{
  cx:"18",cy:"16",r:"3",key:"1hluhg"
}

]],t4=ut("music",I3);
  const e4=[["path",{
  d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"
}

],["circle",{
  cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"
}

],["circle",{
  cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"
}

],["circle",{
  cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"
}

],["circle",{
  cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"
}

]],n4=ut("palette",e4);
  const a4=[["path",{
  d:"M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z",key:"nt11vn"
}

],["path",{
  d:"m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18",key:"15qc1e"
}

],["path",{
  d:"m2.3 2.3 7.286 7.286",key:"1wuzzi"
}

],["circle",{
  cx:"11",cy:"11",r:"2",key:"xmgehs"
}

]],i4=ut("pen-tool",a4);
  const s4=[["path",{
  d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"
}

],["path",{
  d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"
}

],["path",{
  d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"
}

],["path",{
  d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"
}

]],l4=ut("rocket",s4);
  const o4=[["path",{
  d:"m21 21-4.34-4.34",key:"14j7rj"
}

],["circle",{
  cx:"11",cy:"11",r:"8",key:"4ej97u"
}

]],r4=ut("search",o4);
  const c4=[["path",{
  d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"
}

],["path",{
  d:"m21.854 2.147-10.94 10.939",key:"12cjpa"
}

]],l1=ut("send",c4);
  const u4=[["path",{
  d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"
}

]],f4=ut("shield",u4);
  const d4=[["path",{
  d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"
}

],["path",{
  d:"M20 2v4",key:"1rf3ol"
}

],["path",{
  d:"M22 4h-4",key:"gwowj6"
}

],["circle",{
  cx:"4",cy:"20",r:"2",key:"6kqj1y"
}

]],o1=ut("sparkles",d4);
  const h4=[["path",{
  d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"
}

]],r1=ut("star",h4);
  const m4=[["path",{
  d:"M16 7h6v6",key:"box55l"
}

],["path",{
  d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"
}

]],c1=ut("trending-up",m4);
  const p4=[["path",{
  d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"
}

]],y4=ut("twitter",p4);
  const g4=[["path",{
  d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"
}

],["circle",{
  cx:"12",cy:"7",r:"4",key:"17ys0d"
}

]],u1=ut("user",g4);
  const v4=[["path",{
  d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"
}

],["path",{
  d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"
}

],["path",{
  d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"
}

],["circle",{
  cx:"9",cy:"7",r:"4",key:"nufk8"
}

]],x4=ut("users",v4);
  const b4=[["path",{
  d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"
}

],["rect",{
  x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"
}

]],S4=ut("video",b4);
  const T4=[["path",{
  d:"M18 6 6 18",key:"1bl5f8"
}

],["path",{
  d:"m6 6 12 12",key:"d8bk6v"
}

]],oy=ut("x",T4);
  const A4=[["path",{
  d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"
}

],["path",{
  d:"m10 15 5-3-5-3z",key:"1jp15x"
}

]],w4=ut("youtube",A4);
  const E4=[["path",{
  d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"
}

]],f1=ut("zap",E4);
  function d1(){
  const[a,i]=R.useState(null),[l,o]=R.useState(!0);
  R.useEffect(()=>{
  const p=setInterval(()=>{
  window.firebase&&window.firebase.auth&&(clearInterval(p),u())
}

,100);
  return()=>clearInterval(p)
}

,[]);
  const u=()=>{
  window.firebase.auth().onAuthStateChanged(m=>{
  m?(i({
  uid:m.uid,displayName:m.displayName,email:m.email,photoURL:m.photoURL
}

),d(m)):i(null),o(!1)
}

)
}

,d=async p=>{
  try{
  await window.firebase.firestore().collection("users").doc(p.uid).set({
  name:p.displayName,email:p.email,photoURL:p.photoURL,uid:p.uid,lastLogin:window.firebase.firestore.FieldValue.serverTimestamp()
}

,{
  merge:!0
}

)
}

catch(m){
  console.error("Error saving user:",m)
}

}

,f=R.useCallback(async()=>{
  try{
  const p=window.firebase.auth(),m=new window.firebase.auth.GoogleAuthProvider;
  await p.signInWithPopup(m)
}

catch(p){
  console.error("Sign in error:",p),alert("Login failed. Please try again.")
}

}

,[]),y=R.useCallback(async()=>{
  try{
  await window.firebase.auth().signOut()
}

catch(p){
  console.error("Sign out error:",p)
}

}

,[]);
  return{
  user:a,loading:l,signInWithGoogle:f,signOut:y
}

}

const ry=[{
  name:"Home",href:"#home"
}

,{
  name:"Explore",href:"#explore"
}

,{
  name:"Categories",href:"#categories"
}

,{
  name:"About",href:"#about"
}

];
  function N4({
  scrollProgress:a
}

){
  const[i,l]=R.useState(!1),[o,u]=R.useState(!1),[d,f]=R.useState(!1),{
  user:y,signInWithGoogle:p,signOut:m
}

=d1();
  R.useEffect(()=>{
  const b=()=>{
  l(window.scrollY>50)
}

;
  return window.addEventListener("scroll",b,{
  passive:!0
}

),()=>window.removeEventListener("scroll",b)
}

,[]);
  const x=b=>{
  const S=document.querySelector(b);
  S&&S.scrollIntoView({
  behavior:"smooth"
}

),u(!1)
}

;
  return g.jsxs(g.Fragment,{
  children:[g.jsx(G.div,{
  "code-path":"src/sections/Navigation.tsx:43:7",className:"scroll-progress",style:{
  scaleX:a
}

,initial:{
  scaleX:0
}

}

),g.jsx(G.nav,{
  "code-path":"src/sections/Navigation.tsx:50:7",initial:{
  y:-100
}

,animate:{
  y:0
}

,transition:{
  duration:.6,ease:[.2,.8,.2,1]
}

,className:`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
  i?"glass-strong border-b border-white/5":"bg-transparent"
}

`,children:g.jsx("div",{
  "code-path":"src/sections/Navigation.tsx:60:9",className:"max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8",children:g.jsxs("div",{
  "code-path":"src/sections/Navigation.tsx:61:11",className:"flex items-center justify-between h-16 md:h-20",children:[g.jsxs(G.a,{
  "code-path":"src/sections/Navigation.tsx:63:13",href:"#home",onClick:b=>{
  b.preventDefault(),x("#home")
}

,className:"flex items-center gap-3 group",whileHover:{
  scale:1.02
}

,whileTap:{
  scale:.98
}

,children:[g.jsx("div",{
  "code-path":"src/sections/Navigation.tsx:73:15",className:"w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-shadow",children:g.jsx("span",{
  "code-path":"src/sections/Navigation.tsx:74:17",className:"text-white font-bold text-lg",children:"X"
}

)
}

),g.jsx("span",{
  "code-path":"src/sections/Navigation.tsx:76:15",className:"text-xl font-bold gradient-text",children:"XEDGE"
}

)]
}

),g.jsx("div",{
  "code-path":"src/sections/Navigation.tsx:80:13",className:"hidden md:flex items-center gap-8",children:ry.map((b,S)=>g.jsx(G.a,{
  "code-path":"src/sections/Navigation.tsx:82:17",href:b.href,onClick:N=>{
  N.preventDefault(),x(b.href)
}

,className:"nav-link text-gray-300 hover:text-white transition-colors text-sm font-medium",initial:{
  opacity:0,y:-20
}

,animate:{
  opacity:1,y:0
}

,transition:{
  delay:S*.1+.3
}

,whileHover:{
  y:-2
}

,children:b.name
}

,b.name))
}

),g.jsxs("div",{
  "code-path":"src/sections/Navigation.tsx:101:13",className:"hidden md:flex items-center gap-4",children:[g.jsx(G.a,{
  "code-path":"src/sections/Navigation.tsx:102:15",href:"#join",onClick:b=>{
  b.preventDefault(),x("#newsletter")
}

,className:"px-5 py-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm font-medium shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-shadow",whileHover:{
  scale:1.05
}

,whileTap:{
  scale:.95
}

,children:"Join Beta"
}

),y?g.jsxs("div",{
  "code-path":"src/sections/Navigation.tsx:116:17",className:"relative",children:[g.jsxs(G.button,{
  "code-path":"src/sections/Navigation.tsx:117:19",onClick:()=>f(!d),className:"flex items-center gap-2 p-1 pr-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors",whileHover:{
  scale:1.02
}

,whileTap:{
  scale:.98
}

,children:[g.jsx("img",{
  "code-path":"src/sections/Navigation.tsx:123:21",src:y.photoURL||"",alt:y.displayName||"User",className:"w-8 h-8 rounded-full"
}

),g.jsx(b3,{
  "code-path":"src/sections/Navigation.tsx:128:21",className:"w-4 h-4 text-gray-400"
}

)]
}

),g.jsx(Lu,{
  "code-path":"src/sections/Navigation.tsx:131:19",children:d&&g.jsxs(G.div,{
  "code-path":"src/sections/Navigation.tsx:133:23",initial:{
  opacity:0,y:10,scale:.95
}

,animate:{
  opacity:1,y:0,scale:1
}

,exit:{
  opacity:0,y:10,scale:.95
}

,transition:{
  duration:.2
}

,className:"absolute right-0 mt-2 w-56 glass-strong rounded-xl overflow-hidden shadow-xl",children:[g.jsxs("div",{
  "code-path":"src/sections/Navigation.tsx:140:25",className:"p-4 border-b border-white/5",children:[g.jsx("p",{
  "code-path":"src/sections/Navigation.tsx:141:27",className:"text-sm font-semibold text-white",children:y.displayName
}

),g.jsx("p",{
  "code-path":"src/sections/Navigation.tsx:144:27",className:"text-xs text-gray-400 truncate",children:y.email
}

)]
}

),g.jsxs("button",{
  "code-path":"src/sections/Navigation.tsx:148:25",onClick:m,className:"w-full flex items-center gap-2 px-4 py-3 text-red-400 hover:bg-red-500/10 transition-colors text-sm",children:[g.jsx(K3,{
  "code-path":"src/sections/Navigation.tsx:152:27",className:"w-4 h-4"
}

),"Sign Out"]
}

)]
}

)
}

)]
}

):g.jsxs(G.button,{
  "code-path":"src/sections/Navigation.tsx:160:17",onClick:p,className:"flex items-center gap-2 px-5 py-2 rounded-full border border-blue-500/50 text-blue-400 hover:bg-blue-500/10 transition-colors text-sm font-medium",whileHover:{
  scale:1.05
}

,whileTap:{
  scale:.95
}

,children:[g.jsx(u1,{
  "code-path":"src/sections/Navigation.tsx:166:19",className:"w-4 h-4"
}

),"Sign In"]
}

)]
}

),g.jsx(G.button,{
  "code-path":"src/sections/Navigation.tsx:173:13",onClick:()=>u(!o),className:"md:hidden p-2 text-gray-300 hover:text-white",whileTap:{
  scale:.9
}

,children:o?g.jsx(oy,{
  "code-path":"src/sections/Navigation.tsx:179:17",className:"w-6 h-6"
}

):g.jsx(J3,{
  "code-path":"src/sections/Navigation.tsx:181:17",className:"w-6 h-6"
}

)
}

)]
}

)
}

)
}

),g.jsx(Lu,{
  "code-path":"src/sections/Navigation.tsx:189:7",children:o&&g.jsxs(g.Fragment,{
  children:[g.jsx(G.div,{
  "code-path":"src/sections/Navigation.tsx:193:13",initial:{
  opacity:0
}

,animate:{
  opacity:1
}

,exit:{
  opacity:0
}

,className:"fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden",onClick:()=>u(!1)
}

),g.jsx(G.aside,{
  "code-path":"src/sections/Navigation.tsx:202:13",initial:{
  x:"100%"
}

,animate:{
  x:0
}

,exit:{
  x:"100%"
}

,transition:{
  type:"spring",damping:30,stiffness:300
}

,className:"fixed top-0 right-0 bottom-0 w-[280px] glass-strong z-50 md:hidden",children:g.jsxs("div",{
  "code-path":"src/sections/Navigation.tsx:209:15",className:"p-6",children:[g.jsxs("div",{
  "code-path":"src/sections/Navigation.tsx:210:17",className:"flex items-center justify-between mb-8",children:[g.jsxs("div",{
  "code-path":"src/sections/Navigation.tsx:211:19",className:"flex items-center gap-3",children:[g.jsx("div",{
  "code-path":"src/sections/Navigation.tsx:212:21",className:"w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center",children:g.jsx("span",{
  "code-path":"src/sections/Navigation.tsx:213:23",className:"text-white font-bold text-sm",children:"X"
}

)
}

),g.jsxs("div",{
  "code-path":"src/sections/Navigation.tsx:215:21",children:[g.jsx("div",{
  "code-path":"src/sections/Navigation.tsx:216:23",className:"font-bold text-white",children:"XEDGE"
}

),g.jsx("div",{
  "code-path":"src/sections/Navigation.tsx:217:23",className:"text-xs text-gray-400",children:"AI tools discovery"
}

)]
}

)]
}

),g.jsx("button",{
  "code-path":"src/sections/Navigation.tsx:220:19",onClick:()=>u(!1),className:"text-gray-400 hover:text-white",children:g.jsx(oy,{
  "code-path":"src/sections/Navigation.tsx:224:21",className:"w-5 h-5"
}

)
}

)]
}

),g.jsxs("nav",{
  "code-path":"src/sections/Navigation.tsx:228:17",className:"flex flex-col gap-2",children:[ry.map((b,S)=>g.jsx(G.a,{
  "code-path":"src/sections/Navigation.tsx:230:21",href:b.href,onClick:N=>{
  N.preventDefault(),x(b.href)
}

,className:"px-4 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-white/5 transition-colors",initial:{
  opacity:0,x:20
}

,animate:{
  opacity:1,x:0
}

,transition:{
  delay:S*.1
}

,children:b.name
}

,b.name)),g.jsx(G.a,{
  "code-path":"src/sections/Navigation.tsx:246:19",href:"#newsletter",onClick:b=>{
  b.preventDefault(),x("#newsletter")
}

,className:"mt-4 px-4 py-3 rounded-xl bg-blue-600 text-white text-center font-medium",initial:{
  opacity:0,x:20
}

,animate:{
  opacity:1,x:0
}

,transition:{
  delay:.4
}

,children:"Join Beta"
}

),!y&&g.jsx(G.button,{
  "code-path":"src/sections/Navigation.tsx:261:21",onClick:()=>{
  p(),u(!1)
}

,className:"mt-2 px-4 py-3 rounded-xl border border-blue-500/50 text-blue-400 text-center",initial:{
  opacity:0,x:20
}

,animate:{
  opacity:1,x:0
}

,transition:{
  delay:.5
}

,children:"Sign In with Google"
}

)]
}

)]
}

)
}

)]
}

)
}

)]
}

)
}

const M4="https://script.google.com/macros/s/AKfycbxXs2ajlwcddAMVEMY5NAMns_ooeEAHSYwDk84nnD6cU2hLjx_k5HKOgFLm-EX_ASSv/exec",mu="xedge_tools_cache_v1",C4=["chat gpt","runway ml","notion ai","leonardo ai","github copilot","mid journey","perplexity"];
  function Tf(){
  const[a,i]=R.useState([]),[l,o]=R.useState(!0),[u,d]=R.useState(null),f=R.useCallback(async(x=!1)=>{
  if(!x){
  const b=localStorage.getItem(mu);
  if(b)try{
  const S=JSON.parse(b);
  if(Array.isArray(S)&&S.length>0){
  const N=pu(S);
  return i(N),o(!1),N
}

}

catch{

}

}

try{
  o(!0);
  const b=await fetch(`${
  M4
}

?t=${
  Date.now()
}

`,{
  method:"GET",mode:"cors",cache:"no-store"
}

);
  if(!b.ok)throw new Error(`HTTP error! status: ${
  b.status
}

`);
  const S=await b.json();
  if(Array.isArray(S)){
  localStorage.setItem(mu,JSON.stringify(S));
  const N=pu(S);
  return i(N),d(null),N
}

}

catch(b){
  console.error("Fetch failed:",b),d("Failed to load tools");
  const S=localStorage.getItem(mu);
  if(S)try{
  const N=JSON.parse(S),z=pu(N);
  return i(z),z
}

catch{

}

}

finally{
  o(!1)
}

return[]
}

,[]);
  R.useEffect(()=>{
  f()
}

,[f]);
  const y=R.useCallback(x=>{
  const b=x.toLowerCase().trim();
  return b?a.filter(S=>S.name.toLowerCase().includes(b)||S.short.toLowerCase().includes(b)||S.category.toLowerCase().includes(b)).slice(0,5):[]
}

,[a]),p=R.useCallback((x=8)=>{
  const b=a.filter(S=>C4.includes(S.name.toLowerCase()));
  return b.length>0?b.slice(0,x):a.slice(0,x)
}

,[a]),m=R.useCallback(x=>a.filter(b=>b.category.toLowerCase()===x.toLowerCase()),[a]);
  return{
  tools:a,loading:l,error:u,fetchTools:f,searchTools:y,getTopTools:p,getToolsByCategory:m
}

}

function pu(a){
  return a.map(i=>({
  name:i.name||i.title||"Unknown Tool",short:i.short_description||i.short||i.summary||"",category:i.category||"",goal:i.goal||i.goals||i.use_case||"",logo:i.logo_url||i.logo||"",link:i.Link||i.link||"#"
}

))
}

function j4({
  onSearch:a
}

){
  const[i,l]=R.useState(""),[o,u]=R.useState(!1),d=R.useRef(null),{
  searchTools:f
}

=Tf(),{
  user:y,signInWithGoogle:p
}

=d1(),[m,x]=R.useState([]),{
  scrollYProgress:b
}

=n3({
  target:d,offset:["start start","end start"]
}

),S=oo(b,[0,1],["0%","30%"]),N=oo(b,[0,.5],[1,0]),z=oo(b,[0,.5],[1,.95]);
  R.useEffect(()=>{
  if(i.trim()){
  const L=f(i);
  x(L)
}

else x([])
}

,[i,f]);
  const U=L=>{
  L.preventDefault(),i.trim()&&a(i)
}

,X=L=>{
  const Y=document.querySelector(L);
  Y&&Y.scrollIntoView({
  behavior:"smooth"
}

)
}

;
  return g.jsxs(G.section,{
  "code-path":"src/sections/Hero.tsx:52:5",ref:d,id:"home",className:"relative min-h-screen flex items-center justify-center pt-20 overflow-hidden",style:{
  opacity:N,scale:z
}

,children:[g.jsxs(G.div,{
  "code-path":"src/sections/Hero.tsx:59:7",className:"absolute inset-0 z-0",style:{
  y:S
}

,children:[g.jsx("div",{
  "code-path":"src/sections/Hero.tsx:64:9",className:"absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px]"
}

),g.jsx("div",{
  "code-path":"src/sections/Hero.tsx:65:9",className:"absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px]"
}

),g.jsx("div",{
  "code-path":"src/sections/Hero.tsx:66:9",className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[150px]"
}

)]
}

),g.jsx("div",{
  "code-path":"src/sections/Hero.tsx:70:7",className:"relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-20",children:g.jsxs("div",{
  "code-path":"src/sections/Hero.tsx:71:9",className:"text-center",children:[g.jsxs(G.div,{
  "code-path":"src/sections/Hero.tsx:73:11",initial:{
  opacity:0,y:20
}

,animate:{
  opacity:1,y:0
}

,transition:{
  duration:.6,delay:.1
}

,className:"inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8",children:[g.jsx(o1,{
  "code-path":"src/sections/Hero.tsx:79:13",className:"w-4 h-4 text-blue-400"
}

),g.jsx("span",{
  "code-path":"src/sections/Hero.tsx:80:13",className:"text-sm text-blue-300",children:"Discover 150+ AI Tools"
}

)]
}

),g.jsxs(G.h1,{
  "code-path":"src/sections/Hero.tsx:86:11",initial:{
  opacity:0,y:30
}

,animate:{
  opacity:1,y:0
}

,transition:{
  duration:.8,delay:.2,ease:[.2,.8,.2,1]
}

,className:"hero-title text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight",children:["Welcome to"," ",g.jsx("span",{
  "code-path":"src/sections/Hero.tsx:93:13",className:"gradient-text",children:"XEdge"
}

)]
}

),g.jsx(G.p,{
  "code-path":"src/sections/Hero.tsx:96:11",initial:{
  opacity:0,y:30
}

,animate:{
  opacity:1,y:0
}

,transition:{
  duration:.8,delay:.3,ease:[.2,.8,.2,1]
}

,className:"text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-4",children:"Find the perfect AI tool for your work within 30 seconds"
}

),g.jsx(G.p,{
  "code-path":"src/sections/Hero.tsx:105:11",initial:{
  opacity:0,y:30
}

,animate:{
  opacity:1,y:0
}

,transition:{
  duration:.8,delay:.4,ease:[.2,.8,.2,1]
}

,className:"text-lg text-gray-400 max-w-2xl mx-auto mb-12",children:"Evolving into a community-based AI ecosystem"
}

),g.jsxs(G.div,{
  "code-path":"src/sections/Hero.tsx:115:11",initial:{
  opacity:0,y:30
}

,animate:{
  opacity:1,y:0
}

,transition:{
  duration:.8,delay:.5,ease:[.2,.8,.2,1]
}

,className:"relative max-w-2xl mx-auto mb-10",children:[g.jsx("form",{
  "code-path":"src/sections/Hero.tsx:121:13",onSubmit:U,className:"relative",children:g.jsxs(G.div,{
  "code-path":"src/sections/Hero.tsx:122:15",className:`relative flex items-center bg-gray-900/80 backdrop-blur-xl rounded-full border transition-all duration-300 ${
  o?"border-blue-500/50 shadow-lg shadow-blue-500/20":"border-gray-700"
}

`,animate:{
  scale:o?1.02:1
}

,transition:{
  duration:.2
}

,children:[g.jsx(r4,{
  "code-path":"src/sections/Hero.tsx:133:17",className:"w-5 h-5 text-gray-400 ml-6"
}

),g.jsx("input",{
  "code-path":"src/sections/Hero.tsx:134:17",type:"text",value:i,onChange:L=>l(L.target.value),onFocus:()=>u(!0),onBlur:()=>setTimeout(()=>u(!1),200),placeholder:"Search AI tools...",className:"flex-1 bg-transparent text-white placeholder-gray-500 px-4 py-4 focus:outline-none"
}

),g.jsxs(G.button,{
  "code-path":"src/sections/Hero.tsx:143:17",type:"submit",className:"mr-2 px-6 py-2 bg-blue-600 hover:bg-blue-500 rounded-full text-white font-medium flex items-center gap-2",whileHover:{
  scale:1.05
}

,whileTap:{
  scale:.95
}

,children:["Search",g.jsx(vo,{
  "code-path":"src/sections/Hero.tsx:150:19",className:"w-4 h-4"
}

)]
}

)]
}

)
}

),m.length>0&&o&&g.jsx(G.div,{
  "code-path":"src/sections/Hero.tsx:157:15",initial:{
  opacity:0,y:10
}

,animate:{
  opacity:1,y:0
}

,exit:{
  opacity:0,y:10
}

,className:"absolute top-full left-0 right-0 mt-2 glass-strong rounded-2xl overflow-hidden shadow-xl z-50",children:m.map((L,Y)=>g.jsxs(G.a,{
  "code-path":"src/sections/Hero.tsx:164:19",href:`#tool-${
  encodeURIComponent(L.name)
}

`,className:"flex items-center gap-4 px-4 py-3 hover:bg-white/5 transition-colors border-b border-white/5 last:border-0",initial:{
  opacity:0,x:-10
}

,animate:{
  opacity:1,x:0
}

,transition:{
  delay:Y*.05
}

,children:[g.jsx("img",{
  "code-path":"src/sections/Hero.tsx:172:21",src:L.logo||"/xedge-logo.png",alt:L.name,className:"w-10 h-10 rounded-lg object-cover",onError:q=>{
  q.target.src="/xedge-logo.png"
}

}

),g.jsxs("div",{
  "code-path":"src/sections/Hero.tsx:180:21",className:"flex-1 text-left",children:[g.jsx("div",{
  "code-path":"src/sections/Hero.tsx:181:23",className:"font-medium text-white",children:L.name
}

),g.jsx("div",{
  "code-path":"src/sections/Hero.tsx:182:23",className:"text-sm text-gray-400 line-clamp-1",children:L.short
}

)]
}

)]
}

,L.name))
}

)]
}

),g.jsxs(G.div,{
  "code-path":"src/sections/Hero.tsx:193:11",initial:{
  opacity:0,y:30
}

,animate:{
  opacity:1,y:0
}

,transition:{
  duration:.8,delay:.6,ease:[.2,.8,.2,1]
}

,className:"flex flex-col sm:flex-row items-center justify-center gap-4",children:[g.jsxs(G.button,{
  "code-path":"src/sections/Hero.tsx:199:13",onClick:()=>X("#explore"),className:"group px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full text-white font-semibold shadow-lg shadow-blue-500/25 flex items-center gap-2",whileHover:{
  scale:1.05,boxShadow:"0 20px 40px rgba(37, 99, 235, 0.4)"
}

,whileTap:{
  scale:.95
}

,children:[g.jsx(f1,{
  "code-path":"src/sections/Hero.tsx:205:15",className:"w-5 h-5"
}

),"Explore Now",g.jsx(G.span,{
  "code-path":"src/sections/Hero.tsx:207:15",className:"inline-block",animate:{
  x:[0,4,0]
}

,transition:{
  repeat:1/0,duration:1.5
}

,children:g.jsx(vo,{
  "code-path":"src/sections/Hero.tsx:212:17",className:"w-5 h-5"
}

)
}

)]
}

),!y&&g.jsxs(G.button,{
  "code-path":"src/sections/Hero.tsx:217:15",onClick:p,className:"px-8 py-4 border border-blue-500/50 rounded-full text-blue-400 font-semibold hover:bg-blue-500/10 transition-colors flex items-center gap-2",whileHover:{
  scale:1.05
}

,whileTap:{
  scale:.95
}

,children:[g.jsx(c1,{
  "code-path":"src/sections/Hero.tsx:223:17",className:"w-5 h-5"
}

),"Sign In"]
}

)]
}

),g.jsx(G.div,{
  "code-path":"src/sections/Hero.tsx:230:11",initial:{
  opacity:0,y:30
}

,animate:{
  opacity:1,y:0
}

,transition:{
  duration:.8,delay:.7,ease:[.2,.8,.2,1]
}

,className:"flex flex-wrap items-center justify-center gap-8 mt-16",children:[{
  value:"150+",label:"AI Tools"
}

,{
  value:"20+",label:"Categories"
}

,{
  value:"200+",label:"Users"
}

].map((L,Y)=>g.jsxs(G.div,{
  "code-path":"src/sections/Hero.tsx:241:15",className:"text-center",initial:{
  opacity:0,scale:.8
}

,animate:{
  opacity:1,scale:1
}

,transition:{
  delay:.8+Y*.1
}

,children:[g.jsx("div",{
  "code-path":"src/sections/Hero.tsx:248:17",className:"text-2xl md:text-3xl font-bold gradient-text",children:L.value
}

),g.jsx("div",{
  "code-path":"src/sections/Hero.tsx:251:17",className:"text-sm text-gray-400",children:L.label
}

)]
}

,L.label))
}

)]
}

)
}

),g.jsx(G.div,{
  "code-path":"src/sections/Hero.tsx:259:7",initial:{
  opacity:0
}

,animate:{
  opacity:1
}

,transition:{
  delay:1.2
}

,className:"absolute bottom-8 left-1/2 -translate-x-1/2",children:g.jsx(G.div,{
  "code-path":"src/sections/Hero.tsx:265:9",animate:{
  y:[0,10,0]
}

,transition:{
  repeat:1/0,duration:2
}

,className:"w-6 h-10 rounded-full border-2 border-gray-600 flex items-start justify-center p-2",children:g.jsx(G.div,{
  "code-path":"src/sections/Hero.tsx:270:11",animate:{
  y:[0,12,0],opacity:[1,.3,1]
}

,transition:{
  repeat:1/0,duration:2
}

,className:"w-1.5 h-1.5 rounded-full bg-blue-500"
}

)
}

)
}

)]
}

)
}

function Ta(a={

}

){
  const{
  threshold:i=.1,rootMargin:l="0px",triggerOnce:o=!0
}

=a,u=R.useRef(null),[d,f]=R.useState(!1);
  return R.useEffect(()=>{
  const y=u.current;
  if(!y)return;
  const p=new IntersectionObserver(([m])=>{
  m.isIntersecting?(f(!0),o&&p.unobserve(y)):o||f(!1)
}

,{
  threshold:i,rootMargin:l
}

);
  return p.observe(y),()=>{
  p.disconnect()
}

}

,[i,l,o]),{
  ref:u,isVisible:d
}

}

function D4(){
  const[a,i]=R.useState(0);
  return R.useEffect(()=>{
  const l=()=>{
  const o=window.scrollY,u=document.documentElement.scrollHeight-window.innerHeight,d=u>0?o/u:0;
  i(d)
}

;
  return window.addEventListener("scroll",l,{
  passive:!0
}

),()=>window.removeEventListener("scroll",l)
}

,[]),a
}

function Af(a,i=.1){
  return Array.from({
  length:a
}

,(l,o)=>({
  initial:{
  opacity:0,y:30
}

,animate:{
  opacity:1,y:0
}

,transition:{
  duration:.5,delay:o*i,ease:[.2,.8,.2,1]
}

}

))
}

const cy=[{
  name:"AI Image",icon:q3,href:"#categories?category=AI-Image",description:"Generate stunning visuals",color:"from-purple-500 to-pink-500"
}

,{
  name:"Chatbot",icon:W3,href:"#categories?category=Chatbot",description:"Conversational AI tools",color:"from-blue-500 to-cyan-500"
}

,{
  name:"Business",icon:y3,href:"#categories?category=Business",description:"Automate your workflow",color:"from-emerald-500 to-teal-500"
}

,{
  name:"Video",icon:S4,href:"#categories?category=Video",description:"Create engaging content",color:"from-red-500 to-orange-500"
}

,{
  name:"Productivity",icon:d3,href:"#categories?category=Productivity",description:"Boost your efficiency",color:"from-yellow-500 to-amber-500"
}

,{
  name:"Audio",icon:t4,href:"#categories?category=Audio",description:"Music & voice generation",color:"from-violet-500 to-purple-500"
}

,{
  name:"Development",icon:M3,href:"#categories?category=Development",description:"Code assistants & tools",color:"from-slate-500 to-gray-500"
}

,{
  name:"Design",icon:i4,href:"#categories?category=Design",description:"Creative design tools",color:"from-pink-500 to-rose-500"
}

,{
  name:"Analytics",icon:v3,href:"#categories?category=Analytics",description:"Data & insights",color:"from-indigo-500 to-blue-500"
}

];
  function z4(){
  const{
  ref:a,isVisible:i
}

=Ta({
  threshold:.2
}

),l=Af(cy.length,.08);
  return g.jsxs("section",{
  "code-path":"src/sections/Categories.tsx:86:5",ref:a,id:"categories",className:"relative py-24 overflow-hidden",children:[g.jsx("div",{
  "code-path":"src/sections/Categories.tsx:92:7",className:"absolute inset-0 z-0",children:g.jsx("div",{
  "code-path":"src/sections/Categories.tsx:93:9",className:"absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-500/5 rounded-full blur-[150px]"
}

)
}

),g.jsxs("div",{
  "code-path":"src/sections/Categories.tsx:96:7",className:"relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8",children:[g.jsxs(G.div,{
  "code-path":"src/sections/Categories.tsx:98:9",initial:{
  opacity:0,y:30
}

,animate:i?{
  opacity:1,y:0
}

:{

}

,transition:{
  duration:.6
}

,className:"text-center mb-16",children:[g.jsx(G.span,{
  "code-path":"src/sections/Categories.tsx:104:11",initial:{
  opacity:0,scale:.9
}

,animate:i?{
  opacity:1,scale:1
}

:{

}

,transition:{
  delay:.1
}

,className:"inline-block px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-4",children:"Browse by Category"
}

),g.jsxs("h2",{
  "code-path":"src/sections/Categories.tsx:112:11",className:"text-4xl md:text-5xl font-bold mb-4",children:["Explore AI ",g.jsx("span",{
  "code-path":"src/sections/Categories.tsx:113:24",className:"gradient-text",children:"Categories"
}

)]
}

),g.jsx("p",{
  "code-path":"src/sections/Categories.tsx:115:11",className:"text-gray-400 text-lg max-w-2xl mx-auto",children:"Discover AI tools organized by their primary use case and functionality"
}

)]
}

),g.jsx("div",{
  "code-path":"src/sections/Categories.tsx:121:9",className:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6",children:cy.slice(0,5).map((o,u)=>g.jsx(G.a,{
  "code-path":"src/sections/Categories.tsx:123:13",href:o.href,initial:l[u].initial,animate:i?l[u].animate:l[u].initial,transition:l[u].transition,whileHover:{
  y:-8,scale:1.02,transition:{
  duration:.3
}

}

,whileTap:{
  scale:.98
}

,className:"group relative",children:g.jsxs("div",{
  "code-path":"src/sections/Categories.tsx:137:15",className:"relative h-[200px] md:h-[240px] rounded-2xl bg-gray-900/50 border border-gray-800 overflow-hidden transition-all duration-500 group-hover:border-blue-500/30 group-hover:shadow-xl group-hover:shadow-blue-500/10",children:[g.jsx("div",{
  "code-path":"src/sections/Categories.tsx:139:17",className:`absolute inset-0 bg-gradient-to-br ${
  o.color
}

 opacity-0 group-hover:opacity-10 transition-opacity duration-500`
}

),g.jsxs("div",{
  "code-path":"src/sections/Categories.tsx:142:17",className:"relative h-full flex flex-col items-center justify-center p-6",children:[g.jsx(G.div,{
  "code-path":"src/sections/Categories.tsx:144:19",className:"w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center mb-4 transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg",whileHover:{
  rotate:5
}

,children:g.jsx(o.icon,{
  "code-path":"src/sections/Categories.tsx:148:21",className:"w-7 h-7 md:w-8 md:h-8 text-blue-400 group-hover:text-blue-300 transition-colors"
}

)
}

),g.jsx("h3",{
  "code-path":"src/sections/Categories.tsx:152:19",className:"text-lg md:text-xl font-semibold text-white mb-1 text-center",children:o.name
}

),g.jsx("p",{
  "code-path":"src/sections/Categories.tsx:155:19",className:"text-xs md:text-sm text-gray-500 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300",children:o.description
}

)]
}

),g.jsx("div",{
  "code-path":"src/sections/Categories.tsx:161:17",className:"absolute -bottom-10 -right-10 w-20 h-20 bg-blue-500/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
}

)]
}

)
}

,o.name))
}

),g.jsx(G.div,{
  "code-path":"src/sections/Categories.tsx:168:9",initial:{
  opacity:0,y:20
}

,animate:i?{
  opacity:1,y:0
}

:{

}

,transition:{
  delay:.6
}

,className:"text-center mt-12",children:g.jsxs(G.a,{
  "code-path":"src/sections/Categories.tsx:174:11",href:"/explore.html",className:"inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-700 text-gray-300 hover:text-white hover:border-blue-500/50 hover:bg-blue-500/5 transition-all",whileHover:{
  scale:1.05
}

,whileTap:{
  scale:.95
}

,children:["View All Categories",g.jsx(G.span,{
  "code-path":"src/sections/Categories.tsx:181:13",animate:{
  x:[0,4,0]
}

,transition:{
  repeat:1/0,duration:1.5
}

,children:"→"
}

)]
}

)
}

)]
}

)]
}

)
}

function R4(){
  const a=R.useRef(null),{
  ref:i,isVisible:l
}

=Ta({
  threshold:.2
}

),{
  getTopTools:o,loading:u
}

=Tf(),[d,f]=R.useState(null),y=o(8),p=b=>{
  a.current&&a.current.scrollBy({
  left:b==="left"?-320:320,behavior:"smooth"
}

)
}

,m={
  hidden:{
  opacity:0
}

,visible:{
  opacity:1,transition:{
  staggerChildren:.1,delayChildren:.2
}

}

}

,x={
  hidden:{
  opacity:0,y:30,scale:.95
}

,visible:{
  opacity:1,y:0,scale:1,transition:{
  duration:.5,ease:[.2,.8,.2,1]
}

}

}

;
  return g.jsxs("section",{
  "code-path":"src/sections/TopTools.tsx:50:5",ref:i,id:"explore",className:"relative py-24 overflow-hidden",children:[g.jsx("div",{
  "code-path":"src/sections/TopTools.tsx:56:7",className:"absolute inset-0 z-0",children:g.jsx("div",{
  "code-path":"src/sections/TopTools.tsx:57:9",className:"absolute bottom-0 right-0 w-[800px] h-[600px] bg-cyan-500/5 rounded-full blur-[150px]"
}

)
}

),g.jsxs("div",{
  "code-path":"src/sections/TopTools.tsx:60:7",className:"relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8",children:[g.jsxs(G.div,{
  "code-path":"src/sections/TopTools.tsx:62:9",initial:{
  opacity:0,y:30
}

,animate:l?{
  opacity:1,y:0
}

:{

}

,transition:{
  duration:.6
}

,className:"flex items-center justify-between mb-12",children:[g.jsxs("div",{
  "code-path":"src/sections/TopTools.tsx:68:11",children:[g.jsx(G.span,{
  "code-path":"src/sections/TopTools.tsx:69:13",initial:{
  opacity:0,scale:.9
}

,animate:l?{
  opacity:1,scale:1
}

:{

}

,transition:{
  delay:.1
}

,className:"inline-block px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-4",children:"Popular Tools"
}

),g.jsxs("h2",{
  "code-path":"src/sections/TopTools.tsx:77:13",className:"text-4xl md:text-5xl font-bold",children:["Top ",g.jsx("span",{
  "code-path":"src/sections/TopTools.tsx:78:19",className:"gradient-text",children:"Tools Used"
}

)]
}

)]
}

),g.jsxs("div",{
  "code-path":"src/sections/TopTools.tsx:83:11",className:"hidden md:flex items-center gap-3",children:[g.jsx(G.button,{
  "code-path":"src/sections/TopTools.tsx:84:13",onClick:()=>p("left"),className:"w-12 h-12 rounded-full bg-gray-800/80 hover:bg-gray-700 flex items-center justify-center transition-colors border border-gray-700",whileHover:{
  scale:1.1
}

,whileTap:{
  scale:.9
}

,children:g.jsx(T3,{
  "code-path":"src/sections/TopTools.tsx:90:15",className:"w-5 h-5"
}

)
}

),g.jsx(G.button,{
  "code-path":"src/sections/TopTools.tsx:92:13",onClick:()=>p("right"),className:"w-12 h-12 rounded-full bg-gray-800/80 hover:bg-gray-700 flex items-center justify-center transition-colors border border-gray-700",whileHover:{
  scale:1.1
}

,whileTap:{
  scale:.9
}

,children:g.jsx(ly,{
  "code-path":"src/sections/TopTools.tsx:98:15",className:"w-5 h-5"
}

)
}

)]
}

)]
}

),u?g.jsx("div",{
  "code-path":"src/sections/TopTools.tsx:105:11",className:"flex gap-6 overflow-hidden",children:[1,2,3,4].map(b=>g.jsx("div",{
  "code-path":"src/sections/TopTools.tsx:107:15",className:"min-w-[280px] h-[320px] rounded-2xl bg-gray-800/30 animate-pulse"
}

,b))
}

):g.jsxs("div",{
  "code-path":"src/sections/TopTools.tsx:114:11",className:"relative",children:[g.jsx(G.div,{
  "code-path":"src/sections/TopTools.tsx:116:13",ref:a,variants:m,initial:"hidden",animate:l?"visible":"hidden",className:"flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4 -mx-4 px-4",children:y.map((b,S)=>g.jsx(G.div,{
  "code-path":"src/sections/TopTools.tsx:124:17",variants:x,className:"min-w-[280px] md:min-w-[300px] snap-start",onMouseEnter:()=>f(S),onMouseLeave:()=>f(null),children:g.jsx(G.a,{
  "code-path":"src/sections/TopTools.tsx:131:19",href:`#tool-${
  encodeURIComponent(b.name)
}

`,className:"block h-full",whileHover:{
  y:-8
}

,transition:{
  duration:.3
}

,children:g.jsxs("div",{
  "code-path":"src/sections/TopTools.tsx:137:21",className:"relative h-[320px] rounded-2xl bg-gray-900/60 border border-gray-800 overflow-hidden group hover:border-blue-500/30 transition-all duration-500",children:[g.jsx("div",{
  "code-path":"src/sections/TopTools.tsx:139:23",className:"absolute inset-0 bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/5 group-hover:to-cyan-500/5 transition-all duration-500"
}

),g.jsxs("div",{
  "code-path":"src/sections/TopTools.tsx:142:23",className:"relative h-full flex flex-col items-center justify-center p-6 text-center",children:[g.jsxs(G.div,{
  "code-path":"src/sections/TopTools.tsx:144:25",className:"relative mb-6",animate:{
  scale:d===S?1.1:1
}

,transition:{
  duration:.3
}

,children:[g.jsx("div",{
  "code-path":"src/sections/TopTools.tsx:151:27",className:"w-20 h-20 rounded-2xl bg-gray-800 flex items-center justify-center overflow-hidden group-hover:shadow-lg group-hover:shadow-blue-500/20 transition-shadow",children:g.jsx("img",{
  "code-path":"src/sections/TopTools.tsx:152:29",src:b.logo,alt:b.name,className:"w-14 h-14 object-contain",onError:N=>{
  N.target.src="/xedge-logo.png"
}

}

)
}

),g.jsx("div",{
  "code-path":"src/sections/TopTools.tsx:163:27",className:"absolute -top-2 -right-2 w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center",children:g.jsx(r1,{
  "code-path":"src/sections/TopTools.tsx:164:29",className:"w-4 h-4 text-yellow-400 fill-yellow-400"
}

)
}

)]
}

),g.jsx("h3",{
  "code-path":"src/sections/TopTools.tsx:169:25",className:"text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors",children:b.name
}

),g.jsx("p",{
  "code-path":"src/sections/TopTools.tsx:174:25",className:"text-gray-400 text-sm line-clamp-2 mb-4",children:b.short||"AI-powered tool for enhanced productivity"
}

),b.category&&g.jsx("span",{
  "code-path":"src/sections/TopTools.tsx:180:27",className:"inline-block px-3 py-1 rounded-full bg-gray-800 text-gray-400 text-xs mb-4",children:b.category
}

),g.jsxs(G.div,{
  "code-path":"src/sections/TopTools.tsx:186:25",className:"flex items-center gap-2 text-blue-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity",initial:{
  y:10
}

,animate:d===S?{
  y:0
}

:{
  y:10
}

,children:["View Tool",g.jsx(z3,{
  "code-path":"src/sections/TopTools.tsx:192:27",className:"w-4 h-4"
}

)]
}

)]
}

),g.jsx("div",{
  "code-path":"src/sections/TopTools.tsx:197:23",className:"absolute -bottom-20 left-1/2 -translate-x-1/2 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
}

)]
}

)
}

)
}

,b.name))
}

),g.jsx("div",{
  "code-path":"src/sections/TopTools.tsx:205:13",className:"absolute top-0 left-0 bottom-4 w-20 bg-gradient-to-r from-background to-transparent pointer-events-none z-10"
}

),g.jsx("div",{
  "code-path":"src/sections/TopTools.tsx:206:13",className:"absolute top-0 right-0 bottom-4 w-20 bg-gradient-to-l from-background to-transparent pointer-events-none z-10"
}

)]
}

),g.jsx(G.div,{
  "code-path":"src/sections/TopTools.tsx:211:9",initial:{
  opacity:0
}

,animate:l?{
  opacity:1
}

:{

}

,transition:{
  delay:.6
}

,className:"text-center mt-10",children:g.jsxs("a",{
  "code-path":"src/sections/TopTools.tsx:217:11",href:"#explore",className:"inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors",children:["View All Tools",g.jsx(ly,{
  "code-path":"src/sections/TopTools.tsx:222:13",className:"w-4 h-4"
}

)]
}

)
}

)]
}

)]
}

)
}

const uy=[{
  id:"make-money",label:"Make Money",description:"Monetize your skills with AI",icon:j3,logos:["chat.openai.com","stripe.com","notion.so"],gradient:"from-emerald-500 to-green-600",bgGradient:"from-emerald-500/10 to-green-600/10"
}

,{
  id:"start-business",label:"Start a Business",description:"Launch your startup faster",icon:l4,logos:["vercel.com","supabase.com","figma.com"],gradient:"from-blue-500 to-indigo-600",bgGradient:"from-blue-500/10 to-indigo-600/10"
}

,{
  id:"create-content",label:"Create Content",description:"Produce engaging media",icon:n4,logos:["claude.ai","midjourney.com","descript.com"],gradient:"from-purple-500 to-pink-600",bgGradient:"from-purple-500/10 to-pink-600/10"
}

,{
  id:"grow-audience",label:"Grow Audience",description:"Build your community",icon:x4,logos:["buffer.com","typefully.com","gumroad.com"],gradient:"from-orange-500 to-red-600",bgGradient:"from-orange-500/10 to-red-600/10"
}

,{
  id:"save-time",label:"Save Time",description:"Automate repetitive tasks",icon:i1,logos:["make.com","zapier.com","n8n.io"],gradient:"from-yellow-500 to-amber-600",bgGradient:"from-yellow-500/10 to-amber-600/10"
}

,{
  id:"learn-ai",label:"Learn AI",description:"Master AI technologies",icon:H3,logos:["chat.openai.com","claude.ai","perplexity.ai"],gradient:"from-cyan-500 to-blue-600",bgGradient:"from-cyan-500/10 to-blue-600/10"
}

];
  function O4(){
  const{
  ref:a,isVisible:i
}

=Ta({
  threshold:.2
}

),l=Af(uy.length,.1);
  return g.jsxs("section",{
  "code-path":"src/sections/BrowseByGoal.tsx:75:5",ref:a,className:"relative py-24 overflow-hidden",children:[g.jsxs("div",{
  "code-path":"src/sections/BrowseByGoal.tsx:80:7",className:"absolute inset-0 z-0",children:[g.jsx("div",{
  "code-path":"src/sections/BrowseByGoal.tsx:81:9",className:"absolute top-1/2 left-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[150px] -translate-y-1/2"
}

),g.jsx("div",{
  "code-path":"src/sections/BrowseByGoal.tsx:82:9",className:"absolute top-1/2 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[150px] -translate-y-1/2"
}

)]
}

),g.jsxs("div",{
  "code-path":"src/sections/BrowseByGoal.tsx:85:7",className:"relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8",children:[g.jsxs(G.div,{
  "code-path":"src/sections/BrowseByGoal.tsx:87:9",initial:{
  opacity:0,y:30
}

,animate:i?{
  opacity:1,y:0
}

:{

}

,transition:{
  duration:.6
}

,className:"flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4",children:[g.jsxs("div",{
  "code-path":"src/sections/BrowseByGoal.tsx:93:11",children:[g.jsx(G.span,{
  "code-path":"src/sections/BrowseByGoal.tsx:94:13",initial:{
  opacity:0,scale:.9
}

,animate:i?{
  opacity:1,scale:1
}

:{

}

,transition:{
  delay:.1
}

,className:"inline-block px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-4",children:"Curated Stacks"
}

),g.jsxs("h2",{
  "code-path":"src/sections/BrowseByGoal.tsx:102:13",className:"text-4xl md:text-5xl font-bold",children:["Browse by ",g.jsx("span",{
  "code-path":"src/sections/BrowseByGoal.tsx:103:25",className:"gradient-text",children:"Goal"
}

)]
}

)]
}

),g.jsxs(G.a,{
  "code-path":"src/sections/BrowseByGoal.tsx:107:11",href:"#stacks",initial:{
  opacity:0
}

,animate:i?{
  opacity:1
}

:{

}

,transition:{
  delay:.3
}

,className:"inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors",whileHover:{
  x:4
}

,children:["View All Stacks",g.jsx(vo,{
  "code-path":"src/sections/BrowseByGoal.tsx:116:13",className:"w-4 h-4"
}

)]
}

)]
}

),g.jsx("div",{
  "code-path":"src/sections/BrowseByGoal.tsx:121:9",className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",children:uy.map((o,u)=>g.jsx(G.a,{
  "code-path":"src/sections/BrowseByGoal.tsx:123:13",href:`#stacks?goal=${
  o.id
}

`,initial:l[u].initial,animate:i?l[u].animate:l[u].initial,transition:l[u].transition,whileHover:{
  y:-8,scale:1.02,transition:{
  duration:.3
}

}

,whileTap:{
  scale:.98
}

,className:"group relative",children:g.jsxs("div",{
  "code-path":"src/sections/BrowseByGoal.tsx:137:15",className:`relative h-full rounded-2xl bg-gradient-to-br ${
  o.bgGradient
}

 border border-gray-800 overflow-hidden transition-all duration-500 group-hover:border-gray-700`,children:[g.jsx("div",{
  "code-path":"src/sections/BrowseByGoal.tsx:139:17",className:`absolute inset-0 bg-gradient-to-br ${
  o.gradient
}

 opacity-0 group-hover:opacity-10 transition-opacity duration-500`
}

),g.jsxs("div",{
  "code-path":"src/sections/BrowseByGoal.tsx:142:17",className:"relative p-6",children:[g.jsxs("div",{
  "code-path":"src/sections/BrowseByGoal.tsx:144:19",className:"flex items-start justify-between mb-6",children:[g.jsx("div",{
  "code-path":"src/sections/BrowseByGoal.tsx:146:21",className:`w-12 h-12 rounded-xl bg-gradient-to-br ${
  o.gradient
}

 flex items-center justify-center shadow-lg`,children:g.jsx(o.icon,{
  "code-path":"src/sections/BrowseByGoal.tsx:147:23",className:"w-6 h-6 text-white"
}

)
}

),g.jsx("div",{
  "code-path":"src/sections/BrowseByGoal.tsx:151:21",className:"flex -space-x-2",children:o.logos.map((d,f)=>g.jsx(G.div,{
  "code-path":"src/sections/BrowseByGoal.tsx:153:25",className:"w-8 h-8 rounded-full bg-gray-800 border-2 border-gray-900 overflow-hidden",initial:{
  opacity:0,scale:0
}

,animate:i?{
  opacity:1,scale:1
}

:{

}

,transition:{
  delay:.4+f*.1
}

,children:g.jsx("img",{
  "code-path":"src/sections/BrowseByGoal.tsx:160:27",src:`https://www.google.com/s2/favicons?domain=${
  d
}

&sz=64`,alt:"",className:"w-full h-full object-cover",onError:y=>{
  y.target.style.display="none"
}

}

)
}

,d))
}

)]
}

),g.jsx("h3",{
  "code-path":"src/sections/BrowseByGoal.tsx:174:19",className:"text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors",children:o.label
}

),g.jsx("p",{
  "code-path":"src/sections/BrowseByGoal.tsx:177:19",className:"text-gray-400 text-sm mb-4",children:o.description
}

),g.jsxs("div",{
  "code-path":"src/sections/BrowseByGoal.tsx:182:19",className:"flex items-center gap-2 text-sm text-gray-500 group-hover:text-blue-400 transition-colors",children:[g.jsx("span",{
  "code-path":"src/sections/BrowseByGoal.tsx:183:21",children:"Explore stack"
}

),g.jsx(G.span,{
  "code-path":"src/sections/BrowseByGoal.tsx:184:21",animate:{
  x:[0,4,0]
}

,transition:{
  repeat:1/0,duration:1.5
}

,children:g.jsx(vo,{
  "code-path":"src/sections/BrowseByGoal.tsx:188:23",className:"w-4 h-4"
}

)
}

)]
}

)]
}

),g.jsx("div",{
  "code-path":"src/sections/BrowseByGoal.tsx:194:17",className:`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${
  o.gradient
}

 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`
}

)]
}

)
}

,o.id))
}

)]
}

)]
}

)
}

const fy=[{
  icon:f1,title:"Cutting-Edge AI Selection",description:"We handpick only the most advanced, breakthrough AI tools. Every tool in our directory is tested and verified to ensure it delivers real value and stays ahead of the curve.",color:"from-yellow-500 to-orange-500"
}

,{
  icon:O3,title:"Unbiased, Transparent Reviews",description:"Our reviews are based on real testing and measurable results. No paid placements, no hidden agendas—just honest assessments to help you make informed decisions.",color:"from-blue-500 to-cyan-500"
}

,{
  icon:i1,title:"Save Hours of Research",description:"We bring everything into one dashboard—comparisons, pros/cons, pricing, and use cases. Find the perfect tool in minutes, not hours.",color:"from-green-500 to-emerald-500"
}

,{
  icon:f4,title:"Privacy-First Approach",description:"Your data security matters. We only recommend tools that meet strict privacy standards and respect user data.",color:"from-purple-500 to-pink-500"
}

,{
  icon:c1,title:"Weekly Updates",description:"The AI landscape evolves daily. Our directory is updated weekly with the latest tools, features, and pricing changes.",color:"from-red-500 to-rose-500"
}

,{
  icon:L3,title:"Community Driven",description:"Join thousands of AI enthusiasts. Share reviews, discover hidden gems, and get recommendations from real users.",color:"from-pink-500 to-rose-500"
}

];
  function V4(){
  const{
  ref:a,isVisible:i
}

=Ta({
  threshold:.1
}

),l=Af(fy.length,.1);
  return g.jsxs("section",{
  "code-path":"src/sections/WhyChoose.tsx:49:5",ref:a,id:"about",className:"relative py-24 overflow-hidden",children:[g.jsxs("div",{
  "code-path":"src/sections/WhyChoose.tsx:55:7",className:"absolute inset-0 z-0",children:[g.jsx("div",{
  "code-path":"src/sections/WhyChoose.tsx:56:9",className:"absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[150px]"
}

),g.jsx("div",{
  "code-path":"src/sections/WhyChoose.tsx:57:9",className:"absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px]"
}

)]
}

),g.jsxs("div",{
  "code-path":"src/sections/WhyChoose.tsx:60:7",className:"relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8",children:[g.jsxs(G.div,{
  "code-path":"src/sections/WhyChoose.tsx:62:9",initial:{
  opacity:0,y:30
}

,animate:i?{
  opacity:1,y:0
}

:{

}

,transition:{
  duration:.6
}

,className:"text-center mb-16",children:[g.jsx(G.span,{
  "code-path":"src/sections/WhyChoose.tsx:68:11",initial:{
  opacity:0,scale:.9
}

,animate:i?{
  opacity:1,scale:1
}

:{

}

,transition:{
  delay:.1
}

,className:"inline-block px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-4",children:"Why XEdge"
}

),g.jsxs("h2",{
  "code-path":"src/sections/WhyChoose.tsx:76:11",className:"text-4xl md:text-5xl font-bold mb-4",children:["Why Choose ",g.jsx("span",{
  "code-path":"src/sections/WhyChoose.tsx:77:24",className:"gradient-text",children:"XEdge"
}

)]
}

),g.jsx("p",{
  "code-path":"src/sections/WhyChoose.tsx:79:11",className:"text-gray-400 text-lg max-w-2xl mx-auto",children:"We're building the most comprehensive, trustworthy AI tool discovery platform"
}

)]
}

),g.jsx("div",{
  "code-path":"src/sections/WhyChoose.tsx:85:9",className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:fy.map((o,u)=>g.jsx(G.div,{
  "code-path":"src/sections/WhyChoose.tsx:87:13",initial:l[u].initial,animate:i?l[u].animate:l[u].initial,transition:l[u].transition,className:"group",children:g.jsxs(G.div,{
  "code-path":"src/sections/WhyChoose.tsx:94:15",className:"relative h-full p-6 rounded-2xl bg-gray-900/40 border border-gray-800 overflow-hidden transition-all duration-500 group-hover:border-gray-700 group-hover:bg-gray-900/60",whileHover:{
  y:-4
}

,children:[g.jsx("div",{
  "code-path":"src/sections/WhyChoose.tsx:99:17",className:`absolute inset-0 bg-gradient-to-br ${
  o.color
}

 opacity-0 group-hover:opacity-5 transition-opacity duration-500`
}

),g.jsx(G.div,{
  "code-path":"src/sections/WhyChoose.tsx:102:17",className:`w-14 h-14 rounded-xl bg-gradient-to-br ${
  o.color
}

 flex items-center justify-center mb-5 shadow-lg`,whileHover:{
  rotate:5,scale:1.1
}

,transition:{
  duration:.3
}

,children:g.jsx(o.icon,{
  "code-path":"src/sections/WhyChoose.tsx:107:19",className:"w-7 h-7 text-white"
}

)
}

),g.jsx("h3",{
  "code-path":"src/sections/WhyChoose.tsx:111:17",className:"text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors",children:o.title
}

),g.jsx("p",{
  "code-path":"src/sections/WhyChoose.tsx:114:17",className:"text-gray-400 text-sm leading-relaxed",children:o.description
}

),g.jsx("div",{
  "code-path":"src/sections/WhyChoose.tsx:119:17",className:`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${
  o.color
}

 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-bl-full`
}

)]
}

)
}

,o.title))
}

),g.jsx(G.div,{
  "code-path":"src/sections/WhyChoose.tsx:126:9",initial:{
  opacity:0,y:30
}

,animate:i?{
  opacity:1,y:0
}

:{

}

,transition:{
  delay:.8
}

,className:"text-center mt-16",children:g.jsxs("div",{
  "code-path":"src/sections/WhyChoose.tsx:132:11",className:"inline-flex flex-col sm:flex-row items-center gap-4 p-6 rounded-2xl bg-gray-900/40 border border-gray-800",children:[g.jsxs("div",{
  "code-path":"src/sections/WhyChoose.tsx:133:13",className:"text-left",children:[g.jsx("p",{
  "code-path":"src/sections/WhyChoose.tsx:134:15",className:"text-white font-semibold",children:"Ready to discover your next AI tool?"
}

),g.jsx("p",{
  "code-path":"src/sections/WhyChoose.tsx:135:15",className:"text-gray-400 text-sm",children:"Join 10,000+ users exploring the future of AI"
}

)]
}

),g.jsx(G.a,{
  "code-path":"src/sections/WhyChoose.tsx:137:13",href:"#explore",className:"px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium whitespace-nowrap",whileHover:{
  scale:1.05
}

,whileTap:{
  scale:.95
}

,children:"Start Exploring"
}

)]
}

)
}

)]
}

)]
}

)
}

function _4(){
  const{
  ref:a,isVisible:i
}

=Ta({
  threshold:.3
}

),[l,o]=R.useState(""),[u,d]=R.useState(!1),[f,y]=R.useState(!1),p=async m=>{
  m.preventDefault(),l.trim()&&(d(!0),await new Promise(x=>setTimeout(x,1500)),d(!1),y(!0),o(""),setTimeout(()=>y(!1),5e3))
}

;
  return g.jsxs("section",{
  "code-path":"src/sections/Newsletter.tsx:30:5",ref:a,id:"newsletter",className:"relative py-24 overflow-hidden",children:[g.jsxs("div",{
  "code-path":"src/sections/Newsletter.tsx:36:7",className:"absolute inset-0 z-0",children:[g.jsx("div",{
  "code-path":"src/sections/Newsletter.tsx:37:9",className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-500/10 rounded-full blur-[150px]"
}

),g.jsx("div",{
  "code-path":"src/sections/Newsletter.tsx:38:9",className:"absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px] -translate-y-1/2"
}

),g.jsx("div",{
  "code-path":"src/sections/Newsletter.tsx:39:9",className:"absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[100px] -translate-y-1/2"
}

)]
}

),g.jsx("div",{
  "code-path":"src/sections/Newsletter.tsx:43:7",className:"absolute inset-0 z-0 opacity-[0.02]",style:{
  backgroundImage:`linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,backgroundSize:"50px 50px"
}

}

),g.jsx("div",{
  "code-path":"src/sections/Newsletter.tsx:52:7",className:"relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8",children:g.jsx(G.div,{
  "code-path":"src/sections/Newsletter.tsx:53:9",initial:{
  opacity:0,y:40
}

,animate:i?{
  opacity:1,y:0
}

:{

}

,transition:{
  duration:.8,ease:[.2,.8,.2,1]
}

,className:"relative",children:g.jsxs("div",{
  "code-path":"src/sections/Newsletter.tsx:60:11",className:"relative rounded-3xl overflow-hidden",children:[g.jsx("div",{
  "code-path":"src/sections/Newsletter.tsx:62:13",className:"absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 p-[1px] rounded-3xl",children:g.jsx("div",{
  "code-path":"src/sections/Newsletter.tsx:63:15",className:"absolute inset-[1px] rounded-3xl bg-gradient-to-br from-gray-900 to-gray-950"
}

)
}

),g.jsx("div",{
  "code-path":"src/sections/Newsletter.tsx:67:13",className:"relative p-8 md:p-12 lg:p-16",children:g.jsxs("div",{
  "code-path":"src/sections/Newsletter.tsx:68:15",className:"grid grid-cols-1 lg:grid-cols-2 gap-10 items-center",children:[g.jsxs("div",{
  "code-path":"src/sections/Newsletter.tsx:70:17",children:[g.jsxs(G.div,{
  "code-path":"src/sections/Newsletter.tsx:71:19",initial:{
  opacity:0,scale:.9
}

,animate:i?{
  opacity:1,scale:1
}

:{

}

,transition:{
  delay:.2
}

,className:"inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6",children:[g.jsx(o1,{
  "code-path":"src/sections/Newsletter.tsx:77:21",className:"w-4 h-4 text-blue-400"
}

),g.jsx("span",{
  "code-path":"src/sections/Newsletter.tsx:78:21",className:"text-sm text-blue-400 font-medium",children:"Weekly Newsletter"
}

)]
}

),g.jsxs(G.h2,{
  "code-path":"src/sections/Newsletter.tsx:81:19",initial:{
  opacity:0,y:20
}

,animate:i?{
  opacity:1,y:0
}

:{

}

,transition:{
  delay:.3
}

,className:"text-3xl md:text-4xl lg:text-5xl font-bold mb-4",children:["Join the ",g.jsx("span",{
  "code-path":"src/sections/Newsletter.tsx:87:30",className:"gradient-text",children:"Edge"
}

)]
}

),g.jsx(G.p,{
  "code-path":"src/sections/Newsletter.tsx:90:19",initial:{
  opacity:0,y:20
}

,animate:i?{
  opacity:1,y:0
}

:{

}

,transition:{
  delay:.4
}

,className:"text-gray-400 text-lg mb-6",children:"Get the latest AI tools, trends, and insights delivered straight to your inbox. No spam, just value."
}

),g.jsx(G.div,{
  "code-path":"src/sections/Newsletter.tsx:101:19",initial:{
  opacity:0,y:20
}

,animate:i?{
  opacity:1,y:0
}

:{

}

,transition:{
  delay:.5
}

,className:"flex flex-wrap gap-3",children:["Weekly Updates","Curated Tools","Exclusive Deals"].map(m=>g.jsxs("span",{
  "code-path":"src/sections/Newsletter.tsx:108:23",className:"inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-800/50 text-gray-300 text-sm",children:[g.jsx(Xu,{
  "code-path":"src/sections/Newsletter.tsx:112:25",className:"w-4 h-4 text-green-400"
}

),m]
}

,m))
}

)]
}

),g.jsx(G.div,{
  "code-path":"src/sections/Newsletter.tsx:120:17",initial:{
  opacity:0,x:30
}

,animate:i?{
  opacity:1,x:0
}

:{

}

,transition:{
  delay:.5
}

,children:f?g.jsxs(G.div,{
  "code-path":"src/sections/Newsletter.tsx:126:21",initial:{
  opacity:0,scale:.9
}

,animate:{
  opacity:1,scale:1
}

,className:"text-center p-8 rounded-2xl bg-green-500/10 border border-green-500/20",children:[g.jsx(G.div,{
  "code-path":"src/sections/Newsletter.tsx:131:23",initial:{
  scale:0
}

,animate:{
  scale:1
}

,transition:{
  type:"spring",damping:10
}

,className:"w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4",children:g.jsx(Xu,{
  "code-path":"src/sections/Newsletter.tsx:137:25",className:"w-8 h-8 text-green-400"
}

)
}

),g.jsx("h3",{
  "code-path":"src/sections/Newsletter.tsx:139:23",className:"text-xl font-semibold text-white mb-2",children:"You're on the list!"
}

),g.jsx("p",{
  "code-path":"src/sections/Newsletter.tsx:142:23",className:"text-gray-400",children:"Check your inbox for a confirmation email."
}

)]
}

):g.jsxs("form",{
  "code-path":"src/sections/Newsletter.tsx:147:21",onSubmit:p,className:"space-y-4",children:[g.jsxs("div",{
  "code-path":"src/sections/Newsletter.tsx:148:23",className:"relative",children:[g.jsx(s1,{
  "code-path":"src/sections/Newsletter.tsx:149:25",className:"absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
}

),g.jsx("input",{
  "code-path":"src/sections/Newsletter.tsx:150:25",type:"email",value:l,onChange:m=>o(m.target.value),placeholder:"Enter your email",required:!0,className:"w-full pl-12 pr-4 py-4 rounded-xl bg-gray-800/50 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all"
}

)]
}

),g.jsx(G.button,{
  "code-path":"src/sections/Newsletter.tsx:160:23",type:"submit",disabled:u,className:"w-full py-4 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-blue-500/25",whileHover:{
  scale:1.02,boxShadow:"0 20px 40px rgba(37, 99, 235, 0.3)"
}

,whileTap:{
  scale:.98
}

,children:u?g.jsx(G.div,{
  "code-path":"src/sections/Newsletter.tsx:168:27",animate:{
  rotate:360
}

,transition:{
  repeat:1/0,duration:1,ease:"linear"
}

,className:"w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
}

):g.jsxs(g.Fragment,{
  children:["Subscribe Now",g.jsx(l1,{
  "code-path":"src/sections/Newsletter.tsx:176:29",className:"w-5 h-5"
}

)]
}

)
}

),g.jsx("p",{
  "code-path":"src/sections/Newsletter.tsx:181:23",className:"text-center text-gray-500 text-sm",children:"Join 5,000+ subscribers. Unsubscribe anytime."
}

)]
}

)
}

)]
}

)
}

),g.jsx("div",{
  "code-path":"src/sections/Newsletter.tsx:191:13",className:"absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]"
}

),g.jsx("div",{
  "code-path":"src/sections/Newsletter.tsx:192:13",className:"absolute bottom-0 left-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-[60px]"
}

)]
}

)
}

)
}

)]
}

)
}

function B4(){
  const{
  ref:a,isVisible:i
}

=Ta({
  threshold:.3
}

),[l,o]=R.useState(0),[u,d]=R.useState(0),[f,y]=R.useState(""),[p,m]=R.useState(""),[x,b]=R.useState(!1),[S,N]=R.useState(!1),z=async U=>{
  U.preventDefault(),!(!f.trim()||!p.trim()||l===0)&&(b(!0),await new Promise(X=>setTimeout(X,1500)),b(!1),N(!0),y(""),m(""),o(0),setTimeout(()=>N(!1),5e3))
}

;
  return g.jsxs("section",{
  "code-path":"src/sections/ReviewSection.tsx:35:5",ref:a,className:"relative py-24 overflow-hidden",children:[g.jsx("div",{
  "code-path":"src/sections/ReviewSection.tsx:40:7",className:"absolute inset-0 z-0",children:g.jsx("div",{
  "code-path":"src/sections/ReviewSection.tsx:41:9",className:"absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-500/5 rounded-full blur-[150px]"
}

)
}

),g.jsx("div",{
  "code-path":"src/sections/ReviewSection.tsx:44:7",className:"relative z-10 max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8",children:g.jsx(G.div,{
  "code-path":"src/sections/ReviewSection.tsx:45:9",initial:{
  opacity:0,y:40
}

,animate:i?{
  opacity:1,y:0
}

:{

}

,transition:{
  duration:.8,ease:[.2,.8,.2,1]
}

,className:"relative",children:g.jsxs("div",{
  "code-path":"src/sections/ReviewSection.tsx:52:11",className:"relative rounded-3xl bg-gray-900/60 border border-gray-800 overflow-hidden",children:[g.jsxs("div",{
  "code-path":"src/sections/ReviewSection.tsx:54:13",className:"p-8 md:p-12",children:[g.jsxs(G.div,{
  "code-path":"src/sections/ReviewSection.tsx:56:15",initial:{
  opacity:0,y:20
}

,animate:i?{
  opacity:1,y:0
}

:{

}

,transition:{
  delay:.2
}

,className:"text-center mb-10",children:[g.jsxs("div",{
  "code-path":"src/sections/ReviewSection.tsx:62:17",className:"inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6",children:[g.jsx($3,{
  "code-path":"src/sections/ReviewSection.tsx:63:19",className:"w-4 h-4 text-purple-400"
}

),g.jsx("span",{
  "code-path":"src/sections/ReviewSection.tsx:64:19",className:"text-sm text-purple-400 font-medium",children:"Share Your Thoughts"
}

)]
}

),g.jsxs("h2",{
  "code-path":"src/sections/ReviewSection.tsx:67:17",className:"text-3xl md:text-4xl font-bold mb-4",children:["Share Your ",g.jsx("span",{
  "code-path":"src/sections/ReviewSection.tsx:68:30",className:"gradient-text",children:"Review"
}

)]
}

),g.jsx("p",{
  "code-path":"src/sections/ReviewSection.tsx:71:17",className:"text-gray-400 max-w-lg mx-auto",children:"Your opinion helps us improve XEdge. Leave your thoughts and get featured on our platform!"
}

)]
}

),S?g.jsxs(G.div,{
  "code-path":"src/sections/ReviewSection.tsx:78:17",initial:{
  opacity:0,scale:.9
}

,animate:{
  opacity:1,scale:1
}

,className:"text-center p-8 rounded-2xl bg-green-500/10 border border-green-500/20",children:[g.jsx(G.div,{
  "code-path":"src/sections/ReviewSection.tsx:83:19",initial:{
  scale:0
}

,animate:{
  scale:1
}

,transition:{
  type:"spring",damping:10
}

,className:"w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4",children:g.jsx(Xu,{
  "code-path":"src/sections/ReviewSection.tsx:89:21",className:"w-8 h-8 text-green-400"
}

)
}

),g.jsx("h3",{
  "code-path":"src/sections/ReviewSection.tsx:91:19",className:"text-xl font-semibold text-white mb-2",children:"Thank you for your review!"
}

),g.jsx("p",{
  "code-path":"src/sections/ReviewSection.tsx:94:19",className:"text-gray-400",children:"We appreciate your feedback and will feature it soon."
}

)]
}

):g.jsxs(G.form,{
  "code-path":"src/sections/ReviewSection.tsx:99:17",onSubmit:z,initial:{
  opacity:0,y:20
}

,animate:i?{
  opacity:1,y:0
}

:{

}

,transition:{
  delay:.4
}

,className:"space-y-6 max-w-xl mx-auto",children:[g.jsxs("div",{
  "code-path":"src/sections/ReviewSection.tsx:107:19",className:"relative",children:[g.jsx(u1,{
  "code-path":"src/sections/ReviewSection.tsx:108:21",className:"absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
}

),g.jsx("input",{
  "code-path":"src/sections/ReviewSection.tsx:109:21",type:"text",value:f,onChange:U=>y(U.target.value),placeholder:"Your Name",required:!0,className:"w-full pl-12 pr-4 py-4 rounded-xl bg-gray-800/50 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all"
}

)]
}

),g.jsx("div",{
  "code-path":"src/sections/ReviewSection.tsx:120:19",className:"flex items-center justify-center gap-2",children:[1,2,3,4,5].map(U=>g.jsx(G.button,{
  "code-path":"src/sections/ReviewSection.tsx:122:23",type:"button",onClick:()=>o(U),onMouseEnter:()=>d(U),onMouseLeave:()=>d(0),whileHover:{
  scale:1.2
}

,whileTap:{
  scale:.9
}

,className:"p-1",children:g.jsx(r1,{
  "code-path":"src/sections/ReviewSection.tsx:132:25",className:`w-8 h-8 transition-colors ${
  U<=(u||l)?"text-yellow-400 fill-yellow-400":"text-gray-600"
}

`
}

)
}

,U))
}

),g.jsx("p",{
  "code-path":"src/sections/ReviewSection.tsx:142:19",className:"text-center text-gray-500 text-sm",children:l>0?`You rated ${
  l
}

 stars`:"Click to rate"
}

),g.jsx("textarea",{
  "code-path":"src/sections/ReviewSection.tsx:147:19",value:p,onChange:U=>m(U.target.value),placeholder:"Write your review here...",required:!0,rows:4,className:"w-full px-4 py-4 rounded-xl bg-gray-800/50 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all resize-none"
}

),g.jsx(G.button,{
  "code-path":"src/sections/ReviewSection.tsx:157:19",type:"submit",disabled:x||l===0,className:"w-full py-4 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-purple-500/25",whileHover:{
  scale:1.02,boxShadow:"0 20px 40px rgba(168, 85, 247, 0.3)"
}

,whileTap:{
  scale:.98
}

,children:x?g.jsx(G.div,{
  "code-path":"src/sections/ReviewSection.tsx:165:23",animate:{
  rotate:360
}

,transition:{
  repeat:1/0,duration:1,ease:"linear"
}

,className:"w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
}

):g.jsxs(g.Fragment,{
  children:["Submit Review",g.jsx(l1,{
  "code-path":"src/sections/ReviewSection.tsx:173:25",className:"w-5 h-5"
}

)]
}

)
}

)]
}

)]
}

),g.jsx("div",{
  "code-path":"src/sections/ReviewSection.tsx:182:13",className:"absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-[50px]"
}

),g.jsx("div",{
  "code-path":"src/sections/ReviewSection.tsx:183:13",className:"absolute bottom-0 left-0 w-24 h-24 bg-pink-500/10 rounded-full blur-[40px]"
}

)]
}

)
}

)
}

)]
}

)
}

const yu={
  resources:[{
  name:"All Tools",href:"#explore"
}

,{
  name:"Categories",href:"#categories"
}

,{
  name:"Pricing",href:"#pricing"
}

,{
  name:"Blog",href:"#blog"
}

],company:[{
  name:"About Us",href:"#about"
}

,{
  name:"Careers",href:"#careers"
}

,{
  name:"Contact",href:"#contact"
}

,{
  name:"Press",href:"#press"
}

],legal:[{
  name:"Privacy Policy",href:"#privacy"
}

,{
  name:"Terms of Service",href:"#terms"
}

,{
  name:"Cookie Policy",href:"#cookies"
}

]
}

,H4=[{
  name:"Twitter",icon:y4,href:"#"
}

,{
  name:"YouTube",icon:w4,href:"#"
}

,{
  name:"GitHub",icon:_3,href:"#"
}

,{
  name:"LinkedIn",icon:X3,href:"#"
}

,{
  name:"Email",icon:s1,href:"mailto:hello@xedge.tech"
}

];
  function U4(){
  const{
  ref:a,isVisible:i
}

=Ta({
  threshold:.1
}

);
  return g.jsxs("footer",{
  "code-path":"src/sections/Footer.tsx:37:5",ref:a,className:"relative pt-20 pb-8 overflow-hidden border-t border-gray-800",children:[g.jsx("div",{
  "code-path":"src/sections/Footer.tsx:42:7",className:"absolute inset-0 z-0",children:g.jsx("div",{
  "code-path":"src/sections/Footer.tsx:43:9",className:"absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[300px] bg-blue-500/5 rounded-full blur-[150px]"
}

)
}

),g.jsxs("div",{
  "code-path":"src/sections/Footer.tsx:46:7",className:"relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8",children:[g.jsxs("div",{
  "code-path":"src/sections/Footer.tsx:47:9",className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16",children:[g.jsxs(G.div,{
  "code-path":"src/sections/Footer.tsx:49:11",initial:{
  opacity:0,y:20
}

,animate:i?{
  opacity:1,y:0
}

:{

}

,transition:{
  duration:.6
}

,className:"lg:col-span-2",children:[g.jsxs("a",{
  "code-path":"src/sections/Footer.tsx:55:13",href:"#home",className:"flex items-center gap-3 mb-6",children:[g.jsx("div",{
  "code-path":"src/sections/Footer.tsx:56:15",className:"w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/20",children:g.jsx("span",{
  "code-path":"src/sections/Footer.tsx:57:17",className:"text-white font-bold text-lg",children:"X"
}

)
}

),g.jsx("span",{
  "code-path":"src/sections/Footer.tsx:59:15",className:"text-xl font-bold gradient-text",children:"XEDGE"
}

)]
}

),g.jsx("p",{
  "code-path":"src/sections/Footer.tsx:62:13",className:"text-gray-400 mb-6 max-w-sm",children:"The future of AI in one place. Discover, compare, and leverage the best AI tools to supercharge your workflow."
}

),g.jsx("div",{
  "code-path":"src/sections/Footer.tsx:67:13",className:"flex items-center gap-3",children:H4.map((l,o)=>g.jsx(G.a,{
  "code-path":"src/sections/Footer.tsx:69:17",href:l.href,className:"w-10 h-10 rounded-xl bg-gray-800/50 hover:bg-gray-700 flex items-center justify-center text-gray-400 hover:text-white transition-colors",whileHover:{
  scale:1.1,y:-2
}

,whileTap:{
  scale:.9
}

,initial:{
  opacity:0,scale:.8
}

,animate:i?{
  opacity:1,scale:1
}

:{

}

,transition:{
  delay:.1+o*.05
}

,children:g.jsx(l.icon,{
  "code-path":"src/sections/Footer.tsx:79:19",className:"w-5 h-5"
}

)
}

,l.name))
}

)]
}

),g.jsxs(G.div,{
  "code-path":"src/sections/Footer.tsx:86:11",initial:{
  opacity:0,y:20
}

,animate:i?{
  opacity:1,y:0
}

:{

}

,transition:{
  duration:.6,delay:.1
}

,children:[g.jsx("h4",{
  "code-path":"src/sections/Footer.tsx:91:13",className:"font-semibold text-white mb-4",children:"Resources"
}

),g.jsx("ul",{
  "code-path":"src/sections/Footer.tsx:92:13",className:"space-y-3",children:yu.resources.map(l=>g.jsx("li",{
  "code-path":"src/sections/Footer.tsx:94:17",children:g.jsxs("a",{
  "code-path":"src/sections/Footer.tsx:95:19",href:l.href,className:"footer-link text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1 group",children:[l.name,g.jsx(hu,{
  "code-path":"src/sections/Footer.tsx:100:21",className:"w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity"
}

)]
}

)
}

,l.name))
}

)]
}

),g.jsxs(G.div,{
  "code-path":"src/sections/Footer.tsx:108:11",initial:{
  opacity:0,y:20
}

,animate:i?{
  opacity:1,y:0
}

:{

}

,transition:{
  duration:.6,delay:.2
}

,children:[g.jsx("h4",{
  "code-path":"src/sections/Footer.tsx:113:13",className:"font-semibold text-white mb-4",children:"Company"
}

),g.jsx("ul",{
  "code-path":"src/sections/Footer.tsx:114:13",className:"space-y-3",children:yu.company.map(l=>g.jsx("li",{
  "code-path":"src/sections/Footer.tsx:116:17",children:g.jsxs("a",{
  "code-path":"src/sections/Footer.tsx:117:19",href:l.href,className:"footer-link text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1 group",children:[l.name,g.jsx(hu,{
  "code-path":"src/sections/Footer.tsx:122:21",className:"w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity"
}

)]
}

)
}

,l.name))
}

)]
}

),g.jsxs(G.div,{
  "code-path":"src/sections/Footer.tsx:130:11",initial:{
  opacity:0,y:20
}

,animate:i?{
  opacity:1,y:0
}

:{

}

,transition:{
  duration:.6,delay:.3
}

,children:[g.jsx("h4",{
  "code-path":"src/sections/Footer.tsx:135:13",className:"font-semibold text-white mb-4",children:"Legal"
}

),g.jsx("ul",{
  "code-path":"src/sections/Footer.tsx:136:13",className:"space-y-3",children:yu.legal.map(l=>g.jsx("li",{
  "code-path":"src/sections/Footer.tsx:138:17",children:g.jsxs("a",{
  "code-path":"src/sections/Footer.tsx:139:19",href:l.href,className:"footer-link text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1 group",children:[l.name,g.jsx(hu,{
  "code-path":"src/sections/Footer.tsx:144:21",className:"w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity"
}

)]
}

)
}

,l.name))
}

)]
}

)]
}

),g.jsxs(G.div,{
  "code-path":"src/sections/Footer.tsx:153:9",initial:{
  opacity:0
}

,animate:i?{
  opacity:1
}

:{

}

,transition:{
  duration:.6,delay:.4
}

,className:"pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4",children:[g.jsx("p",{
  "code-path":"src/sections/Footer.tsx:159:11",className:"text-gray-500 text-sm",children:"© 2025 XEdge AI. All rights reserved."
}

),g.jsx("div",{
  "code-path":"src/sections/Footer.tsx:163:11",className:"flex items-center gap-6",children:g.jsx("span",{
  "code-path":"src/sections/Footer.tsx:164:13",className:"text-gray-500 text-sm",children:"Made with ❤️ for the AI community"
}

)
}

)]
}

)]
}

)]
}

)
}

function L4(){
  const a=R.useRef(null),i=R.useRef(null),[l,o]=R.useState(!1),[u,d]=R.useState(!1);
  return R.useEffect(()=>{
  const f=window.matchMedia("(pointer: coarse)").matches;
  if(d(f),f)return;
  const y=a.current,p=i.current;
  if(!y||!p)return;
  let m=0,x=0,b=0,S=0;
  const N=Y=>{
  m=Y.clientX,x=Y.clientY,p.style.left=`${
  m
}

px`,p.style.top=`${
  x
}

px`
}

,z=()=>{
  b+=(m-b)*.15,S+=(x-S)*.15,y.style.left=`${
  b
}

px`,y.style.top=`${
  S
}

px`,requestAnimationFrame(z)
}

,U=document.querySelectorAll('a, button, [role="button"]'),X=()=>o(!0),L=()=>o(!1);
  return U.forEach(Y=>{
  Y.addEventListener("mouseenter",X),Y.addEventListener("mouseleave",L)
}

),window.addEventListener("mousemove",N,{
  passive:!0
}

),z(),()=>{
  window.removeEventListener("mousemove",N),U.forEach(Y=>{
  Y.removeEventListener("mouseenter",X),Y.removeEventListener("mouseleave",L)
}

)
}

}

,[]),u?null:g.jsxs(g.Fragment,{
  children:[g.jsx("div",{
  "code-path":"src/App.tsx:90:7",ref:a,className:`fixed pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-all duration-200 ${
  l?"w-16 h-16":"w-8 h-8"
}

`,style:{
  border:"2px solid rgba(59, 130, 246, 0.5)",borderRadius:"50%",mixBlendMode:"difference"
}

}

),g.jsx("div",{
  "code-path":"src/App.tsx:102:7",ref:i,className:"fixed pointer-events-none z-[9999] w-1 h-1 bg-blue-400 rounded-full -translate-x-1/2 -translate-y-1/2"
}

)]
}

)
}

function G4(){
  const a=R.useRef(null);
  return R.useEffect(()=>{
  const i=a.current;
  if(!i)return;
  const l=i.getContext("2d");
  if(!l)return;
  let o,u=[];
  const d=()=>{
  i.width=window.innerWidth,i.height=window.innerHeight
}

,f=()=>{
  u=[];
  const p=Math.min(30,Math.floor(window.innerWidth/50));
  for(let m=0;
  m<p;
  m++)u.push({
  x:Math.random()*i.width,y:Math.random()*i.height,vx:(Math.random()-.5)*.3,vy:(Math.random()-.5)*.3,size:Math.random()*2+1,opacity:Math.random()*.3+.1
}

)
}

,y=()=>{
  l.clearRect(0,0,i.width,i.height),u.forEach((p,m)=>{
  p.x+=p.vx,p.y+=p.vy,p.x<0&&(p.x=i.width),p.x>i.width&&(p.x=0),p.y<0&&(p.y=i.height),p.y>i.height&&(p.y=0),l.beginPath(),l.arc(p.x,p.y,p.size,0,Math.PI*2),l.fillStyle=`rgba(59, 130, 246, ${
  p.opacity
}

)`,l.fill(),u.slice(m+1).forEach(x=>{
  const b=p.x-x.x,S=p.y-x.y,N=Math.sqrt(b*b+S*S);
  N<150&&(l.beginPath(),l.moveTo(p.x,p.y),l.lineTo(x.x,x.y),l.strokeStyle=`rgba(59, 130, 246, ${
  .1*(1-N/150)
}

)`,l.stroke())
}

)
}

),o=requestAnimationFrame(y)
}

;
  return d(),f(),y(),window.addEventListener("resize",()=>{
  d(),f()
}

),()=>{
  cancelAnimationFrame(o)
}

}

,[]),g.jsx("canvas",{
  "code-path":"src/App.tsx:206:5",ref:a,className:"fixed inset-0 pointer-events-none z-[1]",style:{
  opacity:.6
}

}

)
}

function q4({
  onComplete:a
}

){
  return R.useEffect(()=>{
  const i=setTimeout(a,2e3);
  return()=>clearTimeout(i)
}

,[a]),g.jsx(G.div,{
  "code-path":"src/App.tsx:222:5",initial:{
  opacity:1
}

,exit:{
  opacity:0
}

,transition:{
  duration:.5
}

,className:"fixed inset-0 z-[100] bg-gray-950 flex items-center justify-center",children:g.jsxs("div",{
  "code-path":"src/App.tsx:228:7",className:"text-center",children:[g.jsx(G.div,{
  "code-path":"src/App.tsx:229:9",initial:{
  scale:.8,opacity:0
}

,animate:{
  scale:1,opacity:1
}

,transition:{
  duration:.5
}

,className:"w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mx-auto mb-6",children:g.jsx(G.span,{
  "code-path":"src/App.tsx:235:11",animate:{
  rotate:360
}

,transition:{
  repeat:1/0,duration:2,ease:"linear"
}

,className:"text-white font-bold text-3xl",children:"X"
}

)
}

),g.jsx(G.div,{
  "code-path":"src/App.tsx:244:9",initial:{
  width:0
}

,animate:{
  width:200
}

,transition:{
  duration:1.5,ease:"easeInOut"
}

,className:"h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto"
}

),g.jsx(G.p,{
  "code-path":"src/App.tsx:251:9",initial:{
  opacity:0
}

,animate:{
  opacity:1
}

,transition:{
  delay:.3
}

,className:"mt-4 text-gray-400 text-sm",children:"Loading XEdge..."
}

)]
}

)
}

)
}

function Y4(){
  const[a,i]=R.useState(!0),[l,o]=R.useState(null),u=R.useRef(null),d=D4(),{
  fetchTools:f
}

=Tf();
  R.useEffect(()=>{
  if(!u.current||l)return;
  const p=setInterval(()=>{
  if(window.VANTA&&window.VANTA.NET){
  clearInterval(p);
  const m=window.VANTA.NET({
  el:u.current,mouseControls:!0,touchControls:!0,gyroControls:!1,minHeight:200,minWidth:200,scale:1,scaleMobile:1,color:3900150,backgroundColor:724757,points:8,maxDistance:25,spacing:18
}

);
  o(m)
}

}

,100);
  return()=>{
  clearInterval(p),l&&l.destroy()
}

}

,[l]),R.useEffect(()=>{
  const p=setInterval(()=>{
  if(window.firebase){
  clearInterval(p);
  const m=window.firebase;
  m.apps.length||m.initializeApp({
  apiKey:"AIzaSyBo9cfhTj2W7ikpdrqz6wAtSBisBo78OAc",authDomain:"xedge-1da3a.firebaseapp.com",projectId:"xedge-1da3a",storageBucket:"xedge-1da3a.appspot.com",messagingSenderId:"209657807080",appId:"1:209657807080:web:80180596d966b4667d895d",measurementId:"G-SXW16HCZB8"
}

)
}

}

,100);
  return()=>clearInterval(p)
}

,[]),R.useEffect(()=>{
  a||f()
}

,[a,f]);
  const y=R.useCallback(p=>{
  console.log("Search:",p);
  const m=document.getElementById("explore");
  m&&m.scrollIntoView({
  behavior:"smooth"
}

)
}

,[]);
  return g.jsxs(g.Fragment,{
  children:[g.jsx(Lu,{
  "code-path":"src/App.tsx:348:7",mode:"wait",children:a&&g.jsx(q4,{
  "code-path":"src/App.tsx:350:11",onComplete:()=>i(!1)
}

)
}

),!a&&g.jsxs(G.div,{
  "code-path":"src/App.tsx:355:9",initial:{
  opacity:0
}

,animate:{
  opacity:1
}

,transition:{
  duration:.5
}

,className:"relative min-h-screen bg-gray-950",children:[g.jsx("div",{
  "code-path":"src/App.tsx:362:11",ref:u,id:"vanta-bg",className:"fixed inset-0 z-0",style:{
  opacity:.6
}

}

),g.jsx(G4,{
  "code-path":"src/App.tsx:370:11"
}

),g.jsx(L4,{
  "code-path":"src/App.tsx:373:11"
}

),g.jsx(G.div,{
  "code-path":"src/App.tsx:376:11",className:"scroll-progress",style:{
  scaleX:d
}

}

),g.jsx(N4,{
  "code-path":"src/App.tsx:382:11",scrollProgress:d
}

),g.jsxs("main",{
  "code-path":"src/App.tsx:385:11",className:"relative z-10",children:[g.jsx(j4,{
  "code-path":"src/App.tsx:386:13",onSearch:y
}

),g.jsx(z4,{
  "code-path":"src/App.tsx:387:13"
}

),g.jsx(R4,{
  "code-path":"src/App.tsx:388:13"
}

),g.jsx(O4,{
  "code-path":"src/App.tsx:389:13"
}

),g.jsx(V4,{
  "code-path":"src/App.tsx:390:13"
}

),g.jsx(_4,{
  "code-path":"src/App.tsx:391:13"
}

),g.jsx(B4,{
  "code-path":"src/App.tsx:392:13"
}

)]
}

),g.jsx(U4,{
  "code-path":"src/App.tsx:396:11"
}

)]
}

)]
}

)
}

Kx.createRoot(document.getElementById("root")).render(g.jsx(R.StrictMode,{
  "code-path":"src/main.tsx:7:3",children:g.jsx(Y4,{
  "code-path":"src/main.tsx:8:5"
}

)
}

));

