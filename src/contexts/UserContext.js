import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { app } from '../firebase/firebaseConfig';

export const AuthContext = createContext(null);
const auth = getAuth(app);

export default function UserContext({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  console.log(user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log('Logged In!');
        setUser(user);
        setLoading(false);
      } else {
        console.log('Logged Out!');
        setLoading(false);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const createUserWithMailAndPass = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInWithMailAndPass = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUserProfile = (name, url) => {
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: url ? url : 'https://source.unsplash.com/random/People',
    })
      .then(() => {
        console.log('Profile Updated');
      })
      .catch((error) => {
        alert('Error Occured!', error);
      });
  };

  const signInWithProvider = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  const logout = () => {
    signOut(auth)
      .then(() => {
        console.log('Sign-out successful.');
        setUser(null);
      })
      .catch((error) => {
        console.log('An error happened.', error);
      });
  };

  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser)
      .then(() => {})
      .catch((err) => toast.error(err.message));
  };

  const value = {
    user,
    setUser,
    createUserWithMailAndPass,
    signInWithProvider,
    signInWithMailAndPass,
    loading,
    setLoading,
    verifyEmail,
    updateUserProfile,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
