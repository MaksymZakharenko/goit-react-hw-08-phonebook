(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[4],{108:function(e,t,a){"use strict";a.r(t);var n=a(4),s=a(32),i=a(33),r=a(35),o=a(34),l=a(0),c=a(13),h=a(23),b=a(1),p=function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(s.a)(this,a);for(var i=arguments.length,r=new Array(i),o=0;o<i;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={name:"",email:"",password:""},e.handleChange=function(t){var a=t.target,s=a.name,i=a.value;e.setState(Object(n.a)({},s,i))},e.handleSubmit=function(t){t.preventDefault(),e.props.onRegister(e.state),e.setState({name:"",email:"",password:""})},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state,t=e.name,a=e.email,n=e.password;return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438"}),Object(b.jsxs)("form",{onSubmit:this.handleSubmit,autoComplete:"off",children:[Object(b.jsxs)("lable",{children:["\u0418\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",Object(b.jsx)("input",{type:"text",name:"name",value:t,onChange:this.handleChange})]}),Object(b.jsxs)("lable",{children:["\u041f\u043e\u0447\u0442\u0430",Object(b.jsx)("input",{type:"email",name:"email",value:a,onChange:this.handleChange})]}),Object(b.jsxs)("lable",{children:["\u041f\u0430\u0440\u043e\u043b\u044c",Object(b.jsx)("input",{type:"password",name:"password",value:n,onChange:this.handleChange})]}),Object(b.jsx)("button",{type:"submit",children:"/registration"===this.props.location.pathname?"register":"login"})]})]})}}]),a}(l.Component),u={onRegister:h.d};t.default=Object(c.b)(null,u)(p)}}]);
//# sourceMappingURL=register-view.9edefc57.chunk.js.map