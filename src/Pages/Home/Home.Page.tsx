import React, { PureComponent } from 'react'
import Box from '@mui/material/Box'

interface IHomePageProps {}

class HomePage extends PureComponent<IHomePageProps> {
  render() {
    return (
      <Box>
        <h2>Hello Home Page</h2>
      </Box>
    )
  }
}

export default HomePage
