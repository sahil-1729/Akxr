import React, { useState, useRef } from 'react'
import Header from './Header'
import { checkValidateData } from '../utils/validate'
import { auth } from '../utils/firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {

    const [isSignIn, setIsSignIn] = useState(false)
    const [errorMsg, setErrorMsg] = useState(null)

    const email = useRef(null)
    const password = useRef(null)

    const toggleSignIn = () => {
        const val = !isSignIn
        setIsSignIn(val)
    }

    const handleButtonClick = () => {
        // one of the ways to get the inputs like the email and password is to make use of useState and all, but there are the other ways 
        // one of the ways being making use of useRef 
        const val = checkValidateData(email.current.value, password.current.value)
        setErrorMsg(val)

        if (val) {
            return
        }

        if (!isSignIn) {

            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log('signed up user ', user)
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMsg(errorCode, " - ", errorMessage)
                });

        } else {

            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log("sign in ", user)
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMsg(errorCode, " - ", errorMessage)
                });

        }

    }

    return (
        <div>
            <div className='absolute'>
                <img src='https://assets.nflxext.com/ffe/siteui/vlv3/eb110559-67e9-40ec-8f1c-4a45b9f9c9bb/web/IN-en-20260309-TRIFECTA-perspective_6796824d-3538-42c9-95e0-baabc0fdbadf_large.jpg' alt='image not found' />
            </div>
            <Header />
            <form className='absolute bg-black w-3/12 right-0 left-0 my-36 mx-auto p-12 text-white bg-opacity-70 rounded-md' onSubmit={(e) => {
                e.preventDefault()
            }
            }>
                <h1 className='text-3xl font-bold'>{isSignIn ? "Sign in" : "Sign up"}</h1>

                {!isSignIn ?
                    <input type='text' placeholder='Enter your name' className='p-4 my-4 w-full bg-[#151010] rounded-lg' />
                    :
                    ""}

                <input type='text' placeholder='Enter your email' className='p-4 my-4 w-full bg-[#151010] rounded-lg' ref={email} />

                <input type='text' placeholder='Enter your password' className='p-4 my-4 w-full bg-[#151010] rounded-lg' ref={password} />
                <p className="text-red-500 font-bold text-md">
                    {errorMsg}
                </p>
                <button className='p-4 my-6 w-full bg-red-700 rounded-lg' onClick={() => {
                    handleButtonClick()
                }}>{isSignIn ? "Sign in" : "Sign up"}</button>
                <p className='py-4 cursor-pointer' onClick={() => { toggleSignIn() }}>{isSignIn ? "New to Netflix? Sign up Now" : "Already registered? sign in now"}</p>
            </form>
        </div>
    )
}

export default Login
