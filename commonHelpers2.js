import{i as a}from"./assets/alert-icon-f336156b.js";/* empty css                      */import{i as r}from"./assets/vendor-77e16229.js";const c="/goit-js-hw-10/assets/resolve-icon-8330b1b8.svg",t=document.querySelector(".form");t.addEventListener("submit",n);function n(o){o.preventDefault();const s=o.target.delay.value,i=o.target.state.value;new Promise((e,l)=>{setTimeout(()=>{i==="fulfilled"?e(s):l(s)},s)}).then(e=>{r.success({message:`Fulfilled promise in ${e}ms`,messageSize:"16",messageColor:"#fff",backgroundColor:"#59a10d",position:"topRight",close:!0,closeOnEscape:!0,closeOnClick:!0,progressBar:!0,progressBarColor:"#326101",iconColor:"#fff",iconUrl:c})}).catch(e=>{r.error({message:`Rejected promise in ${e}ms`,messageSize:"16",messageColor:"#fff",backgroundColor:"#ef4040",position:"topRight",close:!0,closeOnEscape:!0,closeOnClick:!0,progressBar:!0,progressBarColor:"#ffbebe",iconUrl:a,iconColor:"#fff"})}),t.reset()}
//# sourceMappingURL=commonHelpers2.js.map