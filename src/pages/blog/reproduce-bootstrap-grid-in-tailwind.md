---
title: 用 Tailwind 重現 Bootstrap 的 Grid System
date: 2022/08/22
tags:
  - Tailwind
  - Bootstrap
---

> 此筆記提到的 Grid 指的是元件庫 [Bootstrap](https://getbootstrap.com/) 所提供的的網格系統（Grid system），和 CSS 的 `display: grid` 屬性無關。

> 轉換後的 class 屬性有稍微簡化，但我想足以覆蓋大部分的使用場景了。


## Bootstrap 和 Tailwind 的 Class Name 對應

### `row`

→ `flex flex-wrap`

### `col`

→ `flex-1`

備註：
```sass
.flex-1
  flex: 1 // 即 `1 1 0%`
```

### `col-auto`

→ `flex-none`

備註：

```sass
.flex-none
  flex: none // 即 `0 0 auto`
```

### `col-*`

- `col-1` → `flex-none w-1/12`
- `col-3` → `flex-none w-1/4`
- `col-4` → `flex-none w-1/3`
- `col-6` → `flex-none w-1/2`
- `col-12` → `flex-none w-full`

有需要的話，你甚至可以在 Tailwind 透過 [Arbitrary Value](https://tailwindcss.com/docs/width#arbitrary-values) 的特性來指定任意寬度，例如：<br>
`w-[5rem]`、`w-[50px]`。

### `w-100`

→ `w-full`

用於強迫換行。

## 響應式（RWD）

> By default, Tailwind uses a **mobile first** breakpoint system, ...
> <br>-- [Breakpoints · Bootstrap v5.2](https://tailwindcss.com/docs/responsive-design#mobile-first)

> **Mobile first**, responsive design is the goal. ...
> <br>-- [Responsive Design - Tailwind CSS](https://getbootstrap.com/docs/5.2/layout/breakpoints/#core-concepts)

Tailwind 和 Bootstrap 都同樣遵循著**行動裝置優先**的設計哲學，寬度由小到大。也就是說，當什麼斷點都沒加的時候，樣式會套用到所有寬度的裝置（`>= 0px`），而加上 `sm` 時會套用在  `>= 640px`，再加上 `md` 時會套用在  `>= 768px`，依此類推。

值得注意的是，它們兩者斷點的預設值稍微不太一樣，例如 `sm` 在 Tailwind 是 `640px`，在 Bootstrap 則是 `576px`。不過這完全不成問題，因為你可以在 `tailwind.config.js` 輕鬆的[自定義](https://tailwindcss.com/docs/responsive-design#customizing-breakpoints)，甚至自創斷點名稱。

轉換範例如下：

- `col-12` → `flex-none w-full`
- `col-md-6` → `flex-none md:w-1/2`
- `col-3 col-sm-auto col-md col-lg-12` →<br>
  `flex-1 w-1/4 sm:flex-none sm:w-auto md:flex-1 lg:flex-none lg:w-full`


## 間距（Gutter）

在預設情況下，column 之間是沒有間距的。這相當於是套用了 Bootstrap 4 的 `row no-gutters`，或是 Bootstrap 5 的 `row g-0`。

在 Tailwind 的場合想要實現 gutter，必須另外做以下兩點：

1. 為 row 元素加上**負值**的水平 margin，例如 `-mx-4`。
2. 為每一個 column 元素，加上與 row 元素相對應的水平 padding，例如 `px-4`。

> row 的負值 margin 是用來抵銷在最左或最右邊緣的 column 的 padding。

## 範例

<div class="container font-mono text-lg text-white">
  <div class="-mx-4 flex flex-wrap">
    <div class="w-full flex-none bg-red-500 px-4">
      <div class="border-2 border-dotted border-black/50 bg-black/20">
        col-12
      </div>
    </div>
    <div class="w-1/2 flex-none bg-orange-500 px-4">
      <div class="border-2 border-dotted border-black/50 bg-black/20">
        col-6
      </div>
    </div>
    <div class="w-1/4 flex-none bg-amber-500 px-4">
      <div class="border-2 border-dotted border-black/50 bg-black/20">
        col-3
      </div>
    </div>
    <div class="w-full" />
    <div class="flex-none bg-lime-500 px-4">
      <div class="border-2 border-dotted border-black/50 bg-black/20">
        col
      </div>
    </div>
    <div class="flex-1 bg-sky-500 px-4">
      <div class="border-2 border-dotted border-black/50 bg-black/20">
        col-auto
      </div>
    </div>
  </div>
</div>

```html
<div class="-mx-4 flex flex-wrap">
  <div class="w-full flex-none px-4">
    col-12
  </div>
  <div class="w-1/2 flex-none px-4">
    col-6
  </div>
  <div class="w-1/4 flex-none px-4">
    col-3
  </div>
  <div class="w-full"><!-- 換行用 --></div>
  <div class="flex-none px-4">
    col
  </div>
  <div class="flex-1 px-4">
    col-auto
  </div>
</div>
```

## 延伸閱讀

[`flex-basis` 和 `width` 的差別是什麼？](https://stackoverflow.com/questions/34352140/what-are-the-differences-between-flex-basis-and-width)
