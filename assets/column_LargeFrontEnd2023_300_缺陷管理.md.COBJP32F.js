import{_ as l,c as i,o as t,a3 as a}from"./chunks/framework.CVXq2y2U.js";const o="/luyuxiang-blog/assets/image-9.DsarnURs.png",m=JSON.parse('{"title":"缺陷管理","description":"","frontmatter":{},"headers":[],"relativePath":"column/LargeFrontEnd2023/300_缺陷管理.md","filePath":"column/LargeFrontEnd2023/300_缺陷管理.md"}'),e={name:"column/LargeFrontEnd2023/300_缺陷管理.md"},r=a('<h1 id="缺陷管理" tabindex="-1">缺陷管理 <a class="header-anchor" href="#缺陷管理" aria-label="Permalink to &quot;缺陷管理&quot;">​</a></h1><p>动态的眼光看问题，长远的角度实施计划</p><p>做好 codeReview</p><p>缺陷管理不到位，常见的问题：</p><ol><li>这代码是人写的？</li><li>上班后项目垮了</li><li>加班到绝望（改bug）</li><li>项目黄了（项目达不到预期）</li></ol><p>缺陷控制在项目全生命周期旨在提高软件的质量</p><p><strong>导论：</strong></p><ul><li>缺陷控制概念及基本方法（方法论）</li><li>项目质量/进度管理工作流（扩展视野）</li><li>三类缺陷控制工具介绍（具体做法）</li></ul><p><strong>目标：</strong></p><ul><li>了解缺陷控制的概念</li><li>掌握缺陷控制的流程及控制方法</li><li>熟练使用缺陷控制的几类工具，提高效率</li></ul><h2 id="缺陷分类及结果" tabindex="-1">缺陷分类及结果 <a class="header-anchor" href="#缺陷分类及结果" aria-label="Permalink to &quot;缺陷分类及结果&quot;">​</a></h2><p><strong>软件开发</strong></p><ul><li>需求不明确 -&gt; 返工 <ol><li>需求经常变化</li><li>需求文档不清晰</li><li>客户未确定需求</li><li>内部反推动的工作风气</li><li>功能模块未讨论清楚，分工不具体，人员未指定。</li><li>...</li></ol></li><li>进度有超期 -&gt; 加班 <ol><li>经常项目上线加班</li><li>经常前期推不动，重度依赖U设计、产品经理</li><li>无人Push放风式管理</li><li>自驱力不足</li><li>...</li></ol></li><li>工程有Bug -&gt; 难维护 <ol><li>无代驾风格摸惠</li><li>无代码质量监测</li><li>测试流程紊乱</li><li>没有自动化测试闭环</li><li>发布环境/测试环境</li><li>...</li></ol></li><li>协同有问题 -&gt; 效率低下 <ol><li>项目经理太忙</li><li>项目经理经验不足</li><li>有想法的人太多</li><li>没有具体的分工</li><li>缺少协同工具，人员的协同能力不同</li></ol></li></ul><p><strong>解决办法</strong></p><ul><li><p>需求不明确 -&gt; 沟通/督办</p></li><li><p>进度有超期 -&gt; 缺陷跟踪</p></li><li><p>工程有Bug -&gt; 代码Lint/规范</p></li><li><p>协同有问题 -&gt; 清单/代办 （紧急代办、不紧急。。。4象限）</p></li><li><p>分工明确，责任到人</p></li><li><p>借助工具，提升效率</p></li><li><p>量体裁衣，按需取用</p></li></ul><h2 id="缺陷控制概念" tabindex="-1">缺陷控制概念 <a class="header-anchor" href="#缺陷控制概念" aria-label="Permalink to &quot;缺陷控制概念&quot;">​</a></h2><p>缺陷控制就是在项目全生命周期中，保障项目质量的一系列行为。</p><p>缺陷跟踪系统/软件是被设计用来帮助质量保证和程序员在工作中维护软件缺陷的跟踪报告，或者称作问题跟踪管理系统。</p><p>主要的作用是提供集中概览、开发状态、提供报告。</p><h2 id="案例分析" tabindex="-1">案例分析 <a class="header-anchor" href="#案例分析" aria-label="Permalink to &quot;案例分析&quot;">​</a></h2><ul><li>小公司团队/扁平管理/项目外包/业务多样简单</li><li>传统团队/二级公司/流程冗长/业务多样复杂</li><li>中大型公司/KPI驱动/技术单一/业务重复度高/技术深入</li></ul><p><strong>总结案例</strong></p><ul><li>无章办事/代码优化/代码质量</li><li>督办意识/工具看板/轻重缓急</li><li>意识薄弱/形同虚设/领导意识/团队意识</li></ul><p><strong>实施流程</strong></p><p><img src="'+o+'" alt="alt text" loading="lazy"></p><h2 id="缺陷管理工具" tabindex="-1">缺陷管理工具 <a class="header-anchor" href="#缺陷管理工具" aria-label="Permalink to &quot;缺陷管理工具&quot;">​</a></h2><ul><li>代码类：ESLint、JSLint、StyleLint...</li><li>流程类：Jira、禅道、 Redmine （bug的处理）</li><li>工具类：Trello（清单）、 Teambition（清单）、 钉钉、石墨</li></ul><p>简单的软件开发思路</p><ul><li>分析：功能模块-＞开源解决方案-＞业务闭环</li><li>资源配备：初步需求-＞产品经理+UI设计+程序员-＞开发系统</li><li>运营维护：公司级的运营-&gt;专门团队-&gt;运维</li></ul>',29),n=[r];function p(s,u,_,g,c,d){return t(),i("div",null,n)}const b=l(e,[["render",p]]);export{m as __pageData,b as default};
