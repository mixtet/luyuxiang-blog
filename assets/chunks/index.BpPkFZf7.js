import{d as s,ak as m,o as u,c as l,j as t,t as p,_ as c,s as f,D as _,I as v}from"./framework.CL2rMF_2.js";const C=s({__name:"subIndex",props:{modelValue:{default:{name:"小米"}},modelModifiers:{}},emits:["update:modelValue"],setup(e){const n=m(e,"modelValue"),a=()=>{n.value={name:123}};return(d,i)=>(u(),l("div",null,[t("div",null,"parent bound v-model is: "+p(n.value.name),1),t("button",{onClick:a},"111")]))}}),V=s({name:"list",components:{subIndex:C},initData:{id:1006,title:"面试练习"},setup(){const e=f();return{count:e,inputCount:()=>{console.log(e.value)}}}});function b(e,n,a,d,i,k){const r=_("subIndex");return u(),l("div",null,[v(r,{modelValue:e.count,"onUpdate:modelValue":n[0]||(n[0]=o=>e.count=o)},null,8,["modelValue"]),t("button",{onClick:n[1]||(n[1]=(...o)=>e.inputCount&&e.inputCount(...o))},"aaa")])}const I=c(V,[["render",b]]);export{I as default};
