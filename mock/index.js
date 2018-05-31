module.exports = [
  {
    route: '/index/index',
    method: 'get',
    handler: require('./product').getHomeProductList
  },
  {
    route: '/index/detail',
    method: 'get',
    handler: require('./product').getHomeProductDetail
  },
  {
    route: '/product/index',
    method: 'get',
    handler: require('./product').getShopProductList
  },
  {
    route: '/product/detail',
    method: 'get',
    handler: require('./product').getShopProductDetail
  },
  {
    route: '/prize/index',
    method: 'get',
    handler: require('./product').getTreasureList
  },
  {
    route: '/prize/detail',
    method: 'get',
    handler: require('./product').getTreasureDetail
  },
  {
    route: '/site/login',
    method: 'post',
    handler: require('./user').signIn
  },
  {
    route: '/site/register',
    method: 'post',
    handler: require('./user').signUp
  },
  {
    route: '/prize/history',
    method: 'get',
    handler: require('./product').getTreasureHistory
  },
  {
    route: '/order/pre-buy',
    method: 'post',
    handler: require('./product').orderHomeProduct
  },
  {
    route: '/order/shop-list',
    method: 'get',
    handler: require('./user').getOrderList
  },
  {
    route: '/members/update',
    method: 'post',
    handler: require('./user').updateUserInfo
  },
  {
    route: '/messages/index',
    method: 'get',
    handler: require('./user').getMessageList
  },
]