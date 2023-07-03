import{r as h}from"./index.ed373d49.js";/* empty css                                 */import{j as e}from"./jsx-runtime.391947bd.js";function j(n){const[s,l]=h.useState(0);function u(){l(t=>t>=n.length-1?t:t+1)}function a(){l(t=>t<=0?t:t-1)}function c(t){l(t)}return{currentStepIndex:s,step:n[s],steps:n,isFirstStep:s===0,isLastStep:s===n.length-1,goTo:c,next:u,prev:a}}function x({title:n,children:s}){return e.jsxs(e.Fragment,{children:[e.jsx("h3",{className:"step-title",children:n}),e.jsx("div",{className:"form-data-wrapper",children:s})]})}function m({firstName:n,lastName:s,age:l,gender:u,street:a,city:c,state:t,zip:p,updateFields:i}){return fetch("https://backstage.taboola.com/backstage/api/1.0/resources/countries/us/cities",{method:"GET"}).then(r=>r.json()).then(r=>console.log(r)).catch(r=>console.error("error:"+r)),e.jsxs(x,{title:"Let's get to know you",children:[e.jsxs("div",{className:"field-wrapper",children:[e.jsx("label",{children:"First Name"}),e.jsx("input",{autoFocus:!0,required:!0,type:"text",value:n,onChange:r=>i({firstName:r.target.value})})]}),e.jsxs("div",{className:"field-wrapper",children:[e.jsx("label",{children:"Last Name"}),e.jsx("input",{required:!0,type:"text",value:s,onChange:r=>i({lastName:r.target.value})})]}),e.jsxs("div",{className:"field-wrapper",children:[e.jsx("label",{children:"Age"}),e.jsx("input",{required:!0,min:1,type:"number",value:l,onChange:r=>i({age:r.target.value})})]}),e.jsxs("div",{className:"field-wrapper",children:[e.jsx("label",{children:"Gender"}),e.jsxs("select",{required:!0,defaultValue:"select",id:"gender",onChange:r=>i({gender:r.target.value}),children:[e.jsx("option",{value:"",children:"Select an Option"}),e.jsx("option",{value:"male",children:"Male"}),e.jsx("option",{value:"fmale",children:"Fmale"})]})]}),e.jsxs("div",{className:"field-wrapper",children:[e.jsx("label",{children:"Street"}),e.jsx("input",{autoFocus:!0,required:!0,type:"text",value:a,onChange:r=>i({street:r.target.value})})]}),e.jsxs("div",{className:"field-wrapper",children:[e.jsx("label",{children:"City"}),e.jsx("input",{required:!0,type:"text",value:c,onChange:r=>i({city:r.target.value})})]}),e.jsxs("div",{className:"field-wrapper",children:[e.jsx("label",{children:"State"}),e.jsx("input",{required:!0,type:"text",value:t,onChange:r=>i({state:r.target.value})})]}),e.jsxs("div",{className:"field-wrapper",children:[e.jsx("label",{children:"Zip"}),e.jsx("input",{required:!0,type:"text",value:p,onChange:r=>i({zip:r.target.value})})]})]})}function v({email:n,password:s,updateFields:l,title:u}){return e.jsxs(x,{title:"Verify Your Details",children:[e.jsxs("div",{className:"field-wrapper",children:[e.jsx("label",{children:"Email"}),e.jsx("input",{autoFocus:!0,required:!0,type:"email",value:n,onChange:a=>l({email:a.target.value})})]}),e.jsxs("div",{className:"field-wrapper",children:[e.jsx("label",{children:"Password"}),e.jsx("input",{required:!0,type:"password",value:s,onChange:a=>l({password:a.target.value})})]})]})}function g({street:n,city:s,state:l,zip:u,updateFields:a,title:c}){return e.jsxs(x,{title:"Verify Your Details",children:[e.jsxs("div",{className:"field-wrapper",children:[e.jsx("label",{children:"Street"}),e.jsx("input",{autoFocus:!0,required:!0,type:"text",value:n,onChange:t=>a({street:t.target.value})})]}),e.jsxs("div",{className:"field-wrapper",children:[e.jsx("label",{children:"City"}),e.jsx("input",{required:!0,type:"text",value:s,onChange:t=>a({city:t.target.value})})]}),e.jsxs("div",{className:"field-wrapper",children:[e.jsx("label",{children:"State"}),e.jsx("input",{required:!0,type:"text",value:l,onChange:t=>a({state:t.target.value})})]}),e.jsxs("div",{className:"field-wrapper",children:[e.jsx("label",{children:"Zip"}),e.jsx("input",{required:!0,type:"text",value:u,onChange:t=>a({zip:t.target.value})})]})]})}const y=()=>{const{step:n,steps:s,isFirstStep:l,isLastStep:u,currentStepIndex:a,next:c,prev:t}=j([e.jsx(m,{},1),e.jsx(g,{},2),e.jsx(v,{},3)]);function p(d){d.preventDefault(),c()}const i=["Information","CV","Questions"];return e.jsx(e.Fragment,{children:e.jsxs("form",{onSubmit:p,children:[e.jsx("div",{className:"form_steps-container",children:s.map((d,o)=>e.jsxs("div",{className:"form_step-wrapper",children:[e.jsx("div",{className:`form__step-box ${a==o?"active":""}`,children:e.jsx("span",{className:"step-num",children:o+1})}),e.jsx("h6",{children:i[o]})]}))}),e.jsxs("span",{className:"steps-counter",children:["step ",a+1," / ",s.length]}),e.jsxs("div",{className:"bottom-container",children:[n,e.jsxs("div",{className:"btns-container",children:[!l&&e.jsx("button",{className:"prev-btn",type:"button",onClick:t,children:"Back"}),e.jsx("button",{className:"next-btn",type:"submit",children:u?"Finish":"Next Step"})]})]})]})})};export{y as default};
