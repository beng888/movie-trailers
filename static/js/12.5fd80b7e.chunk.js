(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{557:function(e,a,t){"use strict";t.r(a);var r=t(210),l=t(0),o=t.n(l),n=t(5),s=t(90),i=t(347),m=t(292),c=t(204),u=t(567),d=t(28),p=t(332),b=t(349),g=t(333),w=t(211);a.default=Object(n.f)(function(e){var a=Object(d.b)(),t=!!localStorage.getItem("rememberMe"),n=Object(l.useState)(""),h=Object(r.a)(n,2),f=h[0],E=h[1],y=Object(l.useState)(t),S=Object(r.a)(y,2),v=S[0],I=S[1],j=function(){I(!v)},k=localStorage.getItem("rememberMe")?localStorage.getItem("rememberMe"):"";return o.a.createElement(i.a,{initialValues:{email:k,password:""},validationSchema:m.object().shape({email:m.string().email("Email is invalid").required("Email is required"),password:m.string().min(6,"Password must be at least 6 characters").required("Password is required")}),onSubmit:function(t,r){var l=r.setSubmitting;setTimeout(function(){var r={email:t.email,password:t.password};a(Object(s.b)(r)).then(function(a){a.payload.loginSuccess?(window.localStorage.setItem("userId",a.payload.userId),!0===v?window.localStorage.setItem("rememberMe",t.id):localStorage.removeItem("rememberMe"),e.history.push("/")):E("Check out your Account or Password again")}).catch(function(e){E("Check out your Account or Password again"),setTimeout(function(){E("")},3e3)}),l(!1)},500)}},function(e){var a=e.values,t=e.touched,r=e.errors,l=e.isSubmitting,n=e.handleChange,s=e.handleBlur,i=e.handleSubmit;return o.a.createElement(p.a,{fluid:!0},o.a.createElement(g.a,{className:"justify-content-center",style:{height:"80vh ",display:"flex",alignItems:"center"}},o.a.createElement(b.a,{onSubmit:i,style:{width:"350px",padding:"1rem"}},o.a.createElement("h3",null,"Log In"),o.a.createElement(b.a.Group,{required:!0},o.a.createElement("label",{for:"email"},o.a.createElement(c.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}})," ","Email"),o.a.createElement(b.a.Control,{id:"email",placeholder:"Enter your email",type:"email",value:a.email,onChange:n,onBlur:s,className:r.email&&t.email?"text-input error":"text-input"}),r.email&&t.email&&o.a.createElement("div",{className:"input-feedback"},r.email)),o.a.createElement(b.a.Group,{required:!0},o.a.createElement("label",{for:"password"},o.a.createElement(c.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}})," ","Password"),o.a.createElement(b.a.Control,{id:"password",placeholder:"Enter your password",type:"password",value:a.password,onChange:n,onBlur:s,className:r.password&&t.password?"text-input error":"text-input"}),r.password&&t.password&&o.a.createElement("div",{className:"input-feedback"},r.password)),f&&o.a.createElement("label",null,o.a.createElement("p",{style:{color:"#ff0000bf",fontSize:"0.7rem",border:"1px solid",padding:"1rem",borderRadius:"10px"}},f)),o.a.createElement(b.a.Group,null,o.a.createElement(u.a,{id:"rememberMe",onChange:j,checked:v}," ","Remember me"),o.a.createElement("a",{className:"login-form-forgot",href:"/reset_user",style:{float:"right"}},"forgot password"),o.a.createElement("div",null,o.a.createElement(w.a,{type:"primary",htmlType:"submit",className:"login-form-button",style:{minWidth:"100%"},disabled:l,onSubmit:i},"Log in")),"Or ",o.a.createElement("a",{href:"/register"},"register now!")))))})})}}]);
//# sourceMappingURL=12.5fd80b7e.chunk.js.map