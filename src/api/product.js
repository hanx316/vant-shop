import $ax from './_axios'

export function getHomeProductList(data) {
  return $ax.get('/index/index', { params: data }).then(res => {
    return res.data
  })
}

export function getHomeProductDetail(data) {
  return $ax.get('/index/detail', { params: data }).then(res => {
    return res.data
  })
}

export function getShopProductList(data) {
  return $ax.get('/product/index', { params: data }).then(res => {
    return res.data
  })
}

export function getShopProductDetail(data) {
  return $ax.get('/product/detail', { params: data }).then(res => {
    return res.data
  })
}

export function getTreasureList(data) {
  return $ax.get('/prize/index', { params: data }).then(res => {
    return res.data
  })
}

export function getTreasureDetail(data) {
  return $ax.get('/prize/detail', { params: data }).then(res => {
    return res.data
  })
}