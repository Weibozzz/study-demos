import React from 'react'
import {connect} from 'react-redux'
import fetch from 'isomorphic-unfetch'
import {startClock,asyncTest, serverRenderClock,incrementCount,serverRenderIncrementCount} from '../store'
import Examples from '../components/examples'

class Index extends React.Component {
  static async getInitialProps ({ reduxStore, req}) {
    const isServer = !!req
    const blogData = await fetch('http://www.liuweibo.cn/getBlog?type=all&num=1&pageNum=10')
    const blogDataJson = await blogData.json()
    reduxStore.dispatch(serverRenderClock(isServer))
    reduxStore.dispatch(serverRenderIncrementCount(isServer,blogDataJson))

    return {}
  }

  componentDidMount () {
    const {dispatch} = this.props
    console.log(this.props)
     this.timer = startClock(dispatch)
    //this.timer2=incrementCount(dispatch,'http://www.liuweibo.cn/getBlog?type=all&num=1&pageNum=10')
    // console.log(asyncTest(dispatch))


  }

  componentWillUnmount () {
    clearInterval(this.timer)
    //clearInterval(this.timer2)
  }

  render () {
    return (
      <Examples />
    )
  }
}

export default connect()(Index)