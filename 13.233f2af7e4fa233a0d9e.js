(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"ct+p":function(t,o,e){"use strict";e.r(o),e.d(o,"HomePageModule",function(){return b});var n=e("ofXK"),i=e("3Pt+"),c=e("TEn/"),r=e("tyNb"),a=e("fXoL");function l(t,o){if(1&t){const t=a.Pb();a.Ob(0,"ion-tab-button",2),a.Wb("click",function(){a.gc(t);const e=o.$implicit;return a.Yb().change(e.path)}),a.Kb(1,"ion-icon",3),a.Ob(2,"ion-label"),a.kc(3),a.Nb(),a.Nb()}if(2&t){const t=o.$implicit;a.dc("tab",t.path),a.zb(1),a.dc("icon",t.icon),a.zb(2),a.lc(t.description)}}const s=[{path:"",redirectTo:"home/explore",pathMatch:"full"},{path:"",component:(()=>{class t{constructor(t){this.router=t,this.tabs=[{path:"explore",description:"Para ti",icon:"person-outline"},{path:"categories",icon:"globe-outline",description:"Encabezados"},{path:"favorites",icon:"star-outline",description:"Favoritos"}];for(let o of this.tabs)o.path==this.router.url.split("/")[2]&&(o.icon=o.icon.split("-")[0])}change(t){for(let o of this.tabs)o.path==t?o.icon=o.icon.split("-")[0]:-1==o.icon.indexOf("-")&&(o.icon+="-outline")}}return t.\u0275fac=function(o){return new(o||t)(a.Jb(r.g))},t.\u0275cmp=a.Db({type:t,selectors:[["app-home"]],decls:3,vars:1,consts:[["slot","bottom","color","dark"],[3,"tab","click",4,"ngFor","ngForOf"],[3,"tab","click"],[3,"icon"]],template:function(t,o){1&t&&(a.Ob(0,"ion-tabs"),a.Ob(1,"ion-tab-bar",0),a.jc(2,l,4,3,"ion-tab-button",1),a.Nb(),a.Nb()),2&t&&(a.zb(2),a.dc("ngForOf",o.tabs))},directives:[c.y,c.w,n.i,c.x,c.m,c.p],styles:[""]}),t})(),children:[{path:"explore",loadChildren:()=>Promise.all([e.e(2),e.e(0),e.e(11)]).then(e.bind(null,"vwuq")).then(t=>t.ExplorePageModule)},{path:"categories",loadChildren:()=>Promise.all([e.e(2),e.e(0),e.e(10)]).then(e.bind(null,"kMJQ")).then(t=>t.CategoriesPageModule)},{path:"favorites",loadChildren:()=>Promise.all([e.e(2),e.e(12)]).then(e.bind(null,"uz0P")).then(t=>t.FavoritesPageModule)},{path:"",redirectTo:"/home/explore",pathMatch:"full"}]}];let p=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=a.Hb({type:t}),t.\u0275inj=a.Gb({imports:[[r.i.forChild(s)],r.i]}),t})(),b=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=a.Hb({type:t}),t.\u0275inj=a.Gb({imports:[[n.c,i.a,c.C,p]]}),t})()}}]);