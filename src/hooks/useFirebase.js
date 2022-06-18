import { useState, useEffect } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import initializeAuthentication from '../firebase/firebase.init';

initializeAuthentication();
const useFirebase = () => {
    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [admin, setAdmin] = useState(false);

    const auth = getAuth();

    // create user using email password

    const createUsingEmailPassword = (email, password, name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setError('');
                const newUser = { email, displayName: name };
                setUser(newUser);
                // save user to the database
                saveUser(email, name, 'POST');
                // send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });
                history.replace('/');
            })
            .catch((error) => {
                setError(error.message);
                console.log(error);
            })
            .finally(() => setIsLoading(false));
    }


    // login with email password
    const signInUsingEmailandPass = (email, password, navigate, location) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const redirect = location?.state?.from || '/';
                navigate(redirect);
                setError('');
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }
    // sign in using google
    const signInUsingGoogle = (navigate, location) => {
        setIsLoading(true);
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                console.log(result);
                const user = result.user;
                saveUser(user.email, user.displayName, 'PUT');
                setError('');
                const redirect = location?.state?.from || '/';
                navigate(redirect);
            }).catch((error) => {
                setError(error.message);
            }).finally(() => setIsLoading(false));
    }

    // Get the currently signed-in user
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);

            } else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [auth])

    // for admin and normal user check
    useEffect(() => {
        fetch(`https://your-highway-travel.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])

    // signout
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false));
    }

    // save user to db
    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('https://your-highway-travel.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }

    return {
        user,
        admin,
        isLoading,
        error,
        setError,
        setUser,
        saveUser,
        setIsLoading,
        createUsingEmailPassword,
        signInUsingGoogle,
        signInUsingEmailandPass,
        logOut
    }
};

export default useFirebase;