(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(7),c=n.n(a),s=(n(13),n(1)),i=n(2),l=n(4),h=n(3),u=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var o;return Object(s.a)(this,n),(o=t.call(this,e)).state={hasError:!1},o}return Object(i.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Oooops. That is not good "):this.props.children}}]),n}(o.Component),d=function(e){e.robots;throw new Error("Nooooo!")},f=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"3px solid black",height:"500px"}},e.children)},m=function(e){var t=e.searchChange;return r.a.createElement("div",{className:"pa2 "},r.a.createElement("input",{onChange:t,className:"pa3 ba b--green bg-lightest-blue",type:"text",placeholder:"Search robots"}))},b=(n(6),n(14),function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchfield,o=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return t.length?r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1"},"Robo Friends"),r.a.createElement(m,{searchChange:this.onSearchChange}),r.a.createElement(f,null,r.a.createElement(u,null,r.a.createElement(d,{robots:o})))):r.a.createElement("h1",null,"Loading...")}}]),n}(o.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.e505b07c.chunk.js.map