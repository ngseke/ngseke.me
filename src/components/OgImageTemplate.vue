<script setup lang="ts">
import { VITE_AUTHOR } from '../modules/constants'
import { getPostFormattedDate } from '../modules/date'
import WrapBalancer from 'vue-wrap-balancer'

const props = defineProps<{
  title?: string,
  description?: string,
  date?: string,
  tags?: string[],
  img?: string,
}>()

const formattedDate = computed(() => getPostFormattedDate(props.date))
const author = VITE_AUTHOR
</script>

<template>
  <Teleport to="body">
    <div class="absolute left-0 top-0 z-50 flex h-full max-h-[600px] w-full max-w-[1200px] border-b-[1rem] border-ngsek bg-black-900 px-20 pb-14 pt-10">
      <div class="flex h-full w-full flex-col flex-wrap font-medium text-white">
        <div class="flex flex-1 flex-wrap items-center">
          <div class="flex" :class="img ? 'w-3/5' : 'w-4/5'">
            <div class="flex h-full grow flex-col justify-center gap-3">
              <div v-if="date" class=" text-4xl text-black-400">
                {{ formattedDate }}
              </div>
              <h1 class="text-6xl font-bold leading-tight tracking-[1px]">
                <WrapBalancer :ratio="0.5">
                  {{ title }}
                </WrapBalancer>
              </h1>
              <p v-if="description" class="text-2xl tracking-wider">
                {{ description }}
              </p>
              <div v-if="tags?.length" class="mt-5">
                <ProjectTags :list="tags" size="lg" />
              </div>
            </div>
          </div>
          <div v-if="img" class="flex flex-1 justify-end">
            <CardProjectImageGlow
              :img="img"
              size-class-name="h-[12.1rem] w-[17.6rem]"
            />
          </div>
        </div>
        <div class="flex w-full justify-between">
          <div class="flex items-center gap-3 text-4xl text-black-400">
            By <span>{{ author }} </span>
          </div>
          <div>
            <div class="neon inline-block rotate-[-4deg] font-pacifico text-4xl">
              ngseke
            </div>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style lang="scss" scoped>
$ngsek: #ffd019;
$ngsek-light: lighten(#ffd019, 50%);

.neon {
  color: $ngsek-light;
  text-shadow:
    0 0 6px rgba($ngsek-light, 0.92),
    0 0 30px rgba($ngsek-light, 0.34),
    0 0 12px rgba($ngsek, 0.52),
    0 0 21px rgba($ngsek, 0.5),
    0 0 34px rgba($ngsek, 0.7)
}
</style>
