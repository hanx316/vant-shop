<template>
  <div id="user-center-page">
    <div class="user-info">
      <div class="user-pic-box">
        <img src="static/goods.jpeg" class="user-pic">
      </div>
      <div class="user-detail-box">
        <div class="user-detail">用户昵称</div>
        <div class="user-detail user-id">用户id12121212</div>
      </div>
    </div>
    <van-cell title="我的订单" class="shadow" is-link />
    <van-cell-group>
      <van-cell icon="edit" title="资料修改" is-link />
      <van-cell icon="pending-evaluate" title="消息通知" class="shadow" is-link />
      <van-cell icon="like-o" title="分享" is-link />
      <van-cell icon="setting" title="设置" class="shadow" is-link />
    </van-cell-group>
  </div>
</template>

<script>
import { CellGroup, Cell } from 'vant'

export default {
  components: {
    [CellGroup.name]: CellGroup,
    [Cell.name]: Cell
  }
}
</script>

<style>
.user-info {
  display: flex;
  padding: 20px 15px;
  background-image: linear-gradient(to right bottom, #38f, #f44);
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
