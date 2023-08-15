(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[938],{4668:function(s,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/books/grokking-algorithms",function(){return r(6350)}])},6350:function(s,e,r){"use strict";r.r(e);var l=r(5893),n=r(2673),o=r(1151);function i(s){let e=Object.assign({h1:"h1",h2:"h2",ul:"ul",li:"li",strong:"strong",code:"code",pre:"pre",span:"span",em:"em"},(0,o.ah)(),s.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h1,{id:"grokking-algorithms",children:"Grokking algorithms"}),"\n",(0,l.jsx)(e.h2,{id:"1--introduction-to-algorithms",children:"1\xa0- Introduction to algorithms"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["Le ",(0,l.jsx)(e.strong,{children:"binary search"})," consiste \xe0 faire de la dichotomie : on coupe \xe0 chaque fois en deux pour \xe9liminer la moiti\xe9 des \xe9l\xe9ments restants.","\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["La time complexity est en ",(0,l.jsx)(e.code,{children:"O(log(n))"}),"."]}),"\n",(0,l.jsxs)(e.li,{children:["Il faut que le tableau qu’on a soit ",(0,l.jsx)(e.strong,{children:"tri\xe9"}),"."]}),"\n",(0,l.jsxs)(e.li,{children:["Code :","\n",(0,l.jsx)(e.pre,{"data-language":"typescript","data-theme":"default",children:(0,l.jsxs)(e.code,{"data-language":"typescript","data-theme":"default",children:[(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"binarySearch"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(array"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"number"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"[]"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" target"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"number"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:") {"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"let"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" left "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"0"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"let"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" right "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"array"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"."}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"length"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"-"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"while"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" (left "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"<="}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" right) {"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"middle"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"Math"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".floor"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(left "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"+"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" right);"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"current"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" array[middle];"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"if"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" (current "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"==="}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" target) {"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" current;"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    } "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"else"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"if"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" (current "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:">"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" target) {"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      right "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" middle "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"-"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    } "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"else"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      left "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" middle "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"-"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    }"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  }"})}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"null"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"La boucle s’arr\xeate quand on a atteint le dernier \xe9l\xe9ment possible, et dans ce cas soit c’est lui, soit il n’existe pas."}),"\n",(0,l.jsx)(e.li,{children:"A chaque fois qu’on tombe sur le mauvais \xe9l\xe9ment, on repart du milieu + 1, ou milieu - 1 selon que l’\xe9l\xe9ment du milieu est plus petit ou plus grand."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["La ",(0,l.jsx)(e.strong,{children:"time complexity"})," repr\xe9sente le nombre d’\xe9tapes d’un algorithme quand le nombre d’\xe9l\xe9ments ",(0,l.jsx)(e.em,{children:"n"})," devient tr\xe8s grand. C’est la mani\xe8re dont le nombre d’\xe9tapes va augmenter par rapport \xe0 ",(0,l.jsx)(e.em,{children:"n"}),".","\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["On utilise en g\xe9n\xe9ral la notation ",(0,l.jsx)(e.code,{children:"O()"})," pour le ",(0,l.jsx)(e.em,{children:"worst case scenario"}),"."]}),"\n",(0,l.jsxs)(e.li,{children:["Les complexit\xe9s les plus courantes sont :","\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"O(log(n))"})," : le binary search."]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"O(n)"})," : la recherche par brute force dans un tableau."]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"O(n * log(n))"})," : le tri avec ",(0,l.jsx)(e.em,{children:"quicksort"}),"."]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"O(n\xb2)"})," : le tri ",(0,l.jsx)(e.em,{children:"selection sort"}),"."]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"O(n!)"})," : l’algorithme ",(0,l.jsx)(e.em,{children:"traveling salesperson"}),".","\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["Un vendeur veut visiter un nombre ",(0,l.jsx)(e.em,{children:"n"})," de villes de mani\xe8re \xe0 minimiser son trajet."]}),"\n",(0,l.jsxs)(e.li,{children:["Il faut \xe0 chaque fois qu’il essaye l’ensemble des permutations possibles pour savoir quel trajet global est le plus court, et \xe7a fait ",(0,l.jsx)(e.em,{children:"n!"})," permutations \xe0 tester."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}r(5675),e.default=(0,n.j)({MDXContent:function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,o.ah)(),s.components);return e?(0,l.jsx)(e,{...s,children:(0,l.jsx)(i,{...s})}):i(s)},pageOpts:{filePath:"pages/books/grokking-algorithms.md",route:"/books/grokking-algorithms",headings:[{depth:1,value:"Grokking algorithms",id:"grokking-algorithms"},{depth:2,value:"1\xa0- Introduction to algorithms",id:"1--introduction-to-algorithms"}],title:"Grokking algorithms"},pageNextRoute:"/books/grokking-algorithms"})}},function(s){s.O(0,[673,774,888,179],function(){return s(s.s=4668)}),_N_E=s.O()}]);