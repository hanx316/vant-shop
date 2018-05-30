<template>
  <div id="user-detail-page">
    <header-nav title="资料修改" />
    <van-cell-group>
      <van-field v-model="username" label="昵称" placeholder="请输入" />
      <van-cell>
        <van-uploader class="uploader" :after-read="onRead" accept="image/*" :max-size="1024 * 300" @oversize="onOverSize">
          <van-icon name="photograph" />
          <span class="uploader-title">上传头像</span>
        </van-uploader>
      </van-cell>
      <van-cell>
        性别：
        <van-radio-group class="gender-radios" v-model="gender">
          <van-radio class="gender-male" :name="1">男</van-radio>
          <van-radio :name="2">女</van-radio>
        </van-radio-group>
      </van-cell>
    </van-cell-group>
    <van-button class="submit-user-detail-btn" type="danger" size="large" @click="handleSubmit">提交</van-button>
  </div>
</template>

<script>
import {
  CellGroup,
  Cell,
  Field,
  Button,
  Uploader,
  RadioGroup,
  Radio,
  Toast
} from 'vant'
import HeaderNav from '@/components/HeaderNav'
import api from '@/api'
const { user } = api

export default {
  components: {
    [CellGroup.name]: CellGroup,
    [Cell.name]: Cell,
    [Field.name]: Field,
    [Button.name]: Button,
    [Uploader.name]: Uploader,
    [RadioGroup.name]: RadioGroup,
    [Radio.name]: Radio,
    [Toast.name]: Toast,
    HeaderNav
  },

  data() {
    return {
      username: '',
      gender: 0,
      file: null
    }
  },

  methods: {
    onRead(file) {
      console.log(file)
      this.file = file.file
      Toast.success({
        duration: 1500,
        message: '选择成功\n提交上传'
      })
    },
    resetData() {
      this.username = ''
      this.gender = 0
      this.file = null
    },
    handleSubmit() {
      let payload = new FormData()
      let submitable = false
      if (this.username) {
        payload.set('member_name', this.username)
        submitable = true
      }
      if (this.file) {
        payload.set('file', this.file)
        submitable = true
      }
      if (this.gender) {
        payload.set('sex', this.gender)
        submitable = true
      }
      if (submitable) {
        user.updateUserInfo(payload).then(res => {
          if (res.code === 0) {
            Toast.success({
              duration: 1500,
              message: '修改成功'
            })
            this.State.updateInfo(res.info)
            this.resetData()
          } else {
            Toast.fail({
              duration: 1500,
              message: res.message
            })
          }
        })
      }
    },
    onOverSize() {
      Toast.fail({
        duration: 1500,
        message: '头像大小不能超过300k'
      })
    },
  }
}
</script>

<style>
#user-detail-page {
  font-size: 16px;
}
.uploader {
  display: flex;
  align-items: center;
  font-size: 36px;
}
.uploader-title {
  margin-left: 20px;
  font-size: 16px;
}
.gender-radios {
  margin-left: 40px;
}
.gender-male {
  margin-bottom: 10px;
}
.submit-user-detail-btn {
  display: block;
  width: 80%;
  margin: 30px auto 0;
}
</style>
