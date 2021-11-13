import { NavLink } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import validator from 'validator';
import { removeError, setError } from "../../actions/ui";
import { useDispatch, useSelector } from "react-redux";
import { startRegisterEmailPassword } from "../../actions/auth";

export const RegisterScreen = () => {
    const dispatch = useDispatch();
    const { msgError } = useSelector(state => state.ui);

    const [formValues, handleInputChange] = useForm({
        name: 'Luis Fernando',
        email: 'user@example.com',
        password: '123456',
        confirm: '123456',
    });

    const {
        name,
        email,
        password,
        confirm,
    } = formValues;

    const handleRegister = (e) => {
        e.preventDefault();
        if(isFormValid()) {
            dispatch(startRegisterEmailPassword(email, password, name));
        }
    }

    const isFormValid = () => {
        if(name.trim().length === 0) {
            dispatch(setError("Name is required"));
            return false;
        } else if(!validator.isEmail(email)) {
            dispatch(setError("Email is invalid"));
            return false;
        } else if (password !== confirm || password.length < 5 ) {
            dispatch(setError("Password is invalid"));
            return false;
        }
        dispatch(removeError());
        return true;
    }

    return (
        <>
            <h3 className="auth__title">Register</h3>

            <form onSubmit={ handleRegister }>
                {
                    msgError &&
                        <div className="auth__alert-error">
                            { msgError }
                        </div>
                }

                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="auth__input"
                    autoComplete="off"
                    value={ name }
                    onChange={ handleInputChange }
                />

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

                <input
                    type="password"
                    placeholder="Confirm"
                    name="confirm"
                    className="auth__input"
                    value={ confirm }
                    onChange={ handleInputChange }
                />

                <button
                    className="btn btn-primary btn-block mb-5"
                    type="submit"
                >
                    Register
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
