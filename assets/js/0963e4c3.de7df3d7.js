"use strict";(self.webpackChunkdeveloper_docs=self.webpackChunkdeveloper_docs||[]).push([[2310],{9993:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>d,metadata:()=>i,toc:()=>r});const i=JSON.parse('{"id":"git-guide/Git working/Stage changes/stage-additions","title":"Stage additions with git add","description":"To add changes to your staging area, use `git add `. Because `git add` is all about staging the changes you want to commit, you use it to add new files as well as files with changes to your staging area.","source":"@site/docs/git-guide/Git working/Stage changes/stage-additions.md","sourceDirName":"git-guide/Git working/Stage changes","slug":"/git-guide/Git working/Stage changes/stage-additions","permalink":"/docs/git-guide/Git working/Stage changes/stage-additions","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/git-guide/Git working/Stage changes/stage-additions.md","tags":[],"version":"current","frontMatter":{},"sidebar":"docs","previous":{"title":"Get status of working directory","permalink":"/docs/git-guide/Git working/Stage changes/status"},"next":{"title":"Stage deletions with git rm","permalink":"/docs/git-guide/Git working/Stage changes/stage-deletions"}}');var s=n(4848),a=n(8453);const d={},o="Stage additions with git add",c={},r=[];function g(e){const t={a:"a",code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsxs)(t.h1,{id:"stage-additions-with-git-add",children:["Stage additions with ",(0,s.jsx)(t.code,{children:"git add"})]})}),"\n",(0,s.jsxs)(t.p,{children:["To add changes to your staging area, use ",(0,s.jsx)(t.code,{children:"git add <filename>"}),". Because ",(0,s.jsx)(t.code,{children:"git add"})," is all about staging the changes you want to commit, you use it to add new files as well as files with changes to your staging area."]}),"\n",(0,s.jsxs)(t.p,{children:["Continuing our above example, after we run ",(0,s.jsx)(t.code,{children:"git add docs/introduction.md"}),", we'll see the following from ",(0,s.jsx)(t.code,{children:"git status"}),":"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'\nOn branch issue-178-docsissue\nChanges to be committed:\n  (use "git reset HEAD <file>..." to unstage)\n\n  new file:  docs/introduction.md\n\n'})}),"\n",(0,s.jsxs)(t.p,{children:["You can view the changes in files you have staged with ",(0,s.jsx)(t.code,{children:"git diff --cached"}),". To view changes to files you haven\u2019t yet staged, just ",(0,s.jsx)(t.code,{children:"use git diff"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["If you want to add all changes in the working directory, ",(0,s.jsx)(t.code,{children:"use git add -A"})," ",(0,s.jsx)(t.a,{href:"https://git-scm.com/docs/git-add",children:"(documentation)"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["If you stage a file, you can undo it with ",(0,s.jsx)(t.code,{children:"git reset HEAD <filename>"}),". Here\u2019s an example where we stage a file ",(0,s.jsx)(t.code,{children:"test2.md"})," and then unstage it:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'$ git add test2.md\nOn branch issue-234\nChanges to be commited:\n   (use "git reset HEAD <file>..." to unstage)\n\n   new file: test2.md\n\n$ git reset HEAD test2.md\n$ git status\nOn branch issue-234\nUntracked files:\n   (use "git add <file>..." to include in what will be commited)\n\n   test2.md\n\nnothing added to commit but untracked files present (use "git add" to track)\n'})})]})}function u(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(g,{...e})}):g(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>o});var i=n(6540);const s={},a=i.createContext(s);function d(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);