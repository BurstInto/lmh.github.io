(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{78:function(e,t,a){"use strict";a.r(t);var v={props:["slot-key"],mounted(){this.$nextTick(function(){this.$vuepress.$emit("AsyncMarkdownContentMounted",this.slotKey)})}},s=a(1),c=Object(s.a)(v,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.slotKey}},[a("h1",{attrs:{id:"_4-分支管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-分支管理","aria-hidden":"true"}},[e._v("#")]),e._v(" 4. 分支管理")]),e._v(" "),a("h2",{attrs:{id:"创建与合并分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建与合并分支","aria-hidden":"true"}},[e._v("#")]),e._v(" 创建与合并分支")]),e._v(" "),a("ul",[a("li",[e._v("在版本回退里，你已经知道，每次提交，Git都把它们串成一条时间线，这条时间线就是一个分支。截止到目前，只有一条时间线，在Git里，这个分支叫主分支，即"),a("code",[e._v("master")]),e._v("分支。"),a("code",[e._v("HEAD")]),e._v("严格来说不是指向提交，而是指向"),a("code",[e._v("master")]),e._v("，"),a("code",[e._v("master")]),e._v("才是指向提交的，所以，"),a("code",[e._v("HEAD")]),e._v("指向的就是当前分支")]),e._v(" "),a("li",[e._v("一开始的时候，"),a("code",[e._v("master")]),e._v("分支是一条线，Git用"),a("code",[e._v("master")]),e._v("指向最新的提交，再用"),a("code",[e._v("HEAD")]),e._v("指向"),a("code",[e._v("master")]),e._v("，就能确定当前分支，以及当前分支的提交点")])]),e._v(" "),a("blockquote",[a("p",[e._v("每次提交，"),a("code",[e._v("master")]),e._v("分支都会向前移动一步，这样，随着你不断提交，"),a("code",[e._v("master")]),e._v("分支的线也越来越长")])]),e._v(" "),a("blockquote",[a("ul",[a("li",[e._v("当我们创建新的分支，例如"),a("code",[e._v("dev")]),e._v("时，Git新建了一个指针叫"),a("code",[e._v("dev")]),e._v("，指向"),a("code",[e._v("master")]),e._v("相同的提交，再把"),a("code",[e._v("HEAD")]),e._v("指向"),a("code",[e._v("dev")]),e._v("，就表示当前分支在"),a("code",[e._v("dev")]),e._v("上")]),e._v(" "),a("li",[e._v("你看，Git创建一个分支很快，因为除了增加一个"),a("code",[e._v("dev")]),e._v("指针，改改"),a("code",[e._v("HEAD")]),e._v("的指向，工作区的文件都没有任何变化")]),e._v(" "),a("li",[e._v("不过，从现在开始，对工作区的修改和提交就是针对"),a("code",[e._v("dev")]),e._v("分支了，比如新提交一次后，"),a("code",[e._v("dev")]),e._v("指针往前移动一步，而"),a("code",[e._v("master")]),e._v("指针不变")]),e._v(" "),a("li",[e._v("假如我们在"),a("code",[e._v("dev")]),e._v("上的工作完成了，就可以把"),a("code",[e._v("dev")]),e._v("合并到"),a("code",[e._v("master")]),e._v("上。Git怎么合并呢？最简单的方法，就是直接把"),a("code",[e._v("master")]),e._v("指向"),a("code",[e._v("dev")]),e._v("的当前提交，就完成了合并")]),e._v(" "),a("li",[e._v("所以Git合并分支也很快！就改改指针，工作区内容也不变！")]),e._v(" "),a("li",[e._v("合并完分支后，甚至可以删除"),a("code",[e._v("dev")]),e._v("分支。删除"),a("code",[e._v("dev")]),e._v("分支就是把"),a("code",[e._v("dev")]),e._v("指针给删掉，删掉后，我们就剩下了一条"),a("code",[e._v("master")]),e._v("分支")])])]),e._v(" "),a("blockquote",[a("p",[e._v("首先，我们创建"),a("code",[e._v("dev")]),e._v("分支，然后切换到"),a("code",[e._v("dev")]),e._v("分支")])]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ git checkout -b dev\nSwitched to a new branch 'dev'\n")])])]),a("blockquote",[a("p",[a("code",[e._v("git checkout")]),e._v("命令加上"),a("code",[e._v("-b")]),e._v("参数表示创建并切换，相当于以下两条命令")])]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ git branch dev\n$ git checkout dev\nSwitched to branch 'dev'\n")])])]),a("blockquote",[a("p",[e._v("然后，用"),a("code",[e._v("git branch")]),e._v("命令查看当前分支")])]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ git branch\n* dev\n  master\n")])])]),a("blockquote",[a("ul",[a("li",[a("code",[e._v("git branch")]),e._v("命令会列出所有分支，当前分支前面会标一个"),a("code",[e._v("*")]),e._v("号")]),e._v(" "),a("li",[e._v("然后，我们就可以在"),a("code",[e._v("dev")]),e._v("分支上正常提交，比如对"),a("code",[e._v("readme.txt")]),e._v("做个修改，加上一行"),a("br"),e._v("\nCreating a new branch is quick.")])])]),e._v(" "),a("blockquote",[a("p",[e._v("然后提交")])]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('$ git add readme.txt \n$ git commit -m "branch test"\n[dev b17d20e] branch test\n  1 file changed, 1 insertion(+)\n')])])]),a("blockquote",[a("p",[e._v("现在，"),a("code",[e._v("dev")]),e._v("分支的工作完成，我们就可以切换回"),a("code",[e._v("master")]),e._v("分支")])]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ git checkout master\nSwitched to branch 'master'\n")])])]),a("blockquote",[a("ul",[a("li",[e._v("切换回"),a("code",[e._v("master")]),e._v("分支后，再查看一个"),a("code",[e._v("readme.txt")]),e._v("文件，刚才添加的内容不见了！因为那个提交是在"),a("code",[e._v("dev")]),e._v("分支上，而"),a("code",[e._v("master")]),e._v("分支此刻的提交点并没有变")]),e._v(" "),a("li",[e._v("现在，我们把"),a("code",[e._v("dev")]),e._v("分支的工作成果合并到"),a("code",[e._v("master")]),e._v("分支上")])])]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ git merge dev\nUpdating d46f35e..b17d20e\nFast-forward\n  readme.txt | 1 +\n  1 file changed, 1 insertion(+)\n")])])]),a("blockquote",[a("ul",[a("li",[a("code",[e._v("git merge")]),e._v("命令用于合并指定分支到当前分支。合并后，再查看"),a("code",[e._v("readme.txt")]),e._v("的内容，就可以看到，和"),a("code",[e._v("dev")]),e._v("分支的最新提交是完全一样的")]),e._v(" "),a("li",[e._v("注意到上面的"),a("code",[e._v("Fast-forward")]),e._v("信息，Git告诉我们，这次合并是“快进模式”，也就是直接把"),a("code",[e._v("master")]),e._v("指向"),a("code",[e._v("dev")]),e._v("的当前提交，所以合并速度非常快")]),e._v(" "),a("li",[e._v("当然，也不是每次合并都能"),a("code",[e._v("Fast-forward")]),e._v("，我们后面会讲其他方式的合并")]),e._v(" "),a("li",[e._v("合并完成后，就可以放心地删除"),a("code",[e._v("dev")]),e._v("分支了")])])]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ git branch -d dev\nDeleted branch dev (was b17d20e).\n")])])]),a("blockquote",[a("p",[e._v("删除后，查看"),a("code",[e._v("branch")]),e._v("，就只剩下"),a("code",[e._v("master")]),e._v("分支了")])]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ git branch\n* master\n")])])]),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("小结")]),e._v(" "),a("p",[e._v("Git鼓励大量使用分支：")]),e._v(" "),a("ul",[a("li",[e._v("查看分支："),a("code",[e._v("git branch")])]),e._v(" "),a("li",[e._v("创建分支："),a("code",[e._v("git branch <name>")])]),e._v(" "),a("li",[e._v("切换分支："),a("code",[e._v("git checkout <name>")])]),e._v(" "),a("li",[e._v("创建+切换分支："),a("code",[e._v("git checkout -b <name>")])]),e._v(" "),a("li",[e._v("合并某分支到当前分支："),a("code",[e._v("git merge <name>")])]),e._v(" "),a("li",[e._v("删除分支："),a("code",[e._v("git branch -d <name>")])])])]),e._v(" "),a("h2",{attrs:{id:"解决冲突"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决冲突","aria-hidden":"true"}},[e._v("#")]),e._v(" 解决冲突")]),e._v(" "),a("blockquote",[a("p",[e._v("准备新的"),a("code",[e._v("feature1")]),e._v("分支，继续我们的新分支开发")])]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ git checkout -b feature1\nSwitched to a new branch 'feature1'\n")])])]),a("blockquote",[a("ul",[a("li",[e._v("修改"),a("code",[e._v("readme.txt")]),e._v("最后一行，改为"),a("br"),e._v("\nCreating a new branch is quick AND simple.")])])]),e._v(" "),a("blockquote",[a("p",[e._v("在"),a("code",[e._v("feature1")]),e._v("分支上提交")])]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('$ git add readme.txt\n\n$ git commit -m "AND simple"\n[feature1 14096d0] AND simple\n  1 file changed, 1 insertion(+), 1 deletion(-)\n')])])]),a("blockquote",[a("p",[e._v("切换到"),a("code",[e._v("master")]),e._v("分支")])]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ git checkout master\nSwitched to branch 'master'\nYour branch is ahead of 'origin/master' by 1 commit.\n  (use \"git push\" to publish your local commits)\n")])])]),a("blockquote",[a("ul",[a("li",[e._v("Git还会自动提示我们当前"),a("code",[e._v("master")]),e._v("分支比远程的"),a("code",[e._v("master")]),e._v("分支要超前1个提交")]),e._v(" "),a("li",[e._v("在"),a("code",[e._v("master")]),e._v("分支上把"),a("code",[e._v("readme.txt")]),e._v("文件的最后一行改为"),a("br"),e._v("\nCreating a new branch is quick & simple.")])])]),e._v(" "),a("blockquote",[a("p",[e._v("提交")])]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('$ git add readme.txt \n$ git commit -m "& simple"\n[master 5dc6824] & simple\n  1 file changed, 1 insertion(+), 1 deletion(-)\n')])])]),a("blockquote",[a("p",[e._v("这种情况下，Git无法执行“快速合并”，只能试图把各自的修改合并起来，但这种合并就可能会有冲突，我们试试看")])]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ git merge feature1\nAuto-merging readme.txt\nCONFLICT (content): Merge conflict in readme.txt\nAutomatic merge failed; fix conflicts and then commit the result.\n")])])]),a("blockquote",[a("p",[e._v("果然冲突了！Git告诉我们，"),a("code",[e._v("readme.txt")]),e._v("文件存在冲突，必须手动解决冲突后再提交。"),a("code",[e._v("git status")]),e._v("也可以告诉我们冲突的文件")])]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('$ git status\nOn branch master\nYour branch is ahead of \'origin/master\' by 2 commits.\n  (use "git push" to publish your local commits)\n\nYou have unmerged paths.\n  (fix conflicts and run "git commit")\n  (use "git merge --abort" to abort the merge)\n\nUnmerged paths:\n  (use "git add <file>..." to mark resolution)\n\n    both modified:   readme.txt\n\nno changes added to commit (use "git add" and/or "git commit -a")\n')])])]),a("blockquote",[a("p",[e._v("我们可以直接查看"),a("code",[e._v("readme.txt")]),e._v("的内容")])]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Git is a distributed version control system.\nGit is free software distributed under the GPL.\nGit has a mutable index called stage.\nGit tracks changes of files.\n<<<<<<< HEAD\nCreating a new branch is quick & simple.\n=======\nCreating a new branch is quick AND simple.\n>>>>>>> feature1\n")])])]),a("blockquote",[a("p",[e._v("Git用"),a("code",[e._v("<<<<<<<")]),e._v("，"),a("code",[e._v("=======")]),e._v("，"),a("code",[e._v(">>>>>>>")]),e._v("标记出不同分支的内容，我们修改如下后保存"),a("br")]),e._v(" "),a("ul",[a("li",[e._v("Creating a new branch is quick and simple.")])])]),e._v(" "),a("blockquote",[a("p",[e._v("再提交")])]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('$ git add readme.txt \n$ git commit -m "conflict fixed"\n[master cf810e4] conflict fixed\n')])])]),a("blockquote",[a("p",[e._v("用带参数的"),a("code",[e._v("git log")]),e._v("也可以看到分支的合并情况")])]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ git log --graph --pretty=oneline --abbrev-commit\n*   cf810e4 (HEAD -> master) conflict fixed\n|\\  \n| * 14096d0 (feature1) AND simple\n* | 5dc6824 & simple\n|/  \n* b17d20e branch test\n* d46f35e (origin/master) remove test.txt\n* b84166e add test.txt\n* 519219b git tracks changes\n* e43a48b understand how stage works\n* 1094adb append GPL\n* e475afc add distributed\n* eaadf4e wrote a readme file\n")])])]),a("blockquote",[a("p",[e._v("最后，删除"),a("code",[e._v("feature1")]),e._v("分支")])]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ git branch -d feature1\nDeleted branch feature1 (was 14096d0).\n")])])]),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("小结")]),e._v(" "),a("ul",[a("li",[e._v("当Git无法自动合并分支时，就必须首先解决冲突。解决冲突后，再提交，合并完成")]),e._v(" "),a("li",[e._v("解决冲突就是把Git合并失败的文件手动编辑为我们希望的内容，再提交")]),e._v(" "),a("li",[e._v("用git log --graph命令可以看到分支合并图")])])]),e._v(" "),a("h2",{attrs:{id:"分支管理策略"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分支管理策略","aria-hidden":"true"}},[e._v("#")]),e._v(" 分支管理策略")]),e._v(" "),a("blockquote",[a("ul",[a("li",[e._v("通常，合并分支时，如果可能，Git会用"),a("code",[e._v("Fast forward")]),e._v("模式，但这种模式下，删除分支后，会丢掉分支信息")]),e._v(" "),a("li",[e._v("如果要强制禁用"),a("code",[e._v("Fast forward")]),e._v("模式，Git就会在"),a("code",[e._v("merge")]),e._v("时生成一个新的"),a("code",[e._v("commit")]),e._v("，这样，从分支历史上就可以看出分支信息")]),e._v(" "),a("li",[e._v("下面我们实战一下"),a("code",[e._v("--no-ff")]),e._v("方式的"),a("code",[e._v("git merge")])])])]),e._v(" "),a("blockquote",[a("p",[e._v("首先，仍然创建并切换"),a("code",[e._v("dev")]),e._v("分支")])]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ git checkout -b dev\nSwitched to a new branch 'dev'\n")])])]),a("blockquote",[a("p",[e._v("修改"),a("code",[e._v("readme.txt")]),e._v("文件，并提交一个新的"),a("code",[e._v("commit")])])]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('$ git add readme.txt \n$ git commit -m "add merge"\n[dev f52c633] add merge\n  1 file changed, 1 insertion(+)\n')])])]),a("blockquote",[a("p",[e._v("现在，我们切换回"),a("code",[e._v("master")])])]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ git checkout master\nSwitched to branch 'master'\n")])])]),a("blockquote",[a("p",[e._v("准备合并"),a("code",[e._v("dev")]),e._v("分支，请注意"),a("code",[e._v("--no-ff")]),e._v("参数，表示禁用"),a("code",[e._v("Fast forward")])])]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ git merge --no-ff -m \"merge with no-ff\" dev\nMerge made by the 'recursive' strategy.\n  readme.txt | 1 +\n  1 file changed, 1 insertion(+)\n")])])]),a("blockquote",[a("ul",[a("li",[e._v("因为本次合并要创建一个新的"),a("code",[e._v("commit")]),e._v("，所以加上"),a("code",[e._v("-m")]),e._v("参数，把"),a("code",[e._v("commit")]),e._v("描述写进去")]),e._v(" "),a("li",[e._v("合并后，我们用"),a("code",[e._v("git log")]),e._v("看看分支历史")])])]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ git log --graph --pretty=oneline --abbrev-commit\n*   e1e9c68 (HEAD -> master) merge with no-ff\n|\\  \n| * f52c633 (dev) add merge\n|/  \n*   cf810e4 conflict fixed\n...\n")])])]),a("h4",{attrs:{id:"分支策略"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分支策略","aria-hidden":"true"}},[e._v("#")]),e._v(" 分支策略")]),e._v(" "),a("blockquote",[a("p",[e._v("在实际开发中，我们应该按照几个基本原则进行分支管理：")]),e._v(" "),a("ul",[a("li",[e._v("首先，"),a("code",[e._v("master")]),e._v("分支应该是非常稳定的，也就是仅用来发布新版本，平时不能在上面干活")]),e._v(" "),a("li",[e._v("那在哪干活呢？干活都在"),a("code",[e._v("dev")]),e._v("分支上，也就是说，"),a("code",[e._v("dev")]),e._v("分支是不稳定的，到某个时候，比如1.0版本发布时，再把"),a("code",[e._v("dev")]),e._v("分支合并到"),a("code",[e._v("master")]),e._v("上，在"),a("code",[e._v("master")]),e._v("分支发布1.0版本")]),e._v(" "),a("li",[e._v("你和你的小伙伴们每个人都在"),a("code",[e._v("dev")]),e._v("分支上干活，每个人都有自己的分支，时不时地往"),a("code",[e._v("dev")]),e._v("分支上合并就可以了")])])]),e._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("小结")]),e._v(" "),a("ul",[a("li",[e._v("Git分支十分强大，在团队开发中应该充分应用")]),e._v(" "),a("li",[e._v("合并分支时，加上"),a("code",[e._v("--no-ff")]),e._v("参数就可以用普通模式合并，合并后的历史有分支，能看出来曾经做过合并，而"),a("code",[e._v("fast forward")]),e._v("合并就看不出来曾经做过合并")])])])])},[],!1,null,null,null);c.options.__file="branchmange.md";t.default=c.exports}}]);