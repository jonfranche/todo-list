!function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);const o=(t,e)=>({title:t,description:e,todos:[]}),i=[o("General","Your list of todos"),o("Test 2","Test List 2")],d=(t,e,n)=>{const o=(t,e)=>{for(let n in e)t.appendChild(e[n])};let d=i[e].todos.indexOf(i[e].todos[n]);const l=document.createElement("div"),r=document.createElement("input"),s=document.createElement("div"),u=document.createElement("div"),a=document.createElement("span"),m=document.createElement("i"),p={fullTitle:document.createElement("span"),description:document.createElement("p"),buttons:document.createElement("div")},b=document.createElement("span"),E=document.createElement("span");t.setAttribute("class","todo"),t.appendChild(l),l.setAttribute("class","todoDiv2"),l.appendChild(r),l.appendChild(s),s.setAttribute("class","todoDiv3"),s.appendChild(a),s.appendChild(m),i[e].todos[n].title.length>40?a.textContent=`${i[e].todos[n].title.slice(0,40)}...`:a.textContent=i[e].todos[n].title,r.setAttribute("type","checkbox"),m.setAttribute("class","right");const C={edit:document.createElement("button"),delete:document.createElement("button")};p.fullTitle.setAttribute("class","fullTitle"),p.fullTitle.textContent=i[e].todos[n].title,p.description.setAttribute("class","todoDesc"),p.description.textContent=i[e].todos[n].description,p.buttons.setAttribute("class","todoButtons"),C.edit.textContent="Edit",C.edit.setAttribute("class","edit"),C.delete.textContent="Delete Todo",C.delete.setAttribute("class","delete");let f=document.createElement("div");switch(f.setAttribute("class","hidden"),f.setAttribute("id",`todo${d}`),t.appendChild(u),t.appendChild(f),o(f,p),o(p.buttons,C),u.setAttribute("class","todoInfo"),u.appendChild(b),u.appendChild(E),i[e].todos[n].priority){case"None":E.setAttribute("style","color: #999");break;case"Medium":E.setAttribute("style","color: #ff8f33");break;case"High":E.setAttribute("style","color: #f72424")}b.textContent=`Due: ${i[e].todos[n].dueDate}`,E.textContent=`Priority: ${i[e].todos[n].priority}`,s.addEventListener("click",(function(){let t=document.getElementById(`todo${d}`);"none"===window.getComputedStyle(t).display?(t.removeAttribute("class","hidden"),m.removeAttribute("class","right"),m.setAttribute("class","down")):(t.setAttribute("class","hidden"),m.removeAttribute("class","down"),m.setAttribute("class","right"))})),C.delete.addEventListener("click",(function(){c().deleteTodo(e,n),c().clearDiv(document.querySelector(".todoList")),c().renderTodos(e),c().renderList()}));C.edit.addEventListener("click",()=>{let t=document.querySelector(`#todo${d}`);((t,e,n)=>{const o=document.createElement("div");o.setAttribute("class","editDiv"),t.appendChild(o);const d={title:document.createElement("span"),titleInput:document.createElement("input"),desc:document.createElement("span"),descInput:document.createElement("textarea"),date:document.createElement("span"),dateInput:document.createElement("input"),prio:document.createElement("span"),prioInput:document.createElement("select"),buttons:document.createElement("div")};d.title.textContent="Title: ",d.desc.textContent="Description (optional): ",d.date.textContent="Due Date (optional): ",d.prio.textContent="Priority (optional): ",d.titleInput.setAttribute("type","text"),d.dateInput.setAttribute("type","date"),d.buttons.style.display="flex",d.buttons.style.flexDirection="row",d.titleInput.value=i[e].todos[n].title,d.descInput.value=i[e].todos[n].description,d.dateInput.value=i[e].todos[n].dueDate,d.prioInput.value=i[e].todos[n].priority;for(let t in d)o.appendChild(d[t]);const l={None:document.createElement("option"),Low:document.createElement("option"),Medium:document.createElement("option"),High:document.createElement("option")};for(let t in l)d.prioInput.appendChild(l[t]),l[t].textContent=`${t}`,l[t].setAttribute("value",`${t}`);const r={submit:document.createElement("button"),cancel:document.createElement("button")};for(let t in r)d.buttons.appendChild(r[t]),r[t].textContent=`${t}`;r.cancel.addEventListener("click",(function(){t.removeChild(t.lastChild),t.querySelector(".edit").style.display="initial"})),r.submit.addEventListener("click",(function(){if(""===d.title.value)alert("A title is required");else{let o=d.titleInput.value,i=d.descInput.value,l=d.dateInput.value,r=d.prioInput.value;c().editTodo(e,n,o,i,l,r),t.removeChild(t.lastChild),t.querySelector(".edit").style.display="initial",c().clearDiv(document.querySelector(".todoList")),c().renderTodos(e)}}))})(t,e,n),t.querySelector(".edit").style.display="none"},!1)},l=t=>{const e=document.querySelector(".mainContent");c().clearDiv(e);const n={title:document.createElement("h2"),delete:document.createElement("button"),description:document.createElement("p"),todoList:document.createElement("div"),addTodo:document.createElement("button")};n.title.textContent=i[t].title,n.delete.textContent="Delete List",n.description.textContent=i[t].description,n.addTodo.textContent="Add a New Todo";for(let t in n)e.appendChild(n[t]),n[t].setAttribute("class",`${t}`);c().renderTodos(t),n.delete.addEventListener("click",(function(){window.confirm('To confirm deleting this List, Press "OK"')&&(c().deleteProject(i.indexOf(i[t])),c().clearDiv(e),c().renderList())})),n.addTodo.addEventListener("click",(function(){e.removeChild(e.lastChild),((t,e)=>{let n=i.indexOf(i[e]),o=document.createElement("div");o.setAttribute("class","todoForm"),t.appendChild(o);const d={h4:document.createElement("h4"),title:document.createElement("span"),titleInput:document.createElement("input"),desc:document.createElement("span"),descInput:document.createElement("textarea"),dueDate:document.createElement("span"),dateInput:document.createElement("input"),prio:document.createElement("span"),prioInput:document.createElement("select"),submit:document.createElement("button"),cancel:document.createElement("button")};d.h4.textContent="Add a New Todo:",d.title.textContent="Title:",d.desc.textContent="Description (optional):",d.dueDate.textContent="Due Date (optional):",d.prio.textContent="Priority:",d.submit.textContent="Submit",d.cancel.textContent="Cancel",d.dateInput.setAttribute("type","date");for(let t in d)o.appendChild(d[t]);const r={None:document.createElement("option"),Low:document.createElement("option"),Medium:document.createElement("option"),High:document.createElement("option")};for(let t in r)d.prioInput.appendChild(r[t]),r[t].textContent=`${t}`,r[t].setAttribute("value",`${t}`);d.submit.addEventListener("click",(function(){d.titleInput.value.length>100?alert("The title is too long. It must be 100 characters or less"):""===d.titleInput.value?alert("The title cannot be empty"):(c().addTodo(i[n],d.titleInput.value,d.descInput.value,d.dateInput.value,d.prioInput.value),l(n),c().renderList())})),d.cancel.addEventListener("click",(function(){l(n)}))})(e,t)}))},c=()=>{const t=t=>{for(;t.firstChild;)t.removeChild(t.firstChild)};return{addTodo:(t,e,n,o,i)=>{let d=((t,e,n,o=1)=>({title:t,description:e,dueDate:n,priority:o}))(e,n,o,i);t.todos.push(d)},addProject:(t,e)=>{let n=o(t,e);i.push(n)},deleteTodo:(t,e)=>{i[t].todos.splice(i[t].todos.indexOf(i[t].todos[e]),1)},deleteProject:t=>{i.splice(i.indexOf(i[t]),1)},editTodo:(t,e,n,o,d,l)=>{i[t].todos[e].title=n,i[t].todos[e].description=o,i[t].todos[e].dueDate=d,i[t].todos[e].priority=l},clearDiv:t,renderTodos:t=>{for(let e in i[t].todos){let n=document.createElement("div");document.querySelector(".todoList").appendChild(n),d(n,t,e)}},renderList:()=>{t(document.querySelector(".projectList"));for(let t in i){let e=document.createElement("div");e.setAttribute("class","list"),e.setAttribute("id",`list${i.indexOf(i[t])}`),document.querySelector(".projectList").appendChild(e);const n={title:document.createElement("span"),todosCount:document.createElement("span")};for(let t in n)e.appendChild(n[t]);i[t].title.length>20?n.title.textContent=`${i[t].title.slice(0,16)}...`:n.title.textContent=`${i[t].title}`,n.todosCount.textContent=`${i[t].todos.length}`,n.title.addEventListener("click",(function(){l(i.indexOf(i[t]))}))}}}},r=()=>{const t=document.querySelector(".sidebar"),e={sideTitle:document.createElement("h2"),projectList:document.createElement("div"),addProject:document.createElement("button")};e.sideTitle.textContent="Your Lists",e.addProject.textContent="Add a New List";for(let n in e)e[n].setAttribute("class",`${n}`),t.appendChild(e[n]);c().renderList(),e.addProject.addEventListener("click",(function(){c().clearDiv(document.querySelector(".mainContent")),(()=>{const t=document.querySelector(".mainContent"),e={h2:document.createElement("h2"),title:document.createElement("h3"),titleInput:document.createElement("input"),desc:document.createElement("h3"),descInput:document.createElement("textarea"),submit:document.createElement("button"),cancel:document.createElement("button")};e.h2.textContent="Add a New List",e.title.textContent="List Title: ",e.desc.textContent="List Description (Optional): ",e.submit.textContent="Submit",e.cancel.textContent="Cancel",e.titleInput.setAttribute("type","text");return e.cancel.addEventListener("click",(function(){c().clearDiv(t)})),e.submit.addEventListener("click",(function(){let n=e.titleInput.value;if(""===n)return alert("Please add a title, or press cancel"),0;let o=e.descInput.value;c().addProject(n,o),c().clearDiv(document.querySelector(".projectList")),c().renderList(),c().clearDiv(t)})),{appendForm:()=>{for(let n in e)e[n].setAttribute("class",`${n}`),t.appendChild(e[n])}}})().appendForm()}))};c(),(()=>{const t=document.querySelector("body"),e={header:document.createElement("header"),main:document.createElement("div")};e.main.setAttribute("class","main");for(let n in e)t.appendChild(e[n]);const n=document.createElement("h1");n.textContent="Todo List",e.header.appendChild(n);const o=document.querySelector(".main"),i={sidebar:document.createElement("div"),mainContent:document.createElement("div")};for(let t in i)i[t].setAttribute("class",`${t}`),o.appendChild(i[t]);r()})(),c().addTodo(i[0],"Test todo 1","This is a test todo","January 15, 2020","High"),c().addTodo(i[0],"Test todo 2","This is a test todo","January 16, 2020","Medium"),c().renderList()}]);