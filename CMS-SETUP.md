# 博客后台使用指南

博客已支持两种写作方式，内容永远以 `src/assets/data/articles/` 下的 Markdown 文件为准。

## 方式一：网页后台（推荐）

站点部署后访问 **https://xuhailin.github.io/my-app/admin/**

### 首次登录：生成 GitHub 访问令牌

后台采用 Sveltia CMS，使用 GitHub 个人访问令牌（PAT）登录，无需部署任何服务端：

1. 打开 GitHub → 右上角头像 → **Settings** → 左侧最底部 **Developer settings**
2. **Personal access tokens** → **Tokens (classic)** → **Generate new token (classic)**
3. Note 随便填（如 `blog-admin`），勾选 **repo** 权限（完整仓库读写），点击 **Generate token**
4. 复制生成的令牌（只显示一次）
5. 回到 `/admin/` 页面，点 **Sign In Using Access Token**，粘贴令牌即可

令牌只保存在你自己浏览器的 localStorage 里。浏览器重置后重新粘贴一次即可。

### 写文章

1. 登录后进入「文章」集合，点 **新建文章**
2. 填写标题（必填）、日期、标签、摘要，正文用 Markdown 编辑器书写
3. 图片直接粘贴/上传，会自动存到 `src/assets/data/images/`
4. 点 **保存**（Save），选择发布——CMS 会直接向 `master` 分支提交一个 commit
5. 提交后 GitHub Actions 自动构建并更新 `docs/` 目录，约 1~2 分钟后线上生效
   （构建进度见仓库的 **Actions** 标签页）

### 可选：一键 GitHub 登录

不想每次粘贴令牌，可以把 [sveltia-cms-auth](https://github.com/sveltia/sveltia-cms-auth)
一键部署到 Cloudflare Workers（免费），然后把得到的 Worker 地址填入
`src/admin/config.yml` 的 `backend.base_url`，即可使用 "Sign In with GitHub" 按钮。

## 方式二：本地写作

直接在 `src/assets/data/articles/` 新建 `YYYY-MM-DD-标题.md`（或任意唯一文件名）：

```markdown
---
title: 文章标题
date: 2024-12-26
tags: [css, javascript]
description: 一句话摘要，显示在首页列表
---
正文 Markdown……
```

然后：

```bash
npm run build   # 自动重新生成文章索引 articles.json 并构建到 docs/
git push
```

注意：索引文件 `src/assets/data/articles.json` 由 `npm run build` 自动生成，不要手工编辑。

## 文章字段说明

| 字段 | 必填 | 说明 |
|------|------|------|
| title | ✅ | 文章标题，列表页与首页展示 |
| date | 建议 | 日期（YYYY-MM-DD），列表按日期倒序 |
| tags | 否 | 标签数组，首页卡片彩色角标 |
| description | 否 | 摘要，列表页展示 |

## 常见问题

- **发布后没生效？** 到仓库 Actions 页看「Build & Deploy」工作流是否绿色；GitHub Pages 缓存可能再延迟 1 分钟。
- **同一天写两篇？** 文件名会自动带上标题（如 `2026-01-01-新年愿望.md`），不会互相覆盖。
- **想改后台界面？** 编辑 `src/admin/index.html`（配色/文案）和 `src/admin/config.yml`（字段/集合）。
