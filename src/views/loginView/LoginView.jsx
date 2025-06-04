import HeaderApp from "../../components/HeaderApp/HeaderApp";
import "./LoginView.css";
import { OkButton } from "../../components/buttons/squareButton";
import { FooterRegister } from "../../components/FooterLine";

export function LoginView() {
    return (
        <>
            
            <HeaderApp />
            <div className="login-container">
                <h1 className="login-title" >Welcome Back</h1>
                <form className="login-form">
                    <div>
                        <input className="username-input" type="text" placeholder="Enter username" required />
                    </div>
                    <div>
                        <input className="password-input" type="password" placeholder="Enter password" required />
                        {/* <svg className="eye-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 5c-7.2 0-11.9 6.5-12 7s4.8 7 12 7 11.9-6.5 12-7-4.8-7-12-7zm0 10c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z" /></svg> */}
                    </div>
                    <div className="ok-button" >
                        <OkButton />
                    </div>
                </form>
            </div>
            <footer className="register-link"><FooterRegister /></footer>

        </>
    );
}