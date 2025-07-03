import Shop from './components/shop/shop.jsx'
import Home from './components/home/home.jsx'
import Checkout from './components/checkout/checkout.jsx'
import Header from './components/header/header.jsx'


const routes = [
  {
    path: "/",
    element: <Header />,
    children: [
      { path: "/", element: <Home /> },
      { path: "shop", element: <Shop /> },
      { path: "checkout", element: <Checkout /> },
    ],
  },
]

export default routes