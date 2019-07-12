//-----------  Imports  -----------//

// import RxDB              from 'rxdb'
import firebase          from 'firebase/app'
import ReduxSagaFirebase from 'redux-saga-firebase'

import 'firebase/auth'
import 'firebase/firestore'

//-----------  RxDB  -----------//

// const localDB = await RxDB.create({
//   name: 'heroesdb',
//   adapter: 'websql',
// });

//-----------  Firebase  -----------//

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

export { RSF, firebase, firestore }