import {NavLink} from "react-router-dom";
import Alert from "react-bootstrap/Alert";

export function PageNotFound() {
    return (
        <Alert role={"alert"} variant="light" className="text-center fadeIn"
               style={{marginLeft: "15vw", marginRight: "15vw", marginTop: "20vh", marginBottom: "50vh"}}>
            <h3><strong>This page cannot be found. Perhaps it got moved or deleted?</strong></h3>
            <hr/>
            <h6>Let's get you back to the <Alert.Link as={NavLink} to="/" replace>homepage</Alert.Link>.</h6>
        </Alert>
    );
}
