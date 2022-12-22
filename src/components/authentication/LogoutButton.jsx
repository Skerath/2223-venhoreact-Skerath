import {useAuth0} from '@auth0/auth0-react';
import Button from "react-bootstrap/Button";

function LogoutButton() {
    const {logout} = useAuth0();
    return (
        <Button variant="outline-dark"
                className="text-muted"
                style={{padding: 8, maxHeight: "40px"}}
                onClick={() => logout({returnTo: window.location.origin,})}>
            Log out
        </Button>
    );
}

export default LogoutButton;