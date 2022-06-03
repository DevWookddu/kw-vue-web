<template>
  <div class="login-container">
    <div class="login-widget">
      <KwInputField v-model="id" placeholder="아이디" />
      <KwInputField v-model="password" type="password" placeholder="비밀번호" />
      <KwButton block @click="onClickLogin">로그인</KwButton>
      <KwButton block variant="secondary" @click="goJoin">회원가입</KwButton>
    </div>
  </div>
</template>

<script lang="ts">
import { RouteNameEnum } from '@/types/enum/route/RouteNameEnum';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'LoginView',
})
export default class LoginView extends Vue {
  private id = '';
  private password = '';

  private onClickLogin() {
    if (this.id !== 'test' || this.password !== 'test') {
      this.$alert({
        message: '아이디/비밀번호를 확인해주세요',
      });
      return;
    }

    this.$toast('로그인', 3000);
  }

  private goJoin() {
    this.$router.push({
      name: RouteNameEnum.회원가입,
    });
  }
}
</script>

<style lang="scss" scoped>
.login-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
}

.login-widget {
  border-radius: 8px;
  width: 420px;
  min-width: 280px;
  padding: 20px;
  background-color: white;
  box-shadow: 0px 10px 20px 0px rgba(50, 50, 50, 0.52);

  > * + * {
    margin-top: 12px;
  }
}
</style>
