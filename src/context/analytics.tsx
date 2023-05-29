'use client' // This is a client component 👈🏽

import { createContext, useState, useEffect, ReactNode } from 'react'
import { Analytics, getAnalytics } from 'firebase/analytics'
import { firebase_app } from '../firebase/config'

export const FirebaseContext = createContext<Analytics | null>(null)

export const FirebaseTrackingProvider = (props: { children: ReactNode }) => {
  // const router = useRouter();
  const [tracking, setTracking] = useState<Analytics | null>(null)

  // useEffect(() => {
  //   setTracking(firebase.analytics());

  //   const handleRouteChange = (url: string) => {
  //     if (!tracking) {
  //       return;
  //     }

  //     tracking.logEvent('page_view', {
  //       page_location: url,
  //       page_title: document?.title,
  //     });
  //   };

  //   router.events.on('routeChangeStart', handleRouteChange);

  //   return () => {
  //     router.events.off('routeChangeStart', handleRouteChange);
  //   };
  // }, [tracking]);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const ga = getAnalytics(firebase_app)
      setTracking(ga)
    }
  }, [])

  return (
    <FirebaseContext.Provider value={tracking}>
      {props.children}
    </FirebaseContext.Provider>
  )
}
