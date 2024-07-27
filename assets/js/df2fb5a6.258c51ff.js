"use strict";(self.webpackChunkstar_academy=self.webpackChunkstar_academy||[]).push([[4263],{1943:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var s=t(4848),r=t(8453);const i={title:"Full-Text Search",description:""},c=void 0,o={id:"software-engineering/phase02-full-text-search-project",title:"Full-Text Search",description:"",source:"@site/docs/software-engineering/phase02-full-text-search-project.md",sourceDirName:"software-engineering",slug:"/software-engineering/phase02-full-text-search-project",permalink:"/codestar-documents/docs/software-engineering/phase02-full-text-search-project",draft:!1,unlisted:!1,editUrl:"https://github.com/Star-Academy/codestar-documents/tree/master/docs/software-engineering/phase02-full-text-search-project.md",tags:[],version:"current",frontMatter:{title:"Full-Text Search",description:""},sidebar:"tutorialSidebar",previous:{title:"C#",permalink:"/codestar-documents/docs/software-engineering/phase01-c-sharp"},next:{title:"Clean Code",permalink:"/codestar-documents/docs/software-engineering/phase03-clean-code"}},l={},d=[{value:"\u0645\u0642\u062f\u0645\u0647",id:"\u0645\u0642\u062f\u0645\u0647",level:2},{value:"\u0622\u0634\u0646\u0627\u06cc\u06cc \u0628\u0627 \u0645\u0641\u0627\u0647\u06cc\u0645 \u0627\u0648\u0644\u06cc\u0647 \u062c\u0633\u062a\u062c\u0648\u06cc \u0645\u062a\u0646\u06cc",id:"\u0622\u0634\u0646\u0627\u06cc\u06cc-\u0628\u0627-\u0645\u0641\u0627\u0647\u06cc\u0645-\u0627\u0648\u0644\u06cc\u0647-\u062c\u0633\u062a\u062c\u0648\u06cc-\u0645\u062a\u0646\u06cc",level:2},{value:"\u062a\u0645\u0631\u06cc\u0646",id:"\u062a\u0645\u0631\u06cc\u0646",level:2},{value:"\u062a\u0645\u0631\u06cc\u0646 \u0627\u0648\u0644",id:"\u062a\u0645\u0631\u06cc\u0646-\u0627\u0648\u0644",level:3},{value:"\u062a\u0645\u0631\u06cc\u0646 \u062f\u0648\u0645",id:"\u062a\u0645\u0631\u06cc\u0646-\u062f\u0648\u0645",level:3},{value:"\u0645\u0637\u0627\u0644\u0639\u0647 \u0628\u06cc\u0634\u062a\u0631",id:"\u0645\u0637\u0627\u0644\u0639\u0647-\u0628\u06cc\u0634\u062a\u0631",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components},{Details:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"\u0645\u0642\u062f\u0645\u0647",children:"\u0645\u0642\u062f\u0645\u0647"}),"\n",(0,s.jsx)(n.p,{children:"\u062f\u0631 \u0627\u06cc\u0646 \u0628\u062e\u0634 \u0628\u0627 \u0645\u0641\u0627\u0647\u06cc\u0645 \u062c\u0633\u062a\u062c\u0648\u06cc \u0645\u062a\u0646\u06cc \u0622\u0634\u0646\u0627 \u0645\u06cc\u200c\u0634\u0648\u06cc\u062f \u0648 \u06cc\u06a9 \u0645\u0648\u062a\u0648\u0631 \u062c\u0633\u062a\u062c\u0648\u06cc \u0633\u0627\u062f\u0647 \u067e\u06cc\u0627\u062f\u0647\u200c\u0633\u0627\u0632\u06cc \u0645\u06cc\u200c\u06a9\u0646\u06cc\u062f \u06a9\u0647 \u0628\u062a\u0648\u0627\u0646\u062f \u062a\u0639\u062f\u0627\u062f\u06cc \u0633\u0646\u062f \u0645\u062a\u0646\u06cc \u0628\u0647\n\u0639\u0646\u0648\u0627\u0646 \u0648\u0631\u0648\u062f\u06cc \u0628\u06af\u06cc\u0631\u062f \u0648 \u0628\u0627 \u0627\u0646\u062c\u0627\u0645 \u067e\u0631\u062f\u0627\u0632\u0634\u200c\u0647\u0627\u06cc \u0644\u0627\u0632\u0645 \u0627\u0645\u06a9\u0627\u0646 \u062c\u0633\u062a\u062c\u0648\u06cc \u0633\u0631\u06cc\u0639 \u0631\u0648\u06cc \u0645\u062a\u0648\u0646 \u0631\u0627 \u0628\u0631\u0627\u06cc \u06a9\u0627\u0631\u0628\u0631 \u0641\u0631\u0627\u0647\u0645 \u06a9\u0646\u062f."}),"\n",(0,s.jsx)(n.h2,{id:"\u0622\u0634\u0646\u0627\u06cc\u06cc-\u0628\u0627-\u0645\u0641\u0627\u0647\u06cc\u0645-\u0627\u0648\u0644\u06cc\u0647-\u062c\u0633\u062a\u062c\u0648\u06cc-\u0645\u062a\u0646\u06cc",children:"\u0622\u0634\u0646\u0627\u06cc\u06cc \u0628\u0627 \u0645\u0641\u0627\u0647\u06cc\u0645 \u0627\u0648\u0644\u06cc\u0647 \u062c\u0633\u062a\u062c\u0648\u06cc \u0645\u062a\u0646\u06cc"}),"\n",(0,s.jsx)(n.p,{children:"\u0642\u0628\u0644 \u0627\u0632 \u0634\u0631\u0648\u0639 \u0645\u0637\u0627\u0644\u0639\u0647 \u0631\u0648\u06cc \u062f\u0648 \u0633\u0648\u0627\u0644 \u0632\u06cc\u0631 \u0641\u06a9\u0631 \u06a9\u0646\u06cc\u062f \u062a\u0627 \u0630\u0647\u0646 \u0634\u0645\u0627 \u0622\u0645\u0627\u062f\u0647 \u0634\u0648\u062f."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u0628\u0647 \u0631\u0648\u0632\u200c\u0647\u0627\u06cc \u0627\u0648\u0644 \u062a\u0634\u06a9\u06cc\u0644 \u0634\u0631\u06a9\u062a \u06af\u0648\u06af\u0644 \u0641\u06a9\u0631 \u06a9\u0646\u06cc\u062f\u060c \u0641\u0631\u0636 \u06a9\u0646\u06cc\u062f \u0645\u062a\u0646\u200c\u0647\u0627\u06cc \u0686\u0646\u062f \u0635\u062f \u0647\u0632\u0627\u0631 \u0635\u0641\u062d\u0647\u200c\u06cc \u0648\u0628 \u0631\u0627 \u062c\u0645\u0639 \u0622\u0648\u0631\u06cc \u06a9\u0631\u062f\u0647\u200c\u0627\u06cc\u062f \u0648 \u0645\u06cc\u200c\u062e\u0648\u0627\u0647\u06cc\u062f \u0628\u06cc\u0646\n\u0622\u0646 \u0635\u0641\u062d\u0627\u062a \u062c\u0633\u062a\u062c\u0648 \u06a9\u0646\u06cc\u062f. \u0686\u0647 \u0631\u0627\u0647 \u062d\u0644\u06cc \u0628\u0631\u0627\u06cc \u0627\u062c\u0631\u0627\u06cc \u06a9\u0648\u0626\u0631\u06cc \u0686\u0646\u062f \u06a9\u0644\u0645\u0647\u200c\u0627\u06cc \u06a9\u0627\u0631\u0628\u0631\u0627\u0646 \u0628\u06cc\u0646 \u0647\u0632\u0627\u0631\u0627\u0646 \u0635\u0641\u062d\u0647 \u0645\u062a\u0646 \u06a9\u0647 \u0627\u0632 \u0642\u0628\u0644 \u0622\u0645\u0627\u062f\u0647 \u0634\u062f\u0647 \u0627\u0633\u062a \u0628\u0647\n\u0630\u0647\u0646\u062a\u0627\u0646 \u0645\u06cc\u200c\u0631\u0633\u062f\u061f"}),"\n",(0,s.jsx)(n.li,{children:"\u0686\u0637\u0648\u0631 \u0645\u06cc\u200c\u0634\u0648\u062f \u0627\u06cc\u0646 \u062c\u0633\u062a\u062c\u0648 \u0631\u0627 \u0627\u0632 \u0645\u0631\u062a\u0628\u0647\u200c\u06cc \u06cc\u06a9 \u06cc\u0627 \u0647\u0645\u0627\u0646\n(O(1\n\u0627\u0646\u062c\u0627\u0645 \u062f\u0627\u062f\u061f"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u06cc\u06a9\u06cc \u0627\u0632 \u062f\u0627\u062f\u0647\u200c\u0633\u0627\u062e\u062a\u0627\u0631\u0647\u0627\u06cc\u06cc \u06a9\u0647 \u0628\u0631\u0627\u06cc \u067e\u06cc\u0627\u062f\u0647\u200c\u0633\u0627\u0632\u06cc \u0645\u0648\u062a\u0648\u0631 \u062c\u0633\u062a\u062c\u0648 \u0642\u0627\u0628\u0644\u200c\u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0633\u062a\u060c\nInverted Index\n\u0645\u06cc\u200c\u0628\u0627\u0634\u062f. \u0628\u0631\u0627\u06cc \u0622\u0634\u0646\u0627\u06cc\u06cc \u0628\u0627 \u0627\u06cc\u0646 \u062f\u0627\u062f\u0647 \u0633\u0627\u062e\u062a\u0627\u0631\n",(0,s.jsx)(n.a,{href:"https://www.geeksforgeeks.org/inverted-index/",children:"Inverted Index - GeeksforGeeks"}),"\n\u0631\u0627 \u0645\u0637\u0627\u0644\u0639\u0647 \u06a9\u0646\u06cc\u062f\u061b \u0633\u067e\u0633 \u0628\u0631\u0627\u06cc \u0641\u0647\u0645 \u0628\u0647\u062a\u0631 \u0648\u06cc\u062f\u0626\u0648\u06cc\n",(0,s.jsx)(n.a,{href:"https://www.youtube.com/watch?v=bnP6TsqyF30",children:"The Inverted Index"}),"\n\u0631\u0627 \u0645\u0634\u0627\u0647\u062f\u0647 \u0646\u0645\u0627\u06cc\u06cc\u062f."]}),"\n",(0,s.jsx)(n.h2,{id:"\u062a\u0645\u0631\u06cc\u0646",children:"\u062a\u0645\u0631\u06cc\u0646"}),"\n",(0,s.jsx)(n.h3,{id:"\u062a\u0645\u0631\u06cc\u0646-\u0627\u0648\u0644",children:"\u062a\u0645\u0631\u06cc\u0646 \u0627\u0648\u0644"}),"\n",(0,s.jsx)(n.p,{children:"\u0628\u0631\u0646\u0627\u0645\u0647\u200c\u0627\u06cc \u0628\u0647 \u0632\u0628\u0627\u0646\nC#\n\u0648 \u0628\u0627 \u0641\u0631\u06cc\u0645\u0648\u0631\u06a9\nDotnet\n\u0628\u0646\u0648\u06cc\u0633\u06cc\u062f \u06a9\u0647 \u062a\u0639\u062f\u0627\u062f\u06cc\nDocument\n\u0631\u0627 \u0628\u062e\u0648\u0627\u0646\u062f \u0648 \u0627\u0632 \u0631\u0648\u06cc \u0622\u0646\u200c\u0647\u0627 \u06cc\u06a9\nInverted Index\n\u0628\u0633\u0627\u0632\u062f\u061b\n\u0633\u067e\u0633 \u062f\u0631\nConsole\n\u0627\u0632 \u06a9\u0627\u0631\u0628\u0631 \u06cc\u06a9 \u06a9\u0644\u0645\u0647 \u0628\u0647 \u0639\u0646\u0648\u0627\u0646 \u0648\u0631\u0648\u062f\u06cc \u0628\u06af\u06cc\u0631\u062f \u0648 \u0646\u0627\u0645\nDocument\u0647\u0627\u06cc\u06cc\n\u06a9\u0647 \u0634\u0627\u0645\u0644 \u0622\u0646 \u06a9\u0644\u0645\u0647 \u0647\u0633\u062a\u0646\u062f \u0631\u0627 \u0686\u0627\u067e \u06a9\u0646\u062f."}),"\n",(0,s.jsx)(n.admonition,{title:"\u200c",type:"tip",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u067e\u06cc\u0634\u0646\u0647\u0627\u062f \u0645\u06cc\u200c\u06a9\u0646\u06cc\u0645 \u0627\u0632\n",(0,s.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:t(3679).A+"",children:"The 20 Newsgroups Dataset"}),"\n\u0628\u0631\u0627\u06cc \u062a\u0633\u062a \u0628\u0631\u0646\u0627\u0645\u0647 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u062f."]}),"\n",(0,s.jsxs)(n.li,{children:["\u067e\u06cc\u0634\u0646\u0647\u0627\u062f \u0645\u06cc\u200c\u06a9\u0646\u06cc\u0645 \u0628\u0631\u0627\u06cc \u0628\u0627\u0644\u0627 \u0628\u0631\u062f\u0646 \u062f\u0642\u062a \u062c\u0633\u062a\u062c\u0648 \u062a\u0645\u0627\u0645\nDocument\u0647\u0627\u06cc\n\u0648\u0631\u0648\u062f\u06cc\n\u0631\u0627\n",(0,s.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/dotnet/fundamentals/code-analysis/quality-rules/ca1308#rule-description",children:"Uppercase"}),"\n\u06a9\u0646\u06cc\u062f."]}),"\n"]})}),"\n",(0,s.jsx)(n.h3,{id:"\u062a\u0645\u0631\u06cc\u0646-\u062f\u0648\u0645",children:"\u062a\u0645\u0631\u06cc\u0646 \u062f\u0648\u0645"}),"\n",(0,s.jsx)(n.p,{children:"\u0628\u0631\u0646\u0627\u0645\u0647\u200c\u0627\u06cc \u06a9\u0647 \u062f\u0631 \u062a\u0645\u0631\u06cc\u0646 \u0642\u0628\u0644 \u0646\u0648\u0634\u062a\u06cc\u062f \u0631\u0627 \u0628\u0647 \u0646\u062d\u0648\u06cc \u062a\u0648\u0633\u0639\u0647 \u062f\u0647\u06cc\u062f \u06a9\u0647 \u0633\u0647 \u0646\u0648\u0639 \u0648\u0631\u0648\u062f\u06cc \u0627\u0632 \u06a9\u0627\u0631\u0628\u0631 \u0628\u06af\u06cc\u0631\u062f:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\u06a9\u0644\u0645\u0627\u062a\u06cc \u06a9\u0647 \u062d\u062a\u0645\u0627 \u0628\u0627\u06cc\u062f \u062f\u0631 \u0646\u062a\u06cc\u062c\u0647 \u0648\u062c\u0648\u062f \u062f\u0627\u0634\u062a\u0647 \u0628\u0627\u0634\u0646\u062f. \u0627\u06cc\u0646 \u06a9\u0644\u0645\u0627\u062a \u067e\u06cc\u0634\u0648\u0646\u062f\u06cc \u0646\u062f\u0627\u0631\u0646\u062f."}),"\n",(0,s.jsxs)(n.li,{children:["\u06a9\u0644\u0645\u0627\u062a\u06cc \u06a9\u0647 \u062d\u062f\u0627\u0642\u0644 \u06cc\u06a9\u06cc \u0627\u0632 \u0622\u0646\u200c\u0647\u0627 \u0628\u0627\u06cc\u062f \u062f\u0631 \u0646\u062a\u06cc\u062c\u0647 \u0648\u062c\u0648\u062f \u062f\u0627\u0634\u062a\u0647 \u0628\u0627\u0634\u0646\u062f. \u0627\u06cc\u0646 \u06a9\u0644\u0645\u0627\u062a \u0628\u0627 \u067e\u06cc\u0634\u0648\u0646\u062f ",(0,s.jsx)(n.code,{children:"+"})," \u0645\u0634\u062e\u0635 \u0645\u06cc\u200c\u0634\u0648\u0646\u062f."]}),"\n",(0,s.jsxs)(n.li,{children:["\u06a9\u0644\u0645\u0627\u062a\u06cc \u06a9\u0647 \u0646\u0628\u0627\u06cc\u062f \u062f\u0631 \u0646\u062a\u06cc\u062c\u0647 \u0648\u062c\u0648\u062f \u062f\u0627\u0634\u062a\u0647 \u0628\u0627\u0634\u0646\u062f. \u0627\u06cc\u0646 \u06a9\u0644\u0645\u0627\u062a \u0628\u0627 \u067e\u06cc\u0634\u0648\u0646\u062f ",(0,s.jsx)(n.code,{children:"-"})," \u0645\u0634\u062e\u0635 \u0645\u06cc\u200c\u0634\u0648\u0646\u062f."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"\u0648\u0631\u0648\u062f\u06cc \u0646\u0648\u0639 \u0627\u0648\u0644 \u0645\u0627\u0646\u0646\u062f\nAnd\u060c\n\u0646\u0648\u0639 \u062f\u0648\u0645 \u0645\u0627\u0646\u0646\u062f\nOr\n\u0648 \u0646\u0648\u0639 \u0633\u0648\u0645 \u0645\u0627\u0646\u0646\u062f\nNot\n\u0645\u06cc\u200c\u0628\u0627\u0634\u062f."})}),"\n",(0,s.jsxs)(i,{children:[(0,s.jsx)("summary",{children:"\u0645\u062b\u0627\u0644"}),(0,s.jsxs)("div",{children:[(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"get help +illness +disease -cough\n"})}),(0,s.jsxs)(n.p,{children:["\u0628\u0627 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632\nQuery\n\u0628\u0627\u0644\u0627 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u0645\nDocument\u0647\u0627\u06cc\u06cc\n\u0631\u0627 \u067e\u06cc\u062f\u0627 \u06a9\u0646\u06cc\u0645 \u06a9\u0647 \u062d\u062a\u0645\u0627\u064b \u0634\u0627\u0645\u0644 \u0639\u0628\u0627\u0631\u0627\u062a\n",(0,s.jsx)(n.code,{children:"get"}),"\n\u0648\n",(0,s.jsx)(n.code,{children:"help"}),"\n\u0648 \u0647\u0645\u0686\u0646\u06cc\u0646 \u062d\u062f\u0627\u0642\u0644 \u06cc\u06a9\u06cc \u0627\u0632 \u0639\u0628\u0627\u0631\u0627\u062a\n",(0,s.jsx)(n.code,{children:"illness"}),"\n\u0648\n",(0,s.jsx)(n.code,{children:"disease"}),"\n\u0628\u0627\u0634\u0646\u062f \u0648 \u0634\u0627\u0645\u0644 \u0639\u0628\u0627\u0631\u062a\n",(0,s.jsx)(n.code,{children:"cough"}),"\n\u0646\u0628\u0627\u0634\u0646\u062f."]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"\u0645\u0637\u0627\u0644\u0639\u0647-\u0628\u06cc\u0634\u062a\u0631",children:"\u0645\u0637\u0627\u0644\u0639\u0647 \u0628\u06cc\u0634\u062a\u0631"}),"\n",(0,s.jsxs)(n.p,{children:["\u0628\u0631\u0627\u06cc \u0622\u0634\u0646\u0627\u06cc\u06cc \u0628\u06cc\u0634\u062a\u0631 \u0628\u0627 \u0646\u062d\u0648\u06c0 \u06a9\u0627\u0631 \u0645\u0648\u062a\u0648\u0631\u200c\u0647\u0627\u06cc \u062c\u0633\u062a\u062c\u0648 \u062f\u06cc\u062f\u0646 \u0648\u06cc\u062f\u0626\u0648\u06cc\n",(0,s.jsx)(n.a,{href:"https://www.youtube.com/watch?v=CeGtqouT8eA",children:"How Google searches one document among Billions of documents quickly"}),"\n\u062a\u0648\u0635\u06cc\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f."]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},3679:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/files/the-20-newsgroups-b28960092a8cf8e833bba736d4f3d433.zip"},8453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>o});var s=t(6540);const r={},i=s.createContext(r);function c(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);