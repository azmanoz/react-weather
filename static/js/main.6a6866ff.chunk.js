(this.webpackJsonpweather_so_clear=this.webpackJsonpweather_so_clear||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(8),c=a.n(l);a(14),a(15),a(16);var i=function(){return r.a.createElement("header",{className:"bg-dark text-light py-5 text-center"},r.a.createElement("h1",null,"Weather So Clear"))},s=function(){return r.a.createElement("footer",{className:"bg-dark text-light py-5 text-center"},r.a.createElement("p",null,"Systrem Consultancy Services SB Copyright \xa9 2020"))},o=a(6),u=a(2),h=a(3),d=a(5),m=a(4);var p=function(e){return r.a.createElement("div",null,r.a.createElement("h2",null,"8-day Forecast"),r.a.createElement("table",{className:"table table-bordered table-hover table-striped"},r.a.createElement("thead",{className:"bg-info"},r.a.createElement("tr",null,r.a.createElement("th",null,"Weather"),r.a.createElement("th",null,"Date"),r.a.createElement("th",null,"Temperature"))),r.a.createElement("tbody",null,e.searchResult.data.list.map((function(t){return r.a.createElement("tr",{key:t.dt,onClick:function(){return a=t.dt,void e.handleRowClick(a);var a}},r.a.createElement("td",null,t.weather[0].main," ",r.a.createElement("img",{src:"https://openweathermap.org/img/wn/".concat(t.weather[0].icon,"@2x.png"),width:"40",height:"40",alt:""})),r.a.createElement("td",null,function(e){var t=new Date(1e3*e);return(["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][t.getDay()]+" "+["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][t.getMonth()]+" "+t.getDate()+", "+t.getFullYear()).toString()}(t.dt)),r.a.createElement("td",null,(t.temp.day-273.15).toFixed(0)," \xb0 C"))})))))},E=a(1),g=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this)).handleChange=function(e){var t=e.target.name,a=e.target.value;n.setState(Object(E.a)({},t,a))},n.handleSearchClick=function(){n.props.handleSearchClick(n.state.cityName)},n.state={cityName:""},n}return Object(h.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"my-5 card py-5 px-5"},r.a.createElement("h1",null,"Search Weather"),r.a.createElement("div",{className:"mb-3"},r.a.createElement("div",{className:"input-group mb-3"},r.a.createElement("input",{value:this.state.cityName,name:"cityName",onChange:this.handleChange,type:"text",className:"form-control",placeholder:"Search city","aria-label":"Search city","aria-describedby":"basic-addon2"}),r.a.createElement("button",{className:"btn btn-primary",id:"basic-addon2",onClick:this.handleSearchClick},"Search"))))}}]),a}(r.a.Component);var f=function(e){return r.a.createElement("div",{className:"card py-3 px-3 text-center"},r.a.createElement("h1",null,"Weather Detail"),r.a.createElement("p",null,(e.selectedWeather.temp.day-273.15).toFixed(0)," \xb0 C"),r.a.createElement("p",null,new Date(e.selectedWeather.dt).toDateString()),r.a.createElement("p",null,e.selectedWeather.humidity),r.a.createElement("p",null,e.selectedWeather.pressure),r.a.createElement("p",null,new Date(e.selectedWeather.sunset).toTimeString()),r.a.createElement("p",null,new Date(e.selectedWeather.sunrise).toTimeString()))},v=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(u.a)(this,a),(e=t.call(this)).handleRowClick=function(t){console.log("handleRowClick: dt="+t);var a=e.state.searchResult.data.list.filter((function(e){return e.dt===t}))[0];console.log("selectedWeather="+JSON.stringify(a)),e.setState({selectedWeather:a})},e.handleSearchClick=function(t){console.log("handleSearchClick: cityName="+t),fetch("https://api.openweathermap.org/data/2.5/forecast/daily?q=".concat(t,"&cnt=8&appid=9fd7a449d055dba26a982a3220f32aa2")).then((function(e){return e.json()})).then((function(t){var a=Object(o.a)({},e.state.searchResult);a.isLoaded=!0,console.log("result="+JSON.stringify(t)),a.data=t,e.setState({searchResult:a})}),(function(t){console.log(t);var a=Object(o.a)({},e.state.searchResult);a.isLoaded=!0,a.error=t,e.setState({searchResult:a})}))},e.state={searchResult:{error:null,isLoaded:!1,data:null},selectedWeather:null},e}return Object(h.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement(g,{handleSearchClick:this.handleSearchClick}),this.state.searchResult.data?r.a.createElement(p,{searchResult:this.state.searchResult,handleRowClick:this.handleRowClick}):r.a.createElement("div",null),this.state.selectedWeather?r.a.createElement(f,{selectedWeather:this.state.selectedWeather}):r.a.createElement("div",null))}}]),a}(r.a.Component);var b=function(){return r.a.createElement("div",null,r.a.createElement(i,null),r.a.createElement(v,null),r.a.createElement(s,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.6a6866ff.chunk.js.map