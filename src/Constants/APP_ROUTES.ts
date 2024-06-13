import { NavigateOptions, To } from 'react-router-dom'

type AppRouteItem = {
  pathname: To
  options?: NavigateOptions
}

type AppRoute = {
  [key: string]: AppRouteItem
}

const APP_ROUTES: AppRoute = {
  HOME: {
    pathname: '/',
  } as AppRouteItem,
  ANY: {
    pathname: '*',
  } as AppRouteItem,
}

export default APP_ROUTES
