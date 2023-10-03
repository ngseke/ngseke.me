---
title: 在 Nuxt 專案穩穩地匯入 Bootstrap
date: 2021/11/21
tags:
  - Nuxt
  - Vue
  - Bootstrap
original: https://hackmd.io/@xq/bootstrap-with-nuxt
---

> 此筆記指的是純 [bootstrap](https://github.com/twbs/bootstrap)，與 [bootstrap-vue](https://github.com/bootstrap-vue/bootstrap-vue) 無關。

> 下文出現的 **BS** 是 Bootstrap 的簡寫

## 🌟 這篇筆記的重點有哪些？

與直接匯入編譯過並打包好的 css 相比，此作法：

1. 保留自定義樣式的能力，優雅地從根源自定義主題，免去用層層的自訂 class 複寫
1. 避免組件充斥著 `@media (min-width: 576px) { ... }` 諸如此類的魔法數字
1. 節省專案建構大小


## 🔧 安裝 Bootstrap

```bash
npm i bootstrap
```

## 🔧 安裝 `@nuxtjs/style-resources`

```bash
npm i @nuxtjs/style-resources
```


## 📃 建立 `_bootstrap.sass`

建立 `assets/sass/style-resources/_bootstrap.sass`（檔名隨意）

在裡面匯入 BS 的源 SCSS 檔案，這三行是必須的。

```sass
// _bootstrap.sass

@import "~bootstrap/scss/functions"
@import "~bootstrap/scss/variables"
@import "~bootstrap/scss/mixins"
```

> https://getbootstrap.com/docs/4.6/getting-started/theming/#importing

## 📃 建立 `_custom.sass`

建立 `assets/sass/style-resources/_custom.sass`（檔名隨意）。

此檔用來複寫 BS 預設變數。

```sass
// _custom.sass

// 🌰 舉例：

// 將「primary」換成黃色
$theme-colors: (primary: #ffd019)

// 將連結換成黃色，並移除 hover 的底線
$link-color: #ffd019
$link-hover-decoration: none

// 重新定義斷點大小
$grid-breakpoints: (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px, xxl: 1400px)

/* ... */
```


> 更多可供複寫的變數都列在此處：
> https://github.com/twbs/bootstrap/blob/main/scss/_variables.scss


## 📃 建立 `style.sass`

建立 `assets/sass/style.sass`（檔名隨意）

根據各自需求匯入 BS 元件，這些元件將會套用前面設定的主題變數。

```sass
// style.sass

// 👍 推薦的元件
@import "~bootstrap/scss/reboot"
@import "~bootstrap/scss/utilities"
@import "~bootstrap/scss/grid"
@import "~bootstrap/scss/type"

// 其他常用元件
@import "~bootstrap/scss/images"
@import "~bootstrap/scss/nav"
@import "~bootstrap/scss/navbar"

/* ... */
```


> 可用的元件列表及用途請參考此處：
> https://github.com/twbs/bootstrap/tree/main/scss


## ✏️ 配置 `nuxt.config.js`

```javascript
export default {
  /* ... */

  styleResources: {
    sass: [
      './assets/sass/style-resources/_custom.sass',
      './assets/sass/style-resources/_bootstrap.sass',
    ],
  },

  css: [
    './assets/sass/style.sass',
  ],
}
```

> ⚠️ 注意
> 是在 `css` 匯入 `style.sass`，而不是在`styleResources` 匯入。
> 在 `styleResources` 匯入的話，將使得**每個 Vue 組件**都包含一大包的 Bootstrap 樣式，造成專案容量爆肥，編譯速度也會被嚴重拖慢。


## 🖖 在 Vue 組件內使用

🎉 大功告成！

如此便可自由自在地在 vue 組件內使用 BS 的 class 和所有 SCSS/SASS 變數。

```vue
<template>/* ... */</template>
<script>/* ... */</script>

<style lang="sass" scoped>
div
  @include media-breakpoint-down(sm)
    background: $primary
</style>
```
