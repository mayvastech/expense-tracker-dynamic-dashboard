(this["webpackJsonpexpense-tracker-dynamic-dashboard"]=this["webpackJsonpexpense-tracker-dynamic-dashboard"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(7),c=n.n(a),l=(n(13),n(5)),s=n(2),i=n(1),r=(n(14),n(0));var u=function(e){var t=e.date.toLocaleString("en-US",{month:"long"}),n=e.date.toLocaleString("en-US",{day:"2-digit"}),a=e.date.getFullYear();return Object(r.jsxs)("div",{className:"expense-date",children:[Object(r.jsx)("div",{className:"expense-date__month",children:t}),Object(r.jsx)("div",{className:"expense-date__year",children:a}),Object(r.jsx)("div",{className:"expense-date__day",children:n})]})};n(16),n(17);var o=function(e){var t="card "+e.className;return Object(r.jsx)("div",{className:t,children:e.children})};var d=function(e){return Object(r.jsxs)(o,{className:"expense-item",children:[Object(r.jsx)(u,{date:e.date}),Object(r.jsxs)("div",{className:"expense-item__description",children:[Object(r.jsx)("h2",{children:e.title}),Object(r.jsxs)("div",{className:"expense-item__price",children:["$",e.amount]})]})]})};n(18),n(19);var j=function(e){return Object(r.jsx)("div",{className:"expenses-filter",children:Object(r.jsxs)("div",{className:"expenses-filter__control",children:[Object(r.jsx)("label",{children:"Filter by year"}),Object(r.jsxs)("select",{value:e.selected,onChange:function(t){e.onChangeFilter(t.target.value)},children:[Object(r.jsx)("option",{value:"2022",children:"2022"}),Object(r.jsx)("option",{value:"2021",children:"2021"}),Object(r.jsx)("option",{value:"2020",children:"2020"}),Object(r.jsx)("option",{value:"2019",children:"2019"})]})]})})},b=(n(20),n(8));n(21);var x=function(e){var t="0%";return e.maxValue>0&&(t=Math.round(e.value/e.maxValue*100)+"%"),Object(r.jsxs)("div",{className:"chart-bar",children:[Object(r.jsx)("div",{className:"chart-bar__inner",children:Object(r.jsx)("div",{className:"chart-bar__fill",style:{height:t}})}),Object(r.jsx)("div",{className:"chart-bar__label",children:e.label})]})};n(22);var v=function(e){var t=e.dataPoints.map((function(e){return e.value})),n=Math.max.apply(Math,Object(l.a)(t));return Object(r.jsx)("div",{className:"chart",children:e.dataPoints.map((function(e){return Object(r.jsx)(x,{value:e.value,maxValue:n,label:e.label},e.label)}))})};var h=function(e){var t,n=[{label:"Jan",value:0},{label:"Feb",value:0},{label:"Mar",value:0},{label:"Apr",value:0},{label:"May",value:0},{label:"Jun",value:0},{label:"Jul",value:0},{label:"Aug",value:0},{label:"Sep",value:0},{label:"Oct",value:0},{label:"Nov",value:0},{label:"Dec",value:0}],a=Object(b.a)(e.expenses);try{for(a.s();!(t=a.n()).done;){var c=t.value;n[c.date.getMonth()].value+=c.amount}}catch(l){a.e(l)}finally{a.f()}return Object(r.jsx)(v,{dataPoints:n})};var O=function(e){var t=Object(i.useState)("2021"),n=Object(s.a)(t,2),a=n[0],c=n[1],l=e.allexpenses.filter((function(e){return e.date.getFullYear().toString()===a}));return Object(r.jsx)("div",{children:Object(r.jsxs)(o,{className:"expenses expenses-list__fallback",children:[Object(r.jsx)(j,{selected:a,onChangeFilter:function(e){c(e)}}),Object(r.jsx)(h,{expenses:l}),0===l.length&&Object(r.jsx)("p",{children:"No expenses found"}),l.length>0&&l.map((function(e){return Object(r.jsx)(d,{title:e.title,amount:e.amount,date:e.date},e.id)}))]})})};n(23);var m=function(e){var t=Object(i.useState)(!1),n=Object(s.a)(t,2),a=n[0],c=n[1],l=Object(i.useState)(""),u=Object(s.a)(l,2),o=u[0],d=u[1],j=Object(i.useState)(""),b=Object(s.a)(j,2),x=b[0],v=b[1],h=Object(i.useState)(""),O=Object(s.a)(h,2),m=O[0],p=O[1];function f(){c(!1)}return Object(r.jsxs)("div",{className:"new-expense",children:[!a&&Object(r.jsx)("button",{onClick:function(){c(!0)},children:"Add New Expense"}),a&&Object(r.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={title:o,amount:+x,date:new Date(m),id:Math.random().toString()};c(!1),console.log(n),e.onAddExpense(n),d(""),v(""),p("")},onCancel:f,children:[Object(r.jsxs)("div",{className:"new-expense__controls",children:[Object(r.jsxs)("div",{className:"new-expense__control",children:[Object(r.jsx)("label",{htmlFor:"",children:"Title"}),Object(r.jsx)("input",{type:"text",value:o,onChange:function(e){d(e.target.value)}})]}),Object(r.jsxs)("div",{className:"new-expense__control",children:[Object(r.jsx)("label",{htmlFor:"",children:"Amount"}),Object(r.jsx)("input",{type:"number",min:"0.01",step:"0.01",value:x,onChange:function(e){v(e.target.value)}})]}),Object(r.jsxs)("div",{className:"new-expense__control",children:[Object(r.jsx)("label",{htmlFor:"",children:"Date"}),Object(r.jsx)("input",{type:"date",min:"2019-01-01",max:"2022-12-31",value:m,onChange:function(e){p(e.target.value)}})]})]}),Object(r.jsxs)("div",{className:"new-expense__actions",children:[Object(r.jsx)("button",{type:"button",onClick:f,children:"Cancel"}),Object(r.jsx)("button",{type:"submit",children:"Add Expense"})]})]})]})},p=[{id:"e1",title:"Desktop PC",amount:1560,date:new Date(2020,7,14)},{id:"e2",title:"New TV",amount:799.49,date:new Date(2021,2,12)},{id:"e3",title:"Car Insurance",amount:294.67,date:new Date(2021,2,28)},{id:"e4",title:"New Desk (Wooden)",amount:450,date:new Date(2021,5,12)}];var f=function(){var e=Object(i.useState)(p),t=Object(s.a)(e,2),n=t[0],a=t[1];return Object(r.jsxs)("div",{children:[Object(r.jsx)(m,{onAddExpense:function(e){a((function(t){return[e].concat(Object(l.a)(t))}))}}),Object(r.jsx)(O,{allexpenses:n})]})};c.a.render(Object(r.jsx)(f,{}),document.getElementById("root"))}],[[24,1,2]]]);
//# sourceMappingURL=main.018f51fe.chunk.js.map