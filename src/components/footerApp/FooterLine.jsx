import { Link } from "react-router"

function FooterLine({text, mode}) {

    return (
        <div>
            <section className='footer-container'>
                <p className='footer-line'>{text}
                    <a className='footer-ico'>{mode}</a>
                </p>
            </section>
        </div>
    )
}

export  const FooterRegister = ({ text = " Don’t have an Account? ", mode = "Register"}) => {
    return( 
    <Link to="/register"><FooterLine text={text} mode={mode} /></Link>
    )
}

export  const FooterLogin = ({ text= "Already have an Account? ", mode="Signin"}) => {
    return (
    <Link to="/login"><FooterLine text={text} mode={mode} /></Link>
    )
}