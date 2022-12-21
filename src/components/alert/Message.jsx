import './Alert.css';

const defaultStylingOptions = {margin: "15vw"}

export function Message({children, styling, message}) {
    return (
        <div role={"alert"} className="alert alert-light text-center align-items-center fadeIn"
             style={styling ? styling : defaultStylingOptions}>
            {message}
            {children}
        </div>
    );
}