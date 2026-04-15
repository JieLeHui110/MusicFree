# JLHmusic - 定制化版本

这是基于 MusicFree 定制的 JLHmusic 版本。

## 版本信息

- **版本**: 100.100.100
- **名称**: JLHmusic
- **作者**: JieLeHui110

## 主要改动

### 1. 应用品牌化
- 应用名称改为 JLHmusic
- app.json 和 package.json 已更新
- 所有"MusicFree"引用已改为"JLHmusic"

### 2. UI 调整
- ✅ 移除了侧边栏中的"返回桌面"按钮
- ✅ 删除了关于页面中的"原作者""原仓库""本作者""本仓库"信息
- ✅ 关于页面现在只显示许可协议卡片

### 3. 调试功能修复
- ✅ 修复了开发者选项中的调试面板开关 Bug
  - 打开时会显示确认对话框
  - 启用后 5 分钟自动禁用，防止应用卡顿
  - 关闭开关可随时禁用调试面板

### 4. 版本管理
- 版本号设置为 100.100.100
- 已创建 git tag: v100.100.100

## 快速开始 - GitHub 推送

### 步骤 1: 在 GitHub 创建仓库

1. 访问 https://github.com/new
2. Repository name: `MusicFree`
3. Description: "JLHmusic - Customized Music Player"
4. 选择 Public
5. **不要**勾选 "Add a README file"
6. 点击 "Create repository"

### 步骤 2: 推送代码到 GitHub

```bash
# 进入项目目录
cd F:\MusicFree\MusicFree-master

# （可选）查看当前状态
git status

# 推送到 GitHub
git push -u origin main

# 推送标签
git push origin v100.100.100
# 或推送所有标签：git push --tags
```

### 步骤 3: 设置 GitHub Actions

推送后，Actions 工作流会自动在以下情况触发：

1. **自动触发**：当推送带有 `v*` 标签的提交时（例如 `v100.100.100`）
2. **手动触发**：在 GitHub 仓库的 "Actions" 标签页选择工作流并运行

### 步骤 4: 编译 IPA 文件

#### 选项 A: 自动编译（标签触发）
```bash
# 推送标签后，GitHub Actions 会自动开始编译
git push origin v100.100.100

# 然后访问 GitHub Actions 查看进度
# 完成后可在 Releases 中下载 IPA 文件
```

#### 选项 B: 手动编译
1. 访问 GitHub 仓库
2. 点击 "Actions" 标签
3. 选择 "Build iOS IPA" 工作流
4. 点击 "Run workflow"
5. 输入版本号（例如：v100.100.100）
6. 点击"Run workflow"按钮

## GitHub Actions 工作流

项目包含两个编译工作流：

1. **build-ios.yml** - 编译 iOS IPA
   - 运行系统: macOS 15
   - 产物: .ipa 文件
   
2. **build-android.yml** - 编译 Android APK
   - 运行系统: Ubuntu 24.04
   - 产物: .apk 文件

## 本地构建（可选）

如果你想在本地测试构建：

```bash
# 安装依赖
npm install

# iOS 开发构建
npm run ios
# 或 React Native 命令
react-native run-ios

# Android 开发构建
npm run android
# 或 React Native 命令
react-native run-android
```

## 常见问题

### Q: 推送失败 "fatal: unable to access"
**A**: 
- 确认 GitHub 仓库已创建
- 检查网络连接
- 确保 git 已正确安装并配置

### Q: 如何触发编译？
**A**: 
- 推送带 `v*` 前缀的标签，例如 `v100.100.100`
- 或在 Actions 页面手动运行工作流

### Q: 编译需要多长时间？
**A**: 
- iOS: 约 15-45 分钟（取决于网络）
- Android: 约 10-30 分钟

### Q: 如何获取编译产物？
**A**: 
- 编译完成后访问 Releases
- 或在 Actions 工作流的 Summary 中下载

## 开发者选项

在应用中的设置 → 基本设置 → 开发选项，可以：
- 启用错误日志记录
- 启用追踪日志
- 启用实时调试面板（带自动禁用机制）

## 技术细节

### 调试面板修复

原问题: 打开调试面板后无法关闭，应用卡死

解决方案:
- 添加了启用确认对话框
- 实现 5 分钟自动禁用机制
- 防止频繁的日志生成导致卡顿

在 `src/pages/setting/settingTypes/basicSetting.tsx` 和 `src/components/debug/index.tsx` 中修改。

### 关于页面优化

- 简化了动画（从 5 个卡片减至 1 个）
- 提高了应用性能
- 更干净的用户界面

## 许可证

保留原项目的 AGPL 许可证

---

**准备好了？** 运行以下命令立即推送到 GitHub：

```bash
cd F:\MusicFree\MusicFree-master
git push -u origin main
git push origin v100.100.100
```
