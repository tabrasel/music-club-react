(this["webpackJsonpmusic-club-react"]=this["webpackJsonpmusic-club-react"]||[]).push([[0],{100:function(e,t,n){e.exports={RoundListItem:"RoundListItem_RoundListItem__CuIYf",roundIconOverlay:"RoundListItem_roundIconOverlay__zB3wt",disk:"RoundListItem_disk__3DY7c"}},101:function(e,t,n){e.exports={memberHeader:"MemberHeader_memberHeader__1lvVu",memberIcon:"MemberHeader_memberIcon__lwl3p"}},122:function(e,t,n){e.exports={MembersList:"MembersList_MembersList__2ZCur",memberIcon:"MembersList_memberIcon__1Xvzd"}},126:function(e,t,n){e.exports={RoundHeader:"RoundHeader_RoundHeader__3gthg",roundDescription:"RoundHeader_roundDescription__1MdNC"}},127:function(e,t,n){e.exports={RoundParticipantsKey:"RoundParticipantsKey_RoundParticipantsKey__29vbM",participantName:"RoundParticipantsKey_participantName__1JAV_"}},178:function(e,t,n){e.exports={ParticipantsList:"ParticipantsList_ParticipantsList__12mLe"}},179:function(e,t,n){e.exports={PastRoundsList:"PastRoundsList_PastRoundsList__1DUki"}},190:function(e,t,n){e.exports={MemberIcon:"MemberIcon_MemberIcon__3JIan"}},191:function(e,t,n){e.exports={AlbumList:"AlbumList_AlbumList__2b-Cx"}},193:function(e,t,n){e.exports={PickedTrackTable:"PickedTrackTable_PickedTrackTable__3IbT-"}},194:function(e,t,n){e.exports={PickedTrackTableRow:"PickedTrackTableRow_PickedTrackTableRow__1rP_v"}},211:function(e,t,n){},212:function(e,t,n){},222:function(e,t,n){},327:function(e,t,n){},331:function(e,t,n){},332:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(175),s=n.n(c),i=(n(28),n(211),n(25)),o=n(16),u=(n(212),n(3));var l=function(){return Object(u.jsx)("nav",{className:"NavBar navbar sticky-top navbar-expand-sm navbar-light",children:Object(u.jsxs)("div",{className:"container px-2",children:[Object(u.jsx)(i.b,{className:"navbar-brand",to:"/",children:"Music Club"}),Object(u.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(u.jsx)("span",{className:"navbar-toggler-icon"})}),Object(u.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(u.jsx)("ul",{className:"navbar-nav",children:Object(u.jsx)("li",{className:"nav-item",children:Object(u.jsx)(i.b,{className:"nav-link",to:"/",children:"Rounds"})})})})]})})},b=n(10),d=n.n(b),m=n(15),p=n(14),j=(n(222),n(99)),f=n.n(j),h=n(24),x=n(178),v=n.n(x),O=n(94),k=n(69),N=n.n(k);function y(e,t,n){var a,r=Object(O.a)(t);try{for(r.s();!(a=r.n()).done;){if(a.value.pickedTracks.filter((function(t){return t.pickerIds.includes(e.id)})).length!==n)return!1}}catch(c){r.e(c)}finally{r.f()}return!0}var _=function(e){var t=e.participant,n=e.albums,a=e.picksPerParticipant,r=Object(u.jsxs)("div",{className:N.a.unfinishedIcon,children:[Object(u.jsx)("div",{className:N.a.spinner,style:{"--c":t.color}}),Object(u.jsx)("p",{children:t.firstName[0]+t.lastName[0]})]}),c=Object(u.jsx)("div",{className:N.a.finishedIcon,style:{backgroundColor:t.color},children:Object(u.jsx)("p",{children:t.firstName[0]+t.lastName[0]})});return Object(u.jsx)("div",{className:N.a.ParticipantStatusIcon,children:y(t,n,a)?c:r})};var g=function(e){var t=e.participants,n=e.albums,a=e.picksPerParticipant;return Object(u.jsx)("div",{className:v.a.ParticipantsList,children:t.map((function(e){return Object(u.jsx)(_,{participant:e,albums:n,picksPerParticipant:a},e.id)}))})};var I=function(){var e=Object(a.useState)(null),t=Object(p.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)([]),s=Object(p.a)(c,2),i=s[0],o=s[1],l=Object(a.useState)([]),b=Object(p.a)(l,2),j=b[0],x=b[1];Object(a.useEffect)((function(){var e=function(){var e=Object(m.a)(d.a.mark((function e(){var t,n,a,c,s,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v("04d9a851-61a1-476a-bc87-a3a30fc6a353");case 2:return t=e.sent,e.next=5,O(t.currentRoundId);case 5:if(n=e.sent,r(n),null!==n){e.next=9;break}return e.abrupt("return");case 9:return a=n.participantIds.map((function(e){return fetch("https://tb-music-club.herokuapp.com/api/member?id="+e).then((function(e){return e.json()}))})),e.next=12,Promise.all(a);case 12:return(c=e.sent).sort((function(e,t){return e.lastName<t.lastName?-1:e.lastName>t.lastName?1:e.firstName<t.firstName?-1:1})),o(c),s=n.albumIds.map((function(e){return fetch("https://tb-music-club.herokuapp.com/api/album?id="+e).then((function(e){return e.json()}))})),e.next=18,Promise.all(s);case 18:i=e.sent,x(i);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]);var v=function(){var e=Object(m.a)(d.a.mark((function e(t){var n,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://tb-music-club.herokuapp.com/api/club?id="+t);case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(m.a)(d.a.mark((function e(t){var n,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://tb-music-club.herokuapp.com/api/round?id="+t);case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();if(null===n)return null;var k="https://tb-music-club.s3.us-west-2.amazonaws.com/round_thumbnails/"+n.id+".jpeg",N=h.DateTime.fromISO(n.startDate),y=Math.floor(h.DateTime.now().diff(N,"days").days),_=N.toLocaleString(h.DateTime.DATE_FULL);return Object(u.jsxs)("div",{className:"".concat(f.a.CurrentRoundJumbotron," jumbotron d-flex justify-content-between mb-5"),children:[Object(u.jsxs)("div",{className:"d-flex flex-column flex-grow-1 justify-content-between",children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{className:"m-0",children:"Now playing"}),Object(u.jsxs)("h1",{className:"m-0",children:["Round ",n.number]}),Object(u.jsx)("p",{className:f.a.roundDate,children:"Day "+y+" since "+_})]}),Object(u.jsx)(g,{participants:i,albums:j,picksPerParticipant:n.picksPerParticipant})]}),Object(u.jsx)("div",{className:f.a.currentRoundThumbnail,style:{backgroundImage:"url("+k+")"}})]})},P=n(122),w=n.n(P);var T=function(e){var t=e.memberIds,n=Object(a.useState)([]),r=Object(p.a)(n,2),c=r[0],s=r[1];return Object(a.useEffect)((function(){if(null!==t){var e=function(){var e=Object(m.a)(d.a.mark((function e(){var n,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.map((function(e){return fetch("https://tb-music-club.herokuapp.com/api/member?id="+e).then((function(e){return e.json()}))})),e.next=3,Promise.all(n);case 3:a=e.sent,s(a);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}}),[t]),Object(u.jsx)("div",{className:w.a.MembersList,children:c.map((function(e){return Object(u.jsx)(i.b,{to:"/member/"+e.id,style:{textDecoration:"none"},children:Object(u.jsx)("div",{className:w.a.memberIcon,style:{backgroundColor:e.color},children:Object(u.jsx)("p",{children:e.firstName[0]+e.lastName[0]})},e.id)})}))})},R=n(179),S=n.n(R),L=n(100),A=n.n(L);var D=function(e){var t=e.round,n="https://tb-music-club.s3.us-west-2.amazonaws.com/round_thumbnails/"+t.id+".jpeg";return Object(u.jsxs)("div",{className:"".concat(A.a.RoundListItem," position-relative m-4"),style:{backgroundImage:"url("+n+")"},children:[Object(u.jsx)("div",{className:A.a.disk}),Object(u.jsx)(i.b,{to:"/round/"+t.id,children:Object(u.jsx)("div",{className:A.a.roundIconOverlay})})]})};var C=function(){var e=Object(a.useState)([]),t=Object(p.a)(e,2),n=t[0],r=t[1];Object(a.useEffect)((function(){var e=function(){var e=Object(m.a)(d.a.mark((function e(){var t,n,a,i,o,u,l;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("04d9a851-61a1-476a-bc87-a3a30fc6a353");case 2:return t=e.sent,e.next=5,s();case 5:n=e.sent,a=[],i=Object(O.a)(n),e.prev=8,i.s();case 10:if((o=i.n()).done){e.next=18;break}if((u=o.value).id!==t.currentRoundId){e.next=14;break}return e.abrupt("continue",16);case 14:l={round:u},a.push(l);case 16:e.next=10;break;case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(8),i.e(e.t0);case 23:return e.prev=23,i.f(),e.finish(23);case 26:a.sort((function(e,t){return t.round.number-e.round.number})),r(a);case 28:case"end":return e.stop()}}),e,null,[[8,20,23,26]])})));return function(){return e.apply(this,arguments)}}();e()}),[]);var c=function(){var e=Object(m.a)(d.a.mark((function e(t){var n,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://tb-music-club.herokuapp.com/api/club?id="+t);case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s=function(){var e=Object(m.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://tb-music-club.herokuapp.com/api/rounds");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(u.jsxs)("div",{className:"".concat(S.a.PastRoundsList," d-flex flex-column align-items-center"),children:[Object(u.jsx)("h2",{className:"mb-2",children:"Past Rounds"}),Object(u.jsx)("div",{className:"d-flex justify-content-center flex-wrap",children:n.map((function(e){return Object(u.jsx)(D,{round:e.round},e.round.id)}))})]})};var M=function(){var e=Object(a.useState)(null),t=Object(p.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){var e=function(){var e=Object(m.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://tb-music-club.herokuapp.com/api/club?id=04d9a851-61a1-476a-bc87-a3a30fc6a353");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,r(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(u.jsxs)("div",{className:"h-100",children:[Object(u.jsx)(T,{memberIds:n?n.participantIds:null}),Object(u.jsx)(I,{}),Object(u.jsx)(C,{})]})},E=n(55),z=n.n(E),F=n(101),J=n.n(F);var V=function(e){var t=e.member,n=Object(u.jsx)("div",{className:J.a.memberIcon,style:{backgroundColor:"#f3f3f3"}}),a=Object(u.jsx)("h1",{style:{color:"transparent"},children:"Tate Brasel"});return Object(u.jsxs)("div",{className:"".concat(J.a.memberHeader," mb-3"),children:[null===t?n:Object(u.jsx)("div",{className:J.a.memberIcon,style:{backgroundColor:t.color},children:Object(u.jsxs)("p",{children:[t.firstName[0],t.lastName[0]]})}),null===t?a:Object(u.jsxs)("h1",{children:[t.firstName," ",t.lastName]})]})},H=n(132),B=n(341),K=n(339),U=n(342),G=n(171);var W=function(e){var t=100*e.aspectRatio+"%";return Object(u.jsx)("div",{style:{position:"relative",width:"100%",paddingBottom:t},children:Object(u.jsx)("div",{style:{position:"absolute",top:0,bottom:0,left:0,right:0,backgroundColor:"#f3f3f3",borderRadius:"5px"}})})};var Q=function(e){var t=e.member,n=Object(a.useState)([]),r=Object(p.a)(n,2),c=r[0],s=r[1],i=Object(a.useState)([]),o=Object(p.a)(i,2),l=o[0],b=o[1];Object(a.useEffect)((function(){var e=function(){var e=Object(m.a)(d.a.mark((function e(){var n,a,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==t){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,fetch("https://tb-music-club.herokuapp.com/api/shared-votes?memberId=".concat(t.id,"&clubId=04d9a851-61a1-476a-bc87-a3a30fc6a353"));case 4:return n=e.sent,e.next=7,n.json();case 7:a=e.sent,s(a),r=a.map((function(e){return{name:e.member.firstName,count:e.sharedVotesCount>=0?e.sharedVotesCount:0,color:e.member.color}})),b(r);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[t]);var j=Object(u.jsx)(H.a,{style:{pointerEvents:"auto",userSelect:"auto",touchAction:"auto"}});return 0===l.length?Object(u.jsx)(W,{aspectRatio:300/450}):Object(u.jsxs)(B.a,{containerComponent:j,domainPadding:200/l.length,animate:{duration:500,easing:"cubic"},children:[Object(u.jsx)(K.a,{data:l,x:"name",y:"count",labels:c.map((function(e){return e.sharedVotesCount>=0?"":"NA"})),style:{data:{width:300/l.length,fill:function(e){return e.datum.color}},labels:{fontFamily:"Poppins",fontSize:12,fill:"#313131"}}}),Object(u.jsx)(U.a,{style:{tickLabels:{fontFamily:"Poppins",fontSize:12}}}),Object(u.jsx)(U.a,{dependentAxis:!0,style:{tickLabels:{fontFamily:"Poppins",fontSize:12}}}),Object(u.jsx)(G.a,{text:"Shared Votes",x:225,y:30,textAnchor:"middle",style:{fontFamily:"Poppins",fontSize:18,fontWeight:"bold"}})]})},Y=n(68),q=n.n(Y);var X=function(e){var t=e.member,n=Object(a.useState)([]),r=Object(p.a)(n,2),c=r[0],s=r[1];Object(a.useEffect)((function(){var e=function(){var e=Object(m.a)(d.a.mark((function e(){var n,a,r,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==t){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,fetch("https://tb-music-club.herokuapp.com/api/member-genres?memberId=".concat(t.id));case 4:return n=e.sent,e.next=7,n.json();case 7:a=e.sent,r=a.splice(0,10),(c=r.map((function(e){return{genre:e.genre,count:e.albumTitles.length}}))).reverse(),s(c);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[t]);var i=Object(u.jsx)(H.a,{style:{pointerEvents:"auto",userSelect:"auto",touchAction:"auto"}});return 0===c.length?Object(u.jsx)(W,{aspectRatio:300/450}):Object(u.jsxs)(B.a,{containerComponent:i,padding:{left:180,right:30,top:50},domainPadding:15,animate:{duration:500,easing:"cubic"},children:[Object(u.jsx)(K.a,{data:c,x:"genre",y:"count",labels:c.map((function(e){return e.count})),style:{data:{width:15,fill:function(e){return function(e){for(var t=0,n=0;n<e.length;n++)t=e.charCodeAt(n)+((t<<5)-t);for(var a="#",r=0;r<3;r++)a+=("00"+(t>>8*r&255).toString(16)).substr(-2);var c=q()(a).hsl();return c[1]>.7&&c[2]<.6?q()(a).desaturate(1):a}(e.datum.genre)}},labels:{fontFamily:"Poppins",fontSize:12,fill:"#313131"}},horizontal:!0,labelComponent:Object(u.jsx)(G.a,{dx:5})}),Object(u.jsx)(U.a,{style:{tickLabels:{fontFamily:"Poppins",fontSize:12}}}),Object(u.jsx)(G.a,{text:"Top 10 Posted Artist Genres",x:225,y:30,textAnchor:"middle",style:{fontFamily:"Poppins",fontSize:18,fontWeight:"bold"}})]})},Z=n(189),$=n(343);var ee=function(e){var t=e.member,n=Object(a.useState)([]),r=Object(p.a)(n,2),c=r[0],s=r[1],i=Object(a.useState)([]),o=Object(p.a)(i,2),l=o[0],b=o[1];Object(a.useEffect)((function(){var e=function(){var e=Object(m.a)(d.a.mark((function e(){var n,a,r,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==t){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,fetch("https://tb-music-club.herokuapp.com/api/member-release?memberId=".concat(t.id,"&byDecade=true"));case 4:return n=e.sent,e.next=7,n.json();case 7:a=e.sent,r=q.a.scale(["#fafa6e","purple"]).mode("lch").colors(a.releases.length),b(r),c=a.releases.map((function(e,t){return{i:t,decade:e.releaseTimeLabel,count:e.albumTitles.length,albumTitles:e.albumTitles.join(",\n")}})),s(c);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[t]);var j=Object(u.jsx)(H.a,{style:{pointerEvents:"auto",userSelect:"auto",touchAction:"auto"}});return 0===c.length?Object(u.jsx)(W,{aspectRatio:300/450}):Object(u.jsxs)(B.a,{containerComponent:Z.isMobile?j:Object(u.jsx)(H.a,{}),domainPadding:200/c.length,animate:{duration:500,easing:"cubic"},children:[Object(u.jsx)(K.a,{data:c,x:"decade",y:"count",labels:c.map((function(e){return e.albumTitles})),labelComponent:Object(u.jsx)($.a,{constrainToVisibleArea:!0,cornerRadius:0,flyoutStyle:{strokeWidth:0,fill:"black"},flyoutPadding:{top:2,bottom:2,left:5,right:5},style:{fontSize:10,fill:"white"}}),style:{data:{width:300/c.length,fill:function(e){var t=e.datum;return l[t.i]}},labels:{fontFamily:"Poppins",fontSize:12,fill:"#313131"}}}),Object(u.jsx)(U.a,{style:{tickLabels:{fontFamily:"Poppins",fontSize:12}}}),Object(u.jsx)(U.a,{dependentAxis:!0,tickFormat:function(e){return Math.round(e)},style:{tickLabels:{fontFamily:"Poppins",fontSize:12}}}),Object(u.jsx)(G.a,{text:"Posted Albums by Decade",x:225,y:30,textAnchor:"middle",style:{fontFamily:"Poppins",fontSize:18,fontWeight:"bold"}})]})};var te=function(){var e=Object(o.f)().id,t=Object(a.useState)(null),n=Object(p.a)(t,2),r=n[0],c=n[1],s=Object(a.useState)([]),i=Object(p.a)(s,2),l=i[0],b=i[1],j=Object(a.useState)(""),f=Object(p.a)(j,2),x=f[0],v=f[1];Object(a.useEffect)((function(){var t=function(){var t=Object(m.a)(d.a.mark((function t(){var n,a,r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O(e);case 2:return n=t.sent,c(n),t.next=6,k(n.participatedRoundIds);case 6:(a=t.sent).sort((function(e,t){return e.number-t.number})),b(a),r=h.DateTime.fromISO(a[0].startDate),v(r.toLocaleString(h.DateTime.DATE_FULL));case 11:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[e]);var O=function(){var e=Object(m.a)(d.a.mark((function e(t){var n,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://tb-music-club.herokuapp.com/api/member?id="+t);case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(m.a)(d.a.mark((function e(t){var n,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.map((function(e){return fetch("https://tb-music-club.herokuapp.com/api/round?id="+e).then((function(e){return e.json()}))})),e.next=3,Promise.all(n);case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=Object(u.jsx)("p",{children:"Loading..."});return Object(u.jsxs)("div",{className:"".concat(z.a.MemberView," mt-3"),children:[Object(u.jsx)(V,{member:r}),null===r||0===l.length?N:Object(u.jsx)("p",{children:"".concat(r.firstName," joined round #").concat(l[0].number," on ").concat(x," and has participated in ").concat(l.length-1," more since\u2014the latest being #").concat(l[l.length-1].number,".")}),Object(u.jsxs)("div",{className:z.a.chartGallery,children:[Object(u.jsx)("div",{className:z.a.chartArea,children:Object(u.jsx)(Q,{member:r})}),Object(u.jsx)("div",{className:z.a.chartArea,children:Object(u.jsx)(ee,{member:r})}),Object(u.jsx)("div",{className:z.a.chartArea,children:Object(u.jsx)(X,{member:r})})]})]})},ne=(n(327),n(126)),ae=n.n(ne),re=n(127),ce=n.n(re),se=n(190),ie=n.n(se);var oe=function(e){var t=e.member;return Object(u.jsx)("div",{className:"".concat(ie.a.MemberIcon," rounded-circle d-flex justify-content-center align-items-center"),style:{backgroundColor:t.color},children:Object(u.jsx)("p",{children:t.firstName[0]+t.lastName[0]})})};var ue=function(e){var t=e.participants;return Object(u.jsx)("div",{className:"".concat(ce.a.RoundParticipantsKey," d-flex flex-column align-items-end"),children:t.map((function(e){return Object(u.jsxs)("div",{className:"d-flex align-items-center mb-2",children:[Object(u.jsxs)("p",{className:"".concat(ce.a.participantName," my-0 mx-2"),children:[e.firstName," ",e.lastName]}),Object(u.jsx)(oe,{member:e})]},e.id)}))})};var le=function(e){var t=e.round,n=e.participants,a=h.DateTime.fromISO(t.startDate),r=h.DateTime.fromISO(t.endDate),c=Math.floor(r.diff(a,"days").days),s=a.toLocaleString(h.DateTime.DATE_MED),i=r.toLocaleString(h.DateTime.DATE_MED),o=1===c?"1 day":c+" days";return Object(u.jsxs)("div",{className:"".concat(ae.a.RoundHeader," mt-3 d-flex justify-content-between"),children:[Object(u.jsxs)("div",{children:[Object(u.jsxs)("h1",{className:"m-0",children:["Round ",t.number]}),Object(u.jsxs)("h2",{className:"m-0",children:[s," to ",i," (",o,")"]}),t.description?Object(u.jsx)("p",{className:"".concat(ae.a.roundDescription," mt-4"),children:t.description}):null]}),Object(u.jsx)(ue,{participants:n})]})},be=n(191),de=n.n(be),me=n(70),pe=n.n(me),je=n(192),fe=n(195),he=n(193),xe=n.n(he),ve=n(194),Oe=n.n(ve);var ke=function(e){var t=e.pickedTrack,n=e.pickers,a=e.isTopTrack;return Object(u.jsxs)("tr",{className:Oe.a.PickedTrackTableRow,style:{backgroundColor:a?"#cde3bb":"white"},children:[Object(u.jsxs)("td",{style:{textAlign:"right"},children:[t.trackNumber,"."]}),Object(u.jsx)("td",{children:t.title}),Object(u.jsx)("td",{children:Object(u.jsx)("div",{className:"d-flex justify-content-end",children:n.map((function(e){return Object(u.jsx)(oe,{member:e},e.id)}))})})]})};var Ne=function(e){var t=e.album,n=e.participants,a=t.pickedTracks.sort((function(e,t){return e.trackNumber-t.trackNumber}));return Object(u.jsxs)("table",{className:"".concat(xe.a.PickedTrackTable," table"),children:[Object(u.jsx)("thead",{className:"table-dark",children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{scope:"col",style:{width:"5%",textAlign:"right"},children:"#"}),Object(u.jsx)("th",{scope:"col",children:"Title"}),Object(u.jsx)("th",{scope:"col",style:{width:"25%",textAlign:"right"},children:"Votes"})]})}),Object(u.jsx)("tbody",{children:a.map((function(e){var a=n.filter((function(t){return e.pickerIds.includes(t.id)})),r=e.trackNumber===t.topTrackNumber;return Object(u.jsx)(ke,{pickedTrack:e,pickers:a,isTopTrack:r},e.trackNumber)}))})]})};function ye(e,t,n){var a=n*t.length,r=0;return e.pickedTracks.forEach((function(e){r+=e.pickerIds.length})),r===a}var _e=function(e){var t=e.album,n=e.participants,a=e.votesPerParticipant,r=null!==t.pickedTracks&&t.pickedTracks.length>0,c=n.filter((function(e){return e.id===t.posterId}))[0],s=n.length,i=(s*a-t.pickedTracks.length)/(s*a-a),o=Math.floor(100*i);return Object(u.jsx)("div",{className:pe.a.RoundAlbumListItem,children:Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"col-sm-4",children:Object(u.jsxs)("div",{className:"d-flex flex-column align-items-center",children:[Object(u.jsx)("div",{className:"".concat(pe.a.postedAlbumIcon," mb-3"),style:{backgroundImage:"url("+t.imageUrl+")"},children:Object(u.jsx)("div",{className:pe.a.posterIcon,style:{backgroundColor:c.color},children:Object(u.jsx)("p",{className:"m-0",children:c.firstName[0]+c.lastName[0]})})}),Object(u.jsx)("h2",{className:"text-center",children:t.title}),Object(u.jsx)("h3",{className:"text-center mb-4",children:t.artist}),Object(u.jsx)("div",{className:"d-flex justify-content-between",children:ye(t,n,a)?Object(u.jsxs)("p",{title:"Vote overlap score. There is 100% overlap if everyone votes for the same songs, and 0% overlap if everyone votes for different songs.",children:[Object(u.jsx)(je.a,{icon:fe.a})," ",o,"%"]}):Object(u.jsx)("p",{className:pe.a.missingLabel,children:"Missing votes"})})]})}),Object(u.jsx)("div",{className:"col-sm-8",children:r?Object(u.jsx)(Ne,{album:t,participants:n}):Object(u.jsx)("p",{children:"Picks not posted"})})]})})};var ge=function(e){var t=e.albums,n=e.participants,a=e.votesPerParticipant;return Object(u.jsx)("div",{className:de.a.AlbumList,children:t.map((function(e){return Object(u.jsx)(_e,{album:e,participants:n,votesPerParticipant:a},e.id)}))})};function Ie(e){var t=e.participantIds.map((function(e){return fetch("https://tb-music-club.herokuapp.com/api/member?id="+e).then((function(e){return e.json()}))}));return Promise.all(t)}function Pe(e){var t=e.albumIds.map((function(e){return fetch("https://tb-music-club.herokuapp.com/api/album?id="+e).then((function(e){return e.json()}))}));return Promise.all(t)}var we=function(){var e=Object(o.f)().id,t=Object(a.useState)(null),n=Object(p.a)(t,2),r=n[0],c=n[1],s=Object(a.useState)([]),i=Object(p.a)(s,2),l=i[0],b=i[1],j=Object(a.useState)([]),f=Object(p.a)(j,2),h=f[0],x=f[1];Object(a.useEffect)((function(){var t=function(){var t=Object(m.a)(d.a.mark((function t(){var n,a,r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v(e);case 2:return n=t.sent,c(n),t.next=6,Ie(n);case 6:return(a=t.sent).sort((function(e,t){return e.lastName<t.lastName?-1:e.lastName>t.lastName?1:e.firstName<t.firstName?-1:1})),b(a),t.next=11,Pe(n);case 11:r=t.sent,x(r);case 13:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[]);var v=function(){var e=Object(m.a)(d.a.mark((function e(t){var n,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://tb-music-club.herokuapp.com/api/round?id="+t);case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return null===r?null:Object(u.jsxs)("div",{children:[Object(u.jsx)(le,{round:r,participants:l}),Object(u.jsx)("hr",{className:"mt-3 mb-5"}),Object(u.jsx)(ge,{albums:h,participants:l,votesPerParticipant:r.picksPerParticipant})]})};var Te=function(){return Object(u.jsx)(i.a,{children:Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(l,{}),Object(u.jsx)("div",{className:"h-100 container",children:Object(u.jsxs)(o.c,{children:[Object(u.jsx)(o.a,{exact:!0,path:"/",component:M}),Object(u.jsx)(o.a,{exact:!0,path:"/round/:id",component:we}),Object(u.jsx)(o.a,{exact:!0,path:"/member/:id",component:te})]})})]})})};n(331);s.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(Te,{})}),document.getElementById("root"))},55:function(e,t,n){e.exports={chartGallery:"MemberView_chartGallery__1i5JT",chartArea:"MemberView_chartArea__2QoJB"}},69:function(e,t,n){e.exports={ParticipantStatusIcon:"ParticipantStatusIcon_ParticipantStatusIcon__3QdhJ",unfinishedIcon:"ParticipantStatusIcon_unfinishedIcon__1O7gR",finishedIcon:"ParticipantStatusIcon_finishedIcon__2N05-",spinner:"ParticipantStatusIcon_spinner__8DEa7",spin:"ParticipantStatusIcon_spin__1Cnhm"}},70:function(e,t,n){e.exports={RoundAlbumListItem:"RoundAlbumListItem_RoundAlbumListItem__DFq_N",postedAlbumIcon:"RoundAlbumListItem_postedAlbumIcon__3jUNm",posterIcon:"RoundAlbumListItem_posterIcon__1h5P-",missingLabel:"RoundAlbumListItem_missingLabel__Lfmcv"}},99:function(e,t,n){e.exports={CurrentRoundJumbotron:"CurrentRoundJumbotron_CurrentRoundJumbotron__3M7eO",roundDate:"CurrentRoundJumbotron_roundDate__2lcxF",currentRoundThumbnail:"CurrentRoundJumbotron_currentRoundThumbnail__270j7"}}},[[332,1,2]]]);
//# sourceMappingURL=main.23ada0cc.chunk.js.map