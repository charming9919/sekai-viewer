(this["webpackJsonpsekai-viewer"]=this["webpackJsonpsekai-viewer"]||[]).push([[41],{1099:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(29),r=a(11),i=a(54),s=a(280),o=a(281),l=a(1042),u=a(1043),d=a(1044),b=a(1045),j=a(440),h=a(1028),f=a(665),m=a(1046),p=a.n(m),O=a(0),g=a(188),x=a(292),v=a(291),S=a(312),k=a(198),y=a(96),_=a(365),N=a(282),C=a(19),w=a(42),T=a(37),I=a(45),E=a(294),A=a(347),W=Object(k.a)((function(e){return{media:{paddingTop:"30%",width:"100%",backgroundSize:"contain"},card:{cursor:"pointer"},header:{},"grid-out":{margin:e.spacing("1%",0)}}}));var L={agenda:function(e){var t=e.data,a=W(),c=Object(g.a)().t,l=Object(I.c)().getTranslated,u=Object(C.j)().path,d=Object(O.useContext)(T.a).contentTransMode,b=Object(O.useState)(""),j=Object(r.a)(b,2),h=j[0],f=j[1];return Object(O.useEffect)((function(){t&&Object(v.c)("virtual_live/select/banner/".concat(t.assetbundleName,"_rip/").concat(t.assetbundleName,".png"),f)}),[t]),t?Object(n.jsx)(w.b,{to:u+"/"+t.id,style:{textDecoration:"none"},children:Object(n.jsx)(s.a,{maxWidth:"md",className:a.card,children:Object(n.jsxs)(o.a,{container:!0,spacing:2,component:y.a,className:a["grid-out"],children:[Object(n.jsx)(o.a,{item:!0,xs:12,md:4,container:!0,alignItems:"center",children:Object(n.jsx)(_.a,{className:a.media,image:h,title:l(d,"virtualLive_name:".concat(t.id),t.name)})}),Object(n.jsx)(o.a,{item:!0,xs:12,md:8,children:Object(n.jsxs)(o.a,{container:!0,direction:"column",spacing:1,children:[Object(n.jsx)(o.a,{item:!0,children:Object(n.jsx)(A.a,{releaseTime:new Date(t.virtualLiveSchedules[0]?t.virtualLiveSchedules[0].startAt:t.startAt)})}),Object(n.jsx)(o.a,{item:!0,children:Object(n.jsx)(E.b,{contentKey:"virtualLive_name:".concat(t.id),original:t.name,originalProps:{variant:"subtitle1",className:a.header}})}),Object(n.jsxs)(o.a,{item:!0,container:!0,spacing:1,children:[Object(n.jsx)(o.a,{item:!0,xs:12,children:Object(n.jsx)(i.a,{variant:"body2",color:"textSecondary",children:c("virtual_live:type.".concat(t.virtualLiveType))})}),Object(n.jsx)(o.a,{item:!0,children:Object(n.jsx)(i.a,{variant:"body2",color:"textSecondary",component:"span",children:new Date(t.startAt).toLocaleString()})}),Object(n.jsx)(o.a,{item:!0,children:Object(n.jsx)(i.a,{variant:"body2",color:"textSecondary",component:"span",children:"~"})}),Object(n.jsx)(o.a,{item:!0,children:Object(n.jsx)(i.a,{variant:"body2",color:"textSecondary",component:"span",children:new Date(t.endAt).toLocaleString()})})]})]})})]})})}):Object(n.jsx)(s.a,{maxWidth:"md",className:a.card,children:Object(n.jsxs)(o.a,{container:!0,spacing:2,component:y.a,className:a["grid-out"],children:[Object(n.jsx)(o.a,{item:!0,xs:12,md:4,container:!0,alignItems:"center",children:Object(n.jsx)(N.a,{variant:"rect",className:a.media})}),Object(n.jsx)(o.a,{item:!0,xs:12,md:8,children:Object(n.jsxs)(o.a,{container:!0,direction:"column",spacing:1,children:[Object(n.jsx)(i.a,{variant:"subtitle1",className:a.header,children:Object(n.jsx)(N.a,{variant:"text",width:"90%"})}),Object(n.jsx)(i.a,{variant:"body2",children:Object(n.jsx)(N.a,{variant:"text",width:"40%"})})]})})]})})}};t.default=function(){var e=Object(x.a)(),t=Object(g.a)().t,a=Object(O.useState)([]),m=Object(r.a)(a,2),k=m[0],y=m[1],_=Object(v.e)("virtualLives"),N=Object(r.a)(_,1)[0],C=Object(O.useState)(localStorage.getItem("virtual-live-list-grid-view-type")||"agenda"),w=Object(r.a)(C,1)[0],T=Object(O.useState)(1),I=Object(r.a)(T,2),E=I[0],A=I[1],W=Object(O.useState)(12),P=Object(r.a)(W,1)[0],B=Object(O.useState)(!0),D=Object(r.a)(B,2),F=D[0],M=D[1],V=Object(O.useState)(!1),z=Object(r.a)(V,2),R=z[0],U=z[1],K=Object(O.useState)(localStorage.getItem("gacha-list-update-sort")||"desc"),J=Object(r.a)(K,2),q=J[0],Y=J[1],G=Object(O.useState)(localStorage.getItem("gacha-list-filter-sort-by")||"startAt"),Q=Object(r.a)(G,2),Z=Q[0],H=Q[1],X=Object(O.useState)([]),$=Object(r.a)(X,2),ee=$[0],te=$[1];Object(O.useEffect)((function(){document.title=t("title:virtualLiveList")}),[t]),Object(O.useEffect)((function(){y((function(e){return[].concat(Object(c.a)(e),Object(c.a)(function(e,t,a){return e.slice(a*(t-1),a*t)}(ee,E,P)))})),M(!0)}),[E,P,M,ee]),Object(O.useEffect)((function(){if(N){var e=Object(c.a)(N);"desc"===q?e=e.sort((function(e,t){return t[Z]-e[Z]})):"asc"===q&&(e=e.sort((function(e,t){return e[Z]-t[Z]}))),te(e),y([]),A(0)}}),[A,Z,q,N]),Object(O.useEffect)((function(){U(Boolean(N))}),[U,N]);var ae=Object(O.useCallback)((function(e,t){R&&(e[0].isIntersecting&&F&&(!ee.length||ee.length>E*P)?(A((function(e){return e+1})),M(!1)):ee.length&&ee.length<=E*P&&t(!1))}),[R,F,P,E,ee.length]),ne=Object(O.useCallback)((function(e,t){Y(t),localStorage.setItem("gacha-list-filter-sort-type",t)}),[]),ce=Object(O.useCallback)((function(e,t){H(t),localStorage.setItem("gacha-list-filter-sort-by",t)}),[]);return Object(n.jsxs)(O.Fragment,{children:[Object(n.jsx)(i.a,{variant:"h6",className:e.header,children:t("common:virtualLive")}),Object(n.jsxs)(s.a,{className:e.content,children:[Object(n.jsxs)(o.a,{container:!0,spacing:1,children:[Object(n.jsx)(o.a,{item:!0,children:Object(n.jsxs)(h.a,{value:q,color:"primary",exclusive:!0,onChange:ne,children:[Object(n.jsx)(f.a,{value:"asc",children:"asc"===q?Object(n.jsx)(l.a,{}):Object(n.jsx)(u.a,{})}),Object(n.jsx)(f.a,{value:"desc",children:"desc"===q?Object(n.jsx)(d.a,{}):Object(n.jsx)(b.a,{})})]})}),Object(n.jsx)(o.a,{item:!0,children:Object(n.jsxs)(h.a,{size:"medium",value:Z,color:"primary",exclusive:!0,onChange:ce,children:[Object(n.jsx)(f.a,{value:"id",children:Object(n.jsx)(p.a,{})}),Object(n.jsx)(f.a,{value:"startAt",children:Object(n.jsx)(j.a,{})})]})})]}),Object(n.jsx)("br",{}),Object(n.jsx)(S.a,{ViewComponent:L[w],callback:ae,data:k,gridSize:{agenda:{xs:12}}[w]})]})]})}},291:function(e,t,a){"use strict";a.d(t,"k",(function(){return v})),a.d(t,"e",(function(){return S})),a.d(t,"d",(function(){return k})),a.d(t,"f",(function(){return y})),a.d(t,"h",(function(){return _})),a.d(t,"c",(function(){return C})),a.d(t,"i",(function(){return T})),a.d(t,"b",(function(){return I})),a.d(t,"j",(function(){return E})),a.d(t,"a",(function(){return A})),a.d(t,"g",(function(){return W})),a.d(t,"l",(function(){return L}));var n=a(309),c=a(5),r=a.n(c),i=a(9),s=a(11),o=a(43),l=a.n(o),u=a(0),d=a(319),b=a(318),j=a.n(b),h=a(93),f=a.n(h),m=a(295),p=a(45),O=a(19),g=a(49),x=new d.a;function v(e){var t=Object(u.useState)(e),a=Object(s.a)(t,2),n=a[0],c=a[1],r=Object(u.useRef)(n);return Object(u.useEffect)((function(){r.current=n}),[n]),[n,r,c]}function S(e){var t=Object(u.useCallback)(function(){var e=Object(i.a)(r.a.mark((function e(t){var a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.get("".concat(window.isChinaMainland?"https://sekai-json-1258184166.file.myqcloud.com/master":"https://sekai-world.github.io/sekai-master-db-diff","/").concat(t,".json"));case 2:return a=e.sent,n=a.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[]),a=Object(g.a)(e,t),n=a.data,c=a.error;return[n,!c&&!n,c]}var k={all:"All",vocaloid:p.a.t("unit_profile:piapro.name"),light_music_club:p.a.t("unit_profile:light_sound.name"),idol:p.a.t("unit_profile:idol.name"),school_refusal:p.a.t("unit_profile:school_refusal.name"),theme_park:p.a.t("unit_profile:theme_park.name"),street:p.a.t("unit_profile:street.name"),other:"Other"};function y(e){var t=S("gameCharacters"),a=Object(s.a)(t,1)[0],n=Object(p.c)(),c=n.assetT,r=n.assetI18n;return Object(u.useCallback)((function(t){if(a&&a.length){var n=a.find((function(e){return e.id===t})),i=["zh-CN","zh-TW","ko","ja","id","ms"];if(null===n||void 0===n?void 0:n.firstName)switch(e){case"original":return"".concat(n.firstName," ").concat(n.givenName);case"translated":return i.includes(r.language)?"".concat(c("character_name:".concat(t,".firstName"),n.firstName)," ").concat(c("character_name:".concat(t,".givenName"),n.givenName)):"".concat(c("character_name:".concat(t,".givenName"),n.givenName)," ").concat(c("character_name:".concat(t,".firstName"),n.firstName));case"both":return"".concat(n.firstName," ").concat(n.givenName," | ")+(i.includes(r.language)?"".concat(c("character_name:".concat(t,".firstName"),n.firstName)," ").concat(c("character_name:".concat(t,".givenName"),n.givenName)):"".concat(c("character_name:".concat(t,".givenName"),n.givenName)," ").concat(c("character_name:".concat(t,".firstName"),n.firstName)))}return null===n||void 0===n?void 0:n.givenName}}),[r.language,c,a,e])}function _(){var e=Object(u.useCallback)(function(){var e=Object(i.a)(r.a.mark((function e(t){var a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.get(""+"/".concat(t,".json"));case 2:return a=e.sent,n=a.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[]);return[Object(g.a)("metas",e).data]}var N=new j.a({concurrency:1});function C(e,t){return w.apply(this,arguments)}function w(){return(w=Object(i.a)(r.a.mark((function e(t,a){var n,c,i,s,o,u,d=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=d.length>2&&void 0!==d[2]&&d[2],c=d.length>3&&void 0!==d[3]&&d[3],i=Modernizr.webplossless,s=n?"".concat("https://sekai-assets-1258184166.file.myqcloud.com","/").concat(t):c?"".concat("https://minio.dnaroma.eu","/sekai-assets/").concat(t):"".concat("https://sekai-res.dnaroma.eu","/file/sekai-assets/").concat(t),!t.endsWith(".webp")||i){e.next=25;break}return e.next=7,f.a.getItem(s);case 7:if(o=e.sent){e.next=21;break}return e.next=11,l.a.get(s,{responseType:"arraybuffer"});case 11:return u=e.sent,e.next=14,N.add((function(){return x.decode(new Uint8Array(u.data))}));case 14:return o=e.sent,e.next=17,f.a.setItem(s,o);case 17:case 21:return a&&a(o),e.abrupt("return",o);case 23:e.next=27;break;case 25:return a&&a(s),e.abrupt("return",s);case 27:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(e){var t=S("mobCharacters"),a=Object(s.a)(t,1)[0],c=S("character2ds"),o=Object(s.a)(c,1)[0],d=y(e);return Object(u.useCallback)(function(){var e=Object(i.a)(r.a.mark((function e(t,c){var i,s,u,b,j,h,f,p,O,g,x,v,S,k,y,_,N,w;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i={characters:[],actions:[]},o&&o.length&&a&&a.length&&t){e.next=3;break}return e.abrupt("return",i);case 3:return e.t0=l.a,e.next=6,C(t);case 6:return e.t1=e.sent,e.t2={responseType:"json"},e.next=10,e.t0.get.call(e.t0,e.t1,e.t2);case 10:if(s=e.sent,u=s.data,b=u.ScenarioId,j=u.AppearCharacters,h=u.Snippets,f=u.TalkData,p=u.SpecialEffectData,O=u.SoundData,g=u.FirstBgm,!(x=u.FirstBackground)){e.next=23;break}return e.t3=i.actions,e.t4=m.b.SpecialEffect,e.t5=m.c.WaitUnitilFinished,e.t6=g,e.next=20,C("scenario/background/".concat(x,"_rip/").concat(x,".webp"));case 20:e.t7=e.sent,e.t8={type:e.t4,isWait:e.t5,delay:0,seType:"ChangeBackground",body:e.t6,resource:e.t7},e.t3.push.call(e.t3,e.t8);case 23:if(!g){e.next=33;break}return e.t9=i.actions,e.t10=m.b.Sound,e.t11=m.c.WaitUnitilFinished,e.t12=m.d[0],e.next=30,C("sound/scenario/bgm/".concat(g,"_rip/").concat(g,".mp3"));case 30:e.t13=e.sent,e.t14={type:e.t10,isWait:e.t11,delay:0,playMode:e.t12,hasBgm:!0,hasSe:!1,bgm:e.t13,se:""},e.t9.push.call(e.t9,e.t14);case 33:i.characters=j.map((function(e){var t=o.find((function(t){return t.id===e.Character2dId}));switch(t.characterType){case"game_character":return{id:t.characterId,name:d(t.characterId)};case"mob":return{id:t.characterId,name:a.find((function(e){return e.id===t.characterId})).name}}})),v=Object(n.a)(h),e.prev=35,v.s();case 37:if((S=v.n()).done){e.next=105;break}k=S.value,y={},e.t15=k.Action,e.next=e.t15===m.b.Talk?43:e.t15===m.b.SpecialEffect?45:e.t15===m.b.Sound?76:101;break;case 43:return e.delegateYield(r.a.mark((function e(){var t,a,n,i,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=f[k.ReferenceIndex],a={id:0,name:""},t.TalkCharacters[0].Character2dId&&(n=o.find((function(e){return e.id===t.TalkCharacters[0].Character2dId})),a.id=n.characterId),a.name=t.WindowDisplayName,i=t.Voices.length?"sound/".concat(c?"card_":"","scenario/voice/").concat(b,"_rip/").concat(t.Voices[0].VoiceId,".mp3"):"",t.Voices.length&&t.Voices[0].VoiceId.startsWith("partvoice")&&(s=o.find((function(e){return e.id===t.TalkCharacters[0].Character2dId})),i="sound/scenario/part_voice/".concat(s.assetName,"_").concat(s.unit,"_rip/").concat(t.Voices[0].VoiceId,".mp3")),e.t0=k.Action,e.t1=k.ProgressBehavior===m.c.WaitUnitilFinished,e.t2=k.Delay,e.t3=a,e.t4=t.Body,!t.Voices.length){e.next=17;break}return e.next=14,C(i);case 14:e.t5=e.sent,e.next=18;break;case 17:e.t5="";case 18:e.t6=e.t5,y={type:e.t0,isWait:e.t1,delay:e.t2,chara:e.t3,body:e.t4,voice:e.t6};case 20:case"end":return e.stop()}}),e)}))(),"t16",44);case 44:return e.abrupt("break",102);case 45:if(_=p[k.ReferenceIndex],N=m.e[_.EffectType],e.t17=k.Action,e.t18=k.ProgressBehavior===m.c.WaitUnitilFinished,e.t19=k.Delay,e.t20=N,e.t21=_.StringVal,"FullScreenText"!==N){e.next=58;break}return e.next=55,C("sound/scenario/voice/".concat(b,"_rip/").concat(_.StringValSub,".mp3"));case 55:e.t22=e.sent,e.next=73;break;case 58:if("ChangeBackground"!==N){e.next=64;break}return e.next=61,C("scenario/background/".concat(_.StringValSub,"_rip/").concat(_.StringValSub,".webp"));case 61:e.t23=e.sent,e.next=72;break;case 64:if("Movie"!==N){e.next=70;break}return e.next=67,C("scenario/movie/".concat(_.StringVal,"_rip/").concat(_.StringVal.split("_")[0],".mp4"));case 67:e.t24=e.sent,e.next=71;break;case 70:e.t24="";case 71:e.t23=e.t24;case 72:e.t22=e.t23;case 73:return e.t25=e.t22,y={type:e.t17,isWait:e.t18,delay:e.t19,seType:e.t20,body:e.t21,resource:e.t25},e.abrupt("break",102);case 76:if(w=O[k.ReferenceIndex],e.t26=k.Action,e.t27=k.ProgressBehavior===m.c.WaitUnitilFinished,e.t28=k.Delay,e.t29=m.d[w.PlayMode],e.t30=!!w.Bgm,e.t31=!!w.Se,!w.Bgm){e.next=89;break}return e.next=86,C("sound/scenario/bgm/".concat(w.Bgm,"_rip/").concat(w.Bgm,".mp3"));case 86:e.t32=e.sent,e.next=90;break;case 89:e.t32="";case 90:if(e.t33=e.t32,!w.Se){e.next=97;break}return e.next=94,C("sound/scenario/se/se_pack00001_rip/".concat(w.Se,".mp3"));case 94:e.t34=e.sent,e.next=98;break;case 97:e.t34="";case 98:return e.t35=e.t34,y={type:e.t26,isWait:e.t27,delay:e.t28,playMode:e.t29,hasBgm:e.t30,hasSe:e.t31,bgm:e.t33,se:e.t35},e.abrupt("break",102);case 101:y={type:k.Action,isWait:k.ProgressBehavior===m.c.WaitUnitilFinished,delay:k.Delay};case 102:i.actions.push(y);case 103:e.next=37;break;case 105:e.next=110;break;case 107:e.prev=107,e.t36=e.catch(35),v.e(e.t36);case 110:return e.prev=110,v.f(),e.finish(110);case 113:return e.abrupt("return",i);case 114:case"end":return e.stop()}}),e,null,[[35,107,110,113]])})));return function(t,a){return e.apply(this,arguments)}}(),[o,d,a])}function I(){return(new Date).toLocaleDateString("en-US",{timeZone:"Asia/Tokyo"}).split("/").slice(0,2).join("/")}function E(){var e=Object(O.h)().search;return Object(u.useMemo)((function(){return new URLSearchParams(e)}),[e])}function A(e){for(var t=[],a=0;a<e;a+=1){for(var n="0123456789ABCDEF".split(""),c="#",r=0;r<6;r+=1)c+=n[Math.floor(16*Math.random())];t.push(c)}return t}function W(e,t){var a=Object(u.useState)((function(){try{var a=window.localStorage.getItem(e);return a?JSON.parse(a):t}catch(n){return console.log(n),t}})),n=Object(s.a)(a,2),c=n[0],r=n[1];return[c,function(t){try{var a=t instanceof Function?t(c):t;r(a),window.localStorage.setItem(e,JSON.stringify(a))}catch(n){console.log(n)}}]}function L(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return Object(u.useReducer)((function(e){return!e}),e)}},292:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(198),c=Object(n.a)((function(e){return{header:{fontWeight:"bold"},content:{marginTop:e.spacing(3),marginBottom:e.spacing(3),marginLeft:"auto",marginRight:"auto"},alert:{margin:e.spacing(1,0)},bold:{fontWeight:e.typography.fontWeightBold},capitalize:{textTransform:"capitalize"},tabpanel:{padding:e.spacing("1%",0,0,0)},"grid-out":{padding:e.spacing("1%","0")}}}))},294:function(e,t,a){"use strict";a.d(t,"b",(function(){return b})),a.d(t,"a",(function(){return j})),a.d(t,"c",(function(){return h}));var n=a(11),c=a(1),r=a(26),i=a(54),s=a(281),o=a(0),l=a(37),u=a(291),d=a(45),b=function(e){var t=e.contentKey,a=e.original,n=e.originalProps,u=e.translatedProps,b=e.assetTOptions,j=Object(o.useContext)(l.a).contentTransMode,h=Object(d.c)().assetT;switch(j){case"original":return Object(c.jsx)(i.a,Object(r.a)(Object(r.a)({},n),{},{children:a}));case"translated":return Object(c.jsx)(i.a,Object(r.a)(Object(r.a)({},u),{},{color:"textPrimary",children:h(t,a,b)}));case"both":return Object(c.jsxs)(s.a,{container:!0,direction:"column",children:[Object(c.jsx)(i.a,Object(r.a)(Object(r.a)({},n),{},{color:"textPrimary",children:a})),Object(c.jsx)(i.a,Object(r.a)(Object(r.a)({},u),{},{color:"textSecondary",children:h(t,a,b)}))]})}},j=function(e){var t=e.characterId,a=e.originalProps,b=e.translatedProps,j=e.assetTOptions,h=Object(o.useContext)(l.a).contentTransMode,f=Object(u.e)("gameCharacters"),m=Object(n.a)(f,1)[0],p=Object(d.c)(),O=p.assetT,g=p.assetI18n,x=Object(o.useState)(),v=Object(n.a)(x,2),S=v[0],k=v[1];if(Object(o.useEffect)((function(){m&&k(m.find((function(e){return e.id===t})))}),[m,t]),!S)return Object(c.jsx)(i.a,{});switch(h){case"original":return Object(c.jsxs)(i.a,Object(r.a)(Object(r.a)({},a),{},{color:"textPrimary",children:[S.firstName," ",S.givenName]}));case"translated":return["zh-CN","zh-TW","ko","ja"].includes(g.language)?Object(c.jsxs)(i.a,Object(r.a)(Object(r.a)({},b),{},{color:"textPrimary",children:[S.firstName?O("character_name:".concat(t,".firstName"),S.firstName,j):""," ",O("character_name:".concat(t,".givenName"),S.givenName,j)]})):Object(c.jsxs)(i.a,{children:[O("character_name:".concat(t,".givenName"),S.givenName,j)," ",S.firstName?O("character_name:".concat(t,".firstName"),S.firstName,j):""]});case"both":return Object(c.jsxs)(s.a,{container:!0,direction:"column",children:[Object(c.jsxs)(i.a,Object(r.a)(Object(r.a)({},a),{},{children:[S.firstName," ",S.givenName]})),["zh-CN","zh-TW","ko","ja"].includes(g.language)?Object(c.jsxs)(i.a,Object(r.a)(Object(r.a)({color:"textSecondary"},b),{},{children:[S.firstName?O("character_name:".concat(t,".firstName"),S.firstName,j):""," ",O("character_name:".concat(t,".givenName"),S.givenName,j)]})):Object(c.jsxs)(i.a,Object(r.a)(Object(r.a)({color:"textSecondary"},b),{},{children:[O("character_name:".concat(t,".givenName"),S.givenName,j)," ",S.firstName?O("character_name:".concat(t,".firstName"),S.firstName,j):""]}))]})}},h=function(e){var t=e.releaseCondId,a=e.originalProps,r=e.translatedProps,i=e.assetTOptions,s=Object(u.e)("releaseConditions"),l=Object(n.a)(s,1)[0],d=Object(o.useState)(),j=Object(n.a)(d,2),h=j[0],f=j[1];if(Object(o.useEffect)((function(){l&&f(l.find((function(e){return e.id===t})))}),[t,l]),h){var m="";switch(h.releaseConditionType){case"none":m="release_cond:none_".concat(h.id);break;case"card_level":m="release_cond:card_level",i=Object.assign({},i,{level:h.releaseConditionTypeLevel});break;case"unit_rank":m="release_cond:unit_rank_".concat(h.releaseConditionTypeId),i=Object.assign({},i,{rank:h.releaseConditionTypeLevel});break;case"event_point":m="release_cond:event_point",i=Object.assign({},i,{point:h.releaseConditionTypeQuantity});break;default:m="release_cond:".concat(h.releaseConditionType)}return Object(c.jsx)(b,{contentKey:m,original:h.sentence,originalProps:a,translatedProps:r,assetTOptions:i})}return Object(c.jsx)("div",{})}},295:function(e,t,a){"use strict";var n,c,r,i,s;a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return c})),a.d(t,"e",(function(){return r})),a.d(t,"d",(function(){return i})),a.d(t,"a",(function(){return s})),function(e){e[e.None=0]="None",e[e.Talk=1]="Talk",e[e.CharacerLayout=2]="CharacerLayout",e[e.InputName=3]="InputName",e[e.CharacterMotion=4]="CharacterMotion",e[e.Selectable=5]="Selectable",e[e.SpecialEffect=6]="SpecialEffect",e[e.Sound=7]="Sound"}(n||(n={})),function(e){e[e.Now=0]="Now",e[e.WaitUnitilFinished=1]="WaitUnitilFinished"}(c||(c={})),function(e){e[e.None=0]="None",e[e.BlackIn=1]="BlackIn",e[e.BlackOut=2]="BlackOut",e[e.WhiteIn=3]="WhiteIn",e[e.WhiteOut=4]="WhiteOut",e[e.ShakeScreen=5]="ShakeScreen",e[e.ShakeWindow=6]="ShakeWindow",e[e.ChangeBackground=7]="ChangeBackground",e[e.Telop=8]="Telop",e[e.FlashbackIn=9]="FlashbackIn",e[e.FlashbackOut=10]="FlashbackOut",e[e.ChangeCardStill=11]="ChangeCardStill",e[e.AmbientColorNormal=12]="AmbientColorNormal",e[e.AmbientColorEvening=13]="AmbientColorEvening",e[e.AmbientColorNight=14]="AmbientColorNight",e[e.PlayScenarioEffect=15]="PlayScenarioEffect",e[e.StopScenarioEffect=16]="StopScenarioEffect",e[e.ChangeBackgroundStill=17]="ChangeBackgroundStill",e[e.PlaceInfo=18]="PlaceInfo",e[e.Movie=19]="Movie",e[e.SekaiIn=20]="SekaiIn",e[e.SekaiOut=21]="SekaiOut",e[e.AttachCharacterShader=22]="AttachCharacterShader",e[e.SimpleSelectable=23]="SimpleSelectable",e[e.FullScreenText=24]="FullScreenText",e[e.StopShakeScreen=25]="StopShakeScreen",e[e.StopShakeWindow=26]="StopShakeWindow"}(r||(r={})),function(e){e[e.CrossFade=0]="CrossFade",e[e.Stack=1]="Stack",e[e.SpecialSePlay=2]="SpecialSePlay",e[e.Stop=3]="Stop"}(i||(i={})),function(e){e.PLAY_LIVE="play_live",e.WAITING_ROOM="waiting_room",e.COLLECT_COSTUME_3D="collect_costume_3d",e.COLLECT_STAMP="collect_stamp",e.READ_AREA_TALK="read_area_talk",e.SKILL_LEVEL_UP="skill_level_up",e.MASTER_RANK="master_rank",e.READ_CARD_EPISODE_FIRST="read_card_episode_first",e.READ_CARD_EPISODE_SECOND="read_card_episode_second"}(s||(s={}))},312:function(e,t,a){"use strict";var n=a(1),c=a(11),r=a(26),i=a(20),s=a(246),o=a(281),l=a(0),u=["xs","sm","md","lg","xl"],d={xs:12,md:4};t.a=function(e){var t=e.ViewComponent,a=e.callback,b=e.data,j=e.gridSize,h=e.viewProps,f=e.onComponentClick,m=function(e){var t=Object(r.a)({},e||d);return u.forEach((function(e,a,n){t[e]||(t[e]=a>0?t[n[a-1]]:12)})),t}(j),p=function(){var e=Object(i.a)();return u.map((function(t){return Object(s.a)(e.breakpoints.down(t))&&t})).find(Boolean)||u[u.length-1]}(),O=Object(l.useState)(!0),g=Object(c.a)(O,2),x=g[0],v=g[1],S=Object(l.useCallback)((function(e){return a(e,v)}),[a]),k=Object(l.useRef)(null);Object(l.useEffect)((function(){v(!0)}),[b]),Object(l.useEffect)((function(){var e=new IntersectionObserver(S,{threshold:.5}),t=k.current;return t&&e.observe(t),function(){t&&e.disconnect()}}),[S]);var y=12/m[p],_=b.length?y:2*y;return Object(n.jsxs)(l.Fragment,{children:[Object(n.jsx)(o.a,{container:!0,direction:"row",spacing:1,children:b.length?b.map((function(e,a){return Object(n.jsx)(o.a,{item:!0,xs:m.xs,sm:m.sm,md:m.md,lg:m.lg,xl:m.xl,onClick:function(){f&&f(e)},children:Object(n.jsx)(t,Object(r.a)({data:e,index:a},h))},e.id)})):null}),Object(n.jsx)(o.a,{container:!0,direction:"row",ref:k,style:{display:x?"flex":"none",paddingTop:"4px"},spacing:1,children:Array.from({length:_}).map((function(e,a){return Object(n.jsx)(o.a,{item:!0,xs:m.xs,sm:m.sm,md:m.md,lg:m.lg,xl:m.xl,children:Object(n.jsx)(t,{})},"empty-".concat(a))}))})]})}},347:function(e,t,a){"use strict";var n=a(1),c=a(341),r=a(466),i=(a(0),a(188));t.a=function(e){var t=e.releaseTime,a=e.style,s=Object(i.a)().t;return new Date<t?Object(n.jsx)(c.a,{style:a,color:"secondary",label:s("common:spoiler"),icon:Object(n.jsx)(r.a,{})}):null}},440:function(e,t,a){"use strict";var n=a(0),c=a(12);t.a=Object(c.a)(n.createElement("path",{d:"M21 10.12h-6.78l2.74-2.82c-2.73-2.7-7.15-2.8-9.88-.1-2.73 2.71-2.73 7.08 0 9.79s7.15 2.71 9.88 0C18.32 15.65 19 14.08 19 12.1h2c0 1.98-.88 4.55-2.64 6.29-3.51 3.48-9.21 3.48-12.72 0-3.5-3.47-3.53-9.11-.02-12.58s9.14-3.47 12.65 0L21 3v7.12zM12.5 8v4.25l3.5 2.08-.72 1.21L11 13V8h1.5z"}),"Update")},466:function(e,t,a){"use strict";var n=a(0),c=a(12);t.a=Object(c.a)(n.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"}),"Error")}}]);