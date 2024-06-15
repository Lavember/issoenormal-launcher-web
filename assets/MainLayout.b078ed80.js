import{c as L,i as j,e as y,p as x,a as r,h as l,l as Q,b as M,g as R,r as u,d as O,f as g,w as E,o as K,_ as A,j as G,k as I,m as N,n as U,q as $,s as _}from"./index.79b9338d.js";import{h as V,a as J}from"./dom.c8021015.js";import{g as b,Q as X,a as k}from"./QResizeObserver.32e1f58f.js";var Y=L({name:"QPageContainer",setup(t,{slots:v}){const{proxy:{$q:s}}=R(),o=j(Q,y);if(o===y)return console.error("QPageContainer needs to be child of QLayout"),y;x(M,!0);const d=r(()=>{const a={};return o.header.space===!0&&(a.paddingTop=`${o.header.size}px`),o.right.space===!0&&(a[`padding${s.lang.rtl===!0?"Left":"Right"}`]=`${o.right.size}px`),o.footer.space===!0&&(a.paddingBottom=`${o.footer.size}px`),o.left.space===!0&&(a[`padding${s.lang.rtl===!0?"Right":"Left"}`]=`${o.left.size}px`),a});return()=>l("div",{class:"q-page-container",style:d.value},V(v.default))}}),Z=L({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:t=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(t.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(t,{slots:v,emit:s}){const{proxy:{$q:o}}=R(),d=u(null),a=u(o.screen.height),f=u(t.container===!0?0:o.screen.width),q=u({position:0,direction:"down",inflectionPoint:0}),p=u(0),i=u(O.value===!0?0:b()),P=r(()=>"q-layout q-layout--"+(t.container===!0?"containerized":"standard")),H=r(()=>t.container===!1?{minHeight:o.screen.height+"px"}:null),F=r(()=>i.value!==0?{[o.lang.rtl===!0?"left":"right"]:`${i.value}px`}:null),T=r(()=>i.value!==0?{[o.lang.rtl===!0?"right":"left"]:0,[o.lang.rtl===!0?"left":"right"]:`-${i.value}px`,width:`calc(100% + ${i.value}px)`}:null);function W(e){if(t.container===!0||document.qScrollPrevented!==!0){const n={position:e.position.top,direction:e.direction,directionChanged:e.directionChanged,inflectionPoint:e.inflectionPoint.top,delta:e.delta.top};q.value=n,t.onScroll!==void 0&&s("scroll",n)}}function B(e){const{height:n,width:c}=e;let h=!1;a.value!==n&&(h=!0,a.value=n,t.onScrollHeight!==void 0&&s("scrollHeight",n),z()),f.value!==c&&(h=!0,f.value=c),h===!0&&t.onResize!==void 0&&s("resize",e)}function D({height:e}){p.value!==e&&(p.value=e,z())}function z(){if(t.container===!0){const e=a.value>p.value?b():0;i.value!==e&&(i.value=e)}}let m=null;const C={instances:{},view:r(()=>t.view),isContainer:r(()=>t.container),rootRef:d,height:a,containerHeight:p,scrollbarWidth:i,totalWidth:r(()=>f.value+i.value),rows:r(()=>{const e=t.view.toLowerCase().split(" ");return{top:e[0].split(""),middle:e[1].split(""),bottom:e[2].split("")}}),header:g({size:0,offset:0,space:!1}),right:g({size:300,offset:0,space:!1}),footer:g({size:0,offset:0,space:!1}),left:g({size:300,offset:0,space:!1}),scroll:q,animate(){m!==null?clearTimeout(m):document.body.classList.add("q-body--layout-animate"),m=setTimeout(()=>{m=null,document.body.classList.remove("q-body--layout-animate")},155)},update(e,n,c){C[e][n]=c}};if(x(Q,C),b()>0){let c=function(){e=null,n.classList.remove("hide-scrollbar")},h=function(){if(e===null){if(n.scrollHeight>o.screen.height)return;n.classList.add("hide-scrollbar")}else clearTimeout(e);e=setTimeout(c,300)},w=function(S){e!==null&&S==="remove"&&(clearTimeout(e),c()),window[`${S}EventListener`]("resize",h)},e=null;const n=document.body;E(()=>t.container!==!0?"add":"remove",w),t.container!==!0&&w("add"),K(()=>{w("remove")})}return()=>{const e=J(v.default,[l(X,{onScroll:W}),l(k,{onResize:B})]),n=l("div",{class:P.value,style:H.value,ref:t.container===!0?void 0:d,tabindex:-1},e);return t.container===!0?l("div",{class:"q-layout-container overflow-hidden",ref:d},[l(k,{onResize:D}),l("div",{class:"absolute-full",style:F.value},[l("div",{class:"scroll",style:T.value},[n])])]):n}}});const ee=[{title:"Docs",caption:"quasar.dev",icon:"school",link:"https://quasar.dev"},{title:"Github",caption:"github.com/quasarframework",icon:"code",link:"https://github.com/quasarframework"},{title:"Discord Chat Channel",caption:"chat.quasar.dev",icon:"chat",link:"https://chat.quasar.dev"},{title:"Forum",caption:"forum.quasar.dev",icon:"record_voice_over",link:"https://forum.quasar.dev"},{title:"Twitter",caption:"@quasarframework",icon:"rss_feed",link:"https://twitter.quasar.dev"},{title:"Facebook",caption:"@QuasarFramework",icon:"public",link:"https://facebook.quasar.dev"},{title:"Quasar Awesome",caption:"Community Quasar projects",icon:"favorite",link:"https://awesome.quasar.dev"}],te=G({name:"MainLayout",components:{},setup(){const t=u(!1);return{linksList:ee,leftDrawerOpen:t,toggleLeftDrawer(){t.value=!t.value}}}});function oe(t,v,s,o,d,a){const f=I("router-view");return N(),U(Z,{view:"lHh Lpr lFf"},{default:$(()=>[_(Y,null,{default:$(()=>[_(f)]),_:1})]),_:1})}var re=A(te,[["render",oe]]);export{re as default};