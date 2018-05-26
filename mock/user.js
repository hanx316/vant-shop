module.exports = {
  signIn(req, res) {
    res.json({
      "code": 0,
      "message": "登录成功",
      "userInfo": {
        "id": 4,
        "telephone": "13922222922",
        "member_name": "李四",
        "sex": 1,
        "address": "",
        "avatar": "",
        "access_token": "DB3HBUwmXh2yj5iOy6PBMwbCrs8aaOwp"
      }
    })
  },

  signUp(req, res) {
    res.json({
      code: 0,
      message: '注册成功'
    })
  },

  getOrderList(req, res) {
    res.json({
      "items": [{
        "id": 1,
        "order_sn": "23947112321",
        "product_id": 1,
        "goods_number": 1,
        "goods_price": "100.00",
        "member_id": 4,
        "add_time": "1970-05-09 22:25:11",
        "pay_time": "1970-05-09 22:25:11",
        "order_status": 2,
        "shipping_sn": "T5323432532",
        "order_price": "100.00",
        "address": "",
        "mobile": "",
        "consignee": "",
        "product_name": {
          "id": 1,
          "product_name": "电话充值卡", 
          "pic": ["https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1708265117,3619910444&fm=27&gp=0.jpg"],
          "detail": "充值卡限时抢购",
          "price": 130,
          "tags": "充值卡|话费|电信",
          "delflag": 0,
          "status": 1,
          "prepurchase": 0,
          "description": ""
        },
      "order_status_name": "已发货" 
      }],
      "_links": {
        "self": {
          "href": "http://www.api.com/order/shop-list?id=3&page=1&per-page=15"
        }
      },
      "pager": {
        "totalCount": 1,
        "pageCount": 1,
        "currentPage": 1,
        "perPage": 15
      },
      "code": 0,
      "message": "success"
    })
  },

  updateUserInfo(req, res) {
    res.json({
      code: 0,
      message: 'success'
    })
  },
}