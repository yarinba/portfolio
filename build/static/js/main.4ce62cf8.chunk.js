(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{13:function(e,c,s){"use strict";s.r(c),c.default=s.p+"static/media/yarinCV.5b8bbb18.pdf"},14:function(e,c,s){"use strict";s.r(c);var t=s(1),n=s.n(t),l=s(7),a=s.n(l),i=s(2),r=s(3),o=s(5),j=s(4),d={timer:null,stop:function(){clearTimeout(this.timer)},scrollTo:function(e,c){var s,t=1e3,n={outQuint:function(e,c,s,t,n){return t*((c=c/n-1)*c*c*c*c+1)+s}},l=document.getElementById(e),a=l.offsetTop,i=l.offsetHeight,r=document.body,o=document.documentElement,j=Math.max(r.scrollHeight,r.offsetHeight,o.clientHeight,o.scrollHeight,o.offsetHeight),d=window.innerHeight,b=window.pageYOffset,h=a-b,m=j-d,u=m<h?m-(j-a-i+b):h;s=Date.now(),this.timer&&clearInterval(this.timer),this.timer=setTimeout((function e(){var l,a=Date.now()-s;a>t&&clearTimeout(this.timer),a/t>1?(clearTimeout(this.timer),c&&c()):(l=n.outQuint(0,a,b,u,t),window.scrollTo(0,l),this.timer=setTimeout(e,10))}),10)}},b=s(0),h=function(e){Object(o.a)(s,e);var c=Object(j.a)(s);function s(){return Object(i.a)(this,s),c.apply(this,arguments)}return Object(r.a)(s,[{key:"scrollHome",value:function(){d.scrollTo("hero")}},{key:"scrollAbout",value:function(){d.scrollTo("about")}},{key:"scrollSkills",value:function(){d.scrollTo("resume")}},{key:"scrollContact",value:function(){d.scrollTo("contact")}},{key:"render",value:function(){return Object(b.jsxs)("header",{className:"s-header",children:[Object(b.jsx)("div",{className:"row s-header__nav-wrap",children:Object(b.jsx)("nav",{className:"s-header__nav",children:Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:Object(b.jsx)("a",{onClick:this.scrollHome,children:"Home"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{onClick:this.scrollAbout,children:"About"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{onClick:this.scrollSkills,children:"Skills"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{onClick:this.scrollContact,children:"Contact"})})]})})}),Object(b.jsx)("a",{className:"s-header__menu-toggle",onClick:this.scrollHome,title:"Menu",children:Object(b.jsx)("span",{className:"s-header__menu-icon"})})]})}}]),s}(n.a.Component),m=function(e){Object(o.a)(s,e);var c=Object(j.a)(s);function s(){return Object(i.a)(this,s),c.apply(this,arguments)}return Object(r.a)(s,[{key:"scrollAbout",value:function(){d.scrollTo("about")}},{key:"render",value:function(){return Object(b.jsxs)("section",{id:"hero",className:"s-hero target-section",children:[Object(b.jsx)("div",{className:"s-hero__bg"}),Object(b.jsx)("div",{className:"row s-hero__content",children:Object(b.jsx)("div",{className:"column",children:Object(b.jsx)("div",{className:"s-hero__content-about",children:Object(b.jsx)("h1",{children:"Yarin Barnes."})})})}),Object(b.jsx)("div",{className:"s-hero__scroll",children:Object(b.jsxs)("a",{onClick:this.scrollAbout,className:"s-hero__scroll-link",children:[Object(b.jsx)("span",{className:"scroll-arrow",children:Object(b.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",style:{fill:"rgba(0, 0, 0, 1)",transform:"",msFilter:""},children:Object(b.jsx)("path",{d:"M18.707 12.707L17.293 11.293 13 15.586 13 6 11 6 11 15.586 6.707 11.293 5.293 12.707 12 19.414z"})})}),Object(b.jsx)("span",{className:"scroll-text",children:"Scroll Down"})]})})]})}}]),s}(t.Component),u=function(){return Object(b.jsx)("section",{id:"about",className:"s-about target-section",children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"column large-3 tab-12",children:Object(b.jsx)("img",{className:"s-about__pic",src:"images/info-icon.png",alt:""})}),Object(b.jsxs)("div",{className:"column large-9 tab-12 s-about__content",children:[Object(b.jsx)("h3",{children:"About Me"}),Object(b.jsxs)("p",{children:["My name is Yarin Barnes and I'm from Rishon Lezion, Israel. ",Object(b.jsx)("br",{}),"Computers have held a life-long fascination for me. What started as an interest in just using them developed into a growing desire to understand how a collection of simple ideas and components can interact to produce amazing things."]}),Object(b.jsx)("p",{children:"I'm  1st year student at MTA, undertaking Computer Science B.Sc"}),Object(b.jsx)("p",{children:"I'm a student with outstanding self-learning skills, highly motivated, responsible and reliable. Great team player with excellent communication skills."}),Object(b.jsxs)("p",{children:["Enthusiastic about Full-Stack development, ",Object(b.jsx)("br",{}),"my current goal is to absorb knowledge and to be responsible for engineering the end-to-end features of a system."]})]})]})})},O=function(){return Object(b.jsx)("section",{id:"resume",className:"s-resume target-section",children:Object(b.jsxs)("div",{className:"row s-resume__section",children:[Object(b.jsx)("div",{className:"column large-3 tab-12",children:Object(b.jsx)("h3",{className:"section-header-allcaps",children:"My Skills"})}),Object(b.jsx)("div",{className:"column large-9 tab-12",children:Object(b.jsx)("div",{className:"resume-block",children:Object(b.jsxs)("ul",{className:"skill-bars-fat",children:[Object(b.jsxs)("li",{children:[Object(b.jsx)("div",{className:"progress percent90"}),Object(b.jsx)("strong",{children:"C"})]}),Object(b.jsxs)("li",{children:[Object(b.jsx)("div",{className:"progress percent60"}),Object(b.jsx)("strong",{children:"Python"})]}),Object(b.jsxs)("li",{children:[Object(b.jsx)("div",{className:"progress percent85"}),Object(b.jsx)("strong",{children:"HTML"})]}),Object(b.jsxs)("li",{children:[Object(b.jsx)("div",{className:"progress percent85"}),Object(b.jsx)("strong",{children:"CSS"})]}),Object(b.jsxs)("li",{children:[Object(b.jsx)("div",{className:"progress percent65"}),Object(b.jsx)("strong",{children:"Javascript"})]}),Object(b.jsxs)("li",{children:[Object(b.jsx)("div",{className:"progress percent65"}),Object(b.jsx)("strong",{children:"Node.js"})]}),Object(b.jsxs)("li",{children:[Object(b.jsx)("div",{className:"progress percent65"}),Object(b.jsx)("strong",{children:"React"})]})]})})})]})})},x=s(13).default,f=function(){return Object(b.jsxs)("section",{id:"contact",className:"s-contact target-section",children:[Object(b.jsx)("div",{className:"row s-contact__header",children:Object(b.jsx)("div",{className:"column large-12",children:Object(b.jsx)("h3",{className:"section-header-allcaps",children:"Contact Me"})})}),Object(b.jsx)("div",{className:"row s-contact__content",children:Object(b.jsx)("div",{className:"column large-4 medium-12",children:Object(b.jsxs)("div",{className:"row contact-infos",children:[Object(b.jsx)("div",{className:"column large-12 medium-6 tab-12",children:Object(b.jsxs)("div",{className:"contact-block",children:[Object(b.jsx)("h5",{className:"contact-block__header",children:"Email"}),Object(b.jsx)("p",{className:"contact-block__content",children:Object(b.jsx)("a",{className:"mailtoui",href:"mailto:yarinb7877@gmail.com",children:"yarinb7877@gmail.com"})})]})}),Object(b.jsxs)("div",{className:"column large-12 medium-6 tab-12",children:[Object(b.jsxs)("div",{className:"contact-block",children:[Object(b.jsx)("h5",{className:"contact-block__header",children:"Phone"}),Object(b.jsx)("p",{className:"contact-block__content",children:Object(b.jsx)("a",{href:"tel:+972542652245",children:"+972 54 265 2245"})})]}),Object(b.jsx)("a",{class:"btn btn--download",href:x,download:!0,children:"Download CV"})]})]})})})]})},p=function(){return Object(b.jsx)("footer",{className:"s-footer",children:Object(b.jsx)("div",{className:"row",children:Object(b.jsx)("div",{className:"column large-4 medium-6 w-1000-stack s-footer__social-block",children:Object(b.jsxs)("ul",{className:"s-footer__social",children:[Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"https://www.facebook.com/profile.php?id=100009436774047",children:Object(b.jsx)("i",{className:"fab fa-facebook","aria-hidden":"true"})})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"https://www.github.com/yarinba",children:Object(b.jsx)("i",{className:"fab fa-github","aria-hidden":"true"})})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"https://www.linkedin.com/in/yarin-barnes",children:Object(b.jsx)("i",{className:"fab fa-linkedin","aria-hidden":"true"})})})]})})})})},g=function(e){Object(o.a)(s,e);var c=Object(j.a)(s);function s(){return Object(i.a)(this,s),c.apply(this,arguments)}return Object(r.a)(s,[{key:"componentDidMount",value:function(){d.scrollTo("hero")}},{key:"render",value:function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(h,{}),Object(b.jsx)(m,{}),Object(b.jsx)(u,{}),Object(b.jsx)(O,{}),Object(b.jsx)(f,{}),Object(b.jsx)(p,{})]})}}]),s}(n.a.Component);a.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(g,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.4ce62cf8.chunk.js.map