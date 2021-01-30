(this["webpackJsonpsekai-viewer"]=this["webpackJsonpsekai-viewer"]||[]).push([[39],{1097:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(29),c=a(11),o=a(54),i=a(280),s=a(281),l=a(236),d=a(416),u=a(1081),b=a(279),m=a(0),p=a(188),f=a(292),h=a(295),g=a(291),j=a(294),O=a(312),v=a(198),x=a(330),y=a(353),k=a(341),S=a(282),C=a(37),N=Object(v.a)((function(e){return{media:{paddingTop:"5%",backgroundSize:"contain"},card:{cursor:"pointer"},header:{},"grid-out":{padding:e.spacing("1%","2%")}}})),_={grid:function(e){var t=e.data,a=N(),r=Object(m.useContext)(C.a).contentTransMode,c=Object(g.f)(r);return t?Object(n.jsx)(m.Fragment,{children:Object(n.jsx)(x.a,{className:a.card,children:Object(n.jsx)(s.a,{container:!0,alignItems:"center",children:Object(n.jsx)(s.a,{item:!0,xs:12,children:Object(n.jsx)(y.a,{style:{paddingBottom:"16px"},children:Object(n.jsxs)(s.a,{container:!0,spacing:1,alignItems:"center",children:[Object(n.jsx)(s.a,{item:!0,xs:2,container:!0,justify:"center",children:Object(n.jsx)(k.a,{label:t.seq})}),Object(n.jsx)(s.a,{item:!0,xs:10,children:Object(n.jsx)(j.b,{contentKey:"character_mission:".concat(t.characterMissionType),original:t.sentence,originalProps:{variant:"subtitle1",className:a.header},translatedProps:{variant:"subtitle1",className:a.header},assetTOptions:{name:c(t.characterId),count:t.requirement}})})]})})})})})}):Object(n.jsx)(x.a,{className:a.card,children:Object(n.jsx)(y.a,{children:Object(n.jsx)(o.a,{variant:"subtitle1",className:a.header,children:Object(n.jsx)(S.a,{variant:"text",width:"90%"})})})})}};t.default=function(){var e=Object(f.a)(),t=Object(p.a)().t,a=Object(g.e)("characterMissions"),v=Object(c.a)(a,1)[0],x=Object(g.e)("characterProfiles"),y=Object(c.a)(x,1)[0],k=Object(m.useState)([]),S=Object(c.a)(k,2),C=S[0],N=S[1],I=Object(m.useState)(1),w=Object(c.a)(I,2),T=w[0],E=w[1],P=Object(m.useState)("play_live"),R=Object(c.a)(P,2),W=R[0],A=R[1],D=Object(m.useState)(localStorage.getItem("event-list-grid-view-type")||"grid"),L=Object(c.a)(D,1)[0],B=Object(m.useState)(1),F=Object(c.a)(B,2),M=F[0],$=F[1],z=Object(m.useState)(12),V=Object(c.a)(z,1)[0],U=Object(m.useState)(!0),K=Object(c.a)(U,2),q=K[0],J=K[1],H=Object(m.useState)(!1),Y=Object(c.a)(H,2),G=Y[0],Q=Y[1],Z=Object(m.useState)([]),X=Object(c.a)(Z,2),ee=X[0],te=X[1];Object(m.useEffect)((function(){document.title=t("title:characterMissionList")}),[t]),Object(m.useEffect)((function(){if(v&&v.length){var e=Object(r.a)(v);e=(e=e.filter((function(e){return e.characterId===T}))).filter((function(e){return e.characterMissionType===W})),te(e),N([]),$(0)}}),[v,$,te,W,T]),Object(m.useEffect)((function(){N((function(e){return[].concat(Object(r.a)(e),Object(r.a)(function(e,t,a){return e.slice(a*(t-1),a*t)}(ee,M,V)))})),J(!0)}),[M,V,J,ee]),Object(m.useEffect)((function(){Q(Boolean(v&&v.length))}),[Q,v]);var ae=Object(m.useCallback)((function(e,t){G&&(e[0].isIntersecting&&q&&(!ee.length||ee.length>M*V)?($((function(e){return e+1})),J(!1)):ee.length&&ee.length<=M*V&&t(!1))}),[G,q,V,M,ee.length]);return Object(n.jsxs)(m.Fragment,{children:[Object(n.jsxs)(o.a,{variant:"h6",className:e.header,children:[t("common:mission.main")," - ",t("common:character")]}),Object(n.jsx)(i.a,{className:e.content,maxWidth:"md",children:Object(n.jsxs)(s.a,{container:!0,spacing:1,justify:"center",children:[y&&y.length?Object(n.jsx)(m.Fragment,{children:Object(n.jsx)(s.a,{item:!0,xs:12,md:4,children:Object(n.jsxs)(l.a,{style:{width:"100%"},children:[Object(n.jsx)(d.a,{id:"select-chara-name",children:t("mission:select.charaName")}),Object(n.jsx)(u.a,{labelId:"select-chara-name",value:T,onChange:function(e){E(e.target.value)},children:y.map((function(e){return Object(n.jsx)(b.a,{value:e.characterId,children:Object(n.jsx)(j.a,{characterId:e.characterId})},e.characterId)}))})]})})}):null,Object.values(h.a).length?Object(n.jsx)(m.Fragment,{children:Object(n.jsx)(s.a,{item:!0,xs:12,md:4,children:Object(n.jsxs)(l.a,{style:{width:"100%"},children:[Object(n.jsx)(d.a,{id:"select-chara-name",children:t("mission:type.caption")}),Object(n.jsx)(u.a,{labelId:"select-mission-type",value:W,onChange:function(e){A(e.target.value)},children:Object.values(h.a).map((function(e){return Object(n.jsx)(b.a,{value:e,children:Object(n.jsx)(o.a,{children:t("mission:type.".concat(e))})},e)}))})]})})}):null]})}),Object(n.jsx)(i.a,{className:e.content,maxWidth:"sm",children:Object(n.jsx)(O.a,{ViewComponent:_[L],callback:ae,data:C,gridSize:{grid:{xs:12},agenda:{xs:12},comfy:{xs:12}}[L]})})]})}},291:function(e,t,a){"use strict";a.d(t,"k",(function(){return x})),a.d(t,"e",(function(){return y})),a.d(t,"d",(function(){return k})),a.d(t,"f",(function(){return S})),a.d(t,"h",(function(){return C})),a.d(t,"c",(function(){return _})),a.d(t,"i",(function(){return w})),a.d(t,"b",(function(){return T})),a.d(t,"j",(function(){return E})),a.d(t,"a",(function(){return P})),a.d(t,"g",(function(){return R})),a.d(t,"l",(function(){return W}));var n=a(309),r=a(5),c=a.n(r),o=a(9),i=a(11),s=a(43),l=a.n(s),d=a(0),u=a(319),b=a(318),m=a.n(b),p=a(93),f=a.n(p),h=a(295),g=a(45),j=a(19),O=a(49),v=new u.a;function x(e){var t=Object(d.useState)(e),a=Object(i.a)(t,2),n=a[0],r=a[1],c=Object(d.useRef)(n);return Object(d.useEffect)((function(){c.current=n}),[n]),[n,c,r]}function y(e){var t=Object(d.useCallback)(function(){var e=Object(o.a)(c.a.mark((function e(t){var a,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.get("".concat(window.isChinaMainland?"https://sekai-json-1258184166.file.myqcloud.com/master":"https://sekai-world.github.io/sekai-master-db-diff","/").concat(t,".json"));case 2:return a=e.sent,n=a.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[]),a=Object(O.a)(e,t),n=a.data,r=a.error;return[n,!r&&!n,r]}var k={all:"All",vocaloid:g.a.t("unit_profile:piapro.name"),light_music_club:g.a.t("unit_profile:light_sound.name"),idol:g.a.t("unit_profile:idol.name"),school_refusal:g.a.t("unit_profile:school_refusal.name"),theme_park:g.a.t("unit_profile:theme_park.name"),street:g.a.t("unit_profile:street.name"),other:"Other"};function S(e){var t=y("gameCharacters"),a=Object(i.a)(t,1)[0],n=Object(g.c)(),r=n.assetT,c=n.assetI18n;return Object(d.useCallback)((function(t){if(a&&a.length){var n=a.find((function(e){return e.id===t})),o=["zh-CN","zh-TW","ko","ja","id","ms"];if(null===n||void 0===n?void 0:n.firstName)switch(e){case"original":return"".concat(n.firstName," ").concat(n.givenName);case"translated":return o.includes(c.language)?"".concat(r("character_name:".concat(t,".firstName"),n.firstName)," ").concat(r("character_name:".concat(t,".givenName"),n.givenName)):"".concat(r("character_name:".concat(t,".givenName"),n.givenName)," ").concat(r("character_name:".concat(t,".firstName"),n.firstName));case"both":return"".concat(n.firstName," ").concat(n.givenName," | ")+(o.includes(c.language)?"".concat(r("character_name:".concat(t,".firstName"),n.firstName)," ").concat(r("character_name:".concat(t,".givenName"),n.givenName)):"".concat(r("character_name:".concat(t,".givenName"),n.givenName)," ").concat(r("character_name:".concat(t,".firstName"),n.firstName)))}return null===n||void 0===n?void 0:n.givenName}}),[c.language,r,a,e])}function C(){var e=Object(d.useCallback)(function(){var e=Object(o.a)(c.a.mark((function e(t){var a,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.get(""+"/".concat(t,".json"));case 2:return a=e.sent,n=a.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[]);return[Object(O.a)("metas",e).data]}var N=new m.a({concurrency:1});function _(e,t){return I.apply(this,arguments)}function I(){return(I=Object(o.a)(c.a.mark((function e(t,a){var n,r,o,i,s,d,u=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=u.length>2&&void 0!==u[2]&&u[2],r=u.length>3&&void 0!==u[3]&&u[3],o=Modernizr.webplossless,i=n?"".concat("https://sekai-assets-1258184166.file.myqcloud.com","/").concat(t):r?"".concat("https://minio.dnaroma.eu","/sekai-assets/").concat(t):"".concat("https://sekai-res.dnaroma.eu","/file/sekai-assets/").concat(t),!t.endsWith(".webp")||o){e.next=25;break}return e.next=7,f.a.getItem(i);case 7:if(s=e.sent){e.next=21;break}return e.next=11,l.a.get(i,{responseType:"arraybuffer"});case 11:return d=e.sent,e.next=14,N.add((function(){return v.decode(new Uint8Array(d.data))}));case 14:return s=e.sent,e.next=17,f.a.setItem(i,s);case 17:case 21:return a&&a(s),e.abrupt("return",s);case 23:e.next=27;break;case 25:return a&&a(i),e.abrupt("return",i);case 27:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(e){var t=y("mobCharacters"),a=Object(i.a)(t,1)[0],r=y("character2ds"),s=Object(i.a)(r,1)[0],u=S(e);return Object(d.useCallback)(function(){var e=Object(o.a)(c.a.mark((function e(t,r){var o,i,d,b,m,p,f,g,j,O,v,x,y,k,S,C,N,I;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o={characters:[],actions:[]},s&&s.length&&a&&a.length&&t){e.next=3;break}return e.abrupt("return",o);case 3:return e.t0=l.a,e.next=6,_(t);case 6:return e.t1=e.sent,e.t2={responseType:"json"},e.next=10,e.t0.get.call(e.t0,e.t1,e.t2);case 10:if(i=e.sent,d=i.data,b=d.ScenarioId,m=d.AppearCharacters,p=d.Snippets,f=d.TalkData,g=d.SpecialEffectData,j=d.SoundData,O=d.FirstBgm,!(v=d.FirstBackground)){e.next=23;break}return e.t3=o.actions,e.t4=h.b.SpecialEffect,e.t5=h.c.WaitUnitilFinished,e.t6=O,e.next=20,_("scenario/background/".concat(v,"_rip/").concat(v,".webp"));case 20:e.t7=e.sent,e.t8={type:e.t4,isWait:e.t5,delay:0,seType:"ChangeBackground",body:e.t6,resource:e.t7},e.t3.push.call(e.t3,e.t8);case 23:if(!O){e.next=33;break}return e.t9=o.actions,e.t10=h.b.Sound,e.t11=h.c.WaitUnitilFinished,e.t12=h.d[0],e.next=30,_("sound/scenario/bgm/".concat(O,"_rip/").concat(O,".mp3"));case 30:e.t13=e.sent,e.t14={type:e.t10,isWait:e.t11,delay:0,playMode:e.t12,hasBgm:!0,hasSe:!1,bgm:e.t13,se:""},e.t9.push.call(e.t9,e.t14);case 33:o.characters=m.map((function(e){var t=s.find((function(t){return t.id===e.Character2dId}));switch(t.characterType){case"game_character":return{id:t.characterId,name:u(t.characterId)};case"mob":return{id:t.characterId,name:a.find((function(e){return e.id===t.characterId})).name}}})),x=Object(n.a)(p),e.prev=35,x.s();case 37:if((y=x.n()).done){e.next=105;break}k=y.value,S={},e.t15=k.Action,e.next=e.t15===h.b.Talk?43:e.t15===h.b.SpecialEffect?45:e.t15===h.b.Sound?76:101;break;case 43:return e.delegateYield(c.a.mark((function e(){var t,a,n,o,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=f[k.ReferenceIndex],a={id:0,name:""},t.TalkCharacters[0].Character2dId&&(n=s.find((function(e){return e.id===t.TalkCharacters[0].Character2dId})),a.id=n.characterId),a.name=t.WindowDisplayName,o=t.Voices.length?"sound/".concat(r?"card_":"","scenario/voice/").concat(b,"_rip/").concat(t.Voices[0].VoiceId,".mp3"):"",t.Voices.length&&t.Voices[0].VoiceId.startsWith("partvoice")&&(i=s.find((function(e){return e.id===t.TalkCharacters[0].Character2dId})),o="sound/scenario/part_voice/".concat(i.assetName,"_").concat(i.unit,"_rip/").concat(t.Voices[0].VoiceId,".mp3")),e.t0=k.Action,e.t1=k.ProgressBehavior===h.c.WaitUnitilFinished,e.t2=k.Delay,e.t3=a,e.t4=t.Body,!t.Voices.length){e.next=17;break}return e.next=14,_(o);case 14:e.t5=e.sent,e.next=18;break;case 17:e.t5="";case 18:e.t6=e.t5,S={type:e.t0,isWait:e.t1,delay:e.t2,chara:e.t3,body:e.t4,voice:e.t6};case 20:case"end":return e.stop()}}),e)}))(),"t16",44);case 44:return e.abrupt("break",102);case 45:if(C=g[k.ReferenceIndex],N=h.e[C.EffectType],e.t17=k.Action,e.t18=k.ProgressBehavior===h.c.WaitUnitilFinished,e.t19=k.Delay,e.t20=N,e.t21=C.StringVal,"FullScreenText"!==N){e.next=58;break}return e.next=55,_("sound/scenario/voice/".concat(b,"_rip/").concat(C.StringValSub,".mp3"));case 55:e.t22=e.sent,e.next=73;break;case 58:if("ChangeBackground"!==N){e.next=64;break}return e.next=61,_("scenario/background/".concat(C.StringValSub,"_rip/").concat(C.StringValSub,".webp"));case 61:e.t23=e.sent,e.next=72;break;case 64:if("Movie"!==N){e.next=70;break}return e.next=67,_("scenario/movie/".concat(C.StringVal,"_rip/").concat(C.StringVal.split("_")[0],".mp4"));case 67:e.t24=e.sent,e.next=71;break;case 70:e.t24="";case 71:e.t23=e.t24;case 72:e.t22=e.t23;case 73:return e.t25=e.t22,S={type:e.t17,isWait:e.t18,delay:e.t19,seType:e.t20,body:e.t21,resource:e.t25},e.abrupt("break",102);case 76:if(I=j[k.ReferenceIndex],e.t26=k.Action,e.t27=k.ProgressBehavior===h.c.WaitUnitilFinished,e.t28=k.Delay,e.t29=h.d[I.PlayMode],e.t30=!!I.Bgm,e.t31=!!I.Se,!I.Bgm){e.next=89;break}return e.next=86,_("sound/scenario/bgm/".concat(I.Bgm,"_rip/").concat(I.Bgm,".mp3"));case 86:e.t32=e.sent,e.next=90;break;case 89:e.t32="";case 90:if(e.t33=e.t32,!I.Se){e.next=97;break}return e.next=94,_("sound/scenario/se/se_pack00001_rip/".concat(I.Se,".mp3"));case 94:e.t34=e.sent,e.next=98;break;case 97:e.t34="";case 98:return e.t35=e.t34,S={type:e.t26,isWait:e.t27,delay:e.t28,playMode:e.t29,hasBgm:e.t30,hasSe:e.t31,bgm:e.t33,se:e.t35},e.abrupt("break",102);case 101:S={type:k.Action,isWait:k.ProgressBehavior===h.c.WaitUnitilFinished,delay:k.Delay};case 102:o.actions.push(S);case 103:e.next=37;break;case 105:e.next=110;break;case 107:e.prev=107,e.t36=e.catch(35),x.e(e.t36);case 110:return e.prev=110,x.f(),e.finish(110);case 113:return e.abrupt("return",o);case 114:case"end":return e.stop()}}),e,null,[[35,107,110,113]])})));return function(t,a){return e.apply(this,arguments)}}(),[s,u,a])}function T(){return(new Date).toLocaleDateString("en-US",{timeZone:"Asia/Tokyo"}).split("/").slice(0,2).join("/")}function E(){var e=Object(j.h)().search;return Object(d.useMemo)((function(){return new URLSearchParams(e)}),[e])}function P(e){for(var t=[],a=0;a<e;a+=1){for(var n="0123456789ABCDEF".split(""),r="#",c=0;c<6;c+=1)r+=n[Math.floor(16*Math.random())];t.push(r)}return t}function R(e,t){var a=Object(d.useState)((function(){try{var a=window.localStorage.getItem(e);return a?JSON.parse(a):t}catch(n){return console.log(n),t}})),n=Object(i.a)(a,2),r=n[0],c=n[1];return[r,function(t){try{var a=t instanceof Function?t(r):t;c(a),window.localStorage.setItem(e,JSON.stringify(a))}catch(n){console.log(n)}}]}function W(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return Object(d.useReducer)((function(e){return!e}),e)}},292:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(198),r=Object(n.a)((function(e){return{header:{fontWeight:"bold"},content:{marginTop:e.spacing(3),marginBottom:e.spacing(3),marginLeft:"auto",marginRight:"auto"},alert:{margin:e.spacing(1,0)},bold:{fontWeight:e.typography.fontWeightBold},capitalize:{textTransform:"capitalize"},tabpanel:{padding:e.spacing("1%",0,0,0)},"grid-out":{padding:e.spacing("1%","0")}}}))},294:function(e,t,a){"use strict";a.d(t,"b",(function(){return b})),a.d(t,"a",(function(){return m})),a.d(t,"c",(function(){return p}));var n=a(11),r=a(1),c=a(26),o=a(54),i=a(281),s=a(0),l=a(37),d=a(291),u=a(45),b=function(e){var t=e.contentKey,a=e.original,n=e.originalProps,d=e.translatedProps,b=e.assetTOptions,m=Object(s.useContext)(l.a).contentTransMode,p=Object(u.c)().assetT;switch(m){case"original":return Object(r.jsx)(o.a,Object(c.a)(Object(c.a)({},n),{},{children:a}));case"translated":return Object(r.jsx)(o.a,Object(c.a)(Object(c.a)({},d),{},{color:"textPrimary",children:p(t,a,b)}));case"both":return Object(r.jsxs)(i.a,{container:!0,direction:"column",children:[Object(r.jsx)(o.a,Object(c.a)(Object(c.a)({},n),{},{color:"textPrimary",children:a})),Object(r.jsx)(o.a,Object(c.a)(Object(c.a)({},d),{},{color:"textSecondary",children:p(t,a,b)}))]})}},m=function(e){var t=e.characterId,a=e.originalProps,b=e.translatedProps,m=e.assetTOptions,p=Object(s.useContext)(l.a).contentTransMode,f=Object(d.e)("gameCharacters"),h=Object(n.a)(f,1)[0],g=Object(u.c)(),j=g.assetT,O=g.assetI18n,v=Object(s.useState)(),x=Object(n.a)(v,2),y=x[0],k=x[1];if(Object(s.useEffect)((function(){h&&k(h.find((function(e){return e.id===t})))}),[h,t]),!y)return Object(r.jsx)(o.a,{});switch(p){case"original":return Object(r.jsxs)(o.a,Object(c.a)(Object(c.a)({},a),{},{color:"textPrimary",children:[y.firstName," ",y.givenName]}));case"translated":return["zh-CN","zh-TW","ko","ja"].includes(O.language)?Object(r.jsxs)(o.a,Object(c.a)(Object(c.a)({},b),{},{color:"textPrimary",children:[y.firstName?j("character_name:".concat(t,".firstName"),y.firstName,m):""," ",j("character_name:".concat(t,".givenName"),y.givenName,m)]})):Object(r.jsxs)(o.a,{children:[j("character_name:".concat(t,".givenName"),y.givenName,m)," ",y.firstName?j("character_name:".concat(t,".firstName"),y.firstName,m):""]});case"both":return Object(r.jsxs)(i.a,{container:!0,direction:"column",children:[Object(r.jsxs)(o.a,Object(c.a)(Object(c.a)({},a),{},{children:[y.firstName," ",y.givenName]})),["zh-CN","zh-TW","ko","ja"].includes(O.language)?Object(r.jsxs)(o.a,Object(c.a)(Object(c.a)({color:"textSecondary"},b),{},{children:[y.firstName?j("character_name:".concat(t,".firstName"),y.firstName,m):""," ",j("character_name:".concat(t,".givenName"),y.givenName,m)]})):Object(r.jsxs)(o.a,Object(c.a)(Object(c.a)({color:"textSecondary"},b),{},{children:[j("character_name:".concat(t,".givenName"),y.givenName,m)," ",y.firstName?j("character_name:".concat(t,".firstName"),y.firstName,m):""]}))]})}},p=function(e){var t=e.releaseCondId,a=e.originalProps,c=e.translatedProps,o=e.assetTOptions,i=Object(d.e)("releaseConditions"),l=Object(n.a)(i,1)[0],u=Object(s.useState)(),m=Object(n.a)(u,2),p=m[0],f=m[1];if(Object(s.useEffect)((function(){l&&f(l.find((function(e){return e.id===t})))}),[t,l]),p){var h="";switch(p.releaseConditionType){case"none":h="release_cond:none_".concat(p.id);break;case"card_level":h="release_cond:card_level",o=Object.assign({},o,{level:p.releaseConditionTypeLevel});break;case"unit_rank":h="release_cond:unit_rank_".concat(p.releaseConditionTypeId),o=Object.assign({},o,{rank:p.releaseConditionTypeLevel});break;case"event_point":h="release_cond:event_point",o=Object.assign({},o,{point:p.releaseConditionTypeQuantity});break;default:h="release_cond:".concat(p.releaseConditionType)}return Object(r.jsx)(b,{contentKey:h,original:p.sentence,originalProps:a,translatedProps:c,assetTOptions:o})}return Object(r.jsx)("div",{})}},295:function(e,t,a){"use strict";var n,r,c,o,i;a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return r})),a.d(t,"e",(function(){return c})),a.d(t,"d",(function(){return o})),a.d(t,"a",(function(){return i})),function(e){e[e.None=0]="None",e[e.Talk=1]="Talk",e[e.CharacerLayout=2]="CharacerLayout",e[e.InputName=3]="InputName",e[e.CharacterMotion=4]="CharacterMotion",e[e.Selectable=5]="Selectable",e[e.SpecialEffect=6]="SpecialEffect",e[e.Sound=7]="Sound"}(n||(n={})),function(e){e[e.Now=0]="Now",e[e.WaitUnitilFinished=1]="WaitUnitilFinished"}(r||(r={})),function(e){e[e.None=0]="None",e[e.BlackIn=1]="BlackIn",e[e.BlackOut=2]="BlackOut",e[e.WhiteIn=3]="WhiteIn",e[e.WhiteOut=4]="WhiteOut",e[e.ShakeScreen=5]="ShakeScreen",e[e.ShakeWindow=6]="ShakeWindow",e[e.ChangeBackground=7]="ChangeBackground",e[e.Telop=8]="Telop",e[e.FlashbackIn=9]="FlashbackIn",e[e.FlashbackOut=10]="FlashbackOut",e[e.ChangeCardStill=11]="ChangeCardStill",e[e.AmbientColorNormal=12]="AmbientColorNormal",e[e.AmbientColorEvening=13]="AmbientColorEvening",e[e.AmbientColorNight=14]="AmbientColorNight",e[e.PlayScenarioEffect=15]="PlayScenarioEffect",e[e.StopScenarioEffect=16]="StopScenarioEffect",e[e.ChangeBackgroundStill=17]="ChangeBackgroundStill",e[e.PlaceInfo=18]="PlaceInfo",e[e.Movie=19]="Movie",e[e.SekaiIn=20]="SekaiIn",e[e.SekaiOut=21]="SekaiOut",e[e.AttachCharacterShader=22]="AttachCharacterShader",e[e.SimpleSelectable=23]="SimpleSelectable",e[e.FullScreenText=24]="FullScreenText",e[e.StopShakeScreen=25]="StopShakeScreen",e[e.StopShakeWindow=26]="StopShakeWindow"}(c||(c={})),function(e){e[e.CrossFade=0]="CrossFade",e[e.Stack=1]="Stack",e[e.SpecialSePlay=2]="SpecialSePlay",e[e.Stop=3]="Stop"}(o||(o={})),function(e){e.PLAY_LIVE="play_live",e.WAITING_ROOM="waiting_room",e.COLLECT_COSTUME_3D="collect_costume_3d",e.COLLECT_STAMP="collect_stamp",e.READ_AREA_TALK="read_area_talk",e.SKILL_LEVEL_UP="skill_level_up",e.MASTER_RANK="master_rank",e.READ_CARD_EPISODE_FIRST="read_card_episode_first",e.READ_CARD_EPISODE_SECOND="read_card_episode_second"}(i||(i={}))},312:function(e,t,a){"use strict";var n=a(1),r=a(11),c=a(26),o=a(20),i=a(246),s=a(281),l=a(0),d=["xs","sm","md","lg","xl"],u={xs:12,md:4};t.a=function(e){var t=e.ViewComponent,a=e.callback,b=e.data,m=e.gridSize,p=e.viewProps,f=e.onComponentClick,h=function(e){var t=Object(c.a)({},e||u);return d.forEach((function(e,a,n){t[e]||(t[e]=a>0?t[n[a-1]]:12)})),t}(m),g=function(){var e=Object(o.a)();return d.map((function(t){return Object(i.a)(e.breakpoints.down(t))&&t})).find(Boolean)||d[d.length-1]}(),j=Object(l.useState)(!0),O=Object(r.a)(j,2),v=O[0],x=O[1],y=Object(l.useCallback)((function(e){return a(e,x)}),[a]),k=Object(l.useRef)(null);Object(l.useEffect)((function(){x(!0)}),[b]),Object(l.useEffect)((function(){var e=new IntersectionObserver(y,{threshold:.5}),t=k.current;return t&&e.observe(t),function(){t&&e.disconnect()}}),[y]);var S=12/h[g],C=b.length?S:2*S;return Object(n.jsxs)(l.Fragment,{children:[Object(n.jsx)(s.a,{container:!0,direction:"row",spacing:1,children:b.length?b.map((function(e,a){return Object(n.jsx)(s.a,{item:!0,xs:h.xs,sm:h.sm,md:h.md,lg:h.lg,xl:h.xl,onClick:function(){f&&f(e)},children:Object(n.jsx)(t,Object(c.a)({data:e,index:a},p))},e.id)})):null}),Object(n.jsx)(s.a,{container:!0,direction:"row",ref:k,style:{display:v?"flex":"none",paddingTop:"4px"},spacing:1,children:Array.from({length:C}).map((function(e,a){return Object(n.jsx)(s.a,{item:!0,xs:h.xs,sm:h.sm,md:h.md,lg:h.lg,xl:h.xl,children:Object(n.jsx)(t,{})},"empty-".concat(a))}))})]})}},330:function(e,t,a){"use strict";var n=a(2),r=a(3),c=a(0),o=(a(6),a(4)),i=a(96),s=a(7),l=c.forwardRef((function(e,t){var a=e.classes,s=e.className,l=e.raised,d=void 0!==l&&l,u=Object(r.a)(e,["classes","className","raised"]);return c.createElement(i.a,Object(n.a)({className:Object(o.a)(a.root,s),elevation:d?8:1,ref:t},u))}));t.a=Object(s.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(l)},341:function(e,t,a){"use strict";var n=a(2),r=a(3),c=a(0),o=(a(6),a(4)),i=a(12),s=Object(i.a)(c.createElement("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel"),l=a(7),d=a(17),u=a(13),b=a(10),m=a(88);function p(e){return"Backspace"===e.key||"Delete"===e.key}var f=c.forwardRef((function(e,t){var a=e.avatar,i=e.classes,l=e.className,d=e.clickable,f=e.color,h=void 0===f?"default":f,g=e.component,j=e.deleteIcon,O=e.disabled,v=void 0!==O&&O,x=e.icon,y=e.label,k=e.onClick,S=e.onDelete,C=e.onKeyDown,N=e.onKeyUp,_=e.size,I=void 0===_?"medium":_,w=e.variant,T=void 0===w?"default":w,E=Object(r.a)(e,["avatar","classes","className","clickable","color","component","deleteIcon","disabled","icon","label","onClick","onDelete","onKeyDown","onKeyUp","size","variant"]),P=c.useRef(null),R=Object(u.a)(P,t),W=function(e){e.stopPropagation(),S&&S(e)},A=!(!1===d||!k)||d,D="small"===I,L=g||(A?m.a:"div"),B=L===m.a?{component:"div"}:{},F=null;if(S){var M=Object(o.a)("default"!==h&&("default"===T?i["deleteIconColor".concat(Object(b.a)(h))]:i["deleteIconOutlinedColor".concat(Object(b.a)(h))]),D&&i.deleteIconSmall);F=j&&c.isValidElement(j)?c.cloneElement(j,{className:Object(o.a)(j.props.className,i.deleteIcon,M),onClick:W}):c.createElement(s,{className:Object(o.a)(i.deleteIcon,M),onClick:W})}var $=null;a&&c.isValidElement(a)&&($=c.cloneElement(a,{className:Object(o.a)(i.avatar,a.props.className,D&&i.avatarSmall,"default"!==h&&i["avatarColor".concat(Object(b.a)(h))])}));var z=null;return x&&c.isValidElement(x)&&(z=c.cloneElement(x,{className:Object(o.a)(i.icon,x.props.className,D&&i.iconSmall,"default"!==h&&i["iconColor".concat(Object(b.a)(h))])})),c.createElement(L,Object(n.a)({role:A||S?"button":void 0,className:Object(o.a)(i.root,l,"default"!==h&&[i["color".concat(Object(b.a)(h))],A&&i["clickableColor".concat(Object(b.a)(h))],S&&i["deletableColor".concat(Object(b.a)(h))]],"default"!==T&&[i.outlined,{primary:i.outlinedPrimary,secondary:i.outlinedSecondary}[h]],v&&i.disabled,D&&i.sizeSmall,A&&i.clickable,S&&i.deletable),"aria-disabled":!!v||void 0,tabIndex:A||S?0:void 0,onClick:k,onKeyDown:function(e){e.currentTarget===e.target&&p(e)&&e.preventDefault(),C&&C(e)},onKeyUp:function(e){e.currentTarget===e.target&&(S&&p(e)?S(e):"Escape"===e.key&&P.current&&P.current.blur()),N&&N(e)},ref:R},B,E),$||z,c.createElement("span",{className:Object(o.a)(i.label,D&&i.labelSmall)},y),F)}));t.a=Object(l.a)((function(e){var t="light"===e.palette.type?e.palette.grey[300]:e.palette.grey[700],a=Object(d.d)(e.palette.text.primary,.26);return{root:{fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:e.palette.getContrastText(t),backgroundColor:t,borderRadius:16,whiteSpace:"nowrap",transition:e.transitions.create(["background-color","box-shadow"]),cursor:"default",outline:0,textDecoration:"none",border:"none",padding:0,verticalAlign:"middle",boxSizing:"border-box","&$disabled":{opacity:.5,pointerEvents:"none"},"& $avatar":{marginLeft:5,marginRight:-6,width:24,height:24,color:"light"===e.palette.type?e.palette.grey[700]:e.palette.grey[300],fontSize:e.typography.pxToRem(12)},"& $avatarColorPrimary":{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.dark},"& $avatarColorSecondary":{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.dark},"& $avatarSmall":{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:e.typography.pxToRem(10)}},sizeSmall:{height:24},colorPrimary:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText},colorSecondary:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText},disabled:{},clickable:{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover, &:focus":{backgroundColor:Object(d.c)(t,.08)},"&:active":{boxShadow:e.shadows[1]}},clickableColorPrimary:{"&:hover, &:focus":{backgroundColor:Object(d.c)(e.palette.primary.main,.08)}},clickableColorSecondary:{"&:hover, &:focus":{backgroundColor:Object(d.c)(e.palette.secondary.main,.08)}},deletable:{"&:focus":{backgroundColor:Object(d.c)(t,.08)}},deletableColorPrimary:{"&:focus":{backgroundColor:Object(d.c)(e.palette.primary.main,.2)}},deletableColorSecondary:{"&:focus":{backgroundColor:Object(d.c)(e.palette.secondary.main,.2)}},outlined:{backgroundColor:"transparent",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:Object(d.d)(e.palette.text.primary,e.palette.action.hoverOpacity)},"& $avatar":{marginLeft:4},"& $avatarSmall":{marginLeft:2},"& $icon":{marginLeft:4},"& $iconSmall":{marginLeft:2},"& $deleteIcon":{marginRight:5},"& $deleteIconSmall":{marginRight:3}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat(e.palette.primary.main),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:Object(d.d)(e.palette.primary.main,e.palette.action.hoverOpacity)}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat(e.palette.secondary.main),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:Object(d.d)(e.palette.secondary.main,e.palette.action.hoverOpacity)}},avatar:{},avatarSmall:{},avatarColorPrimary:{},avatarColorSecondary:{},icon:{color:"light"===e.palette.type?e.palette.grey[700]:e.palette.grey[300],marginLeft:5,marginRight:-6},iconSmall:{width:18,height:18,marginLeft:4,marginRight:-4},iconColorPrimary:{color:"inherit"},iconColorSecondary:{color:"inherit"},label:{overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap"},labelSmall:{paddingLeft:8,paddingRight:8},deleteIcon:{WebkitTapHighlightColor:"transparent",color:a,height:22,width:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:Object(d.d)(a,.4)}},deleteIconSmall:{height:16,width:16,marginRight:4,marginLeft:-4},deleteIconColorPrimary:{color:Object(d.d)(e.palette.primary.contrastText,.7),"&:hover, &:active":{color:e.palette.primary.contrastText}},deleteIconColorSecondary:{color:Object(d.d)(e.palette.secondary.contrastText,.7),"&:hover, &:active":{color:e.palette.secondary.contrastText}},deleteIconOutlinedColorPrimary:{color:Object(d.d)(e.palette.primary.main,.7),"&:hover, &:active":{color:e.palette.primary.main}},deleteIconOutlinedColorSecondary:{color:Object(d.d)(e.palette.secondary.main,.7),"&:hover, &:active":{color:e.palette.secondary.main}}}}),{name:"MuiChip"})(f)},353:function(e,t,a){"use strict";var n=a(2),r=a(3),c=a(0),o=(a(6),a(4)),i=a(7),s=c.forwardRef((function(e,t){var a=e.classes,i=e.className,s=e.component,l=void 0===s?"div":s,d=Object(r.a)(e,["classes","className","component"]);return c.createElement(l,Object(n.a)({className:Object(o.a)(a.root,i),ref:t},d))}));t.a=Object(i.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(s)},416:function(e,t,a){"use strict";var n=a(2),r=a(3),c=a(0),o=(a(6),a(4)),i=a(110),s=a(59),l=a(7),d=a(237),u=c.forwardRef((function(e,t){var a=e.classes,l=e.className,u=e.disableAnimation,b=void 0!==u&&u,m=(e.margin,e.shrink),p=(e.variant,Object(r.a)(e,["classes","className","disableAnimation","margin","shrink","variant"])),f=Object(s.a)(),h=m;"undefined"===typeof h&&f&&(h=f.filled||f.focused||f.adornedStart);var g=Object(i.a)({props:e,muiFormControl:f,states:["margin","variant"]});return c.createElement(d.a,Object(n.a)({"data-shrink":h,className:Object(o.a)(a.root,l,f&&a.formControl,!b&&a.animated,h&&a.shrink,"dense"===g.margin&&a.marginDense,{filled:a.filled,outlined:a.outlined}[g.variant]),classes:{focused:a.focused,disabled:a.disabled,error:a.error,required:a.required,asterisk:a.asterisk},ref:t},p))}));t.a=Object(l.a)((function(e){return{root:{display:"block",transformOrigin:"top left"},focused:{},disabled:{},error:{},required:{},asterisk:{},formControl:{position:"absolute",left:0,top:0,transform:"translate(0, 24px) scale(1)"},marginDense:{transform:"translate(0, 21px) scale(1)"},shrink:{transform:"translate(0, 1.5px) scale(0.75)",transformOrigin:"top left"},animated:{transition:e.transitions.create(["color","transform"],{duration:e.transitions.duration.shorter,easing:e.transitions.easing.easeOut})},filled:{zIndex:1,pointerEvents:"none",transform:"translate(12px, 20px) scale(1)","&$marginDense":{transform:"translate(12px, 17px) scale(1)"},"&$shrink":{transform:"translate(12px, 10px) scale(0.75)","&$marginDense":{transform:"translate(12px, 7px) scale(0.75)"}}},outlined:{zIndex:1,pointerEvents:"none",transform:"translate(14px, 20px) scale(1)","&$marginDense":{transform:"translate(14px, 12px) scale(1)"},"&$shrink":{transform:"translate(14px, -6px) scale(0.75)"}}}}),{name:"MuiInputLabel"})(u)}}]);