!function(){function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},a=n.parcelRequired7c6;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},n.parcelRequired7c6=a),a.register("iE7OH",(function(t,n){var r,o;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return o}),(function(e){return o=e}));var a={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)a[t[n]]=e[t[n]]},o=function(e){var t=a[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),a.register("aNJCr",(function(t,n){var r;e(t.exports,"getBundleURL",(function(){return r}),(function(e){return r=e}));var o={};function a(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(e){var t=o[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return a(e[2])}return"/"}(),o[e]=t),t}})),a("iE7OH").register(JSON.parse('{"EVgbq":"index.c43f0d9e.js","baJOB":"question-mark.34d36c19.jpeg","5UbS1":"index.b28ecfd1.css","8izZZ":"index.92404e9c.js"}'));var c=a("bpxeT"),s=a("2TvXO"),i=a("3nKWv"),l=(c=a("bpxeT"),a("hKHmD")),u={};Object.defineProperty(u,"__esModule",{value:!0}),u.default=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){d.default(e,t,n[t])}))}return e};var p,d=(p=a("hKHmD"))&&p.__esModule?p:{default:p};s=a("2TvXO");var f=a("diaKp"),v=a("jcFG7"),h=(i=a("3nKWv"),document.querySelector(".gallery-list")),m=new(0,i.default);function g(){return(g=t(c)(t(s).mark((function e(){var n,r;return t(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=(0,f.getSpinner)(),e.prev=1,h.append(n),e.next=5,m.fetchPopularFilms();case 5:r=e.sent,(0,v.createPagination)({totalItems:r.total_results>1e4?1e4:r.total_results,page:r.page}).on("afterMove",(function(e){m.page=e.page,m.fetchPopularFilms().then((function(e){b(e.results),window.scrollTo({top:0,behavior:"smooth"})}))})),b(r.results),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0.message);case 14:return e.prev=14,n.remove(),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[1,11,14,17]])})))).apply(this,arguments)}function b(e){return w.apply(this,arguments)}!function(){g.apply(this,arguments)}();var y;function w(){return(w=t(c)(t(s).mark((function e(n){var r,o,a;return t(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.fetchGeneres();case 3:r=e.sent.genres,o=k(r),a=n.map((function(e){return"<li class='list-item'>\n      <img class='poster' src=\"".concat(null===e.poster_path?new URL(y):"https://image.tmdb.org/t/p/w500".concat(e.poster_path),'"\n  alt="').concat(e.title,'" name="').concat(e.id,"\"\n  /><h2 class='title'>").concat(e.title,"</h2>\n  <p class='info'>").concat(_(e.genre_ids,o)||"Unknown"," &#124 ").concat(e.release_date.slice(0,4)||"Unknown","</p></li>")})).join(""),h.innerHTML=a,e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function _(e,t){return e.map((function(e){return t[e]||"Unknown"})).join(", ")}function k(e){return e.reduce((function(e,n){var r=n.name,o=n.id;return t(u)({},e,t(l)({},o,r))}),{})}y=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("baJOB");v=a("jcFG7"),f=a("diaKp");var x=new(0,i.default),E=document.querySelector(".search-form"),L=document.querySelector(".empty"),O=document.querySelector(".not-found");function S(){return(S=t(c)(t(s).mark((function e(n){var r,o;return t(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=(0,f.getSpinner)(),n.preventDefault(),L.style.display="none",O.style.display="none",x.searchQuery=n.currentTarget.input.value.trim().toLowerCase(),""!==x.searchQuery){e.next=9;break}return O.style.display="none",L.style.display="block",e.abrupt("return");case 9:return e.prev=9,E.append(r),e.next=13,x.searchMovies();case 13:if(0!==(o=e.sent).results.length){e.next=18;break}return L.style.display="none",O.style.display="block",e.abrupt("return");case 18:(0,v.createPagination)({totalItems:o.total_results,page:o.page,totalPages:o.total_pages}).on("afterMove",(function(e){x.page=e.page,x.searchMovies().then((function(e){O.style.display="none",L.style.display="none",b(e.results),window.scrollTo({top:0,behavior:"smooth"})}))})),b(o.results),e.next=26;break;case 23:e.prev=23,e.t0=e.catch(9),console.log(e.t0.message);case 26:return e.prev=26,r.remove(),e.finish(26);case 29:case"end":return e.stop()}}),e,null,[[9,23,26,29]])})))).apply(this,arguments)}E.addEventListener("submit",(function(e){return S.apply(this,arguments)})),a("7hKzD");c=a("bpxeT"),s=a("2TvXO"),i=a("3nKWv"),f=a("diaKp");var U=a("7OwLK"),j=new(0,i.default),q=document.querySelector(".gallery-list"),H=document.querySelector(".backdrop"),T=document.querySelector(".modal__contents"),K=document.querySelector(".modal__btn-close");function M(){return(M=t(c)(t(s).mark((function e(n){var r,o,a;return t(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("IMG"===n.target.nodeName){e.next=2;break}return e.abrupt("return");case 2:return r=(0,f.getSpinner)(),o=n.target.name,e.prev=4,H.append(r),e.next=8,j.fetchFilmInfo(o);case 8:return a=e.sent,H.classList.toggle("is-hidden"),e.prev=10,e.next=13,C(a);case 13:(0,U.onModalBtnClick)(a),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(10),console.log(e.t0.message);case 19:e.next=24;break;case 21:e.prev=21,e.t1=e.catch(4),console.log(e.t1.message);case 24:return e.prev=24,r.remove(),e.finish(24);case 27:document.addEventListener("keydown",P),K.addEventListener("click",R),document.addEventListener("click",F);case 30:case"end":return e.stop()}}),e,null,[[4,21,24,27],[10,16]])})))).apply(this,arguments)}function F(e){e.target===H&&(H.classList.toggle("is-hidden"),document.removeEventListener("click",F),document.removeEventListener("keydown",P))}function P(e){"Escape"===e.code&&(H.classList.toggle("is-hidden"),document.removeEventListener("keydown",P))}function R(e){H.classList.toggle("is-hidden")}function C(e){return D.apply(this,arguments)}function D(){return(D=t(c)(t(s).mark((function e(n){var r,o;return t(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.fetchGeneres();case 3:r=e.sent.genres,k(r),o='<img src="'.concat(null===n.poster_path?new URL(y):"https://image.tmdb.org/t/p/w500".concat(n.poster_path),'" alt="photo" class="modal__poster" />\n        <div>\n          <h2 class="modal__title">').concat(n.title.toUpperCase()||"Unknown",'</h2>\n          <table class="modal__info">\n            <tr>\n              <th>Vote/Votes</th>\n              <td>\n                <span class="modal__info--accent">').concat(n.vote_average||"Unknown",'</span> /\n                <span class="modal__info--noaccent">').concat(n.vote_count||"Unknown","</span>\n              </td>\n            </tr>\n            <tr>\n              <th>Popularity</th>\n              <td>").concat(n.popularity||"Unknown","</td>\n            </tr>\n            <tr>\n              <th>Original Title</th>\n              <td>").concat(n.original_title||"Unknown","</td>\n            </tr>\n            <tr>\n              <th>Genre</th>\n              <td>").concat(n.genres.map((function(e){return e.name})).join(", ")||"Unknown",'</td>\n            </tr>\n          </table>\n          <h3 class="modal__about--title">About</h3>\n          <p class="modal__about">\n            ').concat(n.overview||"Unknown",'\n          </p>\n              <div class="modal__btn">\n      <button type="button" class="modal__btn-watched">add to Watched</button>\n      <button type="button" class="modal__btn-queue">add to queue</button>\n    </div>\n\n        </div>'),T.innerHTML=o,e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}q.addEventListener("click",(function(e){return M.apply(this,arguments)})),K.removeEventListener("click",R),document.removeEventListener("keydown",P),document.removeEventListener("click",F),a("jcFG7"),a("7OwLK"),a("diaKp")}();
//# sourceMappingURL=index.c43f0d9e.js.map
