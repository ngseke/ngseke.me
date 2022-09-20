<script setup lang="ts">
import AboutMeSection from './AboutMeSection.vue'
import Emphasis from './Emphasis.vue'
</script>

<template>
  <AboutMeSection>
    <div class="flex flex-col space-y-2">
      <h2 class="dark:text-ngsek text-5xl font-bold md:text-6xl">
        Hi, I'm Sean. 👋
      </h2>
      <span class="font-mono text-stone-700 dark:text-stone-400">
        @ngseke
      </span>
    </div>

    <p>
      現職前端軟體工程師，追求撰寫無瑕程式碼是我的開發格言。
      <br>
      擁有超過三年的實務開發經驗，尤其專注於
      <Emphasis>TypeScript</Emphasis>、<Emphasis>Vue</Emphasis>
      和
      <Emphasis>React</Emphasis>。
      <br>
      熱衷探究各種前端領域的新鮮事，期待藉由不斷的知識分享來創造影響力。
    </p>
    <p>
      aka
      <span
        title="ㄏㄨㄤˊ ㄒㄧㄥˇ ㄑㄧㄠˊ"
        class="underline decoration-dotted"
      >黃省喬</span>
      / HUANG Xingqiao
    </p>
  </AboutMeSection>
</template>
