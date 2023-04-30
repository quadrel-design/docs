(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[82],{7382:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/books/effective-kafka",function(){return s(3217)}])},9923:function(e,n,s){"use strict";s.d(n,{Z:function(){return u}});var i=s(5893);s(7294);let r="My detailed reading notes from computer science books",t="/reading-notes";var l=s(1163),o=s(5675),a=s.n(o);let c={logo:(0,i.jsx)(function(){return(0,i.jsx)(a(),{src:"".concat(t,"/logo.png"),alt:"Reading notes homepage",width:30,height:30})},{}),project:{link:"https://github.com/mkrtchian/reading-notes"},docsRepositoryBase:"https://github.com/mkrtchian/reading-notes/blob/main",footer:{text:"Made by Roman Mkrtchian"},head:function(){let e="Reading notes";return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("meta",{name:"msapplication-TileColor",content:"#fff"}),(0,i.jsx)("meta",{httpEquiv:"Content-Language",content:"en"}),(0,i.jsx)("meta",{name:"description",content:r}),(0,i.jsx)("meta",{property:"og:title",content:e}),(0,i.jsx)("meta",{property:"og:description",content:r}),(0,i.jsx)("meta",{name:"apple-mobile-web-app-title",content:e}),(0,i.jsx)("link",{rel:"icon",type:"image/x-icon",href:"".concat(t,"/favicon.ico")})]})},feedback:{content:()=>(0,i.jsx)(i.Fragment,{children:"Question? Give me feedback →"}),labels:"feedback"},useNextSeoProps:function(){let{route:e}=(0,l.useRouter)(),n={description:r};return"/"!==e?n.titleTemplate="%s – Reading notes":n.titleTemplate="%s",n},i18n:[]};var u=c},3217:function(e,n,s){"use strict";s.r(n);var i=s(5893),r=s(2673),t=s(902),l=s(9923);s(9966);var o=s(1151);s(5675);let a={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,o.ah)(),e.components);return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)},pageOpts:{filePath:"pages/books/effective-kafka.md",route:"/books/effective-kafka",headings:[{depth:1,value:"Effective Kafka",id:"effective-kafka"},{depth:2,value:"1 - Event Streaming Fundamentals",id:"1---event-streaming-fundamentals"},{depth:2,value:"2 - Introducing Apache Kafka",id:"2---introducing-apache-kafka"},{depth:2,value:"3 - Architecture and Core Concepts",id:"3---architecture-and-core-concepts"},{depth:2,value:"4 - Installation",id:"4---installation"},{depth:2,value:"5 - Getting Started",id:"5---getting-started"}],pageMap:[{kind:"Meta",data:{index:"Introduction",books:"Reading notes"}},{kind:"Folder",name:"books",route:"/books",children:[{kind:"Meta",data:{"continuous-discovery-habits":"Continuous Discovery Habits","designing-data-intensive-applications":"Designing Data-Intensive Applications","effective-kafka":"Effective Kafka","get-your-hands-dirty-on-clean-architecture":"Get Your Hands Dirty on Clean Architecture","learning-domain-driven-design":"Learning Domain-Driven Design","monolith-to-microservices":"Monolith to Microservices",refactoring:"Refactoring: Improving the Design of Existing Code","reinventing-organizations":"Reinventing Organizations","team-topologies":"Team Topologies","the-design-of-web-apis":"The Design of Web APIs","unit-testing":"Unit Testing: Principles, Practices, and Patterns"}},{kind:"MdxPage",name:"continuous-discovery-habits",route:"/books/continuous-discovery-habits"},{kind:"MdxPage",name:"designing-data-intensive-applications",route:"/books/designing-data-intensive-applications"},{kind:"MdxPage",name:"effective-kafka",route:"/books/effective-kafka"},{kind:"MdxPage",name:"get-your-hands-dirty-on-clean-architecture",route:"/books/get-your-hands-dirty-on-clean-architecture"},{kind:"MdxPage",name:"learning-domain-driven-design",route:"/books/learning-domain-driven-design"},{kind:"MdxPage",name:"monolith-to-microservices",route:"/books/monolith-to-microservices"},{kind:"MdxPage",name:"refactoring",route:"/books/refactoring"},{kind:"MdxPage",name:"reinventing-organizations",route:"/books/reinventing-organizations"},{kind:"MdxPage",name:"team-topologies",route:"/books/team-topologies"},{kind:"MdxPage",name:"the-design-of-web-apis",route:"/books/the-design-of-web-apis"},{kind:"MdxPage",name:"unit-testing",route:"/books/unit-testing"}]},{kind:"MdxPage",name:"index",route:"/"}],flexsearch:{codeblocks:!0},title:"Effective Kafka"},pageNextRoute:"/books/effective-kafka",nextraLayout:t.ZP,themeConfig:l.Z};function c(e){let n=Object.assign({h1:"h1",h2:"h2",ul:"ul",li:"li",strong:"strong",em:"em",code:"code"},(0,o.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{children:"Effective Kafka"}),"\n",(0,i.jsx)(n.h2,{id:"1---event-streaming-fundamentals",children:"1 - Event Streaming Fundamentals"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Les ",(0,i.jsx)(n.strong,{children:"syst\xe8mes distribu\xe9s"})," sont plus complexes que les syst\xe8mes non distribu\xe9s, ils d\xe9placent une partie de la ",(0,i.jsx)(n.strong,{children:"complexit\xe9 du local vers le global"}),".","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"La raison pour laquelle on les utilise c’est qu’ils permettent de d\xe9composer le syst\xe8me en plus petits probl\xe8mes qu’on va pouvoir diviser entre plusieurs \xe9quipes."}),"\n",(0,i.jsx)(n.li,{children:"La complexit\xe9 globale peut \xeatre r\xe9duite par certaines techniques, par exemple les messages asynchrones."}),"\n",(0,i.jsx)(n.li,{children:"On y trouve des \xe9checs partiels, intermittents, ou m\xeame byzantins (les nœuds envoient des informations fausses)."}),"\n",(0,i.jsx)(n.li,{children:"Le probl\xe8me le plus important est sans doute celui de la consistance."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["L’",(0,i.jsx)(n.strong,{children:"event-driven architecture"})," (EDA) consiste \xe0 avoir des ",(0,i.jsx)(n.em,{children:"emitters"})," envoyant des notifications d’event \xe0 des ",(0,i.jsx)(n.em,{children:"consumers"}),".","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Les emitters n’ont aucune connaissance des consumers. Et de m\xeame les consumers n’ont pas connaissance des emitters."}),"\n",(0,i.jsx)(n.li,{children:"Les notifications d’event sont immutables, que ce soit c\xf4t\xe9 emitter ou consumer."}),"\n",(0,i.jsxs)(n.li,{children:["L’EDA est la mani\xe8re ",(0,i.jsx)(n.strong,{children:"la plus d\xe9coupl\xe9e"})," de faire communiquer des composants entre eux.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Le seul couplage sera dans le contenu des messages qui transitent."}),"\n",(0,i.jsxs)(n.li,{children:["Imaginons un syst\xe8me d’e-commerce, avec une plateforme BI et un CRM. Il leur suffira de consommer les events d’achat et d’y r\xe9agir en toute ind\xe9pendance.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Parmi les autres possibilit\xe9s qu’on aurait pour l’exemple e-commerce :","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"On peut les mettre dans un monolith (non-modulaire), mais la complexit\xe9 risque d’augmenter \xe0 mesure que le mod\xe8le global est enrichi."}),"\n",(0,i.jsxs)(n.li,{children:["On peut utiliser des patterns d’int\xe9gration : des messages synchrones envoy\xe9s par le composant e-commerce ou par les deux autres. Dans ce cas on se rapproche du distributed monolith parce que les composants ne seront pas ind\xe9pendants.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"NDLR : toute communication synchrone rel\xe8verait du distributed monolith, un peu violent…"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["On peut utiliser la ",(0,i.jsx)(n.em,{children:"data decapsulation"}),", o\xf9 les composants BI et CRM viennent lire la DB du composant e-commerce. Dans ce cas on se retrouve dans un mode “get rich quick scheme” qui m\xe8ne toujours \xe0 des pleurs. Le couplage est maximal."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Cet exemple montre que ",(0,i.jsx)(n.strong,{children:"l’EDA scale de mani\xe8re lin\xe9aire"}),", alors qu’avec les approches plus coupl\xe9es, la complexit\xe9 explose quand on scale le nombre de composants."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["L’EDA est beaucoup ",(0,i.jsx)(n.strong,{children:"plus r\xe9silient"})," que les approches coupl\xe9es : si un composant est en situation d’\xe9chec, il a peu de chances d’impacter d’autres composants.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Si on reprend l’exemple d’e-commerce :","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Dans le cas o\xf9 le composant d’e-commerce est en situation d’\xe9chec, les autres composants vont continuer \xe0 pouvoir fonctionner, mais simplement ils ne recevront plus de nouveaux events."}),"\n",(0,i.jsx)(n.li,{children:"Dans le cas o\xf9 par exemple le CRM est en situation d’\xe9chec, les events continueront d’arriver, et il pourra toujours rattraper son retard d\xe8s qu’il est r\xe9tabli."}),"\n",(0,i.jsx)(n.li,{children:"On peut aussi pr\xe9voir une mesure pour que si le message broker est en situation d’\xe9chec, l’\xe9metteur puisse publier les events localement, pour les mettre dans le message broker plus tard."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Dans un syst\xe8me coupl\xe9, un composant qui est en \xe9chec peut entra\xeener des ",(0,i.jsx)(n.em,{children:"correlated failures"})," chez les autres qui en d\xe9pendent.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["On peut aussi avoir des ",(0,i.jsx)(n.em,{children:"congestive collapses"})," dans le cas o\xf9 certains composants sont temporairement surcharg\xe9s, et que les requ\xeates synchrones m\xe8nent \xe0 avoir des timeouts, puis \xe0 envoyer plus de requ\xeates."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["L’EDA a aussi des avantages en termes de ",(0,i.jsx)(n.strong,{children:"consistance"}),".","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Il favorise l’ownership d’un \xe9l\xe9ment stateful par un composant unique, les autres composants recevant les notifications d’event ne pouvant pas modifier cet \xe9tat."}),"\n",(0,i.jsxs)(n.li,{children:["En dehors du composant owner, les events sont rejouables ",(0,i.jsx)(n.strong,{children:"dans le bon ordre"}),", garantissant une ",(0,i.jsx)(n.em,{children:"sequential consistency"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["L’EDA n’est cependant pas adapt\xe9e dans certains cas.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Elle n’est ",(0,i.jsx)(n.strong,{children:"pas adapt\xe9e aux interactions synchrones"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"Par contre, dans les cas o\xf9 on peut l’utiliser, elle permet des am\xe9liorations significatives des aspects non fonctionnels."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["L’",(0,i.jsx)(n.strong,{children:"event streaming"})," est un moyen d’obtenir un stream ",(0,i.jsx)(n.strong,{children:"durable"})," et ",(0,i.jsx)(n.strong,{children:"ordonn\xe9"}),", d’events ",(0,i.jsx)(n.strong,{children:"immutables"}),", d\xe9livr\xe9s aux consumers qui ont souscrit.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"L’event streaming n’est pas n\xe9cessaire pour impl\xe9menter l’EDA, qui peut d’ailleurs \xeatre impl\xe9ment\xe9 dans un monolith (cf. outils comme React qui sont bas\xe9s sur des events)."}),"\n",(0,i.jsxs)(n.li,{children:["En revanche l’",(0,i.jsx)(n.strong,{children:"event streaming est pertinent"})," comme choix face aux solutions concurrentes (comme les message queues) ",(0,i.jsx)(n.strong,{children:"dans le cadre d’EDA distribu\xe9es"}),", parce qu’il a \xe9t\xe9 con\xe7u pour \xe7a.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"L’event streaming supporte nativement l’immutabilit\xe9 des events."}),"\n",(0,i.jsx)(n.li,{children:"Il supporte la garantie d’ordre des events."}),"\n",(0,i.jsx)(n.li,{children:"Il supporte le fait d’avoir de multiples consumers."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"2---introducing-apache-kafka",children:"2 - Introducing Apache Kafka"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Kafka est une plateforme d’event streaming, mais elle comprend aussi un \xe9cosyst\xe8me entier qui permet l’impl\xe9mentation d’EDAs."}),"\n",(0,i.jsxs)(n.li,{children:["L’event streaming est r\xe9cent compar\xe9 aux formes traditionnelles de messaging (MQ-style).","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Il n’y a pas de standard, mais Kafka est le leader du domaine, et son fonctionnement sert de mod\xe8le pour les solutions concurrentes comme ",(0,i.jsx)(n.strong,{children:"Azure Event Hubs"})," et ",(0,i.jsx)(n.strong,{children:"Apache Pulsar"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Historiquement, Kafka a \xe9t\xe9 open-sourc\xe9 en 2011 par LinkedIn, et confi\xe9 \xe0 la fondation Apache.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Il avait \xe9t\xe9 con\xe7u notamment pour g\xe9rer les events d’activit\xe9 des utilisateurs."}),"\n",(0,i.jsx)(n.li,{children:"En 2019, LinkedIn op\xe9rait 100 clusters Kafka, pour un total de 100 000 topics et 7 millions de partitions."}),"\n",(0,i.jsxs)(n.li,{children:["Aujourd’hui Kafka est utilis\xe9 par des g\xe9ants de la tech, pour des usages comme le real-time analytics, la data ingestion, le log aggregation et le messaging pour l’EDA.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Uber par exemple l’utilise pour g\xe9rer au total plus de 1000 milliards d’events par jour."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Parmi les usages qui permettent l’EDA, Kafka supporte :","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Publish-subscribe"})," : un emitter publie des events, et plusieurs consumers les consomment sans que ces noeuds se connaissent.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"C’est notamment utilis\xe9 pour des microservices avec un faible couplage."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Log aggregation"})," : un ensemble de sources publient des events sous forme de log (soit applicatifs, soit d’infrastructure), qu’on va ensuite agr\xe9ger au sein du m\xeame topic, pour le consommer dans une DB optimis\xe9e pour la lecture, comme ",(0,i.jsx)(n.strong,{children:"Elasticsearch"})," ou ",(0,i.jsx)(n.strong,{children:"HBase"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Log shipping"})," : il s’agit de streamer des logs depuis une DB master vers un topic o\xf9 plusieurs DB followers vont consommer et se mettre \xe0 jour.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Ce pattern permet notamment d’impl\xe9menter l’event sourcing."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"SEDA pipelines"})," : le Stage Event-Driven Architecture est l’impl\xe9mentation d’une pipeline d’events, o\xf9 on fait une op\xe9ration \xe0 chaque \xe9tape, avant d'\xe9mettre un event modifi\xe9 pour l’\xe9tape suivante.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"C’est typiquement utilis\xe9 avec les data warehouses, data lakes, le reporting et autres outils de BI."}),"\n",(0,i.jsx)(n.li,{children:"On peut voir le log aggregation comme une forme de SEDA."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"CEP"})," : le Complex Event Processing consiste \xe0 un composant qui consomme des events de multiples sources, et en extrait l’information pertinente.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Il a souvent besoin d’un stockage pour se rappeler les patterns d\xe9j\xe0 vus et y r\xe9agir."}),"\n",(0,i.jsx)(n.li,{children:"\xc7a peut \xeatre par exemple pour le trading algorithmique, l’analyse des menaces de s\xe9curit\xe9, l’analyse de fraude en temps r\xe9el etc."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Event-sourced CQRS"})," : Kafka se place entre la DB master et les DBs de projection, en permettant de les alimenter chacune au travers du concept de ",(0,i.jsx)(n.em,{children:"consumer groups"}),".","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"La diff\xe9rence avec le log shipping c’est que le log shipping op\xe8re plut\xf4t \xe0 l’int\xe9rieur d’un subdomain, alors que le CQRS peut aussi op\xe9rer \xe0 travers les subdomains."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"3---architecture-and-core-concepts",children:"3 - Architecture and Core Concepts"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Kafka est compos\xe9 de plusieurs types de noeuds :","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Broker nodes"})," : ce sont les composants principaux de Kafka, ils s’occupent des op\xe9rations I/O et de la persistance.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Ces nœuds sont des processus Java."}),"\n",(0,i.jsxs)(n.li,{children:["Chaque partition est sous la responsabilit\xe9 d’un nœud master qui peut \xe9crire dedans, les followers en ont une copie et peuvent \xeatre lus.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Un m\xeame nœud peut \xeatre master pour certaines partitions, et follower pour d’autres."}),"\n",(0,i.jsx)(n.li,{children:"L’ownership peut passer \xe0 un autre nœud en cas de besoin (op\xe9ration sp\xe9ciale qui le n\xe9cessite ou \xe9chec du nœud qui \xe9tait master de la partition)."}),"\n",(0,i.jsxs)(n.li,{children:["Concernant l’attribution de l’ownership, \xe7a se fait d’abord en \xe9lisant un des nœuds comme ",(0,i.jsx)(n.em,{children:"cluster controller"}),", puis celui-ci assigne l’ownership des partitions au gr\xe9 des besoins."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Augmenter le nombre de nœuds constitue un moyen de scaler Kafka.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"On peut am\xe9liorer la durability en ayant plusieurs copies de chaque partition (autant que le nombre de nœuds)."}),"\n",(0,i.jsx)(n.li,{children:"On peut am\xe9liorer l’availability pour les donn\xe9es en lecture."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Zookeeper nodes"})," : Zookeeper est un projet open source distinct de Kafka.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Ses nœuds sont charg\xe9s d’\xe9lire le broker qui sera le ",(0,i.jsx)(n.em,{children:"cluster controller"}),", de garantir qu’il n’y en ait qu’un, et d’en r\xe9\xe9lire un s’il n’est plus op\xe9rationnel."]}),"\n",(0,i.jsx)(n.li,{children:"Ils fournissent aussi diverses m\xe9tadonn\xe9es \xe0 propos du cluster, par exemple l’\xe9tat des diff\xe9rents nœuds, des informations de quotas, les access control list etc."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Producers"})," : les applications clientes qui \xe9crivent dans les topics.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Un producer communique avec Kafka via TCP, avec une connexion par broker node."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Consumers"})," : les applications clientes qui lisent des topics."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Le fonctionnement de Kafka se base sur des notions d’ordering venant de la th\xe9orie des ensembles (set theory).","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Le ",(0,i.jsx)(n.strong,{children:"total ordering"})," consiste \xe0 avoir un ensemble d’\xe9l\xe9ments dont une ",(0,i.jsx)(n.strong,{children:"seule configuration est possible"}),".","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["On peut l’illustrer avec un set de nombres entiers ",(0,i.jsx)(n.code,{children:"{ 2, 4, 6 }"}),". Si on enl\xe8ve l’\xe9l\xe9ment 4, puis qu’on le remet, il ne pourra qu’\xeatre \xe0 la 2\xe8me place, avant le 6 et apr\xe8s le 2."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Le ",(0,i.jsx)(n.strong,{children:"partial ordering"})," consiste \xe0 avoir un ensemble d’\xe9l\xe9ments ordonn\xe9s selon un crit\xe8re sp\xe9cifique, mais dont ",(0,i.jsx)(n.strong,{children:"plusieurs configurations sont possibles"})," pour satisfaire le crit\xe8re.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Par exemple, si on a des entiers qu’on veut ordonner de mani\xe8re \xe0 ce que le diviseur d’un nombre soit toujours apr\xe8s ce nombre, et qu’on a ",(0,i.jsx)(n.code,{children:"[ 2, 3, 4, 6, 9, 8 ]"}),", on peut tout autant les organiser en ",(0,i.jsx)(n.code,{children:"[ 3, 2, 6, 9, 4, 8 ]"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["La notion de ",(0,i.jsx)(n.strong,{children:"causal order"})," indique qu’on respecte le fait que certains \xe9l\xe9ments ont une relation ",(0,i.jsx)(n.em,{children:"happened-before"})," entre eux qui est respect\xe9e, quel que soit leur ordre d’arriv\xe9e \xe0 destination.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Cette notion vient de l’\xe9tude des syst\xe8mes distribu\xe9s (et non de la th\xe9orie des ensembles)."}),"\n",(0,i.jsx)(n.li,{children:"Elle est une forme de partial ordering."}),"\n",(0,i.jsx)(n.li,{children:"Elle est la cons\xe9quence du fait qu’il n’y ait pas d’horloge commune \xe0 l’ensemble des nœuds d’un syst\xe8me distribu\xe9, et que les events peuvent arriver dans le mauvais ordre."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Les ",(0,i.jsx)(n.strong,{children:"records"})," sont l’unit\xe9 principale de Kafka. Ils correspondent aux events.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Ils sont compos\xe9s :","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["D’attributs assez classiques : la ",(0,i.jsx)(n.em,{children:"value"})," qui peut \xeatre sous forme binaire, des ",(0,i.jsx)(n.em,{children:"headers"})," pour donner des m\xe9tadonn\xe9es, la ",(0,i.jsx)(n.em,{children:"partition"})," associ\xe9e au record, l’",(0,i.jsx)(n.em,{children:"offset"})," par rapport aux autres records de la partition, un ",(0,i.jsx)(n.em,{children:"timestamp"}),".","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["La combinaison ",(0,i.jsx)(n.em,{children:"partition"})," + ",(0,i.jsx)(n.em,{children:"offset"})," permet d’identifier un record de mani\xe8re unique."]}),"\n",(0,i.jsxs)(n.li,{children:["L’",(0,i.jsx)(n.em,{children:"offset"})," est une valeur enti\xe8re qui ne peut qu’augmenter, m\xeame s'il peut y avoir des gaps entre deux offsets qui se suivent."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["D’un champ binaire un peu plus inhabituel qui est la ",(0,i.jsx)(n.em,{children:"key"}),", et qui est utilis\xe9e par Kafka pour associer les records avec une m\xeame partition."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"Kafka est largement utilis\xe9 pour traiter des events \xe0 l’int\xe9rieur d’un bounded context, tout comme les events entre bounded contexts."}),"\n",(0,i.jsxs)(n.li,{children:["Il est aussi de plus en plus utilis\xe9 en remplacement des brokers traditionnels (",(0,i.jsx)(n.strong,{children:"RabbitMQ"}),", ",(0,i.jsx)(n.strong,{children:"ActiveMQ"}),", ",(0,i.jsx)(n.strong,{children:"AWS SQS/SNS"}),", ",(0,i.jsx)(n.strong,{children:"Google Cloud Pub/Sub"})," etc.). Dans ce cas, les records ne correspondent pas forc\xe9ment \xe0 des events, et on n’est pas forc\xe9ment dans de l’EDA."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Les ",(0,i.jsx)(n.strong,{children:"partitions"})," sont l’unit\xe9 de stream principale qui contiennent les records.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Les records d’une m\xeame partition sont ",(0,i.jsx)(n.em,{children:"totally ordered"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Les records publi\xe9s dans une partition par un m\xeame producer seront donc aussi ",(0,i.jsx)(n.em,{children:"causally ordered"})," (la pr\xe9c\xe9dence respect\xe9e).","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"En revanche, si plusieurs producers publient dans la m\xeame partition sans eux-m\xeames se synchroniser entre eux, les records de chaque producer seront causally ordered pour un m\xeame producer, mais ne le seront pas entre les producers (\xe7a d\xe9pendra de qui l’a emport\xe9 pour publier plus vite)."}),"\n",(0,i.jsx)(n.li,{children:"Publier dans plusieurs partitions ne r\xe8gle pas ce probl\xe8me : les records de chaque producer ne seront pas causally ordered. Si on veut un tel ordre, il faut un seul producer."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Les ",(0,i.jsx)(n.strong,{children:"topics"})," sont des unit\xe9s logiques qui regroupent des partitions.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Vu qu’il s’agit d’une union de partitions qui sont chacune ",(0,i.jsx)(n.em,{children:"totally ordered"}),", les topics peuvent \xeatre consid\xe9r\xe9s comme ",(0,i.jsx)(n.em,{children:"partially ordered"}),".","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"On peut donc \xe9crire dans les records de plusieurs partitions en parall\xe8le, et n’assurer que l’ordre des records dans chaque partition."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["On peut indiquer \xe0 la main la partition vers laquelle on veut publier un record, mais g\xe9n\xe9ralement on indique la key, qui sera hash\xe9e pour correspondre avec une partition donn\xe9e.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Dans le cas o\xf9 on ",(0,i.jsx)(n.strong,{children:"r\xe9duit le nombre de partitions"}),", les messages peuvent \xeatre ",(0,i.jsx)(n.strong,{children:"d\xe9truits"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Dans le cas o\xf9 on ",(0,i.jsx)(n.strong,{children:"augmente le nombre de partitions"}),", on peut ",(0,i.jsx)(n.strong,{children:"perdre l’ordre"})," qu’on voulait conserver avec nos keys, puisque la fonction de hash redirigera vers une autre partition."]}),"\n",(0,i.jsxs)(n.li,{children:["M\xeame si on a un nombre de partitions sup\xe9rieur au nombre de keys, il est possible que deux keys m\xe8nent vers la m\xeame partition.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"La seule chose qui est garantie, c’est qu’avec la m\xeame key, et si le nombre de partitions ne change pas, l’ordre sera respect\xe9."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Un consumer peut souscrire \xe0 un topic en tant que membre d’un ",(0,i.jsx)(n.strong,{children:"consumer group"}),", et b\xe9n\xe9ficier d’un m\xe9canisme de ",(0,i.jsx)(n.strong,{children:"load balancing"})," avec d’autres consumers.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Le 1er consumer qui souscrit se voit assigner toutes les partitions. Quand un 2\xe8me consumer souscrit au topic, il se voit assigner environ la moiti\xe9 des partitions qui \xe9taient assign\xe9es au 1er. et ainsi de suite."}),"\n",(0,i.jsxs)(n.li,{children:["Les consumers ne peuvent que lire les events sans impact sur eux.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Une des cons\xe9quences c’est qu’on peut en ajouter beaucoup sans stresser le cluster. Et c’est une des diff\xe9rences par rapport aux brokers classiques."}),"\n",(0,i.jsx)(n.li,{children:"Ils maintiennent les offsets de l\xe0 o\xf9 ils en sont pour chacune des partitions qu’ils sont en train de lire."}),"\n",(0,i.jsx)(n.li,{children:"Les consumers de diff\xe9rents consumer groups n’ont pas d’impact les uns sur les autres."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Kafka s’assure qu’il n’y a ",(0,i.jsx)(n.strong,{children:"qu’un consumer d’un m\xeame consumer group"})," qui peut lire dans une ",(0,i.jsx)(n.strong,{children:"m\xeame partition"}),".","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Si un consumer ne lit plus de messages jusqu’\xe0 d\xe9passer un timeout, Kafka assignera ses partitions \xe0 un autre consumer, consid\xe9r\xe9 comme sain, du m\xeame groupe."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Pour que Kafka puisse r\xe9assigner une partition \xe0 un autre consumer en gardant le bon offset, ou redonner le bon offset \xe0 un consumer qui se reconnecte apr\xe8s s’\xeatre d\xe9connect\xe9, il faut que ",(0,i.jsx)(n.strong,{children:"les consumers communiquent leurs offsets \xe0 Kafka"}),".","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["On appelle ce processus ",(0,i.jsx)(n.em,{children:"committing offsets"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["On peut avoir un contr\xf4le sur le ",(0,i.jsx)(n.strong,{children:"moment o\xf9 on va faire ce commit"}),", et donc agir sur la ",(0,i.jsx)(n.strong,{children:"garantie de delivery"})," des messages, c’est-\xe0-dire le fait qu’ils soient int\xe9gralement trait\xe9s.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["On peut passer d’une strat\xe9gie ",(0,i.jsx)(n.em,{children:"at-most-once"})," \xe0 une strat\xe9gie ",(0,i.jsx)(n.em,{children:"at-least-once"})," en faisant le commit apr\xe8s l’ex\xe9cution de la callback au lieu du moment o\xf9 le message est pris par le consumer."]}),"\n",(0,i.jsxs)(n.li,{children:["Par d\xe9faut, Kafka va faire un commit toutes les 5 secondes, sauf si un record est toujours en train d‘\xeatre ex\xe9cut\xe9, auquel cas il attendra la prochaine occasion 5 secondes plus tard.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["On peut r\xe9gler cette dur\xe9e de 5 secondes \xe0 une autre valeur avec la configuration ",(0,i.jsx)(n.code,{children:"auto.commit.interval.ms"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"\xc7a implique que si le record est ex\xe9cut\xe9, et que dans les quelques secondes apr\xe8s, le cluster bascule la partition sur un autre consumer, on risque de ne pas avoir commit\xe9 et de r\xe9ex\xe9cuter la callback du record dans le nouveau consumer."}),"\n",(0,i.jsxs)(n.li,{children:["Si on veut avoir le contr\xf4le sur le moment exact o\xf9 on veut faire le commit, on peut d\xe9sactiver le commit automatique (configuration ",(0,i.jsx)(n.code,{children:"enable.auto.commit"})," \xe0 ",(0,i.jsx)(n.code,{children:"false"}),"), et le faire \xe0 la main dans le consumer."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Le commit peut se faire via un canal in-memory asynchrone pour ne pas bloquer le consumer, avec la possibilit\xe9 de fournir une callback qui sera ex\xe9cut\xe9e par Kafka quand le commit aura \xe9t\xe9 pris en compte","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Ou alors le consumer peut aussi utiliser un appel synchrone pour le commit."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Un cas classique est de traiter les records avec une strat\xe9gie ",(0,i.jsx)(n.em,{children:"at-least-once"})," par batch, qu’on appelle ",(0,i.jsx)(n.em,{children:"poll-process loop"})," :","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Le consumer garde un buffer de records qu’il prefetch en arri\xe8re-plan."}),"\n",(0,i.jsx)(n.li,{children:"Il traite les records un par un (ou parfois en parall\xe8le avec un pool de threads si c’est OK d’un point de vue business)."}),"\n",(0,i.jsx)(n.li,{children:"Quand on arrive au dernier record, il fait le commit de l’offset."}),"\n",(0,i.jsx)(n.li,{children:"Puis il prend le batch suivant et recommence."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["M\xeame si c’est moins courant, il est possible de souscrire un consumer ",(0,i.jsx)(n.strong,{children:"sans qu’il soit membre d’un consumer group"}),".","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Dans ce cas, il ne b\xe9n\xe9ficiera pas des divers m\xe9canismes associ\xe9s aux consumer groups : load balancing, rebalancing en cas d’\xe9chec, d\xe9tection de l’\xe9chec par inactivit\xe9, persistance de l’offset.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Il devra indiquer les couples topic/partition auxquels il souscrit, et devra persister ses propres offsets lui-m\xeame dans un store."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Il peut y avoir deux cas d’usages :","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Le besoin d’avoir vraiment le contr\xf4le sur la mani\xe8re de consommer les messages, en stockant soi-m\xeame son offset etc.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Mais ce cas d’usage est tr\xe8s rare, et difficile \xe0 impl\xe9menter correctement."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Un consumer \xe9ph\xe9m\xe8re qui est l\xe0 juste pour monitorer ou d\xe9bugger un topic, sans avoir besoin de persister d’offsets.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"C’est ce que fait par exemple l’outil Kafdrop qui permet de visualiser les messages pr\xe9sents dans les partitions via une interface web : \xe0 chaque fois il attache un consumer sans groupe."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"4---installation",children:"4 - Installation"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Il y a 4 m\xe9thodes pour installer Kafka (et Zookeeper) :","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["En utilisant les images Docker.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Si on choisit une autre m\xe9thode que Docker, on aura juste besoin d’avoir d’avoir un JDK d’install\xe9."}),"\n",(0,i.jsx)(n.li,{children:"La m\xe9thode Kafka dans Docker est la plus imm\xe9diate pour avoir Kafka qui tourne, mais elle est aussi connue pour \xeatre difficile \xe0 configurer si on veut personnaliser."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"En utilisant un package manager (yum, apt, homebrew etc.)"}),"\n",(0,i.jsx)(n.li,{children:"En clonant le d\xe9p\xf4t git et en installant depuis les sources."}),"\n",(0,i.jsxs)(n.li,{children:["En t\xe9l\xe9chargeant des binaires sur le site de Kafka.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Il suffit de t\xe9l\xe9charger un tar.gz et de le d\xe9sarchiver, pour obtenir les ex\xe9cutables de Kafka qu’on peut lancer avec notre JDK."}),"\n",(0,i.jsx)(n.li,{children:"Le livre part l\xe0-dessus."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["La configuration de Kafka peut se faire en changeant les fichiers de conf dans le dossier ",(0,i.jsx)(n.code,{children:"config/"}),".","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"On peut voir les configs prises en compte dans les logs, \xe0 chaque fois qu’on d\xe9marre Kafka."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"5---getting-started",children:"5 - Getting Started"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["On a du tooling livr\xe9 avec Kafka sous forme de scripts shell pour le g\xe9rer en CLI.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"On peut par exemple cr\xe9er un topic puis y ajouter des records."}),"\n",(0,i.jsx)(n.li,{children:"On peut changer des offsets pour un consumer group."}),"\n",(0,i.jsx)(n.li,{children:"etc."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["L’auteur ",(0,i.jsx)(n.strong,{children:"d\xe9conseille de laisser Kafka cr\xe9er automatiquement les topics"})," (",(0,i.jsx)(n.code,{children:"auto.create.topics.enable"})," \xe0 ",(0,i.jsx)(n.code,{children:"true"}),") pour plusieurs raisons :","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Les valeurs par d\xe9faut de Kafka remontent \xe0 sa cr\xe9ation, et n’ont pas forc\xe9ment \xe9t\xe9 pens\xe9s pour l’usage qu’il a en g\xe9n\xe9ral aujourd’hui."}),"\n",(0,i.jsx)(n.li,{children:"Quand on cr\xe9e un topic, on devrait d\xe9cider du nombre de partitions en fonction des crit\xe8res de parall\xe9lisation. Donc un nombre par d\xe9faut ne va en g\xe9n\xe9ral pas \xeatre satisfaisant."}),"\n",(0,i.jsx)(n.li,{children:"La cr\xe9ation de topic \xe0 la lecture est encore plus probl\xe9matique, puisqu’on va avoir des lecteurs qui croient lire quelque chose et qui ne lisent rien."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Le ",(0,i.jsx)(n.em,{children:"lag"})," est la diff\xe9rence entre l’offset qui a \xe9t\xe9 commit\xe9 par un consumer sur une partition donn\xe9e et le ",(0,i.jsx)(n.em,{children:"high water mark"})," de la partition (c’est-\xe0-dire le dernier record dispo \xe0 la consommation)."]}),"\n",(0,i.jsxs)(n.li,{children:["La ",(0,i.jsx)(n.strong,{children:"suppression d’un topic est asynchrone"}),", c’est-\xe0-dire qu’elle sera effectivement r\xe9alis\xe9e quelque part dans le futur par Kafka, apr\xe8s qu’on l’ait demand\xe9e.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Pour nos ",(0,i.jsx)(n.strong,{children:"tests d’int\xe9gration"}),", il va donc falloir trouver des solutions :","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"1 - Supprimer le consumer group, les offsets enregistr\xe9s, ou mettre les offsets au high water mark (tous les trois ont le m\xeame effet)."}),"\n",(0,i.jsxs)(n.li,{children:["2 - Tronquer les partitions en avan\xe7ant le ",(0,i.jsx)(n.em,{children:"low water mark"})," (le record le plus ancien disponible \xe0 la consommation)."]}),"\n",(0,i.jsxs)(n.li,{children:["3 - Utiliser des noms de topics uniques, et les supprimer au fil de l’eau (si on ne les r\xe9utilise pas, le fait qu’ils soient supprim\xe9s de mani\xe8re asynchrone ne pose probl\xe8me).","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Cette derni\xe8re option est celle recommand\xe9e par l’auteur."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Supprimer les offsets pour un consumer group et sur un topic donn\xe9, fait que la prochaine fois que ces consumers voudront consommer le topic, ils seront par d\xe9faut assign\xe9s au dernier record.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Ou au premier en fonction de l’option ",(0,i.jsx)(n.code,{children:"auto.offset.reset"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"Si on supprimer un consumer group, c’est comme si on supprimait ses offsets pour l’ensemble des topics o\xf9 il avait consomm\xe9 des records."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["L’essentiel des classes du client Java se r\xe9sument \xe0 :","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["1 - L’interface ",(0,i.jsx)(n.code,{children:"Producer"}),", l’impl\xe9mentation ",(0,i.jsx)(n.code,{children:"KafkaProducer"}),", et la repr\xe9sentation du record ",(0,i.jsx)(n.code,{children:"ProducerRecord"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["2 - La m\xeame chose c\xf4t\xe9 consumer : ",(0,i.jsx)(n.code,{children:"Consumer"}),", ",(0,i.jsx)(n.code,{children:"KafkaConsumer"}),", ",(0,i.jsx)(n.code,{children:"ConsumerRecord"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"Et c’est \xe0 peu pr\xe8s la m\xeame chose pour les autres clients qui s’en inspirent."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["L’option ",(0,i.jsx)(n.code,{children:"enable.idempotence"})," \xe0 la cr\xe9ation du producer permet de garder des s\xe9quences pour les couples producer/partition, pour s’assurer qu’un record n’est pas publi\xe9 deux fois ou dans le mauvais ordre, dans le cas o\xf9 il y aurait un timeout pendant une publication.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"L’auteur conseille de l’activer."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"Il faut bien penser \xe0 fermer la connexion, sinon on risque de monopoliser des ressources c\xf4t\xe9 client et serveur."}),"\n"]})]})}n.default=(0,r.j)(a)}},function(e){e.O(0,[774,105,888,179],function(){return e(e.s=7382)}),_N_E=e.O()}]);