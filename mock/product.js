const Mockjs = require('mockjs')
let id = 2
let homeListReqTime = 1
let shopListReqTime = 1
let treasureListReqTime = 1

module.exports = {
  getHomeProductList(req, res) {
    let startId = homeListReqTime > 1 ? (homeListReqTime * 10 - 9) : homeListReqTime
    res.json(Mockjs.mock({
      "items|10": [{
        "id|+1": startId,
        "product_name": '@cword(3, 5)',
        "pic": [
          "/attachment/productPic/20180413/201804132308250000007.png"
        ],
        "detail": "<p><img src=\"http://www.pd.com//ueditor/upload/image/ 20180414/1523676252973135.png\" title=\"1523676252973135.png\" alt=\"logo1.png\"/>ssasdsa</p>",
        "price": 1000,
        "tags": [
          "砖头"
        ],
        "description": "",
        "index_pic": "/static/good1.jpg"
      }], 
      "pager": {
        "totalCount": 3,
        "pageCount": 1,
        "currentPage": 1,
        "perPage": 10
      },
      "code": 0, 
      "message": "success"
    }))
    homeListReqTime += 1
  },

  getHomeProductDetail(req, res) {
    id += 1
    res.json({
      "code": 0,
      "data": {
        "id": 2,
        "product_name": "诺基亚",
        "pic": [
          "/static/good1.jpg",
          "/static/good2.jpg",
          "/static/good3.jpg"
        ],
        "detail": "<p><img src=\"http://www.pd.com//ueditor/upload/image/ 20180414/1523676252973135.png\" title=\"1523676252973135.png\" alt=\"logo1.png\"/>ssasdsa</p>",
        "price": 1000,
        "tags": [
          "砖头"
        ],
        "description": "",
        "index_pic": "/attachment/productPic/20180413/201804132308250000007.png"
      },
      "recommend": [{
        "id": id,
        "product_name": "诺基亚",
        "pic": [
          "/static/good1.jpg",
          "/static/good2.jpg",
          "/static/good3.jpg"
        ],
        "detail": "<p><img src=\"http://www.pd.com//ueditor/upload/image/ 20180414/1523676252973135.png\" title=\"1523676252973135.png\" alt=\"logo1.png\"/>ssasdsa</p>",
        "price": 1000,
        "tags": [
          "砖头"
        ],
        "description": "",
        "index_pic": "/static/good1.jpg"
      }]
    })
  },

  getShopProductList(req, res) {
    let startId = shopListReqTime > 1 ? (shopListReqTime * 10 - 9) : shopListReqTime
    res.json(Mockjs.mock({
      "items|10": [{
        "id|+1": startId,
        "product_name": '@cword(3, 5)',
        "pic": [
          "/attachment/productPic/20180413/201804132308250000007.png"
        ],
        "detail": "<p><img src=\"http://www.pd.com//ueditor/upload/image/ 20180414/1523676252973135.png\" title=\"1523676252973135.png\" alt=\"logo1.png\"/>ssasdsa</p>",
        "price": 1000,
        "tags": [
          "砖头"
        ],
        "description": "",
        "index_pic": "/static/good1.jpg"
      }], 
      "pager": {
        "totalCount": 3,
        "pageCount": 1,
        "currentPage": 1,
        "perPage": 10
      },
      "code": 0, 
      "message": "success"
    }))
    shopListReqTime += 1
  },

  getShopProductDetail(req, res) {
    res.json({
      "code": 0,
      "data": {
        "id": 2,
        "product_name": "诺基亚",
        "pic": [
          "/static/good1.jpg",
          "/static/good2.jpg",
          "/static/good3.jpg",
          "/static/good4.jpg",
        ],
        "detail": "sdasdsa",
        "price": 1000,
        "tags": [
          "砖头"
        ],
        "description": "是大大大大大师",
        "index_pic": "/static/goods.jpeg"
      }
    })
  },

  getTreasureList(req, res) {
    let startId = treasureListReqTime > 1 ? (treasureListReqTime * 10 - 9) : treasureListReqTime
    res.json(Mockjs.mock({
      "items|10": [{
        "id|+1": startId,
        "product_id|+1": startId,
        "prize_sn": "201804270001",
        "start_time": "2018-04-18 09:02:00",
        "end_time": "2018-04-24 18:00:00",
        "total_price": "240.00",
        "total_number": 120,
        "join_price": 2,
        "upper_limit": 2,
        "finish": '@natural(0, 1)',
        "set_prize": 0,
        "join_number": 120,
        "prize_number": "100000118",
        "prize_time": "2018-04-22 13:49:36",
        "product": {
          "id|+1": startId,
          "product_name": "电话充值卡",
          "pic": [
            "/static/good1.jpg"
          ],
          "detail": "充值卡限时抢购",
          "price": 130,
          "tags": ["充值卡", "话费", "电信"],
          "description": "",
          "index_pic": "/static/goods.jpeg"
        },
        "out_time": "22天3时29分",
        "out_time_int": 55000 
      }],
      "_links": {
        "self": {
          "href": "http://www.api.com/prize/index/2?access-token=sAytZUwzXUnQOcXCJrRze5wIcaiuNlCO&page=1&per-page=15"
        }
      },
      "pager": {
        "totalCount": 3,
        "pageCount": 1,
        "currentPage": 1,
        "perPage": 10
      },
      "code": 0, 
      "message": "success"
    }))
    treasureListReqTime += 1
  }
}