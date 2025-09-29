---
icon: pen-to-square
date: 2025-9-10
cover: https://free.picui.cn/free/2025/06/15/684eb82931fbc.jpg
footer: <a href=https://www.gnu.org/licenses/gpl-3.0.html style="color:#808080"> GPL-3.0 Licensed </a> | Copyright © 2025-present <a href="https://github.com/GALA-Lin" style="color:#808080">GALA-Lin</a>
copyright: false
index: false
category:
- Java
- Web
- 项目经验
---

# 志愿服务平台

## 项目许可
 [![CC BY-NC-SA 4.0][cc-by-nc-sa-shield]][cc-by-nc-sa]

本作品根据[署名—非商业性使用—相同方式共享 4.0 协议][cc-by-nc-sa]进行许可。

[![CC BY-NC-SA 4.0][cc-by-nc-sa-image]][cc-by-nc-sa]

[cc-by-nc-sa]: http://creativecommons.org/licenses/by-nc-sa/4.0/
[cc-by-nc-sa-image]: https://licensebuttons.net/l/by-nc-sa/4.0/88x31.png
[cc-by-nc-sa-shield]: https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg

<Catalog />

## 项目描述

### 项目选题

油炬智愿 —— 中国石油大学（北京）克拉玛依校区志愿服务平台

### 技术栈

- 后端：Java SpringBoot, Spring MVC, Spring Security, Mybatis-Plus,JWT
- 构建工具：Maven（后端）,Vite（前端）
- 前端： Vue3、Pinia、Vue Router、Axios、Element Plus
- 数据库：MySQL
- 版本管理：Git
- 代码托管：GitHub
- 服务器：Docker

### 开发环境

- 后端开发环境: JDK 21 (LTS)
- 前端开发环境: Node.js 22 (LTS)
- 容器化环境: Docker Desktop 

### 技术架构

![架构图.png](https://free.picui.cn/free/2025/09/10/68c0e3c2a7c82.png)

## 主要业务

### Super管理员

- [x] 下级管理员权限管理
- [x] 普通管理员业务

### 管理员

- [x] 登录
- [x] 新闻发布
- [x] 活动发布
- [x] 活动报名信息导出：excel
- [x] 时长登记：手动版：手动填写/提交规范excel ~~自动版：设计定位/扫码/签到码签到+签退 自动计算时长~~
- [ ] 数据可视化：下辖各组织志愿者人数、时长
- [x] 志愿者信息管理
- [x] 志愿者权限管理
- [x] 组织部门管理：班级、志愿者协会......

### 志愿者

- [x] 注册登录
- [x] 新闻点赞、评论、收藏
- [x] 活动报名、取消
- [x] 加入、退出组织部门
- [x] 个人信息管理
- [x] 志愿时长查询