(this["webpackJsonpproj-one"]=this["webpackJsonpproj-one"]||[]).push([[0],[,,,,,,,function(e,n,t){e.exports=t(17)},,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(2),c=t.n(o),l=(t(12),t(3)),s=t(4),i=t(6),u=t(5),h=(t(13),t(14),function(e){return r.a.createElement("div",{className:"card-container"},r.a.createElement("img",{alt:"person",src:"https://robohash.org/".concat(e.person.id,"?set=set5&size=200x180")}),r.a.createElement("h3",null,e.person.name),r.a.createElement("table",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Email: "),r.a.createElement("td",null," ",e.person.email," ")),r.a.createElement("tr",null,r.a.createElement("th",null,"Phone: "),r.a.createElement("td",null," ",e.person.phone)),r.a.createElement("tr",null,r.a.createElement("th",null,"City: "),r.a.createElement("td",null," ",e.person.address.city))))}),m=(t(15),function(e){return r.a.createElement("div",{className:"card-list"},e.persons.map((function(e){return r.a.createElement(h,{key:e.id,person:e})})))}),d=(t(16),function(e){var n=e.placeholder,t=e.handleChange;return r.a.createElement("input",{type:"search",className:"search",placeholder:n,onChange:t})}),p=function(e){Object(i.a)(t,e);var n=Object(u.a)(t);function t(){var e;return Object(l.a)(this,t),(e=n.call(this)).state={persons:[],searchFieldByName:"",searchFieldByPhone:""},e}return Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(n){return e.setState({persons:n})}))}},{key:"render",value:function(){var e=this,n=this.state,t=n.persons,a=n.searchFieldByName,o=n.searchFieldByPhone,c=t.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())&&e.phone.replace(/-/g,"").includes(o)}));return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Personal Directory"),r.a.createElement(d,{placeholder:"Search Person",handleChange:function(n){e.setState({searchFieldByName:n.target.value},(function(){return console.log(e.state)}))}}),"\xa0 \xa0 \xa0 \xa0",r.a.createElement(d,{placeholder:"Search by Phone",handleChange:function(n){e.setState({searchFieldByPhone:n.target.value},(function(){return console.log(e.state)}))}}),r.a.createElement(m,{persons:c}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.7cccdd36.chunk.js.map