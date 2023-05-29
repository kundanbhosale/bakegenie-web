import { FirebaseApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'

export const initAnalytics = (args: FirebaseApp) => {
  if (typeof window !== 'undefined') {
    return getAnalytics(args)
  } else {
    return null
  }
}
