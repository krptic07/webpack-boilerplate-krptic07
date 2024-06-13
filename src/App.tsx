import React, { Component } from 'react'
import getAppRouter from './Configurations/getAppRouter'
import { RouterProvider } from 'react-router-dom'

type Props = {}

type State = {}

class App extends Component<Props, State> {
  router: any

  constructor(props) {
    super(props)
  }

  renderChildren = () => {
    if (!this.router) {
      this.router = getAppRouter()
    }
    const children = <RouterProvider router={this.router} />
    return children
  }

  render() {
    return <>{this.renderChildren()}</>
  }
}

export default App
