import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import './App.css';

////////////////// Layout

import HomeLayout from './pages/HomeLayout';
import RootLayout from './pages/RootLayout';

////////////////// Pages

import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Missing from './pages/Missing';

////////////////// Components

import Notes from './components/Notes';
import Note from './components/Note';
import AddNote from './components/AddNote';
import EditNote from './components/EditNote';

////////////////// LINKS

import {
  URL_LOGIN,
  URL_SIGNUP,
  URL_ADD_NOTE,
  URL_EDIT_NOTE,
  URL_NOTE,
} from './utils/urlConstants.js';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />} errorElement={<Missing />}>
      {/* PUBLIC ROUTES */}
      <Route path={URL_LOGIN} element={<Login />} />
      <Route path={URL_SIGNUP} element={<SignUp />} />

      {/* We want to protect these routes */}
      <Route element={<HomeLayout />}>
        <Route index element={<Notes />} />
        <Route path={URL_NOTE + '/:id'} element={<Note />} />
        <Route path={URL_ADD_NOTE} element={<AddNote />} />
        <Route path={URL_EDIT_NOTE + '/:id'} element={<EditNote />} />
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
