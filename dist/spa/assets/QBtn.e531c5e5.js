import{a as o,c as V,h as v,g as F,I as de,a5 as D,K as fe,Q as ve,N as ae,O as me,r as H,x as ge,T as he,t as be,D as P,z as ye,M as ke}from"./index.79b9338d.js";import{h as pe,a as j,c as xe}from"./dom.c8021015.js";const Q={xs:18,sm:24,md:32,lg:38,xl:46},re={size:String};function le(e,t=Q){return o(()=>e.size!==void 0?{fontSize:e.size in t?`${t[e.size]}px`:e.size}:null)}const qe={size:{type:[String,Number],default:"1em"},color:String};function Ee(e){return{cSize:o(()=>e.size in Q?`${Q[e.size]}px`:e.size),classes:o(()=>"q-spinner"+(e.color?` text-${e.color}`:""))}}var $e=V({name:"QSpinner",props:{...qe,thickness:{type:Number,default:5}},setup(e){const{cSize:t,classes:a}=Ee(e);return()=>v("svg",{class:a.value+" q-spinner-mat",width:t.value,height:t.value,viewBox:"25 25 50 50"},[v("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":e.thickness,"stroke-miterlimit":"10"})])}});const U="0 0 24 24",W=e=>e,I=e=>`ionicons ${e}`,ie={"mdi-":e=>`mdi ${e}`,"icon-":W,"bt-":e=>`bt ${e}`,"eva-":e=>`eva ${e}`,"ion-md":I,"ion-ios":I,"ion-logo":I,"iconfont ":W,"ti-":e=>`themify-icon ${e}`,"bi-":e=>`bootstrap-icons ${e}`},ue={o_:"-outlined",r_:"-round",s_:"-sharp"},se={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},Se=new RegExp("^("+Object.keys(ie).join("|")+")"),we=new RegExp("^("+Object.keys(ue).join("|")+")"),X=new RegExp("^("+Object.keys(se).join("|")+")"),Re=/^[Mm]\s?[-+]?\.?\d/,Le=/^img:/,Be=/^svguse:/,Ce=/^ion-/,_e=/^(fa-(sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /;var Y=V({name:"QIcon",props:{...re,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(e,{slots:t}){const{proxy:{$q:a}}=F(),n=le(e),u=o(()=>"q-icon"+(e.left===!0?" on-left":"")+(e.right===!0?" on-right":"")+(e.color!==void 0?` text-${e.color}`:"")),f=o(()=>{let c,l=e.name;if(l==="none"||!l)return{none:!0};if(a.iconMapFn!==null){const s=a.iconMapFn(l);if(s!==void 0)if(s.icon!==void 0){if(l=s.icon,l==="none"||!l)return{none:!0}}else return{cls:s.cls,content:s.content!==void 0?s.content:" "}}if(Re.test(l)===!0){const[s,y=U]=l.split("|");return{svg:!0,viewBox:y,nodes:s.split("&&").map(i=>{const[k,h,p]=i.split("@@");return v("path",{style:h,d:k,transform:p})})}}if(Le.test(l)===!0)return{img:!0,src:l.substring(4)};if(Be.test(l)===!0){const[s,y=U]=l.split("|");return{svguse:!0,src:s.substring(7),viewBox:y}}let q=" ";const b=l.match(Se);if(b!==null)c=ie[b[1]](l);else if(_e.test(l)===!0)c=l;else if(Ce.test(l)===!0)c=`ionicons ion-${a.platform.is.ios===!0?"ios":"md"}${l.substring(3)}`;else if(X.test(l)===!0){c="notranslate material-symbols";const s=l.match(X);s!==null&&(l=l.substring(6),c+=se[s[1]]),q=l}else{c="notranslate material-icons";const s=l.match(we);s!==null&&(l=l.substring(2),c+=ue[s[1]]),q=l}return{cls:c,content:q}});return()=>{const c={class:u.value,style:n.value,"aria-hidden":"true",role:"presentation"};return f.value.none===!0?v(e.tag,c,pe(t.default)):f.value.img===!0?v(e.tag,c,j(t.default,[v("img",{src:f.value.src})])):f.value.svg===!0?v(e.tag,c,j(t.default,[v("svg",{viewBox:f.value.viewBox||"0 0 24 24"},f.value.nodes)])):f.value.svguse===!0?v(e.tag,c,j(t.default,[v("svg",{viewBox:f.value.viewBox},[v("use",{"xlink:href":f.value.src})])])):(f.value.cls!==void 0&&(c.class+=" "+f.value.cls),v(e.tag,c,j(t.default,[f.value.content])))}}});function Pe(e,t=250){let a=!1,n;return function(){return a===!1&&(a=!0,setTimeout(()=>{a=!1},t),n=e.apply(this,arguments)),n}}function G(e,t,a,n){a.modifiers.stop===!0&&ae(e);const u=a.modifiers.color;let f=a.modifiers.center;f=f===!0||n===!0;const c=document.createElement("span"),l=document.createElement("span"),q=me(e),{left:b,top:s,width:y,height:i}=t.getBoundingClientRect(),k=Math.sqrt(y*y+i*i),h=k/2,p=`${(y-k)/2}px`,d=f?p:`${q.left-b-h}px`,x=`${(i-k)/2}px`,_=f?x:`${q.top-s-h}px`;l.className="q-ripple__inner",xe(l,{height:`${k}px`,width:`${k}px`,transform:`translate3d(${d},${_},0) scale3d(.2,.2,1)`,opacity:0}),c.className=`q-ripple${u?" text-"+u:""}`,c.setAttribute("dir","ltr"),c.appendChild(l),t.appendChild(c);const B=()=>{c.remove(),clearTimeout(C)};a.abort.push(B);let C=setTimeout(()=>{l.classList.add("q-ripple__inner--enter"),l.style.transform=`translate3d(${p},${x},0) scale3d(1,1,1)`,l.style.opacity=.2,C=setTimeout(()=>{l.classList.remove("q-ripple__inner--enter"),l.classList.add("q-ripple__inner--leave"),l.style.opacity=0,C=setTimeout(()=>{c.remove(),a.abort.splice(a.abort.indexOf(B),1)},275)},250)},50)}function J(e,{modifiers:t,value:a,arg:n}){const u=Object.assign({},e.cfg.ripple,t,a);e.modifiers={early:u.early===!0,stop:u.stop===!0,center:u.center===!0,color:u.color||n,keyCodes:[].concat(u.keyCodes||13)}}var Te=de({name:"ripple",beforeMount(e,t){const a=t.instance.$.appContext.config.globalProperties.$q.config||{};if(a.ripple===!1)return;const n={cfg:a,enabled:t.value!==!1,modifiers:{},abort:[],start(u){n.enabled===!0&&u.qSkipRipple!==!0&&u.type===(n.modifiers.early===!0?"pointerdown":"click")&&G(u,e,n,u.qKeyEvent===!0)},keystart:Pe(u=>{n.enabled===!0&&u.qSkipRipple!==!0&&D(u,n.modifiers.keyCodes)===!0&&u.type===`key${n.modifiers.early===!0?"down":"up"}`&&G(u,e,n,!0)},300)};J(n,t),e.__qripple=n,fe(n,"main",[[e,"pointerdown","start","passive"],[e,"click","start","passive"],[e,"keydown","keystart","passive"],[e,"keyup","keystart","passive"]])},updated(e,t){if(t.oldValue!==t.value){const a=e.__qripple;a!==void 0&&(a.enabled=t.value!==!1,a.enabled===!0&&Object(t.value)===t.value&&J(a,t))}},beforeUnmount(e){const t=e.__qripple;t!==void 0&&(t.abort.forEach(a=>{a()}),ve(t,"main"),delete e._qripple)}});const oe={left:"start",center:"center",right:"end",between:"between",around:"around",evenly:"evenly",stretch:"stretch"},Ae=Object.keys(oe),Oe={align:{type:String,validator:e=>Ae.includes(e)}};function Me(e){return o(()=>{const t=e.align===void 0?e.vertical===!0?"stretch":"left":e.align;return`${e.vertical===!0?"items":"justify"}-${oe[t]}`})}function ce(e,t){typeof t.type=="symbol"?Array.isArray(t.children)===!0&&t.children.forEach(a=>{ce(e,a)}):e.add(t)}function Ze(e){const t=new Set;return e.forEach(a=>{ce(t,a)}),Array.from(t)}function ze(e){return e.appContext.config.globalProperties.$router!==void 0}function Z(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}function ee(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function je(e,t){for(const a in t){const n=t[a],u=e[a];if(typeof n=="string"){if(n!==u)return!1}else if(Array.isArray(u)===!1||u.length!==n.length||n.some((f,c)=>f!==u[c]))return!1}return!0}function te(e,t){return Array.isArray(t)===!0?e.length===t.length&&e.every((a,n)=>a===t[n]):e.length===1&&e[0]===t}function Ne(e,t){return Array.isArray(e)===!0?te(e,t):Array.isArray(t)===!0?te(t,e):e===t}function Ke(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const a in e)if(Ne(e[a],t[a])===!1)return!1;return!0}const Ie={to:[String,Object],replace:Boolean,href:String,target:String,disable:Boolean};function De({fallbackTag:e,useDisableForRouterLinkProps:t=!0}={}){const a=F(),{props:n,proxy:u,emit:f}=a,c=ze(a),l=o(()=>n.disable!==!0&&n.href!==void 0),q=t===!0?o(()=>c===!0&&n.disable!==!0&&l.value!==!0&&n.to!==void 0&&n.to!==null&&n.to!==""):o(()=>c===!0&&l.value!==!0&&n.to!==void 0&&n.to!==null&&n.to!==""),b=o(()=>q.value===!0?_(n.to):null),s=o(()=>b.value!==null),y=o(()=>l.value===!0||s.value===!0),i=o(()=>n.type==="a"||y.value===!0?"a":n.tag||e||"div"),k=o(()=>l.value===!0?{href:n.href,target:n.target}:s.value===!0?{href:b.value.href,target:n.target}:{}),h=o(()=>{if(s.value===!1)return-1;const{matched:m}=b.value,{length:E}=m,S=m[E-1];if(S===void 0)return-1;const R=u.$route.matched;if(R.length===0)return-1;const L=R.findIndex(ee.bind(null,S));if(L!==-1)return L;const N=Z(m[E-2]);return E>1&&Z(S)===N&&R[R.length-1].path!==N?R.findIndex(ee.bind(null,m[E-2])):L}),p=o(()=>s.value===!0&&h.value!==-1&&je(u.$route.params,b.value.params)),d=o(()=>p.value===!0&&h.value===u.$route.matched.length-1&&Ke(u.$route.params,b.value.params)),x=o(()=>s.value===!0?d.value===!0?` ${n.exactActiveClass} ${n.activeClass}`:n.exact===!0?"":p.value===!0?` ${n.activeClass}`:"":"");function _(m){try{return u.$router.resolve(m)}catch{}return null}function B(m,{returnRouterError:E,to:S=n.to,replace:R=n.replace}={}){if(n.disable===!0)return m.preventDefault(),Promise.resolve(!1);if(m.metaKey||m.altKey||m.ctrlKey||m.shiftKey||m.button!==void 0&&m.button!==0||n.target==="_blank")return Promise.resolve(!1);m.preventDefault();const L=u.$router[R===!0?"replace":"push"](S);return E===!0?L:L.then(()=>{}).catch(()=>{})}function C(m){if(s.value===!0){const E=S=>B(m,S);f("click",m,E),m.defaultPrevented!==!0&&E()}else f("click",m)}return{hasRouterLink:s,hasHrefLink:l,hasLink:y,linkTag:i,resolvedLink:b,linkIsActive:p,linkIsExactActive:d,linkClass:x,linkAttrs:k,getLink:_,navigateToRouterLink:B,navigateOnClick:C}}const ne={none:0,xs:4,sm:8,md:16,lg:24,xl:32},Qe={xs:8,sm:10,md:14,lg:20,xl:24},Ve=["button","submit","reset"],Fe=/[^\s]\/[^\s]/,He=["flat","outline","push","unelevated"];function Ue(e,t){return e.flat===!0?"flat":e.outline===!0?"outline":e.push===!0?"push":e.unelevated===!0?"unelevated":t}const We={...re,...Ie,type:{type:String,default:"button"},label:[Number,String],icon:String,iconRight:String,...He.reduce((e,t)=>(e[t]=Boolean)&&e,{}),square:Boolean,rounded:Boolean,glossy:Boolean,size:String,fab:Boolean,fabMini:Boolean,padding:String,color:String,textColor:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,tabindex:[Number,String],ripple:{type:[Boolean,Object],default:!0},align:{...Oe.align,default:"center"},stack:Boolean,stretch:Boolean,loading:{type:Boolean,default:null},disable:Boolean},Xe={...We,round:Boolean};function Ye(e){const t=le(e,Qe),a=Me(e),{hasRouterLink:n,hasLink:u,linkTag:f,linkAttrs:c,navigateOnClick:l}=De({fallbackTag:"button"}),q=o(()=>{const d=e.fab===!1&&e.fabMini===!1?t.value:{};return e.padding!==void 0?Object.assign({},d,{padding:e.padding.split(/\s+/).map(x=>x in ne?ne[x]+"px":x).join(" "),minWidth:"0",minHeight:"0"}):d}),b=o(()=>e.rounded===!0||e.fab===!0||e.fabMini===!0),s=o(()=>e.disable!==!0&&e.loading!==!0),y=o(()=>s.value===!0?e.tabindex||0:-1),i=o(()=>Ue(e,"standard")),k=o(()=>{const d={tabindex:y.value};return u.value===!0?Object.assign(d,c.value):Ve.includes(e.type)===!0&&(d.type=e.type),f.value==="a"?(e.disable===!0?d["aria-disabled"]="true":d.href===void 0&&(d.role="button"),n.value!==!0&&Fe.test(e.type)===!0&&(d.type=e.type)):e.disable===!0&&(d.disabled="",d["aria-disabled"]="true"),e.loading===!0&&e.percentage!==void 0&&Object.assign(d,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":e.percentage}),d}),h=o(()=>{let d;e.color!==void 0?e.flat===!0||e.outline===!0?d=`text-${e.textColor||e.color}`:d=`bg-${e.color} text-${e.textColor||"white"}`:e.textColor&&(d=`text-${e.textColor}`);const x=e.round===!0?"round":`rectangle${b.value===!0?" q-btn--rounded":e.square===!0?" q-btn--square":""}`;return`q-btn--${i.value} q-btn--${x}`+(d!==void 0?" "+d:"")+(s.value===!0?" q-btn--actionable q-focusable q-hoverable":e.disable===!0?" disabled":"")+(e.fab===!0?" q-btn--fab":e.fabMini===!0?" q-btn--fab-mini":"")+(e.noCaps===!0?" q-btn--no-uppercase":"")+(e.dense===!0?" q-btn--dense":"")+(e.stretch===!0?" no-border-radius self-stretch":"")+(e.glossy===!0?" glossy":"")+(e.square?" q-btn--square":"")}),p=o(()=>a.value+(e.stack===!0?" column":" row")+(e.noWrap===!0?" no-wrap text-no-wrap":"")+(e.loading===!0?" q-btn__content--hidden":""));return{classes:h,style:q,innerClasses:p,attributes:k,hasLink:u,linkTag:f,navigateOnClick:l,isActionable:s}}const{passiveCapture:$}=ye;let T=null,A=null,O=null;var et=V({name:"QBtn",props:{...Xe,percentage:Number,darkPercentage:Boolean,onTouchstart:[Function,Array]},emits:["click","keydown","mousedown","keyup"],setup(e,{slots:t,emit:a}){const{proxy:n}=F(),{classes:u,style:f,innerClasses:c,attributes:l,hasLink:q,linkTag:b,navigateOnClick:s,isActionable:y}=Ye(e),i=H(null),k=H(null);let h=null,p,d=null;const x=o(()=>e.label!==void 0&&e.label!==null&&e.label!==""),_=o(()=>e.disable===!0||e.ripple===!1?!1:{keyCodes:q.value===!0?[13,32]:[13],...e.ripple===!0?{}:e.ripple}),B=o(()=>({center:e.round})),C=o(()=>{const r=Math.max(0,Math.min(100,e.percentage));return r>0?{transition:"transform 0.6s",transform:`translateX(${r-100}%)`}:{}}),m=o(()=>{if(e.loading===!0)return{onMousedown:z,onTouchstart:z,onClick:z,onKeydown:z,onKeyup:z};if(y.value===!0){const r={onClick:S,onKeydown:R,onMousedown:N};if(n.$q.platform.has.touch===!0){const g=e.onTouchstart!==void 0?"":"Passive";r[`onTouchstart${g}`]=L}return r}return{onClick:P}}),E=o(()=>({ref:i,class:"q-btn q-btn-item non-selectable no-outline "+u.value,style:f.value,...l.value,...m.value}));function S(r){if(i.value!==null){if(r!==void 0){if(r.defaultPrevented===!0)return;const g=document.activeElement;if(e.type==="submit"&&g!==document.body&&i.value.contains(g)===!1&&g.contains(i.value)===!1){i.value.focus();const K=()=>{document.removeEventListener("keydown",P,!0),document.removeEventListener("keyup",K,$),i.value!==null&&i.value.removeEventListener("blur",K,$)};document.addEventListener("keydown",P,!0),document.addEventListener("keyup",K,$),i.value.addEventListener("blur",K,$)}}s(r)}}function R(r){i.value!==null&&(a("keydown",r),D(r,[13,32])===!0&&A!==i.value&&(A!==null&&M(),r.defaultPrevented!==!0&&(i.value.focus(),A=i.value,i.value.classList.add("q-btn--active"),document.addEventListener("keyup",w,!0),i.value.addEventListener("blur",w,$)),P(r)))}function L(r){i.value!==null&&(a("touchstart",r),r.defaultPrevented!==!0&&(T!==i.value&&(T!==null&&M(),T=i.value,h=r.target,h.addEventListener("touchcancel",w,$),h.addEventListener("touchend",w,$)),p=!0,d!==null&&clearTimeout(d),d=setTimeout(()=>{d=null,p=!1},200)))}function N(r){i.value!==null&&(r.qSkipRipple=p===!0,a("mousedown",r),r.defaultPrevented!==!0&&O!==i.value&&(O!==null&&M(),O=i.value,i.value.classList.add("q-btn--active"),document.addEventListener("mouseup",w,$)))}function w(r){if(i.value!==null&&!(r!==void 0&&r.type==="blur"&&document.activeElement===i.value)){if(r!==void 0&&r.type==="keyup"){if(A===i.value&&D(r,[13,32])===!0){const g=new MouseEvent("click",r);g.qKeyEvent=!0,r.defaultPrevented===!0&&ke(g),r.cancelBubble===!0&&ae(g),i.value.dispatchEvent(g),P(r),r.qKeyEvent=!0}a("keyup",r)}M()}}function M(r){const g=k.value;r!==!0&&(T===i.value||O===i.value)&&g!==null&&g!==document.activeElement&&(g.setAttribute("tabindex",-1),g.focus()),T===i.value&&(h!==null&&(h.removeEventListener("touchcancel",w,$),h.removeEventListener("touchend",w,$)),T=h=null),O===i.value&&(document.removeEventListener("mouseup",w,$),O=null),A===i.value&&(document.removeEventListener("keyup",w,!0),i.value!==null&&i.value.removeEventListener("blur",w,$),A=null),i.value!==null&&i.value.classList.remove("q-btn--active")}function z(r){P(r),r.qSkipRipple=!0}return ge(()=>{M(!0)}),Object.assign(n,{click:r=>{y.value===!0&&S(r)}}),()=>{let r=[];e.icon!==void 0&&r.push(v(Y,{name:e.icon,left:e.stack!==!0&&x.value===!0,role:"img","aria-hidden":"true"})),x.value===!0&&r.push(v("span",{class:"block"},[e.label])),r=j(t.default,r),e.iconRight!==void 0&&e.round===!1&&r.push(v(Y,{name:e.iconRight,right:e.stack!==!0&&x.value===!0,role:"img","aria-hidden":"true"}));const g=[v("span",{class:"q-focus-helper",ref:k})];return e.loading===!0&&e.percentage!==void 0&&g.push(v("span",{class:"q-btn__progress absolute-full overflow-hidden"+(e.darkPercentage===!0?" q-btn__progress--dark":"")},[v("span",{class:"q-btn__progress-indicator fit block",style:C.value})])),g.push(v("span",{class:"q-btn__content text-center col items-center q-anchor--skip "+c.value},r)),e.loading!==null&&g.push(v(he,{name:"q-transition--fade"},()=>e.loading===!0?[v("span",{key:"loading",class:"absolute-full flex flex-center"},t.loading!==void 0?t.loading():[v($e)])]:null)),be(v(b.value,E.value,g),[[Te,_.value,void 0,B.value]])}}});export{$e as Q,le as a,et as b,Y as c,Ze as g,re as u,ze as v};
