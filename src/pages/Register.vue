<template>
  <div class="register-page">
    <img class="logo-img" src="@/assets/logo.png">
    <van-field v-model="nickname" class="register-field" label="昵称" placeholder="您的昵称" icon="clear" @click-icon="clearNickname" required />
    <van-field v-model="mobile" class="register-field" type="number" label="手机号" placeholder="您的手机号" icon="clear" @click-icon="clearMobile" required />
    <van-field v-model="password" class="register-field" type="password" label="密码" placeholder="请输入密码" icon="clear" @click-icon="clearPsw" required />
    <van-field v-model="confirmPsw" class="register-field" type="password" label="确认密码" placeholder="请再次输入密码" icon="clear" @click-icon="clearConfirmPsw" required />
    <van-button class="register-btn" size="large" @click="register">立即注册</van-button>
  </div>
</template>

<script>
import { Button, Field } from 'vant'

export default {
  data() {
    return {
      nickname: '',
      mobile: '',
      password: '',
      confirmPsw: ''
    }
  },
  components: {
    [Button.name]: Button,
    [Field.name]: Field
  },
  methods: {
    clearNickname() {
      this.nickname = ''
    },
    clearMobile() {
      this.mobile = ''
    },
    clearPsw() {
      this.password = ''
    },
    clearConfirmPsw() {
      this.confirmPsw = ''
    },
    register() {
      this.$router.push('/home')
    }
  }
}
</script>

<style>
  .register-page {
    padding: 30px;
  }
  .logo-img {
    display: block;
    margin: 0 auto;
  }
  .register-field {
    margin-bottom: 15px;
    border: 1px solid #f44;
    border-radius: 4px;
  }
  .register-btn {
    display: block;
    background-color: #f44;
    color: #fff;
  }
</style>


