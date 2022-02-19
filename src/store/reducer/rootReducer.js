import {combineReducers} from 'redux'
import {firebaseReducer} from 'react-redux-firebase'
import {firestoreReducer} from 'redux-firestore'
import noteReducer from './noteReducer'
import userDataReducer from './userData'

const rootReducer= combineReducers({
    userData:userDataReducer,
    note:noteReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer
})

export default rootReducer