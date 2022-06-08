<template>
  <KwContainer use-header-shadow>
    <template #header>
      <div class="hd">
        <h2>상품목록 {{ breakpoint }}</h2>
      </div>
    </template>
    <template #body>
      <KwRow>
        <KwColumn v-for="i in 32" :key="i" sm="12" md="6" cols="4">
          <div class="card-wrap">
            <button class="card">{{ i }}번째 상품</button>
          </div>
        </KwColumn>
      </KwRow>
    </template>
  </KwContainer>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator';
import { KwUi } from 'kw-vue-library';

@Component({
  name: 'PLP',
})
export default class PLP extends KwUi {}
</script>

<style lang="scss" scoped>
.hd {
  text-align: center;
  font-size: 32px;
  font-weight: bold;
  padding: 8px;
}

.card-wrap {
  padding: 8px;
}

.card {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px 20px 15px;
  border: 0.5px solid #e0e7ee;
  border-radius: 1.6rem;
  text-decoration: none;
  background-color: #fff;
  box-shadow: 0 1px 2px rgb(0 0 0 / 6%);
}
</style>
