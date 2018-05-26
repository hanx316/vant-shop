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
  }
]