import Layout from './components/Layout'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import Shop from './pages/Shop'
import GoodPre from './pages/GoodPre'
import GoodBuy from './pages/GoodBuy'

export default [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: '/home',
        component: Home
      },
      {
        path: '/goodpre/:id',
        component: GoodPre
      },
      {
        path: '/shop',
        component: Shop
      },
      {
        path: '/goodbuy/:id',
        component: GoodBuy
      }
    ]
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/register',
    component: Register
  }
]