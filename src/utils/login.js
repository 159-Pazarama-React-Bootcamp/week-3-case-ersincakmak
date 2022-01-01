import { signInWithPopup } from 'firebase/auth'
import {
  auth,
  facebookProvider,
  githubProvider,
  googleProvider,
} from '../firebase'

export const loginWithGoogle = async () => {
  try {
    const { user } = await signInWithPopup(auth, googleProvider)
    return JSON.parse(JSON.stringify(user))
  } catch (error) {
    return error.message
  }
}

export const loginWithGithub = async () => {
  try {
    const { user } = await signInWithPopup(auth, githubProvider)
    return JSON.parse(JSON.stringify(user))
  } catch (error) {
    return error.message
  }
}

export const loginWithFacebook = async () => {
  try {
    const { user } = await signInWithPopup(auth, facebookProvider)
    return JSON.parse(JSON.stringify(user))
  } catch (error) {
    return error.message
  }
}
