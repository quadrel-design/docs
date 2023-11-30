(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9],{6847:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/books/effective-typescript",function(){return n(5917)}])},5917:function(e,s,n){"use strict";n.r(s),n.d(s,{__toc:function(){return l}});var t=n(5893),i=n(2673),r=n(2643);let l=[{depth:2,value:"1 - Getting to Know TypeScript",id:"1---getting-to-know-typescript"},{depth:3,value:"Item 1 : Understand the Relationship Between TypeScript and JavaScript",id:"item-1--understand-the-relationship-between-typescript-and-javascript"},{depth:3,value:"Item 2 : Know Which TypeScript Options You’re Using",id:"item-2--know-which-typescript-options-youre-using"},{depth:3,value:"Item 3 : Understand That Code Generation Is Independent of Types",id:"item-3--understand-that-code-generation-is-independent-of-types"},{depth:3,value:"Item 4 : Get Comfortable with Structural Typing",id:"item-4--get-comfortable-with-structural-typing"},{depth:3,value:"Item 5 : Limit Use of the any Type",id:"item-5--limit-use-of-the-any-type"},{depth:3,value:"Item 6 : Use Your Editor to Interrogate and Explore the Type System",id:"item-6--use-your-editor-to-interrogate-and-explore-the-type-system"},{depth:3,value:"Item 7 : Think of Types as Sets of Values",id:"item-7--think-of-types-as-sets-of-values"}];function o(e){let s=Object.assign({h1:"h1",h2:"h2",h3:"h3",ul:"ul",li:"li",strong:"strong",code:"code",em:"em",p:"p",pre:"pre",span:"span"},(0,r.a)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{children:"Effective TypeScript"}),"\n",(0,t.jsx)(s.h2,{id:"1---getting-to-know-typescript",children:"1 - Getting to Know TypeScript"}),"\n",(0,t.jsx)(s.h3,{id:"item-1--understand-the-relationship-between-typescript-and-javascript",children:"Item 1 : Understand the Relationship Between TypeScript and JavaScript"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Tout programme JavaScript est un programme TypeScript, mais l’inverse n’est pas vrai."}),"\n",(0,t.jsx)(s.li,{children:"Le transpiler TypeScript indique des probl\xe8mes y compris sur du code JavaScript pur."}),"\n",(0,t.jsxs)(s.li,{children:["Il y a une ",(0,t.jsx)(s.strong,{children:"diff\xe9rence entre transpiler et type-checker"})," du code.\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Le type-check est plus strict, et ne laisse pas passer certaines des bizarreries de JavaScript."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"item-2--know-which-typescript-options-youre-using",children:"Item 2 : Know Which TypeScript Options You’re Using"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["On a la possibilit\xe9 de choisir des options pour le type-checker. Parmi les plus importants que l’auteur conseille d’activer :\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"noImplicitAny"})," : on emp\xeache l’inf\xe9rence automatique de type ",(0,t.jsx)(s.code,{children:"any"}),". Les ",(0,t.jsx)(s.code,{children:"any"})," ne seront autoris\xe9s que s’ils sont explicitement \xe9crits."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"strictNullChecks"})," : on emp\xeache l’assignation de ",(0,t.jsx)(s.code,{children:"null"})," et d’",(0,t.jsx)(s.code,{children:"undefined"})," \xe0 n’importe quelle variable, sauf si on le d\xe9finit explicitement.\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Par exemple, on n’aura plus le droit de faire ",(0,t.jsx)(s.code,{children:"const x: number = null;"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:["Ca aide \xe0 rep\xe9rer les cas o\xf9 on va avoir une erreur ",(0,t.jsx)(s.em,{children:"“Cannot read properties on undefined”"})," au runtime."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"strict"})," : emp\xeache la plupart des erreurs runtime que TypeScript peut \xe9viter, et inclut les deux autres."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"item-3--understand-that-code-generation-is-independent-of-types",children:"Item 3 : Understand That Code Generation Is Independent of Types"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Le type-checking et la transpilation sont ",(0,t.jsx)(s.strong,{children:"ind\xe9pendants"}),". On peut tout \xe0 fait transpiler avec ",(0,t.jsx)(s.em,{children:"tsc"})," du code qui a des erreurs au type-checker."]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Un des avantages c’est qu’on peut ex\xe9cuter le code avant m\xeame d’avoir fix\xe9 toutes les erreurs de type."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Les types disparaissent et n’ont ",(0,t.jsx)(s.strong,{children:"aucun impact au runtime"}),"."]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Pour faire du type-checking au runtime, il faut se baser sur des objets JavaScript : par exemple des classes."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Les ",(0,t.jsx)(s.em,{children:"tagged unions"})," sont aussi courants :"]}),"\n",(0,t.jsx)(s.pre,{"data-language":"typescript","data-theme":"default",children:(0,t.jsxs)(s.code,{"data-language":"typescript","data-theme":"default",children:[(0,t.jsxs)(s.span,{className:"line",children:[(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"interface"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"Square"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,t.jsxs)(s.span,{className:"line",children:[(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  kind"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"square"'}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,t.jsxs)(s.span,{className:"line",children:[(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  width"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"number"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,t.jsx)(s.span,{className:"line",children:(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,t.jsxs)(s.span,{className:"line",children:[(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"interface"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"Rectangle"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,t.jsxs)(s.span,{className:"line",children:[(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  kind"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"rectandle"'}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,t.jsxs)(s.span,{className:"line",children:[(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  width"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"number"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,t.jsxs)(s.span,{className:"line",children:[(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  height"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"number"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,t.jsx)(s.span,{className:"line",children:(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,t.jsxs)(s.span,{className:"line",children:[(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"type"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"Shape"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"Square"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"|"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"Rectangle"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,t.jsx)(s.span,{className:"line",children:" "}),"\n",(0,t.jsxs)(s.span,{className:"line",children:[(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"calculateArea"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(shape"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"Shape"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:") {"})]}),"\n",(0,t.jsxs)(s.span,{className:"line",children:[(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"if"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"shape"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:".kind "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"==="}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"rectangle"'}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:") {"})]}),"\n",(0,t.jsx)(s.span,{className:"line",children:(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// [...]"})})]})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"item-4--get-comfortable-with-structural-typing",children:"Item 4 : Get Comfortable with Structural Typing"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Le typage de TypeScript est ",(0,t.jsx)(s.strong,{children:"structurel"}),". Ca veut dire qu’une valeur avec un type structurellement compatible sera accept\xe9e, m\xeame si le type n’est pas exactement le m\xeame.\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"En pratique, \xe7a veut surtout dire qu’un objet qui a des attributs suppl\xe9mentaires pourra \xeatre pass\xe9 l\xe0 o\xf9 on attendait un objet avec moins d’attributs."}),"\n",(0,t.jsxs)(s.li,{children:["C’est pour cette raison par exemple qu’",(0,t.jsx)(s.code,{children:"Object.keys(v)"})," ne renvoie pas le type des keys de l’objet mais des strings : ",(0,t.jsx)(s.strong,{children:"on n’est pas s\xfbr qu’il n’y ait pas des attributs en plus"}),"."]}),"\n",(0,t.jsx)(s.li,{children:"Ca s’applique aussi aux classes : attendre un type d’une classe ne garantit pas qu’on n’aura pas un objet custom ou une autre classe qui a au moins les m\xeames attributs et \xe9ventuellement d’autres en plus."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.h3,{id:"item-5--limit-use-of-the-any-type",children:["Item 5 : Limit Use of the ",(0,t.jsx)(s.code,{children:"any"})," Type"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["L’utilisation d’",(0,t.jsx)(s.code,{children:"any"})," ou d’",(0,t.jsx)(s.code,{children:"as any"})," permet de ",(0,t.jsx)(s.strong,{children:"d\xe9sactiver le type-checking"}),", il faut l’\xe9viter au maximum.\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Il permet de “casser les contrats”, par exemple une fonction attendant un type pr\xe9cis acceptera quand m\xeame un objet qu’on a typ\xe9 ",(0,t.jsx)(s.code,{children:"any"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:["Il emp\xeache l’autocompl\xe9tion, et m\xeame le ",(0,t.jsx)(s.strong,{children:"renommage automatique d’attribut"})," (si une variable est marqu\xe9e comme ",(0,t.jsx)(s.code,{children:"any"}),", l’\xe9diteur ne pourra pas savoir qu’il faut renommer un de ses attributs)."]}),"\n",(0,t.jsx)(s.li,{children:"Il sape la confiance dans le type system."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"item-6--use-your-editor-to-interrogate-and-explore-the-type-system",children:"Item 6 : Use Your Editor to Interrogate and Explore the Type System"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"TypeScript fournit un compilateur (tsc), mais aussi un serveur standalone (tsserver) permettant notamment de faire de l’introspection de types. C’est \xe7a qui est utilis\xe9 par l’\xe9diteur."}),"\n",(0,t.jsx)(s.li,{children:"Il ne faut pas h\xe9siter \xe0 passer la souris sur un appel de fonction dans une cha\xeene d’appels pour conna\xeetre les types inf\xe9r\xe9s \xe0 ce moment-l\xe0."}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"item-7--think-of-types-as-sets-of-values",children:"Item 7 : Think of Types as Sets of Values"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Le typage de TypeScript peut \xeatre ",(0,t.jsx)(s.strong,{children:"interpr\xe9t\xe9 comme un set de types"}),".\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"never"})," est le set vide."]}),"\n",(0,t.jsx)(s.li,{children:"Un litt\xe9ral contient une seule valeur dans le set."}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"A | B"})," r\xe9alise l’union entre A et B."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"A & B"})," r\xe9alise l’intersection entre A et B.\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"&"})," entre deux objets permet d’obtenir le type d’un objet avec l’ensemble des attributs des deux.\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Exemple :\n",(0,t.jsx)(s.pre,{"data-language":"typescript","data-theme":"default",children:(0,t.jsxs)(s.code,{"data-language":"typescript","data-theme":"default",children:[(0,t.jsxs)(s.span,{className:"line",children:[(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"interface"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"Person"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,t.jsxs)(s.span,{className:"line",children:[(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  name"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"string"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,t.jsx)(s.span,{className:"line",children:(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,t.jsxs)(s.span,{className:"line",children:[(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"interface"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"Lifespan"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,t.jsxs)(s.span,{className:"line",children:[(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  birth"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"Date"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,t.jsxs)(s.span,{className:"line",children:[(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  death"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"?:"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"Date"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,t.jsx)(s.span,{className:"line",children:(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,t.jsxs)(s.span,{className:"line",children:[(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"type"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"PersonSpan"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"Person"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"&"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"Lifespan"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]})]})}),"\n"]}),"\n",(0,t.jsx)(s.li,{children:"C’est le cas parce qu’on peut ajouter autant d’attributs en plus qu’on veut, vu que c’est du structural typing. Donc l’intersection se trouve \xeatre un objet avec les propri\xe9t\xe9s des deux obligatoirement (sinon ce ne serait pas une intersection), et d’autres propri\xe9t\xe9s non indiqu\xe9es optionnellement."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["Pour assigner une valeur \xe0 une variable, il faut que tous les \xe9l\xe9ments du set du type de la valeur soient contenus dans le type de la variable.\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"extends"})," permet d’indiquer la m\xeame chose : tous les \xe9l\xe9ments du type qui \xe9tait doivent \xeatre inclus dans le type qui est \xe9tendu."]}),"\n"]}),"\n"]}),"\n"]})]})}s.default=(0,i.j)({MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,r.a)(),e.components);return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(o,{...e})}):o(e)},pageOpts:{filePath:"pages/books/effective-typescript.md",route:"/books/effective-typescript",title:"Effective TypeScript",headings:l},pageNextRoute:"/books/effective-typescript"})}},function(e){e.O(0,[673,774,888,179],function(){return e(e.s=6847)}),_N_E=e.O()}]);