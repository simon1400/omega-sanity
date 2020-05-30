import React from 'react'
import {route} from 'part:@sanity/base/router'
import Basket from './Basket'
import BasketIcon from './BasketIcon'

export default {
  title: 'E-shop',
  name: 'basket',
  router: route('/:selectedBasket'),
  icon: BasketIcon,
  component: Basket
}
