import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,e as p,o as e}from"./app-CaSbdjoi.js";const t={};function l(i,n){return e(),a("div",null,n[0]||(n[0]=[p(`<h1 id="算法设计与分析作业1" tabindex="-1"><a class="header-anchor" href="#算法设计与分析作业1"><span>算法设计与分析作业1</span></a></h1><h1 id="_1-第一章概述" tabindex="-1"><a class="header-anchor" href="#_1-第一章概述"><span>1. 第一章概述：</span></a></h1><p><strong>算法分析：</strong> 如何衡量效率（时间/空间复杂度）。</p><p><strong>渐近符号</strong> （O，Ω，Θ）用于描述增长速率。</p><h1 id="_2-什么是递归" tabindex="-1"><a class="header-anchor" href="#_2-什么是递归"><span>2. 什么是递归？</span></a></h1><h2 id="_2-1-调用栈" tabindex="-1"><a class="header-anchor" href="#_2-1-调用栈"><span>2.1 调用栈</span></a></h2><p>递归是一种编程技术，其中函数调用自身来解决同一问题的较小实例。它主要涉及两个阶段：</p><p><strong>调用：</strong> 程序在此处反复调用自身，通常使用逐渐减小或更简单的参数，朝着&quot;终止条件&quot;前进。</p><p><strong>返回：</strong> 触发&quot;终止条件&quot;后，程序开始从最深层的递归函数返回，逐层汇总每层的结果。递归是一种编程技术，函数通过调用自身来解决同一问题的较小实例。</p><p><strong>基本情况：</strong> 停止条件（例如，解决一个简单的子问题）。</p><p><strong>递归情况：</strong> 将问题分解成更小的子问题，直到达到基本情况。 <strong>示例：</strong> 计算阶乘（n! = n * (n-1)! <strong>使用****基本情况</strong> 0! = 1）。</p><div class="language-cpp line-numbers-mode has-collapsed-lines collapsed" data-highlighter="prismjs" data-ext="cpp" style="--vp-collapsed-lines:15;"><pre><code class="language-cpp"><span class="line"><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span></span>
<span class="line"><span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">int</span> <span class="token function">factorial</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">return</span> n <span class="token operator">*</span> <span class="token function">factorial</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">int</span> n <span class="token punctuation">;</span></span>
<span class="line">    cin<span class="token operator">&gt;&gt;</span>n<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">int</span> result <span class="token operator">=</span> <span class="token function">factorial</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Factorial of &quot;</span> <span class="token operator">&lt;&lt;</span> n <span class="token operator">&lt;&lt;</span> <span class="token string">&quot; is &quot;</span> <span class="token operator">&lt;&lt;</span> result <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h2 id="_2-2-递归树" tabindex="-1"><a class="header-anchor" href="#_2-2-递归树"><span>2.2 递归树</span></a></h2><p><strong>示例：</strong> 计算阶乘（n! = n * (n-1)! 使用基本情况 0! = 1）。</p><figure><img src="https://p.ananas.chaoxing.com/star3/origin/ca16f71bb917b099aceb0bbcce864379" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="_3-分治算法的性质" tabindex="-1"><a class="header-anchor" href="#_3-分治算法的性质"><span>3. 分治算法的性质</span></a></h2><p><strong>分解：</strong> 将问题分解为更小的子问题（通常大小相等）。</p><p><strong>征服：</strong> 递归地解决子问题。</p><p><strong>合并：</strong> 合并子问题解以形成最终答案。</p><p><strong>基本情况：</strong> 直接解决小实例（例如，排序中的单个元素）。</p><p><strong>效率：</strong> 通常比暴力方法具有更好的时间复杂度。</p><h2 id="_4-分治算法示例及时间复杂度" tabindex="-1"><a class="header-anchor" href="#_4-分治算法示例及时间复杂度"><span>4. 分治算法示例及时间复杂度</span></a></h2><h2 id="_4-1-二分查找-o-log-n" tabindex="-1"><a class="header-anchor" href="#_4-1-二分查找-o-log-n"><span>4.1 二分查找 O(log n)</span></a></h2><div class="language-cpp line-numbers-mode has-collapsed-lines collapsed" data-highlighter="prismjs" data-ext="cpp" style="--vp-collapsed-lines:15;"><pre><code class="language-cpp"><span class="line"><span class="token keyword">bool</span> <span class="token function">check</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">/* ... */</span><span class="token punctuation">}</span> <span class="token comment">// 检查x是否满足某条件</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 区间[l, r]被划分成[l, mid]和[mid + 1, r]时(向左查找)使用：</span></span>
<span class="line"><span class="token keyword">int</span> <span class="token function">bsearch_1</span><span class="token punctuation">(</span><span class="token keyword">int</span> l<span class="token punctuation">,</span> <span class="token keyword">int</span> r<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">while</span> <span class="token punctuation">(</span>l <span class="token operator">&lt;</span> r<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">int</span> mid <span class="token operator">=</span> l <span class="token operator">+</span> r <span class="token operator">&gt;&gt;</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">check</span><span class="token punctuation">(</span>mid<span class="token punctuation">)</span><span class="token punctuation">)</span> r <span class="token operator">=</span> mid<span class="token punctuation">;</span>    <span class="token comment">// check()判断mid是否满足性质</span></span>
<span class="line">        <span class="token keyword">else</span> l <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">return</span> l<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token comment">// 区间[l, r]被划分成[l, mid - 1]和[mid, r]时（向右查找）使用：</span></span>
<span class="line"><span class="token keyword">int</span> <span class="token function">bsearch_2</span><span class="token punctuation">(</span><span class="token keyword">int</span> l<span class="token punctuation">,</span> <span class="token keyword">int</span> r<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">while</span> <span class="token punctuation">(</span>l <span class="token operator">&lt;</span> r<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">int</span> mid <span class="token operator">=</span> l <span class="token operator">+</span> r <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">&gt;&gt;</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">check</span><span class="token punctuation">(</span>mid<span class="token punctuation">)</span><span class="token punctuation">)</span> l <span class="token operator">=</span> mid<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">else</span> r <span class="token operator">=</span> mid <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">return</span> l<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h2 id="_4-2-大整数乘法-o-n-log-3-≈-o-n-1-59" tabindex="-1"><a class="header-anchor" href="#_4-2-大整数乘法-o-n-log-3-≈-o-n-1-59"><span>4.2 大整数乘法 O(n^(log 3)) ≈ O(n^1.59)</span></a></h2><figure><img src="https://img.picui.cn/free/2025/06/15/684ecdd0d3f57.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><div class="language-Cpp line-numbers-mode has-collapsed-lines collapsed" data-highlighter="prismjs" data-ext="Cpp" style="--vp-collapsed-lines:15;"><pre><code class="language-Cpp"><span class="line">// 大整数相加：竖式加法</span>
<span class="line">string add(string num1, string num2)</span>
<span class="line">{</span>
<span class="line">    int carry = 0;</span>
<span class="line">    string result;</span>
<span class="line"></span>
<span class="line">    // 从最低位开始逐位相加</span>
<span class="line">    int i = num1.length() - 1;</span>
<span class="line">    int j = num2.length() - 1;</span>
<span class="line"></span>
<span class="line">    while (i &gt;= 0 || j &gt;= 0 || carry &gt; 0)</span>
<span class="line">    {</span>
<span class="line">        int digit1 = (i &gt;= 0) ? num1[i] - &#39;0&#39; : 0;</span>
<span class="line">        int digit2 = (j &gt;= 0) ? num2[j] - &#39;0&#39; : 0;</span>
<span class="line"></span>
<span class="line">        int sum = digit1 + digit2 + carry;</span>
<span class="line">        carry = sum / 10;                      // 进位</span>
<span class="line">        result = to_string(sum % 10) + result; // 把当前位的结果加到最终结果的前面</span>
<span class="line">        i--;</span>
<span class="line">        j--;</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    return result;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">// 大整数相减：竖式减法</span>
<span class="line">string subtract(string num1, string num2)</span>
<span class="line">{</span>
<span class="line">    string result;</span>
<span class="line">    int borrow = 0;</span>
<span class="line"></span>
<span class="line">    // 从最低位开始逐位相减</span>
<span class="line">    int i = num1.length() - 1;</span>
<span class="line">    int j = num2.length() - 1;</span>
<span class="line"></span>
<span class="line">    while (i &gt;= 0)</span>
<span class="line">    {</span>
<span class="line">        int digit1 = num1[i] - &#39;0&#39;;</span>
<span class="line">        int digit2 = (j &gt;= 0) ? num2[j] - &#39;0&#39; : 0;</span>
<span class="line"></span>
<span class="line">        // 减去借位</span>
<span class="line">        int diff = digit1 - digit2 - borrow;</span>
<span class="line"></span>
<span class="line">        if (diff &lt; 0)</span>
<span class="line">        {</span>
<span class="line">            diff += 10; // 借位</span>
<span class="line">            borrow = 1;</span>
<span class="line">        }</span>
<span class="line">        else</span>
<span class="line">        {</span>
<span class="line">            borrow = 0;</span>
<span class="line">        }</span>
<span class="line"></span>
<span class="line">        result = to_string(diff) + result; // 把当前位的结果加到最终结果的前面</span>
<span class="line">        i--;</span>
<span class="line">        j--;</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    // 去除结果中的前导零</span>
<span class="line">    size_t pos = result.find_first_not_of(&#39;0&#39;);</span>
<span class="line">    if (pos != string::npos)</span>
<span class="line">    {</span>
<span class="line">        result = result.substr(pos);</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    return (result.empty()) ? &quot;0&quot; : result;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">// 大整数乘大整数</span>
<span class="line">string multiply(string num1, string num2)</span>
<span class="line">{</span>
<span class="line">    int n = num1.length();</span>
<span class="line">    int m = num2.length();</span>
<span class="line"></span>
<span class="line">    // 基本情况：如果有一个操作数为0，则结果为0</span>
<span class="line">    if (n == 0 || m == 0 || num1 == &quot;0&quot; || num2 == &quot;0&quot;)</span>
<span class="line">    {</span>
<span class="line">        return &quot;0&quot;;</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    // 基本情况：如果有一个操作数为1，则结果为另一个操作数</span>
<span class="line">    if (num1 == &quot;1&quot;)</span>
<span class="line">    {</span>
<span class="line">        return num2;</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    if (num2 == &quot;1&quot;)</span>
<span class="line">    {</span>
<span class="line">        return num1;</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    // 如果操作数很小，直接相乘</span>
<span class="line">    if (n &lt;= 2 || m &lt;= 2)</span>
<span class="line">    {</span>
<span class="line">        long long int result = stoll(num1) * stoll(num2);</span>
<span class="line">        return to_string(result);</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    // 将操作数分成两部分</span>
<span class="line">    int mid = min(n, m) / 2;</span>
<span class="line">    string num1Low = num1.substr(0, n - mid);</span>
<span class="line">    string num1High = num1.substr(n - mid);</span>
<span class="line">    string num2Low = num2.substr(0, m - mid);</span>
<span class="line">    string num2High = num2.substr(m - mid);</span>
<span class="line"></span>
<span class="line">    // 递归计算子问题的乘积</span>
<span class="line">    string z0 = multiply(num1Low, num2Low);</span>
<span class="line">    string z1 = multiply(num1High, num2High);</span>
<span class="line">    string z2 = multiply(add(num1Low, num1High), add(num2Low, num2High));</span>
<span class="line">    string z3 = subtract(subtract(z2, z1), z0);</span>
<span class="line"></span>
<span class="line">    // 计算最终的乘积</span>
<span class="line">    string result = add(add(z0 + string(mid * 2, &#39;0&#39;), z1), z3 + string(mid, &#39;0&#39;));</span>
<span class="line"></span>
<span class="line">    return result;</span>
<span class="line">}        //result</span>
<span class="line">    for (int i = 0; i &lt; max_len; i++) result += &#39;0&#39;;  // 高位部分补零</span>
<span class="line">    result = add(result, add(part1, part2));   </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h2 id="_4-3-哈密顿塔-o-2-n" tabindex="-1"><a class="header-anchor" href="#_4-3-哈密顿塔-o-2-n"><span>4.3 哈密顿塔 O(2^n)</span></a></h2><div class="hint-container warning"><p class="hint-container-title">注意</p><p>不属于分治，为递归，正式提交已删除</p></div><div class="language-cpp line-numbers-mode has-collapsed-lines collapsed" data-highlighter="prismjs" data-ext="cpp" style="--vp-collapsed-lines:15;"><pre><code class="language-cpp"><span class="line"></span>
<span class="line"><span class="token keyword">void</span> <span class="token function">Hanoi</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">,</span> <span class="token keyword">char</span> A<span class="token punctuation">,</span> <span class="token keyword">char</span> B<span class="token punctuation">,</span> <span class="token keyword">char</span> C<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span><span class="token punctuation">(</span>n<span class="token operator">&lt;</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span></span>
<span class="line">	<span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">{</span></span>
<span class="line">		<span class="token comment">//圆盘只有一个时，只需将其从A塔移到C塔</span></span>
<span class="line">		cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;move &quot;</span> <span class="token operator">&lt;&lt;</span> n <span class="token operator">&lt;&lt;</span> <span class="token string">&quot; from &quot;</span> <span class="token operator">&lt;&lt;</span> A <span class="token operator">&lt;&lt;</span> <span class="token string">&quot; to &quot;</span> <span class="token operator">&lt;&lt;</span> C <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line">	<span class="token keyword">else</span></span>
<span class="line">	<span class="token punctuation">{</span></span>
<span class="line">		<span class="token function">Hanoi</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> A<span class="token punctuation">,</span> C<span class="token punctuation">,</span> B<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//递归，把A塔上编号1~n-1的圆盘移到B上，以C为辅助塔</span></span>
<span class="line">		cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;move &quot;</span> <span class="token operator">&lt;&lt;</span> n <span class="token operator">&lt;&lt;</span> <span class="token string">&quot; from &quot;</span> <span class="token operator">&lt;&lt;</span> A <span class="token operator">&lt;&lt;</span> <span class="token string">&quot; to &quot;</span> <span class="token operator">&lt;&lt;</span> C <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span><span class="token comment">//把A塔上编号为n的圆盘移到C上</span></span>
<span class="line">		<span class="token function">Hanoi</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> B<span class="token punctuation">,</span> A<span class="token punctuation">,</span> C<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//递归，把B塔上编号1~n-1的圆盘移到C上，以A为辅助塔</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h2 id="_4-4-归并排序-o-n-log-n" tabindex="-1"><a class="header-anchor" href="#_4-4-归并排序-o-n-log-n"><span>4.4 归并排序 O(n log n)</span></a></h2><figure><img src="https://img.picui.cn/free/2025/06/15/684ecdd128dd5.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><div class="language-Cpp line-numbers-mode has-collapsed-lines collapsed" data-highlighter="prismjs" data-ext="Cpp" style="--vp-collapsed-lines:15;"><pre><code class="language-Cpp"><span class="line">/* 合并左子数组和右子数组 */</span>
<span class="line">void merge(int nums[], int left, int mid, int right) {</span>
<span class="line">    // 左子数组区间为 [left, mid], 右子数组区间为 [mid+1, right]</span>
<span class="line">    // 创建一个临时数组 tmp ，用于存放合并后的结果</span>
<span class="line">    int tmp[right - left + 1];</span>
<span class="line">    // 初始化左子数组和右子数组的起始索引</span>
<span class="line">    int i = left, j = mid + 1, k = 0;</span>
<span class="line">    // 当左右子数组都还有元素时，进行比较并将较小的元素复制到临时数组中</span>
<span class="line">    while (i &lt;= mid &amp;&amp; j &lt;= right) {</span>
<span class="line">        if (nums[i] &lt;= nums[j])</span>
<span class="line">            tmp[k++] = nums[i++];</span>
<span class="line">        else</span>
<span class="line">            tmp[k++] = nums[j++];</span>
<span class="line">    }</span>
<span class="line">    // 将左子数组和右子数组的剩余元素复制到临时数组中</span>
<span class="line">    while (i &lt;= mid) {</span>
<span class="line">        tmp[k++] = nums[i++];</span>
<span class="line">    }</span>
<span class="line">    while (j &lt;= right) {</span>
<span class="line">        tmp[k++] = nums[j++];</span>
<span class="line">    }</span>
<span class="line">    // 将临时数组 tmp 中的元素复制回原数组 nums 的对应区间</span>
<span class="line">    for (k = 0; k &lt; sizeof(tmp) / sizeof(tmp[0]); k++) {</span>
<span class="line">        nums[left + k] = tmp[k];</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">/* 归并排序 */</span>
<span class="line">void mergeSort(int nums[], int left, int right) {</span>
<span class="line">    // 终止条件</span>
<span class="line">    if (left &gt;= right)</span>
<span class="line">        return; // 当子数组长度为 1 时终止递归</span>
<span class="line">    // 划分阶段</span>
<span class="line">    int mid = left + (right - left) / 2;    // 计算中点</span>
<span class="line">    mergeSort(nums, left, mid);      // 递归左子数组</span>
<span class="line">    mergeSort(nums, mid + 1, right); // 递归右子数组</span>
<span class="line">    // 合并阶段</span>
<span class="line">    merge(nums, left, mid, right);</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h2 id="_4-5-快速排序-平均情况-o-n-log-n-最好情况-o-n-log-n-最坏情况-o-n-2" tabindex="-1"><a class="header-anchor" href="#_4-5-快速排序-平均情况-o-n-log-n-最好情况-o-n-log-n-最坏情况-o-n-2"><span>4.5 快速排序 平均情况 O(n log n) ; 最好情况 O(n log n) ; 最坏情况 O(n^2)</span></a></h2><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre><code class="language-cpp"><span class="line"><span class="token keyword">void</span> <span class="token function">quick_sort</span><span class="token punctuation">(</span><span class="token keyword">int</span> q<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">int</span> l<span class="token punctuation">,</span> <span class="token keyword">int</span> r<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>l <span class="token operator">&gt;=</span> r<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">int</span> i <span class="token operator">=</span> l <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> j <span class="token operator">=</span> r <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> x <span class="token operator">=</span> q<span class="token punctuation">[</span>l <span class="token operator">+</span> r <span class="token operator">&gt;&gt;</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> j<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">do</span> i <span class="token operator">++</span> <span class="token punctuation">;</span> <span class="token keyword">while</span> <span class="token punctuation">(</span>q<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;</span> x<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">do</span> j <span class="token operator">--</span> <span class="token punctuation">;</span> <span class="token keyword">while</span> <span class="token punctuation">(</span>q<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">&gt;</span> x<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> j<span class="token punctuation">)</span> <span class="token function">swap</span><span class="token punctuation">(</span>q<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> q<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token function">quick_sort</span><span class="token punctuation">(</span>q<span class="token punctuation">,</span> l<span class="token punctuation">,</span> j<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">quick_sort</span><span class="token punctuation">(</span>q<span class="token punctuation">,</span> j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> r<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-6-快速选择-平均情况-o-n-最好情况-o-n-最坏情况-o-n-2" tabindex="-1"><a class="header-anchor" href="#_4-6-快速选择-平均情况-o-n-最好情况-o-n-最坏情况-o-n-2"><span>4.6 快速选择 平均情况 O(n) ; 最好情况 O(n) ; 最坏情况 O(n^2)</span></a></h2><div class="language-cpp line-numbers-mode has-collapsed-lines collapsed" data-highlighter="prismjs" data-ext="cpp" style="--vp-collapsed-lines:15;"><pre><code class="language-cpp"><span class="line"><span class="token keyword">int</span> <span class="token function">partition</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">int</span> left<span class="token punctuation">,</span> <span class="token keyword">int</span> right<span class="token punctuation">,</span> <span class="token keyword">int</span> pivot<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">int</span> i <span class="token operator">=</span> left<span class="token punctuation">,</span> j <span class="token operator">=</span> right<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;=</span> j<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">while</span> <span class="token punctuation">(</span>a<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;</span> pivot<span class="token punctuation">)</span></span>
<span class="line">            i<span class="token operator">++</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">while</span> <span class="token punctuation">(</span>a<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">&gt;</span> pivot<span class="token punctuation">)</span></span>
<span class="line">            j<span class="token operator">--</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> j<span class="token punctuation">)</span></span>
<span class="line">            <span class="token function">swap</span><span class="token punctuation">(</span>a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> a<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">else</span></span>
<span class="line">            <span class="token keyword">return</span> j<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">int</span> <span class="token function">quickSelect</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">int</span> left<span class="token punctuation">,</span> <span class="token keyword">int</span> right<span class="token punctuation">,</span> <span class="token keyword">int</span> k<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>left <span class="token operator">==</span> right<span class="token punctuation">)</span></span>
<span class="line">        <span class="token keyword">return</span> a<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">int</span> pivot <span class="token operator">=</span> a<span class="token punctuation">[</span>left <span class="token operator">+</span> right <span class="token operator">&gt;&gt;</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">int</span> pos <span class="token operator">=</span> <span class="token function">partition</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> left<span class="token punctuation">,</span> right<span class="token punctuation">,</span> pivot<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 找到pivot的位置</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>pos <span class="token operator">==</span> k <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token keyword">return</span> a<span class="token punctuation">[</span>pos<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>pos <span class="token operator">&gt;</span> k <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>            <span class="token comment">// pivot在k左边</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token function">quickSelect</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> left<span class="token punctuation">,</span> pos <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> k<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">else</span>                            <span class="token comment">// pivot在k右边</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token function">quickSelect</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> pos <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> right<span class="token punctuation">,</span> k<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h2 id="_4-7-最近点对问题-o-n-log-n" tabindex="-1"><a class="header-anchor" href="#_4-7-最近点对问题-o-n-log-n"><span>4.7 最近点对问题 O(n log n)</span></a></h2><div class="language-cpp line-numbers-mode has-collapsed-lines collapsed" data-highlighter="prismjs" data-ext="cpp" style="--vp-collapsed-lines:15;"><pre><code class="language-cpp"><span class="line"><span class="token comment">//定义点class Point</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line"><span class="token keyword">public</span><span class="token operator">:</span></span>
<span class="line">    <span class="token keyword">int</span> x<span class="token punctuation">,</span> y<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 按X坐标排序的比较函数</span></span>
<span class="line"><span class="token keyword">int</span> <span class="token function">compareX</span><span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token keyword">void</span> <span class="token operator">*</span>a<span class="token punctuation">,</span> <span class="token keyword">const</span> <span class="token keyword">void</span> <span class="token operator">*</span>b<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    Point <span class="token operator">*</span>p1 <span class="token operator">=</span> <span class="token punctuation">(</span>Point <span class="token operator">*</span><span class="token punctuation">)</span>a<span class="token punctuation">,</span> <span class="token operator">*</span>p2 <span class="token operator">=</span> <span class="token punctuation">(</span>Point <span class="token operator">*</span><span class="token punctuation">)</span>b<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">(</span>p1<span class="token operator">-&gt;</span>x <span class="token operator">-</span> p2<span class="token operator">-&gt;</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 按Y坐标排序的比较函数</span></span>
<span class="line"><span class="token keyword">int</span> <span class="token function">compareY</span><span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token keyword">void</span> <span class="token operator">*</span>a<span class="token punctuation">,</span> <span class="token keyword">const</span> <span class="token keyword">void</span> <span class="token operator">*</span>b<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    Point <span class="token operator">*</span>p1 <span class="token operator">=</span> <span class="token punctuation">(</span>Point <span class="token operator">*</span><span class="token punctuation">)</span>a<span class="token punctuation">,</span> <span class="token operator">*</span>p2 <span class="token operator">=</span> <span class="token punctuation">(</span>Point <span class="token operator">*</span><span class="token punctuation">)</span>b<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">(</span>p1<span class="token operator">-&gt;</span>y <span class="token operator">-</span> p2<span class="token operator">-&gt;</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 计算两点之间的距离</span></span>
<span class="line"><span class="token keyword">float</span> <span class="token function">dist</span><span class="token punctuation">(</span>Point p1<span class="token punctuation">,</span> Point p2<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token function">sqrt</span><span class="token punctuation">(</span><span class="token punctuation">(</span>p1<span class="token punctuation">.</span>x <span class="token operator">-</span> p2<span class="token punctuation">.</span>x<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token punctuation">(</span>p1<span class="token punctuation">.</span>x <span class="token operator">-</span> p2<span class="token punctuation">.</span>x<span class="token punctuation">)</span> <span class="token operator">+</span></span>
<span class="line">                <span class="token punctuation">(</span>p1<span class="token punctuation">.</span>y <span class="token operator">-</span> p2<span class="token punctuation">.</span>y<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token punctuation">(</span>p1<span class="token punctuation">.</span>y <span class="token operator">-</span> p2<span class="token punctuation">.</span>y<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 暴力方法，用于找到点集P中任意两点的最小距离</span></span>
<span class="line"><span class="token keyword">float</span> <span class="token function">bruteForce</span><span class="token punctuation">(</span>Point P<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">int</span> n<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">float</span> minDist <span class="token operator">=</span> FLT_MAX<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span></span>
<span class="line">        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> <span class="token operator">++</span>j<span class="token punctuation">)</span></span>
<span class="line">            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">dist</span><span class="token punctuation">(</span>P<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> P<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> minDist<span class="token punctuation">)</span></span>
<span class="line">                minDist <span class="token operator">=</span> <span class="token function">dist</span><span class="token punctuation">(</span>P<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> P<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> minDist<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 返回两个浮点数中的较小值</span></span>
<span class="line"><span class="token keyword">float</span> <span class="token function">min</span><span class="token punctuation">(</span><span class="token keyword">float</span> x<span class="token punctuation">,</span> <span class="token keyword">float</span> y<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">(</span>x <span class="token operator">&lt;</span> y<span class="token punctuation">)</span> <span class="token operator">?</span> x <span class="token operator">:</span> y<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 查找strip中点对的最小距离</span></span>
<span class="line"><span class="token comment">// strip[]中的点按Y坐标排序，且所有点到中间线的距离小于d</span></span>
<span class="line"><span class="token keyword">float</span> <span class="token function">stripClosest</span><span class="token punctuation">(</span>Point strip<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">int</span> size<span class="token punctuation">,</span> <span class="token keyword">float</span> d<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">float</span> minDist <span class="token operator">=</span> d<span class="token punctuation">;</span> <span class="token comment">// 初始化最小距离为d</span></span>
<span class="line"></span>
<span class="line">    <span class="token function">qsort</span><span class="token punctuation">(</span>strip<span class="token punctuation">,</span> size<span class="token punctuation">,</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>Point<span class="token punctuation">)</span><span class="token punctuation">,</span> compareY<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 遍历strip中的每个点，并尝试与后续点配对</span></span>
<span class="line">    <span class="token comment">// 只要y坐标之差小于当前最小距离</span></span>
<span class="line">    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> size<span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span></span>
<span class="line">        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> size <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>strip<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">.</span>y <span class="token operator">-</span> strip<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>y<span class="token punctuation">)</span> <span class="token operator">&lt;</span> minDist<span class="token punctuation">;</span> <span class="token operator">++</span>j<span class="token punctuation">)</span></span>
<span class="line">            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">dist</span><span class="token punctuation">(</span>strip<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> strip<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> minDist<span class="token punctuation">)</span></span>
<span class="line">                minDist <span class="token operator">=</span> <span class="token function">dist</span><span class="token punctuation">(</span>strip<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> strip<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">return</span> minDist<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 递归函数，用于查找点集P的最小距离</span></span>
<span class="line"><span class="token keyword">float</span> <span class="token function">closestUtil</span><span class="token punctuation">(</span>Point P<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">int</span> n<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 如果点数为2或3，使用暴力方法</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">&lt;=</span> <span class="token number">3</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token function">bruteForce</span><span class="token punctuation">(</span>P<span class="token punctuation">,</span> n<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 找到中间点</span></span>
<span class="line">    <span class="token keyword">int</span> mid <span class="token operator">=</span> n <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span></span>
<span class="line">    Point midPoint <span class="token operator">=</span> P<span class="token punctuation">[</span>mid<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 计算中间线左侧的最小距离dl</span></span>
<span class="line">    <span class="token keyword">float</span> dl <span class="token operator">=</span> <span class="token function">closestUtil</span><span class="token punctuation">(</span>P<span class="token punctuation">,</span> mid<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">// 计算中间线右侧的最小距离dr</span></span>
<span class="line">    <span class="token keyword">float</span> dr <span class="token operator">=</span> <span class="token function">closestUtil</span><span class="token punctuation">(</span>P <span class="token operator">+</span> mid<span class="token punctuation">,</span> n <span class="token operator">-</span> mid<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 取dl和dr中的较小值为d</span></span>
<span class="line">    <span class="token keyword">float</span> d <span class="token operator">=</span> <span class="token function">min</span><span class="token punctuation">(</span>dl<span class="token punctuation">,</span> dr<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 构建strip数组，包含所有距离中间线小于d的点</span></span>
<span class="line">    Point strip<span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">abs</span><span class="token punctuation">(</span>P<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>x <span class="token operator">-</span> midPoint<span class="token punctuation">.</span>x<span class="token punctuation">)</span> <span class="token operator">&lt;</span> d<span class="token punctuation">)</span></span>
<span class="line">            strip<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> P<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> j<span class="token operator">++</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 查找strip中的最小距离，并与d比较，返回较小值</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token function">min</span><span class="token punctuation">(</span>d<span class="token punctuation">,</span> <span class="token function">stripClosest</span><span class="token punctuation">(</span>strip<span class="token punctuation">,</span> j<span class="token punctuation">,</span> d<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 调用closestUtil()查找最小距离</span></span>
<span class="line"><span class="token keyword">float</span> <span class="token function">closest</span><span class="token punctuation">(</span>Point P<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">int</span> n<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">qsort</span><span class="token punctuation">(</span>P<span class="token punctuation">,</span> n<span class="token punctuation">,</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>Point<span class="token punctuation">)</span><span class="token punctuation">,</span> compareX<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">return</span> <span class="token function">closestUtil</span><span class="token punctuation">(</span>P<span class="token punctuation">,</span> n<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p><strong>基本情况：</strong> 当点数≤3 时，使用暴力方法计算所有两两之间的距离。</p><p><strong>分而治之：</strong></p><ol><li>按 x 坐标排序，以中位数分割</li><li>递归查找 DL(left) &amp; DR(right)</li><li>D 是 DL 和 DR 的最小值</li></ol><p><strong>合并步骤：</strong> 沿着中位数线检查 D 宽度带内的点（按 y 坐标排序），比较相邻点； <strong>合并步骤通过 y 排序和有限比较实现 O(n)时间复杂度</strong></p>`,43)]))}const u=s(t,[["render",l]]),r=JSON.parse('{"path":"/zh/%E7%AE%97%E6%B3%95%E8%AE%BE%E8%AE%A1%E4%B8%8E%E5%88%86%E6%9E%90%E8%AF%BE%E7%A8%8B%E6%94%BB%E7%95%A5/homework1.html","title":"算法设计与分析作业1","lang":"zh-CN","frontmatter":{"icon":"pen-to-square","date":"2025-04-23T00:00:00.000Z","cover":"https://free.picui.cn/free/2025/06/15/684eb82931fbc.jpg","footer":"<a href=https://www.gnu.org/licenses/gpl-3.0.html style=\\"color:#808080\\"> GPL-3.0 Licensed </a> | Copyright © 2025-present <a href=\\"https://github.com/GALA-Lin\\" style=\\"color:#808080\\">GALA-Lin</a>","copyright":false,"category":["算法设计与分析作业"],"tag":["算法概念","递归","分治"],"description":"算法设计与分析作业1 1. 第一章概述： 算法分析： 如何衡量效率（时间/空间复杂度）。 渐近符号 （O，Ω，Θ）用于描述增长速率。 2. 什么是递归？ 2.1 调用栈 递归是一种编程技术，其中函数调用自身来解决同一问题的较小实例。它主要涉及两个阶段： 调用： 程序在此处反复调用自身，通常使用逐渐减小或更简单的参数，朝着\\"终止条件\\"前进。 返回： 触发...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"算法设计与分析作业1\\",\\"image\\":[\\"https://p.ananas.chaoxing.com/star3/origin/ca16f71bb917b099aceb0bbcce864379\\",\\"https://img.picui.cn/free/2025/06/15/684ecdd0d3f57.png\\",\\"https://img.picui.cn/free/2025/06/15/684ecdd128dd5.png\\"],\\"datePublished\\":\\"2025-04-23T00:00:00.000Z\\",\\"dateModified\\":\\"2025-07-20T13:16:13.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"GALA-Lin\\",\\"url\\":\\"https://gala-lin.github.io\\"}]}"],["meta",{"property":"og:url","content":"https://gala-lin.github.io/zh/%E7%AE%97%E6%B3%95%E8%AE%BE%E8%AE%A1%E4%B8%8E%E5%88%86%E6%9E%90%E8%AF%BE%E7%A8%8B%E6%94%BB%E7%95%A5/homework1.html"}],["meta",{"property":"og:site_name","content":"22lin04"}],["meta",{"property":"og:title","content":"算法设计与分析作业1"}],["meta",{"property":"og:description","content":"算法设计与分析作业1 1. 第一章概述： 算法分析： 如何衡量效率（时间/空间复杂度）。 渐近符号 （O，Ω，Θ）用于描述增长速率。 2. 什么是递归？ 2.1 调用栈 递归是一种编程技术，其中函数调用自身来解决同一问题的较小实例。它主要涉及两个阶段： 调用： 程序在此处反复调用自身，通常使用逐渐减小或更简单的参数，朝着\\"终止条件\\"前进。 返回： 触发..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://free.picui.cn/free/2025/06/15/684eb82931fbc.jpg"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-07-20T13:16:13.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://free.picui.cn/free/2025/06/15/684eb82931fbc.jpg"}],["meta",{"name":"twitter:image:alt","content":"算法设计与分析作业1"}],["meta",{"property":"article:tag","content":"分治"}],["meta",{"property":"article:tag","content":"递归"}],["meta",{"property":"article:tag","content":"算法概念"}],["meta",{"property":"article:published_time","content":"2025-04-23T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-07-20T13:16:13.000Z"}]]},"git":{"createdTime":1749942657000,"updatedTime":1753017373000,"contributors":[{"name":"Linsen HU","username":"","email":"1563883475@qq.com","commits":9},{"name":"GALA-Lin","username":"GALA-Lin","email":"140772868+GALA-Lin@users.noreply.github.com","commits":1,"url":"https://github.com/GALA-Lin"}]},"readingTime":{"minutes":8.23,"words":2469},"filePathRelative":"zh/算法设计与分析课程攻略/homework1.md","excerpt":"\\n<h1>1. 第一章概述：</h1>\\n<p><strong>算法分析：</strong> 如何衡量效率（时间/空间复杂度）。</p>\\n<p><strong>渐近符号</strong> （O，Ω，Θ）用于描述增长速率。</p>\\n<h1>2. 什么是递归？</h1>\\n<h2>2.1 调用栈</h2>\\n<p>递归是一种编程技术，其中函数调用自身来解决同一问题的较小实例。它主要涉及两个阶段：</p>\\n<p><strong>调用：</strong> 程序在此处反复调用自身，通常使用逐渐减小或更简单的参数，朝着\\"终止条件\\"前进。</p>\\n<p><strong>返回：</strong> 触发\\"终止条件\\"后，程序开始从最深层的递归函数返回，逐层汇总每层的结果。递归是一种编程技术，函数通过调用自身来解决同一问题的较小实例。</p>","autoDesc":true}');export{u as comp,r as data};
