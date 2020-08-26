<template>
  <div>
    <br />
    <md-card class="md-layout-item md-size-50 md-small-size-100">
      <md-card-header>
        <div class="md-title">Home page</div>
      </md-card-header>
      <md-card-content>
        <vue-markdown>## Presentation of the concept</vue-markdown>
      </md-card-content>
    </md-card>
  </div>
</template>
<style>
</style>
<script>
import VueMarkdown from 'vue-markdown';
export default {
  name: 'Home',
  components: {
    'vue-markdown': VueMarkdown
  },
  data: () => ({
    load: 'test'
  })
}
</script>
