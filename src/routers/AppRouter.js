import { onAuthStateChanged } from "@firebase/auth";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
  } from "react-router-dom";
import { login } from "../actions/auth";
import { startLoadingNotes } from "../actions/notes";
import { LoginScreen } from "../components/auth/LoginScreen";
import { RegisterScreen } from "../components/auth/RegisterScreen";
import { AuthContainer } from "../components/containers/AuthContainer";
import { JournalScreen } from "../components/journal/JournalScreen";
import { auth } from "../firebase/firebase-config";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
    const dispatch = useDispatch();

    const [checking, setChecking] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        onAuthStateChanged(auth, async(user) => {
            if(user?.uid) {
                dispatch(login(user.uid, user.displayName));
                setIsLoggedIn(true);

                dispatch(startLoadingNotes(user.uid));
            } else {
                setIsLoggedIn(false);
            }
            setChecking(false);
        });
    }, [dispatch, setChecking, setIsLoggedIn]);

    if(checking) {
        return (
            <h1>Espere...</h1>
        )
    }

    return (
        <Router>
            <div>
                <Routes>
                    <Route exact path="/auth/" element={ <PublicRoute isAuthenticated={ isLoggedIn } /> }>
                        <Route exact path="/auth/" element={ <AuthContainer /> }>
                            <Route exact path="login" element={ <LoginScreen /> } />
                            <Route exact path="register" element={ <RegisterScreen /> } />
                            <Route path="*" element={ <Navigate to="/auth/login" /> } />
                        </Route>
                    </Route>

                    <Route exact path="/" element={ <PrivateRoute isAuthenticated={ isLoggedIn} /> } >
                        <Route exact path="/" element={ <JournalScreen /> } />
                    </Route>

                    <Route path="*" element={ <Navigate to="/auth/login" /> } />
                </Routes>
            </div>
        </Router>
    )
}
