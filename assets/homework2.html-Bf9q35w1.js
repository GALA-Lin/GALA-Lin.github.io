import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,f as i,o as l}from"./app-sWZ44eIO.js";const e={};function p(d,s){return l(),a("div",null,s[0]||(s[0]=[i(`<h1 id="算法设计与分析作业2" tabindex="-1"><a class="header-anchor" href="#算法设计与分析作业2"><span>算法设计与分析作业2</span></a></h1><h1 id="_1-binary-search" tabindex="-1"><a class="header-anchor" href="#_1-binary-search"><span>1. binary search</span></a></h1><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>FUNCTION binary_search1(arr[], low, high, x):</span></span>
<span class="line"><span>    WHILE low &lt;= high:  # 持续搜索直到搜索区间无效</span></span>
<span class="line"><span>        mid = (low + high) &gt;&gt; 1  # 位运算计算中间索引 (等价于/2但更快)</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        IF arr[mid] == x:        # 找到目标元素</span></span>
<span class="line"><span>            PRINT &quot;Found at index &quot; + mid</span></span>
<span class="line"><span>            RETURE</span></span>
<span class="line"><span>        ELSE IF arr[mid] &lt; x:    # 目标在右半区</span></span>
<span class="line"><span>            low = mid + 1        # 调整左边界</span></span>
<span class="line"><span>        ELSE:                    # 目标在左半区</span></span>
<span class="line"><span>            high = mid - 1       # 调整右边界</span></span>
<span class="line"><span>    END WHILE</span></span>
<span class="line"><span>    PRINT &quot;Element not found&quot;    # 搜索空间耗尽未找到</span></span>
<span class="line"><span>RETURE</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 时间复杂度 O(log n)，空间复杂度 O(1)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_2-large-integer-multiplication" tabindex="-1"><a class="header-anchor" href="#_2-large-integer-multiplication"><span>2. Large integer multiplication</span></a></h1><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span># 大整数加法</span></span>
<span class="line"><span>FUNCTION add(num1, num2):</span></span>
<span class="line"><span>    carry = 0                  # 进位初始化</span></span>
<span class="line"><span>    result = &quot;&quot;                # 结果字符串</span></span>
<span class="line"><span>    i = len(num1)-1            # 从个位开始处理num1</span></span>
<span class="line"><span>    j = len(num2)-1            # 从个位开始处理num2</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    WHILE i &gt;=0 OR j &gt;=0 OR carry &gt;0:</span></span>
<span class="line"><span>        digit1 = num1[i] - &#39;0&#39; if i &gt;=0 else 0  # 获取当前位数字</span></span>
<span class="line"><span>        digit2 = num2[j] - &#39;0&#39; if j &gt;=0 else 0</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        sum = digit1 + digit2 + carry</span></span>
<span class="line"><span>        carry = sum // 10       # 计算进位</span></span>
<span class="line"><span>        result = str(sum % 10) + result  # 注意结果从高位插入</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        i -= 1; j -= 1          # 移动指针</span></span>
<span class="line"><span>RETURN result</span></span>
<span class="line"><span># 结果拼接顺序是反向的，最后需要处理剩余进位</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 大整数减法</span></span>
<span class="line"><span>FUNCTION subtract(num1, num2):</span></span>
<span class="line"><span>    borrow = 0                 # 借位初始化</span></span>
<span class="line"><span>    result = &quot;&quot;</span></span>
<span class="line"><span>    i = len(num1)-1            # 从个位开始处理</span></span>
<span class="line"><span>    j = len(num2)-1</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    WHILE i &gt;=0:</span></span>
<span class="line"><span>        digit1 = num1[i] - &#39;0&#39;</span></span>
<span class="line"><span>        digit2 = num2[j] - &#39;0&#39; if j &gt;=0 else 0</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        diff = digit1 - digit2 - borrow</span></span>
<span class="line"><span>        IF diff &lt;0:            # 需要借位</span></span>
<span class="line"><span>            diff +=10</span></span>
<span class="line"><span>            borrow =1</span></span>
<span class="line"><span>        ELSE:</span></span>
<span class="line"><span>            borrow =0</span></span>
<span class="line"><span>            </span></span>
<span class="line"><span>        result = str(diff) + result</span></span>
<span class="line"><span>        i -=1; j -=1</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    # 去除前导零</span></span>
<span class="line"><span>    result = result.lstrip(&#39;0&#39;)</span></span>
<span class="line"><span>RETURN &quot;0&quot; if result == &quot;&quot; else result</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 大整数乘法</span></span>
<span class="line"><span>FUNCTION multiply(num1, num2):</span></span>
<span class="line"><span>    IF num1==&quot;0&quot; OR num2==&quot;0&quot;: RETURN &quot;0&quot;      # 边界条件处理</span></span>
<span class="line"><span>    IF num1==&quot;1&quot;: RETURN num2</span></span>
<span class="line"><span>    IF num2==&quot;1&quot;: RETURN num1</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    # 小数字直接计算</span></span>
<span class="line"><span>    IF len(num1)&lt;=2 OR len(num2)&lt;=2:</span></span>
<span class="line"><span>        RETURN str(int(num1)*int(num2))</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    # 分割数字为高低位</span></span>
<span class="line"><span>    mid = min(len(num1), len(num2)) // 2</span></span>
<span class="line"><span>    high1 = num1[:-mid] or &quot;0&quot;   # 高位部分</span></span>
<span class="line"><span>    low1 = num1[-mid:] </span></span>
<span class="line"><span>    high2 = num2[:-mid] or &quot;0&quot;</span></span>
<span class="line"><span>    low2 = num2[-mid:]</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    # 递归计算三个乘积</span></span>
<span class="line"><span>    z0 = multiply(high1, high2)            # 高位相乘</span></span>
<span class="line"><span>    z1 = multiply(low1, low2)              # 低位相乘</span></span>
<span class="line"><span>    sum1 = add(high1, low1)                # 高低位和</span></span>
<span class="line"><span>    sum2 = add(high2, low2)</span></span>
<span class="line"><span>    z2 = multiply(sum1, sum2)              # 和的乘积</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    # 组合计算结果</span></span>
<span class="line"><span>    z3 = subtract(subtract(z2, z1), z0)    # z2 - z1 - z0</span></span>
<span class="line"><span>    part0 = z0 + &quot;0&quot;*(2*mid)               # 左移2mid位</span></span>
<span class="line"><span>    part1 = z3 + &quot;0&quot;*mid                   # 左移mid位</span></span>
<span class="line"><span>RETURN add(add(part0, part1), z1)  </span></span>
<span class="line"><span># 时间复杂度O(n^log3)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_3-merge-sort" tabindex="-1"><a class="header-anchor" href="#_3-merge-sort"><span>3. Merge sort</span></a></h1><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span># 归并排序主函数</span></span>
<span class="line"><span>FUNCTION mergeSort(nums[], left, right):</span></span>
<span class="line"><span>    IF left &gt;= right:                     # 递归终止条件（子数组长度为1）</span></span>
<span class="line"><span>        RETURN</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    mid = left + (right - left) // 2      # 计算中点（避免整数溢出）</span></span>
<span class="line"><span>    mergeSort(nums, left, mid)            # 递归排序左半部 [left, mid]</span></span>
<span class="line"><span>    mergeSort(nums, mid+1, right)         # 递归排序右半部 [mid+1, right]</span></span>
<span class="line"><span>    merge(nums, left, mid, right)         # 合并两个有序子数组</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 合并两个有序子数组</span></span>
<span class="line"><span>FUNCTION merge(nums[], left, mid, right):</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    tmp = new array of size (right - left + 1)</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    i = left      # 左子数组起始指针 [left, mid]</span></span>
<span class="line"><span>    j = mid + 1   # 右子数组起始指针 [mid+1, right]</span></span>
<span class="line"><span>    k = 0         # 临时数组指针</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    # 合并操作：当两个子数组都有元素时</span></span>
<span class="line"><span>    WHILE i &lt;= mid AND j &lt;= right:</span></span>
<span class="line"><span>        IF nums[i] &lt;= nums[j]:</span></span>
<span class="line"><span>            tmp[k] = nums[i]</span></span>
<span class="line"><span>            i += 1</span></span>
<span class="line"><span>        ELSE:</span></span>
<span class="line"><span>            tmp[k] = nums[j]</span></span>
<span class="line"><span>            j += 1</span></span>
<span class="line"><span>        k += 1</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    # 处理左子数组剩余元素</span></span>
<span class="line"><span>    WHILE i &lt;= mid:</span></span>
<span class="line"><span>        tmp[k] = nums[i]</span></span>
<span class="line"><span>        i += 1; k += 1</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    # 处理右子数组剩余元素</span></span>
<span class="line"><span>    WHILE j &lt;= right:</span></span>
<span class="line"><span>        tmp[k] = nums[j]</span></span>
<span class="line"><span>        j += 1; k += 1</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    # 将合并结果拷贝回原数组</span></span>
<span class="line"><span>    FOR m FROM 0 TO k-1:</span></span>
<span class="line"><span>        nums[left + m] = tmp[m]</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 时间复杂度：O(n log n)</span></span>
<span class="line"><span># 空间复杂度：O(n) 需要临时数组</span></span>
<span class="line"><span># 稳定排序：当元素相等时优先取左子数组元素</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_4-quick-sort" tabindex="-1"><a class="header-anchor" href="#_4-quick-sort"><span>4. Quick sort</span></a></h1><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span># 快速排序主函数</span></span>
<span class="line"><span>FUNCTION quick_sort(q[], l, r):</span></span>
<span class="line"><span>    IF l &gt;= r: RETURN</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    # 初始化双指针和基准值</span></span>
<span class="line"><span>    i = l - 1</span></span>
<span class="line"><span>    j = r + 1</span></span>
<span class="line"><span>    x = q[(l + r) &gt;&gt; 1]                 # 选择中间元素为基准（位运算代替除法）</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    WHILE True:                         </span></span>
<span class="line"><span>        REPEAT i += 1 UNTIL q[i] &gt;= x    # 找左边第一个 &gt;=x 的元素</span></span>
<span class="line"><span>        REPEAT j -= 1 UNTIL q[j] &lt;= x    # 找右边第一个 &lt;=x 的元素</span></span>
<span class="line"><span>        IF i &lt; j:                        # 当指针未交叉时交换元素</span></span>
<span class="line"><span>            swap(q[i], q[j])</span></span>
<span class="line"><span>        ELSE:                            # 分区完成退出循环</span></span>
<span class="line"><span>            BREAK</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    # 递归处理子区间</span></span>
<span class="line"><span>    quick_sort(q, l, j)                 # 处理左半区 [l, j]</span></span>
<span class="line"><span>    quick_sort(q, j + 1, r)             # 处理右半区 [j+1, r]</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 时间复杂度：平均O(n log n)，最坏O(n²)（取决于基准选择）</span></span>
<span class="line"><span># 空间复杂度：O(log n) 递归栈深度</span></span>
<span class="line"><span># 不稳定排序：元素交换可能改变相等元素的顺序</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_5-linear-time-selection-algorithm" tabindex="-1"><a class="header-anchor" href="#_5-linear-time-selection-algorithm"><span>5. Linear time selection algorithm</span></a></h1><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span># 分区函数</span></span>
<span class="line"><span>FUNCTION partition(a[], left, right, pivot) -&gt; int:</span></span>
<span class="line"><span>    i = left                      # 左扫描指针 [关键注释：初始化为左边界]</span></span>
<span class="line"><span>    j = right                     # 右扫描指针 [初始化为右边界]</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    WHILE i &lt;= j:                 # 扫描直到指针交叉</span></span>
<span class="line"><span>        WHILE a[i] &lt; pivot:       # 找左边第一个 &gt;= pivot的元素</span></span>
<span class="line"><span>            i += 1</span></span>
<span class="line"><span>        WHILE a[j] &gt; pivot:       # 找右边第一个 &lt;= pivot的元素</span></span>
<span class="line"><span>            j -= 1</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        IF i &lt; j:                 # 当指针未交叉时交换元素</span></span>
<span class="line"><span>            swap(a[i], a[j])</span></span>
<span class="line"><span>        ELSE:                     # 分区完成返回分界点</span></span>
<span class="line"><span>            RETURN j              # [注意] j是最终右分区的右边界</span></span>
<span class="line"><span>    RETURN -1                     # 无效情况（通常不会发生）</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 快速选择算法（寻找第k小元素）</span></span>
<span class="line"><span>FUNCTION quickSelect(a[], left, right, k) -&gt; int:</span></span>
<span class="line"><span>    IF left == right:             # 递归终止条件：只剩一个元素</span></span>
<span class="line"><span>        RETURN a[left]</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    # 选择中间元素作为基准（可能溢出，建议用left + (right-left)/2）</span></span>
<span class="line"><span>    pivot = a[(left + right) &gt;&gt; 1] </span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    # 执行分区操作 [关键注释：pos是分界点索引]</span></span>
<span class="line"><span>    pos = partition(a, left, right, pivot)</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    IF pos == k - 1:             # 找到第k小元素</span></span>
<span class="line"><span>        RETURN a[pos]</span></span>
<span class="line"><span>    ELIF pos &gt; k - 1:            # 目标在左分区 [left, pos-1]</span></span>
<span class="line"><span>        RETURN quickSelect(a, left, pos-1, k)</span></span>
<span class="line"><span>    ELSE:                        # 目标在右分区 [pos+1, right]</span></span>
<span class="line"><span>        RETURN quickSelect(a, pos+1, right, k)</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 时间复杂度：平均O(n)，最坏O(n²)（依赖pivot选择）</span></span>
<span class="line"><span># 空间复杂度：O(1) 原地操作（递归栈深度O(log n)）</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_6-closest-point-pair-algorithm" tabindex="-1"><a class="header-anchor" href="#_6-closest-point-pair-algorithm"><span>6. Closest point pair algorithm</span></a></h1><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span># 点结构定义（包含x,y坐标）</span></span>
<span class="line"><span>CLASS Point:</span></span>
<span class="line"><span>    x: int</span></span>
<span class="line"><span>    y: int</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 计算两点欧式距离</span></span>
<span class="line"><span>FUNCTION dist(p1: Point, p2: Point) -&gt; float:</span></span>
<span class="line"><span>    RETURN sqrt((p1.x-p2.x)^2 + (p1.y-p2.y)^2)</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 暴力求解最近点对（当n&lt;=3时使用）</span></span>
<span class="line"><span>FUNCTION bruteForce(P: list[Point]) -&gt; float:</span></span>
<span class="line"><span>    minDist = INFINITY</span></span>
<span class="line"><span>    FOR i FROM 0 TO len(P)-1:</span></span>
<span class="line"><span>        FOR j FROM i+1 TO len(P)-1:  # 避免重复计算</span></span>
<span class="line"><span>            minDist = min(minDist, dist(P[i], P[j]))</span></span>
<span class="line"><span>    RETURN minDist</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 处理最近点对</span></span>
<span class="line"><span>FUNCTION stripClosest(strip: list[Point], d: float) -&gt; float:</span></span>
<span class="line"><span>    sort(strip, key=Point.y)  # 按y坐标排序优化比较</span></span>
<span class="line"><span>    minDist = d</span></span>
<span class="line"><span>    FOR i FROM 0 TO len(strip)-1:</span></span>
<span class="line"><span>        # 只需检查后续y差&lt;d的点（最多6个点）</span></span>
<span class="line"><span>        FOR j FROM i+1 TO min(i+7, len(strip)-1):</span></span>
<span class="line"><span>            IF (strip[j].y - strip[i].y) &gt;= minDist: BREAK</span></span>
<span class="line"><span>            minDist = min(minDist, dist(strip[i], strip[j]))</span></span>
<span class="line"><span>    RETURN minDist</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 分治递归核心函数</span></span>
<span class="line"><span>FUNCTION closestUtil(P: list[Point]) -&gt; float:</span></span>
<span class="line"><span>    n = len(P)</span></span>
<span class="line"><span>    IF n &lt;= 3:</span></span>
<span class="line"><span>        RETURN bruteForce(P)  # 递归终止条件</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    mid = n // 2</span></span>
<span class="line"><span>    midPoint = P[mid]  # 分割点（已按x排序）</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    # 分治左右子集</span></span>
<span class="line"><span>    Pl = P[0 : mid]    # 左半部分点集</span></span>
<span class="line"><span>    Pr = P[mid : n]    # 右半部分点集</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    dl = closestUtil(Pl)  # 左递归</span></span>
<span class="line"><span>    dr = closestUtil(Pr)  # 右递归</span></span>
<span class="line"><span>    d = min(dl, dr)       # 当前最小距离</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    # 收集|x - mid_x| &lt; d</span></span>
<span class="line"><span>    strip = []</span></span>
<span class="line"><span>    FOR p IN P:</span></span>
<span class="line"><span>        IF abs(p.x - midPoint.x) &lt; d:</span></span>
<span class="line"><span>            strip.append(p)</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    # 返回最小距离</span></span>
<span class="line"><span>    RETURN min(d, stripClosest(strip, d))</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 主入口函数</span></span>
<span class="line"><span>FUNCTION closest(P: list[Point]) -&gt; float:</span></span>
<span class="line"><span>    sort(P, key=Point.x)  # 预处理：按x坐标排序</span></span>
<span class="line"><span>    RETURN closestUtil(P)</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 时间复杂度：O(n log n)</span></span>
<span class="line"><span># 空间复杂度：O(n) 递归栈和临时数组</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13)]))}const v=n(e,[["render",p]]),t=JSON.parse('{"path":"/zh/posts/%E7%AE%97%E6%B3%95%E8%AE%BE%E8%AE%A1%E4%B8%8E%E5%88%86%E6%9E%90%E4%BD%9C%E4%B8%9A/homework2.html","title":"算法设计与分析作业2","lang":"zh-CN","frontmatter":{"description":"算法设计与分析作业2 1. binary search 2. Large integer multiplication 3. Merge sort 4. Quick sort 5. Linear time selection algorithm 6. Closest point pair algorithm","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"算法设计与分析作业2\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-06-15T00:18:11.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"],["meta",{"property":"og:url","content":"https://mister-hope.github.io/zh/posts/%E7%AE%97%E6%B3%95%E8%AE%BE%E8%AE%A1%E4%B8%8E%E5%88%86%E6%9E%90%E4%BD%9C%E4%B8%9A/homework2.html"}],["meta",{"property":"og:site_name","content":"博客演示"}],["meta",{"property":"og:title","content":"算法设计与分析作业2"}],["meta",{"property":"og:description","content":"算法设计与分析作业2 1. binary search 2. Large integer multiplication 3. Merge sort 4. Quick sort 5. Linear time selection algorithm 6. Closest point pair algorithm"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-06-15T00:18:11.000Z"}],["meta",{"property":"article:modified_time","content":"2025-06-15T00:18:11.000Z"}]]},"git":{"createdTime":1749942657000,"updatedTime":1749946691000,"contributors":[{"name":"Linsen HU","username":"","email":"1563883475@qq.com","commits":3}]},"readingTime":{"minutes":5.74,"words":1723},"filePathRelative":"zh/posts/算法设计与分析作业/homework2.md","excerpt":"\\n<h1>1. binary search</h1>\\n<div class=\\"language- line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code class=\\"language-\\"><span class=\\"line\\"><span>FUNCTION binary_search1(arr[], low, high, x):</span></span>\\n<span class=\\"line\\"><span>    WHILE low &lt;= high:  # 持续搜索直到搜索区间无效</span></span>\\n<span class=\\"line\\"><span>        mid = (low + high) &gt;&gt; 1  # 位运算计算中间索引 (等价于/2但更快)</span></span>\\n<span class=\\"line\\"><span>        </span></span>\\n<span class=\\"line\\"><span>        IF arr[mid] == x:        # 找到目标元素</span></span>\\n<span class=\\"line\\"><span>            PRINT \\"Found at index \\" + mid</span></span>\\n<span class=\\"line\\"><span>            RETURE</span></span>\\n<span class=\\"line\\"><span>        ELSE IF arr[mid] &lt; x:    # 目标在右半区</span></span>\\n<span class=\\"line\\"><span>            low = mid + 1        # 调整左边界</span></span>\\n<span class=\\"line\\"><span>        ELSE:                    # 目标在左半区</span></span>\\n<span class=\\"line\\"><span>            high = mid - 1       # 调整右边界</span></span>\\n<span class=\\"line\\"><span>    END WHILE</span></span>\\n<span class=\\"line\\"><span>    PRINT \\"Element not found\\"    # 搜索空间耗尽未找到</span></span>\\n<span class=\\"line\\"><span>RETURE</span></span>\\n<span class=\\"line\\"><span></span></span>\\n<span class=\\"line\\"><span># 时间复杂度 O(log n)，空间复杂度 O(1)</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{v as comp,t as data};
