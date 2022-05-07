# vscode-extension-template

VSCode插件开发模板项目

### Feature
- webpack 打包压缩 VSCode Extension
- husky 约束 commit 规范
- standard-version 自动更新版本并修改 Changelog
- github action 自动发布插件到 VSCode Marketplace,同步 Relase 版本


### 打包发布常用操作

- 安装 VSCE

```bash
npm install -g vsce
```

- 登录插件中心
```bash
vsce login lstheart
```
> 获取Token: https://dev.azure.com/

- 发布插件
```bash
vsce publish
```
- 打包插件
```bash
vsce package
```

### Github Action 说明

> 版本发布需手动执行 action,可自行调整 `publish-extension.yml`

启用 Github Action 后需设定项目 Actions Secrets
- `USER_NAME`               用户名
- `USER_EMAIL`              用户邮箱
- `VS_MARKETPLACE_TOKEN`    VSCode Token