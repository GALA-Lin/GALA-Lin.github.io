import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,e as l,o as a}from"./app-DRwJ-efF.js";const e={};function d(p,s){return a(),i("div",null,s[0]||(s[0]=[l(`<h1 id="homework2" tabindex="-1"><a class="header-anchor" href="#homework2"><span>Homework2</span></a></h1><h1 id="_1-binary-search" tabindex="-1"><a class="header-anchor" href="#_1-binary-search"><span>1. binary search</span></a></h1><div class="language-text line-numbers-mode has-collapsed-lines collapsed" data-highlighter="prismjs" data-ext="text" style="--vp-collapsed-lines:15;"><pre><code class="language-text"><span class="line">FUNCTION binary_search1(arr[], low, high, x):</span>
<span class="line">    WHILE low &lt;= high:  # 持续搜索直到搜索区间无效</span>
<span class="line">        mid = (low + high) &gt;&gt; 1  # 位运算计算中间索引 (等价于/2但更快)</span>
<span class="line">        </span>
<span class="line">        IF arr[mid] == x:        # 找到目标元素</span>
<span class="line">            PRINT &quot;Found at index &quot; + mid</span>
<span class="line">            RETURE</span>
<span class="line">        ELSE IF arr[mid] &lt; x:    # 目标在右半区</span>
<span class="line">            low = mid + 1        # 调整左边界</span>
<span class="line">        ELSE:                    # 目标在左半区</span>
<span class="line">            high = mid - 1       # 调整右边界</span>
<span class="line">    END WHILE</span>
<span class="line">    PRINT &quot;Element not found&quot;    # 搜索空间耗尽未找到</span>
<span class="line">RETURE</span>
<span class="line"></span>
<span class="line"># 时间复杂度 O(log n)，空间复杂度 O(1)</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h1 id="_2-large-integer-multiplication" tabindex="-1"><a class="header-anchor" href="#_2-large-integer-multiplication"><span>2. Large integer multiplication</span></a></h1><div class="language-text line-numbers-mode has-collapsed-lines collapsed" data-highlighter="prismjs" data-ext="text" style="--vp-collapsed-lines:15;"><pre><code class="language-text"><span class="line"># 大整数加法</span>
<span class="line">FUNCTION add(num1, num2):</span>
<span class="line">    carry = 0                  # 进位初始化</span>
<span class="line">    result = &quot;&quot;                # 结果字符串</span>
<span class="line">    i = len(num1)-1            # 从个位开始处理num1</span>
<span class="line">    j = len(num2)-1            # 从个位开始处理num2</span>
<span class="line">    </span>
<span class="line">    WHILE i &gt;=0 OR j &gt;=0 OR carry &gt;0:</span>
<span class="line">        digit1 = num1[i] - &#39;0&#39; if i &gt;=0 else 0  # 获取当前位数字</span>
<span class="line">        digit2 = num2[j] - &#39;0&#39; if j &gt;=0 else 0</span>
<span class="line">        </span>
<span class="line">        sum = digit1 + digit2 + carry</span>
<span class="line">        carry = sum // 10       # 计算进位</span>
<span class="line">        result = str(sum % 10) + result  # 注意结果从高位插入</span>
<span class="line">        </span>
<span class="line">        i -= 1; j -= 1          # 移动指针</span>
<span class="line">RETURN result</span>
<span class="line"># 结果拼接顺序是反向的，最后需要处理剩余进位</span>
<span class="line"></span>
<span class="line"># 大整数减法</span>
<span class="line">FUNCTION subtract(num1, num2):</span>
<span class="line">    borrow = 0                 # 借位初始化</span>
<span class="line">    result = &quot;&quot;</span>
<span class="line">    i = len(num1)-1            # 从个位开始处理</span>
<span class="line">    j = len(num2)-1</span>
<span class="line">    </span>
<span class="line">    WHILE i &gt;=0:</span>
<span class="line">        digit1 = num1[i] - &#39;0&#39;</span>
<span class="line">        digit2 = num2[j] - &#39;0&#39; if j &gt;=0 else 0</span>
<span class="line">        </span>
<span class="line">        diff = digit1 - digit2 - borrow</span>
<span class="line">        IF diff &lt;0:            # 需要借位</span>
<span class="line">            diff +=10</span>
<span class="line">            borrow =1</span>
<span class="line">        ELSE:</span>
<span class="line">            borrow =0</span>
<span class="line">            </span>
<span class="line">        result = str(diff) + result</span>
<span class="line">        i -=1; j -=1</span>
<span class="line">    </span>
<span class="line">    # 去除前导零</span>
<span class="line">    result = result.lstrip(&#39;0&#39;)</span>
<span class="line">RETURN &quot;0&quot; if result == &quot;&quot; else result</span>
<span class="line"></span>
<span class="line"># 大整数乘法</span>
<span class="line">FUNCTION multiply(num1, num2):</span>
<span class="line">    IF num1==&quot;0&quot; OR num2==&quot;0&quot;: RETURN &quot;0&quot;      # 边界条件处理</span>
<span class="line">    IF num1==&quot;1&quot;: RETURN num2</span>
<span class="line">    IF num2==&quot;1&quot;: RETURN num1</span>
<span class="line">    </span>
<span class="line">    # 小数字直接计算</span>
<span class="line">    IF len(num1)&lt;=2 OR len(num2)&lt;=2:</span>
<span class="line">        RETURN str(int(num1)*int(num2))</span>
<span class="line">    </span>
<span class="line">    # 分割数字为高低位</span>
<span class="line">    mid = min(len(num1), len(num2)) // 2</span>
<span class="line">    high1 = num1[:-mid] or &quot;0&quot;   # 高位部分</span>
<span class="line">    low1 = num1[-mid:] </span>
<span class="line">    high2 = num2[:-mid] or &quot;0&quot;</span>
<span class="line">    low2 = num2[-mid:]</span>
<span class="line">    </span>
<span class="line">    # 递归计算三个乘积</span>
<span class="line">    z0 = multiply(high1, high2)            # 高位相乘</span>
<span class="line">    z1 = multiply(low1, low2)              # 低位相乘</span>
<span class="line">    sum1 = add(high1, low1)                # 高低位和</span>
<span class="line">    sum2 = add(high2, low2)</span>
<span class="line">    z2 = multiply(sum1, sum2)              # 和的乘积</span>
<span class="line">    </span>
<span class="line">    # 组合计算结果</span>
<span class="line">    z3 = subtract(subtract(z2, z1), z0)    # z2 - z1 - z0</span>
<span class="line">    part0 = z0 + &quot;0&quot;*(2*mid)               # 左移2mid位</span>
<span class="line">    part1 = z3 + &quot;0&quot;*mid                   # 左移mid位</span>
<span class="line">RETURN add(add(part0, part1), z1)  </span>
<span class="line"># 时间复杂度O(n^log3)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h1 id="_3-merge-sort" tabindex="-1"><a class="header-anchor" href="#_3-merge-sort"><span>3. Merge sort</span></a></h1><div class="language-text line-numbers-mode has-collapsed-lines collapsed" data-highlighter="prismjs" data-ext="text" style="--vp-collapsed-lines:15;"><pre><code class="language-text"><span class="line"># 归并排序主函数</span>
<span class="line">FUNCTION mergeSort(nums[], left, right):</span>
<span class="line">    IF left &gt;= right:                     # 递归终止条件（子数组长度为1）</span>
<span class="line">        RETURN</span>
<span class="line">    </span>
<span class="line">    mid = left + (right - left) // 2      # 计算中点（避免整数溢出）</span>
<span class="line">    mergeSort(nums, left, mid)            # 递归排序左半部 [left, mid]</span>
<span class="line">    mergeSort(nums, mid+1, right)         # 递归排序右半部 [mid+1, right]</span>
<span class="line">    merge(nums, left, mid, right)         # 合并两个有序子数组</span>
<span class="line"></span>
<span class="line"># 合并两个有序子数组</span>
<span class="line">FUNCTION merge(nums[], left, mid, right):</span>
<span class="line"></span>
<span class="line">    tmp = new array of size (right - left + 1)</span>
<span class="line">    </span>
<span class="line">    i = left      # 左子数组起始指针 [left, mid]</span>
<span class="line">    j = mid + 1   # 右子数组起始指针 [mid+1, right]</span>
<span class="line">    k = 0         # 临时数组指针</span>
<span class="line">    </span>
<span class="line">    # 合并操作：当两个子数组都有元素时</span>
<span class="line">    WHILE i &lt;= mid AND j &lt;= right:</span>
<span class="line">        IF nums[i] &lt;= nums[j]:</span>
<span class="line">            tmp[k] = nums[i]</span>
<span class="line">            i += 1</span>
<span class="line">        ELSE:</span>
<span class="line">            tmp[k] = nums[j]</span>
<span class="line">            j += 1</span>
<span class="line">        k += 1</span>
<span class="line">    </span>
<span class="line">    # 处理左子数组剩余元素</span>
<span class="line">    WHILE i &lt;= mid:</span>
<span class="line">        tmp[k] = nums[i]</span>
<span class="line">        i += 1; k += 1</span>
<span class="line">    </span>
<span class="line">    # 处理右子数组剩余元素</span>
<span class="line">    WHILE j &lt;= right:</span>
<span class="line">        tmp[k] = nums[j]</span>
<span class="line">        j += 1; k += 1</span>
<span class="line">    </span>
<span class="line">    # 将合并结果拷贝回原数组</span>
<span class="line">    FOR m FROM 0 TO k-1:</span>
<span class="line">        nums[left + m] = tmp[m]</span>
<span class="line"></span>
<span class="line"># 时间复杂度：O(n log n)</span>
<span class="line"># 空间复杂度：O(n) 需要临时数组</span>
<span class="line"># 稳定排序：当元素相等时优先取左子数组元素</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h1 id="_4-quick-sort" tabindex="-1"><a class="header-anchor" href="#_4-quick-sort"><span>4. Quick sort</span></a></h1><div class="language-text line-numbers-mode has-collapsed-lines collapsed" data-highlighter="prismjs" data-ext="text" style="--vp-collapsed-lines:15;"><pre><code class="language-text"><span class="line"># 快速排序主函数</span>
<span class="line">FUNCTION quick_sort(q[], l, r):</span>
<span class="line">    IF l &gt;= r: RETURN</span>
<span class="line">    </span>
<span class="line">    # 初始化双指针和基准值</span>
<span class="line">    i = l - 1</span>
<span class="line">    j = r + 1</span>
<span class="line">    x = q[(l + r) &gt;&gt; 1]                 # 选择中间元素为基准（位运算代替除法）</span>
<span class="line">    </span>
<span class="line">    WHILE True:                         </span>
<span class="line">        REPEAT i += 1 UNTIL q[i] &gt;= x    # 找左边第一个 &gt;=x 的元素</span>
<span class="line">        REPEAT j -= 1 UNTIL q[j] &lt;= x    # 找右边第一个 &lt;=x 的元素</span>
<span class="line">        IF i &lt; j:                        # 当指针未交叉时交换元素</span>
<span class="line">            swap(q[i], q[j])</span>
<span class="line">        ELSE:                            # 分区完成退出循环</span>
<span class="line">            BREAK</span>
<span class="line">    </span>
<span class="line">    # 递归处理子区间</span>
<span class="line">    quick_sort(q, l, j)                 # 处理左半区 [l, j]</span>
<span class="line">    quick_sort(q, j + 1, r)             # 处理右半区 [j+1, r]</span>
<span class="line"></span>
<span class="line"># 时间复杂度：平均O(n log n)，最坏O(n²)（取决于基准选择）</span>
<span class="line"># 空间复杂度：O(log n) 递归栈深度</span>
<span class="line"># 不稳定排序：元素交换可能改变相等元素的顺序</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h1 id="_5-linear-time-selection-algorithm" tabindex="-1"><a class="header-anchor" href="#_5-linear-time-selection-algorithm"><span>5. Linear time selection algorithm</span></a></h1><div class="language-text line-numbers-mode has-collapsed-lines collapsed" data-highlighter="prismjs" data-ext="text" style="--vp-collapsed-lines:15;"><pre><code class="language-text"><span class="line"># 分区函数</span>
<span class="line">FUNCTION partition(a[], left, right, pivot) -&gt; int:</span>
<span class="line">    i = left                      # 左扫描指针 [关键注释：初始化为左边界]</span>
<span class="line">    j = right                     # 右扫描指针 [初始化为右边界]</span>
<span class="line">    </span>
<span class="line">    WHILE i &lt;= j:                 # 扫描直到指针交叉</span>
<span class="line">        WHILE a[i] &lt; pivot:       # 找左边第一个 &gt;= pivot的元素</span>
<span class="line">            i += 1</span>
<span class="line">        WHILE a[j] &gt; pivot:       # 找右边第一个 &lt;= pivot的元素</span>
<span class="line">            j -= 1</span>
<span class="line">        </span>
<span class="line">        IF i &lt; j:                 # 当指针未交叉时交换元素</span>
<span class="line">            swap(a[i], a[j])</span>
<span class="line">        ELSE:                     # 分区完成返回分界点</span>
<span class="line">            RETURN j              # [注意] j是最终右分区的右边界</span>
<span class="line">    RETURN -1                     # 无效情况（通常不会发生）</span>
<span class="line"></span>
<span class="line"># 快速选择算法（寻找第k小元素）</span>
<span class="line">FUNCTION quickSelect(a[], left, right, k) -&gt; int:</span>
<span class="line">    IF left == right:             # 递归终止条件：只剩一个元素</span>
<span class="line">        RETURN a[left]</span>
<span class="line">    </span>
<span class="line">    # 选择中间元素作为基准（可能溢出，建议用left + (right-left)/2）</span>
<span class="line">    pivot = a[(left + right) &gt;&gt; 1] </span>
<span class="line">    </span>
<span class="line">    # 执行分区操作 [关键注释：pos是分界点索引]</span>
<span class="line">    pos = partition(a, left, right, pivot)</span>
<span class="line">    </span>
<span class="line">    IF pos == k - 1:             # 找到第k小元素</span>
<span class="line">        RETURN a[pos]</span>
<span class="line">    ELIF pos &gt; k - 1:            # 目标在左分区 [left, pos-1]</span>
<span class="line">        RETURN quickSelect(a, left, pos-1, k)</span>
<span class="line">    ELSE:                        # 目标在右分区 [pos+1, right]</span>
<span class="line">        RETURN quickSelect(a, pos+1, right, k)</span>
<span class="line"></span>
<span class="line"># 时间复杂度：平均O(n)，最坏O(n²)（依赖pivot选择）</span>
<span class="line"># 空间复杂度：O(1) 原地操作（递归栈深度O(log n)）</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h1 id="_6-closest-point-pair-algorithm" tabindex="-1"><a class="header-anchor" href="#_6-closest-point-pair-algorithm"><span>6. Closest point pair algorithm</span></a></h1><div class="language-text line-numbers-mode has-collapsed-lines collapsed" data-highlighter="prismjs" data-ext="text" style="--vp-collapsed-lines:15;"><pre><code class="language-text"><span class="line"># 点结构定义（包含x,y坐标）</span>
<span class="line">CLASS Point:</span>
<span class="line">    x: int</span>
<span class="line">    y: int</span>
<span class="line"></span>
<span class="line"># 计算两点欧式距离</span>
<span class="line">FUNCTION dist(p1: Point, p2: Point) -&gt; float:</span>
<span class="line">    RETURN sqrt((p1.x-p2.x)^2 + (p1.y-p2.y)^2)</span>
<span class="line"></span>
<span class="line"># 暴力求解最近点对（当n&lt;=3时使用）</span>
<span class="line">FUNCTION bruteForce(P: list[Point]) -&gt; float:</span>
<span class="line">    minDist = INFINITY</span>
<span class="line">    FOR i FROM 0 TO len(P)-1:</span>
<span class="line">        FOR j FROM i+1 TO len(P)-1:  # 避免重复计算</span>
<span class="line">            minDist = min(minDist, dist(P[i], P[j]))</span>
<span class="line">    RETURN minDist</span>
<span class="line"></span>
<span class="line"># 处理最近点对</span>
<span class="line">FUNCTION stripClosest(strip: list[Point], d: float) -&gt; float:</span>
<span class="line">    sort(strip, key=Point.y)  # 按y坐标排序优化比较</span>
<span class="line">    minDist = d</span>
<span class="line">    FOR i FROM 0 TO len(strip)-1:</span>
<span class="line">        # 只需检查后续y差&lt;d的点（最多6个点）</span>
<span class="line">        FOR j FROM i+1 TO min(i+7, len(strip)-1):</span>
<span class="line">            IF (strip[j].y - strip[i].y) &gt;= minDist: BREAK</span>
<span class="line">            minDist = min(minDist, dist(strip[i], strip[j]))</span>
<span class="line">    RETURN minDist</span>
<span class="line"></span>
<span class="line"># 分治递归核心函数</span>
<span class="line">FUNCTION closestUtil(P: list[Point]) -&gt; float:</span>
<span class="line">    n = len(P)</span>
<span class="line">    IF n &lt;= 3:</span>
<span class="line">        RETURN bruteForce(P)  # 递归终止条件</span>
<span class="line">    </span>
<span class="line">    mid = n // 2</span>
<span class="line">    midPoint = P[mid]  # 分割点（已按x排序）</span>
<span class="line">    </span>
<span class="line">    # 分治左右子集</span>
<span class="line">    Pl = P[0 : mid]    # 左半部分点集</span>
<span class="line">    Pr = P[mid : n]    # 右半部分点集</span>
<span class="line">    </span>
<span class="line">    dl = closestUtil(Pl)  # 左递归</span>
<span class="line">    dr = closestUtil(Pr)  # 右递归</span>
<span class="line">    d = min(dl, dr)       # 当前最小距离</span>
<span class="line">    </span>
<span class="line">    # 收集|x - mid_x| &lt; d</span>
<span class="line">    strip = []</span>
<span class="line">    FOR p IN P:</span>
<span class="line">        IF abs(p.x - midPoint.x) &lt; d:</span>
<span class="line">            strip.append(p)</span>
<span class="line">    </span>
<span class="line">    # 返回最小距离</span>
<span class="line">    RETURN min(d, stripClosest(strip, d))</span>
<span class="line"></span>
<span class="line"># 主入口函数</span>
<span class="line">FUNCTION closest(P: list[Point]) -&gt; float:</span>
<span class="line">    sort(P, key=Point.x)  # 预处理：按x坐标排序</span>
<span class="line">    RETURN closestUtil(P)</span>
<span class="line"></span>
<span class="line"># 时间复杂度：O(n log n)</span>
<span class="line"># 空间复杂度：O(n) 递归栈和临时数组</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div>`,13)]))}const v=n(e,[["render",d]]),t=JSON.parse('{"path":"/Algorithm%20Design%20_%20Analysis%20Course%20Guide/homework2.html","title":"Homework2","lang":"en-US","frontmatter":{"icon":"pen-to-square","date":"2025-04-29T00:00:00.000Z","cover":"https://img.picui.cn/free/2025/06/15/684eb82931fbc.jpg","footer":"<a href=https://www.gnu.org/licenses/gpl-3.0.html style=\\"color:#808080\\"> GPL-3.0 Licensed </a> | Copyright © 2025-present <a href=\\"https://github.com/GALA-Lin\\" style=\\"color:#808080\\">GALA-Lin</a>","copyright":false,"category":["Algo Course Guide"],"tag":["伪代码","分治"],"description":"Homework2 1. binary search 2. Large integer multiplication 3. Merge sort 4. Quick sort 5. Linear time selection algorithm 6. Closest point pair algorithm","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Homework2\\",\\"image\\":[\\"https://img.picui.cn/free/2025/06/15/684eb82931fbc.jpg\\"],\\"datePublished\\":\\"2025-04-29T00:00:00.000Z\\",\\"dateModified\\":\\"2025-06-17T15:15:17.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"GALA-Lin\\",\\"url\\":\\"https://gala-lin.github.io\\"}]}"],["meta",{"property":"og:url","content":"https://gala-lin.github.io/Algorithm%20Design%20_%20Analysis%20Course%20Guide/homework2.html"}],["meta",{"property":"og:site_name","content":"22lin04"}],["meta",{"property":"og:title","content":"Homework2"}],["meta",{"property":"og:description","content":"Homework2 1. binary search 2. Large integer multiplication 3. Merge sort 4. Quick sort 5. Linear time selection algorithm 6. Closest point pair algorithm"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://img.picui.cn/free/2025/06/15/684eb82931fbc.jpg"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2025-06-17T15:15:17.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://img.picui.cn/free/2025/06/15/684eb82931fbc.jpg"}],["meta",{"name":"twitter:image:alt","content":"Homework2"}],["meta",{"property":"article:tag","content":"分治"}],["meta",{"property":"article:tag","content":"伪代码"}],["meta",{"property":"article:published_time","content":"2025-04-29T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-06-17T15:15:17.000Z"}]]},"git":{"createdTime":1749942657000,"updatedTime":1750173317000,"contributors":[{"name":"Linsen HU","username":"","email":"1563883475@qq.com","commits":6}]},"readingTime":{"minutes":5.88,"words":1764},"filePathRelative":"Algorithm Design & Analysis Course Guide/homework2.md","excerpt":"\\n<h1>1. binary search</h1>\\n<div class=\\"language-text line-numbers-mode has-collapsed-lines collapsed\\" data-highlighter=\\"prismjs\\" data-ext=\\"text\\" style=\\"--vp-collapsed-lines:15;\\"><pre><code class=\\"language-text\\"><span class=\\"line\\">FUNCTION binary_search1(arr[], low, high, x):</span>\\n<span class=\\"line\\">    WHILE low &lt;= high:  # 持续搜索直到搜索区间无效</span>\\n<span class=\\"line\\">        mid = (low + high) &gt;&gt; 1  # 位运算计算中间索引 (等价于/2但更快)</span>\\n<span class=\\"line\\">        </span>\\n<span class=\\"line\\">        IF arr[mid] == x:        # 找到目标元素</span>\\n<span class=\\"line\\">            PRINT \\"Found at index \\" + mid</span>\\n<span class=\\"line\\">            RETURE</span>\\n<span class=\\"line\\">        ELSE IF arr[mid] &lt; x:    # 目标在右半区</span>\\n<span class=\\"line\\">            low = mid + 1        # 调整左边界</span>\\n<span class=\\"line\\">        ELSE:                    # 目标在左半区</span>\\n<span class=\\"line\\">            high = mid - 1       # 调整右边界</span>\\n<span class=\\"line\\">    END WHILE</span>\\n<span class=\\"line\\">    PRINT \\"Element not found\\"    # 搜索空间耗尽未找到</span>\\n<span class=\\"line\\">RETURE</span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"># 时间复杂度 O(log n)，空间复杂度 O(1)</span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div><div class=\\"collapsed-lines\\"></div></div>","autoDesc":true}');export{v as comp,t as data};
