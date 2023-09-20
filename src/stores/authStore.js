import { writable } from "svelte/store";
import { auth } from "../lib/firebase/firebase.client";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword,
    signOut, sendPasswordResetEmail, updateEmail, updatePassword, sendEmailVerification } from "firebase/auth";

export const authStore = writable({
    isLoading: true,
    currentUser: null
});

export const authHandlers = {
    login: async (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                authStore.currentUser = userCredential.user;
                window.location.href = '/dashboard';
                // ...
            })
            .catch((error) => {
                if(error.code === 'auth/wrong-password') {
                    alert('Wrong password');
                }
                else if(error.code === 'auth/user-not-found') {
                    alert('User not found');
                }
                else if(error.code === 'auth/invalid-email') {
                    alert('Invalid email');
                }
                else if(error.code === 'auth/invalid-login-credentials') {
                    alert('Wrong password');
                }
                else if(error.code === 'auth/user-disabled') {
                    alert('User disabled');
                }
                else if(error.code === 'auth/too-many-requests') {
                    alert('Too many requests');
                }
                else if(error.code === 'auth/operation-not-allowed') {
                    alert('Operation not allowed');
                }
                else {
                    alert(error);
                }
            });
    },
    signup: async (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                authStore.currentUser = userCredential.user;
                window.location.href = '/dashboard';
                // ...
            })
            .catch((error) => {
                if(error.code === 'auth/email-already-in-use') {
                    alert('Email already in use');
                }
                else if(error.code === 'auth/weak-password') {
                    alert('Password must be at least 6 characters');
                }
                else if(error.code === 'auth/invalid-email') {
                    alert('Invalid email');
                }
                else {
                    alert(error);
                }
            });
    },
    logout: async () => {
        signOut(auth)
            .then(() => {
                authStore.currentUser = null;
            })
            .catch((error) => {
                alert(error);
            });
    },
    resetPassword: async (email) => {
        await sendPasswordResetEmail(auth, email);
    },
    verifyEmail: async (email) => {
        await sendEmailVerification(email);
    }
}