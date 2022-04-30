import { Component } from 'react'
import './app.scss'

class App extends Component {


  componentDidMount () {
    console.log('---componentDidMount---');
  }

  componentDidShow () {
    console.log('---componentDidShow---');
  }

  componentDidHide () {
    console.log('---componentDidHide---')
  }

  componentDidCatchError () {
    console.log('---componentDidCatchError')
  }

  onLaunch () {
    console.log('--- onLaunch ---)');
  }

  // this.props.children 是将要会渲染的页面
  render () {
    return this.props.children
  }
}

export default App
