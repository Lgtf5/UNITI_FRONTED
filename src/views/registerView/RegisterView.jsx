import { HeaderApp } from '../../components/headerApp/HeaderApp'
import './RegisterView.css'
import { OkButton } from '../../components/buttons/SquareButton'
import { FooterLogin } from '../../components/footerApp/FooterLine'

export function RegisterView() {
    return (
        <>
            {/* <div className="register-view"> */}
            <HeaderApp />
            <div className="register-container">
                <h1 className="register-title" >Welcome Onboard</h1>
                <form className="register-form">
                    <div>
                        <input className="username-input" type="text" placeholder="Enter username" required />
                    </div>
                    <div>
                        <input className="password-input" type="password" placeholder="Enter password" required />
                        {/* <svg className="eye-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 5c-7.2 0-11.9 6.5-12 7s4.8 7 12 7 11.9-6.5 12-7-4.8-7-12-7zm0 10c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z" /></svg> */}
                    </div>
                    <div>
                        <input className="confirm-input" type="password" placeholder="Confirm password" required />
                        {/* <svg className="eye-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 5c-7.2 0-11.9 6.5-12 7s4.8 7 12 7 11.9-6.5 12-7-4.8-7-12-7zm0 10c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z" /></svg> */}
                    </div>

                    <div className="ok-button" >
                        <Link to="/login"><OkButton /></Link>
                    </div>
                </form>
            </div>
            <footer className="login-link"><FooterLogin /></footer>

        </>
    );
}
