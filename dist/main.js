(()=>{"use strict";(()=>{const t=[],e=[];let n=[];class o{constructor(t,n,o,c,a){this.title=t,this.description=n,this.dueDate=o,this.priority=c,this.notes=a,this.project="any",this.any="any",e.push({...this})}}class c{constructor(e){this.name=e,t.push(this)}}function a(t,e){const o=document.querySelector("#root"),c=document.querySelector(".toDoSection");c&&c.remove();const a=document.createElement("section");a.classList.add("toDoSection"),o.appendChild(a),e.forEach((o=>{const c=document.createElement("div");c.classList.add("toDoCard");const i=document.createElement("h2");i.innerText=`${o.title}`,c.appendChild(i);const s=document.createElement("p");s.innerText=`description: ${o.description}`,c.appendChild(s);const d=document.createElement("p");d.innerText=`Due date: ${o.dueDate}`,c.appendChild(d);const l=document.createElement("p");l.innerText=`Priority: ${o.priority}`,c.appendChild(l);const p=document.createElement("p");p.innerText=`notes: ${o.notes}`,c.appendChild(p);const u=document.createElement("form"),m=document.createElement("label");m.setAttribute("for","projects"),m.innerText="choose project: ";const h=document.createElement("select");h.setAttribute("name","projects"),h.setAttribute("id","projects"),h.classList.add("select");const f=document.createElement("option");f.classList.add("option"),f.setAttribute("value","any"),f.innerText="Any",h.appendChild(f),t.forEach((t=>{const e=document.createElement("option");e.classList.add("option"),e.setAttribute("value",`${t.name}`),e.innerText=`${t.name}`,h.appendChild(e)})),u.onchange=function(c){c.preventDefault();const a=c.target.value;o.project=a;const i=e.findIndex((t=>t.title===o.title));e[i]=o,n=e,r(t,n)},u.appendChild(m),u.appendChild(h),c.appendChild(u),a.appendChild(c)}))}function r(e,n){const o=document.querySelector(".projectsContainer");o&&o.remove();const c=document.createElement("div");c.classList.add("projectsContainer");const r=document.createElement("button");if(r.innerText="Any",r.classList.add("projectBtn"),r.setAttribute("any","any"),r.addEventListener("click",(()=>{let e=n.filter((t=>"any"===t.any));a(t,e)})),c.appendChild(r),e.length>0){function i(e){e.preventDefault;let o=e.target.getAttribute("project-name"),c=n.filter((t=>t.project===o));a(t,c)}e.forEach((t=>{const e=document.createElement("button");e.innerText=t.name,e.classList.add("projectBtn"),e.addEventListener("click",i),e.setAttribute("project-name",t.name),c.appendChild(e)}))}document.querySelector("#root").appendChild(c)}new o("watarfo","watarfo","watarfo","watarfo","watarfo"),new o("watarfo2","watarfo2","watarfo2","watarfo2","watarfo2"),new c("proyecto 1"),new c("proyecto 2"),r(t,e),a(t,e)})()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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USxjQUNqQ2lDLEVBQWUvQyxFQUFlQyxHQUM5QmUsRUFBV2hCLEVBQWVDLEVBa0sxQixFQ3ZNSjBELEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IGNvbnN0IGRvbU1hbmlwdWxhdGlvbiA9ICgpID0+IHtcbiAgICAvKiBnbG9iYWwgdmFyaWFibGVzICovXG4gICAgY29uc3QgcHJvamVjdHNBcnJheSA9IFtdO1xuICAgIGNvbnN0IHRvRG9zID0gW107XG4gICAgbGV0IHRvRG9zVXBkYXRlZCA9IFtdO1xuICAgIC8qIGNsYXNzZXMgKi9cbiAgICBjbGFzcyBUb2RvIHtcbiAgICAgICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgbm90ZXMpIHtcbiAgICAgICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZSxcbiAgICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbixcbiAgICAgICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGUsXG4gICAgICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHksXG4gICAgICAgICAgICB0aGlzLm5vdGVzID0gbm90ZXMsXG4gICAgICAgICAgICB0aGlzLnByb2plY3QgPSAnYW55JztcbiAgICAgICAgICAgIHRoaXMuYW55ID0gJ2FueSdcbiAgICAgICAgICAgIHRvRG9zLnB1c2goIHsgLi4udGhpcyB9IClcbiAgICAgICAgfVxuXG4gICAgICAgIFxuICAgIH1cbiAgICBcbiAgICBjbGFzcyBQcm9qZWN0IHtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgICAgICAgIHRoaXMubmFtZSA9IG5hbWVcbiAgICAgICAgICAgIHByb2plY3RzQXJyYXkucHVzaCh0aGlzKTtcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIFxuXG4gICAgfVxuICAgIC8qIHRveSBvYmplY3RzIHRvIHNlZSBpZiBpdCB3b3JrcyAqL1xuICAgIGNvbnN0IHRvZG9yYW5kb20gPSBuZXcgVG9kbyhcIndhdGFyZm9cIiwgXCJ3YXRhcmZvXCIsIFwid2F0YXJmb1wiLCBcIndhdGFyZm9cIiwgXCJ3YXRhcmZvXCIsICk7XG4gICAgY29uc3QgdG9kb3JhbmRvbTIgPSBuZXcgVG9kbyhcIndhdGFyZm8yXCIsIFwid2F0YXJmbzJcIiwgXCJ3YXRhcmZvMlwiLCBcIndhdGFyZm8yXCIsIFwid2F0YXJmbzJcIiwgKTtcbiAgICBcbiAgICBjb25zdCBwcm9qZWN0YXJkbyA9IG5ldyBQcm9qZWN0KCdwcm95ZWN0byAxJyk7XG4gICAgY29uc3QgcHJvamVjdGFyZG8yID0gbmV3IFByb2plY3QoJ3Byb3llY3RvIDInKTtcbiAgICByZW5kZXJQcm9qZWN0cyhwcm9qZWN0c0FycmF5LCB0b0Rvcyk7XG4gICAgcmVuZGVyVG9Ebyhwcm9qZWN0c0FycmF5LCB0b0Rvcyk7XG4gICAgXG4gICBcbiAgICBcbiAgICBcbiAgICAvKiByZW5kZXIgYSB0b2RvIGl0ZW0gKi9cbiAgICBmdW5jdGlvbiByZW5kZXJUb0RvIChwcm9qZWN0cywgdG9Eb3MpIHtcbiAgICBjb25zdCByb290ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jvb3QnKTtcbiAgIFxuICAgICAgICBcbiAgICBjb25zdCB0b0Rvc1ByZXZpb3VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvRG9TZWN0aW9uJyk7XG4gICAgaWYgKHRvRG9zUHJldmlvdXMpIHtcbiAgICAgICAgdG9Eb3NQcmV2aW91cy5yZW1vdmUoKVxuICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgXG4gICAgY29uc3QgdG9Eb1NlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgdG9Eb1NlY3Rpb24uY2xhc3NMaXN0LmFkZCgndG9Eb1NlY3Rpb24nKTtcbiAgICByb290LmFwcGVuZENoaWxkKHRvRG9TZWN0aW9uKVxuICAgIHRvRG9zLmZvckVhY2goKHRvZG8pID0+IHtcbiAgICAgICAgXG4gICAgXG4gICAgICAgIGNvbnN0IHRvZG9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdG9kb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0b0RvQ2FyZCcpXG4gICAgICAgIFxuICAgIFxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICAgIHRpdGxlLmlubmVyVGV4dCA9IGAke3RvZG8udGl0bGV9YFxuICAgICAgICB0b2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICBcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGRlc2NyaXB0aW9uLmlubmVyVGV4dCA9IGBkZXNjcmlwdGlvbjogJHt0b2RvLmRlc2NyaXB0aW9ufWA7XG4gICAgICAgIHRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICAgIFxuICAgICAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBkdWVEYXRlLmlubmVyVGV4dCA9IGBEdWUgZGF0ZTogJHt0b2RvLmR1ZURhdGV9YDtcbiAgICAgICAgdG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZChkdWVEYXRlKTtcbiAgICBcbiAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHByaW9yaXR5LmlubmVyVGV4dCA9IGBQcmlvcml0eTogJHt0b2RvLnByaW9yaXR5fWA7XG4gICAgICAgIHRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xuICAgIFxuICAgICAgICBjb25zdCBub3RlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgbm90ZXMuaW5uZXJUZXh0ID0gYG5vdGVzOiAke3RvZG8ubm90ZXN9YDtcbiAgICAgICAgdG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZChub3Rlcyk7XG4gICAgXG4gICAgICAgIGNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgICAgICBcbiAgICBcbiAgICAgICAgY29uc3Qgc2VsZWN0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBzZWxlY3RMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdwcm9qZWN0cycpO1xuICAgICAgICBzZWxlY3RMYWJlbC5pbm5lclRleHQgPSAnY2hvb3NlIHByb2plY3Q6ICdcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHByb2plY3RTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICAgICAgcHJvamVjdFNlbGVjdC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAncHJvamVjdHMnKTtcbiAgICAgICAgcHJvamVjdFNlbGVjdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2plY3RzJyk7XG4gICAgICAgIHByb2plY3RTZWxlY3QuY2xhc3NMaXN0LmFkZCgnc2VsZWN0JylcbiAgICAgICAgY29uc3QgYW55T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIGFueU9wdGlvbi5jbGFzc0xpc3QuYWRkKCdvcHRpb24nKTtcbiAgICAgICAgYW55T3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnYW55Jyk7XG4gICAgICAgIGFueU9wdGlvbi5pbm5lclRleHQgPSAnQW55JztcbiAgICAgICAgcHJvamVjdFNlbGVjdC5hcHBlbmRDaGlsZChhbnlPcHRpb24pXG4gICAgICAgIHByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgIFxuICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgICAgICBvcHRpb24uY2xhc3NMaXN0LmFkZChgb3B0aW9uYCk7XG4gICAgICAgICAgICBvcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsIGAke3Byb2plY3QubmFtZX1gKTtcbiAgICAgICAgICAgIG9wdGlvbi5pbm5lclRleHQgPSBgJHtwcm9qZWN0Lm5hbWV9YFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHByb2plY3RTZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHByb2plY3RGb3JtLm9uY2hhbmdlID0gaGFuZGxlQ2hhbmdlO1xuICAgICAgICBwcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChzZWxlY3RMYWJlbCk7XG4gICAgICAgIHByb2plY3RGb3JtLmFwcGVuZENoaWxkKHByb2plY3RTZWxlY3QpO1xuICAgICAgICB0b2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RGb3JtKTtcbiAgICAgICAgXG5cbiAgICAgICAgXG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZSAoZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkUHJvamVjdCA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0b2RvLnByb2plY3QgPSBzZWxlY3RlZFByb2plY3Q7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IGluQXJyYXkgPSB0b0Rvcy5maW5kSW5kZXgoKGVsKSA9PiB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsLnRpdGxlID09PSB0b2RvLnRpdGxlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB0b0Rvc1tpbkFycmF5XSA9IHRvZG87XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRvRG9zVXBkYXRlZCA9IHRvRG9zO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICByZW5kZXJQcm9qZWN0cyhwcm9qZWN0cywgdG9Eb3NVcGRhdGVkKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIHRvRG9TZWN0aW9uLmFwcGVuZENoaWxkKHRvZG9Db250YWluZXIpO1xuICAgIH0pXG4gICAgIFxufVxuICAgIC8qIHByb2plY3QgcmVuZGVyaW5nICovXG4gICAgZnVuY3Rpb24gcmVuZGVyUHJvamVjdHMocHJvamVjdHMsIHRvRG9zKSB7XG4gICAgICAgIFxuICAgICAgICAvKiBjaGVjayBpZiBwcm9qZWN0cyBhbHJlYWR5IGV4aXN0cywgYW5kIHJlbW92ZSBpdCovXG4gICAgICAgIGNvbnN0IHByZXZpb3VzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzQ29udGFpbmVyJylcbiAgICAgICAgaWYocHJldmlvdXNDb250YWluZXIpIHtcbiAgICAgICAgICAgIHByZXZpb3VzQ29udGFpbmVyLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICAgIC8qIGlmIGl0IGRvZXNudCBleGlzdCwgY3JlYXRlIGl0ICovXG4gICAgICAgIGNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHByb2plY3RzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RzQ29udGFpbmVyJyk7XG4gICAgICAgIC8qIHJlbmRlciBhbnkgYnV0dG9uICovXG4gICAgICAgIGNvbnN0IGFueUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBhbnlCdG4uaW5uZXJUZXh0ID0gJ0FueSc7XG4gICAgICAgIGFueUJ0bi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0QnRuJyk7XG4gICAgICAgIGFueUJ0bi5zZXRBdHRyaWJ1dGUoJ2FueScsICdhbnknKVxuICAgICAgICBhbnlCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgcHJvamVjdFRvRG9zID0gdG9Eb3MuZmlsdGVyKCAoZWwpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZWwuYW55ID09PSAnYW55J1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmVuZGVyVG9Ebyhwcm9qZWN0c0FycmF5LCBwcm9qZWN0VG9Eb3MpXG4gICAgICAgIH0pXG4gICAgICAgIHByb2plY3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKGFueUJ0bilcbiAgICAgICAgLyogcmVuZGVyIGVhY2ggcHJvamVjdCBhcyBhIGJ1dHRvbiwgaWYgdGhlcmUncyBtb3JlIHRoYW4gMCovXG4gICAgICAgIGlmIChwcm9qZWN0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBwcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgcHJvamVjdEJ0bi5pbm5lclRleHQgPSBwcm9qZWN0Lm5hbWU7XG4gICAgICAgICAgICAgICAgcHJvamVjdEJ0bi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0QnRuJyk7XG4gICAgICAgICAgICAgICAgcHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUNsaWNrKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBwcm9qZWN0QnRuLnNldEF0dHJpYnV0ZSgncHJvamVjdC1uYW1lJywgcHJvamVjdC5uYW1lKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgcHJvamVjdHNDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdEJ0bilcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLyogZXZlbnQgbGlzdGVuZXIsIHJlbmRlcnMgZXZlcnkgZWxlbWVudCB0aGF0IGNvcnJlc3BvbmRzIHdpdGggdGhlIHByb2plY3QgY2xpY2tlZCovXG4gICAgICAgICAgICBmdW5jdGlvbiBoYW5kbGVDbGljayhlKXtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHRcbiAgICAgICAgICAgIGxldCBwcm9qZWN0Q2xpY2tlZCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgncHJvamVjdC1uYW1lJyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGxldCBwcm9qZWN0VG9Eb3MgPSB0b0Rvcy5maWx0ZXIoIChlbCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBlbC5wcm9qZWN0ID09PSBwcm9qZWN0Q2xpY2tlZCBcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICByZW5kZXJUb0RvKHByb2plY3RzQXJyYXksIHByb2plY3RUb0RvcylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIFxuICAgIFxuICAgICAgICBjb25zdCByb290ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jvb3QnKTtcbiAgICAgICAgcm9vdC5hcHBlbmRDaGlsZChwcm9qZWN0c0NvbnRhaW5lcilcbiAgICAgICAgXG4gICAgICAgIFxuICAgIH1cbiAgICB9XG4gICAgXG5cblxuIiwiaW1wb3J0IHsgZG9tTWFuaXB1bGF0aW9uIH0gZnJvbSBcIi4vdG9kb1wiO1xuXG5kb21NYW5pcHVsYXRpb24oKTtcblxuXG5cblxuXG5cblxuXG5cbi8qIG9rXG50ZW5nbyAxIG1vZHVsbyBxdWUgY3JlYSBQUk9ZRUNUT1MgeSBsb3MgZW1wdWphIGEgdW4gQVJSQVkgZGUgcHJveWVjdG9zIChlc3RvIHZveSBhIHVzYXIgcGFyYSBtb3N0cmFybG9zIGVuIGVsIERPTSB5IHF1ZSBlbCB1c3VhcmlvIHB1ZWRhIGVsZWdpcmxvcylcblxuZGViZXLDrWEgYSBzdSB2ZXogcG9uZXIgdG9kb3MgbG9zIHRvZG8gZW4gdW4gYXJyYXkgZGUgdG9Eb3MgcGFyYSBpdGVyYXIgc29icmUgbG9zIG1pc21vcyBzZWfDum4gZWwgcHJveWVjdG8gYWwgcXVlIGhheWFuIHNpZG8gYXNpZ25hZG9zICh5IG1vc3RyYXIgdG9kb3MgcG9yIGRlZmF1bHQpXG5cbmxvcyB0b2RvIGRlYmVyw61hbiB0ZW5lciB1biBvbmNsaWNrIG8gbG8gcXVlIHNlYSBwYXJhIHBvZGVyIHNlciBhc2lnbmFkb3MgYSB1biBwcm95ZWN0b1xuXG5jb3NhcyBxIGRlYmVyw61hIHRlbmVyOiBcbnZpZXcgYWxsIHByb2plY3RzXG52aWV3IGFsbCB0b2RvcyBpbiBlYWNoIHByb2plY3QgKHByb2JhYmx5IGp1c3QgdGhlIHRpdGxlIGFuZCBkdWVkYXRl4oCmIHBlcmhhcHMgY2hhbmdpbmcgY29sb3IgZm9yIGRpZmZlcmVudCBwcmlvcml0aWVzKVxuZXhwYW5kIGEgc2luZ2xlIHRvZG8gdG8gc2VlL2VkaXQgaXRzIGRldGFpbHNcbmRlbGV0ZSBhIHRvZG9cblxuXG4qLyJdLCJuYW1lcyI6WyJwcm9qZWN0c0FycmF5IiwidG9Eb3MiLCJ0b0Rvc1VwZGF0ZWQiLCJUb2RvIiwiY29uc3RydWN0b3IiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiZHVlRGF0ZSIsInByaW9yaXR5Iiwibm90ZXMiLCJ0aGlzIiwicHJvamVjdCIsImFueSIsInB1c2giLCJQcm9qZWN0IiwibmFtZSIsInJlbmRlclRvRG8iLCJwcm9qZWN0cyIsInJvb3QiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ0b0Rvc1ByZXZpb3VzIiwicmVtb3ZlIiwidG9Eb1NlY3Rpb24iLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiYXBwZW5kQ2hpbGQiLCJmb3JFYWNoIiwidG9kbyIsInRvZG9Db250YWluZXIiLCJpbm5lclRleHQiLCJwcm9qZWN0Rm9ybSIsInNlbGVjdExhYmVsIiwic2V0QXR0cmlidXRlIiwicHJvamVjdFNlbGVjdCIsImFueU9wdGlvbiIsIm9wdGlvbiIsIm9uY2hhbmdlIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic2VsZWN0ZWRQcm9qZWN0IiwidGFyZ2V0IiwidmFsdWUiLCJpbkFycmF5IiwiZmluZEluZGV4IiwiZWwiLCJyZW5kZXJQcm9qZWN0cyIsInByZXZpb3VzQ29udGFpbmVyIiwicHJvamVjdHNDb250YWluZXIiLCJhbnlCdG4iLCJhZGRFdmVudExpc3RlbmVyIiwicHJvamVjdFRvRG9zIiwiZmlsdGVyIiwibGVuZ3RoIiwiaGFuZGxlQ2xpY2siLCJwcm9qZWN0Q2xpY2tlZCIsImdldEF0dHJpYnV0ZSIsInByb2plY3RCdG4iLCJkb21NYW5pcHVsYXRpb24iXSwic291cmNlUm9vdCI6IiJ9