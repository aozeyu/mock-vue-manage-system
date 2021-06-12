<template>
  <div class="about">
    <v-header></v-header>
    <v-tags></v-tags>
  </div>
</template>

<script>
import vHeader from '../components/Header.vue'
// views中的文件夹是页面级文件
import vTags from '../components/Tags.vue'
export default {
  components: {
    vHeader,
    vTags
  }
}
</script>
