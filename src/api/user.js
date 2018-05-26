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