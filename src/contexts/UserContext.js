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

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setLoading(false);
      } else {
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
      .then(() => {})
      .catch((error) => {
        toast.error(error.message.replace('Firebase: ', ''));
      });
  };

  const signInWithProvider = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  const logout = (code) => {
    signOut(auth)
      .then(() => {
        if (code) {
          toast.success('Logged out successfully');
        }
        setUser(null);
      })
      .catch((error) => {
        toast.error(error.message.replace('Firebase: ', ''));
      });
  };

  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser)
      .then(() => {})
      .catch((err) => toast.error(err.message.replace('Firebase: ', '')));
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
