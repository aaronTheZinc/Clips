import React, {useReducer} from 'react'
import firebase from 'firebase/app';
import {FirebaseAuthProvider} from '@react-firebase/auth'
import {firebaseConfig} from './firebase.config'

export default Fireabse = ({children}) => {
    
    return (
        <FirebaseAuthProvider {...firebaseConfig} firebase={firebase}>
            {children}
        </FirebaseAuthProvider>
    )
    
}

