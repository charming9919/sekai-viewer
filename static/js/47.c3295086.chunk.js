(this["webpackJsonpsekai-viewer"]=this["webpackJsonpsekai-viewer"]||[]).push([[47],{1094:function(e,t,n){"use strict";n.r(t);var a=n(29),c=n(1),r=n(11),i=n(232),s=n(235),o=n(281),l=n(54),j=n(267),d=n(280),b=n(415),u=n(214),O=n(245),m=n(96),h=n(341),p=n(403),f=n(404),g=n(401),x=n.n(g),y=n(402),v=n.n(y),w=n(0),_=n(188),N=n(326),k=n(298),S=n(292),I=n(291),C=n(294),T=n(374),P=n(312),B=n(198),E=n(330),W=n(353),z=n(365),K=n(282),L=n(37),M=n(45),R=Object(B.a)((function(e){return{media:{paddingTop:"5%",backgroundSize:"contain"},card:{cursor:"pointer"},header:{},"grid-out":{padding:e.spacing("1%","2%")}}})),D={grid:function(e){var t=e.data,n=R(),a=Object(M.c)().getTranslated,r=Object(w.useContext)(L.a).contentTransMode;return t?Object(c.jsx)(w.Fragment,{children:Object(c.jsxs)(E.a,{className:n.card,children:[Object(c.jsx)(z.a,{className:n.media,title:a(r,"honor_mission:".concat(t.id),t.sentence),children:Object(c.jsx)(T.a,{resourceBoxId:t.rewards[0].resourceBoxId,type:"mission_reward"})}),Object(c.jsx)(W.a,{style:{paddingBottom:"16px"},children:Object(c.jsx)(o.a,{container:!0,direction:"column",spacing:1,children:Object(c.jsx)(o.a,{item:!0,children:Object(c.jsx)(C.b,{contentKey:"honor_mission:".concat(t.id),original:t.sentence,originalProps:{variant:"subtitle1"},translatedProps:{variant:"subtitle1"}})})})})]})}):Object(c.jsxs)(E.a,{className:n.card,children:[Object(c.jsx)(K.a,{variant:"rect",className:n.media}),Object(c.jsxs)(W.a,{children:[Object(c.jsx)(l.a,{variant:"subtitle1",className:n.header,children:Object(c.jsx)(K.a,{variant:"text",width:"90%"})}),Object(c.jsx)(l.a,{variant:"body2",children:Object(c.jsx)(K.a,{variant:"text",width:"40%"})})]})]})}};var J=function(e){var t=e.resourceBoxId,n=e.open,a=e.onClose,d=e.missionData,b=Object(_.a)().t,u=Object(I.e)("resourceBoxes"),O=Object(r.a)(u,1)[0],m=Object(I.e)("honors"),h=Object(r.a)(m,1)[0],p=Object(I.e)("honorGroups"),f=Object(r.a)(p,1)[0],g=Object(w.useState)(),x=Object(r.a)(g,2),y=x[0],v=x[1],N=Object(w.useState)(),k=Object(r.a)(N,2),S=k[0],P=k[1];return Object(w.useEffect)((function(){if(O&&h&&f&&t){var e=h.find((function(e){return e.id===O.find((function(e){return"mission_reward"===e.resourceBoxPurpose&&e.id===t})).details.find((function(e){return"honor"===e.resourceType})).resourceId})),n=f.find((function(t){return t.id===e.groupId}));v(e),P(n)}}),[h,O,t,f]),y&&S&&d?Object(c.jsx)(i.a,{open:n,onClose:a,fullWidth:!0,children:Object(c.jsxs)(s.a,{children:[Object(c.jsx)(o.a,{container:!0,spacing:2,children:Object(c.jsx)(o.a,{item:!0,container:!0,justify:"center",children:Object(c.jsx)(T.a,{resourceBoxId:t,type:"mission_reward"})})}),Object(c.jsxs)(o.a,{container:!0,direction:"row",wrap:"nowrap",justify:"space-between",alignItems:"center",children:[Object(c.jsx)(l.a,{variant:"subtitle1",style:{fontWeight:600},children:b("common:id")}),Object(c.jsx)(l.a,{children:y.id})]}),Object(c.jsx)(j.a,{style:{margin:"1% 0"}}),Object(c.jsxs)(o.a,{container:!0,direction:"row",wrap:"nowrap",justify:"space-between",alignItems:"center",children:[Object(c.jsx)(l.a,{variant:"subtitle1",style:{fontWeight:600},children:b("common:title")}),Object(c.jsx)(C.b,{contentKey:"honor_name:".concat(y.name),original:y.name,originalProps:{align:"right"},translatedProps:{align:"right"}})]}),Object(c.jsx)(j.a,{style:{margin:"1% 0"}}),Object(c.jsxs)(o.a,{container:!0,direction:"row",wrap:"nowrap",justify:"space-between",alignItems:"center",children:[Object(c.jsx)(o.a,{item:!0,xs:3,md:2,children:Object(c.jsx)(l.a,{variant:"subtitle1",style:{fontWeight:600},children:b("common:description")})}),Object(c.jsx)(o.a,{item:!0,xs:8,md:9,children:Object(c.jsx)(C.b,{contentKey:"honor_mission:".concat(d.id),original:d.sentence,originalProps:{align:"right"},translatedProps:{align:"right"}})})]}),Object(c.jsx)(j.a,{style:{margin:"1% 0"}}),Object(c.jsxs)(o.a,{container:!0,direction:"row",wrap:"nowrap",justify:"space-between",alignItems:"center",children:[Object(c.jsx)(l.a,{variant:"subtitle1",style:{fontWeight:600},children:b("mission:type.caption")}),Object(c.jsx)(l.a,{children:b("mission:type.".concat(d.honorMissionType))})]}),Object(c.jsx)(j.a,{style:{margin:"1% 0"}}),Object(c.jsxs)(o.a,{container:!0,direction:"row",wrap:"nowrap",justify:"space-between",alignItems:"center",children:[Object(c.jsx)(o.a,{item:!0,xs:3,children:Object(c.jsx)(l.a,{variant:"subtitle1",style:{fontWeight:600},children:b("mission:requirement")})}),Object(c.jsx)(o.a,{item:!0,xs:8,children:Object(c.jsx)(l.a,{align:"right",children:d.requirement})})]}),Object(c.jsx)(j.a,{style:{margin:"1% 0"}}),Object(c.jsxs)(o.a,{container:!0,direction:"row",wrap:"nowrap",justify:"space-between",alignItems:"center",children:[Object(c.jsx)(l.a,{variant:"subtitle1",style:{fontWeight:600},children:b("honor:honor_group")}),Object(c.jsx)(C.b,{contentKey:"honorGroup_name:".concat(S.id),original:S.name,originalProps:{align:"right"},translatedProps:{align:"right"}})]}),Object(c.jsx)(j.a,{style:{margin:"1% 0"}}),Object(c.jsxs)(o.a,{container:!0,direction:"row",wrap:"nowrap",justify:"space-between",alignItems:"center",children:[Object(c.jsx)(l.a,{variant:"subtitle1",style:{fontWeight:600},children:b("common:rarity")}),Object(c.jsx)(l.a,{children:b("honor:rarity.".concat(y.honorRarity))})]}),Object(c.jsx)(j.a,{style:{margin:"1% 0"}}),y.levels.map((function(e){return Object(c.jsxs)(w.Fragment,{children:[Object(c.jsxs)(o.a,{container:!0,direction:"row",wrap:"nowrap",justify:"space-between",alignItems:"center",children:[Object(c.jsx)(l.a,{variant:"subtitle1",style:{fontWeight:600},children:b("common:level")}),Object(c.jsx)(l.a,{children:e.level})]}),Object(c.jsx)(j.a,{style:{margin:"1% 0"}}),Object(c.jsxs)(o.a,{container:!0,direction:"row",wrap:"nowrap",justify:"space-between",alignItems:"center",children:[Object(c.jsx)(o.a,{item:!0,xs:3,md:2,children:Object(c.jsx)(l.a,{variant:"subtitle1",style:{fontWeight:600},children:b("common:description")})}),Object(c.jsx)(o.a,{item:!0,xs:8,md:9,children:Object(c.jsx)(l.a,{align:"right",children:e.description})})]}),Object(c.jsx)(j.a,{style:{margin:"1% 0"}})]})}))]})}):null};t.default=function(){var e=Object(S.a)(),t=Object(k.a)(),n=Object(_.a)().t,i=Object(I.e)("honorMissions"),s=Object(r.a)(i,1)[0],j=Object(w.useState)([]),g=Object(r.a)(j,2),y=g[0],C=g[1],T=Object(w.useState)(!1),B=Object(r.a)(T,2),E=B[0],W=B[1],z=Object(w.useState)(0),K=Object(r.a)(z,2),L=K[0],M=K[1],R=Object(w.useState)(),F=Object(r.a)(R,2),q=F[0],A=F[1],G=Object(w.useState)(localStorage.getItem("event-list-grid-view-type")||"grid"),V=Object(r.a)(G,1)[0],H=Object(w.useState)(1),Q=Object(r.a)(H,2),U=Q[0],X=Q[1],Y=Object(w.useState)(12),Z=Object(r.a)(Y,1)[0],$=Object(w.useState)(!0),ee=Object(r.a)($,2),te=ee[0],ne=ee[1],ae=Object(w.useState)(!1),ce=Object(r.a)(ae,2),re=ce[0],ie=ce[1],se=Object(w.useState)(!1),oe=Object(r.a)(se,2),le=oe[0],je=oe[1],de=Object(w.useReducer)(N.c,[]),be=Object(r.a)(de,2),ue=be[0],Oe=be[1],me=Object(w.useState)([]),he=Object(r.a)(me,2),pe=he[0],fe=he[1];Object(w.useEffect)((function(){document.title=n("title:honorList")}),[n]),Object(w.useEffect)((function(){if(s&&s.length){var e=Object(a.a)(s);ue.length&&(e=e.filter((function(e){return ue.some((function(t){return e.honorMissionType.includes(t)}))}))),fe(e),C([]),X(0)}}),[s,X,fe,ue]),Object(w.useEffect)((function(){C((function(e){return[].concat(Object(a.a)(e),Object(a.a)(function(e,t,n){return e.slice(n*(t-1),n*t)}(pe,U,Z)))})),ne(!0)}),[U,Z,ne,pe]),Object(w.useEffect)((function(){ie(Boolean(s&&s.length))}),[ie,s]);var ge=Object(w.useCallback)((function(e,t){re&&(e[0].isIntersecting&&te&&(!pe.length||pe.length>U*Z)?(X((function(e){return e+1})),ne(!1)):pe.length&&pe.length<=U*Z&&t(!1))}),[re,te,Z,U,pe.length]);return Object(c.jsxs)(w.Fragment,{children:[Object(c.jsxs)(l.a,{variant:"h6",className:e.header,children:[n("common:mission.main")," - ",n("common:mission.honor")]}),Object(c.jsxs)(d.a,{className:e.content,children:[Object(c.jsx)(o.a,{container:!0,justify:"flex-end",children:Object(c.jsx)(b.a,{color:"primary",style:{marginBottom:"1%"},children:Object(c.jsxs)(u.a,{size:"medium",onClick:function(){return je((function(e){return!e}))},children:[le?Object(c.jsx)(x.a,{}):Object(c.jsx)(v.a,{}),le?Object(c.jsx)(p.a,{}):Object(c.jsx)(f.a,{})]})})}),Object(c.jsx)(O.a,{in:le,children:Object(c.jsx)(m.a,{className:t.container,children:Object(c.jsx)(o.a,{container:!0,direction:"column",spacing:1,children:Object(c.jsxs)(o.a,{item:!0,container:!0,xs:12,alignItems:"center",justify:"space-between",children:[Object(c.jsx)(o.a,{item:!0,xs:12,md:1,children:Object(c.jsx)(l.a,{classes:{root:t.caption},children:n("filter:missionType.caption")})}),Object(c.jsx)(o.a,{item:!0,container:!0,xs:12,md:10,spacing:1,children:["clear_live","player_rank","character_rank","unit_rank","collect","duplicate_card","area_item","login","master","multi_live","action_set","read_story","virtual_live"].map((function(e){return Object(c.jsx)(o.a,{item:!0,children:Object(c.jsx)(h.a,{clickable:!0,color:ue.includes(e)?"primary":"default",label:n("mission:type.".concat(e)),onClick:function(){ue.includes(e)?Oe({type:"remove",payload:e}):Oe({type:"add",payload:e})}})},"mission-type-"+e)}))})]})})})}),Object(c.jsx)(P.a,{ViewComponent:D[V],callback:ge,data:y,gridSize:{grid:{xs:12,sm:6,md:4,lg:3,xl:2},agenda:{xs:12},comfy:{xs:12}}[V],onComponentClick:function(e){A(e),M(e.rewards[0].resourceBoxId),W(!0)}})]}),Object(c.jsx)(J,{missionData:q,resourceBoxId:L,open:E,onClose:function(){return W(!1)}})]})}},292:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(198),c=Object(a.a)((function(e){return{header:{fontWeight:"bold"},content:{marginTop:e.spacing(3),marginBottom:e.spacing(3),marginLeft:"auto",marginRight:"auto"},alert:{margin:e.spacing(1,0)},bold:{fontWeight:e.typography.fontWeightBold},capitalize:{textTransform:"capitalize"},tabpanel:{padding:e.spacing("1%",0,0,0)},"grid-out":{padding:e.spacing("1%","0")}}}))},294:function(e,t,n){"use strict";n.d(t,"b",(function(){return b})),n.d(t,"a",(function(){return u})),n.d(t,"c",(function(){return O}));var a=n(11),c=n(1),r=n(26),i=n(54),s=n(281),o=n(0),l=n(37),j=n(291),d=n(45),b=function(e){var t=e.contentKey,n=e.original,a=e.originalProps,j=e.translatedProps,b=e.assetTOptions,u=Object(o.useContext)(l.a).contentTransMode,O=Object(d.c)().assetT;switch(u){case"original":return Object(c.jsx)(i.a,Object(r.a)(Object(r.a)({},a),{},{children:n}));case"translated":return Object(c.jsx)(i.a,Object(r.a)(Object(r.a)({},j),{},{color:"textPrimary",children:O(t,n,b)}));case"both":return Object(c.jsxs)(s.a,{container:!0,direction:"column",children:[Object(c.jsx)(i.a,Object(r.a)(Object(r.a)({},a),{},{color:"textPrimary",children:n})),Object(c.jsx)(i.a,Object(r.a)(Object(r.a)({},j),{},{color:"textSecondary",children:O(t,n,b)}))]})}},u=function(e){var t=e.characterId,n=e.originalProps,b=e.translatedProps,u=e.assetTOptions,O=Object(o.useContext)(l.a).contentTransMode,m=Object(j.e)("gameCharacters"),h=Object(a.a)(m,1)[0],p=Object(d.c)(),f=p.assetT,g=p.assetI18n,x=Object(o.useState)(),y=Object(a.a)(x,2),v=y[0],w=y[1];if(Object(o.useEffect)((function(){h&&w(h.find((function(e){return e.id===t})))}),[h,t]),!v)return Object(c.jsx)(i.a,{});switch(O){case"original":return Object(c.jsxs)(i.a,Object(r.a)(Object(r.a)({},n),{},{color:"textPrimary",children:[v.firstName," ",v.givenName]}));case"translated":return["zh-CN","zh-TW","ko","ja"].includes(g.language)?Object(c.jsxs)(i.a,Object(r.a)(Object(r.a)({},b),{},{color:"textPrimary",children:[v.firstName?f("character_name:".concat(t,".firstName"),v.firstName,u):""," ",f("character_name:".concat(t,".givenName"),v.givenName,u)]})):Object(c.jsxs)(i.a,{children:[f("character_name:".concat(t,".givenName"),v.givenName,u)," ",v.firstName?f("character_name:".concat(t,".firstName"),v.firstName,u):""]});case"both":return Object(c.jsxs)(s.a,{container:!0,direction:"column",children:[Object(c.jsxs)(i.a,Object(r.a)(Object(r.a)({},n),{},{children:[v.firstName," ",v.givenName]})),["zh-CN","zh-TW","ko","ja"].includes(g.language)?Object(c.jsxs)(i.a,Object(r.a)(Object(r.a)({color:"textSecondary"},b),{},{children:[v.firstName?f("character_name:".concat(t,".firstName"),v.firstName,u):""," ",f("character_name:".concat(t,".givenName"),v.givenName,u)]})):Object(c.jsxs)(i.a,Object(r.a)(Object(r.a)({color:"textSecondary"},b),{},{children:[f("character_name:".concat(t,".givenName"),v.givenName,u)," ",v.firstName?f("character_name:".concat(t,".firstName"),v.firstName,u):""]}))]})}},O=function(e){var t=e.releaseCondId,n=e.originalProps,r=e.translatedProps,i=e.assetTOptions,s=Object(j.e)("releaseConditions"),l=Object(a.a)(s,1)[0],d=Object(o.useState)(),u=Object(a.a)(d,2),O=u[0],m=u[1];if(Object(o.useEffect)((function(){l&&m(l.find((function(e){return e.id===t})))}),[t,l]),O){var h="";switch(O.releaseConditionType){case"none":h="release_cond:none_".concat(O.id);break;case"card_level":h="release_cond:card_level",i=Object.assign({},i,{level:O.releaseConditionTypeLevel});break;case"unit_rank":h="release_cond:unit_rank_".concat(O.releaseConditionTypeId),i=Object.assign({},i,{rank:O.releaseConditionTypeLevel});break;case"event_point":h="release_cond:event_point",i=Object.assign({},i,{point:O.releaseConditionTypeQuantity});break;default:h="release_cond:".concat(O.releaseConditionType)}return Object(c.jsx)(b,{contentKey:h,original:O.sentence,originalProps:n,translatedProps:r,assetTOptions:i})}return Object(c.jsx)("div",{})}},298:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(8),c=n(198),r=Object(c.a)((function(e){return{container:{margin:e.spacing(1,0),padding:e.spacing(1,2)},caption:Object(a.a)({},e.breakpoints.up("md"),{textAlign:"right"}),sliderContainer:Object(a.a)({},e.breakpoints.up("md"),{paddingRight:e.spacing(5)}),inputHidden:{display:"none"},noDecoration:{textDecoration:"none","&:hover":{textDecoration:"underline"},color:e.palette.text.primary}}}))},305:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(198),c=Object(a.a)((function(){return{svg:{display:"block",width:"100%",height:"100%",pointerEvents:"visibleStroke"},skeleton:{width:"100%",paddingTop:"100%"}}}))},312:function(e,t,n){"use strict";var a=n(1),c=n(11),r=n(26),i=n(20),s=n(246),o=n(281),l=n(0),j=["xs","sm","md","lg","xl"],d={xs:12,md:4};t.a=function(e){var t=e.ViewComponent,n=e.callback,b=e.data,u=e.gridSize,O=e.viewProps,m=e.onComponentClick,h=function(e){var t=Object(r.a)({},e||d);return j.forEach((function(e,n,a){t[e]||(t[e]=n>0?t[a[n-1]]:12)})),t}(u),p=function(){var e=Object(i.a)();return j.map((function(t){return Object(s.a)(e.breakpoints.down(t))&&t})).find(Boolean)||j[j.length-1]}(),f=Object(l.useState)(!0),g=Object(c.a)(f,2),x=g[0],y=g[1],v=Object(l.useCallback)((function(e){return n(e,y)}),[n]),w=Object(l.useRef)(null);Object(l.useEffect)((function(){y(!0)}),[b]),Object(l.useEffect)((function(){var e=new IntersectionObserver(v,{threshold:.5}),t=w.current;return t&&e.observe(t),function(){t&&e.disconnect()}}),[v]);var _=12/h[p],N=b.length?_:2*_;return Object(a.jsxs)(l.Fragment,{children:[Object(a.jsx)(o.a,{container:!0,direction:"row",spacing:1,children:b.length?b.map((function(e,n){return Object(a.jsx)(o.a,{item:!0,xs:h.xs,sm:h.sm,md:h.md,lg:h.lg,xl:h.xl,onClick:function(){m&&m(e)},children:Object(a.jsx)(t,Object(r.a)({data:e,index:n},O))},e.id)})):null}),Object(a.jsx)(o.a,{container:!0,direction:"row",ref:w,style:{display:x?"flex":"none",paddingTop:"4px"},spacing:1,children:Array.from({length:N}).map((function(e,n){return Object(a.jsx)(o.a,{item:!0,xs:h.xs,sm:h.sm,md:h.md,lg:h.lg,xl:h.xl,children:Object(a.jsx)(t,{})},"empty-".concat(n))}))})]})}},326:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return r})),n.d(t,"d",(function(){return i})),n.d(t,"c",(function(){return s})),n.d(t,"e",(function(){return o}));var a=n(29);function c(e,t){switch(t.type){case"add":return[].concat(Object(a.a)(e),[t.payload]);case"remove":return[].concat(Object(a.a)(e.slice(0,e.indexOf(t.payload))),Object(a.a)(e.slice(e.indexOf(t.payload)+1)));case"reset":return[];default:throw new Error}}function r(e,t){switch(t.type){case"add":return[].concat(Object(a.a)(e),[t.payload]);case"remove":return[].concat(Object(a.a)(e.slice(0,e.indexOf(t.payload))),Object(a.a)(e.slice(e.indexOf(t.payload)+1)));case"reset":return[];default:throw new Error}}function i(e,t){switch(t.type){case"add":return[].concat(Object(a.a)(e),[t.payload]);case"remove":return[].concat(Object(a.a)(e.slice(0,e.indexOf(t.payload))),Object(a.a)(e.slice(e.indexOf(t.payload)+1)));case"reset":return[];default:throw new Error}}function s(e,t){switch(t.type){case"add":return[].concat(Object(a.a)(e),[t.payload]);case"remove":return[].concat(Object(a.a)(e.slice(0,e.indexOf(t.payload))),Object(a.a)(e.slice(e.indexOf(t.payload)+1)));case"reset":return[];default:throw new Error}}function o(e,t){switch(t.type){case"add":var n=[].concat(Object(a.a)(e.teams),[t.payload]);return"local"===e.storageLocation&&localStorage.setItem(e.localKey,JSON.stringify(n)),Object.assign({},e,{teams:n});case"remove":var c=[].concat(Object(a.a)(e.teams.slice(0,t.payload)),Object(a.a)(e.teams.slice(t.payload+1)));return"local"===e.storageLocation&&localStorage.setItem(e.localKey,JSON.stringify(c)),Object.assign({},e,{teams:c});case"replace":var r=[].concat(Object(a.a)(e.teams.slice(0,t.payload.id)),[t.payload.data],Object(a.a)(e.teams.slice(t.payload.id+1)));return"local"===e.storageLocation&&localStorage.setItem(e.localKey,JSON.stringify(r)),Object.assign({},e,{teams:r});case"reload":return Object.assign({},e,{storageLocation:t.payload.location,teams:t.payload.teams});default:throw new Error}}},374:function(e,t,n){"use strict";var a=n(1),c=n(11),r=n(282),i=n(0),s=n(305),o=n(291),l=n(300);t.a=function(e){var t=e.resourceBoxId,n=e.type,j=e.honorId,d=e.style,b=Object(s.a)(),u=Object(o.e)("resourceBoxes"),O=Object(c.a)(u,1)[0],m=Object(o.e)("honors"),h=Object(c.a)(m,1)[0],p=Object(i.useState)(),f=Object(c.a)(p,2),g=f[0],x=f[1],y=Object(i.useState)(""),v=Object(c.a)(y,2),w=v[0],_=v[1],N=Object(i.useState)(""),k=Object(c.a)(N,2),S=k[0],I=k[1];return Object(i.useEffect)((function(){O&&h&&x(h.find((function(e){return t?e.id===O.find((function(e){return e.resourceBoxPurpose===n&&e.id===t})).details.find((function(e){return"honor"===e.resourceType})).resourceId:j?e.id===j:void 0})))}),[h,O,t,n,j]),Object(i.useEffect)((function(){g&&(Object(o.c)("honor/".concat(g.assetbundleName,"_rip/degree_main.webp"),_),("event_ranking_reward"===n||g.name.startsWith("TOP")||g.name.includes("\u4f4d"))&&Object(o.c)("honor/".concat(g.assetbundleName,"_rip/rank_main.webp"),I))}),[g,n]),g?Object(a.jsx)("div",{className:b.svg,children:Object(a.jsxs)("svg",{style:d,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 380 80",children:[Object(a.jsx)("image",{href:w,x:"0",y:"0",height:"80",width:"380"}),Object(a.jsx)("image",{href:l.i[g.honorRarity],x:"0",y:"0",height:"80",width:"380"}),S&&Object(a.jsx)("image",{href:S,x:"190",y:"0",width:"150",height:"78"})]})}):Object(a.jsx)(r.a,{variant:"rect",className:b.skeleton})}}}]);