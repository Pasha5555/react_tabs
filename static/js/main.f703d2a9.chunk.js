(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(2),o=n.n(r),l=(n(13),n(3)),s=n(4),i=n(7),u=n(6),b=n(5),p=n.n(b),d=function(t){Object(i.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={selectedTab:t.props.index},t.onTabSelected=function(e){t.setState({selectedTab:t.props.tabs.findIndex((function(t){return t.title===e.target.textContent}))})},t}return Object(s.a)(n,[{key:"render",value:function(){var t=this,e=this.props.tabs,n=this.state.selectedTab;return c.a.createElement("div",null,e.map((function(e,a){return c.a.createElement("button",{type:"button",className:p()("tabs",{active_tab:+n===a}),key:e.title,onClick:t.onTabSelected},e.title)})),c.a.createElement("article",{className:"tab_content"},e[n].content))}}]),n}(c.a.Component);d.defaultProps={index:0};var m=[{title:"Tab 1",content:"Some text 1"},{title:"Tab 2",content:"Some text 2"},{title:"Tab 3",content:"Some text 3"}],f=function(){return c.a.createElement("div",null,c.a.createElement("h1",null,"React tabs"),c.a.createElement(d,{tabs:m,index:0}))};o.a.render(c.a.createElement(f,null),document.getElementById("root"))},8:function(t,e,n){t.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.f703d2a9.chunk.js.map