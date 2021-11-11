import { NavLink } from "react-router-dom"

export const RegisterScreen = () => {
    return (
        <>
            <h3 className="auth__title">Register</h3>

            <form>
                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="auth__input"
                    autoComplete="off"
                />

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

                <input
                    type="password"
                    placeholder="Confirm"
                    name="confirm"
                    className="auth__input"
                />

                <button
                    className="btn btn-primary btn-block mb-5"
                    type="submit"
                >
                    Login
                </button>

                <br />

                <NavLink
                    to="/auth/login"
                    className="link"
                >
                    Already registered?
                </NavLink>
            </form>
        </>
    )
}
