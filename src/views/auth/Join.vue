<template>
  <div class="join-container">
    <div class="join-widget">
      <KwInputField v-model="id" placeholder="아이디" />
      <KwInputField v-model="name" placeholder="이름" />
      <KwInputField v-model="password" type="password" placeholder="비밀번호" />
      <KwDateTimePicker v-model="birth" placeholder="생년월일" />
      <KwButton block @click="join()">회원가입</KwButton>
      <KwButton block variant="secondary" @click="goLogin()">취소</KwButton>
    </div>
  </div>
</template>

<script lang="ts">
import { RouteNameEnum } from '@/types/enum/route/RouteNameEnum';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'Join',
})
export default class Join extends Vue {
  private id = '';
  private name = '';
  private password = '';
  private birth = [];

  private join() {
    if (!this.id) {
      this.$alert({
        message: '아이디를 입력해주세요.',
      });
      return;
    }

    if (!this.name) {
      this.$alert({
        message: '이름을 입력해주세요.',
      });
      return;
    }

    if (!this.password) {
      this.$alert({
        message: '비밀번호를 입력해주세요.',
      });
      return;
    }

    if (!this.birth[0]) {
      this.$alert({
        message: '생년월일을 선택해주세요.',
      });
      return;
    }
  }

  private goLogin() {
    this.$router.push({
      name: RouteNameEnum.로그인,
    });
  }
}
</script>

<style lang="scss" scoped>
.join-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
}

.join-widget {
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
