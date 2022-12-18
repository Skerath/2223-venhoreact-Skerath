import './Alert.css';

const defaultStylingOptions = {margin: "15vw"}

export function Message({styling, message}) {
    if (message) {
        return (
            <div role={"alert"} className="alert alert-light text-center fadeIn"
                 style={styling ? styling : defaultStylingOptions}>
                <h4 className="mb-3">{message}</h4>
                <hr/>
                <h6>If you believe this shouldn't have happened, please contact me <a href="https://discord.com/users/874720684524339343"
                                                                 className="alert-link">on Discord</a>.</h6>
            </div>
        );
    }

    return null;
}