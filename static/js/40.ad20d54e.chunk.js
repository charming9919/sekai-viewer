(this["webpackJsonpsekai-viewer"]=this["webpackJsonpsekai-viewer"]||[]).push([[40],{291:function(e,t,n){"use strict";n.d(t,"k",(function(){return x})),n.d(t,"e",(function(){return S})),n.d(t,"d",(function(){return k})),n.d(t,"f",(function(){return y})),n.d(t,"h",(function(){return C})),n.d(t,"c",(function(){return w})),n.d(t,"i",(function(){return I})),n.d(t,"b",(function(){return E})),n.d(t,"j",(function(){return A})),n.d(t,"a",(function(){return T})),n.d(t,"g",(function(){return D})),n.d(t,"l",(function(){return W}));var a=n(309),r=n(5),c=n.n(r),i=n(9),o=n(11),s=n(43),u=n.n(s),l=n(0),d=n(319),p=n(318),b=n.n(p),h=n(93),f=n.n(h),m=n(295),g=n(45),j=n(19),v=n(49),O=new d.a;function x(e){var t=Object(l.useState)(e),n=Object(o.a)(t,2),a=n[0],r=n[1],c=Object(l.useRef)(a);return Object(l.useEffect)((function(){c.current=a}),[a]),[a,c,r]}function S(e){var t=Object(l.useCallback)(function(){var e=Object(i.a)(c.a.mark((function e(t){var n,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("".concat(window.isChinaMainland?"https://sekai-json-1258184166.file.myqcloud.com/master":"https://sekai-world.github.io/sekai-master-db-diff","/").concat(t,".json"));case 2:return n=e.sent,a=n.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[]),n=Object(v.a)(e,t),a=n.data,r=n.error;return[a,!r&&!a,r]}var k={all:"All",vocaloid:g.a.t("unit_profile:piapro.name"),light_music_club:g.a.t("unit_profile:light_sound.name"),idol:g.a.t("unit_profile:idol.name"),school_refusal:g.a.t("unit_profile:school_refusal.name"),theme_park:g.a.t("unit_profile:theme_park.name"),street:g.a.t("unit_profile:street.name"),other:"Other"};function y(e){var t=S("gameCharacters"),n=Object(o.a)(t,1)[0],a=Object(g.c)(),r=a.assetT,c=a.assetI18n;return Object(l.useCallback)((function(t){if(n&&n.length){var a=n.find((function(e){return e.id===t})),i=["zh-CN","zh-TW","ko","ja","id","ms"];if(null===a||void 0===a?void 0:a.firstName)switch(e){case"original":return"".concat(a.firstName," ").concat(a.givenName);case"translated":return i.includes(c.language)?"".concat(r("character_name:".concat(t,".firstName"),a.firstName)," ").concat(r("character_name:".concat(t,".givenName"),a.givenName)):"".concat(r("character_name:".concat(t,".givenName"),a.givenName)," ").concat(r("character_name:".concat(t,".firstName"),a.firstName));case"both":return"".concat(a.firstName," ").concat(a.givenName," | ")+(i.includes(c.language)?"".concat(r("character_name:".concat(t,".firstName"),a.firstName)," ").concat(r("character_name:".concat(t,".givenName"),a.givenName)):"".concat(r("character_name:".concat(t,".givenName"),a.givenName)," ").concat(r("character_name:".concat(t,".firstName"),a.firstName)))}return null===a||void 0===a?void 0:a.givenName}}),[c.language,r,n,e])}function C(){var e=Object(l.useCallback)(function(){var e=Object(i.a)(c.a.mark((function e(t){var n,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get(""+"/".concat(t,".json"));case 2:return n=e.sent,a=n.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[]);return[Object(v.a)("metas",e).data]}var _=new b.a({concurrency:1});function w(e,t){return N.apply(this,arguments)}function N(){return(N=Object(i.a)(c.a.mark((function e(t,n){var a,r,i,o,s,l,d=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=d.length>2&&void 0!==d[2]&&d[2],r=d.length>3&&void 0!==d[3]&&d[3],i=Modernizr.webplossless,o=a?"".concat("https://sekai-assets-1258184166.file.myqcloud.com","/").concat(t):r?"".concat("https://minio.dnaroma.eu","/sekai-assets/").concat(t):"".concat("https://sekai-res.dnaroma.eu","/file/sekai-assets/").concat(t),!t.endsWith(".webp")||i){e.next=25;break}return e.next=7,f.a.getItem(o);case 7:if(s=e.sent){e.next=21;break}return e.next=11,u.a.get(o,{responseType:"arraybuffer"});case 11:return l=e.sent,e.next=14,_.add((function(){return O.decode(new Uint8Array(l.data))}));case 14:return s=e.sent,e.next=17,f.a.setItem(o,s);case 17:case 21:return n&&n(s),e.abrupt("return",s);case 23:e.next=27;break;case 25:return n&&n(o),e.abrupt("return",o);case 27:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(e){var t=S("mobCharacters"),n=Object(o.a)(t,1)[0],r=S("character2ds"),s=Object(o.a)(r,1)[0],d=y(e);return Object(l.useCallback)(function(){var e=Object(i.a)(c.a.mark((function e(t,r){var i,o,l,p,b,h,f,g,j,v,O,x,S,k,y,C,_,N;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i={characters:[],actions:[]},s&&s.length&&n&&n.length&&t){e.next=3;break}return e.abrupt("return",i);case 3:return e.t0=u.a,e.next=6,w(t);case 6:return e.t1=e.sent,e.t2={responseType:"json"},e.next=10,e.t0.get.call(e.t0,e.t1,e.t2);case 10:if(o=e.sent,l=o.data,p=l.ScenarioId,b=l.AppearCharacters,h=l.Snippets,f=l.TalkData,g=l.SpecialEffectData,j=l.SoundData,v=l.FirstBgm,!(O=l.FirstBackground)){e.next=23;break}return e.t3=i.actions,e.t4=m.b.SpecialEffect,e.t5=m.c.WaitUnitilFinished,e.t6=v,e.next=20,w("scenario/background/".concat(O,"_rip/").concat(O,".webp"));case 20:e.t7=e.sent,e.t8={type:e.t4,isWait:e.t5,delay:0,seType:"ChangeBackground",body:e.t6,resource:e.t7},e.t3.push.call(e.t3,e.t8);case 23:if(!v){e.next=33;break}return e.t9=i.actions,e.t10=m.b.Sound,e.t11=m.c.WaitUnitilFinished,e.t12=m.d[0],e.next=30,w("sound/scenario/bgm/".concat(v,"_rip/").concat(v,".mp3"));case 30:e.t13=e.sent,e.t14={type:e.t10,isWait:e.t11,delay:0,playMode:e.t12,hasBgm:!0,hasSe:!1,bgm:e.t13,se:""},e.t9.push.call(e.t9,e.t14);case 33:i.characters=b.map((function(e){var t=s.find((function(t){return t.id===e.Character2dId}));switch(t.characterType){case"game_character":return{id:t.characterId,name:d(t.characterId)};case"mob":return{id:t.characterId,name:n.find((function(e){return e.id===t.characterId})).name}}})),x=Object(a.a)(h),e.prev=35,x.s();case 37:if((S=x.n()).done){e.next=105;break}k=S.value,y={},e.t15=k.Action,e.next=e.t15===m.b.Talk?43:e.t15===m.b.SpecialEffect?45:e.t15===m.b.Sound?76:101;break;case 43:return e.delegateYield(c.a.mark((function e(){var t,n,a,i,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=f[k.ReferenceIndex],n={id:0,name:""},t.TalkCharacters[0].Character2dId&&(a=s.find((function(e){return e.id===t.TalkCharacters[0].Character2dId})),n.id=a.characterId),n.name=t.WindowDisplayName,i=t.Voices.length?"sound/".concat(r?"card_":"","scenario/voice/").concat(p,"_rip/").concat(t.Voices[0].VoiceId,".mp3"):"",t.Voices.length&&t.Voices[0].VoiceId.startsWith("partvoice")&&(o=s.find((function(e){return e.id===t.TalkCharacters[0].Character2dId})),i="sound/scenario/part_voice/".concat(o.assetName,"_").concat(o.unit,"_rip/").concat(t.Voices[0].VoiceId,".mp3")),e.t0=k.Action,e.t1=k.ProgressBehavior===m.c.WaitUnitilFinished,e.t2=k.Delay,e.t3=n,e.t4=t.Body,!t.Voices.length){e.next=17;break}return e.next=14,w(i);case 14:e.t5=e.sent,e.next=18;break;case 17:e.t5="";case 18:e.t6=e.t5,y={type:e.t0,isWait:e.t1,delay:e.t2,chara:e.t3,body:e.t4,voice:e.t6};case 20:case"end":return e.stop()}}),e)}))(),"t16",44);case 44:return e.abrupt("break",102);case 45:if(C=g[k.ReferenceIndex],_=m.e[C.EffectType],e.t17=k.Action,e.t18=k.ProgressBehavior===m.c.WaitUnitilFinished,e.t19=k.Delay,e.t20=_,e.t21=C.StringVal,"FullScreenText"!==_){e.next=58;break}return e.next=55,w("sound/scenario/voice/".concat(p,"_rip/").concat(C.StringValSub,".mp3"));case 55:e.t22=e.sent,e.next=73;break;case 58:if("ChangeBackground"!==_){e.next=64;break}return e.next=61,w("scenario/background/".concat(C.StringValSub,"_rip/").concat(C.StringValSub,".webp"));case 61:e.t23=e.sent,e.next=72;break;case 64:if("Movie"!==_){e.next=70;break}return e.next=67,w("scenario/movie/".concat(C.StringVal,"_rip/").concat(C.StringVal.split("_")[0],".mp4"));case 67:e.t24=e.sent,e.next=71;break;case 70:e.t24="";case 71:e.t23=e.t24;case 72:e.t22=e.t23;case 73:return e.t25=e.t22,y={type:e.t17,isWait:e.t18,delay:e.t19,seType:e.t20,body:e.t21,resource:e.t25},e.abrupt("break",102);case 76:if(N=j[k.ReferenceIndex],e.t26=k.Action,e.t27=k.ProgressBehavior===m.c.WaitUnitilFinished,e.t28=k.Delay,e.t29=m.d[N.PlayMode],e.t30=!!N.Bgm,e.t31=!!N.Se,!N.Bgm){e.next=89;break}return e.next=86,w("sound/scenario/bgm/".concat(N.Bgm,"_rip/").concat(N.Bgm,".mp3"));case 86:e.t32=e.sent,e.next=90;break;case 89:e.t32="";case 90:if(e.t33=e.t32,!N.Se){e.next=97;break}return e.next=94,w("sound/scenario/se/se_pack00001_rip/".concat(N.Se,".mp3"));case 94:e.t34=e.sent,e.next=98;break;case 97:e.t34="";case 98:return e.t35=e.t34,y={type:e.t26,isWait:e.t27,delay:e.t28,playMode:e.t29,hasBgm:e.t30,hasSe:e.t31,bgm:e.t33,se:e.t35},e.abrupt("break",102);case 101:y={type:k.Action,isWait:k.ProgressBehavior===m.c.WaitUnitilFinished,delay:k.Delay};case 102:i.actions.push(y);case 103:e.next=37;break;case 105:e.next=110;break;case 107:e.prev=107,e.t36=e.catch(35),x.e(e.t36);case 110:return e.prev=110,x.f(),e.finish(110);case 113:return e.abrupt("return",i);case 114:case"end":return e.stop()}}),e,null,[[35,107,110,113]])})));return function(t,n){return e.apply(this,arguments)}}(),[s,d,n])}function E(){return(new Date).toLocaleDateString("en-US",{timeZone:"Asia/Tokyo"}).split("/").slice(0,2).join("/")}function A(){var e=Object(j.h)().search;return Object(l.useMemo)((function(){return new URLSearchParams(e)}),[e])}function T(e){for(var t=[],n=0;n<e;n+=1){for(var a="0123456789ABCDEF".split(""),r="#",c=0;c<6;c+=1)r+=a[Math.floor(16*Math.random())];t.push(r)}return t}function D(e,t){var n=Object(l.useState)((function(){try{var n=window.localStorage.getItem(e);return n?JSON.parse(n):t}catch(a){return console.log(a),t}})),a=Object(o.a)(n,2),r=a[0],c=a[1];return[r,function(t){try{var n=t instanceof Function?t(r):t;c(n),window.localStorage.setItem(e,JSON.stringify(n))}catch(a){console.log(a)}}]}function W(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return Object(l.useReducer)((function(e){return!e}),e)}},292:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(198),r=Object(a.a)((function(e){return{header:{fontWeight:"bold"},content:{marginTop:e.spacing(3),marginBottom:e.spacing(3),marginLeft:"auto",marginRight:"auto"},alert:{margin:e.spacing(1,0)},bold:{fontWeight:e.typography.fontWeightBold},capitalize:{textTransform:"capitalize"},tabpanel:{padding:e.spacing("1%",0,0,0)},"grid-out":{padding:e.spacing("1%","0")}}}))},295:function(e,t,n){"use strict";var a,r,c,i,o;n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return r})),n.d(t,"e",(function(){return c})),n.d(t,"d",(function(){return i})),n.d(t,"a",(function(){return o})),function(e){e[e.None=0]="None",e[e.Talk=1]="Talk",e[e.CharacerLayout=2]="CharacerLayout",e[e.InputName=3]="InputName",e[e.CharacterMotion=4]="CharacterMotion",e[e.Selectable=5]="Selectable",e[e.SpecialEffect=6]="SpecialEffect",e[e.Sound=7]="Sound"}(a||(a={})),function(e){e[e.Now=0]="Now",e[e.WaitUnitilFinished=1]="WaitUnitilFinished"}(r||(r={})),function(e){e[e.None=0]="None",e[e.BlackIn=1]="BlackIn",e[e.BlackOut=2]="BlackOut",e[e.WhiteIn=3]="WhiteIn",e[e.WhiteOut=4]="WhiteOut",e[e.ShakeScreen=5]="ShakeScreen",e[e.ShakeWindow=6]="ShakeWindow",e[e.ChangeBackground=7]="ChangeBackground",e[e.Telop=8]="Telop",e[e.FlashbackIn=9]="FlashbackIn",e[e.FlashbackOut=10]="FlashbackOut",e[e.ChangeCardStill=11]="ChangeCardStill",e[e.AmbientColorNormal=12]="AmbientColorNormal",e[e.AmbientColorEvening=13]="AmbientColorEvening",e[e.AmbientColorNight=14]="AmbientColorNight",e[e.PlayScenarioEffect=15]="PlayScenarioEffect",e[e.StopScenarioEffect=16]="StopScenarioEffect",e[e.ChangeBackgroundStill=17]="ChangeBackgroundStill",e[e.PlaceInfo=18]="PlaceInfo",e[e.Movie=19]="Movie",e[e.SekaiIn=20]="SekaiIn",e[e.SekaiOut=21]="SekaiOut",e[e.AttachCharacterShader=22]="AttachCharacterShader",e[e.SimpleSelectable=23]="SimpleSelectable",e[e.FullScreenText=24]="FullScreenText",e[e.StopShakeScreen=25]="StopShakeScreen",e[e.StopShakeWindow=26]="StopShakeWindow"}(c||(c={})),function(e){e[e.CrossFade=0]="CrossFade",e[e.Stack=1]="Stack",e[e.SpecialSePlay=2]="SpecialSePlay",e[e.Stop=3]="Stop"}(i||(i={})),function(e){e.PLAY_LIVE="play_live",e.WAITING_ROOM="waiting_room",e.COLLECT_COSTUME_3D="collect_costume_3d",e.COLLECT_STAMP="collect_stamp",e.READ_AREA_TALK="read_area_talk",e.SKILL_LEVEL_UP="skill_level_up",e.MASTER_RANK="master_rank",e.READ_CARD_EPISODE_FIRST="read_card_episode_first",e.READ_CARD_EPISODE_SECOND="read_card_episode_second"}(o||(o={}))},298:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(8),r=n(198),c=Object(r.a)((function(e){return{container:{margin:e.spacing(1,0),padding:e.spacing(1,2)},caption:Object(a.a)({},e.breakpoints.up("md"),{textAlign:"right"}),sliderContainer:Object(a.a)({},e.breakpoints.up("md"),{paddingRight:e.spacing(5)}),inputHidden:{display:"none"},noDecoration:{textDecoration:"none","&:hover":{textDecoration:"underline"},color:e.palette.text.primary}}}))},387:function(e,t,n){"use strict";var a=n(2),r=n(3),c=n(0),i=(n(6),n(4)),o=n(10),s=n(7),u=n(104),l=n(13),d=n(54),p=c.forwardRef((function(e,t){var n=e.classes,s=e.className,p=e.color,b=void 0===p?"primary":p,h=e.component,f=void 0===h?"a":h,m=e.onBlur,g=e.onFocus,j=e.TypographyClasses,v=e.underline,O=void 0===v?"hover":v,x=e.variant,S=void 0===x?"inherit":x,k=Object(r.a)(e,["classes","className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"]),y=Object(u.a)(),C=y.isFocusVisible,_=y.onBlurVisible,w=y.ref,N=c.useState(!1),I=N[0],E=N[1],A=Object(l.a)(t,w);return c.createElement(d.a,Object(a.a)({className:Object(i.a)(n.root,n["underline".concat(Object(o.a)(O))],s,I&&n.focusVisible,"button"===f&&n.button),classes:j,color:b,component:f,onBlur:function(e){I&&(_(),E(!1)),m&&m(e)},onFocus:function(e){C(e)&&E(!0),g&&g(e)},ref:A,variant:S},k))}));t.a=Object(s.a)({root:{},underlineNone:{textDecoration:"none"},underlineHover:{textDecoration:"none","&:hover":{textDecoration:"underline"}},underlineAlways:{textDecoration:"underline"},button:{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle","-moz-appearance":"none","-webkit-appearance":"none","&::-moz-focus-inner":{borderStyle:"none"},"&$focusVisible":{outline:"auto"}},focusVisible:{}},{name:"MuiLink"})(p)},457:function(e,t,n){"use strict";var a=n(2),r=n(3),c=n(0),i=(n(6),n(4)),o=n(54),s=n(7),u=n(72),l=c.forwardRef((function(e,t){var n=e.children,s=e.classes,l=e.className,d=e.component,p=void 0===d?"div":d,b=e.disablePointerEvents,h=void 0!==b&&b,f=e.disableTypography,m=void 0!==f&&f,g=e.position,j=e.variant,v=Object(r.a)(e,["children","classes","className","component","disablePointerEvents","disableTypography","position","variant"]),O=Object(u.b)()||{},x=j;return j&&O.variant,O&&!x&&(x=O.variant),c.createElement(u.a.Provider,{value:null},c.createElement(p,Object(a.a)({className:Object(i.a)(s.root,l,h&&s.disablePointerEvents,O.hiddenLabel&&s.hiddenLabel,"filled"===x&&s.filled,{start:s.positionStart,end:s.positionEnd}[g],"dense"===O.margin&&s.marginDense),ref:t},v),"string"!==typeof n||m?n:c.createElement(o.a,{color:"textSecondary"},n)))}));t.a=Object(s.a)({root:{display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap"},filled:{"&$positionStart:not($hiddenLabel)":{marginTop:16}},positionStart:{marginRight:8},positionEnd:{marginLeft:8},disablePointerEvents:{pointerEvents:"none"},hiddenLabel:{},marginDense:{}},{name:"MuiInputAdornment"})(l)},538:function(e,t,n){"use strict";var a=n(0),r=n(12);t.a=Object(r.a)(a.createElement("path",{d:"M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"}),"Twitter")},604:function(e,t,n){"use strict";var a=n(0),r=n(12);t.a=Object(r.a)(a.createElement("path",{d:"M12.65 10C11.83 7.67 9.61 6 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c2.61 0 4.83-1.67 5.65-4H17v4h4v-4h2v-4H12.65zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"}),"VpnKey")},664:function(e,t,n){"use strict";var a;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=(0,((a=n(57))&&a.__esModule?a:{default:a}).default)("M22,24L16.75,19L17.38,21H4.5A2.5,2.5 0 0,1 2,18.5V3.5A2.5,2.5 0 0,1 4.5,1H19.5A2.5,2.5 0 0,1 22,3.5V24M12,6.8C9.32,6.8 7.44,7.95 7.44,7.95C8.47,7.03 10.27,6.5 10.27,6.5L10.1,6.33C8.41,6.36 6.88,7.53 6.88,7.53C5.16,11.12 5.27,14.22 5.27,14.22C6.67,16.03 8.75,15.9 8.75,15.9L9.46,15C8.21,14.73 7.42,13.62 7.42,13.62C7.42,13.62 9.3,14.9 12,14.9C14.7,14.9 16.58,13.62 16.58,13.62C16.58,13.62 15.79,14.73 14.54,15L15.25,15.9C15.25,15.9 17.33,16.03 18.73,14.22C18.73,14.22 18.84,11.12 17.12,7.53C17.12,7.53 15.59,6.36 13.9,6.33L13.73,6.5C13.73,6.5 15.53,7.03 16.56,7.95C16.56,7.95 14.68,6.8 12,6.8M9.93,10.59C10.58,10.59 11.11,11.16 11.1,11.86C11.1,12.55 10.58,13.13 9.93,13.13C9.29,13.13 8.77,12.55 8.77,11.86C8.77,11.16 9.28,10.59 9.93,10.59M14.1,10.59C14.75,10.59 15.27,11.16 15.27,11.86C15.27,12.55 14.75,13.13 14.1,13.13C13.46,13.13 12.94,12.55 12.94,11.86C12.94,11.16 13.45,10.59 14.1,10.59Z");t.default=r},936:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(5),c=n.n(r),i=n(9),o=n(11),s=n(20),u=n(246),l=n(54),d=n(280),p=n(281),b=n(457),h=n(214),f=n(327),m=n(267),g=n(387),j=n(290),v=n(277),O=n(604),x=n(538),S=n(286),k=n(379),y=n(394),C=n(664),_=n.n(C),w=n(0),N=n(188),I=n(19),E=n(42),A=n(298),T=n(292),D=n(291),W=n(108),B=n(115);t.default=function(){var e=Object(s.a)(),t=Object(T.a)(),n=Object(A.a)(),r=Object(N.a)().t,C=Object(D.j)(),L=Object(I.g)(),M=Object(B.a)(),F=Object(B.a)().decodedToken,P=Object(W.e)(),V=P.postLoginLocal,R=P.getRedirectConnectLoginUrl,U=P.getUserMetadataMe,z=Object(u.a)(e.breakpoints.up("md")),H=Object(w.useState)(!!C.get("error")),q=Object(o.a)(H,2),J=q[0],K=q[1],$=Object(w.useState)(C.get("error")),Y=Object(o.a)($,1)[0];return Object(w.useEffect)((function(){document.title=r("title:login")}),[r]),Object(a.jsxs)(w.Fragment,{children:[Object(a.jsx)(l.a,{variant:"h6",className:t.header,children:r("common:login")}),Object(a.jsx)(d.a,{className:t.content,maxWidth:"md",children:Object(a.jsx)(k.c,{initialValues:{identifier:F?F.identifier:"",password:""},validate:function(e){var t={};return e.identifier||(t.identifier=r("auth:error.required")),e.password||(t.password=r("auth:error.required")),t},onSubmit:function(){var e=Object(i.a)(c.a.mark((function e(t,n){var a,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.setErrors,e.prev=1,e.next=4,V(t);case 4:return i=e.sent,M.token=i.jwt,M.user=i.user,e.next=9,U(i.jwt);case 9:M.usermeta=e.sent,L.replace("/user"),localStorage.setItem("lastUserCheck",String((new Date).getTime())),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),"Auth.form.error.invalid"===e.t0.id?a({identifier:r("auth:login.error.invalid"),password:r("auth:login.error.invalid")}):"Auth.form.error.confirmed"===e.t0.id&&a({identifier:r("auth:login.error.email_not_confirmed")});case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t,n){return e.apply(this,arguments)}}(),children:function(e){var t=e.submitForm,c=e.isSubmitting,i=(e.errors,e.dirty),o=e.isValid;return Object(a.jsxs)(p.a,{container:!0,justify:"center",children:[Object(a.jsx)(p.a,{item:!0,xs:12,md:6,container:!0,justify:"center",children:Object(a.jsxs)(k.b,{children:[Object(a.jsx)(k.a,{component:y.b,name:"identifier",type:"text",label:r("auth:login.label.identifier"),InputProps:{startAdornment:Object(a.jsx)(b.a,{position:"start",children:Object(a.jsx)(v.a,{})})}}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)(k.a,{component:y.b,name:"password",type:"password",label:r("auth:login.label.password"),InputProps:{startAdornment:Object(a.jsx)(b.a,{position:"start",children:Object(a.jsx)(O.a,{})})}}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsxs)(p.a,{container:!0,direction:"column",spacing:1,children:[Object(a.jsx)(p.a,{item:!0,children:Object(a.jsx)(E.b,{to:"/user/forgot",className:n.noDecoration,children:Object(a.jsx)(l.a,{variant:"caption",color:"textPrimary",children:r("auth:forgot-password")})})}),Object(a.jsx)(p.a,{item:!0,children:Object(a.jsx)(E.b,{to:"/user/signup",className:n.noDecoration,children:Object(a.jsx)(l.a,{variant:"caption",color:"textPrimary",children:r("auth:no-account-signup")})})})]}),Object(a.jsx)("br",{}),Object(a.jsx)("input",{type:"submit",style:{display:"none"}}),Object(a.jsx)(p.a,{container:!0,spacing:1,children:Object(a.jsxs)(p.a,{item:!0,xs:12,container:!0,alignItems:"center",spacing:1,children:[Object(a.jsx)(p.a,{item:!0,children:Object(a.jsx)(h.a,{variant:"contained",color:"primary",disabled:c||!i||!o,onClick:t,children:r("auth:common.loginButton")})}),c&&Object(a.jsx)(p.a,{item:!0,children:Object(a.jsx)(f.a,{size:24})})]})})]})}),Object(a.jsx)(p.a,{item:!0,xs:12,md:1,children:Object(a.jsx)(m.a,{orientation:z?"vertical":"horizontal",style:{margin:z?"0":"1rem 0"}})}),Object(a.jsx)(p.a,{item:!0,xs:12,md:4,children:Object(a.jsxs)(p.a,{container:!0,direction:"column",spacing:1,children:[Object(a.jsx)(p.a,{item:!0,children:Object(a.jsx)(l.a,{children:r("auth:login.connect.desc")})}),Object(a.jsx)(p.a,{item:!0,children:Object(a.jsx)(h.a,{component:g.a,href:R("discord"),startIcon:Object(a.jsx)(_.a,{}),children:r("auth:login.connect.discord")})}),Object(a.jsx)(p.a,{item:!0,children:Object(a.jsx)(h.a,{component:g.a,href:R("twitter"),startIcon:Object(a.jsx)(x.a,{}),children:r("auth:login.connect.twitter")})})]})})]})}})}),Object(a.jsx)(j.a,{open:J,autoHideDuration:3e3,onClose:function(){K(!1)},children:Object(a.jsx)(S.a,{onClose:function(){K(!1)},severity:"error",children:Y})})]})}}}]);