import{s as kt,n as it,r as Lt,e as ct,o as zt,i as Jt,h as qt,b as Ut,j as Pt,k as yt}from"../chunks/scheduler.f64133fb.js";import{S as bt,i as Et,g as f,s as C,h as v,c as w,j as B,y as W,f as _,k as e,a as A,x as a,z as O,A as Gt,m as rt,B as Rt,n as at,o as pt,C as J,D as Xt,E as Wt,F as Dt,G as Ht,r as Tt,u as Ct,v as wt,d as vt,t as ht,w as It,e as jt,b as Qt,p as Yt}from"../chunks/index.dc929e09.js";import{c as Zt,r as dt,d as ft,p as $t,e as te,s as ee,o as Nt,b as gt}from"../chunks/authStore.cad14b08.js";import{g as se}from"../chunks/navigation.4f7bca72.js";import{e as Kt,u as le,d as re}from"../chunks/each.1fd5ded5.js";import{w as Ft,d as ae}from"../chunks/index.a4d72958.js";function ne(r){let l,t,s,h,m,u,c,o,p,g,k="Home",y,V,I,E,T="Log Out",n,i;return{c(){l=f("link"),t=C(),s=f("link"),h=C(),m=f("link"),u=C(),c=f("div"),o=f("ul"),p=f("li"),g=f("button"),g.textContent=k,y=C(),V=f("div"),I=f("li"),E=f("button"),E.textContent=T,this.h()},l(b){l=v(b,"LINK",{rel:!0,href:!0}),t=w(b),s=v(b,"LINK",{rel:!0,href:!0,crossorigin:!0}),h=w(b),m=v(b,"LINK",{href:!0,rel:!0}),u=w(b),c=v(b,"DIV",{class:!0});var N=B(c);o=v(N,"UL",{class:!0});var x=B(o);p=v(x,"LI",{class:!0});var K=B(p);g=v(K,"BUTTON",{class:!0,"data-svelte-h":!0}),W(g)!=="svelte-18ubz0h"&&(g.textContent=k),K.forEach(_),y=w(x),V=v(x,"DIV",{class:!0});var S=B(V);I=v(S,"LI",{class:!0});var d=B(I);E=v(d,"BUTTON",{class:!0,"data-svelte-h":!0}),W(E)!=="svelte-1o27alj"&&(E.textContent=T),d.forEach(_),S.forEach(_),x.forEach(_),N.forEach(_),this.h()},h(){e(l,"rel","preconnect"),e(l,"href","https://fonts.googleapis.com"),e(s,"rel","preconnect"),e(s,"href","https://fonts.gstatic.com"),e(s,"crossorigin",""),e(m,"href","https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200..1000;1,200..1000&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"),e(m,"rel","stylesheet"),e(g,"class","svelte-1vnjkc7"),e(p,"class","svelte-1vnjkc7"),e(E,"class","svelte-1vnjkc7"),e(I,"class","svelte-1vnjkc7"),e(V,"class","auth svelte-1vnjkc7"),e(o,"class","svelte-1vnjkc7"),e(c,"class","containerNav svelte-1vnjkc7")},m(b,N){A(b,l,N),A(b,t,N),A(b,s,N),A(b,h,N),A(b,m,N),A(b,u,N),A(b,c,N),a(c,o),a(o,p),a(p,g),a(o,y),a(o,V),a(V,I),a(I,E),n||(i=[O(g,"click",r[0]),O(E,"click",Zt.logout)],n=!0)},p:it,i:it,o:it,d(b){b&&(_(l),_(t),_(s),_(h),_(m),_(u),_(c)),n=!1,Lt(i)}}}function ie(r){async function l(){se("/")}return[l]}class oe extends bt{constructor(l){super(),Et(this,l,ie,ne,kt,{})}}const st=Ft({tasks:"",currentEdit:"",currentNameEdit:"",currentDescEdit:"",currentImpEdit:"",currentUrgEdit:"",currentColEdit:""}),Vt=Ft({tasks:""}),_t={addTask:async(r,l,t,s,h,m,u,c)=>{const o=dt(ft,"users/"+r+"/tasks");await $t(o,{task:l,description:t,importance:s,urgency:h,color:m,inProgress:u,completed:c})},removeTask:async(r,l)=>{const t=dt(ft,"users/"+r+"/tasks/"+l);await te(t)},editTask:async(r,l,t,s,h,m,u,c,o)=>{const p=dt(ft,"users/"+r+"/tasks/"+l);await ee(p,{task:t,description:s,importance:h,urgency:m,color:u,inProgress:c,completed:o})},getTasks:async r=>{const l=dt(ft,"users/"+r+"/tasks");Nt(l,t=>{const s=t.val();Vt.update(h=>(h.tasks=s,h))})}};function Ot(r,l,t){const s=r.slice();return s[7]=l[t],s}function St(r,l){let t,s,h,m,u,c,o;return{key:r,first:null,c(){t=Gt("circle"),this.h()},l(p){t=Rt(p,"circle",{cx:!0,cy:!0,r:!0,fill:!0,"stroke-width":!0,onmouseover:!0,onmouseout:!0,class:!0}),B(t).forEach(_),this.h()},h(){e(t,"cx",s=l[7].cx),e(t,"cy",h=l[7].cy),e(t,"r",m=l[7].r),e(t,"fill",u=l[7].fill),e(t,"stroke-width","0.05vh"),e(t,"onmouseover","evt.target.setAttribute('stroke', 'white');"),e(t,"onmouseout","evt.target.setAttribute('stroke', 'none');"),e(t,"class","svelte-18saxt8"),this.first=t},m(p,g){A(p,t,g),c||(o=[O(t,"mouseover",function(){Jt(l[4](l[7].id,l[7].desc))&&l[4](l[7].id,l[7].desc).apply(this,arguments)}),O(t,"mouseleave",l[5])],c=!0)},p(p,g){l=p,g&4&&s!==(s=l[7].cx)&&e(t,"cx",s),g&4&&h!==(h=l[7].cy)&&e(t,"cy",h),g&4&&m!==(m=l[7].r)&&e(t,"r",m),g&4&&u!==(u=l[7].fill)&&e(t,"fill",u)},d(p){p&&_(t),c=!1,Lt(o)}}}function ce(r){let l,t,s,h='<hr id="line" class="svelte-18saxt8"/> <div id="left" class="svelte-18saxt8">˂</div> <div id="right" class="svelte-18saxt8">˃</div>',m,u,c='<hr id="line" class="svelte-18saxt8"/> <div id="left" class="svelte-18saxt8">˂</div> <div id="right" class="svelte-18saxt8">˃</div>',o,p,g="Crises",k,y,V="Goals",I,E,T="Distractions",n,i,b="Interruptions",N,x,K="Importance",S,d,lt="Urgency",Y,P,F=[],Q=new Map,M,L,G,q,et,$,Z,tt=Kt(r[2]);const ot=j=>j[7].id;for(let j=0;j<tt.length;j+=1){let U=Ot(r,tt,j),D=ot(U);Q.set(D,F[j]=St(D,U))}return{c(){l=f("div"),t=f("div"),s=f("div"),s.innerHTML=h,m=C(),u=f("div"),u.innerHTML=c,o=C(),p=f("div"),p.textContent=g,k=C(),y=f("div"),y.textContent=V,I=C(),E=f("div"),E.textContent=T,n=C(),i=f("div"),i.textContent=b,N=C(),x=f("div"),x.textContent=K,S=C(),d=f("div"),d.textContent=lt,Y=C(),P=Gt("svg");for(let j=0;j<F.length;j+=1)F[j].c();M=C(),L=f("div"),G=f("h1"),q=rt(r[0]),et=C(),$=f("h2"),Z=rt(r[1]),this.h()},l(j){l=v(j,"DIV",{class:!0});var U=B(l);t=v(U,"DIV",{class:!0});var D=B(t);s=v(D,"DIV",{class:!0,"data-svelte-h":!0}),W(s)!=="svelte-dac3pq"&&(s.innerHTML=h),m=w(D),u=v(D,"DIV",{class:!0,"data-svelte-h":!0}),W(u)!=="svelte-u6p4eg"&&(u.innerHTML=c),o=w(D),p=v(D,"DIV",{id:!0,class:!0,"data-svelte-h":!0}),W(p)!=="svelte-13x6wiq"&&(p.textContent=g),k=w(D),y=v(D,"DIV",{id:!0,class:!0,"data-svelte-h":!0}),W(y)!=="svelte-6i41v0"&&(y.textContent=V),I=w(D),E=v(D,"DIV",{id:!0,class:!0,"data-svelte-h":!0}),W(E)!=="svelte-3kfgzm"&&(E.textContent=T),n=w(D),i=v(D,"DIV",{id:!0,class:!0,"data-svelte-h":!0}),W(i)!=="svelte-13sy1i8"&&(i.textContent=b),N=w(D),x=v(D,"DIV",{id:!0,class:!0,"data-svelte-h":!0}),W(x)!=="svelte-14dypc6"&&(x.textContent=K),S=w(D),d=v(D,"DIV",{id:!0,class:!0,"data-svelte-h":!0}),W(d)!=="svelte-1j9bcde"&&(d.textContent=lt),Y=w(D),P=Rt(D,"svg",{height:!0,width:!0,viewBox:!0,class:!0});var X=B(P);for(let R=0;R<F.length;R+=1)F[R].l(X);X.forEach(_),D.forEach(_),M=w(U),L=v(U,"DIV",{class:!0});var nt=B(L);G=v(nt,"H1",{class:!0});var H=B(G);q=at(H,r[0]),H.forEach(_),et=w(nt),$=v(nt,"H2",{class:!0});var z=B($);Z=at(z,r[1]),z.forEach(_),nt.forEach(_),U.forEach(_),this.h()},h(){e(s,"class","horizontalArrow svelte-18saxt8"),e(u,"class","verticalArrow svelte-18saxt8"),e(p,"id","crises"),e(p,"class","svelte-18saxt8"),e(y,"id","goals"),e(y,"class","svelte-18saxt8"),e(E,"id","distractions"),e(E,"class","svelte-18saxt8"),e(i,"id","interruptions"),e(i,"class","svelte-18saxt8"),e(x,"id","importance"),e(x,"class","svelte-18saxt8"),e(d,"id","urgency"),e(d,"class","svelte-18saxt8"),e(P,"height","100%"),e(P,"width","100%"),e(P,"viewBox","0 0 100 100"),e(P,"class","svelte-18saxt8"),e(t,"class","plot svelte-18saxt8"),e(G,"class","taskTitle svelte-18saxt8"),e($,"class","taskDesc svelte-18saxt8"),e(L,"class","side svelte-18saxt8"),e(l,"class","containerMain svelte-18saxt8")},m(j,U){A(j,l,U),a(l,t),a(t,s),a(t,m),a(t,u),a(t,o),a(t,p),a(t,k),a(t,y),a(t,I),a(t,E),a(t,n),a(t,i),a(t,N),a(t,x),a(t,S),a(t,d),a(t,Y),a(t,P);for(let D=0;D<F.length;D+=1)F[D]&&F[D].m(P,null);a(l,M),a(l,L),a(L,G),a(G,q),a(L,et),a(L,$),a($,Z)},p(j,[U]){U&52&&(tt=Kt(j[2]),F=le(F,U,ot,1,j,tt,Q,P,re,St,null,Ot)),U&1&&pt(q,j[0]),U&2&&pt(Z,j[1])},i:it,o:it,d(j){j&&_(l);for(let U=0;U<F.length;U+=1)F[U].d()}}}function ue(r,l,t){let s,h;ct(r,gt,g=>t(6,s=g));let m="",u="";const c=ae(Vt,g=>g&&g.tasks?Object.values(g.tasks).map(k=>({id:k.task,desc:k.description,cx:k.urgency*10,cy:(10-k.importance)*10,r:2,fill:k.color})):[]);ct(r,c,g=>t(2,h=g));function o(g,k){t(0,m=g),t(1,u=k)}function p(){t(0,m=""),t(1,u="")}return zt(()=>{_t.getTasks(s.currentUser.uid)}),[m,u,h,c,o,p]}class de extends bt{constructor(l){super(),Et(this,l,ue,ce,kt,{})}}function fe(r){let l,t,s,h,m,u,c,o,p,g="X",k,y,V='<h2 class="title svelte-11bti95">Add Task</h2>',I,E,T,n,i,b,N,x,K,S,d,lt,Y,P,F,Q,M,L,G,q,et,$="Colour:",Z,tt,ot,j,U,D="Add Task",X,nt;return{c(){l=f("link"),t=C(),s=f("link"),h=C(),m=f("link"),u=C(),c=f("dialog"),o=f("div"),p=f("button"),p.textContent=g,k=C(),y=f("div"),y.innerHTML=V,I=C(),E=f("input"),T=C(),n=f("textarea"),i=C(),b=f("div"),N=f("p"),x=rt("Importance: "),K=rt(r[4]),S=C(),d=f("input"),lt=C(),Y=f("div"),P=f("p"),F=rt("Urgency: "),Q=rt(r[5]),M=C(),L=f("input"),G=C(),q=f("div"),et=f("p"),et.textContent=$,Z=C(),tt=f("input"),ot=C(),j=f("div"),U=f("button"),U.textContent=D,this.h()},l(H){l=v(H,"LINK",{rel:!0,href:!0}),t=w(H),s=v(H,"LINK",{rel:!0,href:!0,crossorigin:!0}),h=w(H),m=v(H,"LINK",{href:!0,rel:!0}),u=w(H),c=v(H,"DIALOG",{class:!0});var z=B(c);o=v(z,"DIV",{class:!0});var R=B(o);p=v(R,"BUTTON",{class:!0,"data-svelte-h":!0}),W(p)!=="svelte-mqrk3d"&&(p.textContent=g),k=w(R),y=v(R,"DIV",{id:!0,class:!0,"data-svelte-h":!0}),W(y)!=="svelte-g6z19b"&&(y.innerHTML=V),I=w(R),E=v(R,"INPUT",{class:!0,type:!0,placeholder:!0}),T=w(R),n=v(R,"TEXTAREA",{class:!0,type:!0,placeholder:!0}),B(n).forEach(_),i=w(R),b=v(R,"DIV",{class:!0});var ut=B(b);N=v(ut,"P",{class:!0});var mt=B(N);x=at(mt,"Importance: "),K=at(mt,r[4]),mt.forEach(_),S=w(ut),d=v(ut,"INPUT",{class:!0,type:!0,min:!0,max:!0}),ut.forEach(_),lt=w(R),Y=v(R,"DIV",{class:!0});var xt=B(Y);P=v(xt,"P",{class:!0});var Bt=B(P);F=at(Bt,"Urgency: "),Q=at(Bt,r[5]),Bt.forEach(_),M=w(xt),L=v(xt,"INPUT",{class:!0,type:!0,min:!0,max:!0}),xt.forEach(_),G=w(R),q=v(R,"DIV",{class:!0});var Mt=B(q);et=v(Mt,"P",{class:!0,"data-svelte-h":!0}),W(et)!=="svelte-qmu74s"&&(et.textContent=$),Z=w(Mt),tt=v(Mt,"INPUT",{class:!0,type:!0}),Mt.forEach(_),ot=w(R),j=v(R,"DIV",{class:!0});var At=B(j);U=v(At,"BUTTON",{class:!0,"data-svelte-h":!0}),W(U)!=="svelte-5e767g"&&(U.textContent=D),At.forEach(_),R.forEach(_),z.forEach(_),this.h()},h(){e(l,"rel","preconnect"),e(l,"href","https://fonts.googleapis.com"),e(s,"rel","preconnect"),e(s,"href","https://fonts.gstatic.com"),e(s,"crossorigin",""),e(m,"href","https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200..1000;1,200..1000&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"),e(m,"rel","stylesheet"),e(p,"class","exit svelte-11bti95"),p.autofocus=!0,e(y,"id","center"),e(y,"class","svelte-11bti95"),e(E,"class","task svelte-11bti95"),e(E,"type","text"),e(E,"placeholder","Task Name"),e(n,"class","desc svelte-11bti95"),e(n,"type","text"),e(n,"placeholder","Task Description"),e(N,"class","head svelte-11bti95"),e(d,"class","slider svelte-11bti95"),e(d,"type","range"),e(d,"min","1"),e(d,"max","9"),e(b,"class","imp svelte-11bti95"),e(P,"class","head svelte-11bti95"),e(L,"class","slider svelte-11bti95"),e(L,"type","range"),e(L,"min","1"),e(L,"max","9"),e(Y,"class","urg svelte-11bti95"),e(et,"class","colorhead svelte-11bti95"),e(tt,"class","picker svelte-11bti95"),e(tt,"type","color"),e(q,"class","col svelte-11bti95"),e(U,"class","modalButton svelte-11bti95"),e(j,"class","bottom svelte-11bti95"),e(o,"class","content svelte-11bti95"),e(c,"class","svelte-11bti95")},m(H,z){A(H,l,z),A(H,t,z),A(H,s,z),A(H,h,z),A(H,m,z),A(H,u,z),A(H,c,z),a(c,o),a(o,p),a(o,k),a(o,y),a(o,I),a(o,E),J(E,r[2]),a(o,T),a(o,n),J(n,r[3]),a(o,i),a(o,b),a(b,N),a(N,x),a(N,K),a(b,S),a(b,d),J(d,r[4]),a(o,lt),a(o,Y),a(Y,P),a(P,F),a(P,Q),a(Y,M),a(Y,L),J(L,r[5]),a(o,G),a(o,q),a(q,et),a(q,Z),a(q,tt),J(tt,r[6]),a(o,ot),a(o,j),a(j,U),r[16](c),p.focus(),X||(nt=[O(p,"click",r[10]),O(E,"input",r[11]),O(n,"input",r[12]),O(d,"change",r[13]),O(d,"input",r[13]),O(L,"change",r[14]),O(L,"input",r[14]),O(tt,"input",r[15]),O(U,"click",r[7]),O(o,"click",Xt(r[9])),O(c,"close",r[17]),O(c,"click",Wt(r[18]))],X=!0)},p(H,[z]){z&4&&E.value!==H[2]&&J(E,H[2]),z&8&&J(n,H[3]),z&16&&pt(K,H[4]),z&16&&J(d,H[4]),z&32&&pt(Q,H[5]),z&32&&J(L,H[5]),z&64&&J(tt,H[6])},i:it,o:it,d(H){H&&(_(l),_(t),_(s),_(h),_(m),_(u),_(c)),r[16](null),X=!1,Lt(nt)}}}function ve(r,l,t){let s,h;ct(r,Vt,d=>t(19,s=d)),ct(r,gt,d=>t(20,h=d));let{showAddModal:m}=l,{addTask:u}=l,c,o="",p="",g="1",k="1",y="#ff0000";async function V(){if(!o||!p||!g||!k||!y){alert("Please fill out all fields");return}try{_t.getTasks(h.currentUser.uid);for(let d in s.tasks)if(s.tasks[d].task==o){alert("Task already exists");return}else if(s.tasks[d].importance==g&&s.tasks[d].urgency==k){alert("Position on the board is already taken");return}await u(o,p,g,k,y),t(2,o=t(3,p="")),t(6,y="#ff0000"),t(4,g=t(5,k="1")),c.close()}catch(d){alert(d)}}function I(d){qt.call(this,r,d)}const E=()=>c.close();function T(){o=this.value,t(2,o)}function n(){p=this.value,t(3,p)}function i(){g=Dt(this.value),t(4,g)}function b(){k=Dt(this.value),t(5,k)}function N(){y=this.value,t(6,y)}function x(d){Ut[d?"unshift":"push"](()=>{c=d,t(1,c)})}const K=()=>t(0,m=!1),S=()=>c.close();return r.$$set=d=>{"showAddModal"in d&&t(0,m=d.showAddModal),"addTask"in d&&t(8,u=d.addTask)},r.$$.update=()=>{r.$$.dirty&3&&c&&m&&c.showModal()},[m,c,o,p,g,k,y,V,u,I,E,T,n,i,b,N,x,K,S]}class he extends bt{constructor(l){super(),Et(this,l,ve,fe,kt,{showAddModal:0,addTask:8})}}function pe(r){let l,t,s,h="X",m,u,c='<h2 class="title svelte-x0t8c9">Edit Task</h2>',o,p,g,k,y,V,I,E,T=r[2].currentImpEdit+"",n,i,b,N,x,K,S,d=r[2].currentUrgEdit+"",lt,Y,P,F,Q,M,L="Colour:",G,q,et,$,Z,tt="Make Changes",ot,j;return{c(){l=f("dialog"),t=f("div"),s=f("button"),s.textContent=h,m=C(),u=f("div"),u.innerHTML=c,o=C(),p=f("input"),g=C(),k=f("textarea"),y=C(),V=f("div"),I=f("p"),E=rt("Importance: "),n=rt(T),i=C(),b=f("input"),N=C(),x=f("div"),K=f("p"),S=rt("Urgency: "),lt=rt(d),Y=C(),P=f("input"),F=C(),Q=f("div"),M=f("p"),M.textContent=L,G=C(),q=f("input"),et=C(),$=f("div"),Z=f("button"),Z.textContent=tt,this.h()},l(U){l=v(U,"DIALOG",{class:!0});var D=B(l);t=v(D,"DIV",{class:!0});var X=B(t);s=v(X,"BUTTON",{class:!0,"data-svelte-h":!0}),W(s)!=="svelte-mqrk3d"&&(s.textContent=h),m=w(X),u=v(X,"DIV",{id:!0,class:!0,"data-svelte-h":!0}),W(u)!=="svelte-1tp6fmi"&&(u.innerHTML=c),o=w(X),p=v(X,"INPUT",{class:!0,type:!0,placeholder:!0}),g=w(X),k=v(X,"TEXTAREA",{class:!0,type:!0,placeholder:!0}),B(k).forEach(_),y=w(X),V=v(X,"DIV",{class:!0});var nt=B(V);I=v(nt,"P",{class:!0});var H=B(I);E=at(H,"Importance: "),n=at(H,T),H.forEach(_),i=w(nt),b=v(nt,"INPUT",{class:!0,type:!0,min:!0,max:!0}),nt.forEach(_),N=w(X),x=v(X,"DIV",{class:!0});var z=B(x);K=v(z,"P",{class:!0});var R=B(K);S=at(R,"Urgency: "),lt=at(R,d),R.forEach(_),Y=w(z),P=v(z,"INPUT",{class:!0,type:!0,min:!0,max:!0}),z.forEach(_),F=w(X),Q=v(X,"DIV",{class:!0});var ut=B(Q);M=v(ut,"P",{class:!0,"data-svelte-h":!0}),W(M)!=="svelte-qmu74s"&&(M.textContent=L),G=w(ut),q=v(ut,"INPUT",{class:!0,type:!0}),ut.forEach(_),et=w(X),$=v(X,"DIV",{class:!0});var mt=B($);Z=v(mt,"BUTTON",{class:!0,"data-svelte-h":!0}),W(Z)!=="svelte-onzak7"&&(Z.textContent=tt),mt.forEach(_),X.forEach(_),D.forEach(_),this.h()},h(){e(s,"class","exit svelte-x0t8c9"),s.autofocus=!0,e(u,"id","center"),e(u,"class","svelte-x0t8c9"),e(p,"class","task svelte-x0t8c9"),e(p,"type","text"),e(p,"placeholder","Task Name"),e(k,"class","desc svelte-x0t8c9"),e(k,"type","text"),e(k,"placeholder","Task Description"),e(I,"class","head svelte-x0t8c9"),e(b,"class","slider svelte-x0t8c9"),e(b,"type","range"),e(b,"min","1"),e(b,"max","9"),e(V,"class","imp svelte-x0t8c9"),e(K,"class","head svelte-x0t8c9"),e(P,"class","slider svelte-x0t8c9"),e(P,"type","range"),e(P,"min","1"),e(P,"max","9"),e(x,"class","urg svelte-x0t8c9"),e(M,"class","colorhead svelte-x0t8c9"),e(q,"class","picker svelte-x0t8c9"),e(q,"type","color"),e(Q,"class","col svelte-x0t8c9"),e(Z,"class","modalButton svelte-x0t8c9"),e($,"class","bottom svelte-x0t8c9"),e(t,"class","content svelte-x0t8c9"),e(l,"class","svelte-x0t8c9")},m(U,D){A(U,l,D),a(l,t),a(t,s),a(t,m),a(t,u),a(t,o),a(t,p),J(p,r[2].currentNameEdit),a(t,g),a(t,k),J(k,r[2].currentDescEdit),a(t,y),a(t,V),a(V,I),a(I,E),a(I,n),a(V,i),a(V,b),J(b,r[2].currentImpEdit),a(t,N),a(t,x),a(x,K),a(K,S),a(K,lt),a(x,Y),a(x,P),J(P,r[2].currentUrgEdit),a(t,F),a(t,Q),a(Q,M),a(Q,G),a(Q,q),J(q,r[2].currentColEdit),a(t,et),a(t,$),a($,Z),r[13](l),s.focus(),ot||(j=[O(s,"click",r[7]),O(p,"input",r[8]),O(k,"input",r[9]),O(b,"change",r[10]),O(b,"input",r[10]),O(P,"change",r[11]),O(P,"input",r[11]),O(q,"input",r[12]),O(Z,"click",r[3]),O(t,"click",Xt(r[6])),O(l,"close",r[14]),O(l,"click",Wt(r[15]))],ot=!0)},p(U,[D]){D&4&&p.value!==U[2].currentNameEdit&&J(p,U[2].currentNameEdit),D&4&&J(k,U[2].currentDescEdit),D&4&&T!==(T=U[2].currentImpEdit+"")&&pt(n,T),D&4&&J(b,U[2].currentImpEdit),D&4&&d!==(d=U[2].currentUrgEdit+"")&&pt(lt,d),D&4&&J(P,U[2].currentUrgEdit),D&4&&J(q,U[2].currentColEdit)},i:it,o:it,d(U){U&&_(l),r[13](null),ot=!1,Lt(j)}}}function me(r,l,t){let s,h,m;ct(r,st,d=>t(2,s=d)),ct(r,Vt,d=>t(19,h=d)),ct(r,gt,d=>t(20,m=d));let{showEditModal:u}=l,{editTask:c}=l,o,p=!1,g="",k="",y="";async function V(){if(!s.currentNameEdit||!s.currentDescEdit||!s.currentImpEdit||!s.currentUrgEdit||!s.currentColEdit){alert("Please fill out all fields");return}try{await _t.getTasks(m.currentUser.uid);for(let d in h.tasks){if(h.tasks[d].task==s.currentNameEdit&&h.tasks[d].task!=g){alert("Please do not change the task name to an existing task");return}if(h.tasks[d].importance==s.currentImpEdit&&h.tasks[d].urgency==s.currentUrgEdit&&!(h.tasks[d].importance==k&&h.tasks[d].urgency==y)){alert("Please do not change the position of the task to an existing position");return}}await c(st.currentEdit,s.currentNameEdit,s.currentDescEdit,s.currentImpEdit,s.currentUrgEdit,s.currentColEdit),o.close()}catch(d){alert(d)}}function I(d){qt.call(this,r,d)}const E=()=>o.close();function T(){s.currentNameEdit=this.value,st.set(s)}function n(){s.currentDescEdit=this.value,st.set(s)}function i(){s.currentImpEdit=Dt(this.value),st.set(s)}function b(){s.currentUrgEdit=Dt(this.value),st.set(s)}function N(){s.currentColEdit=this.value,st.set(s)}function x(d){Ut[d?"unshift":"push"](()=>{o=d,t(1,o)})}const K=()=>t(0,u=!1),S=()=>o.close();return r.$$set=d=>{"showEditModal"in d&&t(0,u=d.showEditModal),"editTask"in d&&t(4,c=d.editTask)},r.$$.update=()=>{r.$$.dirty&39&&u&&!p&&(o.showModal(),g=s.currentNameEdit,k=s.currentImpEdit,y=s.currentUrgEdit,t(5,p=!0)),r.$$.dirty&1&&(u||t(5,p=!1))},[u,o,s,V,c,p,I,E,T,n,i,b,N,x,K,S]}class _e extends bt{constructor(l){super(),Et(this,l,me,pe,kt,{showEditModal:0,editTask:4})}}function ge(r){let l,t,s,h,m,u,c,o,p="Tasks",g,k,y="+",V,I,E,T="",n,i,b,N,x,K,S,d,lt;function Y(M){r[5](M)}let P={addTask:r[2]};r[0]!==void 0&&(P.showAddModal=r[0]),i=new he({props:P}),Ut.push(()=>Ht(i,"showAddModal",Y));function F(M){r[6](M)}let Q={editTask:r[3]};return r[1]!==void 0&&(Q.showEditModal=r[1]),x=new _e({props:Q}),Ut.push(()=>Ht(x,"showEditModal",F)),{c(){l=f("link"),t=C(),s=f("link"),h=C(),m=f("link"),u=C(),c=f("div"),o=f("h1"),o.textContent=p,g=C(),k=f("button"),k.textContent=y,V=C(),I=f("div"),E=f("table"),E.innerHTML=T,n=C(),Tt(i.$$.fragment),N=C(),Tt(x.$$.fragment),this.h()},l(M){l=v(M,"LINK",{rel:!0,href:!0,class:!0}),t=w(M),s=v(M,"LINK",{rel:!0,href:!0,crossorigin:!0,class:!0}),h=w(M),m=v(M,"LINK",{href:!0,rel:!0,class:!0}),u=w(M),c=v(M,"DIV",{class:!0});var L=B(c);o=v(L,"H1",{class:!0,"data-svelte-h":!0}),W(o)!=="svelte-31v16d"&&(o.textContent=p),g=w(L),k=v(L,"BUTTON",{class:!0,"data-svelte-h":!0}),W(k)!=="svelte-1tofbvj"&&(k.textContent=y),V=w(L),I=v(L,"DIV",{class:!0});var G=B(I);E=v(G,"TABLE",{class:!0,"data-svelte-h":!0}),W(E)!=="svelte-1rb8v6q"&&(E.innerHTML=T),n=w(G),Ct(i.$$.fragment,G),N=w(G),Ct(x.$$.fragment,G),G.forEach(_),L.forEach(_),this.h()},h(){e(l,"rel","preconnect"),e(l,"href","https://fonts.googleapis.com"),e(l,"class","svelte-ps6pc8"),e(s,"rel","preconnect"),e(s,"href","https://fonts.gstatic.com"),e(s,"crossorigin",""),e(s,"class","svelte-ps6pc8"),e(m,"href","https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200..1000;1,200..1000&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"),e(m,"rel","stylesheet"),e(m,"class","svelte-ps6pc8"),e(o,"class","title svelte-ps6pc8"),e(k,"class","addTask svelte-ps6pc8"),e(E,"class","taskTable svelte-ps6pc8"),e(I,"class","taskList svelte-ps6pc8"),e(c,"class","containerMain svelte-ps6pc8")},m(M,L){A(M,l,L),A(M,t,L),A(M,s,L),A(M,h,L),A(M,m,L),A(M,u,L),A(M,c,L),a(c,o),a(c,g),a(c,k),a(c,V),a(c,I),a(I,E),a(I,n),wt(i,I,null),a(I,N),wt(x,I,null),S=!0,d||(lt=O(k,"click",r[4]),d=!0)},p(M,[L]){const G={};!b&&L&1&&(b=!0,G.showAddModal=M[0],Pt(()=>b=!1)),i.$set(G);const q={};!K&&L&2&&(K=!0,q.showEditModal=M[1],Pt(()=>K=!1)),x.$set(q)},i(M){S||(vt(i.$$.fragment,M),vt(x.$$.fragment,M),S=!0)},o(M){ht(i.$$.fragment,M),ht(x.$$.fragment,M),S=!1},d(M){M&&(_(l),_(t),_(s),_(h),_(m),_(u),_(c)),It(i),It(x),d=!1,lt()}}}function ke(r,l,t){let s,h;ct(r,gt,T=>t(7,s=T)),ct(r,st,T=>t(8,h=T));let m=!1,u=!1;zt(()=>{o("!!@@##","Dummy Task","1","1","red");const T=dt(ft,"users/"+s.currentUser.uid+"/tasks");Nt(T,n=>{n.forEach(i=>{i.val().task=="!!@@##"&&k(i.key)})}),y()});function c(){let T=document.getElementsByClassName("delButtons");for(let i=0;i<T.length;i++)T[i].addEventListener("click",()=>{k(T[i].id)});let n=document.getElementsByClassName("editButtons");for(let i=0;i<n.length;i++)n[i].addEventListener("click",()=>{p(n[i].id)})}function o(T,n,i,b,N){_t.addTask(s.currentUser.uid,T,n,i,b,N,!1,!1),y()}function p(T){st.currentEdit=T;const n=dt(ft,"users/"+s.currentUser.uid+"/tasks/"+st.currentEdit);Nt(n,i=>{yt(st,h.currentNameEdit=i.val().task,h),yt(st,h.currentDescEdit=i.val().description,h),yt(st,h.currentImpEdit=i.val().importance,h),yt(st,h.currentUrgEdit=i.val().urgency,h),yt(st,h.currentColEdit=i.val().color,h)}),t(1,u=!0)}function g(T,n,i,b,N,x){_t.editTask(s.currentUser.uid,T,n,i,b,N,x,!1,!1),y()}function k(T){_t.removeTask(s.currentUser.uid,T),y()}function y(){let T=document.getElementsByClassName("taskList"),n=document.getElementsByClassName("taskTable");n[0].innerHTML="";const i=dt(ft,"users/"+s.currentUser.uid+"/tasks");Nt(i,N=>{N.forEach(x=>{let K=document.createElement("tr"),S=document.createElement("td");S.innerHTML='<p class="taskText">'+x.val().task+'</p><div class="taskButtons"><button class="editButtons" id="'+x.key+'">Edit</button><button class="delButtons" id="'+x.key+'">Remove</button></div>',K.appendChild(S),n[0].appendChild(K)})});let b=document.createElement("style");b.innerHTML='table, td {width: 100%; border-bottom: rgba(255,255,255,0.5) solid 1px;}table {border-collapse: collapse;}td {padding: 1vh; height: 6vh; display: flex; align-items: center;}.taskText {display: inline; font-family: "Mulish", sans-serif; font-size: 1.1vmax; margin-right: 2vw; color: white;}.taskButtons {display: inline; margin-left:auto;}.editButtons {cursor: pointer; padding: 0.5vh; margin: 0.5vh; box-shadow: 0 0 1vh 0 rgba(0,0,0,0.7); font-family: "Mulish", sans-serif; font-size: 0.7vmax; color: white; border-radius:25%; background: rgba(230, 230, 230, 0.5); border: none; transition-duration: 0.2s;}.delButtons {cursor: pointer; padding: 0.5vh; margin: 0.5vh; box-shadow: 0 0 1vh 0 rgba(0,0,0,0.7);font-family: "Mulish", sans-serif; font-size: 0.7vmax; color: white; border-radius:12%; background: rgba(255, 48, 48, 0.5); border: none; transition-duration: 0.2s;}.editButtons:hover {box-shadow: 0 0 1vh 0 rgba(0,0,0,0.8); background: rgba(230, 230, 230, 0.7);}.delButtons:hover {box-shadow: 0 0 1vh 0 rgba(0,0,0,0.8); background: rgba(255, 48, 48, 0.7);}',T[0].appendChild(b),c()}const V=()=>t(0,m=!0);function I(T){m=T,t(0,m)}function E(T){u=T,t(1,u)}return[m,u,o,g,V,I,E]}class be extends bt{constructor(l){super(),Et(this,l,ke,ge,kt,{})}}function Ee(r){let l,t="Loading...";return{c(){l=f("div"),l.textContent=t},l(s){l=v(s,"DIV",{"data-svelte-h":!0}),W(l)!=="svelte-15ryvna"&&(l.textContent=t)},m(s,h){A(s,l,h)},p:it,i:it,o:it,d(s){s&&_(l)}}}function ye(r){let l,t,s,h,m,u,c,o,p,g,k,y,V,I,E,T;return t=new oe({}),h=new de({}),E=new be({}),{c(){l=f("div"),Tt(t.$$.fragment),s=C(),Tt(h.$$.fragment),m=C(),u=f("div"),c=f("h2"),o=rt("Welcome "),p=rt(r[0]),g=rt("!"),k=C(),y=f("hr"),V=C(),I=f("div"),Tt(E.$$.fragment),this.h()},l(n){l=v(n,"DIV",{class:!0});var i=B(l);Ct(t.$$.fragment,i),s=w(i),Ct(h.$$.fragment,i),m=w(i),u=v(i,"DIV",{class:!0});var b=B(u);c=v(b,"H2",{class:!0});var N=B(c);o=at(N,"Welcome "),p=at(N,r[0]),g=at(N,"!"),N.forEach(_),k=w(b),y=v(b,"HR",{class:!0}),V=w(b),I=v(b,"DIV",{id:!0,class:!0});var x=B(I);Ct(E.$$.fragment,x),x.forEach(_),b.forEach(_),i.forEach(_),this.h()},h(){e(c,"class","welcome svelte-1mdbg6s"),e(y,"class","svelte-1mdbg6s"),e(I,"id","taskView"),e(I,"class","svelte-1mdbg6s"),e(u,"class","containerMain svelte-1mdbg6s"),e(l,"class","webpage svelte-1mdbg6s")},m(n,i){A(n,l,i),wt(t,l,null),a(l,s),wt(h,l,null),a(l,m),a(l,u),a(u,c),a(c,o),a(c,p),a(c,g),a(u,k),a(u,y),a(u,V),a(u,I),wt(E,I,null),T=!0},p(n,i){(!T||i&1)&&pt(p,n[0])},i(n){T||(vt(t.$$.fragment,n),vt(h.$$.fragment,n),vt(E.$$.fragment,n),T=!0)},o(n){ht(t.$$.fragment,n),ht(h.$$.fragment,n),ht(E.$$.fragment,n),T=!1},d(n){n&&_(l),It(t),It(h),It(E)}}}function Te(r){let l,t,s,h,m,u,c,o="PowerBoard",p,g,k,y,V;const I=[ye,Ee],E=[];function T(n,i){return n[1].currentUser!==null?0:1}return g=T(r),k=E[g]=I[g](r),{c(){l=f("link"),t=C(),s=f("link"),h=C(),m=f("link"),u=C(),c=f("title"),c.textContent=o,p=C(),k.c(),y=jt(),this.h()},l(n){l=v(n,"LINK",{rel:!0,href:!0}),t=w(n),s=v(n,"LINK",{rel:!0,href:!0,crossorigin:!0}),h=w(n),m=v(n,"LINK",{href:!0,rel:!0}),u=w(n),c=v(n,"TITLE",{"data-svelte-h":!0}),W(c)!=="svelte-o1os5"&&(c.textContent=o),p=w(n),k.l(n),y=jt(),this.h()},h(){e(l,"rel","preconnect"),e(l,"href","https://fonts.googleapis.com"),e(s,"rel","preconnect"),e(s,"href","https://fonts.gstatic.com"),e(s,"crossorigin",""),e(m,"href","https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200..1000;1,200..1000&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"),e(m,"rel","stylesheet")},m(n,i){A(n,l,i),A(n,t,i),A(n,s,i),A(n,h,i),A(n,m,i),A(n,u,i),A(n,c,i),A(n,p,i),E[g].m(n,i),A(n,y,i),V=!0},p(n,[i]){let b=g;g=T(n),g===b?E[g].p(n,i):(Yt(),ht(E[b],1,1,()=>{E[b]=null}),Qt(),k=E[g],k?k.p(n,i):(k=E[g]=I[g](n),k.c()),vt(k,1),k.m(y.parentNode,y))},i(n){V||(vt(k),V=!0)},o(n){ht(k),V=!1},d(n){n&&(_(l),_(t),_(s),_(h),_(m),_(u),_(c),_(p),_(y)),E[g].d(n)}}}function Ce(r,l,t){let s;ct(r,gt,m=>t(1,s=m));let h;return gt.subscribe(m=>{var u;t(0,h=(u=m==null?void 0:m.currentUser)==null?void 0:u.email)}),[h,s]}class De extends bt{constructor(l){super(),Et(this,l,Ce,Te,kt,{})}}export{De as component};
