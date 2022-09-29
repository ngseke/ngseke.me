---
title: 在 webpack.config.js 裡使用 ESM 的 import 語法
date: 2022/02/20
tags:
  - Webpack
original: https://hackmd.io/@xq/webpack-config-esm
---

## 步驟

### 安裝 `@babel/register` 與 `babel-preset-env`

```bash
npm install -D @babel/core @babel/register babel-preset-env
```

### 設定 `.babelrc`
```diff
{
  "presets": [
+   "@babel/preset-env"
  ],
}

```

### 更新 webpack 設定

1. 將原 `webpack.config.js` 更名為 `webpack.config.babel.js`
2. 在專案根目錄建立 `webpack.config.js`
   ```javascript
   require('@babel/register')
   module.exports = require('./webpack.config.babel.js')
   ```

## 參考資料

- https://stackoverflow.com/a/43165210/12970551
- https://stackoverflow.com/a/52092788/12970551
