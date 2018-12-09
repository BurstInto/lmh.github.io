(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{77:function(e,t,s){"use strict";s.r(t);var a={props:["slot-key"],mounted(){this.$nextTick(function(){this.$vuepress.$emit("AsyncMarkdownContentMounted",this.slotKey)})}},i=s(1),o=Object(i.a)(a,function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.slotKey}},[s("h1",{attrs:{id:"_3-远程仓库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-远程仓库","aria-hidden":"true"}},[e._v("#")]),e._v(" 3. 远程仓库")]),e._v(" "),s("ul",[s("li",[e._v("生成SSH Key")])]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('ssh-keygen -t rsa -C "youremail@example.com"\n')])])]),s("ul",[s("li",[e._v("上传公钥")])]),e._v(" "),s("blockquote",[s("p",[e._v("如果一切顺利的话，可以在用户主目录里找到"),s("code",[e._v(".ssh")]),e._v("目录，里面有"),s("code",[e._v("id_rsa")]),e._v("和"),s("code",[e._v("id_rsa.pub")]),e._v("两个文件，这两个就是SSH Key的秘钥对，"),s("code",[e._v("id_rsa")]),e._v("是私钥，不能泄露出去，"),s("code",[e._v("id_rsa.pub")]),e._v("是公钥，可以放心地告诉任何人")])]),e._v(" "),s("blockquote",[s("ul",[s("li",[e._v("登陆GitHub，打开“Account settings”，“SSH Keys”页面")]),e._v(" "),s("li",[e._v("点“Add SSH Key”，填上任意Title，在Key文本框里粘贴"),s("code",[e._v("id_rsa.pub")]),e._v("文件的内容")])])]),e._v(" "),s("h2",{attrs:{id:"添加远程仓库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#添加远程仓库","aria-hidden":"true"}},[e._v("#")]),e._v(" 添加远程仓库")]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("$ git remote add origin git@github.com:metokk/learngit.git\n")])])]),s("ul",[s("li",[e._v("添加后，远程库的名字就是"),s("code",[e._v("origin")]),e._v("，这是Git默认的叫法，也可以改成别的，但是"),s("code",[e._v("origin")]),e._v("这个名字一看就知道是远程库")])]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("$ git push -u origin master\nCounting objects: 20, done.\nDelta compression using up to 4 threads.\nCompressing objects: 100% (15/15), done.\nWriting objects: 100% (20/20), 1.64 KiB | 560.00 KiB/s, done.\nTotal 20 (delta 5), reused 0 (delta 0)\nremote: Resolving deltas: 100% (5/5), done.\nTo github.com:michaelliao/learngit.git\n  * [new branch]      master -> master\nBranch 'master' set up to track remote branch 'master' from 'origin'.\n")])])]),s("blockquote",[s("ul",[s("li",[e._v("把本地库的内容推送到远程，用"),s("code",[e._v("git push")]),e._v("命令，实际上是把当前分支"),s("code",[e._v("master")]),e._v("推送到远程")]),e._v(" "),s("li",[e._v("由于远程库是空的，我们第一次推送"),s("code",[e._v("master")]),e._v("分支时，加上了"),s("code",[e._v("-u")]),e._v("参数，Git不但会把本地的"),s("code",[e._v("master")]),e._v("分支内容推送的远程新的"),s("code",[e._v("master")]),e._v("分支，还会把本地的"),s("code",[e._v("master")]),e._v("分支和远程的"),s("code",[e._v("master")]),e._v("分支关联起来，在以后的推送或者拉取时就可以简化命令")])])]),e._v(" "),s("ul",[s("li",[e._v("从现在起，只要本地作了提交，就可以通过命令")])]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("$ git push origin master\n")])])]),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[e._v("小结")]),e._v(" "),s("ul",[s("li",[e._v("要关联一个远程库，使用命令"),s("code",[e._v("git remote add origin git@server-name:path/repo-name.git")])]),e._v(" "),s("li",[e._v("关联后，使用命令"),s("code",[e._v("git push -u origin master")]),e._v("第一次推送"),s("code",[e._v("master")]),e._v("分支的所有内容")]),e._v(" "),s("li",[e._v("此后，每次本地提交后，只要有必要，就可以使用命令"),s("code",[e._v("git push origin master")]),e._v("推送最新修改")])])])])},[],!1,null,null,null);o.options.__file="remoterepo.md";t.default=o.exports}}]);