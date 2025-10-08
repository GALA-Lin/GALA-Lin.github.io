# 🔐 Auth 模块完整介绍


## 1️⃣ **核心组件说明**

### **A. Entity Layer (实体层)**

我们创建的实体类：

- **User** - 用户基本信息
- **Role** - 角色定义
- **Permission** - 权限定义
- **UserRole** - 用户角色关联表

### **B. Mapper Layer (数据访问层)**

- UserMapper

   \- 用户数据操作

  - `existsByUsername()` - 检查用户名是否存在
  - `selectUserWithAuthorities()` - 查询用户及其权限
  - `selectPermissionsByUserId()` - 获取用户权限列表
  - `selectRolesByUserId()` - 获取用户角色列表

### **C. Security Layer (安全层)** ⭐ 核心部分

#### **JWT 工具 (`JwtUtil`)**

```java
- generateToken() // 生成JWT令牌
- validateToken()  // 验证令牌有效性
- extractUsername() // 从令牌提取用户名
- isTokenExpired() // 检查令牌是否过期
```

#### **Spring Security 配置 (`SecurityConfig`)**

- ✅ **BCrypt 密码加密器** - 安全存储密码
- ✅ **无状态会话管理** - 使用JWT，不依赖session
- ✅ **自定义认证提供者** - 连接UserDetailsService
- ✅ **公开/受保护端点配置**

#### **JWT 过滤器 (`JwtAuthenticationFilter`)**

- 拦截每个请求
- 从 `Authorization` header 提取JWT
- 验证令牌并设置 SecurityContext
- 使后续请求可以获取当前用户信息

#### **异常处理器**

- `JwtAuthenticationEntryPoint` - 处理未认证访问 (401)
- `JwtAccessDeniedHandler` - 处理权限不足 (403)

#### **自定义 UserDetails (`SecurityUser`)**

```java
- 存储用户ID、用户名、权限列表
- 实现 Spring Security 的 UserDetails 接口
- 包含额外信息：email, nickname, avatarUrl
```

------

## 2️⃣ **Service Layer (服务层)**

### **AuthService - 认证服务**

#### **登录流程 (`login`)**

```
1. 检查登录尝试次数（防暴力破解）
   ↓
2. 调用 AuthenticationManager 验证用户名密码
   ↓
3. 验证成功 → 生成JWT令牌
   ↓
4. 更新最后登录时间
   ↓
5. 返回令牌和用户信息
   ↓
6. 重置登录尝试计数
```

**安全特性：**

- ✅ 登录失败5次自动锁定30分钟
- ✅ 使用Redis存储尝试次数
- ✅ 密码验证由Spring Security自动完成

#### **注册流程 (`register`)**

```
1. 检查用户名/邮箱是否已存在
   ↓
2. 使用BCrypt加密密码
   ↓
3. 创建用户记录
   ↓
4. 分配默认角色 (ROLE_READER)
   ↓
5. 返回成功消息
```

#### **登出流程 (`logout`)**

```
1. 将JWT令牌加入黑名单（存入Redis）
   ↓
2. 设置过期时间 = 令牌剩余有效期
   ↓
3. 后续请求会检查黑名单
```

### **UserService - 用户服务**

- **获取用户资料** - 支持Redis缓存
- **更新个人信息** - 昵称、头像、简介
- **修改密码** - 验证旧密码，加密新密码
- **检查用户名可用性**

------

## 3️⃣ **Controller Layer (控制器层)**

### **AuthController - 认证接口**

| 接口         | 方法 | 路径                   | 说明         | 认证   |
| ------------ | ---- | ---------------------- | ------------ | ------ |
| 登录         | POST | `/auth/login`          | 用户登录     | ❌ 公开 |
| 注册         | POST | `/auth/register`       | 用户注册     | ❌ 公开 |
| 登出         | POST | `/auth/logout`         | 用户登出     | ✅ 需要 |
| 获取个人资料 | GET  | `/auth/profile`        | 当前用户信息 | ✅ 需要 |
| 更新个人资料 | PUT  | `/auth/profile`        | 更新信息     | ✅ 需要 |
| 修改密码     | PUT  | `/auth/password`       | 修改密码     | ✅ 需要 |
| 检查用户名   | GET  | `/auth/check-username` | 可用性检查   | ❌ 公开 |

### **UserController - 用户管理接口**

| 接口           | 方法 | 路径                    | 说明         | 认证    |
| -------------- | ---- | ----------------------- | ------------ | ------- |
| 查看用户资料   | GET  | `/users/{userId}`       | 公开用户信息 | ✅ 需要  |
| 管理员查看详情 | GET  | `/users/admin/{userId}` | 详细信息     | ✅ ADMIN |

### **TestController - 测试接口**

测试不同权限级别的访问控制：

- `/test/public` - 完全公开
- `/test/protected` - 需要登录
- `/test/admin` - 仅管理员
- `/test/author` - 作者/编辑/管理员
- `/test/create-post` - 需要 `post:create` 权限

------


## 4️⃣ **安全特性总结**

### ✅ **已实现的安全功能：**

1. **密码安全**
   - BCrypt 加密（强度10）
   - 每次加密结果不同（自动加盐）
   - 不可逆加密
2. **JWT 令牌**
   - 无状态认证（不依赖session）
   - 7天有效期（可配置）
   - HS256 签名算法
3. **防暴力破解**
   - 登录失败5次锁定账户
   - 锁定时间30分钟
   - 使用Redis存储状态
4. **令牌黑名单**
   - 登出后令牌失效
   - Redis存储黑名单
   - 自动过期清理
5. **RBAC 权限控制**
   - 基于角色的访问控制
   - 基于权限的细粒度控制
   - 使用注解 `@PreAuthorize`
6. **输入验证**
   - Jakarta Validation 验证
   - 密码强度检查（大小写+数字）
   - 用户名格式限制

------

## 📝 **总结**

- [x] 完整的用户注册/登录/登出功能
- [x] JWT 令牌认证（无状态）
- [x] BCrypt 密码加密
- [x] 防暴力破解（登录限制）
- [x] RBAC 权限控制
- [x] Redis 缓存优化
- [x] Swagger API 文档
- [x] 注册输入验证
