<script>

import {defineComponent} from "vue";
import ToobarContent from "./public/components/toobar-content.component.vue";

export default defineComponent({
  components: {ToobarContent}
})
</script>

<template>
  <toobar-content></toobar-content>
  <main>
    <router-view></router-view>
  </main>
</template>
