import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import { addUser, removeUser } from '../utils/userSlice';

const Body = () => {

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />
    },
    {
      path: "/browse",
      element: <Browse />
    }
  ])

  const dispatch = useDispatch()

  useEffect(() => {

    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid } = user.uid;
        console.log(uid)
        dispatch(addUser({ uid: uid }))
      } else {
        dispatch((removeUser))
      }
    });
  }, [])

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body
