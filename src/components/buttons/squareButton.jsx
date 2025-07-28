


export default function SquareButton({ value, style, type, id }) {
    return (
        <button className="square-button" type={type} id={id} style={style}>{value}</button>)

}

export const OkButton = () => {
    return <SquareButton
        value="OK" id="ok-squareButton" type="submit"
        style={{
            width: "12rem",
            height: "3.8rem",
            flexShrink: 0,
            backgroundColor: "rgb(153, 11, 158)",
            padding: "1rem",
            border: "0.1rem rgb(138, 18, 118) solid",
            borderRadius: "1.4rem",
            fontSize: "1.2rem",
            fontWeight: 700,
            letterSpacing: "9%",
            textAlign: "center",
            justifyContent: "center",
            color: "rgb(255, 255, 255)",
            fontFamily: "'Poppins', sans-serif",
            cursor: "pointer",
        }} />

}
export const LoginButton = () => {
    return <SquareButton
        value="LOGIN" id="login-squareButton" type="submit"
        style={{ 
            marginTop: "2rem", 
            width: "11rem", 
            height: "3.5rem", 
            backgroundColor: "rgb(153, 11, 158)", 
            border: "0.1rem rgb(138, 18, 118) solid", 
            borderRadius: "1em", 
            fontSize: "1rem", 
            fontWeight: 800, 
            letterSpacing: "5%", 
            textAlign: "center", 
            color: "rgb(255, 255, 255)",
            cursor: "pointer",
            }} />
}