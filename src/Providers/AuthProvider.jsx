import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firbase/firbase.init";

export const AuthContext = createContext()
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loader, setLoader] = useState(true)

    const createUser = (email, password) =>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signupGoogle = () =>{
        setLoader(true)
        return signInWithPopup(auth, googleProvider)
    }
    const signUpGithub = () =>{
        setLoader(true)
        return signInWithPopup(auth, githubProvider)
    }
    const signInWithEandP = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () =>{
        setLoader(true)
        return signOut(auth)
    }
    useEffect( () =>{
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoader(false)
        })
        return() => {
            unSubscribe()
        }
    },[])



    const authInfo = {user, createUser, signupGoogle, signUpGithub, signInWithEandP, logOut, loader}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;