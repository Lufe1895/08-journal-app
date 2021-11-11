import { Outlet } from "react-router"

export const AuthContainer = () => {
    return (
        <div className="auth__main">
            <div className="auth__box-container">
                <Outlet />
            </div>
        </div>
    )
}
