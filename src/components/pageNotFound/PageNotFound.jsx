import {NavLink} from "react-router-dom";

export function PageNotFound() {
    return (
        <div role={"alert"} className="alert alert-light text-center fadeIn"
             style={{marginLeft: "15vw", marginRight: "15vw", marginTop: "20vh", marginBottom: "50vh"}}>
            <h3><strong>This page cannot be found. Perhaps it got moved or deleted?</strong></h3>
            <hr/>
            <h6>Let's get you back to the <NavLink className="alert-link" as={NavLink} to="/"
                                                   replace>homepage</NavLink>.</h6>
        </div>
    );
}
