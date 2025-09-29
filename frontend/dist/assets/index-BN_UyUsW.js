var rr=Object.defineProperty;var nr=(e,t,a)=>t in e?rr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;var mt=(e,t,a)=>nr(e,typeof t!="symbol"?t+"":t,a);import{r as N,a as ir,R as Ze}from"./vendor-nf7bT_Uh.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function a(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(n){if(n.ep)return;n.ep=!0;const i=a(n);fetch(n.href,i)}})();var qt={exports:{}},xe={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sr=N,or=Symbol.for("react.element"),lr=Symbol.for("react.fragment"),cr=Object.prototype.hasOwnProperty,fr=sr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ur={key:!0,ref:!0,__self:!0,__source:!0};function Xt(e,t,a){var r,n={},i=null,o=null;a!==void 0&&(i=""+a),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)cr.call(t,r)&&!ur.hasOwnProperty(r)&&(n[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)n[r]===void 0&&(n[r]=t[r]);return{$$typeof:or,type:e,key:i,ref:o,props:n,_owner:fr.current}}xe.Fragment=lr;xe.jsx=Xt;xe.jsxs=Xt;qt.exports=xe;var s=qt.exports,Me={},ht=ir;Me.createRoot=ht.createRoot,Me.hydrateRoot=ht.hydrateRoot;/*!
 * Font Awesome Free 7.0.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */function ze(e,t){(t==null||t>e.length)&&(t=e.length);for(var a=0,r=Array(t);a<t;a++)r[a]=e[a];return r}function dr(e){if(Array.isArray(e))return e}function mr(e){if(Array.isArray(e))return ze(e)}function hr(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function gr(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,Kt(r.key),r)}}function vr(e,t,a){return t&&gr(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function de(e,t){var a=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=et(e))||t){a&&(e=a);var r=0,n=function(){};return{s:n,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(c){throw c},f:n}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var i,o=!0,l=!1;return{s:function(){a=a.call(e)},n:function(){var c=a.next();return o=c.done,c},e:function(c){l=!0,i=c},f:function(){try{o||a.return==null||a.return()}finally{if(l)throw i}}}}function y(e,t,a){return(t=Kt(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function pr(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function xr(e,t){var a=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(a!=null){var r,n,i,o,l=[],c=!0,f=!1;try{if(i=(a=a.call(e)).next,t===0){if(Object(a)!==a)return;c=!1}else for(;!(c=(r=i.call(a)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(m){f=!0,n=m}finally{try{if(!c&&a.return!=null&&(o=a.return(),Object(o)!==o))return}finally{if(f)throw n}}return l}}function br(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function yr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function gt(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),a.push.apply(a,r)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?gt(Object(a),!0).forEach(function(r){y(e,r,a[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):gt(Object(a)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))})}return e}function be(e,t){return dr(e)||xr(e,t)||et(e,t)||br()}function M(e){return mr(e)||pr(e)||et(e)||yr()}function wr(e,t){if(typeof e!="object"||!e)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var r=a.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Kt(e){var t=wr(e,"string");return typeof t=="symbol"?t:t+""}function ge(e){"@babel/helpers - typeof";return ge=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ge(e)}function et(e,t){if(e){if(typeof e=="string")return ze(e,t);var a={}.toString.call(e).slice(8,-1);return a==="Object"&&e.constructor&&(a=e.constructor.name),a==="Map"||a==="Set"?Array.from(e):a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?ze(e,t):void 0}}var vt=function(){},tt={},Jt={},Qt=null,Zt={mark:vt,measure:vt};try{typeof window<"u"&&(tt=window),typeof document<"u"&&(Jt=document),typeof MutationObserver<"u"&&(Qt=MutationObserver),typeof performance<"u"&&(Zt=performance)}catch{}var jr=tt.navigator||{},pt=jr.userAgent,xt=pt===void 0?"":pt,W=tt,A=Jt,bt=Qt,fe=Zt;W.document;var U=!!A.documentElement&&!!A.head&&typeof A.addEventListener=="function"&&typeof A.createElement=="function",ea=~xt.indexOf("MSIE")||~xt.indexOf("Trident/"),Ie,Nr=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|jr|jfr|jdr|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,Sr=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Slab Press|Slab|Whiteboard)?.*/i,ta={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"}},Ar={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},aa=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press"],P="classic",oe="duotone",ra="sharp",na="sharp-duotone",ia="chisel",sa="etch",oa="jelly",la="jelly-duo",ca="jelly-fill",fa="notdog",ua="notdog-duo",da="slab",ma="slab-press",ha="thumbprint",ga="whiteboard",kr="Classic",Cr="Duotone",Ir="Sharp",Pr="Sharp Duotone",Er="Chisel",Lr="Etch",Or="Jelly",Fr="Jelly Duo",Tr="Jelly Fill",Mr="Notdog",zr="Notdog Duo",_r="Slab",Rr="Slab Press",$r="Thumbprint",Dr="Whiteboard",va=[P,oe,ra,na,ia,sa,oa,la,ca,fa,ua,da,ma,ha,ga];Ie={},y(y(y(y(y(y(y(y(y(y(Ie,P,kr),oe,Cr),ra,Ir),na,Pr),ia,Er),sa,Lr),oa,Or),la,Fr),ca,Tr),fa,Mr),y(y(y(y(y(Ie,ua,zr),da,_r),ma,Rr),ha,$r),ga,Dr);var Ur={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"}},Wr={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"}},Vr=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),Br={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-press":{regular:"faslpr"},thumbprint:{light:"fatl"},whiteboard:{semibold:"fawsb"}},pa=["fak","fa-kit","fakd","fa-kit-duotone"],yt={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Yr=["kit"],Hr="kit",Gr="kit-duotone",qr="Kit",Xr="Kit Duotone";y(y({},Hr,qr),Gr,Xr);var Kr={kit:{"fa-kit":"fak"}},Jr={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Qr={kit:{fak:"fa-kit"}},wt={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Pe,ue={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Zr=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press"],en="classic",tn="duotone",an="sharp",rn="sharp-duotone",nn="chisel",sn="etch",on="jelly",ln="jelly-duo",cn="jelly-fill",fn="notdog",un="notdog-duo",dn="slab",mn="slab-press",hn="thumbprint",gn="whiteboard",vn="Classic",pn="Duotone",xn="Sharp",bn="Sharp Duotone",yn="Chisel",wn="Etch",jn="Jelly",Nn="Jelly Duo",Sn="Jelly Fill",An="Notdog",kn="Notdog Duo",Cn="Slab",In="Slab Press",Pn="Thumbprint",En="Whiteboard";Pe={},y(y(y(y(y(y(y(y(y(y(Pe,en,vn),tn,pn),an,xn),rn,bn),nn,yn),sn,wn),on,jn),ln,Nn),cn,Sn),fn,An),y(y(y(y(y(Pe,un,kn),dn,Cn),mn,In),hn,Pn),gn,En);var Ln="kit",On="kit-duotone",Fn="Kit",Tn="Kit Duotone";y(y({},Ln,Fn),On,Tn);var Mn={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"}},zn={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"]},_e={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"}},_n=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],xa=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fawsb","fatl","fans","fands","faes","fajr","fajfr","fajdr","facr"].concat(Zr,_n),Rn=["solid","regular","light","thin","duotone","brands","semibold"],ba=[1,2,3,4,5,6,7,8,9,10],$n=ba.concat([11,12,13,14,15,16,17,18,19,20]),Dn=["aw","fw","pull-left","pull-right"],Un=[].concat(M(Object.keys(zn)),Rn,Dn,["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","inverse","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul","width-auto","width-fixed",ue.GROUP,ue.SWAP_OPACITY,ue.PRIMARY,ue.SECONDARY]).concat(ba.map(function(e){return"".concat(e,"x")})).concat($n.map(function(e){return"w-".concat(e)})),Wn={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},$="___FONT_AWESOME___",Re=16,ya="fa",wa="svg-inline--fa",H="data-fa-i2svg",$e="data-fa-pseudo-element",Vn="data-fa-pseudo-element-pending",at="data-prefix",rt="data-icon",jt="fontawesome-i2svg",Bn="async",Yn=["HTML","HEAD","STYLE","SCRIPT"],ja=["::before","::after",":before",":after"],Na=function(){try{return!0}catch{return!1}}();function le(e){return new Proxy(e,{get:function(a,r){return r in a?a[r]:a[P]}})}var Sa=d({},ta);Sa[P]=d(d(d(d({},{"fa-duotone":"duotone"}),ta[P]),yt.kit),yt["kit-duotone"]);var Hn=le(Sa),De=d({},Br);De[P]=d(d(d(d({},{duotone:"fad"}),De[P]),wt.kit),wt["kit-duotone"]);var Nt=le(De),Ue=d({},_e);Ue[P]=d(d({},Ue[P]),Qr.kit);var nt=le(Ue),We=d({},Mn);We[P]=d(d({},We[P]),Kr.kit);le(We);var Gn=Nr,Aa="fa-layers-text",qn=Sr,Xn=d({},Ur);le(Xn);var Kn=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Ee=Ar,Jn=[].concat(M(Yr),M(Un)),re=W.FontAwesomeConfig||{};function Qn(e){var t=A.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Zn(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(A&&typeof A.querySelector=="function"){var ei=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];ei.forEach(function(e){var t=be(e,2),a=t[0],r=t[1],n=Zn(Qn(a));n!=null&&(re[r]=n)})}var ka={styleDefault:"solid",familyDefault:P,cssPrefix:ya,replacementClass:wa,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};re.familyPrefix&&(re.cssPrefix=re.familyPrefix);var Q=d(d({},ka),re);Q.autoReplaceSvg||(Q.observeMutations=!1);var v={};Object.keys(ka).forEach(function(e){Object.defineProperty(v,e,{enumerable:!0,set:function(a){Q[e]=a,ne.forEach(function(r){return r(v)})},get:function(){return Q[e]}})});Object.defineProperty(v,"familyPrefix",{enumerable:!0,set:function(t){Q.cssPrefix=t,ne.forEach(function(a){return a(v)})},get:function(){return Q.cssPrefix}});W.FontAwesomeConfig=v;var ne=[];function ti(e){return ne.push(e),function(){ne.splice(ne.indexOf(e),1)}}var q=Re,z={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function ai(e){if(!(!e||!U)){var t=A.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var a=A.head.childNodes,r=null,n=a.length-1;n>-1;n--){var i=a[n],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return A.head.insertBefore(t,r),e}}var ri="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function St(){for(var e=12,t="";e-- >0;)t+=ri[Math.random()*62|0];return t}function Z(e){for(var t=[],a=(e||[]).length>>>0;a--;)t[a]=e[a];return t}function it(e){return e.classList?Z(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Ca(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function ni(e){return Object.keys(e||{}).reduce(function(t,a){return t+"".concat(a,'="').concat(Ca(e[a]),'" ')},"").trim()}function ye(e){return Object.keys(e||{}).reduce(function(t,a){return t+"".concat(a,": ").concat(e[a].trim(),";")},"")}function st(e){return e.size!==z.size||e.x!==z.x||e.y!==z.y||e.rotate!==z.rotate||e.flipX||e.flipY}function ii(e){var t=e.transform,a=e.containerWidth,r=e.iconWidth,n={transform:"translate(".concat(a/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),l="rotate(".concat(t.rotate," 0 0)"),c={transform:"".concat(i," ").concat(o," ").concat(l)},f={transform:"translate(".concat(r/2*-1," -256)")};return{outer:n,inner:c,path:f}}function si(e){var t=e.transform,a=e.width,r=a===void 0?Re:a,n=e.height,i=n===void 0?Re:n,o="";return ea?o+="translate(".concat(t.x/q-r/2,"em, ").concat(t.y/q-i/2,"em) "):o+="translate(calc(-50% + ".concat(t.x/q,"em), calc(-50% + ").concat(t.y/q,"em)) "),o+="scale(".concat(t.size/q*(t.flipX?-1:1),", ").concat(t.size/q*(t.flipY?-1:1),") "),o+="rotate(".concat(t.rotate,"deg) "),o}var oi=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 7 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 7 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 7 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 7 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 7 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 7 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-slab-regular: normal 400 1em/1 "Font Awesome 7 Slab";
  --fa-font-slab-press-regular: normal 400 1em/1 "Font Awesome 7 Slab Press";
  --fa-font-whiteboard-semibold: normal 600 1em/1 "Font Awesome 7 Whiteboard";
  --fa-font-thumbprint-light: normal 300 1em/1 "Font Awesome 7 Thumbprint";
  --fa-font-notdog-solid: normal 900 1em/1 "Font Awesome 7 Notdog";
  --fa-font-notdog-duo-solid: normal 900 1em/1 "Font Awesome 7 Notdog Duo";
  --fa-font-etch-solid: normal 900 1em/1 "Font Awesome 7 Etch";
  --fa-font-jelly-regular: normal 400 1em/1 "Font Awesome 7 Jelly";
  --fa-font-jelly-fill-regular: normal 400 1em/1 "Font Awesome 7 Jelly Fill";
  --fa-font-jelly-duo-regular: normal 400 1em/1 "Font Awesome 7 Jelly Duo";
  --fa-font-chisel-regular: normal 400 1em/1 "Font Awesome 7 Chisel";
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;function Ia(){var e=ya,t=wa,a=v.cssPrefix,r=v.replacementClass,n=oi;if(a!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),l=new RegExp("\\.".concat(t),"g");n=n.replace(i,".".concat(a,"-")).replace(o,"--".concat(a,"-")).replace(l,".".concat(r))}return n}var At=!1;function Le(){v.autoAddCss&&!At&&(ai(Ia()),At=!0)}var li={mixout:function(){return{dom:{css:Ia,insertCss:Le}}},hooks:function(){return{beforeDOMElementCreation:function(){Le()},beforeI2svg:function(){Le()}}}},D=W||{};D[$]||(D[$]={});D[$].styles||(D[$].styles={});D[$].hooks||(D[$].hooks={});D[$].shims||(D[$].shims=[]);var T=D[$],Pa=[],Ea=function(){A.removeEventListener("DOMContentLoaded",Ea),ve=1,Pa.map(function(t){return t()})},ve=!1;U&&(ve=(A.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(A.readyState),ve||A.addEventListener("DOMContentLoaded",Ea));function ci(e){U&&(ve?setTimeout(e,0):Pa.push(e))}function ce(e){var t=e.tag,a=e.attributes,r=a===void 0?{}:a,n=e.children,i=n===void 0?[]:n;return typeof e=="string"?Ca(e):"<".concat(t," ").concat(ni(r),">").concat(i.map(ce).join(""),"</").concat(t,">")}function kt(e,t,a){if(e&&e[t]&&e[t][a])return{prefix:t,iconName:a,icon:e[t][a]}}var Oe=function(t,a,r,n){var i=Object.keys(t),o=i.length,l=a,c,f,m;for(r===void 0?(c=1,m=t[i[0]]):(c=0,m=r);c<o;c++)f=i[c],m=l(m,t[f],f,t);return m};function La(e){return M(e).length!==1?null:e.codePointAt(0).toString(16)}function Ct(e){return Object.keys(e).reduce(function(t,a){var r=e[a],n=!!r.icon;return n?t[r.iconName]=r.icon:t[a]=r,t},{})}function Ve(e,t){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=a.skipHooks,n=r===void 0?!1:r,i=Ct(t);typeof T.hooks.addPack=="function"&&!n?T.hooks.addPack(e,Ct(t)):T.styles[e]=d(d({},T.styles[e]||{}),i),e==="fas"&&Ve("fa",t)}var se=T.styles,fi=T.shims,Oa=Object.keys(nt),ui=Oa.reduce(function(e,t){return e[t]=Object.keys(nt[t]),e},{}),ot=null,Fa={},Ta={},Ma={},za={},_a={};function di(e){return~Jn.indexOf(e)}function mi(e,t){var a=t.split("-"),r=a[0],n=a.slice(1).join("-");return r===e&&n!==""&&!di(n)?n:null}var Ra=function(){var t=function(i){return Oe(se,function(o,l,c){return o[c]=Oe(l,i,{}),o},{})};Fa=t(function(n,i,o){if(i[3]&&(n[i[3]]=o),i[2]){var l=i[2].filter(function(c){return typeof c=="number"});l.forEach(function(c){n[c.toString(16)]=o})}return n}),Ta=t(function(n,i,o){if(n[o]=o,i[2]){var l=i[2].filter(function(c){return typeof c=="string"});l.forEach(function(c){n[c]=o})}return n}),_a=t(function(n,i,o){var l=i[2];return n[o]=o,l.forEach(function(c){n[c]=o}),n});var a="far"in se||v.autoFetchSvg,r=Oe(fi,function(n,i){var o=i[0],l=i[1],c=i[2];return l==="far"&&!a&&(l="fas"),typeof o=="string"&&(n.names[o]={prefix:l,iconName:c}),typeof o=="number"&&(n.unicodes[o.toString(16)]={prefix:l,iconName:c}),n},{names:{},unicodes:{}});Ma=r.names,za=r.unicodes,ot=we(v.styleDefault,{family:v.familyDefault})};ti(function(e){ot=we(e.styleDefault,{family:v.familyDefault})});Ra();function lt(e,t){return(Fa[e]||{})[t]}function hi(e,t){return(Ta[e]||{})[t]}function Y(e,t){return(_a[e]||{})[t]}function $a(e){return Ma[e]||{prefix:null,iconName:null}}function gi(e){var t=za[e],a=lt("fas",e);return t||(a?{prefix:"fas",iconName:a}:null)||{prefix:null,iconName:null}}function V(){return ot}var Da=function(){return{prefix:null,iconName:null,rest:[]}};function vi(e){var t=P,a=Oa.reduce(function(r,n){return r[n]="".concat(v.cssPrefix,"-").concat(n),r},{});return va.forEach(function(r){(e.includes(a[r])||e.some(function(n){return ui[r].includes(n)}))&&(t=r)}),t}function we(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.family,r=a===void 0?P:a,n=Hn[r][e];if(r===oe&&!e)return"fad";var i=Nt[r][e]||Nt[r][n],o=e in T.styles?e:null,l=i||o||null;return l}function pi(e){var t=[],a=null;return e.forEach(function(r){var n=mi(v.cssPrefix,r);n?a=n:r&&t.push(r)}),{iconName:a,rest:t}}function It(e){return e.sort().filter(function(t,a,r){return r.indexOf(t)===a})}var Pt=xa.concat(pa);function je(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.skipLookups,r=a===void 0?!1:a,n=null,i=It(e.filter(function(g){return Pt.includes(g)})),o=It(e.filter(function(g){return!Pt.includes(g)})),l=i.filter(function(g){return n=g,!aa.includes(g)}),c=be(l,1),f=c[0],m=f===void 0?null:f,h=vi(i),u=d(d({},pi(o)),{},{prefix:we(m,{family:h})});return d(d(d({},u),wi({values:e,family:h,styles:se,config:v,canonical:u,givenPrefix:n})),xi(r,n,u))}function xi(e,t,a){var r=a.prefix,n=a.iconName;if(e||!r||!n)return{prefix:r,iconName:n};var i=t==="fa"?$a(n):{},o=Y(r,n);return n=i.iconName||o||n,r=i.prefix||r,r==="far"&&!se.far&&se.fas&&!v.autoFetchSvg&&(r="fas"),{prefix:r,iconName:n}}var bi=va.filter(function(e){return e!==P||e!==oe}),yi=Object.keys(_e).filter(function(e){return e!==P}).map(function(e){return Object.keys(_e[e])}).flat();function wi(e){var t=e.values,a=e.family,r=e.canonical,n=e.givenPrefix,i=n===void 0?"":n,o=e.styles,l=o===void 0?{}:o,c=e.config,f=c===void 0?{}:c,m=a===oe,h=t.includes("fa-duotone")||t.includes("fad"),u=f.familyDefault==="duotone",g=r.prefix==="fad"||r.prefix==="fa-duotone";if(!m&&(h||u||g)&&(r.prefix="fad"),(t.includes("fa-brands")||t.includes("fab"))&&(r.prefix="fab"),!r.prefix&&bi.includes(a)){var x=Object.keys(l).find(function(S){return yi.includes(S)});if(x||f.autoFetchSvg){var p=Vr.get(a).defaultShortPrefixId;r.prefix=p,r.iconName=Y(r.prefix,r.iconName)||r.iconName}}return(r.prefix==="fa"||i==="fa")&&(r.prefix=V()||"fas"),r}var ji=function(){function e(){hr(this,e),this.definitions={}}return vr(e,[{key:"add",value:function(){for(var a=this,r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];var o=n.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(l){a.definitions[l]=d(d({},a.definitions[l]||{}),o[l]),Ve(l,o[l]);var c=nt[P][l];c&&Ve(c,o[l]),Ra()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(a,r){var n=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(n).map(function(i){var o=n[i],l=o.prefix,c=o.iconName,f=o.icon,m=f[2];a[l]||(a[l]={}),m.length>0&&m.forEach(function(h){typeof h=="string"&&(a[l][h]=f)}),a[l][c]=f}),a}}])}(),Et=[],K={},J={},Ni=Object.keys(J);function Si(e,t){var a=t.mixoutsTo;return Et=e,K={},Object.keys(J).forEach(function(r){Ni.indexOf(r)===-1&&delete J[r]}),Et.forEach(function(r){var n=r.mixout?r.mixout():{};if(Object.keys(n).forEach(function(o){typeof n[o]=="function"&&(a[o]=n[o]),ge(n[o])==="object"&&Object.keys(n[o]).forEach(function(l){a[o]||(a[o]={}),a[o][l]=n[o][l]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){K[o]||(K[o]=[]),K[o].push(i[o])})}r.provides&&r.provides(J)}),a}function Be(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];var i=K[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function G(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),r=1;r<t;r++)a[r-1]=arguments[r];var n=K[e]||[];n.forEach(function(i){i.apply(null,a)})}function B(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return J[e]?J[e].apply(null,t):void 0}function Ye(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,a=e.prefix||V();if(t)return t=Y(a,t)||t,kt(Ua.definitions,a,t)||kt(T.styles,a,t)}var Ua=new ji,Ai=function(){v.autoReplaceSvg=!1,v.observeMutations=!1,G("noAuto")},ki={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return U?(G("beforeI2svg",t),B("pseudoElements2svg",t),B("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=t.autoReplaceSvgRoot;v.autoReplaceSvg===!1&&(v.autoReplaceSvg=!0),v.observeMutations=!0,ci(function(){Ii({autoReplaceSvgRoot:a}),G("watch",t)})}},Ci={icon:function(t){if(t===null)return null;if(ge(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Y(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var a=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=we(t[0]);return{prefix:r,iconName:Y(r,a)||a}}if(typeof t=="string"&&(t.indexOf("".concat(v.cssPrefix,"-"))>-1||t.match(Gn))){var n=je(t.split(" "),{skipLookups:!0});return{prefix:n.prefix||V(),iconName:Y(n.prefix,n.iconName)||n.iconName}}if(typeof t=="string"){var i=V();return{prefix:i,iconName:Y(i,t)||t}}}},L={noAuto:Ai,config:v,dom:ki,parse:Ci,library:Ua,findIconDefinition:Ye,toHtml:ce},Ii=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=t.autoReplaceSvgRoot,r=a===void 0?A:a;(Object.keys(T.styles).length>0||v.autoFetchSvg)&&U&&v.autoReplaceSvg&&L.dom.i2svg({node:r})};function Ne(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return ce(r)})}}),Object.defineProperty(e,"node",{get:function(){if(U){var r=A.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Pi(e){var t=e.children,a=e.main,r=e.mask,n=e.attributes,i=e.styles,o=e.transform;if(st(o)&&a.found&&!r.found){var l=a.width,c=a.height,f={x:l/c/2,y:.5};n.style=ye(d(d({},i),{},{"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")}))}return[{tag:"svg",attributes:n,children:t}]}function Ei(e){var t=e.prefix,a=e.iconName,r=e.children,n=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(v.cssPrefix,"-").concat(a):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:d(d({},n),{},{id:o}),children:r}]}]}function Li(e){var t=["aria-label","aria-labelledby","title","role"];return t.some(function(a){return a in e})}function ct(e){var t=e.icons,a=t.main,r=t.mask,n=e.prefix,i=e.iconName,o=e.transform,l=e.symbol,c=e.maskId,f=e.extra,m=e.watchable,h=m===void 0?!1:m,u=r.found?r:a,g=u.width,x=u.height,p=[v.replacementClass,i?"".concat(v.cssPrefix,"-").concat(i):""].filter(function(b){return f.classes.indexOf(b)===-1}).filter(function(b){return b!==""||!!b}).concat(f.classes).join(" "),S={children:[],attributes:d(d({},f.attributes),{},{"data-prefix":n,"data-icon":i,class:p,role:f.attributes.role||"img",viewBox:"0 0 ".concat(g," ").concat(x)})};!Li(f.attributes)&&!f.attributes["aria-hidden"]&&(S.attributes["aria-hidden"]="true"),h&&(S.attributes[H]="");var k=d(d({},S),{},{prefix:n,iconName:i,main:a,mask:r,maskId:c,transform:o,symbol:l,styles:d({},f.styles)}),C=r.found&&a.found?B("generateAbstractMask",k)||{children:[],attributes:{}}:B("generateAbstractIcon",k)||{children:[],attributes:{}},I=C.children,F=C.attributes;return k.children=I,k.attributes=F,l?Ei(k):Pi(k)}function Lt(e){var t=e.content,a=e.width,r=e.height,n=e.transform,i=e.extra,o=e.watchable,l=o===void 0?!1:o,c=d(d({},i.attributes),{},{class:i.classes.join(" ")});l&&(c[H]="");var f=d({},i.styles);st(n)&&(f.transform=si({transform:n,width:a,height:r}),f["-webkit-transform"]=f.transform);var m=ye(f);m.length>0&&(c.style=m);var h=[];return h.push({tag:"span",attributes:c,children:[t]}),h}function Oi(e){var t=e.content,a=e.extra,r=d(d({},a.attributes),{},{class:a.classes.join(" ")}),n=ye(a.styles);n.length>0&&(r.style=n);var i=[];return i.push({tag:"span",attributes:r,children:[t]}),i}var Fe=T.styles;function He(e){var t=e[0],a=e[1],r=e.slice(4),n=be(r,1),i=n[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(v.cssPrefix,"-").concat(Ee.GROUP)},children:[{tag:"path",attributes:{class:"".concat(v.cssPrefix,"-").concat(Ee.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(v.cssPrefix,"-").concat(Ee.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:a,icon:o}}var Fi={found:!1,width:512,height:512};function Ti(e,t){!Na&&!v.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Ge(e,t){var a=t;return t==="fa"&&v.styleDefault!==null&&(t=V()),new Promise(function(r,n){if(a==="fa"){var i=$a(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Fe[t]&&Fe[t][e]){var o=Fe[t][e];return r(He(o))}Ti(e,t),r(d(d({},Fi),{},{icon:v.showMissingIcons&&e?B("missingIconAbstract")||{}:{}}))})}var Ot=function(){},qe=v.measurePerformance&&fe&&fe.mark&&fe.measure?fe:{mark:Ot,measure:Ot},ae='FA "7.0.1"',Mi=function(t){return qe.mark("".concat(ae," ").concat(t," begins")),function(){return Wa(t)}},Wa=function(t){qe.mark("".concat(ae," ").concat(t," ends")),qe.measure("".concat(ae," ").concat(t),"".concat(ae," ").concat(t," begins"),"".concat(ae," ").concat(t," ends"))},ft={begin:Mi,end:Wa},me=function(){};function Ft(e){var t=e.getAttribute?e.getAttribute(H):null;return typeof t=="string"}function zi(e){var t=e.getAttribute?e.getAttribute(at):null,a=e.getAttribute?e.getAttribute(rt):null;return t&&a}function _i(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(v.replacementClass)}function Ri(){if(v.autoReplaceSvg===!0)return he.replace;var e=he[v.autoReplaceSvg];return e||he.replace}function $i(e){return A.createElementNS("http://www.w3.org/2000/svg",e)}function Di(e){return A.createElement(e)}function Va(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.ceFn,r=a===void 0?e.tag==="svg"?$i:Di:a;if(typeof e=="string")return A.createTextNode(e);var n=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){n.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){n.appendChild(Va(o,{ceFn:r}))}),n}function Ui(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var he={replace:function(t){var a=t[0];if(a.parentNode)if(t[1].forEach(function(n){a.parentNode.insertBefore(Va(n),a)}),a.getAttribute(H)===null&&v.keepOriginalSource){var r=A.createComment(Ui(a));a.parentNode.replaceChild(r,a)}else a.remove()},nest:function(t){var a=t[0],r=t[1];if(~it(a).indexOf(v.replacementClass))return he.replace(t);var n=new RegExp("".concat(v.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(l,c){return c===v.replacementClass||c.match(n)?l.toSvg.push(c):l.toNode.push(c),l},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?a.removeAttribute("class"):a.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(l){return ce(l)}).join(`
`);a.setAttribute(H,""),a.innerHTML=o}};function Tt(e){e()}function Ba(e,t){var a=typeof t=="function"?t:me;if(e.length===0)a();else{var r=Tt;v.mutateApproach===Bn&&(r=W.requestAnimationFrame||Tt),r(function(){var n=Ri(),i=ft.begin("mutate");e.map(n),i(),a()})}}var ut=!1;function Ya(){ut=!0}function Xe(){ut=!1}var pe=null;function Mt(e){if(bt&&v.observeMutations){var t=e.treeCallback,a=t===void 0?me:t,r=e.nodeCallback,n=r===void 0?me:r,i=e.pseudoElementsCallback,o=i===void 0?me:i,l=e.observeMutationsRoot,c=l===void 0?A:l;pe=new bt(function(f){if(!ut){var m=V();Z(f).forEach(function(h){if(h.type==="childList"&&h.addedNodes.length>0&&!Ft(h.addedNodes[0])&&(v.searchPseudoElements&&o(h.target),a(h.target)),h.type==="attributes"&&h.target.parentNode&&v.searchPseudoElements&&o([h.target],!0),h.type==="attributes"&&Ft(h.target)&&~Kn.indexOf(h.attributeName))if(h.attributeName==="class"&&zi(h.target)){var u=je(it(h.target)),g=u.prefix,x=u.iconName;h.target.setAttribute(at,g||m),x&&h.target.setAttribute(rt,x)}else _i(h.target)&&n(h.target)})}}),U&&pe.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Wi(){pe&&pe.disconnect()}function Vi(e){var t=e.getAttribute("style"),a=[];return t&&(a=t.split(";").reduce(function(r,n){var i=n.split(":"),o=i[0],l=i.slice(1);return o&&l.length>0&&(r[o]=l.join(":").trim()),r},{})),a}function Bi(e){var t=e.getAttribute("data-prefix"),a=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",n=je(it(e));return n.prefix||(n.prefix=V()),t&&a&&(n.prefix=t,n.iconName=a),n.iconName&&n.prefix||(n.prefix&&r.length>0&&(n.iconName=hi(n.prefix,e.innerText)||lt(n.prefix,La(e.innerText))),!n.iconName&&v.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(n.iconName=e.firstChild.data)),n}function Yi(e){var t=Z(e.attributes).reduce(function(a,r){return a.name!=="class"&&a.name!=="style"&&(a[r.name]=r.value),a},{});return t}function Hi(){return{iconName:null,prefix:null,transform:z,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function zt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},a=Bi(e),r=a.iconName,n=a.prefix,i=a.rest,o=Yi(e),l=Be("parseNodeAttributes",{},e),c=t.styleParser?Vi(e):[];return d({iconName:r,prefix:n,transform:z,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:c,attributes:o}},l)}var Gi=T.styles;function Ha(e){var t=v.autoReplaceSvg==="nest"?zt(e,{styleParser:!1}):zt(e);return~t.extra.classes.indexOf(Aa)?B("generateLayersText",e,t):B("generateSvgReplacementMutation",e,t)}function qi(){return[].concat(M(pa),M(xa))}function _t(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!U)return Promise.resolve();var a=A.documentElement.classList,r=function(h){return a.add("".concat(jt,"-").concat(h))},n=function(h){return a.remove("".concat(jt,"-").concat(h))},i=v.autoFetchSvg?qi():aa.concat(Object.keys(Gi));i.includes("fa")||i.push("fa");var o=[".".concat(Aa,":not([").concat(H,"])")].concat(i.map(function(m){return".".concat(m,":not([").concat(H,"])")})).join(", ");if(o.length===0)return Promise.resolve();var l=[];try{l=Z(e.querySelectorAll(o))}catch{}if(l.length>0)r("pending"),n("complete");else return Promise.resolve();var c=ft.begin("onTree"),f=l.reduce(function(m,h){try{var u=Ha(h);u&&m.push(u)}catch(g){Na||g.name==="MissingIcon"&&console.error(g)}return m},[]);return new Promise(function(m,h){Promise.all(f).then(function(u){Ba(u,function(){r("active"),r("complete"),n("pending"),typeof t=="function"&&t(),c(),m()})}).catch(function(u){c(),h(u)})})}function Xi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Ha(e).then(function(a){a&&Ba([a],t)})}function Ki(e){return function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Ye(t||{}),n=a.mask;return n&&(n=(n||{}).icon?n:Ye(n||{})),e(r,d(d({},a),{},{mask:n}))}}var Ji=function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,n=r===void 0?z:r,i=a.symbol,o=i===void 0?!1:i,l=a.mask,c=l===void 0?null:l,f=a.maskId,m=f===void 0?null:f,h=a.classes,u=h===void 0?[]:h,g=a.attributes,x=g===void 0?{}:g,p=a.styles,S=p===void 0?{}:p;if(t){var k=t.prefix,C=t.iconName,I=t.icon;return Ne(d({type:"icon"},t),function(){return G("beforeDOMElementCreation",{iconDefinition:t,params:a}),ct({icons:{main:He(I),mask:c?He(c.icon):{found:!1,width:null,height:null,icon:{}}},prefix:k,iconName:C,transform:d(d({},z),n),symbol:o,maskId:m,extra:{attributes:x,styles:S,classes:u}})})}},Qi={mixout:function(){return{icon:Ki(Ji)}},hooks:function(){return{mutationObserverCallbacks:function(a){return a.treeCallback=_t,a.nodeCallback=Xi,a}}},provides:function(t){t.i2svg=function(a){var r=a.node,n=r===void 0?A:r,i=a.callback,o=i===void 0?function(){}:i;return _t(n,o)},t.generateSvgReplacementMutation=function(a,r){var n=r.iconName,i=r.prefix,o=r.transform,l=r.symbol,c=r.mask,f=r.maskId,m=r.extra;return new Promise(function(h,u){Promise.all([Ge(n,i),c.iconName?Ge(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(g){var x=be(g,2),p=x[0],S=x[1];h([a,ct({icons:{main:p,mask:S},prefix:i,iconName:n,transform:o,symbol:l,maskId:f,extra:m,watchable:!0})])}).catch(u)})},t.generateAbstractIcon=function(a){var r=a.children,n=a.attributes,i=a.main,o=a.transform,l=a.styles,c=ye(l);c.length>0&&(n.style=c);var f;return st(o)&&(f=B("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(f||i.icon),{children:r,attributes:n}}}},Zi={mixout:function(){return{layer:function(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=r.classes,i=n===void 0?[]:n;return Ne({type:"layer"},function(){G("beforeDOMElementCreation",{assembler:a,params:r});var o=[];return a(function(l){Array.isArray(l)?l.map(function(c){o=o.concat(c.abstract)}):o=o.concat(l.abstract)}),[{tag:"span",attributes:{class:["".concat(v.cssPrefix,"-layers")].concat(M(i)).join(" ")},children:o}]})}}}},es={mixout:function(){return{counter:function(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};r.title;var n=r.classes,i=n===void 0?[]:n,o=r.attributes,l=o===void 0?{}:o,c=r.styles,f=c===void 0?{}:c;return Ne({type:"counter",content:a},function(){return G("beforeDOMElementCreation",{content:a,params:r}),Oi({content:a.toString(),extra:{attributes:l,styles:f,classes:["".concat(v.cssPrefix,"-layers-counter")].concat(M(i))}})})}}}},ts={mixout:function(){return{text:function(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=r.transform,i=n===void 0?z:n,o=r.classes,l=o===void 0?[]:o,c=r.attributes,f=c===void 0?{}:c,m=r.styles,h=m===void 0?{}:m;return Ne({type:"text",content:a},function(){return G("beforeDOMElementCreation",{content:a,params:r}),Lt({content:a,transform:d(d({},z),i),extra:{attributes:f,styles:h,classes:["".concat(v.cssPrefix,"-layers-text")].concat(M(l))}})})}}},provides:function(t){t.generateLayersText=function(a,r){var n=r.transform,i=r.extra,o=null,l=null;if(ea){var c=parseInt(getComputedStyle(a).fontSize,10),f=a.getBoundingClientRect();o=f.width/c,l=f.height/c}return Promise.resolve([a,Lt({content:a.innerHTML,width:o,height:l,transform:n,extra:i,watchable:!0})])}}},Ga=new RegExp('"',"ug"),Rt=[1105920,1112319],$t=d(d(d(d({},{FontAwesome:{normal:"fas",400:"fas"}}),Wr),Wn),Jr),Ke=Object.keys($t).reduce(function(e,t){return e[t.toLowerCase()]=$t[t],e},{}),as=Object.keys(Ke).reduce(function(e,t){var a=Ke[t];return e[t]=a[900]||M(Object.entries(a))[0][1],e},{});function rs(e){var t=e.replace(Ga,"");return La(M(t)[0]||"")}function ns(e){var t=e.getPropertyValue("font-feature-settings").includes("ss01"),a=e.getPropertyValue("content"),r=a.replace(Ga,""),n=r.codePointAt(0),i=n>=Rt[0]&&n<=Rt[1],o=r.length===2?r[0]===r[1]:!1;return i||o||t}function is(e,t){var a=e.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(t),n=isNaN(r)?"normal":r;return(Ke[a]||{})[n]||as[a]}function Dt(e,t){var a="".concat(Vn).concat(t.replace(":","-"));return new Promise(function(r,n){if(e.getAttribute(a)!==null)return r();var i=Z(e.children),o=i.filter(function(ee){return ee.getAttribute($e)===t})[0],l=W.getComputedStyle(e,t),c=l.getPropertyValue("font-family"),f=c.match(qn),m=l.getPropertyValue("font-weight"),h=l.getPropertyValue("content");if(o&&!f)return e.removeChild(o),r();if(f&&h!=="none"&&h!==""){var u=l.getPropertyValue("content"),g=is(c,m),x=rs(u),p=f[0].startsWith("FontAwesome"),S=ns(l),k=lt(g,x),C=k;if(p){var I=gi(x);I.iconName&&I.prefix&&(k=I.iconName,g=I.prefix)}if(k&&!S&&(!o||o.getAttribute(at)!==g||o.getAttribute(rt)!==C)){e.setAttribute(a,C),o&&e.removeChild(o);var F=Hi(),b=F.extra;b.attributes[$e]=t,Ge(k,g).then(function(ee){var Se=ct(d(d({},F),{},{icons:{main:ee,mask:Da()},prefix:g,iconName:C,extra:b,watchable:!0})),te=A.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(te,e.firstChild):e.appendChild(te),te.outerHTML=Se.map(function(Ae){return ce(Ae)}).join(`
`),e.removeAttribute(a),r()}).catch(n)}else r()}else r()})}function ss(e){return Promise.all([Dt(e,"::before"),Dt(e,"::after")])}function os(e){return e.parentNode!==document.head&&!~Yn.indexOf(e.tagName.toUpperCase())&&!e.getAttribute($e)&&(!e.parentNode||e.parentNode.tagName!=="svg")}var ls=function(t){return!!t&&ja.some(function(a){return t.includes(a)})},cs=function(t){if(!t)return[];var a=new Set,r=t.split(/,(?![^()]*\))/).map(function(c){return c.trim()});r=r.flatMap(function(c){return c.includes("(")?c:c.split(",").map(function(f){return f.trim()})});var n=de(r),i;try{for(n.s();!(i=n.n()).done;){var o=i.value;if(ls(o)){var l=ja.reduce(function(c,f){return c.replace(f,"")},o);l!==""&&l!=="*"&&a.add(l)}}}catch(c){n.e(c)}finally{n.f()}return a};function Ut(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(U){var a;if(t)a=e;else if(v.searchPseudoElementsFullScan)a=e.querySelectorAll("*");else{var r=new Set,n=de(document.styleSheets),i;try{for(n.s();!(i=n.n()).done;){var o=i.value;try{var l=de(o.cssRules),c;try{for(l.s();!(c=l.n()).done;){var f=c.value,m=cs(f.selectorText),h=de(m),u;try{for(h.s();!(u=h.n()).done;){var g=u.value;r.add(g)}}catch(p){h.e(p)}finally{h.f()}}}catch(p){l.e(p)}finally{l.f()}}catch(p){v.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(o.href," (").concat(p.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(p){n.e(p)}finally{n.f()}if(!r.size)return;var x=Array.from(r).join(", ");try{a=e.querySelectorAll(x)}catch{}}return new Promise(function(p,S){var k=Z(a).filter(os).map(ss),C=ft.begin("searchPseudoElements");Ya(),Promise.all(k).then(function(){C(),Xe(),p()}).catch(function(){C(),Xe(),S()})})}}var fs={hooks:function(){return{mutationObserverCallbacks:function(a){return a.pseudoElementsCallback=Ut,a}}},provides:function(t){t.pseudoElements2svg=function(a){var r=a.node,n=r===void 0?A:r;v.searchPseudoElements&&Ut(n)}}},Wt=!1,us={mixout:function(){return{dom:{unwatch:function(){Ya(),Wt=!0}}}},hooks:function(){return{bootstrap:function(){Mt(Be("mutationObserverCallbacks",{}))},noAuto:function(){Wi()},watch:function(a){var r=a.observeMutationsRoot;Wt?Xe():Mt(Be("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Vt=function(t){var a={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,n){var i=n.toLowerCase().split("-"),o=i[0],l=i.slice(1).join("-");if(o&&l==="h")return r.flipX=!0,r;if(o&&l==="v")return r.flipY=!0,r;if(l=parseFloat(l),isNaN(l))return r;switch(o){case"grow":r.size=r.size+l;break;case"shrink":r.size=r.size-l;break;case"left":r.x=r.x-l;break;case"right":r.x=r.x+l;break;case"up":r.y=r.y-l;break;case"down":r.y=r.y+l;break;case"rotate":r.rotate=r.rotate+l;break}return r},a)},ds={mixout:function(){return{parse:{transform:function(a){return Vt(a)}}}},hooks:function(){return{parseNodeAttributes:function(a,r){var n=r.getAttribute("data-fa-transform");return n&&(a.transform=Vt(n)),a}}},provides:function(t){t.generateAbstractTransformGrouping=function(a){var r=a.main,n=a.transform,i=a.containerWidth,o=a.iconWidth,l={transform:"translate(".concat(i/2," 256)")},c="translate(".concat(n.x*32,", ").concat(n.y*32,") "),f="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),m="rotate(".concat(n.rotate," 0 0)"),h={transform:"".concat(c," ").concat(f," ").concat(m)},u={transform:"translate(".concat(o/2*-1," -256)")},g={outer:l,inner:h,path:u};return{tag:"g",attributes:d({},g.outer),children:[{tag:"g",attributes:d({},g.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:d(d({},r.icon.attributes),g.path)}]}]}}}},Te={x:0,y:0,width:"100%",height:"100%"};function Bt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function ms(e){return e.tag==="g"?e.children:[e]}var hs={hooks:function(){return{parseNodeAttributes:function(a,r){var n=r.getAttribute("data-fa-mask"),i=n?je(n.split(" ").map(function(o){return o.trim()})):Da();return i.prefix||(i.prefix=V()),a.mask=i,a.maskId=r.getAttribute("data-fa-mask-id"),a}}},provides:function(t){t.generateAbstractMask=function(a){var r=a.children,n=a.attributes,i=a.main,o=a.mask,l=a.maskId,c=a.transform,f=i.width,m=i.icon,h=o.width,u=o.icon,g=ii({transform:c,containerWidth:h,iconWidth:f}),x={tag:"rect",attributes:d(d({},Te),{},{fill:"white"})},p=m.children?{children:m.children.map(Bt)}:{},S={tag:"g",attributes:d({},g.inner),children:[Bt(d({tag:m.tag,attributes:d(d({},m.attributes),g.path)},p))]},k={tag:"g",attributes:d({},g.outer),children:[S]},C="mask-".concat(l||St()),I="clip-".concat(l||St()),F={tag:"mask",attributes:d(d({},Te),{},{id:C,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[x,k]},b={tag:"defs",children:[{tag:"clipPath",attributes:{id:I},children:ms(u)},F]};return r.push(b,{tag:"rect",attributes:d({fill:"currentColor","clip-path":"url(#".concat(I,")"),mask:"url(#".concat(C,")")},Te)}),{children:r,attributes:n}}}},gs={provides:function(t){var a=!1;W.matchMedia&&(a=W.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],n={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:d(d({},n),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=d(d({},i),{},{attributeName:"opacity"}),l={tag:"circle",attributes:d(d({},n),{},{cx:"256",cy:"364",r:"28"}),children:[]};return a||l.children.push({tag:"animate",attributes:d(d({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:d(d({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(l),r.push({tag:"path",attributes:d(d({},n),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:a?[]:[{tag:"animate",attributes:d(d({},o),{},{values:"1;0;0;0;0;1;"})}]}),a||r.push({tag:"path",attributes:d(d({},n),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:d(d({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},vs={hooks:function(){return{parseNodeAttributes:function(a,r){var n=r.getAttribute("data-fa-symbol"),i=n===null?!1:n===""?!0:n;return a.symbol=i,a}}}},ps=[li,Qi,Zi,es,ts,fs,us,ds,hs,gs,vs];Si(ps,{mixoutsTo:L});L.noAuto;var xs=L.config;L.library;L.dom;var qa=L.parse;L.findIconDefinition;L.toHtml;var bs=L.icon;L.layer;L.text;L.counter;function ys(e){return e=e-0,e===e}function Xa(e){return ys(e)?e:(e=e.replaceAll(/[_-]+(.)?/g,(t,a)=>a?a.toUpperCase():""),e.charAt(0).toLowerCase()+e.slice(1))}function ws(e){return e.charAt(0).toUpperCase()+e.slice(1)}var X=new Map,js=1e3;function Ns(e){if(X.has(e))return X.get(e);const t={};let a=0;const r=e.length;for(;a<r;){const n=e.indexOf(";",a),i=n===-1?r:n,o=e.slice(a,i).trim();if(o){const l=o.indexOf(":");if(l>0){const c=o.slice(0,l).trim(),f=o.slice(l+1).trim();if(c&&f){const m=Xa(c);t[m.startsWith("webkit")?ws(m):m]=f}}}a=i+1}if(X.size===js){const n=X.keys().next().value;n&&X.delete(n)}return X.set(e,t),t}function Ka(e,t,a={}){if(typeof t=="string")return t;const r=(t.children||[]).map(f=>Ka(e,f)),n=t.attributes||{},i={};for(const[f,m]of Object.entries(n))switch(!0){case f==="class":{i.className=m,delete n.class;break}case f==="style":{i.style=Ns(String(m));break}case f.startsWith("aria-"):case f.startsWith("data-"):{i[f.toLowerCase()]=m;break}default:i[Xa(f)]=m}const{style:o,"aria-label":l,...c}=a;return o&&(i.style=i.style?{...i.style,...o}:o),l&&(i["aria-label"]=l,i["aria-hidden"]="false"),e(t.tag,{...c,...i},...r)}var Yt=(e,t)=>{const a=N.useId();return e||(t?a:void 0)},Ss=class{constructor(e="react-fontawesome"){this.enabled=!1;let t=!1;try{t=typeof process<"u"&&!1}catch{}this.scope=e,this.enabled=t}log(...e){this.enabled&&console.log(`[${this.scope}]`,...e)}warn(...e){this.enabled&&console.warn(`[${this.scope}]`,...e)}error(...e){this.enabled&&console.error(`[${this.scope}]`,...e)}},As="searchPseudoElementsFullScan"in xs?"7.0.0":"6.0.0",ks=Number.parseInt(As)>=7,_={beat:"fa-beat",fade:"fa-fade",beatFade:"fa-beat-fade",bounce:"fa-bounce",shake:"fa-shake",spin:"fa-spin",spinPulse:"fa-spin-pulse",spinReverse:"fa-spin-reverse",pulse:"fa-pulse"},Cs={left:"fa-pull-left",right:"fa-pull-right"},Is={90:"fa-rotate-90",180:"fa-rotate-180",270:"fa-rotate-270"},Ps={"2xs":"fa-2xs",xs:"fa-xs",sm:"fa-sm",lg:"fa-lg",xl:"fa-xl","2xl":"fa-2xl","1x":"fa-1x","2x":"fa-2x","3x":"fa-3x","4x":"fa-4x","5x":"fa-5x","6x":"fa-6x","7x":"fa-7x","8x":"fa-8x","9x":"fa-9x","10x":"fa-10x"},R={border:"fa-border",fixedWidth:"fa-fw",flip:"fa-flip",flipHorizontal:"fa-flip-horizontal",flipVertical:"fa-flip-vertical",inverse:"fa-inverse",rotateBy:"fa-rotate-by",swapOpacity:"fa-swap-opacity",widthAuto:"fa-width-auto"};function Es(e){const{beat:t,fade:a,beatFade:r,bounce:n,shake:i,spin:o,spinPulse:l,spinReverse:c,pulse:f,fixedWidth:m,inverse:h,border:u,flip:g,size:x,rotation:p,pull:S,swapOpacity:k,rotateBy:C,widthAuto:I,className:F}=e,b=[];return F&&b.push(...F.split(" ")),t&&b.push(_.beat),a&&b.push(_.fade),r&&b.push(_.beatFade),n&&b.push(_.bounce),i&&b.push(_.shake),o&&b.push(_.spin),c&&b.push(_.spinReverse),l&&b.push(_.spinPulse),f&&b.push(_.pulse),m&&b.push(R.fixedWidth),h&&b.push(R.inverse),u&&b.push(R.border),g===!0&&b.push(R.flip),(g==="horizontal"||g==="both")&&b.push(R.flipHorizontal),(g==="vertical"||g==="both")&&b.push(R.flipVertical),x!=null&&b.push(Ps[x]),p!=null&&p!==0&&b.push(Is[p]),S!=null&&b.push(Cs[S]),k&&b.push(R.swapOpacity),ks&&(C&&b.push(R.rotateBy),I&&b.push(R.widthAuto)),b}var Ls=e=>typeof e=="object"&&"icon"in e&&!!e.icon;function Ht(e){if(e)return Ls(e)?e:qa.icon(e)}function Os(e){return Object.keys(e)}var Gt=new Ss("FontAwesomeIcon"),Ja={border:!1,className:"",mask:void 0,maskId:void 0,fixedWidth:!1,inverse:!1,flip:!1,icon:void 0,listItem:!1,pull:void 0,pulse:!1,rotation:void 0,rotateBy:!1,size:void 0,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:void 0,transform:void 0,swapOpacity:!1,widthAuto:!1},Fs=new Set(Object.keys(Ja)),w=Ze.forwardRef((e,t)=>{const a={...Ja,...e},{icon:r,mask:n,symbol:i,title:o,titleId:l,maskId:c,transform:f}=a,m=Yt(c,!!n),h=Yt(l,!!o),u=Ht(r);if(!u)return Gt.error("Icon lookup is undefined",r),null;const g=Es(a),x=typeof f=="string"?qa.transform(f):f,p=Ht(n),S=bs(u,{...g.length>0&&{classes:g},...x&&{transform:x},...p&&{mask:p},symbol:i,title:o,titleId:h,maskId:m});if(!S)return Gt.error("Could not find icon",u),null;const{abstract:k}=S,C={ref:t};for(const I of Os(a))Fs.has(I)||(C[I]=a[I]);return Ts(k[0],C)});w.displayName="FontAwesomeIcon";var Ts=Ka.bind(null,Ze.createElement);/*!
 * Font Awesome Free 7.0.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */var Ms={prefix:"fas",iconName:"rotate",icon:[512,512,[128260,"sync-alt"],"f2f1","M480.1 192l7.9 0c13.3 0 24-10.7 24-24l0-144c0-9.7-5.8-18.5-14.8-22.2S477.9 .2 471 7L419.3 58.8C375 22.1 318 0 256 0 127 0 20.3 95.4 2.6 219.5 .1 237 12.2 253.2 29.7 255.7s33.7-9.7 36.2-27.1C79.2 135.5 159.3 64 256 64 300.4 64 341.2 79 373.7 104.3L327 151c-6.9 6.9-8.9 17.2-5.2 26.2S334.3 192 344 192l136.1 0zm29.4 100.5c2.5-17.5-9.7-33.7-27.1-36.2s-33.7 9.7-36.2 27.1c-13.3 93-93.4 164.5-190.1 164.5-44.4 0-85.2-15-117.7-40.3L185 361c6.9-6.9 8.9-17.2 5.2-26.2S177.7 320 168 320L24 320c-13.3 0-24 10.7-24 24L0 488c0 9.7 5.8 18.5 14.8 22.2S34.1 511.8 41 505l51.8-51.8C137 489.9 194 512 256 512 385 512 491.7 416.6 509.4 292.5z"]},zs=Ms,_s={prefix:"fas",iconName:"cloud-arrow-up",icon:[576,512,[62338,"cloud-upload","cloud-upload-alt"],"f0ee","M144 480c-79.5 0-144-64.5-144-144 0-63.4 41-117.2 97.9-136.5-1.3-7.7-1.9-15.5-1.9-23.5 0-79.5 64.5-144 144-144 55.4 0 103.5 31.3 127.6 77.1 14.2-8.3 30.8-13.1 48.4-13.1 53 0 96 43 96 96 0 15.7-3.8 30.6-10.5 43.7 44 20.3 74.5 64.7 74.5 116.3 0 70.7-57.3 128-128 128l-304 0zM305 191c-9.4-9.4-24.6-9.4-33.9 0l-72 72c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l31-31 0 102.1c0 13.3 10.7 24 24 24s24-10.7 24-24l0-102.1 31 31c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-72-72z"]},Rs=_s,$s={prefix:"fas",iconName:"file-arrow-up",icon:[384,512,["file-upload"],"f574","M0 64C0 28.7 28.7 0 64 0L213.5 0c17 0 33.3 6.7 45.3 18.7L365.3 125.3c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm208-5.5l0 93.5c0 13.3 10.7 24 24 24L325.5 176 208 58.5zM209 263c-9.4-9.4-24.6-9.4-33.9 0l-64 64c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l23-23 0 86.1c0 13.3 10.7 24 24 24s24-10.7 24-24l0-86.1 23 23c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-64-64z"]},Ds=$s,Us={prefix:"fas",iconName:"pen-to-square",icon:[512,512,["edit"],"f044","M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L368 46.1 465.9 144 490.3 119.6c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L432 177.9 334.1 80 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z"]},Ws=Us,Vs={prefix:"fas",iconName:"rocket",icon:[512,512,[],"f135","M128 320L24.5 320c-24.9 0-40.2-27.1-27.4-48.5L50 183.3C58.7 168.8 74.3 160 91.2 160l95 0c76.1-128.9 189.6-135.4 265.5-124.3 12.8 1.9 22.8 11.9 24.6 24.6 11.1 75.9 4.6 189.4-124.3 265.5l0 95c0 16.9-8.8 32.5-23.3 41.2l-88.2 52.9c-21.3 12.8-48.5-2.6-48.5-27.4L192 384c0-35.3-28.7-64-64-64l-.1 0zM400 160a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z"]},Bs={prefix:"fas",iconName:"circle-xmark",icon:[512,512,[61532,"times-circle","xmark-circle"],"f057","M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM167 167c9.4-9.4 24.6-9.4 33.9 0l55 55 55-55c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-55 55 55 55c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-55-55-55 55c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l55-55-55-55c-9.4-9.4-9.4-24.6 0-33.9z"]},Ys=Bs,Qa={prefix:"fas",iconName:"chart-line",icon:[512,512,["line-chart"],"f201","M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64L0 400c0 44.2 35.8 80 80 80l400 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 416c-8.8 0-16-7.2-16-16L64 64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7 262.6 153.4c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l73.4-73.4 57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z"]},Hs={prefix:"fas",iconName:"gear",icon:[512,512,[9881,"cog"],"f013","M195.1 9.5C198.1-5.3 211.2-16 226.4-16l59.8 0c15.2 0 28.3 10.7 31.3 25.5L332 79.5c14.1 6 27.3 13.7 39.3 22.8l67.8-22.5c14.4-4.8 30.2 1.2 37.8 14.4l29.9 51.8c7.6 13.2 4.9 29.8-6.5 39.9L447 233.3c.9 7.4 1.3 15 1.3 22.7s-.5 15.3-1.3 22.7l53.4 47.5c11.4 10.1 14 26.8 6.5 39.9l-29.9 51.8c-7.6 13.1-23.4 19.2-37.8 14.4l-67.8-22.5c-12.1 9.1-25.3 16.7-39.3 22.8l-14.4 69.9c-3.1 14.9-16.2 25.5-31.3 25.5l-59.8 0c-15.2 0-28.3-10.7-31.3-25.5l-14.4-69.9c-14.1-6-27.2-13.7-39.3-22.8L73.5 432.3c-14.4 4.8-30.2-1.2-37.8-14.4L5.8 366.1c-7.6-13.2-4.9-29.8 6.5-39.9l53.4-47.5c-.9-7.4-1.3-15-1.3-22.7s.5-15.3 1.3-22.7L12.3 185.8c-11.4-10.1-14-26.8-6.5-39.9L35.7 94.1c7.6-13.2 23.4-19.2 37.8-14.4l67.8 22.5c12.1-9.1 25.3-16.7 39.3-22.8L195.1 9.5zM256.3 336a80 80 0 1 0 -.6-160 80 80 0 1 0 .6 160z"]},Gs=Hs,qs={prefix:"fas",iconName:"chart-bar",icon:[512,512,["bar-chart"],"f080","M32 32c17.7 0 32 14.3 32 32l0 336c0 8.8 7.2 16 16 16l400 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L80 480c-44.2 0-80-35.8-80-80L0 64C0 46.3 14.3 32 32 32zm96 64c0-17.7 14.3-32 32-32l192 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-192 0c-17.7 0-32-14.3-32-32zm32 80l128 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-128 0c-17.7 0-32-14.3-32-32s14.3-32 32-32zm0 112l256 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-256 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"]},Xs={prefix:"fas",iconName:"spinner",icon:[512,512,[],"f110","M208 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm0 416a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM48 208a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm368 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM75 369.1A48 48 0 1 1 142.9 437 48 48 0 1 1 75 369.1zM75 75A48 48 0 1 1 142.9 142.9 48 48 0 1 1 75 75zM437 369.1A48 48 0 1 1 369.1 437 48 48 0 1 1 437 369.1z"]},Ks={prefix:"fas",iconName:"wand-magic",icon:[512,512,["magic"],"f0d0","M398.5 12.2l-88.2 88.2 101.3 101.3 88.2-88.2C507.6 105.6 512 95 512 84s-4.4-21.6-12.2-29.5L457.5 12.2C449.6 4.4 439 0 428 0s-21.6 4.4-29.5 12.2zM276.4 134.3L12.2 398.5C4.4 406.4 0 417 0 428s4.4 21.6 12.2 29.5l42.3 42.3C62.4 507.6 73 512 84 512s21.6-4.4 29.5-12.2L377.7 235.6 276.4 134.3z"]},Js=Ks,Qs={prefix:"fas",iconName:"brain",icon:[512,512,[129504],"f5dc","M120 56c0-30.9 25.1-56 56-56l24 0c17.7 0 32 14.3 32 32l0 448c0 17.7-14.3 32-32 32l-32 0c-29.8 0-54.9-20.4-62-48-.7 0-1.3 0-2 0-44.2 0-80-35.8-80-80 0-18 6-34.6 16-48-19.4-14.6-32-37.8-32-64 0-30.9 17.6-57.8 43.2-71.1-7.1-12-11.2-26-11.2-40.9 0-44.2 35.8-80 80-80l0-24zm272 0l0 24c44.2 0 80 35.8 80 80 0 15-4.1 29-11.2 40.9 25.7 13.3 43.2 40.1 43.2 71.1 0 26.2-12.6 49.4-32 64 10 13.4 16 30 16 48 0 44.2-35.8 80-80 80-.7 0-1.3 0-2 0-7.1 27.6-32.2 48-62 48l-32 0c-17.7 0-32-14.3-32-32l0-448c0-17.7 14.3-32 32-32l24 0c30.9 0 56 25.1 56 56z"]},Zs={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"]},ie=Zs,eo={prefix:"fas",iconName:"file-lines",icon:[384,512,[128441,128462,61686,"file-alt","file-text"],"f15c","M0 64C0 28.7 28.7 0 64 0L213.5 0c17 0 33.3 6.7 45.3 18.7L365.3 125.3c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm208-5.5l0 93.5c0 13.3 10.7 24 24 24L325.5 176 208 58.5zM120 256c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0z"]},to=eo,ao={prefix:"fas",iconName:"circle-check",icon:[512,512,[61533,"check-circle"],"f058","M256 512a256 256 0 1 1 0-512 256 256 0 1 1 0 512zM374 145.7c-10.7-7.8-25.7-5.4-33.5 5.3L221.1 315.2 169 263.1c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l72 72c5 5 11.8 7.5 18.8 7s13.4-4.1 17.5-9.8L379.3 179.2c7.8-10.7 5.4-25.7-5.3-33.5z"]},Je=ao,ro={prefix:"fas",iconName:"clock-rotate-left",icon:[576,512,["history"],"f1da","M288 64c106 0 192 86 192 192S394 448 288 448c-65.2 0-122.9-32.5-157.6-82.3-10.1-14.5-30.1-18-44.6-7.9s-18 30.1-7.9 44.6C124.1 468.6 201 512 288 512 429.4 512 544 397.4 544 256S429.4 0 288 0C202.3 0 126.5 42.1 80 106.7L80 80c0-17.7-14.3-32-32-32S16 62.3 16 80l0 112c0 17.7 14.3 32 32 32l24.6 0c.5 0 1 0 1.5 0l86 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-38.3 0C154.9 102.6 217 64 288 64zm24 88c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 104c0 6.4 2.5 12.5 7 17l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-65-65 0-94.1z"]},no=ro,io={prefix:"fas",iconName:"triangle-exclamation",icon:[512,512,[9888,"exclamation-triangle","warning"],"f071","M256 0c14.7 0 28.2 8.1 35.2 21l216 400c6.7 12.4 6.4 27.4-.8 39.5S486.1 480 472 480L40 480c-14.1 0-27.2-7.4-34.4-19.5s-7.5-27.1-.8-39.5l216-400c7-12.9 20.5-21 35.2-21zm0 352a32 32 0 1 0 0 64 32 32 0 1 0 0-64zm0-192c-18.2 0-32.7 15.5-31.4 33.7l7.4 104c.9 12.5 11.4 22.3 23.9 22.3 12.6 0 23-9.7 23.9-22.3l7.4-104c1.3-18.2-13.1-33.7-31.4-33.7z"]},Qe=io,so={prefix:"fas",iconName:"graduation-cap",icon:[576,512,[127891,"mortar-board"],"f19d","M48 195.8l209.2 86.1c9.8 4 20.2 6.1 30.8 6.1s21-2.1 30.8-6.1l242.4-99.8c9-3.7 14.8-12.4 14.8-22.1s-5.8-18.4-14.8-22.1L318.8 38.1C309 34.1 298.6 32 288 32s-21 2.1-30.8 6.1L14.8 137.9C5.8 141.6 0 150.3 0 160L0 456c0 13.3 10.7 24 24 24s24-10.7 24-24l0-260.2zm48 71.7L96 384c0 53 86 96 192 96s192-43 192-96l0-116.6-142.9 58.9c-15.6 6.4-32.2 9.7-49.1 9.7s-33.5-3.3-49.1-9.7L96 267.4z"]},oo={prefix:"fas",iconName:"file-pdf",icon:[576,512,[],"f1c1","M96 0C60.7 0 32 28.7 32 64l0 384c0 35.3 28.7 64 64 64l80 0 0-112c0-35.3 28.7-64 64-64l176 0 0-165.5c0-17-6.7-33.3-18.7-45.3L290.7 18.7C278.7 6.7 262.5 0 245.5 0L96 0zM357.5 176L264 176c-13.3 0-24-10.7-24-24L240 58.5 357.5 176zM240 380c-11 0-20 9-20 20l0 128c0 11 9 20 20 20s20-9 20-20l0-28 12 0c33.1 0 60-26.9 60-60s-26.9-60-60-60l-32 0zm32 80l-12 0 0-40 12 0c11 0 20 9 20 20s-9 20-20 20zm96-80c-11 0-20 9-20 20l0 128c0 11 9 20 20 20l32 0c28.7 0 52-23.3 52-52l0-64c0-28.7-23.3-52-52-52l-32 0zm20 128l0-88 12 0c6.6 0 12 5.4 12 12l0 64c0 6.6-5.4 12-12 12l-12 0zm88-108l0 128c0 11 9 20 20 20s20-9 20-20l0-44 28 0c11 0 20-9 20-20s-9-20-20-20l-28 0 0-24 28 0c11 0 20-9 20-20s-9-20-20-20l-48 0c-11 0-20 9-20 20z"]},lo={prefix:"fas",iconName:"shield-halved",icon:[512,512,["shield-alt"],"f3ed","M256 0c4.6 0 9.2 1 13.4 2.9L457.8 82.8c22 9.3 38.4 31 38.3 57.2-.5 99.2-41.3 280.7-213.6 363.2-16.7 8-36.1 8-52.8 0-172.4-82.5-213.1-264-213.6-363.2-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.9 1 251.4 0 256 0zm0 66.8l0 378.1c138-66.8 175.1-214.8 176-303.4l-176-74.6 0 0z"]},Za=lo,er={prefix:"fas",iconName:"robot",icon:[640,512,[129302],"f544","M352 0c0-17.7-14.3-32-32-32S288-17.7 288 0l0 64-96 0c-53 0-96 43-96 96l0 224c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-224c0-53-43-96-96-96l-96 0 0-64zM160 368c0-13.3 10.7-24 24-24l32 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-32 0c-13.3 0-24-10.7-24-24zm120 0c0-13.3 10.7-24 24-24l32 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-32 0c-13.3 0-24-10.7-24-24zm120 0c0-13.3 10.7-24 24-24l32 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-32 0c-13.3 0-24-10.7-24-24zM224 176a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm144 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM64 224c0-17.7-14.3-32-32-32S0 206.3 0 224l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96zm544-32c-17.7 0-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32z"]},co={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 160-160 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l160 0 0 160c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160 160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-160 0 0-160z"]},fo={prefix:"fas",iconName:"copy",icon:[448,512,[],"f0c5","M192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-200.6c0-17.4-7.1-34.1-19.7-46.2L370.6 17.8C358.7 6.4 342.8 0 326.3 0L192 0zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-64 0 0 16-192 0 0-256 16 0 0-64-16 0z"]},uo={prefix:"fas",iconName:"bolt",icon:[448,512,[9889,"zap"],"f0e7","M338.8-9.9c11.9 8.6 16.3 24.2 10.9 37.8L271.3 224 416 224c13.5 0 25.5 8.4 30.1 21.1s.7 26.9-9.6 35.5l-288 240c-11.3 9.4-27.4 9.9-39.3 1.3s-16.3-24.2-10.9-37.8L176.7 288 32 288c-13.5 0-25.5-8.4-30.1-21.1s-.7-26.9 9.6-35.5l288-240c11.3-9.4 27.4-9.9 39.3-1.3z"]};const mo=({message:e="Processando seu email...",submessage:t="Nossa IA está analisando o conteúdo e gerando a melhor resposta"})=>{const[a,r]=N.useState(0),[n,i]=N.useState(0),o=[{icon:"fas fa-file-alt",text:"Analisando conteúdo do email",description:"Extraindo e processando o texto"},{icon:"fas fa-brain",text:"Aplicando algoritmos de IA",description:"Classificando com machine learning"},{icon:"fas fa-magic",text:"Gerando resposta personalizada",description:"Criando sugestão inteligente"}];return N.useEffect(()=>{const l=setInterval(()=>{r(f=>(f+1)%o.length)},2e3),c=setInterval(()=>{i(f=>f>=90?20:f+Math.random()*15)},300);return()=>{clearInterval(l),clearInterval(c)}},[o.length]),s.jsxs("div",{className:"glass-card rounded-xl p-8 text-center max-w-lg mx-auto",children:[s.jsxs("div",{className:"relative w-24 h-24 mx-auto mb-6",children:[s.jsx("div",{className:"absolute inset-0 border-4 border-indigo-200 rounded-full"}),s.jsx("div",{className:"absolute inset-0 border-4 border-transparent border-t-indigo-600 rounded-full animate-spin"}),s.jsx("div",{className:"absolute inset-2 bg-indigo-100 rounded-full flex items-center justify-center",children:s.jsx("i",{className:"fas fa-robot text-2xl text-indigo-600"})}),s.jsx("div",{className:"absolute inset-0 border-2 border-indigo-300 rounded-full animate-pulse opacity-75"})]}),s.jsx("h3",{className:"text-xl font-bold text-white mb-2",children:e}),s.jsx("p",{className:"text-white/80 mb-6 leading-relaxed",children:t}),s.jsx("div",{className:"bg-white/20 rounded-full h-3 mb-6 overflow-hidden",children:s.jsx("div",{className:"bg-gradient-to-r from-indigo-400 to-indigo-600 h-full rounded-full transition-all duration-500 ease-out relative overflow-hidden",style:{width:`${Math.min(n,90)}%`},children:s.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"})})}),s.jsx("div",{className:"space-y-3",children:o.map((l,c)=>s.jsx(ho,{icon:l.icon,text:l.text,description:l.description,active:c===a,completed:c<a},c))}),s.jsx("div",{className:"mt-6 pt-6 border-t border-white/20",children:s.jsxs("div",{className:"flex items-center justify-center gap-4 text-white/70 text-sm",children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("div",{className:"w-2 h-2 bg-green-400 rounded-full animate-pulse"}),s.jsx("span",{children:"Sistema Online"})]}),s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("div",{className:"w-2 h-2 bg-blue-400 rounded-full animate-pulse"}),s.jsx("span",{children:"IA Ativa"})]})]})})]})},ho=({icon:e,text:t,description:a,active:r,completed:n})=>s.jsxs("div",{className:`flex items-center gap-4 p-3 rounded-lg transition-all duration-500 ${r?"bg-white/20 text-white scale-105":n?"bg-white/10 text-white/90":"text-white/60"}`,children:[s.jsx("div",{className:`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${r?"bg-indigo-500 text-white":n?"bg-green-500 text-white":"bg-white/10 text-white/60"}`,children:r?s.jsx("i",{className:"fas fa-spinner fa-spin"}):n?s.jsx("i",{className:"fas fa-check"}):s.jsx("i",{className:e})}),s.jsxs("div",{className:"flex-1 text-left",children:[s.jsx("div",{className:`font-medium transition-colors duration-300 ${r?"text-white":n?"text-white/90":"text-white/60"}`,children:t}),s.jsx("div",{className:`text-sm transition-colors duration-300 ${r?"text-white/80":"text-white/50"}`,children:a})]}),s.jsx("div",{className:"ml-auto",children:r?s.jsx("div",{className:"w-3 h-3 bg-indigo-400 rounded-full animate-pulse"}):n&&s.jsx("div",{className:"w-3 h-3 bg-green-400 rounded-full"})})]});class go{constructor(){mt(this,"baseURL");this.baseURL="http://localhost:8000"}async handleResponse(t){if(!t.ok){let a=`Erro ${t.status}`;try{a=(await t.json()).detail||a}catch{a=t.statusText||a}throw new Error(a)}return t.json()}async classifyFile(t){const a=new FormData;a.append("file",t);const r=await fetch(`${this.baseURL}/api/classify-file`,{method:"POST",body:a});return this.handleResponse(r)}async classifyText(t){const a=new FormData;a.append("text",t);const r=await fetch(`${this.baseURL}/api/classify`,{method:"POST",body:a});return this.handleResponse(r)}async getStatus(){const t=await fetch(`${this.baseURL}/api/health`);return this.handleResponse(t)}async getModelInfo(){const t=await fetch(`${this.baseURL}/api/model-info`);return this.handleResponse(t)}async getStatistics(){const t=await fetch(`${this.baseURL}/api/stats`);return this.handleResponse(t)}isValidFileType(t){const a=[".txt",".pdf"],r=t.name.toLowerCase();return a.some(n=>r.endsWith(n))}formatFileSize(t){if(t===0)return"0 Bytes";const a=1024,r=["Bytes","KB","MB","GB"],n=Math.floor(Math.log(t)/Math.log(a));return parseFloat((t/Math.pow(a,n)).toFixed(2))+" "+r[n]}formatConfidence(t){return`${(t*100).toFixed(1)}%`}formatProcessingTime(t){return t<1?`${(t*1e3).toFixed(0)}ms`:`${t.toFixed(2)}s`}formatTimestamp(t){return new Date(t).toLocaleString("pt-BR",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"})}getClassificationColor(t){return t==="PRODUTIVO"?"bg-red-500":"bg-green-500"}getClassificationTextColor(t){return t==="PRODUTIVO"?"text-red-600":"text-green-600"}getClassificationIcon(t){return t==="PRODUTIVO"?"🔧":"✅"}getClassificationBadgeClass(t){return`px-3 py-1 rounded-full text-white font-semibold text-sm ${t==="PRODUTIVO"?"bg-red-500":"bg-green-500"}`}validateTextInput(t){return!t||!t.trim()?{isValid:!1,error:"Texto não pode estar vazio"}:t.trim().length<10?{isValid:!1,error:"Texto muito curto. Mínimo de 10 caracteres."}:t.length>5e4?{isValid:!1,error:"Texto muito longo. Máximo de 50.000 caracteres."}:{isValid:!0}}validateFileInput(t){if(!t)return{isValid:!1,error:"Nenhum arquivo selecionado"};if(!this.isValidFileType(t))return{isValid:!1,error:"Tipo de arquivo não suportado. Use .txt ou .pdf"};const a=10*1024*1024;return t.size>a?{isValid:!1,error:"Arquivo muito grande. Máximo 10MB"}:{isValid:!0}}getConfidenceLevel(t){return t>=.8?"high":t>=.6?"medium":"low"}getConfidenceLevelColor(t){switch(t){case"high":return"text-green-600";case"medium":return"text-yellow-600";case"low":return"text-red-600"}}getConfidenceLevelText(t){switch(t){case"high":return"Alta confiança";case"medium":return"Confiança média";case"low":return"Baixa confiança"}}analyzeClassificationResult(t){const a=this.getConfidenceLevel(t.confidence),r=a==="high";return{isReliable:r,confidenceLevel:a,recommendation:r?"Resultado confiável":"Revisar manualmente recomendado",speedCategory:t.processing_time<.1?"Muito rápido":t.processing_time<.5?"Rápido":"Normal"}}async getHistory(t=10){return console.warn("Histórico não implementado no backend ainda"),[]}async clearHistory(){return console.warn("Limpeza de histórico não implementada no backend ainda"),{message:"Não implementado",cleared_count:0}}async testClassification(){return this.getStatus()}}const E=new go,tr=()=>{var h;const[e,t]=N.useState({result:null,isLoading:!1,error:null,history:[],statistics:null,apiStatus:null}),a=N.useCallback(u=>{t(g=>({...g,...u}))},[]),r=N.useCallback(async u=>{try{const g=E.validateTextInput(u);if(!g.isValid){a({error:g.error});return}a({isLoading:!0,error:null});const x=await E.classifyText(u),p={id:Date.now().toString(),text:u.substring(0,100)+(u.length>100?"...":""),classification:x.classification,confidence:x.confidence,timestamp:new Date().toISOString(),processing_time:x.processing_time,method_used:x.method_used};a({result:x,isLoading:!1,history:[p,...e.history.slice(0,9)]})}catch(g){a({isLoading:!1,error:g instanceof Error?g.message:"Erro ao classificar texto"})}},[e.history,a]),n=N.useCallback(async u=>{try{const g=E.validateFileInput(u);if(!g.isValid){a({error:g.error});return}a({isLoading:!0,error:null});const x=await E.classifyFile(u),p={id:Date.now().toString(),text:`Arquivo: ${u.name}`,classification:x.classification,confidence:x.confidence,timestamp:new Date().toISOString(),processing_time:x.processing_time,method_used:x.method_used};a({result:x,isLoading:!1,history:[p,...e.history.slice(0,9)]})}catch(g){a({isLoading:!1,error:g instanceof Error?g.message:"Erro ao processar arquivo"})}},[e.history,a]),i=N.useCallback(()=>{a({result:null,error:null})},[a]),o=N.useCallback(()=>{a({error:null})},[a]),l=N.useCallback(async()=>{try{const u=await E.getStatistics();a({statistics:u})}catch(u){console.warn("Erro ao obter estatísticas:",u)}},[a]),c=N.useCallback(async()=>{try{const u=await E.getStatus();a({apiStatus:u})}catch(u){a({apiStatus:{status:"unhealthy",advanced_classifier:"unavailable",fallback_classifier:"unavailable",error:u instanceof Error?u.message:"Erro desconhecido"}})}},[a]);N.useEffect(()=>{c(),l()},[c,l]);const f={analyzeResult:u=>E.analyzeClassificationResult(u),formatConfidence:u=>E.formatConfidence(u),formatProcessingTime:u=>E.formatProcessingTime(u),formatFileSize:u=>E.formatFileSize(u),validateText:u=>E.validateTextInput(u),validateFile:u=>E.validateFileInput(u),getClassificationColor:u=>E.getClassificationColor(u),getClassificationIcon:u=>E.getClassificationIcon(u),getClassificationBadgeClass:u=>E.getClassificationBadgeClass(u),isApiHealthy:()=>{var u;return((u=e.apiStatus)==null?void 0:u.status)==="healthy"},getApiStatusColor:()=>{var u;switch((u=e.apiStatus)==null?void 0:u.status){case"healthy":return"text-green-600";case"degraded":return"text-yellow-600";case"unhealthy":return"text-red-600";default:return"text-gray-600"}}},m={totalClassifications:e.history.length,averageConfidence:e.history.length>0?e.history.reduce((u,g)=>u+g.confidence,0)/e.history.length:0,productiveCount:e.history.filter(u=>u.classification==="PRODUTIVO").length,unproductiveCount:e.history.filter(u=>u.classification==="IMPRODUTIVO").length,averageProcessingTime:e.history.length>0?e.history.reduce((u,g)=>u+g.processing_time,0)/e.history.length:0};return{...e,classifyText:r,classifyFile:n,clearResult:i,clearError:o,refreshStatistics:l,checkApiStatus:c,utils:f,localStats:m,hasResult:!!e.result,hasError:!!e.error,hasHistory:e.history.length>0,isApiAvailable:((h=e.apiStatus)==null?void 0:h.status)!=="unhealthy"}},vo=()=>{var dt;const{classifyText:e,classifyFile:t,result:a,isLoading:r,error:n,clearResult:i}=tr(),[o,l]=N.useState(""),[c,f]=N.useState(null),[m,h]=N.useState("text"),[u,g]=N.useState(!1),[x,p]=N.useState(0),S=N.useRef(null),k=N.useCallback(j=>{l(j),p(j.length)},[]),C=async j=>{j.preventDefault(),m==="text"&&o.trim()?await e(o):m==="file"&&c&&await t(c)},I=N.useCallback(j=>{if(j.size>10*1024*1024){alert("Arquivo muito grande. Máximo 10MB permitido.");return}const O=[".txt",".pdf"],ke=j.name.toLowerCase();if(!O.some(ar=>ke.endsWith(ar))){alert("Tipo de arquivo não suportado. Use apenas .txt ou .pdf");return}f(j)},[]),F=N.useCallback(j=>{j.preventDefault(),g(!0)},[]),b=N.useCallback(j=>{j.preventDefault(),g(!1)},[]),ee=N.useCallback(j=>{j.preventDefault(),g(!1);const O=j.dataTransfer.files[0];O&&I(O)},[I]),Se=()=>{f(null),S.current&&(S.current.value="")},te=j=>{if(j===0)return"0 Bytes";const O=1024,ke=["Bytes","KB","MB"],Ce=Math.floor(Math.log(j)/Math.log(O));return parseFloat((j/Math.pow(O,Ce)).toFixed(2))+" "+ke[Ce]},Ae=async j=>{try{await navigator.clipboard.writeText(j)}catch(O){console.error("Falha ao copiar texto: ",O)}};return r?s.jsx("div",{className:"max-w-4xl mx-auto",children:s.jsx(mo,{message:"Analisando seu email com IA avançada...",submessage:"Nossa inteligência artificial está processando o conteúdo e gerando a melhor resposta"})}):a?s.jsx("div",{className:"max-w-4xl mx-auto",children:s.jsxs("div",{className:"result-card premium-card rounded-xl p-8 mb-8",children:[s.jsxs("div",{className:"flex justify-between items-start mb-6",children:[s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("div",{className:"w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center",children:s.jsx(w,{icon:Je,className:"text-indigo-600 text-xl"})}),s.jsxs("div",{children:[s.jsx("h2",{className:"text-2xl font-bold text-gray-800",children:"Análise Concluída"}),s.jsx("p",{className:"text-gray-600",children:"Processamento finalizado com sucesso"})]})]}),s.jsx("button",{onClick:i,className:"w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center transition-colors",title:"Fechar resultado",children:s.jsx(w,{icon:ie,className:"text-gray-600"})})]}),s.jsx("div",{className:"mb-6",children:s.jsxs("div",{className:`inline-flex items-center gap-3 px-6 py-3 rounded-full font-semibold text-lg ${a.classification==="PRODUTIVO"?"bg-gradient-to-r from-green-500 to-green-600 text-white":"bg-gradient-to-r from-red-500 to-red-600 text-white"}`,children:[s.jsx(w,{icon:a.classification==="PRODUTIVO"?Je:Qe}),s.jsx("span",{children:a.classification}),s.jsxs("span",{className:"bg-white bg-opacity-20 px-2 py-1 rounded-full text-sm text-gray-700",children:[(a.confidence*100).toFixed(1),"%"]})]})}),s.jsxs("div",{className:"mb-6",children:[s.jsxs("div",{className:"flex justify-between items-center mb-2",children:[s.jsx("span",{className:"text-sm font-medium text-gray-700",children:"Nível de Confiança"}),s.jsxs("span",{className:"text-sm text-gray-600",children:[(a.confidence*100).toFixed(1),"%"]})]}),s.jsx("div",{className:"w-full bg-gray-200 rounded-full h-3",children:s.jsx("div",{className:"progress-bar h-3 rounded-full transition-all duration-1000 ease-out",style:{width:`${a.confidence*100}%`}})})]}),s.jsxs("div",{className:"bg-indigo-50 border border-indigo-200 rounded-xl p-6 mb-6",children:[s.jsxs("div",{className:"flex justify-between items-center mb-4",children:[s.jsxs("h3",{className:"text-lg font-semibold text-indigo-800 flex items-center gap-2",children:[s.jsx(w,{icon:Js}),"Resposta Sugerida"]}),s.jsxs("button",{onClick:()=>Ae(a.suggested_response),className:"px-3 py-1 bg-indigo-100 hover:bg-indigo-200 text-indigo-700 rounded-lg text-sm font-medium transition-colors flex items-center gap-2",title:"Copiar resposta",children:[s.jsx(w,{icon:fo,className:"text-xs"}),"Copiar"]})]}),s.jsx("p",{className:"text-indigo-900 leading-relaxed whitespace-pre-line",children:a.suggested_response})]}),s.jsxs("div",{className:"grid md:grid-cols-3 gap-4",children:[s.jsxs("div",{className:"bg-gray-50 rounded-lg p-4 text-center",children:[s.jsxs("div",{className:"text-2xl font-bold text-gray-800",children:[(a.processing_time*1e3).toFixed(0),"ms"]}),s.jsx("div",{className:"text-sm text-gray-600",children:"Tempo de Processamento"})]}),s.jsxs("div",{className:"bg-gray-50 rounded-lg p-4 text-center",children:[s.jsx("div",{className:"text-2xl font-bold text-gray-800",children:a.method_used||"IA Avançada"}),s.jsx("div",{className:"text-sm text-gray-600",children:"Método Utilizado"})]}),s.jsxs("div",{className:"bg-gray-50 rounded-lg p-4 text-center",children:[s.jsx("div",{className:"text-2xl font-bold text-gray-800",children:((dt=a.additional_info)==null?void 0:dt.text_length)||o.length}),s.jsx("div",{className:"text-sm text-gray-600",children:"Caracteres Analisados"})]})]}),s.jsx("div",{className:"mt-6 pt-6 border-t border-gray-200",children:s.jsxs("button",{onClick:i,className:"w-full py-3 px-6 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2",children:[s.jsx(w,{icon:co}),"Analisar Novo Email"]})})]})}):s.jsxs("div",{className:"max-w-4xl mx-auto",children:[s.jsxs("div",{className:"text-center mb-12",children:[s.jsx("h1",{className:"text-4xl font-bold gradient-text mb-4",children:"Email Classifier AI"}),s.jsxs("p",{className:"text-xl text-white leading-relaxed max-w-3xl mx-auto",children:["Sistema Inteligente de Classificação Automática de Emails",s.jsx("br",{}),s.jsx("span",{className:"text-white/80 font-medium",children:"Desenvolvido para automatizar processos empresariais com IA"})]}),s.jsxs("div",{className:"flex flex-wrap justify-center gap-3 mt-6",children:[s.jsxs("div",{className:"flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full shadow-md border border-white/20",children:[s.jsx(w,{icon:er,className:"text-indigo-500"}),s.jsx("span",{className:"text-sm font-medium text-white",children:"IA Avançada"})]}),s.jsxs("div",{className:"flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full shadow-md border border-white/20",children:[s.jsx(w,{icon:uo,className:"text-indigo-500"}),s.jsx("span",{className:"text-sm font-medium text-white",children:"Processamento Rápido"})]}),s.jsxs("div",{className:"flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full shadow-md border border-white/20",children:[s.jsx(w,{icon:Za,className:"text-indigo-500"}),s.jsx("span",{className:"text-sm font-medium text-white",children:"Seguro & Confiável"})]}),s.jsxs("div",{className:"flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full shadow-md border border-white/20",children:[s.jsx(w,{icon:Qa,className:"text-indigo-500"}),s.jsx("span",{className:"text-sm font-medium text-white",children:"Alta Precisão"})]})]})]}),s.jsxs("div",{className:"glass-card rounded-xl p-8 mb-8",children:[s.jsxs("div",{className:"flex bg-white/10 rounded-xl p-1 mb-8",style:{gap:"1em"},children:[s.jsxs("button",{onClick:()=>h("text"),className:`flex-1 py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${m==="text"?"bg-white text-indigo-600 shadow-md":"text-gray-700/80 hover:text-gray-700"}`,children:[s.jsx(w,{icon:Ws}),"Digitar Texto"]}),s.jsxs("button",{onClick:()=>h("file"),className:`flex-1 py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${m==="file"?"bg-white text-indigo-600 shadow-md":"text-gray-500/80 hover:text-gray-500"}`,children:[s.jsx(w,{icon:Ds}),"Enviar Arquivo"]})]}),s.jsxs("form",{onSubmit:C,className:"space-y-6",children:[m==="text"?s.jsxs("div",{children:[s.jsx("label",{htmlFor:"email-text",className:"block text-lg font-semibold text-white mb-3",children:"Conteúdo do Email"}),s.jsx("textarea",{id:"email-text",value:o,onChange:j=>k(j.target.value),placeholder:`Cole aqui o conteúdo do email que você deseja classificar...\r
\r
Exemplo:\r
Olá, estou com problema para acessar minha conta no sistema. Quando tento fazer login, aparece uma mensagem de erro. Poderiam me ajudar urgentemente?`,className:"w-full h-40 p-4 border-2 border-white/20 rounded-xl resize-none bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 hover:border-white/30",disabled:r,maxLength:5e4}),s.jsxs("div",{className:"flex justify-between items-center mt-2",children:[s.jsx("div",{className:"text-sm text-white/60",children:"Mínimo 10 caracteres • Máximo 50.000 caracteres"}),s.jsxs("div",{className:`text-sm ${x>45e3?"text-red-400":"text-white/60"}`,children:[x.toLocaleString()," / 50.000"]})]})]}):s.jsxs("div",{children:[s.jsx("label",{className:"block text-lg font-semibold text-white mb-3",children:"Arquivo do Email"}),c?s.jsxs("div",{className:"bg-white/10 border border-white/20 rounded-xl p-4 flex items-center justify-between",children:[s.jsxs("div",{className:"flex items-center gap-4",children:[s.jsx("div",{className:"w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center",children:s.jsx(w,{icon:c.name.endsWith(".pdf")?oo:to,className:`text-xl ${c.name.endsWith(".pdf")?"text-red-500":"text-blue-500"}`})}),s.jsxs("div",{children:[s.jsx("div",{className:"font-semibold text-white",children:c.name}),s.jsx("div",{className:"text-sm text-white/60",children:te(c.size)})]})]}),s.jsx("button",{type:"button",onClick:Se,className:"w-8 h-8 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-lg flex items-center justify-center transition-colors p-2",title:"Remover arquivo",children:s.jsx(w,{icon:ie,className:"text-sm"})})]}):s.jsxs("div",{className:`upload-area border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all duration-300 ${u?"border-indigo-400 bg-indigo-500/20":"border-white/30 hover:border-indigo-400 hover:bg-white/10"}`,onDragOver:F,onDragLeave:b,onDrop:ee,onClick:()=>{var j;return(j=S.current)==null?void 0:j.click()},children:[s.jsxs("div",{className:"space-y-4",children:[s.jsx("div",{className:"text-6xl text-white",children:s.jsx(w,{icon:Rs})}),s.jsxs("div",{children:[s.jsx("div",{className:"text-xl font-semibold text-white mb-2",children:"Clique aqui ou arraste um arquivo"}),s.jsx("div",{className:"text-white/60",children:"Formatos suportados: .txt, .pdf • Máximo 10MB"})]})]}),s.jsx("input",{ref:S,type:"file",accept:".txt,.pdf",onChange:j=>{var O;return((O=j.target.files)==null?void 0:O[0])&&I(j.target.files[0])},className:"hidden",disabled:r})]})]}),n&&s.jsxs("div",{className:"bg-red-500/20 border border-red-500/30 rounded-xl p-4 flex items-center gap-3",children:[s.jsx(w,{icon:Qe,className:"text-red-400 text-xl"}),s.jsxs("div",{children:[s.jsx("div",{className:"font-semibold text-red-300",children:"Erro no processamento"}),s.jsx("div",{className:"text-red-400",children:n})]})]}),s.jsxs("button",{type:"submit",disabled:r||(m==="text"?o.trim().length<10:!c),className:"w-full py-4 px-8 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 disabled:from-gray-500 disabled:to-gray-600 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl disabled:hover:scale-100 disabled:hover:shadow-none disabled:cursor-not-allowed flex items-center justify-center gap-3 text-lg",children:[s.jsx(w,{icon:Qs,className:"text-xl"}),r?"Processando...":"Classificar com IA"]})]})]})]})};function po(){const{history:e,statistics:t,hasHistory:a,utils:r,checkApiStatus:n,apiStatus:i}=tr(),[o,l]=N.useState(!1),[c,f]=N.useState(!1),[m,h]=N.useState(!0);N.useEffect(()=>{n();const p=setTimeout(()=>{(i==null?void 0:i.status)==="healthy"&&h(!1)},5e3);return()=>clearTimeout(p)},[n,i==null?void 0:i.status]);const u=()=>{switch(i==null?void 0:i.status){case"healthy":return"bg-green-500";case"degraded":return"bg-yellow-500";case"unhealthy":return"bg-red-500";default:return"bg-gray-500"}},g=()=>{switch(i==null?void 0:i.status){case"healthy":return"Sistema Online";case"degraded":return"Sistema Degradado";case"unhealthy":return"Sistema Offline";default:return"Verificando..."}},x=()=>{switch(i==null?void 0:i.status){case"healthy":return Je;case"degraded":return Qe;case"unhealthy":return Ys;default:return Xs}};return s.jsxs("div",{className:"min-h-screen animated-bg",children:[s.jsxs("div",{className:"absolute inset-0 overflow-hidden pointer-events-none",children:[s.jsx("div",{className:"absolute top-10 left-10 w-72 h-72 bg-white opacity-5 rounded-full blur-3xl"}),s.jsx("div",{className:"absolute top-40 right-20 w-96 h-96 bg-indigo-300 opacity-10 rounded-full blur-3xl"}),s.jsx("div",{className:"absolute bottom-20 left-1/4 w-80 h-80 bg-purple-300 opacity-8 rounded-full blur-3xl"}),s.jsx("div",{className:"absolute bottom-10 right-10 w-64 h-64 bg-pink-300 opacity-8 rounded-full blur-3xl"})]}),m&&s.jsxs("div",{className:"fixed top-4 right-4 z-50 glass-card rounded-lg px-4 py-3 flex items-center gap-3 text-white text-sm font-medium shadow-xl",children:[s.jsx("div",{className:`w-3 h-3 rounded-full ${u()}`}),s.jsx(w,{icon:x(),className:(i==null?void 0:i.status)==="unhealthy"?"animate-spin":""}),s.jsx("span",{children:g()}),s.jsx("button",{onClick:()=>h(!1),className:"ml-2 text-white/60 hover:text-white transition-colors",style:{background:"transparent"},children:s.jsx(w,{icon:ie,className:"text-xs"})})]}),s.jsx("nav",{className:"relative z-10 p-4",children:s.jsxs("div",{className:"max-w-6xl mx-auto flex justify-between items-center",children:[s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("div",{className:"w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center",children:s.jsx(w,{icon:er,className:"text-white text-xl"})}),s.jsxs("div",{className:"text-white",children:[s.jsx("div",{className:"font-bold text-lg",children:"Email Classifier AI"}),s.jsx("div",{className:"text-sm opacity-90",children:"Powered by AutoU"})]})]}),s.jsxs("div",{className:"flex items-center gap-3",children:[a&&s.jsxs("button",{onClick:()=>l(!o),className:"glass-card px-4 py-2 rounded-lg text-white hover:bg-white/20 transition-all duration-300 flex items-center gap-2",children:[s.jsx(w,{icon:no}),s.jsx("span",{className:"hidden md:inline",children:"Histórico"}),s.jsx("span",{className:"bg-white/20 px-2 py-1 rounded-full text-xs",children:e.length})]}),t&&s.jsxs("button",{onClick:()=>f(!c),className:"glass-card px-4 py-2 rounded-lg text-white hover:bg-white/20 transition-all duration-300 flex items-center gap-2",children:[s.jsx(w,{icon:qs}),s.jsx("span",{className:"hidden md:inline",children:"Stats"})]}),s.jsx("button",{onClick:n,className:"glass-card p-2 rounded-lg text-white hover:bg-white/20 transition-all duration-300",title:"Verificar status da API",children:s.jsx(w,{icon:zs})})]})]})}),s.jsx("div",{className:"container mx-auto px-4 py-8 relative z-10",children:s.jsxs("div",{className:"max-w-5xl mx-auto",children:[o&&a&&s.jsxs("div",{className:"fixed right-4 top-20 bottom-4 w-80 glass-card rounded-xl p-4 z-40 overflow-hidden",children:[s.jsxs("div",{className:"flex justify-between items-center mb-4",children:[s.jsx("h3",{className:"text-lg font-semibold text-white",children:"Histórico"}),s.jsx("button",{onClick:()=>l(!1),className:"text-white/60 hover:text-white",children:s.jsx(w,{icon:ie})})]}),s.jsx("div",{className:"space-y-3 overflow-y-auto h-full pb-16",children:e.map(p=>s.jsxs("div",{className:"bg-white/10 rounded-lg p-3 hover:bg-white/15 transition-colors",children:[s.jsxs("div",{className:"flex justify-between items-start mb-2",children:[s.jsx("span",{className:`px-2 py-1 rounded-full text-xs font-medium ${p.classification==="PRODUTIVO"?"bg-red-500 text-white":"bg-green-500 text-white"}`,children:p.classification}),s.jsx("span",{className:"text-white/60 text-xs",children:r.formatConfidence(p.confidence)})]}),s.jsx("p",{className:"text-white/80 text-sm truncate",children:p.text}),s.jsx("div",{className:"text-white/50 text-xs mt-2",children:new Date(p.timestamp).toLocaleString("pt-BR")})]},p.id))})]}),c&&t&&s.jsxs("div",{className:"fixed left-4 top-20 bottom-4 w-80 glass-card rounded-xl p-4 z-40",children:[s.jsxs("div",{className:"flex justify-between items-center mb-4",children:[s.jsx("h3",{className:"text-lg font-semibold text-white",children:"Estatísticas"}),s.jsx("button",{onClick:()=>f(!1),className:"text-white/60 hover:text-white",style:{background:"transparent"},children:s.jsx(w,{icon:ie})})]}),s.jsxs("div",{className:"space-y-4 text-white",children:[s.jsxs("div",{className:"bg-white/10 rounded-lg p-3",children:[s.jsx("div",{className:"text-sm opacity-80",children:"Modelos Carregados"}),s.jsxs("div",{className:"font-semibold",children:[t.models_loaded.advanced?"✅":"❌"," Avançado"]}),s.jsxs("div",{className:"font-semibold",children:[t.models_loaded.fallback?"✅":"❌"," Fallback"]})]}),s.jsxs("div",{className:"bg-white/10 rounded-lg p-3",children:[s.jsx("div",{className:"text-sm opacity-80",children:"Performance"}),s.jsxs("div",{className:"font-semibold",children:["Tempo: ",t.performance.avg_response_time]}),s.jsxs("div",{className:"font-semibold",children:["Precisão: ",t.performance.accuracy]})]}),t.total_classifications&&s.jsxs("div",{className:"bg-white/10 rounded-lg p-3",children:[s.jsx("div",{className:"text-sm opacity-80",children:"Total"}),s.jsx("div",{className:"font-semibold text-2xl",children:t.total_classifications}),s.jsx("div",{className:"text-sm",children:"classificações"})]})]})]}),s.jsx(vo,{}),s.jsx("footer",{className:"mt-16 text-center text-white/60",children:s.jsxs("div",{className:"glass-card rounded-xl p-6 max-w-2xl mx-auto",children:[s.jsxs("div",{className:"flex items-center justify-center gap-2 mb-4",children:[s.jsx(w,{icon:so}),s.jsx("span",{className:"font-semibold",children:"Projeto Desenvolvido para AutoU"})]}),s.jsx("p",{className:"text-sm leading-relaxed",children:"Sistema de classificação inteligente utilizando técnicas avançadas de Processamento de Linguagem Natural e Machine Learning para automatizar a análise e resposta de emails empresariais."}),s.jsxs("div",{className:"flex justify-center gap-6 mt-4 text-xs",children:[s.jsxs("div",{className:"flex items-center gap-1",children:[s.jsx(w,{icon:Za,className:"text-green-400"}),s.jsx("span",{children:"Seguro"})]}),s.jsxs("div",{className:"flex items-center gap-1",children:[s.jsx(w,{icon:Vs,className:"text-blue-400"}),s.jsx("span",{children:"Rápido"})]}),s.jsxs("div",{className:"flex items-center gap-1",children:[s.jsx(w,{icon:Qa,className:"text-purple-400"}),s.jsx("span",{children:"Preciso"})]}),s.jsxs("div",{className:"flex items-center gap-1",children:[s.jsx(w,{icon:Gs,className:"text-gray-400"}),s.jsx("span",{children:"Inteligente"})]})]})]})})]})})]})}Me.createRoot(document.getElementById("root")).render(s.jsx(Ze.StrictMode,{children:s.jsx(po,{})}));
//# sourceMappingURL=index-BN_UyUsW.js.map
