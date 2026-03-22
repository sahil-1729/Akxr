import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
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

    // useNavigate ko yahape use nai kar sakte bc Body component me we are using Router, so the router things will be applied to the children of the Body tag
    // not on the body tag
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        const val = { uid: uid, email: email, displayName: displayName }
        // console.log("onAuthStateChange called ",val)

        dispatch(addUser(val))
      } else {
        console.log("remove user")
        dispatch((removeUser()))
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
