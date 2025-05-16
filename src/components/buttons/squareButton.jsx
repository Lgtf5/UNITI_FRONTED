


export default function SquareButton({value, style}) {
    return (
    <button className="square-button" >{value}</button>)
    
}

export const OkButton = () => {
    return <SquareButton 
    value="OK" className="ok-button"/>

}
export const LoginButton = () => {
    return <SquareButton 
    value="LOGIN" className="login-button" />
}