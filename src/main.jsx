import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './main.css'
import App from './App'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Page404 from './pages/Page404'

import defaultProfilePicture from '/src/assets/default-profile-picture.jpg'
import examplePicture from '/src/assets/example-picture.jpg'

const defaultUsers = [
  {
    name: 'Gérard',
    username: 'gerard',
    profilePicture: defaultProfilePicture,
    active: true,
    pictures: [
      examplePicture,
      examplePicture
    ],
    about: null,
    messages: [
      {
        type: 'received',
        content: 'Bonjour',
        time: 0.25,
        seen: false
      }
    ],
    typing: false
  },
  {
    name: 'Julien',
    username: 'julien',
    profilePicture: defaultProfilePicture,
    active: false,
    pictures: [
      examplePicture,
      examplePicture    ],
    about: null,
    messages: [
      {
        type: 'received',
        content: 'Bonjour',
        time: 0.8,
        seen: false
      }
    ],
    typing: false
  },
  {
    name: 'Loreleï',
    username: 'lorelei',
    profilePicture: defaultProfilePicture,
    active: true,
    pictures: [
      examplePicture,
      examplePicture
    ],
    about: 'Je m’appelle Loreleï.',
    messages: [
      {
        type: 'received',
        content: 'Bonjour. Je souhaiterais faire une séance avec vous. Pouvez-vous m’indiquer quels sont les tarifs ?',
        time: 2,
        seen: false
      }
    ],
    typing: false
  },
  {
    name: 'Karine',
    username: 'karine',
    profilePicture: defaultProfilePicture,
    active: false,
    pictures: [
      examplePicture,
      examplePicture
    ],
    about: null,
    messages: [
      {
        type: 'received',
        content: 'Merci pour cette consultation. À bientôt...',
        time: 49,
        seen: true
      },
      {
        type: 'emitted',
        content: 'Merci, au revoir',
        time: 48,
        seen: true
      }
    ],
    typing: false
  },
  {
    name: 'Antoine',
    username: 'antoine',
    profilePicture: defaultProfilePicture,
    active: false,
    pictures: [
      examplePicture,
      examplePicture
    ],
    about: null,
    messages: [
      {
        type: 'received',
        content: 'Bonjour, vous reste-t-il de la place ?',
        time: 171,
        seen: true
      },
      {
        type: 'emitted',
        content: 'Bonjour, je n’ai plus de place, désolée.',
        time: 170,
        seen: true
      },
      {
        type: 'received',
        content: 'D’accord, au revoir.',
        time: 169,
        seen: true
      },
      {
        type: 'emitted',
        content: 'Au revoir',
        time: 168,
        seen: true
      }
    ],
    typing: false
  },
  {
    name: 'JP',
    username: 'jean-paul',
    profilePicture: defaultProfilePicture,
    active: false,
    pictures: [
      examplePicture,
      examplePicture
    ],
    about: null,
    messages: [
      {
        type: 'received',
        content: 'Merci encore...',
        time: 173,
        seen: true
      }
    ],
    typing: false
  }
]

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App defaultUsers={defaultUsers}/>}>
          <Route path='/' element={<Home />}/>
          <Route path='/:username' element={<Profile defaultUsers={defaultUsers} />}/>
          <Route path='/404' element={<Page404 />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)