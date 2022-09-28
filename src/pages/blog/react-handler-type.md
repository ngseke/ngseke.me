---
title: 處理在 React 抽出 event handler 時常碰到的 TypeScript 參數型別問題
date: 2022/06/06
tags:
  - React
  - TypeScript
---


## TL;DR

如果某個 event handler 的事件參數，就只是單純拿來呼叫 `preventDefault()` 或 `stopPropagation()`，那麼無論它是什麼元素，只要將 `event` 指定成 **`SyntheticEvent`** 型別即可，寫起來也非常簡潔。

```tsx
import { SyntheticEvent } from 'react' // 記得 import

// ...

const handleSubmit = (event: SyntheticEvent) => {
  event.preventDefault()
}

return (
  <form onSubmit={handleSubmit}>
    {/* ... */}
  </form>
)
```

## 分析

考慮以下處理表單送出的程式碼：

```tsx
function App () {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        /* ... */
      }}
    >
      {/* ... */}
    </form>
  )
}
```

有時候會想把 inline event handler `onSubmit` 給抽出來，變成 `handleSubmit`。

但直接取出函式當然是行不通的，因為 TypeScript 無從推斷出參數 `event` 的型別。

```tsx
function App () {
  const handleSubmit = (event) => {
    //                  ^^^^^
    // Parameter 'event' implicitly has an 'any' type.ts(7006)
    event.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* ... */}
    </form>
  )
}
```

在某些情況，如果 handler 裡根本沒用到 `event` 這個參數，例如常用的 `onClick` 事件，那麼這時其實把參數直接移除就行。

```tsx
const handleClick = () => {
  console.log('Clicked')
}

return (
  <button onClick={handleClick}>
    Button
  </button>
)
```

然而在處理表單的 `onSubmit` 的場合時，經常會需要呼叫這個事件的 `preventDefault()`，用來阻止事件傳遞。

因此我們常常得 **「復刻」** 出這個事件的型別，而不得不寫出冗長難讀的型別，例如 `React.FormEventHandler<HTMLFormElement>`。

```tsx
function App () {
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* ... */}
    </form>
  )
}
```

> BTW 這一長串型別的定義，可以透過將游標放在 JSX 事件上得知。
> ![](https://i.imgur.com/kruZwRv.png)

## Synthetic Event

翻開 React 的[官方文件](https://zh-hant.reactjs.org/docs/events.html)可以得知，在 React 中的所有事件都是 **Synthetic Event**，而**非**原生的 Event。兩者的 API 雖然長得很相似，但實際上並不是同一個東西。

可以試著追溯 `onSubmit` 事件的型別來觀察這件事：

```tsx
// node_modules/@types/react/index.d.ts:1383
interface DOMAttributes<T> {
  // ...
  onSubmit?: FormEventHandler<T> | undefined;
}
```

再往上查看 `FormEventHandler` 和 `FormEvent`：

```tsx
// node_modules/@types/react/index.d.ts:1303
type FormEventHandler<T = Element> = EventHandler<FormEvent<T>>;

// node_modules/@types/react/index.d.ts:1195
interface FormEvent<T = Element> extends SyntheticEvent<T> {
}
```

由此可知 `onSubmit` 確實是一層層地從 `SyntheticEvent` extend 出來的。

可以再進一步查看 `SyntheticEvent` 型別的定義，即可看到 `preventDefault()` 方法：

```tsx
interface SyntheticEvent<T = Element, E = Event>
  extends BaseSyntheticEvent<E, EventTarget & T, EventTarget> {}

interface BaseSyntheticEvent<E = object, C = any, T = any> {
  nativeEvent: E;
  currentTarget: C;
  target: T;
  bubbles: boolean;
  cancelable: boolean;
  defaultPrevented: boolean;
  eventPhase: number;
  isTrusted: boolean;
  preventDefault(): void;
  isDefaultPrevented(): boolean;
  stopPropagation(): void;
  isPropagationStopped(): boolean;
  persist(): void;
  timeStamp: number;
  type: string;
}
```

## 結論

經過分析可以得知，其實以下任一種寫法都可以使 `handleSubmit` 相容 `onSubmit` 事件。

```tsx
const handleSubmit = (e: React.SyntheticEvent) => {
  e.preventDefault()
}
```

```tsx
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault()
}
```

```tsx
const handleSubmit: React.FormEventHandler = (e) => {
  e.preventDefault()
}
```
