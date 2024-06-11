import{_ as s,c as a,o as e,a3 as p}from"./chunks/framework.CLEf5sEq.js";const v=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"column/LargeFrontEnd2023/99_虚拟机.md","filePath":"column/LargeFrontEnd2023/99_虚拟机.md"}'),n={name:"column/LargeFrontEnd2023/99_虚拟机.md"},i=p(`<p>ctrl + option 释放鼠标</p><p>连接虚拟机</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>ssh parallels@192.168.1.112</span></span>
<span class="line"><span>parallels 虚拟机用户名称，192.168.1.112 ip地址</span></span>
<span class="line"><span></span></span>
<span class="line"><span>主机端口号</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ssh -p 10022 arallels@192.168.1.112</span></span></code></pre></div><p><a href="https://blog.csdn.net/qq_40483419/article/details/137857974" target="_blank">安装并配置Ubuntu</a></p><p>查看虚拟机ip地址</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>ip addr</span></span>
<span class="line"><span></span></span>
<span class="line"><span>hostname -I</span></span></code></pre></div><h2 id="基础操作" tabindex="-1">基础操作 <a class="header-anchor" href="#基础操作" aria-label="Permalink to &quot;基础操作&quot;">​</a></h2><p>查看远程虚拟机版本</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>lsb_release -a</span></span></code></pre></div><p>查看内核</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>uname -a</span></span></code></pre></div><p>磁盘空间占用情况</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>df</span></span>
<span class="line"><span></span></span>
<span class="line"><span>以1024M为计量空间</span></span>
<span class="line"><span></span></span>
<span class="line"><span>df -TH</span></span></code></pre></div><p>目录</p><ul><li><code>cd /</code> 去到根目录</li><li><code>ls -la</code></li><li><code>ls</code> 当前文件夹目录</li></ul><p>home 目录，相等于个人目录 etc 目录，主要存放软件 sys 系统目录 usr 系统可执行文件 sbin 超级管理员要执行的文件 local 本地执行的文件 var 存放日志文件</p><p>cpm/内存/进程</p><ul><li><code>top</code> 查看linux进程</li><li>M 查看内存</li></ul><h2 id="linux-常见命令" tabindex="-1">Linux 常见命令 <a class="header-anchor" href="#linux-常见命令" aria-label="Permalink to &quot;Linux 常见命令&quot;">​</a></h2><ul><li>文档型：文件相关命令 touch, cat, echo, rm, vi, cd)</li><li>硬件型：磁盘/进程/服务/网络</li><li>功能型：压缩/解压，下载，远程</li></ul><p>系统：基于ubuntu列举的命令</p><h3 id="文档型" tabindex="-1">文档型 <a class="header-anchor" href="#文档型" aria-label="Permalink to &quot;文档型&quot;">​</a></h3><p>创建文件夹</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>mkdir test</span></span></code></pre></div><p>创建文件</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>touch test.txt</span></span></code></pre></div><p>编辑文件</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>vi test.txt</span></span></code></pre></div><p>查看文件内容</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>cat test.txt</span></span></code></pre></div><p>给文件里面添加内容</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>echo &#39;12334&#39; &gt;&gt; test.txt</span></span></code></pre></div><p>覆盖文件内容</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>echo &#39;23444&#39; &gt; test.txt</span></span></code></pre></div><p>删除文件</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>rm test.txt</span></span></code></pre></div><p>删除文件夹</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>rm -r test</span></span>
<span class="line"><span></span></span>
<span class="line"><span>强制删除</span></span>
<span class="line"><span>rm -rf</span></span></code></pre></div><h3 id="下载-压缩-解压" tabindex="-1">下载/压缩/解压 <a class="header-anchor" href="#下载-压缩-解压" aria-label="Permalink to &quot;下载/压缩/解压&quot;">​</a></h3><p>下载</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>wget http://...</span></span></code></pre></div><p>解压文件</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>zxvf: z 代表压缩文件，x: 解压缩,v: 显示所有的解压的过程,f: 使用归档的名字</span></span>
<span class="line"><span>tar zxvf</span></span></code></pre></div><p>压缩文件</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>zxvf: z 代表压缩文件，x: 解压缩,v: 显示所有的解压的过程,f: 使用归档的名字</span></span>
<span class="line"><span>tar zcvf 压缩最终名字 要压缩的文件/目录</span></span></code></pre></div><h3 id="grep命令-查看进程" tabindex="-1">grep命令，查看进程 <a class="header-anchor" href="#grep命令-查看进程" aria-label="Permalink to &quot;grep命令，查看进程&quot;">​</a></h3><p>查看进程</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>ps -ef | grep docker</span></span></code></pre></div><p>9 代表终止的意思，27643 代表进程的id</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>kill -9 27643</span></span></code></pre></div><h3 id="系统服务状态" tabindex="-1">系统服务状态 <a class="header-anchor" href="#系统服务状态" aria-label="Permalink to &quot;系统服务状态&quot;">​</a></h3><p>查看服务进程</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>查看ssh服务进程</span></span>
<span class="line"><span></span></span>
<span class="line"><span>service sshd status</span></span></code></pre></div><p>重启服务</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>service ssh restart</span></span></code></pre></div><p>查看服务</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>systemctl status firewalld.service</span></span></code></pre></div><h2 id="ssh" tabindex="-1">ssh <a class="header-anchor" href="#ssh" aria-label="Permalink to &quot;ssh&quot;">​</a></h2><p>查看主机名称</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>cat /etc/hostname</span></span></code></pre></div><h3 id="修改ssh默认端口" tabindex="-1">修改ssh默认端口 <a class="header-anchor" href="#修改ssh默认端口" aria-label="Permalink to &quot;修改ssh默认端口&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>centos</span></span>
<span class="line"><span></span></span>
<span class="line"><span>netstat -anlp | grep ssh</span></span></code></pre></div><p>查看ssh配置文件</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>vi /etc/ssh/sshd_config</span></span></code></pre></div><p>直接修改<code>/etc/ssh/sshd_config</code>文件里面的port端口号</p><h3 id="ssh密钥登录" tabindex="-1">SSH密钥登录 <a class="header-anchor" href="#ssh密钥登录" aria-label="Permalink to &quot;SSH密钥登录&quot;">​</a></h3><p>使用密钥登录，需要把<code>/etc/ssh/sshd_config</code>文件里面的<code>PassAu</code>改为no</p><p>本地生成sshkey</p><ol><li>生成sshkey</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span></span></span>
<span class="line"><span>cd ~/.ssh</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ls</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ssh-keygen</span></span></code></pre></div><ol start="2"><li>修改本地的ssh配置文件</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>vi config </span></span>
<span class="line"><span></span></span>
<span class="line"><span>IdentityFile 连接远程密钥路径</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Host parallels</span></span>
<span class="line"><span>    Port 10022 </span></span>
<span class="line"><span>    HostName 192.168.1.112</span></span>
<span class="line"><span>    User root</span></span>
<span class="line"><span>    IdentityFile ~/.ssh/id_rsa</span></span>
<span class="line"><span>    IdentitiesOnly yes</span></span></code></pre></div><ol start="3"><li>将本地的 <code>~/.ssh/id_rsa</code> 里的密钥复制到<code>authorized_keys </code></li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>cd ~/.ssh</span></span>
<span class="line"><span></span></span>
<span class="line"><span>vi authorized_keys</span></span></code></pre></div><p>使用 <code>ssh parallels</code> 链接虚拟机</p><h2 id="vi-vim编辑" tabindex="-1"><code>vi</code>/<code>vim</code>编辑 <a class="header-anchor" href="#vi-vim编辑" aria-label="Permalink to &quot;\`vi\`/\`vim\`编辑&quot;">​</a></h2><p>在使用<code>vi</code>或<code>vim</code>编辑器时，回车换行的方式与其他文本编辑器类似。在插入模式下，您可以直接按回车键来换行。以下是详细的步骤和一些基本的<code>vi</code>/<code>vim</code>操作：</p><ol><li><p><strong>启动<code>vi</code>/<code>vim</code>编辑器</strong>：</p><ul><li>使用命令启动<code>vi</code>或<code>vim</code>：<div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> filename</span></span></code></pre></div>或<div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vim</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> filename</span></span></code></pre></div></li></ul></li><li><p><strong>进入插入模式</strong>：</p><ul><li>在普通模式下（启动编辑器后默认的模式），按下 <code>i</code> 键进入插入模式，这时您可以开始编辑文本。</li></ul></li><li><p><strong>回车换行</strong>：</p><ul><li>在插入模式下，按下回车键（Enter）即可换行。</li></ul></li><li><p><strong>保存并退出<code>vi</code>/<code>vim</code></strong>：</p><ul><li>退出插入模式：按 <code>Esc</code> 键返回到普通模式。</li><li>保存并退出：在普通模式下，输入 <code>:wq</code> 并按回车键。</li></ul></li></ol><p>以下是一些常见的<code>vi</code>/<code>vim</code>命令：</p><ul><li><p><strong>插入模式</strong>：</p><ul><li><code>i</code>：在光标前插入</li><li><code>I</code>：在行首插入</li><li><code>a</code>：在光标后插入</li><li><code>A</code>：在行尾插入</li><li><code>o</code>：在当前行后插入一个新行</li><li><code>O</code>：在当前行前插入一个新行</li></ul></li><li><p><strong>普通模式</strong>：</p><ul><li><code>Esc</code>：退出插入模式，回到普通模式</li><li><code>x</code>：删除光标所在的字符</li><li><code>dd</code>：删除当前行</li><li><code>yy</code>：复制当前行</li><li><code>p</code>：粘贴复制的行或内容</li><li><code>u</code>：撤销最近的更改</li><li><code>Ctrl+r</code>：重做撤销的更改</li></ul></li><li><p><strong>命令模式</strong>（在普通模式下按 <code>:</code> 进入）：</p><ul><li><code>:w</code>：保存文件</li><li><code>:q</code>：退出编辑器</li><li><code>:wq</code>：保存并退出</li><li><code>:q!</code>：不保存强制退出</li><li><code>:set number</code>：显示行号</li><li><code>:set nonumber</code>：隐藏行号</li></ul></li></ul><p>通过掌握这些基本命令，您可以高效地使用<code>vi</code>或<code>vim</code>编辑文件。如果有其他问题或需要更多帮助，请告诉我！</p>`,81),l=[i];function t(c,o,d,h,r,u){return e(),a("div",null,l)}const b=s(n,[["render",t]]);export{v as __pageData,b as default};
