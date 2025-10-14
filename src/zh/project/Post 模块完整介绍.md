# 📝 Post 模块完整介绍


## 1️⃣ **核心组件说明**

### **A. Entity Layer (实体层)**

模块包含的核心实体类：

- **Post** - 文章主实体（存储标题、内容、作者ID、状态等核心信息）
- **Category** - 文章分类（如技术、生活等分类定义）
- **Tag** - 文章标签（用于文章的精细化分类）
- **PostCategory** - 文章与分类的关联表（多对多关系）
- **PostTag** - 文章与标签的关联表（多对多关系）


### **B. Mapper Layer (数据访问层)**

数据访问层基于MyBatis-Plus实现，提供数据库操作能力：

| Mapper类             | 核心方法                                                     | 说明                      |
| -------------------- | ------------------------------------------------------------ | ------------------------- |
| `CategoryMapper`     | 继承`BaseMapper<Category>`                                   | 分类相关CRUD操作          |
| `PostTagMapper`      | 继承`BaseMapper<PostTag>`                                    | 文章-标签关联CRUD操作     |
| `PostMapper`         | `incrementViewCount(Long id)` - 文章浏览量自增<br>`selectCategoriesByPostId(Long postId)` - 按文章ID查询分类 | 文章核心操作，含自定义SQL |
| `TagMapper`          | 继承`BaseMapper<Tag>`                                        | 标签相关CRUD操作          |
| `PostCategoryMapper` | 继承`BaseMapper<PostCategory>`                               | 文章-分类关联CRUD操作     |


### **C. Service Layer (服务层)**

#### **PostService 核心接口**

定义文章全生命周期的业务方法：

| 方法名               | 参数                                         | 返回值                   | 说明                 |
| -------------------- | -------------------------------------------- | ------------------------ | -------------------- |
| `createPost`         | `PostCreateDTO dto`                          | `Long`（文章ID）         | 创建文章，返回文章ID |
| `getPostById`        | `Long id`                                    | `PostDetailVO`           | 根据ID获取文章详情   |
| `getPostList`        | `Integer page, Integer size, Integer status` | `PageResult<PostListVO>` | 分页获取文章列表     |
| `updatePost`         | `PostUpdateDTO dto`                          | `void`                   | 更新文章内容         |
| `deletePost`         | `Long id`                                    | `void`                   | 软删除文章           |
| `publishPost`        | `Long id`                                    | `void`                   | 发布文章（更新状态） |
| `incrementViewCount` | `Long id`                                    | `void`                   | 文章浏览量+1         |


#### **PostServiceImpl 实现细节**

核心业务流程解析：

1. **创建文章流程**
   ```
   1. 校验用户登录状态（通过SecurityUtil获取当前用户ID）
   2. 转换DTO为Post实体（设置标题、内容、作者ID等基础属性）
   3. 生成slug（URL友好型字符串，从标题转换）
   4. 若为发布状态，设置发布时间
   5. 保存文章与分类、标签的关联关系
   6. 插入文章记录并返回ID
   ```

2. **获取文章详情流程**
   ```
   1. 校验文章是否存在
   2. 复制文章基础属性到VO
   3. 加载作者信息（昵称、头像）
   4. 关联查询分类列表（通过PostCategory关联表）
   5. 关联查询标签列表（通过PostTag关联表）
   6. 返回组装后的详情VO
   ```

3. **权限控制逻辑**
   - 更新/删除文章时，验证操作人是否为作者或管理员
   - 发布文章仅作者可操作
   - 创建文章需`post:create`权限


### **D. Controller Layer (控制器层)**

提供RESTful接口，处理HTTP请求：

| 接口功能     | 请求方法 | 路径                  | 权限要求                | 请求参数                                        | 返回值                           |
| ------------ | -------- | --------------------- | ----------------------- | ----------------------------------------------- | -------------------------------- |
| 创建文章     | POST     | `/posts`              | `post:create`权限       | `@RequestBody PostCreateDTO dto`                | 文章ID                           |
| 获取文章详情 | GET      | `/posts/{id}`         | 公开访问                | 路径参数`id`                                    | `PostDetailVO`                   |
| 获取文章列表 | GET      | `/posts`              | 公开访问                | 分页参数`page`、`size`，状态`status`            | 分页结果`PageResult<PostListVO>` |
| 更新文章     | PUT      | `/posts/{id}`         | 登录用户（作者/管理员） | 路径参数`id` + `@RequestBody PostUpdateDTO dto` | 成功消息                         |
| 删除文章     | DELETE   | `/posts/{id}`         | 登录用户（作者/管理员） | 路径参数`id`                                    | 成功消息                         |
| 发布文章     | PUT      | `/posts/{id}/publish` | `post:publish`权限      | 路径参数`id`                                    | 成功消息                         |


## 2️⃣ **功能特性总结**

### ✅ **已实现的核心功能**

1. **文章管理**
   - 完整的CRUD操作（创建、查询、更新、删除）
   - 支持草稿/发布状态管理
   - 软删除机制（设置状态为-1，保留数据）

2. **关联数据处理**
   - 文章与分类多对多关联
   - 文章与标签多对多关联
   - 详情查询自动加载作者、分类、标签信息

3. **内容增强**
   - 自动生成slug（URL友好的文章标识）
   - 浏览量自动统计（查看详情时自增）
   - 分页查询支持（按发布时间倒序）

4. **权限控制**
   - 基于Spring Security的权限校验
   - 细粒度权限控制（创建/发布需特定权限）
   - 作者只能操作自己的文章（管理员除外）

5. **数据校验**
   - 请求参数校验（`@Valid`注解）
   - 业务异常处理（如文章不存在、无权限等）


## 📝 **总结**

- [x] 完整的文章创建、查询、更新、删除功能
- [x] 分类与标签多对多关联管理
- [x] 浏览量统计与slug自动生成
- [x] 基于角色和权限的访问控制
- [x] 分页查询与详情信息组装
- [x] 事务管理与异常处理