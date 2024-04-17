import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './main.css'
import App from './App'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Page404 from './pages/Page404'

import defaultProfilePicture from '/src/assets/default-profile-picture.jpg';
import examplePicture from '/src/assets/example-picture.jpg';

import julienProfilPicture from '/src/assets/julien-profile-picture.jpg';
import yseeProfilePicture from '/src/assets/ysee-profile-picture.jpg';
import yseePicture1 from '/src/assets/ysee-picture-1.jpg';
import yseePicture2 from '/src/assets/ysee-picture-2.jpg';
import yseePicture3 from '/src/assets/ysee-picture-3.jpg';
import karineProfilePicture from '/src/assets/karine-profile-picture.jpg';
import jpProfilePicture from '/src/assets/jp-profile-picture.jpg';

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
    profilePicture: julienProfilPicture,
    active: false,
    pictures: [
      examplePicture,
      examplePicture
    ],
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
    name: 'Ysée',
    username: 'ysee',
    profilePicture: yseeProfilePicture,
    active: true,
    pictures: [
      yseePicture1,
      yseePicture2,
      yseePicture3
    ],
    about: 'J’ai découvert la voyance il y a quelques temps et ça m’a beaucoup intriguée… Les arcanes de ce monde m’ont aidée à comprendre qui j’étais. Je suis depuis toujours une personne spirituelle, je cherche à comprendre la part de sacré de l’existence. Aux fêtes bondées de monde je préfère les conversations profondes sous un ciel étoilé. C’est au milieu de ma quête de spiritualité que j’ai découvert votre site.',
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
    profilePicture: karineProfilePicture,
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
    profilePicture: jpProfilePicture,
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