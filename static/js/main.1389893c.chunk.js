(this["webpackJsonpreact-homework-ts"]=this["webpackJsonpreact-homework-ts"]||[]).push([[0],[,,,,function(e,t,n){e.exports={mainWrapper:"Affairs_mainWrapper__3l8Jr",affairs:"Affairs_affairs__2rVlJ",wrapper:"Affairs_wrapper__BnbKt",title:"Affairs_title__3dWI5",priority:"Affairs_priority__3nyhj",button:"Affairs_button__2hi1e",priorityButton:"Affairs_priorityButton__10zut",high:"Affairs_high__3RURM",middle:"Affairs_middle__1kpoX",low:"Affairs_low__2PgFG"}},,,function(e,t,n){e.exports={message:"Message_message__3Q-4Q",img:"Message_img__bUcCU",wrapper:"Message_wrapper__1z9Hz",item:"Message_item__33Dxb",title:"Message_title__2rocb",text:"Message_text__3JPko",date:"Message_date__2k7X5"}},,function(e,t,n){e.exports={wrapper:"Greeting_wrapper__5L4DG",button:"Greeting_button__3cOvf",totalUsers:"Greeting_totalUsers__1ZJew",error:"Greeting_error__2v2ZK",inputTitle:"Greeting_inputTitle__1SurG",errorTitle:"Greeting_errorTitle__k-J0n"}},,,,function(e,t,n){e.exports={column:"HW4_column__2M_Jp",testSpanError:"HW4_testSpanError__2M_zI",blue:"HW4_blue__1lORg"}},function(e,t,n){e.exports={superCheckbox:"SuperCheckbox_superCheckbox__36pbN",checkbox:"SuperCheckbox_checkbox__10nuF",spanClassName:"SuperCheckbox_spanClassName__3rs6L"}},function(e,t,n){e.exports={error:"SuperInputText_error__22oqA",superInput:"SuperInputText_superInput__2fZv7",errorInput:"SuperInputText_errorInput__Eq78k"}},function(e,t,n){e.exports={btn:"SuperButton_btn__3w5g5",btnShadow:"SuperButton_btnShadow__gmodd",red:"SuperButton_red__2irHJ"}},,function(e,t,n){e.exports={App:"App_App__2-3a_",title:"App_title__2roCK",active:"App_active___-Bnt"}},function(e,t,n){},,function(e,t,n){e.exports={superSpan:"SuperEditebleSpan_superSpan__zi5Yp"}},,,,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(20),s=n.n(c),i=(n(26),n(18)),o=n.n(i),j=n(3),l=n(8),b=n(7),u=n.n(b),d=n(0);var h=function(e){return Object(d.jsxs)("div",{className:u.a.message,children:[Object(d.jsx)("div",{className:u.a.img,children:Object(d.jsx)("img",{src:e.avatar,alt:""})}),Object(d.jsxs)("div",{className:u.a.wrapper,children:[Object(d.jsxs)("div",{className:u.a.item,children:[Object(d.jsx)("div",{className:u.a.title,children:e.name}),Object(d.jsx)("div",{className:u.a.text,children:e.message})]}),Object(d.jsx)("div",{className:u.a.date,children:e.time})]}),Object(d.jsx)("svg",{height:"0",width:"0",children:Object(d.jsx)("defs",{children:Object(d.jsx)("clipPath",{id:"svgPath",children:Object(d.jsx)("path",{fill:"#FFFFFF",d:"M10,10H0V0H0A10,12,0,0,0,8,9Z"})})})})]})},x="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",O="Some Name",p="some textome texome texome texome texome texome texome tex",m="22:00";var f=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 1",Object(d.jsx)(h,{avatar:x,name:O,message:p,time:m}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},_=n(4),v=n.n(_);var g=function(e){var t=v.a.priority+" "+v.a[e.affair.priority];return Object(d.jsxs)("div",{className:v.a.wrapper,children:[Object(d.jsx)("div",{className:v.a.title,children:e.affair.name}),Object(d.jsx)("div",{className:t,children:e.affair.priority}),Object(d.jsx)("button",{className:v.a.button,onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"X"})]})};var N=function(e){var t=e.data.map((function(t){return Object(d.jsx)(g,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(d.jsxs)("div",{className:v.a.affairs,children:[t,Object(d.jsx)("button",{className:v.a.priorityButton,onClick:function(){e.setFilter("all")},children:"All"}),Object(d.jsx)("button",{className:v.a.priorityButton,onClick:function(){e.setFilter("high")},children:"High"}),Object(d.jsx)("button",{className:v.a.priorityButton,onClick:function(){e.setFilter("middle")},children:"Middle"}),Object(d.jsx)("button",{className:v.a.priorityButton,onClick:function(){e.setFilter("low")},children:"Low"})]})},C=[{_id:1,name:"React",priority:"high"},{_id:2,name:"Anime",priority:"low"},{_id:3,name:"Games",priority:"low"},{_id:4,name:"Work",priority:"high"},{_id:5,name:"HTML & CSS",priority:"middle"}];var k=function(){var e=Object(a.useState)(C),t=Object(j.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)("all"),s=Object(j.a)(c,2),i=s[0],o=s[1],l=function(e,t){return"all"===t?e:e.filter((function(e){return e.priority===t}))}(n,i);return Object(d.jsxs)("div",{className:v.a.mainWrapper,children:[Object(d.jsx)("hr",{}),"homeworks 2",Object(d.jsx)(N,{data:l,setFilter:o,deleteAffairCallback:function(e){return r(function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e))}}),Object(d.jsx)("hr",{})]})},y=n(12),w=n(9),S=n.n(w),A=function(e){var t=e.name,n=e.setNameCallback,a=e.addUser,r=e.error,c=e.totalUsers,s=r?S.a.error:S.a.inputTitle;return Object(d.jsxs)("div",{className:S.a.wrapper,children:[Object(d.jsx)("input",{value:t,onChange:n,className:s}),Object(d.jsx)("span",{className:S.a.errorTitle,children:r}),Object(d.jsx)("button",{onClick:a,className:S.a.button,children:"Add Name"}),Object(d.jsx)("span",{className:S.a.totalUsers,children:c})]})},T=function(e){var t=e.users,n=e.addUserCallback,r=Object(a.useState)(""),c=Object(j.a)(r,2),s=c[0],i=c[1],o=Object(a.useState)(""),l=Object(j.a)(o,2),b=l[0],u=l[1],h=t.length;return Object(d.jsx)(A,{name:s,setNameCallback:function(e){var t=e.currentTarget.value.trim();t?(i(t),u("")):(i(""),u("Name incorrectly"))},addUser:function(){""!==s?(n(s),alert("Hello "+s+" !")):alert("Enter new name!"),i("")},error:b,totalUsers:h})},F=n(32);var B=function(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),n=t[0],r=t[1];return console.log(n),Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 3",Object(d.jsx)(T,{users:n,addUserCallback:function(e){r([{_id:Object(F.a)(),name:e}].concat(Object(y.a)(n)))}}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},E=n(6),I=n(5),J=n(15),M=n.n(J),P=function(e){e.type;var t=e.onChange,n=e.onChangeText,a=e.onKeyPress,r=e.onEnter,c=e.error,s=(e.className,e.spanClassName),i=Object(I.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),o="".concat(M.a.error," ").concat(s||""),j="".concat(M.a.superInput," ").concat(c?M.a.errorInput:""," ");return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("input",Object(E.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){a&&a(e),r&&"Enter"===e.key&&r()},className:j},i)),c&&Object(d.jsx)("span",{className:o,children:c})]})},H=n(13),U=n.n(H),W=n(16),G=n.n(W),D=function(e){var t=e.red,n=(e.className,Object(I.a)(e,["red","className"])),a="".concat(G.a.btn," ").concat(G.a.btnShadow," ").concat(t?G.a.red:""," ");return Object(d.jsx)("button",Object(E.a)({className:a},n))},z=n(14),K=n.n(z),R=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,a=(e.className,e.spanClassName,e.children),r=Object(I.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),c="".concat(K.a.superCheckbox," ").concat(K.a.superCheckbox?K.a.superCheckbox:"");return Object(d.jsxs)("label",{children:[Object(d.jsx)("input",Object(E.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:c},r)),Object(d.jsx)("span",{}),a&&Object(d.jsx)("span",{className:K.a.spanClassName,children:a})]})};var Z=function(){var e=Object(a.useState)(""),t=Object(j.a)(e,2),n=t[0],r=t[1],c=n?"":"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442...",s=function(){c?alert("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},i=Object(a.useState)(!1),o=Object(j.a)(i,2),l=o[0],b=o[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 4",Object(d.jsxs)("div",{className:U.a.column,children:[Object(d.jsx)(P,{value:n,onChangeText:r,onEnter:s,error:c,spanClassName:U.a.testSpanError,className:U.a.superInput}),Object(d.jsx)(P,{className:U.a.blue}),Object(d.jsx)(D,{children:"Default"}),Object(d.jsx)(D,{red:!0,onClick:s,children:"Delete "}),Object(d.jsx)(D,{disabled:!0,children:"Disabled"}),Object(d.jsx)(R,{checked:l,onChangeChecked:b,children:"some text "}),Object(d.jsx)(R,{checked:l,onChange:function(e){return b(e.currentTarget.checked)}})]}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},L=n(21),X=n.n(L),q=function(e){e.autoFocus;var t=e.onBlur,n=e.onEnter,r=e.spanProps,c=Object(I.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),s=Object(a.useState)(!1),i=Object(j.a)(s,2),o=i[0],l=i[1],b=r||{},u=b.children,h=b.onDoubleClick,x=(b.className,Object(I.a)(b,["children","onDoubleClick","className"])),O="icon-pencil".concat(" ",X.a.superSpan);return Object(d.jsx)(d.Fragment,{children:o?Object(d.jsx)(P,Object(E.a)({autoFocus:!0,onBlur:function(e){l(!1),t&&t(e)},onEnter:function(){l(!1),n&&n()},className:"superSpan"},c)):Object(d.jsxs)("span",Object(E.a)(Object(E.a)({onDoubleClick:function(e){l(!0),h&&h(e)},className:O},x),{},{children:[u||c.value,"  \u270e"]}))})};function Q(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}function V(e,t){var n=t,a=localStorage.getItem(e);return null!==a&&(n=JSON.parse(a)),n}Q("test",{x:"A",y:1});V("test",{x:"",y:0});var Y=function(){var e=Object(a.useState)(""),t=Object(j.a)(e,2),n=t[0],r=t[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 6",Object(d.jsx)("div",{children:Object(d.jsx)(q,{value:n,onChangeText:r,spanProps:{children:n?void 0:"Enter text..."}})}),Object(d.jsx)(D,{onClick:function(){Q("editable-span-value",n)},children:"save"}),Object(d.jsx)(D,{onClick:function(){r(V("editable-span-value",""))},children:"restore"}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})};var $=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(f,{}),Object(d.jsx)(k,{}),Object(d.jsx)(B,{}),Object(d.jsx)(Z,{}),Object(d.jsx)(Y,{})]})};var ee=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{children:"404"}),Object(d.jsx)("div",{children:"Page not found!"}),Object(d.jsx)("div",{children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})};var te=function(){return Object(d.jsx)("div",{})},ne=function(e){var t=e.options,n=e.onChange,a=e.onChangeOption,r=Object(I.a)(e,["options","onChange","onChangeOption"]),c=t?t.map((function(e,t){return Object(d.jsx)("option",{value:e,children:e},e+"-"+t)})):[];return Object(d.jsx)("select",Object(E.a)(Object(E.a)({onChange:function(e){n&&n(e),a&&a(e.currentTarget.value)}},r),{},{children:c}))},ae=function(e){e.type;var t=e.name,n=e.options,a=e.value,r=e.onChange,c=e.onChangeOption,s=(Object(I.a)(e,["type","name","options","value","onChange","onChangeOption"]),function(e){a=e.currentTarget.value,r&&r(e),c&&c(a)}),i=n?n.map((function(e,n){return Object(d.jsxs)("label",{children:[Object(d.jsx)("input",{type:"radio",onChange:s,checked:e===a,value:e}),e]},t+"-"+n)})):[];return Object(d.jsx)(d.Fragment,{children:i})},re=["x","y","z"];var ce=function(){var e=Object(a.useState)(re[1]),t=Object(j.a)(e,2),n=t[0],r=t[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 7",Object(d.jsx)("div",{children:Object(d.jsx)(ne,{options:re,value:n,onChangeOption:r})}),Object(d.jsx)("div",{children:Object(d.jsx)(ae,{name:"radio",options:re,value:n,onChangeOption:r})}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},se=function(e,t){switch(t.type){case"sort":var n=Object(y.a)(e).sort((function(e,t){return e.name>t.name?1:-1}));return"up"===t.payload?n:n.reverse();case"check":return Object(y.a)(e).filter((function(e){return e.age>18}));default:return e}},ie=(n(28),[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}]);var oe=function(){var e=Object(a.useState)(ie),t=Object(j.a)(e,2),n=t[0],r=t[1],c=n.map((function(e){return Object(d.jsxs)("div",{className:"stateClass",children:[Object(d.jsx)("div",{children:e.name}),Object(d.jsx)("div",{children:e.age})]},e._id)}));return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),Object(d.jsx)("div",{className:"homework",children:"Homework 8"}),Object(d.jsx)("div",{className:"hw8_wrapper",children:c}),Object(d.jsx)("div",{children:Object(d.jsx)(D,{onClick:function(){return r(se(ie,{type:"sort",payload:"up"}))},children:"sort up"})}),Object(d.jsx)("div",{children:Object(d.jsx)(D,{onClick:function(){return r(se(ie,{type:"sort",payload:"down"}))},children:"sort down"})}),Object(d.jsx)("div",{children:Object(d.jsx)(D,{onClick:function(){return r(se(ie,{type:"check",payload:18}))},children:"check 18"})}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})};var je=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(ce,{}),Object(d.jsx)(oe,{})]})},le=n(2),be=(n(19),"/pre-junior"),ue="/junior",de="/junior-plus";var he=function(){return Object(d.jsx)("div",{className:"main",children:Object(d.jsxs)(le.d,{children:[Object(d.jsx)(le.b,{path:"/",element:function(){return Object(d.jsx)(le.a,{to:be})}}),Object(d.jsx)(le.b,{path:"/",element:function(){return Object(d.jsx)(le.a,{to:ue})}}),Object(d.jsx)(le.b,{path:"/",element:function(){return Object(d.jsx)(le.a,{to:de})}}),Object(d.jsx)(le.b,{path:be,element:Object(d.jsx)($,{})}),Object(d.jsx)(le.b,{path:ue,element:Object(d.jsx)(je,{})}),Object(d.jsx)(le.b,{path:de,element:Object(d.jsx)(te,{})}),Object(d.jsx)(le.b,{element:function(){return Object(d.jsx)(ee,{})}})]})})},xe=(n(29),function(e){return e.isActive?"active link":"link"});var Oe=function(){var e=Object(a.useState)(!1),t=Object(j.a)(e,2),n=t[0],r=t[1];return Object(d.jsx)("div",{className:n?"sidebar".concat(" ","close"):"sidebar",children:Object(d.jsxs)("div",{className:"wrapper",children:[Object(d.jsx)("div",{className:"toggle-bar",children:Object(d.jsx)("i",{className:"bx bx-chevron-left toggle",onClick:function(){r(!n)}})}),Object(d.jsxs)("ul",{className:"menu",children:[Object(d.jsx)("li",{children:Object(d.jsxs)(l.b,{to:be,className:xe,children:[Object(d.jsx)("i",{className:"bx bx-angry icon"}),Object(d.jsx)("span",{className:"text",children:"Pre-junior"})]})}),Object(d.jsx)("li",{children:Object(d.jsxs)(l.b,{to:ue,className:xe,children:[" ",Object(d.jsx)("i",{className:"bx bx-smile icon"}),Object(d.jsx)("span",{className:"text",children:"Junior"})]})}),Object(d.jsx)("li",{children:Object(d.jsxs)(l.b,{to:de,className:xe,children:[Object(d.jsx)("i",{className:"bx bx-happy-beaming icon"}),Object(d.jsx)("span",{className:"text",children:"Junior-Plus"})]})})]})]})})};var pe=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)(l.a,{children:[Object(d.jsx)(Oe,{}),Object(d.jsx)(he,{})]})})};var me=function(){return Object(d.jsxs)("div",{className:o.a.App,children:[Object(d.jsx)("div",{className:o.a.title,children:"React homeworks:"}),Object(d.jsx)(pe,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(me,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[30,1,2]]]);
//# sourceMappingURL=main.1389893c.chunk.js.map