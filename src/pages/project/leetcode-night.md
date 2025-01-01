---
title: LeetCode Night
briefDescription: LeetCode 深色模式瀏覽器擴充功能
githubLink: https://github.com/ngseke/leetcode-night
demoLink: https://chromewebstore.google.com/detail/leetcode-night/aaokgipfeeeciodnffigjfiafledhcii
period: 2022/02
cover: /img/project-cover/leetcode-night.png
tags:
  - React
  - TypeScript
  - i18n
  - styled-components
  - UI/UX
---

> 更新：即使 LeetCode 在 2023 年中[推出官方深色模式](https://leetcode.com/discuss/general-discussion/2238519/share-your-feedback-to-the-new-question-detail-page)，但這個擴充功能持續與時俱進，讓各個附加功能支援新版 UI，並且維持針對舊版 UI 的深色模式。

![](../../assets/img/project/leetcode-night/banner.png)

長久以來都只有[中國版力扣](https://leetcode-cn.com/)支援完整的暗黑模式，而美國 LeetCode 主站則僅有在 Problem List、Profile 等少數頁面頁才支援，獨缺解題頁。

某夜在深夜刷題的我突發奇想，說不定我可以取用力扣的色票，直接複寫 LeetCode 的樣式來實現深色模式，於是便誕生了這個專案。

原本也僅僅是寫好玩，就把它扔上了 GitHub，甚至連名字都是隨意取的。後來發現其實[蠻多人](https://leetcode.com/discuss/general-discussion/544429/dark-mode)都在跟官方敲碗深色模式。因此後來我決定把它上架到商店，讓它變得更容易安裝。對我來說，這是個難得可以從頭到尾完整地開發擴充套件的機會。過程除了前端相關的開發、打包、上版號，還包含了 UI 和 Logo 設計 、截圖和宣傳橫幅的設計、發布送審套件等。

經過了半年左右時間，使用者人數終於突破了 1K，還獲得了藍勾 & 精選商品徽章，也算是達成了不值一提的小小成就。

![](../../assets/img/project/leetcode-night/store.png)

## 簡介

*LeetCode Night* 是 Google Chrome 的擴充功能，讓使用者在題目頁也可以套用深色模式，即使在夜晚刷題也不必擔心眼睛壞掉。

- TypeScript
- UI 組件基於 [Tocas UI v4](https://v4.tocas-ui.com/) 建構，搭配 styled-component 自定義樣式
- 使用 Axios 和 GraphQL 請求題目列表
- 使用 react-i18next 本地化
- 透過 Webpack css-loader 向頁面注入複寫用的 SASS 樣式

![Popup 視窗](../../assets/img/project/leetcode-night/2.png)


此外還有附加以下便利功能：

1. 反相圖片顏色，讓題目中多數白底的插圖，在深色模式中也不至於太突兀
2. 輸入 Question Number 來迅速跳轉至題目頁，此插件會將題目列表緩存至本機，無需等待 API 回應
3. 自動清空編輯器裡前一次送出過的程式碼，特別適合刷題狂人，避免不小心瞄到答案

隨著時間更新還有更多附加功能，詳細列表請至 <a href="https://chromewebstore.google.com/detail/leetcode-night/aaokgipfeeeciodnffigjfiafledhcii" target="_blank">Chrome Web Store</a> 查看

![啟用 LeetCode 深色模式](../../assets/img/project/leetcode-night/1.png)

## Demo


<a href="https://chromewebstore.google.com/detail/leetcode-night/aaokgipfeeeciodnffigjfiafledhcii" target="_blank">
  Chrome Web Store
</a>

<br/>
<br/>

<iframe src="https://ghbtns.com/github-btn.html?user=ngseke&repo=leetcode-night&type=star&count=false" frameborder="0" scrolling="0" width="150" height="20"></iframe>
