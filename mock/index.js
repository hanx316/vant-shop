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
  }
]