import { firebase_app } from '../config'
import {
  getFirestore,
  doc,
  setDoc,
  serverTimestamp,
  FirestoreError,
} from 'firebase/firestore'

const db = getFirestore(firebase_app)

export default async function addEmail(email: string) {
  let result = null
  let error = null

  try {
    if (!email) throw Error('Invalid / Empty Email!')

    result = await setDoc(
      doc(db, 'waitlist', email),
      { timestamp: serverTimestamp() },
      {
        merge: true,
      }
    )
  } catch (e) {
    error = e as FirestoreError
  }

  return { result, error }
}
