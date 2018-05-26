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
      nickname: '',
      mobile: '',
      password: '',
      confirmPsw: ''
    }
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
      if (!this.validate()) return
      user.signUp({
        member_name: this.nickname,
        telephone: this.mobile,
        passowrd: this.password.trim(),
        repassword: this.confirmPsw.trim()
      }).then(res => {
        res.code === 0? this.handleSuccess(res) : this.handleFail(res)
      })
    },
    validate() {
      const mobileReg = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/
      if (!this.nickname) {
        this.showToast('fail', '请输入昵称')
        return false
      }
      if (!this.mobile) {
        this.showToast('fail', '请输入手机号')
        return false
      }
      if (!mobileReg.test(this.mobile)) {
        this.showToast('fail', '手机号格式不正确')
        return false
      }
      if (!this.password) {
        this.showToast('fail', '请输入密码')
        return false
      }
      if (!this.confirmPsw) {
        this.showToast('fail', '请输入确认密码')
        return false
      }
      if (this.password.trim() !== this.confirmPsw.trim()) {
        this.showToast('fail', '两次输入密码不一致')
        return false
      }
      return true
    },
    handleSuccess(res) {
      this.$router.push('/login')
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
