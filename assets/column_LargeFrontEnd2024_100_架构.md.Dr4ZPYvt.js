import{_ as l,c as i,o as e,a1 as a}from"./chunks/framework.CPTkhf9l.js";const f=JSON.parse('{"title":"架构演进模式","description":"","frontmatter":{},"headers":[],"relativePath":"column/LargeFrontEnd2024/100_架构.md","filePath":"column/LargeFrontEnd2024/100_架构.md"}'),r={name:"column/LargeFrontEnd2024/100_架构.md"},t=a('<h1 id="架构演进模式" tabindex="-1">架构演进模式 <a class="header-anchor" href="#架构演进模式" aria-label="Permalink to &quot;架构演进模式&quot;">​</a></h1><ul><li>拆迁者模式：采取彻底重构和重新设计的方式 <ul><li>需要的时间长，可能对旧的功能有影响</li></ul></li><li>绞杀者模式：逐步引入新的架构和技术</li><li>修缮者模式：小规模的修改和优化</li></ul><h1 id="传统架构-vs-微服务架构" tabindex="-1">传统架构 vs 微服务架构 <a class="header-anchor" href="#传统架构-vs-微服务架构" aria-label="Permalink to &quot;传统架构 vs 微服务架构&quot;">​</a></h1><ul><li>传统架构耦合性强，不能针对部分业务进行更新</li><li>传统架构的发布周期长，面临版本的同步回滚</li><li>传统架构代码混用，数据访问混乱</li></ul><p>微服务架构优势</p><ul><li>灵活可扩展，技术和组织多样性</li><li>易于理解与维护，故障隔离</li><li>独立开发、部署、版本控制、数据独立</li></ul><p>微服务架构<span style="color:red;">服务</span>管理</p><ul><li>服务注册</li><li>服务发现</li><li>服务续约、心跳</li><li>服务剔除（被动）</li><li>服务下线（主动）</li></ul><h1 id="markdonw" tabindex="-1">MarkDonw <a class="header-anchor" href="#markdonw" aria-label="Permalink to &quot;MarkDonw&quot;">​</a></h1><ul><li>vitePress -- <a href="https://vitepress.dev/" target="_blank" rel="noreferrer">https://vitepress.dev/</a><ul><li>搭建个人博客 - <a href="https://blog.csdn.net/weixin_44803753/article/details/130903396" target="_blank" rel="noreferrer">https://blog.csdn.net/weixin_44803753/article/details/130903396</a></li></ul></li><li>vuePress -- <a href="https://vuepress.vuejs.org/zh/guide/introduction.html" target="_blank" rel="noreferrer">https://vuepress.vuejs.org/zh/guide/introduction.html</a></li><li>hexo -- <a href="https://hexo.io/zh-cn/" target="_blank" rel="noreferrer">https://hexo.io/zh-cn/</a></li><li>mindshow -- <a href="https://mindshow.fun/#/folder/home" target="_blank" rel="noreferrer">https://mindshow.fun/#/folder/home</a></li><li></li><li>OneNote（推荐做笔记）</li></ul><h1 id="项目相关的文档" tabindex="-1">项目相关的文档 <a class="header-anchor" href="#项目相关的文档" aria-label="Permalink to &quot;项目相关的文档&quot;">​</a></h1><ul><li>接口文档：接口文档主要<span style="color:red;">描述了</span>系统之间或系统内个组件之间如何进行<span style="color:red;">信息交流</span>。它包含了<strong>接口定义、数据格式、数据类型、传输协议</strong>等详细信息。 <ul><li>特点：</li><li>详细描述了系统之间或组件之间的交互方式</li><li>提供了调用方需要遵循的规范</li><li>有助于不同开发团队之间的协作</li></ul></li><li>系统文档：对<span style="color:red;">整个软件系统的详细描述</span>，包括软件设计、架构、功能、性能要求的等方面的信息。 <ul><li>特点：</li><li>提供了对整个系统的全面了解</li><li>包括了系统设计、架构、技术选型等方面的信息</li><li>有助于维护团队理解和维护系统</li><li></li><li>文档示例总结</li><li>系统架构图 -&gt; 数据访问层、业务逻辑层、UI 层</li><li>数据库设计（ERD）、业务流程图&amp;时序图</li><li>其他：思维导图、原型设计等</li></ul></li><li>产品文档：主要<strong>面向最终用户</strong>，包括用户手册、帮助文档、教程等。它解释了如何使用软件产品，以及产品的功能、特性、操作步骤等。 <ul><li>特点：</li><li>面向最终用户</li><li>通俗易懂，易于理解</li><li>关注产品的功能和操作</li><li></li><li>文档示例总结</li><li>引言 + 产品描述（背景、目标、功能概述、系统要求）</li><li>安装配置、功能详细描述与操作、常见问题</li><li>故障排除、附录（术语、参考资料、接口文档、技术支持等）</li></ul></li></ul><p>一般看的官方文档，都是产品文档。</p><p>总结项目文档：</p><ul><li>目标受众：接口文档面向开发人员，系统文档面向开发和维护人员，产品文档面向最终用户。</li><li>内容关注点：接口文档关注系统或组件间的交互，系统文档关注整个系统的设计和实现，产品文档关注产品的使用和功能。</li><li>文档形式：接口文档通常包含代码示例和详细的规范说明，系统文档可能包括设计图、数据模型等，产品文档通常是用户手册、帮助文档</li></ul><h1 id="restful-接口设计-接口文档工具-接口文档自动生成" tabindex="-1">RESTful 接口设计，接口文档工具&amp;接口文档自动生成 <a class="header-anchor" href="#restful-接口设计-接口文档工具-接口文档自动生成" aria-label="Permalink to &quot;RESTful 接口设计，接口文档工具&amp;接口文档自动生成&quot;">​</a></h1><p>什么是 RESTful 接口？</p><p>RESTful（<span style="color:red;">Re</span>presentational <span style="color:red;">S</span>tate <span style="color:red;">T</span>ransfer）接口是一种遵循 REST 架构风格的 Web 服务接口设计。RESTful 接口使用 HTTP 协议作为传输层，利用 HTTP 的各种方法（如 GET、POST、PUT、DELETE 等）实现资源的创建、读取、更新和删除操作。</p><p>RESTful 接口以资源为中心，易于理解和使用。</p><br><p>什么是 RESTful 风格？</p><p>REST 是一种<span style="color:red;">软件架构风格</span>，它强调可扩展性、简单性和性能。</p><p>接口定义主要内容</p><ul><li>定义：资源命名与 URL 设计</li><li>HTTP 方法与操作：GET、POST、PUT、DELETE</li><li>详细内容：请求与响应数据格式</li><li>错误处理：状态码与错误处理</li></ul><p>最佳实践：</p><ul><li>简洁明了，易于理解</li><li>遵循一致的命名与设计规范（大驼峰？小驼峰？横线 + 小字母）</li><li>使用合适的 HTTP 方法与状态码</li><li>提供详情的错误信息，注意安全性（HTTPS、鉴权等）</li></ul><br><p>接口文档工具</p><ol><li>RAP</li><li>Eolink</li><li>EasyAPI</li><li>Apizza</li><li>EasyDoc</li><li>ShowDoc （推荐）</li><li>ApiFox</li><li>ApiPost</li></ol><p>自动形成接口文档</p><ol><li>Swagger UI（一家独大，标准全世界通用，生态丰富，免费开源）</li><li>ReDoc（扩展性好，免费开源）</li><li>Slate（Markdown 支持，可扩展，有主题，免费开源）</li><li>Agli（生态小，免费开源，长期未更新）</li><li>Widdershins（生态最小，扩展性低，免费开源）</li></ol>',31),o=[t];function s(n,p,u,h,d,c){return e(),i("div",null,o)}const T=l(r,[["render",s]]);export{f as __pageData,T as default};
