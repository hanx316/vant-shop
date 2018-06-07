const Mockjs = require('mockjs')

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
    res.json(Mockjs.mock({
      "items|10": [{
        "id": '@natural(1, 10000)',
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
        "product": {
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
        "totalCount": 3,
        "pageCount": 3,
        "currentPage": 1,
        "perPage": 10
      },
      "code": 0,
      "message": "success"
    }))
  },

  updateUserInfo(req, res) {
    res.json({
      code: 0,
      message: 'success'
    })
  },

  getMessageList(req, res) {
    res.json(Mockjs.mock({
      'items|10': [{
        id: '@natural(1, 10000)',
        from_member_id: 0,
        to_member_id: 4,
        from: 4,
        read: 0,
        content: '您得预购订单已发货',
        addtime: '2018-05-13 11:45',
        data_id: 2,
        read_time: 0
      }],
      pager: {
        totalCount: 3,
        pageCount: 3,
        currentPage: 1,
        perPage: 10
      },
      code: 0,
      message: 'success'
    }))
  },

  getPrizeList(req, res) {
    res.json(Mockjs.mock({
      "items|10": [{
        "id": '@natural(1, 10000)',
        "order_sn": "23947112321",
        "prize_id": 1,
        "join_number": 1,
        "join_price": "100.00",
        "member_id": 4,
        "add_time": "1970-05-09 22:25:11",
        "pay_time": "1970-05-09 22:25:11",
        "order_status": 2,
        "telephone": "",
        "consignee": "",
        "prized": "",
        "prized_name": "已中奖",
        "order_status": 1,
        "order_status_name": "待支付",
        "productPrize": {
          "id": 3,
          "product_id": 1,
          "prize_sn": "201804270001",
          "start_time": "2018-04-18 09:02:00",
          "end_time": "2018-04-24 18:00:00",
          "total_price": "240.00",
          "total_number": 120,
          "join_price": 2,
          "upper_limit": 2,
          "finish": 0,
          "set_prize": 1,
          "join_number": 120,
          "prize_number": "100000118",
          "prize_time": "2018-04-22 13:49:36",
          "product": {
            "id": 1,
            "product_name": "电话充值卡",
            "pic": [
              "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/ u=1708265117,3619910444&fm=27&gp=0.jpg"
            ],
            "detail": "充值卡限时抢购",
            "price": 130,
            "tags": [
              "充值卡", "话费", "电信"
            ],
            "description": "",
            "index_pic": "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1708265117,3619910444&fm=27&gp=0.jpg"
          }
        },
        "out_time": "0",
        "out_time_int": 0
      }],
      "_links": {
        "self": {
          "href": "http://www.api.com/order/shop-list?id=3&page=1&per-page=15"
        }
      },
      "pager": {
        "totalCount": 3,
        "pageCount": 3,
        "currentPage": 1,
        "perPage": 10
      },
      "code": 0,
      "message": "success"
    }))
  }
}
