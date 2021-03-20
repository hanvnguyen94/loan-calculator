(this["webpackJsonploan-calculator"]=this["webpackJsonploan-calculator"]||[]).push([[0],{31:function(e,t,s){},32:function(e,t,s){},40:function(e,t,s){"use strict";s.r(t);var a=s(0),n=s(23),c=s.n(n),r=(s(31),s(32),s(41)),l=s(42),i=s(24),o=s(1),j=function(){return Object(o.jsx)("footer",{className:"footer",children:Object(o.jsx)(r.a,{children:Object(o.jsx)(l.a,{children:Object(o.jsx)(i.a,{className:"footer text-center py-5 text-muted",children:"Copyright \xa9 Han Ng 2021"})})})})},m=s(12),u=s(18),d=s(13),b=s(43),p=s(45),h=s(44),x=s(6),O=Object(x.d)((function(){var e=Object(a.useState)({amount:"",interest:"",years:""}),t=Object(d.a)(e,2),s=t[0],n=t[1],c=Object(a.useState)({monthlyPayment:0,totalPayment:0,totalInterest:0,isResult:!1}),j=Object(d.a)(c,2),x=j[0],O=j[1],N=Object(a.useState)(""),y=Object(d.a)(N,2),f=y[0],g=y[1],v=function(e){return n(Object(u.a)(Object(u.a)({},s),{},Object(m.a)({},e.target.name,e.target.value)))},C=function(){var e=s.amount,t=s.interest,a=s.years,n="";return(isNaN(e)||isNaN(t)||isNaN(a))&&(n="Must be a valid number"),(Number(e)<=0||Number(t)<=0||Number(a)<=0)&&(n="Numbers must be positive"),!n||(g(n),!1)};return Object(o.jsxs)(r.a,{children:[Object(o.jsx)("h1",{children:"Loan Calculator"}),Object(o.jsxs)(l.a,{className:"py-3 my-3 box-around",children:[Object(o.jsx)(i.a,{className:"input-field",md:6,children:Object(o.jsxs)("div",{className:"flex-container1",children:[f?Object(o.jsx)("div",{className:"form-group has-danger",children:Object(o.jsx)("input",{type:"text",value:f,className:"form-control is-invalid",id:"inputInvalid"})}):"",Object(o.jsxs)(b.a,{onSubmit:function(e){e.preventDefault(),C()&&(g(""),function(e){var t=e.amount,s=e.interest,a=e.years,n=Number(t),c=Number(s/100/12),r=Number(12*a),l=Math.pow(1+c,r),i=n*l*c/(l-1);if(isFinite(i)){var o=i.toFixed(2),j=(i*r).toFixed(2),m=(i*r-n).toFixed(2);O({monthlyPayment:o,totalPayment:j,totalInterest:m,isResult:!0})}}(s))},children:[Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{className:"control-label",children:"Loan Amount"}),Object(o.jsx)("div",{className:"form-group",children:Object(o.jsxs)("div",{className:"input-group mb-3",children:[Object(o.jsx)("div",{className:"input-group-prepend",children:Object(o.jsx)("span",{className:"input-group-text",children:"$"})}),Object(o.jsx)("input",{required:!0,type:"number",name:"amount",value:s.amount,onChange:v,className:"form-control","aria-label":"Amount (to the nearest dollar)"}),Object(o.jsx)("div",{className:"input-group-append",children:Object(o.jsx)("span",{className:"input-group-text",children:".00"})})]})})]}),Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{className:"control-label",children:"Loan term in years"}),Object(o.jsx)("fieldset",{className:"form-group",children:Object(o.jsx)("input",{value:s.years,onChange:function(e){return n({years:e.target.value})},min:"1",max:"99",step:"0.5",type:"range",className:"custom-range",id:"customRange1"})}),Object(o.jsx)("div",{className:"form-group",children:Object(o.jsx)("div",{className:"input-group mb-3",children:Object(o.jsx)("input",{required:!0,type:"number",name:"years",value:s.years,onChange:v,className:"form-control"})})})]}),Object(o.jsx)("h6",{children:"Or"}),Object(o.jsx)("div",{className:"form-group",children:Object(o.jsxs)("fieldset",{children:[Object(o.jsx)("label",{className:"control-label",htmlFor:"readOnlyInput",children:"Loan term in months"}),Object(o.jsx)("input",{className:"form-control",id:"readOnlyInput",type:"number",name:"months",value:12*s.years,onChange:v,readOnly:"readOnly"})]})}),Object(o.jsxs)("div",{className:"form-group w-75",children:[Object(o.jsx)("label",{className:"control-label",children:"Interest rate per year"}),Object(o.jsx)("fieldset",{className:"form-group w-75",children:Object(o.jsx)("input",{onChange:function(e){return n({interest:e.target.value})},min:"1",max:"99",step:"0.5",type:"range",className:"custom-range",id:"customRange1"})}),Object(o.jsx)("div",{className:"form-group w-75",children:Object(o.jsxs)("div",{className:"input-group mb-3",children:[Object(o.jsx)("input",{required:!0,type:"number",name:"interest",value:s.interest,onChange:v,className:"form-control"}),Object(o.jsx)("div",{className:"input-group-append",children:Object(o.jsx)("span",{className:"input-group-text",children:"%"})})]})})]}),Object(o.jsxs)("div",{className:"w-75",children:[Object(o.jsx)(p.a,{md:6,className:"mr-2",type:"submit",variant:"primary",children:"CALCULATE"}),Object(o.jsx)(p.a,{type:"submit",onClick:function(){n({amount:"",interest:"",years:""}),g(""),O({monthlyPayment:"",totalPayment:"",totalInterest:"",isResult:!1})},children:"RESET"})]})]})]})}),Object(o.jsx)(i.a,{md:6,className:"results",children:Object(o.jsxs)("div",{className:"flex-container2",children:[Object(o.jsxs)("div",{className:"title",children:[Object(o.jsx)(h.a.Title,{style:{fontSize:"2rem",color:"#e6e6e6"},className:"px-4",children:"Monthly Payments"}),Object(o.jsx)(h.a.Title,{style:{color:"#e6e6e6"},className:"px-4",children:Object(o.jsxs)("span",{style:{fontSize:"4rem"},children:["$",x.monthlyPayment]})})]}),Object(o.jsxs)("div",{className:"list-group-flush",children:[Object(o.jsxs)("h4",{style:{color:"#e6e6e6"},children:["Total Principal Paid ",Object(o.jsxs)("span",{children:["$",s.amount]})]}),Object(o.jsxs)("h4",{style:{color:"#e6e6e6"},children:["Total Interest Paid ",Object(o.jsxs)("span",{children:["$",x.totalInterest]})]})]})]})})]})]})}));var N=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("main",{children:Object(o.jsx)(O,{})}),Object(o.jsx)(j,{})]})},y=s(17);c.a.render(Object(o.jsx)(y.a,{children:Object(o.jsx)(N,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.fa564f04.chunk.js.map