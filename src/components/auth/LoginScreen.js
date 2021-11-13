import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import { startGoogleLogin, startLoginEmailPassword } from "../../actions/auth"
import { useForm } from "../../hooks/useForm"

export const LoginScreen = () => {
    const { loading } = useSelector(state => state.ui);

    const [formValues, handleInputChange] = useForm({
        email: 'user@example.com',
        password: '123456',
    })

    const dispatch = useDispatch();

    const { email, password } = formValues;

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(startLoginEmailPassword(email, password));
    }

    const handleGoogleLogin = () => {
        dispatch(startGoogleLogin());
    }

    return (
        <>
            <h3 className="auth__title">Login</h3>

            <form onSubmit={ handleLogin }>
                <input
                    type="text"
                    placeholder="E-mail"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                    value={ email }
                    onChange={ handleInputChange }
                />

                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    value={ password }
                    onChange={ handleInputChange }
                />

                <button
                    className="btn btn-primary btn-block"
                    type="submit"
                    disabled={ loading }
                >
                    Login
                </button>

                <div className="auth__social-networks">
                    <span>Login with social networks</span>
                </div>

                <div
                    className="google-btn mb-5"
                    onClick={ handleGoogleLogin }
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
