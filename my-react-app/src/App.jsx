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

const { Provider } = ThemeContext

function App() {
  const router = createBrowserRouter([
    {
      path: "", element: <AppLayout />, children: [
        {
          index:true, element: <HomePage />
        },
        {
          path: "about",
          children: [{
            index:true, element: <AboutPage />
          },{path: "team", element:<h1>Team page</h1>
        }]
        }]
    }])


  return <RouterProvider router={router} />
}

export default App;
