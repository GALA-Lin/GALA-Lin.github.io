import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,e,o as p}from"./app-B98D_PkI.js";const l={};function r(o,s){return p(),a("div",null,s[0]||(s[0]=[e(`<div class="language-mermaid line-numbers-mode has-collapsed-lines collapsed" data-highlighter="prismjs" data-ext="mermaid" style="--vp-collapsed-lines:15;"><pre><code class="language-mermaid"><span class="line"><span class="token keyword">sequenceDiagram</span></span>
<span class="line">    <span class="token keyword">autonumber</span></span>
<span class="line">    </span>
<span class="line">    actor User as 普通用户</span>
<span class="line">    <span class="token keyword">participant</span> App as 客户端</span>
<span class="line">    <span class="token keyword">participant</span> API as 后端API</span>
<span class="line">    <span class="token keyword">participant</span> DB as 数据库</span>
<span class="line">    <span class="token keyword">participant</span> OSS as 文件存储</span>
<span class="line">    <span class="token keyword">participant</span> Admin as 管理员</span>
<span class="line">    <span class="token keyword">participant</span> Msg as 消息通知</span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">rect</span> rgb<span class="token text string">(240, 248, 255)</span></span>
<span class="line">        <span class="token keyword">Note over</span> User,Admin<span class="token operator">:</span> 阶段1<span class="token operator">:</span> 用户发起教练认证申请</span>
<span class="line">        User<span class="token arrow operator">-&gt;&gt;</span>App<span class="token operator">:</span> 点击<span class="token string">&quot;成为教练&quot;</span></span>
<span class="line">        App<span class="token arrow operator">-&gt;&gt;</span>API<span class="token operator">:</span> GET /api/user/roles</span>
<span class="line">        API<span class="token arrow operator">-&gt;&gt;</span>DB<span class="token operator">:</span> SELECT * FROM user_roles WHERE user_id=xxx</span>
<span class="line">        DB<span class="token arrow operator">--&gt;&gt;</span>API<span class="token operator">:</span> 用户角色列表</span>
<span class="line">        </span>
<span class="line">        <span class="token keyword">alt</span> 已经是教练</span>
<span class="line">            API<span class="token arrow operator">--&gt;&gt;</span>App<span class="token operator">:</span> 提示：您已经是认证教练</span>
<span class="line">        <span class="token keyword">else</span> 未申请过</span>
<span class="line">            API<span class="token arrow operator">--&gt;&gt;</span>App<span class="token operator">:</span> 可以申请</span>
<span class="line">            App<span class="token arrow operator">--&gt;&gt;</span>User<span class="token operator">:</span> 显示申请表单</span>
<span class="line">        <span class="token keyword">end</span></span>
<span class="line">    <span class="token keyword">end</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">rect</span> rgb<span class="token text string">(255, 250, 240)</span></span>
<span class="line">        <span class="token keyword">Note over</span> User,Admin<span class="token operator">:</span> 阶段2<span class="token operator">:</span> 填写申请资料</span>
<span class="line">        User<span class="token arrow operator">-&gt;&gt;</span>App<span class="token operator">:</span> 上传证书照片</span>
<span class="line">        App<span class="token arrow operator">-&gt;&gt;</span>OSS<span class="token operator">:</span> 上传文件</span>
<span class="line">        OSS<span class="token arrow operator">--&gt;&gt;</span>App<span class="token operator">:</span> 返回文件URL</span>
<span class="line">        </span>
<span class="line">        User<span class="token arrow operator">-&gt;&gt;</span>App<span class="token operator">:</span> 填写个人信息</span>
<span class="line">        <span class="token keyword">Note over</span> User,App<span class="token operator">:</span> 真实姓名、联系方式&lt;br/&gt;证书类型、编号&lt;br/&gt;教学经历、自我介绍等</span>
<span class="line">        </span>
<span class="line">        User<span class="token arrow operator">-&gt;&gt;</span>App<span class="token operator">:</span> 提交申请</span>
<span class="line">        App<span class="token arrow operator">-&gt;&gt;</span>API<span class="token operator">:</span> POST /api/coach/apply&lt;br/&gt;<span class="token text string">{申请资料JSON}</span></span>
<span class="line">        </span>
<span class="line">        API<span class="token arrow operator">-&gt;&gt;</span>DB<span class="token operator">:</span> BEGIN TRANSACTION</span>
<span class="line">        </span>
<span class="line">        API<span class="token arrow operator">-&gt;&gt;</span>DB<span class="token operator">:</span> INSERT INTO coach_applications&lt;br/&gt;status=0<span class="token text string">(待审核)</span></span>
<span class="line">        </span>
<span class="line">        API<span class="token arrow operator">-&gt;&gt;</span>DB<span class="token operator">:</span> INSERT INTO user_roles&lt;br/&gt;<span class="token text string">(user_id, role_id=&#39;COACH&#39;, status=0)</span></span>
<span class="line">        </span>
<span class="line">        API<span class="token arrow operator">-&gt;&gt;</span>DB<span class="token operator">:</span> COMMIT</span>
<span class="line">        </span>
<span class="line">        API<span class="token arrow operator">-&gt;&gt;</span>Msg<span class="token operator">:</span> 通知管理员审核</span>
<span class="line">        Msg<span class="token arrow operator">--&gt;&gt;</span>Admin<span class="token operator">:</span> 【待审核】新教练申请，请及时处理</span>
<span class="line">        </span>
<span class="line">        API<span class="token arrow operator">--&gt;&gt;</span>App<span class="token operator">:</span> 申请提交成功</span>
<span class="line">        App<span class="token arrow operator">--&gt;&gt;</span>User<span class="token operator">:</span> 申请已提交，预计3个工作日内完成审核</span>
<span class="line">    <span class="token keyword">end</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">rect</span> rgb<span class="token text string">(240, 255, 240)</span></span>
<span class="line">        <span class="token keyword">Note over</span> User,Admin<span class="token operator">:</span> 阶段3<span class="token operator">:</span> 管理员审核</span>
<span class="line">        Admin<span class="token arrow operator">-&gt;&gt;</span>API<span class="token operator">:</span> GET /api/admin/applications?status=0</span>
<span class="line">        API<span class="token arrow operator">-&gt;&gt;</span>DB<span class="token operator">:</span> 查询待审核申请</span>
<span class="line">        DB<span class="token arrow operator">--&gt;&gt;</span>API<span class="token operator">:</span> 申请列表</span>
<span class="line">        API<span class="token arrow operator">--&gt;&gt;</span>Admin<span class="token operator">:</span> 返回申请列表</span>
<span class="line">        </span>
<span class="line">        Admin<span class="token arrow operator">-&gt;&gt;</span>API<span class="token operator">:</span> GET /api/admin/applications/<span class="token text string">{id}</span></span>
<span class="line">        API<span class="token arrow operator">-&gt;&gt;</span>DB<span class="token operator">:</span> 查询申请详情</span>
<span class="line">        DB<span class="token arrow operator">--&gt;&gt;</span>API<span class="token operator">:</span> 申请详细信息</span>
<span class="line">        API<span class="token arrow operator">--&gt;&gt;</span>Admin<span class="token operator">:</span> 显示申请材料</span>
<span class="line">        </span>
<span class="line">        <span class="token keyword">Note over</span> Admin<span class="token operator">:</span> 审核证书真实性&lt;br/&gt;检查教学经历&lt;br/&gt;评估资质</span>
<span class="line">        </span>
<span class="line">        <span class="token keyword">alt</span> 审核通过</span>
<span class="line">            Admin<span class="token arrow operator">-&gt;&gt;</span>API<span class="token operator">:</span> POST /api/admin/applications/<span class="token text string">{id}</span>/approve</span>
<span class="line">            </span>
<span class="line">            API<span class="token arrow operator">-&gt;&gt;</span>DB<span class="token operator">:</span> BEGIN TRANSACTION</span>
<span class="line">            </span>
<span class="line">            API<span class="token arrow operator">-&gt;&gt;</span>DB<span class="token operator">:</span> UPDATE coach_applications&lt;br/&gt;SET status=1<span class="token text string">(已通过)</span>, auditor_id, audit_time</span>
<span class="line">            </span>
<span class="line">            API<span class="token arrow operator">-&gt;&gt;</span>DB<span class="token operator">:</span> UPDATE user_roles&lt;br/&gt;SET status=1<span class="token text string">(生效)</span></span>
<span class="line">            </span>
<span class="line">            API<span class="token arrow operator">-&gt;&gt;</span>DB<span class="token operator">:</span> INSERT INTO coach_profiles&lt;br/&gt;初始化教练档案</span>
<span class="line">            <span class="token keyword">Note over</span> API,DB<span class="token operator">:</span> 从申请表复制基本信息&lt;br/&gt;初始化评分、统计字段</span>
<span class="line">            </span>
<span class="line">            API<span class="token arrow operator">-&gt;&gt;</span>DB<span class="token operator">:</span> COMMIT</span>
<span class="line">            </span>
<span class="line">            API<span class="token arrow operator">-&gt;&gt;</span>Msg<span class="token operator">:</span> 发送通知给用户</span>
<span class="line">            Msg<span class="token arrow operator">--&gt;&gt;</span>User<span class="token operator">:</span> 🎉【审核通过】恭喜成为认证教练！&lt;br/&gt;请完善教练资料</span>
<span class="line">            </span>
<span class="line">            API<span class="token arrow operator">--&gt;&gt;</span>Admin<span class="token operator">:</span> 审核完成</span>
<span class="line">            </span>
<span class="line">        <span class="token keyword">else</span> 审核拒绝</span>
<span class="line">            Admin<span class="token arrow operator">-&gt;&gt;</span>API<span class="token operator">:</span> POST /api/admin/applications/<span class="token text string">{id}</span>/reject&lt;br/&gt;<span class="token text string">{拒绝原因}</span></span>
<span class="line">            </span>
<span class="line">            API<span class="token arrow operator">-&gt;&gt;</span>DB<span class="token operator">:</span> BEGIN TRANSACTION</span>
<span class="line">            API<span class="token arrow operator">-&gt;&gt;</span>DB<span class="token operator">:</span> UPDATE coach_applications&lt;br/&gt;SET status=2<span class="token text string">(已拒绝)</span>, audit_remark</span>
<span class="line">            API<span class="token arrow operator">-&gt;&gt;</span>DB<span class="token operator">:</span> UPDATE user_roles SET status=2<span class="token text string">(已拒绝)</span></span>
<span class="line">            API<span class="token arrow operator">-&gt;&gt;</span>DB<span class="token operator">:</span> COMMIT</span>
<span class="line">            </span>
<span class="line">            API<span class="token arrow operator">-&gt;&gt;</span>Msg<span class="token operator">:</span> 发送通知</span>
<span class="line">            Msg<span class="token arrow operator">--&gt;&gt;</span>User<span class="token operator">:</span> 【审核未通过】原因：XXX&lt;br/&gt;您可以修改后重新申请</span>
<span class="line">            </span>
<span class="line">        <span class="token keyword">else</span> 需要补充材料</span>
<span class="line">            Admin<span class="token arrow operator">-&gt;&gt;</span>API<span class="token operator">:</span> POST /api/admin/applications/<span class="token text string">{id}</span>/supplement&lt;br/&gt;<span class="token text string">{需要补充的内容}</span></span>
<span class="line">            </span>
<span class="line">            API<span class="token arrow operator">-&gt;&gt;</span>DB<span class="token operator">:</span> UPDATE coach_applications&lt;br/&gt;SET status=3<span class="token text string">(需补充材料)</span></span>
<span class="line">            </span>
<span class="line">            API<span class="token arrow operator">-&gt;&gt;</span>Msg<span class="token operator">:</span> 发送通知</span>
<span class="line">            Msg<span class="token arrow operator">--&gt;&gt;</span>User<span class="token operator">:</span> 【需补充材料】请补充：XXX</span>
<span class="line">            </span>
<span class="line">            User<span class="token arrow operator">-&gt;&gt;</span>App<span class="token operator">:</span> 补充材料</span>
<span class="line">            App<span class="token arrow operator">-&gt;&gt;</span>API<span class="token operator">:</span> PUT /api/coach/applications/<span class="token text string">{id}</span>&lt;br/&gt;更新申请</span>
<span class="line">            API<span class="token arrow operator">-&gt;&gt;</span>DB<span class="token operator">:</span> UPDATE coach_applications&lt;br/&gt;SET status=0<span class="token text string">(待审核)</span></span>
<span class="line">            API<span class="token arrow operator">-&gt;&gt;</span>Msg<span class="token operator">:</span> 通知管理员重新审核</span>
<span class="line">        <span class="token keyword">end</span></span>
<span class="line">    <span class="token keyword">end</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">rect</span> rgb<span class="token text string">(255, 240, 245)</span></span>
<span class="line">        <span class="token keyword">Note over</span> User,Admin<span class="token operator">:</span> 阶段4<span class="token operator">:</span> 教练完善资料</span>
<span class="line">        User<span class="token arrow operator">-&gt;&gt;</span>App<span class="token operator">:</span> 登录教练端</span>
<span class="line">        App<span class="token arrow operator">-&gt;&gt;</span>API<span class="token operator">:</span> GET /api/coach/profile</span>
<span class="line">        API<span class="token arrow operator">-&gt;&gt;</span>DB<span class="token operator">:</span> SELECT * FROM coach_profiles</span>
<span class="line">        DB<span class="token arrow operator">--&gt;&gt;</span>API<span class="token operator">:</span> 教练档案</span>
<span class="line">        API<span class="token arrow operator">--&gt;&gt;</span>App<span class="token operator">:</span> 返回档案信息</span>
<span class="line">        </span>
<span class="line">        User<span class="token arrow operator">-&gt;&gt;</span>App<span class="token operator">:</span> 完善教练信息</span>
<span class="line">        <span class="token keyword">Note over</span> User,App<span class="token operator">:</span> 设置专长标签&lt;br/&gt;填写教学风格&lt;br/&gt;设置服务区域、价格等</span>
<span class="line">        </span>
<span class="line">        App<span class="token arrow operator">-&gt;&gt;</span>API<span class="token operator">:</span> PUT /api/coach/profile</span>
<span class="line">        API<span class="token arrow operator">-&gt;&gt;</span>DB<span class="token operator">:</span> UPDATE coach_profiles</span>
<span class="line">        DB<span class="token arrow operator">--&gt;&gt;</span>API<span class="token operator">:</span> 更新成功</span>
<span class="line">        </span>
<span class="line">        User<span class="token arrow operator">-&gt;&gt;</span>App<span class="token operator">:</span> 创建课程服务</span>
<span class="line">        App<span class="token arrow operator">-&gt;&gt;</span>API<span class="token operator">:</span> POST /api/coach/services&lt;br/&gt;<span class="token text string">{一对一私教课, 90分钟, 300元}</span></span>
<span class="line">        API<span class="token arrow operator">-&gt;&gt;</span>DB<span class="token operator">:</span> INSERT INTO coach_services</span>
<span class="line">        DB<span class="token arrow operator">--&gt;&gt;</span>API<span class="token operator">:</span> 服务创建成功</span>
<span class="line">        </span>
<span class="line">        User<span class="token arrow operator">-&gt;&gt;</span>App<span class="token operator">:</span> 设置可约时段</span>
<span class="line">        <span class="token keyword">Note over</span> User,App<span class="token operator">:</span> 选择日期、时间&lt;br/&gt;选择服务类型&lt;br/&gt;设置重复规则等</span>
<span class="line">        </span>
<span class="line">        App<span class="token arrow operator">-&gt;&gt;</span>API<span class="token operator">:</span> POST /api/coach/slots/batch&lt;br/&gt;<span class="token text string">{时段批量设置}</span></span>
<span class="line">        API<span class="token arrow operator">-&gt;&gt;</span>DB<span class="token operator">:</span> INSERT INTO coach_available_slots</span>
<span class="line">        DB<span class="token arrow operator">--&gt;&gt;</span>API<span class="token operator">:</span> 时段创建成功</span>
<span class="line">        </span>
<span class="line">        API<span class="token arrow operator">--&gt;&gt;</span>App<span class="token operator">:</span> 资料完善成功</span>
<span class="line">        App<span class="token arrow operator">--&gt;&gt;</span>User<span class="token operator">:</span> 🎉 您已可以开始接单！</span>
<span class="line">    <span class="token keyword">end</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><div class="language-mermaid line-numbers-mode has-collapsed-lines collapsed" data-highlighter="prismjs" data-ext="mermaid" style="--vp-collapsed-lines:15;"><pre><code class="language-mermaid"><span class="line"><span class="token keyword">sequenceDiagram</span></span>
<span class="line">    <span class="token keyword">autonumber</span></span>
<span class="line">    </span>
<span class="line">    actor User as 用户</span>
<span class="line">    <span class="token keyword">participant</span> App as 客户端</span>
<span class="line">    <span class="token keyword">participant</span> API as 后端API</span>
<span class="line">    <span class="token keyword">participant</span> DB as 数据库</span>
<span class="line">    <span class="token keyword">participant</span> Pay as 支付系统</span>
<span class="line">    <span class="token keyword">participant</span> Coach as 教练端</span>
<span class="line">    <span class="token keyword">participant</span> Msg as 消息通知</span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">rect</span> rgb<span class="token text string">(240, 248, 255)</span></span>
<span class="line">        <span class="token keyword">Note over</span> User,Coach<span class="token operator">:</span> 阶段1<span class="token operator">:</span> 浏览教练和时段</span>
<span class="line">        User<span class="token arrow operator">-&gt;&gt;</span>App<span class="token operator">:</span> 浏览教练列表</span>
<span class="line">        App<span class="token arrow operator">-&gt;&gt;</span>API<span class="token operator">:</span> GET /api/coaches?region=xxx</span>
<span class="line">        API<span class="token arrow operator">-&gt;&gt;</span>DB<span class="token operator">:</span> 查询 coach_profiles + user_profiles</span>
<span class="line">        DB<span class="token arrow operator">--&gt;&gt;</span>API<span class="token operator">:</span> 返回教练列表</span>
<span class="line">        API<span class="token arrow operator">--&gt;&gt;</span>App<span class="token operator">:</span> 教练数据（含评分、价格区间）</span>
<span class="line">        </span>
<span class="line">        User<span class="token arrow operator">-&gt;&gt;</span>App<span class="token operator">:</span> 查看教练详情</span>
<span class="line">        App<span class="token arrow operator">-&gt;&gt;</span>API<span class="token operator">:</span> GET /api/coaches/<span class="token text string">{id}</span></span>
<span class="line">        API<span class="token arrow operator">-&gt;&gt;</span>DB<span class="token operator">:</span> 查询教练信息 + coach_services</span>
<span class="line">        DB<span class="token arrow operator">--&gt;&gt;</span>API<span class="token operator">:</span> 教练详情 + 服务列表</span>
<span class="line">        API<span class="token arrow operator">--&gt;&gt;</span>App<span class="token operator">:</span> 返回详细信息</span>
<span class="line">        </span>
<span class="line">        User<span class="token arrow operator">-&gt;&gt;</span>App<span class="token operator">:</span> 选择日期查看可约时段</span>
<span class="line">        App<span class="token arrow operator">-&gt;&gt;</span>API<span class="token operator">:</span> GET /api/coaches/<span class="token text string">{id}</span>/slots?date=2024-12-10</span>
<span class="line">        API<span class="token arrow operator">-&gt;&gt;</span>DB<span class="token operator">:</span> 查询 v_available_slots 视图</span>
<span class="line">        DB<span class="token arrow operator">--&gt;&gt;</span>API<span class="token operator">:</span> 可预约时段列表</span>
<span class="line">        API<span class="token arrow operator">--&gt;&gt;</span>App<span class="token operator">:</span> 时段列表（含服务类型、价格）</span>
<span class="line">    <span class="token keyword">end</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">rect</span> rgb<span class="token text string">(255, 250, 240)</span></span>
<span class="line">        <span class="token keyword">Note over</span> User,Coach<span class="token operator">:</span> 阶段2<span class="token operator">:</span> 锁定时段并下单</span>
<span class="line">        User<span class="token arrow operator">-&gt;&gt;</span>App<span class="token operator">:</span> 选择时段和服务类型</span>
<span class="line">        App<span class="token arrow operator">-&gt;&gt;</span>API<span class="token operator">:</span> POST /api/bookings/lock&lt;br/&gt;<span class="token text string">{slot_id, service_id}</span></span>
<span class="line">        </span>
<span class="line">        API<span class="token arrow operator">-&gt;&gt;</span>DB<span class="token operator">:</span> BEGIN TRANSACTION</span>
<span class="line">        API<span class="token arrow operator">-&gt;&gt;</span>DB<span class="token operator">:</span> SELECT ... FOR UPDATE&lt;br/&gt;检查时段状态</span>
<span class="line">        </span>
<span class="line">        <span class="token keyword">alt</span> 时段已被占用</span>
<span class="line">            DB<span class="token arrow operator">--&gt;&gt;</span>API<span class="token operator">:</span> slot_status != 1</span>
<span class="line">            API<span class="token arrow operator">--&gt;&gt;</span>App<span class="token operator">:</span> 提示：时段已被预订</span>
<span class="line">            App<span class="token arrow operator">--&gt;&gt;</span>User<span class="token operator">:</span> 显示错误，刷新时段列表</span>
<span class="line">        <span class="token keyword">else</span> 时段可用</span>
<span class="line">            API<span class="token arrow operator">-&gt;&gt;</span>DB<span class="token operator">:</span> UPDATE coach_available_slots&lt;br/&gt;SET status=3, locked_until=NOW<span class="token punctuation">(</span><span class="token punctuation">)</span>+15分钟</span>
<span class="line">            API<span class="token arrow operator">-&gt;&gt;</span>DB<span class="token operator">:</span> INSERT INTO bookings&lt;br/&gt;status=1<span class="token text string">(待支付)</span></span>
<span class="line">            DB<span class="token arrow operator">--&gt;&gt;</span>API<span class="token operator">:</span> 订单创建成功</span>
<span class="line">            API<span class="token arrow operator">-&gt;&gt;</span>DB<span class="token operator">:</span> COMMIT</span>
<span class="line">            API<span class="token arrow operator">--&gt;&gt;</span>App<span class="token operator">:</span> 返回订单号 + 过期时间</span>
<span class="line">            App<span class="token arrow operator">--&gt;&gt;</span>User<span class="token operator">:</span> 跳转填写信息页面</span>
<span class="line">        <span class="token keyword">end</span></span>
<span class="line">        </span>
<span class="line">        User<span class="token arrow operator">-&gt;&gt;</span>App<span class="token operator">:</span> 填写联系信息、特殊需求</span>
<span class="line">        User<span class="token arrow operator">-&gt;&gt;</span>App<span class="token operator">:</span> 选择优惠券（可选）</span>
<span class="line">        App<span class="token arrow operator">-&gt;&gt;</span>API<span class="token operator">:</span> PUT /api/bookings/<span class="token text string">{order_no}</span>&lt;br/&gt;更新订单信息</span>
<span class="line">        API<span class="token arrow operator">-&gt;&gt;</span>DB<span class="token operator">:</span> UPDATE bookings</span>
<span class="line">        DB<span class="token arrow operator">--&gt;&gt;</span>API<span class="token operator">:</span> 更新成功</span>
<span class="line">    <span class="token keyword">end</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">rect</span> rgb<span class="token text string">(240, 255, 240)</span></span>
<span class="line">        <span class="token keyword">Note over</span> User,Coach<span class="token operator">:</span> 阶段3<span class="token operator">:</span> 支付流程</span>
<span class="line">        User<span class="token arrow operator">-&gt;&gt;</span>App<span class="token operator">:</span> 点击支付</span>
<span class="line">        App<span class="token arrow operator">-&gt;&gt;</span>API<span class="token operator">:</span> POST /api/bookings/<span class="token text string">{order_no}</span>/pay</span>
<span class="line">        API<span class="token arrow operator">-&gt;&gt;</span>Pay<span class="token operator">:</span> 调起支付（微信/支付宝）</span>
<span class="line">        Pay<span class="token arrow operator">--&gt;&gt;</span>User<span class="token operator">:</span> 显示支付页面</span>
<span class="line">        </span>
<span class="line">        User<span class="token arrow operator">-&gt;&gt;</span>Pay<span class="token operator">:</span> 完成支付</span>
<span class="line">        Pay<span class="token arrow operator">-&gt;&gt;</span>API<span class="token operator">:</span> 支付回调通知</span>
<span class="line">        </span>
<span class="line">        API<span class="token arrow operator">-&gt;&gt;</span>DB<span class="token operator">:</span> BEGIN TRANSACTION</span>
<span class="line">        API<span class="token arrow operator">-&gt;&gt;</span>DB<span class="token operator">:</span> UPDATE bookings&lt;br/&gt;SET payment_status=1, booking_status=2<span class="token text string">(待确认)</span></span>
<span class="line">        API<span class="token arrow operator">-&gt;&gt;</span>DB<span class="token operator">:</span> UPDATE coach_available_slots&lt;br/&gt;SET slot_status=2<span class="token text string">(已预订)</span></span>
<span class="line">        API<span class="token arrow operator">-&gt;&gt;</span>DB<span class="token operator">:</span> INSERT booking_status_logs</span>
<span class="line">        API<span class="token arrow operator">-&gt;&gt;</span>DB<span class="token operator">:</span> COMMIT</span>
<span class="line">        </span>
<span class="line">        API<span class="token arrow operator">-&gt;&gt;</span>Msg<span class="token operator">:</span> 发送通知给教练</span>
<span class="line">        Msg<span class="token arrow operator">--&gt;&gt;</span>Coach<span class="token operator">:</span> 【新预约】用户XXX预约了您12/10的课程</span>
<span class="line">        API<span class="token arrow operator">--&gt;&gt;</span>App<span class="token operator">:</span> 支付成功</span>
<span class="line">        App<span class="token arrow operator">--&gt;&gt;</span>User<span class="token operator">:</span> 显示预约成功，等待教练确认</span>
<span class="line">    <span class="token keyword">end</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">rect</span> rgb<span class="token text string">(255, 240, 245)</span></span>
<span class="line">        <span class="token keyword">Note over</span> User,Coach<span class="token operator">:</span> 阶段4<span class="token operator">:</span> 教练确认</span>
<span class="line">        Coach<span class="token arrow operator">-&gt;&gt;</span>Coach<span class="token operator">:</span> 查看预约通知</span>
<span class="line">        Coach<span class="token arrow operator">-&gt;&gt;</span>API<span class="token operator">:</span> GET /api/coach/bookings?status=2</span>
<span class="line">        API<span class="token arrow operator">-&gt;&gt;</span>DB<span class="token operator">:</span> 查询待确认订单</span>
<span class="line">        DB<span class="token arrow operator">--&gt;&gt;</span>API<span class="token operator">:</span> 订单列表</span>
<span class="line">        API<span class="token arrow operator">--&gt;&gt;</span>Coach<span class="token operator">:</span> 返回待确认订单</span>
<span class="line">        </span>
<span class="line">        <span class="token keyword">alt</span> 教练确认接单</span>
<span class="line">            Coach<span class="token arrow operator">-&gt;&gt;</span>API<span class="token operator">:</span> POST /api/coach/bookings/<span class="token text string">{id}</span>/confirm</span>
<span class="line">            API<span class="token arrow operator">-&gt;&gt;</span>DB<span class="token operator">:</span> UPDATE bookings&lt;br/&gt;SET status=3<span class="token text string">(已确认)</span>, confirmed_by=1</span>
<span class="line">            API<span class="token arrow operator">-&gt;&gt;</span>DB<span class="token operator">:</span> INSERT booking_status_logs</span>
<span class="line">            API<span class="token arrow operator">-&gt;&gt;</span>Msg<span class="token operator">:</span> 发送通知给用户</span>
<span class="line">            Msg<span class="token arrow operator">--&gt;&gt;</span>User<span class="token operator">:</span> 【预约确认】教练已确认，请准时上课</span>
<span class="line">        <span class="token keyword">else</span> 教练拒绝（如时间冲突）</span>
<span class="line">            Coach<span class="token arrow operator">-&gt;&gt;</span>API<span class="token operator">:</span> POST /api/coach/bookings/<span class="token text string">{id}</span>/reject&lt;br/&gt;<span class="token text string">{reason}</span></span>
<span class="line">            API<span class="token arrow operator">-&gt;&gt;</span>DB<span class="token operator">:</span> BEGIN TRANSACTION</span>
<span class="line">            API<span class="token arrow operator">-&gt;&gt;</span>DB<span class="token operator">:</span> UPDATE bookings&lt;br/&gt;SET status=6<span class="token text string">(已取消)</span>, cancel_reason</span>
<span class="line">            API<span class="token arrow operator">-&gt;&gt;</span>DB<span class="token operator">:</span> UPDATE coach_available_slots&lt;br/&gt;SET slot_status=1<span class="token text string">(恢复可预约)</span></span>
<span class="line">            API<span class="token arrow operator">-&gt;&gt;</span>DB<span class="token operator">:</span> COMMIT</span>
<span class="line">            API<span class="token arrow operator">-&gt;&gt;</span>Pay<span class="token operator">:</span> 发起退款</span>
<span class="line">            Pay<span class="token arrow operator">--&gt;&gt;</span>API<span class="token operator">:</span> 退款成功</span>
<span class="line">            API<span class="token arrow operator">-&gt;&gt;</span>Msg<span class="token operator">:</span> 发送退款通知</span>
<span class="line">            Msg<span class="token arrow operator">--&gt;&gt;</span>User<span class="token operator">:</span> 【预约取消】教练无法接单，已退款</span>
<span class="line">        <span class="token keyword">end</span></span>
<span class="line">    <span class="token keyword">end</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">rect</span> rgb<span class="token text string">(245, 245, 255)</span></span>
<span class="line">        <span class="token keyword">Note over</span> User,Coach<span class="token operator">:</span> 阶段5<span class="token operator">:</span> 课程进行与完成</span>
<span class="line">        <span class="token keyword">Note over</span> User,Coach<span class="token operator">:</span> 课程开始前1小时</span>
<span class="line">        API<span class="token arrow operator">-&gt;&gt;</span>Msg<span class="token operator">:</span> 定时任务：发送上课提醒</span>
<span class="line">        Msg<span class="token arrow operator">--&gt;&gt;</span>User<span class="token operator">:</span> 【上课提醒】您的课程将在1小时后开始</span>
<span class="line">        Msg<span class="token arrow operator">--&gt;&gt;</span>Coach<span class="token operator">:</span> 【上课提醒】您有一节课程即将开始</span>
<span class="line">        </span>
<span class="line">        <span class="token keyword">Note over</span> User,Coach<span class="token operator">:</span> 课程时间到达</span>
<span class="line">        Coach<span class="token arrow operator">-&gt;&gt;</span>API<span class="token operator">:</span> POST /api/coach/bookings/<span class="token text string">{id}</span>/start</span>
<span class="line">        API<span class="token arrow operator">-&gt;&gt;</span>DB<span class="token operator">:</span> UPDATE bookings SET status=4<span class="token text string">(进行中)</span></span>
<span class="line">        </span>
<span class="line">        <span class="token keyword">Note over</span> User,Coach<span class="token operator">:</span> 课程结束</span>
<span class="line">        Coach<span class="token arrow operator">-&gt;&gt;</span>API<span class="token operator">:</span> POST /api/coach/bookings/<span class="token text string">{id}</span>/complete</span>
<span class="line">        API<span class="token arrow operator">-&gt;&gt;</span>DB<span class="token operator">:</span> BEGIN TRANSACTION</span>
<span class="line">        API<span class="token arrow operator">-&gt;&gt;</span>DB<span class="token operator">:</span> UPDATE bookings&lt;br/&gt;SET status=5<span class="token text string">(已完成)</span>, completed_at=NOW<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">        API<span class="token arrow operator">-&gt;&gt;</span>DB<span class="token operator">:</span> UPDATE coach_profiles&lt;br/&gt;累加 total_hours, total_courses</span>
<span class="line">        API<span class="token arrow operator">-&gt;&gt;</span>DB<span class="token operator">:</span> COMMIT</span>
<span class="line">        </span>
<span class="line">        API<span class="token arrow operator">-&gt;&gt;</span>Msg<span class="token operator">:</span> 发送评价邀请</span>
<span class="line">        Msg<span class="token arrow operator">--&gt;&gt;</span>User<span class="token operator">:</span> 【课程结束】快来评价您的教练吧</span>
<span class="line">    <span class="token keyword">end</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">rect</span> rgb<span class="token text string">(255, 255, 240)</span></span>
<span class="line">        <span class="token keyword">Note over</span> User,Coach<span class="token operator">:</span> 阶段6<span class="token operator">:</span> 用户评价</span>
<span class="line">        User<span class="token arrow operator">-&gt;&gt;</span>App<span class="token operator">:</span> 提交评价</span>
<span class="line">        App<span class="token arrow operator">-&gt;&gt;</span>API<span class="token operator">:</span> POST /api/bookings/<span class="token text string">{id}</span>/review&lt;br/&gt;<span class="token text string">{rating, content, tags}</span></span>
<span class="line">        </span>
<span class="line">        API<span class="token arrow operator">-&gt;&gt;</span>DB<span class="token operator">:</span> BEGIN TRANSACTION</span>
<span class="line">        API<span class="token arrow operator">-&gt;&gt;</span>DB<span class="token operator">:</span> INSERT INTO booking_reviews</span>
<span class="line">        API<span class="token arrow operator">-&gt;&gt;</span>DB<span class="token operator">:</span> UPDATE bookings SET is_reviewed=1</span>
<span class="line">        </span>
<span class="line">        API<span class="token arrow operator">-&gt;&gt;</span>DB<span class="token operator">:</span> 计算教练新评分</span>
<span class="line">        <span class="token keyword">Note over</span> API,DB<span class="token operator">:</span> AVG<span class="token text string">(overall_rating)</span> FROM booking_reviews&lt;br/&gt;WHERE coach_id = xxx</span>
<span class="line">        </span>
<span class="line">        API<span class="token arrow operator">-&gt;&gt;</span>DB<span class="token operator">:</span> UPDATE coach_profiles&lt;br/&gt;SET rating_score=新分数, rating_count+=1</span>
<span class="line">        API<span class="token arrow operator">-&gt;&gt;</span>DB<span class="token operator">:</span> COMMIT</span>
<span class="line">        </span>
<span class="line">        API<span class="token arrow operator">-&gt;&gt;</span>Msg<span class="token operator">:</span> 通知教练有新评价</span>
<span class="line">        Msg<span class="token arrow operator">--&gt;&gt;</span>Coach<span class="token operator">:</span> 【新评价】用户对您的课程评价了5星</span>
<span class="line">        </span>
<span class="line">        API<span class="token arrow operator">--&gt;&gt;</span>App<span class="token operator">:</span> 评价成功</span>
<span class="line">        App<span class="token arrow operator">--&gt;&gt;</span>User<span class="token operator">:</span> 感谢您的评价！</span>
<span class="line">        </span>
<span class="line">        <span class="token keyword">opt</span> 教练回复评价</span>
<span class="line">            Coach<span class="token arrow operator">-&gt;&gt;</span>API<span class="token operator">:</span> POST /api/reviews/<span class="token text string">{id}</span>/reply&lt;br/&gt;<span class="token text string">{reply_content}</span></span>
<span class="line">            API<span class="token arrow operator">-&gt;&gt;</span>DB<span class="token operator">:</span> UPDATE booking_reviews&lt;br/&gt;SET coach_reply, coach_reply_time</span>
<span class="line">            API<span class="token arrow operator">-&gt;&gt;</span>Msg<span class="token operator">:</span> 通知用户教练已回复</span>
<span class="line">            Msg<span class="token arrow operator">--&gt;&gt;</span>User<span class="token operator">:</span> 教练回复了您的评价</span>
<span class="line">        <span class="token keyword">end</span></span>
<span class="line">    <span class="token keyword">end</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><div class="language-mermaid line-numbers-mode has-collapsed-lines collapsed" data-highlighter="prismjs" data-ext="mermaid" style="--vp-collapsed-lines:15;"><pre><code class="language-mermaid"><span class="line"><span class="token keyword">sequenceDiagram</span></span>
<span class="line">    <span class="token keyword">autonumber</span></span>
<span class="line">    </span>
<span class="line">    actor Coach as 教练</span>
<span class="line">    <span class="token keyword">participant</span> App as 教练端</span>
<span class="line">    <span class="token keyword">participant</span> API as 后端API</span>
<span class="line">    <span class="token keyword">participant</span> DB as 数据库</span>
<span class="line">    <span class="token keyword">participant</span> Msg as 消息通知</span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">rect</span> rgb<span class="token text string">(240, 248, 255)</span></span>
<span class="line">        <span class="token keyword">Note over</span> Coach,Msg<span class="token operator">:</span> 场景1<span class="token operator">:</span> 批量创建可约时段</span>
<span class="line">        Coach<span class="token arrow operator">-&gt;&gt;</span>App<span class="token operator">:</span> 选择日期范围和时间</span>
<span class="line">        <span class="token keyword">Note over</span> Coach,App<span class="token operator">:</span> 例如：12月10日-12月31日&lt;br/&gt;每周一三五 18<span class="token operator">:</span>00-20<span class="token operator">:</span>00</span>
<span class="line">        </span>
<span class="line">        Coach<span class="token arrow operator">-&gt;&gt;</span>App<span class="token operator">:</span> 选择服务类型</span>
<span class="line">        App<span class="token arrow operator">-&gt;&gt;</span>API<span class="token operator">:</span> GET /api/coach/services</span>
<span class="line">        API<span class="token arrow operator">-&gt;&gt;</span>DB<span class="token operator">:</span> SELECT * FROM coach_services WHERE coach_id=xxx</span>
<span class="line">        DB<span class="token arrow operator">--&gt;&gt;</span>API<span class="token operator">:</span> 服务列表</span>
<span class="line">        API<span class="token arrow operator">--&gt;&gt;</span>App<span class="token operator">:</span> 返回<span class="token text string">[一对一私教, 一对二, 小班课]</span></span>
<span class="line">        </span>
<span class="line">        Coach<span class="token arrow operator">-&gt;&gt;</span>App<span class="token operator">:</span> 确认创建</span>
<span class="line">        App<span class="token arrow operator">-&gt;&gt;</span>API<span class="token operator">:</span> POST /api/coach/slots/batch&lt;br/&gt;<span class="token text string">{date_range, time_slots, service_id, recurrence}</span></span>
<span class="line">        </span>
<span class="line">        API<span class="token arrow operator">-&gt;&gt;</span>DB<span class="token operator">:</span> BEGIN TRANSACTION</span>
<span class="line">        </span>
<span class="line">        <span class="token keyword">loop</span> 遍历每个日期</span>
<span class="line">            API<span class="token arrow operator">-&gt;&gt;</span>DB<span class="token operator">:</span> 检查是否有冲突时段</span>
<span class="line">            <span class="token keyword">Note over</span> API,DB<span class="token operator">:</span> SELECT * FROM coach_available_slots&lt;br/&gt;WHERE coach_id AND date AND time重叠</span>
<span class="line">            </span>
<span class="line">            <span class="token keyword">alt</span> 无冲突</span>
<span class="line">                API<span class="token arrow operator">-&gt;&gt;</span>DB<span class="token operator">:</span> INSERT INTO coach_available_slots&lt;br/&gt;多条记录（根据日期范围）</span>
<span class="line">            <span class="token keyword">else</span> 有冲突</span>
<span class="line">                <span class="token keyword">Note over</span> API<span class="token operator">:</span> 记录冲突日期，跳过</span>
<span class="line">            <span class="token keyword">end</span></span>
<span class="line">        <span class="token keyword">end</span></span>
<span class="line">        </span>
<span class="line">        API<span class="token arrow operator">-&gt;&gt;</span>DB<span class="token operator">:</span> COMMIT</span>
<span class="line">        API<span class="token arrow operator">--&gt;&gt;</span>App<span class="token operator">:</span> 创建成功 + 冲突提示</span>
<span class="line">        App<span class="token arrow operator">--&gt;&gt;</span>Coach<span class="token operator">:</span> 显示：已创建XX个时段&lt;br/&gt;X个日期因冲突跳过</span>
<span class="line">    <span class="token keyword">end</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">rect</span> rgb<span class="token text string">(255, 250, 240)</span></span>
<span class="line">        <span class="token keyword">Note over</span> Coach,Msg<span class="token operator">:</span> 场景2<span class="token operator">:</span> 查看时段和订单</span>
<span class="line">        Coach<span class="token arrow operator">-&gt;&gt;</span>App<span class="token operator">:</span> 查看本周课程安排</span>
<span class="line">        App<span class="token arrow operator">-&gt;&gt;</span>API<span class="token operator">:</span> GET /api/coach/schedule?week=2024-W50</span>
<span class="line">        </span>
<span class="line">        API<span class="token arrow operator">-&gt;&gt;</span>DB<span class="token operator">:</span> 复杂查询</span>
<span class="line">        <span class="token keyword">Note over</span> API,DB<span class="token operator">:</span> SELECT s.*, b.booking_status, b.user_id&lt;br/&gt;FROM coach_available_slots s&lt;br/&gt;LEFT JOIN bookings b ON s.id = b.slot_id&lt;br/&gt;WHERE s.coach_id = xxx AND s.date BETWEEN xxx</span>
<span class="line">        </span>
<span class="line">        DB<span class="token arrow operator">--&gt;&gt;</span>API<span class="token operator">:</span> 时段 + 订单信息</span>
<span class="line">        API<span class="token arrow operator">--&gt;&gt;</span>App<span class="token operator">:</span> 返回日历数据</span>
<span class="line">        </span>
<span class="line">        <span class="token keyword">Note over</span> App<span class="token operator">:</span> 渲染课程日历</span>
<span class="line">        App<span class="token arrow operator">--&gt;&gt;</span>Coach<span class="token operator">:</span> 显示日历视图</span>
<span class="line">        <span class="token keyword">Note over</span> Coach,App<span class="token operator">:</span> 绿色=可约&lt;br/&gt;黄色=已锁定&lt;br/&gt;红色=已预订&lt;br/&gt;灰色=已关闭</span>
<span class="line">    <span class="token keyword">end</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">rect</span> rgb<span class="token text string">(240, 255, 240)</span></span>
<span class="line">        <span class="token keyword">Note over</span> Coach,Msg<span class="token operator">:</span> 场景3<span class="token operator">:</span> 修改/删除时段</span>
<span class="line">        Coach<span class="token arrow operator">-&gt;&gt;</span>App<span class="token operator">:</span> 选择某个时段</span>
<span class="line">        App<span class="token arrow operator">--&gt;&gt;</span>Coach<span class="token operator">:</span> 显示时段详情</span>
<span class="line">        </span>
<span class="line">        <span class="token keyword">alt</span> 时段未被预订 <span class="token text string">(status=1)</span></span>
<span class="line">            Coach<span class="token arrow operator">-&gt;&gt;</span>App<span class="token operator">:</span> 修改时间或删除</span>
<span class="line">            App<span class="token arrow operator">-&gt;&gt;</span>API<span class="token operator">:</span> PUT /api/coach/slots/<span class="token text string">{id}</span>&lt;br/&gt;OR DELETE /api/coach/slots/<span class="token text string">{id}</span></span>
<span class="line">            </span>
<span class="line">            API<span class="token arrow operator">-&gt;&gt;</span>DB<span class="token operator">:</span> 检查状态</span>
<span class="line">            DB<span class="token arrow operator">--&gt;&gt;</span>API<span class="token operator">:</span> slot_status = 1 <span class="token text string">(可操作)</span></span>
<span class="line">            </span>
<span class="line">            API<span class="token arrow operator">-&gt;&gt;</span>DB<span class="token operator">:</span> UPDATE/DELETE coach_available_slots</span>
<span class="line">            DB<span class="token arrow operator">--&gt;&gt;</span>API<span class="token operator">:</span> 操作成功</span>
<span class="line">            API<span class="token arrow operator">--&gt;&gt;</span>App<span class="token operator">:</span> 修改/删除成功</span>
<span class="line">            </span>
<span class="line">        <span class="token keyword">else</span> 时段已被预订 <span class="token text string">(status=2)</span></span>
<span class="line">            Coach<span class="token arrow operator">-&gt;&gt;</span>App<span class="token operator">:</span> 尝试删除</span>
<span class="line">            App<span class="token arrow operator">-&gt;&gt;</span>API<span class="token operator">:</span> DELETE /api/coach/slots/<span class="token text string">{id}</span></span>
<span class="line">            </span>
<span class="line">            API<span class="token arrow operator">-&gt;&gt;</span>DB<span class="token operator">:</span> 检查是否有订单</span>
<span class="line">            DB<span class="token arrow operator">--&gt;&gt;</span>API<span class="token operator">:</span> 存在关联订单</span>
<span class="line">            </span>
<span class="line">            API<span class="token arrow operator">--&gt;&gt;</span>App<span class="token operator">:</span> 错误：该时段已有预订，无法删除</span>
<span class="line">            App<span class="token arrow operator">--&gt;&gt;</span>Coach<span class="token operator">:</span> 提示：请先取消订单后再删除时段</span>
<span class="line">            </span>
<span class="line">        <span class="token keyword">else</span> 时段被锁定 <span class="token text string">(status=3)</span></span>
<span class="line">            Coach<span class="token arrow operator">-&gt;&gt;</span>App<span class="token operator">:</span> 尝试修改</span>
<span class="line">            API<span class="token arrow operator">--&gt;&gt;</span>App<span class="token operator">:</span> 错误：时段已被锁定</span>
<span class="line">            App<span class="token arrow operator">--&gt;&gt;</span>Coach<span class="token operator">:</span> 该时段正在被预订中，请稍后再试</span>
<span class="line">        <span class="token keyword">end</span></span>
<span class="line">    <span class="token keyword">end</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">rect</span> rgb<span class="token text string">(255, 240, 245)</span></span>
<span class="line">        <span class="token keyword">Note over</span> Coach,Msg<span class="token operator">:</span> 场景4<span class="token operator">:</span> 临时关闭时段</span>
<span class="line">        Coach<span class="token arrow operator">-&gt;&gt;</span>App<span class="token operator">:</span> 选择多个未预订时段</span>
<span class="line">        Coach<span class="token arrow operator">-&gt;&gt;</span>App<span class="token operator">:</span> 点击<span class="token string">&quot;批量关闭&quot;</span></span>
<span class="line">        <span class="token keyword">Note over</span> Coach<span class="token operator">:</span> 例如：临时有事，关闭本周所有时段</span>
<span class="line">        </span>
<span class="line">        App<span class="token arrow operator">-&gt;&gt;</span>API<span class="token operator">:</span> POST /api/coach/slots/close&lt;br/&gt;<span class="token punctuation">{</span>slot_ids<span class="token operator">:</span> <span class="token text string">[1,2,3...]}</span></span>
<span class="line">        </span>
<span class="line">        API<span class="token arrow operator">-&gt;&gt;</span>DB<span class="token operator">:</span> BEGIN TRANSACTION</span>
<span class="line">        </span>
<span class="line">        <span class="token keyword">loop</span> 遍历每个时段</span>
<span class="line">            API<span class="token arrow operator">-&gt;&gt;</span>DB<span class="token operator">:</span> 检查时段状态</span>
<span class="line">            </span>
<span class="line">            <span class="token keyword">alt</span> 时段可用 <span class="token text string">(status=1)</span></span>
<span class="line">                API<span class="token arrow operator">-&gt;&gt;</span>DB<span class="token operator">:</span> UPDATE coach_available_slots&lt;br/&gt;SET slot_status = 4 <span class="token text string">(教练关闭)</span></span>
<span class="line">            <span class="token keyword">else</span> 时段已预订 <span class="token text string">(status=2)</span></span>
<span class="line">                <span class="token keyword">Note over</span> API<span class="token operator">:</span> 跳过，记录到失败列表</span>
<span class="line">            <span class="token keyword">end</span></span>
<span class="line">        <span class="token keyword">end</span></span>
<span class="line">        </span>
<span class="line">        API<span class="token arrow operator">-&gt;&gt;</span>DB<span class="token operator">:</span> COMMIT</span>
<span class="line">        </span>
<span class="line">        API<span class="token arrow operator">--&gt;&gt;</span>App<span class="token operator">:</span> 返回操作结果</span>
<span class="line">        App<span class="token arrow operator">--&gt;&gt;</span>Coach<span class="token operator">:</span> 已关闭XX个时段&lt;br/&gt;X个时段已有预订，无法关闭</span>
<span class="line">    <span class="token keyword">end</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">rect</span> rgb<span class="token text string">(245, 245, 255)</span></span>
<span class="line">        <span class="token keyword">Note over</span> Coach,Msg<span class="token operator">:</span> 场景5<span class="token operator">:</span> 重新开放已关闭时段</span>
<span class="line">        Coach<span class="token arrow operator">-&gt;&gt;</span>App<span class="token operator">:</span> 筛选<span class="token string">&quot;已关闭&quot;</span>的时段</span>
<span class="line">        App<span class="token arrow operator">-&gt;&gt;</span>API<span class="token operator">:</span> GET /api/coach/slots?status=4</span>
<span class="line">        API<span class="token arrow operator">-&gt;&gt;</span>DB<span class="token operator">:</span> SELECT * FROM coach_available_slots&lt;br/&gt;WHERE coach_id=xxx AND slot_status=4</span>
<span class="line">        DB<span class="token arrow operator">--&gt;&gt;</span>API<span class="token operator">:</span> 已关闭时段列表</span>
<span class="line">        API<span class="token arrow operator">--&gt;&gt;</span>App<span class="token operator">:</span> 返回列表</span>
<span class="line">        </span>
<span class="line">        Coach<span class="token arrow operator">-&gt;&gt;</span>App<span class="token operator">:</span> 选择时段，点击<span class="token string">&quot;重新开放&quot;</span></span>
<span class="line">        App<span class="token arrow operator">-&gt;&gt;</span>API<span class="token operator">:</span> POST /api/coach/slots/reopen&lt;br/&gt;<span class="token text string">{slot_ids}</span></span>
<span class="line">        </span>
<span class="line">        API<span class="token arrow operator">-&gt;&gt;</span>DB<span class="token operator">:</span> UPDATE coach_available_slots&lt;br/&gt;SET slot_status = 1 <span class="token text string">(可预约)</span>&lt;br/&gt;WHERE id IN <span class="token text string">(xxx)</span> AND slot_status = 4</span>
<span class="line">        </span>
<span class="line">        DB<span class="token arrow operator">--&gt;&gt;</span>API<span class="token operator">:</span> 更新成功</span>
<span class="line">        API<span class="token arrow operator">--&gt;&gt;</span>App<span class="token operator">:</span> 操作成功</span>
<span class="line">        App<span class="token arrow operator">--&gt;&gt;</span>Coach<span class="token operator">:</span> 时段已重新开放</span>
<span class="line">    <span class="token keyword">end</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">rect</span> rgb<span class="token text string">(255, 255, 240)</span></span>
<span class="line">        <span class="token keyword">Note over</span> Coach,Msg<span class="token operator">:</span> 场景6<span class="token operator">:</span> 处理过期锁定时段（定时任务）</span>
<span class="line">        <span class="token keyword">Note over</span> API<span class="token operator">:</span> 定时任务每分钟执行</span>
<span class="line">        </span>
<span class="line">        API<span class="token arrow operator">-&gt;&gt;</span>DB<span class="token operator">:</span> 查询过期锁定</span>
<span class="line">        <span class="token keyword">Note over</span> API,DB<span class="token operator">:</span> SELECT * FROM coach_available_slots&lt;br/&gt;WHERE slot_status = 3&lt;br/&gt;AND locked_until &lt; NOW<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">        </span>
<span class="line">        DB<span class="token arrow operator">--&gt;&gt;</span>API<span class="token operator">:</span> 返回过期锁定的时段</span>
<span class="line">        </span>
<span class="line">        <span class="token keyword">alt</span> 有过期时段</span>
<span class="line">            API<span class="token arrow operator">-&gt;&gt;</span>DB<span class="token operator">:</span> BEGIN TRANSACTION</span>
<span class="line">            </span>
<span class="line">            <span class="token keyword">loop</span> 每个过期时段</span>
<span class="line">                API<span class="token arrow operator">-&gt;&gt;</span>DB<span class="token operator">:</span> 检查是否有对应订单</span>
<span class="line">                </span>
<span class="line">                <span class="token keyword">alt</span> 有待支付订单</span>
<span class="line">                    API<span class="token arrow operator">-&gt;&gt;</span>DB<span class="token operator">:</span> UPDATE bookings&lt;br/&gt;SET status = 6 <span class="token text string">(已取消)</span>&lt;br/&gt;cancel_reason = &#39;超时未支付&#39;</span>
<span class="line">                    </span>
<span class="line">                    API<span class="token arrow operator">-&gt;&gt;</span>DB<span class="token operator">:</span> INSERT booking_status_logs&lt;br/&gt;记录系统取消</span>
<span class="line">                    </span>
<span class="line">                    API<span class="token arrow operator">-&gt;&gt;</span>Msg<span class="token operator">:</span> 发送取消通知</span>
<span class="line">                    Msg<span class="token arrow operator">--&gt;&gt;</span>Coach<span class="token operator">:</span> 订单已自动取消（超时未支付）</span>
<span class="line">                <span class="token keyword">end</span></span>
<span class="line">                </span>
<span class="line">                API<span class="token arrow operator">-&gt;&gt;</span>DB<span class="token operator">:</span> UPDATE coach_available_slots&lt;br/&gt;SET slot_status = 1 <span class="token text string">(恢复可预约)</span>&lt;br/&gt;locked_until = NULL, locked_by_user_id = NULL</span>
<span class="line">            <span class="token keyword">end</span></span>
<span class="line">            </span>
<span class="line">            API<span class="token arrow operator">-&gt;&gt;</span>DB<span class="token operator">:</span> COMMIT</span>
<span class="line">        <span class="token keyword">end</span></span>
<span class="line">    <span class="token keyword">end</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><div class="language-mermaid line-numbers-mode has-collapsed-lines collapsed" data-highlighter="prismjs" data-ext="mermaid" style="--vp-collapsed-lines:15;"><pre><code class="language-mermaid"><span class="line"><span class="token keyword">sequenceDiagram</span></span>
<span class="line">    <span class="token keyword">autonumber</span></span>
<span class="line">    </span>
<span class="line">    actor User as 用户</span>
<span class="line">    <span class="token keyword">participant</span> App as 客户端</span>
<span class="line">    <span class="token keyword">participant</span> API as 后端API</span>
<span class="line">    <span class="token keyword">participant</span> DB as 数据库</span>
<span class="line">    <span class="token keyword">participant</span> Pay as 支付系统</span>
<span class="line">    <span class="token keyword">participant</span> Coach as 教练</span>
<span class="line">    <span class="token keyword">participant</span> Msg as 消息通知</span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">rect</span> rgb<span class="token text string">(240, 248, 255)</span></span>
<span class="line">        <span class="token keyword">Note over</span> User,Msg<span class="token operator">:</span> 场景1<span class="token operator">:</span> 用户取消订单</span>
<span class="line">        User<span class="token arrow operator">-&gt;&gt;</span>App<span class="token operator">:</span> 查看我的预约</span>
<span class="line">        App<span class="token arrow operator">-&gt;&gt;</span>API<span class="token operator">:</span> GET /api/bookings/my</span>
<span class="line">        API<span class="token arrow operator">-&gt;&gt;</span>DB<span class="token operator">:</span> SELECT * FROM bookings&lt;br/&gt;WHERE user_id = xxx&lt;br/&gt;ORDER BY booking_date DESC</span>
<span class="line">        DB<span class="token arrow operator">--&gt;&gt;</span>API<span class="token operator">:</span> 订单列表</span>
<span class="line">        API<span class="token arrow operator">--&gt;&gt;</span>App<span class="token operator">:</span> 返回订单</span>
<span class="line">        </span>
<span class="line">        User<span class="token arrow operator">-&gt;&gt;</span>App<span class="token operator">:</span> 选择订单，点击取消</span>
<span class="line">        App<span class="token arrow operator">-&gt;&gt;</span>API<span class="token operator">:</span> GET /api/bookings/<span class="token text string">{id}</span>/cancel-policy</span>
<span class="line">        </span>
<span class="line">        API<span class="token arrow operator">-&gt;&gt;</span>DB<span class="token operator">:</span> 查询订单详情</span>
<span class="line">        DB<span class="token arrow operator">--&gt;&gt;</span>API<span class="token operator">:</span> 订单信息</span>
<span class="line">        </span>
<span class="line">        <span class="token keyword">Note over</span> API<span class="token operator">:</span> 计算距离上课时间</span>
<span class="line">        <span class="token keyword">alt</span> 距上课 &gt; 24小时</span>
<span class="line">            API<span class="token arrow operator">--&gt;&gt;</span>App<span class="token operator">:</span> 可全额退款</span>
<span class="line">        <span class="token keyword">else</span> 24小时 &gt; 距上课 &gt; 1小时</span>
<span class="line">            API<span class="token arrow operator">--&gt;&gt;</span>App<span class="token operator">:</span> 可退款50%</span>
<span class="line">        <span class="token keyword">else</span> 距上课 &lt; 1小时</span>
<span class="line">            API<span class="token arrow operator">--&gt;&gt;</span>App<span class="token operator">:</span> 不可退款</span>
<span class="line">        <span class="token keyword">end</span></span>
<span class="line">        </span>
<span class="line">        App<span class="token arrow operator">--&gt;&gt;</span>User<span class="token operator">:</span> 显示取消政策和退款金额</span>
<span class="line">        </span>
<span class="line">        User<span class="token arrow operator">-&gt;&gt;</span>App<span class="token operator">:</span> 确认取消</span>
<span class="line">        App<span class="token arrow operator">-&gt;&gt;</span>API<span class="token operator">:</span> POST /api/bookings/<span class="token text string">{id}</span>/cancel&lt;br/&gt;<span class="token text string">{cancel_reason}</span></span>
<span class="line">        </span>
<span class="line">        API<span class="token arrow operator">-&gt;&gt;</span>DB<span class="token operator">:</span> BEGIN TRANSACTION</span>
<span class="line">        </span>
<span class="line">        API<span class="token arrow operator">-&gt;&gt;</span>DB<span class="token operator">:</span> SELECT * FROM bookings&lt;br/&gt;WHERE id = xxx FOR UPDATE</span>
<span class="line">        </span>
<span class="line">        <span class="token keyword">alt</span> 订单状态不允许取消</span>
<span class="line">            DB<span class="token arrow operator">--&gt;&gt;</span>API<span class="token operator">:</span> status IN <span class="token text string">(已完成, 已取消)</span></span>
<span class="line">            API<span class="token arrow operator">-&gt;&gt;</span>DB<span class="token operator">:</span> ROLLBACK</span>
<span class="line">            API<span class="token arrow operator">--&gt;&gt;</span>App<span class="token operator">:</span> 错误：订单状态XXX不允许取消</span>
<span class="line">        <span class="token keyword">else</span> 可以取消</span>
<span class="line">            API<span class="token arrow operator">-&gt;&gt;</span>DB<span class="token operator">:</span> UPDATE bookings&lt;br/&gt;SET status =  <span class="token text string">(已取消)</span>&lt;br/&gt;cancelled_by =  <span class="token text string">(用户取消)</span>&lt;br/&gt;cancel_reason = xxx&lt;br/&gt;cancelled_at = NOW<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">            </span>
<span class="line">            API<span class="token arrow operator">-&gt;&gt;</span>DB<span class="token operator">:</span> 检查关联时段</span>
<span class="line">            DB<span class="token arrow operator">--&gt;&gt;</span>API<span class="token operator">:</span> slot_id = xxx</span>
<span class="line">            </span>
<span class="line">            API<span class="token arrow operator">-&gt;&gt;</span>DB<span class="token operator">:</span> UPDATE coach_available_slots&lt;br/&gt;SET slot_status = 1 <span class="token text string">(恢复可预约)</span>&lt;br/&gt;WHERE id = slot_id</span>
<span class="line">            </span>
<span class="line">            API<span class="token arrow operator">-&gt;&gt;</span>DB<span class="token operator">:</span> INSERT INTO booking_status_logs&lt;br/&gt;记录取消操作</span>
<span class="line">            </span>
<span class="line">            API<span class="token arrow operator">-&gt;&gt;</span>DB<span class="token operator">:</span> COMMIT</span>
<span class="line">            </span>
<span class="line">            <span class="token keyword">alt</span> 需要退款 <span class="token text string">(已支付订单)</span></span>
<span class="line">                API<span class="token arrow operator">-&gt;&gt;</span>Pay<span class="token operator">:</span> 调用退款接口</span>
<span class="line">                <span class="token keyword">Note over</span> API,Pay<span class="token operator">:</span> 根据取消政策计算退款金额&lt;br/&gt;- 提前24小时：100%&lt;br/&gt;- 提前1-24小时：50%&lt;br/&gt;- 1小时内：0%</span>
<span class="line">                </span>
<span class="line">                Pay<span class="token arrow operator">--&gt;&gt;</span>API<span class="token operator">:</span> 退款成功</span>
<span class="line">                </span>
<span class="line">                API<span class="token arrow operator">-&gt;&gt;</span>DB<span class="token operator">:</span> UPDATE bookings&lt;br/&gt;SET payment_status = 3 <span class="token text string">(全额退款)</span>&lt;br/&gt;或 payment_status = 2 <span class="token text string">(部分退款)</span></span>
<span class="line">                </span>
<span class="line">                API<span class="token arrow operator">-&gt;&gt;</span>Msg<span class="token operator">:</span> 发送退款通知</span>
<span class="line">                Msg<span class="token arrow operator">--&gt;&gt;</span>User<span class="token operator">:</span> 【退款通知】已退款XX元至原支付账户</span>
<span class="line">            <span class="token keyword">end</span></span>
<span class="line">            </span>
<span class="line">            API<span class="token arrow operator">-&gt;&gt;</span>Msg<span class="token operator">:</span> 通知教练</span>
<span class="line">            Msg<span class="token arrow operator">--&gt;&gt;</span>Coach<span class="token operator">:</span> 【订单取消】用户取消了12/10的预约</span>
<span class="line">            </span>
<span class="line">            API<span class="token arrow operator">--&gt;&gt;</span>App<span class="token operator">:</span> 取消成功</span>
<span class="line">            App<span class="token arrow operator">--&gt;&gt;</span>User<span class="token operator">:</span> 订单已取消</span>
<span class="line">        <span class="token keyword">end</span></span>
<span class="line">    <span class="token keyword">end</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">rect</span> rgb<span class="token text string">(255, 250, 240)</span></span>
<span class="line">        <span class="token keyword">Note over</span> User,Msg<span class="token operator">:</span> 场景2<span class="token operator">:</span> 教练取消订单</span>
<span class="line">        </span>
<span class="line">        Coach<span class="token arrow operator">-&gt;&gt;</span>API<span class="token operator">:</span> GET /api/coach/bookings</span>
<span class="line">        API<span class="token arrow operator">-&gt;&gt;</span>DB<span class="token operator">:</span> 查询教练订单</span>
<span class="line">        DB<span class="token arrow operator">--&gt;&gt;</span>API<span class="token operator">:</span> 订单列表</span>
<span class="line">        API<span class="token arrow operator">--&gt;&gt;</span>Coach<span class="token operator">:</span> 返回订单</span>
<span class="line">        </span>
<span class="line">        Coach<span class="token arrow operator">-&gt;&gt;</span>API<span class="token operator">:</span> POST /api/coach/bookings/<span class="token text string">{id}</span>/cancel&lt;br/&gt;<span class="token text string">{cancel_reason}</span></span>
<span class="line">        </span>
<span class="line">        API<span class="token arrow operator">-&gt;&gt;</span>DB<span class="token operator">:</span> BEGIN TRANSACTION</span>
<span class="line">        </span>
<span class="line">        API<span class="token arrow operator">-&gt;&gt;</span>DB<span class="token operator">:</span> SELECT * FROM bookings&lt;br/&gt;WHERE id = xxx FOR UPDATE</span>
<span class="line">        </span>
<span class="line">        <span class="token keyword">alt</span> 订单可取消</span>
<span class="line">            API<span class="token arrow operator">-&gt;&gt;</span>DB<span class="token operator">:</span> UPDATE bookings&lt;br/&gt;SET status = <span class="token text string">(已取消)</span>&lt;br/&gt;cancelled_by = <span class="token text string">(教练取消)</span>&lt;br/&gt;cancel_reason = xxx</span>
<span class="line">            </span>
<span class="line">            API<span class="token arrow operator">-&gt;&gt;</span>DB<span class="token operator">:</span> UPDATE coach_available_slots&lt;br/&gt;SET slot_status = 1 <span class="token text string">(恢复)</span></span>
<span class="line">            </span>
<span class="line">            API<span class="token arrow operator">-&gt;&gt;</span>DB<span class="token operator">:</span> INSERT booking_status_logs</span>
<span class="line">            </span>
<span class="line">            API<span class="token arrow operator">-&gt;&gt;</span>DB<span class="token operator">:</span> COMMIT</span>
<span class="line">            </span>
<span class="line">            <span class="token keyword">Note over</span> API<span class="token operator">:</span> 教练取消，无论何时都全额退款</span>
<span class="line">            API<span class="token arrow operator">-&gt;&gt;</span>Pay<span class="token operator">:</span> 发起全额退款</span>
<span class="line">            Pay<span class="token arrow operator">--&gt;&gt;</span>API<span class="token operator">:</span> 退款成功</span>
<span class="line">            </span>
<span class="line">            API<span class="token arrow operator">-&gt;&gt;</span>DB<span class="token operator">:</span> UPDATE bookings&lt;br/&gt;SET payment_status = 3</span>
<span class="line">            </span>
<span class="line">            API<span class="token arrow operator">-&gt;&gt;</span>Msg<span class="token operator">:</span> 发送通知</span>
<span class="line">            Msg<span class="token arrow operator">--&gt;&gt;</span>User<span class="token operator">:</span> 【订单取消】教练因XXX原因无法授课&lt;br/&gt;已全额退款，给您带来不便敬请谅解</span>
<span class="line">            </span>
<span class="line">            <span class="token keyword">Note over</span> API<span class="token operator">:</span> 记录教练取消次数（影响展示排序权重）</span>
<span class="line">            API<span class="token arrow operator">-&gt;&gt;</span>DB<span class="token operator">:</span> 增加教练取消计数</span>
<span class="line">            </span>
<span class="line">            <span class="token keyword">alt</span> 教练频繁取消</span>
<span class="line">                API<span class="token arrow operator">-&gt;&gt;</span>DB<span class="token operator">:</span> UPDATE coach_profiles&lt;br/&gt;SET coach_status = 2 <span class="token text string">(休假中)</span></span>
<span class="line">                API<span class="token arrow operator">-&gt;&gt;</span>Msg<span class="token operator">:</span> 警告教练</span>
<span class="line">                Msg<span class="token arrow operator">--&gt;&gt;</span>Coach<span class="token operator">:</span> 【警告】您本月已取消3次订单&lt;br/&gt;已自动暂停接单，请联系客服</span>
<span class="line">            <span class="token keyword">end</span></span>
<span class="line">            </span>
<span class="line">        <span class="token keyword">end</span></span>
<span class="line">    <span class="token keyword">end</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">rect</span> rgb<span class="token text string">(240, 255, 240)</span></span>
<span class="line">        <span class="token keyword">Note over</span> User,Msg<span class="token operator">:</span> 场景3<span class="token operator">:</span> 系统自动取消（超时未确认）</span>
<span class="line">        <span class="token keyword">Note over</span> API<span class="token operator">:</span> 定时任务：每小时检查</span>
<span class="line">        </span>
<span class="line">        API<span class="token arrow operator">-&gt;&gt;</span>DB<span class="token operator">:</span> 查询超时未确认订单</span>
<span class="line">        <span class="token keyword">Note over</span> API,DB<span class="token operator">:</span> SELECT * FROM bookings&lt;br/&gt;WHERE status = 2 <span class="token text string">(待确认)</span>&lt;br/&gt;AND created_at &lt; NOW<span class="token punctuation">(</span><span class="token punctuation">)</span> - INTERVAL 24 HOUR</span>
<span class="line">        </span>
<span class="line">        DB<span class="token arrow operator">--&gt;&gt;</span>API<span class="token operator">:</span> 返回超时订单</span>
<span class="line">        </span>
<span class="line">        <span class="token keyword">alt</span> 有超时订单</span>
<span class="line">            <span class="token keyword">loop</span> 每个超时订单</span>
<span class="line">                API<span class="token arrow operator">-&gt;&gt;</span>DB<span class="token operator">:</span> BEGIN TRANSACTION</span>
<span class="line">                </span>
<span class="line">                API<span class="token arrow operator">-&gt;&gt;</span>DB<span class="token operator">:</span> UPDATE bookings&lt;br/&gt;SET status = 6 <span class="token text string">(已取消)</span>&lt;br/&gt;cancelled_by = 3 <span class="token text string">(系统取消)</span>&lt;br/&gt;cancel_reason = &#39;教练超时未确认&#39;</span>
<span class="line">                </span>
<span class="line">                API<span class="token arrow operator">-&gt;&gt;</span>DB<span class="token operator">:</span> UPDATE coach_available_slots&lt;br/&gt;SET slot_status = 1</span>
<span class="line">                </span>
<span class="line">                API<span class="token arrow operator">-&gt;&gt;</span>DB<span class="token operator">:</span> INSERT booking_status_logs</span>
<span class="line">                </span>
<span class="line">                API<span class="token arrow operator">-&gt;&gt;</span>Pay<span class="token operator">:</span> 全额退款</span>
<span class="line">                Pay<span class="token arrow operator">--&gt;&gt;</span>API<span class="token operator">:</span> 退款成功</span>
<span class="line">                </span>
<span class="line">                API<span class="token arrow operator">-&gt;&gt;</span>DB<span class="token operator">:</span> UPDATE bookings&lt;br/&gt;SET payment_status = 3</span>
<span class="line">                </span>
<span class="line">                API<span class="token arrow operator">-&gt;&gt;</span>DB<span class="token operator">:</span> COMMIT</span>
<span class="line">                </span>
<span class="line">                API<span class="token arrow operator">-&gt;&gt;</span>Msg<span class="token operator">:</span> 发送通知</span>
<span class="line">                Msg<span class="token arrow operator">--&gt;&gt;</span>User<span class="token operator">:</span> 【订单取消】教练24小时未确认&lt;br/&gt;已自动取消并全额退款</span>
<span class="line">                Msg<span class="token arrow operator">--&gt;&gt;</span>Coach<span class="token operator">:</span> 【系统通知】订单因超时未确认已被取消&lt;br/&gt;请及时处理预约</span>
<span class="line">                </span>
<span class="line">                <span class="token keyword">Note over</span> API<span class="token operator">:</span> 记录教练超时（影响排序权重）</span>
<span class="line">                API<span class="token arrow operator">-&gt;&gt;</span>DB<span class="token operator">:</span> 记录教练服务质量问题</span>
<span class="line">            <span class="token keyword">end</span></span>
<span class="line">        <span class="token keyword">end</span></span>
<span class="line">    <span class="token keyword">end</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">rect</span> rgb<span class="token text string">(255, 240, 245)</span></span>
<span class="line">        <span class="token keyword">Note over</span> User,Msg<span class="token operator">:</span> 场景4<span class="token operator">:</span> 订单纠纷处理</span>
<span class="line">        User<span class="token arrow operator">-&gt;&gt;</span>App<span class="token operator">:</span> 申诉：教练未到场</span>
<span class="line">        App<span class="token arrow operator">-&gt;&gt;</span>API<span class="token operator">:</span> POST /api/bookings/<span class="token text string">{id}</span>/dispute&lt;br/&gt;<span class="token text string">{type: &quot;coach_absent&quot;}</span></span>
<span class="line">                </span>
<span class="line">        API<span class="token arrow operator">-&gt;&gt;</span>DB<span class="token operator">:</span> UPDATE bookings&lt;br/&gt;SET has_dispute = 1</span>
<span class="line">        </span>
<span class="line">        API<span class="token arrow operator">-&gt;&gt;</span>Msg<span class="token operator">:</span> 通知客服处理</span>
<span class="line">        Msg<span class="token arrow operator">--&gt;&gt;</span>Admin<span class="token operator">:</span> 【订单纠纷】用户投诉教练未到场</span>
<span class="line">        </span>
<span class="line">        <span class="token keyword">Note over</span> Admin<span class="token operator">:</span> 人工审核</span>
<span class="line">        Admin<span class="token arrow operator">-&gt;&gt;</span>API<span class="token operator">:</span> 查看纠纷详情</span>
<span class="line">        Admin<span class="token arrow operator">-&gt;&gt;</span>Coach<span class="token operator">:</span> 联系教练核实</span>
<span class="line">        </span>
<span class="line">        <span class="token keyword">alt</span> 确认教练责任</span>
<span class="line">            Admin<span class="token arrow operator">-&gt;&gt;</span>API<span class="token operator">:</span> POST /api/admin/disputes/<span class="token text string">{id}</span>/resolve&lt;br/&gt;<span class="token text string">{result: &quot;refund_full&quot;}</span></span>
<span class="line">            </span>
<span class="line">            API<span class="token arrow operator">-&gt;&gt;</span>DB<span class="token operator">:</span> BEGIN TRANSACTION</span>
<span class="line">            API<span class="token arrow operator">-&gt;&gt;</span>DB<span class="token operator">:</span> UPDATE booking_disputes SET status = 1 <span class="token text string">(已解决)</span></span>
<span class="line">            API<span class="token arrow operator">-&gt;&gt;</span>Pay<span class="token operator">:</span> 全额退款</span>
<span class="line">            API<span class="token arrow operator">-&gt;&gt;</span>DB<span class="token operator">:</span> UPDATE bookings SET payment_status = 3</span>
<span class="line">            </span>
<span class="line">            API<span class="token arrow operator">-&gt;&gt;</span>DB<span class="token operator">:</span> UPDATE coach_profiles&lt;br/&gt;处罚教练</span>
<span class="line">            API<span class="token arrow operator">-&gt;&gt;</span>DB<span class="token operator">:</span> COMMIT</span>
<span class="line">            </span>
<span class="line">            API<span class="token arrow operator">-&gt;&gt;</span>Msg<span class="token operator">:</span> 发送处理结果</span>
<span class="line">            Msg<span class="token arrow operator">--&gt;&gt;</span>User<span class="token operator">:</span> 纠纷已解决，已退款</span>
<span class="line">            Msg<span class="token arrow operator">--&gt;&gt;</span>Coach<span class="token operator">:</span> 因服务问题，订单已退款并处罚教练</span>
<span class="line">            </span>
<span class="line">        <span class="token keyword">else</span> 确认用户误解</span>
<span class="line">            Admin<span class="token arrow operator">-&gt;&gt;</span>API<span class="token operator">:</span> POST /api/admin/disputes/<span class="token text string">{id}</span>/resolve&lt;br/&gt;<span class="token text string">{result: &quot;reject&quot;, reason: &quot;...&quot;}</span></span>
<span class="line">            </span>
<span class="line">            API<span class="token arrow operator">-&gt;&gt;</span>DB<span class="token operator">:</span> UPDATE booking_disputes&lt;br/&gt;SET status = 2 <span class="token text string">(已拒绝)</span></span>
<span class="line">            </span>
<span class="line">            API<span class="token arrow operator">-&gt;&gt;</span>Msg<span class="token operator">:</span> 解释说明</span>
<span class="line">            Msg<span class="token arrow operator">--&gt;&gt;</span>User<span class="token operator">:</span> 经核实，教练已按时到场&lt;br/&gt;如有疑问请联系客服</span>
<span class="line">        <span class="token keyword">end</span></span>
<span class="line">    <span class="token keyword">end</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">rect</span> rgb<span class="token text string">(245, 245, 255)</span></span>
<span class="line">        <span class="token keyword">Note over</span> User,Msg<span class="token operator">:</span> 场景5<span class="token operator">:</span> 改约流程（可选功能）</span>
<span class="line">    <span class="token keyword">end</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><div class="language-mermaid line-numbers-mode has-collapsed-lines collapsed" data-highlighter="prismjs" data-ext="mermaid" style="--vp-collapsed-lines:15;"><pre><code class="language-mermaid"><span class="line"><span class="token keyword">sequenceDiagram</span></span>
<span class="line">    <span class="token keyword">participant</span> Admin as 场馆管理员</span>
<span class="line">    <span class="token keyword">participant</span> Staff as 场馆员工</span>
<span class="line">    <span class="token keyword">participant</span> Customer as 客户</span>
<span class="line">    <span class="token keyword">participant</span> API as 后端API</span>
<span class="line">    <span class="token keyword">participant</span> Auth as 权限模块</span>
<span class="line">    <span class="token keyword">participant</span> VenueDB as 场馆数据库</span>
<span class="line">    <span class="token keyword">participant</span> OrderDB as 订单数据库</span>
<span class="line">    <span class="token keyword">participant</span> SlotDB as 时段数据库</span>
<span class="line">    <span class="token keyword">participant</span> Log as 日志系统</span>
<span class="line">    <span class="token keyword">participant</span> Refund as 退款模块</span>
<span class="line">    <span class="token keyword">participant</span> Notify as 通知模块</span>
<span class="line"></span>
<span class="line">    <span class="token comment">%% ========== 场景1: 场地信息设置 ==========</span></span>
<span class="line">    <span class="token keyword">rect</span> rgb<span class="token text string">(220, 240, 255)</span></span>
<span class="line">        <span class="token keyword">Note over</span> Admin,VenueDB<span class="token operator">:</span> 场景1<span class="token operator">:</span> 场地信息设置</span>
<span class="line">        Admin<span class="token arrow operator">-&gt;&gt;</span>+API<span class="token operator">:</span> 修改场馆信息<span class="token text string">(venue_id, data)</span></span>
<span class="line">        API<span class="token arrow operator">-&gt;&gt;</span>+Auth<span class="token operator">:</span> 校验权限<span class="token text string">(venue_setting)</span></span>
<span class="line">        Auth<span class="token arrow operator">--&gt;&gt;</span>-API<span class="token operator">:</span> 权限验证通过</span>
<span class="line">        API<span class="token arrow operator">-&gt;&gt;</span>+VenueDB<span class="token operator">:</span> UPDATE venues SET name=?, address=?</span>
<span class="line">        VenueDB<span class="token arrow operator">--&gt;&gt;</span>-API<span class="token operator">:</span> 更新成功</span>
<span class="line">        API<span class="token arrow operator">-&gt;&gt;</span>+Log<span class="token operator">:</span> 记录操作日志</span>
<span class="line">        Log<span class="token arrow operator">--&gt;&gt;</span>-API<span class="token operator">:</span> 日志记录完成</span>
<span class="line">        API<span class="token arrow operator">--&gt;&gt;</span>-Admin<span class="token operator">:</span> 返回成功</span>
<span class="line">        </span>
<span class="line">        Admin<span class="token arrow operator">-&gt;&gt;</span>+API<span class="token operator">:</span> 添加/编辑场地<span class="token text string">(court_data)</span></span>
<span class="line">        API<span class="token arrow operator">-&gt;&gt;</span>+Auth<span class="token operator">:</span> 校验权限<span class="token text string">(venue_setting)</span></span>
<span class="line">        Auth<span class="token arrow operator">--&gt;&gt;</span>-API<span class="token operator">:</span> 权限验证通过</span>
<span class="line">        API<span class="token arrow operator">-&gt;&gt;</span>+VenueDB<span class="token operator">:</span> INSERT/UPDATE courts</span>
<span class="line">        VenueDB<span class="token arrow operator">--&gt;&gt;</span>-API<span class="token operator">:</span> 操作成功</span>
<span class="line">        API<span class="token arrow operator">-&gt;&gt;</span>+Log<span class="token operator">:</span> 记录场地变更</span>
<span class="line">        Log<span class="token arrow operator">--&gt;&gt;</span>-API<span class="token operator">:</span> 日志记录完成</span>
<span class="line">        API<span class="token arrow operator">--&gt;&gt;</span>-Admin<span class="token operator">:</span> 返回成功</span>
<span class="line">    <span class="token keyword">end</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">%% ========== 场景2: 员工管理 ==========</span></span>
<span class="line">    <span class="token keyword">rect</span> rgb<span class="token text string">(255, 240, 220)</span></span>
<span class="line">        <span class="token keyword">Note over</span> Admin,Log<span class="token operator">:</span> 场景2<span class="token operator">:</span> 员工管理</span>
<span class="line">        Admin<span class="token arrow operator">-&gt;&gt;</span>+API<span class="token operator">:</span> 添加员工<span class="token text string">(user_id, role_type, permissions)</span></span>
<span class="line">        API<span class="token arrow operator">-&gt;&gt;</span>+Auth<span class="token operator">:</span> 校验权限<span class="token text string">(staff_manage)</span> - 仅负责人</span>
<span class="line">        Auth<span class="token arrow operator">--&gt;&gt;</span>-API<span class="token operator">:</span> 权限验证通过</span>
<span class="line">        </span>
<span class="line">        API<span class="token arrow operator">-&gt;&gt;</span>+VenueDB<span class="token operator">:</span> 检查用户是否已是员工</span>
<span class="line">        VenueDB<span class="token arrow operator">--&gt;&gt;</span>-API<span class="token operator">:</span> 不存在重复</span>
<span class="line">        </span>
<span class="line">        API<span class="token arrow operator">-&gt;&gt;</span>+VenueDB<span class="token operator">:</span> INSERT INTO venue_staff</span>
<span class="line">        VenueDB<span class="token arrow operator">--&gt;&gt;</span>-API<span class="token operator">:</span> 插入成功<span class="token text string">(staff_id)</span></span>
<span class="line">        </span>
<span class="line">        API<span class="token arrow operator">-&gt;&gt;</span>+Log<span class="token operator">:</span> 记录员工添加操作</span>
<span class="line">        Log<span class="token arrow operator">--&gt;&gt;</span>-API<span class="token operator">:</span> 日志记录完成</span>
<span class="line">        API<span class="token arrow operator">-&gt;&gt;</span>+Notify<span class="token operator">:</span> 发送员工入职通知</span>
<span class="line">        Notify<span class="token arrow operator">--&gt;&gt;</span>-API<span class="token operator">:</span> 通知发送成功</span>
<span class="line">        API<span class="token arrow operator">--&gt;&gt;</span>-Admin<span class="token operator">:</span> 返回成功</span>
<span class="line">        </span>
<span class="line">        Admin<span class="token arrow operator">-&gt;&gt;</span>+API<span class="token operator">:</span> 修改员工权限<span class="token text string">(staff_id, new_permissions)</span></span>
<span class="line">        API<span class="token arrow operator">-&gt;&gt;</span>+Auth<span class="token operator">:</span> 校验权限<span class="token text string">(staff_manage)</span></span>
<span class="line">        Auth<span class="token arrow operator">--&gt;&gt;</span>-API<span class="token operator">:</span> 权限验证通过</span>
<span class="line">        API<span class="token arrow operator">-&gt;&gt;</span>+VenueDB<span class="token operator">:</span> UPDATE venue_staff SET permissions=?</span>
<span class="line">        VenueDB<span class="token arrow operator">--&gt;&gt;</span>-API<span class="token operator">:</span> 更新成功</span>
<span class="line">        API<span class="token arrow operator">-&gt;&gt;</span>+Log<span class="token operator">:</span> 记录权限变更</span>
<span class="line">        Log<span class="token arrow operator">--&gt;&gt;</span>-API<span class="token operator">:</span> 日志记录完成</span>
<span class="line">        API<span class="token arrow operator">--&gt;&gt;</span>-Admin<span class="token operator">:</span> 返回成功</span>
<span class="line">        </span>
<span class="line">        Admin<span class="token arrow operator">-&gt;&gt;</span>+API<span class="token operator">:</span> 停用员工<span class="token text string">(staff_id)</span></span>
<span class="line">        API<span class="token arrow operator">-&gt;&gt;</span>+Auth<span class="token operator">:</span> 校验权限<span class="token text string">(staff_manage)</span></span>
<span class="line">        Auth<span class="token arrow operator">--&gt;&gt;</span>-API<span class="token operator">:</span> 权限验证通过</span>
<span class="line">        API<span class="token arrow operator">-&gt;&gt;</span>+VenueDB<span class="token operator">:</span> UPDATE venue_staff SET status=0</span>
<span class="line">        VenueDB<span class="token arrow operator">--&gt;&gt;</span>-API<span class="token operator">:</span> 停用成功</span>
<span class="line">        API<span class="token arrow operator">-&gt;&gt;</span>+Log<span class="token operator">:</span> 记录员工停用</span>
<span class="line">        Log<span class="token arrow operator">--&gt;&gt;</span>-API<span class="token operator">:</span> 日志记录完成</span>
<span class="line">        API<span class="token arrow operator">--&gt;&gt;</span>-Admin<span class="token operator">:</span> 返回成功</span>
<span class="line">    <span class="token keyword">end</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">%% ========== 场景3: 批量开放时段 ==========</span></span>
<span class="line">    <span class="token keyword">rect</span> rgb<span class="token text string">(220, 255, 220)</span></span>
<span class="line">        <span class="token keyword">Note over</span> Staff,SlotDB<span class="token operator">:</span> 场景3<span class="token operator">:</span> 批量开放时段</span>
<span class="line">        Staff<span class="token arrow operator">-&gt;&gt;</span>+API<span class="token operator">:</span> 批量开放时段<span class="token text string">(court_ids, date_range, time_range)</span></span>
<span class="line">        API<span class="token arrow operator">-&gt;&gt;</span>+Auth<span class="token operator">:</span> 校验权限<span class="token text string">(slot_manage)</span></span>
<span class="line">        Auth<span class="token arrow operator">--&gt;&gt;</span>-API<span class="token operator">:</span> 权限验证通过</span>
<span class="line">        </span>
<span class="line">        API<span class="token arrow operator">-&gt;&gt;</span>API<span class="token operator">:</span> 生成目标日期列表</span>
<span class="line">        API<span class="token arrow operator">-&gt;&gt;</span>API<span class="token operator">:</span> 生成目标时间段列表</span>
<span class="line">        </span>
<span class="line">        <span class="token keyword">loop</span> 遍历每个时段</span>
<span class="line">            API<span class="token arrow operator">-&gt;&gt;</span>+SlotDB<span class="token operator">:</span> 检查时段是否已存在</span>
<span class="line">            SlotDB<span class="token arrow operator">--&gt;&gt;</span>-API<span class="token operator">:</span> 返回检查结果</span>
<span class="line">            </span>
<span class="line">            <span class="token keyword">alt</span> 时段不存在</span>
<span class="line">                API<span class="token arrow operator">-&gt;&gt;</span>+SlotDB<span class="token operator">:</span> INSERT booking_slot<span class="token text string">(status=1, current_price)</span></span>
<span class="line">                SlotDB<span class="token arrow operator">--&gt;&gt;</span>-API<span class="token operator">:</span> 插入成功</span>
<span class="line">            <span class="token keyword">else</span> 时段已存在且status=5<span class="token text string">(已关闭)</span></span>
<span class="line">                API<span class="token arrow operator">-&gt;&gt;</span>+SlotDB<span class="token operator">:</span> UPDATE booking_slot SET status=1</span>
<span class="line">                SlotDB<span class="token arrow operator">--&gt;&gt;</span>-API<span class="token operator">:</span> 更新成功</span>
<span class="line">            <span class="token keyword">else</span> 时段已被预订</span>
<span class="line">                API<span class="token arrow operator">-&gt;&gt;</span>API<span class="token operator">:</span> 跳过该时段，记录失败原因</span>
<span class="line">            <span class="token keyword">end</span></span>
<span class="line">        <span class="token keyword">end</span></span>
<span class="line">        </span>
<span class="line">        API<span class="token arrow operator">-&gt;&gt;</span>+Log<span class="token operator">:</span> 记录批量操作</span>
<span class="line">        <span class="token keyword">Note over</span> Log<span class="token operator">:</span> INSERT INTO slot_operation_logs&lt;br/&gt;<span class="token text string">(operation_type=1, affected_slot_count)</span></span>
<span class="line">        Log<span class="token arrow operator">--&gt;&gt;</span>-API<span class="token operator">:</span> 日志记录成功</span>
<span class="line">        </span>
<span class="line">        API<span class="token arrow operator">--&gt;&gt;</span>-Staff<span class="token operator">:</span> 返回操作结果<span class="token text string">(成功数, 失败数, 失败原因)</span></span>
<span class="line">    <span class="token keyword">end</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">%% ========== 场景4: 批量关闭时段 ==========</span></span>
<span class="line">    <span class="token keyword">rect</span> rgb<span class="token text string">(255, 220, 220)</span></span>
<span class="line">        <span class="token keyword">Note over</span> Staff,SlotDB<span class="token operator">:</span> 场景4<span class="token operator">:</span> 批量关闭时段</span>
<span class="line">        Staff<span class="token arrow operator">-&gt;&gt;</span>+API<span class="token operator">:</span> 批量关闭时段<span class="token text string">(court_ids, date_range, time_range, reason)</span></span>
<span class="line">        API<span class="token arrow operator">-&gt;&gt;</span>+Auth<span class="token operator">:</span> 校验权限<span class="token text string">(slot_manage)</span></span>
<span class="line">        Auth<span class="token arrow operator">--&gt;&gt;</span>-API<span class="token operator">:</span> 权限验证通过</span>
<span class="line">        </span>
<span class="line">        API<span class="token arrow operator">-&gt;&gt;</span>API<span class="token operator">:</span> 生成目标时段列表</span>
<span class="line">        </span>
<span class="line">        <span class="token keyword">loop</span> 遍历每个时段</span>
<span class="line">            API<span class="token arrow operator">-&gt;&gt;</span>+SlotDB<span class="token operator">:</span> 查询时段状态</span>
<span class="line">            SlotDB<span class="token arrow operator">--&gt;&gt;</span>-API<span class="token operator">:</span> 返回时段信息</span>
<span class="line">            </span>
<span class="line">            <span class="token keyword">alt</span> 时段status=1<span class="token text string">(可预订)</span>或status=6<span class="token text string">(已取消)</span></span>
<span class="line">                API<span class="token arrow operator">-&gt;&gt;</span>+SlotDB<span class="token operator">:</span> UPDATE booking_slot SET status=5</span>
<span class="line">                <span class="token keyword">Note over</span> SlotDB<span class="token operator">:</span> 设置closed_reason, closed_by, closed_at</span>
<span class="line">                SlotDB<span class="token arrow operator">--&gt;&gt;</span>-API<span class="token operator">:</span> 关闭成功</span>
<span class="line">            <span class="token keyword">else</span> 时段已被预订<span class="token text string">(status=3)</span></span>
<span class="line">                API<span class="token arrow operator">-&gt;&gt;</span>API<span class="token operator">:</span> 标记失败，提示需先取消订单</span>
<span class="line">            <span class="token keyword">end</span></span>
<span class="line">        <span class="token keyword">end</span></span>
<span class="line">        </span>
<span class="line">        API<span class="token arrow operator">-&gt;&gt;</span>Log<span class="token operator">:</span> 记录批量关闭操作</span>
<span class="line">        API<span class="token arrow operator">--&gt;&gt;</span>-Staff<span class="token operator">:</span> 返回操作结果</span>
<span class="line">    <span class="token keyword">end</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">%% ========== 场景5: 商家主动全部取消订单 ==========</span></span>
<span class="line">    <span class="token keyword">rect</span> rgb<span class="token text string">(255, 235, 220)</span></span>
<span class="line">        <span class="token keyword">Note over</span> Staff,Notify<span class="token operator">:</span> 场景5<span class="token operator">:</span> 全部取消订单</span>
<span class="line">        Staff<span class="token arrow operator">-&gt;&gt;</span>+API<span class="token operator">:</span> 取消订单<span class="token text string">(order_id, cancel_reason)</span></span>
<span class="line">        API<span class="token arrow operator">-&gt;&gt;</span>+Auth<span class="token operator">:</span> 校验权限<span class="token text string">(order_manage)</span></span>
<span class="line">        Auth<span class="token arrow operator">--&gt;&gt;</span>-API<span class="token operator">:</span> 权限验证通过</span>
<span class="line">        </span>
<span class="line">        API<span class="token arrow operator">-&gt;&gt;</span>+OrderDB<span class="token operator">:</span> 查询订单详情</span>
<span class="line">        <span class="token keyword">Note over</span> OrderDB<span class="token operator">:</span> SELECT * FROM orders&lt;br/&gt;JOIN order_item</span>
<span class="line">        OrderDB<span class="token arrow operator">--&gt;&gt;</span>-API<span class="token operator">:</span> 返回订单信息</span>
<span class="line">        </span>
<span class="line">        API<span class="token arrow operator">-&gt;&gt;</span>API<span class="token operator">:</span> 校验订单状态<span class="token text string">(不能是已取消/已完成)</span></span>
<span class="line">        </span>
<span class="line">        API<span class="token arrow operator">-&gt;&gt;</span>API<span class="token operator">:</span> 计算退款金额<span class="token text string">(根据退款规则)</span></span>
<span class="line">        </span>
<span class="line">        API<span class="token arrow operator">-&gt;&gt;</span>+OrderDB<span class="token operator">:</span> 开启事务</span>
<span class="line">        </span>
<span class="line">        API<span class="token arrow operator">-&gt;&gt;</span>OrderDB<span class="token operator">:</span> UPDATE orders SET order_status=3, payment_status=3</span>
<span class="line">        </span>
<span class="line">        API<span class="token arrow operator">-&gt;&gt;</span>OrderDB<span class="token operator">:</span> UPDATE order_item SET status=3</span>
<span class="line">        </span>
<span class="line">        API<span class="token arrow operator">-&gt;&gt;</span>+SlotDB<span class="token operator">:</span> UPDATE booking_slot SET status=6</span>
<span class="line">        <span class="token keyword">Note over</span> SlotDB<span class="token operator">:</span> 释放所有关联时段&lt;br/&gt;order_id=NULL, user_id=NULL</span>
<span class="line">        SlotDB<span class="token arrow operator">--&gt;&gt;</span>-API<span class="token operator">:</span> 时段释放成功</span>
<span class="line">        </span>
<span class="line">        API<span class="token arrow operator">-&gt;&gt;</span>OrderDB<span class="token operator">:</span> INSERT INTO order_change_logs</span>
<span class="line">        <span class="token keyword">Note over</span> OrderDB<span class="token operator">:</span> change_type=3<span class="token text string">(全部取消)</span>&lt;br/&gt;operator_type=2<span class="token text string">(员工)</span></span>
<span class="line">        </span>
<span class="line">        API<span class="token arrow operator">-&gt;&gt;</span>OrderDB<span class="token operator">:</span> INSERT INTO order_cancellations</span>
<span class="line">        <span class="token keyword">Note over</span> OrderDB<span class="token operator">:</span> cancel_type=1<span class="token text string">(全部取消)</span>&lt;br/&gt;记录退款详情</span>
<span class="line">        </span>
<span class="line">        OrderDB<span class="token arrow operator">--&gt;&gt;</span>API<span class="token operator">:</span> 提交事务</span>
<span class="line">        API<span class="token arrow operator">-&gt;&gt;</span>OrderDB<span class="token operator">:</span> 提交事务完成</span>
<span class="line">        OrderDB<span class="token arrow operator">--&gt;&gt;</span>-API<span class="token operator">:</span> 事务提交成功</span>
<span class="line">        </span>
<span class="line">        API<span class="token arrow operator">-&gt;&gt;</span>+Refund<span class="token operator">:</span> 发起退款请求</span>
<span class="line">        <span class="token keyword">Note over</span> Refund<span class="token operator">:</span> refund_amount, order_no</span>
<span class="line">        Refund<span class="token arrow operator">--&gt;&gt;</span>-API<span class="token operator">:</span> 退款处理中</span>
<span class="line">        </span>
<span class="line">        API<span class="token arrow operator">-&gt;&gt;</span>+Notify<span class="token operator">:</span> 发送取消通知给客户</span>
<span class="line">        Notify<span class="token arrow operator">--&gt;&gt;</span>-API<span class="token operator">:</span> 通知发送成功</span>
<span class="line">        </span>
<span class="line">        API<span class="token arrow operator">--&gt;&gt;</span>-Staff<span class="token operator">:</span> 返回取消成功</span>
<span class="line">        </span>
<span class="line">        Notify<span class="token arrow operator">-&gt;&gt;</span>Customer<span class="token operator">:</span> 短信/站内信<span class="token operator">:</span> 订单已取消，退款将在3-5个工作日到账</span>
<span class="line">    <span class="token keyword">end</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">%% ========== 场景6: 商家主动部分取消订单 ==========</span></span>
<span class="line">    <span class="token keyword">rect</span> rgb<span class="token text string">(240, 220, 255)</span></span>
<span class="line">        <span class="token keyword">Note over</span> Staff,Notify<span class="token operator">:</span> 场景6<span class="token operator">:</span> 部分取消订单</span>
<span class="line">        Staff<span class="token arrow operator">-&gt;&gt;</span>+API<span class="token operator">:</span> 部分取消订单<span class="token punctuation">(</span>order_id, item_ids[], cancel_reason<span class="token punctuation">)</span></span>
<span class="line">        API<span class="token arrow operator">-&gt;&gt;</span>+Auth<span class="token operator">:</span> 校验权限<span class="token text string">(order_manage)</span></span>
<span class="line">        Auth<span class="token arrow operator">--&gt;&gt;</span>-API<span class="token operator">:</span> 权限验证通过</span>
<span class="line">        </span>
<span class="line">        API<span class="token arrow operator">-&gt;&gt;</span>+OrderDB<span class="token operator">:</span> 查询订单和指定订单项</span>
<span class="line">        OrderDB<span class="token arrow operator">--&gt;&gt;</span>-API<span class="token operator">:</span> 返回订单项详情</span>
<span class="line">        </span>
<span class="line">        API<span class="token arrow operator">-&gt;&gt;</span>API<span class="token operator">:</span> 校验订单项状态<span class="token text string">(不能已取消)</span></span>
<span class="line">        API<span class="token arrow operator">-&gt;&gt;</span>API<span class="token operator">:</span> 计算部分退款金额</span>
<span class="line">        </span>
<span class="line">        API<span class="token arrow operator">-&gt;&gt;</span>+OrderDB<span class="token operator">:</span> 开启事务</span>
<span class="line">        </span>
<span class="line">        API<span class="token arrow operator">-&gt;&gt;</span>OrderDB<span class="token operator">:</span> UPDATE order_item SET status=3</span>
<span class="line">        <span class="token keyword">Note over</span> OrderDB<span class="token operator">:</span> 仅更新指定的item_ids</span>
<span class="line">        </span>
<span class="line">        API<span class="token arrow operator">-&gt;&gt;</span>+SlotDB<span class="token operator">:</span> UPDATE booking_slot SET status=6</span>
<span class="line">        <span class="token keyword">Note over</span> SlotDB<span class="token operator">:</span> 仅释放对应的时段</span>
<span class="line">        SlotDB<span class="token arrow operator">--&gt;&gt;</span>-API<span class="token operator">:</span> 部分时段释放</span>
<span class="line">        </span>
<span class="line">        API<span class="token arrow operator">-&gt;&gt;</span>OrderDB<span class="token operator">:</span> 重新计算订单总价</span>
<span class="line">        <span class="token keyword">Note over</span> OrderDB<span class="token operator">:</span> total_price = SUM<span class="token text string">(有效order_item.subtotal)</span></span>
<span class="line">        </span>
<span class="line">        API<span class="token arrow operator">-&gt;&gt;</span>OrderDB<span class="token operator">:</span> INSERT INTO order_change_logs</span>
<span class="line">        <span class="token keyword">Note over</span> OrderDB<span class="token operator">:</span> change_type=4<span class="token text string">(部分取消)</span>&lt;br/&gt;cancelled_item_ids=<span class="token text string">[1,3,5]</span></span>
<span class="line">        </span>
<span class="line">        API<span class="token arrow operator">-&gt;&gt;</span>OrderDB<span class="token operator">:</span> INSERT INTO order_cancellations</span>
<span class="line">        <span class="token keyword">Note over</span> OrderDB<span class="token operator">:</span> cancel_type=2<span class="token text string">(部分取消)</span>&lt;br/&gt;cancelled_slots=详细时段信息</span>
<span class="line">        </span>
<span class="line">        OrderDB<span class="token arrow operator">--&gt;&gt;</span>API<span class="token operator">:</span> 提交事务</span>
<span class="line">        API<span class="token arrow operator">-&gt;&gt;</span>OrderDB<span class="token operator">:</span> 提交事务完成</span>
<span class="line">        OrderDB<span class="token arrow operator">--&gt;&gt;</span>-API<span class="token operator">:</span> 事务提交成功</span>
<span class="line">        </span>
<span class="line">        API<span class="token arrow operator">-&gt;&gt;</span>+Refund<span class="token operator">:</span> 发起部分退款</span>
<span class="line">        Refund<span class="token arrow operator">--&gt;&gt;</span>-API<span class="token operator">:</span> 退款处理中</span>
<span class="line">        </span>
<span class="line">        API<span class="token arrow operator">-&gt;&gt;</span>+Notify<span class="token operator">:</span> 发送部分取消通知</span>
<span class="line">        Notify<span class="token arrow operator">--&gt;&gt;</span>-API<span class="token operator">:</span> 通知发送成功</span>
<span class="line">        </span>
<span class="line">        API<span class="token arrow operator">--&gt;&gt;</span>-Staff<span class="token operator">:</span> 返回部分取消成功</span>
<span class="line">        </span>
<span class="line">        Notify<span class="token arrow operator">-&gt;&gt;</span>Customer<span class="token operator">:</span> 通知<span class="token operator">:</span> 订单部分时段已取消</span>
<span class="line">    <span class="token keyword">end</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">%% ========== 场景8: 订单管理列表查询 ==========</span></span>
<span class="line">    <span class="token keyword">rect</span> rgb<span class="token text string">(245, 245, 245)</span></span>
<span class="line">        <span class="token keyword">Note over</span> Staff,OrderDB<span class="token operator">:</span> 场景9<span class="token operator">:</span> 订单管理列表查询</span>
<span class="line">        Staff<span class="token arrow operator">-&gt;&gt;</span>+API<span class="token operator">:</span> 查询订单列表<span class="token text string">(filters, pagination)</span></span>
<span class="line">        API<span class="token arrow operator">-&gt;&gt;</span>+Auth<span class="token operator">:</span> 校验权限<span class="token text string">(order_manage)</span></span>
<span class="line">        Auth<span class="token arrow operator">--&gt;&gt;</span>-API<span class="token operator">:</span> 权限验证通过</span>
<span class="line">        </span>
<span class="line">        API<span class="token arrow operator">-&gt;&gt;</span>+OrderDB<span class="token operator">:</span> 复杂查询</span>
<span class="line">        <span class="token keyword">Note over</span> OrderDB<span class="token operator">:</span> SELECT o.*, u.nickname, COUNT<span class="token text string">(oi.item_id)</span>&lt;br/&gt;FROM orders o&lt;br/&gt;JOIN user_profiles u&lt;br/&gt;LEFT JOIN order_item oi&lt;br/&gt;WHERE o.venue_id=? AND filters&lt;br/&gt;GROUP BY o.id&lt;br/&gt;ORDER BY created_at DESC</span>
<span class="line">        OrderDB<span class="token arrow operator">--&gt;&gt;</span>-API<span class="token operator">:</span> 返回订单列表</span>
<span class="line">        </span>
<span class="line">        API<span class="token arrow operator">--&gt;&gt;</span>-Staff<span class="token operator">:</span> 返回分页结果</span>
<span class="line">    <span class="token keyword">end</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div>`,5)]))}const c=n(l,[["render",r]]),d=JSON.parse(`{"path":"/zh/project/%E5%AE%9E%E4%B9%A0-%E7%94%A8%E6%88%B7%E9%A2%84%E7%BA%A6%E6%95%99%E7%BB%83_%E5%95%86%E5%AE%B6%E7%AE%A1%E7%90%86%E6%97%B6%E5%BA%8F%E5%9B%BE.html","title":"","lang":"zh-CN","frontmatter":{"head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2026-01-23T05:25:06.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"GALA-Lin\\",\\"url\\":\\"https://gala-lin.github.io\\"}]}"],["meta",{"property":"og:url","content":"https://gala-lin.github.io/zh/project/%E5%AE%9E%E4%B9%A0-%E7%94%A8%E6%88%B7%E9%A2%84%E7%BA%A6%E6%95%99%E7%BB%83_%E5%95%86%E5%AE%B6%E7%AE%A1%E7%90%86%E6%97%B6%E5%BA%8F%E5%9B%BE.html"}],["meta",{"property":"og:site_name","content":"22lin04"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2026-01-23T05:25:06.000Z"}],["meta",{"property":"article:modified_time","content":"2026-01-23T05:25:06.000Z"}]]},"git":{"createdTime":1769145906000,"updatedTime":1769145906000,"contributors":[{"name":"Linsen HU","username":"","email":"1563883475@qq.com","commits":1}]},"readingTime":{"minutes":19.36,"words":5809},"filePathRelative":"zh/project/实习-用户预约教练&商家管理时序图.md","excerpt":"<div class=\\"language-mermaid line-numbers-mode has-collapsed-lines collapsed\\" data-highlighter=\\"prismjs\\" data-ext=\\"mermaid\\" style=\\"--vp-collapsed-lines:15;\\"><pre><code class=\\"language-mermaid\\"><span class=\\"line\\"><span class=\\"token keyword\\">sequenceDiagram</span></span>\\n<span class=\\"line\\">    <span class=\\"token keyword\\">autonumber</span></span>\\n<span class=\\"line\\">    </span>\\n<span class=\\"line\\">    actor User as 普通用户</span>\\n<span class=\\"line\\">    <span class=\\"token keyword\\">participant</span> App as 客户端</span>\\n<span class=\\"line\\">    <span class=\\"token keyword\\">participant</span> API as 后端API</span>\\n<span class=\\"line\\">    <span class=\\"token keyword\\">participant</span> DB as 数据库</span>\\n<span class=\\"line\\">    <span class=\\"token keyword\\">participant</span> OSS as 文件存储</span>\\n<span class=\\"line\\">    <span class=\\"token keyword\\">participant</span> Admin as 管理员</span>\\n<span class=\\"line\\">    <span class=\\"token keyword\\">participant</span> Msg as 消息通知</span>\\n<span class=\\"line\\">    </span>\\n<span class=\\"line\\">    <span class=\\"token keyword\\">rect</span> rgb<span class=\\"token text string\\">(240, 248, 255)</span></span>\\n<span class=\\"line\\">        <span class=\\"token keyword\\">Note over</span> User,Admin<span class=\\"token operator\\">:</span> 阶段1<span class=\\"token operator\\">:</span> 用户发起教练认证申请</span>\\n<span class=\\"line\\">        User<span class=\\"token arrow operator\\">-&gt;&gt;</span>App<span class=\\"token operator\\">:</span> 点击<span class=\\"token string\\">\\"成为教练\\"</span></span>\\n<span class=\\"line\\">        App<span class=\\"token arrow operator\\">-&gt;&gt;</span>API<span class=\\"token operator\\">:</span> GET /api/user/roles</span>\\n<span class=\\"line\\">        API<span class=\\"token arrow operator\\">-&gt;&gt;</span>DB<span class=\\"token operator\\">:</span> SELECT * FROM user_roles WHERE user_id=xxx</span>\\n<span class=\\"line\\">        DB<span class=\\"token arrow operator\\">--&gt;&gt;</span>API<span class=\\"token operator\\">:</span> 用户角色列表</span>\\n<span class=\\"line\\">        </span>\\n<span class=\\"line\\">        <span class=\\"token keyword\\">alt</span> 已经是教练</span>\\n<span class=\\"line\\">            API<span class=\\"token arrow operator\\">--&gt;&gt;</span>App<span class=\\"token operator\\">:</span> 提示：您已经是认证教练</span>\\n<span class=\\"line\\">        <span class=\\"token keyword\\">else</span> 未申请过</span>\\n<span class=\\"line\\">            API<span class=\\"token arrow operator\\">--&gt;&gt;</span>App<span class=\\"token operator\\">:</span> 可以申请</span>\\n<span class=\\"line\\">            App<span class=\\"token arrow operator\\">--&gt;&gt;</span>User<span class=\\"token operator\\">:</span> 显示申请表单</span>\\n<span class=\\"line\\">        <span class=\\"token keyword\\">end</span></span>\\n<span class=\\"line\\">    <span class=\\"token keyword\\">end</span></span>\\n<span class=\\"line\\">    </span>\\n<span class=\\"line\\">    <span class=\\"token keyword\\">rect</span> rgb<span class=\\"token text string\\">(255, 250, 240)</span></span>\\n<span class=\\"line\\">        <span class=\\"token keyword\\">Note over</span> User,Admin<span class=\\"token operator\\">:</span> 阶段2<span class=\\"token operator\\">:</span> 填写申请资料</span>\\n<span class=\\"line\\">        User<span class=\\"token arrow operator\\">-&gt;&gt;</span>App<span class=\\"token operator\\">:</span> 上传证书照片</span>\\n<span class=\\"line\\">        App<span class=\\"token arrow operator\\">-&gt;&gt;</span>OSS<span class=\\"token operator\\">:</span> 上传文件</span>\\n<span class=\\"line\\">        OSS<span class=\\"token arrow operator\\">--&gt;&gt;</span>App<span class=\\"token operator\\">:</span> 返回文件URL</span>\\n<span class=\\"line\\">        </span>\\n<span class=\\"line\\">        User<span class=\\"token arrow operator\\">-&gt;&gt;</span>App<span class=\\"token operator\\">:</span> 填写个人信息</span>\\n<span class=\\"line\\">        <span class=\\"token keyword\\">Note over</span> User,App<span class=\\"token operator\\">:</span> 真实姓名、联系方式&lt;br/&gt;证书类型、编号&lt;br/&gt;教学经历、自我介绍等</span>\\n<span class=\\"line\\">        </span>\\n<span class=\\"line\\">        User<span class=\\"token arrow operator\\">-&gt;&gt;</span>App<span class=\\"token operator\\">:</span> 提交申请</span>\\n<span class=\\"line\\">        App<span class=\\"token arrow operator\\">-&gt;&gt;</span>API<span class=\\"token operator\\">:</span> POST /api/coach/apply&lt;br/&gt;<span class=\\"token text string\\">{申请资料JSON}</span></span>\\n<span class=\\"line\\">        </span>\\n<span class=\\"line\\">        API<span class=\\"token arrow operator\\">-&gt;&gt;</span>DB<span class=\\"token operator\\">:</span> BEGIN TRANSACTION</span>\\n<span class=\\"line\\">        </span>\\n<span class=\\"line\\">        API<span class=\\"token arrow operator\\">-&gt;&gt;</span>DB<span class=\\"token operator\\">:</span> INSERT INTO coach_applications&lt;br/&gt;status=0<span class=\\"token text string\\">(待审核)</span></span>\\n<span class=\\"line\\">        </span>\\n<span class=\\"line\\">        API<span class=\\"token arrow operator\\">-&gt;&gt;</span>DB<span class=\\"token operator\\">:</span> INSERT INTO user_roles&lt;br/&gt;<span class=\\"token text string\\">(user_id, role_id='COACH', status=0)</span></span>\\n<span class=\\"line\\">        </span>\\n<span class=\\"line\\">        API<span class=\\"token arrow operator\\">-&gt;&gt;</span>DB<span class=\\"token operator\\">:</span> COMMIT</span>\\n<span class=\\"line\\">        </span>\\n<span class=\\"line\\">        API<span class=\\"token arrow operator\\">-&gt;&gt;</span>Msg<span class=\\"token operator\\">:</span> 通知管理员审核</span>\\n<span class=\\"line\\">        Msg<span class=\\"token arrow operator\\">--&gt;&gt;</span>Admin<span class=\\"token operator\\">:</span> 【待审核】新教练申请，请及时处理</span>\\n<span class=\\"line\\">        </span>\\n<span class=\\"line\\">        API<span class=\\"token arrow operator\\">--&gt;&gt;</span>App<span class=\\"token operator\\">:</span> 申请提交成功</span>\\n<span class=\\"line\\">        App<span class=\\"token arrow operator\\">--&gt;&gt;</span>User<span class=\\"token operator\\">:</span> 申请已提交，预计3个工作日内完成审核</span>\\n<span class=\\"line\\">    <span class=\\"token keyword\\">end</span></span>\\n<span class=\\"line\\">    </span>\\n<span class=\\"line\\">    <span class=\\"token keyword\\">rect</span> rgb<span class=\\"token text string\\">(240, 255, 240)</span></span>\\n<span class=\\"line\\">        <span class=\\"token keyword\\">Note over</span> User,Admin<span class=\\"token operator\\">:</span> 阶段3<span class=\\"token operator\\">:</span> 管理员审核</span>\\n<span class=\\"line\\">        Admin<span class=\\"token arrow operator\\">-&gt;&gt;</span>API<span class=\\"token operator\\">:</span> GET /api/admin/applications?status=0</span>\\n<span class=\\"line\\">        API<span class=\\"token arrow operator\\">-&gt;&gt;</span>DB<span class=\\"token operator\\">:</span> 查询待审核申请</span>\\n<span class=\\"line\\">        DB<span class=\\"token arrow operator\\">--&gt;&gt;</span>API<span class=\\"token operator\\">:</span> 申请列表</span>\\n<span class=\\"line\\">        API<span class=\\"token arrow operator\\">--&gt;&gt;</span>Admin<span class=\\"token operator\\">:</span> 返回申请列表</span>\\n<span class=\\"line\\">        </span>\\n<span class=\\"line\\">        Admin<span class=\\"token arrow operator\\">-&gt;&gt;</span>API<span class=\\"token operator\\">:</span> GET /api/admin/applications/<span class=\\"token text string\\">{id}</span></span>\\n<span class=\\"line\\">        API<span class=\\"token arrow operator\\">-&gt;&gt;</span>DB<span class=\\"token operator\\">:</span> 查询申请详情</span>\\n<span class=\\"line\\">        DB<span class=\\"token arrow operator\\">--&gt;&gt;</span>API<span class=\\"token operator\\">:</span> 申请详细信息</span>\\n<span class=\\"line\\">        API<span class=\\"token arrow operator\\">--&gt;&gt;</span>Admin<span class=\\"token operator\\">:</span> 显示申请材料</span>\\n<span class=\\"line\\">        </span>\\n<span class=\\"line\\">        <span class=\\"token keyword\\">Note over</span> Admin<span class=\\"token operator\\">:</span> 审核证书真实性&lt;br/&gt;检查教学经历&lt;br/&gt;评估资质</span>\\n<span class=\\"line\\">        </span>\\n<span class=\\"line\\">        <span class=\\"token keyword\\">alt</span> 审核通过</span>\\n<span class=\\"line\\">            Admin<span class=\\"token arrow operator\\">-&gt;&gt;</span>API<span class=\\"token operator\\">:</span> POST /api/admin/applications/<span class=\\"token text string\\">{id}</span>/approve</span>\\n<span class=\\"line\\">            </span>\\n<span class=\\"line\\">            API<span class=\\"token arrow operator\\">-&gt;&gt;</span>DB<span class=\\"token operator\\">:</span> BEGIN TRANSACTION</span>\\n<span class=\\"line\\">            </span>\\n<span class=\\"line\\">            API<span class=\\"token arrow operator\\">-&gt;&gt;</span>DB<span class=\\"token operator\\">:</span> UPDATE coach_applications&lt;br/&gt;SET status=1<span class=\\"token text string\\">(已通过)</span>, auditor_id, audit_time</span>\\n<span class=\\"line\\">            </span>\\n<span class=\\"line\\">            API<span class=\\"token arrow operator\\">-&gt;&gt;</span>DB<span class=\\"token operator\\">:</span> UPDATE user_roles&lt;br/&gt;SET status=1<span class=\\"token text string\\">(生效)</span></span>\\n<span class=\\"line\\">            </span>\\n<span class=\\"line\\">            API<span class=\\"token arrow operator\\">-&gt;&gt;</span>DB<span class=\\"token operator\\">:</span> INSERT INTO coach_profiles&lt;br/&gt;初始化教练档案</span>\\n<span class=\\"line\\">            <span class=\\"token keyword\\">Note over</span> API,DB<span class=\\"token operator\\">:</span> 从申请表复制基本信息&lt;br/&gt;初始化评分、统计字段</span>\\n<span class=\\"line\\">            </span>\\n<span class=\\"line\\">            API<span class=\\"token arrow operator\\">-&gt;&gt;</span>DB<span class=\\"token operator\\">:</span> COMMIT</span>\\n<span class=\\"line\\">            </span>\\n<span class=\\"line\\">            API<span class=\\"token arrow operator\\">-&gt;&gt;</span>Msg<span class=\\"token operator\\">:</span> 发送通知给用户</span>\\n<span class=\\"line\\">            Msg<span class=\\"token arrow operator\\">--&gt;&gt;</span>User<span class=\\"token operator\\">:</span> 🎉【审核通过】恭喜成为认证教练！&lt;br/&gt;请完善教练资料</span>\\n<span class=\\"line\\">            </span>\\n<span class=\\"line\\">            API<span class=\\"token arrow operator\\">--&gt;&gt;</span>Admin<span class=\\"token operator\\">:</span> 审核完成</span>\\n<span class=\\"line\\">            </span>\\n<span class=\\"line\\">        <span class=\\"token keyword\\">else</span> 审核拒绝</span>\\n<span class=\\"line\\">            Admin<span class=\\"token arrow operator\\">-&gt;&gt;</span>API<span class=\\"token operator\\">:</span> POST /api/admin/applications/<span class=\\"token text string\\">{id}</span>/reject&lt;br/&gt;<span class=\\"token text string\\">{拒绝原因}</span></span>\\n<span class=\\"line\\">            </span>\\n<span class=\\"line\\">            API<span class=\\"token arrow operator\\">-&gt;&gt;</span>DB<span class=\\"token operator\\">:</span> BEGIN TRANSACTION</span>\\n<span class=\\"line\\">            API<span class=\\"token arrow operator\\">-&gt;&gt;</span>DB<span class=\\"token operator\\">:</span> UPDATE coach_applications&lt;br/&gt;SET status=2<span class=\\"token text string\\">(已拒绝)</span>, audit_remark</span>\\n<span class=\\"line\\">            API<span class=\\"token arrow operator\\">-&gt;&gt;</span>DB<span class=\\"token operator\\">:</span> UPDATE user_roles SET status=2<span class=\\"token text string\\">(已拒绝)</span></span>\\n<span class=\\"line\\">            API<span class=\\"token arrow operator\\">-&gt;&gt;</span>DB<span class=\\"token operator\\">:</span> COMMIT</span>\\n<span class=\\"line\\">            </span>\\n<span class=\\"line\\">            API<span class=\\"token arrow operator\\">-&gt;&gt;</span>Msg<span class=\\"token operator\\">:</span> 发送通知</span>\\n<span class=\\"line\\">            Msg<span class=\\"token arrow operator\\">--&gt;&gt;</span>User<span class=\\"token operator\\">:</span> 【审核未通过】原因：XXX&lt;br/&gt;您可以修改后重新申请</span>\\n<span class=\\"line\\">            </span>\\n<span class=\\"line\\">        <span class=\\"token keyword\\">else</span> 需要补充材料</span>\\n<span class=\\"line\\">            Admin<span class=\\"token arrow operator\\">-&gt;&gt;</span>API<span class=\\"token operator\\">:</span> POST /api/admin/applications/<span class=\\"token text string\\">{id}</span>/supplement&lt;br/&gt;<span class=\\"token text string\\">{需要补充的内容}</span></span>\\n<span class=\\"line\\">            </span>\\n<span class=\\"line\\">            API<span class=\\"token arrow operator\\">-&gt;&gt;</span>DB<span class=\\"token operator\\">:</span> UPDATE coach_applications&lt;br/&gt;SET status=3<span class=\\"token text string\\">(需补充材料)</span></span>\\n<span class=\\"line\\">            </span>\\n<span class=\\"line\\">            API<span class=\\"token arrow operator\\">-&gt;&gt;</span>Msg<span class=\\"token operator\\">:</span> 发送通知</span>\\n<span class=\\"line\\">            Msg<span class=\\"token arrow operator\\">--&gt;&gt;</span>User<span class=\\"token operator\\">:</span> 【需补充材料】请补充：XXX</span>\\n<span class=\\"line\\">            </span>\\n<span class=\\"line\\">            User<span class=\\"token arrow operator\\">-&gt;&gt;</span>App<span class=\\"token operator\\">:</span> 补充材料</span>\\n<span class=\\"line\\">            App<span class=\\"token arrow operator\\">-&gt;&gt;</span>API<span class=\\"token operator\\">:</span> PUT /api/coach/applications/<span class=\\"token text string\\">{id}</span>&lt;br/&gt;更新申请</span>\\n<span class=\\"line\\">            API<span class=\\"token arrow operator\\">-&gt;&gt;</span>DB<span class=\\"token operator\\">:</span> UPDATE coach_applications&lt;br/&gt;SET status=0<span class=\\"token text string\\">(待审核)</span></span>\\n<span class=\\"line\\">            API<span class=\\"token arrow operator\\">-&gt;&gt;</span>Msg<span class=\\"token operator\\">:</span> 通知管理员重新审核</span>\\n<span class=\\"line\\">        <span class=\\"token keyword\\">end</span></span>\\n<span class=\\"line\\">    <span class=\\"token keyword\\">end</span></span>\\n<span class=\\"line\\">    </span>\\n<span class=\\"line\\">    <span class=\\"token keyword\\">rect</span> rgb<span class=\\"token text string\\">(255, 240, 245)</span></span>\\n<span class=\\"line\\">        <span class=\\"token keyword\\">Note over</span> User,Admin<span class=\\"token operator\\">:</span> 阶段4<span class=\\"token operator\\">:</span> 教练完善资料</span>\\n<span class=\\"line\\">        User<span class=\\"token arrow operator\\">-&gt;&gt;</span>App<span class=\\"token operator\\">:</span> 登录教练端</span>\\n<span class=\\"line\\">        App<span class=\\"token arrow operator\\">-&gt;&gt;</span>API<span class=\\"token operator\\">:</span> GET /api/coach/profile</span>\\n<span class=\\"line\\">        API<span class=\\"token arrow operator\\">-&gt;&gt;</span>DB<span class=\\"token operator\\">:</span> SELECT * FROM coach_profiles</span>\\n<span class=\\"line\\">        DB<span class=\\"token arrow operator\\">--&gt;&gt;</span>API<span class=\\"token operator\\">:</span> 教练档案</span>\\n<span class=\\"line\\">        API<span class=\\"token arrow operator\\">--&gt;&gt;</span>App<span class=\\"token operator\\">:</span> 返回档案信息</span>\\n<span class=\\"line\\">        </span>\\n<span class=\\"line\\">        User<span class=\\"token arrow operator\\">-&gt;&gt;</span>App<span class=\\"token operator\\">:</span> 完善教练信息</span>\\n<span class=\\"line\\">        <span class=\\"token keyword\\">Note over</span> User,App<span class=\\"token operator\\">:</span> 设置专长标签&lt;br/&gt;填写教学风格&lt;br/&gt;设置服务区域、价格等</span>\\n<span class=\\"line\\">        </span>\\n<span class=\\"line\\">        App<span class=\\"token arrow operator\\">-&gt;&gt;</span>API<span class=\\"token operator\\">:</span> PUT /api/coach/profile</span>\\n<span class=\\"line\\">        API<span class=\\"token arrow operator\\">-&gt;&gt;</span>DB<span class=\\"token operator\\">:</span> UPDATE coach_profiles</span>\\n<span class=\\"line\\">        DB<span class=\\"token arrow operator\\">--&gt;&gt;</span>API<span class=\\"token operator\\">:</span> 更新成功</span>\\n<span class=\\"line\\">        </span>\\n<span class=\\"line\\">        User<span class=\\"token arrow operator\\">-&gt;&gt;</span>App<span class=\\"token operator\\">:</span> 创建课程服务</span>\\n<span class=\\"line\\">        App<span class=\\"token arrow operator\\">-&gt;&gt;</span>API<span class=\\"token operator\\">:</span> POST /api/coach/services&lt;br/&gt;<span class=\\"token text string\\">{一对一私教课, 90分钟, 300元}</span></span>\\n<span class=\\"line\\">        API<span class=\\"token arrow operator\\">-&gt;&gt;</span>DB<span class=\\"token operator\\">:</span> INSERT INTO coach_services</span>\\n<span class=\\"line\\">        DB<span class=\\"token arrow operator\\">--&gt;&gt;</span>API<span class=\\"token operator\\">:</span> 服务创建成功</span>\\n<span class=\\"line\\">        </span>\\n<span class=\\"line\\">        User<span class=\\"token arrow operator\\">-&gt;&gt;</span>App<span class=\\"token operator\\">:</span> 设置可约时段</span>\\n<span class=\\"line\\">        <span class=\\"token keyword\\">Note over</span> User,App<span class=\\"token operator\\">:</span> 选择日期、时间&lt;br/&gt;选择服务类型&lt;br/&gt;设置重复规则等</span>\\n<span class=\\"line\\">        </span>\\n<span class=\\"line\\">        App<span class=\\"token arrow operator\\">-&gt;&gt;</span>API<span class=\\"token operator\\">:</span> POST /api/coach/slots/batch&lt;br/&gt;<span class=\\"token text string\\">{时段批量设置}</span></span>\\n<span class=\\"line\\">        API<span class=\\"token arrow operator\\">-&gt;&gt;</span>DB<span class=\\"token operator\\">:</span> INSERT INTO coach_available_slots</span>\\n<span class=\\"line\\">        DB<span class=\\"token arrow operator\\">--&gt;&gt;</span>API<span class=\\"token operator\\">:</span> 时段创建成功</span>\\n<span class=\\"line\\">        </span>\\n<span class=\\"line\\">        API<span class=\\"token arrow operator\\">--&gt;&gt;</span>App<span class=\\"token operator\\">:</span> 资料完善成功</span>\\n<span class=\\"line\\">        App<span class=\\"token arrow operator\\">--&gt;&gt;</span>User<span class=\\"token operator\\">:</span> 🎉 您已可以开始接单！</span>\\n<span class=\\"line\\">    <span class=\\"token keyword\\">end</span></span>\\n<span class=\\"line\\"></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div><div class=\\"collapsed-lines\\"></div></div>"}`);export{c as comp,d as data};
