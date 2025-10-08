好的！让我为你详细介绍我们已经完成的 **Auth 模块**的技术架构和实现原理：

------

# 🔐 Auth 模块完整技术解析

## 📚 目录

1. [模块架构总览](https://claude.ai/chat/16a4c146-a269-41c4-8385-2b4e4a0a9d5d#1-模块架构总览)
2. [Spring Security 核心机制](https://claude.ai/chat/16a4c146-a269-41c4-8385-2b4e4a0a9d5d#2-spring-security-核心机制)
3. [JWT 认证流程](https://claude.ai/chat/16a4c146-a269-41c4-8385-2b4e4a0a9d5d#3-jwt-认证流程)
4. [MyBatis-Plus 数据层](https://claude.ai/chat/16a4c146-a269-41c4-8385-2b4e4a0a9d5d#4-mybatis-plus-数据层)
5. [服务层业务逻辑](https://claude.ai/chat/16a4c146-a269-41c4-8385-2b4e4a0a9d5d#5-服务层业务逻辑)
6. [安全特性详解](https://claude.ai/chat/16a4c146-a269-41c4-8385-2b4e4a0a9d5d#6-安全特性详解)
7. [完整请求流程](https://claude.ai/chat/16a4c146-a269-41c4-8385-2b4e4a0a9d5d#7-完整请求流程)

------

## 1. 模块架构总览

### 📦 **分层架构**

```
┌─────────────────────────────────────┐
│  Controller Layer (控制层)           │  ← REST API 接口
├─────────────────────────────────────┤
│  Service Layer (业务层)              │  ← 业务逻辑处理
├─────────────────────────────────────┤
│  Mapper Layer (数据访问层)           │  ← 数据库操作
├─────────────────────────────────────┤
│  Entity Layer (实体层)               │  ← 数据模型
└─────────────────────────────────────┘

           ↕ (贯穿各层)

┌─────────────────────────────────────┐
│  Security Layer (安全层)             │
│  - JWT Filter                       │
│  - Authentication Provider          │
│  - UserDetailsService              │
└─────────────────────────────────────┘
```

### 🗂️ **文件组织结构**

```
module/auth/
├── controller/
│   ├── AuthController.java          # 认证接口（登录/注册）
│   └── UserController.java          # 用户管理接口
├── service/
│   ├── AuthService.java             # 认证服务接口
│   ├── AuthServiceImpl.java         # 认证服务实现
│   ├── UserService.java             # 用户服务接口
│   ├── UserServiceImpl.java         # 用户服务实现
│   └── UserDetailsServiceImpl.java  # Spring Security 用户加载
├── mapper/
│   ├── UserMapper.java              # 用户数据访问
│   ├── RoleMapper.java              # 角色数据访问
│   └── UserRoleMapper.java          # 用户角色关联
├── entity/
│   ├── User.java                    # 用户实体
│   ├── Role.java                    # 角色实体
│   └── UserRole.java                # 用户角色关联实体
├── dto/
│   ├── LoginDTO.java                # 登录请求
│   ├── RegisterDTO.java             # 注册请求
│   └── ChangePasswordDTO.java       # 修改密码请求
└── vo/
    ├── LoginVO.java                 # 登录响应
    └── UserProfileVO.java           # 用户信息响应
```

------

## 2. Spring Security 核心机制

### 🔒 **Spring Security 是什么？**

Spring Security 是一个强大的认证和授权框架，提供：

- ✅ 用户认证（Authentication）- "你是谁？"
- ✅ 用户授权（Authorization）- "你能做什么？"
- ✅ 防护常见攻击（CSRF、XSS、Session Fixation）

### 🎯 **核心组件解析**

#### **1. SecurityFilterChain - 安全过滤器链**

```java
@Bean
public SecurityFilterChain securityFilterChain(HttpSecurity http) {
    http
        .csrf(AbstractHttpConfigurer::disable)  // ① 禁用 CSRF
        .sessionManagement(session ->            // ② 无状态会话
            session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
        .authorizeHttpRequests(auth -> auth      // ③ 访问控制
            .requestMatchers("/auth/login").permitAll()
            .anyRequest().authenticated()
        )
        .addFilterBefore(jwtFilter, ...);        // ④ 添加自定义过滤器
}
```

**工作原理：**

```
HTTP 请求
    ↓
① CSRF 防护过滤器 (已禁用)
    ↓
② Session 管理过滤器 (无状态)
    ↓
③ JWT 认证过滤器 (我们自定义的) ⭐
    ↓
④ 授权过滤器 (检查权限)
    ↓
⑤ Controller 处理请求
```

#### **2. AuthenticationManager - 认证管理器**

```java
@Bean
public AuthenticationManager authenticationManager(
    AuthenticationConfiguration config) throws Exception {
    return config.getAuthenticationManager();
}
```

**作用：** 负责验证用户凭证（用户名 + 密码）

**工作流程：**

```
用户提交登录表单
    ↓
创建 UsernamePasswordAuthenticationToken
    ↓
AuthenticationManager.authenticate()
    ↓
调用 AuthenticationProvider
    ↓
使用 UserDetailsService 加载用户
    ↓
使用 PasswordEncoder 验证密码
    ↓
返回 Authentication 对象（包含用户信息和权限）
```

#### **3. AuthenticationProvider - 认证提供者**

```java
@Bean
public AuthenticationProvider authenticationProvider() {
    DaoAuthenticationProvider provider = new DaoAuthenticationProvider();
    provider.setUserDetailsService(userDetailsService);  // ⭐ 如何加载用户
    provider.setPasswordEncoder(passwordEncoder());      // ⭐ 如何验证密码
    return provider;
}
```

**关键配置：**

- `UserDetailsService` - 从数据库加载用户
- `PasswordEncoder` - BCrypt 密码验证器

#### **4. UserDetailsService - 用户加载服务**

```java
@Service
public class UserDetailsServiceImpl implements UserDetailsService {
    
    @Override
    public UserDetails loadUserByUsername(String username) {
        // ① 从数据库查询用户
        User user = userMapper.selectOne(
            new LambdaQueryWrapper<User>()
                .eq(User::getUsername, username)
        );
        
        if (user == null) {
            throw new UsernameNotFoundException("User not found");
        }
        
        // ② 查询用户权限
        List<String> permissions = userMapper.selectPermissionsByUserId(user.getId());
        
        // ③ 返回 Spring Security 需要的 UserDetails 对象
        return new SecurityUser(user, permissions);
    }
}
```

**SecurityUser - 自定义 UserDetails 实现：**

```java
public class SecurityUser implements UserDetails {
    private Long userId;              // 用户ID（额外信息）
    private String username;          // 用户名
    private String password;          // 密码（加密后的）
    private Boolean enabled;          // 是否启用
    private Collection<? extends GrantedAuthority> authorities;  // 权限列表
    
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;  // ⭐ Spring Security 用这个判断权限
    }
    
    @Override
    public String getPassword() {
        return password;  // ⭐ Spring Security 用这个验证密码
    }
    
    @Override
    public boolean isEnabled() {
        return enabled;  // ⭐ 账号是否可用
    }
}
```

#### **5. PasswordEncoder - 密码加密器**

```java
@Bean
public PasswordEncoder passwordEncoder() {
    return new BCryptPasswordEncoder();  // 使用 BCrypt 算法
}
```

**BCrypt 特点：**

```java
String password = "Admin@123";

// 注册时：加密密码
String hash1 = passwordEncoder.encode(password);
// 结果: $2a$10$N.zmdr9k7uOCQb376NoUn...

// 同样的密码再次加密，结果不同！（自动加盐）
String hash2 = passwordEncoder.encode(password);
// 结果: $2a$10$K.abcd1234567890XYZ...

// 登录时：验证密码
boolean isMatch = passwordEncoder.matches(password, hash1);  // true
boolean isMatch2 = passwordEncoder.matches(password, hash2);  // true
```

**为什么同一个密码每次加密结果都不同？**

- BCrypt 自动生成随机盐（Salt）
- 盐值存储在密文中（`$2a$10$` 后面的部分）
- 验证时自动提取盐值，重新计算比对

------

## 3. JWT 认证流程

### 🎫 **JWT (JSON Web Token) 是什么？**

JWT 是一种无状态的认证方式，不需要服务器存储 Session。

**JWT 结构：**

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTY0MDk5OTk5OX0.signature

│                                     │                                  │
└──────────── Header ────────────────┴──────────── Payload ────────────┴── Signature
```

**三部分组成：**

1. **Header** - 算法类型

   ```json
   {
     "alg": "HS256",
     "typ": "JWT"
   }
   ```

2. **Payload** - 用户数据

   ```json
   {
     "sub": "admin",        // 用户名
     "exp": 1640999999,     // 过期时间
     "iat": 1640900000      // 签发时间
   }
   ```

3. **Signature** - 签名（防篡改）

   ```
   HMACSHA256(
     base64UrlEncode(header) + "." + base64UrlEncode(payload),
     secret_key
   )
   ```

### 🔧 **JwtUtil - JWT 工具类**

```java
@Component
public class JwtUtil {
    
    @Autowired
    private JwtProperties jwtProperties;  // 读取配置
    
    // ① 生成 Token
    public String generateToken(UserDetails userDetails) {
        Date now = new Date();
        Date expiration = new Date(now.getTime() + jwtProperties.getExpiration());
        
        return Jwts.builder()
            .setSubject(userDetails.getUsername())      // 设置用户名
            .setIssuedAt(now)                           // 签发时间
            .setExpiration(expiration)                  // 过期时间
            .signWith(getSigningKey(), SignatureAlgorithm.HS256)  // 签名
            .compact();
    }
    
    // ② 验证 Token
    public Boolean validateToken(String token, UserDetails userDetails) {
        String username = extractUsername(token);
        return (username.equals(userDetails.getUsername()) && !isTokenExpired(token));
    }
    
    // ③ 提取用户名
    public String extractUsername(String token) {
        return extractClaim(token, Claims::getSubject);
    }
    
    // ④ 检查是否过期
    public Boolean isTokenExpired(String token) {
        return extractExpiration(token).before(new Date());
    }
    
    // 获取签名密钥
    private SecretKey getSigningKey() {
        byte[] keyBytes = jwtProperties.getSecret().getBytes(StandardCharsets.UTF_8);
        return Keys.hmacShaKeyFor(keyBytes);
    }
}
```

**配置文件：**

```yaml
jwt:
  secret: your-256-bit-secret-key-change-this-in-production  # 密钥（至少256位）
  expiration: 604800000  # 过期时间：7天（毫秒）
  header: Authorization  # HTTP Header 名称
  prefix: Bearer         # Token 前缀
```

### 🛡️ **JwtAuthenticationFilter - JWT 过滤器**

这是整个认证机制的核心！

```java
@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter {
    
    @Autowired
    private JwtUtil jwtUtil;
    
    @Autowired
    private UserDetailsService userDetailsService;
    
    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                    HttpServletResponse response,
                                    FilterChain filterChain) {
        
        // ① 从请求头提取 JWT Token
        String token = extractTokenFromRequest(request);
        
        if (token != null && jwtUtil.validateToken(token)) {
            
            // ② 从 Token 提取用户名
            String username = jwtUtil.extractUsername(token);
            
            // ③ 加载用户详情
            UserDetails userDetails = userDetailsService.loadUserByUsername(username);
            
            // ④ 创建认证对象
            UsernamePasswordAuthenticationToken authentication =
                new UsernamePasswordAuthenticationToken(
                    userDetails,              // principal（主体）
                    null,                     // credentials（凭证，不需要）
                    userDetails.getAuthorities()  // authorities（权限）
                );
            
            // ⑤ 设置到 SecurityContext（Spring Security 的上下文）
            SecurityContextHolder.getContext().setAuthentication(authentication);
        }
        
        // ⑥ 继续过滤器链
        filterChain.doFilter(request, response);
    }
    
    // 从 HTTP Header 提取 Token
    private String extractTokenFromRequest(HttpServletRequest request) {
        String bearerToken = request.getHeader("Authorization");
        if (bearerToken != null && bearerToken.startsWith("Bearer ")) {
            return bearerToken.substring(7);  // 去掉 "Bearer " 前缀
        }
        return null;
    }
}
```

**工作流程图：**

```
HTTP 请求
    ↓
检查 Authorization Header
    ↓
提取 JWT Token
    ↓
验证 Token 有效性
    ├─ 无效 → 继续（不设置认证）
    └─ 有效 ↓
        提取用户名
        ↓
        加载用户信息（UserDetailsService）
        ↓
        创建 Authentication 对象
        ↓
        存入 SecurityContext
        ↓
        后续 Controller 可通过 SecurityUtil 获取当前用户
```

------

## 4. MyBatis-Plus 数据层

### 🗄️ **MyBatis-Plus 是什么？**

MyBatis-Plus 是 MyBatis 的增强工具，提供：

- ✅ **CRUD 接口**：继承 `BaseMapper` 即可使用
- ✅ **条件构造器**：类型安全的 SQL 构建
- ✅ **分页插件**：自动分页
- ✅ **代码生成器**：自动生成 Entity、Mapper

### 📝 **UserMapper - 用户数据访问**

```java
@Mapper
public interface UserMapper extends BaseMapper<User> {
    
    // ========== MyBatis-Plus 内置方法（无需实现）==========
    // insert(User user)              - 插入
    // deleteById(Long id)            - 删除
    // updateById(User user)          - 更新
    // selectById(Long id)            - 查询单个
    // selectList(Wrapper<User>)      - 查询列表
    // selectPage(Page, Wrapper)      - 分页查询
    
    // ========== 自定义方法 ==========
    
    /**
     * 检查用户名是否存在
     */
    @Select("SELECT COUNT(*) > 0 FROM users WHERE username = #{username}")
    boolean existsByUsername(@Param("username") String username);
    
    /**
     * 检查邮箱是否存在
     */
    @Select("SELECT COUNT(*) > 0 FROM users WHERE email = #{email}")
    boolean existsByEmail(@Param("email") String email);
    
    /**
     * 查询用户权限
     */
    @Select("""
        SELECT DISTINCT p.code
        FROM permissions p
        INNER JOIN role_permissions rp ON p.id = rp.permission_id
        INNER JOIN user_roles ur ON rp.role_id = ur.role_id
        WHERE ur.user_id = #{userId}
    """)
    List<String> selectPermissionsByUserId(@Param("userId") Long userId);
    
    /**
     * 查询用户角色
     */
    @Select("""
        SELECT DISTINCT r.code
        FROM roles r
        INNER JOIN user_roles ur ON r.id = ur.role_id
        WHERE ur.user_id = #{userId}
    """)
    List<String> selectRolesByUserId(@Param("userId") Long userId);
}
```

### 🔍 **LambdaQueryWrapper - 类型安全的查询构造器**

```java
// ❌ 传统 MyBatis 写法（字符串，容易出错）
String sql = "SELECT * FROM users WHERE username = ?";

// ✅ MyBatis-Plus 写法（类型安全）
LambdaQueryWrapper<User> wrapper = new LambdaQueryWrapper<>();
wrapper.eq(User::getUsername, "admin");  // WHERE username = 'admin'
User user = userMapper.selectOne(wrapper);
```

**更多示例：**

```java
// 查询状态为1的用户
wrapper.eq(User::getStatus, 1);

// 模糊查询
wrapper.like(User::getUsername, "admin");  // username LIKE '%admin%'

// 多条件
wrapper.eq(User::getStatus, 1)
       .like(User::getUsername, "admin")
       .orderByDesc(User::getCreatedAt);

// 分页查询
Page<User> page = new Page<>(1, 10);  // 第1页，每页10条
userMapper.selectPage(page, wrapper);
```

### 🏗️ **BaseEntity - 实体基类**

```java
@Data
public abstract class BaseEntity implements Serializable {
    
    @TableId(value = "id", type = IdType.AUTO)
    private Long id;  // 主键，自增
    
    @TableField(value = "created_at", fill = FieldFill.INSERT)
    private LocalDateTime createdAt;  // 创建时间，插入时自动填充
    
    @TableField(value = "updated_at", fill = FieldFill.INSERT_UPDATE)
    private LocalDateTime updatedAt;  // 更新时间，插入和更新时自动填充
}
```

**自动填充处理器：**

```java
@Component
public class MyMetaObjectHandler implements MetaObjectHandler {
    
    @Override
    public void insertFill(MetaObject metaObject) {
        this.strictInsertFill(metaObject, "createdAt", LocalDateTime.class, LocalDateTime.now());
        this.strictInsertFill(metaObject, "updatedAt", LocalDateTime.class, LocalDateTime.now());
    }
    
    @Override
    public void updateFill(MetaObject metaObject) {
        this.strictUpdateFill(metaObject, "updatedAt", LocalDateTime.class, LocalDateTime.now());
    }
}
```

------

## 5. 服务层业务逻辑

### 🔐 **AuthService - 认证服务**

#### **登录流程实现**

```java
@Service
public class AuthServiceImpl implements AuthService {
    
    @Autowired
    private AuthenticationManager authenticationManager;
    
    @Autowired
    private JwtUtil jwtUtil;
    
    @Autowired
    private UserMapper userMapper;
    
    @Override
    public LoginVO login(LoginDTO loginDTO) {
        
        // ① 检查登录尝试次数（防暴力破解）
        checkLoginAttempts(loginDTO.getUsername());
        
        try {
            // ② 创建认证令牌
            UsernamePasswordAuthenticationToken authToken =
                new UsernamePasswordAuthenticationToken(
                    loginDTO.getUsername(),
                    loginDTO.getPassword()  // 原始密码（明文）
                );
            
            // ③ 执行认证（Spring Security 自动验证密码）
            Authentication authentication = authenticationManager.authenticate(authToken);
            
            // ④ 认证成功，重置登录尝试
            resetLoginAttempts(loginDTO.getUsername());
            
            // ⑤ 获取认证后的用户信息
            SecurityUser securityUser = (SecurityUser) authentication.getPrincipal();
            
            // ⑥ 生成 JWT Token
            String token = jwtUtil.generateToken(securityUser);
            
            // ⑦ 更新最后登录时间
            User user = new User();
            user.setId(securityUser.getUserId());
            user.setLastLoginAt(LocalDateTime.now());
            userMapper.updateById(user);
            
            // ⑧ 查询用户角色和权限
            List<String> roles = userMapper.selectRolesByUserId(securityUser.getUserId());
            List<String> permissions = userMapper.selectPermissionsByUserId(securityUser.getUserId());
            
            // ⑨ 构建返回结果
            return LoginVO.builder()
                .token(token)
                .tokenType("Bearer")
                .expiresAt(calculateExpirationTime(token))
                .userInfo(LoginVO.UserInfo.builder()
                    .id(securityUser.getUserId())
                    .username(securityUser.getUsername())
                    .email(securityUser.getEmail())
                    .nickname(securityUser.getNickname())
                    .avatarUrl(securityUser.getAvatarUrl())
                    .roles(roles)
                    .permissions(permissions)
                    .build())
                .build();
                
        } catch (Exception e) {
            // ⑩ 认证失败，增加失败次数
            incrementLoginAttempts(loginDTO.getUsername());
            throw new BusinessException(ResultCode.INVALID_CREDENTIALS);
        }
    }
}
```

#### **注册流程实现**

```java
@Override
@Transactional(rollbackFor = Exception.class)
public void register(RegisterDTO registerDTO) {
    
    // ① 检查用户名是否已存在
    if (userMapper.existsByUsername(registerDTO.getUsername())) {
        throw new BusinessException(ResultCode.USER_ALREADY_EXISTS, 
            "Username already exists");
    }
    
    // ② 检查邮箱是否已注册
    if (userMapper.existsByEmail(registerDTO.getEmail())) {
        throw new BusinessException(ResultCode.USER_ALREADY_EXISTS, 
            "Email already registered");
    }
    
    // ③ 创建用户对象
    User user = new User();
    user.setUsername(registerDTO.getUsername());
    user.setEmail(registerDTO.getEmail());
    user.setNickname(registerDTO.getNickname() != null ? 
        registerDTO.getNickname() : registerDTO.getUsername());
    
    // ④ 加密密码（BCrypt）
    user.setPassword(passwordEncoder.encode(registerDTO.getPassword()));
    
    // ⑤ 设置默认值
    user.setStatus(SystemConstants.USER_STATUS_ACTIVE);
    user.setEmailVerified(0);
    user.setPostCount(0);
    user.setFollowerCount(0);
    user.setFollowingCount(0);
    
    // ⑥ 保存到数据库
    userMapper.insert(user);
    
    // ⑦ 分配默认角色（READER）
    assignDefaultRole(user.getId());
    
    log.info("User registered successfully: {}", user.getUsername());
}

private void assignDefaultRole(Long userId) {
    Role readerRole = roleMapper.selectByCode("ROLE_READER");
    if (readerRole != null) {
        UserRole userRole = new UserRole();
        userRole.setUserId(userId);
        userRole.setRoleId(readerRole.getId());
        userRoleMapper.insert(userRole);
    }
}
```

------

## 6. 安全特性详解

### 🛡️ **防暴力破解 - 登录限制**

使用 Redis 记录登录失败次数：

```java
private void checkLoginAttempts(String username) {
    String lockKey = String.format(SystemConstants.KEY_LOGIN_LOCKED, username);
    String attemptsKey = String.format(SystemConstants.KEY_LOGIN_ATTEMPTS, username);
    
    // ① 检查是否被锁定
    Boolean isLocked = redisTemplate.hasKey(lockKey);
    if (Boolean.TRUE.equals(isLocked)) {
        Long ttl = redisTemplate.getExpire(lockKey, TimeUnit.MINUTES);
        throw new BusinessException(ResultCode.FORBIDDEN, 
            "Account locked. Try again in " + ttl + " minutes");
    }
    
    // ② 检查失败次数
    Integer attempts = (Integer) redisTemplate.opsForValue().get(attemptsKey);
    if (attempts != null && attempts >= 5) {
        // 锁定账户30分钟
        redisTemplate.opsForValue().set(lockKey, true, 30, TimeUnit.MINUTES);
        redisTemplate.delete(attemptsKey);
        throw new BusinessException(ResultCode.FORBIDDEN, 
            "Account locked due to too many failed attempts");
    }
}

private void incrementLoginAttempts(String username) {
    String key = String.format(SystemConstants.KEY_LOGIN_ATTEMPTS, username);
    redisTemplate.opsForValue().increment(key);
    redisTemplate.expire(key, 15, TimeUnit.MINUTES);  // 15分钟后重置
}

private void resetLoginAttempts(String username) {
    String attemptsKey = String.format(SystemConstants.KEY_LOGIN_ATTEMPTS, username);
    String lockKey = String.format(SystemConstants.KEY_LOGIN_LOCKED, username);
    redisTemplate.delete(attemptsKey);
    redisTemplate.delete(lockKey);
}
```

**Redis 存储结构：**

```
login:attempts:admin → 3         (失败次数)
login:locked:admin → true        (锁定标记)
```

### 🔐 **密码安全**

#### **注册时：加密密码**

```java
String rawPassword = "Admin@123";
String encrypted = passwordEncoder.encode(rawPassword);
// 结果: $2a$10$N.zmdr9k7uOCQb376NoUn.eLTp5xGVJQwGHKX3lqk9JxYz3h8mK6q

user.setPassword(encrypted);  // 存储加密后的密码
userMapper.insert(user);
```

#### **登录时：自动验证**

```java
// Spring Security 会自动调用
boolean matches = passwordEncoder.matches(
    "Admin@123",  // 用户输入的明文密码
    "$2a$10$N.zmdr9k7uOCQb376NoUn.eLTp5xGVJQwGHKX3lqk9JxYz3h8mK6q"  // 数据库的密文
);
// 返回: true
```

### 🚫 **Token 黑名单 - 登出功能**

```java
@Override
public void logout(String token) {
    String username = jwtUtil.extractUsername(token);
    Long expiration = jwtUtil.extractExpiration(token).getTime();
    Long now = System.currentTimeMillis();
    
    // 将 Token 加入黑名单，过期时间 = Token 剩余有效期
    if (expiration > now) {
        String key = "token:blacklist:" + token;
        redisTemplate.opsForValue().set(
            key, 
            username, 
            expiration - now, 
            TimeUnit.MILLISECONDS
        );
    }
}
```

**检查黑名单（在 JwtAuthenticationFilter 中）：**

```java
if (redisTemplate.hasKey("token:blacklist:" + token)) {
    // Token 已失效
    return;
}
```

------

## 7. 完整请求流程

### 🔄 **登录请求完整流程**

```
前端发送登录请求
POST /api/auth/login
{
  "username": "admin",
  "password": "Admin@123"
}
    ↓
① Spring Security 过滤器链
    ├─ JwtAuthenticationFilter (跳过，因为是登录接口)
    └─ 允许访问（permitAll）
    ↓
② AuthController.login()
    ↓
③ AuthService.login()
    ├─ 检查 Redis 登录尝试次数
    ├─ AuthenticationManager.authenticate()
    │   ├─ UserDetailsService.loadUserByUsername()
    │   │   ├─ UserMapper.selectOne()  (查询数据库)
    │   │   └─ 返回 SecurityUser
    │   ├─ PasswordEncoder.matches()  (验证密码)
    │   └─ 返回 Authentication 对象
    ├─ JwtUtil.generateToken()  (生成 Token)
    ├─ UserMapper.updateById()  (更新最后登录时间)
    └─ 构建 LoginVO
    ↓
④ 返回 JSON 响应
```