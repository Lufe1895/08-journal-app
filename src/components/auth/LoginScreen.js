import { NavLink } from "react-router-dom"

export const LoginScreen = () => {
    return (
        <>
            <h3 className="auth__title">Login</h3>

            <form>
                <input
                    type="text"
                    placeholder="E-mail"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                />

                <input
                    type="password"
                    placeholder="Password"
                    name="email"
                    className="auth__input"
                />

                <button
                    className="btn btn-primary btn-block"
                    type="submit"
                >
                    Login
                </button>

                <div className="auth__social-networks">
                    <span>Login with social networks</span>
                </div>

                <div
                    className="google-btn mb-5"
                >
                    <div className="google-icon-wrapper">
                        <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                    </div>
                    <p className="btn-text">
                        <b>Sign in with google</b>
                    </p>
                </div>

                <NavLink 
                    to="/auth/register"
                    className="link"
                >
                    Create new account
                </NavLink>
            </form>
        </>
    )
}
