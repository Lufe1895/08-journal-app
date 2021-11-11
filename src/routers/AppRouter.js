import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
  } from "react-router-dom";
import { LoginScreen } from "../components/auth/LoginScreen";
import { RegisterScreen } from "../components/auth/RegisterScreen";
import { JournalScreen } from "../components/journal/JournalScreen";

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route exact path="/auth">
                        <Route exact path="/auth/login" element={ <LoginScreen /> } />
                        <Route exact path="/auth/register" element={ <RegisterScreen /> } />
                        <Route path="/auth/*" element={ <Navigate to="/auth/login" /> } />
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
