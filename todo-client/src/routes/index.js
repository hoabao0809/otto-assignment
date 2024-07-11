import { lazy } from 'react'
import { useRoutes } from 'react-router-dom'
import { Loadable } from './Loadable'
import MainLayout from '../layouts'

export function Routes() {
    return useRoutes([
        {
            path: '',
            element: <MainLayout />,
            children: [
                {
                    index: true,
                    element: <TodoPage />
                },
                {
                    path: 'weather',
                    element: <WeatherForecastPage />
                },
                {
                    path: 'contact',
                    element: <ContactPage />
                }
            ]
        }
    ])
}

const TodoPage = Loadable(lazy(() => import('../pages/todo')))
const WeatherForecastPage = Loadable(lazy(() => import('../pages/weather')))
const ContactPage = Loadable(lazy(() => import('../pages/contact')))