import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.confige";

export const AuthContext = createContext(null)

const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)



    // sign Up
    
    const createUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password )
    }

    // Login

    const signIn = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // logOut
    
    const  logOut = ()=>{
        setLoading(true)
        signOut(auth)
    }

    const updateUserProfile =(name, photo)=>{
      return  updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
          })
    }

    // onAuthStateChanged
    useEffect(()=>{

       const unsubscribe =  onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
            console.log('current user ', currentUser)
            setLoading(false)
        })
        
        return ()=>{
            unsubscribe()
        }

    },[])
    
    const authInfo ={
        user,
        loading,
        createUser,
        signIn,
        logOut,
        updateUserProfile
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;