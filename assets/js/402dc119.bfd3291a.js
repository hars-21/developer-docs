"use strict";(self.webpackChunkdeveloper_docs=self.webpackChunkdeveloper_docs||[]).push([[9435],{4954:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>l,frontMatter:()=>s,metadata:()=>n,toc:()=>a});const n=JSON.parse('{"id":"git-guide/Git working/Stage changes/stage-deletions","title":"Stage deletions with git rm","description":"To remove existing files from your repository, use `git rm` documentation. This command can either stage the file for removal from your repository AND delete it from your working directory or just stage the file for deletion and leave it in your working directory.","source":"@site/docs/git-guide/Git working/Stage changes/stage-deletions.md","sourceDirName":"git-guide/Git working/Stage changes","slug":"/git-guide/Git working/Stage changes/stage-deletions","permalink":"/docs/git-guide/Git working/Stage changes/stage-deletions","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/git-guide/Git working/Stage changes/stage-deletions.md","tags":[],"version":"current","frontMatter":{},"sidebar":"docs","previous":{"title":"Stage additions with git add","permalink":"/docs/git-guide/Git working/Stage changes/stage-additions"},"next":{"title":"Commit changes","permalink":"/docs/git-guide/Git working/commit-changes"}}');var o=i(4848),r=i(8453);const s={},d="Stage deletions with git rm",c={},a=[];function g(e){const t={a:"a",code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"stage-deletions-with-git-rm",children:"Stage deletions with git rm"})}),"\n",(0,o.jsxs)(t.p,{children:["To remove existing files from your repository, use ",(0,o.jsx)(t.code,{children:"git rm"})," ",(0,o.jsx)(t.a,{href:"https://git-scm.com/docs/git-rm",children:"documentation"}),". This command can either stage the file for removal from your repository AND delete it from your working directory or just stage the file for deletion and leave it in your working directory."]}),"\n",(0,o.jsxs)(t.p,{children:["To stage a file for deletion and remove it from your working directory, ",(0,o.jsx)(t.code,{children:"use git rm <filename>"}),":"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"$ git rm --cached test4.md\nrm 'test4.md'\n\n$ git status\nOn branch issue-100\nChanges to be commited:\n   (use \"git reset HEAD <file>...\" to unstage)\n\n   deleted: test4.md\n\n$ ls test4.md\ntest4.md   \n\n"})}),"\n",(0,o.jsxs)(t.p,{children:["If you stage a file for deletion with the ",(0,o.jsx)(t.code,{children:"--cached option"}),", and haven\u2019t yet run ",(0,o.jsx)(t.code,{children:"git commit"}),", you can undo it with ",(0,o.jsx)(t.code,{children:"git reset HEAD <filename>"}),":"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"$ git reset HEAD test4.md \n"})}),"\n",(0,o.jsxs)(t.p,{children:["Unfortunately, you can\u2019t restore a file deleted with ",(0,o.jsx)(t.code,{children:"git rm"})," if you didn\u2019t use the ",(0,o.jsx)(t.code,{children:"--cache"})," option. However, ",(0,o.jsx)(t.code,{children:"git rm"})," only deletes files it knows about. Files you have never added to Git won\u2019t be deleted."]})]})}function l(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(g,{...e})}):g(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>s,x:()=>d});var n=i(6540);const o={},r=n.createContext(o);function s(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);