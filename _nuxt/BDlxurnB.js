import{d,aa as l,K as v,q as f,A as p,X as g,ab as m,$ as h,a7 as y,a9 as i,a3 as _}from"./C5Vjur_I.js";const q=d({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(u){const{query:a}=l(u),n=v(()=>{var t;return typeof((t=a.value)==null?void 0:t.params)=="function"?a.value.params():a.value});if(!n.value&&f("dd-navigation").value){const{navigation:t}=p();return{navigation:t}}const{data:o}=await g(`content-navigation-${h(n.value)}`,()=>m(n.value));return{navigation:o}},render(u){const a=y(),{navigation:n}=u,o=e=>i(_,{to:e._path},()=>e.title),t=(e,r)=>i("ul",r?{"data-level":r}:null,e.map(s=>s.children?i("li",null,[o(s),t(s.children,r+1)]):i("li",null,o(s)))),c=e=>t(e,0);return a!=null&&a.default?a.default({navigation:n,...this.$attrs}):c(n)}}),N=q;export{N as default};