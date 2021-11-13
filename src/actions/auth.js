import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "@firebase/auth";
import Swal from "sweetalert2";
import { auth, googleAuthProvider } from "../firebase/firebase-config";
import { types } from "../types/types"
import { finishLoading, startLoading } from "./ui";

export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {
        dispatch(startLoading());
        signInWithEmailAndPassword(auth, email, password).then(({ user }) => {
            dispatch(login(user.uid, user.displayName));
            dispatch(finishLoading());
        }).catch(e => {
            Swal.fire('Error', e.message, 'error');
            dispatch(finishLoading());
        });
    };
}

export const startRegisterEmailPassword = (email, password, name) => {
    return (dispatch) => {
        createUserWithEmailAndPassword(auth, email, password).then(async({ user }) => {
            await updateProfile(user, { displayName: name });
            dispatch(login(user.uid, user.displayName));
        }).catch(e => {
            Swal.fire('Error', e.message, 'error');
        });
    }
}

export const startGoogleLogin = () => {
    return (dispatch) => {
        signInWithPopup(auth, googleAuthProvider).then(({ user }) => {
            dispatch(login(user.uid, user.displayName));
        });
    }
}

export const login = (uid, displayName) => {
    return {
        type: types.login,
        payload: {
            uid,
            displayName,
        }
    }
}

export const startLogOut = () => {
    return async(dispatch) => {
        await signOut(auth);
        dispatch(logout());
    }
}

export const logout = () => ({
    type: types.logout,
})