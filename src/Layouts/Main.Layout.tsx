import React, { Component } from 'react'
import { Outlet } from 'react-router-dom'
import Box from '@mui/material/Box'

interface IMainLayoutProps {}

class MainLayout extends Component<IMainLayoutProps> {
  render() {
    return (
      <Box>
        <Outlet />
      </Box>
    )
  }
}

export default MainLayout
