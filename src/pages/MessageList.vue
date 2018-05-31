<template>
  <div>
    <header-nav title="消息列表" />
    <van-list v-model="loading" :finished="finished" @load="onLoad" class="message-list">
      <van-panel class="message-panel" v-for="message in messages" :key="message.id" :title="`时间: ${message.addtime}`" :status="getMessageType(message.from)">
        <div class="message-content">{{ message.content }}</div>
      </van-panel>
    </van-list>
  </div>
</template>

<script>
import { Panel, List } from 'vant'
import HeaderNav from '@/components/HeaderNav'
import api from '@/api'
const { user } = api

export default {
  components: {
    HeaderNav,
    [Panel.name]: Panel,
    [List.name]: List
  },

  data() {
    return {
      messages: [],
      loading: false,
      finished: false,
      currentPage: 0,
      pageCount: 0
    }
  },

  methods: {
    onLoad() {
      user.getMessageList({
        page: this.currentPage + 1,
        pageSize: 10
      }).then(res => {
        if (res.code !== 0) return
        this.pageCount = res.pager.totalCount
        this.messages.push(...res.items)
        if (this.currentPage >= this.pageCount) {
          this.finished = true
        }
        this.loading = false
        this.currentPage += 1
      })
    },
    getMessageType(from) {
      switch(from) {
        case 1:
          return '中奖'
        case 2:
          return '中奖发货'
        case 3:
          return '商城发货'
        case 4:
          return '预购发货'
      }
    }
  }
}
</script>

<style>
.message-list {
  margin-bottom: 50px;
}
.message-panel {
  box-shadow: 3px 3px 3px #ccc;
  margin-bottom: 10px;
}
.message-content {
  padding: 15px;
  font-size: 16px;
}
</style>
