import React, { Component } from 'react'
import getAppRouter from './Configurations/getAppRouter'
import { RouterProvider } from 'react-router-dom'
import { getTheme } from './Theme'
import { FONT_FAMILY, PALETTE } from './Constants/THEME'
import { Experimental_CssVarsProvider as CssVarsProvider, CssBaseline } from '@mui/material'

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
    const AppTheme = getTheme(PALETTE, FONT_FAMILY)
    return (
      <CssVarsProvider
        theme={AppTheme}
        defaultMode="dark"
        modeStorageKey="webpack-boilerplate-mode"
      >
        <CssBaseline enableColorScheme>{this.renderChildren()}</CssBaseline>
      </CssVarsProvider>
    )
  }
}

export default App
