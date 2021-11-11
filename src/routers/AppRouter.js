import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
  } from "react-router-dom";
import { LoginScreen } from "../components/auth/LoginScreen";
import { RegisterScreen } from "../components/auth/RegisterScreen";
import { AuthContainer } from "../components/containers/AuthContainer";
import { JournalScreen } from "../components/journal/JournalScreen";

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route exact path="/auth/" element={ <AuthContainer /> }>
                        <Route exact path="login" element={ <LoginScreen /> } />
                        <Route exact path="register" element={ <RegisterScreen /> } />
                        <Route path="*" element={ <Navigate to="/auth/login" /> } />
                    </Route>

                    <Route
                        exact path="/"
                        element={ <JournalScreen /> }
                    />

                    <Route path="*" element={ <Navigate to="/auth/login" /> } />
                </Routes>
            </div>
        </Router>
    )
}
