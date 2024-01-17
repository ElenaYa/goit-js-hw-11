import{S as u,i as f}from"./assets/vendor-46aac873.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const i of e.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function a(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerpolicy&&(e.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?e.credentials="include":t.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function o(t){if(t.ep)return;t.ep=!0;const e=a(t);fetch(t.href,e)}})();const m=document.querySelector(".form"),n=document.querySelector(".gallery"),c=document.querySelector(".loader"),l={key:"41869346-1dc68e1b0e88fdca1b815defb",q:"black",image_type:"photo",orientation:"horizontal",safesearch:!0},p=new u(".gallery a",{captionsData:"alt",captionDelay:250});async function d(r){try{try{const s=await fetch(`https://pixabay.com/api/?${r}`);if(!s.ok)throw new Error(s.statusText);const{hits:a}=await s.json();if(a.length>0){const o=a.reduce((t,e)=>t+`<li class="gallery-item">
        <a href=${e.largeImageURL}> 
          <img class="gallery-link" src =${e.webformatURL} alt=${e.tags} width='360' height='200'/>
        </a>
        <ul class='gallery-statistic'>
                  <li><p class='statistic'>💗 Likes<span>${e.likes}</span></p></li>
                  <li><p class='statistic'>👁️ Views<span>${e.views}</span></p></li>
                  <li><p class='statistic'>💬 Comments<span>${e.comments}</span></p></li>
                  <li><p class='statistic'>💌 Downloads<span>${e.downloads}</span></p></li>
              </ul>
      </li>`,"");n.innerHTML=o,p.refresh()}else f.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#ef4040",messageSize:"16px",messageColor:"#fafafb"})}catch(s){console.log(s.message)}}finally{c.style.display="none"}}m.addEventListener("submit",r=>{r.preventDefault(),n.innerHTML="",c.style.display="block",l.q=r.target.elements.search.value.trim();const s=new URLSearchParams(l);d(s),r.currentTarget.reset()});
//# sourceMappingURL=commonHelpers.js.map
