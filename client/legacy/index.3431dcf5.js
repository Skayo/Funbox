import{_ as t,a as n,b as e,c as o,i as c,s as r,d as i,S as a,e as u,f as s,t as l,g as f,h,j as p,k as m,l as d,m as v,n as g,o as k,p as w,q as y,r as $,v as x,w as b,x as E,y as R,z as D,H as I,A as T,B as S,C as A,D as V,E as z,F as P,G as L,I as N,J as O,K as j,L as H,M as C,N as M,O as U,P as _,Q as q,R as B,T as W,V as F,W as J,X as K}from"./client.5f1283f3.js";function G(t){var o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var c,r=n(t);if(o){var i=n(this).constructor;c=Reflect.construct(r,arguments,i)}else c=r.apply(this,arguments);return e(this,c)}}function X(t,n,e){var o=t.slice();return o[14]=n[e],o}function Q(t,n,e){var o=t.slice();return o[11]=n[e],o[13]=e,o}function Y(t){for(var n,e,o,c,r,i,a,$,x,b,E,R,D,I,T,S=t[3]&&Z(t),A=t[2],V=[],z=0;z<A.length;z+=1)V[z]=it(Q(t,A,z));return{c:function(){n=u("a"),o=s(),c=u("div"),r=u("div"),i=u("button"),a=s(),$=u("div"),x=u("h2"),b=l(t[0]),E=l(" - Settings\n\n\t\t\t\t\t\t\t\t\t\t"),S&&S.c(),R=s(),D=u("div"),I=u("div");for(var e=0;e<V.length;e+=1)V[e].c();this.h()},l:function(e){n=f(e,"A",{"uk-toggle":!0,"uk-tooltip":!0,"uk-icon":!0,href:!0,class:!0,title:!0}),h(n).forEach(p),o=m(e),c=f(e,"DIV",{"uk-modal":!0,id:!0});var u=h(c);r=f(u,"DIV",{class:!0});var s=h(r);i=f(s,"BUTTON",{class:!0,type:!0,"uk-close":!0,"uk-tooltip":!0,title:!0}),h(i).forEach(p),a=m(s),$=f(s,"DIV",{class:!0});var l=h($);x=f(l,"H2",{class:!0});var v=h(x);b=d(v,t[0]),E=d(v," - Settings\n\n\t\t\t\t\t\t\t\t\t\t"),S&&S.l(v),v.forEach(p),l.forEach(p),R=m(s),D=f(s,"DIV",{class:!0,"uk-overflow-auto":!0});var g=h(D);I=f(g,"DIV",{class:!0});for(var k=h(I),w=0;w<V.length;w+=1)V[w].l(k);k.forEach(p),g.forEach(p),s.forEach(p),u.forEach(p),this.h()},h:function(){v(n,"uk-toggle",e="#"+t[4]+"-modal"),v(n,"uk-tooltip",""),v(n,"uk-icon","cog"),v(n,"href",""),v(n,"class","uk-icon-link uk-margin-small-right"),v(n,"title","Settings"),v(i,"class","uk-modal-close-default"),v(i,"type","button"),v(i,"uk-close",""),v(i,"uk-tooltip","pos: left"),v(i,"title","Close"),v(x,"class","uk-modal-title uk-text-middle"),v($,"class","uk-modal-header"),v(I,"class","uk-form-stacked uk-text-left"),v(D,"class","uk-modal-body"),v(D,"uk-overflow-auto",""),v(r,"class","uk-modal-dialog uk-margin-auto-vertical"),v(c,"uk-modal",""),v(c,"id",T=t[4]+"-modal")},m:function(t,e){g(t,n,e),g(t,o,e),g(t,c,e),k(c,r),k(r,i),k(r,a),k(r,$),k($,x),k(x,b),k(x,E),S&&S.m(x,null),k(r,R),k(r,D),k(D,I);for(var u=0;u<V.length;u+=1)V[u].m(I,null)},p:function(t,o){if(16&o&&e!==(e="#"+t[4]+"-modal")&&v(n,"uk-toggle",e),1&o&&w(b,t[0]),t[3]?S?S.p(t,o):((S=Z(t)).c(),S.m(x,null)):S&&(S.d(1),S=null),4&o){var r;for(A=t[2],r=0;r<A.length;r+=1){var i=Q(t,A,r);V[r]?V[r].p(i,o):(V[r]=it(i),V[r].c(),V[r].m(I,null))}for(;r<V.length;r+=1)V[r].d(1);V.length=A.length}16&o&&T!==(T=t[4]+"-modal")&&v(c,"id",T)},d:function(t){t&&p(n),t&&p(o),t&&p(c),S&&S.d(),y(V,t)}}}function Z(t){var n;return{c:function(){n=u("a"),this.h()},l:function(t){n=f(t,"A",{href:!0,target:!0,"uk-icon":!0,"uk-tooltip":!0,title:!0}),h(n).forEach(p),this.h()},h:function(){v(n,"href",t[3]),v(n,"target","_blank"),v(n,"uk-icon","info"),v(n,"uk-tooltip","pos: right"),v(n,"title","More Info")},m:function(t,e){g(t,n,e)},p:function(t,e){8&e&&v(n,"href",t[3])},d:function(t){t&&p(n)}}}function tt(t){var n,e=t[11].name+"";return{c:function(){n=u("label"),this.h()},l:function(t){n=f(t,"LABEL",{class:!0}),h(n).forEach(p),this.h()},h:function(){v(n,"class","uk-form-label")},m:function(t,o){g(t,n,o),n.innerHTML=e},p:function(t,o){4&o&&e!==(e=t[11].name+"")&&(n.innerHTML=e)},d:function(t){t&&p(n)}}}function nt(t){var n,e,o,c,r,i,a,l,d=t[11].name+"";function w(){for(var n,e=arguments.length,o=new Array(e),c=0;c<e;c++)o[c]=arguments[c];return(n=t)[10].apply(n,[t[11]].concat(o))}return{c:function(){n=u("div"),e=u("label"),o=u("input"),r=s(),this.h()},l:function(t){n=f(t,"DIV",{class:!0});var c=h(n);e=f(c,"LABEL",{});var i=h(e);o=f(i,"INPUT",{class:!0,type:!0,checked:!0}),r=m(i),i.forEach(p),c.forEach(p),this.h()},h:function(){v(o,"class","uk-checkbox"),v(o,"type","checkbox"),o.checked=c=D(t[11].bind),i=new I(null),v(n,"class","uk-form-controls")},m:function(t,c){g(t,n,c),k(n,e),k(e,o),k(e,r),i.m(d,e),a||(l=T(o,"change",w),a=!0)},p:function(n,e){t=n,4&e&&c!==(c=D(t[11].bind))&&(o.checked=c),4&e&&d!==(d=t[11].name+"")&&i.p(d)},d:function(t){t&&p(n),a=!1,l()}}}function et(t){for(var n,e,o,c,r=t[11].options,i=[],a=0;a<r.length;a+=1)i[a]=rt(X(t,r,a));function s(){for(var n,e=arguments.length,o=new Array(e),c=0;c<e;c++)o[c]=arguments[c];return(n=t)[9].apply(n,[t[11]].concat(o))}return{c:function(){n=u("div"),e=u("select");for(var t=0;t<i.length;t+=1)i[t].c();this.h()},l:function(t){n=f(t,"DIV",{class:!0});var o=h(n);e=f(o,"SELECT",{class:!0});for(var c=h(e),r=0;r<i.length;r+=1)i[r].l(c);c.forEach(p),o.forEach(p),this.h()},h:function(){v(e,"class","uk-select"),v(n,"class","uk-form-controls")},m:function(t,r){g(t,n,r),k(n,e);for(var a=0;a<i.length;a+=1)i[a].m(e,null);o||(c=T(e,"change",s),o=!0)},p:function(n,o){if(t=n,4&o){var c;for(r=t[11].options,c=0;c<r.length;c+=1){var a=X(t,r,c);i[c]?i[c].p(a,o):(i[c]=rt(a),i[c].c(),i[c].m(e,null))}for(;c<i.length;c+=1)i[c].d(1);i.length=r.length}},d:function(t){t&&p(n),y(i,t),o=!1,c()}}}function ot(t){var n,e,o,c,r,i,a,s;function l(){for(var n,e=arguments.length,o=new Array(e),c=0;c<e;c++)o[c]=arguments[c];return(n=t)[8].apply(n,[t[11]].concat(o))}return{c:function(){n=u("div"),e=u("input"),this.h()},l:function(t){n=f(t,"DIV",{class:!0});var o=h(n);e=f(o,"INPUT",{value:!0,type:!0,class:!0,min:!0,max:!0,placeholder:!0}),o.forEach(p),this.h()},h:function(){e.value=o=D(t[11].bind),v(e,"type","number"),v(e,"class","uk-input"),v(e,"min",c=t[11].min),v(e,"max",r=t[11].max),v(e,"placeholder",i=t[11].placeholder),v(n,"class","uk-form-controls")},m:function(t,o){g(t,n,o),k(n,e),a||(s=T(e,"input",l),a=!0)},p:function(n,a){t=n,4&a&&o!==(o=D(t[11].bind))&&(e.value=o),4&a&&c!==(c=t[11].min)&&v(e,"min",c),4&a&&r!==(r=t[11].max)&&v(e,"max",r),4&a&&i!==(i=t[11].placeholder)&&v(e,"placeholder",i)},d:function(t){t&&p(n),a=!1,s()}}}function ct(t){var n,e,o,c,r,i;function a(){for(var n,e=arguments.length,o=new Array(e),c=0;c<e;c++)o[c]=arguments[c];return(n=t)[7].apply(n,[t[11]].concat(o))}return{c:function(){n=u("div"),e=u("input"),this.h()},l:function(t){n=f(t,"DIV",{class:!0});var o=h(n);e=f(o,"INPUT",{value:!0,type:!0,class:!0,placeholder:!0}),o.forEach(p),this.h()},h:function(){e.value=o=D(t[11].bind),v(e,"type","text"),v(e,"class","uk-input"),v(e,"placeholder",c=t[11].placeholder),v(n,"class","uk-form-controls")},m:function(t,o){g(t,n,o),k(n,e),r||(i=T(e,"input",a),r=!0)},p:function(n,r){t=n,4&r&&o!==(o=D(t[11].bind))&&e.value!==o&&(e.value=o),4&r&&c!==(c=t[11].placeholder)&&v(e,"placeholder",c)},d:function(t){t&&p(n),r=!1,i()}}}function rt(t){var n,e,o,c,r=t[14].name+"";return{c:function(){n=u("option"),e=l(r),this.h()},l:function(t){n=f(t,"OPTION",{value:!0,selected:!0});var o=h(n);e=d(o,r),o.forEach(p),this.h()},h:function(){n.__value=o=t[14].value,n.value=n.__value,n.selected=c=t[14].value==D(t[11].bind)},m:function(t,o){g(t,n,o),k(n,e)},p:function(t,i){4&i&&r!==(r=t[14].name+"")&&w(e,r),4&i&&o!==(o=t[14].value)&&(n.__value=o,n.value=n.__value),4&i&&c!==(c=t[14].value==D(t[11].bind))&&(n.selected=c)},d:function(t){t&&p(n)}}}function it(t){var n,e,o,c="checkbox"!==t[11].type&&tt(t);function r(t,n){return"text"===t[11].type?ct:"number"===t[11].type?ot:"select"===t[11].type?et:"checkbox"===t[11].type?nt:void 0}var i=r(t),a=i&&i(t);return{c:function(){n=u("div"),c&&c.c(),e=s(),a&&a.c(),o=s(),this.h()},l:function(t){n=f(t,"DIV",{class:!0});var r=h(n);c&&c.l(r),e=m(r),a&&a.l(r),o=m(r),r.forEach(p),this.h()},h:function(){v(n,"class","uk-margin")},m:function(t,r){g(t,n,r),c&&c.m(n,null),k(n,e),a&&a.m(n,null),k(n,o)},p:function(t,u){"checkbox"!==t[11].type?c?c.p(t,u):((c=tt(t)).c(),c.m(n,e)):c&&(c.d(1),c=null),i===(i=r(t))&&a?a.p(t,u):(a&&a.d(1),(a=i&&i(t))&&(a.c(),a.m(n,o)))},d:function(t){t&&p(n),c&&c.d(),a&&a.d()}}}function at(t){var n,e,o,c,r,i,a,y,D,I,T,S,A,V,z,P=t[2]&&Y(t),L=t[6].default,N=$(L,t,t[5],null);return{c:function(){n=u("div"),e=u("div"),o=u("div"),c=u("div"),r=u("div"),i=u("h4"),a=l(t[0]),y=s(),D=u("div"),P&&P.c(),I=s(),T=u("a"),S=s(),A=u("div"),N&&N.c(),this.h()},l:function(u){n=f(u,"DIV",{id:!0,class:!0});var s=h(n);e=f(s,"DIV",{class:!0});var l=h(e);o=f(l,"DIV",{class:!0});var v=h(o);c=f(v,"DIV",{class:!0});var g=h(c);r=f(g,"DIV",{class:!0});var k=h(r);i=f(k,"H4",{});var w=h(i);a=d(w,t[0]),w.forEach(p),k.forEach(p),y=m(g),D=f(g,"DIV",{class:!0});var $=h(D);P&&P.l($),I=m($),T=f($,"A",{href:!0,class:!0,title:!0,"uk-tooltip":!0,"uk-icon":!0}),h(T).forEach(p),$.forEach(p),g.forEach(p),v.forEach(p),S=m(l),A=f(l,"DIV",{class:!0});var x=h(A);N&&N.l(x),x.forEach(p),l.forEach(p),s.forEach(p),this.h()},h:function(){v(r,"class","uk-width-expand"),v(T,"href",""),v(T,"class","uk-sortable-handle uk-icon-link uk-visible@m"),v(T,"title","Move"),v(T,"uk-tooltip",""),v(T,"uk-icon","move"),v(D,"class","uk-width-auto uk-text-right"),v(c,"class","uk-grid uk-grid-medium"),v(o,"class","uk-card-header"),v(A,"class","uk-card-body"),v(e,"class","uk-card uk-card-default uk-card-small uk-card-hover"),v(n,"id",t[4]),v(n,"class",V="small"==t[1]?"uk-width-1-2@s uk-width-1-3@l uk-width-1-4@xl":"medium"==t[1]?"uk-width-1-1 uk-width-1-3@l uk-width-1-2@xl":"uk-width-1-2@l")},m:function(t,u){g(t,n,u),k(n,e),k(e,o),k(o,c),k(c,r),k(r,i),k(i,a),k(c,y),k(c,D),P&&P.m(D,null),k(D,I),k(D,T),k(e,S),k(e,A),N&&N.m(A,null),z=!0},p:function(t,e){var o=x(e,1)[0];(!z||1&o)&&w(a,t[0]),t[2]?P?P.p(t,o):((P=Y(t)).c(),P.m(D,I)):P&&(P.d(1),P=null),N&&N.p&&32&o&&b(N,L,t,t[5],o,null,null),(!z||16&o)&&v(n,"id",t[4]),(!z||2&o&&V!==(V="small"==t[1]?"uk-width-1-2@s uk-width-1-3@l uk-width-1-4@xl":"medium"==t[1]?"uk-width-1-1 uk-width-1-3@l uk-width-1-2@xl":"uk-width-1-2@l"))&&v(n,"class",V)},i:function(t){z||(E(N,t),z=!0)},o:function(t){R(N,t),z=!1},d:function(t){t&&p(n),P&&P.d(),N&&N.d(t)}}}function ut(t,n,e){var o,c=n.$$slots,r=void 0===c?{}:c,i=n.$$scope,a=n.title,u=void 0===a?"":a,s=n.size,l=void 0===s?"large":s,f=n.settings,h=void 0!==f&&f,p=n.settingsInfo,m=void 0!==p&&p;return t.$$set=function(t){"title"in t&&e(0,u=t.title),"size"in t&&e(1,l=t.size),"settings"in t&&e(2,h=t.settings),"settingsInfo"in t&&e(3,m=t.settingsInfo),"$$scope"in t&&e(5,i=t.$$scope)},t.$$.update=function(){1&t.$$.dirty&&e(4,o=u.toLowerCase().replace(/[^\s\w\-]+/g,"").replace(/\s+/g,"-"))},[u,l,h,m,o,i,r,function(t,n){return t.bind.set(n.target.value)},function(t,n){return t.bind.set(parseInt(n.target.value))},function(t,n){return t.bind.set(n.target.options[n.target.selectedIndex].value)},function(t,n){return t.bind.set(n.target.checked)}]}var st=function(n){t(u,a);var e=G(u);function u(t){var n;return o(this,u),n=e.call(this),c(i(n),t,ut,at,r,{title:0,size:1,settings:2,settingsInfo:3}),n}return u}();function lt(t){var o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var c,r=n(t);if(o){var i=n(this).constructor;c=Reflect.construct(r,arguments,i)}else c=r.apply(this,arguments);return e(this,c)}}function ft(t){var n,e,o,c,r,i,a,y,$,x,b,E,R,D,I,S,A,V,z=t[0]?"ANOTHER":"A";return{c:function(){n=u("div"),e=u("h1"),o=l("TAKE ME"),c=s(),r=u("h2"),i=l("TO "),a=l(z),y=s(),$=u("h1"),x=l("USELESS"),b=s(),E=u("h1"),R=l("WEBSITE"),D=s(),I=u("button"),S=l("PLEASE"),this.h()},l:function(t){n=f(t,"DIV",{class:!0});var u=h(n);e=f(u,"H1",{class:!0});var s=h(e);o=d(s,"TAKE ME"),s.forEach(p),c=m(u),r=f(u,"H2",{class:!0});var l=h(r);i=d(l,"TO "),a=d(l,z),l.forEach(p),y=m(u),$=f(u,"H1",{class:!0});var v=h($);x=d(v,"USELESS"),v.forEach(p),b=m(u),E=f(u,"H1",{class:!0});var g=h(E);R=d(g,"WEBSITE"),g.forEach(p),D=m(u),I=f(u,"BUTTON",{class:!0});var k=h(I);S=d(k,"PLEASE"),k.forEach(p),u.forEach(p),this.h()},h:function(){v(e,"class","uk-margin-remove sk-monospace svelte-zsrxpp"),v(r,"class","uk-margin-remove sk-monospace svelte-zsrxpp"),v($,"class","uk-margin-remove sk-monospace svelte-zsrxpp"),v(E,"class","uk-margin-remove sk-monospace svelte-zsrxpp"),v(I,"class","uk-margin-top uk-margin-small-bottom sk-monospace svelte-zsrxpp"),v(n,"class","uk-text-center")},m:function(u,s){g(u,n,s),k(n,e),k(e,o),k(n,c),k(n,r),k(r,i),k(r,a),k(n,y),k(n,$),k($,x),k(n,b),k(n,E),k(E,R),k(n,D),k(n,I),k(I,S),A||(V=T(I,"click",t[1]),A=!0)},p:function(t,n){1&n&&z!==(z=t[0]?"ANOTHER":"A")&&w(a,z)},d:function(t){t&&p(n),A=!1,V()}}}function ht(t){var n,e;return n=new st({props:{title:"Useless Web",size:"small",$$slots:{default:[ft]},$$scope:{ctx:t}}}),{c:function(){S(n.$$.fragment)},l:function(t){A(n.$$.fragment,t)},m:function(t,o){V(n,t,o),e=!0},p:function(t,e){var o=x(e,1)[0],c={};17&o&&(c.$$scope={dirty:o,ctx:t}),n.$set(c)},i:function(t){e||(E(n.$$.fragment,t),e=!0)},o:function(t){R(n.$$.fragment,t),e=!1},d:function(t){z(n,t)}}}var pt=["http://heeeeeeeey.com/","http://corndog.io/","https://alwaysjudgeabookbyitscover.com","http://thatsthefinger.com/","http://cant-not-tweet-this.com/","http://weirdorconfusing.com/","http://eelslap.com/","http://www.staggeringbeauty.com/","http://burymewithmymoney.com/","https://smashthewalls.com/","https://jacksonpollock.org/","http://endless.horse/","http://www.trypap.com/","http://www.republiquedesmangues.fr/","http://www.movenowthinklater.com/","http://www.partridgegetslucky.com/","http://www.rrrgggbbb.com/","http://beesbeesbees.com/","http://www.koalastothemax.com/","http://www.everydayim.com/","http://randomcolour.com/","http://cat-bounce.com/","http://chrismckenzie.com/","https://thezen.zone/","http://hasthelargehadroncolliderdestroyedtheworldyet.com/","http://ninjaflex.com/","http://ihasabucket.com/","http://corndogoncorndog.com/","http://www.hackertyper.com/","https://pointerpointer.com","http://imaninja.com/","http://drawing.garden/","http://www.ismycomputeron.com/","http://www.nullingthevoid.com/","http://www.muchbetterthanthis.com/","http://www.yesnoif.com/","http://lacquerlacquer.com","http://potatoortomato.com/","http://iamawesome.com/","https://strobe.cool/","http://www.pleaselike.com/","http://crouton.net/","http://corgiorgy.com/","http://www.wutdafuk.com/","http://unicodesnowmanforyou.com/","http://chillestmonkey.com/","http://scroll-o-meter.club/","http://www.crossdivisions.com/","http://tencents.info/","http://www.patience-is-a-virtue.org/","http://pixelsfighting.com/","http://isitwhite.com/","https://existentialcrisis.com/","http://onemillionlols.com/","http://www.omfgdogs.com/","http://oct82.com/","http://chihuahuaspin.com/","http://www.blankwindows.com/","http://dogs.are.the.most.moe/","http://tunnelsnakes.com/","http://www.trashloop.com/","http://www.ascii-middle-finger.com/","http://spaceis.cool/","http://www.donothingfor2minutes.com/","http://buildshruggie.com/","http://buzzybuzz.biz/","http://yeahlemons.com/","http://wowenwilsonquiz.com","https://thepigeon.org/","http://notdayoftheweek.com/","http://www.amialright.com/","http://nooooooooooooooo.com/","https://greatbignothing.com/","https://zoomquilt.org/","https://dadlaughbutton.com/","https://www.bouncingdvdlogo.com/"];function mt(t,n,e){var o=!1,c=[];return P((function(){if(c=pt.slice(),localStorage.currentSiteList){var t=JSON.parse(localStorage.currentSiteList).filter((function(t){return-1!==pt.indexOf(t)}));t.length>0&&(c=t)}})),[o,function(){var t,n,r;e(0,o=!0),function(t){window.open(t)}((t=7>c.length?c.length:7,n=Math.floor(Math.random()*t),r=c[n],c.splice(n,1),r)),0===c.length&&(c=pt.slice()),localStorage.currentSiteList=JSON.stringify(c)}]}var dt=function(n){t(u,a);var e=lt(u);function u(t){var n;return o(this,u),n=e.call(this),c(i(n),t,mt,ht,r,{}),n}return u}();function vt(t){var o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var c,r=n(t);if(o){var i=n(this).constructor;c=Reflect.construct(r,arguments,i)}else c=r.apply(this,arguments);return e(this,c)}}function gt(t){var n,e,o,c;return{c:function(){n=u("div"),this.h()},l:function(t){n=f(t,"DIV",{id:!0,class:!0}),h(n).forEach(p),this.h()},h:function(){v(n,"id","coin"),v(n,"class",e=L(t[0])+" svelte-mzj0qe")},m:function(e,r){g(e,n,r),t[4](n),o||(c=T(n,"click",t[3]),o=!0)},p:function(t,o){1&o&&e!==(e=L(t[0])+" svelte-mzj0qe")&&v(n,"class",e)},d:function(e){e&&p(n),t[4](null),o=!1,c()}}}function kt(t){var n,e=t[1]&&gt(t);return{c:function(){e&&e.c(),n=N()},l:function(t){e&&e.l(t),n=N()},m:function(t,o){e&&e.m(t,o),g(t,n,o)},p:function(t,o){t[1]?e?e.p(t,o):((e=gt(t)).c(),e.m(n.parentNode,n)):e&&(e.d(1),e=null)},d:function(t){e&&e.d(t),t&&p(n)}}}function wt(t){var n,e;return n=new st({props:{title:"Coin Flip",size:"small",$$slots:{default:[kt]},$$scope:{ctx:t}}}),{c:function(){S(n.$$.fragment)},l:function(t){A(n.$$.fragment,t)},m:function(t,o){V(n,t,o),e=!0},p:function(t,e){var o=x(e,1)[0],c={};39&o&&(c.$$scope={dirty:o,ctx:t}),n.$set(c)},i:function(t){e||(E(n.$$.fragment,t),e=!0)},o:function(t){R(n.$$.fragment,t),e=!1},d:function(t){z(n,t)}}}function yt(t,n,e){var o,c="",r=!0;function i(){return(i=O(j.mark((function t(){var n;return j.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(0,c=""),e(1,r=!1),t.next=4,H();case 4:e(1,r=!0),n=Math.random(),e(0,c=n<=.5?"heads":"tails");case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return[c,r,o,function(){return i.apply(this,arguments)},function(t){C[t?"unshift":"push"]((function(){e(2,o=t)}))}]}var $t=function(n){t(u,a);var e=vt(u);function u(t){var n;return o(this,u),n=e.call(this),c(i(n),t,yt,wt,r,{}),n}return u}();function xt(t){var o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var c,r=n(t);if(o){var i=n(this).constructor;c=Reflect.construct(r,arguments,i)}else c=r.apply(this,arguments);return e(this,c)}}function bt(t,n,e){var o=t.slice();return o[13]=n[e],o}function Et(t){var n,e,o;return{c:function(){n=u("div"),e=u("h1"),o=l("Click here to spin!"),this.h()},l:function(t){n=f(t,"DIV",{class:!0});var c=h(n);e=f(c,"H1",{class:!0});var r=h(e);o=d(r,"Click here to spin!"),r.forEach(p),c.forEach(p),this.h()},h:function(){v(e,"class","slot-machine-item-title svelte-kaby32"),v(n,"class","slot-machine-item svelte-kaby32")},m:function(t,c){g(t,n,c),k(n,e),k(e,o)},d:function(t){t&&p(n)}}}function Rt(t){var n,e,o,c,r=t[13]+"";return{c:function(){n=u("div"),e=u("h1"),o=l(r),c=s(),this.h()},l:function(t){n=f(t,"DIV",{class:!0});var i=h(n);e=f(i,"H1",{class:!0});var a=h(e);o=d(a,r),a.forEach(p),c=m(i),i.forEach(p),this.h()},h:function(){v(e,"class","slot-machine-item-title svelte-kaby32"),v(n,"class","slot-machine-item svelte-kaby32")},m:function(t,r){g(t,n,r),k(n,e),k(e,o),k(n,c)},p:function(t,n){4&n&&r!==(r=t[13]+"")&&w(o,r)},d:function(t){t&&p(n)}}}function Dt(t){var n,e,o,c,r,i,a,w,y,$,x,b=""!==t[1][t[5]]&&It(t);return{c:function(){n=u("div"),e=u("span"),o=s(),c=u("div"),r=u("input"),i=s(),b&&b.c(),a=s(),w=u("button"),y=l("Copy"),this.h()},l:function(t){n=f(t,"DIV",{class:!0});var u=h(n);e=f(u,"SPAN",{class:!0,"data-uk-icon":!0,"data-uk-tooltip":!0,title:!0}),h(e).forEach(p),u.forEach(p),o=m(t),c=f(t,"DIV",{class:!0});var s=h(c);r=f(s,"INPUT",{class:!0,type:!0,readonly:!0,value:!0}),i=m(s),b&&b.l(s),s.forEach(p),a=m(t),w=f(t,"BUTTON",{class:!0});var l=h(w);y=d(l,"Copy"),l.forEach(p),this.h()},h:function(){v(e,"class","uk-width-auto"),v(e,"data-uk-icon","icon: arrow-down; ratio: 3"),v(e,"data-uk-tooltip","pos: left"),v(e,"title","Result"),v(n,"class","uk-width-1-1 uk-flex uk-flex-center uk-margin-bottom"),v(r,"class","uk-input uk-form-large"),v(r,"type","text"),r.readOnly=!0,r.value=t[5],v(c,"class","uk-text-center"),v(w,"class","uk-button uk-button-primary uk-width-1-1 uk-margin-small-top")},m:function(u,s){g(u,n,s),k(n,e),g(u,o,s),g(u,c,s),k(c,r),t[9](r),k(c,i),b&&b.m(c,null),g(u,a,s),g(u,w,s),k(w,y),$||(x=[T(r,"click",(function(){M(At(t[6]))&&At(t[6]).apply(this,arguments)})),T(w,"click",(function(){M(t[0](t[5]))&&t[0](t[5]).apply(this,arguments)}))],$=!0)},p:function(n,e){t=n,32&e&&r.value!==t[5]&&(r.value=t[5]),""!==t[1][t[5]]?b?b.p(t,e):((b=It(t)).c(),b.m(c,null)):b&&(b.d(1),b=null)},d:function(e){e&&p(n),e&&p(o),e&&p(c),t[9](null),b&&b.d(),e&&p(a),e&&p(w),$=!1,U(x)}}}function It(t){var n,e,o,c,r=t[1][t[5]]+"";return{c:function(){n=u("a"),e=l("by @"),o=l(r),this.h()},l:function(t){n=f(t,"A",{class:!0,href:!0});var c=h(n);e=d(c,"by @"),o=d(c,r),c.forEach(p),this.h()},h:function(){v(n,"class","uk-text-meta"),v(n,"href",c="https://twitter.com/"+t[1][t[5]])},m:function(t,c){g(t,n,c),k(n,e),k(n,o)},p:function(t,e){34&e&&r!==(r=t[1][t[5]]+"")&&w(o,r),34&e&&c!==(c="https://twitter.com/"+t[1][t[5]])&&v(n,"href",c)},d:function(t){t&&p(n)}}}function Tt(t){for(var n,e,o,c,r,i,a,l=t[4]&&Et(),d=t[2],w=[],$=0;$<d.length;$+=1)w[$]=Rt(bt(t,d,$));var x=!t[4]&&""!==t[5]&&Dt(t);return{c:function(){n=u("div"),e=u("div"),l&&l.c(),o=s();for(var t=0;t<w.length;t+=1)w[t].c();c=s(),x&&x.c(),r=N(),this.h()},l:function(t){n=f(t,"DIV",{class:!0});var i=h(n);e=f(i,"DIV",{class:!0});var a=h(e);l&&l.l(a),o=m(a);for(var u=0;u<w.length;u+=1)w[u].l(a);a.forEach(p),i.forEach(p),c=m(t),x&&x.l(t),r=N(),this.h()},h:function(){v(e,"class","slot-machine-container svelte-kaby32"),v(n,"class","slot-machine svelte-kaby32")},m:function(u,s){g(u,n,s),k(n,e),l&&l.m(e,null),k(e,o);for(var f=0;f<w.length;f+=1)w[f].m(e,null);t[8](e),g(u,c,s),x&&x.m(u,s),g(u,r,s),i||(a=T(n,"click",t[7]),i=!0)},p:function(t,n){if(t[4]?l||((l=Et()).c(),l.m(e,o)):l&&(l.d(1),l=null),4&n){var c;for(d=t[2],c=0;c<d.length;c+=1){var i=bt(t,d,c);w[c]?w[c].p(i,n):(w[c]=Rt(i),w[c].c(),w[c].m(e,null))}for(;c<w.length;c+=1)w[c].d(1);w.length=d.length}t[4]||""===t[5]?x&&(x.d(1),x=null):x?x.p(t,n):((x=Dt(t)).c(),x.m(r.parentNode,r))},d:function(e){e&&p(n),l&&l.d(),y(w,e),t[8](null),e&&p(c),x&&x.d(e),e&&p(r),i=!1,a()}}}function St(t){var n,e;return n=new st({props:{title:"Answer Chooser (German)",size:"large",$$slots:{default:[Tt]},$$scope:{ctx:t}}}),{c:function(){S(n.$$.fragment)},l:function(t){A(n.$$.fragment,t)},m:function(t,o){V(n,t,o),e=!0},p:function(t,e){var o=x(e,1)[0],c={};65663&o&&(c.$$scope={dirty:o,ctx:t}),n.$set(c)},i:function(t){e||(E(n.$$.fragment,t),e=!0)},o:function(t){R(n.$$.fragment,t),e=!1},d:function(t){z(n,t)}}}function At(t){t.select(),t.setSelectionRange(0,t.value.length)}function Vt(t,n,e){var o,c,r,i=[],a=!0,u="",s=0,l=n.copyText;function f(){e(2,i=[]);for(var t=0;t<=2;t++)e(2,i=[].concat(_(i),_(Object.keys(o))))}function h(){var t=c.children,n=0;do{n=Math.floor(Math.random()*t.length)}while((n>s?n-s:s-n)<10);return s=n,t[n]}function p(){return(p=O(j.mark((function t(){var n;return j.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(o){t.next=2;break}return t.abrupt("return");case 2:return a&&e(4,a=!1),e(5,u=""),t.next=6,H();case 6:n=h(),e(3,c.style.top=-n.offsetTop+"px",c),setTimeout((function(){e(5,u=n.innerText.trim())}),1100);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return P(O(j.mark((function t(){var n;return j.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://answers.fun.skayo.dev/answers.json");case 2:return n=t.sent,t.t0=e,t.next=6,n.json();case 6:t.t1=o=t.sent,(0,t.t0)(1,t.t1),f();case 9:case"end":return t.stop()}}),t)})))),t.$$set=function(t){"copyText"in t&&e(0,l=t.copyText)},[l,o,i,c,a,u,r,function(){return p.apply(this,arguments)},function(t){C[t?"unshift":"push"]((function(){e(3,c=t)}))},function(t){C[t?"unshift":"push"]((function(){e(6,r=t)}))}]}var zt=function(n){t(u,a);var e=xt(u);function u(t){var n;return o(this,u),n=e.call(this),c(i(n),t,Vt,St,r,{copyText:0}),n}return u}();function Pt(t){var o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var c,r=n(t);if(o){var i=n(this).constructor;c=Reflect.construct(r,arguments,i)}else c=r.apply(this,arguments);return e(this,c)}}function Lt(t){var n;return{c:function(){n=u("textarea"),this.h()},l:function(t){n=f(t,"TEXTAREA",{readonly:!0,style:!0}),h(n).forEach(p),this.h()},h:function(){n.readOnly="readonly",B(n,"position","absolute"),B(n,"left","-9999px")},m:function(e,o){g(e,n,o),t[2](n)},p:W,i:W,o:W,d:function(e){e&&p(n),t[2](null)}}}function Nt(t,n,e){var o;return[o,function(t){if(navigator.clipboard)return navigator.clipboard.writeText(t);e(0,o.value=t,o);var n=document.getSelection().rangeCount>0&&document.getSelection().getRangeAt(0);o.select();var c=!1;try{c=document.execCommand("copy")}catch(t){}return n&&(document.getSelection().removeAllRanges(),document.getSelection().addRange(n)),c?Promise.resolve():Promise.reject()},function(t){C[t?"unshift":"push"]((function(){e(0,o=t)}))}]}var Ot=function(n){t(u,a);var e=Pt(u);function u(t){var n;return o(this,u),n=e.call(this),c(i(n),t,Nt,Lt,r,{copyText:1}),n}return q(u,[{key:"copyText",get:function(){return this.$$.ctx[1]}}]),u}();function jt(t){var o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var c,r=n(t);if(o){var i=n(this).constructor;c=Reflect.construct(r,arguments,i)}else c=r.apply(this,arguments);return e(this,c)}}function Ht(t,n,e){var o=n.showAlert,c=void 0===o?function(t){return alert(t)}:o;return P(O(j.mark((function t(){var n;return j.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,import("./uikit.36db45ba.js");case 2:n=t.sent.default,e(0,c=n.modal.alert);case 4:case"end":return t.stop()}}),t)})))),t.$$set=function(t){"showAlert"in t&&e(0,c=t.showAlert)},[c]}var Ct=function(n){t(u,a);var e=jt(u);function u(t){var n;return o(this,u),n=e.call(this),c(i(n),t,Ht,null,r,{showAlert:0}),n}return u}();function Mt(t){var o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var c,r=n(t);if(o){var i=n(this).constructor;c=Reflect.construct(r,arguments,i)}else c=r.apply(this,arguments);return e(this,c)}}function Ut(t){var n,e,o,c,r,i,a,l,d,w,y,$,b,D;function I(n){t[2].call(null,n)}o=new zt({props:{copyText:t[0]}}),r=new $t({}),a=new dt({});var T={};function P(n){t[3].call(null,n)}void 0!==t[0]&&(T.copyText=t[0]),d=new Ot({props:T}),C.push((function(){return J(d,"copyText",I)}));var L={};return void 0!==t[1]&&(L.showAlert=t[1]),$=new Ct({props:L}),C.push((function(){return J($,"showAlert",P)})),{c:function(){n=s(),e=u("div"),S(o.$$.fragment),c=s(),S(r.$$.fragment),i=s(),S(a.$$.fragment),l=s(),S(d.$$.fragment),y=s(),S($.$$.fragment),this.h()},l:function(t){F('[data-svelte="svelte-s63nxz"]',document.head).forEach(p),n=m(t),e=f(t,"DIV",{class:!0,"uk-grid":!0,"uk-sortable":!0});var u=h(e);A(o.$$.fragment,u),c=m(u),A(r.$$.fragment,u),i=m(u),A(a.$$.fragment,u),u.forEach(p),l=m(t),A(d.$$.fragment,t),y=m(t),A($.$$.fragment,t),this.h()},h:function(){document.title="Skayo's Funbox",v(e,"class","uk-grid-medium"),v(e,"uk-grid",""),v(e,"uk-sortable","handle: .uk-sortable-handle")},m:function(t,u){g(t,n,u),g(t,e,u),V(o,e,null),k(e,c),V(r,e,null),k(e,i),V(a,e,null),g(t,l,u),V(d,t,u),g(t,y,u),V($,t,u),D=!0},p:function(t,n){var e=x(n,1)[0],c={};1&e&&(c.copyText=t[0]),o.$set(c);var r={};!w&&1&e&&(w=!0,r.copyText=t[0],K((function(){return w=!1}))),d.$set(r);var i={};!b&&2&e&&(b=!0,i.showAlert=t[1],K((function(){return b=!1}))),$.$set(i)},i:function(t){D||(E(o.$$.fragment,t),E(r.$$.fragment,t),E(a.$$.fragment,t),E(d.$$.fragment,t),E($.$$.fragment,t),D=!0)},o:function(t){R(o.$$.fragment,t),R(r.$$.fragment,t),R(a.$$.fragment,t),R(d.$$.fragment,t),R($.$$.fragment,t),D=!1},d:function(t){t&&p(n),t&&p(e),z(o),z(r),z(a),t&&p(l),z(d,t),t&&p(y),z($,t)}}}function _t(t,n,e){var o,c;return[o,c,function(t){e(0,o=t)},function(t){e(1,c=t)}]}var qt=function(n){t(u,a);var e=Mt(u);function u(t){var n;return o(this,u),n=e.call(this),c(i(n),t,_t,Ut,r,{}),n}return u}();export default qt;
