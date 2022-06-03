<template>
  <div class="auth-index">
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'AuthIndex',
})
export default class AuthIndex extends Vue {}
</script>

<style lang="scss" scoped>
.auth-index {
  width: 100%;
  height: 100%;
  background-image: url('@/assets/images/bg.jpg');
  background-size: cover;
}
</style>
