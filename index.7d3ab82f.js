function e(e){return e&&e.__esModule?e.default:e}var t,r,l,a,n,s={};t=s,r="validate",l=()=>n,a=e=>n=e,Object.defineProperty(t,r,{get:l,set:a,enumerable:!0,configurable:!0});var i=/^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;n=function(e){if(!e)return!1;if(e.length>254)return!1;if(!i.test(e))return!1;var t=e.split("@");return!(t[0].length>64)&&!t[1].split(".").some((function(e){return e.length>63}))};const o=document.querySelector(".first-name"),d=document.querySelector(".last-name"),c=document.querySelector(".email"),m=document.querySelector(".password"),u=document.querySelector(".signup__form"),f=document.querySelector(".field-box--first-name"),v=document.querySelector(".field-box--last-name"),h=document.querySelector(".field-box--email"),p=document.querySelector(".field-box--password"),L={firstName:{value:"",error:"First name cannot be empty",type:"text"},lastName:{value:"",error:"Last name cannot be empty",type:"text"},email:{value:"",error:"Looks like this is not an email",type:"email"},password:{value:"",error:"Password cannot be empty",type:"password"}};o.addEventListener("change",(e=>L.firstName.value=e.target.value)),d.addEventListener("change",(e=>L.lastName.value=e.target.value)),c.addEventListener("change",(e=>L.email.value=e.target.value)),m.addEventListener("change",(e=>L.password.value=e.target.value)),u.addEventListener("submit",(e=>{e.preventDefault(),y(f,L,"firstName"),y(v,L,"lastName"),y(p,L,"password"),y(h,L,"email")}));const y=(t,r,l)=>{if("email"===r[l].type)if(e(s).validate(r[l].value)){t.lastElementChild.innerHTML="",t.firstElementChild.classList.remove("error-field");const[e,r]=t.firstElementChild.children;r.classList.remove("error-icon"),e.classList.remove("error-input")}else{t.lastElementChild.innerHTML=r[l].error,t.firstElementChild.classList.add("error-field");const[e,a]=t.firstElementChild.children;a.classList.add("error-icon"),e.classList.add("error-input")}else if(""===r[l].value){t.lastElementChild.innerHTML=r[l].error,t.firstElementChild.classList.add("error-field");const[,e]=t.firstElementChild.children;e.classList.add("error-icon")}else{t.lastElementChild.innerHTML="",t.firstElementChild.classList.remove("error-field");const[,e]=t.firstElementChild.children;e.classList.remove("error-icon")}};
//# sourceMappingURL=index.7d3ab82f.js.map