(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();const oe="modulepreload",se=function(e){return"/"+e},X={},L=function(t,n,a){let s=Promise.resolve();if(n&&n.length>0){const o=document.getElementsByTagName("link");s=Promise.all(n.map(r=>{if(r=se(r),r in X)return;X[r]=!0;const c=r.endsWith(".css"),l=c?'[rel="stylesheet"]':"";if(!!a)for(let g=o.length-1;g>=0;g--){const v=o[g];if(v.href===r&&(!c||v.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${l}`))return;const f=document.createElement("link");if(f.rel=c?"stylesheet":oe,c||(f.as="script",f.crossOrigin=""),f.href=r,document.head.appendChild(f),c)return new Promise((g,v)=>{f.addEventListener("load",g),f.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${r}`)))})}))}return s.then(()=>t()).catch(o=>{const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=o,window.dispatchEvent(r),!r.defaultPrevented)throw o})},p={};let w={};const ce=e=>e===void 0,P=e=>e!==void 0,y=e=>typeof e=="function",ie=e=>{const t={};let n=e.hooks;n=Array.isArray(n)?n:[n],n.map(a=>{a.routes.map(s=>{t[s]=Object.assign({},a.afterEnter&&{afterEnter:a.afterEnter},a.afterEnterLazy&&{afterEnterLazy:a.afterEnterLazy},a.beforeEnter&&{beforeEnter:a.beforeEnter},a.beforeLeave&&{beforeLeave:a.beforeLeave})})}),w=t,console.log(w)},le=()=>({router:{current:"/",next:""}}),O={updateUrl(e){return history.pushState({previousUrl:O.getRouteFromUrl()},null,e),e},urlChangedEvent(e){window.dispatchEvent(new CustomEvent("urlChanged",{detail:{route:e}}))},getRouteFromUrl(){const e=location.href,t=e.substring(0,e.indexOf("/",14));return e.replace(t,"").replace(".html","")}},ue=e=>[{name:"popstate",action:e.navigateHistory},{name:"Lazy_View_Rendered",action:e.afterEnterLazy}],fe=e=>{const t={},n={},a={},s={},o=(r,c,l={})=>P(l[c])?l[c]:P(w[r])&&w[r][c]?w[r][c]:P(w["/*"])?w["/*"][c]:c==="callback"?void 0:[];return{navigateHistory(){const r=O.getRouteFromUrl();console.log("popstate route ",r),e.msgs(l=>["effect",{def:()=>l}]).done(l=>{c(l)});const c=l=>{const u=l.router.current,f=o(u,"beforeLeave",t),g=o(r,"beforeEnter",n),v=o(r,"afterEnter",a),d=o(r,"callback",s);e.msgs(["state",{path:["router","next"],value:r},{preventRender:!1}],...(y(f)?f(u):f)||[],...(y(g)?g(r):g)||[],["state",{path:["router","current"],value:r}],...(y(v)?v(r):v)||[]).done(()=>{d&&(typeof d=="function"?d():Array.isArray(d)?e.msgs(...d):console.warn("Callback must be a function or message array"))})}},navigate(r,c,l){l.preventDefault();const u=O.getRouteFromUrl();t[u]=c.beforeLeave,n[r]=c.beforeEnter,a[r]=c.afterEnter,s[r]=c.callback;const f=o(u,"beforeLeave",c),g=o(r,"beforeEnter",c),v=o(r,"afterEnter",c),d=o(r,"callback",c);e.msgs(b=>["control",{if:b.router.current!==r}],["state",{path:["router","next"],value:r},{preventRender:!1}],...(y(f)?f(u,r,l):f)||[],...(y(g)?g(r,l):g)||[],["effect",{name:O.updateUrl,args:[r]}],b=>["state",{path:["router","current"],value:b}],...(y(v)?v(r,l):v)||[]).done(()=>{d&&(typeof d=="function"?d():Array.isArray(d)?e.msgs(...d):console.warn("Callback must be a function or message array"))})},afterEnterLazy(){e.msgs(c=>["effect",{def:()=>c}]).done(c=>{const l=o(c.router.current,"afterEnterLazy");l&&l.length>0&&r(c,l)});const r=(c,l)=>{e.msgs(...l)}}}},me=(e,t)=>(n,a)=>{n("a",{text:e.name,href:e.href,class:`${e.className||""} ${e.href===e.current?"active":""}`,onclick:[t.routerActions.navigate,e.href,{beforeLeave:e.beforeLeave,beforeEnter:e.beforeEnter,afterEnter:e.afterEnter,callback:e.callback}]}),a("a")},de=({routes:e,activeRoute:t})=>()=>{let n=!1;for(let a=0;a<e.length;a++){const s=e[a];if(s.route.indexOf(":")>-1)if(P(p[t]))n=!0,p[t].component(p[t].params);else{const o=s.route.split("/"),r=t.split("/"),c={};if(o.length===r.length)for(let l=0;l<o.length&&!(o[l]!==r[l]&&o[l].indexOf(":")!==0);l++)o[l].indexOf(":")===0&&(c[o[l].replace(":","")]=r[l]),l===o.length-1&&(n=!0,ce(p[t])&&(p[t]={},p[t].component=s.component,p[t].params=c,s.component(c)))}if(!n&&(t===s.route||t.indexOf(s.route+"/")===0)?(n=!0,s.component()):a===e.length-1&&s.route==="no-match"&&s.component(),n)break}},ge=(e,t,n,a={})=>[{RouterLink:me},{props:{name:e,href:t,className:n,beforeLeave:a.beforeLeave,beforeEnter:a.beforeEnter,afterEnter:a.afterEnter,callback:a.callback},mergeStateToProps:s=>({current:s.router.current}),propTypes:s=>({name:s.string,href:s.string,beforeLeave:[s.array,s.undefined],beforeEnter:[s.array,s.undefined],afterEnter:[s.array,s.undefined],callback:[s.array,s.undefined],current:s.string})}],ve=(...e)=>[{RouterSwitch:de},{props:{routes:e},mergeStateToProps:t=>({activeRoute:t.router.current}),propTypes:t=>({routes:t.array,activeRoute:t.string})}],k=(e,t)=>({route:e,component:t}),F=(()=>{async function e(r,c){if(await new Promise(l=>setTimeout(l,r)),c)return c}const t={},n=(r,c)=>t[c]===!0?!1:(t[c]=!0,new Promise(l=>{setTimeout(function(){t[c]=!1,l()},r)})),a={};return{Delay:e,DateObj:r=>{const c=new Date;if(typeof r!="string"||r==="")return c;if(typeof c[r]=="function")return c[r]();console.warn(`'${r}' is not a Date method`)},Throttle:n,Debounce:(r,c)=>(a[c]&&clearTimeout(a[c]),new Promise(l=>{a[c]=setTimeout(function(){l()},r)}))}})(),W=(e,t)=>["effect",{name:F.Debounce,args:[e,t]}],H=(e,t)=>["effect",{name:F.Delay,args:[e,t]}],be=()=>["effect",{name:F.DateObj,args:["toLocaleTimeString"]}],he={hooks:[{routes:["/"],beforeLeave:[e=>["control",{if:e.viewportSize==="large",false:["","skip",2]}],["state",{path:[["routeTransition","landingScreenActive"]],value:["in",!1]}],H(1500)],afterEnter:[e=>["control",{if:e.viewportSize==="large",false:["","skip",1]}],H(10),["state",{path:[["routeTransition","landingScreenActive","contactShow"]],value:["out",!0,!1]}]]}]},j=(e,t,n)=>{let a={};const s=[],o=[];for(let r=1;r<=n;r++)e=="state"?a=Object.assign({},a,t(r)):e=="action"?s.push(t(r)):e=="subscription"&&o.push(t(r));if(e==="state")return a;if(e==="action")return s;if(e==="subscription")return o},$e="h1",ze="h2",Ne="h3",xe="h4",i="div",m="span",Y="a",Z="main",E="button",pe="img",We="section",G="nav",U="ul",S="li",ee="video",we="source",te="dl",A="dt",_="dd",R=(e,t)=>{let n={root:t.root?document.querySelector(t.root):document,rootMargin:t.rootMargin||"0px",threshold:t.threshold||1},a=(r,c)=>{r.forEach(l=>{e(l)})},s=new IntersectionObserver(a,n),o;return setTimeout(()=>{o=document.querySelectorAll(t.target),o&&o.forEach(r=>{s.observe(r)})},100),()=>{o&&o.forEach(r=>{s.disconnect(r)})}},ye=(e="clock")=>({[e]:{active:!0,time:null,title:"time"}}),Ee=(e="clock")=>({[e]:t=>({tick(){t.msgs(be(),n=>["state",{path:[e,"time"],value:n}])}})}),ne="Ryan Rudman",re="Front End Developer",T={title:"Ryan Rudman",subtitle:"Front End Developer"},ae={content:""},B={snippet:"Some details about myself...",path:"/about",name:"about",className:"pink-background"},q={snippet:"A little about my commerical work experience...",path:"/work",name:"work",className:"purple-background"},M={snippet:"What im good at & and how I can help you...",path:"/skillset",name:"skillset",className:"green-background"},K={snippet:"See what I'm tinkering with in my free time...",path:"/personal-projects",name:"personal projects",className:"red-background"},J={snippet:"Get in touch, download my resume...",name:"contact",className:"red-background",links:[{label:"email",type:"mail",url:"mailto:ryanrudman@yahoo.co.uk",img:""},{label:"cv",type:"download",url:"/files/Ryan-Rudman-Resume.pdf",img:""},{label:"github",type:"external",url:"https://github.com/RyanR26",img:""},{label:"linkedin",type:"external",url:"https://www.linkedin.com/in/ryan-rudman-9a281b8a/",img:""}]},ke={name:ne,main:re,heading:T,footer:ae,about:B,work:q,skillset:M,personal_projects:K,contact:J},Se=Object.freeze(Object.defineProperty({__proto__:null,about:B,contact:J,default:ke,footer:ae,heading:T,main:re,name:ne,personal_projects:K,skillset:M,work:q},Symbol.toStringTag,{value:"Module"})),D=B,V=q,$=M,z=K,N=J,Ie={contactShow:!1,hoveredItem:null},Le=e=>({showContact(){e.msgs(["state",{path:["contactShow"],value:!0}])},setHoveredItem(t){e.stamp({id:"set-hovered-item"}).msgs(["cancel",{id:"reset-hovered-item"}],W(100,"setHoverItem"),["state",{path:["hoveredItem"],value:t.target.dataset.section}])},resetHoveredItem(){e.stamp({id:"reset-hovered-item"}).msgs(["cancel",{id:"set-hovered-item"}],W(100,"resetHoverItem"),["state",{path:["hoveredItem"],value:null}])}}),je=(e,t)=>(n,a,{component:s})=>{const o=(b,h="/",I)=>{const Q=h.replace("/","").replace("-","_");n(i,{class:`nav-item route-link ${I||""} ${e.routeTransition==="in"?"fade-out":"fade-in"}`,data:[`section=${Q}`],onmouseenter:t.NavActions.setHoveredItem,onmouseleave:t.NavActions.resetHoveredItem},{key:"key_"+Q}),n(i),s(ge(b,h,"dot-grid")),a(i),a(i)},r=(b,h,I)=>{n(i,{class:`nav-item content-item ${e.routeTransition==="in"?"fade-out":"fade-in"}`,...I?{data:[`section=${I}`],onmouseenter:t.NavActions.setHoveredItem,onmouseleave:t.NavActions.resetHoveredItem}:null},{key:"key_"+h}),b(),a(i)},c=()=>{n(i,{class:`nav-item content-container ${e.routeTransition==="in"?"transition-in":"transition-out"}`},{key:"main-content"}),n(i,{class:"logo-container"}),l(),a(i),a(i)},l=()=>{n(i,{class:"logo rotate"}),n(m,{text:"R"}),a(m),n(m,{text:"R"}),a(m),a(i)},u=()=>{n(i,{class:"center stack-content"}),n(i,{class:"pink-text",text:T.title}),a(i),n(i,{class:"font-xsmall",text:T.subtitle}),a(i),a(i)},f=()=>{const b=Se[e.hoveredItem];n(i,{class:"info-snippet center font-xsmall"},{key:e.hoveredItem}),b&&(n(i,{text:b.snippet}),a(i)),a(i)},g=()=>{var b;e.contactShow?(n(i),n(U,{class:"contact-links"}),(b=N.links)==null||b.forEach(h=>{n(S),n(Y,{class:"font-xsmall",text:h.label,href:h.url,...h.type==="external"?{target:"_blank"}:{},...h.type==="download"?{download:h.url}:{}}),a(Y),a(S)}),a(S),a(i)):(n(E,{text:N.name,onclick:t.NavActions.showContact}),a(E))},v=()=>{n(i,{class:"bottom-right font-xsmall",text:"Built with Karbon UI framework"}),a(i)},d=e.viewportSize==="large";n(G,{class:`nav ${d?"":"nav-small"}`}),r(u,"heading"),o(D.name,D.path,D.className),d&&r(f,"dynamicTextInfo"),o(z.name,z.path,z.className),d&&c(),o(V.name,V.path,V.className),r(g,"contact",N.name),o($.name,$.path,$.className),d&&r(v,"footer"),a(G)},Ae=e=>({[e]:{activeIndex:0,transformOffset:0,itemWidth:null,controls:!0}}),_e=e=>({[e]:t=>{function n(o,r,c,l){l.preventDefault(),t.msgs(["state",{path:[e,"activeIndex"],value:u=>o==="next"?u===r-1?0:u+1:u===0?r-1:u-1},{preventRender:!0}],["effect",{name:x.getActiveItemEl,args:[l]}],u=>["control",{if:u instanceof Element,true:u,false:'no "active" carousel element found'}],u=>["effect",{name:x.getSlideWidth,args:[u]}],(u,f)=>["state",{path:[e,"transformOffset"],value:(u+c)*f[e].activeIndex}]).done((u,f)=>{console.log(u,f)})}function a(){t.msgs(o=>["control",{if:o[e].activeIndex!==0}],["state",{path:[e,["activeIndex","transformOffset"]],value:[0,0]}]).done(()=>{s()})}function s(){t.msgs(W(100,e),H(100),["effect",{name:x.getContainerEl,args:[e]}],o=>["state",{path:[e,"itemWidth"],value:o}])}return{next:n,resizeCarousel:a,setCarouselItemWidth:s}}}),x={getSlideWidth(e){return e.clientWidth},getActiveItemEl(e){return e.target.closest(".carousel").querySelector(".active")},getContainerEl(e){var t;return(t=document.getElementById(e))==null?void 0:t.clientWidth}},Pe=(e,t)=>{let n;const a=()=>{e()};return setTimeout(()=>{n=document.getElementById(t.id),n&&(a(),window.addEventListener("resize",a))},100),()=>{window.removeEventListener("resize",a)}},Oe=(e,t,n)=>({name:Pe,action:t[e].resizeCarousel,watch:n,options:{id:e},key:e}),Ce=(e,t)=>(n,a)=>{n(i,{id:e.id,class:"carousel"}),e.config.controls&&(n(E,{class:"carousel-button prev",text:"prev",onclick:[t[e.id].next,"prev",e.items.length,e.config.gap]}),a(E),n(E,{class:"carousel-button next",text:"next",onclick:[t[e.id].next,"next",e.items.length,e.config.gap]}),a(E)),n(i,{class:"carousel-container",style:{overflow:"hidden",width:"100%"}}),n(i,{class:"carousel-track",style:{transform:`translate3d(-${e.transformOffset}px, 0, 0)`}}),e.items.map((s,o)=>{n(i,{class:`carousel-item ${o===e.activeIndex?"active":""}`,style:{...e.config.gap?{"margin-right":e.config.gap+"px"}:{},...e.itemWidth?{width:e.itemWidth+"px"}:{}}}),e.itemView(s,o,e),a(i)}),a(i),e.config.pagination&&(n(i,{class:"carousel-pagination font-xsmall"}),n(m,{text:e.activeIndex+1}),a(m),n(m,{text:" / "}),a(i),n(m,{text:e.items.length}),a(m),a(i)),a(i),a(i)},Te=(e,t,n,a)=>[{CarouselView:Ce},{props:{id:e,config:a||{controls:!0,pagination:!0,gap:0},items:t,itemView:(s,o,r)=>{n(s,o,r)}},mergeStateToProps:s=>({activeIndex:s[e].activeIndex,transformOffset:s[e].transformOffset,itemWidth:s[e].itemWidth}),subscribe:[e]}],Re=e=>({[e]:{detailsShow:!1}}),He=e=>(t,n,{component:a})=>{const s=`${e.project.name.replace(/ /g,"-").toLowerCase()}`;t(i,{id:s,class:`project-showcase ${e.index%2==0?"dark-theme":""}`},{key:s}),t(i,{class:"container-full spacer-zero intro-animation intro-animation-scale"}),a(Te(`carouselProject${e.index+1}`,e.project.media,(o,r,c)=>{t(i,{class:"project-media-container "}),o.background&&(t(i,{class:"blurred-image-background",style:{"background-image":`url(${o.background})`}}),n(i)),o.type==="image"?t(pe,{src:o.url,loading:"lazy",class:o.background?"image-contain":"",alt:`${e.project.brand} - ${e.project.name} - project image`}):o.type==="video"&&(t(ee,{class:`video ${o.background?"image-contain":""} ${r===c.activeIndex?"playing":"stopped"}`,controls:!0,autoplay:!1,muted:!0,playsInline:!0,loop:!0,...o.poster?{poster:o.poster}:{}}),t(we,{src:o.url,type:"video/mp4"}),n(ee)),n(i)})),n(i),t(i,{class:"container spacer intro-animation intro-animation-fade"}),t(i,{class:"content-section"}),t(i,{class:"project-title underline spacer margin"}),t(m,{class:"text-subheading",text:e.project.brand}),n(m),t(m,{class:"",text:" - "+e.project.name}),n(m),n(i),t(U,{class:"tech-list spacer"}),e.project.techList.forEach(o=>{t(S,{class:"tech-name font-small",text:o}),n(S)}),n(U),t(i,{class:"project-detail project-summary spacer-sm"}),t(m,{class:"project-detail-title spacer-sm",text:"Summary:"}),n(m),t(m,{class:"font-small",text:e.project.summary}),n(m),n(i),t(i,{class:"project-detail project-role spacer-sm"}),t(m,{class:"project-detail-title spacer-sm",text:"Role:"}),n(m),t(m,{class:"font-small spacer-sm",text:e.project.role}),n(m),n(i),t(te),t(A,{class:"project-detail-title spacer-sm",text:"Objective:"}),n(A),t(_,{class:"font-small spacer-sm",text:e.project.objective}),n(_),t(A,{class:"project-detail-title spacer-sm",text:"Details:"}),n(A),t(_,{class:"font-small spacer",innerHTML:e.project.details}),n(_),n(te),n(i),n(i),n(i)},De=e=>({log(t){e.msgs(["effect",{def:()=>console.log("LOG - "+t)}])},playPauseVideo(t){e.msgs(["effect",{name:C.playPauseVideo,args:[t.target,t.isIntersecting&&t.target.classList.contains("playing")]}])},triggerAnimation(t){e.msgs(["control",{if:t.isIntersecting}],["effect",{name:C.addClass,args:[t.target,"trigger-animation"]}])},setViewportSize(){e.msgs(["state",{path:["viewportSize"],value:C.getViewportSize()}])},triggerSubsciptions(){e.msgs(["state",{path:["router","current"],value:t=>t+"#"},{preventRender:!0}],["state",{path:["router","current"],value:t=>t.replace("#","")},{preventRender:!0}])}}),C={playPauseVideo(e,t){t?e.play():e.pause()},addClass(e,t){e.classList.add(t)},getViewportSize(){return window.innerWidth<769?"small":"large"}},Ve={container:e=>e.getElementById("app"),state:{...le(),...ye("clock"),...j("state",e=>Ae("carouselProject"+e),8),...j("state",e=>Re("projectShowcase"+e),8),...Ie,landingScreenActive:!0,routeTransition:null,viewportSize:C.getViewportSize()},actions:[{globalActions:De},{routerActions:fe},Ee("clock"),...j("action",e=>_e("carouselProject"+e),8)],subscriptions:(e,t)=>[...ue(t.routerActions),...j("subscription",n=>Oe("carouselProject"+n,t,e.router.current),8),{name:R,action:t.globalActions.playPauseVideo,options:{target:".video",threshold:.8},watch:e.router.current},{name:R,action:t.globalActions.triggerAnimation,options:{target:".intro-animation",threshold:.3},watch:e.router.current},{name:R,action:t.globalActions.triggerAnimation,options:{target:".intro-animation",threshold:.3},watch:e.router.current},{name:"resize",action:t.globalActions.setViewportSize},{name:"Lazy_View_Rendered",action:t.globalActions.triggerSubsciptions}],tap:{},init:()=>{ie(he)},view:e=>(t,n,{component:a,lazy:s})=>{const o=()=>{a({NavView:je},{props:{...e},actions:{NavActions:Le}})},r=()=>{t(i,{text:"An error has occurred, please refresh the page and try again."}),n(i)};t(Z),a(ve(k("/",()=>{o()}),k("/about",()=>{s(()=>L(()=>import("./about-nRCXtR0c.js"),__vite__mapDeps([0,1])),c=>a({AboutView:c.AboutView},{props:{...e}}),()=>o(),()=>r())}),k("/work",()=>{s(()=>L(()=>import("./work-aqGUzyVi.js"),__vite__mapDeps([2,1])),c=>a({WorkView:c.WorkView},{props:{...e}}),()=>o(),()=>r())}),k("/skillset",()=>{s(()=>L(()=>import("./skills-CsCodhM3.js"),__vite__mapDeps([3,1])),c=>a({SkillsView:c.SkillsView},{props:{...e}}),()=>o(),()=>r())}),k("/personal-projects",()=>{s(()=>L(()=>import("./personalProjects-fsdW3mHA.js"),__vite__mapDeps([4,1])),c=>a({PersonalProjectsView:c.PersonalProjectsView},{props:{...e}}),()=>o(),()=>r())}))),n(Z)}};window.karbon.render(Ve);export{ge as L,He as P,m as a,Y as b,$e as c,i as d,ze as e,Ne as f,xe as h,pe as i,S as l,We as s,U as u};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/about-nRCXtR0c.js","assets/sectionIntro-1ZZjzeCt.js","assets/work-aqGUzyVi.js","assets/skills-CsCodhM3.js","assets/personalProjects-fsdW3mHA.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}