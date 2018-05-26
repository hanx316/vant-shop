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
]