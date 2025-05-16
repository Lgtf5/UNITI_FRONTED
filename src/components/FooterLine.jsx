function FooterLine({text, mode}) {
 
    return (
        <div>
            <footer className='footer-container'>
                <p className='footer-line'>{text}
                    <a className='footer-ico'>{mode}</a>
                </p>
            </footer>
        </div>
    )
}

export const FooterRegister = ({ text = " Don’t have an Account? ", mode = "Register"}) => {
    return <FooterLine text={text} mode={mode} />
}

export const FooterLogin = ({ text= "Already have an Account? ", mode="Signin"}) => {
    return <FooterLine text={text} mode={mode} />
}