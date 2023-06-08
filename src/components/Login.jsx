import { GoogleAuthProvider, signInWithPopup, signInWithRedirect } from 'firebase/auth'
import React from 'react'
import { auth } from '../../firebase'
import { useStateValue } from '../../AuthContext'
import { actionTypes } from '../../reducer'

function Login() {
  const [state, dispatch] = useStateValue

  const handleSignIn = () => {
    const provider = new GoogleAuthProvider()
    // signInWithRedirect(auth, provider)
    signInWithPopup(auth, provider)
    .then((result) => {
      dispatch({
        type: actionTypes.SET_USER,
        user: result.user,
      })
      console.log(result)
    })
    .catch((error) => alert(error.message))
  }

  return (
    <div className='grid place-items-center mt-20 space-y-5'>
        <img 
            className='rounded-full object-contain'
            src='https://links.papareact.com/t4i'
            width={400}
            height={400}
            loading='lazy'
            
        />

        <h1 className='p-5 bg-blue-600 rounded-full text-white text-center cursor-pointer' onClick={handleSignIn}>Login to Facebook</h1>
    </div>
  )
}

export default Login