import React, {useState, useEffect} from 'react'
import useBeforeFirstRender from './hooks/willMount'
import {StateLink, withRouterHOC, IntentLink} from 'part:@sanity/base/router'
import Spinner from 'part:@sanity/components/loading/spinner'
import Preview from 'part:@sanity/base/preview'
import client from 'part:@sanity/base/client'
import schema from 'part:@sanity/base/schema'
import axios from 'axios'


import OrderPanel from './components/basketPanel.js'
import Menu from './components/basketMenu.js'

import {Link} from 'react-router-dom'

import photo from './assets/product-horizontal.jpg'

import styles from './Basket.css'

const Basket = ({router}) =>  {

  const [state, setState] = useState({
    selectedOption: null,
    selected: false,
    orders: [],
    currentOrder: []
  })

  const handleChange = selectedOption => {
    setState({ ...state, selectedOption });
  };

  const fetchDocument = orderId => {
    axios.post('https://omega.hardart.cz/.netlify/functions/getOrder', {email: 'all'}).then(res => {
      setState({
        ...state,
        currentOrder: res.data.data.filter(item => item._id === orderId)
      })
    })
  }

  useEffect(() => {
    // setState({ ...state, selectedOption: { value: 'new_wait', label: 'Nová - čeká na platbu' } });
    const userId = router.state.selectedBasket
    if (userId) {
      fetchDocument(userId)
    }
  }, [])

  useBeforeFirstRender(() => {
    const userId = router.state.selectedBasket
    if (userId) {
      fetchDocument(userId)
    }
  })

  useEffect(() => {
    setState({
      ...state,
      step: '',
      currentQuestion: {}
    })
    fetchDocument(router.state.selectedBasket)
  }, [router.state])

  const setOrders = orders => {
    setState({...state, orders})
  }

  return (
    <main>
      <Menu orders={state.orders} setOrders={setOrders}/>
      {router.state && <OrderPanel routeSelected={router.state.selectedBasket} />}
    </main>
  )
}




export default withRouterHOC(Basket)
