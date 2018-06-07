<template>
  <div id="user-center-page">
    <div class="user-info">
      <div class="user-pic-box">
        <img v-if="avatar" :src="avatar" class="user-pic">
        <span v-else class="user-avatar">{{ username | avatarName }}</span>
      </div>
      <div class="user-detail-box">
        <div class="user-detail">{{ username }}</div>
        <div class="user-detail user-id">用户ID: {{ userId }}</div>
      </div>
    </div>
    <van-cell-group>
      <van-cell icon="shopping-cart" title="我的订单" is-link @click="goOrderList" />
      <van-cell icon="receive-gift" title="夺宝记录" class="shadow" is-link @click="goPrizeList" />
    </van-cell-group>
    <van-cell-group>
      <van-cell icon="edit" title="资料修改" is-link @click="goUserDetail" />
      <van-cell icon="pending-evaluate" title="消息通知" class="shadow" is-link @click="goMessageList" />
      <!-- <van-cell icon="like-o" title="分享" is-link /> -->
      <van-cell icon="setting" title="设置" class="shadow" is-link @click="goSetting" />
    </van-cell-group>
  </div>
</template>

<script>
import { CellGroup, Cell } from 'vant'

export default {
  components: {
    [CellGroup.name]: CellGroup,
    [Cell.name]: Cell
  },

  data() {
    return {
      username: '',
      userId: 0,
      avatar: ''
    }
  },

  filters: {
    avatarName(username) {
      return username[0].toUpperCase()
    }
  },

  created() {
    !this.State.isLogin && this.$router.replace('/login')
    this.username = this.State.userInfo.member_name
    this.userId = this.State.userInfo.id
    this.avatar = this.State.userInfo.avatar
  },

  methods: {
    goSetting() {
      this.$router.push('/setting')
    },
    goOrderList() {
      this.$router.push('/order-list')
    },
    goUserDetail() {
      this.$router.push('/user-detail')
    },
    goMessageList() {
      this.$router.push('/messages')
    },
    goPrizeList() {
      this.$router.push('/prizes')
    }
  }
}
</script>

<style>
.user-info {
  display: flex;
  padding: 20px 15px;
  background: #38f;
  /* background-image: linear-gradient(to right bottom, #38f, #f44); */
}
.user-pic-box {
  width: 60px;
  height: 60px;
}
.user-pic {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.user-avatar {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: rgb(28, 180, 160);
  border-radius: 50%;
  font-size: 36px;
  color: #fff;
}
.user-detail-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 15px;
  font-size: 16px;
  color: #fff;
}
.user-id {
  font-size: 14px;
  color: #ccc;
}
.shadow {
  box-shadow: 3px 3px 3px #ccc;
  margin-bottom: 10px;
}
</style>
