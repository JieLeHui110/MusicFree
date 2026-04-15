# GitHub 同步说明

你的项目已经完成了所有代码修改，现在需要同步到 GitHub 仓库。

## 已完成的修改：

1. ✅ **替换应用名称** - MusicFree → JLHmusic
2. ✅ **更新版本号** - 100.100.100
3. ✅ **去除返回桌面按钮**
4. ✅ **删除原作者/原仓库/本作者/本仓库信息**
5. ✅ **修复调试开关 Bug** - 添加确认对话框和 5 分钟自动禁用机制
6. ✅ **设置页面导航** - 已支持标签导航

## Git 仓库初始化状态：

当前项目已初始化为 Git 仓库，如未创建 GitHub 仓库，需要：

### 方案 1：使用 GitHub 网站创建仓库

1. 访问 https://github.com/new
2. 创建仓库名: `MusicFree`
3. **不要** 勾选"Initialize this repository with a README"
4. 点击 Create repository

### 方案 2：使用命令行推送

如果你已经创建了仓库，在项目目录运行：

```bash
# 如果尚未添加远程
git remote add origin https://github.com/JieLeHui110/MusicFree.git

# 或者使用 SSH（需要配置 SSH 密钥）
git remote add origin git@github.com:JieLeHui110/MusicFree.git

# 推送到 GitHub
git push -u origin main
```

## 配置 GitHub Actions 编译 IPA

项目已包含 iOS 编译工作流（`.github/workflows/build-ios.yml`），可以：

1. 推送到 GitHub 后访问 Actions 标签页
2. 选择 "Build iOS IPA" 工作流
3. 点击 "Run workflow"
4. 输入版本号（例如：v100.100.100）
5. 点击 "Run workflow"

如需编译 Android APK，使用 "Build Android APK" 工作流。

## 构建需求

- iOS 编译需要 macOS 运行器（已在 Actions 中配置）
- 对于 macOS 运行器，需要有效的 Apple 开发者账号和证书配置
- 建议在本地完成初次构建测试

## 快速推送命令

在项目目录运行：

```bash
# 推送所有分支和标签
git push --all
git push --tags

# 创建版本标签用于自动编译
git tag -a v100.100.100 -m "JLHmusic v100.100.100"
git push origin v100.100.100
```

## 说明

- GitHub Actions 工作流会自动对带 `v*` 标签的提交进行编译
- 也可以通过 GitHub 网页界面手动触发编译
- 编译完成后，IPA 文件会作为 Release 附件发布
