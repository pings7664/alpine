import{M as m,I as p,d as c,aa as i,r as l,N as e,l as u}from"./entry.C5ficaHw.js";import{u as d}from"./asyncData.DWLwNVTm.js";import f from"./Ellipsis.CQbuPrC3.js";import y from"./ComponentPlaygroundData.BE82ZhW_.js";import"./TabsHeader.FPxWrm0K.js";import"./ComponentPlaygroundProps.C7JCLs2n.js";import"./ProseH4.ClqSZ5v0.js";import"./ProseCodeInline.By89OXfw.js";import"./Badge.7Vhlx5Nd.js";import"./MDCSlot.CXAhKpuE.js";import"./slot.Duku6IA5.js";import"./ProseP.hG0ue8__.js";import"./index.BpthGkXy.js";import"./ComponentPlaygroundSlots.vue.BGxgmx47.js";import"./ComponentPlaygroundTokens.vue.CNfWIq0m.js";async function g(o){const t=m(o);{const{data:n}=await d(`nuxt-component-meta${t?`-${t}`:""}`,()=>$fetch(`/api/component-meta${t?`/${t}`:""}`));return p(()=>n.value)}}const h=c({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(o){const t=p(()=>i(o.component)),n=l({...o.props}),r=await g(o.component);return{as:t,formProps:n,componentData:r}},render(o){const t=Object.entries(this.$slots).reduce((n,[r,a])=>{if(r.startsWith("component-")){const s=r.replace("component-","");n[s]=a}return n},{});return e("div",{class:"component-playground"},[e("div",{class:"component-playground-wrapper"},[e(f,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),e(o.as,{...o.formProps,class:"component-playground-component"},{...t})]),e(y,{modelValue:o.formProps,componentData:o.componentData,"onUpdate:modelValue":n=>o.formProps=n})])}}),V=u(h,[["__scopeId","data-v-f32a5a03"]]);export{V as default};
