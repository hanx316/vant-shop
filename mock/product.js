const Mockjs = require('mockjs')
let id = 2
let homeListReqTime = 1
let shopListReqTime = 1

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
  }
}