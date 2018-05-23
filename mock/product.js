module.exports = {
  getHomeProductList(req, res) {
    res.json({
      "items": [{
        "id": 2,
        "product_name": "诺基亚",
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
        "totalCount": 1,
        "pageCount": 1,
        "currentPage": 1,
        "perPage": 15
      },
      "code": 0, 
      "message": "success"
    })
  },

  getHomeProductDetail(req, res) {
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
        "index_pic": "/static/good1.jpg"
      }]
    })
  }
}