import React from 'react'
import { RouteObject, createBrowserRouter } from 'react-router-dom'
import APP_ROUTES from '../Constants/APP_ROUTES'
import MainLayout from '../Layouts/Main.Layout'
import { ErrorBoundary } from '../Components/ErrorBoundary/ErrorBoundary'

const NotFoundPage = React.lazy(() => import('../Pages/NotFound/NotFound.Page'))
const HomePage = React.lazy(() => import('../Pages/Home/Home.Page'))

const routerObj: RouteObject[] = [
  {
    element: <MainLayout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: APP_ROUTES.HOME.pathname,
        element: <HomePage />,
      } as RouteObject,
    ],
  },
  {
    path: APP_ROUTES.ANY.pathname,
    element: <NotFoundPage />,
  } as RouteObject,
]

const getAppRouter = () => createBrowserRouter(routerObj)

export default getAppRouter
