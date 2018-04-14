<template>
  <div class="login-page">
    <img class="logo-img" src="@/assets/logo.png">
    <van-field v-model="mobile" class="login-field" label="手机号" placeholder="请输入手机号" icon="clear" @click-icon="clearMobile" required />
    <van-field v-model="password" class="login-field" type="password" label="密码" placeholder="请输入密码" icon="clear" @click-icon="clearPsw" required />
    <van-button class="login-btn" size="large" @click="login">立即登录</van-button>
    <van-button class="login-btn" size="large" @click="goRegister">立即注册</van-button>
  </div>
</template>

<script>
import { Button, Field } from 'vant'

export default {
  data() {
    return {
      mobile: '',
      password: ''
    }
  },
  components: {
    [Button.name]: Button,
    [Field.name]: Field
  },
  methods: {
    clearMobile() {
      this.mobile = ''
    },
    clearPsw() {
      this.password = ''
    },
    login() {
      this.$router.push('/home')
    },
    goRegister() {
      this.$router.push('/register')
    }
  }
}
</script>

<style>
  .login-page {
    padding: 3rem;
  }
  .logo-img {
    display: block;
    margin: 0 auto;
  }
  .login-field {
    margin-bottom: 15px;
    border: 1px solid #f44;
    border-radius: 4px;
  }
  .login-btn {
    margin-bottom: 15px;
    background-color: #f44;
    color: #fff;
  }
</style>


