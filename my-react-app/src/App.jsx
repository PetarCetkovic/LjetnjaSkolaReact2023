import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link, createBrowserRouter, RouterProvider } from 'react-router-dom'
import { RickAndMortyCharacters } from './components/RickAndMortyCharacters'
import { HomePage } from './pages/home'
import { AboutPage } from './pages/about'
import { Counter } from './components/reducerDemo'
import { RefDemo } from './components/refDemo'
import { ForwRefDemo } from './components/forwardRefDemo'
import { ThemeSwitcher } from './components/ThemeSwitcher'
import { ThemeContext } from './contexts/ThemeContext'
import { Toolbar } from './components/Toolbar'
import './App.css'
import { AppLayout } from './layout'
import { UsersPage } from './pages/users'

const { Provider } = ThemeContext

function App() {
  const router = createBrowserRouter([
    {
      path: "", element: <AppLayout />, children: [
        {
          index:true, element: <HomePage />, exact:true
        },
        {
          path: "about",
          children: [{
            index:true, element: <AboutPage />, exact:true,
          },{path: "team", element:<h1>Team page</h1>
        }]
        },
      
        {path:"users/:id", element: <UsersPage/>},
        {path:"*", element:<h1>404 Not found</h1>}]
    }])


  return <RouterProvider router={router} />
}

export default App;
