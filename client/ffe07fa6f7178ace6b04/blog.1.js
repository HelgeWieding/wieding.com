(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{6:function(t,e,c){"use strict";c.r(e),c.d(e,"preload",(function(){return n}));var s=c(0);function l(t,e,c){const s=t.slice();return s[1]=e[c],s}function j(t){let e,c,l,j,r=t[1].metadata.title+"";return{c(){e=Object(s.s)("li"),c=Object(s.s)("a"),l=Object(s.O)(r),this.h()},l(t){e=Object(s.j)(t,"LI",{});var j=Object(s.h)(e);c=Object(s.j)(j,"A",{rel:!0,href:!0,class:!0});var n=Object(s.h)(c);l=Object(s.l)(n,r),n.forEach(s.r),j.forEach(s.r),this.h()},h(){Object(s.f)(c,"rel","prefetch"),Object(s.f)(c,"href",j="blog/"+t[1].slug),Object(s.f)(c,"class","svelte-fjc1is")},m(t,j){Object(s.B)(t,e,j),Object(s.d)(e,c),Object(s.d)(c,l)},p(t,e){1&e&&r!==(r=t[1].metadata.title+"")&&Object(s.K)(l,r),1&e&&j!==(j="blog/"+t[1].slug)&&Object(s.f)(c,"href",j)},d(t){t&&Object(s.r)(e)}}}function r(t){let e,c,r,n,b,o=t[0],O=[];for(let e=0;e<o.length;e+=1)O[e]=j(l(t,o,e));return{c(){e=Object(s.M)(),c=Object(s.s)("h1"),r=Object(s.O)("Recent posts"),n=Object(s.M)(),b=Object(s.s)("ul");for(let t=0;t<O.length;t+=1)O[t].c();this.h()},l(t){Object(s.G)('[data-svelte="svelte-hfp9t8"]',document.head).forEach(s.r),e=Object(s.k)(t),c=Object(s.j)(t,"H1",{});var l=Object(s.h)(c);r=Object(s.l)(l,"Recent posts"),l.forEach(s.r),n=Object(s.k)(t),b=Object(s.j)(t,"UL",{class:!0});var j=Object(s.h)(b);for(let t=0;t<O.length;t+=1)O[t].l(j);j.forEach(s.r),this.h()},h(){document.title="Blog",Object(s.f)(b,"class","svelte-fjc1is")},m(t,l){Object(s.B)(t,e,l),Object(s.B)(t,c,l),Object(s.d)(c,r),Object(s.B)(t,n,l),Object(s.B)(t,b,l);for(let t=0;t<O.length;t+=1)O[t].m(b,null)},p(t,[e]){if(1&e){let c;for(o=t[0],c=0;c<o.length;c+=1){const s=l(t,o,c);O[c]?O[c].p(s,e):(O[c]=j(s),O[c].c(),O[c].m(b,null))}for(;c<O.length;c+=1)O[c].d(1);O.length=o.length}},i:s.E,o:s.E,d(t){t&&Object(s.r)(e),t&&Object(s.r)(c),t&&Object(s.r)(n),t&&Object(s.r)(b),Object(s.q)(O,t)}}}function n({params:t,query:e}){return this.fetch("blog.json").then(t=>t.json()).then(t=>({posts:t}))}function b(t,e,c){let{posts:s}=e;return t.$set=t=>{"posts"in t&&c(0,s=t.posts)},[s]}class o extends s.a{constructor(t){var e;super(),document.getElementById("svelte-fjc1is-style")||((e=Object(s.s)("style")).id="svelte-fjc1is-style",e.textContent="ul.svelte-fjc1is{margin:0 0 1em 0;line-height:1.5}a.svelte-fjc1is{color:rgb(255,62,0)}",Object(s.d)(document.head,e)),Object(s.A)(this,t,b,r,s.I,{posts:0})}}e.default=o}}]);