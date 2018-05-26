import $ax from './_axios'

export function signIn(data) {
  return $ax.post('/site/login', data).then(res => {
    return res.data
  })
}

export function signUp(data) {
  return $ax.post('/site/register', data).then(res => {
    return res.data
  })
}

export function getOrderList(data) {
  return $ax.get('/order/shop-list', data).then(res => {
    return res.data
  })
}

export function updateUserInfo(data) {
  return $ax({
    url: '/members/update',
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    data
  }).then(res => {
    return res.data
  })
}