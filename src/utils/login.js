import {
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth'
import {
  auth,
  facebookProvider,
  githubProvider,
  googleProvider,
} from '../firebase'

const selectProvider = (provider) => {
  switch (provider) {
    case 'github':
      return githubProvider
    case 'facebook':
      return facebookProvider
    case 'google':
      return googleProvider
    default:
      break
  }
}

export const loginWithProvider = async (provider) => {
  const { user } = await signInWithPopup(auth, selectProvider(provider))
  return JSON.parse(JSON.stringify(user))
}

export const loginWithEmail = async (payload) => {
  const { user } = await signInWithEmailAndPassword(
    auth,
    payload.email,
    payload.password
  )
  return JSON.parse(JSON.stringify(user))
}

export const registerWithEmail = async (payload) => {
  const { user } = await createUserWithEmailAndPassword(
    auth,
    payload.email,
    payload.password
  )
  return JSON.parse(JSON.stringify(user))
}
