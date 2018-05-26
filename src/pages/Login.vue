<template>
  <div class="login-page">
    <img class="logo-img" src="@/assets/logo.png">
    <van-field v-model="mobile" class="login-field" type="number" label="手机号" placeholder="请输入手机号" icon="clear" @click-icon="clearMobile" required />
    <van-field v-model="password" class="login-field" type="password" label="密码" placeholder="请输入密码" icon="clear" @click-icon="clearPsw" required />
    <van-button class="login-btn" size="large" @click="login">立即登录</van-button>
    <van-button class="login-btn" size="large" @click="goRegister">立即注册</van-button>
  </div>
</template>

<script>
import { Button, Field, Toast } from 'vant'
import api from '@/api'
const { user } = api

export default {
  components: {
    [Button.name]: Button,
    [Field.name]: Field,
    [Toast.name]: Toast
  },

  data() {
    return {
      mobile: '',
      password: ''
    }
  },
  
  methods: {
    clearMobile() {
      this.mobile = ''
    },
    clearPsw() {
      this.password = ''
    },
    login() {
      if (!this.validate()) return
      user.signIn({
        telephone: this.mobile,
        password: this.password.trim()
      }).then(res => {
        res.code === 0 ? this.handleSuccess(res) : this.handleFail(res)
      })
    },
    goRegister() {
      this.$router.push('/register')
    },
    validate() {
      const mobileReg = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/
      if (!this.mobile) {
        this.showToast('fail', '请输入手机号')
        return false
      }
      if (!this.password) {
        this.showToast('fail', '请输入密码')
        return false
      }
      if (!mobileReg.test(this.mobile)) {
        this.showToast('fail', '手机号格式不正确')
        return false
      }
      return true
    },
    handleSuccess(res) {
      this.State.isLogin = true
      this.State.token = res.userInfo.access_token
      window.localStorage.setItem('X_USER_INFO', JSON.stringify(res.userInfo))
      this.$router.push('/home')
    },
    handleFail(res) {
      this.showToast('fail', res.message)
    },
    showToast(type, msg) {
      Toast[type]({
        duration: 1500,
        message: msg
      })
    }
  }
}
</script>

<style>
.login-page {
  padding: 30px;
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
  display: block;
  margin-bottom: 15px;
  background-color: #f44;
  color: #fff;
}
</style>