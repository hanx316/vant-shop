import Layout from './components/Layout'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Treasure from './pages/Treasure'
import GoodPre from './pages/GoodPre'
import GoodBuy from './pages/GoodBuy'
import GoodTreasure from './pages/GoodTreasure'
import WinnerHistory from './pages/WinnerHistory'
import UserCenter from './pages/UserCenter'

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
        path: '/good-pre/:id',
        component: GoodPre
      },
      {
        path: '/shop',
        component: Shop
      },
      {
        path: '/good-buy/:id',
        component: GoodBuy
      },
      {
        path: '/treasure',
        component: Treasure
      },
      {
        path: '/good-treasure/:id',
        component: GoodTreasure
      },
      {
        path: '/winner-history/:id',
        component: WinnerHistory
      },
      {
        path: '/user-center',
        component: UserCenter
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