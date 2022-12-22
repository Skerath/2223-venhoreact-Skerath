import {useAuth0} from '@auth0/auth0-react';
import {useCallback} from 'react';
import Button from "react-bootstrap/Button";

function LoginButton() {
    const {loginWithRedirect} = useAuth0();

    const handleLogin = useCallback(
        async () => {
            loginWithRedirect();
        },
        [loginWithRedirect],
    );

    return (
        <Button variant="outline-dark"
                className="text-muted"
                style={{padding: 8, maxHeight: "40px"}}
                onClick={handleLogin}>
            Log in
        </Button>
    );
}

export default LoginButton;