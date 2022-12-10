(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[296],{7933:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/notes/get-your-hands-dirty-on-clean-architecture",function(){return s(6192)}])},3957:function(e,n,s){"use strict";var i=s(5893);s(7294);let r={logo:(0,i.jsx)("span",{children:"Reading notes"}),project:{link:"https://github.com/mkrtchian/reading-notes"},docsRepositoryBase:"https://github.com/mkrtchian/reading-notes",footer:{text:"Made by Roman Mkrtchian"}};n.Z=r},6192:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return o.ZP}});var i,r=s(5893),t=s(2720),l=s(3957);s(5513);var a=s(1151);s(5675);var o=s(1235);let c={filePath:"pages/notes/get-your-hands-dirty-on-clean-architecture.md",route:"/notes/get-your-hands-dirty-on-clean-architecture",frontMatter:{},pageMap:[{kind:"Meta",data:{index:"Introduction",notes:"Reading notes"}},{kind:"MdxPage",name:"index",route:"/"},{kind:"Folder",name:"notes",route:"/notes",children:[{kind:"Meta",data:{"designing-data-intensive-applications":"Designing Data-Intensive Applications","the-design-of-web-apis":"The Design of Web APIs","unit-testing":"Unit Testing: Principles, Practices, and Patterns","learning-domain-driven-design":"Learning Domain-Driven Design","continuous-discovery-habits":"Continuous Discovery Habits","get-your-hands-dirty-on-clean-architecture":"Get Your Hands Dirty on Clean Architecture"}},{kind:"MdxPage",name:"continuous-discovery-habits",route:"/notes/continuous-discovery-habits"},{kind:"MdxPage",name:"designing-data-intensive-applications",route:"/notes/designing-data-intensive-applications"},{kind:"MdxPage",name:"get-your-hands-dirty-on-clean-architecture",route:"/notes/get-your-hands-dirty-on-clean-architecture"},{kind:"MdxPage",name:"learning-domain-driven-design",route:"/notes/learning-domain-driven-design"},{kind:"MdxPage",name:"the-design-of-web-apis",route:"/notes/the-design-of-web-apis"},{kind:"MdxPage",name:"unit-testing",route:"/notes/unit-testing"}]}],headings:[{type:"heading",depth:1,children:[{type:"text",value:"Get Your Hands Dirty on Clean Architecture",position:{start:{line:1,column:3,offset:2},end:{line:1,column:45,offset:44}}}],position:{start:{line:1,column:1,offset:0},end:{line:1,column:45,offset:44}},value:"Get Your Hands Dirty on Clean Architecture"},{type:"heading",depth:2,children:[{type:"text",value:"1 - What’s Wrong With Layers?",position:{start:{line:3,column:4,offset:49},end:{line:3,column:33,offset:78}}}],position:{start:{line:3,column:1,offset:46},end:{line:3,column:33,offset:78}},value:"1 - What’s Wrong With Layers?"},{type:"heading",depth:2,children:[{type:"text",value:"2 - Inverting dependencies",position:{start:{line:22,column:4,offset:2276},end:{line:22,column:30,offset:2302}}}],position:{start:{line:22,column:1,offset:2273},end:{line:22,column:30,offset:2302}},value:"2 - Inverting dependencies"},{type:"heading",depth:2,children:[{type:"text",value:"3 - Organizing Code",position:{start:{line:46,column:4,offset:4890},end:{line:46,column:23,offset:4909}}}],position:{start:{line:46,column:1,offset:4887},end:{line:46,column:23,offset:4909}},value:"3 - Organizing Code"},{type:"heading",depth:2,children:[{type:"text",value:"4 - Implementing a Use Case",position:{start:{line:111,column:4,offset:8363},end:{line:111,column:31,offset:8390}}}],position:{start:{line:111,column:1,offset:8360},end:{line:111,column:31,offset:8390}},value:"4 - Implementing a Use Case"}],flexsearch:{codeblocks:!0}};globalThis.__nextra_internal__={pageMap:c.pageMap,route:c.route};let d="Get Your Hands Dirty on Clean Architecture";function u(e){let n=Object.assign({h1:"h1",h2:"h2",ul:"ul",li:"li",strong:"strong",div:"div",pre:"pre",code:"code",span:"span",em:"em"},(0,a.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{children:"Get Your Hands Dirty on Clean Architecture"}),"\n",(0,r.jsx)(n.h2,{id:"1---whats-wrong-with-layers",children:"1 - What’s Wrong With Layers?"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["La ",(0,r.jsx)(n.strong,{children:"layered architecture"})," est tout \xe0 fait classique : 3 couches successives (web -> domain -> persistance).","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Elle peut m\xeame permettre une bonne architecture qui laisse les options ouvertes (par exemple remplacer la persistance en ne touchant que cette couche-l\xe0)."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Le probl\xe8me de la layered architecture c’est qu’",(0,r.jsx)(n.strong,{children:"elle se d\xe9t\xe9riore rapidement et encourage les mauvaises habitudes."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Elle promeut le ",(0,r.jsx)(n.strong,{children:"database-driven design"})," : vu que la persistance est \xe0 la base, on part toujours depuis la mod\xe9lisation de la structure de la DB.","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Au lieu de \xe7a on devrait mettre au centre le comportement, c’est-\xe0-dire le code m\xe9tier, et consid\xe9rer la persistance comme p\xe9riph\xe9rique."}),"\n",(0,r.jsx)(n.li,{children:"Un des \xe9l\xe9ments qui pousse au database-driven design aussi c’est l’ORM, qui peut \xeatre utilis\xe9 depuis le layer domain, et introduit des consid\xe9rations techniques dedans."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Elle encourage les ",(0,r.jsx)(n.strong,{children:"raccourcis"})," : quand un layer du dessus a besoin d’un \xe9l\xe9ment du dessous, il suffit de le pousser vers le bas et il y aura acc\xe8s.","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"La couche de persistance finit par grossir et devenir une \xe9norme couche “utilitaire” qui contient la logique et les aspects techniques entrem\xeal\xe9s."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Elle devient de plus en plus ",(0,r.jsx)(n.strong,{children:"difficile \xe0 tester"})," :","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Le logique m\xe9tier a tendance \xe0 fuiter vers la couche web, parce que la persistance y est directement utilis\xe9e."}),"\n",(0,r.jsx)(n.li,{children:"Tester la couche web devient de plus en plus difficile parce qu’il faut mocker les deux autres, et parce que la logique y grossit."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Elle ",(0,r.jsx)(n.strong,{children:"cache les use cases"})," : la logique fuitant vers les autres layers, on ne sait pas o\xf9 ajouter un nouveau use-case, ni o\xf9 chercher un existant.","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"On peut ajouter \xe0 \xe7a que vu qu’il n’y a pas de limite, la couche domain a des unit\xe9s (services) qui grossissent au fil du temps, ce qui rend plus difficile de trouver o\xf9 va chaque fonctionnalit\xe9."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Elle rend le ",(0,r.jsx)(n.strong,{children:"travail en parall\xe8le"})," difficile :","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Comme on fait du database-driven design, on doit toujours commencer par la couche de persistance, et on ne peut pas \xeatre plusieurs \xe0 la toucher."}),"\n",(0,r.jsx)(n.li,{children:"Si en plus les services du domaine sont gros, on peut \xeatre en difficult\xe9 pour \xeatre plusieurs \xe0 modifier un gros service pour plusieurs raisons."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"2---inverting-dependencies",children:"2 - Inverting dependencies"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Le ",(0,r.jsx)(n.strong,{children:"Single Responsibility Principle"})," (SRP) dit qu’un composant doit avoir une seule** raison de changer**.","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\xc7a veut dire que si on change le logiciel pour n’importe quelle autre raison, il ne devrait pas changer."}),"\n",(0,r.jsx)(n.li,{children:"Quand nos composants d\xe9pendent les uns des autres, \xe7a leur donne autant de raisons \xe0 chaque fois de changer, si un des composants dont ils d\xe9pendent change lui aussi."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["La layered architecture fait que la couche web et la couche domain ont des raisons de changer li\xe9es \xe0 la couche de persistance. On n’a pas envie que la couche domain change pour d’autres raisons qu’elle-m\xeame, donc on va ",(0,r.jsx)(n.strong,{children:"inverser les d\xe9pendances"})," qu’elle a.","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"C’est le Dependency Inversion Principle (DIP)."}),"\n",(0,r.jsx)(n.li,{children:"On va copier les entities depuis la persistance vers la couche domain qui en a besoin aussi."}),"\n",(0,r.jsx)(n.li,{children:"Et on va cr\xe9er une interface de persistance dans le domaine, \xe0 laquelle va adh\xe9rer la couche persistance qui aura donc une d\xe9pendance vers le domaine plut\xf4t que l’inverse."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Selon Robert Martin la ",(0,r.jsx)(n.strong,{children:"clean architecture"})," doit garder le domaine s\xe9par\xe9 du reste (frameworks, infrastructure etc.), et les d\xe9pendances doivent \xeatre tourn\xe9es vers le code du domaine pour que celui-ci n’en ait pas d’autres que lui-m\xeame.","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Les ",(0,r.jsx)(n.strong,{children:"entities"})," du domaine sont au centre."]}),"\n",(0,r.jsxs)(n.li,{children:["Ils sont utilis\xe9s par les ",(0,r.jsx)(n.strong,{children:"use cases"}),", qui repr\xe9sentent les services, mais impliquent d’avoir une granularit\xe9 fine."]}),"\n",(0,r.jsxs)(n.li,{children:["Cette s\xe9paration a un co\xfbt, qui est qu’il faut ",(0,r.jsx)(n.strong,{children:"dupliquer les entit\xe9s"})," entre le domaine et l’infrastructure, notamment pour \xe9viter que les entit\xe9s du domaine soient pollu\xe9es par la technique."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["L’",(0,r.jsx)(n.strong,{children:"hexagonal architecture"})," est similaire \xe0 la clean architecture mais un peu moins “abstraite”, c’est la version d’Alistair Cockburn.","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"L’hexagone contient les entities et les use cases, et en dehors on trouve des adapters pour int\xe9grer la communication avec l’ext\xe9rieur."}),"\n",(0,r.jsxs)(n.li,{children:["On a deux types d’",(0,r.jsx)(n.strong,{children:"adapters"})," :","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Les adapteurs de gauche drivent l’hexagone, parce qu’ils appellent des fonctions expos\xe9es par l’hexagone.","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Exemple : handlers HTTP."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Les adapters de droite sont driv\xe9es par l’hexagone, parce que l’hexagone appelle des m\xe9thodes sur eux.","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Exemple : communication avec la DB."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Pour permettre la communication, l’hexagone d\xe9finit des ports (interfaces), qui doivent \xeatre impl\xe9ment\xe9s par les adapters.","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"C’est pour \xe7a qu’on parle de Ports & Adapters."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Quel que soit leur nom, tout l’int\xe9r\xeat de ces architectures c’est de permettre d’avoir un ",(0,r.jsx)(n.strong,{children:"domaine isol\xe9"}),", dont on pourra g\xe9rer la complexit\xe9 sans qu’il ait d’autres raisons de changer que lui-m\xeame."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"3---organizing-code",children:"3 - Organizing Code"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["On peut organiser le code ",(0,r.jsx)(n.strong,{children:"par couches"})," : le classique web, domain et persistance, mais avec une inversion de la persistance vers le domain.","\n",(0,r.jsx)(n.div,{"data-rehype-pretty-code-fragment":"",children:(0,r.jsx)(n.pre,{children:(0,r.jsxs)(n.code,{"data-language":"yaml","data-theme":"default",children:[(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"- "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"web"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"- "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"AccountController"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"- "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"domain"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"- "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"Account"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"- "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"AccountService"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"- "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"AccountRepositoryPort"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"- "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"persistance"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"- "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"AccountRepositoryImpl"})]})]})})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Mais cette organisation est sous-optimale pour 3 raisons :","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Il n’y a pas de s\xe9paration sous forme de dossiers ou de packages pour les fonctionnalit\xe9s. Donc elles vont vite s’entre-m\xealer au sein de chaque couche."}),"\n",(0,r.jsx)(n.li,{children:"Comme les services sont gros, on peut difficilement rep\xe9rer la fonctionnalit\xe9 exacte qu’on cherche tout de suite."}),"\n",(0,r.jsx)(n.li,{children:"On ne voit pas au premier coup d'œil quelle partie de la persistance impl\xe9mente quel port c\xf4t\xe9 domain. L’architecture ne saute pas aux yeux."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["On peut ensuite organiser le code ",(0,r.jsx)(n.strong,{children:"par features"})," : les limites de dossier/package sont d\xe9finies par les features qui contiennent un fichier par couche.","\n",(0,r.jsx)(n.div,{"data-rehype-pretty-code-fragment":"",children:(0,r.jsx)(n.pre,{children:(0,r.jsxs)(n.code,{"data-language":"yaml","data-theme":"default",children:[(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"- "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"account"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"- "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"Account"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"- "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"AccountController"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"- "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"AccountRepository"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"- "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"AccountRepositoryImpl"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"- "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"SendMoneyService"})]})]})})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["On a nos features visibles imm\xe9diatement (",(0,r.jsx)(n.code,{children:"Account -> SendMoneyService"}),"), ce qui fait qu’on est dans le cadre d’une ",(0,r.jsx)(n.strong,{children:"screaming architecture"}),"."]}),"\n",(0,r.jsx)(n.li,{children:"Par contre, nos couches techniques sont tr\xe8s peu prot\xe9g\xe9es, et le code du domaine n’est plus prot\xe9g\xe9 du reste par des s\xe9parations fortes."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["On peut enfin organiser le code dans une architecture ",(0,r.jsx)(n.strong,{children:"expressive"}),", reprenant le meilleur des deux autres :","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Une s\xe9paration initiale par features majeures."}),"\n",(0,r.jsx)(n.li,{children:"Puis une s\xe9paration par couches \xe0 l’int\xe9rieur de ces features majeures."}),"\n",(0,r.jsxs)(n.li,{children:["Et enfin la s\xe9paration explicite des ports et adapters, en explicitant leur nature entrante ou sortante.","\n",(0,r.jsx)(n.div,{"data-rehype-pretty-code-fragment":"",children:(0,r.jsx)(n.pre,{children:(0,r.jsxs)(n.code,{"data-language":"yaml","data-theme":"default",children:[(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"- "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"account"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"- "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"adapter"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  - "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"in"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  - "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"web"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  - "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"AccountController"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  - "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"out"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  - "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"persistance"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  - "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"AccountPersistanceAdapter"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"- "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"domain"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  - "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"Account"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"- "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"application"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  - "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"SendMoneyService"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  - "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"port"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  - "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"in"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  - "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"SendMoneyUseCase"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  - "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"out"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  - "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"LoadAccountPort"})]}),"\n",(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  - "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"UpdateAccountStatePort"})]})]})})}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"Le fait que l’architecture soit align\xe9e avec la structure en packages fait que nous avons moins de chances d’en d\xe9vier. Elle est incarn\xe9e de mani\xe8re tr\xe8s concr\xe8te dans le code."}),"\n",(0,r.jsx)(n.li,{children:"Le domaine \xe9tant isol\xe9, on peut tr\xe8s bien en faire ce qu’on veut, y compris y appliquer les patterns tactiques du DDD."}),"\n",(0,r.jsxs)(n.li,{children:["C\xf4t\xe9 visibilit\xe9 des packages :","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Les adapters peuvent rester priv\xe9s, puisqu’ils ne sont appel\xe9s qu’\xe0 travers les ports."}),"\n",(0,r.jsx)(n.li,{children:"Les ports doivent \xeatre publics pour \xeatre accessibles par les adapters."}),"\n",(0,r.jsx)(n.li,{children:"Les objets du domaine doivent \xeatre publics pour \xeatre accessibles depuis les services et les adapters."}),"\n",(0,r.jsx)(n.li,{children:"Les services peuvent rester priv\xe9s parce qu’ils sont appel\xe9s \xe0 travers les ports primaires."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Concernant la mani\xe8re dont fonctionne l’",(0,r.jsx)(n.strong,{children:"inversion de d\xe9pendance"})," ici :","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Pour les adpaters entrants il n’y a pas besoin d’inversion puisqu’ils sont d\xe9j\xe0 entrants vers l’hexagone. On peut, au besoin, quand m\xeame prot\xe9ger l’hexagone derri\xe8re des ports quand m\xeame."}),"\n",(0,r.jsx)(n.li,{children:"Pour les adapters sortants par contre il faut inverser la d\xe9pendance, en les faisant respecter le port de l’hexagone, puis en les instanciant et les donnant \xe0 l’hexagone."}),"\n",(0,r.jsxs)(n.li,{children:["Il faut donc un ",(0,r.jsx)(n.strong,{children:"composant tiers neutre"})," qui instancie les adapters sortants pour les donner \xe0 l’hexagone, et instancie l’hexagone pour le donner aux adapters entrants.","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Il s’agit de l’",(0,r.jsx)(n.strong,{children:"injection de d\xe9pendance"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"4---implementing-a-use-case",children:"4 - Implementing a Use Case"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Comme on a une forte s\xe9paration hexagone/adapters, on peut impl\xe9menter l’hexagone de la mani\xe8re dont on veut, y compris avec les patterns tactiques du DDD, mais pas forc\xe9ment."}),"\n",(0,r.jsxs)(n.li,{children:["Dans ce chapitre on impl\xe9mente un use-case dans l’hexagone de l’exemple ",(0,r.jsx)(n.em,{children:"buckpal"})," qui est une application de gestion de paiement."]}),"\n",(0,r.jsxs)(n.li,{children:["La ",(0,r.jsx)(n.strong,{children:"couche domain"})," se trouve dans ",(0,r.jsx)(n.code,{children:"buckpal -> domain"}),", et contient une entit\xe9 ",(0,r.jsx)(n.code,{children:"Account"}),", qui a des m\xe9thodes pour ajouter et retirer de l’argent.","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Chaque ajout ou retrait se fait en empilant des entit\xe9s ",(0,r.jsx)(n.code,{children:"Activity"})," qui contiennent chaque transaction dans un tableau interne \xe0 ",(0,r.jsx)(n.code,{children:"Account"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Le tableau interne ne contient qu’une fen\xeatre d’",(0,r.jsx)(n.code,{children:"Activity"})," pour des raisons de performance, et une variable permet de conna\xeetre la valeur du compte avant ce nombre restreint d’",(0,r.jsx)(n.code,{children:"Activity"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Les use-cases se trouvent dans la ",(0,r.jsx)(n.strong,{children:"couche applicative"}),", dans ",(0,r.jsx)(n.code,{children:"buckpal -> application -> service"}),".","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Un use-case va :","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"R\xe9cup\xe9rer l’input (qu’il ne valide pas par lui-m\xeame pour laisser cette responsabilit\xe9 \xe0 un autre composant)."}),"\n",(0,r.jsx)(n.li,{children:"Valider les r\xe8gles business, dont la responsabilit\xe9 est partag\xe9e avec la couche domain."}),"\n",(0,r.jsxs)(n.li,{children:["Manipuler l’\xe9tat du domaine :","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\xc7a se fait en instanciant des entit\xe9s et appelant des m\xe9thodes sur elles."}),"\n",(0,r.jsx)(n.li,{children:"Et en g\xe9n\xe9ral en passant les entit\xe9s \xe0 un adapter pour que leur \xe9tat soit persist\xe9."}),"\n",(0,r.jsx)(n.li,{children:"Appeler \xe9ventuellement d’autres use-cases."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"Retourner l’output."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"Les use-cases vont \xeatre petits pour \xe9viter le probl\xe8me de gros services o\xf9 on ne sait pas quelle fonctionnalit\xe9 va o\xf9."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["La ",(0,r.jsx)(n.strong,{children:"validation des inputs"})," se fait dans la couche applicative pour permettre d’appeler l’hexagone depuis plusieurs controllers sans qu’ils aient \xe0 valider ces donn\xe9es, et pour garantir l’int\xe9grit\xe9 des donn\xe9es dans l’hexagone.","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["On va faire la validation dans une classe de type ",(0,r.jsx)(n.strong,{children:"command"}),". Cette classe valide les donn\xe9es dans son constructeur, et refuse d’\xeatre instanci\xe9e si les donn\xe9es sont invalides.","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"L’auteur d\xe9conseille d’utiliser le pattern builder et conseille d’appeler directement le constructeur."}),"\n",(0,r.jsxs)(n.li,{children:["Exemple de builder :","\n",(0,r.jsx)(n.div,{"data-rehype-pretty-code-fragment":"",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{"data-language":"typescript","data-theme":"default",children:(0,r.jsxs)(n.span,{className:"line",children:[(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"new"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"CommandBuilder"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"()"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:".setParameterA"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"(value1)"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:".setParameterB"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"(value2)"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:".build"}),(0,r.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"();"})]})})})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Cette classe va se trouver dans ",(0,r.jsx)(n.code,{children:"buckpal -> application -> port -> in"}),"."]}),"\n",(0,r.jsx)(n.li,{children:"Elle constitue une sorte d’anti-corruption layer prot\xe9geant l’hexagone."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["On pourrait \xeatre tent\xe9 de ",(0,r.jsx)(n.strong,{children:"r\xe9utiliser des classes de validation d’input"})," entre plusieurs use-cases ressemblants, par exemple la cr\xe9ation d’un compte et la modification d’un compte. L’auteur ",(0,r.jsx)(n.strong,{children:"le d\xe9conseille"}),".","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Si on r\xe9utilise, on va se retrouver avec quelques diff\xe9rences (par exemple l’ID du compte) qui vont introduire de potentielles mauvaises donn\xe9es."}),"\n",(0,r.jsx)(n.li,{children:"On va se retrouver \xe0 g\xe9rer les diff\xe9rences entre les deux mod\xe8les dans les use-cases alors qu’on voulait le faire dans un objet \xe0 part."}),"\n",(0,r.jsx)(n.li,{children:"Globalement, faire des mod\xe8les de validation d’input permet, au m\xeame titre que le fait de faire des petits use-cases, de garder l’architecture maintenable dans le temps."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["La ",(0,r.jsx)(n.strong,{children:"validation des business rules"})," doit quant \xe0 elle \xeatre faite dans les use-cases.","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["La diff\xe9rence avec la validation des inputs c’est que pour les inputs il n’y a pas besoin d’",(0,r.jsx)(n.strong,{children:"acc\xe9der \xe0 l’\xe9tat du mod\xe8le de donn\xe9es"}),", alors que pour les business rules oui."]}),"\n",(0,r.jsxs)(n.li,{children:["Le use-case peut le faire directement en appelant des fonctions, ou alors le d\xe9l\xe9guer \xe0 des entities.","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Dans le cas o\xf9 l'essentiel de la logique est fait dans les entities et o\xf9 le use-case orchestre juste des appels et passe les donn\xe9es, on parle d’un ",(0,r.jsx)(n.strong,{children:"rich domain model"}),". Dans le cas o\xf9 c’est le use-case qui a l’essentiel de la logique et les entities sont maigres, on parlera d’un ",(0,r.jsx)(n.strong,{children:"anemic domain model"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"Le use-case l\xe8ve une exception en cas de non-respect des r\xe8gles business comme pour les r\xe8gles d’input. Ce sera \xe0 l’adapter entrant de d\xe9cider de ce qu’il fait de ces exceptions."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Concernant ",(0,r.jsx)(n.strong,{children:"l’output"})," renvoy\xe9 par le use-case, il faut qu’il soit ",(0,r.jsx)(n.strong,{children:"le plus minimal possible"})," : n’inclure que ce dont l’appelant a besoin.","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Si on retourne beaucoup de choses, on risque de voir des use-cases coupl\xe9s entre eux via l’output (quand on ajoute un champ \xe0 l’objet retourn\xe9, on a besoin de changer tous ceux qui le retournent)."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Les use-cases qui font ",(0,r.jsx)(n.strong,{children:"uniquement de la lecture"})," pour renvoyer de la donn\xe9e peuvent \xeatre distingu\xe9es des use-cases qui \xe9crivent.","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Pour \xe7a on peut les faire impl\xe9menter un autre port entrant que les use-cases d’\xe9criture, par exemple le port ",(0,r.jsx)(n.code,{children:"GetAccountBalanceQuery"}),"."]}),"\n",(0,r.jsx)(n.li,{children:"On pourra \xe0 partir de l\xe0 faire du CQS ou du CQRS."}),"\n"]}),"\n"]}),"\n"]})]})}function x(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}c.title="string"==typeof d&&d||"Get Your Hands Dirty on Clean Architecture";let p=e=>(0,r.jsx)(t.mK.Provider,{value:e,children:(0,r.jsx)(x,{})});(i=globalThis).__nextra_pageContext__||(i.__nextra_pageContext__=Object.create(null)),globalThis.__nextra_pageContext__["/notes/get-your-hands-dirty-on-clean-architecture"]={Content:p,pageOpts:c,themeConfig:l.Z}}},function(e){e.O(0,[774,860,888,179],function(){return e(e.s=7933)}),_N_E=e.O()}]);