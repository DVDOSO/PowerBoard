import{s as kt,n as ct,e as wt,i as Kt,r as Dt,h as At,b as It,j as Lt,o as Ot,k as ut}from"../chunks/scheduler.f64133fb.js";import{S as Et,i as bt,g as c,s as E,A as Ht,m as rt,h as d,j as q,y as Q,c as b,B as Pt,f,n as it,k as e,a as j,x as a,o as pt,H as St,z as S,C as $,D as Gt,E as qt,F as Ct,G as Ut,r as ht,u as ft,v as vt,d as mt,t as gt,w as _t}from"../chunks/index.dc929e09.js";import{N as jt}from"../chunks/NavbarGuest.44e0f5db.js";import{e as Bt}from"../chunks/each.1fd5ded5.js";import"../chunks/authStore.cad14b08.js";import{w as Rt}from"../chunks/index.a4d72958.js";const et=Rt({tasks:[],tempId:0,currentIdEdit:"",currentNameEdit:"",currentDescEdit:"",currentImpEdit:"",currentUrgEdit:"",currentColEdit:""}),xt={addTask:async(s,n,l,t,g,v)=>{et.update(r=>(r.tasks.push({taskId:s,task:n,description:l,importance:t,urgency:g,color:v}),r))},removeTask:async s=>{et.update(n=>{let l=0;for(let t=0;t<n.tasks.length;t++)if(n.tasks[t].taskId==s){l=t;break}return n.tasks.splice(l,1),n})},editTask:async(s,n,l,t,g,v)=>{et.update(r=>{let p=0;for(let o=0;o<r.tasks.length;o++)if(r.tasks[o].taskId==s){p=o;break}return r.tasks[p].task=n,r.tasks[p].description=l,r.tasks[p].importance=t,r.tasks[p].urgency=g,r.tasks[p].color=v,r})}};function Vt(s,n,l){const t=s.slice();return t[6]=n[l],t}function zt(s){let n,l,t,g,v,r,p;return{c(){n=Ht("circle"),this.h()},l(o){n=Pt(o,"circle",{cx:!0,cy:!0,r:!0,fill:!0,"stroke-width":!0,onmouseover:!0,onmouseout:!0,class:!0}),q(n).forEach(f),this.h()},h(){e(n,"cx",l=s[6].cx),e(n,"cy",t=s[6].cy),e(n,"r",g=s[6].r),e(n,"fill",v=s[6].fill),e(n,"stroke-width","0.05vh"),e(n,"onmouseover","evt.target.setAttribute('stroke', 'white');"),e(n,"onmouseout","evt.target.setAttribute('stroke', 'none');"),e(n,"class","svelte-1p8spzu")},m(o,i){j(o,n,i),r||(p=[S(n,"mouseover",function(){Kt(s[3](s[6].id,s[6].desc))&&s[3](s[6].id,s[6].desc).apply(this,arguments)}),S(n,"mouseleave",s[4])],r=!0)},p(o,i){s=o,i&1&&l!==(l=s[6].cx)&&e(n,"cx",l),i&1&&t!==(t=s[6].cy)&&e(n,"cy",t),i&1&&g!==(g=s[6].r)&&e(n,"r",g),i&1&&v!==(v=s[6].fill)&&e(n,"fill",v)},d(o){o&&f(n),r=!1,Dt(p)}}}function Xt(s){let n,l,t,g='<hr id="line" class="svelte-1p8spzu"/> <div id="left" class="svelte-1p8spzu">˂</div> <div id="right" class="svelte-1p8spzu">˃</div>',v,r,p='<hr id="line" class="svelte-1p8spzu"/> <div id="left" class="svelte-1p8spzu">˂</div> <div id="right" class="svelte-1p8spzu">˃</div>',o,i,x="Crises",_,B,z="Goals",L,u,I="Distractions",T,M,C="Interruptions",A,w,m="Importance",D,h,P="Urgency",R,U,at,X,k,N,J,O,st,lt=Bt(s[0]),G=[];for(let H=0;H<lt.length;H+=1)G[H]=zt(Vt(s,lt,H));return{c(){n=c("div"),l=c("div"),t=c("div"),t.innerHTML=g,v=E(),r=c("div"),r.innerHTML=p,o=E(),i=c("div"),i.textContent=x,_=E(),B=c("div"),B.textContent=z,L=E(),u=c("div"),u.textContent=I,T=E(),M=c("div"),M.textContent=C,A=E(),w=c("div"),w.textContent=m,D=E(),h=c("div"),h.textContent=P,R=E(),U=Ht("svg");for(let H=0;H<G.length;H+=1)G[H].c();at=E(),X=c("div"),k=c("h1"),N=rt(s[1]),J=E(),O=c("h2"),st=rt(s[2]),this.h()},l(H){n=d(H,"DIV",{class:!0});var tt=q(n);l=d(tt,"DIV",{class:!0});var y=q(l);t=d(y,"DIV",{class:!0,"data-svelte-h":!0}),Q(t)!=="svelte-dac3pq"&&(t.innerHTML=g),v=b(y),r=d(y,"DIV",{class:!0,"data-svelte-h":!0}),Q(r)!=="svelte-u6p4eg"&&(r.innerHTML=p),o=b(y),i=d(y,"DIV",{id:!0,class:!0,"data-svelte-h":!0}),Q(i)!=="svelte-13x6wiq"&&(i.textContent=x),_=b(y),B=d(y,"DIV",{id:!0,class:!0,"data-svelte-h":!0}),Q(B)!=="svelte-6i41v0"&&(B.textContent=z),L=b(y),u=d(y,"DIV",{id:!0,class:!0,"data-svelte-h":!0}),Q(u)!=="svelte-3kfgzm"&&(u.textContent=I),T=b(y),M=d(y,"DIV",{id:!0,class:!0,"data-svelte-h":!0}),Q(M)!=="svelte-13sy1i8"&&(M.textContent=C),A=b(y),w=d(y,"DIV",{id:!0,class:!0,"data-svelte-h":!0}),Q(w)!=="svelte-14dypc6"&&(w.textContent=m),D=b(y),h=d(y,"DIV",{id:!0,class:!0,"data-svelte-h":!0}),Q(h)!=="svelte-1j9bcde"&&(h.textContent=P),R=b(y),U=Pt(y,"svg",{height:!0,width:!0,viewBox:!0,class:!0});var K=q(U);for(let V=0;V<G.length;V+=1)G[V].l(K);K.forEach(f),y.forEach(f),at=b(tt),X=d(tt,"DIV",{class:!0});var Y=q(X);k=d(Y,"H1",{class:!0});var F=q(k);N=it(F,s[1]),F.forEach(f),J=b(Y),O=d(Y,"H2",{class:!0});var nt=q(O);st=it(nt,s[2]),nt.forEach(f),Y.forEach(f),tt.forEach(f),this.h()},h(){e(t,"class","horizontalArrow svelte-1p8spzu"),e(r,"class","verticalArrow svelte-1p8spzu"),e(i,"id","crises"),e(i,"class","svelte-1p8spzu"),e(B,"id","goals"),e(B,"class","svelte-1p8spzu"),e(u,"id","distractions"),e(u,"class","svelte-1p8spzu"),e(M,"id","interruptions"),e(M,"class","svelte-1p8spzu"),e(w,"id","importance"),e(w,"class","svelte-1p8spzu"),e(h,"id","urgency"),e(h,"class","svelte-1p8spzu"),e(U,"height","100%"),e(U,"width","100%"),e(U,"viewBox","0 0 100 100"),e(U,"class","svelte-1p8spzu"),e(l,"class","plot svelte-1p8spzu"),e(k,"class","taskTitle svelte-1p8spzu"),e(O,"class","taskDesc svelte-1p8spzu"),e(X,"class","side svelte-1p8spzu"),e(n,"class","containerMain svelte-1p8spzu")},m(H,tt){j(H,n,tt),a(n,l),a(l,t),a(l,v),a(l,r),a(l,o),a(l,i),a(l,_),a(l,B),a(l,L),a(l,u),a(l,T),a(l,M),a(l,A),a(l,w),a(l,D),a(l,h),a(l,R),a(l,U);for(let y=0;y<G.length;y+=1)G[y]&&G[y].m(U,null);a(n,at),a(n,X),a(X,k),a(k,N),a(X,J),a(X,O),a(O,st)},p(H,[tt]){if(tt&25){lt=Bt(H[0]);let y;for(y=0;y<lt.length;y+=1){const K=Vt(H,lt,y);G[y]?G[y].p(K,tt):(G[y]=zt(K),G[y].c(),G[y].m(U,null))}for(;y<G.length;y+=1)G[y].d(1);G.length=lt.length}tt&2&&pt(N,H[1]),tt&4&&pt(st,H[2])},i:ct,o:ct,d(H){H&&f(n),St(G,H)}}}function Ft(s,n,l){let t;wt(s,et,i=>l(5,t=i));let g="",v="",r=[];function p(i,x){l(1,g=i),l(2,v=x)}function o(){l(1,g=""),l(2,v="")}return s.$$.update=()=>{if(s.$$.dirty&33){l(0,r=[]);for(let i in t.tasks)r.push({id:t.tasks[i].task,desc:t.tasks[i].description,cx:t.tasks[i].urgency*10,cy:(10-t.tasks[i].importance)*10,r:2,fill:t.tasks[i].color})}},[r,g,v,p,o,t]}class Wt extends Et{constructor(n){super(),bt(this,n,Ft,Xt,kt,{})}}function Jt(s){let n,l,t,g,v,r,p,o,i,x="X",_,B,z='<h2 class="title svelte-11bti95">Add Task</h2>',L,u,I,T,M,C,A,w,m,D,h,P,R,U,at,X,k,N,J,O,st,lt="Colour:",G,H,tt,y,K,Y="Add Task",F,nt;return{c(){n=c("link"),l=E(),t=c("link"),g=E(),v=c("link"),r=E(),p=c("dialog"),o=c("div"),i=c("button"),i.textContent=x,_=E(),B=c("div"),B.innerHTML=z,L=E(),u=c("input"),I=E(),T=c("textarea"),M=E(),C=c("div"),A=c("p"),w=rt("Importance: "),m=rt(s[4]),D=E(),h=c("input"),P=E(),R=c("div"),U=c("p"),at=rt("Urgency: "),X=rt(s[5]),k=E(),N=c("input"),J=E(),O=c("div"),st=c("p"),st.textContent=lt,G=E(),H=c("input"),tt=E(),y=c("div"),K=c("button"),K.textContent=Y,this.h()},l(V){n=d(V,"LINK",{rel:!0,href:!0}),l=b(V),t=d(V,"LINK",{rel:!0,href:!0,crossorigin:!0}),g=b(V),v=d(V,"LINK",{href:!0,rel:!0}),r=b(V),p=d(V,"DIALOG",{class:!0});var W=q(p);o=d(W,"DIV",{class:!0});var Z=q(o);i=d(Z,"BUTTON",{class:!0,"data-svelte-h":!0}),Q(i)!=="svelte-mqrk3d"&&(i.textContent=x),_=b(Z),B=d(Z,"DIV",{id:!0,class:!0,"data-svelte-h":!0}),Q(B)!=="svelte-g6z19b"&&(B.innerHTML=z),L=b(Z),u=d(Z,"INPUT",{class:!0,type:!0,placeholder:!0}),I=b(Z),T=d(Z,"TEXTAREA",{class:!0,type:!0,placeholder:!0}),q(T).forEach(f),M=b(Z),C=d(Z,"DIV",{class:!0});var ot=q(C);A=d(ot,"P",{class:!0});var dt=q(A);w=it(dt,"Importance: "),m=it(dt,s[4]),dt.forEach(f),D=b(ot),h=d(ot,"INPUT",{class:!0,type:!0,min:!0,max:!0}),ot.forEach(f),P=b(Z),R=d(Z,"DIV",{class:!0});var Tt=q(R);U=d(Tt,"P",{class:!0});var Mt=q(U);at=it(Mt,"Urgency: "),X=it(Mt,s[5]),Mt.forEach(f),k=b(Tt),N=d(Tt,"INPUT",{class:!0,type:!0,min:!0,max:!0}),Tt.forEach(f),J=b(Z),O=d(Z,"DIV",{class:!0});var yt=q(O);st=d(yt,"P",{class:!0,"data-svelte-h":!0}),Q(st)!=="svelte-qmu74s"&&(st.textContent=lt),G=b(yt),H=d(yt,"INPUT",{class:!0,type:!0}),yt.forEach(f),tt=b(Z),y=d(Z,"DIV",{class:!0});var Nt=q(y);K=d(Nt,"BUTTON",{class:!0,"data-svelte-h":!0}),Q(K)!=="svelte-5e767g"&&(K.textContent=Y),Nt.forEach(f),Z.forEach(f),W.forEach(f),this.h()},h(){e(n,"rel","preconnect"),e(n,"href","https://fonts.googleapis.com"),e(t,"rel","preconnect"),e(t,"href","https://fonts.gstatic.com"),e(t,"crossorigin",""),e(v,"href","https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200..1000;1,200..1000&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"),e(v,"rel","stylesheet"),e(i,"class","exit svelte-11bti95"),i.autofocus=!0,e(B,"id","center"),e(B,"class","svelte-11bti95"),e(u,"class","task svelte-11bti95"),e(u,"type","text"),e(u,"placeholder","Task Name"),e(T,"class","desc svelte-11bti95"),e(T,"type","text"),e(T,"placeholder","Task Description"),e(A,"class","head svelte-11bti95"),e(h,"class","slider svelte-11bti95"),e(h,"type","range"),e(h,"min","1"),e(h,"max","9"),e(C,"class","imp svelte-11bti95"),e(U,"class","head svelte-11bti95"),e(N,"class","slider svelte-11bti95"),e(N,"type","range"),e(N,"min","1"),e(N,"max","9"),e(R,"class","urg svelte-11bti95"),e(st,"class","colorhead svelte-11bti95"),e(H,"class","picker svelte-11bti95"),e(H,"type","color"),e(O,"class","col svelte-11bti95"),e(K,"class","modalButton svelte-11bti95"),e(y,"class","bottom svelte-11bti95"),e(o,"class","content svelte-11bti95"),e(p,"class","svelte-11bti95")},m(V,W){j(V,n,W),j(V,l,W),j(V,t,W),j(V,g,W),j(V,v,W),j(V,r,W),j(V,p,W),a(p,o),a(o,i),a(o,_),a(o,B),a(o,L),a(o,u),$(u,s[2]),a(o,I),a(o,T),$(T,s[3]),a(o,M),a(o,C),a(C,A),a(A,w),a(A,m),a(C,D),a(C,h),$(h,s[4]),a(o,P),a(o,R),a(R,U),a(U,at),a(U,X),a(R,k),a(R,N),$(N,s[5]),a(o,J),a(o,O),a(O,st),a(O,G),a(O,H),$(H,s[6]),a(o,tt),a(o,y),a(y,K),s[16](p),i.focus(),F||(nt=[S(i,"click",s[10]),S(u,"input",s[11]),S(T,"input",s[12]),S(h,"change",s[13]),S(h,"input",s[13]),S(N,"change",s[14]),S(N,"input",s[14]),S(H,"input",s[15]),S(K,"click",s[7]),S(o,"click",Gt(s[9])),S(p,"close",s[17]),S(p,"click",qt(s[18]))],F=!0)},p(V,[W]){W&4&&u.value!==V[2]&&$(u,V[2]),W&8&&$(T,V[3]),W&16&&pt(m,V[4]),W&16&&$(h,V[4]),W&32&&pt(X,V[5]),W&32&&$(N,V[5]),W&64&&$(H,V[6])},i:ct,o:ct,d(V){V&&(f(n),f(l),f(t),f(g),f(v),f(r),f(p)),s[16](null),F=!1,Dt(nt)}}}function Qt(s,n,l){let t;wt(s,et,D=>l(19,t=D));let{showAddModal:g}=n,{addTask:v}=n,r,p="",o="",i="1",x="1",_="#ff0000";async function B(){if(!p||!o||!i||!x||!_){alert("Please fill out all fields");return}try{for(let D in t.tasks)if(t.tasks[D].task==p){alert("Task already exists");return}else if(t.tasks[D].importance==i&&t.tasks[D].urgency==x){alert("Position on the board is already taken");return}await v(p,o,i,x,_),l(2,p=l(3,o="")),l(6,_="#ff0000"),l(4,i=l(5,x="1")),r.close()}catch(D){alert(D)}}function z(D){At.call(this,s,D)}const L=()=>r.close();function u(){p=this.value,l(2,p)}function I(){o=this.value,l(3,o)}function T(){i=Ct(this.value),l(4,i)}function M(){x=Ct(this.value),l(5,x)}function C(){_=this.value,l(6,_)}function A(D){It[D?"unshift":"push"](()=>{r=D,l(1,r)})}const w=()=>l(0,g=!1),m=()=>r.close();return s.$$set=D=>{"showAddModal"in D&&l(0,g=D.showAddModal),"addTask"in D&&l(8,v=D.addTask)},s.$$.update=()=>{s.$$.dirty&3&&r&&g&&r.showModal()},[g,r,p,o,i,x,_,B,v,z,L,u,I,T,M,C,A,w,m]}class Yt extends Et{constructor(n){super(),bt(this,n,Qt,Jt,kt,{showAddModal:0,addTask:8})}}function Zt(s){let n,l,t,g="X",v,r,p='<h2 class="title svelte-x0t8c9">Edit Task</h2>',o,i,x,_,B,z,L,u,I=s[2].currentImpEdit+"",T,M,C,A,w,m,D,h=s[2].currentUrgEdit+"",P,R,U,at,X,k,N="Colour:",J,O,st,lt,G,H="Make Changes",tt,y;return{c(){n=c("dialog"),l=c("div"),t=c("button"),t.textContent=g,v=E(),r=c("div"),r.innerHTML=p,o=E(),i=c("input"),x=E(),_=c("textarea"),B=E(),z=c("div"),L=c("p"),u=rt("Importance: "),T=rt(I),M=E(),C=c("input"),A=E(),w=c("div"),m=c("p"),D=rt("Urgency: "),P=rt(h),R=E(),U=c("input"),at=E(),X=c("div"),k=c("p"),k.textContent=N,J=E(),O=c("input"),st=E(),lt=c("div"),G=c("button"),G.textContent=H,this.h()},l(K){n=d(K,"DIALOG",{class:!0});var Y=q(n);l=d(Y,"DIV",{class:!0});var F=q(l);t=d(F,"BUTTON",{class:!0,"data-svelte-h":!0}),Q(t)!=="svelte-mqrk3d"&&(t.textContent=g),v=b(F),r=d(F,"DIV",{id:!0,class:!0,"data-svelte-h":!0}),Q(r)!=="svelte-1tp6fmi"&&(r.innerHTML=p),o=b(F),i=d(F,"INPUT",{class:!0,type:!0,placeholder:!0}),x=b(F),_=d(F,"TEXTAREA",{class:!0,type:!0,placeholder:!0}),q(_).forEach(f),B=b(F),z=d(F,"DIV",{class:!0});var nt=q(z);L=d(nt,"P",{class:!0});var V=q(L);u=it(V,"Importance: "),T=it(V,I),V.forEach(f),M=b(nt),C=d(nt,"INPUT",{class:!0,type:!0,min:!0,max:!0}),nt.forEach(f),A=b(F),w=d(F,"DIV",{class:!0});var W=q(w);m=d(W,"P",{class:!0});var Z=q(m);D=it(Z,"Urgency: "),P=it(Z,h),Z.forEach(f),R=b(W),U=d(W,"INPUT",{class:!0,type:!0,min:!0,max:!0}),W.forEach(f),at=b(F),X=d(F,"DIV",{class:!0});var ot=q(X);k=d(ot,"P",{class:!0,"data-svelte-h":!0}),Q(k)!=="svelte-qmu74s"&&(k.textContent=N),J=b(ot),O=d(ot,"INPUT",{class:!0,type:!0}),ot.forEach(f),st=b(F),lt=d(F,"DIV",{class:!0});var dt=q(lt);G=d(dt,"BUTTON",{class:!0,"data-svelte-h":!0}),Q(G)!=="svelte-onzak7"&&(G.textContent=H),dt.forEach(f),F.forEach(f),Y.forEach(f),this.h()},h(){e(t,"class","exit svelte-x0t8c9"),t.autofocus=!0,e(r,"id","center"),e(r,"class","svelte-x0t8c9"),e(i,"class","task svelte-x0t8c9"),e(i,"type","text"),e(i,"placeholder","Task Name"),e(_,"class","desc svelte-x0t8c9"),e(_,"type","text"),e(_,"placeholder","Task Description"),e(L,"class","head svelte-x0t8c9"),e(C,"class","slider svelte-x0t8c9"),e(C,"type","range"),e(C,"min","1"),e(C,"max","9"),e(z,"class","imp svelte-x0t8c9"),e(m,"class","head svelte-x0t8c9"),e(U,"class","slider svelte-x0t8c9"),e(U,"type","range"),e(U,"min","1"),e(U,"max","9"),e(w,"class","urg svelte-x0t8c9"),e(k,"class","colorhead svelte-x0t8c9"),e(O,"class","picker svelte-x0t8c9"),e(O,"type","color"),e(X,"class","col svelte-x0t8c9"),e(G,"class","modalButton svelte-x0t8c9"),e(lt,"class","bottom svelte-x0t8c9"),e(l,"class","content svelte-x0t8c9"),e(n,"class","svelte-x0t8c9")},m(K,Y){j(K,n,Y),a(n,l),a(l,t),a(l,v),a(l,r),a(l,o),a(l,i),$(i,s[2].currentNameEdit),a(l,x),a(l,_),$(_,s[2].currentDescEdit),a(l,B),a(l,z),a(z,L),a(L,u),a(L,T),a(z,M),a(z,C),$(C,s[2].currentImpEdit),a(l,A),a(l,w),a(w,m),a(m,D),a(m,P),a(w,R),a(w,U),$(U,s[2].currentUrgEdit),a(l,at),a(l,X),a(X,k),a(X,J),a(X,O),$(O,s[2].currentColEdit),a(l,st),a(l,lt),a(lt,G),s[13](n),t.focus(),tt||(y=[S(t,"click",s[7]),S(i,"input",s[8]),S(_,"input",s[9]),S(C,"change",s[10]),S(C,"input",s[10]),S(U,"change",s[11]),S(U,"input",s[11]),S(O,"input",s[12]),S(G,"click",s[3]),S(l,"click",Gt(s[6])),S(n,"close",s[14]),S(n,"click",qt(s[15]))],tt=!0)},p(K,[Y]){Y&4&&i.value!==K[2].currentNameEdit&&$(i,K[2].currentNameEdit),Y&4&&$(_,K[2].currentDescEdit),Y&4&&I!==(I=K[2].currentImpEdit+"")&&pt(T,I),Y&4&&$(C,K[2].currentImpEdit),Y&4&&h!==(h=K[2].currentUrgEdit+"")&&pt(P,h),Y&4&&$(U,K[2].currentUrgEdit),Y&4&&$(O,K[2].currentColEdit)},i:ct,o:ct,d(K){K&&f(n),s[13](null),tt=!1,Dt(y)}}}function $t(s,n,l){let t;wt(s,et,m=>l(2,t=m));let{showEditModal:g}=n,{editTask:v}=n,r,p=!1,o="",i="",x="";async function _(){if(!t.currentNameEdit||!t.currentDescEdit||!t.currentImpEdit||!t.currentUrgEdit||!t.currentColEdit){alert("Please fill out all fields");return}try{for(let m in t.tasks){if(t.tasks[m].task==t.currentNameEdit&&t.tasks[m].task!=o){alert("Please do not change the task name to an existing task");return}if(t.tasks[m].importance==t.currentImpEdit&&t.tasks[m].urgency==t.currentUrgEdit&&!(t.tasks[m].importance==i&&t.tasks[m].urgency==x)){alert("Please do not change the position of the task to an existing position");return}}await v(t.currentIdEdit,t.currentNameEdit,t.currentDescEdit,t.currentImpEdit,t.currentUrgEdit,t.currentColEdit),r.close()}catch(m){alert(m)}}function B(m){At.call(this,s,m)}const z=()=>r.close();function L(){t.currentNameEdit=this.value,et.set(t)}function u(){t.currentDescEdit=this.value,et.set(t)}function I(){t.currentImpEdit=Ct(this.value),et.set(t)}function T(){t.currentUrgEdit=Ct(this.value),et.set(t)}function M(){t.currentColEdit=this.value,et.set(t)}function C(m){It[m?"unshift":"push"](()=>{r=m,l(1,r)})}const A=()=>l(0,g=!1),w=()=>r.close();return s.$$set=m=>{"showEditModal"in m&&l(0,g=m.showEditModal),"editTask"in m&&l(4,v=m.editTask)},s.$$.update=()=>{s.$$.dirty&39&&g&&!p&&(r.showModal(),o=t.currentNameEdit,i=t.currentImpEdit,x=t.currentUrgEdit,l(5,p=!0)),s.$$.dirty&1&&(g||l(5,p=!1))},[g,r,t,_,v,p,B,z,L,u,I,T,M,C,A,w]}class te extends Et{constructor(n){super(),bt(this,n,$t,Zt,kt,{showEditModal:0,editTask:4})}}function ee(s){let n,l,t,g,v,r,p,o,i="Tasks",x,_,B="+",z,L,u,I="",T,M,C,A,w,m,D,h,P;function R(k){s[5](k)}let U={addTask:s[2]};s[0]!==void 0&&(U.showAddModal=s[0]),M=new Yt({props:U}),It.push(()=>Ut(M,"showAddModal",R));function at(k){s[6](k)}let X={editTask:s[3]};return s[1]!==void 0&&(X.showEditModal=s[1]),w=new te({props:X}),It.push(()=>Ut(w,"showEditModal",at)),{c(){n=c("link"),l=E(),t=c("link"),g=E(),v=c("link"),r=E(),p=c("div"),o=c("h1"),o.textContent=i,x=E(),_=c("button"),_.textContent=B,z=E(),L=c("div"),u=c("table"),u.innerHTML=I,T=E(),ht(M.$$.fragment),A=E(),ht(w.$$.fragment),this.h()},l(k){n=d(k,"LINK",{rel:!0,href:!0,class:!0}),l=b(k),t=d(k,"LINK",{rel:!0,href:!0,crossorigin:!0,class:!0}),g=b(k),v=d(k,"LINK",{href:!0,rel:!0,class:!0}),r=b(k),p=d(k,"DIV",{class:!0});var N=q(p);o=d(N,"H1",{class:!0,"data-svelte-h":!0}),Q(o)!=="svelte-31v16d"&&(o.textContent=i),x=b(N),_=d(N,"BUTTON",{class:!0,"data-svelte-h":!0}),Q(_)!=="svelte-1tofbvj"&&(_.textContent=B),z=b(N),L=d(N,"DIV",{class:!0});var J=q(L);u=d(J,"TABLE",{class:!0,"data-svelte-h":!0}),Q(u)!=="svelte-1rb8v6q"&&(u.innerHTML=I),T=b(J),ft(M.$$.fragment,J),A=b(J),ft(w.$$.fragment,J),J.forEach(f),N.forEach(f),this.h()},h(){e(n,"rel","preconnect"),e(n,"href","https://fonts.googleapis.com"),e(n,"class","svelte-ps6pc8"),e(t,"rel","preconnect"),e(t,"href","https://fonts.gstatic.com"),e(t,"crossorigin",""),e(t,"class","svelte-ps6pc8"),e(v,"href","https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200..1000;1,200..1000&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"),e(v,"rel","stylesheet"),e(v,"class","svelte-ps6pc8"),e(o,"class","title svelte-ps6pc8"),e(_,"class","addTask svelte-ps6pc8"),e(u,"class","taskTable svelte-ps6pc8"),e(L,"class","taskList svelte-ps6pc8"),e(p,"class","containerMain svelte-ps6pc8")},m(k,N){j(k,n,N),j(k,l,N),j(k,t,N),j(k,g,N),j(k,v,N),j(k,r,N),j(k,p,N),a(p,o),a(p,x),a(p,_),a(p,z),a(p,L),a(L,u),a(L,T),vt(M,L,null),a(L,A),vt(w,L,null),D=!0,h||(P=S(_,"click",s[4]),h=!0)},p(k,[N]){const J={};!C&&N&1&&(C=!0,J.showAddModal=k[0],Lt(()=>C=!1)),M.$set(J);const O={};!m&&N&2&&(m=!0,O.showEditModal=k[1],Lt(()=>m=!1)),w.$set(O)},i(k){D||(mt(M.$$.fragment,k),mt(w.$$.fragment,k),D=!0)},o(k){gt(M.$$.fragment,k),gt(w.$$.fragment,k),D=!1},d(k){k&&(f(n),f(l),f(t),f(g),f(v),f(r),f(p)),_t(M),_t(w),h=!1,P()}}}function se(s,n,l){let t;wt(s,et,u=>l(7,t=u));let g=!1,v=!1;Ot(()=>{_()});function r(){let u=document.getElementsByClassName("delButtons");for(let T=0;T<u.length;T++)u[T].addEventListener("click",()=>{x(u[T].id)});let I=document.getElementsByClassName("editButtons");for(let T=0;T<I.length;T++)I[T].addEventListener("click",()=>{o(I[T].id)})}function p(u,I,T,M,C){xt.addTask(ut(et,++t.tempId,t),u,I,T,M,C),_()}function o(u){for(let I in t.tasks)t.tasks[I].taskId==u&&(ut(et,t.currentIdEdit=u,t),ut(et,t.currentNameEdit=t.tasks[I].task,t),ut(et,t.currentDescEdit=t.tasks[I].description,t),ut(et,t.currentImpEdit=t.tasks[I].importance,t),ut(et,t.currentUrgEdit=t.tasks[I].urgency,t),ut(et,t.currentColEdit=t.tasks[I].color,t));l(1,v=!0)}function i(u,I,T,M,C,A){xt.editTask(u,I,T,M,C,A),_()}function x(u){xt.removeTask(u),_()}function _(){let u=document.getElementsByClassName("taskList"),I=document.getElementsByClassName("taskTable");I[0].innerHTML="";for(let M in t.tasks){let C=document.createElement("tr"),A=document.createElement("td");A.innerHTML='<p class="taskText">'+t.tasks[M].task+'</p><div class="taskButtons"><button class="editButtons" id="'+t.tasks[M].taskId+'">Edit</button><button class="delButtons" id="'+t.tasks[M].taskId+'">Remove</button></div>',C.appendChild(A),I[0].appendChild(C)}let T=document.createElement("style");T.innerHTML='table, td {width: 100%; border-bottom: rgba(255,255,255,0.5) solid 1px;}table {border-collapse: collapse;}td {padding: 1vh; height: 6vh; display: flex; align-items: center;}.taskText {display: inline; font-family: "Mulish", sans-serif; font-size: 1.1vmax; margin-right: 2vw; color: white;}.taskButtons {display: inline; margin-left:auto;}.editButtons {cursor: pointer; padding: 0.5vh; margin: 0.5vh; box-shadow: 0 0 1vh 0 rgba(0,0,0,0.7); font-family: "Mulish", sans-serif; font-size: 0.7vmax; color: white; border-radius:25%; background: rgba(230, 230, 230, 0.5); border: none; transition-duration: 0.2s;}.delButtons {cursor: pointer; padding: 0.5vh; margin: 0.5vh; box-shadow: 0 0 1vh 0 rgba(0,0,0,0.7);font-family: "Mulish", sans-serif; font-size: 0.7vmax; color: white; border-radius:12%; background: rgba(255, 48, 48, 0.5); border: none; transition-duration: 0.2s;}.editButtons:hover {box-shadow: 0 0 1vh 0 rgba(0,0,0,0.8); background: rgba(230, 230, 230, 0.7);}.delButtons:hover {box-shadow: 0 0 1vh 0 rgba(0,0,0,0.8); background: rgba(255, 48, 48, 0.7);}',u[0].appendChild(T),r()}const B=()=>l(0,g=!0);function z(u){g=u,l(0,g)}function L(u){v=u,l(1,v)}return[g,v,p,i,B,z,L]}class le extends Et{constructor(n){super(),bt(this,n,se,ee,kt,{})}}function ae(s){let n,l,t,g,v,r,p,o="PowerBoard",i,x,_,B,z,L,u,I,T="Welcome guest!<br/>Sign up to save your tasks!",M,C,A,w,m,D;return _=new jt({}),z=new Wt({}),m=new le({}),{c(){n=c("link"),l=E(),t=c("link"),g=E(),v=c("link"),r=E(),p=c("title"),p.textContent=o,i=E(),x=c("div"),ht(_.$$.fragment),B=E(),ht(z.$$.fragment),L=E(),u=c("div"),I=c("h2"),I.innerHTML=T,M=E(),C=c("hr"),A=E(),w=c("div"),ht(m.$$.fragment),this.h()},l(h){n=d(h,"LINK",{rel:!0,href:!0}),l=b(h),t=d(h,"LINK",{rel:!0,href:!0,crossorigin:!0}),g=b(h),v=d(h,"LINK",{href:!0,rel:!0}),r=b(h),p=d(h,"TITLE",{"data-svelte-h":!0}),Q(p)!=="svelte-o1os5"&&(p.textContent=o),i=b(h),x=d(h,"DIV",{class:!0});var P=q(x);ft(_.$$.fragment,P),B=b(P),ft(z.$$.fragment,P),L=b(P),u=d(P,"DIV",{class:!0});var R=q(u);I=d(R,"H2",{class:!0,"data-svelte-h":!0}),Q(I)!=="svelte-sq4a1w"&&(I.innerHTML=T),M=b(R),C=d(R,"HR",{class:!0}),A=b(R),w=d(R,"DIV",{id:!0,class:!0});var U=q(w);ft(m.$$.fragment,U),U.forEach(f),R.forEach(f),P.forEach(f),this.h()},h(){e(n,"rel","preconnect"),e(n,"href","https://fonts.googleapis.com"),e(t,"rel","preconnect"),e(t,"href","https://fonts.gstatic.com"),e(t,"crossorigin",""),e(v,"href","https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200..1000;1,200..1000&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"),e(v,"rel","stylesheet"),e(I,"class","welcome svelte-1mmxn28"),e(C,"class","svelte-1mmxn28"),e(w,"id","taskView"),e(w,"class","svelte-1mmxn28"),e(u,"class","containerMain svelte-1mmxn28"),e(x,"class","webpage svelte-1mmxn28")},m(h,P){j(h,n,P),j(h,l,P),j(h,t,P),j(h,g,P),j(h,v,P),j(h,r,P),j(h,p,P),j(h,i,P),j(h,x,P),vt(_,x,null),a(x,B),vt(z,x,null),a(x,L),a(x,u),a(u,I),a(u,M),a(u,C),a(u,A),a(u,w),vt(m,w,null),D=!0},p:ct,i(h){D||(mt(_.$$.fragment,h),mt(z.$$.fragment,h),mt(m.$$.fragment,h),D=!0)},o(h){gt(_.$$.fragment,h),gt(z.$$.fragment,h),gt(m.$$.fragment,h),D=!1},d(h){h&&(f(n),f(l),f(t),f(g),f(v),f(r),f(p),f(i),f(x)),_t(_),_t(z),_t(m)}}}class de extends Et{constructor(n){super(),bt(this,n,null,ae,kt,{})}}export{de as component};
