(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))d(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const u of n.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&d(u)}).observe(document,{childList:!0,subtree:!0});function c(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function d(o){if(o.ep)return;o.ep=!0;const n=c(o);fetch(o.href,n)}})();const C=`<section class="todoapp">\r
    <header class="header">\r
        <h1>Tareas</h1>\r
        <input id="new-todo-input" class="new-todo" placeholder="¿Qué necesita ser hecho?" autofocus>\r
    </header>\r
    \r
    <!-- This section should be hidden by default and shown when there are todos -->\r
    <section class="main">\r
        <input id="toggle-all" class="toggle-all" type="checkbox">\r
        <label for="toggle-all">Mark all as complete</label>\r
        <ul class="todo-list">\r
            <!-- These are here just to show the structure of the list items -->\r
            <!-- List items should get the class "editing" when editing and "completed" when marked as completed -->\r
            <!-- <li class="completed" data-id="abc">\r
                <div class="view">\r
                    <input class="toggle" type="checkbox" checked>\r
                    <label>Probar JavaScript</label>\r
                    <button class="destroy"></button>\r
                </div>\r
                <input class="edit" value="Create a TodoMVC template">\r
            </li> -->\r
            <!-- <li>\r
                <div class="view">\r
                    <input class="toggle" type="checkbox">\r
                    <label>Comprar un unicornio</label>\r
                    <button class="destroy"></button>\r
                </div>\r
                <input class="edit" value="Rule the web">\r
            </li> -->\r
        </ul>\r
    </section>\r
\r
    <!-- This footer should hidden by default and shown when there are todos -->\r
    <footer class="footer">\r
        <!-- This should be "0 items left" by default -->\r
        <span class="todo-count"><strong id="pending-count">0</strong> pendiente(s)</span>\r
        <!-- Remove this if you don't implement routing -->\r
        <ul class="filters">\r
            <li>\r
                <a class="filtro" class="selected" href="#/">Todos</a>\r
            </li>\r
            <li>\r
                <a class="filtro" href="#/active">Pendientes</a>\r
            </li>\r
            <li>\r
                <a class="filtro" href="#/completed">Completados</a>\r
            </li>\r
        </ul>\r
        <!-- Hidden if no completed items are left ↓ -->\r
        <button class="clear-completed">Borrar completados</button>\r
    </footer>\r
</section>\r
\r
\r
<footer class="info">\r
    <p>Template creado por <a href="http://sindresorhus.com">Sindre Sorhus</a></p>\r
    <!-- Change this out with your name and url ↓ -->\r
    <p>Creado por <a href="http://todomvc.com">ti</a></p>\r
    <p>Parte de <a href="http://todomvc.com">TodoMVC</a></p>\r
</footer>`,r=[];for(let e=0;e<256;++e)r.push((e+256).toString(16).slice(1));function L(e,t=0){return(r[e[t+0]]+r[e[t+1]]+r[e[t+2]]+r[e[t+3]]+"-"+r[e[t+4]]+r[e[t+5]]+"-"+r[e[t+6]]+r[e[t+7]]+"-"+r[e[t+8]]+r[e[t+9]]+"-"+r[e[t+10]]+r[e[t+11]]+r[e[t+12]]+r[e[t+13]]+r[e[t+14]]+r[e[t+15]]).toLowerCase()}let w;const S=new Uint8Array(16);function E(){if(!w){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");w=crypto.getRandomValues.bind(crypto)}return w(S)}const P=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),T={randomUUID:P};function A(e,t,c){if(T.randomUUID&&!e)return T.randomUUID();e=e||{};const d=e.random??e.rng?.()??E();if(d.length<16)throw new Error("Random bytes length must be >= 16");return d[6]=d[6]&15|64,d[8]=d[8]&63|128,L(d)}class g{constructor(t){this.id=A(),this.description=t,this.done=!1,this.crestedAt=new Date}}const a={All:"all",Completed:"Completed",Pending:"Pending"},l={todos:[new g("Pedra del alma"),new g("Piedra del infinito"),new g("Piedra del tiempo"),new g("Piedra del poder"),new g("Piedra de la realidad")],filter:a.All},I=()=>{v(),console.log("InitStore")},v=()=>{if(!localStorage.getItem("state"))return;const{todos:e=[],filter:t=a.All}=JSON.parse(localStorage.getItem("state"));l.todos=e,l.filter=t},y=()=>{localStorage.setItem("state",JSON.stringify(l))},k=(e=a.All)=>{switch(e){case a.All:return[...l.todos];case a.Completed:return l.todos.filter(t=>t.done);case a.Pending:return l.todos.filter(t=>!t.done);default:throw new Error(`Option ${e} in not valid`)}},U=e=>{if(!e)throw new Error("Description is required");l.todos.push(new g(e)),y()},x=e=>{l.todos=l.todos.map(t=>(t.id===e&&(t.done=!t.done),t)),y()},D=e=>{l.todos=l.todos.filter(t=>t.id!==e),y()},O=()=>{l.todos=l.todos.filter(e=>!e.done),y()},q=(e=a.All)=>{l.filter=e,y()},F=()=>l.filter,i={addTodo:U,deleteCompleted:O,deleteTodo:D,getCurrentFilter:F,getTodos:k,initStore:I,loadStore:v,setFilter:q,toggleTodo:x},M=e=>{if(!e)throw new Error("A TODO object is required");const{done:t,description:c,id:d}=e,o=`
                <div class="view">
                    <input class="toggle" type="checkbox" ${t?"checked":""} >
                    <label>${c}</label>
                    <button class="destroy"></button>
                </div>
                <input class="edit" value="Create a TodoMVC template">`,n=document.createElement("li");return n.innerHTML=o,n.setAttribute("data-id",d),e.done&&n.classList.add("completed"),n};let f;const N=e=>{if(f||(f=document.querySelector(e)),!f)throw new Error(`Element ${f} not fount`);f.innerHTML=i.getTodos(a.Pending).length};let m;const H=(e,t=[])=>{if(m||(m=document.querySelector(e)),!m)throw new Error(`Element ${m} not found`);m.innerHTML="",t.forEach(c=>{m.append(M(c))})},h={ClearCompletedButton:".clear-completed",TodoList:".todo-list",NewTodoInput:"#new-todo-input",TodoFilters:".filtro",PendingCountLabel:"#pending-count"},R=e=>{const t=()=>{const s=i.getTodos(i.getCurrentFilter());H(h.TodoList,s),c()},c=()=>{N(h.PendingCountLabel)};(()=>{const s=document.createElement("div");s.innerHTML=C,document.querySelector(e).append(s),t()})();const d=document.querySelector(h.NewTodoInput),o=document.querySelector(h.TodoList),n=document.querySelector(h.ClearCompletedButton),u=document.querySelectorAll(h.TodoFilters);d.addEventListener("keyup",s=>{s.keyCode===13&&s.target.value.trim().length!==0&&(i.addTodo(s.target.value),t(),s.target.value="")}),o.addEventListener("click",s=>{const p=s.target.closest("[data-id]");i.toggleTodo(p.getAttribute("data-id")),t()}),o.addEventListener("click",s=>{const p=s.target.className==="destroy",b=s.target.closest("[data-id]");!b||!p||(i.deleteTodo(b.getAttribute("data-id")),t())}),n.addEventListener("click",()=>{i.deleteCompleted(),t()}),u.forEach(s=>{s.addEventListener("click",p=>{switch(u.forEach(b=>b.classList.remove("selected")),p.target.classList.add("selected"),p.target.text){case"Todos":i.setFilter(a.All);break;case"Pendientes":i.setFilter(a.Pending);break;case"Completados":i.setFilter(a.Completed);break}t()})})};i.initStore();R("#app");
