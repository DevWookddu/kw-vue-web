<template>
  <div class="auth-index">
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'Main',
})
export default class Main extends Vue {}
</script>

<style lang="scss" scoped></style>
