<template>
  <div class="sales-index">
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'SalesIndex',
})
export default class SalesIndex extends Vue {}
</script>

<style lang="scss" scoped></style>
