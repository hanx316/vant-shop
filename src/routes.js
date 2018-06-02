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
import Setting from './pages/Setting'
import OrderList from './pages/OrderList'
import UserDetail from './pages/UserDetail'
import MessageList from './pages/MessageList'
import Pay from './pages/Pay'

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
      },
      {
        path: '/setting',
        component: Setting
      },
      {
        path: '/order-list',
        component: OrderList
      },
      {
        path: '/user-detail',
        component: UserDetail
      },
      {
        path: '/messages',
        component: MessageList
      },
      {
        path: '/pay',
        component: Pay,
        props: route => {
          return {
            sn: route.query.sn,
            price: route.query.price,
            number: route.query.number
          }
        }
      },
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