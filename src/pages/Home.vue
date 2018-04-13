<template>
  <div>
    <van-cell-group class="item-list">
      <van-cell is-link icon="points" title="我的积分" />
      <van-cell is-link icon="gift" title="我收到的礼物" />
    </van-cell-group>
  </div>
</template>

<script>
import { Cell, CellGroup, Icon } from 'vant';

export default {
  components: {
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Icon.name]: Icon
  }
};
</script>

<style>
.van-cell__title .van-icon {
  font-size: 18px;
}
</style>