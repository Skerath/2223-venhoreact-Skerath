import './Alert.css';

const defaultStylingOptions = {margin: "15vw"}

export const Error = ({styling, error}) => {
    if (error) {
        return (
                <div role={"alert"} className="alert alert-danger text-center fadeIn"
                     style={styling ? styling : defaultStylingOptions}>
                    <h3 className="alert-heading"><strong>An error occured:&nbsp;</strong></h3>
                    <h4 className="mb-3">{error.message || JSON.stringify(error)}</h4>
                    <hr/>
                    <h6>If this error persists, please contact me <a href="https://discord.com/users/874720684524339343"
                                                                     className="alert-link">on Discord</a>.</h6>
                </div>
        );
    }

    return null;
};