//-----------  Imports  -----------//

import firebase          from 'firebase/app'
import ReduxSagaFirebase from 'redux-saga-firebase'

import 'firebase/auth'
import 'firebase/firestore'

//-----------  Definitions  -----------//

firebase.initializeApp({
  apiKey      : process.env.firebaseApiKey,
  projectId   : process.env.firebaseProjectID,
  databaseURL : process.env.firebaseAuthDomain,
  authDomain  : process.env.firebaseDatabaseURL,
})

const firestore = firebase.firestore()

firestore.settings({})

const RSF = new ReduxSagaFirebase(firebase)

//-----------  Exports  -----------//

export { firebase, firestore }

export default RSF