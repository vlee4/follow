(this.webpackJsonpfollow=this.webpackJsonpfollow||[]).push([[0],{32:function(e,t,n){e.exports=n(44)},37:function(e,t,n){},38:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),c=n(17),r=n.n(c),o=(n(37),n(38),n(13));var i=function(){return l.a.createElement("div",{className:"navbar"},l.a.createElement(o.b,{className:"title",to:"/follow/"},l.a.createElement("h1",{className:"title"},"Follow Your Money")),l.a.createElement("div",{className:"navLinks"},l.a.createElement(o.b,{to:"/follow/"}," Home "),l.a.createElement(o.b,{to:"/follow/tracker"}," Expense Tracker ")))},u=n(2),s=n(3);var m=Object(s.b)()((function(){return l.a.createElement("div",null,l.a.createElement("h2",null,"Welcome Home"),l.a.createElement("div",null,"This is the homepage to be!"))})),d=n(9),E=n(10),h=n(8),b=n(12),p=n(11);var v=Object(s.b)()((function(e){var t=new Date(e.date).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"2-digit"}),n=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2}).format(e.amount);return l.a.createElement("tr",null,l.a.createElement("td",null,e.id||"ID"),l.a.createElement("td",null,t||"January 3, 2020"),l.a.createElement("td",null,e.account||"Acct #1337108049384039 839doj odsf 82"),l.a.createElement("td",null,e.category||"Entertainment"),l.a.createElement("td",null,n||"$100"),l.a.createElement("td",null,l.a.createElement("button",null,"Edit")),l.a.createElement("td",null,l.a.createElement("button",null,"Delete")))})),g=n(19),f=n(26),y=n(25);var O=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(){var e;return Object(d.a)(this,n),(e=t.call(this)).state={id:"-",date:"",account:"",category:"",amount:0},e.handleSubmit=e.handleSubmit.bind(Object(h.a)(e)),e.handleChange=e.handleChange.bind(Object(h.a)(e)),e}return Object(E.a)(n,[{key:"handleSubmit",value:function(e){e.preventDefault(),console.log("form values:",this.state),this.setState({adding:!1})}},{key:"handleChange",value:function(e){this.setState(Object(g.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){return l.a.createElement("form",{onSubmit:this.handleSubmit,className:"addExpenseForm"},l.a.createElement("div",null,"4"),l.a.createElement("input",{name:"date",type:"date",value:this.state.date,onChange:this.handleChange,required:!0}),l.a.createElement("input",{name:"account",placeholder:"Account#",value:this.state.account,onChange:this.handleChange,required:!0}),l.a.createElement("input",{name:"category",placeholder:"Category",value:this.state.category,onChange:this.handleChange,autoComplete:"on",required:!0}),l.a.createElement("input",{name:"amount",placeholder:"Amount",type:"currency",value:this.state.amount,onChange:this.handleChange,required:!0}),l.a.createElement("button",{type:"submit"},"Submit"),l.a.createElement("button",{type:"button",onClick:this.cancel},"Cancel"))}}]),n}(l.a.Component),C=Object(s.b)(null,(function(e){return{addExpenseForm:function(t){return e((n=t,function(e){if(localStorage.getItem("Expenses")){var t=JSON.parse(localStorage.getItem("Expenses"));t.push(n),localStorage.setItem("Expenses",JSON.stringify(t))}else localStorage.setItem("Expenses",JSON.stringify([n]));e(function(e){return{type:"ADD_EXPENSE",expense:e}}(n))}));var n}}}))(O),S=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(){var e;return Object(d.a)(this,n),(e=t.call(this)).state={adding:!1,expenses:[]},e.handleAddition=e.handleAddition.bind(Object(h.a)(e)),e.cancel=e.cancel.bind(Object(h.a)(e)),e}return Object(E.a)(n,[{key:"handleAddition",value:function(){this.setState({adding:!0})}},{key:"cancel",value:function(){this.setState({adding:!1})}},{key:"componentDidMount",value:function(){var e=this.props.getExp();console.log("Here's the expenses",e),e&&this.setState({expenses:e})}},{key:"render",value:function(){var e=[{id:1,Date:"10 13 95",Account:"Acct #1337",Category:"Entertainment",Amount:100},{id:2,Date:"9 12 95",Account:"Acct #0613",Category:"Art",Amount:1030},{id:3,Date:"12 31 95",Account:"Acct #1337",Category:"Drama",Amount:10330}];return 0===this.state.expenses.length?l.a.createElement("div",null,l.a.createElement("h3",null,"EXPENSES"),l.a.createElement("div",null,"There are currently no expenses to be displayed. Please add an entry to begin tracking your expenses.")):l.a.createElement("div",{className:"expensesWindow"},l.a.createElement("h3",null,"EXPENSES"),l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,Object.keys(e[0]).map((function(e,t){return l.a.createElement("td",{key:"".concat(e,"_").concat(t)},e)})))),l.a.createElement("tbody",null,e.map((function(e,t){var n=e.id,a=e.Date,c=e.Account,r=e.Category,o=e.Amount;return l.a.createElement(v,{key:"".concat(n,"_").concat(t),id:n,date:a,account:c,category:r,amount:o})})))),this.state.adding?l.a.createElement(C,null):"",this.state.adding?l.a.createElement("button",{type:"button",onClick:this.cancel},"Cancel"):l.a.createElement("button",{name:"addExpense",onClick:this.handleAddition},"+"))}}]),n}(l.a.Component),j=Object(s.b)((function(e){return{expenses:e.expenses}}),(function(e){return{getExp:function(){return e((function(e){if(localStorage.getItem("Expenses")){var t=JSON.parse(localStorage.getItem("Expenses"));e({type:"GET_EXPENSES",expenses:t})}}))}}}))(S);var k=Object(s.b)()((function(){return l.a.createElement("div",null,l.a.createElement("h3",null,"ACCOUNTS"))}));var x=Object(s.b)()((function(){return l.a.createElement("div",null,l.a.createElement("h3",null,"CATEGORIES"))})),w=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(E.a)(n,[{key:"render",value:function(){return this.props.tab?"Accounts"===this.props.tab?l.a.createElement(k,null):"Categories"===this.props.tab?l.a.createElement(x,null):l.a.createElement(j,null):l.a.createElement("div",null,"Please select how you would like to view your expenses")}}]),n}(l.a.Component),A=Object(s.b)()(w),N=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(){var e;return Object(d.a)(this,n),(e=t.call(this)).state={tab:""},e.handleClick=e.handleClick.bind(Object(h.a)(e)),e}return Object(E.a)(n,[{key:"handleClick",value:function(e){this.setState({tab:e.target.value})}},{key:"render",value:function(){return l.a.createElement("div",{className:"tracker"},l.a.createElement("h2",null,"EXPENSE TRACKER"),l.a.createElement("div",null,"Choose what you want to view"),l.a.createElement("div",{className:"trackerView"},l.a.createElement("button",{value:"Expenses",onClick:this.handleClick},"Expenses"),l.a.createElement("button",{value:"Accounts",onClick:this.handleClick},"Accounts"),l.a.createElement("button",{value:"Categories",onClick:this.handleClick},"Categories")),l.a.createElement(A,{tab:this.state.tab}))}}]),n}(l.a.Component),D=Object(s.b)()(N);var I=function(){return l.a.createElement(u.c,null,l.a.createElement(u.a,{exact:!0,path:"/follow/",component:m}),l.a.createElement(u.a,{path:"/follow/tracker",component:D}))};var P=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(o.a,null,l.a.createElement(i,null),l.a.createElement(I,null)),l.a.createElement("footer",{className:"foot"},l.a.createElement("div",null,"Created: September 2020"),l.a.createElement("div",null,"Source Code: ",l.a.createElement("a",{href:"https://github.com/vlee4/follow/"},"Github"))))},T=n(14),J=n(29),X=n(30),_=n(31),F=Object(T.combineReducers)({expenses:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_EXPENSES":return Object(y.a)(Object(y.a)({},e),{},{expenses:Object(f.a)(t.expenses)});case"ADD_EXPENSE":return{adding:!1,expenses:[].concat(Object(f.a)(e.expenses),[t.expense])};default:return e}}}),W=Object(_.composeWithDevTools)(Object(T.applyMiddleware)(X.a,Object(J.createLogger)({collapsed:!0}))),q=Object(T.createStore)(F,W);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(s.a,{store:q},l.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.b53bc7af.chunk.js.map